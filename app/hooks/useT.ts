import { useSettings } from "../store/useSettings";
import { translations } from "../i18n/index";

export function useT() {
  const lang = useSettings((s) => s.lang);

  return translations[lang];
}