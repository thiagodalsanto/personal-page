import { useSettings } from "../store/useSettings";
import { translations } from "./index";

export function useT() {
  const lang = useSettings((s) => s.lang);

  return translations[lang];
}