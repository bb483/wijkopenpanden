"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { getLenisInstance } from "@/components/lenisInstance";

// window.scrollTo({ behavior: "smooth" }) is in Chrome niet door de gebruiker
// te onderbreken (scrollbalk/touch/wiel): de lopende animatie trekt de pagina
// telkens terug naar het doel. Daarom een eigen rAF-animatie. Onderbreking
// detecteren we via echte inputevents (wiel/touch/toetsen) — niet via een
// scrollpositie-vergelijking, want op mobiel wijkt window.scrollY tijdens het
// scrollen af (inklappende adresbalk, subpixel-afronding) en brak de animatie
// dan vroegtijdig af. Het doel wordt per frame herberekend zodat lazy geladen
// content die de layout verschuift de landing niet verpest.
function animateScrollTo(getTargetY: () => number) {
  const clamp = (y: number) =>
    Math.max(0, Math.min(y, document.documentElement.scrollHeight - window.innerHeight));

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo({ top: clamp(getTargetY()), behavior: "instant" });
    return;
  }

  const startY = window.scrollY;
  const distance = clamp(getTargetY()) - startY;
  if (Math.abs(distance) < 1) return;

  let cancelled = false;
  const cancel = () => {
    cancelled = true;
    cleanup();
  };
  const scrollKeys = ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "];
  const onKeyDown = (e: KeyboardEvent) => {
    if (scrollKeys.includes(e.key)) cancel();
  };
  const cleanup = () => {
    window.removeEventListener("wheel", cancel);
    window.removeEventListener("touchstart", cancel);
    window.removeEventListener("mousedown", cancel);
    window.removeEventListener("keydown", onKeyDown);
  };
  window.addEventListener("wheel", cancel, { passive: true });
  window.addEventListener("touchstart", cancel, { passive: true });
  window.addEventListener("mousedown", cancel, { passive: true });
  window.addEventListener("keydown", onKeyDown);

  const duration = Math.min(900, 350 + Math.abs(distance) * 0.05);
  const startTime = performance.now();
  const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

  const step = (now: number) => {
    if (cancelled) return;
    const t = Math.min(1, (now - startTime) / duration);
    const endY = clamp(getTargetY());
    window.scrollTo({ top: startY + (endY - startY) * easeOut(t), behavior: "instant" });
    if (t < 1) {
      requestAnimationFrame(step);
    } else {
      cleanup();
    }
  };
  requestAnimationFrame(step);
}

export function scrollToFormulier() {
  const el = document.getElementById("formulier");
  if (!el) {
    sessionStorage.setItem("scrollToFormulier", "1");
    window.location.href = "/";
    return;
  }

  // Op desktop is Lenis actief. Scroll dan via Lenis zelf zodat de interne
  // scrollpositie meebeweegt; anders blijft die op 0 staan en trekt Lenis de
  // pagina terug naar boven bij de eerstvolgende wiel-/touch-scroll van de
  // gebruiker. Lenis houdt rekening met scroll-padding-top (80px) uit de CSS.
  const lenis = getLenisInstance();
  if (lenis) {
    lenis.scrollTo(el);
    return;
  }

  // Fallback (mobiel / reduced-motion / geen Lenis): eigen rAF-animatie.
  animateScrollTo(() => el.getBoundingClientRect().top + window.scrollY - 80);
}

export default function ScrollToFormulier({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href="/#formulier"
      className={className}
      onClick={(e) => {
        e.preventDefault();
        scrollToFormulier();
      }}
    >
      {children}
    </Link>
  );
}
