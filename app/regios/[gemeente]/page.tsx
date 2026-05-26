import type { Metadata } from "next";
import { getRegion, regions } from "@/content/regions";
import RegionTemplate from "@/components/templates/RegionTemplate";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return regions.map((r) => ({ gemeente: r.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ gemeente: string }> }
): Promise<Metadata> {
  const { gemeente } = await params;
  const data = getRegion(gemeente);
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `https://wijkopenpanden.be/regios/${data.slug}` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://wijkopenpanden.be/regios/${data.slug}`,
      siteName: "wijkopenpanden.be",
      locale: "nl_BE",
      type: "website",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ gemeente: string }> }) {
  const { gemeente } = await params;
  const data = getRegion(gemeente);
  if (!data) notFound();
  return <RegionTemplate data={data} />;
}
