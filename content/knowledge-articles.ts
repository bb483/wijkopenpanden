import type { Article } from "./types";

export const articles: Article[] = [
  {
    slug: "commissie-makelaar-belgie",
    title: "Makelaarsloon in België: wat betaalt u echt?",
    metaTitle: "Makelaarsloon in België 2024 — wat betaalt u echt? | wijkopenpanden.be",
    metaDescription:
      "Wat kost een makelaar in België? De commissie plus verborgen kosten lopen hoger op dan velen denken. Lees de volledige analyse en vergelijk met verkopen aan een opkoper.",
    publishedAt: "2024-09-01",
    updatedAt: "2025-01-15",
    intro:
      "Wanneer u uw woning via een makelaar verkoopt, betaalt u commissie op de verkoopprijs. De gangbare afspraak in België is een percentage van de verkoopprijs exclusief btw, maar de werkelijke kostprijs ligt vaak hoger. In dit artikel zetten wij de volledige kostprijsstructuur uiteen — inclusief de posten die makelaars niet altijd proactief vermelden.",
    sections: [
      {
        heading: "Wat is het gemiddelde makelaarsloon in België?",
        body: "De gangbare commissie bij residentieel vastgoed in België is een percentage van de verkoopprijs, exclusief btw. Sommige makelaars werken met een hoger tarief bij premiumwoningen of in markten met veel vraag. Andere makelaars rekenen een vast minimumhonorarium ongeacht de verkoopprijs, wat bij goedkopere woningen relatief duur uitkomt.\n\nDe commissie is in principe onderhandelbaar, maar de manoeuvreerruimte is beperkter dan velen denken. Een makelaar die zijn tarief snel verlaagt, zal ook minder tijd en middelen investeren in uw dossier.",
      },
      {
        heading: "Wat is wel en niet inbegrepen in de commissie?",
        body: "De commissie dekt doorgaans: bezichtigingen organiseren en begeleiden, onderhandelingen voeren met potentiële kopers, het compromis opstellen (soms) en het dossier overdragen aan de notaris.\n\nNiet inbegrepen zijn in de meeste gevallen: professionele fotografie en opmaak van een verkoopbrochure, publicatie op vastgoedportalen zoals Immoweb of Zimmo, het energieprestatiecertificaat (EPC), de elektriciteitskeuring, de asbestinventaris, bodemattesten en notariskosten voor de akte.\n\nAl deze posten komen bovenop de commissie en worden voorgeschoten door de eigenaar of in mindering gebracht van de verkoopprijs.",
      },
      {
        heading: "Verborgen kosten bij makelaars",
        body: "Naast de expliciete bijkomende diensten zijn er kosten die eigenaars vaak niet vooraf inschatten:\n\nDubbele woonlast: als u al een andere woning heeft gekocht of gehuurd terwijl u wacht op de verkoop, betaalt u maandelijks dubbele lasten. Bij een gemiddelde verkoopduur van enkele maanden in Antwerpen loopt dit snel op.\n\nHerstellingen voor de verkoop: makelaars adviseren soms kleine of grote ingrepen om de verkoopprijs op te drijven. Verfwerk, een nieuwe keuken of badkamer, heraanleg van de tuin — de kosten hiervan overtreffen soms de meeropbrengst.\n\nVerzekering leegstand: een leegstaand pand is duurder te verzekeren. Bij een erfenis of opbrengsteigendom loopt dit op.\n\nOnroerende voorheffing: als u niet tijdig verkoopt, betaalt u een extra jaar belasting.",
      },
      {
        heading: "Vergelijking: makelaar vs. opkoper",
        body: "Onderstaande tabel vergelijkt de kostenposten bij een klassieke verkoop via makelaar tegenover een rechtstreekse verkoop aan wijkopenpanden.be.",
        table: {
          headers: ["Kostenpost", "Via makelaar", "Via wijkopenpanden.be"],
          rows: [
            ["Makelaarscommissie (incl. btw)", "Ja — percentage van verkoopprijs", "Geen"],
            ["EPC, elektriciteitskeuring, asbest", "Ten laste van verkoper", "Geen — wijkopenpanden.be regelt dit"],
            ["Fotografie en publicatie op portalen", "Ten laste van verkoper", "Geen"],
            ["Dubbele woonlast tijdens wachttijd", "Mogelijk meerdere maanden", "Geen — akte op uw timing"],
            ["Herstellingen voor verkoop", "Vaak geadviseerd door makelaar", "Geen — pand as-is"],
            ["Zekerheid over verkoopprijs", "Pas bij ondertekend compromis", "Schriftelijk bod na bezoek"],
          ],
        },
      },
      {
        heading: "Is makelaarsloon onderhandelbaar?",
        body: "Formeel wel, maar in de praktijk is de marge beperkt. De meeste makelaars hanteren een standaardtarief en wijken hier alleen van af bij uitzonderlijke omstandigheden (zeer waardevolle woning, exclusieve opdracht, meerdere dossiers tegelijk).\n\nVoorts is er een psychologisch element: een makelaar die zijn tarief snel verlaagt, geeft impliciet aan dat hij ook bij de onderhandeling met de koper snel toegeeft. Of dat zo is, kunt u moeilijk controleren.\n\nAlternatief zijn no-cure-no-pay-makelaars (alleen commissie bij verkoop, geen vaste kosten vooraf) en online platformen die een lager tarief rekenen maar minder diensten bieden. Bij beide opties blijft de eigenaar meer betrokken in het verkoopproces.",
      },
    ],
    relatedArticles: [],
    relatedSituations: ["verkopen-zonder-makelaar", "huis-verkopen-bij-erfenis"],
    faqs: [
      {
        question: "Hoeveel kost een makelaar in Antwerpen gemiddeld?",
        answer:
          "De gangbare commissie in Antwerpen is een percentage van de verkoopprijs exclusief btw, te vermeerderen met btw. Bijkomende kosten voor keuringen, fotografie en publicaties worden doorgaans apart aangerekend en komen bovenop de commissie.",
      },
      {
        question: "Kan ik onderhandelen over het makelaarsloon?",
        answer:
          "Technisch wel, maar de marge is beperkt. Grote kantoren wijken zelden af van hun standaardtarief. Onafhankelijke makelaars zijn soms flexibeler, zeker als u meerdere dossiers heeft.",
      },
      {
        question: "Wat als de makelaar de woning niet verkoopt?",
        answer:
          "Bij een exclusiviteitscontract betaalt u geen commissie als er geen verkoop is, maar wel de voorgeschoten kosten (keuringen, publicatie). Bij sommige contracten is er een vergoeding bij tussentijdse opzegging. Lees het contract goed na, met name de clausules over beëindiging.",
      },
      {
        question: "Is het btw-tarief op makelaarsloon altijd 21%?",
        answer:
          "Ja, makelaarscommissie is een dienst en valt onder het standaard btw-tarief van 21% in België.",
      },
      {
        question: "Wat kost een opkoper vergeleken met een makelaar?",
        answer:
          "Een opkoper biedt onder de maximale marktwaarde, maar rekent geen commissie, geen keuringskosten en geen publicatiekosten aan. Het nettoverschil met een klassieke verkoop via makelaar is kleiner dan het lijkt — zeker als u de bijkomende kosten en wachttijd meerekent.",
      },
    ],
  },
  {
    slug: "keuringen-bij-verkoop-woning",
    title: "Welke keuringen zijn verplicht bij de verkoop van een woning in België?",
    metaTitle: "Verplichte keuringen bij woningverkoop in België 2025 | wijkopenpanden.be",
    metaDescription:
      "EPC, elektriciteitskeuring, asbestinventaris, stookolietank — welke keuringen zijn wettelijk verplicht bij de verkoop van uw woning? Overzicht van kosten en termijnen.",
    publishedAt: "2025-02-01",
    updatedAt: "2025-03-10",
    intro:
      "Wie een woning verkoopt in België, moet een reeks attesten en keuringen voorleggen aan de koper. Sommige zijn wettelijk verplicht vóór de ondertekening van het compromis, andere worden opgevraagd door de notaris bij de akte. Een ontbrekend attest kan de verkoop vertragen of juridische gevolgen hebben. Dit artikel geeft een volledig overzicht.",
    sections: [
      {
        heading: "Energieprestatiecertificaat (EPC)",
        body: "Het EPC is verplicht voor alle residentiële panden die te koop worden gesteld. U moet het beschikbaar hebben vóór de publicatie van het te koop-bord of de online advertentie. De energiescore (schaal A tot F) moet vermeld worden in alle reclame.\n\nEen EPC-attest is tien jaar geldig, tenzij er energetische ingrepen zijn uitgevoerd waardoor een nieuwe meting zinvol is. De kostprijs bedraagt doorgaans tussen 150 en 300 euro, afhankelijk van de oppervlakte en de energiedeskundige.",
      },
      {
        heading: "Elektrische keuring",
        body: "Een elektrische keuring is verplicht bij de verkoop van alle woningen waarvan de elektrische installatie dateert van vóór 1 oktober 1981, of die na die datum niet conform werd verklaard. In de praktijk geldt dit voor de overgrote meerderheid van de oudere woningen in Antwerpen.\n\nDe keuring wordt uitgevoerd door een erkend keuringsorganisme (Keurings- en Inspectiebedrijven). De kostprijs ligt doorgaans tussen 150 en 350 euro. Een niet-conform attest verplicht u niet om de installatie meteen te renoveren, maar de koper is dan wettelijk verplicht dit te doen binnen 18 maanden na de akte.\n\nBelangrijk: u moet het keuringsattest (conform of niet-conform) overhandigen aan de koper vóór het ondertekenen van het compromis.",
      },
      {
        heading: "Asbestinventaris",
        body: "Sinds 23 november 2022 is een asbestinventaris verplicht bij de verkoop van woningen en andere toegankelijke gebouwen gebouwd vóór 2001 in het Vlaams Gewest. Antwerpen valt volledig onder deze regeling.\n\nEen gecertificeerde asbestdeskundige inspecteert alle toegankelijke delen van het gebouw en maakt een inventaris op van asbestverdachte materialen. Niet-hechtgebonden asbest (losliggend asbest, kapotte platen) krijgt een prioriteitslabel. De kostprijs varieert van 250 tot 600 euro afhankelijk van de oppervlakte.\n\nDe asbestinventaris is geldig voor tien jaar. Het origineel moet worden overhandigd aan de koper vóór de ondertekening van het compromis.",
      },
      {
        heading: "Bodemattest en grondverzetsattest",
        body: "Een bodemattest van OVAM (Openbare Vlaamse Afvalstoffenmaatschappij) is verplicht bij elke overdracht van grond in het Vlaams Gewest — ook als het gaat om een woning met tuin. De notaris vraagt dit automatisch aan bij de opmaak van de akte.\n\nVoor percelen die ooit als risicogrond werden gebruikt (tankstations, drukkerijen, opslagplaatsen voor chemicaliën) kan een meer uitgebreide bodemoriëntering of bodemsanering vereist zijn. Dat kan de verkoop aanzienlijk vertragen.\n\nHet grondverzetsattest is relevant als er grond wordt afgevoerd tijdens eventuele werken en speelt bij verkoop van bouwgronden een grotere rol.",
      },
      {
        heading: "Stookolietank",
        body: "Wie een woning verkoopt met een stookolietank — zowel bovengronds als ondergronds — moet bij de overdracht kunnen aantonen dat de tank ofwel in gebruik is en gekeurd ofwel buiten gebruik is gesteld en gereinigd. Niet-gecertificeerde of verouderde tanks kunnen tot verplichte saneringen leiden, ook na de akte.\n\nIn de praktijk adviseren makelaars en notarissen om de tank vóór de verkoop te laten verwijderen of buiten gebruik te stellen met een attest, om discussies achteraf te vermijden.",
      },
      {
        heading: "Stedenbouwkundig uittreksel en vergunningshistoriek",
        body: "De notaris vraagt bij elke verkoop een stedenbouwkundig uittreksel op bij de gemeente. Hierop staat de bestemming van het perceel en of er vergunningen zijn verleend. Als er vergunde of niet-vergunde verbouwingen zijn, kan dit leiden tot vragen of bezwaren vanuit de koper.\n\nNiet-vergunde werken zijn een frequent knelpunt bij erfeniswoningen en oudere panden. U bent verplicht om de koper hiervan op de hoogte te stellen.",
      },
      {
        heading: "Kost mij dit bij verkoop aan wijkopenpanden.be ook?",
        body: "Bij een verkoop aan wijkopenpanden.be regelen wij alle verplichte keuringen en attesten zelf, op onze kosten. U hoeft geen EPC, elektriciteitskeuring, asbestinventaris of bodemattesten zelf aan te vragen of te betalen. Dit is een van de concrete voordelen van een rechtstreekse verkoop aan een professionele opkoper.",
      },
    ],
    relatedArticles: ["commissie-makelaar-belgie", "notariskosten-woning-verkoop"],
    relatedSituations: ["verkopen-zonder-makelaar", "opknappand-verkopen"],
    faqs: [
      {
        question: "Is een elektriciteitskeuring verplicht bij elke woningverkoop?",
        answer:
          "Ja, bij woningen met een elektrische installatie van vóór 1 oktober 1981 of die nooit conform werd verklaard. In de praktijk geldt dit voor de meeste oudere woningen in Antwerpen.",
      },
      {
        question: "Wie betaalt de keuringen bij een verkoop?",
        answer:
          "De keuringen zijn in principe ten laste van de verkoper. Bij een verkoop aan wijkopenpanden.be nemen wij alle keuringskosten over.",
      },
      {
        question: "Hoe lang duurt het om alle attesten te verzamelen?",
        answer:
          "Reken op twee tot vier weken als u alles zelf regelt. EPC en elektriciteitskeuring kunnen snel worden ingepland. De asbestinventaris heeft soms een wachttijd van één tot twee weken. Het bodemattest duurt gemiddeld vijf werkdagen bij OVAM.",
      },
      {
        question: "Wat als de elektrische installatie niet conform is?",
        answer:
          "U mag de woning toch verkopen, maar de koper is dan wettelijk verplicht de installatie binnen 18 maanden na de akte conform te laten maken. U moet de koper hiervan schriftelijk op de hoogte stellen vóór het compromis.",
      },
    ],
  },
  {
    slug: "verkoop-kosten-berekenen",
    title: "Alle verkoopkosten berekend: wat blijft er netto over?",
    metaTitle: "Verkoopkosten woning berekenen in België 2025 | wijkopenpanden.be",
    metaDescription:
      "Wat zijn de werkelijke kosten bij de verkoop van uw woning? Notariskosten, keuringen, commissie, fiscaliteit — bereken uw netto-opbrengst voor u beslist.",
    publishedAt: "2025-02-15",
    updatedAt: "2025-03-10",
    intro:
      "De verkoopprijs van uw woning is niet wat u netto ontvangt. Tussen de vraagprijs en het bedrag op uw rekening staan meerdere kostenposten die samen snel enkele procenten van de verkoopprijs kunnen uitmaken. Dit artikel brengt alle kosten in kaart en geeft een realistisch beeld van uw netto-opbrengst.",
    sections: [
      {
        heading: "Kosten die u als verkoper draagt",
        body: "Bij een klassieke verkoop via de markt zijn de volgende kosten voor rekening van de verkoper:\n\n• Makelaarscommissie (inclusief 21% btw)\n• EPC-attest (150–300 euro)\n• Elektriciteitskeuring (150–350 euro)\n• Asbestinventaris (250–600 euro)\n• Bodemattest (gratis via OVAM, maar eventuele sanering is kostbaar)\n• Eventuele herstellingen of schilderwerken vóór de verkoop\n• Dubbele notariskosten als u opnieuw aankoopt\n\nDe notariskosten voor de verkoopakte zelf zijn in België traditioneel ten laste van de koper. Maar als er een hypotheek op het pand rust, zijn de kosten voor de doorhaling van de hypotheek wel voor de verkoper.",
      },
      {
        heading: "Doorhaling van een hypotheek",
        body: "Heeft u nog een lopende hypotheek op de woning? Dan moet deze worden doorgehaald bij de akte. De kosten hiervoor — notariskosten en registratierechten voor de doorhaling — bedragen doorgaans enkele honderden euro's, afhankelijk van het uitstaande saldo en de notaris.\n\nBovendien kan uw bank een wederbeleggingsvergoeding aanrekenen als de lening vervroegd wordt afgelost. Dit is wettelijk beperkt tot drie maanden rente op het uitstaande kapitaal, maar kan bij grote leningen toch oplopen tot enkele duizenden euro's.",
      },
      {
        heading: "Meerwaardebelasting: wanneer betaalt u belasting op de verkoop?",
        body: "In de meeste gevallen betaalt u als particulier geen belasting op de meerwaarde bij verkoop van uw eigen woning. Maar er zijn uitzonderingen:\n\n• Verkoop binnen vijf jaar na aankoop van een gebouwd onroerend goed: belasting op 16,5% van de meerwaarde\n• Verkoop binnen acht jaar na aankoop van een ongebouwd perceel: belasting op 16,5% van de meerwaarde\n• Speculatieve aankoop-en-doorverkoop: het volledige bedrag kan als beroepsinkomen worden belast\n\nVoor uw eigen woning (hoofdverblijfplaats) geldt een vrijstelling, maar u moet er minstens één jaar effectief hebben gewoond en dit kunnen aantonen.",
      },
      {
        heading: "Rekenvoorbeeld: netto-opbrengst bij klassieke verkoop vs. opkoper",
        body: "Stel: u verkoopt een rijhuis in Antwerpen voor een marktwaarde van 300.000 euro.",
        table: {
          headers: ["Kostenpost", "Klassieke verkoop", "Verkoop aan wijkopenpanden.be"],
          rows: [
            ["Verkoopprijs / bod", "300.000 €", "255.000–270.000 € (schatting)"],
            ["Makelaarscommissie (incl. btw)", "− 12.000–18.000 €", "Geen"],
            ["EPC + elektriciteitskeuring + asbest", "− 600–1.250 €", "Geen"],
            ["Doorhaling hypotheek", "− 500–2.000 €", "− 500–2.000 €"],
            ["Wachttijd (dubbele lasten, 4 mnd)", "− 2.000–4.000 €", "Geen"],
            ["Netto-opbrengst (schatting)", "269.750–284.650 €", "253.000–267.500 €"],
          ],
        },
      },
      {
        heading: "Conclusie: het verschil is kleiner dan het lijkt",
        body: "Een opkoper biedt u minder dan de theoretische marktwaarde, maar de bijkomende kosten en wachttijd bij een klassieke verkoop verkleinen het verschil aanzienlijk. Bij een woning in mindere staat, erfenis of tijdsdruk kan een rechtstreekse verkoop zelfs financieel gelijkwaardig of voordeliger uitkomen.\n\nDe keuze hangt niet alleen van de prijs af, maar ook van uw persoonlijke situatie: heeft u tijd, of heeft u zekerheid en snelheid nodig?",
      },
    ],
    relatedArticles: ["commissie-makelaar-belgie", "notariskosten-woning-verkoop", "keuringen-bij-verkoop-woning"],
    relatedSituations: ["verkopen-zonder-makelaar"],
    faqs: [
      {
        question: "Betaalt de verkoper notariskosten in België?",
        answer:
          "De notariskosten voor de verkoopakte zijn in principe voor de koper. De verkoper betaalt wel de kosten voor de doorhaling van een hypotheek (als die er is) en eventuele aktekosten bij de eigen aankoop.",
      },
      {
        question: "Hoe bereken ik mijn netto-opbrengst na verkoop?",
        answer:
          "Trek van de verkoopprijs af: makelaarscommissie, keuringskosten, eventuele hypotheekaflossing en doorhalingskosten, herstellingen voor de verkoop en de dubbele woonlasten tijdens de verkoopperiode. Wat overblijft is uw netto-opbrengst.",
      },
      {
        question: "Moet ik belasting betalen op de meerwaarde bij verkoop?",
        answer:
          "In de meeste gevallen niet, als het uw eigen woning is en u er minstens een jaar hebt gewoond. Verkoop binnen vijf jaar na aankoop van een niet-eigen woning is wel belast op de meerwaarde aan 16,5%.",
      },
    ],
  },
  {
    slug: "epc-attest-antwerpen",
    title: "EPC-attest in Antwerpen: alles wat u moet weten",
    metaTitle: "EPC-attest aanvragen in Antwerpen 2025 — kosten en procedure | wijkopenpanden.be",
    metaDescription:
      "Wat is een EPC-attest, hoe vraagt u het aan in Antwerpen, hoeveel kost het en wat zijn de gevolgen van een lage energiescore voor uw verkoopprijs?",
    publishedAt: "2025-03-01",
    updatedAt: "2025-03-15",
    intro:
      "Het energieprestatiecertificaat (EPC) is een verplicht document bij de verkoop of verhuur van een woning in Vlaanderen. Het geeft de energiezuinigheid van het gebouw weer op een schaal van A+ (zeer zuinig) tot F (zeer onzuinig). Bij een verkoop moet het EPC beschikbaar zijn vóór de publicatie van het pand.",
    sections: [
      {
        heading: "Wat staat er op een EPC?",
        body: "Een EPC vermeldt:\n\n• De energiescore (kWh/m² per jaar)\n• Het energielabel (A+, A, B, C, D, E of F)\n• De CO₂-uitstoot\n• Een overzicht van de energetische kenmerken van het gebouw (isolatie, beglazing, verwarmingsinstallatie, ventilatie)\n• Aanbevelingen voor energetische verbeteringen\n\nDe energiescore heeft een directe invloed op de verkoopprijs. Kopers vergelijken woningen steeds vaker op energieprestatie, en banken hanteren striktere voorwaarden voor woningen met een laag label bij het toekennen van hypotheken.",
      },
      {
        heading: "Hoe vraagt u een EPC aan in Antwerpen?",
        body: "Een EPC wordt opgemaakt door een gecertificeerde energiedeskundige type A. U vindt erkende deskundigen via de VEKA-databank (Vlaams Energie- en Klimaatagentschap) op energiesparen.be.\n\nDe procedure:\n1. Contacteer een erkende energiedeskundige\n2. Plan een bezoek — de deskundige inspecteert alle ruimten, meting van de oppervlakten, controle van isolatie, beglazing, verwarmingsinstallatie en ventilatie\n3. De deskundige stelt het EPC op en dient het in bij het VEKA\n4. U ontvangt het EPC-attest met een uniek registratienummer\n\nDe opmaak duurt typisch één à twee uur ter plaatse; het attest is doorgaans binnen drie werkdagen beschikbaar.",
      },
      {
        heading: "Hoeveel kost een EPC in Antwerpen?",
        body: "De marktprijs voor een EPC-attest in Antwerpen ligt doorgaans tussen 150 en 350 euro inclusief btw, afhankelijk van de energiedeskundige en de oppervlakte van de woning. Voor grotere woningen of meergezinswoningen kan de prijs hoger liggen.\n\nVergelijk meerdere deskundigen — de kwaliteit en prijs kunnen sterk variëren. Goedkoper is niet altijd beter: een onnauwkeurige meting kan leiden tot een slechtere energiescore dan de woning werkelijk verdient.",
      },
      {
        heading: "Wat zijn de gevolgen van een laag EPC-label?",
        body: "Een woning met label E of F:\n\n• Scoort minder aantrekkelijk bij potentiële kopers op vastgoedportalen\n• Kan moeilijker te financieren zijn — banken passen soms strengere voorwaarden toe bij label E/F\n• Kan aanleiding geven tot prijsonderhandelingen door de koper\n• In Vlaanderen geldt een renovatieverplichting bij aankoop van woningen met label E of F: de nieuwe eigenaar moet binnen vijf jaar na de akte het pand renoveren tot minimaal label D\n\nDeze renovatieverplichting wordt steeds strenger: de Vlaamse overheid trekt de lat op. Eigenaars die nu verkopen, doen er goed aan transparant te zijn over de energiestaat.",
      },
      {
        heading: "EPC en verkoop aan wijkopenpanden.be",
        body: "Bij een verkoop aan wijkopenpanden.be vragen wij het EPC-attest zelf op, op onze kosten. U hoeft geen energiedeskundige te contacteren of te betalen. Wij houden rekening met de energiestaat van de woning in ons bod, maar rekenen de keuringskosten niet door.",
      },
    ],
    relatedArticles: ["keuringen-bij-verkoop-woning", "pand-in-slechte-staat-verkopen"],
    relatedSituations: ["opknappand-verkopen"],
    faqs: [
      {
        question: "Hoe lang is een EPC geldig?",
        answer:
          "Een EPC-attest is tien jaar geldig. Als u in die periode energetische ingrepen hebt uitgevoerd (nieuwe beglazing, dakisolatie, warmtepomp), kunt u een nieuw EPC laten opmaken om de score te verbeteren.",
      },
      {
        question: "Moet ik een EPC hebben vóór het compromis of pas bij de akte?",
        answer:
          "Het EPC moet beschikbaar zijn vóór de publicatie van de woning en moet worden overhandigd aan de koper vóór het ondertekenen van het compromis.",
      },
      {
        question: "Kan ik mijn EPC-score verbeteren voor de verkoop?",
        answer:
          "Ja, relatief kleine ingrepen zoals dakisolatie, HR-beglazing of een efficiëntere verwarmingsketel kunnen de score merkbaar verbeteren. Vraag de energiedeskundige vooraf welke ingrepen het meeste effect hebben voor uw specifieke woning.",
      },
      {
        question: "Wat als ik het EPC vergeet bij de verkoop?",
        answer:
          "Het ontbreken van een EPC bij publicatie is strafbaar met een administratieve boete. Bovendien kan de koper de nietigheid van de verkoop inroepen of schadevergoeding eisen als hij niet correct werd geïnformeerd over de energieprestatie.",
      },
    ],
  },
  {
    slug: "erfenis-woning-stappenplan",
    title: "Erfenis woning verkopen: stap voor stap",
    metaTitle: "Erfenis woning verkopen in België — stappenplan 2025 | wijkopenpanden.be",
    metaDescription:
      "Wat zijn de stappen bij de verkoop van een geërfde woning? Successierechten, onverdeeldheid, bodemattest en tijdsdruk — lees het volledige stappenplan.",
    publishedAt: "2025-03-01",
    updatedAt: "2025-03-20",
    intro:
      "De erfenis van een woning brengt veel vragen met zich mee. Wie neemt de beslissingen? Wanneer moeten de successierechten worden betaald? Wat als de erfgenamen het niet eens zijn? Dit stappenplan begeleidt u door het volledige proces, van overlijden tot akte.",
    sections: [
      {
        heading: "Stap 1: Aangifte van nalatenschap",
        body: "Na het overlijden heeft u vier maanden de tijd om een aangifte van nalatenschap in te dienen bij de Vlaamse Belastingdienst (als het overlijden plaatsvond in Vlaanderen). Voor overlijdens in het buitenland gelden andere termijnen.\n\nDe aangifte bevat een inventaris van het vermogen van de overledene: roerende goederen, onroerende goederen, bankrekeningen en schulden. Op basis hiervan worden de successierechten (erfbelasting) berekend.",
      },
      {
        heading: "Stap 2: Erfbelasting betalen",
        body: "De successierechten moeten worden betaald binnen twee maanden na het indienen van de aangifte. Het tarief is progressief en afhankelijk van de graad van verwantschap:\n\n• In rechte lijn (kinderen, partner): lagere tarieven\n• Zijlijn en vreemden: hogere tarieven\n\nBij een geërfde woning kan dit een aanzienlijk bedrag zijn. Als de erfgenamen onvoldoende liquiditeiten hebben, kan dit een extra reden zijn om de woning snel te verkopen.\n\nBelangrijk: u kunt successierechten betalen vóór de woning is verkocht. De Vlaamse Belastingdienst kent geen uitstel van betaling toe louter omwille van een lopende verkoop.",
      },
      {
        heading: "Stap 3: Onverdeeldheid en toestemming van alle erfgenamen",
        body: "Als er meerdere erfgenamen zijn, is de woning initieel onverdeeld eigendom. Elke beslissing over de woning — verhuur, renovatie, verkoop — vereist in principe toestemming van alle erfgenamen.\n\nAls één erfgenaam weigert mee te werken, zijn er twee opties:\n1. Minnelijke schikking: probeer een akkoord te bereiken, eventueel met bemiddeling\n2. Gerechtelijke verdeling: de rechtbank kan op verzoek van één erfgenaam een gedwongen verdeling bevelen. Dit is een tijdrovend en kostelijk traject.\n\nSnel overeenstemming bereiken en de woning verkopen is in de meeste gevallen de meest praktische en goedkoopste optie.",
      },
      {
        heading: "Stap 4: Woning leegmaken en staat opmaken",
        body: "Vóór een bezichtiging of verkoop moet de woning doorgaans worden leeggemaakt. Dit is vaak emotioneel belastend én praktisch tijdrovend.\n\nLaat de staat van de woning realistisch inschatten: erfeniswoningen zijn soms al jaren niet gerenoveerd. Verborgen gebreken (vochtproblemen, dak, elektriciteit) kunnen de verkoopprijs sterk beïnvloeden.\n\nBij een verkoop aan een opkoper is de staat van de woning minder van belang: wij kopen het pand as-is en houden in ons bod rekening met eventuele gebreken. U hoeft niets te renoveren of te herstellen.",
      },
      {
        heading: "Stap 5: Keuringen en attesten",
        body: "Voor de verkoop zijn de verplichte keuringen en attesten nodig: EPC, elektriciteitskeuring, asbestinventaris en bodemattest. Bij een verkoop via wijkopenpanden.be regelen wij dit volledig, zodat u zich niet met de administratie moet bezighouden.",
      },
      {
        heading: "Stap 6: Compromis en akte",
        body: "Alle erfgenamen moeten het compromis (de verkoopbelofte) ondertekenen. Zijn niet alle erfgenamen aanwezig, dan kan één erfgenaam optreden met een volmacht (notarieel of onderhands) van de anderen.\n\nNa het compromis volgt de akte bij de notaris, doorgaans twee tot drie maanden later. Bij de akte worden de notariskosten verrekend en wordt de netto-opbrengst verdeeld onder de erfgenamen.",
      },
    ],
    relatedArticles: ["keuringen-bij-verkoop-woning", "notariskosten-woning-verkoop"],
    relatedSituations: ["huis-verkopen-bij-erfenis"],
    faqs: [
      {
        question: "Hoe snel moet ik een geërfde woning verkopen?",
        answer:
          "Er is geen wettelijke termijn om een geërfde woning te verkopen. Wel moet de erfbelasting worden betaald binnen de wettelijke termijn (twee maanden na aangifte). Als u de woning wilt verhuren of zelf bewonen, is dat ook een optie.",
      },
      {
        question: "Betaal ik meerwaardebelasting op een geërfde woning?",
        answer:
          "Als u de geërfde woning verkoopt, telt als aankoopprijs de waarde zoals opgegeven in de successieaangifte. Verkoopt u voor meer, dan is er een meerwaarde. In de meeste gevallen bij erfeniswoningen is de meerwaardebelasting niet van toepassing, maar raadpleeg uw notaris.",
      },
      {
        question: "Wat als één erfgenaam de woning niet wil verkopen?",
        answer:
          "Als er geen akkoord is, kan een erfgenaam een gerechtelijke verdeling aanvragen. De rechter kan dan een gedwongen openbare verkoop bevelen. Dit is een langdurige en dure procedure. Een minnelijk akkoord is altijd te verkiezen.",
      },
      {
        question: "Kan wijkopenpanden.be een bod uitbrengen terwijl de nalatenschap nog niet afgerond is?",
        answer:
          "Ja, wij kunnen een vrijblijvend bod uitbrengen zodra de erfgenamen bekend zijn. De effectieve verkoop kan pas plaatsvinden nadat de aangifte van nalatenschap is ingediend en alle erfgenamen akkoord zijn.",
      },
    ],
  },
  {
    slug: "verkoopbelofte-compromis-akte",
    title: "Verkoopbelofte, compromis en akte: wat is het verschil?",
    metaTitle: "Compromis, verkoopbelofte en akte bij woningverkoop uitgelegd | wijkopenpanden.be",
    metaDescription:
      "Wat is het verschil tussen een verkoopbelofte, een compromis en een notariële akte? Wanneer is de verkoop definitief? Alles uitgelegd voor verkopers.",
    publishedAt: "2025-03-10",
    updatedAt: "2025-03-20",
    intro:
      "Bij de verkoop van een woning doorloopt u meerdere juridische stappen. Verkopers spreken soms door elkaar over 'het compromis', 'de verkoopbelofte' en 'de akte'. Deze termen zijn echter niet synoniem: elk document heeft een andere juridische waarde en gevolgen. Dit artikel legt het verschil uit.",
    sections: [
      {
        heading: "De verkoopbelofte (optie)",
        body: "Een verkoopbelofte is een eenzijdige verbintenis: de eigenaar (belover) belooft de woning te verkopen aan een specifieke koper, voor een bepaalde prijs en gedurende een bepaalde periode. De koper beslist vrij of hij al dan niet op het aanbod ingaat.\n\nDe verkoopbelofte wordt gebruikt als de koper nog bedenktijd nodig heeft (bijvoorbeeld om financiering te regelen) maar de eigenaar wil vastleggen. Ze is bindend voor de verkoper: als de koper beslist te kopen, móet u verkopen. U kunt de belofte niet eenzijdig intrekken.\n\nDe verkoopbelofte is niet hetzelfde als het compromis: er is nog geen definitieve overeenkomst.",
      },
      {
        heading: "Het compromis (onderhandse verkoopovereenkomst)",
        body: "Het compromis is de eigenlijke verkoopovereenkomst: verkoper en koper zijn het eens over prijs, voorwaarden en modaliteiten. Zodra beide partijen tekenen, is de verkoop juridisch gezien definitief — ook al is de notariële akte nog niet verleden.\n\nHet compromis bevat:\n• Identiteit van verkoper en koper\n• Beschrijving van het pand\n• Verkoopprijs\n• Ontbindende voorwaarden (bijv. onder voorbehoud van hypothecaire lening)\n• Datum van akte\n• Eventuele afspraken over roerende goederen, staat van het pand en overhandiging sleutels\n\nNa ondertekening van het compromis heeft de koper in principe geen wettelijk herroepingsrecht in België (in tegenstelling tot consumentenkoop). Voor de verkoper geldt hetzelfde: u kunt niet meer terug.\n\nBij een compromis wordt doorgaans een voorschot van 10% van de verkoopprijs betaald, te bewaren op de kwaliteitsrekening van de notaris.",
      },
      {
        heading: "De notariële akte",
        body: "De notariële akte is het officiële document dat wordt opgemaakt door de notaris en ingeschreven in de registers van het Hypotheekkantoor. Pas na het verlijden van de akte wordt de koper officieel eigenaar van het pand.\n\nTijdens de akte:\n• Controleert de notaris alle attesten en keuringen\n• Wordt de hypotheek (indien van toepassing) doorgehaald\n• Betaalt de koper het saldo van de koopprijs\n• Worden de sleutels overhandigd\n\nHet traject van compromis tot akte duurt gemiddeld twee tot drie maanden, afhankelijk van de complexiteit van het dossier en de planning van de notaris.",
      },
      {
        heading: "Wanneer is de verkoop definitief?",
        body: "Juridisch gezien is de verkoop definitief op het moment dat het compromis wordt ondertekend. De notariële akte is de formele bekrachtiging en de eigendomsoverdracht, maar de verbintenis tot koop/verkoop bestaat al vanaf het compromis.\n\nIn de praktijk wordt soms een ontbindende voorwaarde opgenomen (bijv. 'onder voorbehoud van het verkrijgen van een hypothecair krediet'). Als de koper zijn lening niet krijgt, kan hij zonder financiële gevolgen afzien van de aankoop.",
      },
    ],
    relatedArticles: ["notariskosten-woning-verkoop", "erfenis-woning-stappenplan"],
    relatedSituations: ["huis-verkopen-bij-scheiding"],
    faqs: [
      {
        question: "Kan ik na het compromis nog terugkrabbelen?",
        answer:
          "In principe niet. Als u als verkoper afziet na ondertekening van het compromis, heeft de koper recht op schadevergoeding, doorgaans het dubbele van het betaalde voorschot (10% van de koopprijs). Enkel als er een geldige ontbindende voorwaarde van toepassing is, kan het compromis worden ontbonden zonder financiële gevolgen.",
      },
      {
        question: "Moet het compromis door een notaris worden opgemaakt?",
        answer:
          "Nee, een compromis kan onderhands worden opgemaakt — u heeft geen notaris nodig. Wel is het sterk aangeraden om een notaris of jurist te raadplegen, zeker als er bijzondere clausules of complexe situaties zijn (erfenis, meerdere eigenaars, huurders in het pand).",
      },
      {
        question: "Hoe lang na het compromis volgt de akte?",
        answer:
          "Gemiddeld twee tot drie maanden. De notaris heeft tijd nodig om alle attesten op te vragen, de hypotheekinscripties te controleren en het dossier voor te bereiden. Bij een spoedverkoop kan dit soms sneller.",
      },
    ],
  },
  {
    slug: "notariskosten-woning-verkoop",
    title: "Notariskosten bij de verkoop van uw woning: wat betaalt u echt?",
    metaTitle: "Notariskosten bij woningverkoop in België 2025 | wijkopenpanden.be",
    metaDescription:
      "Hoeveel kost een notaris bij de verkoop van uw woning? Registratierechten, ereloon, doorhaling hypotheek — volledig overzicht van de notariskosten in België.",
    publishedAt: "2025-03-15",
    updatedAt: "2025-03-25",
    intro:
      "Notariskosten zijn een van de grootste posten bij de aankoop van een woning in België. Ze worden doorgaans betaald door de koper, maar als verkoper krijgt u er ook mee te maken — zeker als er een hypotheek op het pand rust. Dit artikel geeft een volledig overzicht.",
    sections: [
      {
        heading: "Wie betaalt de notariskosten?",
        body: "In België zijn de notariskosten voor de verkoopakte traditioneel ten laste van de koper. Dit omvat het notarieel ereloon en de registratierechten.\n\nAls verkoper betaalt u wél:\n• De kosten voor de doorhaling van een bestaande hypotheek (als u nog een lening hebt lopen)\n• Eventuele kosten voor een volmacht of bijkomende aktes die u als verkoper moet laten opmaken",
      },
      {
        heading: "Registratierechten in Vlaanderen",
        body: "Bij de aankoop van een woning in Vlaanderen betaalt de koper registratierechten op de koopprijs. Het standaardtarief bedraagt 3% voor de enige en eigen woning (na verlaging in 2024), en 12% voor andere onroerende goederen.\n\nDit tarief is voor de koper relevant, maar beïnvloedt ook de onderhandeling: hoe hoger de registratierechten, hoe meer kopers de netto aankoopprijs willen beperken.",
      },
      {
        heading: "Notarieel ereloon",
        body: "Het ereloon van de notaris is wettelijk geregeld en degressief: hoe hoger de verkoopprijs, hoe lager het percentage. Het ereloon wordt berekend op de verkoopprijs en is voor rekening van de koper.\n\nVoor een woning van 300.000 euro bedraagt het notarieel ereloon (exclusief btw en kosten) doorgaans enkele duizenden euro's. Samen met de registratierechten en bijkomende kosten (hypotheekformaliteiten, afschriften) betaalt de koper in totaal doorgaans 5 tot 15% bovenop de verkoopprijs in totale aankoopkosten.",
      },
      {
        heading: "Doorhaling hypotheek: kosten voor de verkoper",
        body: "Als u een hypotheek hebt op het verkochte pand, moet deze worden doorgehaald bij de akte. De doorhaling kost:\n\n• Notarieel ereloon voor de doorhalingsakte\n• Registratierecht op de doorhaling\n• Administratieve kosten (hypotheekkantoor)\n\nIn totaal rekent u op enkele honderden tot een duizendtal euro, afhankelijk van het uitstaande saldo. Bovenop de doorhaling kan uw bank een wederbeleggingsvergoeding aanrekenen als de lening vervroegd wordt afgelost (maximaal drie maanden rente).",
      },
      {
        heading: "Wanneer kiest u voor twee notarissen?",
        body: "Koper en verkoper mogen elk hun eigen notaris kiezen. Ze delen dan het ereloon. Dit kost u als verkoper niets extra maar biedt u een vertrouwenspersoon die uw belangen bewaakt bij de opmaak van de akte. Bij complexe situaties (erfenis, echtscheiding, meerdere eigenaars) is een eigen notaris aan te raden.",
      },
    ],
    relatedArticles: ["verkoopbelofte-compromis-akte", "verkoop-kosten-berekenen"],
    relatedSituations: ["huis-verkopen-bij-erfenis", "huis-verkopen-bij-scheiding"],
    faqs: [
      {
        question: "Hoeveel bedragen de notariskosten bij de verkoop van een woning?",
        answer:
          "Als verkoper betaalt u alleen de kosten voor de doorhaling van uw hypotheek (als die er is), doorgaans 500 tot 2.000 euro. De kosten voor de verkoopakte zelf zijn voor de koper.",
      },
      {
        question: "Kan ik als verkoper ook een notaris kiezen?",
        answer:
          "Ja. In België mogen verkoper en koper elk hun eigen notaris aanduiden. Ze delen het ereloon. Dit kost u niets extra maar geeft u een eigen adviseur bij de opmaak van de akte.",
      },
      {
        question: "Wat zijn de notariskosten als percentage van de verkoopprijs?",
        answer:
          "De totale aankoopkosten voor de koper (notaris + registratierechten) bedragen doorgaans 10 tot 15% van de verkoopprijs bij een tweede woning, of 5 tot 7% bij de enige en eigen woning (verlaagd tarief). Voor de verkoper zijn de notariskosten beperkter: alleen de doorhaling van een hypotheek indien van toepassing.",
      },
    ],
  },
  {
    slug: "lijfrente-uitgelegd",
    title: "Lijfrente bij vastgoed: hoe werkt het en voor wie is het geschikt?",
    metaTitle: "Lijfrente woning verkopen uitgelegd 2025 | wijkopenpanden.be",
    metaDescription:
      "Lijfrente bij vastgoed: wat is het, hoe wordt de prijs berekend, wat zijn de fiscale voordelen en voor wie is een lijfrenteverkoop interessant?",
    publishedAt: "2025-03-20",
    updatedAt: "2025-04-01",
    intro:
      "Lijfrente is een bijzondere verkoopvorm waarbij de verkoper zijn eigendom overdraagt in ruil voor een maandelijkse of jaarlijkse uitkering, in plaats van een eenmalige verkoopsom. In België wint deze formule aan populariteit bij senioren die hun woning willen verzilveren terwijl ze er blijven wonen. Maar hoe werkt het precies, en is het voor u interessant?",
    sections: [
      {
        heading: "Wat is lijfrente?",
        body: "Bij een lijfrenteverkoop draagt u de eigendom van uw woning over aan een koper, die in ruil daarvoor:\n\n• Een eenmalig bedrag (het 'bouquet') betaalt, doorgaans 20 tot 40% van de waarde\n• Plus een maandelijkse lijfrente, levenslang\n\nU mag de woning blijven bewonen (of verhuren) tot uw overlijden. Dit gebruiksrecht wordt notarieel vastgelegd in de akte als een vruchtgebruik of een levenslang recht van gebruik en bewoning.\n\nDe koper verwerft de volle eigendom pas bij uw overlijden. Tot dan betaalt hij maandelijks de lijfrente en wacht hij op de effectieve overdracht.",
      },
      {
        heading: "Hoe wordt de lijfrente berekend?",
        body: "De berekening van een lijfrente is gebaseerd op:\n\n• De venale (markt)waarde van de woning\n• Uw leeftijd en levensverwachting (op basis van actuariële tabellen)\n• De waarde van het vruchtgebruik (uw recht om de woning te blijven bewonen)\n\nDe netto verkoopwaarde = venale waarde − waarde vruchtgebruik. Dit bedrag wordt verdeeld in een bouquet en een lijfrente. Een actuaris of gespecialiseerd notaris maakt de berekening.\n\nBij wijkopenpanden.be berekenen wij de lijfrente op basis van transparante actuariële tabellen, in samenwerking met onze notaris.",
      },
      {
        heading: "Fiscale behandeling van lijfrente in België",
        body: "De fiscaliteit van lijfrente is een sterk voordeel:\n\n• Het bouquet is vrijgesteld van belasting als het gaat om uw eigen woning (geen meerwaardebelasting)\n• De maandelijkse lijfrente is deels belastbaar als roerend inkomen of lijfrenteuitkering, maar slechts op een klein deel van het bedrag (de 'rente-component'). In de praktijk betaalt u zeer weinig belasting op de maandelijkse lijfrente\n\nVergeleken met gewone huurinkomsten (tot 50% belastbaar netto-huurrendement) of spaarrekeningen is lijfrente fiscaal gunstig.",
      },
      {
        heading: "Voordelen en nadelen voor de verkoper",
        body: "Voordelen:\n• Gegarandeerd inkomen voor de rest van uw leven\n• U blijft in uw woning wonen\n• Fiscaal voordelig\n• Geen erfbelasting op de maandelijkse lijfrente voor uw erfgenamen\n• U hoeft niet te wachten op de 'juiste koper' op de markt\n\nNadelen:\n• Het totale bedrag is onzeker: leeft u kort, dan ontvangt u minder; leeft u lang, dan meer\n• De koper draagt het 'langlevenrisico': hij betaalt mogelijk meer dan de marktwaarde als u erg oud wordt\n• De woning is al overgedragen: u kunt ze niet meer nalaten aan uw kinderen\n• Minder gangbaar dan een klassieke verkoop — niet alle kopers zijn bereid om lijfrente te accepteren",
      },
      {
        heading: "Voor wie is lijfrente interessant?",
        body: "Lijfrente is het meest interessant voor:\n\n• Senioren zonder kinderen of met kinderen die de woning niet nodig hebben\n• Eigenaars die aanvullend inkomen willen naast het pensioen\n• Eigenaars die niet willen verhuizen maar wel hun vermogen willen liquideren\n• Situaties waarbij erfgenamen geen interesse hebben in de woning\n\nWijkopenpanden.be biedt lijfrenteverkoop aan als een van de mogelijke formules. Wij berekenen kosteloos de mogelijke lijfrente voor uw woning en bespreken alle opties met u.",
      },
    ],
    relatedArticles: ["blijven-wonen-na-verkoop", "verkoop-kosten-berekenen"],
    relatedSituations: ["lijfrente-antwerpen"],
    faqs: [
      {
        question: "Wat gebeurt er met de lijfrente als ik eerder overlijd dan verwacht?",
        answer:
          "De lijfrente stopt bij uw overlijden. Uw erfgenamen ontvangen geen verdere uitkeringen. De koper verwerft op dat moment de volle eigendom van de woning. Als u vroeg overlijdt, 'wint' de koper; als u lang leeft, 'wint' u.",
      },
      {
        question: "Kan ik mijn woning nog verhuren na een lijfrenteverkoop?",
        answer:
          "Dat hangt af van de afspraken in de akte. Als u een vruchtgebruik behoudt (in plaats van alleen een recht van gebruik en bewoning), kunt u de woning wel verhuren. Bespreek dit met uw notaris vóór de ondertekening.",
      },
      {
        question: "Is lijfrente altijd levenslang?",
        answer:
          "Lijfrente is standaard levenslang, maar er zijn varianten: een tijdelijke lijfrente (voor een bepaald aantal jaren) of een lijfrente met gegarandeerde minimumperiode. De voorwaarden worden vastgelegd in de notariële akte.",
      },
    ],
  },
  {
    slug: "blijven-wonen-na-verkoop",
    title: "Blijven wonen na de verkoop van uw woning: hoe werkt dat?",
    metaTitle: "Blijven wonen na verkoop woning — huurovereenkomst of vruchtgebruik | wijkopenpanden.be",
    metaDescription:
      "Hoe kunt u in uw woning blijven wonen na de verkoop? Terughuurovereenkomst, vruchtgebruik of recht van bewoning — uitleg, voor- en nadelen.",
    publishedAt: "2025-03-25",
    updatedAt: "2025-04-01",
    intro:
      "Soms wilt u uw woning verkopen maar er toch in blijven wonen — tijdelijk of voor de rest van uw leven. Dat kan, via verschillende juridische formules. Dit artikel bespreekt de meest gangbare opties: terughuurovereenkomst, vruchtgebruik en recht van gebruik en bewoning.",
    sections: [
      {
        heading: "Optie 1: terughuurovereenkomst (sale-and-leaseback)",
        body: "Bij een terughuurovereenkomst verkoopt u uw woning en huurt u ze onmiddellijk terug van de nieuwe eigenaar. U ontvangt de verkoopsom (liquiditeit) en betaalt maandelijks huur.\n\nVoordelen:\n• Directe liquiditeit\n• Zekerheid van huisvesting\n• Flexibel: u kunt een opzegtermijn afspreken\n\nNadelen:\n• U betaalt maandelijks huur: dat verlaagt uw netto-opbrengst op termijn\n• U bent afhankelijk van de goodwill van de nieuwe eigenaar bij contractverlenging\n• De huurovereenkomst is onderworpen aan de huurwetgeving\n\nWijkopenpanden.be biedt deze formule standaard aan bij verkopen waarbij de eigenaar wil blijven wonen.",
      },
      {
        heading: "Optie 2: vruchtgebruik",
        body: "Bij een verkoop met voorbehoud van vruchtgebruik verkoopt u de naakte eigendom van de woning, maar behoudt u het recht om ze te bewonen en er inkomsten uit te halen (verhuur) voor een bepaalde periode of voor de rest van uw leven.\n\nDe koper verwerft de volle eigendom pas als het vruchtgebruik eindigt (bij uw overlijden of na de afgesproken termijn).\n\nDit is de klassieke formule bij lijfrenteverkoop, maar het kan ook losgekoppeld worden van een lijfrente. De waarde van het vruchtgebruik wordt afgetrokken van de verkoopprijs.",
      },
      {
        heading: "Optie 3: recht van gebruik en bewoning",
        body: "Het recht van gebruik en bewoning is een beperktere versie van het vruchtgebruik: u mag de woning zelf bewonen, maar mag ze niet verhuren aan derden. Dit levert een lagere vermindering op de verkoopprijs dan het vruchtgebruik.\n\nDeze formule is geschikt als u de woning zelf wil blijven bewonen maar geen interesse heeft in verhuur.",
      },
      {
        heading: "Vergelijking van de formules",
        body: "",
        table: {
          headers: ["Formule", "U ontvangt", "U betaalt", "Geschikt voor"],
          rows: [
            ["Terughuurovereenkomst", "Volle verkoopprijs", "Maandelijkse huur", "Tijdelijk blijven wonen, flexibiliteit"],
            ["Vruchtgebruik", "Prijs minus waarde vruchtgebruik", "Niets (maar lagere verkoopprijs)", "Levenslang wonen, ook verhuur mogelijk"],
            ["Recht van bewoning", "Prijs minus waarde bewoning", "Niets (maar lagere verkoopprijs)", "Levenslang zelf wonen, geen verhuur"],
          ],
        },
      },
      {
        heading: "Wat regelt wijkopenpanden.be?",
        body: "Bij wijkopenpanden.be is 'blijven wonen' een standaardoptie die wij aanbieden aan verkopers die dit wensen. Wij bespreken samen welke formule het beste past bij uw situatie en regelen de juridische uitwerking met onze notaris. Vraag vrijblijvend een bod aan en vermeld dat u wilt blijven wonen.",
      },
    ],
    relatedArticles: ["lijfrente-uitgelegd", "verkoop-kosten-berekenen"],
    relatedSituations: ["blijven-wonen"],
    faqs: [
      {
        question: "Kan ik mijn woning verkopen en er nog jaren in blijven wonen?",
        answer:
          "Ja, dat kan via een terughuurovereenkomst of via een vruchtgebruik. Bij wijkopenpanden.be is dit een standaardoptie. De duur en de modaliteiten worden vastgelegd in de akte of de huurovereenkomst.",
      },
      {
        question: "Wat is het verschil tussen vruchtgebruik en recht van bewoning?",
        answer:
          "Bij vruchtgebruik mag u de woning bewonen én verhuren. Bij het recht van gebruik en bewoning mag u alleen zelf wonen in de woning. Vruchtgebruik is meer waard en leidt tot een grotere aftrek op de verkoopprijs.",
      },
      {
        question: "Wat als de nieuwe eigenaar de huurovereenkomst wil beëindigen?",
        answer:
          "Een huurovereenkomst is onderworpen aan de huurwetgeving. Als huurder heeft u recht op de wettelijke opzegtermijnen. Bij een notarieel vastgelegd vruchtgebruik of recht van bewoning kan de nieuwe eigenaar dit recht niet eenzijdig beëindigen.",
      },
    ],
  },
  {
    slug: "pand-in-slechte-staat-verkopen",
    title: "Een pand in slechte staat verkopen: wat zijn uw opties?",
    metaTitle: "Pand in slechte staat verkopen in Antwerpen 2025 | wijkopenpanden.be",
    metaDescription:
      "Hoe verkoopt u een woning die gerenoveerd moet worden? Wat kunt u verwachten qua prijs, en wat zijn de voor- en nadelen van renoveren voor verkoop vs. as-is verkopen?",
    publishedAt: "2025-04-01",
    updatedAt: "2025-04-10",
    intro:
      "Niet elke woning die te koop staat is instapklaar. Vochtschade, verouderde elektriciteit, een slecht dak, een verouderde keuken of zelfs een ongezonde staat — het zijn allemaal factoren die de marktwaarde drukken en het verkoopproces compliceren. In dit artikel bespreken we uw opties en wanneer het zinvol is om te renoveren voor verkoop.",
    sections: [
      {
        heading: "Renoveren voor verkoop: wanneer loont het?",
        body: "De vuistregel bij renoveren voor verkoop is eenvoudig: de meerkost van de renovatie moet leiden tot een minstens even grote stijging van de verkoopprijs. In de praktijk is dit zelden zo.\n\nKopers die een gerenoveerde woning zoeken, zijn bereid meer te betalen, maar ook zij onderhandelen. Bovendien houden zij rekening met het risico dat een renovatie verborgen gebreken heeft verhuld.\n\nRenovaties die doorgaans wél lonen:\n• Dakrenovatie (lekken, isolatie)\n• Schilderwerken (neutrale kleuren, professioneel uitgevoerd)\n• Opkuisen en depersonaliseren van de tuin\n\nRenovaties die zelden lonen:\n• Nieuwe keuken of badkamer (smaakgebonden, kopers willen vaak toch iets anders)\n• Vloer vervangen (tenzij beschadigde vloer de verkoop tegenhoudt)\n• Volledige elektrische renovatie (hoge kostprijs, beperkte zichtbaarheid)",
      },
      {
        heading: "Verkopen as-is: voor- en nadelen",
        body: "Een woning as-is verkopen betekent dat u de woning in haar huidige staat te koop stelt, zonder voorafgaande renovaties. U bent transparant over de staat van het pand.\n\nVoordelen:\n• Geen investeringen vóór de verkoop\n• Geen tijdverlies door werken\n• Geen risico dat de renovatie niet naar de zin van de koper is\n• Geschikt voor erfeniswoningen, huurpanden of situaties met tijdsdruk\n\nNadelen:\n• De vraagprijs is lager dan bij een gerenoveerd pand\n• Minder kopers op de vrije markt zijn geïnteresseerd (veel kopers zoeken instapklare woningen)\n• Mogelijke problemen met financiering van de koper (banken financieren soms moeilijker bij slechte staat)",
      },
      {
        heading: "Verplichte keuringen bij een woning in slechte staat",
        body: "Ook een woning in slechte staat moet voldoen aan de verplichte attesten: EPC, elektriciteitskeuring en asbestinventaris. Bij een pand in slechte staat is de kans op een niet-conform elektriciteitsattest of hoog asbestgehalte groter.\n\nDit zijn geen blokkerende factoren voor de verkoop, maar u moet de koper transparant informeren. Bij een verkoop aan wijkopenpanden.be nemen wij alle keuringskosten over en houden we in ons bod rekening met de vastgestelde staat.",
      },
      {
        heading: "Wat biedt wijkopenpanden.be voor een opknapper?",
        body: "Wij kopen woningen in elke staat — van licht op te frissen tot structureel te renoveren. Ons bod houdt rekening met de geschatte renovatiekost en de marktwaarde na renovatie. Wij verdienen ons geld door de woning zelf te renoveren en te verkopen of te verhuren, niet door u kosten aan te rekenen.\n\nVoordeel voor u als verkoper: u hoeft niets te doen. Geen herstellingen, geen keuringen, geen onderhandelingen met aannemers. U ontvangt een schriftelijk bod na één bezoek en beslist vrijblijvend.",
      },
      {
        heading: "Hoe beïnvloedt de staat van de woning het bod?",
        body: "Ons bod houdt rekening met:\n\n• Geschatte renovatiekost (structurele gebreken wegen zwaarder dan cosmetische)\n• Staat van de elektriciteit, dakbedekking, riolering en verwarmingsinstallatie\n• Aanwezigheid van asbest\n• EPC-label en geschatte energetische investeringen\n• Marktwaarde van vergelijkbare panden in de buurt na renovatie\n\nWij zijn transparant over onze berekening en leggen u uit hoe we tot ons bod zijn gekomen.",
      },
    ],
    relatedArticles: ["keuringen-bij-verkoop-woning", "epc-attest-antwerpen", "verkoop-kosten-berekenen"],
    relatedSituations: ["opknappand-verkopen", "huis-verkopen-bij-erfenis"],
    faqs: [
      {
        question: "Kan ik een woning met vochtschade verkopen zonder te renoveren?",
        answer:
          "Ja, maar u bent verplicht de koper te informeren over gekende gebreken. Verborgen gebreken niet melden kan leiden tot juridische claims achteraf. As-is verkopen aan een professionele opkoper is de meest transparante en snelste optie.",
      },
      {
        question: "Hoeveel minder biedt een opkoper voor een woning in slechte staat?",
        answer:
          "Dat hangt af van de renovatiekost. Een cosmetische opknapper (verf, vloer) leidt tot een kleine korting; structurele problemen (dak, fundering, asbest) leiden tot een grotere aftrek. Wij leggen onze berekening transparant uit na het bezoek.",
      },
      {
        question: "Moet ik de elektriciteit laten renoveren voor ik verkoop?",
        answer:
          "Nee. U mag een woning met een niet-conforme elektrische installatie verkopen. De koper is dan verplicht de installatie binnen 18 maanden conform te laten maken. Bij een verkoop aan wijkopenpanden.be is dit geen probleem — wij nemen die verplichting over.",
      },
      {
        question: "Is een renovatiekrediet interessant om de waarde te verhogen voor verkoop?",
        answer:
          "Zelden. De rente en terugbetaling van een renovatiekrediet komen bovenop de renovatiekost zelf. Tenzij de renovatie aantoonbaar meer opbrengt dan ze kost (inclusief rente en tijdverlies), is het financieel niet interessant.",
      },
    ],
  },
  {
    slug: "belastingen-bij-woningverkoop",
    title: "Belastingen bij woningverkoop in België: wat betaalt u echt?",
    metaTitle: "Belastingen bij woningverkoop in België 2025 | wijkopenpanden.be",
    metaDescription:
      "Welke belastingen betaalt u bij de verkoop van uw woning in België? Meerwaardebelasting, registratierechten, onroerende voorheffing — alles uitgelegd met praktische voorbeelden.",
    publishedAt: "2025-05-01",
    updatedAt: "2025-05-28",
    intro:
      "Veel eigenaars zijn verrast door de belastingen die komen kijken bij de verkoop van een woning. Sommige belastingen zijn de verantwoordelijkheid van de koper, andere van de verkoper — en de regels verschillen naargelang de situatie. In dit artikel zetten we de belangrijkste fiscale aspecten op een rij, zodat u weet wat u kunt verwachten.",
    sections: [
      {
        heading: "Meerwaardebelasting: wanneer betaalt u belasting op uw winst?",
        body: "België kent geen algemene meerwaardebelasting op de verkoop van onroerend goed voor particulieren. Er zijn echter uitzonderingen:\n\nEigen woning (hoofdverblijfplaats): als u uw eigen woning verkoopt waar u effectief in woont, betaalt u in de regel geen meerwaardebelasting. De vrijstelling geldt ongeacht de winst die u maakt.\n\nVastgoed dat u minder dan 5 jaar bezit: bij de verkoop van een woning of grond die u minder dan 5 jaar geleden kocht, kan een meerwaarde worden belast. Voor gebouwen geldt een tarief van 16,5% op de meerwaarde; voor gronden is dat 33% bij verkoop binnen 5 jaar en 16,5% tussen 5 en 8 jaar.\n\nErfenis en schenking: gronden die u heeft gekregen via erfenis of schenking en daarna snel doorverkoopt, kunnen eveneens aanleiding geven tot een belastbare meerwaarde. De berekeningsbasis is de waarde op het moment van overlijden of schenking.\n\nProfessioneel vastgoed: als de belastingdienst de verkoop beschouwt als een beroepsmatige activiteit (herhaling van aankopen en verkopen), wordt de volledige winst belast als beroepsinkomen aan het progressieve tarief.",
      },
      {
        heading: "Registratierechten: wie betaalt wat?",
        body: "Registratierechten zijn de belasting die bij de notariële akte geheven wordt. In België zijn dit de verantwoordelijkheid van de koper — niet van de verkoper.\n\nAls verkoper betaalt u dus geen registratierechten. Wel betaalt u de notariskosten voor de opmaak van de akte aan koperskant, maar ook die zijn technisch een koperskost.\n\nWat de verkoper wél betaalt: de kosten van uw eigen notaris (als u er een aanstelt). Dit is optioneel maar aanbevolen bij complexe situaties zoals erfenis of scheiding.\n\nBij een verkoop aan wijkopenpanden.be betalen wij alle registratierechten en notariskosten aan koperskant. U ontvangt het overeengekomen bod netto.",
      },
      {
        heading: "Onroerende voorheffing: geen pro-rata meer",
        body: "Tot 2014 werd de onroerende voorheffing pro-rata verdeeld tussen verkoper en koper (naar rato van de bezitsduur in het kalenderjaar). Sindsdien is deze regeling afgeschaft in Vlaanderen.\n\nDe eigenaar op 1 januari van het belastingjaar betaalt de volledige jaarlijkse onroerende voorheffing. Als u uw woning verkoopt in de loop van het jaar, betaalt u nog steeds de volledige jaarlijkse aanslag voor dat jaar — ongeacht wanneer de akte wordt getekend.\n\nDit is een punt waarover onderhandeld kan worden in de koopovereenkomst, maar de belastingdienst houdt zich aan de eigenaar op 1 januari.",
      },
      {
        heading: "Btw bij nieuwbouw en ingrijpend gerenoveerde woningen",
        body: "Bij de verkoop van een nieuwbouwwoning of een ingrijpend gerenoveerde woning is de verkoper btw-plichtig. Het tarief is 21% op de verkoopprijs (excl. grond). De koper betaalt de btw; de verkoper int deze en stort ze door aan de overheid.\n\nAls particulier die zijn eigen woning verkoopt, bent u in de regel geen btw-plichtige. Dit geldt enkel voor professionele verkopers (bouwpromotoren) of particulieren die hun woning als 'nieuw' verkopen (binnen 2 jaar na eerste ingebruikname).\n\nIn de Antwerpse markt speelt dit voornamelijk bij appartementen in nieuwbouwprojecten. Als u een oudere woning verkoopt, is btw niet van toepassing.",
      },
      {
        heading: "Belasting bij een erfeniswoning",
        body: "Als u een woning erft en verkoopt, betaalt u eerst erfbelasting (successierechten) op de waarde van het geërfde vermogen. Erfbelasting in Vlaanderen is progressief en afhankelijk van de verwantschap met de overledene.\n\nNa de erfenis: bij de latere verkoop van de geërfde woning is de meerwaarde in principe niet belastbaar als u de woning meer dan 5 jaar na het overlijden verkoopt. Bij snelle verkoop (binnen de grenzen van de meerwaardebelasting) gelden de regels van de meerwaarde zoals hierboven beschreven.\n\nPraktisch: als meerdere erfgenamen de woning willen verkopen, moet er overeenstemming zijn over de verkoopprijs. Raadpleeg een notaris of gebruik een opkoper die de overdracht volledig coördineert.",
      },
      {
        heading: "Overzicht: belastingen bij de verkoop",
        body: "Samengevat",
        table: {
          headers: ["Belasting", "Wie betaalt?", "Tarief", "Uitzondering"],
          rows: [
            ["Meerwaardebelasting", "Verkoper", "16,5% – 33% (of 0%)", "Eigen woning: vrijgesteld"],
            ["Registratierechten", "Koper", "Niet van toepassing voor verkoper", "–"],
            ["Onroerende voorheffing", "Eigenaar op 1 jan", "Kadastraal inkomen × coëfficiënt", "Geen pro-rata meer"],
            ["Btw", "Koper (incasseerd door verkoper)", "21% (enkel nieuwbouw)", "Oudere woningen: niet van toepassing"],
            ["Erfbelasting", "Erfgenaam", "Progressief (Vlaanderen)", "Echtgeno(o)t(e): vrijstelling gezinswoning"],
          ],
        },
      },
    ],
    relatedArticles: ["notariskosten-woning-verkoop", "verkoop-kosten-berekenen", "erfenis-woning-stappenplan"],
    relatedSituations: ["huis-verkopen-bij-erfenis", "huis-verkopen-bij-scheiding"],
    faqs: [
      {
        question: "Betaal ik belasting op de winst bij de verkoop van mijn woning?",
        answer:
          "Als u uw eigen woning (hoofdverblijfplaats) verkoopt, betaalt u in België geen meerwaardebelasting op de winst. Bij een tweede woning of investeringspand gelden andere regels.",
      },
      {
        question: "Wie betaalt de registratierechten in België?",
        answer:
          "De registratierechten zijn een koperskost in België. Als verkoper betaalt u geen registratierechten. Wel betaalt u eventueel uw eigen notaris.",
      },
      {
        question: "Betaal ik onroerende voorheffing als ik mijn woning verkoop?",
        answer:
          "In Vlaanderen betaalt de eigenaar op 1 januari de volledige jaarlijkse onroerende voorheffing, ook als u de woning later dat jaar verkoopt. Dit kan onderhandeld worden in de koopakte.",
      },
      {
        question: "Is er btw verschuldigd bij de verkoop van een oudere woning?",
        answer:
          "Nee. Btw is enkel van toepassing bij nieuwbouw of ingrijpend gerenoveerde woningen die binnen 2 jaar na eerste ingebruikname worden verkocht. Bij oudere woningen geldt registratierecht (koperskost).",
      },
      {
        question: "Moet ik belasting betalen als ik een geërfde woning snel verkoop?",
        answer:
          "U betaalt erfbelasting op de geërfde waarde. De latere verkoop zelf is bij particulieren doorgaans niet belastbaar als meerwaarde, op voorwaarde dat de belastingdienst de transactie niet als speculatief bestempelt.",
      },
    ],
  },
  {
    slug: "mede-eigendom-verkopen",
    title: "Mede-eigendom verkopen in België: erfenis, scheiding en geblokkeerde situaties",
    metaTitle: "Mede-eigendom verkopen in België 2025 — erfenis, scheiding | wijkopenpanden.be",
    metaDescription:
      "Wat als een mede-eigenaar niet wil verkopen? Hoe verkoopt u een woning in onverdeeldheid na erfenis of scheiding? Alles over mede-eigendom en gedwongen verdeling in België.",
    publishedAt: "2025-05-10",
    updatedAt: "2025-05-28",
    intro:
      "Wanneer meerdere mensen samen eigenaar zijn van een woning, kan de verkoop vastlopen. Eén mede-eigenaar wil verkopen, een andere niet. Dit speelt het vaakst bij erfenissen en echtscheidingen. In dit artikel leggen we uit wat mede-eigendom inhoudt, welke opties u heeft en hoe u een geblokkeerde situatie kunt doorbreken.",
    sections: [
      {
        heading: "Wat is mede-eigendom?",
        body: "Mede-eigendom (of onverdeeldheid) ontstaat wanneer meerdere personen samen eigenaar zijn van hetzelfde goed. Elke eigenaar bezit een onverdeeld aandeel — niet een afgebakend deel van de woning, maar een percentage van het geheel.\n\nDit komt het vaakst voor bij:\n• Erfenis: meerdere erfgenamen erven samen een woning\n• Huwelijk of wettelijk samenwonen: beide partners zijn mede-eigenaar van de gezinswoning\n• Scheiding: ex-partners blijven na de feitelijke scheiding in onverdeeldheid totdat de woning verkocht of toebedeeld is\n• Gemeenschappelijke aankoop: vrienden of familieleden die samen een woning kopen\n\nDe wet erkent het recht van elke mede-eigenaar om uit de onverdeeldheid te treden. Niemand kan verplicht worden om eeuwig mede-eigenaar te blijven.",
      },
      {
        heading: "Verkopen bij erfenis: alle erfgenamen moeten akkoord gaan",
        body: "Na een overlijden komen de erfgenamen samen in onverdeeldheid. Voor de verkoop van de woning is in principe unanimiteit vereist: alle erfgenamen moeten instemmen met de verkoopprijs en de koper.\n\nAls één erfgenaam weigert mee te werken aan de verkoop, heeft u twee opties:\n\n1. Minnelijke schikking: probeer via overleg of via een notaris tot een akkoord te komen. Soms helpt een neutrale schatting om discussies over de prijs te beslechten.\n\n2. Gerechtelijke verdeling: als overleg mislukt, kan elke mede-eigenaar aan de vrederechter vragen om de onverdeeldheid te beëindigen. De rechter kan de verkoop opleggen via een openbare verkoping.\n\nDe gerechtelijke procedure duurt gemiddeld 1 tot 3 jaar en brengt kosten met zich mee (advocaat, gerechtskosten). De opbrengst van de gedwongen verkoop ligt doorgaans lager dan bij een minnelijke verkoop.",
      },
      {
        heading: "Mede-eigendom bij scheiding",
        body: "Bij een echtscheiding of beëindiging van wettelijk samenwonen blijven beide partners in onverdeeldheid over het gemeenschappelijke vastgoed totdat:\n• De woning verkocht wordt en de opbrengst verdeeld\n• Eén partner het aandeel van de andere overneemt (uitkoop)\n• De rechter een verdeling oplegt\n\nZolang de onverdeeldheid duurt, zijn beide partners verantwoordelijk voor de lasten (hypotheek, onroerende voorheffing, onderhoudskosten). Dit kan financieel belastend zijn als de relatie gebroken is.\n\nPraktisch advies: spreek zo snel mogelijk af wat er met de woning gebeurt. Een verkoop aan een opkoper kan de beslissing vereenvoudigen: de prijs is snel duidelijk, de overdracht verloopt snel, en beide partners ontvangen hun aandeel netto na akte.\n\nBij wijkopenpanden.be zijn we vertrouwd met deze situaties. Wij treden op als neutrale koper en werken mee met de notaris en advocaten van beide partijen.",
      },
      {
        heading: "Eén mede-eigenaar wil niet verkopen: wat nu?",
        body: "Als één mede-eigenaar weigert mee te werken, heeft u de volgende opties:\n\n1. Uw aandeel verkopen: u kunt uw eigen onverdeeld aandeel verkopen aan een derde partij. Dit is echter moeilijk in de praktijk — kopers voor een onverdeeld aandeel zijn schaars en de prijs ligt laag.\n\n2. Uitkoopbod: u biedt de blokkerende mede-eigenaar aan om zijn/haar aandeel over te nemen. Dit vereist financieringsmiddelen.\n\n3. Aanvraag gerechtelijke verdeling: via de vrederechter kunt u de beëindiging van de onverdeeldheid vorderen. De rechter kan een openbare verkoping bevelen als geen van de partijen het geheel kan overnemen.\n\n4. Bemiddeling: een notaris of erkend bemiddelaar kan het conflict helpen oplossen zonder rechtbank. Vaak goedkoper en sneller dan een procedure.\n\nEen professionele opkoper als wijkopenpanden.be kan in sommige gevallen rechtstreeks onderhandelen met alle mede-eigenaars samen, de verdeling coördineren en de overdracht vlot laten verlopen.",
      },
      {
        heading: "Praktisch: de rol van de notaris bij mede-eigendom",
        body: "Bij elke verkoop van mede-eigendom is een notaris verplicht. De notaris:\n• Stelt de verkoopovereenkomst en akte op\n• Verdeelt de opbrengst tussen de mede-eigenaars naar rato van hun aandeel\n• Vereffent de openstaande hypotheek (als die er is)\n• Zorgt voor de fiscale aangifte\n\nAls de mede-eigenaars verschillende notarissen willen, is dat mogelijk. De kopers- en verkopers-notaris werken dan samen.\n\nBij verkoop aan wijkopenpanden.be regelen wij de volledige coördinatie met de notaris(sen). U hoeft zich niet te bekommeren om de administratie.",
      },
    ],
    relatedArticles: ["erfenis-woning-stappenplan", "belastingen-bij-woningverkoop", "verkoop-kosten-berekenen"],
    relatedSituations: ["huis-verkopen-bij-erfenis", "huis-verkopen-bij-scheiding"],
    faqs: [
      {
        question: "Kan ik mijn woning verkopen als één mede-eigenaar weigert?",
        answer:
          "Niet zonder instemming van alle mede-eigenaars. Als overleg mislukt, kunt u via de vrederechter een gerechtelijke verdeling vorderen. Dit kan leiden tot een gedwongen openbare verkoop.",
      },
      {
        question: "Hoe lang duurt een gerechtelijke verdeling in België?",
        answer:
          "Gemiddeld 1 tot 3 jaar, afhankelijk van de complexiteit en de bereidheid van partijen. Een minnelijke schikking via bemiddeling of notaris is veel sneller.",
      },
      {
        question: "Kan ik mijn onverdeeld aandeel verkopen zonder akkoord van de andere eigenaar?",
        answer:
          "Technisch ja, maar in de praktijk nauwelijks mogelijk. Kopers voor een onverdeeld aandeel zijn uiterst zeldzaam en de prijs ligt ver onder de marktwaarde.",
      },
      {
        question: "Wat als ex-partners het niet eens zijn over de waarde van de woning?",
        answer:
          "Een neutrale schatting door een beëdigd schatter of notaris kan discussies beslechten. Als dit niet volstaat, kan de rechter een schatter aanstellen.",
      },
      {
        question: "Verkoopt wijkopenpanden.be ook bij mede-eigendom?",
        answer:
          "Ja. Wij zijn vertrouwd met situaties van mede-eigendom na erfenis of scheiding. Wij coördineren met alle betrokken partijen en hun notarissen, en zorgen voor een vlotte overdracht.",
      },
    ],
  },
  {
    slug: "snel-geld-vrijmaken-woning",
    title: "Snel geld vrijmaken uit uw woning: alle opties naast elkaar",
    metaTitle: "Snel geld vrijmaken uit uw woning in België 2025 | wijkopenpanden.be",
    metaDescription:
      "Wilt u snel geld vrijmaken uit uw woning zonder te verhuizen of met snelle verkoop? Vergelijking van alle opties: verkoop aan opkoper, herfinanciering, lijfrente, sale-and-leaseback.",
    publishedAt: "2025-05-20",
    updatedAt: "2025-05-28",
    intro:
      "Uw woning is waarschijnlijk uw grootste vermogen. Maar vermogen dat in stenen zit, is niet direct beschikbaar. Er zijn verschillende manieren om kapitaal vrij te maken uit uw woning — elk met andere voor- en nadelen. Dit artikel vergelijkt alle opties eerlijk, zodat u de juiste keuze kunt maken voor uw situatie.",
    sections: [
      {
        heading: "Optie 1: verkoop via makelaar",
        body: "De meest bekende weg: u stelt uw woning te koop via een makelaar en wacht op een koper. Dit levert in principe de hoogste prijs op, maar er zijn nadelen:\n\n• Tijdlijn: gemiddeld 3 tot 9 maanden van beslissing tot akte in de Antwerpse markt\n• Onzekerheid: u weet niet wanneer u verkoopt of voor welke prijs\n• Kosten: makelaarscommissie, keuringen, publicatie, mogelijk herstellingen\n• U moet de woning verlaten op de afgesproken datum\n\nGeschikt voor wie: voldoende tijd heeft, de woning verlaat en de maximale prijs nastreeft.",
      },
      {
        heading: "Optie 2: verkoop aan een vastgoedopkoper",
        body: "Een opkoper koopt uw woning rechtstreeks aan, zonder makelaar, zonder publicatie en zonder wachttijd. De prijs ligt lager dan de theoretische maximumprijs, maar het nettoverschil is kleiner dan het lijkt als u alle kosten en de wachttijd van een klassieke verkoop meerekent.\n\nVoordelen:\n• Zekerheid over datum en prijs: schriftelijk bod na één bezoek\n• Geen commissie, keuringen of ontruimingskosten: volledig voor rekening van de opkoper\n• Snelheid: gemiddeld 2 tot 3 maanden van aanvraag tot akte\n• Geen bezichtigingen: geen vreemden in uw woning\n\nBij wijkopenpanden.be ontvangt u een vrijblijvend schriftelijk bod na één bezoek. Wij nemen alle keuringen, de ontruiming en de notariscoördinatie op ons.\n\nGeschikt voor wie: snel zekerheid nodig heeft, de woning in huidige staat wil verkopen of een complexe situatie heeft (erfenis, scheiding, huurders).",
      },
      {
        heading: "Optie 3: herfinanciering of hypothecaire lening",
        body: "Als u uw woning niet wilt verlaten maar toch kapitaal nodig heeft, kunt u een nieuwe hypothecaire lening aangaan op uw woning (mits voldoende equity).\n\nVoordelen:\n• U blijft eigenaar en behoudt de woning\n• Lage rente ten opzichte van persoonlijke leningen\n\nNadelen:\n• U betaalt maandelijkse aflossingen\n• De bank beoordeelt uw financiële situatie (inkomen, leeftijd)\n• Na 65 jaar of bij pensioen is herfinanciering moeilijker te bekomen\n• Schuld op de woning vergroot het risico als u later toch moet verkopen\n\nGeschikt voor wie: over voldoende inkomen beschikt voor aflossingen en tijdelijk kapitaal nodig heeft.",
      },
      {
        heading: "Optie 4: lijfrente",
        body: "Bij een lijfrenteverkoop verkoopt u uw woning aan een koper (of aan wijkopenpanden.be) in ruil voor een maandelijks gegarandeerd inkomen — de lijfrente — voor de rest van uw leven. U behoudt het recht om in de woning te blijven wonen.\n\nVoordelen:\n• Levenslang aanvullend inkomen, ongeacht hoe lang u leeft\n• U hoeft niet te verhuizen\n• Zekerheid voor beide partijen, vastgelegd bij notaris\n\nNadelen:\n• U ontvangt geen groot eenmalig bedrag\n• Als u vroeg overlijdt, heeft u minder ontvangen dan bij een klassieke verkoop\n• Erfgenamen erven de woning niet meer\n\nGeschikt voor wie: senioren die hun pensioen willen aanvullen en in de woning willen blijven wonen.",
      },
      {
        heading: "Optie 5: sale-and-leaseback (verkopen en blijven huren)",
        body: "U verkoopt uw woning en tekent tegelijk een huurcontract, zodat u er kunt blijven wonen als huurder. U ontvangt de volledige verkoopprijs en betaalt maandelijkse huur.\n\nVoordelen:\n• Direct groot kapitaal beschikbaar\n• U verhuist niet\n• Geen onderhoudsplicht meer als eigenaar\n\nNadelen:\n• U bent geen eigenaar meer van de woning\n• Huurprijs is afhankelijk van marktomstandigheden\n• Bij opzegging van de huurovereenkomst moet u op zoek naar nieuwe woning\n\nBij wijkopenpanden.be bieden we deze formule standaard aan. De huurprijs en de duur worden vastgelegd bij de verkoop, zodat u zekerheid heeft.\n\nGeschikt voor wie: kapitaal nodig heeft maar niet direct wil of kan verhuizen.",
      },
      {
        heading: "Vergelijking van alle opties",
        body: "Overzichtstabel",
        table: {
          headers: ["Optie", "Snel geld?", "Blijven wonen?", "Eigendom kwijt?", "Maandelijkse lasten?"],
          rows: [
            ["Verkoop via makelaar", "Na 3–9 mnd", "Nee", "Ja", "Nee"],
            ["Verkoop aan opkoper", "Na 2–3 mnd", "Nee (of ja via huur)", "Ja", "Nee (of huur)"],
            ["Herfinanciering", "Ja (lening)", "Ja", "Nee", "Ja (aflossingen)"],
            ["Lijfrente", "Maandelijks", "Ja (levenslang)", "Ja", "Nee"],
            ["Sale-and-leaseback", "Ja (eenmalig)", "Ja (als huurder)", "Ja", "Ja (huur)"],
          ],
        },
      },
    ],
    relatedArticles: ["lijfrente-uitgelegd", "blijven-wonen-na-verkoop", "verkoop-kosten-berekenen"],
    relatedSituations: ["blijven-wonen", "huis-verkopen-bij-erfenis"],
    faqs: [
      {
        question: "Hoe kan ik snel geld vrijmaken uit mijn woning zonder te verkopen?",
        answer:
          "De meest gebruikelijke manier is een hypothecaire lening op uw woning. Als u ouder bent of geen inkomen meer heeft, is dit moeilijker. Een lijfrenteverkoop of sale-and-leaseback zijn dan alternatieven waarbij u wel verkoopt maar in de woning blijft.",
      },
      {
        question: "Is verkopen aan een opkoper de snelste manier om geld vrij te maken?",
        answer:
          "Ja, als u de woning wilt verkopen. Bij wijkopenpanden.be ontvangt u een schriftelijk bod na één bezoek en wordt de akte gemiddeld binnen 2 tot 3 maanden getekend. Er zijn geen keuringskosten, geen commissie en geen wachttijd.",
      },
      {
        question: "Wat is het verschil tussen lijfrente en sale-and-leaseback?",
        answer:
          "Bij een lijfrente ontvangt u een maandelijks inkomen voor de rest van uw leven en behoudt u het recht om te wonen. Bij sale-and-leaseback ontvangt u de volledige verkoopprijs in één keer en betaalt u daarna maandelijkse huur.",
      },
      {
        question: "Kan ik mijn woning verkopen en er toch in blijven wonen?",
        answer:
          "Ja, via een sale-and-leaseback (huurovereenkomst) of via een vruchtgebruikconstructie. Wijkopenpanden.be biedt beide formules aan. U verkoopt de woning en sluit tegelijk een huurcontract of vruchtgebruik af.",
      },
      {
        question: "Voor wie is een lijfrenteverkoop interessant?",
        answer:
          "Hoofdzakelijk voor senioren die hun pensioen willen aanvullen, geen erfgenamen hebben of wens om te erven, en in hun woning willen blijven. De fiscale behandeling van lijfrente is in bepaalde situaties voordelig.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
