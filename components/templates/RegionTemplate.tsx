import Link from "next/link";
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
import Formulier from "@/components/home/Formulier";
import DistrictenRaster from "@/components/DistrictenRaster";
import { titleForSlug, hrefForSlug } from "@/content/lookup";
import { articles } from "@/content/knowledge-articles";
import type { Region } from "@/content/types";

const BASE_URL = "https://wijkopenpanden.be";

export default function RegionTemplate({ data }: { data: Region }) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Districten", item: `${BASE_URL}/regios` },
      { "@type": "ListItem", position: 3, name: data.name, item: `${BASE_URL}/regios/${data.slug}` },
    ],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "wijkopenpanden.be",
    description: `Huisopkoper actief in ${data.name}${data.isDistrict ? " (district van Antwerpen)" : ""}`,
    url: BASE_URL,
    telephone: "+32492779475",
    image: `${BASE_URL}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jezusstraat 18 bus 001",
      postalCode: "2000",
      addressLocality: "Antwerpen",
      addressCountry: "BE",
    },
    geo: { "@type": "GeoCoordinates", latitude: data.geo.lat, longitude: data.geo.lng },
    areaServed: { "@type": data.isDistrict ? "AdministrativeArea" : "City", name: data.name },
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

  const linkedArticles = (data.relatedArticles ?? [])
    .map((slug) => articles.find((a) => a.slug === slug))
    .filter(Boolean) as typeof articles;

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
            <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/regios" className="hover:text-ink transition-colors">Districten</Link>
            <span className="mx-2">/</span>
            <span>{data.name}</span>
          </nav>
          {data.isDistrict && (
            <p className="text-xs text-accent font-medium tracking-widest uppercase mb-4">District van Antwerpen</p>
          )}
          <Heading level={1} className="max-w-2xl mb-6">{data.h1}</Heading>
          <Prose className="text-muted mb-8 max-w-2xl">
            <p>{data.intro}</p>
          </Prose>
          <div className="flex flex-wrap gap-3">
            <ScrollToFormulier className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-medium tracking-wide bg-ink text-bone border border-ink transition-colors duration-200 cursor-pointer">Vraag uw bod aan</ScrollToFormulier>
            <Button href="tel:0492779475" variant="secondary" className="px-8 py-4 text-base">0492 77 94 75</Button>
          </div>
          <p className="mt-6 text-sm text-muted">Contact binnen 2 uur, bezoek binnen 48 uur, schriftelijk bod dezelfde dag.</p>
        </Section>

        {/* Cijfers */}
        {data.stats && data.stats.length > 0 && (
          <Section variant="white">
            <Heading level={2} className="mb-8">{data.name} in cijfers</Heading>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl">
              {data.stats.map((s) => (
                <div key={s.label} className="border border-ink/10 p-5">
                  <p className="font-serif text-2xl text-ink mb-1" style={{ fontVariantNumeric: "tabular-nums" }}>{s.value}</p>
                  <p className="text-xs text-muted font-medium tracking-wide uppercase">{s.label}</p>
                  {s.note && <p className="text-xs text-muted mt-2 leading-snug">{s.note}</p>}
                </div>
              ))}
            </div>
            {data.statsSource && <p className="text-xs text-muted mt-4">Bron: {data.statsSource}</p>}
          </Section>
        )}

        {/* Marktoverzicht */}
        <Section variant={data.stats && data.stats.length > 0 ? "bone" : "white"}>
          <Heading level={2} className="mb-6">De vastgoedmarkt in {data.name}</Heading>
          <Prose className="text-muted max-w-3xl">
            <p>{data.marketOverview}</p>
          </Prose>
          <div className="mt-8">
            <p className="text-xs text-accent font-medium tracking-widest uppercase mb-1">Typische woningen</p>
            <p className="text-sm text-ink">{data.typicalProperties.join(", ")}</p>
          </div>
        </Section>

        {/* Wat wij vaak zien */}
        {data.whatWeSee && data.whatWeSee.length > 0 && (
          <Section variant="white">
            <Heading level={2} className="mb-10">Wat wij in {data.name} vaak tegenkomen</Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
              {data.whatWeSee.map((w) => (
                <div key={w.title} className="flex gap-5 items-start">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-lg text-ink mb-1">{w.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{w.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Subwijken */}
        {data.subdistricts.length > 0 && (
          <Section variant="bone">
            <Heading level={2} className="mb-10">Wijken in {data.name}</Heading>
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

        {/* Verkoopsituaties */}
        {data.situationLinks && data.situationLinks.length > 0 && (
          <Section variant="white">
            <Heading level={2} className="mb-10">Verkoopsituaties in {data.name}</Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl">
              {data.situationLinks.map((s) => (
                <Link key={s.slug} href={hrefForSlug(s.slug)} className="group border border-ink/10 p-6 hover:border-ink/30 transition-colors">
                  <h3 className="font-serif text-lg text-ink group-hover:text-accent transition-colors mb-2">{titleForSlug(s.slug)}</h3>
                  <p className="text-sm text-muted leading-relaxed">{s.note}</p>
                </Link>
              ))}
            </div>
          </Section>
        )}

        {/* Recente aankopen */}
        {data.recentPurchases.length > 0 && (
          <Section variant="bone">
            <Heading level={2} className="mb-10">Dossiers uit {data.name}</Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.recentPurchases.map((p, i) => (
                <div key={i} className="bg-white border border-ink/6 p-6">
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
          <Section variant="white">
            <Heading level={2} className="mb-10">Veelgestelde vragen over verkopen in {data.name}</Heading>
            <div className="max-w-3xl">
              <FAQAccordion faqs={data.faqs} />
            </div>
          </Section>
        )}

        {/* Lees ook */}
        {linkedArticles.length > 0 && (
          <Section variant="bone">
            <Heading level={2} className="mb-8">Lees ook</Heading>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {linkedArticles.map((article) => (
                <Link key={article.slug} href={`/kennisbank/${article.slug}`} className="group bg-white border border-ink/10 p-5 hover:border-ink/30 transition-colors">
                  <h3 className="font-serif text-base text-ink group-hover:text-accent transition-colors leading-snug">{article.title}</h3>
                </Link>
              ))}
            </div>
          </Section>
        )}

        {/* Vastgoedtypes en buurdistricten */}
        <Section variant="white">
          <Heading level={2} className="mb-6">Verwante pagina&apos;s</Heading>
          <div className="flex flex-wrap gap-3 mb-10">
            {data.relatedPropertyTypes.map((slug) => (
              <Link key={slug} href={hrefForSlug(slug)} className="text-sm text-ink border border-ink/15 px-4 py-2 hover:border-ink/40 transition-colors">
                {titleForSlug(slug)}
              </Link>
            ))}
            <Link href="/huis-verkopen-antwerpen" className="text-sm text-ink border border-ink/15 px-4 py-2 hover:border-ink/40 transition-colors">Huis verkopen in Antwerpen</Link>
          </div>
          <p className="text-xs text-accent font-medium tracking-widest uppercase mb-4">
            {data.isDistrict ? "Andere districten" : "Districten van Antwerpen"}
          </p>
          <DistrictenRaster compact current={data.slug} showOuter={!data.isDistrict} />
        </Section>

        {/* Offerteformulier */}
        <Formulier />
      </main>
      <Footer />
      <StickyCtaButton />
    </>
  );
}
