import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import { articles } from "@/content/knowledge-articles";

export const metadata: Metadata = {
  title: "Kennisbank vastgoed Antwerpen | wijkopenpanden.be",
  description: "Praktische gidsen over vastgoed verkopen in Antwerpen: makelaarskosten, erfenis, scheiding en meer. Geschreven door wijkopenpanden.be.",
  alternates: { canonical: "https://wijkopenpanden.be/kennisbank" },
};

export default function KennisbankPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Section hero>
          <Heading level={1} className="mb-4">Kennisbank</Heading>
          <p className="text-muted text-base max-w-xl mb-12 leading-relaxed">
            Praktische artikels over vastgoed verkopen in Antwerpen. Geen verkooppraatjes, wel concrete informatie.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((a) => (
              <a
                key={a.slug}
                href={`/kennisbank/${a.slug}`}
                className="group border border-ink/10 p-6 hover:border-ink/30 transition-colors"
              >
                <p className="text-xs text-muted mb-2">
                  {new Date(a.updatedAt).toLocaleDateString("nl-BE", { day: "numeric", month: "long", year: "numeric" })}
                </p>
                <h2 className="font-serif text-xl text-ink group-hover:text-accent transition-colors mb-2">{a.title}</h2>
                <p className="text-sm text-muted leading-relaxed">{a.intro.slice(0, 140)}…</p>
              </a>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
