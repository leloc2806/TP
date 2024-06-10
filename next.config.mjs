/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "admin.nhuathanhphat.vn",
                port: "",
                pathname: "/uploads/**",
            },
        ],
    },

};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     images: {
//       domains: ['localhost:1337'],
//       remotePatterns: [
//         {
//           protocol: 'http',
//           hostname: 'localhost',
//           port: '1337',
//           pathname: '/uploads/**',
//         },
//       ],
//     },
//   };
  
//   export default nextConfig;
  