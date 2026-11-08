import type { Metadata } from "next";
import { getDictionary } from "./i18n";
import { projects, type Project } from "./projects";
import {
	absoluteUrl,
	locales,
	localeHref,
	ogLocales,
	site,
	type Locale,
} from "./site";

function alternatesFor(path = ""): Record<string, string> {
	return {
		...Object.fromEntries(
			locales.map((locale) => [locale, localeHref(locale, path)]),
		),
		"x-default": localeHref("en", path),
	};
}

export function buildHomeMetadata(lang: Locale): Metadata {
	const dict = getDictionary(lang);
	const path = "/";

	return {
		title: { absolute: dict.meta.title },
		description: dict.meta.description,
		keywords: [...site.keywords, dict.hero.role],
		alternates: {
			canonical: localeHref(lang),
			languages: alternatesFor(),
		},
		openGraph: {
			type: "website",
			locale: ogLocales[lang],
			url: localeHref(lang),
			siteName: site.name,
			title: dict.meta.title,
			description: dict.meta.description,
			images: [
				{
					url: absoluteUrl("/opengraph-image"),
					width: 1200,
					height: 630,
					alt: dict.meta.ogAlt,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: dict.meta.title,
			description: dict.meta.description,
			images: [absoluteUrl("/opengraph-image")],
		},
	};
}

export function buildProjectMetadata(lang: Locale, project: Project): Metadata {
	const detail = project.detail[lang];
	const path = `projects/${project.slug}`;

	return {
		title: project.title,
		description: detail.description,
		keywords: [...project.technologies, site.name, "case study"],
		alternates: {
			canonical: localeHref(lang, path),
			languages: alternatesFor(path),
		},
		openGraph: {
			type: "article",
			locale: ogLocales[lang],
			url: localeHref(lang, path),
			siteName: site.name,
			title: project.title,
			description: detail.description,
			images: [
				{
					url: absoluteUrl(project.image),
					width: project.imageWidth,
					height: project.imageHeight,
					alt: project.imageAlt,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: project.title,
			description: detail.description,
			images: [absoluteUrl(project.image)],
		},
	};
}

export function projectStaticParams() {
	return projects.map((project) => ({ slug: project.slug }));
}
