import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomePage } from "../components/home-page";
import { buildHomeMetadata } from "../lib/metadata";
import { isLocale, locales } from "../lib/site";

type Props = {
	params: Promise<{ lang: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
	return locales
		.filter((locale) => locale !== "en")
		.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { lang } = await params;
	if (!isLocale(lang) || lang === "en") return {};
	return buildHomeMetadata(lang);
}

export default async function Page({ params }: Props) {
	const { lang } = await params;
	if (!isLocale(lang) || lang === "en") notFound();
	return <HomePage lang={lang} />;
}
