"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import Container from "@/components/Container";

interface FormData {
  adres: string;
  typeWoning: string;
  oppervlakte: string;
  staat: string;
  naam: string;
  telefoon: string;
  intentie: string;
}

const initial: FormData = {
  adres: "",
  typeWoning: "",
  oppervlakte: "",
  staat: "",
  naam: "",
  telefoon: "",
  intentie: "",
};

type Errors = Partial<Record<keyof FormData, string>>;

function validate(data: FormData): Errors {
  const e: Errors = {};
  if (!data.adres.trim()) e.adres = "Vul het adres in.";
  if (!data.typeWoning) e.typeWoning = "Kies een woningtype.";
  if (!data.oppervlakte || isNaN(Number(data.oppervlakte)) || Number(data.oppervlakte) < 10)
    e.oppervlakte = "Vul een geldige oppervlakte in (m²).";
  if (!data.staat) e.staat = "Kies de staat van de woning.";
  if (!data.naam.trim()) e.naam = "Vul uw naam in.";
  if (!data.telefoon.trim()) e.telefoon = "Vul uw telefoonnummer in.";
  if (!data.intentie) e.intentie = "Kies wat u zoekt.";
  return e;
}

const inputBase: React.CSSProperties = {
  width: "100%",
  background: "rgba(28,22,16,0.04)",
  border: "1px solid rgba(28,22,16,0.12)",
  color: "#1C1610",
  borderRadius: "0.75rem",
  padding: "0.875rem 1rem",
  fontSize: "0.875rem",
  outline: "none",
  transition: "border-color 150ms ease-out, box-shadow 150ms ease-out",
  appearance: "none" as const,
};

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="text-sm"
        style={{ color: "#5C4D3C" }}
      >
        {label}
      </label>
      {children}
      {error && (
        <p className="text-xs" style={{ color: "#C0392B" }}>
          {error}
        </p>
      )}
    </div>
  );
}

