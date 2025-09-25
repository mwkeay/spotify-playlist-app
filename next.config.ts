import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [new URL("https://image-cdn-ak.spotifycdn.com/image/**")],
	},
};

export default nextConfig;
