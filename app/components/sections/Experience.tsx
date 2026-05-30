"use client";

import ScrollReveal from "../effects/ScrollReveal";
import { useT } from "../../hooks/useT";

export default function Experience() {
  const t = useT();

  return (
    <section
      id="experience"
      className="w-full flex items-center justify-center 
        dark:bg-gradient-to-b dark:from-black dark:via-zinc-950 dark:to-black
        py-32 md:py-40"
    >
      <div className="max-w-5xl w-full px-6">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl font-display dark:text-white mb-20 text-center">
            {t.experience.title}
          </h2>
        </ScrollReveal>

        <div className="relative space-y-8">
          <div className="hidden md:block absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px dark:bg-gradient-to-b dark:from-zinc-400/20 dark:via-zinc-400/50 dark:to-zinc-400/20" />          
          {t.experience.items.map((exp, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="relative flex items-start">
                <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'md:mr-0 md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="p-6 md:p-8 dark:bg-gradient-to-br dark:from-zinc-900/60 dark:to-zinc-950/40 rounded-2xl border dark:border-zinc-700/40 backdrop-blur-sm hover:dark:border-blue-500/30 transition-all duration-300 group">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl dark:text-white font-semibold group-hover:dark:text-blue-300 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="dark:text-zinc-400 text-sm mt-1">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="dark:text-zinc-400 text-sm">
                          {exp.period}
                        </p>
                        <p className="text-xs dark:text-zinc-500 mt-1 italic">
                          {exp.duration}
                        </p>
                      </div>
                    </div>

                    <p className="dark:text-zinc-100 text-sm leading-relaxed mb-5 font-light">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.stack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 text-xs rounded-lg dark:bg-blue-500/10 dark:text-blue-300 border dark:border-blue-500/20 hover:dark:bg-blue-500/20 transition-colors font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 dark:bg-blue-400 rounded-full border-4 dark:border-black mt-2 md:mt-0" />              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
