import type { Metadata } from "next";
import { HomePage } from "./components/home-page";
import { buildHomeMetadata } from "./lib/metadata";

export const metadata: Metadata = buildHomeMetadata("en");

export default function Page() {
	return <HomePage lang="en" />;
}
