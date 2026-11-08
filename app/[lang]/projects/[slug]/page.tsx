import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectView } from "../../../components/project-view";
import { getDictionary } from "../../../lib/i18n";
import {
	buildProjectMetadata,
} from "../../../lib/metadata";
import { getProject, projects } from "../../../lib/projects";
import { isLocale, locales } from "../../../lib/site";

type Props = {
	params: Promise<{ lang: string; slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
	return locales
		.filter((locale) => locale !== "en")
		.flatMap((lang) =>
			projects.map((project) => ({ lang, slug: project.slug })),
		);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { lang, slug } = await params;
	const project = getProject(slug);
	if (!isLocale(lang) || lang === "en" || !project) return {};
	return buildProjectMetadata(lang, project);
}

export default async function Page({ params }: Props) {
	const { lang, slug } = await params;
	const project = getProject(slug);
	if (!isLocale(lang) || lang === "en" || !project) notFound();

	return (
		<ProjectView
			lang={lang}
			dict={getDictionary(lang)}
			project={project}
		/>
	);
}
