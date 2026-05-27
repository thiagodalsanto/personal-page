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
      className="w-full min-h-screen flex items-center justify-center 
        dark:bg-gradient-to-b dark:from-zinc-900 dark:via-black dark:to-zinc-900
        bg-gradient-to-b from-zinc-300 via-white to-zinc-300
        py-8"
    >
      <div className="max-w-4xl w-full px-6">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl font-display dark:text-white text-zinc-700 mb-16 text-center">
            {t.publications?.title || "Publications"}
          </h2>
        </ScrollReveal>

        {publications.length > 0 && (
          <div className="space-y-6">
            {publications.map((pub, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 dark:bg-zinc-900/50 bg-zinc-300/50 rounded-2xl border dark:border-zinc-800 border-zinc-400 hover:dark:bg-zinc-800/50 hover:bg-zinc-200/50 transition-colors group"
                >
                  <div className="flex flex-col gap-3">
                    <h3 className="text-lg md:text-xl dark:text-white text-zinc-700 font-semibold group-hover:dark:text-blue-400 group-hover:text-blue-600 transition-colors">
                      {pub.title}
                    </h3>

                    <div className="flex flex-wrap gap-3 md:gap-6">
                      <span className="text-xs dark:text-zinc-500 text-zinc-400">
                        📚 {pub.publisher}
                      </span>
                      <span className="text-xs dark:text-zinc-500 text-zinc-400">
                        📅 {pub.date}
                      </span>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        )}

        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <a
              href="https://scholar.google.com/citations?user=CTTrDC8AAAAJ&hl=pt-BR&oi=ao"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 dark:bg-white bg-zinc-700 dark:text-black text-white rounded-lg font-semibold hover:dark:bg-zinc-100 hover:bg-zinc-600 transition-colors text-sm"
            >
              {t.publications?.viewProfile || "View Full Profile on Google Scholar"} →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
