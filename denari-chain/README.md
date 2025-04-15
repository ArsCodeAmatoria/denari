# Denari Chain

A Substrate-based blockchain implementation for the Denari inflation-indexed currency.

## Overview

Denari Chain is a custom Substrate blockchain with a focus on inflation indexing using the U.S. Consumer Price Index (CPI). The chain maintains a peg to CPI that adjusts the relative value of the DNR token to maintain purchasing power over time.

## Key Components

- **Native Token**: DNR, with an initial supply of 100 million tokens
- **Custom Pallets**:
  - `pallet-denari-index`: Stores and processes CPI data, calculates peg multipliers
- **Governance**:
  - Democracy, Council, and Treasury pallets for decentralized governance

## Architecture

The blockchain is built using [Substrate](https://substrate.io/), a modular framework for building custom blockchains. It's designed to be deployable as a parachain on Kusama but can also run as a standalone chain.

### pallet-denari-index

This custom pallet is responsible for:

- Storing monthly CPI values from the U.S. Consumer Price Index (CPI-U)
- Accepting CPI updates from an authorized oracle account
- Calculating and storing a `peg_multiplier` based on the monthly CPI percent change
- Exposing getter methods for CPI data and peg values
- Emitting events for CPI updates and peg changes

## Development

### Prerequisites

- Rust and Cargo
- Substrate development environment

### Building

```bash
# Clone the repository
git clone https://github.com/yourusername/denari.git
cd denari/denari-chain

# Build the node
cargo build --release
```

### Running

```bash
# Run a development node with temporary storage
./target/release/denari-node --dev

# Run with persistent storage
./target/release/denari-node --dev --base-path /tmp/my-custom-base-path
```

### Testing

```bash
# Run tests for all pallets
cargo test
```

## Deployment

The chain supports two main deployment configurations:

1. **Local Devnet**: For development and testing
2. **Kusama Parachain**: For production deployment

## License

Licensed under the [Apache License 2.0](LICENSE) 