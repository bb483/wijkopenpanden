import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import Formulier from "@/components/home/Formulier";
import StickyCtaButton from "@/components/StickyCtaButton";
import { cityDistricts, outerRegions } from "@/content/lookup";

export const metadata: Metadata = {
  title: "Huis verkopen in uw Antwerps district",
  description:
    "wijkopenpanden.be koopt woningen aan in elk district van Antwerpen: Deurne, Borgerhout, Berchem, Hoboken, Merksem, Wilrijk, Ekeren en het centrum. Kies uw district voor cijfers, situaties en dossiers.",
  alternates: { canonical: "https://wijkopenpanden.be/regios" },
  openGraph: {
    title: "Huis verkopen in uw Antwerps district | wijkopenpanden.be",
    description:
      "wijkopenpanden.be koopt woningen aan in elk district van Antwerpen. Kies uw district voor cijfers, situaties en dossiers.",
    url: "https://wijkopenpanden.be/regios",
    siteName: "wijkopenpanden.be",
    locale: "nl_BE",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RegiosPage() {
  const districts = cityDistricts();
  const outer = outerRegions();
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Section hero>
          <Heading level={1} className="mb-4">Huis verkopen in uw Antwerps district</Heading>
          <p className="text-muted text-base max-w-2xl mb-12 leading-relaxed">
            De stad Antwerpen is onze thuismarkt. Elk district heeft zijn eigen pandtypes, bouwperiodes, gebreken en
            prijzen, en dus zijn eigen manier van verkopen. Kies uw district voor de cijfers, de typische
            verkoopsituaties en onze recente dossiers daar.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {districts.map((r) => (
              <Link
                key={r.slug}
                href={`/regios/${r.slug}`}
                className="group border border-ink/10 p-6 hover:border-accent transition-colors"
              >
                <h2 className="font-serif text-xl text-ink group-hover:text-accent transition-colors mb-2">{r.name}</h2>
                <p className="text-sm text-muted leading-relaxed">{r.typicalProperties.join(", ")}</p>
              </Link>
            ))}
          </div>
        </Section>

        <Section variant="white">
          <Heading level={2} className="mb-4">Ook in de rand van Antwerpen</Heading>
          <p className="text-muted text-base max-w-2xl mb-8 leading-relaxed">
            Ligt uw pand net buiten de stad, in een van deze gemeenten, dan bekijken wij uw aanvraag eveneens.
          </p>
          <div className="flex flex-wrap gap-3">
            {outer.map((r) => (
              <Link
                key={r.slug}
                href={`/regios/${r.slug}`}
                className="border border-ink/10 px-4 py-3 text-sm text-ink hover:border-accent hover:text-accent transition-colors font-medium"
              >
                {r.name}
              </Link>
            ))}
          </div>
          <p className="mt-10 text-sm text-muted max-w-2xl">
            Weet u niet zeker of uw pand binnen ons werkgebied valt? Vul het adres in; u hoort binnen 2 uur of en hoe wij u
            kunnen helpen. Lees ook{" "}
            <Link href="/huis-verkopen-antwerpen" className="text-ink underline underline-offset-4 hover:text-accent transition-colors">
              hoe een verkoop in Antwerpen bij ons verloopt
            </Link>
            .
          </p>
        </Section>

        <Formulier />
      </main>
      <Footer />
      <StickyCtaButton />
    </>
  );
}
