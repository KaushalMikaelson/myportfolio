"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Download, Terminal, Network, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [text, setText] = useState("");
  const fullText = "Building scalable AI-powered applications, RAG systems, and production-grade backends";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-8 backdrop-blur-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-400"
        >
          Kaushal Kumar
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-4xl font-semibold mb-6 neon-glow text-blue-400"
        >
          Full-Stack + AI Engineer
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-16 md:h-12 max-w-2xl mx-auto mb-10 text-muted-foreground text-lg md:text-xl"
        >
          {text}
          <span className="animate-pulse">|</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#projects">
            <Button size="lg" className="rounded-full neon-box-glow hover:scale-105 transition-transform w-full">
              View Projects <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <Button size="lg" variant="outline" className="rounded-full glass hover:bg-white/10 hover:scale-105 transition-transform">
            <Download className="mr-2 h-4 w-4" /> Download Resume
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex items-center justify-center gap-6"
        >
          <a href="#" className="text-muted-foreground hover:text-white transition-colors hover:scale-110 transform">
            <Terminal className="h-6 w-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-white transition-colors hover:scale-110 transform">
            <Network className="h-6 w-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-white transition-colors hover:scale-110 transform">
            <Mail className="h-6 w-6" />
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:flex">
        <div className="w-8 h-12 rounded-full border-2 border-muted-foreground/30 flex justify-center p-2">
          <div className="w-1 h-3 bg-muted-foreground rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
