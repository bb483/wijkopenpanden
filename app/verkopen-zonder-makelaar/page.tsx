import type { Metadata } from "next";
import { getSituation } from "@/content/situations";
import SituationTemplate from "@/components/templates/SituationTemplate";
import { notFound } from "next/navigation";

const data = getSituation("verkopen-zonder-makelaar")!;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: "https://wijkopenpanden.be/verkopen-zonder-makelaar" },
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    url: "https://wijkopenpanden.be/verkopen-zonder-makelaar",
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
