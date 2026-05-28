import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Prose from "@/components/Prose";
import FAQAccordion from "@/components/FAQAccordion";
import JsonLd from "@/components/JsonLd";
import StickyCtaButton from "@/components/StickyCtaButton";
import type { Article } from "@/content/types";

const BASE_URL = "https://wijkopenpanden.be";

export default function ArticleTemplate({ data }: { data: Article }) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Kennisbank", item: `${BASE_URL}/kennisbank` },
      { "@type": "ListItem", position: 3, name: data.title, item: `${BASE_URL}/kennisbank/${data.slug}` },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    datePublished: data.publishedAt,
    dateModified: data.updatedAt,
    image: `${BASE_URL}/kennisbank/${data.slug}/opengraph-image`,
    author: { "@type": "Organization", name: "wijkopenpanden.be", url: BASE_URL },
    publisher: {
      "@type": "Organization",
      name: "wijkopenpanden.be",
      url: BASE_URL,
      logo: { "@type": "ImageObject", url: `${BASE_URL}/opengraph-image` },
    },
    url: `${BASE_URL}/kennisbank/${data.slug}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE_URL}/kennisbank/${data.slug}` },
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
      <JsonLd data={articleSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}
      <Nav />
      <main className="flex-1">
        <Section hero>
          <nav className="text-xs text-muted mb-6">
            <a href="/" className="hover:text-ink transition-colors">Home</a>
            <span className="mx-2">/</span>
            <a href="/kennisbank" className="hover:text-ink transition-colors">Kennisbank</a>
            <span className="mx-2">/</span>
            <span>{data.title}</span>
          </nav>
          <p className="text-xs text-muted mb-3">
            Gepubliceerd op {new Date(data.publishedAt).toLocaleDateString("nl-BE", { day: "numeric", month: "long", year: "numeric" })}
            {" · "}Bijgewerkt op {new Date(data.updatedAt).toLocaleDateString("nl-BE", { day: "numeric", month: "long", year: "numeric" })}
          </p>
          <Heading level={1} className="max-w-3xl mb-6">{data.title}</Heading>
          <Prose className="text-muted max-w-2xl">
            <p>{data.intro}</p>
          </Prose>
        </Section>

        {/* Artikelinhoud */}
        <Section variant="white">
          <div className="max-w-3xl">
            {data.sections.map((section, i) => (
              <div key={i} className="mb-12">
                <Heading level={2} className="mb-4">{section.heading}</Heading>
                <Prose className="text-muted">
                  {section.body.split("\n\n").map((para, j) => (
                    <p key={j} className="mb-4 leading-relaxed text-sm">{para}</p>
                  ))}
                </Prose>
                {section.table && (
                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-ink/10">
                          {section.table.headers.map((h) => (
                            <th key={h} className="text-left py-3 pr-6 font-medium text-ink">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, ri) => (
                          <tr key={ri} className="border-b border-ink/6">
                            {row.map((cell, ci) => (
                              <td key={ci} className={`py-3 pr-6 text-sm ${ci === 0 ? "text-ink" : "text-muted"} ${ci === 2 ? "text-accent font-medium" : ""}`}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Section>

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
        {(data.relatedArticles.length > 0 || data.relatedSituations.length > 0) && (
          <Section variant="white">
            <Heading level={2} className="mb-6">Verwante artikels</Heading>
            <div className="flex flex-wrap gap-4">
              {data.relatedSituations.map((slug) => (
                <a key={slug} href={`/${slug}`} className="text-sm text-ink border border-ink/15 px-4 py-2 hover:border-ink/40 transition-colors">
                  {slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                </a>
              ))}
              {data.relatedArticles.map((slug) => (
                <a key={slug} href={`/kennisbank/${slug}`} className="text-sm text-ink border border-ink/15 px-4 py-2 hover:border-ink/40 transition-colors">
                  {slug.replace(/-/g, " ")}
                </a>
              ))}
            </div>
          </Section>
        )}
      </main>
      <Footer />
      <StickyCtaButton />
    </>
  );
}
