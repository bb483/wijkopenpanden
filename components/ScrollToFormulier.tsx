"use client";

import type { ReactNode } from "react";
import Link from "next/link";

// window.scrollTo({ behavior: "smooth" }) is in Chrome niet door de gebruiker
// te onderbreken (scrollbalk/touch/wiel): de lopende animatie trekt de pagina
// telkens terug naar het doel. Daarom een eigen rAF-animatie die stopt zodra
// de scrollpositie afwijkt van wat de animatie zelf heeft gezet.
function animateScrollTo(targetY: number) {
  const maxY = document.documentElement.scrollHeight - window.innerHeight;
  const endY = Math.max(0, Math.min(targetY, maxY));
  const startY = window.scrollY;
  const distance = endY - startY;
  if (Math.abs(distance) < 1) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo({ top: endY, behavior: "instant" });
    return;
  }

  const duration = Math.min(900, 350 + Math.abs(distance) * 0.05);
  const startTime = performance.now();
  let expectedY = startY;
  const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

  const step = (now: number) => {
    if (Math.abs(window.scrollY - expectedY) > 2) return; // gebruiker scrolt zelf
    const t = Math.min(1, (now - startTime) / duration);
    expectedY = Math.round(startY + distance * easeOut(t));
    window.scrollTo({ top: expectedY, behavior: "instant" });
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

export function scrollToFormulier() {
  const el = document.getElementById("formulier");
  if (el) {
    animateScrollTo(el.getBoundingClientRect().top + window.scrollY - 80);
  } else {
    sessionStorage.setItem("scrollToFormulier", "1");
    window.location.href = "/";
  }
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
