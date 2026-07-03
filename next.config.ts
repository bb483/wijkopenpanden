import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Canoniseer op de non-www host: www.wijkopenpanden.be -> wijkopenpanden.be
      // Permanente redirect (308) zodat Google de non-www als enige host indexeert.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.wijkopenpanden.be" }],
        destination: "https://wijkopenpanden.be/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
