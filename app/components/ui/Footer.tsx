"use client";

import { useT } from "../../hooks/useT";

export default function Footer() {
  const t = useT();

  return (
    <div className="absolute bottom-6 w-full flex flex-col items-center justify-center text-center text-[11px] text-zinc-600 space-y-1 tracking-wide">
        <p>
          © {new Date().getFullYear()} {t.hero.name}
        </p>
        <p className="text-zinc-700">{t.contact.designed}</p>
      </div>
  );
}