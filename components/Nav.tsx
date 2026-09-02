"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { scrollToFormulier } from "@/components/ScrollToFormulier";
import { getLenisInstance } from "@/components/lenisInstance";

const menus = [
  {
    label: "Vastgoedtype",
    items: [
      { label: "Rijhuis", href: "/rijhuis-verkopen-antwerpen" },
      { label: "Appartement", href: "/appartement-verkopen-antwerpen" },
      { label: "Herenhuis", href: "/herenhuis-verkopen-antwerpen" },
      { label: "Villa", href: "/villa-verkopen-antwerpen" },
      { label: "Opbrengsteigendom", href: "/opbrengsteigendom-verkopen-antwerpen" },
      { label: "Bouwgrond", href: "/bouwgrond-verkopen-antwerpen" },
      { label: "Garagebox", href: "/garagebox-verkopen-antwerpen" },
      { label: "Magazijn of kantoor", href: "/magazijn-kantoor-verkopen-antwerpen" },
      { label: "Handelspand", href: "/handelspand-snel-verkopen" },
      { label: "Hoeve of boerderij", href: "/hoeve-boerderij-snel-verkopen" },
    ],
  },
  {
    label: "Snel verkopen",
    items: [
      { label: "Huis snel verkopen", href: "/huis-snel-verkopen" },
      { label: "Rijhuis snel verkopen", href: "/rijhuis-snel-verkopen" },
      { label: "Appartement snel verkopen", href: "/appartement-snel-verkopen" },
      { label: "Herenhuis snel verkopen", href: "/herenhuis-snel-verkopen" },
      { label: "Villa snel verkopen", href: "/villa-snel-verkopen" },
      { label: "Opbrengsteigendom snel verkopen", href: "/opbrengsteigendom-snel-verkopen" },
      { label: "Handelspand snel verkopen", href: "/handelspand-snel-verkopen" },
      { label: "Magazijn of kantoor snel verkopen", href: "/magazijn-kantoor-snel-verkopen" },
      { label: "Bouwgrond snel verkopen", href: "/bouwgrond-snel-verkopen" },
      { label: "Garagebox snel verkopen", href: "/garagebox-snel-verkopen" },
      { label: "Hoeve of boerderij snel verkopen", href: "/hoeve-boerderij-snel-verkopen" },
      { label: "Elk ander pand", href: "/pand-snel-verkopen" },
    ],
  },
  {
    label: "Situatie",
    items: [
      { label: "Erfenis", href: "/huis-verkopen-bij-erfenis" },
      { label: "Scheiding", href: "/huis-verkopen-bij-scheiding" },
      { label: "Opknapper", href: "/opknappand-verkopen" },
      { label: "Met huurders", href: "/pand-met-huurders-verkopen" },
      { label: "Zonder makelaar", href: "/verkopen-zonder-makelaar" },
      { label: "Schatting pand", href: "/schatting-pand" },
      { label: "Vastgoedopkoper", href: "/vastgoedopkoper-antwerpen" },
    ],
  },
  {
    label: "Regio",
    items: [
      { label: "Alle regio's", href: "/regios" },
      { label: "Borgerhout", href: "/regios/borgerhout" },
      { label: "Deurne", href: "/regios/deurne" },
      { label: "Berchem", href: "/regios/berchem" },
      { label: "Mortsel", href: "/regios/mortsel" },
      { label: "Wilrijk", href: "/regios/wilrijk" },
    ],
  },
  {
    label: "Kennisbank",
    items: [
      { label: "Alle artikels", href: "/kennisbank" },
      { label: "Makelaarsloon in België", href: "/kennisbank/commissie-makelaar-belgie" },
      { label: "Keuringen bij verkoop", href: "/kennisbank/keuringen-bij-verkoop-woning" },
      { label: "Notariskosten uitgelegd", href: "/kennisbank/notariskosten-woning-verkoop" },
      { label: "Oud of te renoveren pand verkopen", href: "/kennisbank/oud-gebouw-te-renoveren-pand-verkopen" },
    ],
  },
];

