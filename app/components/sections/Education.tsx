"use client";

import ScrollReveal from "../effects/ScrollReveal";
import { useT } from "../../hooks/useT";

export default function Education() {
  const t = useT();

  return (
    <section
      id="education"
      className="w-full flex items-center justify-center
      dark:bg-gradient-to-b dark:from-black dark:via-zinc-950 dark:to-black
      py-32 md:py-40"
    >
      <div className="max-w-5xl w-full px-6">

        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl font-display text-center mb-20 dark:text-white">
            {t.education.title}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {t.education.items.map((edu, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="group">
                <div className="p-6 md:p-8 dark:bg-gradient-to-br dark:from-zinc-900/60 dark:to-zinc-950/40 rounded-2xl border dark:border-zinc-700/40 backdrop-blur-sm hover:dark:border-purple-500/30 transition-all duration-300 h-full min-h-[320px] flex flex-col">
                  
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-semibold dark:text-white group-hover:dark:text-purple-300 transition-colors">
                        {edu.course}
                      </h3>
                      <p className="mt-2 text-sm dark:text-zinc-400 font-medium">
                        {edu.school}
                      </p>
                    </div>
                    <div className="w-1 h-12 dark:bg-gradient-to-b dark:from-purple-500/60 dark:to-transparent rounded-full flex-shrink-0" />
                  </div>

                  <div className="mb-4 pb-4 border-b dark:border-zinc-700/30">
                    <p className="text-sm dark:text-zinc-400">
                      {edu.period}
                    </p>
                    {edu.duration && (
                      <p className="text-xs dark:text-zinc-500 mt-1 italic">
                        {edu.duration}
                      </p>
                    )}
                  </div>

                  <p className="text-sm leading-relaxed dark:text-zinc-300 font-light flex-1">
                    {edu.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}

        </div>
      </div>
    </section>
  );
}