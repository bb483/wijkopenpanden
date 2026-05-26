"use client";

import { useState } from "react";
import type { FAQ } from "@/content/types";

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-ink/8">
      {faqs.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 py-5 text-left group"
            aria-expanded={open === i}
          >
            <span className="font-serif text-base md:text-lg text-ink group-hover:text-accent transition-colors">
              {item.question}
            </span>
            <span className="text-muted flex-shrink-0 text-xl leading-none select-none">
              {open === i ? "−" : "+"}
            </span>
          </button>
          {open === i && (
            <p className="pb-6 text-sm text-muted leading-relaxed pr-8">
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
