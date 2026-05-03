"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Terminal, Layers, Zap, ArrowRight } from "lucide-react";
import { MouseEvent } from "react";

function SpotlightCard({ children }: { children: React.ReactNode }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative h-full w-full rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_-15px_rgba(59,130,246,0.3)] flex flex-col`}
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

export default function ProjectsSection() {
  const projects = [
    {
      id: "nyaay",
      title: "Nyaay",
      shortDesc: "AI-powered legal assistant with an advanced RAG system",
      fullDesc: "A comprehensive AI legal platform featuring a sophisticated RAG pipeline (BM25 + semantic + RRF) for accurate legal document retrieval. Includes a robust OCR pipeline and high-performance backend.",
      techStack: ["Next.js", "Python", "FastAPI", "Redis", "Prisma", "JWT"],
      features: ["Hybrid Search RAG", "Redis Caching", "OCR Pipeline", "Role-based Auth"],
      architecture: "Microservices architecture splitting Next.js frontend, Node.js API gateway, and Python AI microservices. Utilizes Redis for high-speed caching and PostgreSQL for persistent storage.",

      github: "https://github.com/KaushalMikaelson/Nyaya",
      demo: "https://nyaya-km.vercel.app",

      featured: true,
      accent: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
    },

    {
      id: "hirenova",
      title: "HireNova",
      shortDesc: "AI career platform for resume analysis and roadmaps",
      fullDesc: "An intelligent platform that analyzes resumes using LLMs and generates personalized career roadmaps.",
      techStack: ["Next.js", "Inngest", "OpenAI", "PostgreSQL"],
      features: ["Resume Analysis", "Async Workflows", "Career Roadmap Generation"],
      architecture: "Event-driven architecture using Inngest for async workflows.",

      github: "https://github.com/KaushalMikaelson/hirenova",
      demo: "https://hire-nova-km.vercel.app/",

      featured: false,
      accent: "from-emerald-500/20 to-teal-500/20",
    },

    {
      id: "habit-tracker",
      title: "Habit Tracker",
      shortDesc: "Full-stack habit tracking application with analytics",
      fullDesc: "A production-ready full-stack application for tracking habits.",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      features: ["Analytics", "JWT Auth", "Progress Tracking"],
      architecture: "MERN stack with REST API backend.",

      github: "https://github.com/KaushalMikaelson/habit-tracker",
      demo: "https://habit-tracker-km.vercel.app/",

      featured: false,
      accent: "from-orange-500/20 to-red-500/20",
    }
  ];

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20 px-3 py-1 text-sm">
            Innovation & Work
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my premium full-stack and AI engineering work, built with modern, high-performance technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              className={`h-full flex flex-col ${project.featured ? "md:col-span-2 lg:col-span-2" : "col-span-1"}`}
            >
              <Dialog>
                <DialogTrigger render={<div className="h-full w-full outline-none flex flex-col flex-1" />}>
                  <SpotlightCard>
                    <div className="flex flex-col h-full cursor-pointer relative z-20">
                      <div className={`h-48 md:h-64 bg-gradient-to-br ${project.accent} relative overflow-hidden flex items-center justify-center p-8`}>
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700"></div>
                        <Layers className="w-20 h-20 text-white/20 group-hover:text-white/60 transition-all duration-700 group-hover:scale-110 transform z-10" />

                        {project.featured && (
                          <div className="absolute top-6 left-6 z-20">
                            <Badge className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20">
                              Flagship Project
                            </Badge>
                          </div>
                        )}
                        <div className="absolute bottom-6 right-6 z-20 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                          <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center">
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        </div>
                      </div>

                      <div className="p-8 flex-grow flex flex-col">
                        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300">{project.title}</h3>
                        <p className="text-muted-foreground text-base mb-6 flex-grow leading-relaxed">{project.shortDesc}</p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.techStack.map(tech => (
                            <Badge key={tech} variant="secondary" className="bg-white/5 hover:bg-white/10 text-gray-300 border border-white/5 px-3 py-1">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </SpotlightCard>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[800px] glass-dark border-white/10 text-white rounded-2xl p-0 overflow-hidden">
                  <div className={`h-32 bg-gradient-to-br ${project.accent} relative`}>
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <DialogHeader className="absolute bottom-6 left-8 right-8 text-left">
                      <DialogTitle className="text-3xl font-bold text-white">
                        {project.title}
                      </DialogTitle>
                    </DialogHeader>
                  </div>

                  <div className="p-8 space-y-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
                    <p className="text-gray-300 text-lg leading-relaxed">{project.fullDesc}</p>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h4 className="flex items-center text-lg font-semibold text-white">
                          <Zap className="w-5 h-5 mr-2 text-blue-400" /> Key Features
                        </h4>
                        <ul className="space-y-3">
                          {project.features.map(feature => (
                            <li key={feature} className="flex items-start text-gray-400">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <h4 className="flex items-center text-lg font-semibold text-white">
                          <Layers className="w-5 h-5 mr-2 text-purple-400" /> Architecture
                        </h4>
                        <p className="text-gray-400 leading-relaxed bg-white/5 p-5 rounded-xl border border-white/5">
                          {project.architecture}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map(tech => (
                          <Badge key={tech} variant="outline" className="border-white/10 text-gray-300 bg-white/5 px-4 py-1.5 rounded-full">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10">
                      <a href={project.demo} target="_blank" rel="noreferrer" className="flex-1">
                        <Button className="w-full h-12 rounded-xl bg-white text-black hover:bg-gray-200 text-base font-semibold transition-all">
                          <ExternalLink className="w-5 h-5 mr-2" /> Live Demo
                        </Button>
                      </a>
                      <a href={project.github} target="_blank" rel="noreferrer" className="flex-1">
                        <Button variant="outline" className="w-full h-12 rounded-xl border-white/20 hover:bg-white/10 text-white text-base font-semibold transition-all">
                          <Terminal className="w-5 h-5 mr-2" /> View Source
                        </Button>
                      </a>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
