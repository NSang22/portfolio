"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

const navItems = [
  { href: "#selected-work", label: "Selected Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const projects = [
  {
    title: "Florida Resource Map",
    category: "Civic AI",
    summary:
      "Built the data and retrieval layer for a verified social-services platform serving nonprofits across Florida.",
    detail:
      "RAG pipelines, scraping orchestration, data normalization, and validation workflows for large public-service datasets.",
  },
  {
    title: "BMO Care",
    category: "Healthcare Systems",
    summary:
      "Designed an AI pediatric hospital companion that reads pain and emotion signals in real time.",
    detail:
      "Blended voice interfaces, computer vision, and sensor input into one decision-support experience.",
  },
  {
    title: "DataSmart",
    category: "Data Infrastructure",
    summary:
      "Created a natural-language testing layer for datasets and warehouse logic in a hackathon-winning product.",
    detail:
      "Focused on SQL validation, rapid feedback loops, and credible evaluation for data teams.",
  },
];

const timeline = [
  {
    role: "AI and Backend Development Intern",
    org: "Florida Community Innovation Foundation",
    span: "2024 to Present",
    impact:
      "Owns backend direction for the Florida Resource Map, translating product requirements into scalable systems and leading a six-person engineering effort.",
  },
  {
    role: "Scrum Master and Team Lead",
    org: "Project ALIGN, University of Florida",
    span: "2025",
    impact:
      "Led the modeling workflow for literacy-alignment scoring, combining clustering, XGBoost, and evaluation design for large batches of AI-generated stories.",
  },
  {
    role: "Research Intern",
    org: "Florida International University",
    span: "2023 to 2024",
    impact:
      "Worked on bioinformatics-focused AI research, contributing to domain-tuned language models and biological sequence analysis.",
  },
];

const capabilities = [
  "LLM systems and retrieval design",
  "Backend architecture for public-facing products",
  "Applied ML for healthcare and biotech",
  "Product-minded technical leadership",
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--paper)] text-[var(--ink)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(77,233,200,0.1),transparent_30%),radial-gradient(circle_at_20%_20%,rgba(255,155,84,0.08),transparent_24%),linear-gradient(135deg,rgba(255,255,255,0.01),transparent_40%)]" />
      <div className="noise-layer pointer-events-none absolute inset-0 opacity-50" />

      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[rgba(6,19,29,0.82)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
          >
            Nikhil Sangamkar
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="mailto:nsangamkar1222@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--ink)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] transition-transform duration-300 hover:-translate-y-0.5"
          >
            Say Hello
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      <section className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-18 pt-10 md:px-10 md:pb-24 md:pt-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-10">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 rounded-full border border-[var(--line)] bg-[rgba(10,33,47,0.78)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--muted)]"
          >
            <Sparkles className="h-3.5 w-3.5 text-[var(--accent)]" />
            Systems design for healthcare, biotech, and public infrastructure
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--muted)]">
              Software engineer / applied AI / backend systems
            </p>
            <h1 className="max-w-4xl font-[family:var(--font-display)] text-6xl leading-[0.9] md:text-8xl lg:text-[8.5rem]">
              Building hard systems that still have to feel effortless.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl">
              I work at the layer where ML, backend engineering, and product
              judgment meet. The output has to be technically serious, useful
              under pressure, and clean enough to earn trust.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid gap-5 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]"
          >
            <div className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
                    Active node
                  </p>
                  <p className="mt-4 text-2xl leading-tight">
                    Shipping backend infrastructure, retrieval pipelines, and
                    AI-assisted workflows that can survive real usage.
                  </p>
                </div>
                <div className="mt-1 rounded-full border border-[var(--line)] bg-[rgba(77,233,200,0.08)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                  Online
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#selected-work"
                  className="rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--paper)] transition-colors hover:bg-[var(--accent)]"
                >
                  View work
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-[var(--ink)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  Start a conversation
                </a>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-strong)] p-6 text-[var(--ink)]">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
                  Operating from
                </p>
                <div className="mt-4 flex items-center gap-3 text-2xl">
                  <MapPin className="h-5 w-5 text-[var(--accent-soft)]" />
                  Gainesville, Florida
                </div>
              </div>
              <div className="rounded-[1.5rem] border border-[var(--line)] bg-[linear-gradient(145deg,rgba(77,233,200,0.12),rgba(77,233,200,0.04))] p-6 text-[var(--ink)]">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
                  Operating principle
                </p>
                <p className="mt-4 text-lg leading-7">
                  Clear architecture, measurable behavior, and interfaces that
                  do not waste attention.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.25 }}
          className="flex flex-col gap-6 lg:pt-14"
        >
          <div className="relative overflow-hidden rounded-[1.8rem] border border-[var(--line)] bg-[var(--surface)] p-4 shadow-[0_28px_90px_rgba(0,0,0,0.28)]">
            <div className="absolute right-4 top-4 z-10 rounded-full border border-[var(--line)] bg-[rgba(6,19,29,0.95)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
              Visual ID
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem] bg-[linear-gradient(145deg,#102838,#0b1b27)]">
              <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(6,19,29,0.02),rgba(6,19,29,0.38))]" />
              <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top_right,rgba(77,233,200,0.12),transparent_30%)]" />
              <Image
                src="/images/nik_headshot-modified.png"
                alt="Portrait of Nikhil Sangamkar"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface)] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
                Capabilities
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--muted)]">
                {capabilities.map((item) => (
                  <li
                    key={item}
                    className="border-b border-[var(--line)] pb-3 last:border-b-0 last:pb-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface)] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
                Links
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/nikhilsangamkar/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-4 py-2 text-sm transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/NSang22"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-4 py-2 text-sm transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href="mailto:nsangamkar1222@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-4 py-2 text-sm transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </a>
              </div>
            </div>
          </div>
        </motion.aside>
      </section>

      <section
        id="selected-work"
        className="mx-auto max-w-7xl px-6 py-8 md:px-10 md:py-16"
      >
        <div className="grid gap-10 lg:grid-cols-[0.45fr_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--muted)]">
              Selected Work
            </p>
            <h2 className="mt-4 max-w-sm font-[family:var(--font-display)] text-5xl leading-none md:text-6xl">
              Products built like systems, not demos.
            </h2>
          </div>

          <div className="space-y-5">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className="group grid gap-5 rounded-[1.6rem] border border-[var(--line)] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(77,233,200,0.22)] hover:shadow-[0_24px_70px_rgba(0,0,0,0.22)] md:grid-cols-[0.3fr_1fr]"
              >
                <div className="flex items-start justify-between gap-4 border-b border-[var(--line)] pb-4 md:block md:border-b-0 md:pb-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
                    0{index + 1}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
                    {project.category}
                  </p>
                </div>
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl md:text-3xl">{project.title}</h3>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-[var(--muted)] transition-colors group-hover:text-[var(--accent)]" />
                  </div>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--ink)]">
                    {project.summary}
                  </p>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                    {project.detail}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="mx-auto max-w-7xl px-6 py-8 md:px-10 md:py-16"
      >
        <div className="rounded-[1.8rem] border border-[var(--line)] bg-[var(--surface-strong)] p-6 text-[var(--ink)] md:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.45fr_1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[var(--muted)]">
                Experience
              </p>
              <h2 className="mt-4 max-w-sm font-[family:var(--font-display)] text-5xl leading-none md:text-6xl">
                Shipping, leading, researching.
              </h2>
            </div>

            <div className="space-y-6">
              {timeline.map((item) => (
                <div
                  key={item.role}
                  className="grid gap-5 border-b border-[var(--line)] pb-6 last:border-b-0 last:pb-0 md:grid-cols-[0.34fr_1fr]"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent-soft)]">
                      {item.span}
                    </p>
                    <p className="mt-2 text-lg">{item.org}</p>
                  </div>
                  <div>
                    <h3 className="text-2xl">{item.role}</h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                      {item.impact}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-7xl px-6 pb-20 pt-8 md:px-10 md:pb-24 md:pt-16"
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-[1.8rem] border border-[var(--line)] bg-[var(--surface)] p-6 md:p-10">
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--muted)]">
              Contact
            </p>
            <h2 className="mt-4 max-w-2xl font-[family:var(--font-display)] text-5xl leading-none md:text-6xl">
              If the brief is hard, send it over.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              I am most useful where the constraints are real: ambiguous data,
              complex stakeholders, demanding reliability, and systems that
              cannot just look impressive in screenshots.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:nsangamkar1222@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--paper)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Email me
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--ink)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                Resume
              </a>
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-[rgba(77,233,200,0.2)] bg-[linear-gradient(145deg,rgba(10,33,47,0.96),rgba(8,23,34,0.98))] p-6 text-[var(--ink)] md:p-10">
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--muted)]">
              Terminal
            </p>
            <div className="mt-8 space-y-6">
              <a
                href="mailto:nsangamkar1222@gmail.com"
                className="block border-b border-[var(--line)] pb-5 text-2xl"
              >
                nsangamkar1222@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/nikhilsangamkar/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between border-b border-[var(--line)] pb-5 text-lg"
              >
                LinkedIn
                <ArrowUpRight className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/NSang22"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between text-lg"
              >
                GitHub
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
