import { ArrowUpRight } from "lucide-react";
import type { Dictionary } from "../lib/i18n";
import { SectionHead } from "./section-head";

export function Research({ dict }: { dict: Dictionary }) {
	return (
		<>
			<section id="education" className="shell section border-t border-line/15">
				<SectionHead
					index="04"
					label={dict.education.label}
					title={dict.education.title}
					aside={dict.education.subtitle}
				/>

				<div className="grid gap-3 md:grid-cols-2">
					{dict.education.items.map((item, index) => (
						<article
							key={item.course}
							className="card education-card flex flex-col p-6 md:p-7"
						>
							<div className="flex items-start justify-between gap-4">
								<span className="font-mono text-[10px] tracking-[0.1em] text-accent">
									0{index + 1}
								</span>
								<span className="font-mono text-[10px] tracking-[0.04em] text-muted">
									{item.period}
								</span>
							</div>

							<h3 className="mt-9 max-w-[15rem] text-xl font-medium leading-[1.15] tracking-[-0.03em]">
								{item.course}
							</h3>
							<p className="mt-2 text-[13px] leading-snug text-muted">
								{item.school}
							</p>

							<div className="mt-auto border-t border-line/15 pt-6">
								<p className="eyebrow text-muted">{dict.education.thesisLabel}</p>
								<p className="mt-2 text-xs leading-relaxed text-ink/80">
									{item.description}
								</p>
							</div>
						</article>
					))}
				</div>
			</section>

			<section
				id="publications"
				className="shell section border-t border-line/15"
			>
				<SectionHead
					index="05"
					label={dict.publications.label}
					title={dict.publications.title}
					aside={dict.publications.subtitle}
				/>

				<div>
					{dict.publications.items.map((publication) => (
						<a
							key={publication.url}
							href={publication.url}
							target="_blank"
							rel="noreferrer"
							className="pub-item group"
						>
							<span className="pub-year">{publication.date}</span>
							<span>
								<span className="pub-title block transition-colors group-hover:text-accent">
									{publication.title}
								</span>
								<span className="pub-publisher block">
									{publication.publisher}
								</span>
							</span>
							<ArrowUpRight
								size={13}
								className="mt-1 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
							/>
						</a>
					))}
				</div>

				<div className="mt-6 flex flex-wrap items-center justify-between gap-4">
					<p className="eyebrow text-muted">{dict.publications.count}</p>
					<a
						href="https://scholar.google.com/citations?user=CTTrDC8AAAAJ&hl=pt-BR&oi=ao"
						target="_blank"
						rel="noreferrer"
						className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted transition-colors hover:text-ink"
					>
						{dict.publications.viewProfile}
						<ArrowUpRight
							size={13}
							className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
						/>
					</a>
				</div>
			</section>
		</>
	);
}
