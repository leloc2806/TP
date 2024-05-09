/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['localhost'],
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost:1337",
                port: "",
                pathname: "/uploads/**",
            },
        ],
    },
    // eslint: {
    //     ignoreDuringBuilds: true,
    // },
};

export default nextConfig;
