"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";

const constructies = [
  {
    tag: "Constructie 1",
    title: "Verkopen en blijven wonen",
    beschrijving:
      "U verkoopt uw woning aan wijkopenpanden.be tegen een marktconforme prijs. Vervolgens tekent u een huurcontract en blijft u zo lang wonen als u wenst. U beschikt onmiddellijk over het kapitaal van uw verkoop, zonder te moeten verhuizen.",
    punten: [
      "Marktconforme verkoopprijs",
      "Huurprijs vastgelegd bij verkoop",
      "Geen termijn op de huur",
      "Ideaal bij pensioenplanning of herfinanciering",
    ],
  },
  {
    tag: "Constructie 2",
    title: "Lijfrente",
    beschrijving:
      "Wij kopen uw woning aan en betalen u maandelijks een gegarandeerd inkomen — de lijfrente — tot het einde van uw leven. U behoudt het gebruiksrecht op de woning. De aankoopprijs wordt gespreid uitbetaald in plaats van in één keer.",
    punten: [
      "Levenslang maandelijks inkomen",
      "Gebruiksrecht op de woning blijft",
      "Fiscaal voordelig in bepaalde situaties",
      "Zekerheid voor beide partijen, vastgelegd bij notaris",
    ],
  },
];

export default function BlijvenWonen() {
  return (
    <section
      id="blijven-wonen"
      className="py-28 md:py-40 relative overflow-hidden"
      style={{ background: "#FAF7F2" }}
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 60%, rgba(196,163,90,0.04) 0%, transparent 70%)",
        }}
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 1, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ color: "#C4A35A" }}
            >
              Bijzondere constructies
            </p>
            <h2
              className="font-serif font-bold mb-6"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                color: "#1C1610",
                letterSpacing: "-0.02em",
              }}
            >
              Verkopen zonder te verhuizen
            </h2>
            <p
              className="text-lg leading-relaxed mb-10 max-w-md"
              style={{ color: "#5C4D3C" }}
            >
              Niet elke eigenaar wil na de verkoop meteen verhuizen. Wij bieden twee formules aan
              die verkoop en woonzekerheid combineren.
            </p>

            <a
              href="#formulier"
              className="inline-block px-8 py-3.5 rounded-full text-sm font-medium text-[#1C1610] transition-colors duration-200"
              style={{ background: "#C0392B" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#a93226")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#C0392B")}
            >
              Meer informatie over deze formules
            </a>
          </motion.div>

          {/* Right: cards */}
          <div className="flex flex-col gap-5">
            {constructies.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 1, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
                className="flex flex-col gap-5 p-8 md:p-10 rounded-2xl"
                style={{
                  background: "rgba(28,22,16,0.03)",
                  border: "1px solid rgba(28,22,16,0.08)",
                }}
              >
                <span
                  className="text-xs font-medium tracking-widest uppercase"
                  style={{ color: "#C4A35A" }}
                >
                  {item.tag}
                </span>
                <h3
                  className="font-serif font-semibold text-2xl md:text-3xl"
                  style={{ color: "#1C1610" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#5C4D3C" }}
                >
                  {item.beschrijving}
                </p>
                <ul className="flex flex-col gap-2 mt-1">
                  {item.punten.map((punt) => (
                    <li
                      key={punt}
                      className="flex items-start gap-2.5 text-sm"
                      style={{ color: "#5C4D3C" }}
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: "#C4A35A" }}
                      />
                      {punt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
