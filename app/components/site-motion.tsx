"use client";

import { useEffect } from "react";

const revealSelector = "[data-reveal], .section-head";

export function SiteMotion() {
	useEffect(() => {
		const targets = Array.from(
			document.querySelectorAll<HTMLElement>(revealSelector),
		);
		if (!targets.length) return;

		const reduced = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;

		if (reduced) {
			targets.forEach((element) => element.classList.add("reveal", "is-in"));
			return;
		}

		targets.forEach((element) => {
			element.classList.add("reveal", "reveal-armed");
			const delay = element.dataset.revealDelay;
			if (delay) {
				element.style.setProperty("--reveal-delay", `${delay}ms`);
			}
		});

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) return;
					entry.target.classList.add("is-in");
					observer.unobserve(entry.target);
				});
			},
			{ rootMargin: "0px 0px 2% 0px", threshold: 0 },
		);

		targets.forEach((element) => observer.observe(element));

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		const bar = document.querySelector<HTMLElement>(".rail-meter span");
		if (!bar) return;

		let frame = 0;
		let last = -1;

		const paint = () => {
			frame = 0;
			const span = document.documentElement.scrollHeight - window.innerHeight;
			const progress = span > 0 ? Math.min(1, Math.max(0, window.scrollY / span)) : 0;
			if (Math.abs(progress - last) < 0.001) return;
			last = progress;
			bar.style.transform = `scaleY(${progress.toFixed(4)})`;
		};

		const request = () => {
			if (frame) return;
			frame = window.requestAnimationFrame(paint);
		};

		paint();
		window.addEventListener("scroll", request, { passive: true });
		window.addEventListener("resize", request);

		return () => {
			window.removeEventListener("scroll", request);
			window.removeEventListener("resize", request);
			if (frame) window.cancelAnimationFrame(frame);
		};
	}, []);

	return null;
}
