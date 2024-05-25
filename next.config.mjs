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
        loader: "custom",
        loaderFile: "./app/lib/imageLoader.js",
    },

};

export default nextConfig;
