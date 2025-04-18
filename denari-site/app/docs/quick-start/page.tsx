import Link from "next/link";

export default function QuickStartPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Quick Start Guide</h1>

      <p>This guide will help you get started with Denari, from setting up a wallet to understanding basic operations.</p>

      <h2>Setting Up a Wallet</h2>

      <ol>
        <li>
          <p><strong>Install the Polkadot&#123;.js&#125; Extension</strong>:</p>
          <ul>
            <li>Download the <a href="https://polkadot.js.org/extension/" target="_blank" rel="noopener noreferrer">Polkadot&#123;.js&#125; extension</a> for your browser.</li>
            <li>Follow the installation instructions to set up the extension.</li>
          </ul>
        </li>

        <li>
          <p><strong>Create a New Account</strong>:</p>
          <ul>
            <li>Click on the Polkadot&#123;.js&#125; extension icon in your browser.</li>
            <li>Select "Create new account" and follow the prompts.</li>
            <li><strong>Important</strong>: Save your mnemonic seed phrase securely. This is the only way to recover your account if needed.</li>
          </ul>
        </li>

        <li>
          <p><strong>Connect to Denari Network</strong>:</p>
          <ul>
            <li>Open the <a href="https://app.denari.io" target="_blank" rel="noopener noreferrer">Denari Web App</a>.</li>
            <li>Connect your wallet when prompted.</li>
            <li>Select the account you want to use with Denari.</li>
          </ul>
        </li>
      </ol>

      <h2>Acquiring Denari Tokens</h2>

      <p>There are several ways to acquire Denari tokens:</p>

      <ul>
        <li><strong>Purchase from Exchanges</strong>: Denari is available on select decentralized and centralized exchanges.</li>
        <li><strong>Participate in Network Activities</strong>: Earn Denari by participating in governance or providing services to the network.</li>
        <li><strong>Testnet Faucet</strong>: For testing purposes, you can request tokens from our testnet faucet.</li>
      </ul>

      <h2>Basic Operations</h2>

      <h3>Sending Tokens</h3>

      <ol>
        <li>Navigate to the Transfer section in the Denari web app.</li>
        <li>Enter the recipient's address and the amount you wish to send.</li>
        <li>Review the transaction details and confirm.</li>
        <li>Sign the transaction using your wallet.</li>
      </ol>

      <h3>Checking Your Balance</h3>

      <ul>
        <li>Your current Denari balance is displayed on the dashboard of the web app.</li>
        <li>You can also view your transaction history and wallet activity.</li>
      </ul>

      <h3>Participating in Governance</h3>

      <ol>
        <li>Navigate to the Governance section of the web app.</li>
        <li>Browse active proposals or submit your own.</li>
        <li>Cast your vote by staking your tokens behind your chosen option.</li>
      </ol>

      <h2>Understanding the Economics</h2>

      <p>As an inflation-indexed currency, Denari has unique economic properties:</p>

      <ul>
        <li>Your tokens maintain purchasing power relative to a basket of goods and services.</li>
        <li>Supply adjustments happen automatically based on inflation data.</li>
        <li>These adjustments are transparent and verifiable on-chain.</li>
      </ul>

      <h2>Next Steps</h2>

      <p>Now that you have the basics down, consider exploring:</p>

      <ul>
        <li><Link href="/docs/key-concepts" className="text-primary hover:underline">Key Concepts</Link> to deepen your understanding of Denari's design</li>
        <li><Link href="/docs/technical" className="text-primary hover:underline">Technical Documentation</Link> if you're interested in developing on the platform</li>
        <li><Link href="/docs/governance" className="text-primary hover:underline">Governance</Link> to learn how you can participate in the project's future</li>
      </ul>

      <p>For additional help, join our <a href="https://discord.gg/denari" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Discord community</a> where team members and community advocates can assist with any questions.</p>
    </div>
  );
} 