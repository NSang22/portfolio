"use client";

import React from "react";
import ScrollReveal from "./scrollReveal";

const projects = [
  {
    id: 1,
    title: "Florida Resource Map",
    description: [
      "RAG-powered civic-tech platform surfacing verified social services.",
      "Built scraping + validation pipelines for structured resource aggregation.",
    ],
    technologies: ["LangChain", "Python", "RAG", "Web Scraping"],
  },
  {
    id: 2,
    title: "BMO Care",
    description: [
      "AI pediatric hospital companion detecting pain and emotion in real time.",
      "Multimodal system integrating voice AI, CV, and wearable data.",
    ],
    technologies: ["Python", "React", "CV", "NLP", "Raspberry Pi"],
  },
  {
    id: 3,
    title: "DataSmart",
    description: [
      "AI-powered data marketplace enabling natural-language dataset testing.",
      "Hackathon-winning system with SQL validation + Snowflake integration.",
    ],
    technologies: ["Python", "SQL", "Snowflake", "Solana"],
  },
  {
    id: 4,
    title: "AORA",
    description: [
      "AI productivity assistant unifying tasks, calendar, and email via NLP.",
      "Used to automate scheduling and follow-ups.",
    ],
    technologies: ["Python", "LLMs", "REST APIs"],
  },
  {
    id: 5,
    title: "Project ALIGN",
    description: [
      "Evaluated AI-generated literacy stories using ML + statistical modeling.",
      "Built alignment scoring system with feature extraction + XGBoost.",
    ],
    technologies: ["Python", "XGBoost", "PCA"],
  },
  {
    id: 6,
    title: "Zika/Dengue",
    description: [
      "Analyzed immune response patterns from prior dengue exposure to Zika.",
      "Modeled cross-reactive immunity using clinical datasets.",
    ],
    technologies: ["R", "Python", "Statistical Modeling"],
  },
  {
    id: 7,
    title: "Skylink",
    description: [
      "C++ flight planner using A* and Dijkstra on large airline datasets.",
      "Optimizes for travel time and delay risk.",
    ],
    technologies: ["C++", "Graph Algorithms"],
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="min-h-screen text-white px-4 md:px-16 py-24"
    >
      <ScrollReveal>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          <span className="text-white">projects</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#18181b] rounded-lg overflow-hidden shadow-lg p-4 md:p-6 flex flex-col justify-between min-h-[280px] md:min-h-[320px]"
            >
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-1">
                  {project.title}
                </h3>
                <div className="flex flex-col gap-1 mb-2">
                  {project.description.map((line, i) => (
                    <p key={i} className="text-gray-400 text-sm md:text-base">
                      {line}
                    </p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#111827] text-white px-2 py-0.5 rounded text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Projects;
