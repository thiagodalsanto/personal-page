import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import "../global.css";
import { site } from "./lib/site";

const sans = localFont({
	src: "../public/fonts/BricolageGrotesque-Variable.woff2",
	variable: "--font-sans",
	weight: "200 800",
	style: "normal",
	display: "swap",
});

const mono = localFont({
	src: [
		{
			path: "../public/fonts/DMMono-Light.woff2",
			weight: "300",
			style: "normal",
		},
		{
			path: "../public/fonts/DMMono-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/fonts/DMMono-Medium.woff2",
			weight: "500",
			style: "normal",
		},
	],
	variable: "--font-mono",
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
				url: `${site.url}/opengraph-image.png`,
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
		images: [`${site.url}/opengraph-image.png`],
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
		{ media: "(prefers-color-scheme: light)", color: "#EBE6DB" },
		{ media: "(prefers-color-scheme: dark)", color: "#1C1B18" },
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
			className={[sans.variable, mono.variable].join(" ")}
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
			</body>
		</html>
	);
}
