import type { Dictionary } from "../lib/i18n";
import { projects } from "../lib/projects";
import {
	absoluteUrl,
	localeHref,
	site,
	type Locale,
} from "../lib/site";

export function HomeStructuredData({
	lang,
	dict,
}: {
	lang: Locale;
	dict: Dictionary;
}) {
	const person = {
		"@type": "Person",
		"@id": `${site.url}/#person`,
		name: site.name,
		url: site.url,
		jobTitle: "Software Engineer",
		description: dict.meta.description,
		sameAs: [site.github, site.linkedin, site.scholar],
		knowsAbout: [
			"Web Development",
			"Mobile Development",
			"React",
			"Next.js",
			"Angular",
			"Flutter",
			"React Native",
			"TypeScript",
			"User Experience",
			"Accessibility",
		],
		alumniOf: [
			{
				"@type": "CollegeOrUniversity",
				name: "Polytechnic Institute of Setúbal (IPS)",
			},
			{
				"@type": "CollegeOrUniversity",
				name: "Technological Federal University of Paraná (UTFPR)",
			},
		],
	};

	const profile = {
		"@context": "https://schema.org",
		"@type": "ProfilePage",
		"@id": `${absoluteUrl(localeHref(lang))}#profile`,
		url: absoluteUrl(localeHref(lang)),
		inLanguage: lang,
		name: dict.meta.title,
		description: dict.meta.description,
		mainEntity: person,
	};

	const website = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		"@id": `${site.url}/#website`,
		url: site.url,
		name: site.name,
		inLanguage: lang,
		description: dict.meta.description,
		author: { "@id": `${site.url}/#person` },
	};

	const projectList = {
		"@context": "https://schema.org",
		"@type": "ItemList",
		name: dict.work.title,
		itemListElement: projects.map((project, index) => ({
			"@type": "ListItem",
			position: index + 1,
			item: {
				"@type": "CreativeWork",
				name: project.title,
				description: project.detail[lang].description,
				url: absoluteUrl(localeHref(lang, `projects/${project.slug}`)),
				image: absoluteUrl(project.image),
				keywords: project.technologies.join(", "),
				author: { "@id": `${site.url}/#person` },
			},
		})),
	};

	const publicationList = {
		"@context": "https://schema.org",
		"@type": "ItemList",
		name: dict.publications.title,
		itemListElement: dict.publications.items.map(
			(publication, index) => ({
				"@type": "ListItem",
				position: index + 1,
				item: {
					"@type": "ScholarlyArticle",
					headline: publication.title,
					url: publication.url,
					publisher: {
						"@type": "Organization",
						name: publication.publisher,
					},
					author: { "@id": `${site.url}/#person` },
				},
			}),
		),
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify([
					profile,
					website,
					projectList,
					publicationList,
				]).replace(/</g, "\\u003c"),
			}}
		/>
	);
}
