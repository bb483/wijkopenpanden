"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Container from "@/components/Container";

const trust = [
  "Reactie binnen 2 uur",
  "Geen commissie of kosten",
  "Keuringen volledig inbegrepen",
  "Vrijblijvend bod na bezichtiging",
];

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;
    const els = contentRef.current ? Array.from(contentRef.current.children) : [];
    if (!els.length) return;
    gsap.set(els, { opacity: 0, y: 24 });
    gsap.to(els, {
      opacity: 1,
      y: 0,
      duration: 0.75,
      ease: "power3.out",
      stagger: 0.10,
    });
  }, []);

  return (
    <section
      className="relative flex items-center justify-center"
      style={{
        background: "#FAF7F2",
        minHeight: "100svh",
        paddingTop: "96px",
        paddingBottom: "80px",
      }}
    >
      {/* Warm top glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 50% at 50% 0%, rgba(196,163,90,0.10) 0%, transparent 65%)",
        }}
      />

      <Container className="relative z-10 w-full">
        <div ref={contentRef} className="max-w-3xl mx-auto text-center">

          {/* Eyebrow */}
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-6"
            style={{ color: "#C4A35A" }}
          >
            Vastgoed opkoper — Antwerpen &amp; omstreken
          </p>

          {/* Headline */}
          <h1
            className="font-serif font-extrabold mb-7"
            style={{
              fontSize: "clamp(2.75rem, 7vw, 5.75rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.04,
              color: "#1C1610",
            }}
          >
            Direct een eerlijk bod{" "}
            <br className="hidden sm:block" />
            op uw{" "}
            <span style={{ color: "#C4A35A" }}>pand.</span>
          </h1>

          {/* Subtitle */}
          <p
            className="leading-relaxed mb-10 mx-auto"
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
              color: "#4A3D30",
              maxWidth: "540px",
            }}
          >
            Geen makelaar, geen commissie, geen gedoe. Wij nemen binnen 2 uur contact op en doen u een concreet schriftelijk bod na bezichtiging.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-14">
            <a
              href="#formulier"
              className="px-8 py-4 rounded-full font-semibold text-white transition-colors duration-200 text-center"
              style={{ background: "#C0392B", fontSize: "1.0625rem" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#a93226")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#C0392B")}
            >
              Vraag uw gratis bod aan
            </a>
            <a
              href="tel:0492779475"
              className="px-8 py-4 rounded-full font-medium transition-all duration-200 text-center"
              style={{
                border: "2px solid rgba(28,22,16,0.18)",
                color: "#1C1610",
                fontSize: "1.0625rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#1C1610";
                e.currentTarget.style.background = "rgba(28,22,16,0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(28,22,16,0.18)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              Bel 0492 77 94 75
            </a>
          </div>

          {/* Trust strip */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-5 pt-8"
            style={{ borderTop: "1px solid rgba(28,22,16,0.10)" }}
          >
            {trust.map((item) => (
              <div key={item} className="flex flex-col items-center gap-2.5">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(196,163,90,0.12)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7l3 3 6-6" stroke="#C4A35A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span
                  className="text-sm sm:text-base font-medium text-center leading-snug"
                  style={{ color: "#4A3D30" }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
