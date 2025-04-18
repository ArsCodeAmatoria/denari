export default function CryptocurrencyComparisonPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Denari vs Other Cryptocurrencies</h1>

      <p>This page provides a detailed comparison between Denari and other popular cryptocurrencies, highlighting Denari's unique value proposition.</p>

      <h2>Fundamental Differences</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">Feature</th>
              <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">Denari</th>
              <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">Bitcoin</th>
              <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">Ethereum</th>
              <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">Stablecoins (USDC, USDT)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 font-medium">Supply Model</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Elastic (inflation-indexed)</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Fixed (21M cap)</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Unlimited (controlled issuance)</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Fiat-backed (typically 1:1)</td>
            </tr>
            <tr>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 font-medium">Value Proposition</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Preserve purchasing power</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Digital gold, scarcity</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Smart contract platform</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Stability relative to USD</td>
            </tr>
            <tr>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 font-medium">Inflation Protection</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Built-in indexing mechanism</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">None (vulnerable to purchasing power loss)</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">None (inflationary by design)</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">None (tracks USD, which loses value to inflation)</td>
            </tr>
            <tr>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 font-medium">Primary Use Case</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Inflation-resistant store of value</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Speculative asset, limited utility</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Platform for decentralized applications</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Trading pairs, remittances</td>
            </tr>
            <tr>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 font-medium">Governance</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">On-chain democratic governance</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">BIP process, developer-led</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">EIP process, developer-led</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Centralized corporate governance</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>The Inflation Challenge</h2>

      <h3>Bitcoin and Fixed-Supply Cryptocurrencies</h3>

      <p>Bitcoin and similar fixed-supply cryptocurrencies are often promoted as "inflation-resistant" due to their capped supply. However, they face several limitations:</p>

      <ul>
        <li>While protected from monetary inflation (increased supply), they remain vulnerable to price inflation</li>
        <li>Value is primarily speculative, based on scarcity rather than utility</li>
        <li>Extreme price volatility makes them unreliable as a stable store of value</li>
        <li>No mechanism to adjust to changing economic conditions</li>
      </ul>

      <h3>Ethereum and Smart Contract Platforms</h3>

      <p>Ethereum and similar smart contract platforms have different goals:</p>

      <ul>
        <li>Designed primarily as fuel for computational work, not as stable money</li>
        <li>Inflationary by design, with an unlimited supply</li>
        <li>Value driven by utility and network effects rather than monetary properties</li>
        <li>No mechanism to maintain purchasing power against inflation</li>
      </ul>

      <h3>Stablecoins</h3>

      <p>USD-pegged stablecoins like USDC and USDT offer stability but with significant drawbacks:</p>

      <ul>
        <li>Only stable relative to their pegged fiat currency (usually USD)</li>
        <li>Inherit all the inflationary characteristics of the underlying currency</li>
        <li>Typically rely on centralized issuers and reserves</li>
        <li>Subject to regulatory risks and counterparty risks</li>
      </ul>

      <h2>Denari's Unique Approach</h2>

      <p>Denari addresses the limitations of existing cryptocurrencies through several innovative features:</p>

      <h3>Inflation Indexing</h3>

      <p>Unlike any other cryptocurrency, Denari's supply automatically adjusts based on real-world inflation data:</p>

      <ul>
        <li>Maintains consistent purchasing power over time</li>
        <li>Protects holders from both monetary and price inflation</li>
        <li>Uses a decentralized oracle network to fetch reliable inflation metrics</li>
        <li>Transparent and predictable adjustment mechanism</li>
      </ul>

      <h3>Decentralized Governance</h3>

      <p>Denari employs a sophisticated on-chain governance system:</p>

      <ul>
        <li>Token holders vote on all major protocol decisions</li>
        <li>Democratic process for parameter adjustments and upgrades</li>
        <li>Balanced power distribution to prevent capture</li>
        <li>Transparent proposal and voting mechanisms</li>
      </ul>

      <h3>Technical Architecture</h3>

      <p>Built on a modern technical foundation:</p>

      <ul>
        <li>Substrate-based blockchain for scalability and flexibility</li>
        <li>Cross-chain compatibility via bridges and interoperability protocols</li>
        <li>Security-focused design with formal verification</li>
        <li>Modular architecture that can evolve through governance</li>
      </ul>

      <h2>Use Cases Comparison</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">Use Case</th>
              <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">Denari</th>
              <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">Bitcoin</th>
              <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">Ethereum</th>
              <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">Stablecoins</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 font-medium">Long-term Savings</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Ideal (maintains purchasing power)</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Mixed (high volatility, no inflation protection)</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Poor (inflationary)</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Poor (loses value with USD inflation)</td>
            </tr>
            <tr>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 font-medium">Medium of Exchange</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Good (stable value)</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Poor (high volatility)</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Poor (high volatility, gas costs)</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Good (stable in short term)</td>
            </tr>
            <tr>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 font-medium">DeFi Applications</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Good (stable foundation for financial products)</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Limited (primarily through wrapped tokens)</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Excellent (native platform)</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Excellent (commonly used as base pair)</td>
            </tr>
            <tr>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 font-medium">Cross-border Transfers</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Good (value consistency)</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Mixed (volatility risks)</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Mixed (gas costs, volatility)</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Good (USD-equivalent value transfer)</td>
            </tr>
            <tr>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 font-medium">Inflation Hedge</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Excellent (by design)</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Mixed (speculative)</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Poor</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Poor (follows USD inflation)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Performance Metrics</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">Metric</th>
              <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">Denari</th>
              <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">Bitcoin</th>
              <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">Ethereum</th>
              <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">Stablecoins</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 font-medium">Tx Throughput</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">High (Substrate-based)</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Low (~7 TPS)</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Medium (~15-30 TPS)</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Varies by platform</td>
            </tr>
            <tr>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 font-medium">Finality Time</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Fast (~6 seconds)</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Slow (~60 minutes)</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Medium (~15 minutes)</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Varies by platform</td>
            </tr>
            <tr>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 font-medium">Energy Efficiency</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">High (Proof of Stake)</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Very low (Proof of Work)</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">High (Proof of Stake)</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Varies by platform</td>
            </tr>
            <tr>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 font-medium">Decentralization</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">High</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">High</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">High</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Low to Medium</td>
            </tr>
            <tr>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 font-medium">Purchasing Power Retention</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">High (indexed to inflation)</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Unpredictable (speculative)</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Low (inflationary)</td>
              <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Low (follows USD inflation)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Conclusion</h2>

      <p>Denari represents a new paradigm in cryptocurrency design by directly addressing the inflation problem that other cryptocurrencies ignore or exacerbate. By maintaining purchasing power over time through its unique indexing mechanism, Denari offers a genuine alternative for individuals seeking protection from inflation without sacrificing the benefits of decentralized digital currency.</p>

      <p>While Bitcoin excels as digital gold and Ethereum powers the world of decentralized applications, Denari fills the critical gap of an inflation-resistant store of value - something increasingly important in today's economic environment.</p>
    </div>
  );
} 