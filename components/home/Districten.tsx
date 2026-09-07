import Link from "next/link";
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import DistrictenRaster from "@/components/DistrictenRaster";

export default function Districten() {
  return (
    <Section variant="bone" id="districten">
      <p className="text-sm text-accent font-medium tracking-widest uppercase mb-3">Werkgebied</p>
      <Heading level={2} className="mb-4 max-w-xl">
        Wij kopen in elk district van Antwerpen
      </Heading>
      <p className="text-muted text-base mb-10 max-w-2xl leading-relaxed">
        Van het vooroorlogse rijhuis in Borgerhout tot het naoorlogse gezinshuis in Merksem en het appartement aan het
        station van Berchem: elk district heeft zijn eigen pandtypes, gebreken en prijzen. Kies uw district voor de
        cijfers, de typische verkoopsituaties en onze recente dossiers daar.
      </p>
      <DistrictenRaster showOuter />
      <p className="mt-8 text-sm text-muted">
        Liever meteen een bod?{" "}
        <Link href="/huis-verkopen-antwerpen" className="text-ink underline underline-offset-4 hover:text-accent transition-colors">
          Lees hoe een verkoop in Antwerpen bij ons verloopt
        </Link>
        .
      </p>
    </Section>
  );
}
