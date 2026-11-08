import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../global.css";
import { site } from "./lib/site";

const sans = localFont({
	src: "../public/fonts/InstrumentSans-Variable.ttf",
	variable: "--font-sans",
	weight: "400 700",
	style: "normal",
	display: "swap",
});

const display = localFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-display",
	weight: "600",
	style: "normal",
	display: "swap",
});

const serif = localFont({
	src: "../public/fonts/InstrumentSerif-Italic.ttf",
	variable: "--font-serif",
	weight: "400",
	style: "italic",
	display: "swap",
});

const mono = localFont({
	src: "../public/fonts/JetBrainsMono-Variable.ttf",
	variable: "--font-mono",
	weight: "100 800",
	style: "normal",
	display: "swap",
});

export const metadata: Metadata = {
	metadataBase: new URL(site.url),
	title: {
		default: "Thiago Dal Santo — Software Engineer",
		template: "%s — Thiago Dal Santo",
	},
	description:
		"Software engineer specializing in web and mobile development with React, Next.js, Angular, Flutter and React Native.",
	applicationName: site.name,
	authors: [{ name: site.name, url: site.url }],
	creator: site.name,
	publisher: site.name,
	category: "technology",
	keywords: site.keywords,
	formatDetection: { email: false, address: false, telephone: false },
	alternates: {
		languages: {
			en: "/",
			pt: "/pt",
			es: "/es",
			zh: "/zh",
			"x-default": "/",
		},
	},
	openGraph: {
		type: "website",
		url: "/",
		siteName: site.name,
		title: "Thiago Dal Santo — Software Engineer",
		description:
			"Software engineer specializing in web and mobile development with React, Next.js, Angular, Flutter and React Native.",
		images: [
			{
				url: `${site.url}/opengraph-image`,
				width: 1200,
				height: 630,
				alt: "Thiago Dal Santo — Software Engineer",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Thiago Dal Santo — Software Engineer",
		description:
			"Software engineer specializing in web and mobile development with React, Next.js, Angular, Flutter and React Native.",
		images: [`${site.url}/opengraph-image`],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
			"max-video-preview": -1,
		},
	},
	manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#F2EFE7" },
		{ media: "(prefers-color-scheme: dark)", color: "#0A0A09" },
	],
	colorScheme: "light dark",
};

const localeScript = `(function(){try{var p=location.pathname.split('/')[1];if(p==='pt'||p==='es'||p==='zh'){document.documentElement.lang=p;}}catch(e){}})();`;

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={[sans.variable, display.variable, serif.variable, mono.variable].join(
				" ",
			)}
		>
			<head>
				<script dangerouslySetInnerHTML={{ __html: localeScript }} />
			</head>
			<body className="bg-paper font-sans text-ink antialiased">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
