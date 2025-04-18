export default function GovernancePage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Governance</h1>

      <p>Denari employs a decentralized governance model that puts the power of decision-making directly in the hands of its community members. This page details how governance works and how you can participate.</p>

      <h2>Governance Philosophy</h2>

      <p>Denari is built on the principle that those who hold the token should have a say in its evolution. Our governance model is designed to be:</p>

      <ul>
        <li><strong>Transparent</strong>: All proposals and voting happen on-chain with complete visibility</li>
        <li><strong>Inclusive</strong>: Any token holder can participate in governance</li>
        <li><strong>Efficient</strong>: Balanced approach between responsiveness and security</li>
        <li><strong>Resistant to Capture</strong>: Multiple safeguards prevent dominance by any single entity</li>
      </ul>

      <h2>Governance Structure</h2>

      <h3>Council</h3>
      <p>The Denari Council consists of elected members who help guide the protocol's development:</p>

      <ul>
        <li><strong>Size</strong>: 7 elected council members</li>
        <li><strong>Term</strong>: 3-month terms with staggered elections</li>
        <li><strong>Role</strong>: Council members can fast-track emergency proposals and provide guidance, but they do not have unilateral control</li>
      </ul>

      <h3>Technical Committee</h3>
      <p>A group of technical experts who evaluate and provide feedback on technical proposals:</p>

      <ul>
        <li><strong>Membership</strong>: Selected based on contributions to the codebase and technical expertise</li>
        <li><strong>Role</strong>: Advisory only, helping the community understand technical implications of proposals</li>
      </ul>

      <h2>Types of Proposals</h2>

      <h3>Parameter Changes</h3>
      <p>Changes to system parameters that don't require code changes:</p>

      <ul>
        <li>Inflation index weighting</li>
        <li>Oracle thresholds</li>
        <li>Treasury allocation percentages</li>
        <li>Voting periods and thresholds</li>
      </ul>

      <h3>Runtime Upgrades</h3>
      <p>Proposals to upgrade the protocol's code:</p>

      <ul>
        <li>New features</li>
        <li>Security improvements</li>
        <li>Performance enhancements</li>
      </ul>

      <h3>Treasury Proposals</h3>
      <p>Requests for funding from the Denari treasury:</p>

      <ul>
        <li>Development initiatives</li>
        <li>Marketing and education</li>
        <li>Community events</li>
        <li>Partnership opportunities</li>
      </ul>

      <h2>Proposal Lifecycle</h2>

      <ol>
        <li><strong>Pre-proposal Discussion</strong>: Ideas are first discussed in the forum to gather community feedback</li>
        <li><strong>Proposal Creation</strong>: A formal proposal is submitted on-chain with a bond (refundable if passed)</li>
        <li><strong>Voting Period</strong>: Token holders cast votes during a predetermined period (usually 7 days)</li>
        <li><strong>Execution</strong>: If passed, proposals are automatically executed after an enactment period</li>
      </ol>

      <h2>Voting Mechanics</h2>

      <h3>Conviction Voting</h3>
      <p>Denari uses a conviction voting system:</p>

      <ul>
        <li>Votes can be locked for longer periods to increase their weight</li>
        <li>Longer lock periods signal stronger conviction and carry more influence</li>
        <li>This system helps prevent vote buying and encourages long-term thinking</li>
      </ul>

      <h3>Vote Weight</h3>
      <p>Your vote weight is determined by:</p>

      <ul>
        <li>Number of tokens held</li>
        <li>Lock period selected (higher conviction = higher weight)</li>
        <li>Delegation received from other token holders</li>
      </ul>

      <h3>Delegation</h3>
      <p>Token holders can delegate their voting power to trusted community members:</p>

      <ul>
        <li>Delegates vote on behalf of those who delegated to them</li>
        <li>Delegation can be revoked at any time</li>
        <li>Helps improve participation rates and expertise in voting</li>
      </ul>

      <h2>Treasury Management</h2>

      <p>The Denari treasury receives funds from:</p>

      <ul>
        <li>A portion of transaction fees</li>
        <li>A small percentage of newly minted tokens</li>
        <li>Donations and grants</li>
      </ul>

      <p>These funds are allocated through governance decisions to support projects that benefit the ecosystem.</p>

      <h2>How to Participate</h2>

      <h3>Step 1: Acquire and Hold Denari Tokens</h3>
      <p>You need to have Denari tokens to participate in governance.</p>

      <h3>Step 2: Set Up a Governance Account</h3>
      <p>Connect your wallet to the Denari governance portal at <a href="https://governance.denari.io" target="_blank" rel="noopener noreferrer">governance.denari.io</a>.</p>

      <h3>Step 3: Stay Informed</h3>
      <p>Follow discussions on:</p>
      <ul>
        <li><a href="https://forum.denari.io" target="_blank" rel="noopener noreferrer">Denari Forum</a></li>
        <li><a href="https://discord.gg/denari" target="_blank" rel="noopener noreferrer">Discord</a></li>
        <li><a href="https://denari.io/events" target="_blank" rel="noopener noreferrer">Governance Calls</a></li>
      </ul>

      <h3>Step 4: Vote on Proposals</h3>
      <p>Review active proposals and cast your vote through the governance portal.</p>

      <h3>Step 5: Submit Proposals</h3>
      <p>Once familiar with the process, consider submitting your own proposals to improve the protocol.</p>

      <h2>Governance Roadmap</h2>

      <p>The Denari governance system is designed to evolve over time:</p>

      <ul>
        <li><strong>Phase 1 (Current)</strong>: Basic proposal and voting system</li>
        <li><strong>Phase 2</strong>: Enhanced delegation and representative democracy features</li>
        <li><strong>Phase 3</strong>: Optimistic governance for routine decisions</li>
        <li><strong>Phase 4</strong>: Cross-chain governance integration</li>
      </ul>

      <h2>Best Practices</h2>

      <p>For effective participation in Denari governance:</p>

      <ul>
        <li>Research proposals thoroughly before voting</li>
        <li>Consider long-term impacts over short-term gains</li>
        <li>Engage in pre-proposal discussions</li>
        <li>Start with smaller proposals before tackling major changes</li>
        <li>Seek feedback from technical experts when appropriate</li>
      </ul>

      <h2>Governance Resources</h2>

      <ul>
        <li><a href="https://governance.denari.io" target="_blank" rel="noopener noreferrer">Governance Portal</a></li>
        <li><a href="https://docs.denari.io/templates" target="_blank" rel="noopener noreferrer">Proposal Templates</a></li>
        <li><a href="https://analytics.denari.io/governance" target="_blank" rel="noopener noreferrer">Governance Analytics</a></li>
        <li><a href="https://explorer.denari.io/governance" target="_blank" rel="noopener noreferrer">Voting History</a></li>
      </ul>
    </div>
  );
} 