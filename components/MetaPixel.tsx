"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { CONSENT_KEY, META_PIXEL_ID } from "@/components/tracking";

// Meta-pixel met toestemming: vóór init wordt de consent op "revoke" gezet
// tenzij de bezoeker eerder "Accepteren" koos. Bij revoke houdt de pixel alle
// gebeurtenissen in de wachtrij en verstuurt hij niets; writeConsent() in
// tracking.ts geeft "grant" door zodra de bezoeker accepteert.
const inlineInit = `
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
(function(){
  var stored = null;
  try { stored = window.localStorage.getItem(${JSON.stringify(CONSENT_KEY)}); } catch (e) {}
  fbq('consent', stored === 'granted' ? 'grant' : 'revoke');
})();
fbq('init', ${JSON.stringify(META_PIXEL_ID)});
fbq('track', 'PageView');
`;

export default function MetaPixel() {
  const pathname = usePathname();
  const first = useRef(true);

  // De inline-init stuurt de eerste PageView; bij client-side navigatie
  // (Next Link) laadt de pagina niet opnieuw, dus sturen we hem hier.
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    window.fbq?.("track", "PageView");
  }, [pathname]);

  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {inlineInit}
    </Script>
  );
}
