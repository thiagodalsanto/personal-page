import { ArrowUp } from "lucide-react";
import type { Dictionary } from "../lib/i18n";
import { localeHref, site, type Locale } from "../lib/site";

export function SiteFooter({
	lang,
	dict,
}: {
	lang: Locale;
	dict: Dictionary;
}) {
	return (
		<footer className="with-rail border-t border-line/15">
			<div className="shell flex flex-col gap-4 py-7 md:flex-row md:items-center md:justify-between">
				<p className="eyebrow text-muted">
					© {new Date().getFullYear()} {site.name} · {dict.hero.location}
				</p>
				<a
					href={`${localeHref(lang)}#top`}
					className="group inline-flex items-center gap-2 self-start font-mono text-[9px] uppercase tracking-[0.13em] text-muted transition-colors hover:text-ink md:self-auto"
				>
					{dict.footer.backToTop}
					<span className="grid h-7 w-7 place-items-center rounded-full border border-line/25 transition-colors group-hover:border-ink">
						<ArrowUp
							size={12}
							className="transition-transform duration-300 group-hover:-translate-y-0.5"
						/>
					</span>
				</a>
			</div>
		</footer>
	);
}
