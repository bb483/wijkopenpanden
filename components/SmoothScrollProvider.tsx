"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setLenisInstance } from "@/components/lenisInstance";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [lenis, setLenis] = useState<Lenis | null>(null);

  // Bij een client-side navigatie wisselt de paginahoogte, maar Lenis' eigen
  // ResizeObserver is 250 ms gedebounced. In dat venster scrollt Next al naar
  // de hash (bv. /#formulier) terwijl Lenis nog de scrollhoogte van de vórige
  // pagina kent: elk scrolldoel wordt dan geklemd op de oude limiet en de
  // pagina schiet terug omhoog. resize() ververst de afmetingen én zet de
  // interne scrollpositie gelijk aan de echte.
  useEffect(() => {
    if (!lenis) return;
    const id = requestAnimationFrame(() => requestAnimationFrame(() => lenis.resize()));
    return () => cancelAnimationFrame(id);
  }, [lenis, pathname]);

  useEffect(() => {
    // Skip Lenis on mobile — native scroll is smoother and faster
    if (window.innerWidth < 768) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const instance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    instance.on("scroll", ScrollTrigger.update);
    setLenisInstance(instance);
    setLenis(instance);

    const ticker = (time: number) => instance.raf(time * 1000);
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      setLenisInstance(null);
      setLenis(null);
      instance.destroy();
      gsap.ticker.remove(ticker);
    };
  }, []);

  return <>{children}</>;
}
