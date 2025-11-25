import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	experimental: {
		ppr: "incremental",
	},
	images: {
		remotePatterns: [
			new URL("https://image-cdn-ak.spotifycdn.com/image/**"),
			new URL("https://image-cdn-fa.spotifycdn.com/image/**"),
		],
	},
};

export default nextConfig;
