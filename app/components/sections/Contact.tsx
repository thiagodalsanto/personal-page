"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Card } from "../ui/Card";
import ScrollReveal from "../effects/ScrollReveal";
import { useT } from "../../hooks/useT";
import Footer from "../ui/Footer";

export default function Contact() {
  const t = useT();
  
  const iconMap = {
    github: <Github size={20} />,
    mail: <Mail size={20} />,
    linkedin: <Linkedin size={20} />,
  };

  return (
    <section
      id="contact"
      className="relative w-screen h-screen flex items-center justify-center dark:bg-gradient-to-tl dark:from-zinc-900/0 dark:via-zinc-900 dark:to-zinc-900/0 bg-gradient-to-tl from-white/0 via-zinc-200 to-white/0"
    >
      <div className="container flex items-center justify-center h-full px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-16">
          {Object.values(t.contact.socials).map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <Card>
                <Link
                  href={s.href}
                  target="_blank"
                  className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16"
                >
                  <span className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent" />

                  <span className="relative z-10 flex items-center justify-center w-12 h-12 border rounded-full text-zinc-200 border-zinc-500 dark:bg-zinc-900 bg-zinc-400 group-hover:text-white group-hover:border-zinc-200">
                    {iconMap[s.icon as keyof typeof iconMap]}
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
            </ScrollReveal>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
}
