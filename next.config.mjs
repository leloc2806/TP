/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['127.0.0.1'],
        remotePatterns: [
            {
                protocol: "http",
                hostname: "127.0.0.1",
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
