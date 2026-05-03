"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, BrainCircuit, Database, Server } from "lucide-react";

export default function AboutSection() {
  const skills = [
    {
      title: "Frontend",
      description: "React, Next.js, Tailwind, Framer Motion",
      icon: <Code2 className="h-8 w-8 text-blue-400" />,
      delay: 0.2
    },
    {
      title: "Backend",
      description: "Node.js, Express, Microservices",
      icon: <Server className="h-8 w-8 text-purple-400" />,
      delay: 0.3
    },
    {
      title: "AI / ML",
      description: "RAG, LLMs, Embeddings, LangChain",
      icon: <BrainCircuit className="h-8 w-8 text-cyan-400" />,
      delay: 0.4
    },
    {
      title: "Databases",
      description: "PostgreSQL, MongoDB, Redis, Prisma",
      icon: <Database className="h-8 w-8 text-pink-400" />,
      delay: 0.5
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I am a <span className="text-white font-medium">Full-Stack Software Engineer</span> specializing in AI-integrated web applications using Next.js, React, and Node.js with MongoDB and Prisma ORM-based architectures. Currently pursuing my B.Tech in CSE at Bennett University (9.0 GPA).
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I am highly experienced in building ML-powered features with Python, Hugging Face, and Gemini AI. My expertise extends to deploying production-grade REST APIs with JWT authentication, and designing sophisticated <span className="text-blue-400">RAG systems</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond development, I have incredibly strong DSA fundamentals—having solved <span className="text-purple-400">450+ LeetCode problems</span> and ranked 61 out of 500+ teams in the Smart India Hackathon. I also actively demonstrate leadership as a House Captain coordinating cross-functional teams.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: skill.delay }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="glass-dark border-white/5 hover:border-white/20 transition-all duration-300 h-full">
                  <CardContent className="p-6 flex flex-col items-start">
                    <div className="mb-4 p-3 rounded-lg bg-white/5 border border-white/10">
                      {skill.icon}
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-white">{skill.title}</h3>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
