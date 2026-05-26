"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";

const situaties = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C4A35A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Nalatenschap",
    body: "Een geërfde woning die u niet wilt verhuren of verbouwen. Wij kopen snel en correct aan, zodat u de erfenis vlot kunt afwikkelen.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C4A35A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    title: "Scheiding",
    body: "Wanneer beide partijen snel willen afsluiten. Geen getouwtrek over de prijs, geen lang verkooptraject.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C4A35A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "Opknapper",
    body: "Uw woning heeft renovaties nodig maar u wilt de investering niet meer doen. Wij kopen in elke staat aan.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C4A35A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: "Opbrengsteigendom",
    body: "U wilt van uw huurwoning af, met of zonder huurders. Wij regelen de overdracht volledig.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C4A35A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Blijven wonen",
    body: "U verkoopt uw woning maar woont er nog jaren in als huurder. Zekerheid nu, verhuizen wanneer het u uitkomt.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C4A35A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Lijfrente",
    body: "Wij kopen uw woning aan en betalen u maandelijks een aanvullend inkomen. U behoudt het recht om te blijven wonen.",
  },
];

export default function VoorWie() {
  return (
    <section
      id="voor-wie"
      className="py-28 md:py-40"
      style={{ background: "#FFFFFF" }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#C4A35A" }}
          >
            Voor wie
          </p>
          <h2
            className="font-serif font-normal max-w-xl mb-4"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#1C1610",
              letterSpacing: "-0.02em",
            }}
          >
            In welke situatie verkoopt u aan wijkopenpanden.be?
          </h2>
          <p
            className="text-lg leading-relaxed max-w-2xl"
            style={{ color: "#5C4D3C" }}
          >
            Er is geen typische verkoper. Eigenaars kiezen voor ons wanneer snelheid, discretie of
            zekerheid zwaarder wegen dan de absolute maximumprijs.
          </p>
        </motion.div>

        {/* Mobile: horizontal scroll, Desktop: grid */}
        <div className="md:hidden -mx-6 px-6">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
            {situaties.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 1, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
                className="flex-shrink-0 snap-start flex flex-col gap-5 p-6 rounded-2xl"
                style={{
                  width: "min(288px, calc(100vw - 48px))",
                  background: "#FFFFFF",
                  border: "1px solid rgba(28,22,16,0.08)",
                }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-xl"
                  style={{ background: "rgba(196,163,90,0.08)" }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#1C1610] mb-2">{item.title}</h3>
                  <p className="text-base leading-relaxed" style={{ color: "#5C4D3C" }}>
                    {item.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-5">
          {situaties.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 1, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
              className="flex flex-col gap-5 p-8 md:p-10 rounded-2xl transition-colors duration-200"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(28,22,16,0.08)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(28,22,16,0.14)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(28,22,16,0.08)";
              }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center rounded-xl"
                style={{ background: "rgba(196,163,90,0.08)" }}
              >
                {item.icon}
              </div>
              <div>
                <h3 className="font-serif text-2xl text-[#1C1610] mb-3">{item.title}</h3>
                <p className="text-base leading-relaxed" style={{ color: "#5C4D3C" }}>
                  {item.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-14 flex flex-col sm:flex-row gap-3">
          <a
            href="#formulier"
            className="px-8 py-4 rounded-full font-semibold text-white transition-colors duration-200 text-center"
            style={{ background: "#C0392B", fontSize: "1.0625rem" }}
          >
            Vraag gratis een bod aan
          </a>
          <a
            href="tel:0492779475"
            className="px-8 py-4 rounded-full font-medium transition-all duration-200 text-center"
            style={{ border: "2px solid rgba(28,22,16,0.18)", color: "#1C1610", fontSize: "1.0625rem" }}
          >
            Bel 0492 77 94 75
          </a>
        </div>
      </Container>
    </section>
  );
}
