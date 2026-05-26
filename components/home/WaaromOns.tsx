"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Container from "@/components/Container";

const voordelen = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C4A35A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    label: "Eigen vermogen",
    body: "Wij kopen met eigen middelen. Geen bankgoedkeuring, geen risico op uitval van de koop.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C4A35A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    label: "Vaste contactpersoon",
    body: "U hebt één aanspreekpunt van het eerste gesprek tot de notariële akte.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C4A35A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    label: "Geen verborgen kosten",
    body: "Wat in het bod staat, is wat u ontvangt. Geen aftrekposten voor herstellingen of keuringen.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C4A35A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    label: "Elke staat aanvaard",
    body: "Van instapklaar tot zware renovatie — wij kopen zonder uitzonderingen.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C4A35A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Snelle overdracht",
    body: "Gemiddeld 2 tot 3 maanden van eerste contact tot ondertekening van de akte.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C4A35A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Antwerpen is ons terrein",
    body: "Wij kennen de lokale markt van Deurne tot Wilrijk en van Hoboken tot Merksem.",
  },
];

function TiltCard({ item, index }: { item: typeof voordelen[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 1, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.07 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 800,
      }}
      className="group relative flex flex-col gap-5 p-8 md:p-10 rounded-2xl cursor-default"
    >
      {/* Card background */}
      <div
        className="absolute inset-0 rounded-xl"
        style={{
          background: "#FFFFFF",
          border: "1px solid rgba(28,22,16,0.08)",
        }}
      />
      {/* Hover border layer */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{ border: "1px solid rgba(255,255,255,0)" }}
        whileHover={{ border: "1px solid rgba(28,22,16,0.15)" }}
        transition={{ duration: 0.2 }}
      />

      <div className="relative z-10 flex flex-col gap-5">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl" style={{ background: "rgba(196,163,90,0.08)" }}>
          {item.icon}
        </div>
        <div>
          <h3 className="font-serif text-xl text-[#1C1610] mb-2">{item.label}</h3>
          <p className="text-base leading-relaxed" style={{ color: "#5C4D3C" }}>
            {item.body}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function WaaromOns() {
  return (
    <section
      id="waarom-sleutel"
      className="py-28 md:py-40"
      style={{ background: "#FAF7F2" }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#C4A35A" }}
          >
            Waarom wijkopenpanden.be
          </p>
          <h2
            className="font-serif font-normal max-w-xl"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#1C1610",
              letterSpacing: "-0.02em",
            }}
          >
            Concreet voordeel bij elke stap
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {voordelen.map((item, i) => (
            <TiltCard key={item.label} item={item} index={i} />
          ))}
        </div>
        <div className="mt-14 flex flex-col sm:flex-row gap-3">
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
