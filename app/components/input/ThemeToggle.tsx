"use client";

import { useSettings } from "../../store/useSettings";

export default function ThemeToggle() {
  const theme = useSettings((s) => s.theme);
  const setTheme = useSettings((s) => s.setTheme);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-sm text-zinc-400 hover:text-white transition"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}