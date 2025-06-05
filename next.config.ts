import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   images: {
//     domains: ['www.artic.edu'],
//   },
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
  
// };

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.artic.edu',
      },
    ],
    // Or if using older Next.js versions:
    domains: ['www.artic.edu'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};


export default nextConfig;
