import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.mydeal.com.au",
      }
    ]
  }
};

export default nextConfig;
