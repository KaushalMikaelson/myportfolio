"use client";

import { motion } from "framer-motion";
import { Award, Code, Briefcase, GraduationCap } from "lucide-react";

export default function ExperienceSection() {
  const timeline = [
    {
      id: 1,
      title: "Smart India Hackathon (SIH)",
      subtitle: "National Level Finalist / Rank",
      date: "2023",
      icon: <Award className="w-5 h-5 text-yellow-400" />,
      description: "Developed a scalable solution for a national problem statement. Built the entire backend architecture and AI integration pipeline.",
      color: "border-yellow-400/50"
    },
    {
      id: 2,
      title: "Competitive Programming",
      subtitle: "LeetCode & Codeforces",
      date: "2022 - Present",
      icon: <Code className="w-5 h-5 text-blue-400" />,
      description: "Solved 450+ LeetCode problems focusing on Data Structures and Algorithms. Participated in multiple global contests.",
      color: "border-blue-400/50"
    },
    {
      id: 3,
      title: "Full-Stack + AI Projects",
      subtitle: "Independent Developer",
      date: "2023 - Present",
      icon: <Briefcase className="w-5 h-5 text-purple-400" />,
      description: "Architected and deployed multiple production-ready applications including Nyaay (Legal AI) and HireNova (Career AI) using modern stacks.",
      color: "border-purple-400/50"
    },
    {
      id: 4,
      title: "Computer Science Education",
      subtitle: "B.Tech in Computer Science",
      date: "2021 - 2025",
      icon: <GraduationCap className="w-5 h-5 text-emerald-400" />,
      description: "Focusing on Software Engineering, Artificial Intelligence, and Distributed Systems.",
      color: "border-emerald-400/50"
    }
  ];

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Experience & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-white/10 ml-3 md:ml-0 md:pl-0 space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-8 md:pl-0"
              >
                <div className={`hidden md:block absolute left-1/2 -translate-x-1/2 -mt-1.5 w-4 h-4 rounded-full border-2 bg-black ${item.color} z-10`}></div>
                
                {/* Mobile Dot */}
                <div className={`md:hidden absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 bg-black ${item.color} z-10`}></div>

                <div className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-5/12"></div>
                  <div className={`md:w-5/12 glass-dark p-6 rounded-2xl border ${item.color} hover:bg-white/5 transition-colors`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-white/5 rounded-lg">
                        {item.icon}
                      </div>
                      <span className="text-sm font-mono text-muted-foreground">{item.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <h4 className="text-sm font-medium text-gray-400 mb-3">{item.subtitle}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Desktop timeline center line */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-white/20 via-white/10 to-transparent z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
