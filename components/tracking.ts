// Google Ads-tracking voor wijkopenpanden.be.
//
// - GOOGLE_ADS_ID: de Google-tag van het account (Doelen > Conversies > Google-tag).
// - CONVERSION_LABELS: het deel na de schuine streep in 'send_to' van elke
//   conversieactie. Een lege string = conversie nog niet aangemaakt, dan wordt
//   er niets afgevuurd.
// - Attributie: bij het eerste bezoek slaan we utm_* en gclid op, zodat elke
//   lead in de mail vermeldt uit welke campagne / welk zoekwoord hij komt.

export const GOOGLE_ADS_ID = "AW-17769956228";

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
  }
}

export type ConsentState = "granted" | "denied";

export const CONSENT_KEY = "wop_consent";
const ATTRIBUTION_KEY = "wop_attributie";
const ATTRIBUTION_TTL_MS = 90 * 24 * 60 * 60 * 1000; // zelfde venster als de doorklikconversieperiode

const TRACKED_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"] as const;

export interface Attribution {
  bron?: string;
  medium?: string;
  campagne?: string;
  zoekwoord?: string;
  advertentie?: string;
  gclid?: string;
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
    verwijzer: document.referrer || undefined,
    landingspagina: window.location.pathname,
    eerste_bezoek: new Date().toISOString(),
  };

  // Een gclid zonder utm's is nog altijd Google Ads.
  if (attribution.gclid && !attribution.bron) {
    attribution.bron = "google";
    attribution.medium = "cpc";
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
  if (a?.verwijzer) fields.verwijzer = a.verwijzer;
  if (a?.landingspagina) fields.landingspagina = a.landingspagina;
  if (typeof window !== "undefined") fields.pagina = window.location.pathname;
  return fields;
}

export function trackConversion(action: keyof typeof CONVERSION_LABELS) {
  const label = CONVERSION_LABELS[action];
  if (!label || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${label}`,
    value: CONVERSION_VALUES[action],
    currency: "EUR",
  });
}
