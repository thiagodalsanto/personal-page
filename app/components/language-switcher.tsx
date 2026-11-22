"use client";

import { ChevronDown, Globe } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
	localeNames,
	locales,
	switchLocalePath,
	type Locale,
} from "../lib/site";
import { cn } from "../lib/cn";

export function LanguageSwitcher({
	lang,
	label,
	placement = "down",
}: {
	lang: Locale;
	label: string;
	placement?: "up" | "down";
}) {
	const pathname = usePathname() ?? "/";
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!open) return;

		const onPointer = (event: PointerEvent) => {
			if (!ref.current?.contains(event.target as Node)) setOpen(false);
		};
		const onKey = (event: KeyboardEvent) => {
			if (event.key === "Escape") setOpen(false);
		};

		window.addEventListener("pointerdown", onPointer);
		window.addEventListener("keydown", onKey);
		return () => {
			window.removeEventListener("pointerdown", onPointer);
			window.removeEventListener("keydown", onKey);
		};
	}, [open]);

	useEffect(() => setOpen(false), [pathname]);

	const hrefFor = (locale: Locale) => {
		const base = switchLocalePath(pathname, locale);
		const hash = typeof window === "undefined" ? "" : window.location.hash;
		return `${base}${hash}`;
	};

	return (
		<div className="relative" ref={ref}>
			<button
				type="button"
				aria-label={label}
				title={label}
				aria-expanded={open}
				aria-haspopup="menu"
				onClick={() => setOpen((value) => !value)}
				className="group flex h-10 items-center gap-2 border border-line/20 px-3 text-muted transition-colors duration-300 hover:border-ink/40 hover:text-ink"
			>
				<Globe size={13} strokeWidth={1.6} />
				<span className="font-mono text-2xs uppercase tracking-[0.14em]">
					{lang}
				</span>
				<ChevronDown
					size={11}
					className={cn(
						"transition-transform duration-300",
						open && "rotate-180",
					)}
				/>
			</button>

			{open && (
				<div
					role="menu"
					className={cn(
						"absolute z-[90] w-52 border border-line/20 bg-paper p-1 shadow-[0_24px_60px_rgba(0,0,0,0.16)]",
						placement === "up"
							? "bottom-[calc(100%+10px)] left-0"
							: "top-[calc(100%+10px)] right-0",
					)}
				>
					{locales.map((locale) => (
						<Link
							key={locale}
							href={hrefFor(locale)}
							hrefLang={locale}
							role="menuitem"
							onClick={() => setOpen(false)}
							aria-current={locale === lang ? "true" : undefined}
							className={cn(
								"flex items-center justify-between px-3 py-2.5 text-sm transition-colors",
								locale === lang
									? "bg-ink text-paper"
									: "text-muted hover:bg-surface hover:text-ink",
							)}
						>
							<span>{localeNames[locale]}</span>
							<span className="font-mono text-2xs uppercase tracking-[0.12em]">
								{locale}
							</span>
						</Link>
					))}
				</div>
			)}
		</div>
	);
}
