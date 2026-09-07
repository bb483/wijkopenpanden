import Link from "next/link";
import { cityDistricts, outerRegions } from "@/content/lookup";

/**
 * Raster met de Antwerpse districten (en optioneel de randgemeenten).
 * Wordt gebruikt op de homepage, de pijlerpagina's, de regiohub en onder
 * elk kennisbankartikel als "ligt uw pand in Antwerpen?"-blok.
 */
export default function DistrictenRaster({
  showOuter = false,
  compact = false,
  current,
}: {
  showOuter?: boolean;
  compact?: boolean;
  current?: string;
}) {
  const districts = cityDistricts();
  const outer = outerRegions();
  const linkClass = compact
    ? "border border-ink/10 px-3 py-2 text-sm text-ink hover:border-accent hover:text-accent transition-colors"
    : "border border-ink/10 px-4 py-3 text-sm text-ink hover:border-accent hover:text-accent transition-colors font-medium";

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {districts.map((r) => (
          <Link
            key={r.slug}
            href={`/regios/${r.slug}`}
            aria-current={current === r.slug ? "page" : undefined}
            className={`${linkClass} ${current === r.slug ? "border-accent text-accent" : ""}`}
          >
            {r.name}
          </Link>
        ))}
      </div>
      {showOuter && outer.length > 0 && (
        <div className="mt-6">
          <p className="text-xs text-muted font-medium tracking-widest uppercase mb-3">Ook in de rand van Antwerpen</p>
          <div className="flex flex-wrap gap-2">
            {outer.map((r) => (
              <Link
                key={r.slug}
                href={`/regios/${r.slug}`}
                className="border border-ink/10 px-3 py-1.5 text-xs text-muted hover:border-accent hover:text-accent transition-colors"
              >
                {r.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
