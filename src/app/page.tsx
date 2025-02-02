"use client";

import { motion } from "framer-motion";
import { Github, Mail, Linkedin } from "lucide-react";
import { TimelineWork } from "../components/TimelineWork";
import { SkillCard } from "../components/SkillCard";

const skills = [
  { name: "Python", icon: "🐍" },
  { name: "TypeScript", icon: "📘" },
  { name: "C#", icon: "💻" },
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Node.js", icon: "🟢" },
];

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Company A",
    period: "2022 - Present",
    description:
      "Led frontend development team, implemented modern web applications using React and Next.js",
  },
  {
    title: "Full Stack Developer",
    company: "Tech Company B",
    period: "2020 - 2022",
    description:
      "Developed full-stack applications using TypeScript, Node.js, and React",
  },
  {
    title: "Software Engineer",
    company: "Tech Company C",
    period: "2018 - 2020",
    description: "Worked on backend services using Python and C#",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 to-neutral-900 text-white">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-bold mb-6">Your Name</h1>
          <p className="text-xl text-gray-300 mb-8">
            Senior Frontend Developer
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-blue-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-2 hover:text-blue-400 transition-colors"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-blue-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
          <TimelineWork />
        </section>
      </main>
    </div>
  );
}
