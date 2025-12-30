/** @type {import('next').NextConfig} */
// const basePath = "/Cassaiot-nextjs";
const basePath = "";
const nextConfig = {
	// Remove static export for middleware to work
	output: "standalone",
	
	// ensure exported pages end up as folders (helps GitHub Pages routing)
	trailingSlash: true,
	basePath: basePath || undefined,
	assetPrefix: basePath || undefined,
    images: {
        unoptimized: true
    },
    env: {
        NEXT_PUBLIC_BASE_PATH: basePath
    },
    // Enable experimental features if needed for middleware
    experimental: {
        serverActions: true,
    }
};

export default nextConfig;
