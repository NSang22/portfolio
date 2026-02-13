"use client";

import React from "react";
import ScrollReveal from "./scrollReveal";

// Replace with your actual project data
const projects = [
  {
    id: 1,
    title: "Florida Resource Map",
    description:
      "A civic-tech platform that aggregates and surfaces verified social services across Florida, helping communities access housing, food, healthcare, and legal aid.",
    technologies: ["LangChain", "Python", "Web Scraping", "RAG"],
    demoLink: "https://www.floridaresourcemap.org/",
  },
  {
    id: 2,
    title: "BMO Care",
    description:
      "BMO Care is an AI-powered pediatric hospital companion that provides 24/7 emotional support to children while giving nurses real-time insights into vitals, pain reports, and emotional state. By combining voice AI, computer vision, and wearable health data, it bridges the gap between young patients, families, and clinical staff.",
    technologies: ["Python", "Raspberry Pi", "React", "Computer Vision", "NLP"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    id: 3,
    title: "DataSmart",
    description:
      "DataSmart is an AI-powered data marketplace that lets users test datasets with natural-language queries before buying. Built on Solana micropayments and automatic data validation, it makes buying and selling data transparent and secure.",
    technologies: ["Python", "Pandas", "SQL", "Data Analysis"],
  },
  {
    id: 4,
    title: "AORA",
    description:
      "An AI-powered productivity assistant that unifies calendars, email, tasks, and meetings into a single conversational interface. Features a modular backend architecture enabling natural-language actions like scheduling, reminders, and follow-ups across multiple services.",
    technologies: ["Python", "NLP", "REST APIs", "LLMs"],
  },
  {
    id: 5,
    title: "Project ALIGN",
    description:
      "Curriculum alignment evaluations for AI-generated stories using machine learning and statistical techniques to assess alignment with the UF Literacy Institute Foundations curriculum.",
    technologies: ["XGBoost", "PCA", "Python", "Machine Learning"],
  },
  {
    id: 6,
    title: "Bioinformatics Project – Zika/Dengue Prior Exposure",
    description:
      "A computational biology study analyzing how prior dengue exposure influences immune response to Zika infection. Involves data analysis and modeling to identify patterns in cross-reactive immunity using biological and clinical datasets.",
    technologies: ["R", "Python", "Bioinformatics", "Statistical Modeling"],
  },
  {
    id: 7,
    title: "Skylink",
    description:
      "A C++ flight-route planner that computes optimal itineraries using graph algorithms (A* and Dijkstra) over large-scale airline and delay datasets. The system ranks routes by total travel time and delay risk using real-world aviation data.",
    technologies: ["C++", "A*", "Dijkstra", "Graph Algorithms"],
  },
  {
    id: 8,
    title: "The Genome Project",
    description:
      "A disease prediction and diagnosis tool leveraging the Human Phenotype Ontology (HPO) database, mapping patient-reported symptoms to standardized medical terms and disease annotations.",
    technologies: ["Flask", "React", "Phrank", "HPO Database"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    id: 9,
    title: "Firewatch",
    description:
      "A wildfire tracking platform designed for firefighters, authorities, and communities across the United States using the XWeather API to dynamically fetch fire reports.",
    technologies: ["MongoDB", "React", "Node.js", "Express.js", "Auth0"],
    demoLink: "https://devpost.com/software/firewatch-1gwft9",
    githubLink: "https://github.com/Seedname/SwamphacksX",
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
                <p className="text-gray-400 text-sm md:text-base mb-2">
                  {project.description}
                </p>
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
              <div className="flex gap-3">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#111827] hover:underline text-sm"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Projects;
