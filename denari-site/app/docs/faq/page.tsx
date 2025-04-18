export default function FAQPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Frequently Asked Questions</h1>

      <h2>General Questions</h2>

      <h3>What is Denari?</h3>
      <p>
        Denari is an inflation-indexed cryptocurrency designed to maintain purchasing power over time. 
        Unlike traditional cryptocurrencies with fixed supplies, Denari's supply automatically adjusts 
        based on inflation data to preserve value.
      </p>

      <h3>How is Denari different from stablecoins?</h3>
      <p>
        While stablecoins aim to maintain a fixed price (usually pegged to a fiat currency like USD), 
        Denari aims to maintain consistent purchasing power. This means its price in fiat terms may change, 
        but its ability to purchase goods and services remains relatively constant over time.
      </p>

      <h3>Is Denari a decentralized project?</h3>
      <p>
        Yes, Denari is fully decentralized. It operates through a combination of smart contracts 
        and on-chain governance, allowing the community to manage and upgrade the protocol.
      </p>

      <h2>Technical Questions</h2>

      <h3>How does Denari track inflation?</h3>
      <p>
        Denari uses decentralized oracle networks to bring real-world inflation data on-chain. 
        This data comes from a carefully selected basket of goods and services that represent 
        typical consumer spending patterns.
      </p>

      <h3>What happens if the inflation rate changes?</h3>
      <p>
        When inflation rates change, Denari automatically adjusts its token supply. During inflation, 
        new tokens are minted and distributed proportionally to all token holders. In periods of deflation, 
        tokens are algorithmically removed from circulation.
      </p>

      <h3>Which blockchain is Denari built on?</h3>
      <p>
        Denari is built using the Substrate framework, which provides a flexible, upgradeable 
        blockchain architecture. This allows Denari to implement custom functionality through 
        specialized modules called pallets.
      </p>

      <h3>How secure is the Denari network?</h3>
      <p>
        Denari employs a Nominated Proof-of-Stake (NPoS) consensus mechanism, which is designed to 
        remain secure even if up to one-third of validators are malicious. The network is secured by 
        validators who are selected through token holder nomination.
      </p>

      <h2>Economic Questions</h2>

      <h3>What happens to my Denari tokens during inflation?</h3>
      <p>
        During inflation, new tokens are created and distributed proportionally to all token holders. 
        While the number of tokens in your wallet increases, each token represents the same portion of 
        the total supply, preserving your purchasing power.
      </p>

      <h3>Can Denari experience price volatility?</h3>
      <p>
        Yes, like all cryptocurrencies, Denari can experience market-driven price volatility in the short term. 
        However, its design aims to maintain consistent purchasing power over longer time periods by 
        adjusting to inflation.
      </p>

      <h3>How is Denari different from inflation-indexed bonds?</h3>
      <p>
        Inflation-indexed bonds are debt instruments issued by governments, while Denari is a decentralized 
        cryptocurrency. Denari offers similar inflation protection but with the added benefits of being 
        globally accessible, transferable without intermediaries, and usable in decentralized finance applications.
      </p>

      <h2>Getting Started</h2>

      <h3>How do I get Denari tokens?</h3>
      <p>
        You can acquire Denari tokens through supported cryptocurrency exchanges, decentralized exchanges (DEXes), 
        or by participating in community activities that distribute tokens.
      </p>

      <h3>Which wallets support Denari?</h3>
      <p>
        Denari is compatible with wallets that support Substrate-based tokens. See our <a href="/docs/quick-start" className="text-primary hover:underline">Quick Start Guide</a> for recommended wallet options and setup instructions.
      </p>

      <h3>How do I participate in Denari governance?</h3>
      <p>
        Token holders can participate in governance by staking their tokens and voting on proposals 
        through the governance portal. Proposals can range from parameter adjustments to protocol upgrades.
      </p>

      <h2>Future Development</h2>

      <h3>What's on Denari's roadmap?</h3>
      <p>
        The Denari roadmap includes enhanced oracle mechanisms, regional inflation indices, 
        expanded DeFi integrations, and improved governance features. For the latest updates, 
        check our <a href="https://denari.xyz/blog" className="text-primary hover:underline">official blog</a> or join our community channels.
      </p>

      <h3>How can I contribute to Denari?</h3>
      <p>
        We welcome contributions from developers, economists, designers, and community members. 
        Visit our <a href="https://github.com/denari-project" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">GitHub repository</a> to explore open issues or join our community channels to learn about other ways to contribute.
      </p>

      <h3>Will Denari support regional inflation indices?</h3>
      <p>
        Yes, while Denari initially tracks global inflation averages, future upgrades plan to 
        support regional indices. This will allow users to choose indices that better reflect 
        their local economic conditions.
      </p>
    </div>
  );
} 