export default function Formulier() {
  const [form, setForm] = useState<FormData>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const set =
    (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    console.log("Formulier ingediend:", form);
    setSubmitted(true);
  }

  const focusStyle = {
    borderColor: "rgba(196,163,90,0.5)",
    boxShadow: "0 0 0 3px rgba(196,163,90,0.10)",
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.target.style.borderColor = "rgba(196,163,90,0.5)";
    e.target.style.boxShadow = "0 0 0 3px rgba(196,163,90,0.08)";
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.target.style.borderColor = "rgba(28,22,16,0.12)";
    e.target.style.boxShadow = "none";
  };

  return (
    <section
      id="formulier"
      className="py-24 md:py-32"
      style={{ background: "#F5EFE4" }}
    >
      <Container>
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl p-8 md:p-12"
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(28,22,16,0.08)",
              boxShadow: "0 4px 24px rgba(28,22,16,0.06)",
            }}
          >
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ color: "#C4A35A" }}
            >
              Gratis en vrijblijvend
            </p>
            <h2
              className="font-serif font-normal mb-4"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                color: "#1C1610",
                letterSpacing: "-0.02em",
              }}
            >
              Vraag uw eerlijk bod aan
            </h2>

            {/* Reactiebelofte */}
            <div
              className="mb-8 p-4 rounded-xl"
              style={{
                background: "rgba(196,163,90,0.06)",
                border: "1px solid rgba(196,163,90,0.15)",
              }}
            >
              <p className="text-sm font-medium text-[#1C1610] mb-0.5">Onze reactiebelofte</p>
              <p className="text-sm" style={{ color: "#5C4D3C" }}>
                Binnen 2 uur een reactie — ook in het weekend en na 18 uur.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 1, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="py-10 text-center"
              >
                <div
                  className="w-12 h-12 mx-auto mb-5 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(196,163,90,0.1)", border: "1px solid rgba(196,163,90,0.2)" }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10l4 4 8-8" stroke="#C4A35A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="font-serif text-2xl text-[#1C1610] mb-3">Uw aanvraag is ontvangen.</p>
                <p className="text-sm" style={{ color: "#5C4D3C" }}>
                  Wij nemen binnen 2 uur contact met u op — ook in het weekend en na 18 uur. Wij
                  kijken ernaar uit u een eerlijk bod te doen.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                {/* Adres */}
                <Field label="Adres van de woning" error={errors.adres}>
                  <input
                    id="adres"
                    type="text"
                    placeholder="Straat en nummer, gemeente"
                    value={form.adres}
                    onChange={set("adres")}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    style={inputBase}
                    className="placeholder:text-[#1C1610]/25"
                  />
                </Field>

                {/* Type + Oppervlakte */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Type woning" error={errors.typeWoning}>
                    <select
                      id="typeWoning"
                      value={form.typeWoning}
                      onChange={set("typeWoning")}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      style={{ ...inputBase, cursor: "pointer" }}
                    >
                      <option value="" style={{ background: "#FFFFFF" }}>Kies een type</option>
                      <option value="appartement" style={{ background: "#FFFFFF" }}>Appartement</option>
                      <option value="rijwoning" style={{ background: "#FFFFFF" }}>Rijwoning</option>
                      <option value="halfopen" style={{ background: "#FFFFFF" }}>Halfopen woning</option>
                      <option value="open" style={{ background: "#FFFFFF" }}>Open bebouwing</option>
                      <option value="villa" style={{ background: "#FFFFFF" }}>Villa</option>
                      <option value="andere" style={{ background: "#FFFFFF" }}>Andere</option>
                    </select>
                  </Field>
                  <Field label="Bewoonbare oppervlakte (m²)" error={errors.oppervlakte}>
                    <input
                      id="oppervlakte"
                      type="number"
                      placeholder="bv. 120"
                      min="10"
                      value={form.oppervlakte}
                      onChange={set("oppervlakte")}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      style={inputBase}
                      className="placeholder:text-[#1C1610]/25"
                    />
                  </Field>
                </div>

                {/* Staat */}
                <Field label="Staat van de woning" error={errors.staat}>
                  <select
                    id="staat"
                    value={form.staat}
                    onChange={set("staat")}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    style={{ ...inputBase, cursor: "pointer" }}
                  >
                    <option value="" style={{ background: "#FFFFFF" }}>Kies de staat</option>
                    <option value="instapklaar" style={{ background: "#FFFFFF" }}>Instapklaar</option>
                    <option value="lichte-renovatie" style={{ background: "#FFFFFF" }}>Lichte renovatie nodig</option>
                    <option value="zware-renovatie" style={{ background: "#FFFFFF" }}>Zware renovatie nodig</option>
                    <option value="te-slopen" style={{ background: "#FFFFFF" }}>Te slopen</option>
                  </select>
                </Field>

                {/* Naam + Telefoon */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Uw naam" error={errors.naam}>
                    <input
                      id="naam"
                      type="text"
                      placeholder="Voornaam en achternaam"
                      value={form.naam}
                      onChange={set("naam")}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      style={inputBase}
                      className="placeholder:text-[#1C1610]/25"
                    />
                  </Field>
                  <Field label="Telefoonnummer" error={errors.telefoon}>
                    <input
                      id="telefoon"
                      type="tel"
                      placeholder="bv. 0492 77 94 75"
                      value={form.telefoon}
                      onChange={set("telefoon")}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      style={inputBase}
                      className="placeholder:text-[#1C1610]/25"
                    />
                  </Field>
                </div>

                {/* Intentie */}
                <Field label="Wat zoekt u?" error={errors.intentie}>
                  <select
                    id="intentie"
                    value={form.intentie}
                    onChange={set("intentie")}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    style={{ ...inputBase, cursor: "pointer" }}
                  >
                    <option value="" style={{ background: "#FFFFFF" }}>Kies een optie</option>
                    <option value="volledig-verkopen" style={{ background: "#FFFFFF" }}>Volledig verkopen</option>
                    <option value="blijven-wonen" style={{ background: "#FFFFFF" }}>Verkopen en blijven wonen</option>
                    <option value="lijfrente" style={{ background: "#FFFFFF" }}>Lijfrente</option>
                    <option value="nog-niet-zeker" style={{ background: "#FFFFFF" }}>Nog niet zeker</option>
                  </select>
                </Field>

                <button
                  type="submit"
                  className="w-full rounded-full py-4 text-base font-medium text-[#1C1610] transition-colors duration-200 mt-2"
                  style={{ background: "#C0392B" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#a93226")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#C0392B")}
                >
                  Vraag mijn eerlijk bod aan
                </button>

                <p
                  className="text-xs text-center"
                  style={{ color: "#6B5744" }}
                >
                  Uw gegevens worden vertrouwelijk behandeld en uitsluitend gebruikt voor het
                  opstellen van uw bod.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
