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
import { SectionLabel } from "./section-label";
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
		image: absoluteUrl(project.image),
		datePublished: project.date,
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
			<div className="page-frame hidden xl:block" aria-hidden="true" />

			<SiteHeader lang={lang} dict={dict} />

			<main id="main" className="pt-[72px]">
				<section className="shell pb-14 pt-10 md:pb-20 md:pt-16">
					<Link
						href={`${home}#work`}
						className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.13em] text-muted transition-colors hover:text-ink"
					>
						<ArrowLeft
							size={13}
							className="transition-transform duration-300 group-hover:-translate-x-1"
						/>
						{dict.project.back}
					</Link>

					<div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-8">
						<div className="lg:col-span-9">
							<p className="eyebrow flex items-center gap-3 text-muted">
								<span className="text-accent">
									({String(index + 1).padStart(2, "0")})
								</span>
								{dict.project.caseStudy}
								<span className="h-px w-8 bg-line/30" />
								<span>{project.year}</span>
							</p>
							<h1 className="display mt-6 text-[clamp(2.8rem,7.5vw,7rem)]">
								{project.title}
							</h1>
							<p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
								{detail.description}
							</p>
						</div>

						<aside className="lg:col-span-3">
							<dl className="border-t border-line/25">
								<div className="flex items-baseline justify-between gap-4 border-b border-line/20 py-3">
									<dt className="eyebrow text-muted">
										{dict.project.year}
									</dt>
									<dd className="text-sm">{project.year}</dd>
								</div>
								<div className="flex items-baseline justify-between gap-4 border-b border-line/20 py-3">
									<dt className="eyebrow text-muted">
										{dict.project.type}
									</dt>
									<dd className="max-w-[11rem] text-right text-sm">
										{detail.kind}
									</dd>
								</div>
							</dl>

							<div className="mt-5 flex flex-col gap-2">
								{project.url && (
									<a
										href={project.url}
										target="_blank"
										rel="noreferrer"
										className="group flex h-11 items-center justify-between gap-3 bg-ink px-4 font-mono text-[10px] uppercase tracking-[0.12em] text-paper transition-colors hover:bg-accent hover:text-accent-ink"
									>
										{dict.project[project.primaryLabel]}
										<ArrowUpRight
											size={14}
											className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
										/>
									</a>
								)}
								<a
									href={`https://github.com/${project.repository}`}
									target="_blank"
									rel="noreferrer"
									className="group flex h-11 items-center justify-between gap-3 border border-line/25 px-4 font-mono text-[10px] uppercase tracking-[0.12em] text-ink transition-colors hover:border-ink"
								>
									{dict.project.source}
									<ArrowUpRight
										size={14}
										className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
									/>
								</a>
							</div>
						</aside>
					</div>
				</section>

				<section className="shell">
					<Reveal>
						<div className="image-frame grain relative aspect-[16/10] overflow-hidden border border-line/15">
							<Image
								src={project.image}
								alt={project.imageAlt}
								fill
								priority
								sizes="(min-width: 1280px) 1200px, 100vw"
								className="object-cover object-top"
							/>
						</div>
					</Reveal>
				</section>

				<section className="section">
					<div className="shell grid gap-12 lg:grid-cols-12 lg:gap-8">
						<aside className="lg:col-span-3">
							<div className="lg:sticky lg:top-28">
								<SectionLabel index="CASE">
									{dict.project.overview}
								</SectionLabel>
							</div>
						</aside>

						<div className="lg:col-span-9">
							<Reveal>
								<p className="max-w-3xl text-xl leading-relaxed tracking-[-0.01em] md:text-2xl">
									{detail.overview}
								</p>
							</Reveal>

							{detail.sections.map((section, sectionIndex) => (
								<Reveal
									key={section.title}
									delay={sectionIndex * 80}
								>
									<div className="mt-14 border-t border-line/20 pt-6">
										<div className="flex items-baseline gap-4">
											<span className="eyebrow text-accent">
												0{sectionIndex + 1}
											</span>
											<h2 className="text-lg font-medium md:text-xl">
												{section.title}
											</h2>
										</div>
										<ul className="mt-6 space-y-3">
											{section.items.map((item) => (
												<li
													key={item}
													className="flex max-w-2xl gap-4 text-sm leading-relaxed text-muted md:text-base"
												>
													<span className="mt-2 h-1 w-1 shrink-0 bg-accent" />
													{item}
												</li>
											))}
										</ul>
									</div>
								</Reveal>
							))}

							<Reveal>
								<div className="mt-14 border-t border-line/20 pt-6">
									<h2 className="eyebrow text-muted">
										{dict.project.stack}
									</h2>
									<div className="mt-5 flex flex-wrap gap-2">
										{project.technologies.map((tech) => (
											<span
												key={tech}
												className="border border-line/20 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-muted"
											>
												{tech}
											</span>
										))}
									</div>
								</div>
							</Reveal>
						</div>
					</div>
				</section>

				<section className="border-t border-line/15">
					<div className="shell py-14 md:py-20">
						<p className="eyebrow text-muted">{dict.project.next}</p>
						<Link
							href={localeHref(lang, `projects/${nextProject.slug}`)}
							className="group mt-6 flex flex-col justify-between gap-6 border-t border-line/20 pt-6 sm:flex-row sm:items-end"
						>
							<div>
								<h2 className="display max-w-4xl text-[clamp(2.2rem,6vw,5.5rem)] leading-[0.92] transition-colors duration-300 group-hover:text-accent">
									{nextProject.title}
								</h2>
								<p className="mt-3 max-w-xl text-sm text-muted">
									{nextDetail.description}
								</p>
							</div>
							<span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-line/25 transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-ink">
								<ArrowUpRight size={20} strokeWidth={1.5} />
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
