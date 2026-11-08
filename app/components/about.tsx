import type { Dictionary } from "../lib/i18n";
import { cn } from "../lib/cn";
import { Reveal } from "./reveal";
import { SectionLabel } from "./section-label";

export function About({ dict }: { dict: Dictionary }) {
	return (
		<section id="about" className="section relative overflow-hidden">
			<span
				aria-hidden="true"
				className="display pointer-events-none absolute -right-4 top-6 select-none text-[22vw] leading-none text-line/[0.055] dark:text-line/[0.07]"
			>
				01
			</span>

			<div className="shell relative">
				<div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
					<div className="lg:col-span-4">
						<div className="lg:sticky lg:top-28">
							<Reveal>
								<SectionLabel index="01">{dict.about.label}</SectionLabel>
							</Reveal>
							<Reveal delay={80}>
								<h2 className="display mt-8 max-w-md text-[clamp(2.8rem,6vw,5.4rem)]">
									{dict.about.title}
								</h2>
							</Reveal>
							<Reveal delay={140}>
								<p className="serif mt-8 max-w-xs text-xl leading-snug text-muted md:text-2xl">
									{dict.hero.role}
								</p>
							</Reveal>
						</div>
					</div>

					<div className="lg:col-span-8 lg:pt-1">
						<Reveal delay={100}>
							<p className="max-w-3xl text-xl leading-relaxed tracking-[-0.01em] md:text-2xl lg:text-[1.65rem]">
								{dict.about.paragraphs[0]}
							</p>
						</Reveal>

						<div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-12">
							<Reveal delay={160}>
								<p className="text-sm leading-relaxed text-muted md:text-[15px]">
									{dict.about.paragraphs[1]}
								</p>
							</Reveal>
							<Reveal delay={220}>
								<p className="text-sm leading-relaxed text-muted md:text-[15px]">
									{dict.about.paragraphs[2]}
								</p>
							</Reveal>
						</div>

						<div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16">
							<Reveal delay={120}>
								<div className="border-t border-line/20">
									{dict.about.stats.map((stat, index) => (
										<div
											key={stat.label}
											className="flex items-baseline justify-between gap-4 border-b border-line/20 py-5"
										>
											<span className="eyebrow text-muted">
												{stat.label}
											</span>
											<span
												className={cn(
													"display text-right",
													index === 0
														? "text-4xl md:text-5xl"
														: "text-xl md:text-2xl",
												)}
											>
												{stat.value}
											</span>
										</div>
									))}
								</div>
							</Reveal>

							<Reveal delay={200}>
								<div>
									<div className="flex items-center gap-3">
										<span className="h-1.5 w-1.5 bg-accent" />
										<span className="eyebrow text-muted">
											{dict.about.stackLabel}
										</span>
									</div>
									<div className="mt-5 flex flex-wrap gap-2">
										{dict.about.stack.map((tech) => (
											<span
												key={tech}
												className="border border-line/20 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-muted transition-colors hover:border-ink/40 hover:text-ink"
											>
												{tech}
											</span>
										))}
									</div>
								</div>
							</Reveal>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
