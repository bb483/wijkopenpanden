"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "@/components/Container";

const stats = [
  { value: "2 uur", label: "Contact na uw aanvraag" },
  { value: "€ 0", label: "Commissie of kosten" },
  { value: "2–3 mnd", label: "Van aanvraag tot akte" },
];

function AnimatedStat({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.14 }}
      className="flex flex-col items-center gap-3 text-center px-6 py-2"
    >
      <span
        className="font-serif font-normal leading-none"
        style={{
          fontSize: "clamp(3.5rem, 6vw, 5.5rem)",
          color: "#C4A35A",
          letterSpacing: "-0.04em",
        }}
      >
        {value}
      </span>
      <span
        className="text-xs font-semibold tracking-widest uppercase"
        style={{ color: "rgba(255,255,255,0.40)", letterSpacing: "0.1em" }}
      >
        {label}
      </span>
    </motion.div>
  );
}

export default function Beloftes() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="beloftes"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: "#1C1610" }}
    >
      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(196,163,90,0.06) 0%, transparent 70%)",
        }}
      />

      <Container className="relative z-10">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <p className="flex items-center justify-center gap-3 text-sm font-semibold tracking-widest uppercase mb-5" style={{ color: "#C4A35A" }}>
            <span className="w-6 h-px flex-shrink-0" style={{ background: "#C4A35A" }} />
            Onze belofte
            <span className="w-6 h-px flex-shrink-0" style={{ background: "#C4A35A" }} />
          </p>
          <p
            className="font-serif font-bold mx-auto"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              color: "#FFFFFF",
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              maxWidth: "680px",
            }}
          >
            Snel, transparant en{" "}
            <span style={{ color: "#C4A35A" }}>zonder verrassingen.</span>
          </p>
        </motion.div>

        {/* Stats */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-0 divide-y sm:divide-y-0 sm:divide-x mb-14"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          {stats.map((stat, i) => (
            <AnimatedStat key={stat.label} value={stat.value} label={stat.label} index={i} />
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px mb-12" style={{ background: "rgba(255,255,255,0.07)" }} />

        {/* CTA */}
        <div className="text-center">
          <a
            href="#formulier"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-white transition-colors duration-200"
            style={{ background: "#C0392B", fontSize: "1.0625rem" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#a93226")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#C0392B")}
          >
            Vraag nu gratis een bod aan
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  );
}
