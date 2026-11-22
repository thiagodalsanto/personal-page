import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Dictionary } from "../lib/i18n";
import { projects } from "../lib/projects";
import { localeHref, site, type Locale } from "../lib/site";
import { SectionHead } from "./section-head";

export function WorkList({
	lang,
	dict,
}: {
	lang: Locale;
	dict: Dictionary;
}) {
	return (
		<section id="work" className="shell section border-t border-line/15">
			<SectionHead
				index="03"
				label={dict.work.label}
				title={dict.work.title}
				aside={dict.work.subtitle}
			/>

			<div className="grid gap-3 md:grid-cols-2">
				{projects.map((project, index) => {
					const detail = project.detail[lang];
					return (
						<Link
							key={project.slug}
							href={localeHref(lang, `projects/${project.slug}`)}
							className="work-item group"
						>
							<div className="flex items-center justify-between gap-4">
								<span className="work-num">0{index + 1}</span>
								<span className="work-status">
									{project.status === "ongoing"
										? dict.work.ongoing
										: dict.work.shipped}
								</span>
							</div>

							<h3 className="work-title mt-8">{project.title}</h3>
							<p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
								{detail.description}
							</p>

							<div className="mt-5 flex flex-wrap gap-1.5">
								{project.technologies.slice(0, 4).map((tech) => (
									<span key={tech} className="tag">
										{tech}
									</span>
								))}
								{project.technologies.length > 4 ? (
									<span className="tag text-accent">
										+{project.technologies.length - 4}
									</span>
								) : null}
							</div>

							<div className="mt-auto flex items-center justify-between gap-4 pt-9">
								<span className="eyebrow text-muted">
									{dict.work.viewCase}
								</span>
								<span className="work-arrow" aria-hidden="true">
									<ArrowUpRight size={14} />
								</span>
							</div>
						</Link>
					);
				})}
			</div>

			<div className="mt-6 flex flex-wrap items-center justify-between gap-4">
				<p className="eyebrow text-muted">{dict.work.count}</p>
				<a
					href={site.github}
					target="_blank"
					rel="noreferrer"
					className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted transition-colors hover:text-ink"
				>
					{dict.work.moreOnGithub}
					<ArrowUpRight
						size={13}
						className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
					/>
				</a>
			</div>
		</section>
	);
}
