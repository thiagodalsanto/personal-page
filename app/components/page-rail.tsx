"use client";

import { useEffect, useRef } from "react";

export function PageRail() {
	const rail = useRef<HTMLDivElement>(null);
	const fill = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		const track = rail.current;
		const bar = fill.current;
		if (!track || !bar) return;

		let frame = 0;
		let last = -1;
		let dragging = false;
		let previousScrollBehavior = "";

		const maxScroll = () =>
			document.documentElement.scrollHeight - window.innerHeight;

		const paint = () => {
			frame = 0;
			const span = maxScroll();
			const progress =
				span > 0 ? Math.min(1, Math.max(0, window.scrollY / span)) : 0;
			if (Math.abs(progress - last) < 0.0005) return;
			last = progress;
			bar.style.transform = `scaleY(${progress.toFixed(4)})`;
		};

		const request = () => {
			if (frame) return;
			frame = window.requestAnimationFrame(paint);
		};

		const seek = (clientY: number) => {
			const span = maxScroll();
			if (span <= 0) return;
			const ratio = Math.min(1, Math.max(0, clientY / window.innerHeight));
			window.scrollTo({ top: ratio * span, behavior: "auto" });
		};

		const onPointerDown = (event: PointerEvent) => {
			if (event.button !== 0) return;
			dragging = true;
			track.dataset.dragging = "true";
			track.setPointerCapture(event.pointerId);
			// Bypass the smooth scroll on <html> so the rail tracks the pointer.
			previousScrollBehavior = document.documentElement.style.scrollBehavior;
			document.documentElement.style.scrollBehavior = "auto";
			seek(event.clientY);
		};

		const onPointerMove = (event: PointerEvent) => {
			if (!dragging) return;
			seek(event.clientY);
		};

		const onPointerEnd = (event: PointerEvent) => {
			if (!dragging) return;
			dragging = false;
			delete track.dataset.dragging;
			if (track.hasPointerCapture(event.pointerId)) {
				track.releasePointerCapture(event.pointerId);
			}
			document.documentElement.style.scrollBehavior = previousScrollBehavior;
			request();
		};

		paint();
		window.addEventListener("scroll", request, { passive: true });
		window.addEventListener("resize", request);
		track.addEventListener("pointerdown", onPointerDown);
		track.addEventListener("pointermove", onPointerMove);
		track.addEventListener("pointerup", onPointerEnd);
		track.addEventListener("pointercancel", onPointerEnd);

		return () => {
			window.removeEventListener("scroll", request);
			window.removeEventListener("resize", request);
			track.removeEventListener("pointerdown", onPointerDown);
			track.removeEventListener("pointermove", onPointerMove);
			track.removeEventListener("pointerup", onPointerEnd);
			track.removeEventListener("pointercancel", onPointerEnd);
			if (frame) window.cancelAnimationFrame(frame);
		};
	}, []);

	return (
		<div ref={rail} className="page-rail" aria-hidden="true">
			<span className="page-rail-track" />
			<span ref={fill} className="page-rail-fill" />
		</div>
	);
}
