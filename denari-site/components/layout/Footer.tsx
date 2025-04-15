import Link from "next/link";
import { Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background py-10">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <div className="text-xl font-bold tracking-tight text-primary mb-2">
            Denari
          </div>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            The Inflation-Indexed Web3 Coin
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex items-center gap-4">
            <Link 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
          <div className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Denari. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
} 