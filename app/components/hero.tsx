import { ArrowDown, ArrowUpRight } from "lucide-react";
import type { Dictionary } from "../lib/i18n";
import { localeHref, type Locale } from "../lib/site";
import { HeroField } from "./hero-field";

function Sparkle() {
	return (
		<svg
			viewBox="0 0 24 24"
			aria-hidden="true"
			className="h-full w-full"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.2"
		>
			<path d="M12 1v22M1 12h22M3.5 3.5l17 17M20.5 3.5l-17 17" />
		</svg>
	);
}

export function Hero({ dict }: { dict: Dictionary }) {
	return (
		<section
			id="top"
			className="relative isolate flex min-h-[100svh] flex-col overflow-hidden pt-[72px]"
		>
			<div className="absolute inset-0 -z-20 bg-paper" />
			<div className="absolute inset-0 -z-10">
				<HeroField />
			</div>
			<div className="pointer-events-none absolute -right-[24vw] top-[2vh] -z-10 h-[62vw] w-[62vw] max-h-[860px] max-w-[860px] rounded-full bg-accent/[0.065] blur-[110px] dark:bg-accent/[0.13]" />
			<div className="pointer-events-none absolute right-[7vw] top-[20vh] -z-10 hidden h-[26rem] w-[26rem] rounded-full border border-line/10 lg:block" />
			<div className="pointer-events-none absolute right-[13vw] top-[29vh] -z-10 hidden h-[11rem] w-[11rem] rounded-full border border-line/10 lg:block" />

			<div className="shell relative flex flex-1 flex-col justify-end pb-7 pt-12 md:pb-9">
				<div
					className="hero-fade flex items-center justify-between gap-6 border-b border-line/20 pb-5"
					style={{ animationDelay: "0.3s" }}
				>
					<div className="eyebrow flex items-center gap-3 text-muted">
						<span className="h-1.5 w-1.5 animate-blink bg-accent" />
						{dict.hero.eyebrow}
					</div>
					<span className="eyebrow hidden text-muted sm:block">
						{dict.hero.role}
					</span>
				</div>

				<div className="relative mt-9 md:mt-14">
					<h1 className="display text-[clamp(4rem,15.5vw,15rem)] uppercase leading-[0.78]">
						<span className="block overflow-hidden pb-[0.06em]">
							<span
								className="hero-rise block"
								style={{ animationDelay: "0.08s" }}
							>
								{dict.hero.nameFirst}
							</span>
						</span>
						<span className="block overflow-hidden pb-[0.08em] sm:pl-[clamp(3rem,10vw,8rem)]">
							<span
								className="hero-rise block"
								style={{ animationDelay: "0.18s" }}
							>
								{dict.hero.nameLast}
							</span>
						</span>
					</h1>

					<div
						className="hero-fade absolute right-[5vw] top-[0.5vw] hidden h-8 w-8 text-accent md:block"
						style={{ animationDelay: "1.05s" }}
						aria-hidden="true"
					>
						<Sparkle />
					</div>
				</div>

				<div className="mt-9 grid gap-8 border-t border-line/20 pt-7 md:mt-14 md:grid-cols-12 md:items-end">
					<p
						className="hero-fade max-w-xl text-[15px] leading-relaxed text-muted md:col-span-5 md:text-base"
						style={{ animationDelay: "0.65s" }}
					>
						{dict.hero.intro}
					</p>

					<div
						className="hero-fade flex flex-wrap items-center gap-3 md:col-span-4"
						style={{ animationDelay: "0.78s" }}
					>
						<a
							href="#work"
							className="group inline-flex h-11 items-center gap-3 bg-ink px-5 font-mono text-2xs uppercase tracking-[0.14em] text-paper transition-colors duration-300 hover:bg-accent hover:text-accent-ink"
						>
							{dict.hero.ctaWork}
							<ArrowUpRight
								size={14}
								className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
							/>
						</a>
						<a
							href="#contact"
							className="group inline-flex h-11 items-center gap-3 border border-line/25 px-5 font-mono text-2xs uppercase tracking-[0.14em] text-ink transition-colors duration-300 hover:border-ink"
						>
							{dict.hero.ctaContact}
							<ArrowUpRight
								size={14}
								className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
							/>
						</a>
					</div>

					<div
						className="hero-fade flex items-end justify-between gap-6 md:col-span-3 md:justify-end"
						style={{ animationDelay: "0.9s" }}
					>
						<span className="eyebrow hidden text-muted md:block">
							{dict.hero.index}
						</span>
						<a
							href="#about"
							className="group flex items-center gap-3 text-muted transition-colors hover:text-ink"
						>
							<span className="eyebrow">{dict.hero.scroll}</span>
							<span className="grid h-9 w-9 place-items-center rounded-full border border-line/25 transition-colors group-hover:border-ink">
								<ArrowDown
									size={14}
									className="animate-bounce"
									style={{ animationDuration: "2.4s" }}
								/>
							</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
