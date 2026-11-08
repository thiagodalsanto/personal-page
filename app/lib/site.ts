export const locales = ["en", "pt", "es", "zh"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
	en: "English",
	pt: "Português",
	es: "Español",
	zh: "中文",
};

export const ogLocales: Record<Locale, string> = {
	en: "en_US",
	pt: "pt_PT",
	es: "es_ES",
	zh: "zh_CN",
};

export const site = {
	url: "https://thiagodalsanto.pt",
	name: "Thiago Dal Santo",
	role: "Software Engineer",
	email: "thiagodalsantodaluz@gmail.com",
	github: "https://github.com/thiagodalsanto",
	linkedin: "https://www.linkedin.com/in/thiagodalsanto",
	scholar:
		"https://scholar.google.com/citations?user=CTTrDC8AAAAJ&hl=pt-BR&oi=ao",
	keywords: [
		"Thiago Dal Santo",
		"software engineer",
		"frontend developer",
		"web developer",
		"mobile developer",
		"React",
		"Next.js",
		"Angular",
		"Flutter",
		"React Native",
		"TypeScript",
		"Portugal",
		"UTFPR",
		"IPS",
	],
};

export function isLocale(value: string): value is Locale {
	return (locales as readonly string[]).includes(value);
}

export function localeHref(lang: Locale, path = ""): string {
	const clean = path.replace(/^\/+|\/+$/g, "");
	const suffix = clean ? `/${clean}` : "";
	if (lang === defaultLocale) return suffix || "/";
	return `/${lang}${suffix}`;
}

export function absoluteUrl(path: string): string {
	return `${site.url}${path === "/" ? "" : path}`;
}

export function switchLocalePath(pathname: string, target: Locale): string {
	const stripped =
		pathname.replace(/^\/(pt|es|zh)(?=\/|$)/, "") === ""
			? "/"
			: pathname.replace(/^\/(pt|es|zh)(?=\/|$)/, "");

	if (target === defaultLocale) return stripped;
	return `/${target}${stripped === "/" ? "" : stripped}`;
}

export const languageAlternates = (): Record<string, string> =>
	Object.fromEntries(
		locales.map((locale) => [locale, localeHref(locale)]),
	) as Record<string, string>;
