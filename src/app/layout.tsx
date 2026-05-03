import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Kaushal Kumar | Full-Stack + AI Engineer",
  description: "Portfolio of Kaushal Kumar, building scalable AI-powered applications, RAG systems, and production-grade backends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark", inter.variable)} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased overflow-x-hidden selection:bg-primary/30">
        {children}
      </body>
    </html>
  );
}
