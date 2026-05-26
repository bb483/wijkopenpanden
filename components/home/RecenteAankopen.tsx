import Section from "@/components/Section";
import Heading from "@/components/Heading";
import FadeIn from "@/components/FadeIn";

const aankopen = [
  {
    wijk: "Berchem",
    situatie: "Erfenis — rijwoning, lichte renovatie",
    doorlooptijd: "18 dagen",
    detail: "Drie erfgenamen, woning stond leeg. Akte ondertekend 18 dagen na eerste contact.",
  },
  {
    wijk: "Deurne",
    situatie: "Scheiding — appartement, instapklaar",
    doorlooptijd: "12 dagen",
    detail: "Beide partijen wensten een snelle en neutrale afhandeling.",
  },
  {
    wijk: "Hoboken",
    situatie: "Opknapper — open woning, zware renovatie",
    doorlooptijd: "24 dagen",
    detail: "Eigenaar wilde niet investeren. Wij kochten in staat van bevinding.",
  },
  {
    wijk: "Merksem",
    situatie: "Blijven wonen — halfopen woning, senioreigenaars",
    doorlooptijd: "21 dagen",
    detail: "Eigenaar verkoopt, sluit huurcontract en blijft wonen. Kapitaal beschikbaar.",
  },
];

export default function RecenteAankopen() {
  return (
    <Section variant="bone" id="recente-aankopen">
      <FadeIn>
        <p className="text-sm text-accent font-medium tracking-widest uppercase mb-3">
          Referenties
        </p>
        <Heading level={2} className="mb-4 max-w-xl">
          Recente aankopen
        </Heading>
        <p className="text-muted text-base mb-12 max-w-2xl leading-relaxed">
          Concrete voorbeelden uit de Antwerpse regio. Namen en adressen worden
          niet vermeld — discretie is onze standaard.
        </p>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {aankopen.map((item, i) => (
          <FadeIn key={item.wijk + item.situatie} delay={i * 0.08}>
            <div className="bg-white p-7 flex flex-col gap-4 border border-ink/6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-serif text-lg text-ink">{item.wijk}</p>
                  <p className="text-sm text-muted">{item.situatie}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-xs text-accent font-medium tracking-wide uppercase">Doorlooptijd</p>
                  <p className="font-serif text-xl text-ink">{item.doorlooptijd}</p>
                </div>
              </div>
              <p className="text-sm text-muted leading-relaxed border-t border-ink/6 pt-4">
                {item.detail}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
