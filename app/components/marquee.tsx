function Asterisk({ className = "" }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 24 24"
			aria-hidden="true"
			className={className}
			fill="none"
			stroke="currentColor"
			strokeWidth="1.4"
		>
			<path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9L4.9 19.1" />
		</svg>
	);
}

export function Marquee({ items }: { items: string[] }) {
	return (
		<div className="marquee relative z-10 border-y border-line/20 bg-accent text-accent-ink">
			<div className="marquee-track py-4">
				{[0, 1].map((copy) => (
					<div
						key={copy}
						aria-hidden={copy === 1 ? "true" : undefined}
						className="flex shrink-0 items-center"
					>
						{items.map((item) => (
							<span
								key={`${copy}-${item}`}
								className="flex items-center gap-5 px-5"
							>
								<span className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.18em]">
									{item}
								</span>
								<Asterisk className="h-2.5 w-2.5 shrink-0 opacity-70" />
							</span>
						))}
					</div>
				))}
			</div>
		</div>
	);
}
