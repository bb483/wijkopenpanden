import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StickyCtaButton from "@/components/StickyCtaButton";
import Hero from "@/components/home/Hero";
import Beloftes from "@/components/home/Beloftes";
import VoorWie from "@/components/home/VoorWie";
import ZoWerktHet from "@/components/home/ZoWerktHet";
import WaaromOns from "@/components/home/WaaromOns";
import BlijvenWonen from "@/components/home/BlijvenWonen";
import EerlijkPrijs from "@/components/home/EerlijkPrijs";
import RecenteAankopen from "@/components/home/RecenteAankopen";
import FAQ from "@/components/home/FAQ";
import Formulier from "@/components/home/Formulier";

export const metadata: Metadata = {
  title: "Vastgoed opkoper Antwerpen — Direct eerlijk bod | wijkopenpanden.be",
  description:
    "Woning of pand verkopen in Antwerpen? wijkopenpanden.be koopt rechtstreeks aan — geen commissie, geen makelaar, keuringen & ontruiming inbegrepen. Reactie binnen 2 uur.",
  alternates: { canonical: "https://wijkopenpanden.be" },
  openGraph: {
    title: "Vastgoed opkoper Antwerpen — Direct eerlijk bod | wijkopenpanden.be",
    description:
      "Woning of pand verkopen in Antwerpen? Geen commissie, geen makelaar, keuringen & ontruiming inbegrepen. Reactie binnen 2 uur, schriftelijk bod na bezichtiging.",
    url: "https://wijkopenpanden.be",
    siteName: "wijkopenpanden.be",
    locale: "nl_BE",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "wijkopenpanden.be",
  url: "https://wijkopenpanden.be",
  telephone: "+32492779475",
  email: "info@wijkopenpanden.be",
  description:
    "wijkopenpanden.be koopt woningen en panden rechtstreeks aan in Antwerpen en omstreken. Geen commissie, geen makelaar, keuringen en ontruiming volledig inbegrepen.",
  areaServed: {
    "@type": "City",
    name: "Antwerpen",
    "@id": "https://www.wikidata.org/wiki/Q12892",
  },
  priceRange: "€€",
  openingHours: "Mo-Su 08:00-20:00",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Antwerpen",
    addressCountry: "BE",
  },
  sameAs: ["https://wijkopenpanden.be"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Zijn keuringen en ontruiming inbegrepen in de prijs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, volledig. Wij regelen en betalen alle wettelijk verplichte keuringen (EPC, elektriciteitskeuring, asbestinventaris) én de ontruiming van de woning. Deze kosten worden nooit van het overeengekomen bod afgetrokken.",
      },
    },
    {
      "@type": "Question",
      name: "Hoe snel kan de overdracht plaatsvinden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gemiddeld 2 tot 3 maanden van eerste contact tot ondertekening van de akte. In dringende gevallen — bij erfenis of financiële druk — kunnen we sneller schakelen.",
      },
    },
    {
      "@type": "Question",
      name: "Wie betaalt de notariskosten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Als koper betalen wij de registratierechten en notariskosten aan koperskant. U betaalt uitsluitend uw eigen notaris, als u er een kiest. Er zijn geen verborgen kosten.",
      },
    },
    {
      "@type": "Question",
      name: "Hoe bepaalt u de aankoopprijs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wij baseren ons op recente vergelijkbare transacties in de buurt, de staat van de woning en de actuele marktomstandigheden in Antwerpen. Ons bod is concreet en schriftelijk.",
      },
    },
    {
      "@type": "Question",
      name: "Is uw bod bindend?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Het bod is bindend van onze kant zodra u het aanvaardt en wij een voorlopige koopovereenkomst (compromis) ondertekenen. Tot dat moment is alles vrijblijvend — ook voor u.",
      },
    },
    {
      "@type": "Question",
      name: "Koopt u ook buiten Antwerpen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Onze focus ligt op Antwerpen en de directe omstreken (Boom, Mechelen, Mortsel, Edegem). Neem contact op — in specifieke gevallen kijken wij ook verder.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Nav />
      <main className="flex-1">
        <Hero />
        <Beloftes />
        <VoorWie />
        <ZoWerktHet />
        <WaaromOns />
        <BlijvenWonen />
        <EerlijkPrijs />
        <RecenteAankopen />
        <FAQ />
        <Formulier />
      </main>
      <Footer />
      <StickyCtaButton />
    </>
  );
}
