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
  title: "Lijfrente Antwerpen — uw woning verkopen met levenslange uitkering | wijkopenpanden.be",
  description:
    "Uw woning verkopen via lijfrente in Antwerpen. Ontvang een maandelijkse uitkering voor de rest van uw leven en behoud het recht van gebruik. Meer info bij wijkopenpanden.be.",
  alternates: { canonical: "https://wijkopenpanden.be/lijfrente-antwerpen" },
  openGraph: {
    title: "Lijfrente Antwerpen — uw woning verkopen met levenslange uitkering | wijkopenpanden.be",
    description:
      "Uw woning verkopen via lijfrente in Antwerpen. Ontvang een maandelijkse uitkering voor de rest van uw leven en behoud het recht van gebruik. Meer info bij wijkopenpanden.be.",
    url: "https://wijkopenpanden.be/lijfrente-antwerpen",
    siteName: "wijkopenpanden.be",
    locale: "nl_BE",
    type: "website",
  },
};

const benefits = [
  {
    title: "Pensioen aanvullen",
    body: "De maandelijkse lijfrente vult uw wettelijk pensioen aan. U hoeft geen spaargeld aan te spreken voor dagelijkse kosten en u behoudt financiële onafhankelijkheid.",
  },
  {
    title: "In uw woning blijven",
    body: "U behoudt het recht van gebruik en bewoning (of het vruchtgebruik) van de woning. U woont er verder totdat u zelf beslist te vertrekken of tot uw overlijden.",
  },
  {
    title: "Geen erfeniscomplicaties",
    body: "De woning gaat bij de lijfrenteovereenkomst over naar de koper. Dat vermijdt discussies onder erfgenamen over de waarde, het beheer of de verdeling van de woning na uw overlijden.",
  },
  {
    title: "Eventueel een voorschot",
    body: "Naast de maandelijkse rente kan er een eenmalig bedrag (het bouquet) worden afgesproken bij de akte. Dat geeft u onmiddellijk extra liquiditeit voor een grote aankoop, een schenking of een specifieke behoefte.",
  },
];

