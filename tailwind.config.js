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
				display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
				serif: ["var(--font-serif)", "Georgia", "serif"],
				mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
			},
			fontSize: {
				"2xs": ["0.6875rem", { lineHeight: "1.2" }],
			},
			letterSpacing: {
				tightest: "-0.055em",
				eyebrow: "0.18em",
			},
			transitionTimingFunction: {
				expo: "cubic-bezier(0.16, 1, 0.3, 1)",
			},
			animation: {
				marquee: "marquee 42s linear infinite",
				"spin-slow": "spin 22s linear infinite",
				blink: "blink 1.5s step-end infinite",
				float: "float 9s ease-in-out infinite",
			},
			keyframes: {
				marquee: {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(-50%)" },
				},
				blink: {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.25" },
				},
				float: {
					"0%, 100%": { transform: "translate3d(0, 0, 0)" },
					"50%": { transform: "translate3d(0, -18px, 0)" },
				},
			},
		},
	},
	plugins: [],
};
