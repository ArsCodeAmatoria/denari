# Denari

Denari is a crypto-native **unit of account** built on Substrate and inspired by Chile's **Unidad de Fomento (UF)** — an inflation-adjusted currency used in real estate, savings, and long-term contracts. Denari brings that same concept to the blockchain era, using the **U.S. Consumer Price Index (CPI)** as its peg to maintain purchasing power over time.

## Key Features
- Inflation-pegged to **U.S. CPI**
- On-chain transparency and governance
- Ideal for smart contracts, salaries, DeFi, and long-term savings
- Powered by a custom Substrate chain with the native token `DNR`

## Repository Structure

This monorepo contains two main components:

### `denari-chain`
A Substrate-based blockchain implementation with:
- Native token: `DNR`
- Custom `pallet-denari-index` for CPI tracking and peg calculation
- Standard Substrate governance modules
- Configurable for local development or Kusama deployment

### `denari-site`
A Next.js frontend providing:
- Project information and educational content
- CPI and peg multiplier visualization
- Governance interface
- Reference implementation for developers

## Development

See the individual READMEs in each project directory for setup and development instructions. 