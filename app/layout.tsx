import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import GoogleAds from "@/components/GoogleAds";
import MetaPixel from "@/components/MetaPixel";
import CookieBanner from "@/components/CookieBanner";

const playfair = Playfair_Display({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wijkopenpanden.be"),
  title: {
    default: "Huisopkoper Antwerpen | wijkopenpanden.be",
    template: "%s | wijkopenpanden.be",
  },
  description:
    "Woning of pand verkopen in Antwerpen? Geen commissie, geen makelaar. Keuringen & ontruiming volledig inbegrepen. Contact binnen 2 uur, bezoek binnen 48 uur, schriftelijk bod dezelfde dag.",
  openGraph: {
    siteName: "wijkopenpanden.be",
    locale: "nl_BE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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
  logo: "https://wijkopenpanden.be/logo.svg",
  telephone: "+32492779475",
  email: "bb@berabrick.be",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jezusstraat 18 bus 001",
    postalCode: "2000",
    addressLocality: "Antwerpen",
    addressCountry: "BE",
  },
  areaServed: "Antwerpen",
  sameAs: [
    "https://kbopub.economie.fgov.be/kbopub/toonondernemingps.html?ondernemingsnummer=0797335149",
    "https://www.berabrick.be",
  ],
};

// Geen h-full op <html>: dat pint de border-box vast op de vensterhoogte, waardoor
// Lenis' ResizeObserver (die documentElement observeert) nooit afgaat als de
// paginahoogte verandert — Lenis bleef dan met de scrollhoogte van de vórige pagina
// werken en klemde elk scrolldoel op de oude limiet.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1C1610]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <GoogleAds />
        <MetaPixel />
        <CookieBanner />
      </body>
    </html>
  );
}
