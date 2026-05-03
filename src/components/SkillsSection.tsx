"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Code2, Layout, Database, Brain, Server } from "lucide-react";
import { MouseEvent } from "react";
import { Badge } from "@/components/ui/badge";

function SkillCard({ category, index }: { category: { title: string; description: string; skills: string[]; icon: React.ReactNode; gradient: string; glowColor: string }, index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Create a dynamic asymmetric bento layout
  const isLarge = index === 0 || index === 3;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className={`group relative h-full flex flex-col rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_30px_-15px_rgba(255,255,255,0.2)] ${
        isLarge ? "md:col-span-2 lg:col-span-2" : "col-span-1"
      }`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              ${category.glowColor},
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative z-20 p-8 h-full flex flex-col">
        <div className="flex items-center gap-4 mb-6">
          <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.gradient} border border-white/10 shadow-inner`}>
            {category.icon}
          </div>
          <h3 className="text-2xl font-bold text-white">{category.title}</h3>
        </div>
        
        <p className="text-muted-foreground mb-8 text-base">
          {category.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {category.skills.map((skill: string) => (
            <span
              key={skill}
              className="px-4 py-2 text-sm font-medium rounded-xl bg-white/5 border border-white/10 text-gray-300 group-hover:bg-white/10 group-hover:text-white transition-colors duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className={`absolute -bottom-24 -right-24 w-64 h-64 bg-gradient-to-br ${category.gradient} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}></div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      description: "Building intelligent systems using the latest LLMs and vector search technologies to create context-aware applications.",
      skills: ["RAG Systems", "LLM Integration", "LangChain", "Vector Embeddings", "Prompt Engineering"],
      icon: <Brain className="w-8 h-8 text-white" />,
      gradient: "from-blue-600 to-indigo-600",
      glowColor: "rgba(79, 70, 229, 0.15)",
    },
    {
      title: "Frontend Engineering",
      description: "Crafting beautiful, interactive, and highly performant user interfaces with modern web standards.",
      skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Three.js"],
      icon: <Layout className="w-8 h-8 text-white" />,
      gradient: "from-purple-600 to-pink-600",
      glowColor: "rgba(219, 39, 119, 0.15)",
    },
    {
      title: "Backend & Systems",
      description: "Architecting scalable and secure server-side applications and microservices.",
      skills: ["Node.js", "Express", "FastAPI", "REST APIs", "GraphQL"],
      icon: <Server className="w-8 h-8 text-white" />,
      gradient: "from-emerald-600 to-teal-600",
      glowColor: "rgba(20, 184, 166, 0.15)",
    },
    {
      title: "Core Languages",
      description: "Strong foundational knowledge in low-level and high-level programming paradigms.",
      skills: ["C++", "Python", "JavaScript", "TypeScript", "SQL", "Go"],
      icon: <Code2 className="w-8 h-8 text-white" />,
      gradient: "from-orange-600 to-red-600",
      glowColor: "rgba(234, 88, 12, 0.15)",
    },
    {
      title: "Tools & Infrastructure",
      description: "Deploying and managing applications with modern containerization and persistent storage solutions.",
      skills: ["Docker", "Redis", "PostgreSQL", "MongoDB", "Prisma"],
      icon: <Database className="w-8 h-8 text-white" />,
      gradient: "from-amber-500 to-yellow-600",
      glowColor: "rgba(217, 119, 6, 0.15)",
    }
  ];

  return (
    <section id="skills" className="py-24 relative z-10 border-y border-white/5 bg-black/20">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 bg-purple-500/10 text-purple-400 border-purple-500/20 px-3 py-1 text-sm">
            Tech Stack
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Technical Arsenal
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive expertise across the entire modern software stack, specialized in AI integrations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
