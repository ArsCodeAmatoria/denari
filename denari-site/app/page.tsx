import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CPICharts } from "@/components/sections/CPICharts";
import { Governance } from "@/components/sections/Governance";
import { FAQ } from "@/components/sections/FAQ";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <CPICharts />
        <Governance />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
