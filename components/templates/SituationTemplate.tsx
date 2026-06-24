import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import Prose from "@/components/Prose";
import Button from "@/components/Button";
import ScrollToFormulier from "@/components/ScrollToFormulier";
import FAQAccordion from "@/components/FAQAccordion";
import JsonLd from "@/components/JsonLd";
import StickyCtaButton from "@/components/StickyCtaButton";
import type { Situation } from "@/content/types";

const BASE_URL = "https://wijkopenpanden.be";

export default function SituationTemplate({ data }: { data: Situation }) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: data.title, item: `${BASE_URL}/${data.slug}` },
    ],
  };

  const faqSchema = data.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  } : null;

  return (
    <>
      <JsonLd data={breadcrumb} />
      {faqSchema && <JsonLd data={faqSchema} />}
      <Nav />
      <main className="flex-1">
        {/* Hero */}
        <Section hero>
          <nav className="text-xs text-muted mb-6">
            <a href="/" className="hover:text-ink transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span>{data.title}</span>
          </nav>
          <Heading level={1} className="max-w-2xl mb-6">{data.h1}</Heading>
          <Prose className="text-muted mb-8 max-w-2xl">
            <p>{data.intro}</p>
          </Prose>
          <div className="flex flex-wrap gap-3">
            <ScrollToFormulier className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-medium tracking-wide bg-ink text-bone border border-ink transition-colors duration-200 cursor-pointer">Vraag uw bod aan</ScrollToFormulier>
            <Button href="tel:0492779475" variant="secondary" className="px-8 py-4 text-base">0492 77 94 75</Button>
          </div>
        </Section>

        {/* Pijnpunten */}
        {data.painPoints.length > 0 && (
          <Section variant="white">
            <Heading level={2} className="mb-8">Waar eigenaars tegenaan lopen</Heading>
            <div className="max-w-2xl flex flex-col gap-4">
              {data.painPoints.map((p, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <p className="text-sm text-muted leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Stappen */}
        {data.steps.length > 0 && (
          <Section variant="bone">
            <Heading level={2} className="mb-12">Hoe verloopt het?</Heading>
            <div className="flex flex-col gap-10 max-w-3xl">
              {data.steps.map((step, i) => (
                <div key={i} className="flex gap-8 items-start">
                  <span className="font-serif text-5xl text-ink/15 leading-none flex-shrink-0 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif font-semibold text-xl text-ink mb-2">{step.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Fiscale noot */}
        {data.fiscalNote && (
          <Section variant="white">
            <div className="max-w-3xl border-l-2 border-accent pl-6">
              <p className="text-xs text-accent font-medium tracking-widest uppercase mb-2">Fiscale opmerking</p>
              <p className="text-sm text-muted leading-relaxed">{data.fiscalNote}</p>
            </div>
          </Section>
        )}

        {/* FAQ */}
        {data.faqs.length > 0 && (
          <Section variant="bone">
            <Heading level={2} className="mb-10">Veelgestelde vragen</Heading>
            <div className="max-w-3xl">
              <FAQAccordion faqs={data.faqs} />
            </div>
          </Section>
        )}

        {/* Internal links */}
        {(data.relatedPropertyTypes.length > 0 || data.relatedArticles.length > 0) && (
          <Section variant="white">
            <Heading level={2} className="mb-6">Verwante informatie</Heading>
            <div className="flex flex-wrap gap-4">
              {data.relatedPropertyTypes.map((slug) => (
                <a key={slug} href={`/${slug}`} className="text-sm text-ink border border-ink/15 px-4 py-2 hover:border-ink/40 transition-colors">
                  {slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                </a>
              ))}
              {data.relatedArticles.map((slug) => (
                <a key={slug} href={`/kennisbank/${slug}`} className="text-sm text-ink border border-ink/15 px-4 py-2 hover:border-ink/40 transition-colors">
                  Kennisbank: {slug.replace(/-/g, " ")}
                </a>
              ))}
            </div>
          </Section>
        )}

        {/* CTA */}
        <Section variant="bone" id="formulier">
          <div className="max-w-xl">
            <Heading level={2} className="mb-4">Woning verkopen in uw situatie?</Heading>
            <p className="text-muted text-sm mb-6">Vrijblijvend. Reactie binnen 2 uur — ook in het weekend.</p>
            <Button href="/#formulier" variant="primary" className="px-8 py-4 text-base">Ga naar het contactformulier</Button>
          </div>
        </Section>
      </main>
      <Footer />
      <StickyCtaButton />
    </>
  );
}
