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
		background_color: "#EBE6DB",
		theme_color: "#201F1B",
		icons: [
			{
				src: "/icon.svg",
				sizes: "any",
				type: "image/svg+xml",
			},
		],
	};
}
