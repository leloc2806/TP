/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['api.nhuathanhphat.vn'],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "api.nhuathanhphat.vn",
                port: "",
                pathname: "/uploads/**",
            },
        ],
    },

};

export default nextConfig;
