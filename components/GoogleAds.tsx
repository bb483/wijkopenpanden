"use client";

import { useEffect } from "react";
import Script from "next/script";
import { CONSENT_KEY, GOOGLE_ADS_ID, captureAttribution, trackConversion } from "@/components/tracking";

// Laadt de Google-tag met Consent Mode v2: standaard alles geweigerd, tenzij
// de bezoeker eerder "Accepteren" koos in het cookiebalkje. Zonder toestemming
// stuurt gtag enkel cookieloze pings (gemodelleerde conversies); met toestemming
// meet Google Ads de conversie exact. url_passthrough geeft de gclid door aan
// interne links zodat de klik ook zonder cookie aan de conversie hangt.
const inlineInit = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
(function(){
  var stored = null;
  try { stored = window.localStorage.getItem(${JSON.stringify(CONSENT_KEY)}); } catch (e) {}
  var state = stored === "granted" ? "granted" : "denied";
  gtag("consent", "default", {
    ad_storage: state,
    ad_user_data: state,
    ad_personalization: state,
    analytics_storage: state,
    wait_for_update: 500
  });
  gtag("set", "url_passthrough", true);
  gtag("set", "ads_data_redaction", true);
})();
gtag("js", new Date());
gtag("config", ${JSON.stringify(GOOGLE_ADS_ID)});
`;

export default function GoogleAds() {
  useEffect(() => {
    captureAttribution();

    // Eén luisteraar voor alle tel:-links op de site, ook die in later
    // gerenderde componenten (menu, sticky knop, templates).
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const link = target?.closest?.('a[href^="tel:"]');
      if (link) trackConversion("telefoonklik");
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return (
    <>
      <Script id="google-ads-init" strategy="afterInteractive">
        {inlineInit}
      </Script>
      <Script
        id="google-ads-gtag"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />
    </>
  );
}
