import type { Metadata } from "next";
import { getPropertyType } from "@/content/property-types";
import PropertyTypeTemplate from "@/components/templates/PropertyTypeTemplate";
import { notFound } from "next/navigation";

const data = getPropertyType("villa-verkopen-antwerpen")!;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: "https://wijkopenpanden.be/villa-verkopen-antwerpen" },
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    url: "https://wijkopenpanden.be/villa-verkopen-antwerpen",
    siteName: "wijkopenpanden.be",
    locale: "nl_BE",
    type: "website",
  },
};

export default function Page() {
  if (!data) notFound();
  return <PropertyTypeTemplate data={data} />;
}
