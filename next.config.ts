import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "demo.theme-sky.com",
        pathname: "/ecomall/wp-content/**",
      },
    ],
  },
};

export default nextConfig;
