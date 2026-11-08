import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getDictionary } from "./lib/i18n";
import { site } from "./lib/site";

export default function NotFound() {
	const dict = getDictionary("en");

	return (
		<main className="relative grid min-h-svh place-items-center overflow-hidden px-6 py-24">
			<div className="pointer-events-none absolute -right-[20vw] -top-[20vw] h-[60vw] w-[60vw] max-h-[720px] max-w-[720px] rounded-full bg-accent/[0.08] blur-[100px]" />
			<div className="relative w-full max-w-3xl">
				<div className="flex items-center justify-between border-b border-line/20 pb-5">
					<span className="eyebrow text-muted">TDS — 404</span>
					<span className="eyebrow text-accent">{site.url.replace("https://", "")}</span>
				</div>
				<h1 className="display mt-16 text-[clamp(5rem,20vw,13rem)] leading-[0.8]">
					404
				</h1>
				<h2 className="display mt-6 text-[clamp(2rem,5vw,3.5rem)]">
					{dict.notFound.title}
				</h2>
				<p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
					{dict.notFound.text}
				</p>
				<Link
					href="/"
					className="group mt-10 inline-flex h-11 items-center gap-3 bg-ink px-5 font-mono text-2xs uppercase tracking-[0.14em] text-paper transition-colors hover:bg-accent hover:text-accent-ink"
				>
					<ArrowLeft
						size={13}
						className="transition-transform duration-300 group-hover:-translate-x-1"
					/>
					{dict.notFound.back}
				</Link>
			</div>
		</main>
	);
}
