"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/Container";

const vragen = [
  {
    vraag: "Hoe bepaalt u de aankoopprijs?",
    antwoord:
      "Wij baseren ons op recente vergelijkbare transacties in de buurt, de staat van de woning en de actuele marktomstandigheden in Antwerpen. Ons bod is concreet en schriftelijk. Wij leggen de berekeningswijze graag toe.",
  },
  {
    vraag: "Is uw bod bindend?",
    antwoord:
      "Het bod is bindend van onze kant zodra u het aanvaardt en wij een voorlopige koopovereenkomst (compromis) ondertekenen. Tot dat moment is alles vrijblijvend — ook voor u.",
  },
  {
    vraag: "Wie betaalt de notariskosten?",
    antwoord:
      "Als koper betalen wij de registratierechten en notariskosten aan koperskant. U betaalt uitsluitend uw eigen notaris, als u er een kiest. Er zijn geen verborgen kosten.",
  },
  {
    vraag: "Hoe snel kan de overdracht plaatsvinden?",
    antwoord:
      "Gemiddeld 2 tot 3 maanden van eerste contact tot ondertekening van de akte. In dringende gevallen — bijvoorbeeld bij een erfenis of financiële druk — kunnen we sneller schakelen. De akte-datum bepaalt u.",
  },
  {
    vraag: "Wat als de woning nog een hypotheek heeft?",
    antwoord:
      "Dat is geen probleem. Bij de notariële akte wordt de openstaande hypotheek afgelost via de verkoopprijs. U ontvangt het saldo netto na aflossing.",
  },
  {
    vraag: "Koopt u ook buiten Antwerpen?",
    antwoord:
      "Onze focus ligt op Antwerpen en de directe omstreken (Boom, Mechelen, Mortsel, Edegem). Neem contact op — in specifieke gevallen kijken wij ook verder.",
  },
  {
    vraag: "Wat als ik toch wil blijven wonen na de verkoop?",
    antwoord:
      "Dat is precies wat onze 'blijven wonen'-formule mogelijk maakt. U verkoopt de woning en tekent gelijktijdig een huurcontract. U bepaalt hoe lang u blijft.",
  },
  {
    vraag: "Is er een verplichte minimumoppervlakte of -prijs?",
    antwoord:
      "Neen. Wij kopen appartementen, rijwoningen, open en halfopen bebouwing — vanaf studio's tot grote gezinswoningen. Er is geen drempel.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-28 md:py-40"
      style={{ background: "#FAF7F2" }}
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
            className="flex items-center gap-3 text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#C4A35A" }}
          >
            <span className="w-6 h-px flex-shrink-0" style={{ background: "#C4A35A" }} />
            Veelgestelde vragen
          </p>
          <h2
            className="font-serif font-bold max-w-xl"
            style={{
              fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
              color: "#1C1610",
              letterSpacing: "-0.025em",
            }}
          >
            Wat eigenaars ons het vaakst vragen
          </h2>
        </motion.div>

        <div className="max-w-3xl">
          {vragen.map((item, i) => (
            <motion.div
              key={item.vraag}
              initial={{ opacity: 1, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 }}
              style={{ borderBottom: "1px solid rgba(28,22,16,0.08)" }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-6 text-left group"
                aria-expanded={open === i}
              >
                <span
                  className="font-semibold text-lg md:text-xl transition-colors duration-150"
                  style={{ color: open === i ? "#1C1610" : "#1C1610" }}
                >
                  {item.vraag}
                </span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full"
                  style={{
                    border: "1px solid rgba(28,22,16,0.15)",
                    color: "#5C4D3C",
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <line x1="5" y1="0" x2="5" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="0" y1="5" x2="10" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <p
                      className="pb-8 text-base leading-relaxed pr-10"
                      style={{ color: "#5C4D3C" }}
                    >
                      {item.antwoord}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div
          className="mt-14 p-8 md:p-10 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-6"
          style={{ background: "#F5EFE4", border: "1px solid rgba(28,22,16,0.08)" }}
        >
          <div>
            <p className="font-serif text-xl font-bold mb-1" style={{ color: "#1C1610" }}>Nog vragen? Wij helpen u graag.</p>
            <p className="text-base" style={{ color: "#4A3D30" }}>Gratis en vrijblijvend — wij nemen binnen 2 uur contact op.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="#formulier"
              className="px-7 py-3.5 rounded-full font-semibold text-white transition-colors duration-200 text-center whitespace-nowrap"
              style={{ background: "#C0392B", fontSize: "1rem" }}
            >
              Vraag een bod aan
            </a>
            <a
              href="tel:0492779475"
              className="px-7 py-3.5 rounded-full font-medium transition-all duration-200 text-center whitespace-nowrap"
              style={{ border: "2px solid rgba(28,22,16,0.18)", color: "#1C1610", fontSize: "1rem" }}
            >
              Bel ons nu
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
