import { ArrowUpRight } from "lucide-react";
import type { Dictionary } from "../lib/i18n";
import { site } from "../lib/site";
import { CopyEmail } from "./copy-email";

export function ContactPanel({ dict }: { dict: Dictionary }) {
	const socials = [
		{
			...dict.contact.socials.email,
			external: false,
			index: "01",
		},
		{
			...dict.contact.socials.github,
			external: true,
			index: "02",
		},
		{
			...dict.contact.socials.linkedin,
			external: true,
			index: "03",
		},
	];

	return (
		<section
			id="contact"
			className="border-t border-line/15 bg-surface/35"
		>
			<div className="shell py-16 md:py-24">
				<p className="eyebrow text-muted">06 / {dict.contact.label}</p>

				<div className="mt-7 grid gap-10 lg:grid-cols-12 lg:gap-8">
					<div className="lg:col-span-7" data-reveal>
						<h2 className="display text-[clamp(2.7rem,6.5vw,5.7rem)]">
							{dict.contact.titleLine1}
							<br />
							<span className="font-light text-accent">
								{dict.contact.titleLine2}
							</span>
						</h2>
					</div>

					<div
						className="flex flex-col justify-end lg:col-span-4 lg:col-start-9"
						data-reveal
						data-reveal-delay="110"
					>
						<p className="max-w-sm text-sm leading-relaxed text-muted">
							{dict.contact.text}
						</p>
						<a
							href={`mailto:${site.email}`}
							className="group mt-7 inline-flex w-fit items-center gap-2 border-b border-line/30 pb-1 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors hover:border-accent hover:text-accent"
						>
							{dict.contact.emailCta}
							<ArrowUpRight
								size={13}
								className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
							/>
						</a>
					</div>
				</div>

				<div
					className="mt-14 flex flex-wrap items-end gap-x-5 gap-y-4"
					data-reveal
				>
					<a
						href={`mailto:${site.email}`}
						className="contact-email block w-fit border-b border-line/20 pb-2"
					>
						{site.email}
					</a>
					<CopyEmail
						email={site.email}
						label={dict.contact.copyEmail}
						copiedLabel={dict.contact.copied}
					/>
				</div>

				<div className="mt-14 grid gap-px border-t border-line/15 pt-6 sm:grid-cols-3">
					{socials.map((social) => (
						<a
							key={social.label}
							href={social.href}
							target={social.external ? "_blank" : undefined}
							rel={social.external ? "noreferrer" : undefined}
							className="group flex items-center justify-between gap-4 border-b border-line/15 py-3 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0"
						>
							<span>
								<span className="eyebrow block text-muted">
									{social.index} · {social.label}
								</span>
								<span className="mt-1.5 block text-sm transition-colors group-hover:text-accent">
									{social.handle}
								</span>
							</span>
							<ArrowUpRight
								size={13}
								className="shrink-0 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
							/>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