const faqs = [
  {
    question: "Wat is lijfrente precies?",
    answer:
      "Bij een lijfrenteverkoop verkoopt u uw eigendom aan een koper in ruil voor een maandelijkse uitkering die u voor de rest van uw leven ontvangt. Optioneel wordt er ook een eenmalig bedrag (bouquet) betaald bij de akte. U behoudt doorgaans het recht van gebruik en bewoning, of het vruchtgebruik. De overdracht wordt vastgelegd in een notariële akte.",
  },
  {
    question: "Wat is het verschil tussen lijfrente en sale-and-rent-back?",
    answer:
      "Bij sale-and-rent-back verkoopt u de woning voor een marktconforme prijs en betaalt u nadien een huurprijs. Bij lijfrente betaalt de koper u een maandelijkse rente in plaats van een eenmalige prijs — u ontvangt dus gespreid geld in de tijd. Het recht van gebruik is bij lijfrente doorgaans ingebouwd in de verkoopprijs, terwijl u bij sale-and-rent-back huur betaalt. De juiste formule hangt af van uw persoonlijke situatie.",
  },
  {
    question: "Wat gebeurt er met de lijfrente als ik vroeg overlijdt?",
    answer:
      "De lijfrente stopt bij uw overlijden. Er wordt geen uitkering doorgestort aan uw erfgenamen voor de niet-ontvangen maanden of jaren. Dat risico is de reden waarom de maandelijkse uitkering hoger is dan bij een gewone huur. Bij sommige formules wordt een minimale garantieperiode ingebouwd — dat is iets wat u met de notaris en de koper kunt bespreken.",
  },
  {
    question: "Kan ik de woning nog schenken of nalaten aan mijn kinderen?",
    answer:
      "Neen. Op het moment dat u de lijfrenteovereenkomst ondertekent, draagt u de eigendom over. U kunt de woning nadien niet meer schenken of nalaten. Dat is precies waarom lijfrente voor sommige eigenaars een bewuste keuze is: u regelt de woning bij leven en vermijdt discussies achteraf.",
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
            <span>Lijfrente Antwerpen</span>
          </nav>
          <FadeIn>
            <Heading level={1} className="max-w-2xl mb-6">
              Uw woning verkopen via lijfrente in Antwerpen
            </Heading>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Prose className="text-muted mb-8 max-w-2xl">
              <p>
                Een lijfrenteverkoop houdt in dat u uw woning overdraagt aan een koper in ruil voor een
                maandelijkse uitkering voor de rest van uw leven. U behoudt het recht van gebruik en
                bewoning van uw woning — u verhuist niet. De overeenkomst wordt vastgelegd in een notariële
                akte en biedt u juridische zekerheid.
              </p>
            </Prose>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap gap-3">
              <Button href="#formulier" variant="primary" className="px-8 py-4 text-base">Meer informatie aanvragen</Button>
              <Button href="tel:0492779475" variant="secondary" className="px-8 py-4 text-base">0492 77 94 75</Button>
            </div>
          </FadeIn>
        </Section>

        {/* Voor wie */}
        <Section variant="white">
          <Heading level={2} className="mb-8">Voor wie is lijfrente geschikt?</Heading>
          <div className="max-w-2xl flex flex-col gap-4">
            {[
              "65-plussers die eigenaar zijn van hun woning en hun pensioen willen aanvullen",
              "Eigenaars die in hun woning willen blijven wonen maar de financiële lasten wil verminderen",
              "Mensen zonder erfgenamen of die bewust kiezen om de woning niet na te laten",
              "Eigenaars die een grote behoefte hebben aan maandelijkse zekerheid in de plaats van een eenmalig bedrag",
            ].map((point, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="flex gap-4 items-start">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <p className="text-sm text-muted leading-relaxed">{point}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Section>

        {/* Hoe werkt het */}
        <Section variant="bone">
          <Heading level={2} className="mb-12">Hoe verloopt een lijfrenteverkoop?</Heading>
          <div className="flex flex-col gap-10 max-w-3xl">
            {[
              {
                n: "01",
                title: "Eerste gesprek",
                body: "Wij bespreken uw situatie, uw verwachtingen en of lijfrente voor u de meest geschikte formule is. Er is ook een alternatieve formule — sale-and-rent-back — die wij u kunnen uitleggen. Dat gesprek is volledig vrijblijvend.",
              },
              {
                n: "02",
                title: "Waardebepaling en berekening",
                body: "Op basis van de waarde van het pand, uw leeftijd en de gekozen formule berekent de notaris de maandelijkse lijfrente en het eventuele bouquet. Die berekening is transparant en wordt samen met u doorgenomen voor u iets ondertekent.",
              },
              {
                n: "03",
                title: "Notariële akte",
                body: "De lijfrenteovereenkomst wordt vastgelegd in een notariële akte. Daarin staan de maandelijkse uitkering, de eventuele eenmalige betaling, het recht van gebruik en bewoning en alle andere voorwaarden. U tekent bij de notaris van uw keuze.",
              },
              {
                n: "04",
                title: "Levenslange uitkering",
                body: "Vanaf de datum van de akte ontvangt u maandelijks de overeengekomen lijfrente. U blijft in uw woning wonen. Wij dragen als nieuwe eigenaar de lasten van het eigendom: onroerende voorheffing, grote herstellingen en de verplichtingen tegenover de gemeente.",
              },
            ].map((step, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="flex gap-8 items-start">
                  <span className="font-serif text-5xl text-ink/15 leading-none flex-shrink-0 select-none w-16">
                    {step.n}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-ink mb-2">{step.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{step.body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Section>

        {/* Voordelen */}
        <Section variant="white">
          <Heading level={2} className="mb-10">Voordelen van een lijfrenteverkoop</Heading>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {benefits.map((b, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="border-t-2 border-accent pt-6">
                  <h3 className="font-serif text-xl text-ink mb-3">{b.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{b.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Section>

        {/* Notitie */}
        <Section variant="bone">
          <div className="max-w-3xl">
            <div className="border-l-2 border-accent pl-6">
              <p className="text-xs text-accent font-medium tracking-widest uppercase mb-2">Juridische opmerking</p>
              <p className="text-sm text-muted leading-relaxed">
                Een lijfrenteverkoop is een complexe notariële overeenkomst met juridische en fiscale
                gevolgen voor beide partijen. Wij raden u aan de overeenkomst te laten nalezen door uw
                eigen notaris of een onafhankelijk adviseur voor u tekent. wijkopenpanden.be geeft geen
                juridisch of fiscaal advies.
              </p>
            </div>
          </div>
        </Section>

        {/* FAQ */}
        <Section variant="white">
          <Heading level={2} className="mb-10">Veelgestelde vragen</Heading>
          <div className="max-w-3xl">
            <FAQAccordion faqs={faqs} />
          </div>
        </Section>

        {/* CTA */}
        <Section variant="bone" id="formulier">
          <div className="max-w-xl">
            <Heading level={2} className="mb-4">Informatie aanvragen over lijfrente?</Heading>
            <p className="text-muted text-sm mb-6">
              Vrijblijvend gesprek. Wij leggen u de opties uit en berekenen samen wat haalbaar is.
              Reactie binnen 2 uur.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/#formulier" variant="primary" className="px-8 py-4 text-base">Stuur ons een bericht</Button>
              <Button href="tel:0492779475" variant="secondary" className="px-8 py-4 text-base">Bel: 0492 77 94 75</Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
      <StickyCtaButton />
    </>
  );
}
