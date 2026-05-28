import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import Prose from "@/components/Prose";
import Button from "@/components/Button";
import FAQAccordion from "@/components/FAQAccordion";
import FadeIn from "@/components/FadeIn";
import StickyCtaButton from "@/components/StickyCtaButton";

export const metadata: Metadata = {
  title: "Hoe wij werken — wijkopenpanden.be",
  description:
    "Ontdek hoe wijkopenpanden.be uw woning rechtstreeks aankoopt in 4 stappen: aanvraag, bezoek, contact binnen 2 uur, notariële akte. Geen makelaar, geen commissie.",
  alternates: { canonical: "https://wijkopenpanden.be/hoe-wij-werken" },
  openGraph: {
    title: "Hoe wij werken — wijkopenpanden.be",
    description:
      "Ontdek hoe wijkopenpanden.be uw woning rechtstreeks aankoopt in 4 stappen: aanvraag, bezoek, contact binnen 2 uur, notariële akte. Geen makelaar, geen commissie.",
    url: "https://wijkopenpanden.be/hoe-wij-werken",
    siteName: "wijkopenpanden.be",
    locale: "nl_BE",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const steps = [
  {
    number: "01",
    title: "Aanvraag",
    body: "U vult het formulier op onze homepage in of belt ons rechtstreeks op 0492 77 94 75 of 0492 27 70 76. Wij hebben het adres, het type pand en een korte beschrijving van de staat nodig. Geen foto's verplicht, geen dossier samen te stellen. Wij doen het verdere opzoekwerk zelf.",
  },
  {
    number: "02",
    title: "Bezoek en analyse",
    body: "Na uw aanvraag plannen wij een bezoek aan het pand, doorgaans binnen 48 uur. Wij komen de staat van het dak, de kelder, de elektriciteit en het schrijnwerk bekijken. Het bezoek duurt gemiddeld 30 tot 45 minuten en is volledig vrijblijvend. U bent tot niets verplicht na het bezoek.",
  },
  {
    number: "03",
    title: "Schriftelijk bod",
    body: "Op basis van ons bezoek en onze analyse bezorgen wij u doorgaans na bezichtiging een schriftelijk bod. Dat bod is concreet, gemotiveerd en 7 dagen geldig. Er worden nadien geen extra kortingen gevraagd bij de akte. Wat in het bod staat, is wat u ontvangt.",
  },
  {
    number: "04",
    title: "Notaris en ondertekening",
    body: "Als u het bod aanvaardt, regelen wij het volledige notarisdossier: bodemattest, stedenbouwkundige informatie, alle verplichte attesten. U kiest de datum van de akte. Van akkoord tot akte duurt gemiddeld 2 tot 3 maanden. U kiest uw eigen notaris of werkt met de onze.",
  },
];

const faqs = [
  {
    question: "Is het bezoek aan het pand verplicht?",
    answer:
      "Het bezoek is noodzakelijk voor een definitief bod, maar het is altijd vrijblijvend. U bent na het bezoek tot niets verplicht. Als het indicatieve bod na ons telefonisch gesprek al niet interessant is, hoeven wij het pand niet te bezoeken.",
  },
  {
    question: "Hoe lang is het bod geldig?",
    answer:
      "Ons schriftelijk bod is 7 kalenderdagen geldig. Daarna vervalt het en kunt u een nieuw gesprek aanvragen als u nog steeds interesse heeft. Wij vragen geen exclusiviteit gedurende die periode.",
  },
  {
    question: "Kan ik het bod vergelijken met andere bieders?",
    answer:
      "Ja. Tot het moment dat u de koopbelofte ondertekent, bent u volledig vrij om andere biedingen te overwegen. Wij verwachten wel dat u transparant bent als u meerdere biedingen vergelijkt.",
  },
  {
    question: "Wie regelt de notariskosten?",
    answer:
      "In België betaalt de koper de registratierechten en het notarisereloon voor de overdracht. Als verkoper betaalt u enkel de kosten voor de doorhaling van een eventuele hypotheek. Wij dragen onze eigen notariskosten. U ontvangt netto de overeengekomen verkoopprijs.",
  },
  {
    question: "Wat als ik na het bod van gedachte verander?",
    answer:
      "Zolang u de koopbelofte niet heeft ondertekend, kunt u van de verkoop afzien. Eens de koopbelofte is ondertekend, is de verkoop juridisch bindend. Wij raden u aan de tijd te nemen voor u tekent en eventueel uw notaris of een adviseur te raadplegen.",
  },
];

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
            <span>Hoe wij werken</span>
          </nav>
          <FadeIn>
            <Heading level={1} className="max-w-2xl mb-6">Hoe wij werken</Heading>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Prose className="text-muted mb-8 max-w-2xl">
              <p>
                Wij kopen woningen en panden rechtstreeks aan in de Antwerpse regio — zonder makelaar, zonder
                keuringen die u zelf moet regelen en zonder maanden wachten. Het proces verloopt in 4 stappen
                en is volledig transparant.
              </p>
            </Prose>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap gap-3">
              <Button href="#formulier" variant="primary" className="px-8 py-4 text-base">Vraag uw bod aan</Button>
              <Button href="tel:0492779475" variant="secondary" className="px-8 py-4 text-base">0492 77 94 75</Button>
            </div>
          </FadeIn>
        </Section>

        {/* De 4 stappen */}
        <Section variant="white">
          <Heading level={2} className="mb-12">De 4 stappen</Heading>
          <div className="flex flex-col gap-12 max-w-3xl">
            {steps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="flex gap-8 items-start">
                  <span className="font-serif text-5xl text-ink/15 leading-none flex-shrink-0 select-none w-16">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-ink mb-3">{step.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{step.body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Section>

        {/* Waarom rechtstreeks */}
        <Section variant="bone">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
            <div>
              <Heading level={2} className="mb-6">Geen verrassingen bij de akte</Heading>
              <Prose className="text-muted">
                <p>
                  Het schriftelijke bod dat u ontvangt, is het bedrag dat u bij de akte krijgt. Wij vragen
                  nadien geen extra kortingen voor zaken die wij bij ons bezoek hadden kunnen vaststellen.
                  Eventuele verborgen gebreken die wij redelijkerwijs niet konden zien, vormen een uitzondering
                  — maar die situatie doet zich in de praktijk zelden voor.
                </p>
              </Prose>
            </div>
            <div>
              <Heading level={2} className="mb-6">Geen keuringen, geen attesten</Heading>
              <Prose className="text-muted">
                <p>
                  Bij een klassieke verkoop legt u een EPC, een elektriciteitskeuring, een asbestinventaris
                  en soms een conformiteitsattest voor. Wij regelen al deze attesten na de aankoop en
                  verrekenen de kost intern. U levert ons het pand in de huidige staat op.
                </p>
              </Prose>
            </div>
          </div>
        </Section>

        {/* FAQ */}
        <Section variant="white">
          <Heading level={2} className="mb-10">Veelgestelde vragen over ons proces</Heading>
          <div className="max-w-3xl">
            <FAQAccordion faqs={faqs} />
          </div>
        </Section>

        {/* CTA */}
        <Section variant="bone" id="formulier">
          <div className="max-w-xl">
            <Heading level={2} className="mb-4">Klaar om te starten?</Heading>
            <p className="text-muted text-sm mb-6">
              Vrijblijvend. Reactie binnen 2 uur — ook in het weekend en na 18 uur.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/#formulier" variant="primary" className="px-8 py-4 text-base">Ga naar het contactformulier</Button>
              <Button href="tel:0492779475" variant="secondary" className="px-8 py-4 text-base">Bel ons: 0492 77 94 75</Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
      <StickyCtaButton />
    </>
  );
}
