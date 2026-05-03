"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useRef, useState } from "react";
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiTailwindcss, 
  SiJavascript, SiPython, SiCplusplus, SiHtml5, SiCss, 
  SiMongodb, SiRedis, SiPrisma, SiDocker, SiPostman, SiHuggingface
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { BrainCircuit, Database, Network, Key, Search, Bot, Route, Zap, FileCode2 } from "lucide-react";

type Skill = {
  name: string;
  icon: React.ReactNode;
  glow: string;
  category: string;
};

const skillsData: Skill[] = [
  { name: "C++",              icon: <SiCplusplus className="text-[#00599C]" />,   glow: "rgba(0,89,156,0.6)",     category: "Languages" },
  { name: "Python",           icon: <SiPython className="text-[#3776AB]" />,      glow: "rgba(55,118,171,0.6)",   category: "Languages" },
  { name: "JavaScript",       icon: <SiJavascript className="text-[#F7DF1E]" />,  glow: "rgba(247,223,30,0.6)",   category: "Languages" },
  { name: "SQL",              icon: <FileCode2 className="text-sky-400" />,        glow: "rgba(56,189,248,0.6)",   category: "Languages" },
  { name: "HTML",             icon: <SiHtml5 className="text-[#E34F26]" />,       glow: "rgba(227,79,38,0.6)",    category: "Frontend" },
  { name: "CSS",              icon: <SiCss className="text-[#1572B6]" />,         glow: "rgba(21,114,182,0.6)",   category: "Frontend" },
  { name: "React.js",         icon: <SiReact className="text-[#61DAFB]" />,       glow: "rgba(97,218,251,0.6)",   category: "Frontend" },
  { name: "Next.js",          icon: <SiNextdotjs className="text-white" />,       glow: "rgba(255,255,255,0.5)",  category: "Frontend" },
  { name: "Tailwind CSS",     icon: <SiTailwindcss className="text-[#38B2AC]" />, glow: "rgba(56,178,172,0.6)",   category: "Frontend" },
  { name: "Node.js",          icon: <SiNodedotjs className="text-[#339933]" />,   glow: "rgba(51,153,51,0.6)",    category: "Backend" },
  { name: "Express.js",       icon: <SiExpress className="text-gray-300" />,      glow: "rgba(200,200,200,0.4)",  category: "Backend" },
  { name: "REST APIs",        icon: <Network className="text-blue-400" />,         glow: "rgba(96,165,250,0.6)",   category: "Backend" },
  { name: "JWT Auth",         icon: <Key className="text-yellow-400" />,           glow: "rgba(250,204,21,0.6)",   category: "Backend" },
  { name: "Redis",            icon: <SiRedis className="text-[#DC382D]" />,       glow: "rgba(220,56,45,0.6)",    category: "Backend" },
  { name: "RAG",              icon: <BrainCircuit className="text-pink-500" />,    glow: "rgba(236,72,153,0.6)",   category: "AI/ML" },
  { name: "Vector Embeddings",icon: <Database className="text-indigo-400" />,      glow: "rgba(129,140,248,0.6)",  category: "AI/ML" },
  { name: "Hybrid Search",    icon: <Search className="text-emerald-400" />,       glow: "rgba(52,211,153,0.6)",   category: "AI/ML" },
  { name: "LLMs",             icon: <Bot className="text-purple-400" />,           glow: "rgba(192,132,252,0.6)",  category: "AI/ML" },
  { name: "Hugging Face",     icon: <SiHuggingface className="text-[#FFD21E]" />, glow: "rgba(255,210,30,0.6)",   category: "AI/ML" },
  { name: "Semantic Routing", icon: <Route className="text-orange-400" />,         glow: "rgba(251,146,60,0.6)",   category: "AI/ML" },
  { name: "MongoDB",          icon: <SiMongodb className="text-[#47A248]" />,     glow: "rgba(71,162,72,0.6)",    category: "DevOps" },
  { name: "Prisma ORM",       icon: <SiPrisma className="text-white" />,          glow: "rgba(255,255,255,0.4)",  category: "DevOps" },
  { name: "Docker",           icon: <SiDocker className="text-[#2496ED]" />,      glow: "rgba(36,150,237,0.6)",   category: "DevOps" },
  { name: "Git",              icon: <FaGitAlt className="text-[#F05032]" />,      glow: "rgba(240,80,50,0.6)",    category: "DevOps" },
  { name: "Inngest",          icon: <Zap className="text-yellow-300" />,           glow: "rgba(253,224,71,0.6)",   category: "DevOps" },
  { name: "Postman",          icon: <SiPostman className="text-[#FF6C37]" />,     glow: "rgba(255,108,55,0.6)",   category: "DevOps" },
];

const categories = ["All", "Languages", "Frontend", "Backend", "AI/ML", "DevOps"];

