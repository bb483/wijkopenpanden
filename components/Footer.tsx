import Container from "./Container";

const columns = [
  {
    title: "Vastgoedtype",
    links: [
      { label: "Rijhuis verkopen", href: "/rijhuis-verkopen-antwerpen" },
      { label: "Appartement verkopen", href: "/appartement-verkopen-antwerpen" },
      { label: "Herenhuis verkopen", href: "/herenhuis-verkopen-antwerpen" },
      { label: "Villa verkopen", href: "/villa-verkopen-antwerpen" },
      { label: "Opbrengsteigendom", href: "/opbrengsteigendom-verkopen-antwerpen" },
    ],
  },
  {
    title: "Situatie",
    links: [
      { label: "Bij erfenis", href: "/huis-verkopen-bij-erfenis" },
      { label: "Bij scheiding", href: "/huis-verkopen-bij-scheiding" },
      { label: "Opknapper", href: "/opknappand-verkopen" },
      { label: "Met huurders", href: "/pand-met-huurders-verkopen" },
      { label: "Zonder makelaar", href: "/verkopen-zonder-makelaar" },
    ],
  },
  {
    title: "Regio",
    links: [
      { label: "Alle regio's", href: "/regios" },
      { label: "Borgerhout", href: "/regios/borgerhout" },
      { label: "Deurne", href: "/regios/deurne" },
      { label: "Berchem", href: "/regios/berchem" },
      { label: "Mortsel", href: "/regios/mortsel" },
      { label: "Wilrijk", href: "/regios/wilrijk" },
    ],
  },
  {
    title: "Informatie",
    links: [
      { label: "Kennisbank", href: "/kennisbank" },
      { label: "Hoe wij werken", href: "/hoe-wij-werken" },
      { label: "Blijven wonen", href: "/blijven-wonen" },
      { label: "Lijfrente", href: "/lijfrente-antwerpen" },
      { label: "Over ons", href: "/over" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto" style={{ background: "#1C1610" }}>
      {/* Brand + contact row */}
      <div className="py-10" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <a href="/" className="font-serif font-bold text-2xl text-white tracking-tight">
                wijkopenpanden
                <span style={{ color: "#C4A35A" }}>.</span>
                be
              </a>
              <p className="mt-2 text-sm max-w-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                Direct een eerlijk bod op uw woning — zonder makelaar, volledig ontzorgd.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:0492779475" className="px-5 py-2.5 rounded-full text-sm text-white/50 hover:text-white transition-colors duration-150 border border-white/15">
                0492 77 94 75
              </a>
              <a href="tel:0492277076" className="px-5 py-2.5 rounded-full text-sm text-white/50 hover:text-white transition-colors duration-150 border border-white/15">
                0492 27 70 76
              </a>
              <a href="mailto:info@wijkopenpanden.be" className="px-5 py-2.5 rounded-full text-sm text-white/50 hover:text-white transition-colors duration-150 border border-white/15">
                info@wijkopenpanden.be
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Sitemap columns */}
      <div className="py-12" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-xs sm:text-sm text-[#C4A35A] font-semibold tracking-widest uppercase mb-4">
                  {col.title}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className="text-sm sm:text-base text-white/50 hover:text-white transition-colors duration-150">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Bottom bar */}
      <Container className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 py-5 text-xs text-white/30">
        <span>
          &copy; {new Date().getFullYear()} wijkopenpanden.be — KBO: BE 0000.000.000 — Antwerpen, België
        </span>
        <div className="flex gap-4">
          <a href="/privacy" className="hover:text-white transition-colors duration-150">
            Privacybeleid
          </a>
          <a href="/contact" className="hover:text-white transition-colors duration-150">
            Contact
          </a>
        </div>
      </Container>
    </footer>
  );
}
