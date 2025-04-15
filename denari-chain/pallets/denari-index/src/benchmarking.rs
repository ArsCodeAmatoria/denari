#![cfg(feature = "runtime-benchmarks")]

use super::*;
use frame_benchmarking::{benchmarks, impl_benchmark_test_suite, whitelisted_caller};
use frame_system::RawOrigin;

benchmarks! {
    submit_cpi_value {
        let caller: T::AccountId = whitelisted_caller();
        let cpi_value: u32 = 300_000; // 300.000
    }: _(RawOrigin::Signed(caller), cpi_value)
    verify {
        let latest = <LatestCPI<T>>::get();
        assert_eq!(latest.value, cpi_value);
    }

    impl_benchmark_test_suite!(Pallet, crate::mock::new_test_ext(), crate::mock::Test);
} 