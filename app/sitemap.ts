import type { MetadataRoute } from "next";
import { projects } from "./lib/projects";
import { absoluteUrl, locales, localeHref } from "./lib/site";

function alternatesFor(path = ""): Record<string, string> {
	return {
		...Object.fromEntries(
			locales.map((locale) => [locale, absoluteUrl(localeHref(locale, path))]),
		),
		"x-default": absoluteUrl(localeHref("en", path)),
	};
}

export default function sitemap(): MetadataRoute.Sitemap {
	const homeAlternates = alternatesFor();

	const homePages: MetadataRoute.Sitemap = locales.map((lang) => ({
		url: absoluteUrl(localeHref(lang)),
		lastModified: new Date(),
		changeFrequency: "monthly",
		priority: 1,
		alternates: { languages: homeAlternates },
	}));

	const projectPages: MetadataRoute.Sitemap = projects.flatMap((project) => {
		const path = `projects/${project.slug}`;
		const languages = alternatesFor(path);
		return locales.map((lang) => ({
			url: absoluteUrl(localeHref(lang, path)),
			lastModified: new Date(project.date),
			changeFrequency: "yearly" as const,
			priority: 0.7,
			alternates: { languages },
		}));
	});

	return [...homePages, ...projectPages];
}
