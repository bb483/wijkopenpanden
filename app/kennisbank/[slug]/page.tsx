import type { Metadata } from "next";
import { getArticle, articles } from "@/content/knowledge-articles";
import ArticleTemplate from "@/components/templates/ArticleTemplate";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const data = getArticle(slug);
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `https://wijkopenpanden.be/kennisbank/${data.slug}` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://wijkopenpanden.be/kennisbank/${data.slug}`,
      siteName: "wijkopenpanden.be",
      locale: "nl_BE",
      type: "article",
      publishedTime: data.publishedAt,
      modifiedTime: data.updatedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: data.metaTitle,
      description: data.metaDescription,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getArticle(slug);
  if (!data) notFound();
  return <ArticleTemplate data={data} />;
}
