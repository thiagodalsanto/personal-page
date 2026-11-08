"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { cn } from "../lib/cn";

export function Reveal({
	children,
	delay = 0,
	className,
}: {
	children: ReactNode;
	delay?: number;
	className?: string;
}) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const node = ref.current;
		if (!node) return;

		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			node.classList.add("is-in");
			return;
		}

		node.classList.add("reveal-armed");

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					node.classList.add("is-in");
					observer.disconnect();
				}
			},
			{ rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
		);

		observer.observe(node);
		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			className={cn("reveal", className)}
			style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
		>
			{children}
		</div>
	);
}
