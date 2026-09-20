import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
