import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Denari — The Inflation-Indexed Web3 Coin",
  description: "Protect your purchasing power with a coin that adjusts to U.S. inflation.",
  keywords: ["cryptocurrency", "inflation", "blockchain", "Substrate", "CPI", "DeFi"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-denari-bg text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
