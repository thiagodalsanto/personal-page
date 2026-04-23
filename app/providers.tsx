"use client";

import { useEffect } from "react";
import { useSettings } from "./store/useSettings";

export function Providers({ children }: { children: React.ReactNode }) {
  const theme = useSettings((s) => s.theme);
  const setTheme = useSettings((s) => s.setTheme);

  useEffect(() => {
  const storedTheme = localStorage.getItem("settings-storage");

  if (!storedTheme) {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    setTheme(prefersDark ? "dark" : "light");
  }
}, []);

  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return <>{children}</>;
}