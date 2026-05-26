"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";

const vergelijking = [
  {
    label: "Makelaarscommissie (incl. btw)",
    traditioneel: "Ja",
    wij: "Geen",
  },
  {
    label: "EPC, elektriciteitskeuring, asbestinventaris",
    traditioneel: "Ten laste van verkoper",
    wij: "Geen",
  },
  {
    label: "Publicatie op vastgoedportalen",
    traditioneel: "Ten laste van verkoper",
    wij: "Geen",
  },
  {
    label: "Dubbele woonlast tijdens wachttijd",
    traditioneel: "Mogelijk meerdere maanden",
    wij: "Geen",
  },
  {
    label: "Herstellingen voor verkoop",
    traditioneel: "Vaak geadviseerd",
    wij: "Geen — pand as-is",
  },
  {
    label: "Zekerheid over eindprijs",
    traditioneel: "Pas bij compromis",
    wij: "Schriftelijk bod na bezoek",
    highlight: true,
  },
];

export default function EerlijkPrijs() {
  return (
    <section
      id="eerlijk-over-prijs"
      className="py-28 md:py-40"
      style={{ background: "#FFFFFF" }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#C4A35A" }}
          >
            Transparantie
          </p>
          <h2
            className="font-serif font-normal max-w-2xl mb-4"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#1C1610",
              letterSpacing: "-0.02em",
            }}
          >
            Eerlijk over de prijs
          </h2>
          <p
            className="text-lg leading-relaxed max-w-2xl"
            style={{ color: "#5C4D3C" }}
          >
            Ons bod ligt doorgaans iets onder de theoretische maximumprijs op de vrije markt. Maar
            wanneer u alle kosten en onzekerheid van een klassieke verkoop meetelt, is het
            nettoverschil veel kleiner dan verwacht — en soms in uw voordeel.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 1, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="overflow-x-auto rounded-2xl"
          style={{ border: "1px solid rgba(28,22,16,0.08)" }}
        >
          <table className="w-full border-collapse text-base">
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(28,22,16,0.10)" }}>
                <th
                  className="text-left py-4 px-6 font-medium"
                  style={{ color: "#5C4D3C" }}
                >
                  Post
                </th>
                <th
                  className="text-right py-4 px-6 font-medium"
                  style={{ color: "#6B5744" }}
                >
                  Via makelaar
                </th>
                <th
                  className="text-right py-4 px-6 font-medium"
                  style={{ color: "#C4A35A" }}
                >
                  Via wijkopenpanden.be
                </th>
              </tr>
            </thead>
            <tbody>
              {vergelijking.map((rij, i) => (
                <tr
                  key={rij.label}
                  style={{
                    background: rij.highlight
                      ? "rgba(196,163,90,0.05)"
                      : i % 2 === 0
                      ? "#FFFFFF"
                      : "#FFFFFF",
                    borderBottom: rij.highlight
                      ? "1px solid rgba(196,163,90,0.2)"
                      : "1px solid rgba(28,22,16,0.05)",
                  }}
                >
                  <td
                    className="py-4 px-6"
                    style={{
                      color: rij.highlight ? "#1C1610" : "#5C4D3C",
                      fontWeight: rij.highlight ? 500 : 400,
                    }}
                  >
                    {rij.label}
                  </td>
                  <td
                    className="text-right py-4 px-6"
                    style={{ color: "#6B5744" }}
                  >
                    {rij.traditioneel}
                  </td>
                  <td
                    className="text-right py-4 px-6 font-medium"
                    style={{ color: "#C4A35A" }}
                  >
                    {rij.wij}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <a
            href="#formulier"
            className="px-8 py-4 rounded-full font-semibold text-white transition-colors duration-200 text-center"
            style={{ background: "#C0392B", fontSize: "1.0625rem" }}
          >
            Vraag gratis een bod aan
          </a>
          <a
            href="tel:0492779475"
            className="px-8 py-4 rounded-full font-medium transition-all duration-200 text-center"
            style={{ border: "2px solid rgba(28,22,16,0.18)", color: "#1C1610", fontSize: "1.0625rem" }}
          >
            Bel 0492 77 94 75
          </a>
        </div>
      </Container>
    </section>
  );
}
