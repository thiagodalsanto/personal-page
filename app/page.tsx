"use client";

import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { Github, Linkedin, Mail } from "lucide-react";
import { Card } from "./components/card";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  {
    icon: <Github size={20} />,
    href: "https://github.com/thiagodalsanto",
    label: "Github",
    handle: "thiagodalsanto",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:thiagodalsantodaluz@gmail.com",
    label: "Email",
    handle: "thiagodalsantodaluz@gmail.com",
  },
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/thiagodalsanto",
    label: "LinkedIn",
    handle: "thiagodalsanto",
  },
];

const experiences = [
  {
    company: "Stellantis Financial Services Brazil",
    role: "Software Engineer",
    period: "Oct 2024 - Feb 2026",
    duration: "1 yr 6 mos",
    stack: [
      "AWS",
      "SQL Server",
      "MySQL",
      "SSIS",
      "ETL",
      "PHP",
      "Node",
      "C#",
      "Checkmarx",
      "SonarQube",
    ],
    description:
      "Worked across two main initiatives within a financial services environment: a short-term application security and legacy modernization effort (3 months), and a longer-term data infrastructure and ETL engineering initiative. The focus was on improving system security, reliability, scalability, and operational efficiency across software and data platforms.",
  },
  {
    company: "Silicon Village",
    role: "Web Developer",
    period: "Dec 2023 - Feb 2026",
    duration: "2 yrs 3 mos",
    stack: ["Angular", "React", "TypeScript", "JavaScript", "GCP", "Firebase"],
    description:
      "Developed internal HR management platforms with a serverless architecture powered by Firebase and Google Cloud Platform (GCP), focusing on process automation, scalability, and improved internal workflows.",
  },
  {
    company: "Silicon Village",
    role: "Mobile Developer",
    period: "Dec 2023 - Feb 2026",
    duration: "2 yrs 3 mos",
    stack: ["Flutter", "TypeScript", "GCP", "Firebase", "Bitrise", "Codemagic"],
    description:
      "Developed cross-platform mobile applications using Flutter, following MVVM architecture and leveraging Firebase and GCP to deliver scalable, high-performance solutions for workforce management.",
  },
  {
    company: "AsapTech",
    role: "Mobile Developer",
    period: "Dec 2023 - Jun 2024",
    duration: "7 mos",
    stack: ["Flutter", "Firebase", "MySQL", "GraphQL", "Codemagic"],
    description:
      "Contributed to the development of a digital banking mobile application focused on payments and real-time financial operations. Built using Flutter with a modular and scalable architecture, integrating GraphQL APIs and external banking services (Qi-Tech), ensuring performance, reliability, and seamless user experience.",
  },
];

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black px-6 sm:px-8 md:px-12">
        <nav className="absolute top-10 animate-fade-in">
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-zinc-500 hover:text-zinc-300 transition"
              >
                {item.name}
              </a>
            ))}
          </ul>
        </nav>

        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />

        <h1 className="z-10 text-center text-4xl sm:text-6xl md:text-9xl font-display text-transparent bg-clip-text bg-white animate-title leading-[0.95] px-4">
          Thiago Dal Santo
        </h1>

        <p className="mt-6 text-zinc-500 text-sm text-center">
          Web & Mobile Developer
        </p>

        {/* CHEVRON */}
        <a
          href="#about"
          className="absolute bottom-10 flex items-center justify-center"
        >
          <div className="relative flex items-center justify-center">
            <svg
              className="absolute w-8 h-8 text-zinc-400 opacity-0 animate-chevron-echo-1"
              viewBox="0 0 24 24"
            >
              <path
                d="M5 9l7 7 7-7"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>

            <svg
              className="absolute w-8 h-8 text-zinc-400 opacity-0 animate-chevron-echo-2"
              viewBox="0 0 24 24"
            >
              <path
                d="M5 9l7 7 7-7"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>

            <svg
              className="w-8 h-8 text-zinc-300 animate-chevron-main"
              viewBox="0 0 24 24"
            >
              <path
                d="M5 9l7 7 7-7"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>
        </a>
      </section>

      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-zinc-900 py-24"
      >
        <div className="max-w-6xl w-full px-6 md:px-10">
          {/* TITLE */}
          <h2 className="text-4xl md:text-6xl font-display text-white mb-16 text-center">
            About
          </h2>

          {/* CONTENT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* LEFT SIDE */}
            <div className="text-center md:text-left">
              <div className="space-y-5 text-zinc-400 text-base md:text-lg leading-relaxed">
                <p>
                  Software Engineer specializing in Web development with React,
                  Next.js, and Angular, also experienced in Mobile development
                  using Flutter, building scalable applications across
                  enterprise and financial environments.
                </p>

                <p>
                  I have strong experience developing modern web applications
                  and internal platforms supported by AWS & GCP. My focus is on
                  clean architecture, performance, and building scalable,
                  maintainable front-end systems with strong UX and reliability.
                </p>

                <p>
                  BSc in Computer Science (UTFPR) and MSc in Software
                  Engineering (IPS, expected May 2026).
                </p>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col gap-5 md:gap-6">
              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-md">
                <p className="text-sm text-zinc-500 mb-2">Experience</p>
                <p className="text-2xl text-white font-semibold">4+ Years</p>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-md">
                <p className="text-sm text-zinc-500 mb-2">Focus</p>
                <p className="text-2xl text-white font-semibold">
                  Web • Mobile • UX
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-md">
                <p className="text-sm text-zinc-500 mb-2">Stack</p>
                <p className="text-2xl text-white font-semibold">
                  Next.js • React • Angular • Flutter
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section
        id="experience"
        className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-zinc-900 to-black py-20"
      >
        <div className="max-w-4xl w-full px-6">
          <h2 className="text-4xl md:text-6xl font-display text-white mb-16 text-center">
            Experience
          </h2>

          <div className="relative border-l border-zinc-700">
            {experiences.map((exp, i) => (
              <div key={i} className="mb-12 ml-6">
                <span className="absolute w-3 h-3 bg-white rounded-full -left-1.5 border border-zinc-900" />

                <div className="p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800">
                  <div className="flex flex-col md:flex-row md:justify-between gap-2">
                    <div>
                      <h3 className="text-lg md:text-xl text-white font-semibold">
                        {exp.role}
                      </h3>

                      <p className="text-zinc-400 text-sm">
                        {exp.company} • {exp.period}
                      </p>
                    </div>

                    <span className="text-xs italic text-zinc-500">
                      {exp.duration}
                    </span>
                  </div>

                  <p className="mt-4 text-zinc-400 text-sm">
                    {exp.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs rounded-full bg-zinc-800/70 text-zinc-300 border border-zinc-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="relative w-screen h-screen flex items-center justify-center bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0"
      >
        <div className="container flex items-center justify-center h-full px-4 mx-auto">
          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-16">
            {socials.map((s, i) => (
              <Card key={i}>
                <Link
                  href={s.href}
                  target="_blank"
                  className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16"
                >
                  <span className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent" />
                  <span className="relative z-10 flex items-center justify-center w-12 h-12 border rounded-full text-zinc-200 border-zinc-500 bg-zinc-900 group-hover:text-white group-hover:border-zinc-200">
                    {s.icon}
                  </span>
                  <div className="z-10 flex flex-col items-center">
                    <span className="text-xl text-zinc-200 group-hover:text-white font-display">
                      {s.handle}
                    </span>
                    <span className="mt-2 text-sm text-zinc-400 group-hover:text-zinc-200">
                      {s.label}
                    </span>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
        <div className="absolute bottom-6 w-full flex flex-col items-center justify-center text-center text-[11px] text-zinc-600 space-y-1 tracking-wide">
          <p>© {new Date().getFullYear()} Thiago Dal Santo</p>
          <p className="text-zinc-700">
            Designed & developed with Next.js & Tailwind CSS.
          </p>
        </div>
      </section>
    </div>
  );
}
