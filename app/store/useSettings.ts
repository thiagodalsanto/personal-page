import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "dark" | "light";
type Lang = "en" | "pt" | "zh" | "es";

interface SettingsState {
  theme: Theme;
  lang: Lang;
  setTheme: (t: Theme) => void;
  setLang: (l: Lang) => void;
}

export const useSettings = create<SettingsState>()(
  persist(
    (set) => ({
      theme: "dark",
      lang: "en",
      setTheme: (theme) => set({ theme }),
      setLang: (lang) => set({ lang }),
    }),
    {
      name: "settings-storage",
    }
  )
);