const allowedDevOrigins = (process.env.NEXT_DEV_ALLOWED_ORIGINS ?? "")
	.split(",")
	.map((origin) => origin.trim())
	.filter(Boolean);

/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	...(allowedDevOrigins.length ? { allowedDevOrigins } : {}),
	async redirects() {
		return [
			{ source: "/en", destination: "/", permanent: true },
			{ source: "/en/:path*", destination: "/:path*", permanent: true },
			{ source: "/projects", destination: "/#work", permanent: false },
			{ source: "/pt/projects", destination: "/pt#work", permanent: false },
			{ source: "/es/projects", destination: "/es#work", permanent: false },
			{ source: "/zh/projects", destination: "/zh#work", permanent: false },
		];
	},
};

export default nextConfig;
