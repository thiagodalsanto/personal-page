import { cn } from "../lib/cn";

export function SectionLabel({
	index,
	children,
	className,
}: {
	index: string;
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div className={cn("flex items-center gap-4", className)}>
			<span className="eyebrow text-accent">({index})</span>
			<span className="h-px w-8 bg-line/30" />
			<span className="eyebrow text-muted">{children}</span>
		</div>
	);
}
