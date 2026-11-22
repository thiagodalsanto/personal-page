import { ArrowDown, ArrowUpRight } from "lucide-react";
import type { Dictionary } from "../lib/i18n";
import { site } from "../lib/site";

export function Cover({ dict }: { dict: Dictionary }) {
	const [lineOne, lineTwo, lineThree] = dict.hero.headline;
	const current = dict.experience.items[0];

	return (
		<section className="relative overflow-hidden">
			<div className="shell pb-14 pt-9 md:pb-20 md:pt-14 lg:pt-12">
				<div className="rise flex flex-wrap items-center justify-between gap-3 border-b border-line/15 pb-4">
					<p className="eyebrow text-muted">{dict.hero.eyebrow}</p>
					<p className="eyebrow text-muted">
						{dict.hero.location} · 38.7°N 9.1°W
					</p>
				</div>

				<div className="relative mt-10 md:mt-14">
					<div className="rise">
						<h1 className="hero-title">
							{lineOne}
							<br />
							{lineTwo}
							<span className="accent-line">{lineThree}</span>
						</h1>
					</div>

					<div className="cover-body">
						<div className="rise">
							<p className="max-w-xl text-[15px] leading-relaxed text-muted md:text-base">
								{dict.hero.intro}
							</p>

							<div className="mt-8 flex flex-wrap items-center gap-2.5">
								<a
									href="#work"
									className="group inline-flex h-10 items-center gap-2 bg-ink px-4 font-mono text-[9px] uppercase tracking-[0.12em] text-paper transition-colors hover:bg-accent hover:text-accent-ink"
								>
									{dict.hero.ctaWork}
									<ArrowDown
										size={13}
										className="transition-transform duration-300 group-hover:translate-y-0.5"
									/>
								</a>
								<a
									href="#contact"
									className="group inline-flex h-10 items-center gap-2 border border-line/25 px-4 font-mono text-[9px] uppercase tracking-[0.12em] text-ink transition-colors hover:border-ink"
								>
									{dict.hero.ctaContact}
									<ArrowUpRight
										size={13}
										className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
									/>
								</a>
							</div>
						</div>

						<aside className="rise-late">
						<dl className="fact-list">
							{dict.about.stats.map((stat) => (
								<div key={stat.label} className="fact-row">
									<dt>{stat.label}</dt>
									<dd>{stat.value}</dd>
								</div>
							))}
							<div className="fact-row">
								<dt>{dict.about.currentlyLabel}</dt>
								<dd>
									{current.role} · {current.company}
								</dd>
							</div>
						</dl>
							<a
								href={site.github}
								target="_blank"
								rel="noreferrer"
								className="group mt-4 flex items-center justify-between border-b border-line/15 py-2.5"
							>
								<span className="eyebrow text-muted">GitHub</span>
								<span className="flex items-center gap-2 text-xs">
									{site.github.replace("https://github.com/", "@")}
									<span className="work-arrow h-7 w-7">
										<ArrowUpRight size={12} />
									</span>
								</span>
							</a>
						</aside>
					</div>
				</div>

				<div
					className="mt-12 flex flex-wrap items-baseline gap-x-3 gap-y-2 border-t border-line/15 pt-4"
					data-reveal
					data-reveal-delay="90"
				>
					<span className="eyebrow text-muted">{dict.about.stackLabel}</span>
					<span className="h-px w-6 bg-line/25" />
					<p className="font-mono text-[10px] leading-relaxed tracking-[0.02em] text-muted">
						{dict.about.stack.join(" / ")}
					</p>
				</div>
			</div>
		</section>
	);
}
