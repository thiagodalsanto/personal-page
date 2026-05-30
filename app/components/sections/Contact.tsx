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
      className="relative w-full min-h-screen flex flex-col items-center justify-center dark:bg-gradient-to-b dark:from-black dark:via-zinc-950/50 dark:to-zinc-900 py-32 md:py-40"
    >
        <div className="w-full flex items-center justify-center flex-1 px-4">
        <div className="w-full max-w-6xl">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-display dark:text-white mb-20 text-center">
              Get In Touch
            </h2>
          </ScrollReveal>
          
          <div className="grid w-full grid-cols-1 gap-6 md:gap-8 sm:grid-cols-3">
            {Object.values(t.contact.socials).map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <Link
                  href={s.href}
                  target="_blank"
                  className="group h-full"
                >
                  <div className="p-8 h-full rounded-2xl dark:bg-gradient-to-br dark:from-zinc-900/60 dark:to-zinc-950/40 border dark:border-zinc-700/40 backdrop-blur-sm hover:dark:border-white/20 transition-all duration-300 flex flex-col items-center justify-center gap-6">
                    <div className="relative">
                      <div className="absolute inset-0 dark:bg-gradient-to-r dark:from-blue-500 dark:to-purple-500 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
                      <span className="relative flex items-center justify-center w-16 h-16 border-2 rounded-full dark:border-zinc-600 dark:bg-zinc-900/50 group-hover:dark:border-white/50 group-hover:dark:bg-zinc-800/50 transition-all duration-300 dark:text-zinc-300 group-hover:dark:text-white">
                        {iconMap[s.icon as keyof typeof iconMap]}
                      </span>
                    </div>

                    <div className="flex flex-col items-center text-center w-full">
                      <span className="text-lg md:text-xl dark:text-white font-semibold group-hover:dark:text-blue-300 transition-colors truncate w-full px-2">
                        {s.handle}
                      </span>
                      <span className="mt-2 text-sm dark:text-zinc-400 group-hover:dark:text-zinc-300 transition-colors">
                        {s.label}
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
