"use client";

import ScrollReveal from "../effects/ScrollReveal";
import { useT } from "../../hooks/useT";

export default function About() {
  const t = useT();

  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center 
      dark:bg-gradient-to-b dark:from-black dark:to-zinc-900 
      bg-gradient-to-b from-white to-zinc-300 
      py-24"
    >
      <div className="max-w-6xl w-full px-6 md:px-10">

        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl font-display dark:text-white text-zinc-700 mb-16 text-center">
            {t.about.title}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

          <div className="text-center md:text-left">
            <ScrollReveal delay={0.2}>
              <div className="space-y-5 dark:text-zinc-400 text-zinc-500 text-base md:text-lg leading-relaxed">
                <p>{t.about.text1}</p>
                <p>{t.about.text2}</p>
                <p>{t.about.text3}</p>
              </div>
            </ScrollReveal>
          </div>

          <div className="flex flex-col gap-5 md:gap-6">

            <ScrollReveal delay={0.2}>
              <div className="p-6 rounded-2xl dark:bg-zinc-900/50 bg-zinc-300 border border-zinc-800 backdrop-blur-md">
                <p className="text-sm dark:text-zinc-500 text-zinc-500 mb-2">
                  {t.about.card1_text1}
                </p>
                <p className="text-2xl dark:text-white text-zinc-700 font-semibold">
                  {t.about.card1_text2}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="p-6 rounded-2xl dark:bg-zinc-900/50 bg-zinc-300 border border-zinc-800 backdrop-blur-md">
                <p className="text-sm dark:text-zinc-500 text-zinc-500 mb-2">
                  {t.about.card2_text1}
                </p>
                <p className="text-2xl dark:text-white text-zinc-700 font-semibold">
                  {t.about.card2_text2}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="p-6 rounded-2xl dark:bg-zinc-900/50 bg-zinc-300 border border-zinc-800 backdrop-blur-md">
                <p className="text-sm dark:text-zinc-500 text-zinc-500 mb-2">
                  {t.about.card3_text1}
                </p>
                <p className="text-2xl dark:text-white text-zinc-700 font-semibold">
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