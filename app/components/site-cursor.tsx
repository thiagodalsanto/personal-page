"use client";

import { useEffect, useRef } from "react";

const interactiveSelector =
	"a, button, summary, label, [role='button'], [role='menuitem']";
const nativeSelector =
	"input, textarea, select, [contenteditable='true'], [contenteditable='']";

export function SiteCursor() {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
		const cursor = ref.current;
		if (!fine.matches || !cursor) return;

		const root = document.documentElement;
		const reduced = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;

		root.classList.add("has-custom-cursor");

		let x = window.innerWidth / 2;
		let y = window.innerHeight / 2;
		let targetX = x;
		let targetY = y;
		let frame = 0;
		let pressed = false;
		let native = false;

		const paint = () => {
			frame = 0;
			const ease = reduced ? 1 : 0.22;
			x += (targetX - x) * ease;
			y += (targetY - y) * ease;
			cursor.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`;
			if (Math.abs(targetX - x) > 0.15 || Math.abs(targetY - y) > 0.15) {
				frame = window.requestAnimationFrame(paint);
			}
		};

		const schedule = () => {
			if (frame) return;
			frame = window.requestAnimationFrame(paint);
		};

		const setState = (state: string) => {
			if (cursor.dataset.state !== state) cursor.dataset.state = state;
		};

		const stateFor = (element: Element | null) => {
			if (pressed) return "press";
			return element?.closest(interactiveSelector) ? "link" : "active";
		};

		const onMove = (event: PointerEvent) => {
			targetX = event.clientX;
			targetY = event.clientY;
			const target = event.target as Element | null;
			const inverse = Boolean(target?.closest(".panel"));
			cursor.classList.toggle("is-inverse", inverse);
			const nextNative = Boolean(target?.closest(nativeSelector));
			if (nextNative !== native) {
				native = nextNative;
				cursor.classList.toggle("is-native", native);
			}
			setState(native ? "active" : stateFor(target));
			schedule();
		};

		const onDown = () => {
			pressed = true;
			setState("press");
		};

		const onUp = (event: PointerEvent) => {
			pressed = false;
			setState(stateFor(event.target as Element | null));
		};

		const onLeave = () => setState("idle");
		const onEnter = () => setState("active");

		setState("idle");
		window.addEventListener("pointermove", onMove, { passive: true });
		window.addEventListener("pointerdown", onDown, { passive: true });
		window.addEventListener("pointerup", onUp, { passive: true });
		document.documentElement.addEventListener("pointerleave", onLeave);
		document.documentElement.addEventListener("pointerenter", onEnter);

		return () => {
			root.classList.remove("has-custom-cursor");
			window.removeEventListener("pointermove", onMove);
			window.removeEventListener("pointerdown", onDown);
			window.removeEventListener("pointerup", onUp);
			document.documentElement.removeEventListener("pointerleave", onLeave);
			document.documentElement.removeEventListener("pointerenter", onEnter);
			if (frame) window.cancelAnimationFrame(frame);
		};
	}, []);

	return (
		<div className="site-cursor" data-state="idle" ref={ref} aria-hidden="true">
			<div className="site-cursor-ring" />
			<div className="site-cursor-dot" />
		</div>
	);
}
