"use client";

import Link from "next/link";
import { ArrowLeft, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DocFooter() {
  return (
    <div className="mt-16 border-t border-border/40 pt-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Denari Home
        </Link>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <a 
              href="https://github.com/denari-project" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </Button>
          
          <Button variant="outline" size="sm" asChild>
            <a 
              href="https://twitter.com/denari_project" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Twitter className="h-4 w-4" />
              <span className="hidden sm:inline">Twitter</span>
            </a>
          </Button>
        </div>
      </div>
      
      <p className="text-xs text-muted-foreground mt-6">
        © {new Date().getFullYear()} Denari Project. All rights reserved.
      </p>
    </div>
  );
} 