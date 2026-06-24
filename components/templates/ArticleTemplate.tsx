import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import FAQAccordion from "@/components/FAQAccordion";
import JsonLd from "@/components/JsonLd";
import StickyCtaButton from "@/components/StickyCtaButton";
import type { Article } from "@/content/types";

const BASE_URL = "https://wijkopenpanden.be";

function boldify(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, '<strong style="font-weight:600;color:#1C1610">$1</strong>');
}

function renderBody(body: string) {
  const bulletPattern = /^[•\-]\s/;
  const numberPattern = /^\d+\.\s/;

  return body.split("\n\n").map((block, bi) => {
    const lines = block.split("\n").filter((l) => l.trim() !== "");
    if (lines.length === 0) return null;

    const allBullets = lines.every((l) => bulletPattern.test(l.trim()));
    const allNumbers = lines.every((l) => numberPattern.test(l.trim()));
    const hasMixed =
      !allBullets &&
      !allNumbers &&
      lines.some((l) => bulletPattern.test(l.trim()) || numberPattern.test(l.trim()));

    if (allBullets) {
      return (
        <ul key={bi} className="mb-5 flex flex-col gap-2">
          {lines.map((l, li) => (
            <li key={li} className="flex gap-3 items-start text-sm leading-relaxed" style={{ color: "#5C4D3C" }}>
              <span className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#C4A35A" }} />
              <span dangerouslySetInnerHTML={{ __html: boldify(l.trim().replace(bulletPattern, "")) }} />
            </li>
          ))}
        </ul>
      );
    }

    if (allNumbers) {
      return (
        <ol key={bi} className="mb-5 flex flex-col gap-2">
          {lines.map((l, li) => (
            <li key={li} className="flex gap-3 items-start text-sm leading-relaxed" style={{ color: "#5C4D3C" }}>
              <span className="font-semibold flex-shrink-0 w-5" style={{ color: "#C4A35A" }}>{li + 1}.</span>
              <span dangerouslySetInnerHTML={{ __html: boldify(l.trim().replace(numberPattern, "")) }} />
            </li>
          ))}
        </ol>
      );
    }

    if (hasMixed) {
      return (
        <div key={bi} className="mb-5 flex flex-col gap-1.5">
          {lines.map((l, li) => {
            const t = l.trim();
            if (bulletPattern.test(t)) {
              return (
                <div key={li} className="flex gap-3 items-start text-sm leading-relaxed" style={{ color: "#5C4D3C" }}>
                  <span className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#C4A35A" }} />
                  <span dangerouslySetInnerHTML={{ __html: boldify(t.replace(bulletPattern, "")) }} />
                </div>
              );
            }
            if (numberPattern.test(t)) {
              const num = t.match(/^(\d+)\./)?.[1];
              return (
                <div key={li} className="flex gap-3 items-start text-sm leading-relaxed" style={{ color: "#5C4D3C" }}>
                  <span className="font-semibold flex-shrink-0 w-5" style={{ color: "#C4A35A" }}>{num}.</span>
                  <span dangerouslySetInnerHTML={{ __html: boldify(t.replace(numberPattern, "")) }} />
                </div>
              );
            }
            return (
              <p key={li} className="text-sm leading-relaxed" style={{ color: "#5C4D3C" }}>
                <span dangerouslySetInnerHTML={{ __html: boldify(t) }} />
              </p>
            );
          })}
        </div>
      );
    }

    // Regular paragraph — split on \n so bold-intro lines stay separate
    return (
      <div key={bi} className="mb-4">
        {lines.map((l, li) => (
          <p
            key={li}
            className="text-sm leading-relaxed mb-1"
            style={{ color: "#5C4D3C" }}
            dangerouslySetInnerHTML={{ __html: boldify(l) }}
          />
        ))}
      </div>
    );
  });
}

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

  const faqSchema =
    data.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: data.faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }
      : null;

  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={articleSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}
      <Nav />
      <main className="flex-1">
        {/* Hero */}
        <Section hero>
          <nav className="text-xs text-muted mb-6">
            <a href="/" className="hover:text-ink transition-colors">Home</a>
            <span className="mx-2">/</span>
            <a href="/kennisbank" className="hover:text-ink transition-colors">Kennisbank</a>
            <span className="mx-2">/</span>
            <span>{data.title}</span>
          </nav>
          <p className="text-xs text-muted mb-3">
            Gepubliceerd op{" "}
            {new Date(data.publishedAt).toLocaleDateString("nl-BE", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
            {" · "}Bijgewerkt op{" "}
            {new Date(data.updatedAt).toLocaleDateString("nl-BE", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <Heading level={1} className="max-w-3xl mb-6">
            {data.title}
          </Heading>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: "#5C4D3C" }}>
            {data.intro}
          </p>
        </Section>

        {/* Artikel body */}
        <section className="py-16 md:py-24" style={{ background: "#FFFFFF" }}>
          <Container>
            <div className="max-w-3xl">
              {data.sections.map((section, i) => (
                <div
                  key={i}
                  className="mb-14 pb-14"
                  style={i < data.sections.length - 1 ? { borderBottom: "1px solid rgba(28,22,16,0.07)" } : undefined}
                >
                  <h2
                    className="font-serif font-bold mb-5"
                    style={{
                      fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)",
                      color: "#1C1610",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.25,
                    }}
                  >
                    {section.heading}
                  </h2>

                  <div>{renderBody(section.body)}</div>

                  {section.table && (
                    <div className="mt-6 overflow-x-auto rounded-xl" style={{ border: "1px solid rgba(28,22,16,0.08)" }}>
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr style={{ background: "#FAF7F2", borderBottom: "1px solid rgba(28,22,16,0.08)" }}>
                            {section.table.headers.map((h) => (
                              <th
                                key={h}
                                className="text-left px-5 py-3.5 font-semibold"
                                style={{ color: "#1C1610", whiteSpace: "nowrap" }}
                              >
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row, ri) => (
                            <tr
                              key={ri}
                              style={{
                                borderBottom: ri < section.table!.rows.length - 1 ? "1px solid rgba(28,22,16,0.06)" : "none",
                                background: ri % 2 === 1 ? "rgba(250,247,242,0.5)" : "transparent",
                              }}
                            >
                              {row.map((cell, ci) => (
                                <td
                                  key={ci}
                                  className="px-5 py-3.5 text-sm leading-snug"
                                  style={{
                                    color: ci === 0 ? "#1C1610" : "#5C4D3C",
                                    fontWeight: ci === 0 ? 500 : 400,
                                    ...(ci === 2 ? { color: "#7a5c1e", fontWeight: 500 } : {}),
                                  }}
                                >
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
          </Container>
        </section>

        {/* CTA tussenstuk */}
        <section className="py-14" style={{ background: "#FAF7F2" }}>
          <Container>
            <div
              className="max-w-3xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-8 rounded-2xl"
              style={{ background: "#F5EFE4", border: "1px solid rgba(196,163,90,0.20)" }}
            >
              <div>
                <p className="font-serif text-xl font-bold mb-1" style={{ color: "#1C1610" }}>
                  Wilt u een vrijblijvend bod ontvangen?
                </p>
                <p className="text-sm" style={{ color: "#5C4D3C" }}>
                  Wij reageren binnen 2 uur — ook in het weekend.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <a
                  href="/#formulier"
                  className="px-7 py-3.5 rounded-full font-semibold text-white text-center whitespace-nowrap text-sm"
                  style={{ background: "#C0392B" }}
                >
                  Vraag een bod aan
                </a>
                <a
                  href="tel:0492779475"
                  className="px-7 py-3.5 rounded-full font-medium text-center whitespace-nowrap text-sm"
                  style={{ border: "2px solid rgba(28,22,16,0.18)", color: "#1C1610" }}
                >
                  Bel 0492 77 94 75
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ */}
        {data.faqs.length > 0 && (
          <section className="py-16 md:py-24" style={{ background: "#FFFFFF" }}>
            <Container>
              <Heading level={2} className="mb-10 max-w-3xl">
                Veelgestelde vragen
              </Heading>
              <div className="max-w-3xl">
                <FAQAccordion faqs={data.faqs} />
              </div>
            </Container>
          </section>
        )}

        {/* Verwante links */}
        {(data.relatedArticles.length > 0 || data.relatedSituations.length > 0) && (
          <section className="py-14" style={{ background: "#FAF7F2" }}>
            <Container>
              <div className="max-w-3xl">
                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-5"
                  style={{ color: "#C4A35A" }}
                >
                  Verwante artikels
                </p>
                <div className="flex flex-wrap gap-3">
                  {data.relatedSituations.map((slug) => (
                    <a
                      key={slug}
                      href={`/${slug}`}
                      className="text-sm px-4 py-2 rounded-full transition-colors duration-150"
                      style={{
                        border: "1px solid rgba(28,22,16,0.15)",
                        color: "#5C4D3C",
                      }}
                    >
                      {slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                    </a>
                  ))}
                  {data.relatedArticles.map((slug) => (
                    <a
                      key={slug}
                      href={`/kennisbank/${slug}`}
                      className="text-sm px-4 py-2 rounded-full transition-colors duration-150"
                      style={{
                        border: "1px solid rgba(28,22,16,0.15)",
                        color: "#5C4D3C",
                      }}
                    >
                      {slug.replace(/-/g, " ")}
                    </a>
                  ))}
                </div>
              </div>
            </Container>
          </section>
        )}
      </main>
      <Footer />
      <StickyCtaButton />
    </>
  );
}
