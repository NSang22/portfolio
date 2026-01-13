"use client";

import React from "react";
import { motion } from "framer-motion";

type SkillCardProps = { title: string; items: string[] };

const SkillCard: React.FC<SkillCardProps> = ({ title, items }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="rounded-xl border border-gray-800 bg-cyan-950/30 backdrop-blur-lg p-6 shadow-lg"
    >
      <h3 className="text-xl font-semibold text-[#04D9FF]">{title}</h3>
      <ul className="mt-4 flex flex-wrap gap-3">
        {items.map((item) => (
          <li
            key={item}
            className="px-3 py-1 rounded-full bg-cyan-900/40 border border-cyan-800 text-gray-200 text-sm hover:bg-cyan-800/60 transition"
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative py-20 bg-gradient-to-b from-cyan-950/40 via-cyan-900/20 to-transparent"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-white text-center"
        >
          <span className="text-[#04D9FF]">skills</span>
        </motion.h2>

        <div className="mt-8 grid md:grid-cols-3 gap-8">
          <SkillCard
            title="Languages"
            items={[
              "Java",
              "Python",
              "C++",
              "R",
              "JavaScript",
              "HTML/CSS",
            ]}
          />
          <SkillCard
            title="Frameworks & Libraries"
            items={[
              "PyTorch",
              "TensorFlow",
              "React",
              "Angular",
              "Node.js",
              "Pandas",
            ]}
          />
          <SkillCard
            title="Tools & Technologies"
            items={[
              "MongoDB",
              "Git",
              "Postman",
              "REST APIs",
              "LangChain",
              "Web Scraping",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;