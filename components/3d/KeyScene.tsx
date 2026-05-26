"use client";

import { useRef, useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import ModernKey from "./ModernKey";

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

export default function KeyScene() {
  const reduced = useReducedMotion();
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const scrollSpeed = useRef(0);
  const lastScrollY = useRef(0);
  const scrollDecayTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouseX.current = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY.current = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  useEffect(() => {
    const handler = () => {
      const delta = Math.abs(window.scrollY - lastScrollY.current);
      lastScrollY.current = window.scrollY;
      scrollSpeed.current = Math.min(delta / 20, 1);
      if (scrollDecayTimer.current) clearTimeout(scrollDecayTimer.current);
      scrollDecayTimer.current = setTimeout(() => { scrollSpeed.current = 0; }, 200);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="w-full h-full min-h-[420px]" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 35 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} color="#FFF4E6" />
        <directionalLight position={[-5, 3, -2]} intensity={0.4} color="#C8D8E8" />
        <Suspense fallback={null}>
          <ModernKey mouseX={mouseX} mouseY={mouseY} scrollSpeed={scrollSpeed} reduced={reduced} />
        </Suspense>
      </Canvas>
    </div>
  );
}
