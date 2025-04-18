import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Denari Documentation",
  description: "Learn about Denari, the inflation-indexed cryptocurrency.",
};

export default function DocsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
          Introduction to Denari
        </h1>
        <p className="text-xl text-muted-foreground">
          Welcome to the Denari documentation. Learn about the first inflation-indexed cryptocurrency.
        </p>
      </div>

      <div className="pt-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          What is Denari?
        </h2>
        <p className="leading-7 mt-4">
          Denari is a revolutionary cryptocurrency designed to maintain purchasing power by automatically adjusting to
          inflation data. Unlike traditional cryptocurrencies that fluctuate based solely on market demand,
          Denari incorporates real-world Consumer Price Index (CPI) data to ensure its value remains stable
          relative to the cost of living.
        </p>
        <p className="leading-7 mt-4">
          By using a system of oracles to import CPI data on-chain, Denari creates a reliable medium of exchange 
          and store of value that resists inflationary forces which erode the purchasing power of traditional currencies
          and other cryptocurrencies over time.
        </p>
      </div>

      <div className="pt-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Key Features
        </h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <strong>Inflation Protection:</strong> Denari's value automatically adjusts based on CPI data, 
            preserving purchasing power against inflation.
          </li>
          <li>
            <strong>Decentralized Governance:</strong> Token holders vote on protocol updates, Oracle selection, 
            and treasury allocations through a transparent governance process.
          </li>
          <li>
            <strong>Multi-Oracle System:</strong> A robust network of oracles provides reliable CPI data with built-in 
            redundancy and consensus mechanisms.
          </li>
          <li>
            <strong>Smart Contract Integration:</strong> Developers can build dApps that leverage Denari's inflation-resistant 
            properties for a range of use cases.
          </li>
        </ul>
      </div>

      <div className="pt-4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Getting Started
        </h2>
        <p className="leading-7 mt-4">
          This documentation will guide you through understanding Denari's core mechanisms, how to acquire and use Denari,
          how to participate in governance, and how to build applications that leverage Denari's unique properties.
        </p>
        <p className="leading-7 mt-4">
          To start using Denari, check out the <a href="/docs/quick-start" className="text-primary hover:underline">Quick Start</a> guide.
          For a deeper understanding of the core concepts, refer to the <a href="/docs/key-concepts" className="text-primary hover:underline">Key Concepts</a> section.
        </p>
      </div>
    </div>
  );
} 