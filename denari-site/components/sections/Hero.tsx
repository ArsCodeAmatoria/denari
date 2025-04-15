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
            {/* Solar system container with no border for better blending */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <div className="h-full w-full">
                <SolarSystem />
              </div>
            </div>
            
            {/* Decorative elements */}
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1, 0.9] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute top-6 right-6 bg-card/80 p-3 rounded-lg border border-border/40 backdrop-blur-sm shadow-lg z-10"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">CPI Protected</span>
              </div>
            </motion.div>
            
            {/* Label at bottom */}
            <div className="absolute bottom-6 left-0 right-0 text-center z-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-background/50 px-4 py-2 text-sm font-medium backdrop-blur-sm border border-border/40">
                <span>Denari Ecosystem</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 