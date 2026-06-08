"use client";

import { useState, FormEvent, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/Container";

interface TipData {
  adres: string;
  typeWoning: string;
  opmerking: string;
  naam: string;
  telefoon: string;
  email: string;
}

const initial: TipData = {
  adres: "",
  typeWoning: "",
  opmerking: "",
  naam: "",
  telefoon: "",
  email: "",
};

type Errors = Partial<Record<keyof TipData, string>>;

function validate(data: TipData): Errors {
  const e: Errors = {};
  if (!data.adres.trim()) e.adres = "Vul het adres in.";
  if (!data.typeWoning) e.typeWoning = "Kies een type.";
  if (!data.naam.trim()) e.naam = "Vul uw naam in.";
  if (!data.telefoon.trim()) e.telefoon = "Vul uw telefoonnummer in.";
  if (!data.email.trim()) e.email = "Vul uw e-mailadres in.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Ongeldig e-mailadres.";
  return e;
}

const inputBase: React.CSSProperties = {
  width: "100%",
  background: "#FAF7F2",
  border: "1.5px solid rgba(28,22,16,0.12)",
  color: "#1C1610",
  borderRadius: "0.75rem",
  padding: "0.9rem 1rem",
  fontSize: "1rem",
  outline: "none",
  transition: "border-color 150ms, box-shadow 150ms",
};

function Field({ label, error, children, hint }: { label: string; error?: string; children: React.ReactNode; hint?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-semibold" style={{ color: "#1C1610" }}>{label}</p>
      {hint && <p className="text-xs" style={{ color: "#7A6B5C" }}>{hint}</p>}
      {children}
      {error && <p className="text-sm font-medium" style={{ color: "#C0392B" }}>{error}</p>}
    </div>
  );
}

function OptionButton({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-4 py-3 rounded-xl text-sm font-medium text-left transition-all duration-150"
      style={{
        background: selected ? "rgba(196,163,90,0.10)" : "#FAF7F2",
        border: selected ? "2px solid #C4A35A" : "1.5px solid rgba(28,22,16,0.12)",
        color: selected ? "#1C1610" : "#4A3D30",
        fontWeight: selected ? 600 : 500,
      }}
    >
      {label}
    </button>
  );
}

function AdresAutocomplete({ value, onChange, error }: { value: string; onChange: (val: string) => void; error?: string }) {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const fetchSuggestions = useCallback(async (q: string) => {
    if (q.length < 3) { setSuggestions([]); setOpen(false); return; }
    try {
      const res = await fetch(
        `https://geo.api.vlaanderen.be/geolocation/v4/Suggestion?q=${encodeURIComponent(q)}&c=6`
      );
      const data = await res.json();
      const results: string[] = data?.SuggestionResult ?? [];
      setSuggestions(results);
      setOpen(results.length > 0);
    } catch {
      setSuggestions([]);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    onChange(val);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => fetchSuggestions(val), 300);
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      <input
        type="text"
        placeholder="Straat en nummer, gemeente"
        value={value}
        onChange={handleChange}
        onFocus={() => { setFocused(true); if (suggestions.length > 0) setOpen(true); }}
        onBlur={() => setFocused(false)}
        autoComplete="off"
        style={{
          ...inputBase,
          borderColor: focused ? "#C4A35A" : error ? "#C0392B" : "rgba(28,22,16,0.12)",
          boxShadow: focused ? "0 0 0 3px rgba(196,163,90,0.12)" : "none",
        }}
        className="placeholder:text-[#1C1610]/30"
      />
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 w-full mt-1 rounded-xl overflow-hidden"
            style={{ background: "#FFFFFF", border: "1.5px solid rgba(28,22,16,0.10)", boxShadow: "0 8px 24px rgba(28,22,16,0.10)" }}
          >
            {suggestions.map((s, i) => (
              <li key={i}>
                <button
                  type="button"
                  onMouseDown={() => { onChange(s); setSuggestions([]); setOpen(false); }}
                  className="w-full text-left px-4 py-3 text-sm transition-colors duration-100"
                  style={{ color: "#1C1610", borderBottom: i < suggestions.length - 1 ? "1px solid rgba(28,22,16,0.06)" : "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#FAF7F2")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  <svg className="inline mr-2 flex-shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1C4.07 1 2.5 2.57 2.5 4.5c0 2.63 3.5 6.5 3.5 6.5s3.5-3.87 3.5-6.5C9.5 2.57 7.93 1 6 1zm0 4.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z" fill="#C4A35A" />
                  </svg>
                  {s}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

const types = [
  "Rijhuis",
  "Appartement",
  "Halfopen woning",
  "Vrijstaande woning",
  "Villa",
  "Herenhuis",
  "Opbrengsteigendom",
  "Bouwgrond",
  "Garage / box",
  "Andere",
];

export default function TipFormulier() {
  const [form, setForm] = useState<TipData>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sendError, setSendError] = useState(false);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = "#C4A35A";
    e.target.style.boxShadow = "0 0 0 3px rgba(196,163,90,0.12)";
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = "rgba(28,22,16,0.12)";
    e.target.style.boxShadow = "none";
  };

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);
    setSendError(false);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "db7cb328-aaf2-4d20-becc-849f2aa440de",
          subject: `Nieuwe pand-tip — ${form.adres}`,
          from_name: form.naam,
          replyto: form.email,
          tipgever_naam: form.naam,
          tipgever_telefoon: form.telefoon,
          tipgever_email: form.email,
          pand_adres: form.adres,
          pand_type: form.typeWoning,
          opmerking: form.opmerking || "(geen opmerking)",
        }),
      });
      const data = await res.json();
      if (data.success) setSubmitted(true);
      else setSendError(true);
    } catch {
      setSendError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="tip-formulier" className="py-24 md:py-32" style={{ background: "#F5EFE4" }}>
      <Container>
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl p-8 md:p-12"
            style={{ background: "#FFFFFF", border: "1px solid rgba(28,22,16,0.08)", boxShadow: "0 4px 32px rgba(28,22,16,0.07)" }}
          >
            <p className="flex items-center gap-3 text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#C4A35A" }}>
              <span className="w-6 h-px flex-shrink-0" style={{ background: "#C4A35A" }} />
              Tot €5.000 beloning
            </p>
            <h2
              className="font-serif font-bold mb-4"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", color: "#1C1610", letterSpacing: "-0.02em" }}
            >
              Geef uw tip door
            </h2>

            <div className="mb-8 p-4 rounded-xl flex items-start gap-3" style={{ background: "rgba(196,163,90,0.07)", border: "1px solid rgba(196,163,90,0.18)" }}>
              <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "#C4A35A" }}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-sm" style={{ color: "#4A3D30" }}>
                <strong style={{ color: "#1C1610" }}>Discreet en vrijblijvend</strong> — u ontvangt uw beloning na de notariële akte.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="py-10 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-full flex items-center justify-center" style={{ background: "rgba(196,163,90,0.10)", border: "2px solid rgba(196,163,90,0.25)" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l4 4 10-10" stroke="#C4A35A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="font-serif text-2xl mb-3" style={{ color: "#1C1610" }}>Uw tip is ontvangen.</p>
                <p className="text-base" style={{ color: "#4A3D30" }}>
                  Bedankt! Wij nemen zo snel mogelijk contact op met de eigenaar. Bij een succesvolle deal contacteren wij u voor uw beloning.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-7">

                <Field label="Adres van het pand" error={errors.adres}>
                  <AdresAutocomplete
                    value={form.adres}
                    onChange={(val) => setForm((f) => ({ ...f, adres: val }))}
                    error={errors.adres}
                  />
                </Field>

                <Field label="Type vastgoed" error={errors.typeWoning}>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {types.map((t) => (
                      <OptionButton
                        key={t}
                        label={t}
                        selected={form.typeWoning === t}
                        onClick={() => setForm((f) => ({ ...f, typeWoning: t }))}
                      />
                    ))}
                  </div>
                </Field>

                <Field
                  label="Waarom denkt u dat de eigenaar wil verkopen?"
                  hint="Optioneel — bijv. leegstand, erfenis, verhuis…"
                >
                  <textarea
                    placeholder="Eventuele context of achtergrond (optioneel)"
                    value={form.opmerking}
                    onChange={(e) => setForm((f) => ({ ...f, opmerking: e.target.value }))}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    rows={3}
                    style={{
                      ...inputBase,
                      resize: "vertical",
                      minHeight: "90px",
                    }}
                    className="placeholder:text-[#1C1610]/30"
                  />
                </Field>

                <div className="border-t pt-6" style={{ borderColor: "rgba(28,22,16,0.08)" }}>
                  <p className="text-sm font-semibold mb-5" style={{ color: "#1C1610" }}>Uw contactgegevens</p>
                  <div className="flex flex-col gap-5">
                    <Field label="Uw naam" error={errors.naam}>
                      <input
                        type="text"
                        placeholder="Voornaam en achternaam"
                        value={form.naam}
                        onChange={(e) => setForm((f) => ({ ...f, naam: e.target.value }))}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        style={inputBase}
                        className="placeholder:text-[#1C1610]/30"
                      />
                    </Field>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="Telefoonnummer" error={errors.telefoon}>
                        <input
                          type="tel"
                          placeholder="0492 77 94 75"
                          value={form.telefoon}
                          onChange={(e) => setForm((f) => ({ ...f, telefoon: e.target.value }))}
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                          style={inputBase}
                          className="placeholder:text-[#1C1610]/30"
                        />
                      </Field>
                      <Field label="E-mailadres" error={errors.email}>
                        <input
                          type="email"
                          placeholder="naam@email.be"
                          value={form.email}
                          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                          style={inputBase}
                          className="placeholder:text-[#1C1610]/30"
                        />
                      </Field>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full py-4 text-base font-semibold text-white transition-colors duration-200 disabled:opacity-60"
                  style={{ background: "#C4A35A", fontSize: "1.0625rem" }}
                  onMouseEnter={(e) => { if (!loading) e.currentTarget.style.background = "#b08d47"; }}
                  onMouseLeave={(e) => { if (!loading) e.currentTarget.style.background = "#C4A35A"; }}
                >
                  {loading ? "Verzenden…" : "Verstuur mijn tip"}
                </button>

                {sendError && (
                  <p className="text-sm text-center font-medium" style={{ color: "#C0392B" }}>
                    Er ging iets mis. Bel ons op 0492 77 94 75 of probeer opnieuw.
                  </p>
                )}

                <p className="text-xs text-center" style={{ color: "#7A6B5C" }}>
                  Uw gegevens worden vertrouwelijk behandeld en uitsluitend gebruikt voor de uitbetaling van uw beloning.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
