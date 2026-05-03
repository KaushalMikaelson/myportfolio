"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiFlask, SiTailwindcss, 
  SiJavascript, SiTypescript, SiPython, SiCplusplus, SiHtml5, SiCss, 
  SiMongodb, SiPostgresql, SiRedis, SiPrisma, SiDocker, SiPandas, SiNumpy 
} from "react-icons/si";
import { FaJava, FaGithub, FaGitAlt } from "react-icons/fa";
import { BrainCircuit, Database, Network, TrendingUp, Link2 } from "lucide-react";

const skillsData = [
  { name: "React.js", icon: <SiReact className="text-[#61DAFB]" />, color: "hover:border-[#61DAFB]/50 hover:shadow-[0_0_15px_rgba(97,218,251,0.2)]" },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" />, color: "hover:border-white/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]" },
  { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" />, color: "hover:border-[#339933]/50 hover:shadow-[0_0_15px_rgba(51,153,51,0.2)]" },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" />, color: "hover:border-gray-300/50 hover:shadow-[0_0_15px_rgba(200,200,200,0.2)]" },
  { name: "Flask", icon: <SiFlask className="text-white" />, color: "hover:border-white/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38B2AC]" />, color: "hover:border-[#38B2AC]/50 hover:shadow-[0_0_15px_rgba(56,178,172,0.2)]" },
  { name: "Java", icon: <FaJava className="text-[#007396]" />, color: "hover:border-[#007396]/50 hover:shadow-[0_0_15px_rgba(0,115,150,0.2)]" },
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" />, color: "hover:border-[#F7DF1E]/50 hover:shadow-[0_0_15px_rgba(247,223,30,0.2)]" },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" />, color: "hover:border-[#3178C6]/50 hover:shadow-[0_0_15px_rgba(49,120,198,0.2)]" },
  { name: "Python", icon: <SiPython className="text-[#3776AB]" />, color: "hover:border-[#3776AB]/50 hover:shadow-[0_0_15px_rgba(55,118,171,0.2)]" },
  { name: "C++", icon: <SiCplusplus className="text-[#00599C]" />, color: "hover:border-[#00599C]/50 hover:shadow-[0_0_15px_rgba(0,89,156,0.2)]" },
  { name: "HTML", icon: <SiHtml5 className="text-[#E34F26]" />, color: "hover:border-[#E34F26]/50 hover:shadow-[0_0_15px_rgba(227,79,38,0.2)]" },
  { name: "CSS", icon: <SiCss className="text-[#1572B6]" />, color: "hover:border-[#1572B6]/50 hover:shadow-[0_0_15px_rgba(21,114,182,0.2)]" },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, color: "hover:border-[#47A248]/50 hover:shadow-[0_0_15px_rgba(71,162,72,0.2)]" },
  { name: "VectorDB", icon: <Database className="text-orange-500" />, color: "hover:border-orange-500/50 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)]" },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" />, color: "hover:border-[#4169E1]/50 hover:shadow-[0_0_15px_rgba(65,105,225,0.2)]" },
  { name: "Redis", icon: <SiRedis className="text-[#DC382D]" />, color: "hover:border-[#DC382D]/50 hover:shadow-[0_0_15px_rgba(220,56,45,0.2)]" },
  { name: "Prisma ORM", icon: <SiPrisma className="text-white" />, color: "hover:border-white/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]" },
  { name: "Docker", icon: <SiDocker className="text-[#2496ED]" />, color: "hover:border-[#2496ED]/50 hover:shadow-[0_0_15px_rgba(36,150,237,0.2)]" },
  { name: "Git", icon: <FaGitAlt className="text-[#F05032]" />, color: "hover:border-[#F05032]/50 hover:shadow-[0_0_15px_rgba(240,80,50,0.2)]" },
  { name: "GitHub", icon: <FaGithub className="text-white" />, color: "hover:border-white/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]" },
  { name: "RAG Systems", icon: <BrainCircuit className="text-pink-500" />, color: "hover:border-pink-500/50 hover:shadow-[0_0_15px_rgba(236,72,153,0.2)]" },
  { name: "LangChain", icon: <Link2 className="text-blue-400" />, color: "hover:border-blue-400/50 hover:shadow-[0_0_15px_rgba(96,165,250,0.2)]" },
  { name: "pandas", icon: <SiPandas className="text-[#150458]" />, color: "hover:border-[#150458]/50 hover:shadow-[0_0_15px_rgba(21,4,88,0.2)]" },
  { name: "NumPy", icon: <SiNumpy className="text-[#013243]" />, color: "hover:border-[#013243]/50 hover:shadow-[0_0_15px_rgba(1,50,67,0.2)]" },
  { name: "Machine Learning", icon: <Network className="text-purple-400" />, color: "hover:border-purple-400/50 hover:shadow-[0_0_15px_rgba(192,132,252,0.2)]" },
  { name: "Time-Series", icon: <TrendingUp className="text-emerald-400" />, color: "hover:border-emerald-400/50 hover:shadow-[0_0_15px_rgba(52,211,153,0.2)]" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative z-10 border-y border-white/5 bg-black/40 overflow-hidden">
      {/* Deep Space Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <Badge variant="outline" className="mb-4 bg-purple-500/10 text-purple-400 border-purple-500/20 px-3 py-1 text-sm">
            Technical Universe
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My ecosystem of languages, frameworks, and tools used to architect full-stack applications and AI models.
          </p>
        </motion.div>

        {/* Floating Skill Cloud */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
          {skillsData.map((skill, index) => {
            // Generate pseudo-random animation parameters based on index
            const randomY = (index % 3) * 10 + 10;
            const randomDuration = 3 + (index % 4);
            const randomDelay = (index % 5) * 0.4;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                animate={{
                  y: [0, -randomY, 0],
                }}
                transition={{
                  opacity: { duration: 0.5, delay: index * 0.05 },
                  scale: { duration: 0.5, delay: index * 0.05 },
                  y: {
                    duration: randomDuration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: randomDelay,
                  }
                }}
                className="z-10"
              >
                <div 
                  className={`flex items-center gap-3 px-5 py-3 md:px-6 md:py-4 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md cursor-pointer transition-all duration-300 ${skill.color} hover:bg-black/80 hover:-translate-y-1`}
                >
                  <span className="text-xl md:text-2xl">{skill.icon}</span>
                  <span className="text-sm md:text-base font-medium text-gray-200">{skill.name}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
