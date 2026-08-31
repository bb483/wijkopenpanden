"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { scrollToFormulier } from "@/components/ScrollToFormulier";

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
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        background: scrolled ? "rgba(250,247,242,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        borderBottom: scrolled ? "1px solid rgba(28,22,16,0.08)" : "1px solid transparent",
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
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
            aria-expanded={mobileOpen}
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="lg:hidden"
          style={{
            background: "#FFFFFF",
            borderTop: "1px solid rgba(28,22,16,0.08)",
            boxShadow: "0 8px 32px rgba(28,22,16,0.10)",
          }}
        >
          {menus.map((menu) => (
            <div key={menu.label} style={{ borderBottom: "1px solid rgba(28,22,16,0.06)" }}>
              <p className="px-6 py-3 text-xs text-[#C4A35A] font-medium tracking-widest uppercase">
                {menu.label}
              </p>
              {menu.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-6 py-4 text-sm text-[#5C4D3C] active:text-[#1C1610] transition-colors duration-150"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="px-6 py-6 flex flex-col gap-4">
            <a
              href="tel:0492779475"
              className="block py-3 text-sm text-[#5C4D3C] active:text-[#1C1610] transition-colors"
            >
              0492 77 94 75
            </a>
            <Link
              href="/tip-een-pand"
              className="block text-center px-6 py-4 rounded-full text-sm font-medium transition-colors duration-200"
              style={{ background: "rgba(196,163,90,0.12)", color: "#C4A35A", border: "1px solid rgba(196,163,90,0.30)" }}
              onClick={() => setMobileOpen(false)}
            >
              Tip een pand — verdien tot €5.000
            </Link>
            <Link
              href="/#formulier"
              className="block text-center px-6 py-4 rounded-full text-sm font-medium text-white bg-[#C0392B] active:bg-[#a93226] transition-colors duration-200"
              onClick={(e) => { e.preventDefault(); setMobileOpen(false); scrollToFormulier(); }}
            >
              Vraag bod aan
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
