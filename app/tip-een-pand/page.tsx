import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import Prose from "@/components/Prose";
import FadeIn from "@/components/FadeIn";
import FAQAccordion from "@/components/FAQAccordion";
import JsonLd from "@/components/JsonLd";
import TipFormulier from "@/components/TipFormulier";

export const metadata: Metadata = {
  title: "Tip een pand & verdien tot €5.000 — wijkopenpanden.be",
  description:
    "Kent u een woning of pand in de Antwerpse regio waarvan de eigenaar mogelijk wil verkopen? Geef uw tip door en ontvang tot €5.000 bij een succesvolle aankoop.",
  alternates: { canonical: "https://wijkopenpanden.be/tip-een-pand" },
  openGraph: {
    title: "Tip een pand & verdien tot €5.000 — wijkopenpanden.be",
    description:
      "Geef een tip over een potentieel pand en ontvang tot €5.000 beloning bij een succesvolle deal. Discreet, vrijblijvend en snel uitbetaald.",
    url: "https://wijkopenpanden.be/tip-een-pand",
    siteName: "wijkopenpanden.be",
    locale: "nl_BE",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const steps = [
  {
    number: "01",
    title: "U geeft een tip",
    body: "U vult het adres en het type pand in via het formulier hieronder. Een korte context is optioneel maar handig.",
  },
  {
    number: "02",
    title: "Wij nemen contact op",
    body: "Wij benaderen de eigenaar discreet en professioneel. Uw naam wordt nooit vermeld tenzij u dat zelf wenst.",
  },
  {
    number: "03",
    title: "Deal gesloten — beloning uitbetaald",
    body: "Wordt het pand aangekocht? Dan ontvangt u tot €5.000 beloning, uitbetaald na de notariële akte.",
  },
];

const faqs = [
  {
    question: "Wanneer ontvang ik mijn beloning?",
    answer:
      "De beloning wordt uitbetaald na het ondertekenen van de notariële akte van aankoop. Wij contacteren u zodra de deal definitief is.",
  },
  {
    question: "Hoe hoog is de beloning precies?",
    answer:
      "De beloning bedraagt tot €5.000, afhankelijk van de aankoopprijs van het pand. Het exacte bedrag bespreken wij persoonlijk na ontvangst van uw tip.",
  },
  {
    question: "Moet de eigenaar weten dat ik een tip gaf?",
    answer:
      "Nee. Wij behandelen uw tip volledig discreet. Uw naam en contactgegevens worden nooit gedeeld met de eigenaar zonder uw toestemming.",
  },
  {
    question: "Welke panden komen in aanmerking?",
    answer:
      "Alle types vastgoed in de Antwerpse regio: rijhuizen, appartementen, villa's, herenhuizen, opbrengsteigendommen, bouwgronden en meer. Zowel bewoond als leegstaand.",
  },
  {
    question: "Wat als de eigenaar uiteindelijk niet wil verkopen?",
    answer:
      "Dan ontvangt u geen beloning — maar u riskeert ook niets. Het indienen van een tip is volledig gratis en vrijblijvend voor u.",
  },
  {
    question: "Kan ik meerdere panden tippen?",
    answer:
      "Absoluut. U kunt voor elk pand een apart formulier invullen. Voor elk succesvol dossier ontvangt u een aparte beloning.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://wijkopenpanden.be" },
    { "@type": "ListItem", position: 2, name: "Tip een pand", item: "https://wijkopenpanden.be/tip-een-pand" },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Nav />
      <main className="flex-1">

        {/* Hero */}
        <Section hero>
          <nav className="text-xs text-muted mb-6">
            <a href="/" className="hover:text-ink transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span>Tip een pand</span>
          </nav>
          <FadeIn>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-semibold" style={{ background: "rgba(196,163,90,0.12)", color: "#C4A35A", border: "1px solid rgba(196,163,90,0.25)" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#C4A35A" />
              </svg>
              Tot €5.000 beloning
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <Heading level={1} className="max-w-3xl mb-6">
              Kent u een pand waarvan de eigenaar wil verkopen?
            </Heading>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Prose className="text-muted mb-8 max-w-2xl">
              <p>
                Wij kopen panden aan in de Antwerpse regio — ook als ze nog niet officieel te koop staan.
                Geef ons een tip en verdien tot <strong>€5.000 beloning</strong> bij een succesvolle aankoop.
                Volledig discreet, volledig gratis voor u.
              </p>
            </Prose>
          </FadeIn>
          <FadeIn delay={0.15}>
            <a
              href="#tip-formulier"
              className="inline-flex px-8 py-4 rounded-full text-base font-semibold text-white transition-colors duration-200 bg-[#C4A35A] hover:bg-[#b08d47]"
            >
              Geef uw tip door
            </a>
          </FadeIn>
        </Section>

        {/* Hoe het werkt */}
        <Section variant="white">
          <div className="flex items-center gap-3 mb-10">
            <span className="w-6 h-px flex-shrink-0" style={{ background: "#C4A35A" }} />
            <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C4A35A" }}>In 3 stappen</p>
          </div>
          <Heading level={2} className="mb-12 max-w-xl">Zo werkt het</Heading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step) => (
              <div key={step.number}>
                <p className="font-serif text-5xl font-bold mb-4" style={{ color: "rgba(196,163,90,0.25)" }}>
                  {step.number}
                </p>
                <h3 className="font-serif text-xl text-ink mb-3">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Beloningsoverzicht */}
        <Section variant="bone">
          <Heading level={2} className="mb-10">Waarvoor betalen wij?</Heading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
            {[
              { icon: "🏠", label: "Rijhuis of halfopen woning", reward: "Tot €2.000" },
              { icon: "🏢", label: "Appartement", reward: "Tot €1.500" },
              { icon: "🏛", label: "Herenhuis of villa", reward: "Tot €5.000" },
              { icon: "🏗", label: "Opbrengsteigendom", reward: "Tot €5.000" },
              { icon: "🌿", label: "Bouwgrond", reward: "Tot €3.000" },
              { icon: "📦", label: "Garage, box of andere", reward: "Tot €500" },
            ].map((item) => (
              <div
                key={item.label}
                className="p-6 rounded-xl"
                style={{ background: "#FFFFFF", border: "1px solid rgba(28,22,16,0.08)" }}
              >
                <p className="text-2xl mb-3">{item.icon}</p>
                <p className="text-sm font-medium text-ink mb-1">{item.label}</p>
                <p className="font-serif text-xl font-bold" style={{ color: "#C4A35A" }}>{item.reward}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted mt-6 max-w-xl">
            De exacte beloning is afhankelijk van de aankoopprijs en wordt besproken na ontvangst van uw tip. Uitbetaling na notariële akte.
          </p>
        </Section>

        {/* Formaat */}
        <TipFormulier />

        {/* FAQ */}
        <Section variant="white">
          <Heading level={2} className="mb-10">Veelgestelde vragen</Heading>
          <div className="max-w-3xl">
            <FAQAccordion faqs={faqs} />
          </div>
        </Section>

        {/* Bottom CTA */}
        <Section variant="bone">
          <div className="max-w-2xl">
            <Heading level={2} className="mb-4">Heeft u zelf een pand te verkopen?</Heading>
            <Prose className="text-muted mb-8">
              <p>
                Wilt u zelf uw woning snel en zonder gedoe verkopen? Vraag een vrijblijvend bod aan.
                Wij reageren binnen 2 uur — ook in het weekend.
              </p>
            </Prose>
            <a
              href="/#formulier"
              className="inline-flex px-8 py-4 rounded-full text-base font-semibond text-white transition-colors duration-200 bg-[#C0392B] hover:bg-[#a93226]"
            >
              Vraag uw bod aan
            </a>
          </div>
        </Section>

      </main>
      <Footer />
    </>
  );
}
