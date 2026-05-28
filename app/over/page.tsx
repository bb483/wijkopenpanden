import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import Prose from "@/components/Prose";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import StickyCtaButton from "@/components/StickyCtaButton";

export const metadata: Metadata = {
  title: "Over ons — wijkopenpanden.be",
  description:
    "wijkopenpanden.be is een lokale Antwerpse vastgoedkoper met jarenlange ervaring. Familie-onderneming, geen aandeelhouders, geen bank. Transparant, eerlijk en snel.",
  alternates: { canonical: "https://wijkopenpanden.be/over" },
  openGraph: {
    title: "Over ons — wijkopenpanden.be",
    description:
      "wijkopenpanden.be is een lokale Antwerpse vastgoedkoper met jarenlange ervaring. Familie-onderneming, geen aandeelhouders, geen bank. Transparant, eerlijk en snel.",
    url: "https://wijkopenpanden.be/over",
    siteName: "wijkopenpanden.be",
    locale: "nl_BE",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const values = [
  {
    title: "Eerlijkheid",
    body: "Wij leggen u uit hoe wij tot ons bod komen. Als een pand minder waard is dan u verwacht, zeggen wij u waarom — met concrete cijfers en een uitleg over de renovatiekost. Wij geven geen vage afwijzingen en vragen geen extra kortingen na het bod.",
  },
  {
    title: "Snelheid",
    body: "Tijd is waardevol. Wij reageren binnen 2 uur op uw aanvraag, bezoeken het pand binnen 48 uur en bezorgen u een schriftelijk bod dezelfde dag. Van akkoord tot akte duurt gemiddeld 2 tot 3 maanden. Dringende dossiers behandelen wij met voorrang.",
  },
  {
    title: "Ontzorging",
    body: "U hoeft geen keuringen te laten uitvoeren, geen attesten samen te stellen, geen syndicus te contacteren en geen makelaar te zoeken. Wij regelen alles wat nodig is voor de overdracht. U tekent de akte en ontvangt de verkoopprijs.",
  },
];

export default function Page() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* Hero */}
        <Section hero>
          <nav className="text-xs text-muted mb-6">
            <a href="/" className="hover:text-ink transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span>Over ons</span>
          </nav>
          <FadeIn>
            <Heading level={1} className="max-w-2xl mb-6">Over wijkopenpanden.be</Heading>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Prose className="text-muted mb-8 max-w-2xl">
              <p>
                Wij zijn een lokale vastgoedkoper gevestigd in de Antwerpse regio. Geen fonds, geen
                aandeelhouders, geen bank die ons dwingt tot bepaalde marges. Wij kopen woningen en panden
                rechtstreeks aan met eigen middelen en nemen de volledige renovatie en doorverkoop voor
                eigen rekening.
              </p>
            </Prose>
          </FadeIn>
        </Section>

        {/* Wie wij zijn */}
        <Section variant="white">
          <div className="grid md:grid-cols-2 gap-16 max-w-4xl items-start">
            <FadeIn>
              <div>
                <Heading level={2} className="mb-6">Een familiebedrijf in Antwerpen</Heading>
                <Prose className="text-muted">
                  <p className="mb-4">
                    wijkopenpanden.be is een familiale onderneming die geworteld is in de Antwerpse
                    vastgoedmarkt. Wij kennen de wijken, de typische bouwtypes en de specifieke
                    uitdagingen van de lokale markt — van een rijhuis in het Seefhoek tot een herenhuis
                    in Zurenborg of een villa in Brasschaat.
                  </p>
                  <p>
                    Die lokale kennis laat ons toe om sneller en nauwkeuriger te werken dan investeerders
                    die van op afstand opereren. Wij weten wat een renovatie kost, welke aannemers betrouwbaar
                    zijn en wat een correct bod is voor elk type pand in elke wijk.
                  </p>
                </Prose>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div>
                <Heading level={2} className="mb-6">Jarenlange ervaring in vastgoed</Heading>
                <Prose className="text-muted">
                  <p className="mb-4">
                    Achter wijkopenpanden.be gaat jarenlange praktijkervaring schuil in aan- en verkoop van
                    vastgoed, renovatie en verhuur in de Antwerpse regio. Wij hebben in die tijd honderden
                    dossiers behandeld: erfenissen, scheidingen, opknappers, verhuurde panden en urgente
                    verkopen.
                  </p>
                  <p>
                    Die ervaring geeft u als verkoper een voordeel: wij weten wat wij doen, wij kennen
                    de valkuilen en wij begeleiden u door het proces zonder verrassingen.
                  </p>
                </Prose>
              </div>
            </FadeIn>
          </div>
        </Section>

        {/* Missie */}
        <Section variant="bone">
          <div className="max-w-3xl">
            <p className="text-xs text-accent font-medium tracking-widest uppercase mb-4">Onze missie</p>
            <Heading level={2} className="mb-8">Transparant, eerlijk en snel</Heading>
            <Prose className="text-muted">
              <p className="mb-4">
                De klassieke vastgoedmarkt is niet voor iedereen de juiste keuze. Wie snel moet verkopen,
                een woning heeft in slechte staat, te maken heeft met een erfenis of een scheiding, of
                simpelweg geen makelaar wil — die persoon heeft nood aan een andere aanpak.
              </p>
              <p>
                Wij bieden die aanpak. Geen opendeurdag, geen maanden wachten, geen commissie en geen
                onzekerheid over de uiteindelijke prijs. Wij doen u een eerlijk bod, leggen u de redenering
                uit en laten u beslissen.
              </p>
            </Prose>
          </div>
        </Section>

        {/* Waarden */}
        <Section variant="white">
          <Heading level={2} className="mb-12">Onze waarden</Heading>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
            {values.map((value, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="border-t-2 border-accent pt-6">
                  <h3 className="font-serif text-xl text-ink mb-3">{value.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{value.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Section>

        {/* Geen aandeelhouders */}
        <Section variant="bone">
          <div className="max-w-3xl">
            <div className="border-l-2 border-accent pl-6">
              <p className="text-xs text-accent font-medium tracking-widest uppercase mb-2">Geen externe druk</p>
              <p className="text-base text-ink leading-relaxed">
                Wij hoeven geen aandeelhouders tevreden te stellen en geen bankmarges te verdedigen. Dat
                betekent dat wij flexibel kunnen werken: wij beslissen snel, wij kunnen ongebruikelijke
                dossiers behandelen en wij kunnen een dossier afwijzen als het niet past — zonder druk van
                bovenaf. Dat geeft u als verkoper een eerlijker gesprekspartner.
              </p>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section variant="white" id="formulier">
          <div className="max-w-xl">
            <Heading level={2} className="mb-4">Interesse in een vrijblijvend bod?</Heading>
            <p className="text-muted text-sm mb-6">
              Reactie binnen 2 uur. Geen verplichtingen, geen commissie.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/#formulier" variant="primary" className="px-8 py-4 text-base">Vraag een bod aan</Button>
              <Button href="/contact" variant="secondary" className="px-8 py-4 text-base">Neem contact op</Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
      <StickyCtaButton />
    </>
  );
}
