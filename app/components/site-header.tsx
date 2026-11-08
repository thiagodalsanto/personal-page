"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "../lib/i18n";
import { localeHref, site, type Locale } from "../lib/site";
import { cn } from "../lib/cn";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";

const sectionIds = [
	"about",
	"work",
	"experience",
	"education",
	"publications",
	"contact",
] as const;

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
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const [active, setActive] = useState<string>("");
	const progressRef = useRef<HTMLSpanElement>(null);

	const links = [
		{ id: "about", label: dict.nav.about },
		{ id: "work", label: dict.nav.work },
		{ id: "experience", label: dict.nav.experience },
		{ id: "education", label: dict.nav.education },
		{ id: "publications", label: dict.nav.publications },
		{ id: "contact", label: dict.nav.contact },
	];

	useEffect(() => {
		let ticking = false;

		const update = () => {
			const y = window.scrollY;
			const max =
				document.documentElement.scrollHeight - window.innerHeight;
			setScrolled(y > 24);
			if (progressRef.current) {
				progressRef.current.style.transform = `scaleX(${
					max > 0 ? Math.min(1, y / max) : 0
				})`;
			}
			ticking = false;
		};

		const onScroll = () => {
			if (ticking) return;
			ticking = true;
			window.requestAnimationFrame(update);
		};

		update();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		if (!isHome) {
			setActive("");
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
			{ rootMargin: "-32% 0px -54% 0px", threshold: [0, 0.1, 0.5] },
		);

		sections.forEach((section) => observer.observe(section));
		return () => observer.disconnect();
	}, [isHome]);

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
			<header
				className={cn(
					"fixed inset-x-0 top-0 z-50 transition-all duration-500",
					scrolled || !isHome
						? "border-b border-line/15 bg-paper/85 backdrop-blur-xl"
						: "border-b border-transparent bg-transparent",
				)}
			>
				<div className="shell relative flex h-[72px] items-center justify-between gap-6">
					<Link href={home} className="group flex items-center gap-3">
						<span className="relative grid h-9 w-9 place-items-center border border-ink/25">
							<span className="display text-[14px] tracking-[-0.06em]">
								tds
							</span>
							<span className="absolute -right-1 -top-1 h-1.5 w-1.5 bg-accent transition-transform duration-300 group-hover:scale-150" />
						</span>
						<span className="hidden flex-col leading-none sm:flex">
							<span className="text-[13px] font-medium tracking-[-0.01em]">
								{site.name}
							</span>
							<span className="mt-1 font-mono text-[9px] uppercase tracking-[0.15em] text-muted">
								{dict.hero.role}
							</span>
						</span>
					</Link>

					<nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
						{links.map((item) => (
							<a
								key={item.id}
								href={navigationHref(item.id)}
								aria-current={active === item.id ? "true" : undefined}
								className={cn(
									"eyebrow relative py-2 transition-colors duration-300",
									active === item.id
										? "text-ink"
										: "text-muted hover:text-ink",
								)}
							>
								{active === item.id && (
									<span className="absolute -left-3.5 top-1/2 h-1 w-1 -translate-y-1/2 bg-accent" />
								)}
								{item.label}
							</a>
						))}
					</nav>

					<div className="flex items-center gap-2">
						<LanguageSwitcher
							lang={lang}
							label={dict.nav.language}
						/>
						<ThemeToggle label={dict.nav.theme} />
						<a
							href={`${home}#contact`}
							className="hidden h-10 items-center gap-2 bg-ink px-4 font-mono text-2xs uppercase tracking-[0.14em] text-paper transition-colors duration-300 hover:bg-accent hover:text-accent-ink 2xl:inline-flex"
						>
							{dict.hero.ctaContact}
							<ArrowUpRight size={12} />
						</a>
						<button
							type="button"
							onClick={() => setMenuOpen(true)}
							aria-label={dict.nav.menu}
							aria-expanded={menuOpen}
							className="grid h-10 w-10 place-items-center border border-line/20 text-muted transition-colors hover:border-ink/40 hover:text-ink lg:hidden"
						>
							<Menu size={17} strokeWidth={1.6} />
						</button>
					</div>
				</div>

				<span className="absolute bottom-0 left-0 block h-px w-full bg-line/10">
					<span
						ref={progressRef}
						className="block h-full w-full origin-left scale-x-0 bg-accent"
					/>
				</span>
			</header>

			{menuOpen && (
				<div className="fixed inset-0 z-[80] flex flex-col overflow-y-auto bg-paper px-5 pb-8 pt-4 lg:hidden">
					<div className="flex items-center justify-between">
						<Link
							href={home}
							onClick={() => setMenuOpen(false)}
							className="flex items-center gap-3"
						>
							<span className="grid h-9 w-9 place-items-center border border-ink/25">
								<span className="display text-[14px] tracking-[-0.06em]">
									tds
								</span>
							</span>
							<span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
								{site.name}
							</span>
						</Link>
						<button
							type="button"
							onClick={() => setMenuOpen(false)}
							aria-label={dict.nav.close}
							className="grid h-10 w-10 place-items-center border border-line/20 text-muted"
						>
							<X size={18} strokeWidth={1.6} />
						</button>
					</div>

					<nav
						className="mt-16 flex flex-col border-t border-line/20"
						aria-label="Mobile"
					>
						{links.map((item, index) => (
							<a
								key={item.id}
								href={navigationHref(item.id)}
								onClick={() => setMenuOpen(false)}
								className="group flex items-center justify-between border-b border-line/20 py-4"
							>
								<span className="display text-[clamp(2.2rem,10vw,3.5rem)] transition-colors group-hover:text-accent">
									{item.label}
								</span>
								<span className="eyebrow text-muted">
									0{index + 1}
								</span>
							</a>
						))}
					</nav>

					<div className="mt-auto flex items-end justify-between gap-6 pt-16">
						<div className="flex flex-col gap-2">
							<a
								href={site.github}
								target="_blank"
								rel="noreferrer"
								className="eyebrow link-underline text-muted"
							>
								GitHub
							</a>
							<a
								href={site.linkedin}
								target="_blank"
								rel="noreferrer"
								className="eyebrow link-underline text-muted"
							>
								LinkedIn
							</a>
							<a
								href={`mailto:${site.email}`}
								className="eyebrow link-underline text-muted"
							>
								Email
							</a>
						</div>
						<div className="flex items-center gap-2">
							<LanguageSwitcher
								lang={lang}
								label={dict.nav.language}
							/>
							<ThemeToggle label={dict.nav.theme} />
						</div>
					</div>
				</div>
			)}
		</>
	);
}
