"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ArrowLeft, ExternalLink } from "lucide-react";

const docsSections = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Quick Start", href: "/docs/quick-start" },
      { title: "Key Concepts", href: "/docs/key-concepts" }
    ]
  },
  {
    title: "Core Mechanism",
    items: [
      { title: "Inflation Indexing", href: "/docs/inflation-indexing" },
      { title: "Cryptocurrency Comparison", href: "/docs/cryptocurrency-comparison" }
    ]
  },
  {
    title: "Reference",
    items: [
      { title: "Governance", href: "/docs/governance" },
      { title: "Technical Documentation", href: "/docs/technical" },
      { title: "FAQ", href: "/docs/faq" },
      { title: "Glossary", href: "/docs/glossary" }
    ]
  }
];

export function DocSidebar() {
  const pathname = usePathname();
  
  return (
    <div className="sticky top-24 space-y-6">
      <div className="text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-400">
        Documentation
      </div>
      
      <Link 
        href="/"
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Denari Home
      </Link>
      
      <nav className="space-y-6">
        {docsSections.map((section) => (
          <div key={section.title} className="space-y-2">
            <div className="text-sm font-semibold text-muted-foreground mb-1">
              {section.title}
            </div>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block text-sm transition-colors hover:text-primary py-1",
                      pathname === item.href
                        ? "text-primary font-medium"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
      
      <div className="mt-12 pt-6 border-t border-border/40">
        <a 
          href="https://github.com/denari-project" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          GitHub Repository
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
} 