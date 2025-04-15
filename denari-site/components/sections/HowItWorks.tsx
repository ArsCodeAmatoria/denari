"use client";

import { motion } from "framer-motion";
import { ArrowRight, Database, Calculator, BarChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const steps = [
  {
    title: "CPI Oracle",
    description: "The Denari oracle imports monthly U.S. Consumer Price Index (CPI-U) data from trusted sources.",
    icon: Database,
    delay: 0.2,
  },
  {
    title: "Peg Calculation",
    description: "The blockchain calculates a 'peg multiplier' based on monthly CPI percent changes.",
    icon: Calculator,
    delay: 0.4,
  },
  {
    title: "Value Adjustment",
    description: "Denari's purchasing power remains stable as its value adjusts to inflation over time.",
    icon: BarChart,
    delay: 0.6,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Denari maintains purchasing power by adjusting to inflation through U.S. Consumer Price Index data.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: step.delay }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/40">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden md:flex justify-center mt-8">
                  <ArrowRight className="text-muted-foreground" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-16 border rounded-lg p-6 border-border/40 bg-card/30 backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-4">Example Calculation</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/40">
                  <th className="px-4 py-2 text-left">Month</th>
                  <th className="px-4 py-2 text-left">CPI</th>
                  <th className="px-4 py-2 text-left">Monthly Change</th>
                  <th className="px-4 py-2 text-left">Peg Multiplier</th>
                  <th className="px-4 py-2 text-left">1 DNR Value</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/20">
                  <td className="px-4 py-2">Jan 2023</td>
                  <td className="px-4 py-2">300.00</td>
                  <td className="px-4 py-2">-</td>
                  <td className="px-4 py-2">1.0000</td>
                  <td className="px-4 py-2">$1.00</td>
                </tr>
                <tr className="border-b border-border/20">
                  <td className="px-4 py-2">Feb 2023</td>
                  <td className="px-4 py-2">301.50</td>
                  <td className="px-4 py-2 text-green-500">+0.5%</td>
                  <td className="px-4 py-2">1.0050</td>
                  <td className="px-4 py-2">$1.0050</td>
                </tr>
                <tr className="border-b border-border/20">
                  <td className="px-4 py-2">Mar 2023</td>
                  <td className="px-4 py-2">303.02</td>
                  <td className="px-4 py-2 text-green-500">+0.5%</td>
                  <td className="px-4 py-2">1.0101</td>
                  <td className="px-4 py-2">$1.0101</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Apr 2023</td>
                  <td className="px-4 py-2">302.50</td>
                  <td className="px-4 py-2 text-red-500">-0.17%</td>
                  <td className="px-4 py-2">1.0083</td>
                  <td className="px-4 py-2">$1.0083</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            The peg multiplier ensures that DNR maintains its purchasing power even as inflation fluctuates.
          </p>
        </div>
      </div>
    </section>
  );
} 