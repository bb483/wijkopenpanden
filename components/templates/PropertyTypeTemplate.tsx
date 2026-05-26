import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Prose from "@/components/Prose";
import Button from "@/components/Button";
import FAQAccordion from "@/components/FAQAccordion";
import JsonLd from "@/components/JsonLd";
import StickyCtaButton from "@/components/StickyCtaButton";
import type { PropertyType } from "@/content/types";

const BASE_URL = "https://wijkopenpanden.be";


export default function PropertyTypeTemplate({ data }: { data: PropertyType }) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: data.label, item: `${BASE_URL}/${data.slug}` },
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
            <span>{data.label}</span>
          </nav>
          <Heading level={1} className="max-w-2xl mb-6">{data.h1}</Heading>
          <Prose className="text-muted mb-8 max-w-2xl">
            <p>{data.intro}</p>
          </Prose>
          <div className="flex flex-wrap gap-3">
            <Button href="#formulier" variant="primary" className="px-8 py-4 text-base">Vraag uw bod aan</Button>
            <Button href="tel:0492779475" variant="secondary" className="px-8 py-4 text-base">0492 77 94 75</Button>
          </div>
        </Section>

        {/* Kenmerken */}
        {data.characteristics.length > 0 && (
          <Section variant="white">
            <Heading level={2} className="mb-10">Waar wij op letten bij {data.labelPlural.toLowerCase()}</Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.characteristics.map((c, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-lg text-ink mb-1">{c.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{c.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        )}


        {/* FAQ */}
        {data.faqs.length > 0 && (
          <Section variant="white">
            <Heading level={2} className="mb-10">Veelgestelde vragen over {data.labelPlural.toLowerCase()} verkopen</Heading>
            <div className="max-w-3xl">
              <FAQAccordion faqs={data.faqs} />
            </div>
          </Section>
        )}

        {/* Internal links */}
        <Section variant="bone">
          <Heading level={2} className="mb-8">Meer informatie</Heading>
          <div className="flex flex-wrap gap-4">
            {data.relatedRegions.map((slug) => (
              <a key={slug} href={`/regios/${slug}`} className="text-sm text-ink border border-ink/15 px-4 py-2 hover:border-ink/40 transition-colors">
                Verkopen in {slug.charAt(0).toUpperCase() + slug.slice(1)}
              </a>
            ))}
            {data.relatedSituations.map((slug) => (
              <a key={slug} href={`/${slug}`} className="text-sm text-ink border border-ink/15 px-4 py-2 hover:border-ink/40 transition-colors">
                {slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
              </a>
            ))}
          </div>
        </Section>

        {/* CTA formulier */}
        <Section variant="white" id="formulier">
          <div className="max-w-xl">
            <Heading level={2} className="mb-4">Vraag een bod aan voor uw {data.label.toLowerCase()}</Heading>
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
