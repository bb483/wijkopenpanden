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
  title: "Blijven wonen na verkoop — wijkopenpanden.be",
  description:
    "Uw woning verkopen en er toch in blijven wonen? wijkopenpanden.be biedt sale-and-rent-back aan. Ideaal bij erfenis, scheiding of nood aan liquiditeit. Meer info.",
  alternates: { canonical: "https://wijkopenpanden.be/blijven-wonen" },
  openGraph: {
    title: "Blijven wonen na verkoop — wijkopenpanden.be",
    description:
      "Uw woning verkopen en er toch in blijven wonen? wijkopenpanden.be biedt sale-and-rent-back aan. Ideaal bij erfenis, scheiding of nood aan liquiditeit. Meer info.",
    url: "https://wijkopenpanden.be/blijven-wonen",
    siteName: "wijkopenpanden.be",
    locale: "nl_BE",
    type: "website",
  },
};

const benefits = [
  {
    title: "Onmiddellijke liquiditeit",
    body: "U ontvangt de volledige verkoopprijs bij de notariële akte. U hoeft niet te wachten op een klassieke koper en u draagt geen risico van een afspringende financiering.",
  },
  {
    title: "Geen verhuizing nodig",
    body: "U blijft wonen in uw vertrouwde omgeving. U sluit tegelijk met de verkoop een huurovereenkomst af. De overgang is administratief, niet fysiek.",
  },
  {
    title: "U kiest de duur",
    body: "De huurperiode wordt in overleg bepaald. U kunt een kortlopend contract kiezen als u na een jaar ergens anders naartoe wilt, of een langduriger overeenkomst als u de rust van een vaste verblijfplaats wilt bewaren.",
  },
  {
    title: "Zekerheid over uw situatie",
    body: "Na de verkoop bent u geen eigenaar meer maar u blijft huurder met wettelijke bescherming. U weet waar u aan toe bent, ook op langere termijn.",
  },
];

const faqs = [
  {
    question: "Wat is sale-and-rent-back precies?",
    answer:
      "Sale-and-rent-back houdt in dat u uw woning verkoopt aan wijkopenpanden.be en er tegelijk een huurovereenkomst voor ondertekent. U ontvangt de verkoopprijs bij de akte en blijft in de woning wonen als huurder. De huurprijs en de duur worden vooraf in overleg bepaald.",
  },
  {
    question: "Voor wie is dit geschikt?",
    answer:
      "Dit is een oplossing voor eigenaars die nood hebben aan liquiditeit maar hun woning niet willen verlaten. Dat is het geval bij oudere eigenaars die hun pensioen willen aanvullen, bij erfenissen waarbij één erfgenaam in de woning woont, bij scheidingen waarbij één partner de woning wil blijven bewonen, of bij mensen die tijdelijk financieel druk ervaren.",
  },
  {
    question: "Wat gebeurt er als ik later toch wil vertrekken?",
    answer:
      "U kunt de huurovereenkomst beëindigen volgens de wettelijke opzegtermijnen uit het Vlaams Huurdecreet. U bent niet voor altijd gebonden. Als u vroegtijdig wil vertrekken, spreekt u dit best vooraf af zodat wij samen een vlotte overgang kunnen plannen.",
  },
  {
    question: "Is de huurprijs marktconform?",
    answer:
      "Ja. De huurprijs die wij voorstellen, is gebaseerd op de marktwaarde voor vergelijkbare woningen in de buurt. Wij gaan geen kunstmatig hoge huurprijzen vragen — dat zou het voordeel van de regeling tenietdoen. De huurprijs wordt vastgelegd in de huurovereenkomst en kan niet eenzijdig worden verhoogd buiten de wettelijke indexeringen.",
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
            <span>Blijven wonen na verkoop</span>
          </nav>
          <FadeIn>
            <Heading level={1} className="max-w-2xl mb-6">Uw woning verkopen en blijven wonen</Heading>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Prose className="text-muted mb-8 max-w-2xl">
              <p>
                Soms wilt u de financiële waarde van uw eigendom vrijmaken zonder uw vertrouwde omgeving te
                verlaten. wijkopenpanden.be biedt de mogelijkheid om uw woning te verkopen en er tegelijk
                als huurder in te blijven wonen. U ontvangt de volledige verkoopprijs en sluit gelijktijdig
                een huurovereenkomst af voor een periode die u past.
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
          <Heading level={2} className="mb-8">Voor wie is dit een goede keuze?</Heading>
          <div className="max-w-2xl flex flex-col gap-4">
            {[
              "Oudere eigenaars die hun pensioen willen aanvullen maar niet willen verhuizen",
              "Erfgenamen waarbij één persoon in de woning woont en de anderen hun deel willen opnemen",
              "Partners in een scheiding waarbij één partij tijdelijk in de woning wil blijven",
              "Eigenaars die financiële ademruimte nodig hebben maar hun wijk en sociale omgeving niet willen verlaten",
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
          <Heading level={2} className="mb-12">Hoe verloopt het?</Heading>
          <div className="flex flex-col gap-10 max-w-3xl">
            {[
              {
                n: "01",
                title: "Aanvraag en gesprek",
                body: "U neemt contact op via het formulier of telefoon. Wij bespreken uw situatie en of sale-and-rent-back voor u de juiste oplossing is. Dat gesprek is volledig vrijblijvend.",
              },
              {
                n: "02",
                title: "Bezoek en bod",
                body: "Wij bezoeken het pand en bezorgen u een concreet bod op de verkoopwaarde en een voorstel voor de huurprijs. Beide worden samen bekeken zodat u een volledig beeld heeft.",
              },
              {
                n: "03",
                title: "Notariële akte en huurovereenkomst",
                body: "Bij de notaris wordt de eigendomsoverdracht vastgelegd. Tegelijk wordt de huurovereenkomst ondertekend. U ontvangt de verkoopprijs en uw huurovereenkomst gaat onmiddellijk in.",
              },
              {
                n: "04",
                title: "U blijft wonen",
                body: "U woont verder in uw woning als huurder met alle wettelijke bescherming die het Vlaams Huurdecreet biedt. Wij nemen de verplichtingen als eigenaar op ons.",
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
          <Heading level={2} className="mb-10">Waarom kiezen voor deze formule?</Heading>
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

        {/* FAQ */}
        <Section variant="bone">
          <Heading level={2} className="mb-10">Veelgestelde vragen</Heading>
          <div className="max-w-3xl">
            <FAQAccordion faqs={faqs} />
          </div>
        </Section>

        {/* CTA */}
        <Section variant="white" id="formulier">
          <div className="max-w-xl">
            <Heading level={2} className="mb-4">Meer weten over blijven wonen na verkoop?</Heading>
            <p className="text-muted text-sm mb-6">
              Neem vrijblijvend contact op. Wij bespreken uw situatie en laten u weten of deze formule voor
              u werkt. Reactie binnen 2 uur.
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
