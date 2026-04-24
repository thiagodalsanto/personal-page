"use client";

import LanguageSelect from "../input/LanguageSelect";
import { useT } from "../../hooks/useT";

export default function Nav() {
  const t = useT();

  return (
    <nav className="absolute top-10 left-0 w-full flex items-center justify-center animate-fade-in">
            <ul className="flex items-center gap-6">
              {[
                { href: "#about", label: t.nav.about },
                { href: "#experience", label: t.nav.experience },
                { href: "#contact", label: t.nav.contact },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="relative text-sm px-1 py-1 
                        text-zinc-700 dark:text-zinc-500 
                        transition-all duration-300 
                        hover:text-zinc-900 dark:hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
    
            <div className="absolute right-10 flex items-center gap-4">
              <LanguageSelect />
            </div>
          </nav>
  );
}
