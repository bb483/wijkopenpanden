import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/styleguide"] },
    ],
    sitemap: "https://wijkopenpanden.be/sitemap.xml",
  };
}