function SkillBadge({ skill, index }: { skill: Skill; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    rotateX.set(((e.clientY - cy) / rect.height) * -25);
    rotateY.set(((e.clientX - cx) / rect.width) * 25);
  }

  function handleLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.04, type: "spring", stiffness: 120 }}
      whileHover={{ scale: 1.15, z: 30 }}
      className="cursor-pointer"
    >
      <div
        className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border border-white/10 backdrop-blur-md whitespace-nowrap relative overflow-hidden group"
        style={{
          background: "rgba(10, 10, 20, 0.7)",
          boxShadow: `0 4px 20px rgba(0,0,0,0.4)`,
          transform: "translateZ(0)",
        }}
      >
        {/* Inner glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
          style={{ background: `radial-gradient(ellipse at center, ${skill.glow.replace('0.6', '0.15')} 0%, transparent 70%)` }}
        />
        {/* Top shimmer line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <span className="text-xl relative z-10 transform transition-transform duration-300 group-hover:scale-125 group-hover:drop-shadow-lg">
          {skill.icon}
        </span>
        <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300 relative z-10">
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const containerRef = useRef<HTMLDivElement>(null);
  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);

  function handleContainerMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
  }

  const filtered = activeCategory === "All"
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  // Duplicate for seamless scrolling marquees
  const row1 = skillsData.slice(0, 9);
  const row2 = skillsData.slice(9, 18);
  const row3 = skillsData.slice(18);

  return (
    <section id="skills" className="py-24 relative z-10 border-y border-white/5 overflow-hidden">
      {/* Deep ambient glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-pink-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 bg-purple-500/10 text-purple-400 border-purple-500/20 px-3 py-1 text-sm tracking-wider">
            ⚡ Technical Universe
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            My ecosystem of languages, frameworks, and tools — built to architect full-stack apps and AI systems.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  : "bg-white/5 text-gray-400 border-white/10 hover:border-white/30 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Mouse-Spotlight Container */}
        <motion.div
          ref={containerRef}
          onMouseMove={handleContainerMouse}
          className="relative rounded-3xl border border-white/8 overflow-hidden"
          style={{ background: "rgba(5,5,15,0.6)", backdropFilter: "blur(20px)" }}
        >
          {/* Mouse-follow spotlight */}
          <motion.div
            className="absolute pointer-events-none w-[600px] h-[600px] rounded-full opacity-20"
            style={{
              x: spotlightX,
              y: spotlightY,
              translateX: "-50%",
              translateY: "-50%",
              background: "radial-gradient(circle, rgba(139,92,246,0.6) 0%, rgba(59,130,246,0.3) 40%, transparent 70%)",
            }}
          />

          {/* Filtered Grid View */}
          {activeCategory !== "All" ? (
            <div className="p-8 md:p-12">
              <motion.div
                layout
                className="flex flex-wrap gap-4 justify-center min-h-[200px] content-center"
              >
                {filtered.map((skill, i) => (
                  <SkillBadge key={skill.name} skill={skill} index={i} />
                ))}
              </motion.div>
            </div>
          ) : (
            /* Infinite Marquee Rows */
            <div className="py-10 space-y-6 select-none">
              {/* Row 1 — Left */}
              <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
                <motion.div
                  className="flex gap-4 shrink-0"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ duration: 35, ease: "linear", repeat: Infinity }}
                >
                  {[...row1, ...row1].map((skill, i) => (
                    <SkillBadge key={`r1-${i}`} skill={skill} index={i} />
                  ))}
                </motion.div>
              </div>

              {/* Row 2 — Right */}
              <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
                <motion.div
                  className="flex gap-4 shrink-0"
                  animate={{ x: ["-50%", "0%"] }}
                  transition={{ duration: 40, ease: "linear", repeat: Infinity }}
                >
                  {[...row2, ...row2].map((skill, i) => (
                    <SkillBadge key={`r2-${i}`} skill={skill} index={i} />
                  ))}
                </motion.div>
              </div>

              {/* Row 3 — Left */}
              <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
                <motion.div
                  className="flex gap-4 shrink-0"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                >
                  {[...row3, ...row1.slice(0, 3), ...row3, ...row1.slice(0, 3)].map((skill, i) => (
                    <SkillBadge key={`r3-${i}`} skill={skill} index={i} />
                  ))}
                </motion.div>
              </div>
            </div>
          )}

          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10"
        >
          {[
            { label: "Languages", count: "4", color: "from-blue-500 to-cyan-500" },
            { label: "Frameworks", count: "9+", color: "from-purple-500 to-pink-500" },
            { label: "AI/ML Tools", count: "6+", color: "from-pink-500 to-rose-500" },
            { label: "DevOps Tools", count: "6+", color: "from-emerald-500 to-teal-500" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-5 rounded-2xl border border-white/5 bg-white/3 backdrop-blur-sm hover:bg-white/8 transition-colors"
            >
              <div className={`text-3xl font-black mb-1 bg-clip-text text-transparent bg-gradient-to-r ${stat.color}`}>
                {stat.count}
              </div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
