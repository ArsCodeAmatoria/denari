"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, ShieldCheck, BarChart2, DollarSign, Lock } from "lucide-react";

export function Hero() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background effects already added to layout.tsx */}
      <div className="container relative">
        <div className="grid gap-10 lg:gap-20 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary backdrop-blur-sm border border-primary/20 w-fit">
              <TrendingUp className="h-3.5 w-3.5" />
              <span>Inflation-Indexed Cryptocurrency</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                Denari —
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-400 inline-block"> Inflation-Proof <br />Web3 Currency</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg">
              Protect your purchasing power with the first cryptocurrency that automatically adjusts to U.S. inflation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="shadow-neon group">
                <span>Launch App</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="hover:bg-primary/5">
                View CPI Data
              </Button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4 pt-4 border-t border-border/40">
              <div className="flex gap-2 items-start">
                <div className="p-1.5 rounded-full bg-primary/10 text-primary mt-0.5">
                  <DollarSign className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium">Value Protected</p>
                  <p className="text-xs text-muted-foreground">Maintains purchasing power</p>
                </div>
              </div>
              <div className="flex gap-2 items-start">
                <div className="p-1.5 rounded-full bg-primary/10 text-primary mt-0.5">
                  <BarChart2 className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium">CPI Indexed</p>
                  <p className="text-xs text-muted-foreground">Pegged to inflation data</p>
                </div>
              </div>
              <div className="flex gap-2 items-start col-span-2 sm:col-span-1">
                <div className="p-1.5 rounded-full bg-primary/10 text-primary mt-0.5">
                  <Lock className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium">Secure & Decentralized</p>
                  <p className="text-xs text-muted-foreground">Built on Web3 standards</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[450px] w-full"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Enhanced animated coin with glow effect */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotateY: [0, 180, 360]
                }}
                transition={{ 
                  y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                  rotateY: { repeat: Infinity, duration: 12, ease: "linear" }
                }}
                className="w-72 h-72 rounded-full bg-gradient-to-tr from-primary/20 via-primary/40 to-indigo-600/30 flex items-center justify-center shadow-neon relative perspective"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 via-transparent to-indigo-600/10 animate-pulse"></div>
                <div className="w-64 h-64 rounded-full border-4 border-primary/30 flex items-center justify-center bg-gradient-to-br from-gray-900/80 to-gray-950 backdrop-blur-sm">
                  <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-indigo-400 relative z-10">
                    DNR
                  </div>
                </div>
                
                {/* Orbiting particles */}
                <motion.div 
                  className="absolute w-6 h-6 rounded-full bg-primary/60 blur-[1px]"
                  animate={{
                    rotateZ: [0, 360]
                  }}
                  transition={{
                    rotateZ: { repeat: Infinity, duration: 8, ease: "linear" }
                  }}
                  style={{
                    transformOrigin: "center center",
                    left: "calc(50% - 3px)",
                    top: "-3px"
                  }}
                ></motion.div>
              </motion.div>
              
              {/* Enhanced floating details */}
              <motion.div
                animate={{ opacity: [0.7, 1, 0.7], scale: [0.97, 1, 0.97] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute top-12 -right-4 bg-card/70 p-3 rounded-lg border border-primary/20 backdrop-blur-md shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium">CPI Protected</span>
                </div>
              </motion.div>
              
              {/* Additional floating details */}
              <motion.div
                animate={{ opacity: [0.7, 1, 0.7], scale: [0.97, 1, 0.97] }}
                transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                className="absolute bottom-16 left-4 bg-card/70 p-3 rounded-lg border border-primary/20 backdrop-blur-md shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <BarChart2 className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Inflation Adjusted</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 