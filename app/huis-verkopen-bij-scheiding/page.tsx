import type { Metadata } from "next";
import { getSituation } from "@/content/situations";
import SituationTemplate from "@/components/templates/SituationTemplate";
import { notFound } from "next/navigation";

const data = getSituation("huis-verkopen-bij-scheiding")!;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: "https://wijkopenpanden.be/huis-verkopen-bij-scheiding" },
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    url: "https://wijkopenpanden.be/huis-verkopen-bij-scheiding",
    siteName: "wijkopenpanden.be",
    locale: "nl_BE",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  if (!data) notFound();
  return <SituationTemplate data={data} />;
}
