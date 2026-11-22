"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Dictionary } from "../lib/i18n";
import { localeHref, site, type Locale } from "../lib/site";
import { cn } from "../lib/cn";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";

const sectionIds = [
	"about",
	"experience",
	"work",
	"education",
	"publications",
	"contact",
] as const;

function LocalTime() {
	const [time, setTime] = useState("");

	useEffect(() => {
		const format = () =>
			new Intl.DateTimeFormat("en-GB", {
				hour: "2-digit",
				minute: "2-digit",
				hour12: false,
				timeZone: "Europe/Lisbon",
			}).format(new Date());

		setTime(format());
		const interval = window.setInterval(() => setTime(format()), 30_000);
		return () => window.clearInterval(interval);
	}, []);

	return (
		<span className="font-mono text-[10px] tracking-[0.08em] text-muted">
			{time ? `${time} LIS` : "Europe/Lisbon"}
		</span>
	);
}

export function SiteHeader({
	lang,
	dict,
}: {
	lang: Locale;
	dict: Dictionary;
}) {
	const pathname = usePathname() ?? "/";
	const home = localeHref(lang);
	const isHome = pathname === home || pathname === `${home}/`;
	const isProject = pathname.includes("/projects/");
	const [menuOpen, setMenuOpen] = useState(false);
	const [active, setActive] = useState<string>(
		isHome ? "about" : isProject ? "work" : "",
	);

	const links = [
		{ id: "about", label: dict.nav.about },
		{ id: "experience", label: dict.nav.experience },
		{ id: "work", label: dict.nav.work },
		{ id: "education", label: dict.nav.education },
		{ id: "publications", label: dict.nav.publications },
		{ id: "contact", label: dict.nav.contact },
	];

	useEffect(() => {
		if (!isHome) {
			setActive(isProject ? "work" : "");
			return;
		}

		const sections = sectionIds
			.map((id) => document.getElementById(id))
			.filter((element): element is HTMLElement => Boolean(element));

		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
				if (visible) setActive(visible.target.id);
			},
			{ rootMargin: "-24% 0px -58% 0px", threshold: [0, 0.1, 0.5] },
		);

		sections.forEach((section) => observer.observe(section));
		return () => observer.disconnect();
	}, [isHome, isProject]);

	useEffect(() => setMenuOpen(false), [pathname]);

	useEffect(() => {
		if (!menuOpen) return;
		const previous = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		const onKey = (event: KeyboardEvent) => {
			if (event.key === "Escape") setMenuOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => {
			document.body.style.overflow = previous;
			window.removeEventListener("keydown", onKey);
		};
	}, [menuOpen]);

	const navigationHref = (id: string) => (isHome ? `#${id}` : `${home}#${id}`);

	return (
		<>
			<div className="mobile-bar flex items-center justify-between gap-4 px-5 lg:hidden">
				<Link href={home} className="flex items-center gap-3">
					<span className="grid h-8 w-8 place-items-center border border-ink/25">
						<span className="display text-[12px] tracking-[-0.05em]">TD</span>
					</span>
					<span className="flex flex-col leading-none">
						<span className="text-[12px] font-medium tracking-[-0.01em]">
							{site.name}
						</span>
						<span className="mt-1 font-mono text-[8px] uppercase tracking-[0.14em] text-muted">
							{dict.hero.role}
						</span>
					</span>
				</Link>
				<div className="flex items-center gap-2">
					<LanguageSwitcher lang={lang} label={dict.nav.language} />
					<ThemeToggle label={dict.nav.theme} />
					<button
						type="button"
						onClick={() => setMenuOpen(true)}
						aria-label={dict.nav.menu}
						aria-expanded={menuOpen}
						className="grid h-10 w-10 place-items-center border border-line/20 text-ink transition-colors hover:border-ink"
					>
						<Menu size={17} strokeWidth={1.7} />
					</button>
				</div>
			</div>

			<aside className="rail" aria-label={dict.nav.index}>
				<Link href={home} className="group block">
					<span className="eyebrow text-muted">TDS / Portfolio / 2026</span>
					<span className="mt-5 flex items-center gap-3">
						<span className="relative grid h-10 w-10 shrink-0 place-items-center border border-ink/25">
							<span className="display text-[13px] tracking-[-0.05em]">
								TD
							</span>
							<span className="absolute -right-1 -top-1 h-1.5 w-1.5 bg-accent transition-transform duration-300 group-hover:scale-150" />
						</span>
						<span className="flex flex-col leading-[1.05]">
							<span className="text-[15px] font-medium tracking-[-0.02em]">
								Thiago
							</span>
							<span className="text-[15px] font-medium tracking-[-0.02em]">
								Dal Santo
							</span>
						</span>
					</span>
					<span className="mt-4 block font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
						{dict.hero.role}
					</span>
				</Link>

				<div className="rule mt-8" />

				<nav className="mt-6 flex flex-1 flex-col" aria-label={dict.nav.index}>
					{links.map((item, index) => (
						<a
							key={item.id}
							href={navigationHref(item.id)}
							aria-current={active === item.id ? "true" : undefined}
							data-active={active === item.id}
							className="rail-link"
						>
							<span className="rail-num">0{index + 1}</span>
							<span className="rail-text">{item.label}</span>
						</a>
					))}
				</nav>

				<div className="space-y-4">
					<div className="border border-line/15 p-3">
						<div className="flex items-center justify-between gap-3">
							<span className="eyebrow text-muted">Base</span>
							<span className="h-1.5 w-1.5 rounded-full bg-accent" />
						</div>
						<p className="mt-2 text-[12px] leading-snug">
							{dict.hero.location}
						</p>
						<div className="mt-1.5">
							<LocalTime />
						</div>
					</div>

					<div className="flex flex-wrap gap-x-4 gap-y-1.5">
						<a
							href={site.github}
							target="_blank"
							rel="noreferrer"
							className="eyebrow link-underline text-muted hover:text-ink"
						>
							GitHub
						</a>
						<a
							href={site.linkedin}
							target="_blank"
							rel="noreferrer"
							className="eyebrow link-underline text-muted hover:text-ink"
						>
							LinkedIn
						</a>
						<a
							href={`mailto:${site.email}`}
							className="eyebrow link-underline text-muted hover:text-ink"
						>
							Email
						</a>
					</div>

					<div className="flex items-center gap-2">
						<LanguageSwitcher lang={lang} label={dict.nav.language} placement="up" />
						<ThemeToggle label={dict.nav.theme} />
						<a
							href={`${home}#contact`}
							className="group ml-auto flex h-10 shrink-0 items-center gap-2 whitespace-nowrap bg-ink px-3 font-mono text-[9px] uppercase tracking-[0.1em] text-paper transition-colors hover:bg-accent hover:text-accent-ink"
						>
							{dict.hero.ctaContact}
							<ArrowUpRight
								size={12}
								className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
							/>
						</a>
					</div>
				</div>

				<div className="rail-meter" aria-hidden="true">
					<span />
				</div>
			</aside>

			{menuOpen && (
				<div
					role="dialog"
					aria-modal="true"
					aria-label={dict.nav.index}
					className="fixed inset-0 z-[90] flex flex-col overflow-y-auto bg-paper px-5 pb-7 pt-4 text-ink lg:hidden"
				>
					<div className="flex items-center justify-between">
						<span className="eyebrow text-muted">TDS / INDEX</span>
						<button
							type="button"
							onClick={() => setMenuOpen(false)}
							aria-label={dict.nav.close}
							className="grid h-10 w-10 place-items-center border border-line/20 text-muted transition-colors hover:border-ink hover:text-ink"
						>
							<X size={18} strokeWidth={1.6} />
						</button>
					</div>

					<nav className="mt-10 border-t border-line/15" aria-label={dict.nav.index}>
						{links.map((item, index) => (
							<a
								key={item.id}
								href={navigationHref(item.id)}
								onClick={() => setMenuOpen(false)}
								className="nav-overlay-link"
								style={{ animationDelay: `${index * 45}ms` }}
							>
								<span>{item.label}</span>
								<span className="eyebrow text-muted">0{index + 1}</span>
							</a>
						))}
					</nav>

					<div className="mt-auto flex items-end justify-between gap-6 pt-12">
						<div className="flex flex-col gap-2">
							<p className="eyebrow text-muted">{dict.hero.location}</p>
							<a
								href={`mailto:${site.email}`}
								className="text-sm link-underline"
							>
								{site.email}
							</a>
						</div>
						<div className="flex flex-col items-end gap-2">
							<a
								href={site.github}
								target="_blank"
								rel="noreferrer"
								className="eyebrow text-muted"
							>
								GitHub
							</a>
							<a
								href={site.linkedin}
								target="_blank"
								rel="noreferrer"
								className="eyebrow text-muted"
							>
								LinkedIn
							</a>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
