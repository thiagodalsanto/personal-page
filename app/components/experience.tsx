import type { Dictionary } from "../lib/i18n";
import { cn } from "../lib/cn";
import { Reveal } from "./reveal";
import { SectionLabel } from "./section-label";

export function Experience({ dict }: { dict: Dictionary }) {
	return (
		<section
			id="experience"
			className="section border-t border-line/15 bg-surface/35"
		>
			<div className="shell">
				<div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
					<div className="lg:col-span-4">
						<div className="lg:sticky lg:top-28">
							<Reveal>
								<SectionLabel index="03">
									{dict.experience.label}
								</SectionLabel>
							</Reveal>
							<Reveal delay={80}>
								<h2 className="display mt-8 max-w-sm text-[clamp(2.8rem,6vw,5.4rem)]">
									{dict.experience.title}
								</h2>
							</Reveal>
							<Reveal delay={140}>
								<p className="mt-7 max-w-xs text-sm leading-relaxed text-muted">
									{dict.experience.subtitle}
								</p>
							</Reveal>
						</div>
					</div>

					<ol className="lg:col-span-8">
						{dict.experience.items.map((item, index) => {
							const current = index === 0;
							return (
								<Reveal key={`${item.company}-${item.period}`} delay={index * 70}>
									<li className="group border-b border-line/20 first:border-t">
										<div className="grid gap-4 py-8 transition-colors duration-300 md:grid-cols-[2.5rem_1fr_auto] md:gap-7 md:py-10">
											<span
												className={cn(
													"eyebrow pt-1.5 transition-colors",
													current
														? "text-accent"
														: "text-muted/70 group-hover:text-accent",
												)}
											>
												{String(index + 1).padStart(2, "0")}
											</span>

											<div>
												<div className="flex flex-wrap items-center gap-3">
													<h3 className="display text-[clamp(1.7rem,3.4vw,2.9rem)] leading-none transition-colors duration-300 group-hover:text-accent">
														{item.role}
													</h3>
													{current && (
														<span className="border border-accent/40 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-accent">
															{dict.experience.present}
														</span>
													)}
												</div>
												<p className="mt-2 text-sm font-medium text-ink/80">
													{item.company}
												</p>
												{item.description && (
													<p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
														{item.description}
													</p>
												)}
												<div className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
													{item.stack.map((tech) => (
														<span
															key={tech}
															className="font-mono text-[9px] uppercase tracking-[0.09em] text-muted"
														>
															{tech}
														</span>
													))}
												</div>
											</div>

											<div className="flex items-start justify-between gap-4 md:flex-col md:items-end md:text-right">
												<p className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink/75">
													{item.period}
												</p>
												<p className="text-xs italic text-muted">
													{item.duration}
												</p>
											</div>
										</div>
									</li>
								</Reveal>
							);
						})}
					</ol>
				</div>
			</div>
		</section>
	);
}
