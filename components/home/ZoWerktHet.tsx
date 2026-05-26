"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/Container";

gsap.registerPlugin(ScrollTrigger);

const stappen = [
  {
    nr: "01",
    title: "Aanmelding",
    body: "U vult het formulier in of belt ons. U geeft een korte beschrijving van de woning: adres, oppervlakte en staat. Dat volstaat voor een eerste inschatting.",
  },
  {
    nr: "02",
    title: "Contact binnen 2 uur",
    body: "Wij nemen contact op, ook in het weekend. We plannen een bezichtiging op een moment dat u past.",
  },
  {
    nr: "03",
    title: "Bezoek & bod",
    body: "Wij bezoeken het pand en bezorgen u een schriftelijk bod. Geen schatting — een concreet bedrag. Vrijblijvend en kosteloos.",
  },
  {
    nr: "04",
    title: "Notaris & akte",
    body: "Wij regelen alles. Keuringen, compromis en akte worden door ons gecoördineerd. Gemiddeld 2 tot 3 maanden.",
  },
];

export default function ZoWerktHet() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    stepsRef.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { opacity: 0, y: 40 });
      gsap.to(
        el,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          delay: i * 0.08,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="hoe-werkt-het"
      className="py-28 md:py-40"
      style={{ background: "#FFFFFF" }}
    >
      <Container>
        {/* Header */}
        <div className="mb-24">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#C4A35A" }}
          >
            Werkwijze
          </p>
          <h2
            className="font-serif font-normal max-w-xl"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#1C1610",
              letterSpacing: "-0.02em",
            }}
          >
            Zo werkt het
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connecting line (desktop) */}
          <div
            className="hidden lg:block absolute left-[2.15rem] top-8 bottom-8 w-px"
            style={{ background: "rgba(28,22,16,0.06)" }}
          />

          <div className="flex flex-col gap-0">
            {stappen.map((stap, i) => (
              <div
                key={stap.nr}
                ref={(el) => {
                  if (el) stepsRef.current[i] = el;
                }}
                className="relative flex gap-8 lg:gap-12 pb-14 last:pb-0"
              >
                {/* Step number — serves as line anchor on desktop */}
                <div className="flex-shrink-0 relative z-10">
                  <span
                    className="font-serif leading-none select-none block"
                    style={{
                      fontSize: "clamp(4rem, 8vw, 7rem)",
                      color: "#E8DCC8",
                      lineHeight: 1,
                    }}
                  >
                    {stap.nr}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-3 flex flex-col gap-3 max-w-lg">
                  <div
                    className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase mb-2"
                    style={{ color: "#C4A35A" }}
                  >
                    <span
                      className="w-px h-4"
                      style={{ background: "#C4A35A", opacity: 0.5 }}
                    />
                    Stap {stap.nr}
                  </div>
                  <h3
                    className="font-serif text-2xl"
                    style={{ color: "#1C1610" }}
                  >
                    {stap.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "#5C4D3C" }}
                  >
                    {stap.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14">
          <a
            href="#formulier"
            className="inline-block px-8 py-3.5 rounded-full text-sm font-medium transition-colors duration-200"
            style={{
              border: "1px solid rgba(28,22,16,0.15)",
              color: "#5C4D3C",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(28,22,16,0.35)";
              e.currentTarget.style.color = "#1C1610";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(28,22,16,0.15)";
              e.currentTarget.style.color = "#5C4D3C";
            }}
          >
            Vraag nu uw gratis bod aan
          </a>
        </div>
      </Container>
    </section>
  );
}
