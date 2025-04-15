"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, ShieldCheck } from "lucide-react";
import { SolarSystem } from "@/components/three/SolarSystem";

export function Hero() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Gradient Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-10 top-1/4 h-[300px] w-[300px] rounded-full bg-denari-accent/10 blur-[100px]" />
        <div className="absolute -right-10 top-3/4 h-[250px] w-[250px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="container relative">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-muted/50 px-3 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm border border-border/40 w-fit">
              <TrendingUp className="h-3.5 w-3.5" />
              <span>Inflation-Indexed Cryptocurrency</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Denari — The Inflation-Indexed 
              <span className="text-primary animate-glow inline-block"> Web3 Coin</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Protect your purchasing power with a coin that adjusts to U.S. inflation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="shadow-neon">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                View CPI Data
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[450px] w-full"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Animated coin with glow effect */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="w-64 h-64 rounded-full bg-gradient-to-tr from-denari-bg via-muted to-primary flex items-center justify-center shadow-neon"
              >
                <div className="w-56 h-56 rounded-full border-8 border-denari-accent/20 flex items-center justify-center text-5xl font-bold text-primary">
                  DNR
                </div>
              </motion.div>
              
              {/* Small floating details */}
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1, 0.9] }}
                transition={{ repeat: Infinity, duration: 5 }}
                className="absolute top-12 -right-4 bg-card p-3 rounded-lg border border-border/40 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium">CPI Protected</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 