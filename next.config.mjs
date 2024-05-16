/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['20.243.123.51'],
        remotePatterns: [
            {
                protocol: "http",
                hostname: "20.243.123.51",
                port: "",
                pathname: "/uploads/**",
            },
        ],
    },
    eslint: {
        // It's recommended to keep ESLint checks enabled during builds for better code quality.
        // If needed, you can ignore ESLint errors during production builds by uncommenting the next line:
        // ignoreDuringBuilds: true,
    },
};

export default nextConfig;
