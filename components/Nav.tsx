"use client";

import { useState, useEffect, useRef } from "react";
import Container from "./Container";

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
      <Container className="flex items-center justify-between py-4">
        {/* Logo */}
        <a href="/" className="flex-shrink-0 font-serif text-xl text-[#1C1610] tracking-tight">
          wijkopenpanden
          <span style={{ color: "#C4A35A" }}>.</span>
          be
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {menus.map((menu) => (
            <div
              key={menu.label}
              className="relative"
              onMouseEnter={() => handleMouseEnter(menu.label)}
              onMouseLeave={handleMouseLeave}
            >
              <button className="px-3 py-2 text-sm text-[#5C4D3C] hover:text-[#1C1610] transition-colors duration-150">
                {menu.label}
              </button>
              {open === menu.label && (
                <div
                  className="absolute top-full left-0 mt-1 min-w-[220px] py-2 rounded-xl"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(28,22,16,0.08)",
                    boxShadow: "0 8px 32px rgba(28,22,16,0.10)",
                  }}
                >
                  {menu.items.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-[#5C4D3C] hover:text-[#1C1610] hover:bg-[#FAF7F2] transition-colors duration-150"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a
            href="tel:0492779475"
            className="text-sm text-[#5C4D3C] hover:text-[#1C1610] transition-colors duration-150 hidden sm:block"
          >
            0492 77 94 75
          </a>
          <a
            href="#formulier"
            className="hidden md:inline-flex px-5 py-2 rounded-full text-sm font-medium text-white bg-[#C0392B] hover:bg-[#a93226] transition-colors duration-200 ease-out"
          >
            Vraag bod aan
          </a>
          {/* Hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-11 h-11 text-[#5C4D3C] hover:text-[#1C1610] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
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
      </Container>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden"
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
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-6 py-4 text-sm text-[#5C4D3C] active:text-[#1C1610] transition-colors duration-150"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
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
            <a
              href="#formulier"
              className="block text-center px-6 py-4 rounded-full text-sm font-medium text-white bg-[#C0392B] active:bg-[#a93226] transition-colors duration-200"
              onClick={() => setMobileOpen(false)}
            >
              Vraag bod aan
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
