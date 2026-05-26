import type { MetadataRoute } from "next";
import { propertyTypes } from "@/content/property-types";
import { regions } from "@/content/regions";
import { situations } from "@/content/situations";
import { articles } from "@/content/knowledge-articles";

const BASE = "https://wijkopenpanden.be";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE}/regios`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/kennisbank`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${BASE}/hoe-wij-werken`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE}/blijven-wonen`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE}/lijfrente-antwerpen`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE}/over`, priority: 0.5, changeFrequency: "yearly" as const },
    { url: `${BASE}/contact`, priority: 0.6, changeFrequency: "yearly" as const },
  ];

  const propertyPages = propertyTypes.map((p) => ({
    url: `${BASE}/${p.slug}`,
    priority: 0.9,
    changeFrequency: "monthly" as const,
  }));

  const regionPages = regions.map((r) => ({
    url: `${BASE}/regios/${r.slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  const situationPages = situations.map((s) => ({
    url: `${BASE}/${s.slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  const articlePages = articles.map((a) => ({
    url: `${BASE}/kennisbank/${a.slug}`,
    lastModified: new Date(a.updatedAt),
    priority: 0.75,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...propertyPages, ...regionPages, ...situationPages, ...articlePages];
}
