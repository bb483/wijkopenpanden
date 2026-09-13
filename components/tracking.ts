// Advertentietracking voor wijkopenpanden.be (Google Ads + Meta-pixel).
//
// - GOOGLE_ADS_ID: de Google-tag van het account (Doelen > Conversies > Google-tag).
// - CONVERSION_LABELS: het deel na de schuine streep in 'send_to' van elke
//   conversieactie. Een lege string = conversie nog niet aangemaakt, dan wordt
//   er niets naar Google gestuurd (Meta krijgt de gebeurtenis wél).
// - META_PIXEL_ID: gegevensset "wijkopenpanden.be pixel" in Gebeurtenisbeheer.
// - Attributie: bij het eerste bezoek slaan we utm_*, gclid en fbclid op, zodat
//   elke lead in de mail vermeldt uit welke campagne / welk zoekwoord hij komt.

export const GOOGLE_ADS_ID = "AW-17769956228";
export const META_PIXEL_ID = "1071358265784342";

/** Standaardgebeurtenissen van Meta per conversie. */
const META_EVENTS = {
  offerteformulier: "Lead",
  telefoonklik: "Contact",
} as const;

export const CONVERSION_LABELS = {
  /** WOP - Offerteformulier verzonden (Lead indienen, €100) */
  offerteformulier: "EkNHCKf-mvQcEISHsJlC",
  /** WOP - Telefoonklik (Contact, €25) */
  telefoonklik: "",
} as const;

export const CONVERSION_VALUES = {
  offerteformulier: 100,
  telefoonklik: 25,
} as const;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export type ConsentState = "granted" | "denied";

export const CONSENT_KEY = "wop_consent";
const ATTRIBUTION_KEY = "wop_attributie";
const ATTRIBUTION_TTL_MS = 90 * 24 * 60 * 60 * 1000; // zelfde venster als de doorklikconversieperiode

const TRACKED_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"] as const;

export interface Attribution {
  bron?: string;
  medium?: string;
  campagne?: string;
  zoekwoord?: string;
  advertentie?: string;
  gclid?: string;
  fbclid?: string;
  verwijzer?: string;
  landingspagina?: string;
  eerste_bezoek?: string;
}

function safeGet(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSet(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* privémodus of geblokkeerde opslag: dan geen attributie */
  }
}

export function readConsent(): ConsentState | null {
  const v = safeGet(CONSENT_KEY);
  return v === "granted" || v === "denied" ? v : null;
}

export const CONSENT_EVENT = "wop-consent";

export function writeConsent(state: ConsentState) {
  safeSet(CONSENT_KEY, state);
  window.dispatchEvent(new Event(CONSENT_EVENT));
  window.gtag?.("consent", "update", {
    ad_storage: state,
    ad_user_data: state,
    ad_personalization: state,
    analytics_storage: state,
  });
  // Meta-pixel: zonder toestemming worden events in de wachtrij gehouden en
  // nooit verstuurd; na "grant" gaan ze alsnog door.
  window.fbq?.("consent", state === "granted" ? "grant" : "revoke");
}

/**
 * Slaat de campagneparameters van het huidige bezoek op (first-touch).
 * Een bezoek mét utm/gclid overschrijft altijd; een bezoek zonder vult enkel
 * aan als er nog niets bekend is.
 */
export function captureAttribution() {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const hasCampaign = TRACKED_PARAMS.some((p) => params.has(p));

  const existing = getAttribution();
  if (existing && !hasCampaign) return;

  const attribution: Attribution = {
    bron: params.get("utm_source") ?? undefined,
    medium: params.get("utm_medium") ?? undefined,
    campagne: params.get("utm_campaign") ?? undefined,
    zoekwoord: params.get("utm_term") ?? undefined,
    advertentie: params.get("utm_content") ?? undefined,
    gclid: params.get("gclid") ?? undefined,
    fbclid: params.get("fbclid") ?? undefined,
    verwijzer: document.referrer || undefined,
    landingspagina: window.location.pathname,
    eerste_bezoek: new Date().toISOString(),
  };

  // Een gclid zonder utm's is nog altijd Google Ads.
  if (attribution.gclid && !attribution.bron) {
    attribution.bron = "google";
    attribution.medium = "cpc";
  }
  // Een fbclid zonder utm's komt van Facebook of Instagram.
  if (attribution.fbclid && !attribution.bron) {
    attribution.bron = "facebook";
    attribution.medium = "paid_social";
  }

  safeSet(ATTRIBUTION_KEY, JSON.stringify({ ...attribution, _ts: Date.now() }));
}

export function getAttribution(): Attribution | null {
  const raw = safeGet(ATTRIBUTION_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as Attribution & { _ts?: number };
    if (!parsed._ts || Date.now() - parsed._ts > ATTRIBUTION_TTL_MS) return null;
    const { _ts, ...rest } = parsed;
    void _ts;
    return rest;
  } catch {
    return null;
  }
}

/** Velden die we met elke lead meesturen naar Web3Forms (komen in de mail). */
export function attributionFields(): Record<string, string> {
  const a = getAttribution();
  const fields: Record<string, string> = {
    bron: a?.bron ?? "direct / organisch",
  };
  if (a?.medium) fields.medium = a.medium;
  if (a?.campagne) fields.campagne = a.campagne;
  if (a?.zoekwoord) fields.zoekwoord = a.zoekwoord;
  if (a?.advertentie) fields.advertentie = a.advertentie;
  if (a?.gclid) fields.gclid = a.gclid;
  if (a?.fbclid) fields.fbclid = a.fbclid;
  if (a?.verwijzer) fields.verwijzer = a.verwijzer;
  if (a?.landingspagina) fields.landingspagina = a.landingspagina;
  if (typeof window !== "undefined") fields.pagina = window.location.pathname;
  return fields;
}

export function trackConversion(action: keyof typeof CONVERSION_LABELS) {
  if (typeof window === "undefined") return;
  const value = CONVERSION_VALUES[action];

  const label = CONVERSION_LABELS[action];
  if (label && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: `${GOOGLE_ADS_ID}/${label}`,
      value,
      currency: "EUR",
    });
  }

  window.fbq?.("track", META_EVENTS[action], { value, currency: "EUR" });
}
