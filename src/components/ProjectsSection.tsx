"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Layers, Zap, RotateCw } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { MouseEvent, useState } from "react";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  techStack: string[];
  features: string[];
  architecture: string;
  github: string;
  demo: string;
  image: string;
  featured: boolean;
  accent: string;
}

function RotatableProjectCard({ project, index }: { project: Project, index: number }) {
  const [rotation, setRotation] = useState(0);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPos = (clientX - left - width / 2) / 15;
    const yPos = (clientY - top - height / 2) / 15;
    x.set(xPos);
    y.set(yPos);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, (val) => -val);
  const rotateY = useTransform(mouseX, (val) => val);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
      className="h-[550px] w-full col-span-1"
      style={{ perspective: 2000 }}
    >
      <motion.div
        className="w-full h-full"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="w-full h-full relative cursor-pointer group"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: rotation }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
          onClick={() => setRotation(r => r + 180)}
        >
          {/* Front Face */}
          <div 
            className="absolute inset-0 w-full h-full rounded-3xl border border-white/10 bg-black/40 overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col"
            style={{ backfaceVisibility: "hidden" }}
          >
            {/* Spotlight Glow */}
            <motion.div
              className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100 z-10"
              style={{
                background: useMotionTemplate`
                  radial-gradient(
                    800px circle at ${mouseX}px ${mouseY}px,
                    rgba(59, 130, 246, 0.15),
                    transparent 80%
                  )
                `,
              }}
            />
            
            <div className={`h-1/2 w-full bg-black relative overflow-hidden flex items-center justify-center p-8 border-b border-white/5`}>
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              
              {/* 360 Spin indicator */}
              <div className="absolute bottom-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  <RotateCw className="w-5 h-5 animate-[spin_4s_linear_infinite]" />
                </div>
              </div>
            </div>
            
            <div className="p-8 flex-grow flex flex-col bg-gradient-to-b from-black/60 to-black/90">
              <h3 className="text-3xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300">{project.title}</h3>
              <p className="text-muted-foreground text-lg mb-6 flex-grow leading-relaxed">{project.shortDesc}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.slice(0, 4).map((tech: string) => (
                  <Badge key={tech} variant="secondary" className="bg-white/5 text-gray-300 border border-white/5 px-3 py-1">
                    {tech}
                  </Badge>
                ))}
                {project.techStack.length > 4 && (
                   <Badge variant="secondary" className="bg-white/5 text-gray-300 border border-white/5 px-3 py-1">
                     +{project.techStack.length - 4}
                   </Badge>
                )}
              </div>
            </div>
          </div>

          {/* Back Face */}
          <div 
            className="absolute inset-0 w-full h-full rounded-3xl border border-blue-500/40 bg-[#050510] overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.15)] flex flex-col group-hover:border-blue-400/60 transition-colors duration-500"
            style={{ 
              backfaceVisibility: "hidden", 
              transform: "rotateY(180deg)",
            }}
          >
             <div className="p-8 h-full flex flex-col relative z-20">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">{project.title}</h3>
                  <RotateCw className="w-6 h-6 text-white/50 hover:text-white transition-colors" />
                </div>
                
                <div className="flex-grow overflow-y-auto custom-scrollbar pr-2 space-y-6">
                  <p className="text-gray-300 text-base leading-relaxed">{project.fullDesc}</p>
                  
                  <div className="space-y-3">
                    <h4 className="flex items-center text-md font-semibold text-white">
                      <Zap className="w-4 h-4 mr-2 text-blue-400" /> Features
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature: string) => (
                        <span key={feature} className="text-sm text-gray-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="flex items-center text-md font-semibold text-white">
                      <Layers className="w-4 h-4 mr-2 text-purple-400" /> Architecture
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                      {project.architecture}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6 mt-4 border-t border-white/10" onClick={(e) => e.stopPropagation()}>
                  <a href={project.demo} target="_blank" rel="noreferrer" className="flex-1">
                    <Button className="w-full h-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-base font-semibold transition-all hover:scale-[1.02] shadow-lg border-0">
                      <ExternalLink className="w-5 h-5 mr-2" /> Live Demo
                    </Button>
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex-1">
                    <Button variant="outline" className="w-full h-12 rounded-xl border-white/20 hover:bg-white/10 text-white text-base font-semibold transition-all hover:scale-[1.02] bg-black/50">
                      <FaGithub className="w-5 h-5 mr-2" /> Source Code
                    </Button>
                  </a>
                </div>
             </div>
             
             {/* Back Face Ambient Glow */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] pointer-events-none -z-10 translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] pointer-events-none -z-10 -translate-x-1/2 translate-y-1/2"></div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const projects: Project[] = [
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
      image: "/projects/nyaay.png",
      featured: false,
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
      image: "/projects/hirenova.png",
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
      image: "/projects/habit-tracker.png",
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
            A showcase of my premium full-stack and AI engineering work. Click any card to physically flip it and reveal the technical architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <RotatableProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
