import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StickyCtaButton from "@/components/StickyCtaButton";
import Hero from "@/components/home/Hero";
import Beloftes from "@/components/home/Beloftes";
import VoorWie from "@/components/home/VoorWie";
import Districten from "@/components/home/Districten";
import ZoWerktHet from "@/components/home/ZoWerktHet";
import WaaromOns from "@/components/home/WaaromOns";
import BlijvenWonen from "@/components/home/BlijvenWonen";
import EerlijkPrijs from "@/components/home/EerlijkPrijs";
import RecenteAankopen from "@/components/home/RecenteAankopen";
import FAQ from "@/components/home/FAQ";
import KennisbankPreview from "@/components/home/KennisbankPreview";
import Formulier from "@/components/home/Formulier";

export const metadata: Metadata = {
  title: { absolute: "Huisopkoper Antwerpen — direct eerlijk bod op uw pand | wijkopenpanden.be" },
  description:
    "Huis of appartement verkopen in Antwerpen? wijkopenpanden.be koopt rechtstreeks aan in alle districten: geen commissie, geen makelaar, keuringen & ontruiming inbegrepen. Contact binnen 2 uur, bezoek binnen 48 uur.",
  alternates: { canonical: "https://wijkopenpanden.be" },
  openGraph: {
    title: "Huisopkoper Antwerpen — direct eerlijk bod op uw pand | wijkopenpanden.be",
    description:
      "Huis of appartement verkopen in Antwerpen? Geen commissie, geen makelaar, keuringen & ontruiming inbegrepen. Contact binnen 2 uur, bezoek binnen 48 uur, schriftelijk bod dezelfde dag.",
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
  email: "bb@berabrick.be",
  description:
    "wijkopenpanden.be is een Antwerpse huisopkoper: wij kopen woningen en panden rechtstreeks aan in alle districten van de stad Antwerpen en in de directe rand. Geen commissie, geen makelaar, keuringen en ontruiming volledig inbegrepen.",
  areaServed: [
    { "@type": "City", name: "Antwerpen", "@id": "https://www.wikidata.org/wiki/Q12892" },
    { "@type": "AdministrativeArea", name: "Deurne" },
    { "@type": "AdministrativeArea", name: "Borgerhout" },
    { "@type": "AdministrativeArea", name: "Berchem" },
    { "@type": "AdministrativeArea", name: "Hoboken" },
    { "@type": "AdministrativeArea", name: "Merksem" },
    { "@type": "AdministrativeArea", name: "Wilrijk" },
    { "@type": "AdministrativeArea", name: "Ekeren" },
    { "@type": "AdministrativeArea", name: "Borsbeek" },
    { "@type": "AdministrativeArea", name: "Berendrecht-Zandvliet-Lillo" },
  ],
  priceRange: "€€",
  openingHours: "Mo-Su 08:00-20:00",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jezusstraat 18 bus 001",
    postalCode: "2000",
    addressLocality: "Antwerpen",
    addressRegion: "Antwerpen",
    addressCountry: "BE",
  },
  sameAs: [
    "https://kbopub.economie.fgov.be/kbopub/toonondernemingps.html?ondernemingsnummer=0797335149",
    "https://www.berabrick.be",
  ],
  image: {
    "@type": "ImageObject",
    url: "https://wijkopenpanden.be/opengraph-image",
    width: 1200,
    height: 630,
  },
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
        text: "Onze thuismarkt is de stad Antwerpen: wij kopen in alle districten, van Deurne, Borgerhout en Berchem tot Hoboken, Merksem, Wilrijk en Ekeren. Ligt uw pand in de directe rand van Antwerpen, dan bekijken wij uw aanvraag eveneens. Bezorg ons het adres; u hoort binnen 2 uur of en hoe wij u kunnen helpen.",
      },
    },
    {
      "@type": "Question",
      name: "Hoe snel krijg ik een bod?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Na uw aanvraag nemen wij binnen 2 uur contact op en plannen wij een bezoek binnen 48 uur. Dezelfde dag als het bezoek ontvangt u een schriftelijk bod met de berekening erbij. Het bod is vrijblijvend tot u het aanvaardt.",
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
        <Districten />
        <ZoWerktHet />
        <WaaromOns />
        <BlijvenWonen />
        <EerlijkPrijs />
        <RecenteAankopen />
        <FAQ />
        <KennisbankPreview />
        <Formulier />
      </main>
      <Footer />
      <StickyCtaButton />
    </>
  );
}
