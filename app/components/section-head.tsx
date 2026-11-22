export function SectionHead({
	index,
	label,
	title,
	aside,
}: {
	index: string;
	label: string;
	title: string;
	aside?: string;
}) {
	return (
		<div className="section-head">
			<span className="section-num">{index}</span>
			<div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-3">
				<div>
					<p className="section-label">{label}</p>
					<h2 className="section-title mt-2">{title}</h2>
				</div>
				{aside ? (
					<p className="max-w-sm text-xs leading-relaxed text-muted md:text-right">
						{aside}
					</p>
				) : null}
			</div>
		</div>
	);
}
