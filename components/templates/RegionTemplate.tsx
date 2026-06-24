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
import type { Region } from "@/content/types";

const BASE_URL = "https://wijkopenpanden.be";

export default function RegionTemplate({ data }: { data: Region }) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Regio's", item: `${BASE_URL}/regios` },
      { "@type": "ListItem", position: 3, name: data.name, item: `${BASE_URL}/regios/${data.slug}` },
    ],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "wijkopenpanden.be",
    description: `Vastgoed opkoper actief in ${data.name}`,
    url: BASE_URL,
    telephone: "+32492779475",
    image: `${BASE_URL}/opengraph-image`,
    address: { "@type": "PostalAddress", addressLocality: "Antwerpen", addressCountry: "BE" },
    geo: { "@type": "GeoCoordinates", latitude: data.geo.lat, longitude: data.geo.lng },
    areaServed: data.name,
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
      <JsonLd data={localBusiness} />
      {faqSchema && <JsonLd data={faqSchema} />}
      <Nav />
      <main className="flex-1">
        {/* Hero */}
        <Section hero>
          <nav className="text-xs text-muted mb-6">
            <a href="/" className="hover:text-ink transition-colors">Home</a>
            <span className="mx-2">/</span>
            <a href="/regios" className="hover:text-ink transition-colors">Regio&apos;s</a>
            <span className="mx-2">/</span>
            <span>{data.name}</span>
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

        {/* Marktoverzicht */}
        <Section variant="white">
          <Heading level={2} className="mb-6">De vastgoedmarkt in {data.name}</Heading>
          <Prose className="text-muted max-w-3xl">
            <p>{data.marketOverview}</p>
          </Prose>
          <div className="mt-8">
            <p className="text-xs text-accent font-medium tracking-widest uppercase mb-1">Typische woningen</p>
            <p className="text-sm text-ink">{data.typicalProperties.join(", ")}</p>
          </div>
        </Section>

        {/* Subwijken */}
        {data.subdistricts.length > 0 && (
          <Section variant="bone">
            <Heading level={2} className="mb-10">Subwijken in {data.name}</Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.subdistricts.map((sub) => (
                <div key={sub.name} className="bg-white p-6 border border-ink/6">
                  <h3 className="font-serif text-lg text-ink mb-2">{sub.name}</h3>
                  <p className="text-sm text-muted leading-relaxed">{sub.description}</p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Recente aankopen */}
        {data.recentPurchases.length > 0 && (
          <Section variant="white">
            <Heading level={2} className="mb-10">Recente aankopen in {data.name}</Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.recentPurchases.map((p, i) => (
                <div key={i} className="border border-ink/6 p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="font-serif text-lg text-ink">{p.type}</p>
                      <p className="text-sm text-muted">{p.situation}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-accent font-medium uppercase tracking-wide">Doorlooptijd</p>
                      <p className="font-serif text-xl text-ink">{p.duration}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted leading-relaxed border-t border-ink/6 pt-3">{p.description}</p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* FAQ */}
        {data.faqs.length > 0 && (
          <Section variant="bone">
            <Heading level={2} className="mb-10">Veelgestelde vragen over verkopen in {data.name}</Heading>
            <div className="max-w-3xl">
              <FAQAccordion faqs={data.faqs} />
            </div>
          </Section>
        )}

        {/* Internal links */}
        <Section variant="white">
          <Heading level={2} className="mb-6">Verwante pagina&apos;s</Heading>
          <div className="flex flex-wrap gap-4">
            {data.relatedPropertyTypes.map((slug) => (
              <a key={slug} href={`/${slug}`} className="text-sm text-ink border border-ink/15 px-4 py-2 hover:border-ink/40 transition-colors">
                {slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
              </a>
            ))}
            <a href="/regios" className="text-sm text-ink border border-ink/15 px-4 py-2 hover:border-ink/40 transition-colors">Alle regio&apos;s</a>
          </div>
        </Section>

        {/* CTA */}
        <Section variant="bone" id="formulier">
          <div className="max-w-xl">
            <Heading level={2} className="mb-4">Woning verkopen in {data.name}?</Heading>
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
