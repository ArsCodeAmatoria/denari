export default function TechnicalPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Technical Documentation</h1>

      <p>This page provides technical details about Denari's architecture, implementation, and API for developers who want to build on or contribute to the Denari protocol.</p>

      <h2>Architecture Overview</h2>

      <p>Denari is built on a modular architecture using the Substrate framework, which provides several key advantages:</p>

      <ul>
        <li><strong>Upgradability</strong>: Runtime can be upgraded without hard forks</li>
        <li><strong>Modularity</strong>: Functionality is divided into specialized pallets</li>
        <li><strong>Interoperability</strong>: Native compatibility with the Polkadot ecosystem</li>
        <li><strong>Flexibility</strong>: Custom runtime execution environment</li>
      </ul>

      <p>The architecture consists of several layers:</p>

      <pre className="bg-slate-800 text-slate-50 p-4 rounded-md overflow-auto">
        {`┌───────────────────────────────────────────────────┐
│                   Applications                     │
│    (Wallets, Explorers, dApps, Integrations)      │
└───────────────────────────────────────────────┬───┘
                                                │
┌───────────────────────────────────────────────▼───┐
│                  Denari Runtime                    │
├───────────────┬───────────────┬──────────────┬────┤
│ Inflation     │ Governance    │ Treasury     │    │
│ Index Pallet  │ Pallet        │ Pallet       │ .. │
├───────────────┼───────────────┼──────────────┼────┤
│ Oracle        │ Balances      │ Assets       │    │
│ Pallet        │ Pallet        │ Pallet       │ .. │
└───────────────┴───────────────┴──────────────┴────┘
                                                │
┌───────────────────────────────────────────────▼───┐
│                Substrate Framework                 │
│   (Consensus, Networking, Storage, Execution)      │
└───────────────────────────────────────────────────┘`}
      </pre>

      <h2>Core Pallets</h2>

      <h3>Inflation Index Pallet</h3>

      <p>The heart of Denari's inflation-resistance mechanism:</p>

      <ul>
        <li>Receives CPI data from the Oracle Pallet</li>
        <li>Calculates inflation adjustments</li>
        <li>Triggers supply adjustments</li>
        <li>Maintains historical index data</li>
      </ul>

      <p><strong>Key Functions</strong>:</p>
      <pre className="bg-slate-800 text-slate-50 p-4 rounded-md overflow-auto">
        {`// Calculate and execute a rebase operation based on the latest CPI data
pub fn execute_rebase() -> DispatchResult;

// Record a new CPI data point from oracles
pub fn record_cpi_data(data: CpiData) -> DispatchResult;

// Get the current inflation index value
pub fn get_current_index() -> Index;`}
      </pre>

      <h3>Oracle Pallet</h3>

      <p>Responsible for bringing off-chain inflation data on-chain:</p>

      <ul>
        <li>Manages a network of trusted data providers</li>
        <li>Aggregates data from multiple sources</li>
        <li>Performs outlier detection and data validation</li>
        <li>Provides consensus mechanism for data verification</li>
      </ul>

      <p><strong>Key Functions</strong>:</p>
      <pre className="bg-slate-800 text-slate-50 p-4 rounded-md overflow-auto">
        {`// Submit a new oracle report (restricted to authorized oracles)
pub fn submit_report(origin: OriginFor<T>, report: Report<T>) -> DispatchResult;

// Get the latest validated data point
pub fn get_latest_validated_data() -> Option<ValidatedData>;`}
      </pre>

      <h3>Governance Pallet</h3>

      <p>Enables the community to manage and upgrade the protocol:</p>

      <ul>
        <li>Proposal creation and voting</li>
        <li>Parameter adjustments</li>
        <li>Runtime upgrades</li>
        <li>Treasury disbursement</li>
      </ul>

      <h2>Technical Implementation Details</h2>

      <h3>Inflation Calculation</h3>

      <p>Denari uses a weighted average of multiple inflation metrics:</p>

      <pre className="bg-slate-800 text-slate-50 p-4 rounded-md overflow-auto">
        {`Denari Index = (CPI_US * w₁) + (CPI_EU * w₂) + (CPI_Global * w₃)`}
      </pre>

      <p>Where:</p>
      <ul>
        <li>CPI_X = Consumer Price Index for region X</li>
        <li>wᵢ = Weight assigned to each index (collectively summing to 1)</li>
      </ul>

      <h3>Token Supply Adjustment</h3>

      <p>When a rebase occurs:</p>

      <ol>
        <li>The system calculates the inflation rate since the last rebase</li>
        <li>Token balances are adjusted proportionally</li>
        <li>The adjustment is atomic and affects all token holders equally</li>
      </ol>

      <h3>Oracle Validation</h3>

      <p>Denari uses a robust validation approach for inflation data:</p>

      <ol>
        <li>Multiple independent oracles submit data</li>
        <li>Outliers beyond a specified standard deviation are discarded</li>
        <li>Remaining data points are weighted by oracle reputation</li>
        <li>A consensus value is calculated and used for rebasing</li>
      </ol>

      <h2>Smart Contract Integration</h2>

      <p>For developers looking to integrate with Denari on EVM-compatible chains:</p>

      <h3>Token Interface</h3>

      <p>The Denari token implements the ERC-20 standard with additional functions for rebasing:</p>

      <pre className="bg-slate-800 text-slate-50 p-4 rounded-md overflow-auto">
        {`// SPDX-License-Identifier: MIT
interface IDenariToken is IERC20 {
    // Get the inflation index value used for the last rebase
    function lastIndexValue() external view returns (uint256);
    
    // Get the timestamp of the last rebase
    function lastRebaseTime() external view returns (uint256);
    
    // Convert between normalized and denormalized amounts
    function normalizedToDenormalized(uint256 amount) external view returns (uint256);
    function denormalizedToNormalized(uint256 amount) external view returns (uint256);
}`}
      </pre>

      <h3>Oracle Interface</h3>

      <pre className="bg-slate-800 text-slate-50 p-4 rounded-md overflow-auto">
        {`interface IDenariOracle {
    // Get the latest CPI data
    function getLatestCpiData() external view returns (
        uint256 value,
        uint256 timestamp,
        uint8 decimals
    );
    
    // Get historical CPI data
    function getCpiDataAt(uint256 timestamp) external view returns (
        uint256 value,
        bool exists
    );
}`}
      </pre>

      <h2>API Reference</h2>

      <p>Denari provides several APIs for developers:</p>

      <h3>JSON-RPC Endpoints</h3>

      <pre className="bg-slate-800 text-slate-50 p-4 rounded-md overflow-auto">
        {`https://rpc.denari.io`}
      </pre>

      <p>Example queries:</p>

      <pre className="bg-slate-800 text-slate-50 p-4 rounded-md overflow-auto">
        {`// Get current inflation index
const currentIndex = await api.query.inflationIndex.currentIndex();

// Get historical index at specific block
const historicalIndex = await api.query.inflationIndex.indexHistory(blockNumber);

// Get pending governance proposals
const proposals = await api.query.governance.proposals();`}
      </pre>

      <h3>GraphQL API</h3>

      <pre className="bg-slate-800 text-slate-50 p-4 rounded-md overflow-auto">
        {`https://graph.denari.io/graphql`}
      </pre>

      <p>Example query:</p>

      <pre className="bg-slate-800 text-slate-50 p-4 rounded-md overflow-auto">
        {`query {
  rebases(first: 10, orderBy: timestamp, orderDirection: desc) {
    id
    timestamp
    oldIndex
    newIndex
    percentageChange
  }
  
  inflationMetrics(where: { timestamp_gt: "1640995200" }) {
    id
    timestamp
    yearOverYearChange
    monthOverMonthChange
  }
}`}
      </pre>

      <h2>Development Environment</h2>

      <p>To set up a local development environment:</p>

      <ol>
        <li>
          <p><strong>Prerequisites</strong>:</p>
          <ul>
            <li>Rust toolchain</li>
            <li>Node.js (for JS/TS integrations)</li>
            <li>Docker (optional, for containerized setup)</li>
          </ul>
        </li>

        <li>
          <p><strong>Clone the repository</strong>:</p>
          <pre className="bg-slate-800 text-slate-50 p-4 rounded-md overflow-auto">
            {`git clone https://github.com/denari-project/denari-chain.git
cd denari-chain`}
          </pre>
        </li>

        <li>
          <p><strong>Install dependencies</strong>:</p>
          <pre className="bg-slate-800 text-slate-50 p-4 rounded-md overflow-auto">
            {`cargo build`}
          </pre>
        </li>

        <li>
          <p><strong>Run a local development node</strong>:</p>
          <pre className="bg-slate-800 text-slate-50 p-4 rounded-md overflow-auto">
            {`cargo run --release -- --dev`}
          </pre>
        </li>

        <li>
          <p><strong>Run tests</strong>:</p>
          <pre className="bg-slate-800 text-slate-50 p-4 rounded-md overflow-auto">
            {`cargo test`}
          </pre>
        </li>
      </ol>

      <h2>Security Considerations</h2>

      <p>When integrating with Denari, consider these security best practices:</p>

      <ol>
        <li><strong>Rebase Handling</strong>: Applications should properly handle balance changes due to rebases</li>
        <li><strong>Oracle Data Verification</strong>: Verify oracle data using multiple sources when possible</li>
        <li><strong>Governance Proposals</strong>: Include timelocks for sensitive protocol changes</li>
        <li><strong>Smart Contract Integration</strong>: Handle potential rounding issues when converting between amounts</li>
      </ol>

      <h2>Contributing to Denari</h2>

      <p>We welcome contributions to the Denari protocol. To contribute:</p>

      <ol>
        <li><strong>Find an issue</strong>: Review open issues on our GitHub repository</li>
        <li><strong>Fork and clone</strong>: Create your own fork of the repository</li>
        <li><strong>Make changes</strong>: Implement your feature or fix with appropriate tests</li>
        <li><strong>Submit a PR</strong>: Open a pull request with a clear description of your changes</li>
      </ol>

      <p>For more detailed information, see our <a href="https://github.com/denari-project/denari-chain/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">Contributing Guide</a>.</p>
    </div>
  );
} 