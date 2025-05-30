import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['www.artic.edu'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
