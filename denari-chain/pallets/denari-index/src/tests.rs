use crate::{mock::*, Error, Event};
use frame_support::{assert_noop, assert_ok};
use sp_arithmetic::fixed_point::FixedU128;
use sp_runtime::DispatchError;

#[test]
fn initial_cpi_update_works() {
	new_test_ext().execute_with(|| {
		// Submit initial CPI value as oracle
		let initial_cpi = 300_000; // 300.000
		assert_ok!(DenariIndex::submit_cpi_value(RuntimeOrigin::signed(1), initial_cpi));
		
		// Check latest CPI
		let latest = DenariIndex::latest_cpi();
		assert_eq!(latest.value, initial_cpi);
		assert_eq!(latest.pct_change, 0);
		
		// Check peg multiplier (should be 1.0)
		let expected_multiplier = FixedU128::from_parts(1_000_000_000_000_000_000u128, 0);
		assert_eq!(latest.peg_multiplier, expected_multiplier);
		assert_eq!(DenariIndex::current_peg_multiplier(), expected_multiplier);
		
		// Check historical entries
		let historical = DenariIndex::historical_cpi();
		assert_eq!(historical.len(), 1);
		assert_eq!(historical[0].value, initial_cpi);
		
		// Check events
		System::assert_has_event(RuntimeEvent::DenariIndex(Event::CPIUpdated {
			cpi_value: initial_cpi,
			pct_change: 0,
			peg_multiplier: expected_multiplier,
		}));
		
		System::assert_has_event(RuntimeEvent::DenariIndex(Event::PegMultiplierUpdated {
			old_multiplier: FixedU128::zero(),
			new_multiplier: expected_multiplier,
		}));
	});
}

#[test]
fn subsequent_cpi_update_works() {
	new_test_ext().execute_with(|| {
		// Submit initial CPI value
		let initial_cpi = 300_000; // 300.000
		assert_ok!(DenariIndex::submit_cpi_value(RuntimeOrigin::signed(1), initial_cpi));
		
		// Submit a second CPI value with a 0.5% increase
		let second_cpi = 301_500; // 301.500
		assert_ok!(DenariIndex::submit_cpi_value(RuntimeOrigin::signed(1), second_cpi));
		
		// Check latest CPI
		let latest = DenariIndex::latest_cpi();
		assert_eq!(latest.value, second_cpi);
		
		// Expected 0.5% increase (represented as 500)
		assert_eq!(latest.pct_change, 500);
		
		// Check peg multiplier (should be 1.005)
		// The multiplier calculation should result in 1.0 * (1 + 0.005) = 1.005
		let expected_multiplier = FixedU128::from_parts(1_005_000_000_000_000_000u128, 0);
		assert_eq!(DenariIndex::current_peg_multiplier(), expected_multiplier);
		
		// Check historical entries
		let historical = DenariIndex::historical_cpi();
		assert_eq!(historical.len(), 2);
		assert_eq!(historical[0].value, second_cpi); // Most recent first
		assert_eq!(historical[1].value, initial_cpi);
	});
}

#[test]
fn cpi_decrease_works() {
	new_test_ext().execute_with(|| {
		// Submit initial CPI value
		let initial_cpi = 300_000; // 300.000
		assert_ok!(DenariIndex::submit_cpi_value(RuntimeOrigin::signed(1), initial_cpi));
		
		// Submit a second CPI value with a 0.5% decrease
		let second_cpi = 298_500; // 298.500
		assert_ok!(DenariIndex::submit_cpi_value(RuntimeOrigin::signed(1), second_cpi));
		
		// Check latest CPI
		let latest = DenariIndex::latest_cpi();
		assert_eq!(latest.value, second_cpi);
		
		// Expected 0.5% decrease (represented as -500)
		assert_eq!(latest.pct_change, -500);
		
		// Check peg multiplier (should be 0.995)
		// The multiplier calculation should result in 1.0 * (1 - 0.005) = 0.995
		let expected_multiplier = FixedU128::from_parts(995_000_000_000_000_000u128, 0);
		assert_eq!(DenariIndex::current_peg_multiplier(), expected_multiplier);
	});
}

#[test]
fn only_oracle_can_update() {
	new_test_ext().execute_with(|| {
		// Try to submit CPI value as non-oracle (account 2)
		assert_noop!(
			DenariIndex::submit_cpi_value(RuntimeOrigin::signed(2), 300_000),
			DispatchError::BadOrigin
		);
		
		// Submit as oracle (account 1) should work
		assert_ok!(DenariIndex::submit_cpi_value(RuntimeOrigin::signed(1), 300_000));
	});
}

#[test]
fn invalid_cpi_rejected() {
	new_test_ext().execute_with(|| {
		// Try to submit zero CPI value
		assert_noop!(
			DenariIndex::submit_cpi_value(RuntimeOrigin::signed(1), 0),
			Error::<Test>::InvalidCPIValue
		);
	});
}

#[test]
fn historical_entries_limit_respected() {
	new_test_ext().execute_with(|| {
		// Submit max+1 CPI values and ensure only MaxHistoricalEntries are kept
		let max_entries = MaxHistoricalEntries::get() as usize;
		
		// Submit initial CPI value
		assert_ok!(DenariIndex::submit_cpi_value(RuntimeOrigin::signed(1), 300_000));
		
		// Submit max more CPI values
		for i in 1..=max_entries {
			let cpi_value = 300_000 + (i as u32 * 1_000);
			assert_ok!(DenariIndex::submit_cpi_value(RuntimeOrigin::signed(1), cpi_value));
		}
		
		// Check historical entries
		let historical = DenariIndex::historical_cpi();
		assert_eq!(historical.len(), max_entries);
		
		// The first entry should be the most recent
		assert_eq!(historical[0].value, 300_000 + (max_entries as u32 * 1_000));
	});
} 