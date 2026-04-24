"use client";

import { useSettings } from "../../store/useSettings";
import { useT } from "../../hooks/useT";
import Particles from "../effects/Particles";
import Nav from "../ui/Nav";
import Chevron from "../effects/Chevon";

export default function Hero() {
  const t = useT();
  const theme = useSettings((s) => s.theme);

  return (
    <section className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden px-6 sm:px-8 md:px-12">
      <Nav />

      <Particles
        className="absolute inset-0 -z-10 animate-fade-in dark:bg-black bg-zinc-100"
        color={theme === "dark" ? "255, 255, 255" : "0, 0, 0"}
        quantity={100}
      />

      <h1 className="z-10 text-center text-4xl sm:text-6xl md:text-9xl font-display text-transparent bg-clip-text dark:bg-white bg-zinc-700 animate-title leading-[0.95] px-4">
        {t.hero.name}
      </h1>

      <p className="mt-6 text-sm text-center animate-title leading-[0.95] dark:text-zinc-500 text-zinc-600">
        {t.hero.role}
      </p>

      <Chevron />
    </section>
  );
}
