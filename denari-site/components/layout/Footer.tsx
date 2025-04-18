import Link from "next/link";
import { Github, Twitter, MessageCircle, Send, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = [
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#", icon: <FileText className="h-3.5 w-3.5 mr-1.5" /> },
      { label: "Whitepaper", href: "#", icon: <FileText className="h-3.5 w-3.5 mr-1.5" /> },
      { label: "GitHub", href: "https://github.com", icon: <Github className="h-3.5 w-3.5 mr-1.5" /> }
    ]
  },
  {
    title: "Community",
    links: [
      { label: "Twitter", href: "https://twitter.com", icon: <Twitter className="h-3.5 w-3.5 mr-1.5" /> },
      { label: "Discord", href: "#", icon: <MessageCircle className="h-3.5 w-3.5 mr-1.5" /> },
      { label: "Telegram", href: "#", icon: <Send className="h-3.5 w-3.5 mr-1.5" /> }
    ]
  }
];

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/60 backdrop-blur-sm py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="relative group inline-block">
              <div className="absolute -inset-1 rounded-lg blur bg-gradient-to-r from-indigo-500 via-purple-500 to-primary opacity-0 transition duration-300 group-hover:opacity-30"></div>
              <div className="relative text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-400">
                Denari
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Protect your purchasing power with the first inflation-indexed cryptocurrency that adjusts to U.S. CPI data.
            </p>
            
            <div className="flex gap-3">
              <Link 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/5 rounded-full"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/5 rounded-full"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/5 rounded-full"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="sr-only">Discord</span>
              </Link>
            </div>
          </div>
          
          {footerLinks.map((group) => (
            <div key={group.title} className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      target={link.href.startsWith('http') ? "_blank" : undefined}
                      rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      className="text-sm text-muted-foreground hover:text-primary flex items-center transition-colors"
                    >
                      {link.icon}
                      {link.label}
                      {link.href.startsWith('http') && <ExternalLink className="ml-1 h-3 w-3" />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to get the latest updates and news about Denari.
            </p>
            <div className="flex flex-col gap-2">
              <Button size="sm" className="w-full sm:w-auto shadow-neon">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center mt-16 pt-6 border-t border-border/40">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Denari. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 