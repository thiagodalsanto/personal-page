import { en } from "../i18n/translations/en";
import { es } from "../i18n/translations/es";
import { pt } from "../i18n/translations/pt";
import { zh } from "../i18n/translations/zh";
import type { Locale } from "./site";

export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = {
	en,
	pt,
	es,
	zh,
};

export function getDictionary(lang: Locale): Dictionary {
	return dictionaries[lang];
}
