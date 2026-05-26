import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import Button from "@/components/Button";

export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Section hero>
          <p className="text-sm text-accent font-medium tracking-widest uppercase mb-4">Binnenkort beschikbaar</p>
          <Heading level={1} className="mb-6 max-w-xl">{title}</Heading>
          <p className="text-muted text-base mb-8 max-w-lg leading-relaxed">
            Deze pagina wordt binnenkort aangevuld met volledige informatie.
            Heeft u een vraag? Neem dan direct contact op.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="/#formulier" variant="primary">Vraag een bod aan</Button>
            <Button href="/" variant="secondary">Terug naar de homepage</Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
