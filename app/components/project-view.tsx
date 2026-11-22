import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "../lib/i18n";
import {
	getNextProject,
	projects,
	type Project,
} from "../lib/projects";
import {
	absoluteUrl,
	localeHref,
	site,
	type Locale,
} from "../lib/site";
import { LocaleEffect } from "./locale-effect";
import { Reveal } from "./reveal";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function ProjectView({
	lang,
	dict,
	project,
}: {
	lang: Locale;
	dict: Dictionary;
	project: Project;
}) {
	const detail = project.detail[lang];
	const index = projects.findIndex((item) => item.slug === project.slug);
	const nextProject = getNextProject(project.slug);
	const nextDetail = nextProject.detail[lang];
	const home = localeHref(lang);

	const structuredData = {
		"@context": "https://schema.org",
		"@type": "CreativeWork",
		name: project.title,
		description: detail.description,
		url: absoluteUrl(localeHref(lang, `projects/${project.slug}`)),
		...(project.image ? { image: absoluteUrl(project.image) } : {}),
		keywords: project.technologies.join(", "),
		author: {
			"@type": "Person",
			name: site.name,
			url: site.url,
		},
	};

	return (
		<>
			<a href="#main" className="skip-link">
				{dict.nav.skip}
			</a>
			<span id="top" />

			<SiteHeader lang={lang} dict={dict} />

			<main id="main" className="with-rail">
				<section className="shell pb-10 pt-8 md:pb-14 md:pt-12">
					<div className="flex flex-wrap items-center justify-between gap-3 border-b border-line/15 pb-4">
						<Link
							href={`${home}#work`}
							className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted transition-colors hover:text-ink"
						>
							<ArrowLeft
								size={13}
								className="transition-transform duration-300 group-hover:-translate-x-1"
							/>
							{dict.project.back}
						</Link>
						<p className="eyebrow text-muted">
							{dict.project.caseStudy} 0{index + 1} /{" "}
							{project.status === "ongoing"
								? dict.work.ongoing
								: dict.work.shipped}
						</p>
					</div>

					<div className="mt-9 grid gap-8 lg:grid-cols-12 lg:gap-8">
						<div className="lg:col-span-8">
							<p className="eyebrow text-accent">{detail.kind}</p>
							<h1 className="display mt-4 text-[clamp(2.5rem,6.2vw,5.8rem)]">
								{project.title}
							</h1>
							<p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
								{detail.description}
							</p>
						</div>

						<aside className="lg:col-span-4">
							<dl className="fact-list">
								<div className="fact-row">
									<dt>{dict.project.status}</dt>
									<dd>
										{project.status === "ongoing"
											? dict.work.ongoing
											: dict.work.shipped}
									</dd>
								</div>
								<div className="fact-row">
									<dt>{dict.project.type}</dt>
									<dd>{detail.kind}</dd>
								</div>
							</dl>

							<div className="mt-4 flex flex-col gap-2">
								{project.url && (
									<a
										href={project.url}
										target="_blank"
										rel="noreferrer"
										className="group flex h-10 items-center justify-between gap-3 bg-ink px-4 font-mono text-[9px] uppercase tracking-[0.1em] text-paper transition-colors hover:bg-accent hover:text-accent-ink"
									>
										{dict.project[project.primaryLabel ?? "live"]}
										<ArrowUpRight
											size={13}
											className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
										/>
									</a>
								)}
								{project.repository ? (
									<a
										href={`https://github.com/${project.repository}`}
										target="_blank"
										rel="noreferrer"
										className="group flex h-10 items-center justify-between gap-3 border border-line/25 px-4 font-mono text-[9px] uppercase tracking-[0.1em] text-ink transition-colors hover:border-ink"
									>
										{dict.project.source}
										<ArrowUpRight
											size={13}
											className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
										/>
									</a>
								) : null}
							</div>
						</aside>
					</div>
				</section>

				{project.image ? (
					<section className="shell">
						<Reveal>
							<div className="image-frame relative aspect-[16/9] border border-line/15">
								<Image
									src={project.image}
									alt={project.imageAlt ?? project.title}
									fill
									priority
									sizes="(min-width: 1280px) 1200px, 100vw"
									className="object-cover object-top"
								/>
							</div>
						</Reveal>
					</section>
				) : null}

				<section className="shell section grid gap-10 lg:grid-cols-12 lg:gap-8">
					<aside className="lg:col-span-3">
						<p className="eyebrow text-accent">01 / {dict.project.overview}</p>
					</aside>

					<div className="lg:col-span-8 lg:col-start-5">
						<Reveal>
							<p className="max-w-3xl text-[clamp(1.1rem,1.7vw,1.45rem)] leading-[1.55] tracking-[-0.015em]">
								{detail.overview}
							</p>
						</Reveal>

						{detail.sections.map((section, sectionIndex) => (
							<Reveal key={section.title} delay={sectionIndex * 70}>
								<div className="mt-12 border-t border-line/15 pt-5">
									<div className="flex items-baseline gap-4">
										<span className="font-mono text-[10px] text-accent">
											0{sectionIndex + 2}
										</span>
										<h2 className="text-lg font-medium tracking-[-0.02em] md:text-xl">
											{section.title}
										</h2>
									</div>
									<ul className="mt-5 space-y-3">
										{section.items.map((item) => (
											<li
												key={item}
												className="flex max-w-2xl gap-3 text-sm leading-relaxed text-muted"
											>
												<span className="mt-2 h-[3px] w-[3px] shrink-0 bg-accent" />
												{item}
											</li>
										))}
									</ul>
								</div>
							</Reveal>
						))}

						<Reveal>
							<div className="mt-12 border-t border-line/15 pt-5">
								<h2 className="eyebrow text-muted">{dict.project.stack}</h2>
								<div className="mt-4 flex flex-wrap gap-1.5">
									{project.technologies.map((tech) => (
										<span key={tech} className="tag">
											{tech}
										</span>
									))}
								</div>
							</div>
						</Reveal>
					</div>
				</section>

				<section className="border-t border-line/15">
					<div className="shell py-12 md:py-16">
						<p className="eyebrow text-muted">{dict.project.next}</p>
						<Link
							href={localeHref(lang, `projects/${nextProject.slug}`)}
							className="group mt-5 flex flex-col justify-between gap-6 border-t border-line/15 pt-6 sm:flex-row sm:items-end"
						>
							<div>
								<h2 className="display max-w-4xl text-[clamp(2.2rem,5.5vw,5rem)] transition-colors duration-300 group-hover:text-accent">
									{nextProject.title}
								</h2>
								<p className="mt-3 max-w-xl text-sm text-muted">
									{nextDetail.description}
								</p>
							</div>
							<span className="work-arrow h-12 w-12 shrink-0">
								<ArrowUpRight size={18} strokeWidth={1.5} />
							</span>
						</Link>
					</div>
				</section>
			</main>

			<SiteFooter lang={lang} dict={dict} />
			<LocaleEffect lang={lang} />
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
				}}
			/>
		</>
	);
}
