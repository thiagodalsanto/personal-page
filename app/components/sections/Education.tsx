"use client";

import ScrollReveal from "../effects/ScrollReveal";
import { useT } from "../../hooks/useT";

export default function Education() {
  const t = useT();

  return (
    <section
      id="education"
      className="w-full min-h-screen flex items-center justify-center
      dark:bg-gradient-to-b dark:from-zinc-900 dark:to-black 
      bg-gradient-to-b from-zinc-300 to-white 
      py-8"
    >
      <div className="max-w-4xl w-full px-6">

        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl font-display text-center mb-20 
          dark:text-white text-zinc-800">
            {t.education.title}
          </h2>
        </ScrollReveal>

        <div className="flex flex-col divide-y dark:divide-zinc-800 divide-zinc-300">

          {t.education.items.map((edu, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="py-10 group">

                <div className="flex flex-col md:flex-row md:justify-between gap-4">

                  {/* left */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold 
                    dark:text-white text-zinc-800">
                      {edu.course}
                    </h3>

                    <p className="mt-2 text-sm dark:text-zinc-400 text-zinc-600">
                      {edu.school}
                    </p>
                  </div>

                  {/* right */}
                  <div className="text-left md:text-right">
                    <p className="text-sm dark:text-zinc-400 text-zinc-600">
                      {edu.period}
                    </p>

                    {edu.duration && (
                      <p className="text-xs mt-1 dark:text-zinc-500 text-zinc-500">
                        {edu.duration}
                      </p>
                    )}
                  </div>
                </div>

                {/* description */}
                <p className="mt-4 text-sm leading-relaxed 
                dark:text-zinc-500 text-zinc-600 max-w-2xl">
                  {edu.description}
                </p>
              </div>
            </ScrollReveal>
          ))}

        </div>
      </div>
    </section>
  );
}