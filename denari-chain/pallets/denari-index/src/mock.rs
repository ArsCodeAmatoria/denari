use crate as pallet_denari_index;
use frame_support::{
	parameter_types,
	traits::{ConstU32, ConstU64, EnsureOrigin},
};
use frame_system as system;
use sp_core::H256;
use sp_runtime::{
	testing::Header,
	traits::{BlakeTwo256, IdentityLookup},
};

type UncheckedExtrinsic = frame_system::mocking::MockUncheckedExtrinsic<Test>;
type Block = frame_system::mocking::MockBlock<Test>;

frame_support::construct_runtime!(
	pub enum Test where
		Block = Block,
		NodeBlock = Block,
		UncheckedExtrinsic = UncheckedExtrinsic,
	{
		System: frame_system,
		DenariIndex: pallet_denari_index,
	}
);

impl system::Config for Test {
	type BaseCallFilter = frame_support::traits::Everything;
	type BlockWeights = ();
	type BlockLength = ();
	type RuntimeOrigin = RuntimeOrigin;
	type RuntimeCall = RuntimeCall;
	type Index = u64;
	type BlockNumber = u64;
	type Hash = H256;
	type Hashing = BlakeTwo256;
	type AccountId = u64;
	type Lookup = IdentityLookup<Self::AccountId>;
	type Header = Header;
	type RuntimeEvent = RuntimeEvent;
	type BlockHashCount = ConstU64<250>;
	type DbWeight = ();
	type Version = ();
	type PalletInfo = PalletInfo;
	type AccountData = ();
	type OnNewAccount = ();
	type OnKilledAccount = ();
	type SystemWeightInfo = ();
	type SS58Prefix = ();
	type OnSetCode = ();
	type MaxConsumers = ConstU32<16>;
}

// Mock oracle origin that allows only account ID 1 to submit CPI values
pub struct MockOracleOrigin;
impl EnsureOrigin<RuntimeOrigin> for MockOracleOrigin {
	type Success = ();

	fn try_origin(o: RuntimeOrigin) -> Result<Self::Success, RuntimeOrigin> {
		let result = frame_system::ensure_signed(o.clone());
		match result {
			Ok(account_id) if account_id == 1 => Ok(()),
			_ => Err(o),
		}
	}

	#[cfg(feature = "runtime-benchmarks")]
	fn successful_origin() -> RuntimeOrigin {
		RuntimeOrigin::signed(1)
	}
}

parameter_types! {
	pub const MaxHistoricalEntries: u32 = 100;
}

// Mock timestamp implementation
pub struct MockTime;
impl frame_support::traits::Time for MockTime {
	type Moment = u64;

	fn now() -> Self::Moment {
		0
	}
}

impl pallet_denari_index::Config for Test {
	type RuntimeEvent = RuntimeEvent;
	type OracleOrigin = MockOracleOrigin;
	type Moment = u64;
	type TimeProvider = MockTime;
	type MaxHistoricalEntries = MaxHistoricalEntries;
}

// Build genesis storage
pub fn new_test_ext() -> sp_io::TestExternalities {
	system::GenesisConfig::default().build_storage::<Test>().unwrap().into()
} 