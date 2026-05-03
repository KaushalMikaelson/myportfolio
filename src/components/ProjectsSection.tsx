"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Layers, Zap, RotateCw, ChevronLeft, ChevronRight } from "lucide-react";
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

function RotatableProjectCard({ project }: { project: Project }) {
  const [rotation, setRotation] = useState(0);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set((clientX - left - width / 2) / 15);
    y.set((clientY - top - height / 2) / 15);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, (val) => -val);
  const rotateY = useTransform(mouseX, (val) => val);

  return (
    <div className="h-[520px] w-[300px]" style={{ perspective: 1200 }}>
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
          onClick={() => setRotation((r) => r + 180)}
        >
          {/* Front Face */}
          <div
            className="absolute inset-0 w-full h-full rounded-3xl border border-white/10 bg-black/40 overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col"
            style={{ backfaceVisibility: "hidden" }}
          >
            <motion.div
              className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100 z-10"
              style={{
                background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(59,130,246,0.15), transparent 80%)`,
              }}
            />
            <div className="h-1/2 w-full bg-black relative overflow-hidden border-b border-white/5">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                  <RotateCw className="w-3 h-3 animate-[spin_4s_linear_infinite]" />
                </div>
              </div>
            </div>
            <div className="p-4 flex-grow flex flex-col bg-gradient-to-b from-black/60 to-black/90">
              <h3 className="text-lg font-bold mb-1 text-white group-hover:text-blue-300 transition-colors duration-300">{project.title}</h3>
              <p className="text-muted-foreground text-xs mb-3 flex-grow leading-relaxed">{project.shortDesc}</p>
              <div className="flex flex-wrap gap-1 mt-auto">
                {project.techStack.map((tech: string) => (
                  <Badge key={tech} variant="secondary" className="bg-white/5 text-gray-300 border border-white/5 px-2 py-0.5 text-[10px]">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Back Face */}
          <div
            className="absolute inset-0 w-full h-full rounded-3xl border border-blue-500/40 bg-[#050510] overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.15)] flex flex-col group-hover:border-blue-400/60 transition-colors duration-500"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <div className="p-5 h-full flex flex-col relative z-20">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">{project.title}</h3>
                <RotateCw className="w-4 h-4 text-white/50" />
              </div>
              <div className="flex-grow overflow-y-auto custom-scrollbar pr-1 space-y-3">
                <p className="text-gray-300 text-[11px] leading-relaxed">{project.fullDesc}</p>
                <div className="space-y-1.5">
                  <h4 className="flex items-center text-xs font-semibold text-white">
                    <Zap className="w-3 h-3 mr-1.5 text-blue-400" /> Features
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {project.features.map((f: string) => (
                      <span key={f} className="text-[10px] text-gray-400 bg-white/5 px-2 py-1 rounded-lg border border-white/10">{f}</span>
                    ))}
                  </div>
                </div>
                <div className="space-y-1.5">
                  <h4 className="flex items-center text-xs font-semibold text-white">
                    <Layers className="w-3 h-3 mr-1.5 text-purple-400" /> Architecture
                  </h4>
                  <p className="text-[10px] text-gray-400 leading-relaxed bg-white/5 p-2.5 rounded-xl border border-white/5">{project.architecture}</p>
                </div>
              </div>
              <div className="flex gap-2 pt-3 mt-3 border-t border-white/10" onClick={(e) => e.stopPropagation()}>
                <a href={project.demo} target="_blank" rel="noreferrer" className="flex-1">
                  <Button className="w-full h-8 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-xs font-semibold border-0">
                    <ExternalLink className="w-3 h-3 mr-1" /> Demo
                  </Button>
                </a>
                <a href={project.github} target="_blank" rel="noreferrer" className="flex-1">
                  <Button variant="outline" className="w-full h-8 rounded-xl border-white/20 hover:bg-white/10 text-white text-xs font-semibold bg-black/50">
                    <FaGithub className="w-3 h-3 mr-1" /> Code
                  </Button>
                </a>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/20 rounded-full blur-[60px] pointer-events-none -z-10 translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-600/20 rounded-full blur-[60px] pointer-events-none -z-10 -translate-x-1/2 translate-y-1/2" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

const PROJECTS: Project[] = [
  {
    id: "nyaay",
    title: "Nyaay",
    shortDesc: "AI-powered legal assistant with an advanced RAG system",
    fullDesc: "A comprehensive AI legal platform featuring a sophisticated RAG pipeline (BM25 + semantic + RRF) for accurate legal document retrieval. Includes a robust OCR pipeline and high-performance backend.",
    techStack: ["Next.js", "React", "Node.js", "Express", "PostgreSQL", "Prisma", "Redis", "Groq", "Docker", "Razorpay"],
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
    techStack: ["Next.js 14", "Prisma ORM", "Neon DB", "Inngest", "Tailwind CSS", "Shadcn UI", "Gemini AI"],
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
  },
  {
    id: "movie-recommender",
    title: "MovieRecommender",
    shortDesc: "Content-based movie recommender using TMDB dataset & cosine similarity",
    fullDesc: "A content-based movie recommendation system built on the TMDB dataset. It leverages cosine similarity on TF-IDF vectorized movie metadata to surface highly relevant titles.",
    techStack: ["Python", "Streamlit", "Scikit-learn", "Pandas", "TMDB API", "Pickle"],
    features: ["Cosine Similarity", "TMDB Dataset", "TF-IDF Vectors", "Movie Poster Fetch"],
    architecture: "Content-based filtering pipeline: raw TMDB metadata is preprocessed and vectorized using TF-IDF. Cosine similarity scores are precomputed and serialized via Pickle. Streamlit calls the TMDB API to fetch live poster images.",
    github: "https://github.com/KaushalMikaelson/movieRecommender",
    demo: "https://movierecommender-km.streamlit.app/",
    image: "/projects/movie-recommender.png",
    featured: false,
    accent: "from-pink-500/20 via-rose-500/20 to-red-500/20",
  },
];

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const N = PROJECTS.length;
  const angleStep = 360 / N;
  const radius = 480;

  const prev = () => setActiveIndex((i) => (i - 1 + N) % N);
  const next = () => setActiveIndex((i) => (i + 1) % N);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20 px-3 py-1 text-sm">
            Innovation &amp; Work
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my premium full-stack and AI engineering work. Navigate the carousel, then click any card to flip it and reveal the technical architecture.
          </p>
        </motion.div>

        {/* 3D Carousel */}
        <div className="relative" style={{ height: "650px" }}>
          {/* Left Nav */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/60 backdrop-blur-xl border border-white/15 text-white flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Scene — full width so side cards spread horizontally */}
          <div className="w-full h-full relative" style={{ perspective: "1400px" }}>
            <motion.div
              className="relative w-full h-full"
              style={{ transformStyle: "preserve-3d" }}
              animate={{ rotateY: -activeIndex * angleStep }}
              transition={{ duration: 0.9, type: "spring", stiffness: 55, damping: 18 }}
            >
              {PROJECTS.map((project, i) => (
                <div
                  key={project.id}
                  className="absolute"
                  style={{
                    top: "140px",
                    left: "50%",
                    marginLeft: "-150px",
                    width: "300px",
                    height: "520px",
                    transform: `rotateY(${i * angleStep}deg) translateZ(${radius}px)`,
                  }}
                >
                  <RotatableProjectCard project={project} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Nav */}
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/60 backdrop-blur-xl border border-white/15 text-white flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-3 mt-6">
          {PROJECTS.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-8 bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Active label */}
        <motion.p
          key={activeIndex}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center text-white/40 text-sm mt-3 tracking-widest uppercase"
        >
          {activeIndex + 1} / {N} &nbsp;—&nbsp; {PROJECTS[activeIndex].title}
        </motion.p>
      </div>
    </section>
  );
}
