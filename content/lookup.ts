import { situations } from "./situations";
import { propertyTypes } from "./property-types";
import { regions } from "./regions";
import { articles } from "./knowledge-articles";

/** Vaste pagina's die niet in een content-array zitten. */
const staticTitles: Record<string, string> = {
  "hoe-wij-werken": "Hoe wij werken",
  "blijven-wonen": "Blijven wonen na de verkoop",
  "lijfrente-antwerpen": "Verkopen op lijfrente",
  "tip-een-pand": "Tip een pand",
  over: "Over wijkopenpanden.be",
  contact: "Contact",
  regios: "Alle districten en gemeenten",
  kennisbank: "Kennisbank",
};

/**
 * Leesbare titel voor een slug, ongeacht het type pagina. Gebruikt als
 * ankertekst in "verwante" blokken, in plaats van de rauwe slug.
 */
export function titleForSlug(slug: string): string {
  const s = situations.find((x) => x.slug === slug);
  if (s) return s.title;
  const p = propertyTypes.find((x) => x.slug === slug);
  if (p) return p.h1;
  const r = regions.find((x) => x.slug === slug);
  if (r) return r.h1;
  const a = articles.find((x) => x.slug === slug);
  if (a) return a.title;
  if (staticTitles[slug]) return staticTitles[slug];
  return slug.replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase());
}

/** Pad voor een slug: situaties en types op root, regio's onder /regios, artikels onder /kennisbank. */
export function hrefForSlug(slug: string): string {
  if (regions.some((x) => x.slug === slug)) return `/regios/${slug}`;
  if (articles.some((x) => x.slug === slug)) return `/kennisbank/${slug}`;
  return `/${slug}`;
}

/** Districten van de stad Antwerpen, in de volgorde waarin wij ze tonen. */
export function cityDistricts() {
  return regions.filter((r) => r.isDistrict && r.slug !== "antwerpen");
}

/** Randgemeenten waar wij ook aankopen. */
export function outerRegions() {
  return regions.filter((r) => !r.isDistrict);
}

/** Zoekt het gebied bij een Belgische postcode (enkel voor de mail-tag). */
export function regionForPostcode(postcode: string) {
  return regions.find((r) => r.postcodes?.includes(postcode));
}
