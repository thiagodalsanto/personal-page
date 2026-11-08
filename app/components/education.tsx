import type { Dictionary } from "../lib/i18n";
import { Reveal } from "./reveal";
import { SectionLabel } from "./section-label";

export function Education({ dict }: { dict: Dictionary }) {
	return (
		<section
			id="education"
			className="section border-t border-line/15 bg-surface/35"
		>
			<div className="shell">
				<div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
					<div>
						<Reveal>
							<SectionLabel index="04">
								{dict.education.label}
							</SectionLabel>
						</Reveal>
						<Reveal delay={80}>
							<h2 className="display mt-7 text-[clamp(3rem,7vw,6.5rem)]">
								{dict.education.title}
							</h2>
						</Reveal>
					</div>
					<Reveal delay={140} className="md:max-w-sm">
						<p className="text-sm leading-relaxed text-muted">
							{dict.education.subtitle}
						</p>
					</Reveal>
				</div>

				<div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-2 md:gap-10">
					{dict.education.items.map((item, index) => (
						<Reveal key={item.course} delay={index * 100}>
							<article className="group flex h-full flex-col border-t border-line/25 pt-5">
								<div className="flex flex-wrap items-center justify-between gap-3">
									<span className="eyebrow text-accent">
										ED.{String(index + 1).padStart(2, "0")}
									</span>
									<span className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted">
										{item.period}
									</span>
								</div>

								<h3 className="display mt-10 max-w-md text-[clamp(1.8rem,3vw,2.8rem)] leading-[0.95] transition-colors duration-300 group-hover:text-accent">
									{item.course}
								</h3>
								<p className="mt-3 text-sm text-muted">
									{item.school}
								</p>

								<div className="mt-auto border-t border-line/15 pt-5 md:mt-16">
									<span className="eyebrow text-muted">
										{dict.education.thesisLabel}
									</span>
									<p className="serif mt-3 max-w-md text-lg leading-snug md:text-xl">
										{item.description}
									</p>
								</div>
							</article>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
