"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import LanguageSelect from "../input/LanguageSelect";
import { useT } from "../../hooks/useT";

export default function Nav() {
  const t = useT();
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (target.closest("[data-nav]")) return;

      setMenuOpen(false);
      setLangOpen(false);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#education", label: t.nav.education },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <nav 
      onClick={(e) => e.stopPropagation()}
      className="absolute top-10 left-0 w-full flex items-center justify-center animate-fade-in px-6"
    >

      {/* DESKTOP */}
      <ul className="hidden md:flex items-center gap-6">
        {links.map((item, i) => (
          <li key={i}>
            <a
              href={item.href}
              className="text-sm px-1 py-1 
              text-zinc-700 dark:text-zinc-500 
              transition-all duration-300 
              hover:text-zinc-900 dark:hover:text-white"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* RIGHT SIDE (sempre visível) */}
      <div className="absolute right-6 flex items-center gap-3">

        <LanguageSelect 
          open={langOpen}
          setOpen={(value) => {
            setLangOpen(value);
            if (value) setMenuOpen(false);
          }}
        />

        {/* BURGER BUTTON (mobile only) */}
        <button
          onClick={() => {
            setMenuOpen(!menuOpen);
            setLangOpen(false);
          }}
          className="md:hidden p-2 rounded-lg 
          text-zinc-700 dark:text-zinc-300 
          hover:bg-zinc-200 dark:hover:bg-zinc-800 transition"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-8 right-6 w-56 rounded-2xl 
        backdrop-blur-xl bg-white/80 dark:bg-zinc-900/80 
        border border-zinc-200 dark:border-zinc-800 
        shadow-xl md:hidden">

          <ul className="flex flex-col p-4">
            {links.map((item, i) => (
              <li key={i}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 px-3 rounded-lg 
                  text-sm text-zinc-700 dark:text-zinc-300 
                  hover:bg-zinc-200 dark:hover:bg-zinc-800 transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

        </div>
      )}
    </nav>
  );
}