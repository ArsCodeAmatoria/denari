"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Vote, Users, Gavel, Archive } from "lucide-react";

export function Governance() {
  const badgeVariants = {
    democracy: "bg-blue-500/20 text-blue-500 hover:bg-blue-500/30",
    council: "bg-purple-500/20 text-purple-500 hover:bg-purple-500/30",
    treasury: "bg-amber-500/20 text-amber-500 hover:bg-amber-500/30",
  };

  return (
    <section id="governance" className="py-24 relative">
      <div className="container">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Governance</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              The Denari DAO controls CPI sources, update logic, and other critical protocol parameters.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full bg-card/70">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className={badgeVariants.democracy}>Democracy</Badge>
                </div>
                <CardTitle className="mt-4 flex items-center gap-2">
                  <Vote className="h-5 w-5" />
                  <span>Referenda Voting</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  DNR holders can propose and vote on changes to the protocol, including updates to:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>CPI data sources</li>
                  <li>Oracle update frequency</li>
                  <li>Peg calculation formula</li>
                  <li>Treasury allocations</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full bg-card/70">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className={badgeVariants.council}>Council</Badge>
                </div>
                <CardTitle className="mt-4 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>Elected Representatives</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The elected council oversees the protocol and can:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Propose emergency changes</li>
                  <li>Manage oracle access</li>
                  <li>Vet proposals before public vote</li>
                  <li>Approve smaller treasury expenses</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="h-full bg-card/70">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className={badgeVariants.treasury}>Treasury</Badge>
                </div>
                <CardTitle className="mt-4 flex items-center gap-2">
                  <Archive className="h-5 w-5" />
                  <span>Treasury Management</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The on-chain treasury funds:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Oracle operations</li>
                  <li>Protocol development</li>
                  <li>Community initiatives</li>
                  <li>Emergency reserves</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <Card>
            <CardHeader>
              <CardTitle>Governance FAQ</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How are oracle operators selected?</AccordionTrigger>
                  <AccordionContent>
                    Oracle operators are selected through on-chain governance. The council proposes candidates who meet technical requirements, and token holders vote on their approval. Multiple oracles provide redundancy for critical CPI data.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>What happens if there's a dispute about CPI data?</AccordionTrigger>
                  <AccordionContent>
                    The protocol uses a consensus mechanism where multiple oracles must agree on CPI data. If disputed, the council can trigger an emergency vote to resolve the issue. All historical CPI submissions are permanently stored on-chain for transparency.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>Can the peg formula be changed?</AccordionTrigger>
                  <AccordionContent>
                    Yes, through referendum voting. Any change to the peg formula requires a supermajority (66%) approval in a token-weighted vote, with a minimum participation threshold. Changes are subject to a time-delay before implementation to ensure market participants can prepare.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>How is the governance system upgraded?</AccordionTrigger>
                  <AccordionContent>
                    The governance system itself can be upgraded through a special referendum process requiring 75% approval and higher quorum requirements. All proposed upgrades are subject to a technical committee review for security and functionality.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
} 