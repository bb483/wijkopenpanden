import Container from "@/components/Container";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Prose from "@/components/Prose";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function StyleguidePage() {
  return (
    <>
      <Nav />
      <main className="flex-1">

        {/* Kleuren */}
        <Section>
          <Container>
            <Heading level={2} className="mb-8">Kleuren</Heading>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { name: "bone", hex: "#F5F2ED", bg: "bg-bone", dark: false },
                { name: "ink", hex: "#1A1A1A", bg: "bg-ink", dark: true },
                { name: "accent", hex: "#B8633A", bg: "bg-accent", dark: true },
                { name: "navy", hex: "#1E2A3A", bg: "bg-navy", dark: true },
                { name: "muted", hex: "#8A8A85", bg: "bg-muted", dark: true },
              ].map((color) => (
                <div key={color.name}>
                  <div className={`${color.bg} h-20 w-full mb-2`} />
                  <p className="text-sm font-medium text-ink">{color.name}</p>
                  <p className="text-xs text-muted">{color.hex}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Typografie */}
        <Section variant="white">
          <Container>
            <Heading level={2} className="mb-8">Typografie</Heading>
            <div className="space-y-8">
              <div>
                <p className="text-xs text-muted mb-2 uppercase tracking-widest">Heading 1 — Fraunces</p>
                <Heading level={1}>Vastgoed opkoper Antwerpen</Heading>
              </div>
              <div>
                <p className="text-xs text-muted mb-2 uppercase tracking-widest">Heading 2 — Fraunces</p>
                <Heading level={2}>Wij kopen uw woning aan</Heading>
              </div>
              <div>
                <p className="text-xs text-muted mb-2 uppercase tracking-widest">Heading 3 — Fraunces</p>
                <Heading level={3}>Snel, discreet en eerlijk</Heading>
              </div>
              <div>
                <p className="text-xs text-muted mb-2 uppercase tracking-widest">Body — Inter</p>
                <Prose>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                  </p>
                </Prose>
              </div>
              <div>
                <p className="text-xs text-muted mb-2 uppercase tracking-widest">Muted tekst</p>
                <p className="text-muted text-sm">Ondersteunende informatie, disclaimers, metadata</p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Buttons */}
        <Section>
          <Container>
            <Heading level={2} className="mb-8">Buttons</Heading>
            <div className="space-y-6">
              <div>
                <p className="text-xs text-muted mb-3 uppercase tracking-widest">Primary</p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Vraag bod aan</Button>
                  <Button variant="primary">Meer informatie</Button>
                </div>
              </div>
              <div>
                <p className="text-xs text-muted mb-3 uppercase tracking-widest">Secondary</p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="secondary">Lees meer</Button>
                  <Button variant="secondary">Bekijk cases</Button>
                </div>
              </div>
              <div className="bg-ink p-8 -mx-6 md:-mx-8 lg:-mx-12 px-6 md:px-8 lg:px-12">
                <p className="text-xs text-muted mb-3 uppercase tracking-widest">Op donkere achtergrond</p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="secondary" className="border-bone text-bone hover:bg-bone hover:text-ink">
                    Lees meer
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Sections */}
        <div>
          <p className="text-xs text-muted uppercase tracking-widest text-center py-4">Section varianten</p>
          <Section variant="bone">
            <Heading level={3}>Section — bone (standaard)</Heading>
            <Prose><p className="mt-2">Achtergrond: #F5F2ED — warm off-white, hoofdachtergrond</p></Prose>
          </Section>
          <Section variant="white">
            <Heading level={3}>Section — white</Heading>
            <Prose><p className="mt-2">Achtergrond: #ffffff — puur wit voor afwisseling</p></Prose>
          </Section>
          <Section variant="ink">
            <Heading level={3} className="text-bone">Section — ink</Heading>
            <Prose className="text-bone/70"><p className="mt-2">Achtergrond: #1A1A1A — diep antraciet</p></Prose>
          </Section>
        </div>

        {/* Nav preview */}
        <Section variant="white">
          <Container>
            <Heading level={2} className="mb-8">Navigatie</Heading>
            <p className="text-sm text-muted mb-6">De nav staat bovenaan deze pagina. Logo links, telefoonnummer + CTA rechts.</p>
            <div className="border border-ink/10">
              <Nav />
            </div>
          </Container>
        </Section>

        {/* Footer preview */}
        <Section>
          <Container>
            <Heading level={2} className="mb-8">Footer</Heading>
            <p className="text-sm text-muted mb-6">KBO, contact, privacy-link.</p>
            <div className="border border-ink/10">
              <Footer />
            </div>
          </Container>
        </Section>

      </main>
      <Footer />
    </>
  );
}