export default function Nav() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Sluit het menu een link af, dan navigeren we weg en mag de oude
  // scrollpositie níét hersteld worden — de nieuwe pagina start bovenaan.
  const navigatingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Terug/vooruit in de browser sluit het open menu ook.
  useEffect(() => {
    const onPopState = () => {
      navigatingRef.current = true;
      setMobileOpen(false);
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  // Zolang het menu open staat mag de pagina eronder niet meescrollen. Alleen
  // overflow:hidden op body is op iOS Safari onbetrouwbaar, vandaar de
  // position:fixed-techniek met herstel van de scrollpositie. Lenis (actief
  // vanaf 768 px) wordt gepauzeerd en daarna weer op de echte positie gezet.
  useEffect(() => {
    if (!mobileOpen) return;

    const lenis = getLenisInstance();
    lenis?.stop();

    const scrollY = window.scrollY;
    const { style } = document.body;
    const prev = { position: style.position, top: style.top, left: style.left, right: style.right, width: style.width };
    style.position = "fixed";
    style.top = `-${scrollY}px`;
    style.left = "0";
    style.right = "0";
    style.width = "100%";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      style.position = prev.position;
      style.top = prev.top;
      style.left = prev.left;
      style.right = prev.right;
      style.width = prev.width;
      // Alleen terugzetten wanneer we op dezelfde pagina blijven; na een
      // navigatie via een menulink hoort de nieuwe pagina bovenaan te starten.
      const staying = !navigatingRef.current;
      navigatingRef.current = false;
      if (staying) window.scrollTo(0, scrollY);
      lenis?.start();
      lenis?.scrollTo(window.scrollY, { immediate: true, force: true });
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(null), 120);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-out"
      style={{
        background: mobileOpen ? "#FAF7F2" : scrolled ? "rgba(250,247,242,0.92)" : "transparent",
        backdropFilter: scrolled && !mobileOpen ? "blur(20px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled && !mobileOpen ? "blur(20px) saturate(180%)" : "none",
        borderBottom: scrolled || mobileOpen ? "1px solid rgba(28,22,16,0.08)" : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center gap-6 px-6 md:px-8 lg:px-10 2xl:gap-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex-shrink-0 whitespace-nowrap font-serif font-bold text-xl text-[#1C1610] tracking-tight leading-none"
        >
          wijkopenpanden
          <span style={{ color: "#C4A35A" }}>.</span>
          be
        </Link>

        {/* Desktop nav */}
        <nav className="hidden h-full flex-1 items-center justify-center gap-1.5 lg:flex 2xl:gap-2">
          {menus.map((menu) => (
            <div
              key={menu.label}
              className="relative flex h-full items-center"
              onMouseEnter={() => handleMouseEnter(menu.label)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="inline-flex h-10 items-center whitespace-nowrap rounded-full border px-3.5 text-[13px] font-medium leading-none transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4A35A] 2xl:px-4 2xl:text-sm"
                style={
                  open === menu.label
                    ? { background: "rgba(196,163,90,0.12)", borderColor: "rgba(196,163,90,0.30)", color: "#1C1610" }
                    : { background: "transparent", borderColor: "rgba(28,22,16,0.10)", color: "#5C4D3C" }
                }
                aria-haspopup="true"
                aria-expanded={open === menu.label}
                onClick={() => setOpen(open === menu.label ? null : menu.label)}
                onFocus={() => handleMouseEnter(menu.label)}
              >
                {menu.label}
              </button>
              {open === menu.label && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 min-w-[240px] py-2 rounded-xl"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(28,22,16,0.08)",
                    boxShadow: "0 8px 32px rgba(28,22,16,0.10)",
                  }}
                >
                  {menu.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-[#5C4D3C] hover:text-[#1C1610] hover:bg-[#FAF7F2] transition-colors duration-150"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right side */}
        <div className="ml-auto flex flex-shrink-0 items-center gap-1.5 lg:ml-0 2xl:gap-2">
          <a
            href="tel:0492779475"
            className="hidden h-10 items-center whitespace-nowrap px-2 text-[13px] leading-none text-[#5C4D3C] hover:text-[#1C1610] transition-colors duration-150 min-[1300px]:inline-flex 2xl:text-sm"
          >
            0492 77 94 75
          </a>
          <Link
            href="/tip-een-pand"
            className="hidden h-10 items-center whitespace-nowrap rounded-full border px-3.5 text-[13px] font-medium leading-none transition-colors duration-200 ease-out min-[1300px]:inline-flex 2xl:px-4 2xl:text-sm"
            style={{ background: "rgba(196,163,90,0.12)", color: "#C4A35A", borderColor: "rgba(196,163,90,0.30)" }}
          >
            Tip &amp; verdien €5.000
          </Link>
          <Link
            href="/tip-een-pand"
            className="inline-flex h-9 items-center whitespace-nowrap rounded-full border px-3 text-xs font-medium leading-none lg:hidden"
            style={{ background: "rgba(196,163,90,0.12)", color: "#C4A35A", borderColor: "rgba(196,163,90,0.30)" }}
          >
            Tip &amp; verdien
          </Link>
          <Link
            href="/#formulier"
            className="hidden h-10 items-center whitespace-nowrap rounded-full border border-[#C0392B] px-3.5 text-[13px] font-medium leading-none text-white bg-[#C0392B] hover:bg-[#a93226] hover:border-[#a93226] transition-colors duration-200 ease-out lg:inline-flex 2xl:px-4 2xl:text-sm"
            onClick={(e) => { e.preventDefault(); scrollToFormulier(); }}
          >
            Vraag bod aan
          </Link>
          {/* Hamburger */}
          <button
            className="lg:hidden -mr-2 flex items-center justify-center w-11 h-11 text-[#5C4D3C] hover:text-[#1C1610] transition-colors"
            onClick={() => {
              if (mobileOpen) setMobileSection(null);
              setMobileOpen(!mobileOpen);
            }}
            aria-label={mobileOpen ? "Menu sluiten" : "Menu openen"}
            aria-expanded={mobileOpen}
            aria-controls="mobiel-menu"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {mobileOpen ? (
                <path
                  d="M4 4l14 14M18 4L4 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              ) : (
                <>
                  <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu — vaste hoogte onder de header, eigen scrollgebied */}
      <div
        id="mobiel-menu"
        className={`fixed inset-x-0 top-20 bottom-0 z-40 flex flex-col lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!mobileOpen}
        style={{
          background: "#FFFFFF",
          borderTop: "1px solid rgba(28,22,16,0.08)",
          visibility: mobileOpen ? "visible" : "hidden",
          transition: "opacity 200ms ease-out, visibility 200ms",
        }}
      >
        {/* Scrollbaar deel */}
        <nav
          className="flex-1 overflow-y-auto overscroll-contain"
          data-lenis-prevent
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {menus.map((menu) => {
            const expanded = mobileSection === menu.label;
            return (
              <div key={menu.label} style={{ borderBottom: "1px solid rgba(28,22,16,0.06)" }}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                  aria-expanded={expanded}
                  onClick={(e) => {
                    setMobileSection(expanded ? null : menu.label);
                    if (expanded) return;
                    // Schuif de geopende sectie naar boven, zodat de items
                    // meteen in beeld komen in plaats van onder de vouw.
                    const section = e.currentTarget.parentElement;
                    const panel = section?.parentElement;
                    if (!section || !panel) return;
                    requestAnimationFrame(() => {
                      const delta = section.getBoundingClientRect().top - panel.getBoundingClientRect().top;
                      panel.scrollTo({ top: panel.scrollTop + delta, behavior: "smooth" });
                    });
                  }}
                >
                  <span
                    className="text-[15px] font-medium"
                    style={{ color: expanded ? "#C4A35A" : "#1C1610" }}
                  >
                    {menu.label}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="flex-shrink-0 transition-transform duration-200 ease-out"
                    style={{
                      transform: expanded ? "rotate(180deg)" : "none",
                      color: expanded ? "#C4A35A" : "#8A7862",
                    }}
                  >
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: expanded ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="pb-2">
                      {menu.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          tabIndex={expanded ? undefined : -1}
                          className="block py-3 pl-8 pr-6 text-sm text-[#5C4D3C] active:bg-[#FAF7F2] active:text-[#1C1610] transition-colors duration-150"
                          onClick={() => {
                            navigatingRef.current = true;
                            setMobileOpen(false);
                          }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <a
            href="tel:0492779475"
            className="flex items-center gap-2.5 px-6 py-4 text-[15px] font-medium text-[#1C1610] active:bg-[#FAF7F2] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: "#C4A35A" }}>
              <path
                d="M5.2 2.5 6.6 5.1 5.4 6.4a7.4 7.4 0 0 0 4.2 4.2l1.3-1.2 2.6 1.4v2.1c0 .6-.5 1.1-1.1 1A11.3 11.3 0 0 1 2.1 3.6c-.1-.6.4-1.1 1-1.1h2.1Z"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
            </svg>
            0492 77 94 75
          </a>
        </nav>

        {/* Vaste CTA-voet: altijd bereikbaar, hoe lang de lijst ook is */}
        <div
          className="flex flex-col gap-2.5 px-6 pt-4 [&>*]:mx-auto [&>*]:w-full [&>*]:max-w-[420px]"
          style={{
            borderTop: "1px solid rgba(28,22,16,0.08)",
            background: "#FAF7F2",
            paddingBottom: "calc(1rem + env(safe-area-inset-bottom))",
          }}
        >
          <Link
            href="/#formulier"
            className="block rounded-full px-6 py-3.5 text-center text-sm font-medium text-white bg-[#C0392B] active:bg-[#a93226] transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault();
              setMobileOpen(false);
              // Pas scrollen nadat de body-lock is opgeheven, anders zet het
              // herstel van de scrollpositie de sprong naar het formulier terug.
              requestAnimationFrame(() => requestAnimationFrame(() => scrollToFormulier()));
            }}
          >
            Vraag bod aan
          </Link>
          <Link
            href="/tip-een-pand"
            className="block rounded-full px-6 py-3.5 text-center text-sm font-medium transition-colors duration-200"
            style={{ background: "rgba(196,163,90,0.12)", color: "#C4A35A", border: "1px solid rgba(196,163,90,0.30)" }}
            onClick={() => {
              navigatingRef.current = true;
              setMobileOpen(false);
            }}
          >
            Tip een pand — verdien tot €5.000
          </Link>
        </div>
      </div>
    </header>
  );
}
