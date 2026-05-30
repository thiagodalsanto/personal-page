"use client";

import ScrollReveal from "../effects/ScrollReveal";
import { useT } from "../../hooks/useT";

export default function About() {
  const t = useT();

  return (
    <section
      id="about"
      className="relative w-full flex items-center justify-center 
      dark:bg-gradient-to-b dark:from-black dark:via-zinc-950 dark:to-black
      py-32 md:py-40"
    >
      <div className="max-w-6xl w-full px-6 md:px-10">

        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl font-display dark:text-white mb-16 text-center">
            {t.about.title}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

          <div className="text-center md:text-left">
            <ScrollReveal delay={0.2}>
              <div className="space-y-6 dark:text-zinc-300 text-base md:text-lg leading-relaxed font-light">
                <p>{t.about.text1}</p>
                <p>{t.about.text2}</p>
                <p>{t.about.text3}</p>
              </div>
            </ScrollReveal>
          </div>

          <div className="flex flex-col gap-4">

            <ScrollReveal delay={0.2}>
              <div className="p-6 md:p-8 rounded-2xl dark:bg-gradient-to-br dark:from-zinc-900/80 dark:to-zinc-950/50 border dark:border-zinc-700/50 backdrop-blur-md hover:dark:border-zinc-600/50 transition-all duration-300 group">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full dark:bg-blue-400/60 mt-2 flex-shrink-0" />
                  <p className="text-xs dark:text-zinc-400 uppercase tracking-wider">
                    {t.about.card1_text1}
                  </p>
                </div>
                <p className="text-2xl md:text-3xl dark:text-white font-semibold group-hover:dark:text-blue-300 transition-colors">
                  {t.about.card1_text2}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="p-6 md:p-8 rounded-2xl dark:bg-gradient-to-br dark:from-zinc-900/80 dark:to-zinc-950/50 border dark:border-zinc-700/50 backdrop-blur-md hover:dark:border-zinc-600/50 transition-all duration-300 group">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full dark:bg-purple-400/60 mt-2 flex-shrink-0" />
                  <p className="text-xs dark:text-zinc-400 uppercase tracking-wider">
                    {t.about.card2_text1}
                  </p>
                </div>
                <p className="text-2xl md:text-3xl dark:text-white font-semibold group-hover:dark:text-purple-300 transition-colors">
                  {t.about.card2_text2}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="p-6 md:p-8 rounded-2xl dark:bg-gradient-to-br dark:from-zinc-900/80 dark:to-zinc-950/50 border dark:border-zinc-700/50 backdrop-blur-md hover:dark:border-zinc-600/50 transition-all duration-300 group">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full dark:bg-emerald-400/60 mt-2 flex-shrink-0" />
                  <p className="text-xs dark:text-zinc-400 uppercase tracking-wider">
                    {t.about.card3_text1}
                  </p>
                </div>
                <p className="text-2xl md:text-3xl dark:text-white font-semibold group-hover:dark:text-emerald-300 transition-colors">
                  {t.about.card3_text2}
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </div>
    </section>
  );
}