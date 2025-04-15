#![cfg_attr(not(feature = "std"), no_std)]

/// A pallet for tracking CPI data and calculating the Denari peg multiplier
pub use pallet::*;

#[cfg(test)]
mod mock;

#[cfg(test)]
mod tests;

#[cfg(feature = "runtime-benchmarks")]
mod benchmarking;

#[frame_support::pallet]
pub mod pallet {
	use frame_support::{
		pallet_prelude::*,
		traits::{EnsureOrigin, Time},
	};
	use frame_system::pallet_prelude::*;
	use sp_arithmetic::{fixed_point::FixedU128, traits::Zero, Permill};
	use sp_std::vec::Vec;

	/// The CPI entry struct containing monthly CPI data and calculated values
	#[pallet::storage_value]
	#[derive(Clone, Encode, Decode, Eq, PartialEq, RuntimeDebug, Default, TypeInfo, MaxEncodedLen)]
	pub struct CPIEntry<Moment> {
		/// CPI value, represented as a fixed point number with 3 decimal places
		/// For example, 302.124 would be stored as 302124
		pub value: u32,
		/// Percentage change from previous month (can be negative)
		/// Represented as a signed value with 3 decimal places
		/// For example, 0.5% would be stored as 500
		pub pct_change: i32,
		/// The peg multiplier calculated from the CPI change
		/// Represented as a fixed point number with 6 decimal places
		pub peg_multiplier: FixedU128,
		/// The timestamp when this entry was recorded
		pub timestamp: Moment,
	}

	#[pallet::pallet]
	pub struct Pallet<T>(_);

	/// Configuration trait for the pallet-denari-index
	#[pallet::config]
	pub trait Config: frame_system::Config {
		/// The overarching event type
		type RuntimeEvent: From<Event<Self>> + IsType<<Self as frame_system::Config>::RuntimeEvent>;

		/// Origin that is allowed to update the CPI values (the oracle)
		type OracleOrigin: EnsureOrigin<Self::RuntimeOrigin>;

		/// Type for representing a moment or point in time
		type Moment: Parameter
			+ Default
			+ Copy
			+ MaxEncodedLen
			+ scale_info::StaticTypeInfo
			+ Into<u64>;

		/// The time provider
		type TimeProvider: Time<Moment = Self::Moment>;

		/// Maximum number of historical entries to store
		#[pallet::constant]
		type MaxHistoricalEntries: Get<u32>;
	}

	/// Stores the latest CPI entry
	#[pallet::storage]
	#[pallet::getter(fn latest_cpi)]
	pub type LatestCPI<T: Config> = StorageValue<_, CPIEntry<T::Moment>, ValueQuery>;

	/// Stores historical CPI entries, with the most recent entry first
	#[pallet::storage]
	#[pallet::getter(fn historical_cpi)]
	pub type HistoricalCPI<T: Config> =
		StorageValue<_, BoundedVec<CPIEntry<T::Moment>, T::MaxHistoricalEntries>, ValueQuery>;

	/// Stores the current peg multiplier
	#[pallet::storage]
	#[pallet::getter(fn current_peg_multiplier)]
	pub type CurrentPegMultiplier<T: Config> = StorageValue<_, FixedU128, ValueQuery>;

	#[pallet::event]
	#[pallet::generate_deposit(pub(super) fn deposit_event)]
	pub enum Event<T: Config> {
		/// A new CPI value was recorded
		/// [cpi_value, pct_change, peg_multiplier]
		CPIUpdated {
			cpi_value: u32,
			pct_change: i32,
			peg_multiplier: FixedU128,
		},
		/// The peg multiplier was updated
		/// [old_multiplier, new_multiplier]
		PegMultiplierUpdated {
			old_multiplier: FixedU128,
			new_multiplier: FixedU128,
		},
	}

	#[pallet::error]
	pub enum Error<T> {
		/// The CPI value is invalid (must be > 0)
		InvalidCPIValue,
		/// The percentage change calculation underflowed or overflowed
		PercentChangeCalculationError,
		/// The peg multiplier calculation failed
		PegCalculationError,
		/// The oracle provided an invalid update
		InvalidOracleUpdate,
	}

