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
        className={`${geistSans.variable} ${geistMono.variable} antialiased mx-auto max-w-screen-2xl bg-denari-bg text-foreground`}
      >
        {/* Background effects */}
        <div className="fixed inset-0 -z-10 h-full w-full bg-denari-bg">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-full bg-gradient-to-br from-primary/10 via-transparent to-indigo-600/10 blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 right-0 -z-10 m-auto h-[400px] w-full bg-gradient-to-tr from-indigo-600/10 via-transparent to-primary/10 blur-[100px]"></div>
        </div>
        
        <div className="mx-auto relative z-0">
          {children}
        </div>
      </body>
    </html>
  );
}
