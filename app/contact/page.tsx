import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import Prose from "@/components/Prose";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import StickyCtaButton from "@/components/StickyCtaButton";

export const metadata: Metadata = {
  title: "Contact — wijkopenpanden.be",
  description:
    "Neem contact op met wijkopenpanden.be. Bel 0492 77 94 75, mail bb@berabrick.be of vul het formulier in. Reactie binnen 2 uur, ook in het weekend.",
  alternates: { canonical: "https://wijkopenpanden.be/contact" },
  openGraph: {
    title: "Contact — wijkopenpanden.be",
    description:
      "Neem contact op met wijkopenpanden.be. Bel 0492 77 94 75, mail bb@berabrick.be of vul het formulier in. Reactie binnen 2 uur, ook in het weekend.",
    url: "https://wijkopenpanden.be/contact",
    siteName: "wijkopenpanden.be",
    locale: "nl_BE",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* Hero */}
        <Section hero>
          <nav className="text-xs text-muted mb-6">
            <a href="/" className="hover:text-ink transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span>Contact</span>
          </nav>
          <FadeIn>
            <Heading level={1} className="max-w-2xl mb-6">Contact</Heading>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Prose className="text-muted mb-8 max-w-xl">
              <p>
                U kunt ons bereiken via telefoon, e-mail of het formulier op de homepage. Wij reageren
                doorgaans binnen 2 uur — ook in het weekend en buiten kantooruren.
              </p>
            </Prose>
          </FadeIn>
        </Section>

        {/* Contactgegevens */}
        <Section variant="white">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
            {/* Telefoon */}
            <FadeIn>
              <div>
                <p className="text-xs text-accent font-medium tracking-widest uppercase mb-4">Telefoon</p>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:0492779475"
                    className="font-serif text-2xl text-ink hover:text-accent transition-colors"
                  >
                    0492 77 94 75
                  </a>
                  <a
                    href="tel:0492277076"
                    className="font-serif text-2xl text-ink hover:text-accent transition-colors"
                  >
                    0492 27 70 76
                  </a>
                </div>
                <p className="text-sm text-muted mt-4 leading-relaxed">
                  Bereikbaar voor reacties 24 uur op 24. Voor een bezoek of afspraak spreken wij een tijdstip
                  af dat u past.
                </p>
              </div>
            </FadeIn>

            {/* E-mail */}
            <FadeIn delay={0.1}>
              <div>
                <p className="text-xs text-accent font-medium tracking-widest uppercase mb-4">E-mail</p>
                <a
                  href="mailto:bb@berabrick.be"
                  className="font-serif text-2xl text-ink hover:text-accent transition-colors"
                >
                  bb@berabrick.be
                </a>
                <p className="text-sm text-muted mt-4 leading-relaxed">
                  Stuur ons het adres van het pand, het type woning en een korte beschrijving van de staat.
                  Wij nemen contact met u op voor een vrijblijvend gesprek.
                </p>
              </div>
            </FadeIn>

            {/* Regio */}
            <FadeIn delay={0.15}>
              <div>
                <p className="text-xs text-accent font-medium tracking-widest uppercase mb-4">Werkgebied</p>
                <p className="font-serif text-2xl text-ink">Antwerpse regio</p>
                <p className="text-sm text-muted mt-4 leading-relaxed">
                  Wij zijn actief in alle Antwerpse districten en gemeenten: Antwerpen-stad, Borgerhout,
                  Deurne, Berchem, Wilrijk, Mortsel, Edegem, Kontich, Schilde, Brasschaat en omgeving.
                </p>
              </div>
            </FadeIn>

            {/* Beschikbaarheid */}
            <FadeIn delay={0.2}>
              <div>
                <p className="text-xs text-accent font-medium tracking-widest uppercase mb-4">Beschikbaarheid</p>
                <p className="font-serif text-2xl text-ink">24/7 bereikbaar</p>
                <p className="text-sm text-muted mt-4 leading-relaxed">
                  Wij reageren op berichten en aanvragen buiten de klassieke kantooruren. Een eerste reactie
                  ontvangt u doorgaans binnen 2 uur, ook op zaterdag en zondag.
                </p>
              </div>
            </FadeIn>
          </div>
        </Section>

        {/* Formulier verwijzing */}
        <Section variant="bone">
          <div className="max-w-2xl">
            <Heading level={2} className="mb-4">Bod aanvragen via het formulier</Heading>
            <Prose className="text-muted mb-8">
              <p>
                De snelste manier om een bod aan te vragen is via het formulier op de homepage. U vult het
                adres, het type pand en de staat in. Wij analyseren de locatie en bezorgen u doorgaans
                binnen 2 uur contact — ook in het weekend.
              </p>
            </Prose>
            <Button href="/#formulier" variant="primary" className="px-8 py-4 text-base">
              Ga naar het formulier
            </Button>
          </div>
        </Section>

        {/* Hoe wij werken verwijzing */}
        <Section variant="white">
          <div className="max-w-2xl">
            <Heading level={2} className="mb-4">Hoe verloopt het proces?</Heading>
            <Prose className="text-muted mb-8">
              <p>
                Van uw eerste contactname tot de notariële akte verloopt alles in 4 stappen. Wij regelen
                het dossier, de attesten en de notarisplanning. U hoeft zich nergens zorgen over te maken.
              </p>
            </Prose>
            <Button href="/hoe-wij-werken" variant="secondary" className="px-8 py-4 text-base">
              Lees hoe wij werken
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
      <StickyCtaButton />
    </>
  );
}
