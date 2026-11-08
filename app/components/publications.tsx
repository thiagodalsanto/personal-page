import { ArrowUpRight } from "lucide-react";
import type { Dictionary } from "../lib/i18n";
import { site } from "../lib/site";
import { Reveal } from "./reveal";
import { SectionLabel } from "./section-label";

export function Publications({ dict }: { dict: Dictionary }) {
	return (
		<section id="publications" className="section border-t border-line/15">
			<div className="shell">
				<div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
					<div>
						<Reveal>
							<SectionLabel index="05">
								{dict.publications.label}
							</SectionLabel>
						</Reveal>
						<Reveal delay={80}>
							<h2 className="display mt-7 text-[clamp(3rem,7vw,6.5rem)]">
								{dict.publications.title}
							</h2>
						</Reveal>
					</div>
					<Reveal delay={140} className="md:max-w-sm md:text-right">
						<p className="text-sm leading-relaxed text-muted md:ml-auto">
							{dict.publications.subtitle}
						</p>
						<p className="eyebrow mt-4 text-accent">
							{dict.publications.count}
						</p>
					</Reveal>
				</div>

				<div className="mt-12 border-t border-line/20 md:mt-16">
					{dict.publications.items.map((publication, index) => (
						<Reveal key={publication.url} delay={index * 50}>
							<a
								href={publication.url}
								target="_blank"
								rel="noreferrer"
								className="group block border-b border-line/20 transition-colors duration-300 hover:bg-accent hover:text-accent-ink"
							>
								<div className="grid gap-3 px-1 py-6 md:grid-cols-[2.5rem_1fr_auto] md:items-start md:gap-7 md:px-4 md:py-7">
									<span className="eyebrow pt-1 text-muted transition-colors group-hover:text-accent-ink/70">
										{String(index + 1).padStart(2, "0")}
									</span>
									<div>
										<h3 className="max-w-3xl text-base font-medium leading-snug tracking-[-0.01em] md:text-lg">
											{publication.title}
										</h3>
										<div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[9px] uppercase tracking-[0.1em] text-muted transition-colors group-hover:text-accent-ink/70">
											<span>{publication.publisher}</span>
											<span>{publication.date}</span>
										</div>
									</div>
									<ArrowUpRight
										size={18}
										strokeWidth={1.4}
										className="mt-1 hidden transition-transform duration-300 group-hover:rotate-45 md:block"
									/>
								</div>
							</a>
						</Reveal>
					))}
				</div>

				<Reveal delay={100}>
					<a
						href={site.scholar}
						target="_blank"
						rel="noreferrer"
						className="group mt-10 inline-flex h-12 items-center gap-3 border border-line/30 px-5 font-mono text-[10px] uppercase tracking-[0.13em] text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper md:mt-12"
					>
						{dict.publications.viewProfile}
						<ArrowUpRight
							size={14}
							className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
						/>
					</a>
				</Reveal>
			</div>
		</section>
	);
}
