"use client";

import { useEffect, useState } from "react";
import { scrollToFormulier } from "@/components/ScrollToFormulier";

export default function StickyCtaButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="/#formulier"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-white shadow-lg transition-all duration-200"
      style={{ background: "#C0392B", fontSize: "0.9375rem" }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "#a93226")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "#C0392B")}
      onClick={(e) => { e.preventDefault(); scrollToFormulier(); }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 1v14M1 8h14" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
      Vraag gratis bod aan
    </a>
  );
}
