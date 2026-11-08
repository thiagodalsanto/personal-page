import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "../lib/i18n";
import { projects, type Project } from "../lib/projects";
import { localeHref, site, type Locale } from "../lib/site";
import { cn } from "../lib/cn";
import { Reveal } from "./reveal";
import { SectionLabel } from "./section-label";

function ProjectCard({
	project,
	lang,
	dict,
	index,
	imageClassName,
	priority,
}: {
	project: Project;
	lang: Locale;
	dict: Dictionary;
	index: number;
	imageClassName: string;
	priority?: boolean;
}) {
	const detail = project.detail[lang];

	return (
		<Link
			href={localeHref(lang, `projects/${project.slug}`)}
			className="group flex h-full flex-col"
		>
			<div className="relative">
				<div
					className={cn(
						"image-frame grain relative overflow-hidden border border-line/15",
						imageClassName,
					)}
				>
					<Image
						src={project.image}
						alt={project.imageAlt}
						fill
						priority={priority}
						sizes="(min-width: 1024px) 58vw, 100vw"
						className="object-cover object-top"
					/>
					<div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
				</div>

				<span className="absolute left-4 top-4 z-[3] bg-paper/90 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-ink backdrop-blur">
					{String(index + 1).padStart(2, "0")} / {project.year}
				</span>
				<span className="absolute bottom-4 right-4 z-[3] grid h-12 w-12 translate-y-2 place-items-center rounded-full bg-accent text-accent-ink opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
					<ArrowUpRight size={18} strokeWidth={1.5} />
				</span>
			</div>

			<div className="mt-5 flex items-start justify-between gap-4 border-t border-line/20 pt-4">
				<div>
					<p className="eyebrow text-muted">{detail.kind}</p>
					<h3 className="display mt-2 text-[clamp(1.7rem,3vw,2.6rem)] leading-none transition-colors duration-300 group-hover:text-accent">
						{project.title}
					</h3>
				</div>
			</div>

			<p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">
				{detail.description}
			</p>

			<div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-2 pt-5">
				{project.technologies.slice(0, 4).map((tech) => (
					<span
						key={tech}
						className="font-mono text-[9px] uppercase tracking-[0.09em] text-muted"
					>
						{tech}
					</span>
				))}
				{project.technologies.length > 4 && (
					<span className="font-mono text-[9px] uppercase tracking-[0.09em] text-muted/60">
						+{project.technologies.length - 4}
					</span>
				)}
				<span className="ml-auto flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-ink transition-colors group-hover:text-accent">
					{dict.work.viewCase}
					<ArrowUpRight
						size={11}
						className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
					/>
				</span>
			</div>
		</Link>
	);
}

export function Work({
	lang,
	dict,
}: {
	lang: Locale;
	dict: Dictionary;
}) {
	return (
		<section id="work" className="section border-t border-line/15">
			<div className="shell">
				<div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
					<div>
						<Reveal>
							<SectionLabel index="02">{dict.work.label}</SectionLabel>
						</Reveal>
						<Reveal delay={80}>
							<h2 className="display mt-7 text-[clamp(3rem,7vw,6.5rem)]">
								{dict.work.title}
							</h2>
						</Reveal>
					</div>
					<Reveal delay={140} className="md:text-right">
						<p className="max-w-sm text-sm leading-relaxed text-muted md:ml-auto">
							{dict.work.subtitle}
						</p>
						<p className="eyebrow mt-4 text-accent">{dict.work.count}</p>
					</Reveal>
				</div>

				<div className="mt-14 grid gap-14 lg:mt-20 lg:grid-cols-12 lg:gap-7">
					<Reveal className="lg:col-span-7" delay={80}>
						<ProjectCard
							project={projects[0]}
							lang={lang}
							dict={dict}
							index={0}
							imageClassName="aspect-[16/11] sm:aspect-[16/10]"
							priority
						/>
					</Reveal>
					<Reveal className="lg:col-span-5 lg:pt-28" delay={180}>
						<ProjectCard
							project={projects[1]}
							lang={lang}
							dict={dict}
							index={1}
							imageClassName="aspect-[4/3]"
						/>
					</Reveal>
				</div>

				<Reveal delay={100}>
					<a
						href={site.github}
						target="_blank"
						rel="noreferrer"
						className="group mt-16 inline-flex items-center gap-3 border-b border-line/30 pb-2 font-mono text-2xs uppercase tracking-[0.14em] text-muted transition-colors hover:border-ink hover:text-ink md:mt-20"
					>
						{dict.work.moreOnGithub}
						<ArrowUpRight
							size={12}
							className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
						/>
					</a>
				</Reveal>
			</div>
		</section>
	);
}
