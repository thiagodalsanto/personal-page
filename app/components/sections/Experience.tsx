"use client";

import ScrollReveal from "../effects/ScrollReveal";
import { useT } from "../../hooks/useT";

export default function Experience() {
  const t = useT();

  return (
    <section
        id="experience"
        className="w-full min-h-screen flex items-center justify-center 
        dark:bg-gradient-to-b dark:from-zinc-900 dark:to-black 
        bg-gradient-to-b from-zinc-300 to-white 
        py-8"
      >
        <div className="max-w-4xl w-full px-6">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-display dark:text-white text-zinc-700 mb-16 text-center">
              {t.experience.title}
            </h2>
          </ScrollReveal>

          <div className="relative border-l dark:border-zinc-700 border-zinc-400">
            {t.experience.items.map((exp, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="mb-12 ml-6">
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
  );
}