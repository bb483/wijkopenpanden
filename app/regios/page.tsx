import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import { regions } from "@/content/regions";

export const metadata: Metadata = {
  title: "Woning verkopen per regio in Antwerpen | wijkopenpanden.be",
  description: "wijkopenpanden.be koopt woningen aan in Antwerpen en alle omliggende gemeenten. Kies uw gemeente en ontdek wat wij voor u kunnen doen.",
  alternates: { canonical: "https://wijkopenpanden.be/regios" },
};

export default function RegiosPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Section hero>
          <Heading level={1} className="mb-4">Woning verkopen in uw gemeente</Heading>
          <p className="text-muted text-base max-w-xl mb-12 leading-relaxed">
            Wij zijn actief in Antwerpen en alle omliggende gemeenten. Kies uw gemeente voor specifieke informatie over de lokale markt.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {regions.map((r) => (
              <a
                key={r.slug}
                href={`/regios/${r.slug}`}
                className="border border-ink/10 px-4 py-3 text-sm text-ink hover:border-accent hover:text-accent transition-colors font-medium"
              >
                {r.name}
              </a>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
