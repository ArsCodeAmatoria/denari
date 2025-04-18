export default function KeyConceptsPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Key Concepts</h1>

      <p>This page explains the fundamental concepts behind Denari and how it works as an inflation-indexed cryptocurrency.</p>

      <h2>Inflation Indexing</h2>

      <p>At its core, Denari is designed to maintain purchasing power by automatically adjusting its supply based on inflation data:</p>

      <ul>
        <li><strong>Price Stability</strong>: Unlike traditional cryptocurrencies that aim for a fixed supply, Denari's supply adjusts to maintain consistent purchasing power.</li>
        <li><strong>Inflation Oracle</strong>: Denari uses decentralized oracle networks to bring real-world inflation data on-chain.</li>
        <li><strong>Algorithmic Supply Adjustment</strong>: Based on oracle data, the protocol automatically issues or burns tokens to maintain purchasing power parity.</li>
      </ul>

      <h2>The Inflation Index</h2>

      <p>Denari tracks a carefully selected basket of goods and services to create a reliable inflation index:</p>

      <ul>
        <li><strong>Basket Composition</strong>: The index includes essential categories like food, housing, transportation, healthcare, and education.</li>
        <li><strong>Geographic Weighting</strong>: Initially based on global averages with plans to support regional indices.</li>
        <li><strong>Update Frequency</strong>: The index is updated on a monthly basis to maintain accuracy while avoiding excessive volatility.</li>
      </ul>

      <h2>Tokenomics</h2>

      <p>Denari's economic design incorporates several key principles:</p>

      <ul>
        <li><strong>Elastic Supply</strong>: The total supply of Denari expands and contracts based on inflation data.</li>
        <li><strong>Proportional Adjustments</strong>: When supply adjusts, all holders' balances are affected proportionally.</li>
        <li><strong>Seigniorage Distribution</strong>: New tokens created during expansion are distributed to network participants based on governance-defined parameters.</li>
      </ul>

      <h2>Governance</h2>

      <p>Denari operates as a decentralized autonomous organization (DAO):</p>

      <ul>
        <li><strong>On-Chain Voting</strong>: Token holders can participate in governance by voting on proposals.</li>
        <li><strong>Parameter Adjustment</strong>: Community governance can modify system parameters like oracle trust thresholds and index composition.</li>
        <li><strong>Treasury Management</strong>: A portion of seigniorage is directed to a treasury managed by governance.</li>
      </ul>

      <h2>Technology Stack</h2>

      <p>Denari is built on modern blockchain technology:</p>

      <ul>
        <li><strong>Substrate Framework</strong>: Provides a flexible, upgradeable blockchain architecture.</li>
        <li><strong>Pallets</strong>: Modular components that implement specific functionality like the inflation index, token adjustments, and governance.</li>
        <li><strong>Cross-Chain Compatibility</strong>: Designed to interact with other blockchains and DeFi ecosystems.</li>
      </ul>

      <h2>Consensus Mechanism</h2>

      <p>Denari uses a hybrid consensus system:</p>

      <ul>
        <li><strong>Nominated Proof-of-Stake (NPoS)</strong>: Secures the network through validator nodes selected by token holders.</li>
        <li><strong>Security</strong>: The system is designed to remain secure even if up to one-third of validators are malicious.</li>
        <li><strong>Validator Economics</strong>: Validators are incentivized through inflationary rewards and transaction fees.</li>
      </ul>

      <h2>Use Cases</h2>

      <p>Denari enables several powerful use cases:</p>

      <ul>
        <li><strong>Store of Value</strong>: Preserves purchasing power over time.</li>
        <li><strong>Inflation-Protected Savings</strong>: Digital alternative to inflation-indexed bonds.</li>
        <li><strong>Stable Medium of Exchange</strong>: Suitable for day-to-day transactions and commerce.</li>
        <li><strong>DeFi Foundation</strong>: Serves as a building block for decentralized finance applications that need inflation protection.</li>
      </ul>
    </div>
  );
} 