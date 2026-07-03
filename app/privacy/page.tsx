import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import Prose from "@/components/Prose";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description:
    "Lees hoe wijkopenpanden.be omgaat met uw persoonsgegevens: welke gegevens wij verzamelen via onze formulieren, waarvoor wij ze gebruiken en wat uw rechten zijn.",
  alternates: { canonical: "https://wijkopenpanden.be/privacy" },
  openGraph: {
    title: "Privacyverklaring | wijkopenpanden.be",
    description:
      "Lees hoe wijkopenpanden.be omgaat met uw persoonsgegevens: welke gegevens wij verzamelen, waarvoor wij ze gebruiken en wat uw rechten zijn.",
    url: "https://wijkopenpanden.be/privacy",
    siteName: "wijkopenpanden.be",
    locale: "nl_BE",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Section hero>
          <nav className="text-xs text-muted mb-6">
            <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span>Privacyverklaring</span>
          </nav>
          <Heading level={1} className="max-w-2xl mb-6">Privacyverklaring</Heading>
          <p className="text-muted text-sm max-w-2xl">
            Laatst bijgewerkt op 3 juli 2026. Deze verklaring legt uit welke persoonsgegevens
            wijkopenpanden.be verzamelt, waarvoor wij ze gebruiken en welke rechten u heeft.
          </p>
        </Section>

        <Section variant="white">
          <div className="max-w-3xl">
            <Prose className="text-muted">
              <h2>Wie is verantwoordelijk voor uw gegevens?</h2>
              <p>
                wijkopenpanden.be wordt uitgebaat door Berabrick, actief in Antwerpen (België).
                Voor alle vragen over uw persoonsgegevens kunt u ons bereiken via{" "}
                <a href="mailto:bb@berabrick.be">bb@berabrick.be</a> of telefonisch op{" "}
                <a href="tel:0492779475">0492 77 94 75</a>.
              </p>

              <h2>Welke gegevens verzamelen wij?</h2>
              <p>
                Wij verzamelen uitsluitend de gegevens die u zelf invult in onze formulieren:
              </p>
              <ul>
                <li>
                  <strong>Bod aanvragen:</strong> uw naam, telefoonnummer, het adres van het pand
                  en de informatie die u over het pand meegeeft (type, staat, verkoopintentie).
                </li>
                <li>
                  <strong>Tip een pand:</strong> uw naam, telefoonnummer, e-mailadres, het adres
                  van het getipte pand en uw eventuele toelichting.
                </li>
              </ul>
              <p>
                Deze website gebruikt geen advertentiecookies en geen trackingscripts van derden.
              </p>

              <h2>Waarvoor gebruiken wij uw gegevens?</h2>
              <p>
                Wij gebruiken uw gegevens uitsluitend om contact met u op te nemen over uw aanvraag
                of tip, om een bezichtiging in te plannen en om u een bod of tipvergoeding te kunnen
                bezorgen. De rechtsgrond is de uitvoering van (precontractuele) maatregelen op uw
                verzoek. Wij verkopen of verhuren uw gegevens nooit aan derden en gebruiken ze niet
                voor ongevraagde marketing.
              </p>

              <h2>Wie verwerkt uw gegevens?</h2>
              <p>
                De formulieren op deze website worden technisch verwerkt door Web3Forms, dat de
                inhoud van uw inzending per e-mail aan ons bezorgt. De website wordt gehost bij
                Vercel. Met deze dienstverleners gelden de gangbare verwerkersvoorwaarden.
              </p>

              <h2>Hoe lang bewaren wij uw gegevens?</h2>
              <p>
                Wij bewaren uw gegevens zolang dat nodig is om uw aanvraag op te volgen. Leidt uw
                aanvraag niet tot een aankoop of tipvergoeding, dan verwijderen wij uw gegevens
                uiterlijk 24 maanden na het laatste contact. Bij een effectieve aankoop gelden de
                wettelijke bewaartermijnen voor vastgoed- en boekhouddossiers.
              </p>

              <h2>Wat zijn uw rechten?</h2>
              <p>
                U heeft het recht op inzage, verbetering en verwijdering van uw gegevens, en het
                recht om bezwaar te maken tegen de verwerking of om de verwerking te laten beperken.
                Stuur daarvoor een e-mail naar <a href="mailto:bb@berabrick.be">bb@berabrick.be</a>.
                Wij reageren binnen 30 dagen. Bent u niet tevreden met onze reactie, dan kunt u een
                klacht indienen bij de Gegevensbeschermingsautoriteit
                (gegevensbeschermingsautoriteit.be).
              </p>

              <h2>Wijzigingen</h2>
              <p>
                Wij kunnen deze privacyverklaring aanpassen wanneer onze werking of de wetgeving dat
                vraagt. De meest recente versie vindt u altijd op deze pagina.
              </p>
            </Prose>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
