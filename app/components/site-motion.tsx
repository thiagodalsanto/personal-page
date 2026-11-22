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
			{ rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
		);

		targets.forEach((element) => observer.observe(element));

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		const root = document.documentElement;
		let frame = 0;

		const paint = () => {
			frame = 0;
			const span = root.scrollHeight - window.innerHeight;
			const progress = span > 0 ? window.scrollY / span : 0;
			root.style.setProperty(
				"--scroll-progress",
				Math.min(1, Math.max(0, progress)).toFixed(4),
			);
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
			root.style.removeProperty("--scroll-progress");
		};
	}, []);

	useEffect(() => {
		const cover = document.querySelector<HTMLElement>("[data-spotlight]");
		if (!cover) return;
		if (window.matchMedia("(hover: none)").matches) return;

		let frame = 0;
		let nextX = 0;
		let nextY = 0;

		const paint = () => {
			frame = 0;
			cover.style.setProperty("--mx", `${nextX}%`);
			cover.style.setProperty("--my", `${nextY}%`);
		};

		const onMove = (event: PointerEvent) => {
			const rect = cover.getBoundingClientRect();
			if (!rect.width || !rect.height) return;
			nextX = ((event.clientX - rect.left) / rect.width) * 100;
			nextY = ((event.clientY - rect.top) / rect.height) * 100;
			if (!frame) frame = window.requestAnimationFrame(paint);
		};

		cover.addEventListener("pointermove", onMove);

		return () => {
			cover.removeEventListener("pointermove", onMove);
			if (frame) window.cancelAnimationFrame(frame);
		};
	}, []);

	return null;
}
