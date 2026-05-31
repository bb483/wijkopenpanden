export interface FAQ {
  question: string;
  answer: string;
}

export interface PropertyType {
  slug: string;
  label: string;
  labelPlural: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  characteristics: { title: string; body: string }[];
  priceRanges: { area: string; min: number; max: number; note?: string }[];
  relatedRegions: string[];
  relatedSituations: string[];
  relatedArticles?: string[];
  faqs: FAQ[];
}

export interface Region {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  subdistricts: { name: string; description: string }[];
  typicalProperties: string[];
  pricePerM2: { min: number; max: number };
  geo: { lat: number; lng: number };
  marketOverview: string;
  relatedPropertyTypes: string[];
  recentPurchases: { type: string; situation: string; duration: string; description: string }[];
  faqs: FAQ[];
}

export interface Situation {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  painPoints: string[];
  steps: { title: string; body: string }[];
  fiscalNote?: string;
  relatedPropertyTypes: string[];
  relatedArticles: string[];
  faqs: FAQ[];
}

export interface ArticleSection {
  heading: string;
  body: string;
  table?: { headers: string[]; rows: string[][] };
}

export interface Article {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  publishedAt: string;
  updatedAt: string;
  intro: string;
  sections: ArticleSection[];
  relatedArticles: string[];
  relatedSituations: string[];
  faqs: FAQ[];
}
