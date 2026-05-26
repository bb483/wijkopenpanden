"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const KeyScene = dynamic(() => import("./KeyScene"), { ssr: false });

function GoldKey() {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-[380px]">
      <svg
        viewBox="0 0 180 390"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="140"
        height="306"
        className="gold-key-spin"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="kg1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#7A5C1E"/>
            <stop offset="28%"  stopColor="#C4A35A"/>
            <stop offset="52%"  stopColor="#EDD07E"/>
            <stop offset="78%"  stopColor="#C4A35A"/>
            <stop offset="100%" stopColor="#8B6B28"/>
          </linearGradient>
          <linearGradient id="kg2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#6B5020"/>
            <stop offset="50%"  stopColor="#A8892A"/>
            <stop offset="100%" stopColor="#7A5C1E"/>
          </linearGradient>
          <linearGradient id="kg3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#EDD07E"/>
            <stop offset="100%" stopColor="#B8922A"/>
          </linearGradient>
          <linearGradient id="kg4" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#9A7830"/>
            <stop offset="40%"  stopColor="#D4AE5A"/>
            <stop offset="70%"  stopColor="#EDD07E"/>
            <stop offset="100%" stopColor="#B8922A"/>
          </linearGradient>
        </defs>
        <rect x="30" y="8" width="120" height="94" rx="22" fill="url(#kg1)"/>
        <rect x="30" y="8" width="120" height="94" rx="22" fill="url(#kg3)" opacity="0.45"/>
        <ellipse cx="90" cy="54" rx="38" ry="28" fill="#3A2A08"/>
        <ellipse cx="90" cy="54" rx="38" ry="28" fill="none" stroke="#C4A35A" strokeWidth="1.5" opacity="0.4"/>
        <rect x="44" y="12" width="72" height="18" rx="9" fill="white" opacity="0.13"/>
        <rect x="62" y="102" width="56" height="18" rx="3" fill="url(#kg1)"/>
        <rect x="69" y="118" width="42" height="224" rx="5" fill="url(#kg4)"/>
        <rect x="82" y="122" width="10" height="214" rx="4" fill="white" opacity="0.10"/>
        <rect x="104" y="118" width="7" height="224" fill="#7A5C1E" opacity="0.5"/>
        <rect x="47" y="161" width="22" height="14" rx="3" fill="url(#kg2)"/>
        <rect x="53" y="189" width="16" height="10" rx="3" fill="url(#kg2)"/>
        <rect x="43" y="212" width="26" height="16" rx="3" fill="url(#kg2)"/>
        <rect x="57" y="240" width="12" height="9"  rx="3" fill="url(#kg2)"/>
        <rect x="50" y="262" width="19" height="13" rx="3" fill="url(#kg2)"/>
        <path d="M69 342 L111 342 L107 356 L73 356 Z" fill="url(#kg2)"/>
      </svg>
    </div>
  );
}

export default function KeySceneLazy() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 768) setIsDesktop(true);
  }, []);

  return isDesktop ? <KeyScene /> : <GoldKey />;
}
