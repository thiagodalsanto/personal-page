"use client";

import ScrollReveal from "../effects/ScrollReveal";
import { useT } from "../../hooks/useT";

interface Publication {
  title: string;
  publisher: string;
  date: string;
  url: string;
}

export default function Publications() {
  const t = useT();

  const publications: Publication[] = t.publications?.items || [];

  return (
    <section
      id="publications"
      className="w-full flex items-center justify-center 
        dark:bg-gradient-to-b dark:from-black dark:via-zinc-950 dark:to-black
        py-32 md:py-40"
    >
      <div className="max-w-4xl w-full px-6">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl font-display dark:text-white mb-20 text-center">
            {t.publications?.title || "Publications"}
          </h2>
        </ScrollReveal>

        {publications.length > 0 && (
          <div className="space-y-5 mb-12">
            {publications.map((pub, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 md:p-8 dark:bg-gradient-to-br dark:from-zinc-900/60 dark:to-zinc-950/40 rounded-2xl border dark:border-zinc-700/40 backdrop-blur-sm hover:dark:border-cyan-500/30 transition-all duration-300 group"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 dark:bg-cyan-400/60 rounded-full mt-2 flex-shrink-0" />
                      <h3 className="text-lg md:text-xl dark:text-white font-semibold group-hover:dark:text-cyan-300 transition-colors">
                        {pub.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-4 md:gap-8 ml-5 w-full justify-between">
                      <span className="text-xs dark:text-zinc-400 font-medium uppercase tracking-wider">
                        {pub.publisher}
                      </span>
                      <span className="text-xs dark:text-zinc-400 font-medium uppercase tracking-wider mx-2">
                        {pub.date}
                      </span>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        )}

        <ScrollReveal delay={0.3}>
          <div className="mt-8 text-center">
            <a
              href="https://scholar.google.com/citations?user=CTTrDC8AAAAJ&hl=pt-BR&oi=ao"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 dark:bg-gradient-to-r dark:from-cyan-600 dark:to-blue-600 dark:text-white rounded-xl font-semibold hover:dark:from-cyan-500 hover:dark:to-blue-500 transition-all duration-300 text-sm shadow-lg hover:shadow-cyan-500/20"
            >
              {t.publications?.viewProfile || "View Full Profile on Google Scholar"} →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
