"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { CONSENT_EVENT, readConsent, writeConsent } from "@/components/tracking";

function subscribe(onChange: () => void) {
  window.addEventListener(CONSENT_EVENT, onChange);
  return () => window.removeEventListener(CONSENT_EVENT, onChange);
}

// Compact toestemmingsbalkje (Consent Mode v2). Verschijnt één keer; de keuze
// wordt in localStorage bewaard. Bewust klein en laag-contrast gehouden zodat
// het het formulier en de sticky CTA niet in de weg zit.
export default function CookieBanner() {
  // Server rendert niets (geen localStorage); na hydratie leest de client de
  // opgeslagen keuze. Zo geen hydration-mismatch en geen setState in een effect.
  const consent = useSyncExternalStore(
    subscribe,
    () => readConsent() ?? "unknown",
    () => "server",
  );

  if (consent !== "unknown") return null;

  const choose = (state: "granted" | "denied") => writeConsent(state);

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookies"
      className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-xl rounded-2xl p-4 sm:p-5 sm:flex sm:items-center sm:gap-5"
      style={{
        background: "#FFFFFF",
        border: "1px solid rgba(28,22,16,0.10)",
        boxShadow: "0 8px 32px rgba(28,22,16,0.14)",
      }}
    >
      <p className="text-sm flex-1 mb-3 sm:mb-0" style={{ color: "#4A3D30" }}>
        Wij gebruiken cookies om te meten welke advertenties tot een aanvraag leiden.
        Geen persoonlijke profielen, geen doorverkoop.{" "}
        <Link href="/privacy" className="underline" style={{ color: "#1C1610" }}>
          Meer info
        </Link>
      </p>
      <div className="flex gap-2 flex-shrink-0">
        <button
          type="button"
          onClick={() => choose("denied")}
          className="px-4 py-2.5 rounded-full text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4A35A]"
          style={{ color: "#4A3D30", border: "1.5px solid rgba(28,22,16,0.14)", background: "#FAF7F2" }}
        >
          Weigeren
        </button>
        <button
          type="button"
          onClick={() => choose("granted")}
          className="px-5 py-2.5 rounded-full text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4A35A] focus-visible:ring-offset-2"
          style={{ background: "#1C1610" }}
        >
          Accepteren
        </button>
      </div>
    </div>
  );
}