	#[pallet::call]
	impl<T: Config> Pallet<T> {
		/// Submit a new CPI value (restricted to oracle)
		///
		/// * `cpi_value` - The new CPI value, multiplied by 1000 (3 decimal places)
		///    For example, a CPI of 302.124 would be submitted as 302124
		#[pallet::call_index(0)]
		#[pallet::weight(Weight::from_parts(10_000, 0) + T::DbWeight::get().writes(3))]
		pub fn submit_cpi_value(origin: OriginFor<T>, cpi_value: u32) -> DispatchResult {
			// Ensure caller is authorized oracle
			T::OracleOrigin::ensure_origin(origin)?;

			// Validate the CPI value
			ensure!(cpi_value > 0, Error::<T>::InvalidCPIValue);

			// Get the current time
			let now = T::TimeProvider::now();

			// Get the latest CPI entry
			let latest_cpi = Self::latest_cpi();

			// Calculate percent change and new peg multiplier
			let (pct_change, new_peg_multiplier) = 
				if latest_cpi.value == 0 {
					// Initial case, we set initial multiplier to 1.0
					(0, FixedU128::from_parts(1_000_000_000_000_000_000u128, 0)) 
				} else {
					// Calculate percent change with 3 decimal places
					let prev_value = latest_cpi.value;
					let pct_change = Self::calculate_percent_change(prev_value, cpi_value)?;
					
					// Calculate new peg multiplier based on the percent change
					let multiplier = Self::calculate_peg_multiplier(latest_cpi.peg_multiplier, pct_change)?;
					
					(pct_change, multiplier)
				};

			// Create new CPI entry
			let new_entry = CPIEntry {
				value: cpi_value,
				pct_change,
				peg_multiplier: new_peg_multiplier,
				timestamp: now,
			};

			// Update the latest CPI entry
			<LatestCPI<T>>::put(&new_entry);

			// Update historical entries
			Self::update_historical_entries(&new_entry)?;

			// Update current peg multiplier
			let old_multiplier = Self::current_peg_multiplier();
			<CurrentPegMultiplier<T>>::put(new_peg_multiplier);

			// Emit events
			Self::deposit_event(Event::CPIUpdated {
				cpi_value,
				pct_change,
				peg_multiplier: new_peg_multiplier,
			});
			
			Self::deposit_event(Event::PegMultiplierUpdated {
				old_multiplier,
				new_multiplier: new_peg_multiplier,
			});

			Ok(())
		}
	}

	impl<T: Config> Pallet<T> {
		/// Calculate the percentage change between two CPI values
		/// Returns the percentage change with 3 decimal places as i32
		fn calculate_percent_change(previous: u32, current: u32) -> Result<i32, DispatchError> {
			// Convert inputs to signed integers to handle negative changes
			let prev = previous as i64;
			let curr = current as i64;

			// Calculate the difference
			let diff = curr.checked_sub(prev).ok_or(Error::<T>::PercentChangeCalculationError)?;

			// Calculate percentage change: (current - previous) / previous * 100000 (3 decimal places)
			// For example, 0.5% would be represented as 500
			let pct_change = diff
				.checked_mul(100_000)
				.ok_or(Error::<T>::PercentChangeCalculationError)?
				.checked_div(prev)
				.ok_or(Error::<T>::PercentChangeCalculationError)?;

			// Convert to i32, ensuring it fits
			let pct_change_i32 = pct_change.try_into().map_err(|_| Error::<T>::PercentChangeCalculationError)?;

			Ok(pct_change_i32)
		}

		/// Calculate the new peg multiplier based on the previous multiplier and percentage change
		fn calculate_peg_multiplier(
			previous_multiplier: FixedU128,
			pct_change: i32,
		) -> Result<FixedU128, DispatchError> {
			// Convert percent change to a factor to multiply with
			// pct_change is in parts per 100,000, so we need to divide by 100,000
			let pct_change_f = pct_change as i128;
			let adjustment_factor = FixedU128::from_inner(
				(pct_change_f.checked_mul(10_000_000_000_000_000).ok_or(Error::<T>::PegCalculationError)?)
					.checked_div(100_000)
					.ok_or(Error::<T>::PegCalculationError)? as u128,
			);

			let unit = FixedU128::from_parts(1_000_000_000_000_000_000u128, 0);

			let final_factor = if pct_change >= 0 {
				// For positive change: 1 + adjustment_factor
				unit.checked_add(&adjustment_factor).ok_or(Error::<T>::PegCalculationError)?
			} else {
				// For negative change: 1 - adjustment_factor (already negative)
				unit.checked_add(&adjustment_factor).ok_or(Error::<T>::PegCalculationError)?
			};

			// Multiply previous multiplier by the factor
			let new_multiplier = previous_multiplier
				.checked_mul(&final_factor)
				.ok_or(Error::<T>::PegCalculationError)?;

			Ok(new_multiplier)
		}

		/// Update the historical CPI entries storage
		fn update_historical_entries(entry: &CPIEntry<T::Moment>) -> DispatchResult {
			// Get current historical entries
			let mut historical = Self::historical_cpi();

			// Add new entry at the beginning (most recent first)
			historical.try_insert(0, entry.clone()).map_err(|_| Error::<T>::InvalidOracleUpdate)?;

			// Update storage
			<HistoricalCPI<T>>::put(historical);

			Ok(())
		}
	}
} 