"use client";

import { motion } from "framer-motion";
import { Award, Code, GraduationCap, Users } from "lucide-react";

export default function ExperienceSection() {
  const timeline = [
    {
      id: 1,
      title: "Bachelor of Technology, CSE",
      subtitle: "Bennett University | GPA: 9.0 | CGPA: 8.85",
      date: "2023 - 2027",
      icon: <GraduationCap className="w-6 h-6 text-emerald-400" />,
      description: "Pursuing Computer Science and Engineering with a strong focus on Software Engineering, Data Structures, and Artificial Intelligence.",
      color: "border-emerald-400/50",
      gradient: "from-emerald-500/10 to-teal-500/10"
    },
    {
      id: 2,
      title: "Class XII — CBSE",
      subtitle: "Delhi Public School | Marks: 81%",
      date: "2021 - 2022",
      icon: <GraduationCap className="w-6 h-6 text-sky-400" />,
      description: "Completed senior secondary education with CBSE curriculum, with strong performance in Physics, Chemistry, Mathematics, and Computer Science.",
      color: "border-sky-400/50",
      gradient: "from-sky-500/10 to-blue-500/10"
    },
    {
      id: 3,
      title: "Class X — CBSE",
      subtitle: "RamaKrishnaMission Vidyapith, Deoghar | Marks: 95%",
      date: "2019 - 2020",
      icon: <GraduationCap className="w-6 h-6 text-violet-400" />,
      description: "Completed secondary education at a prestigious residential school known for academic excellence and holistic character development.",
      color: "border-violet-400/50",
      gradient: "from-violet-500/10 to-purple-500/10"
    },
    {
      id: 4,
      title: "Smart India Hackathon (SIH)",
      subtitle: "National Finalist - Rank 61 / 500+",
      date: "2023",
      icon: <Award className="w-6 h-6 text-yellow-400" />,
      description: "Secured a top 61 rank out of 500+ participating teams nationally. Built complex backend architectures and integrated AI pipelines for scalable problem-solving.",
      color: "border-yellow-400/50",
      gradient: "from-yellow-500/10 to-orange-500/10"
    },
    {
      id: 5,
      title: "Competitive Programming",
      subtitle: "LeetCode Data Structures & Algorithms",
      date: "Ongoing",
      icon: <Code className="w-6 h-6 text-blue-400" />,
      description: "Solved over 450+ LeetCode problems. Highly proficient in algorithmic thinking, dynamic programming, and optimizing time-space complexities.",
      color: "border-blue-400/50",
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      id: 6,
      title: "House Captain & Leadership",
      subtitle: "RamaKrishnaMission Vidyapith & DPS",
      date: "2019 - 2022",
      icon: <Users className="w-6 h-6 text-purple-400" />,
      description: "Demonstrated strong leadership capabilities as House Captain. Led cross-functional teams, organized events, and represented the institution across various forums.",
      color: "border-purple-400/50",
      gradient: "from-purple-500/10 to-pink-500/10"
    }
  ];

  return (
    <section id="experience" className="py-24 relative z-10 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-400 mb-6 backdrop-blur-sm">
            My Journey
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Education & Milestones
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A timeline of my academic background, competitive achievements, and leadership experiences.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Central Line for Desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-white/20 via-white/10 to-transparent z-0 rounded-full"></div>
          
          <div className="relative border-l-2 md:border-l-0 border-white/10 ml-4 md:ml-0 space-y-16">
            {timeline.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.15, type: "spring", stiffness: 100 }}
                className="relative pl-10 md:pl-0 group"
              >
                {/* Desktop Node */}
                <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border-4 bg-[#050510] ${item.color} z-10 items-center justify-center group-hover:scale-125 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-500`}>
                   {item.icon}
                </div>
                
                {/* Mobile Node */}
                <div className={`md:hidden absolute -left-[11px] top-6 w-5 h-5 rounded-full border-4 bg-[#050510] ${item.color} z-10`}></div>

                <div className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="hidden md:block md:w-5/12"></div>
                  
                  <div className={`md:w-5/12 relative`}>
                    <div className={`p-8 rounded-3xl border border-white/5 bg-gradient-to-br ${item.gradient} backdrop-blur-md hover:border-white/20 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)] hover:-translate-y-2`}>
                      
                      {/* Mobile Icon */}
                      <div className="md:hidden flex items-center gap-4 mb-4">
                        <div className={`p-3 rounded-2xl bg-white/5 border border-white/10 ${item.color}`}>
                          {item.icon}
                        </div>
                        <span className="text-sm font-bold tracking-wider text-white/50">{item.date}</span>
                      </div>

                      <div className="hidden md:block mb-4">
                        <span className="text-sm font-bold tracking-wider text-white/50">{item.date}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-colors">
                        {item.title}
                      </h3>
                      <h4 className="text-sm font-semibold mb-4 text-white/60">
                        {item.subtitle}
                      </h4>
                      <p className="text-gray-400 leading-relaxed text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
