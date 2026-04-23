"use client";

import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { Github, Linkedin, Mail } from "lucide-react";
import { Card } from "./components/card";
import ThemeToggle from "./components/ThemeToggle";
import LanguageSelect from "./components/LanguageSelect";
import { useT } from "./i18n/useT";
import { useSettings } from "./store/useSettings";

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

export default function Home() {
  const t = useT();
  const theme = useSettings((s) => s.theme);

  const experiences = [
    {
      company: t.experience.card1_company,
      role: t.experience.card1_title,
      period: t.experience.card1_start_end,
      duration: t.experience.card1_duration,
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
      description: t.experience.card1_description,
    },
    {
      company: t.experience.card2_company,
      role: t.experience.card2_title,
      period: t.experience.card2_start_end,
      duration: t.experience.card2_duration,
      stack: [
        "Angular",
        "React",
        "TypeScript",
        "JavaScript",
        "GCP",
        "Firebase",
      ],
      description: t.experience.card2_description,
    },
    {
      company: t.experience.card3_company,
      role: t.experience.card3_title,
      period: t.experience.card3_start_end,
      duration: t.experience.card3_duration,
      stack: [
        "Flutter",
        "TypeScript",
        "GCP",
        "Firebase",
        "Bitrise",
        "Codemagic",
      ],
      description: t.experience.card3_description,
    },
    {
      company: t.experience.card4_company,
      role: t.experience.card4_title,
      period: t.experience.card4_start_end,
      duration: t.experience.card4_duration,
      stack: ["Flutter", "Firebase", "MySQL", "GraphQL", "Codemagic"],
      description: t.experience.card4_description,
    },
  ];

  return (
    <div className="w-full overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden px-6 sm:px-8 md:px-12">
        <nav className="absolute top-10 left-0 w-full flex items-center justify-center animate-fade-in">
          {/* Menu central */}
          <ul className="flex items-center gap-6">
            <a
              href="#about"
              className="text-sm hover:text-zinc-300 dark:text-zinc-500 text-zinc-700"
            >
              {t.nav.about}
            </a>
            <a
              href="#experience"
              className="text-sm hover:text-zinc-300 dark:text-zinc-500 text-zinc-700"
            >
              {t.nav.experience}
            </a>
            <a
              href="#contact"
              className="text-sm hover:text-zinc-300 dark:text-zinc-500 text-zinc-700"
            >
              {t.nav.contact}
            </a>
          </ul>

          {/* Botões à direita */}
          <div className="absolute right-10 flex items-center gap-4">
            <LanguageSelect />
            {/* <ThemeToggle /> */}
          </div>
        </nav>
        
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in dark:bg-black bg-zinc-100"
          color={theme === "dark" ? "255, 255, 255" : "0, 0, 0"}
          quantity={100}
        />

        <h1 className="z-10 text-center text-4xl sm:text-6xl md:text-9xl font-display text-transparent bg-clip-text dark:bg-white bg-zinc-700 animate-title leading-[0.95] px-4">
          Thiago Dal Santo
        </h1>

        <p className="mt-6 text-sm text-center dark:text-zinc-500 text-zinc-600">
          {t.hero.role}
        </p>

        {/* CHEVRON */}
        <a
          href="#about"
          className="absolute bottom-10 flex items-center justify-center"
        >
          <div className="relative flex items-center justify-center">
            <svg
              className="absolute w-8 h-8 dark:text-zinc-400 text-zinc-500 opacity-0 animate-chevron-echo-1"
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
              className="absolute w-8 h-8 dark:text-zinc-400 text-zinc-500 opacity-0 animate-chevron-echo-2"
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
              className="w-8 h-8 dark:text-zinc-400 text-zinc-500 animate-chevron-main"
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
        className="relative w-full min-h-screen flex items-center justify-center 
          dark:bg-gradient-to-b dark:from-black dark:to-zinc-900 
          bg-gradient-to-b from-white to-zinc-300 
          py-24"
      >
        <div className="max-w-6xl w-full px-6 md:px-10">
          {/* TITLE */}
          <h2 className="text-4xl md:text-6xl font-display dark:text-white text-zinc-700 mb-16 text-center">
            {t.about.title}
          </h2>

          {/* CONTENT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* LEFT SIDE */}
            <div className="text-center md:text-left">
              <div className="space-y-5 dark:text-zinc-400 text-zinc-500 text-base md:text-lg leading-relaxed">
                <p>{t.about.text1}</p>

                <p>{t.about.text2}</p>

                <p>{t.about.text3}</p>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col gap-5 md:gap-6">
              <div className="p-6 rounded-2xl dark:bg-zinc-900/50 bg-zinc-300 border border-zinc-800 backdrop-blur-md">
                <p className="text-sm dark:text-zinc-500 text-zinc-500 mb-2">
                  {t.about.card1_text1}
                </p>
                <p className="text-2xl dark:text-white text-zinc-700 font-semibold">
                  {t.about.card1_text2}
                </p>
              </div>

              <div className="p-6 rounded-2xl dark:bg-zinc-900/50 bg-zinc-300 border border-zinc-800 backdrop-blur-md">
                <p className="text-sm dark:text-zinc-500 text-zinc-500 text-zinc-500 mb-2">
                  {t.about.card2_text1}
                </p>
                <p className="text-2xl dark:text-white text-zinc-700 font-semibold">
                  {t.about.card2_text2}
                </p>
              </div>

              <div className="p-6 rounded-2xl dark:bg-zinc-900/50 bg-zinc-300 border border-zinc-800 backdrop-blur-md">
                <p className="text-sm dark:text-zinc-500 text-zinc-500 mb-2">
                  {t.about.card3_text1}
                </p>
                <p className="text-2xl dark:text-white text-zinc-700 font-semibold">
                  {t.about.card3_text2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section
        id="experience"
        className="w-full min-h-screen flex items-center justify-center 
        dark:bg-gradient-to-b dark:from-zinc-900 dark:to-black 
        bg-gradient-to-b from-zinc-300 to-white 
        py-20"
      >
        <div className="max-w-4xl w-full px-6">
          <h2 className="text-4xl md:text-6xl font-display dark:text-white text-zinc-700 mb-16 text-center">
            {t.experience.title}
          </h2>

          <div className="relative border-l dark:border-zinc-700 border-zinc-400">
            {experiences.map((exp, i) => (
              <div key={i} className="mb-12 ml-6">
                <span className="absolute w-3 h-3 dark:bg-white bg-black rounded-full -left-1.5 border border-zinc-900" />

                <div className="p-6 dark:bg-zinc-900/50 bg-zinc-300/50 rounded-2xl border dark:border-zinc-800 border-zinc-400">
                  <div className="flex flex-col md:flex-row md:justify-between gap-2">
                    <div>
                      <h3 className="text-lg md:text-xl dark:text-white text-zinc-700 font-semibold">
                        {exp.role}
                      </h3>

                      <p className="dark:text-zinc-400 text-zinc-500 text-sm">
                        {exp.company} • {exp.period}
                      </p>
                    </div>

                    <span className="text-xs italic dark:text-zinc-500 text-zinc-400">
                      {exp.duration}
                    </span>
                  </div>

                  <p className="mt-4 dark:text-zinc-400 text-zinc-500 text-sm">
                    {exp.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs rounded-full dark:bg-zinc-800/70 dark:text-zinc-300 bg-zinc-400/70 text-zinc-700 border dark:border-zinc-700 border-zinc-400"
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
        className="relative w-screen h-screen flex items-center justify-center dark:bg-gradient-to-tl dark:from-zinc-900/0 dark:via-zinc-900 dark:to-zinc-900/0 bg-gradient-to-tl from-white/0 via-zinc-200 to-white/0"
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
                  <span className="relative z-10 flex items-center justify-center w-12 h-12 border rounded-full text-zinc-200 border-zinc-500 dark:bg-zinc-900 bg-zinc-400 group-hover:text-white group-hover:border-zinc-200">
                    {s.icon}
                  </span>
                  <div className="z-10 flex flex-col items-center">
                    <span className="text-xl dark:text-zinc-200 text-zinc-700 group-hover:text-white font-display">
                      {s.handle}
                    </span>
                    <span className="mt-2 text-sm dark:text-zinc-400 text-zinc-500 group-hover:text-zinc-200">
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
          <p className="text-zinc-700">{t.contact.designed}</p>
        </div>
      </section>
    </div>
  );
}
