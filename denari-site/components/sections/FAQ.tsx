"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What is Denari?",
    answer:
      "Denari is a crypto-native unit of account built on Substrate and inspired by Chile's Unidad de Fomento (UF). It's an inflation-indexed cryptocurrency that maintains purchasing power by adjusting its value based on the U.S. Consumer Price Index (CPI).",
  },
  {
    question: "Why is Denari pegged to the CPI?",
    answer:
      "Inflation erodes the purchasing power of traditional currencies over time. By pegging to the CPI, Denari aims to maintain a stable purchasing power regardless of inflation, making it ideal for savings, contracts, and pricing of goods and services over longer time periods.",
  },
  {
    question: "How does the peg work technically?",
    answer:
      "Denari uses an on-chain oracle to import official U.S. CPI-U data monthly. The protocol calculates a 'peg multiplier' based on percent changes in the CPI. This multiplier adjusts the value of DNR tokens, ensuring they maintain purchasing power as prices change in the broader economy.",
  },
  {
    question: "What can I use Denari for?",
    answer:
      "Denari is designed for long-term contracts, DeFi applications, salaries, savings, and any scenario where inflation protection is valuable. It provides a stable unit of account for financial planning, lending, borrowing, and pricing agreements that span months or years.",
  },
  {
    question: "Is Denari a stablecoin?",
    answer:
      "No, Denari is not a stablecoin in the traditional sense. While stablecoins maintain a fixed value relative to a fiat currency (e.g., 1 USDC = $1), Denari's value adjusts with inflation. The purchasing power stays consistent even as its nominal value in USD may increase over time.",
  },
  {
    question: "How is Denari governed?",
    answer:
      "Denari is governed by a DAO (Decentralized Autonomous Organization) through Substrate's on-chain governance. Token holders can vote on proposals affecting the protocol, including changes to CPI data sources, oracle configurations, and peg calculation methodology.",
  },
  {
    question: "What happens in a deflationary environment?",
    answer:
      "If the CPI decreases (deflation), the peg multiplier would also decrease, reducing the nominal value of Denari. This maintains its consistent purchasing power regardless of whether there's inflation or deflation in the broader economy.",
  },
  {
    question: "Is Denari only for U.S. users?",
    answer:
      "While Denari uses the U.S. CPI as its reference point, it can be used globally. It's particularly useful for international contracts or savings that want to hedge against U.S. dollar inflation. Future versions could potentially support other regional inflation indices.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 relative">
      <div className="container">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Everything you need to know about Denari and inflation-indexed cryptocurrency.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>About Denari</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
} 