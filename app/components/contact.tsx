import { ArrowUpRight, Mail } from "lucide-react";
import type { Dictionary } from "../lib/i18n";
import { site } from "../lib/site";
import { GithubIcon, LinkedinIcon } from "./brand-icons";
import { Reveal } from "./reveal";
import { SectionLabel } from "./section-label";

const icons = {
	github: GithubIcon,
	email: Mail,
	linkedin: LinkedinIcon,
} as const;

export function Contact({ dict }: { dict: Dictionary }) {
	return (
		<section
			id="contact"
			className="section relative overflow-hidden border-t border-line/15"
		>
			<div className="pointer-events-none absolute -bottom-[38vw] -right-[26vw] h-[72vw] w-[72vw] rounded-full bg-accent/[0.07] blur-[100px] dark:bg-accent/[0.12]" />
			<div className="pointer-events-none absolute -right-[14vw] bottom-[8vw] hidden h-[38vw] w-[38vw] rounded-full border border-line/10 lg:block" />

			<div className="shell relative">
				<Reveal>
					<SectionLabel index="06">{dict.contact.label}</SectionLabel>
				</Reveal>

				<Reveal delay={80}>
					<h2 className="mt-8 text-[clamp(2.9rem,8.5vw,8.5rem)] leading-[0.9]">
						<span className="display block">{dict.contact.titleLine1}</span>
						<span className="serif block text-accent">
							{dict.contact.titleLine2}
						</span>
					</h2>
				</Reveal>

				<div className="mt-14 grid gap-12 border-t border-line/20 pt-8 lg:grid-cols-12 lg:gap-8">
					<div className="lg:col-span-5">
						<Reveal delay={120}>
							<p className="max-w-sm text-sm leading-relaxed text-muted">
								{dict.contact.text}
							</p>
						</Reveal>
						<Reveal delay={180}>
							<a
								href={`mailto:${site.email}`}
								className="link-underline group mt-8 inline-flex max-w-full items-start gap-3 text-lg font-medium tracking-[-0.02em] md:text-xl"
							>
								<span className="break-all">{site.email}</span>
								<ArrowUpRight
									size={18}
									className="mt-1 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
								/>
							</a>
						</Reveal>
						<Reveal delay={220}>
							<p className="eyebrow mt-6 text-accent">
								{dict.contact.emailCta}
							</p>
						</Reveal>
					</div>

					<div className="lg:col-span-7">
						<div className="grid gap-3 sm:grid-cols-3">
							{Object.entries(dict.contact.socials).map(
								([key, social], index) => {
									const Icon = icons[key as keyof typeof icons];
									const external = !social.href.startsWith("mailto:");
									return (
										<Reveal key={key} delay={index * 80}>
											<a
												href={social.href}
												target={external ? "_blank" : undefined}
												rel={external ? "noreferrer" : undefined}
												className="group flex h-full flex-col justify-between gap-8 border border-line/20 p-5 transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-accent-ink"
											>
												<div className="flex items-start justify-between gap-4">
													<Icon
														size={18}
														strokeWidth={1.5}
														className="text-muted transition-colors group-hover:text-accent-ink"
													/>
													<ArrowUpRight
														size={14}
														className="text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-ink"
													/>
												</div>
												<div>
													<p className="eyebrow text-muted transition-colors group-hover:text-accent-ink/70">
														{social.label}
													</p>
													<p className="mt-2 break-all text-sm font-medium">
														{social.handle}
													</p>
												</div>
											</a>
										</Reveal>
									);
								},
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
