"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "@/components/Container";

const stats = [
  { value: "2 uur", label: "Contact na uw aanvraag" },
  { value: "€ 0", label: "Commissie of kosten" },
  { value: "2–3 mnd", label: "Van aanvraag tot akte" },
];

function AnimatedStat({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 1, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.12 }}
      className="flex flex-col items-center gap-3 text-center px-8 py-2"
    >
      <span
        className="font-serif font-normal leading-none"
        style={{
          fontSize: "clamp(2.75rem, 5vw, 4.5rem)",
          color: "#C4A35A",
          letterSpacing: "-0.03em",
        }}
      >
        {value}
      </span>
      <span
        className="text-sm font-medium tracking-wide uppercase"
        style={{ color: "rgba(255,255,255,0.55)", letterSpacing: "0.08em" }}
      >
        {label}
      </span>
    </motion.div>
  );
}

export default function Beloftes() {
  return (
    <section
      id="beloftes"
      className="py-16 md:py-20"
      style={{ background: "#1C1610" }}
    >
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08] mb-10">
          {stats.map((stat, i) => (
            <AnimatedStat key={stat.label} value={stat.value} label={stat.label} index={i} />
          ))}
        </div>
        <div className="text-center">
          <a
            href="#formulier"
            className="inline-block px-8 py-4 rounded-full font-semibold text-white transition-colors duration-200"
            style={{ background: "#C0392B", fontSize: "1.0625rem" }}
          >
            Vraag nu gratis een bod aan
          </a>
        </div>
      </Container>
    </section>
  );
}
