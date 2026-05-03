"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useState, MouseEvent } from "react";
import { Badge } from "@/components/ui/badge";
import { FaGithub, FaLinkedin, FaInstagram, FaBehance } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { HiDocumentText } from "react-icons/hi";

function SpotlightCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_-15px_rgba(59,130,246,0.3)] ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </div>
  );
}

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully!");
    }, 1500);
  };

  const dockItems = [
    {
      id: "resume",
      icon: <HiDocumentText className="w-7 h-7" />,
      link: "#",
      hoverColor: "text-yellow-400",
      hoverGlow: "hover:shadow-[0_0_30px_-5px_rgba(250,204,21,0.6)]",
      hoverBg: "hover:bg-yellow-400/10 hover:border-yellow-400/50",
      tooltip: "Resume"
    },
    { id: "divider" },
    {
      id: "linkedin",
      icon: <FaLinkedin className="w-7 h-7" />,
      link: "https://www.linkedin.com/in/kaushal-kumar-370293281",
      hoverColor: "text-[#0A66C2]",
      hoverGlow: "hover:shadow-[0_0_30px_-5px_rgba(10,102,194,0.6)]",
      hoverBg: "hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/50",
      tooltip: "LinkedIn"
    },
    {
      id: "github",
      icon: <FaGithub className="w-7 h-7" />,
      link: "https://github.com/KaushalMikaelson",
      hoverColor: "text-white",
      hoverGlow: "hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.6)]",
      hoverBg: "hover:bg-white/10 hover:border-white/50",
      tooltip: "GitHub"
    },
    {
      id: "email",
      icon: <SiGmail className="w-7 h-7" />,
      link: "mailto:kaushall.6621@gmail.com",
      hoverColor: "text-[#EA4335]",
      hoverGlow: "hover:shadow-[0_0_30px_-5px_rgba(234,67,53,0.6)]",
      hoverBg: "hover:bg-[#EA4335]/10 hover:border-[#EA4335]/50",
      tooltip: "Email"
    },
    {
      id: "instagram",
      icon: <FaInstagram className="w-7 h-7" />,
      link: "#",
      hoverColor: "text-[#E1306C]",
      hoverGlow: "hover:shadow-[0_0_30px_-5px_rgba(225,48,108,0.6)]",
      hoverBg: "hover:bg-[#E1306C]/10 hover:border-[#E1306C]/50",
      tooltip: "Instagram"
    },
    {
      id: "behance",
      icon: <FaBehance className="w-7 h-7" />,
      link: "#",
      hoverColor: "text-[#1769FF]",
      hoverGlow: "hover:shadow-[0_0_30px_-5px_rgba(23,105,255,0.6)]",
      hoverBg: "hover:bg-[#1769FF]/10 hover:border-[#1769FF]/50",
      tooltip: "Behance"
    }
  ];

  return (
    <section id="contact" className="py-24 relative z-10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20 px-3 py-1 text-sm">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Let&apos;s Collaborate
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Open to new opportunities and exciting projects. Let&apos;s build something extraordinary together.
          </p>
        </motion.div>

        {/* Advanced Glassmorphic Dock */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="flex justify-center mb-16 relative z-20"
        >
          <div className="flex items-center gap-2 p-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            {dockItems.map((item, index) => {
              if (item.id === "divider") {
                return <div key={index} className="w-px h-8 bg-white/10 mx-2 rounded-full"></div>;
              }
              return (
                <div key={item.id} className="relative group">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center justify-center w-14 h-14 rounded-full border border-transparent bg-transparent text-gray-400 transition-all duration-300 ease-out transform group-hover:-translate-y-3 group-hover:scale-110 ${item.hoverColor} ${item.hoverBg} ${item.hoverGlow}`}
                  >
                    {item.icon}
                  </a>
                  {/* Tooltip */}
                  <div className="absolute -top-14 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/90 backdrop-blur-xl text-white text-sm font-semibold rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] scale-95 group-hover:scale-100">
                    {item.tooltip}
                    {/* Arrow */}
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-black/90 border-b border-r border-white/10 rotate-45"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SpotlightCard className="p-8 md:p-10">
            <form onSubmit={handleSubmit} className="relative z-20 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Your Name</label>
                  <Input 
                    id="name" 
                    required 
                    className="bg-white/5 border-white/10 focus:border-blue-500 text-white placeholder:text-gray-600 h-14 rounded-xl px-5 text-lg transition-all focus:bg-white/10" 
                    placeholder="John Doe" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Your Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    required 
                    className="bg-white/5 border-white/10 focus:border-blue-500 text-white placeholder:text-gray-600 h-14 rounded-xl px-5 text-lg transition-all focus:bg-white/10" 
                    placeholder="john@example.com" 
                  />
                </div>
              </div>
              
              <div className="space-y-2 flex-grow flex flex-col">
                <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Message</label>
                <Textarea 
                  id="message" 
                  required 
                  className="bg-white/5 border-white/10 focus:border-blue-500 text-white placeholder:text-gray-600 min-h-[150px] rounded-xl p-5 text-lg resize-none transition-all focus:bg-white/10" 
                  placeholder="I'd like to discuss a project..." 
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl text-lg font-semibold transition-all hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)] hover:scale-[1.01]"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin mr-3"></span>
                    Initiating Launch...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Transmission <Send className="w-5 h-5 ml-3" />
                  </span>
                )}
              </Button>
            </form>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
}
