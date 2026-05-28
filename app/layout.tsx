import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const playfair = Playfair_Display({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wijkopenpanden.be"),
  title: {
    default: "Vastgoed opkoper Antwerpen | wijkopenpanden.be",
    template: "%s | wijkopenpanden.be",
  },
  description:
    "Woning of pand verkopen in Antwerpen? Geen commissie, geen makelaar. Keuringen & ontruiming volledig inbegrepen. Direct een eerlijk schriftelijk bod na bezichtiging.",
  openGraph: {
    siteName: "wijkopenpanden.be",
    locale: "nl_BE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@wijkopenpanden",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "wijkopenpanden.be",
  url: "https://wijkopenpanden.be",
  logo: "https://wijkopenpanden.be/opengraph-image",
  telephone: "+32492779475",
  email: "info@wijkopenpanden.be",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Antwerpen",
    addressCountry: "BE",
  },
  areaServed: "Antwerpen",
  sameAs: ["https://wijkopenpanden.be"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${playfair.variable} ${jakarta.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#FAF7F2] text-[#1C1610]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
