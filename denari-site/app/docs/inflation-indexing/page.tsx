export default function InflationIndexingPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Inflation Indexing</h1>

      <p>This page explains how Denari's inflation indexing mechanism works to maintain the cryptocurrency's purchasing power over time.</p>

      <h2>Overview</h2>

      <p>Denari is designed to be the world's first truly inflation-resistant cryptocurrency. Unlike other digital assets that can lose purchasing power due to inflation, Denari's innovative indexing mechanism automatically adjusts the token supply in response to real-world inflation data, ensuring that the value of your holdings maintains consistent purchasing power over time.</p>

      <h2>How Inflation Indexing Works</h2>

      <h3>Data Collection</h3>

      <p>At the core of Denari's inflation indexing system is a reliable source of inflation data:</p>

      <ol>
        <li><strong>Multiple Data Sources</strong>: Denari collects inflation data from several reputable sources, including government statistical agencies and independent economic research institutions.</li>
        <li><strong>Consumer Price Index (CPI)</strong>: The primary metric used is the Consumer Price Index, which measures the average change in prices paid by consumers for goods and services over time.</li>
        <li><strong>Oracle Network</strong>: A decentralized network of oracles brings this real-world data onto the blockchain in a secure, transparent, and tamper-resistant way.</li>
      </ol>

      <h3>The Denari Index</h3>

      <p>The collected data is processed to create the Denari Index:</p>

      <ol>
        <li><strong>Weighted Calculation</strong>: Different inflation metrics are weighted according to their reliability and relevance to create a comprehensive inflation index.</li>
        <li><strong>Geographic Diversity</strong>: Data from multiple regions is incorporated to ensure the index is not overly influenced by conditions in any single economy.</li>
        <li><strong>Validation Mechanism</strong>: Before being used to adjust the token supply, the index values undergo a validation process to prevent manipulation or errors.</li>
      </ol>

      <h3>Supply Adjustment Mechanism</h3>

      <p>Denari uses an elastic supply model to maintain purchasing power:</p>

      <ol>
        <li><strong>Rebase Operations</strong>: At predetermined intervals (typically monthly), the protocol performs "rebases" that adjust the total token supply.</li>
        <li><strong>Proportional Distribution</strong>: When the supply expands in response to inflation, new tokens are distributed proportionally to all token holders. This means if you hold 1% of the total supply before a rebase, you'll still hold 1% after the rebase, but your actual token count will increase.</li>
        <li><strong>Supply Contraction</strong>: In rare cases of deflation, the supply can also contract, though this is historically less common than expansion.</li>
      </ol>

      <h2>Example Scenario</h2>

      <p>Let's consider a practical example of how inflation indexing works for Denari holders:</p>

      <ol>
        <li><strong>Initial State</strong>: Alice holds 100 Denari tokens when the annual inflation rate is 3%.</li>
        <li><strong>Inflation Event</strong>: Official data shows that prices have risen by 3% over the past year.</li>
        <li><strong>Rebase Process</strong>: The Denari protocol initiates a rebase, expanding the token supply by 3%.</li>
        <li><strong>Result</strong>: After the rebase, Alice now holds 103 Denari tokens. The purchasing power of her holdings remains the same as it was before inflation occurred.</li>
      </ol>

      <h2>Benefits of Inflation Indexing</h2>

      <p>Denari's inflation indexing mechanism provides several key advantages:</p>

      <ol>
        <li><strong>Preservation of Value</strong>: By adjusting to inflation, Denari maintains its purchasing power over time, unlike fixed-supply cryptocurrencies.</li>
        <li><strong>Economic Stability</strong>: The predictable and transparent nature of the adjustment mechanism provides stability for users and applications built on Denari.</li>
        <li><strong>Reduced Volatility</strong>: While price fluctuations due to market forces still exist, the indexing mechanism helps mitigate the long-term decline in purchasing power experienced by other assets.</li>
        <li><strong>Future-Proof Design</strong>: The system is designed to adapt to various inflation scenarios, from moderate inflation to more extreme cases.</li>
      </ol>

      <h2>Technical Implementation</h2>

      <p>At a technical level, Denari implements inflation indexing through:</p>

      <ol>
        <li><strong>Dedicated Pallets</strong>: Custom modules in the Substrate framework handle the data collection, validation, and supply adjustment processes.</li>
        <li><strong>Smart Contract Integration</strong>: For interoperability with other blockchains, inflation data and adjustment parameters are accessible via smart contracts.</li>
        <li><strong>Governance Oversight</strong>: While the system is largely automated, governance mechanisms allow for parameter adjustments and improvements to the indexing methodology.</li>
      </ol>

      <h2>Looking Ahead</h2>

      <p>The Denari team continuously refines the inflation indexing mechanism:</p>

      <ol>
        <li><strong>Ongoing Research</strong>: Economic research informs improvements to the weighting and calculation of the Denari Index.</li>
        <li><strong>Enhanced Oracle Network</strong>: Regular updates strengthen the security and accuracy of the inflation data oracle network.</li>
        <li><strong>Parameter Optimization</strong>: Governance proposals can adjust parameters such as rebase frequency and validation thresholds to optimize performance.</li>
      </ol>

      <p>By providing a reliable hedge against inflation, Denari aims to establish itself as an essential asset for preserving wealth in an uncertain economic landscape.</p>
    </div>
  );
} 