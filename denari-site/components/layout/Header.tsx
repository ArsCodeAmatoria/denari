"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, ExternalLink } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "CPI Data", href: "/#cpi-data" },
  { label: "Governance", href: "/#governance" },
  { label: "FAQ", href: "/#faq" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative flex items-center">
              <span className="absolute -inset-2 rounded-full blur bg-gradient-to-r from-indigo-500 via-purple-500 to-primary opacity-0 transition duration-300 group-hover:opacity-40"></span>
              <span className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-400 hover:from-indigo-500 hover:to-primary transition-all duration-300">
                Denari
              </span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:underline hover:underline-offset-4"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden md:flex" asChild>
            <Link href="/docs">
              Documentation
              <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </Button>
          
          <Button size="sm" className="hidden md:flex shadow-neon">
            Launch App
          </Button>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] sm:w-[350px]">
              <div className="flex flex-col gap-6 px-2 pt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center py-1 text-base font-medium hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
                
                <div className="space-y-3 pt-4 mt-4 border-t border-border/40">
                  <Button variant="outline" size="default" className="w-full justify-start" asChild>
                    <Link href="/docs">
                      Documentation
                      <ExternalLink className="ml-auto h-4 w-4" />
                    </Link>
                  </Button>
                  
                  <Button size="default" className="w-full justify-start shadow-neon">
                    Launch App
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
} 