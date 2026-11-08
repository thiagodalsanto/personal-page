"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

export function HeroField() {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const { resolvedTheme } = useTheme();

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas?.getContext("2d");
		if (!canvas || !context) return;

		const reduceMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;
		const dark = resolvedTheme === "dark";
		const base = dark ? "241,238,229" : "17,17,16";
		const pointer = { x: -9999, y: -9999, active: false };
		let width = 0;
		let height = 0;
		let frame = 0;
		let visible = true;

		const resize = () => {
			const rect = canvas.getBoundingClientRect();
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			width = rect.width;
			height = rect.height;
			canvas.width = Math.max(1, Math.floor(width * dpr));
			canvas.height = Math.max(1, Math.floor(height * dpr));
			context.setTransform(dpr, 0, 0, dpr, 0, 0);
		};

		const render = (time: number, animate: boolean) => {
			context.clearRect(0, 0, width, height);

			const spacing = width < 640 ? 26 : width < 1024 ? 32 : 40;
			const t = reduceMotion ? 1.7 : time * 0.00022;

			for (let y = spacing / 2; y < height; y += spacing) {
				for (let x = spacing / 2; x < width; x += spacing) {
					const dx = x - pointer.x;
					const dy = y - pointer.y;
					const distance = Math.sqrt(dx * dx + dy * dy);
					const pull = pointer.active
						? Math.max(0, 1 - distance / 190)
						: 0;
					const wave =
						Math.sin(x * 0.014 + y * 0.008 + t * 4.2) +
						Math.cos(y * 0.011 - t * 3.4);

					const radius = 0.7 + Math.max(0, wave) * 0.55 + pull * 2.1;
					const alpha = 0.09 + Math.max(0, wave) * 0.1 + pull * 0.42;

					context.beginPath();
					context.arc(x, y, radius, 0, Math.PI * 2);
					context.fillStyle = `rgba(${base},${alpha})`;
					context.fill();
				}
			}

			if (animate) frame = window.requestAnimationFrame((value) => render(value, true));
		};

		const start = () => {
			if (!frame && !reduceMotion) {
				frame = window.requestAnimationFrame((value) => render(value, true));
			}
		};

		const stop = () => {
			if (frame) window.cancelAnimationFrame(frame);
			frame = 0;
		};

		const onPointerMove = (event: PointerEvent) => {
			const rect = canvas.getBoundingClientRect();
			pointer.active =
				event.clientX >= rect.left &&
				event.clientX <= rect.right &&
				event.clientY >= rect.top &&
				event.clientY <= rect.bottom;
			pointer.x = event.clientX - rect.left;
			pointer.y = event.clientY - rect.top;
			if (reduceMotion) render(0, false);
		};

		const onPointerLeave = () => {
			pointer.active = false;
			if (reduceMotion) render(0, false);
		};

		resize();
		render(0, false);
		if (!reduceMotion) start();

		const resizeObserver = new ResizeObserver(() => {
			resize();
			if (reduceMotion) render(0, false);
		});
		resizeObserver.observe(canvas);

		const intersectionObserver = new IntersectionObserver(([entry]) => {
			visible = entry.isIntersecting;
			if (visible && !reduceMotion) start();
			else stop();
		});
		intersectionObserver.observe(canvas);

		const onVisibilityChange = () => {
			visible = !document.hidden;
			if (visible) start();
			else stop();
		};

		window.addEventListener("pointermove", onPointerMove, { passive: true });
		document.addEventListener("pointerleave", onPointerLeave);
		document.addEventListener("visibilitychange", onVisibilityChange);

		return () => {
			stop();
			resizeObserver.disconnect();
			intersectionObserver.disconnect();
			window.removeEventListener("pointermove", onPointerMove);
			document.removeEventListener("pointerleave", onPointerLeave);
			document.removeEventListener("visibilitychange", onVisibilityChange);
		};
	}, [resolvedTheme]);

	return (
		<canvas
			ref={canvasRef}
			aria-hidden="true"
			className="pointer-events-none absolute inset-0 h-full w-full opacity-90 [mask-image:linear-gradient(to_bottom,black_55%,transparent_100%)]"
		/>
	);
}
