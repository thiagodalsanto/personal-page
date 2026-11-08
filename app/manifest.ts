import type { MetadataRoute } from "next";
import { site } from "./lib/site";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: `${site.name} — ${site.role}`,
		short_name: "TDS",
		description:
			"Software engineer specializing in web and mobile development.",
		start_url: "/",
		display: "standalone",
		background_color: "#0A0A09",
		theme_color: "#C22F0E",
		icons: [
			{
				src: "/icon.svg",
				sizes: "any",
				type: "image/svg+xml",
			},
		],
	};
}
