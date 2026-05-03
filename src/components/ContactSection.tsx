"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Terminal, Network, Mail, Send, Copy, CheckCircle2, XCircle } from "lucide-react";
import { useState, MouseEvent, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

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
  const [copied, setCopied] = useState<string | null>(null);
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setToast(null);

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (res.ok) {
        setToast({ type: "success", message: `Message sent! I'll get back to you soon, ${name}.` });
        form.reset();
      } else {
        setToast({ type: "error", message: data.error || "Something went wrong. Please try again." });
      }
    } catch {
      setToast({ type: "error", message: "Network error. Please check your connection and try again." });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setToast(null), 6000);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const contactMethods = [
    {
      id: "email",
      icon: <SiGmail className="w-6 h-6 text-red-500" />,
      title: "Email",
      value: "kaushall.6621@gmail.com",
      link: "mailto:kaushall.6621@gmail.com",
      display: "kaushall.6621@gmail.com",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: "linkedin",
      icon: <FaLinkedin className="w-6 h-6 text-[#0A66C2]" />,
      title: "LinkedIn",
      value: "https://www.linkedin.com/in/kaushal-kumar-370293281",
      link: "https://www.linkedin.com/in/kaushal-kumar-370293281",
      display: "in/kaushal-kumar",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: "github",
      icon: <FaGithub className="w-6 h-6 text-white" />,
      title: "GitHub",
      value: "https://github.com/KaushalMikaelson",
      link: "https://github.com/KaushalMikaelson",
      display: "KaushalMikaelson",
      color: "from-gray-500/20 to-gray-400/20"
    }
  ];

  return (
    <section id="contact" className="py-24 relative z-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20 px-3 py-1 text-sm">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Let&apos;s Connect
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I&apos;m currently looking for new opportunities. Whether you have a question or just want to discuss a potential project, my inbox is always open!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 flex flex-col gap-6"
          >
            {contactMethods.map((method) => (
              <SpotlightCard key={method.id} className="p-6 relative group">
                <div className="relative z-20 flex items-center justify-between">
                  <a href={method.link} target="_blank" rel="noreferrer" className="flex items-center gap-5 flex-grow truncate mr-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${method.color} border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 flex-shrink-0`}>
                      {method.icon}
                    </div>
                    <div className="truncate">
                      <p className="text-sm font-medium text-gray-400 mb-1">{method.title}</p>
                      <p className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors truncate">{method.display}</p>
                    </div>
                  </a>
                  <button
                    onClick={(e) => { e.preventDefault(); copyToClipboard(method.value, method.id); }}
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors flex-shrink-0"
                    title="Copy to clipboard"
                  >
                    {copied === method.id ? <CheckCircle2 className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />}
                  </button>
                </div>
              </SpotlightCard>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3"
          >
            <SpotlightCard className="p-8 md:p-10 h-full">
              <form ref={formRef} onSubmit={handleSubmit} className="relative z-20 space-y-6 h-full flex flex-col">
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
                    className="bg-white/5 border-white/10 focus:border-blue-500 text-white placeholder:text-gray-600 flex-grow min-h-[150px] rounded-xl p-5 text-lg resize-none transition-all focus:bg-white/10"
                    placeholder="I'd like to discuss a project..."
                  />
                </div>

                {/* Toast notification */}
                {toast && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`flex items-start gap-3 p-4 rounded-xl border text-sm ${
                      toast.type === "success"
                        ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                        : "bg-red-500/10 border-red-500/30 text-red-300"
                    }`}
                  >
                    {toast.type === "success" ? (
                      <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0 text-emerald-400" />
                    ) : (
                      <XCircle className="w-5 h-5 mt-0.5 shrink-0 text-red-400" />
                    )}
                    <span>{toast.message}</span>
                  </motion.div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl text-lg font-semibold transition-all hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)] hover:scale-[1.01] mt-auto"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin mr-3"></span>
                      Sending...
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
      </div>
    </section>
  );
}
