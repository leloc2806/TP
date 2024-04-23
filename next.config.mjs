/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['127.0.0.1'],
        remotePatterns: [
            {
                protocol: "http",
                hostname: "127.0.0.1:3000",
                port: "",
                pathname: "/uploads/**",
            },
        ],
    },
};

export default nextConfig;
