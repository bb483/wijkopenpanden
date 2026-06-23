"use client";

import Container from "@/components/Container";

const artikels = [
  {
    slug: "commissie-makelaar-belgie",
    titel: "Makelaarsloon in België: wat betaalt u echt?",
    samenvatting: "De commissie plus verborgen kosten lopen hoger op dan velen denken. Volledig kostenoverzicht.",
  },
  {
    slug: "huis-verkopen-met-hypotheek",
    titel: "Huis verkopen met een lopende hypotheek",
    samenvatting: "Wedersamenstellingsvergoeding, doorhaling en wat bij een onderwaterhypotheek — uitgelegd.",
  },
  {
    slug: "compromis-verkoop-woning-belgie",
    titel: "Het compromis bij de verkoop: rechten en risico's",
    samenvatting: "Wanneer is een compromis bindend? Wat als de koper afziet? De 10%-regel uitgelegd.",
  },
  {
    slug: "keuringen-bij-verkoop-woning",
    titel: "Welke keuringen zijn verplicht bij verkoop?",
    samenvatting: "EPC, elektriciteitskeuring, asbestinventaris — wie regelt wat en wat kost het?",
  },
  {
    slug: "hoelang-duurt-huis-verkopen-belgie",
    titel: "Hoe lang duurt het om een huis te verkopen?",
    samenvatting: "Gemiddelde doorlooptijden, klassieke verkoop vs. opkoper, en hoe u het kunt verkorten.",
  },
  {
    slug: "verborgen-gebreken-woning-verkoop-belgie",
    titel: "Verborgen gebreken bij verkoop: bent u aansprakelijk?",
    samenvatting: "Wanneer bent u als verkoper aansprakelijk, wat is een as-is-clausule en hoe beschermt u zichzelf?",
  },
];

export default function KennisbankPreview() {
  return (
    <section className="py-28 md:py-40" style={{ background: "#FFFFFF" }}>
      <Container>
        <div className="mb-14">
          <p
            className="flex items-center gap-3 text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#C4A35A" }}
          >
            <span className="w-6 h-px flex-shrink-0" style={{ background: "#C4A35A" }} />
            Kennisbank
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2
              className="font-serif font-bold max-w-xl"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "#1C1610",
                letterSpacing: "-0.025em",
              }}
            >
              Alles wat u moet weten voor de verkoop
            </h2>
            <a
              href="/kennisbank"
              className="flex-shrink-0 text-sm font-medium transition-colors duration-150 underline underline-offset-4"
              style={{ color: "#5C4D3C" }}
            >
              Alle artikels bekijken →
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artikels.map((a) => (
            <a
              key={a.slug}
              href={`/kennisbank/${a.slug}`}
              className="group block p-7 rounded-2xl transition-all duration-200"
              style={{
                background: "#FAF7F2",
                border: "1px solid rgba(28,22,16,0.07)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(196,163,90,0.4)";
                (e.currentTarget as HTMLAnchorElement).style.background = "#F5EFE4";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(28,22,16,0.07)";
                (e.currentTarget as HTMLAnchorElement).style.background = "#FAF7F2";
              }}
            >
              <h3
                className="font-serif font-semibold text-lg mb-3 leading-snug transition-colors duration-150 group-hover:text-[#C4A35A]"
                style={{ color: "#1C1610" }}
              >
                {a.titel}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#5C4D3C" }}>
                {a.samenvatting}
              </p>
              <p
                className="mt-5 text-xs font-medium tracking-wide"
                style={{ color: "#C4A35A" }}
              >
                Lees artikel →
              </p>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
