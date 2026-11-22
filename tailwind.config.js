/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./app/**/*.{ts,tsx}"],
	future: {
		hoverOnlyWhenSupported: true,
	},
	theme: {
		extend: {
			colors: {
				paper: "rgb(var(--paper) / <alpha-value>)",
				surface: "rgb(var(--surface) / <alpha-value>)",
				ink: "rgb(var(--ink) / <alpha-value>)",
				muted: "rgb(var(--muted) / <alpha-value>)",
				line: "rgb(var(--line) / <alpha-value>)",
				accent: "rgb(var(--accent) / <alpha-value>)",
				"accent-ink": "rgb(var(--accent-ink) / <alpha-value>)",
			},
			fontFamily: {
				sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
				display: ["var(--font-sans)", "ui-sans-serif", "sans-serif"],
				mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
			},
			fontSize: {
				"2xs": ["0.6875rem", { lineHeight: "1.2" }],
			},
			letterSpacing: {
				tightest: "-0.055em",
				eyebrow: "0.16em",
			},
			transitionTimingFunction: {
				expo: "cubic-bezier(0.16, 1, 0.3, 1)",
			},
		},
	},
	plugins: [],
};
