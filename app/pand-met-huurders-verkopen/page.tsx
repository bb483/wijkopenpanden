import type { Metadata } from "next";
import { getSituation } from "@/content/situations";
import SituationTemplate from "@/components/templates/SituationTemplate";
import { notFound } from "next/navigation";

const data = getSituation("pand-met-huurders-verkopen")!;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: "https://wijkopenpanden.be/pand-met-huurders-verkopen" },
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    url: "https://wijkopenpanden.be/pand-met-huurders-verkopen",
    siteName: "wijkopenpanden.be",
    locale: "nl_BE",
    type: "website",
  },
};

export default function Page() {
  if (!data) notFound();
  return <SituationTemplate data={data} />;
}
