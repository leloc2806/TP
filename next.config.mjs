/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['localhost'],
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost:3000",
                port: "",
                pathname: "/uploads/**",
            },
        ],
    },
};

export default nextConfig;
