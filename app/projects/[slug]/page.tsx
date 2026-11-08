import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectView } from "../../components/project-view";
import { getDictionary } from "../../lib/i18n";
import { buildProjectMetadata, projectStaticParams } from "../../lib/metadata";
import { getProject } from "../../lib/projects";

type Props = {
	params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
	return projectStaticParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const project = getProject(slug);
	if (!project) return {};
	return buildProjectMetadata("en", project);
}

export default async function Page({ params }: Props) {
	const { slug } = await params;
	const project = getProject(slug);
	if (!project) notFound();

	return (
		<ProjectView
			lang="en"
			dict={getDictionary("en")}
			project={project}
		/>
	);
}
