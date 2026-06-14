import type { Article } from "./types";

export const articles: Article[] = [
  {
    slug: "commissie-makelaar-belgie",
    title: "Makelaarsloon in België: wat betaalt u echt?",
    metaTitle: "Makelaarsloon in België 2026 — wat betaalt u echt? | wijkopenpanden.be",
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
    metaTitle: "Verplichte keuringen bij woningverkoop in België 2026 | wijkopenpanden.be",
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
    metaTitle: "Verkoopkosten woning berekenen in België 2026 | wijkopenpanden.be",
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
    metaTitle: "EPC-attest aanvragen in Antwerpen 2026 — kosten en procedure | wijkopenpanden.be",
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
        body: "Een woning met label E of F:\n\n• Scoort minder aantrekkelijk bij potentiële kopers op vastgoedportalen\n• Kan moeilijker te financieren zijn — banken passen soms strengere voorwaarden toe bij label E/F\n• Kan aanleiding geven tot prijsonderhandelingen door de koper\n• In Vlaanderen geldt een renovatieverplichting bij aankoop van woningen met label E of F: de nieuwe eigenaar moet binnen zes jaar na de akte het pand renoveren tot minimaal label D (termijn verlengd van 5 naar 6 jaar in 2026)\n\nHet verstrengingspad naar label C (gepland voor 2028) is definitief geschrapt. Label D blijft de enige wettelijke doelstelling. Eigenaars die nu verkopen, doen er goed aan transparant te zijn over de energiestaat.",
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
    metaTitle: "Erfenis woning verkopen in België — stappenplan 2026 | wijkopenpanden.be",
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
        body: "De successierechten moeten worden betaald binnen twee maanden na het indienen van de aangifte. Sinds 1 januari 2026 gelden nieuwe tarieven in Vlaanderen:\n\n• In rechte lijn (kinderen, partner): 3% tot 27% (maximumtarief verlaagd van 30% naar 27% in 2026)\n• Zijlijn (broers, zusters): hogere tarieven\n• Vreemden: hoogste tarieven\n• Partners genieten een vrijstelling op roerende goederen tot €75.000 (verhoogd van €50.000 in 2026)\n\nBij een geërfde woning kan dit een aanzienlijk bedrag zijn. Als de erfgenamen onvoldoende liquiditeiten hebben, kan dit een extra reden zijn om de woning snel te verkopen.\n\nBelangrijk: u kunt successierechten betalen vóór de woning is verkocht. De Vlaamse Belastingdienst kent geen uitstel van betaling toe louter omwille van een lopende verkoop.",
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
    metaTitle: "Notariskosten bij woningverkoop in België 2026 | wijkopenpanden.be",
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
        body: "Bij de aankoop van een woning in Vlaanderen betaalt de koper registratierechten op de koopprijs. Sinds 1 januari 2025 bedraagt het verlaagde tarief 2% voor de enige en eigen woning (daarvoor 3%). Het standaardtarief voor andere onroerende goederen blijft 12%.\n\nVanaf 1 januari 2026 gelden strengere voorwaarden voor het 2%-tarief: de koper moet een natuurlijk persoon zijn, volle eigendom verwerven, en zich binnen drie jaar domiciliëren aan het adres voor minstens één ononderbroken jaar.\n\nDit tarief is voor de koper relevant, maar beïnvloedt ook de onderhandeling: hoe hoger de registratierechten, hoe meer kopers de netto aankoopprijs willen beperken.",
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
    metaTitle: "Lijfrente woning verkopen uitgelegd 2026 | wijkopenpanden.be",
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
    metaTitle: "Pand in slechte staat verkopen in Antwerpen 2026 | wijkopenpanden.be",
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
    metaTitle: "Belastingen bij woningverkoop in België 2026 | wijkopenpanden.be",
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
    metaTitle: "Mede-eigendom verkopen in België 2026 — erfenis, scheiding | wijkopenpanden.be",
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
    metaTitle: "Snel geld vrijmaken uit uw woning in België 2026 | wijkopenpanden.be",
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
  {
    slug: "energie-renovatieplicht-vlaanderen-2026",
    title: "Energie-renovatieplicht Vlaanderen 2026: wat betekent het voor uw woning?",
    metaTitle: "Energie-renovatieplicht Vlaanderen 2026 — gevolgen voor verkopers | wijkopenpanden.be",
    metaDescription:
      "Heeft uw woning EPC-label E of F? De Vlaamse renovatieplicht verplicht kopers tot renovatie binnen 6 jaar. Wat betekent dit voor uw verkoopprijs — en wat zijn uw opties?",
    publishedAt: "2026-05-28",
    updatedAt: "2026-05-28",
    intro:
      "Wie in Vlaanderen een woning koopt met een laag energieprestatieattest — EPC-label E of F — is wettelijk verplicht om die woning binnen zes jaar te renoveren tot minstens label D. Die verplichting rust op de koper, niet op de verkoper. Maar eigenaars voelen de gevolgen rechtstreeks in hun verkoopprijs: kopers trekken de geschatte renovatiekost systematisch af van hun bod. In dit artikel leggen we uit wat de renovatieplicht precies inhoudt, welke woningen in Antwerpen het zwaarst getroffen zijn, en welke opties u als eigenaar heeft.",
    sections: [
      {
        heading: "Wat houdt de Vlaamse renovatieplicht precies in?",
        body: "Sinds 1 januari 2023 geldt in Vlaanderen een verplicht renovatietraject voor residentieel vastgoed met een laag EPC-label. De regels in een notendop:\n\n• Wie een woning koopt met EPC-label E of F, moet die woning binnen 6 jaar na de aankoopdatum renoveren tot minstens EPC-label D.\n• De verplichting geldt voor de KOPER — niet voor de huidige eigenaar. U bent als verkoper niet verplicht zelf te renoveren voor de verkoop.\n• Woningen met EPC-label A+, A, B, C of D vallen niet onder de renovatieplicht.\n• De verplichting wordt opgevolgd via de Vlaamse overheid en gekoppeld aan de akte.\n• De termijn is in 2026 versoepeld van 5 naar 6 jaar — ook voor lopende verplichtingen van vóór 2026.\n\nBelangrijke update 2026: het eerder geplande verstrengingspad (label C verplicht vanaf 2028, label B vanaf 2035) is definitief geschrapt. Label D blijft de enige wettelijke doelstelling.",
      },
      {
        heading: "Welke woningen in Antwerpen vallen hieronder?",
        body: "De impact van de renovatieplicht is ongelijk verdeeld over de Antwerpse vastgoedmarkt. Het grootste deel van de getroffen woningen zijn rijhuizen en appartementen uit de eerste helft van de twintigste eeuw — vaak gebouwd zonder of met minimale isolatie.\n\nTypisch aangetaste types per wijk:\n\n• Seefhoek en Antwerpen-Noord: arbeiderswoning jaren 1890–1940, smal, slecht geïsoleerd, vaak EPC label E of F. Dit zijn de meest voorkomende gevallen in onze portefeuille.\n• Borgerhout: gemengd. Rijhuizen met originele gevelopbouw kunnen label E of F hebben; recent gerenoveerde panden vaak label C of beter.\n• Deurne en Berchem: ruimere woningen uit de jaren 1930–1960. Meer variatie in energielabels. Woningen zonder dakisolatie of met oud verwarmingssysteem scoren vaak label E.\n• Zurenborg: beschermde panden met erfgoedverplichtingen. Renovatie naar label D is hier technisch moeilijker en duurder. Veel eigenaars stuiten op beperkingen bij het isoleren van de gevel.\n\nVuistregel: elke woning met een gasketel ouder dan 15 jaar, zonder dakisolatie en zonder dubbele beglazing haalt zelden beter dan label D.",
      },
      {
        heading: "Wat kost een renovatie van label E of F naar label D?",
        body: "De renovatiekost hangt sterk af van het vertrekpunt (hoe slecht is het label?) en de woning zelf (grootte, bouwjaar, constructietype). Op basis van de Antwerpse markt zijn dit de gangbare kostenposten:\n\nDakisolatie:\nVoor een rijhuis van 80–120 m² bedraagt dakisolatie (spouwisolatie of nieuwe dakbedekking met isolatie) gemiddeld €4.000 tot €12.000.\n\nVervanging van de verwarmingsinstallatie:\nEen condensatieketel vervangen door een warmtepomp kost inclusief installatie €10.000 tot €18.000. Subsidies van de Vlaamse overheid (VEKA-premies) kunnen dit terugbrengen met €3.000 tot €7.000.\n\nGevelisolatie of binnenisolatie:\nBij smalle rijhuizen in de stad is buitenisolatie zelden mogelijk (stedenbouwkundige bezwaren, burenakkoord). Binnenisolatie kost €4.000 tot €15.000 afhankelijk van het oppervlak.\n\nVervanging van beglazing:\nEnkel naar dubbel glas: €3.000 tot €10.000 afhankelijk van het aantal ramen.\n\nTotaalraming voor een doorsnee Antwerps rijhuis van EPC E naar D:\n€20.000 tot €45.000, afhankelijk van de staat en het bouwjaar.\n\nVoor een appartement met label F in een oud gebouw kan de kost oplopen tot €50.000 of meer als het gaat om gedeelde installaties (stookplaats van de VME).",
      },
      {
        heading: "Impact op de verkoopprijs: hoe rekenen kopers dit in?",
        body: "Kopers die een woning met EPC E of F willen kopen, weten dat ze binnen zes jaar moeten investeren. Ze berekenen dit systematisch:\n\n1. Ze schatten de renovatiekost (of vragen een renovatiedeskundige).\n2. Ze trekken die kost af van de prijs die ze bereid zouden zijn te betalen voor een label D-woning.\n3. Bovendien verhogen ze de risicopremie: stel dat de renovatiekost hoger uitvalt, of dat ze de aannemer niet vinden.\n\nIn de praktijk betekent dit:\n• Een rijhuis dat zonder renovatieverplichting €250.000 waard is, wordt bij EPC F aangeboden voor €210.000 of minder.\n• De onderhandeling verloopt moeilijker: kopers die op zoek zijn naar een instapklare woning haken af.\n• Financiering: sommige banken weigeren of bemoeilijken het hypothecaire krediet voor woningen met zeer laag EPC-label.\n\nVoor eigenaar-verkopers die zelf niet wensen te renoveren, zijn de opties beperkt: de prijs lager stellen dan gewenst, of zoeken naar een koper die de renovatieverplichting als een kans beschouwt — zoals een vastgoedopkoper.",
      },
      {
        heading: "Vergelijking: renoveren voor verkoop vs. as-is verkopen",
        body: "Sommige eigenaars overwegen om zelf te renoveren voor de verkoop om een hogere prijs te halen. De rekensom is bijna nooit gunstig.",
        table: {
          headers: ["Scenario", "Tijdlijn", "Kostprijs eigenaar", "Verwachte verkoopprijs", "Netto resultaat"],
          rows: [
            [
              "Renoveren tot label D, dan verkopen via makelaar",
              "12–24 maanden",
              "€25.000–€45.000 (renovatie) + commissie",
              "Marktprijs voor label D",
              "Investering amper terugverdiend",
            ],
            [
              "As-is verkopen via makelaar (EPC E/F)",
              "6–12 maanden",
              "Commissie + keuringen",
              "Marktprijs min renovatiekorting",
              "Lang traject, onzekerheid",
            ],
            [
              "As-is verkopen aan wijkopenpanden.be",
              "2–3 maanden",
              "Geen commissie, geen keuringen",
              "Eerlijk bod rekening houdend met EPC",
              "Snel, zeker, geen vooruitgave",
            ],
          ],
        },
      },
      {
        heading: "Wat doet wijkopenpanden.be met woningen met laag EPC-label?",
        body: "Wij kopen woningen met EPC-label E, F en ook D rechtstreeks aan — ook als ze renovatieplichtig zijn na onze aankoop. De renovatieverplichting gaat over op ons als koper. Wij rekenen de renovatiekost intern in en trekken die niet ongefundeerd van uw prijs af: wij baseren ons op werkelijke renovatieramingen, niet op overdreven angstcijfers.\n\nVoordelen voor u als eigenaar:\n• Geen voorafgaande renovatie nodig\n• Geen keuringskosten (EPC, elektriciteit, asbest) — die zijn voor ons\n• Geen makelaar, geen commissie\n• Schriftelijk bod na één bezoek\n• Akte binnen 2 tot 3 maanden\n\nWij leggen u bij het bezoek transparant uit hoe wij het EPC-label meewegen in ons bod. U beslist vrijblijvend.",
      },
    ],
    relatedArticles: ["epc-attest-antwerpen", "keuringen-bij-verkoop-woning", "pand-in-slechte-staat-verkopen"],
    relatedSituations: ["opknappand-verkopen", "verkopen-zonder-makelaar"],
    faqs: [
      {
        question: "Ben ik als verkoper verplicht mijn woning te renoveren voor ik verkoop?",
        answer:
          "Nee. De Vlaamse renovatieplicht rust op de KOPER, niet op de verkoper. U mag uw woning met EPC-label E of F verkopen zonder zelf te renoveren. De koper neemt de renovatieplicht over bij de aankoop.",
      },
      {
        question: "Mag een bank een hypotheek weigeren voor een woning met EPC F?",
        answer:
          "Banken zijn niet wettelijk verplicht een hypotheek te weigeren, maar ze mogen strengere voorwaarden opleggen. In de praktijk vragen sommige banken een renovatieplan of een geblokkeerd renovatiekrediet bij de financiering van een EPC F-woning. Dit maakt de verkoop via de vrije markt complexer.",
      },
      {
        question: "Wat als een koper de renovatieplicht niet nakomt?",
        answer:
          "De Vlaamse overheid kan handhaven via een regularisatie-eis en eventuele boetes. In de praktijk wordt dit nog niet systematisch gecontroleerd, maar de regelgeving wordt strikter. De verplichting is echter een zaak tussen de koper en de overheid — als verkoper draagt u hiervoor geen verantwoordelijkheid na de akte.",
      },
      {
        question: "Hoe bepaalt wijkopenpanden.be het bod voor een EPC E of F woning?",
        answer:
          "Wij baseren ons op de marktwaarde van vergelijkbare gerenoveerde woningen in de buurt, min de geschatte renovatiekost op basis van werkelijke offertes. Wij werken met vaste aannemers en kennen de reële kosten. Wij verdienen geen geld door de renovatiekost te overdrijven — wij verdienen door de woning efficiënt te renoveren en te verkopen.",
      },
      {
        question: "Kan ik een woning met EPC F verkopen als de notaris er vragen over stelt?",
        answer:
          "Ja. De notaris zal de koper bij de akte informeren over de renovatieplicht en de koper bevestigt dit te weten. Dit is een verplichte mededeling, geen verkoopblokkade. Verkopen met EPC E of F is 100% legaal.",
      },
    ],
  },
  {
    slug: "stedenbouwkundige-overtreding-woning-verkopen",
    title: "Stedenbouwkundige overtreding: uw woning verkopen zonder te regulariseren",
    metaTitle: "Stedenbouwkundige overtreding woning verkopen Antwerpen 2026 | wijkopenpanden.be",
    metaDescription:
      "Heeft uw woning een niet-vergunde aanbouw, veranda of verbouwing? U kunt verkopen zonder te regulariseren — maar er zijn regels. Alles wat u moet weten in 2026.",
    publishedAt: "2026-06-04",
    updatedAt: "2026-06-04",
    intro:
      "In Antwerpen heeft een aanzienlijk deel van de rijhuizen, appartementen en opbrengsteigendommen op zijn minst één niet-vergunde constructie: een veranda achteraan, een dakkapel, een verbouwde zolder of een uitbreiding die nooit werd gemeld. Dat maakt de woning niet onverkoopbaar — maar het verandert het verkooptraject. In 2026 gelden bovendien nieuwe verplichtingen rond het maatregelenregister. In dit artikel leggen we uit wat een stedenbouwkundige overtreding precies inhoudt, hoe u ze opspoort, en welke opties u heeft als verkoper.",
    sections: [
      {
        heading: "Wat is een stedenbouwkundige overtreding?",
        body: "Een stedenbouwkundige overtreding — ook bouwovertreding of bouwmisdrijf genoemd — is elke constructie of verbouwing die werd uitgevoerd zonder de vereiste omgevingsvergunning, of in afwijking van de verleende vergunning.\n\nVoorbeelden die regelmatig voorkomen bij Antwerpse woningen:\n\n• Een veranda of terrasoverkapping achteraan, aangebracht zonder vergunning\n• Een zolderverdieping omgebouwd tot leefruimte of slaapkamer, niet vergund\n• Een bijgebouw (garage, tuinhuis, poolhouse) dat groter is dan de vrijgestelde oppervlakte\n• Een raamopening toegevoegd aan de zijgevel zonder vergunning\n• Een kelder vergroot of omgebouwd tot bewoonbare ruimte\n• Een dakkapel of dakvenster toegevoegd zonder omgevingsvergunning\n\nBelangrijke nuance: sommige kleine werken zijn vrijgesteld van vergunning (bijvoorbeeld een tuinberging onder een bepaalde oppervlakte). Wat vrijgesteld is en wat niet, hangt af van de Vlaamse regelgeving en het gemeentelijke stedenbouwkundige voorschrift.",
      },
      {
        heading: "Hoe weet u of uw woning een overtreding heeft?",
        body: "Er zijn drie manieren om dit te achterhalen:\n\n1. Stedenbouwkundig uittreksel opvragen\nBij de gemeente of via het Omgevingsloket kunt u een stedenbouwkundig uittreksel aanvragen. Dit document vermeldt alle bekende vergunningen, aanvragen én vastgestelde overtredingen voor uw perceel. De notaris vraagt dit sowieso op bij een verkoop.\n\n2. Vergelijking met de vergunningsplannen\nVraag bij de gemeente de originele vergunde plannen op en vergelijk ze met de huidige toestand. Elke afwijking is technisch een overtreding, ook als niemand er ooit iets van gezegd heeft.\n\n3. Maatregelenregister (nieuw in 2026)\nSinds april 2026 is het maatregelenregister verplicht te raadplegen bij elke verkoop. Dit nieuwe Vlaamse register bevat alle handhavingsmaatregelen (stakingsbevelen, herstelmaatregelen) die door Vlaamse overheidsdiensten werden opgelegd. De notaris is verplicht dit register te raadplegen en de bevindingen op te nemen in de akte.",
      },
      {
        heading: "Verjaringstermijn: 10 jaar in 2026",
        body: "Veel eigenaars hopen dat een overtreding 'verjaart' na verloop van tijd. Dat klopt deels — maar het is geen vrijbrief.\n\nSince 28 april 2024 is de verjaringstermijn voor stedenbouwkundige overtredingen in Vlaanderen verlengd van 5 naar 10 jaar. Dit betekent dat de overheid gedurende 10 jaar na de overtreding een straf- of herstelvordering kan instellen.\n\nBelangrijke nuance: verjaring is niet gelijk aan legalisering. Zelfs na 10 jaar:\n\n• Blijft de overtreding in het stedenbouwkundig uittreksel vermeld\n• Blijft de constructie juridisch onvergund\n• Kan een nieuwe handhavingsronde de overtreding alsnog oprakelen\n• Blijft financiering door banken moeilijker\n\nEnkel een regularisatievergunning of herstel naar de vergunde toestand lost het probleem definitief op.",
      },
      {
        heading: "Gevolgen voor de verkoop",
        body: "Een overtreding maakt uw woning niet onverkoopbaar, maar heeft wel concrete gevolgen:\n\nInformatieplicht\nU bent als verkoper verplicht de koper te informeren over gekende overtredingen via het stedenbouwkundig uittreksel. Verzwijgen kan na de verkoop leiden tot juridische claims wegens verborgen gebreken.\n\nKoper neemt de last over\nEens de akte getekend, gaan alle stedenbouwkundige lasten over op de koper. Die wordt de nieuwe eigenaar én de nieuwe verantwoordelijke voor de overtreding. Sommige kopers aanvaarden dit; anderen niet.\n\nBanken financieren moeilijker\nVeel banken weigeren een hypothecaire lening voor een woning met een geregistreerde onvergunde constructie, of stellen extra voorwaarden. Dit verkleint uw markt bij een klassieke verkoop.\n\nPrijsdruk\nKopers die de overtreding aanvaarden, rekenen de regularisatiekost of het risico systematisch af van hun bod.",
      },
      {
        heading: "Regulariseren voor de verkoop — wanneer loont het?",
        body: "Regularisatie is mogelijk als de onvergunde constructie voldoet aan de huidige stedenbouwkundige voorschriften (bestemmingsplan, bouwcode, rooilijnen). U vraagt dan een regularisatievergunning aan bij de gemeente.\n\nWanneer is regularisatie mogelijk?\n• De constructie bevindt zich niet in een beschermd of kwetsbaar gebied\n• De constructie voldoet aan de geldende bouwcodes en erfdienstbaarheden\n• Er zijn geen bezwaren van buren ingediend die juridisch standhouden\n\nWanneer is regularisatie niet mogelijk?\n• De constructie overschrijdt de maximale bouwhoogte of bezettingsgraad\n• Het gebouw staat in agrarisch of groengebied\n• De constructie schaadt beschermde erfgoedelementen (bijv. in Zurenborg)\n\nKosten en tijdlijn van regularisatie:\nEen regularisatiedossier via een architect kost doorgaans €1.500 tot €4.000 (architect + leges). De behandelingstijd bij de gemeente is gemiddeld 60 tot 105 dagen. Telt u de voorbereiding en bezwaartermijnen mee, dan bent u al snel 4 tot 6 maanden verder vooraleer u kunt verkopen.",
      },
      {
        heading: "Verkopen as-is aan wijkopenpanden.be — de praktische uitweg",
        body: "Wilt u uw woning niet regulariseren voor de verkoop? Dan is verkopen as-is de meest directe optie — op voorwaarde dat u transparant bent over de toestand.\n\nWijkopenpanden.be koopt woningen aan met stedenbouwkundige overtredingen. Wij:\n\n• Raadplegen zelf het stedenbouwkundig uittreksel en het maatregelenregister\n• Beoordelen de regulariseerbaarheid intern\n• Verrekenen de regularisatiekost eerlijk in ons bod — geen zwarte doos\n• Nemen de stedenbouwkundige last volledig over bij de akte\n• Regelen de regularisatie na de aankoop zelf, op ons tempo en budget\n\nVoor u als verkoper betekent dit: geen wachttijd, geen architect, geen gemeentelijke procedure voor de verkoop. U ontvangt een schriftelijk bod na één bezoek en beslist vrijblijvend.",
      },
    ],
    relatedArticles: ["keuringen-bij-verkoop-woning", "pand-in-slechte-staat-verkopen", "verkoop-kosten-berekenen"],
    relatedSituations: ["opknappand-verkopen", "huis-verkopen-bij-erfenis"],
    faqs: [
      {
        question: "Moet ik een stedenbouwkundige overtreding melden bij de verkoop?",
        answer:
          "Ja. U bent wettelijk verplicht de koper te informeren over alle gekende stedenbouwkundige overtredingen via het stedenbouwkundig uittreksel. Verzwijgen is juridisch riskant: de koper kan na de verkoop een vordering wegens verborgen gebreken instellen. Transparantie is zowel wettelijk verplicht als praktisch de beste aanpak.",
      },
      {
        question: "Kan ik een woning verkopen als er een stakingsbevel op rust?",
        answer:
          "Een stakingsbevel (bevel om werken te staken) is een formele handhavingsmaatregel. Het verschijnt in het nieuwe maatregelenregister (verplicht te raadplegen bij verkoop in 2026). Verkopen is in principe mogelijk, maar de koper neemt de verplichting over om de situatie te regulariseren of te herstellen. Een professionele opkoper zoals wijkopenpanden.be accepteert dit; een particuliere koper doorgaans niet.",
      },
      {
        question: "Verjaart een bouwovertreding na 10 jaar?",
        answer:
          "De straf- en herstelvordering van de overheid verjaart na 10 jaar (verlengd van 5 jaar in april 2024). Maar verjaring is niet hetzelfde als legalisering: de overtreding blijft zichtbaar in het uittreksel, de constructie blijft onvergund, en banken blijven terughoudend bij financiering. Enkel een regularisatievergunning lost het definitief op.",
      },
      {
        question: "Wat kost een regularisatie in Antwerpen?",
        answer:
          "Een regularisatiedossier via een architect kost doorgaans €1.500 tot €4.000 inclusief leges, afhankelijk van de omvang en complexiteit. De doorlooptijd is 4 tot 6 maanden. Als u dit voor de verkoop wilt doen, vertraagt het uw verkooptraject aanzienlijk. Wijkopenpanden.be neemt de regularisatie na aankoop op zich.",
      },
      {
        question: "Financiert een bank een woning met een bouwovertreding?",
        answer:
          "Veel banken weigeren of bemoeilijken een hypothecaire lening als er een geregistreerde onvergunde constructie op het pand staat. Dit is een praktisch probleem bij klassieke verkoop: de kopersselectie slinkt sterk. Bij een verkoop aan een professionele opkoper zonder hypotheekfinanciering speelt dit niet.",
      },
      {
        question: "Hoe weet wijkopenpanden.be of mijn woning een overtreding heeft?",
        answer:
          "Wij vragen bij elk bezoek het stedenbouwkundig uittreksel op en raadplegen het maatregelenregister. Dit doen wij zelf, gratis, als onderdeel van ons due diligence-proces. U hoeft hier vooraf niets voor te doen.",
      },
    ],
  },
  {
    slug: "huis-verkopen-antwerpen-gids",
    title: "Huis verkopen in Antwerpen: de complete gids (2026)",
    metaTitle: "Huis verkopen in Antwerpen — complete gids 2026 | wijkopenpanden.be",
    metaDescription:
      "Hoe verkoop je een woning in Antwerpen? Stap-voor-stap: attesten, tijdlijn, kosten en keuze tussen makelaar of opkoper. Alles wat u nodig hebt in 2026.",
    publishedAt: "2026-06-04",
    updatedAt: "2026-06-04",
    intro:
      "Een woning of pand verkopen in Antwerpen is geen eenvoudige beslissing. Er zijn wettelijke verplichtingen, fiscale gevolgen, meerdere verkoopopties en een tijdlijn die sterk verschilt naargelang u via een makelaar verkoopt, zelf de markt op gaat, of rechtstreeks verkoopt aan een opkoper. Deze gids legt stap voor stap uit wat u kunt verwachten — van de eerste beslissing tot de ondertekening van de akte bij de notaris.",
    sections: [
      {
        heading: "Stap 1: Bepaal hoe u uw woning in Antwerpen wilt verkopen",
        body: "Vooraleer u ook maar één attest aanvraagt, moet u kiezen hoe u wilt verkopen. Die keuze bepaalt alles: de tijdlijn, de kosten en de zekerheid.\n\nDe drie gangbare opties in Antwerpen:\n\nVia een vastgoedmakelaar\nEen makelaar regelt de publicatie, de bezichtigingen en de onderhandelingen. U betaalt een commissie (doorgaans 3–4% + btw) op de verkoopprijs. De tijdlijn is onzeker: gemiddeld 3 tot 9 maanden van beslissing tot akte, afhankelijk van de buurt en de staat van de woning.\n\nZelf verkopen (zonder makelaar)\nU plaatst de woning zelf op Immoweb of Zimmo, regelt de bezichtigingen en onderhandelt rechtstreeks. Geen commissie, maar u draagt alle verantwoordelijkheid voor de juridische correctheid.\n\nVerkopen aan een vastgoedopkoper\nEen opkoper — zoals wijkopenpanden.be — koopt uw woning rechtstreeks aan, zonder makelaar, zonder bezichtigingen voor derden en zonder wachttijd. De tijdlijn is voorspelbaar: gemiddeld 2 tot 3 maanden. U betaalt geen commissie en de keuringen zijn inbegrepen.",
      },
      {
        heading: "Stap 2: De verplichte attesten voor een woning in Antwerpen",
        body: "Ongeacht hoe u verkoopt, zijn een aantal attesten wettelijk verplicht in Vlaanderen. Zonder deze attesten kan de notariële akte niet worden opgesteld.\n\nEPC (energieprestatiecertificaat)\nHet EPC geeft het energieverbruik van de woning weer op een schaal van A+ tot F. Het attest is verplicht bij publicatie — u mag uw woning niet te koop zetten zonder het. De kostprijs bedraagt gemiddeld €150 tot €350, afhankelijk van de grootte.\n\nElektriciteitskeuring\nBij de verkoop van een woning met een elektrische installatie gebouwd of gerenoveerd voor 2001 is een keuring verplicht. Een niet-conforme keuring is geen blokkade voor de verkoop — de koper heeft 18 maanden om de installatie in orde te brengen.\n\nAsbestinventaris\nVoor woningen gebouwd voor 2001 is een asbestinventarisatieattest verplicht. Een gecertificeerde asbestdeskundige voert een visueel onderzoek uit. Kostprijs: €200 tot €600 afhankelijk van de grootte.\n\nBodemattesten en andere documenten\nDe notaris vraagt zelf de nodige bodemattesten (OVAM) en stedenbouwkundige uittreksels op. U hoeft dit zelf niet te regelen.\n\nBij een verkoop aan wijkopenpanden.be nemen wij alle keuringen over: EPC, elektriciteit en asbest zijn volledig voor onze rekening en worden nooit van uw bod afgetrokken.",
      },
      {
        heading: "Stap 3: De marktwaarde van uw Antwerpse woning bepalen",
        body: "Wat is uw woning waard? Die vraag is eenvoudiger te stellen dan te beantwoorden. De waarde hangt af van:\n\n• Ligging: buurt, nabijheid openbaar vervoer, school en handelszaken\n• Type en grootte: rijhuis, appartement, herenhuis, opbrengsteigendom\n• Staat: sleutelklaar, te renoveren of grondig op te knappen\n• EPC-label: een label E of F drukt de marktwaarde door de renovatieplicht\n• Vergelijkbare transacties: recente verkopen van gelijkaardige panden in de straat of buurt\n\nConcreet voor Antwerpen:\n\nRijhuizen in Borgerhout variëren van €185.000 (renovatiepand) tot €290.000 (goed onderhouden). In Berchem liggen de prijzen 25–40% hoger voor een vergelijkbaar type. Een appartement in het centrum kost gemiddeld €185.000 tot €360.000 afhankelijk van verdieping, oppervlakte en staat.\n\nEen makelaar schat uw woning in tijdens een gratis bezoek. Wijkopenpanden.be doet u een concreet schriftelijk bod na één bezoek — op basis van de werkelijke marktwaarde minus de renovatiekost die wij zelf dragen.",
      },
      {
        heading: "Stap 4: Van aanbieding tot bod — hoe de onderhandeling verloopt",
        body: "Bij een klassieke verkoop via makelaar:\nUw woning wordt gepubliceerd op Immoweb, Zimmo en sociale media. Geïnteresseerden plannen bezichtigingen. Na meerdere weken tot maanden ontvangen u (hopelijk) een bod. Er volgen mogelijk tegenbiedingen. Pas als beide partijen akkoord gaan over prijs en voorwaarden, wordt een aankoopbelofte of compromis opgesteld.\n\nBij een verkoop aan wijkopenpanden.be:\n1. U vraagt een bod aan via het formulier of telefonisch.\n2. Wij plannen een bezoek — doorgaans binnen 2 werkdagen.\n3. Na het bezoek ontvangt u een schriftelijk bod, doorgaans binnen 24 uur.\n4. U beslist vrijblijvend. Geen tijdsdruk.\n5. Akkoord? Wij plannen een afspraak bij de notaris.\n\nEr zijn geen onderhandelingen over keuringskosten, renovatietoelagen of ontruimingskosten. Die zijn nooit een aftrekpost op het bod.",
      },
      {
        heading: "Stap 5: Van compromis tot notariële akte",
        body: "De voorlopige koopovereenkomst (compromis) is bindend voor beide partijen. Zodra het compromis is ondertekend, heeft de koper 4 maanden de tijd om de financiering te regelen en de akte bij de notaris te laten verlijden.\n\nWat u als verkoper moet doen na het compromis:\n• Uw goederen verhuizen of laten ontruimen op de afgesproken datum\n• Eventuele attesten of documenten aanleveren die nog ontbreken\n• Aanwezig zijn bij de notariële akte (of een volmacht geven)\n\nBij de akte:\nDe notaris leest de akte voor, beide partijen tekenen, en de aankoopprijs wordt uitbetaald. De registratierechten (2% voor de enige en eigen woning van de koper, 12% voor overige aankopen) zijn voor rekening van de koper. Als verkoper ontvangt u netto het overeengekomen bedrag.",
      },
      {
        heading: "Vergelijking: makelaar, zelf verkopen of opkoper",
        body: "Overzichtstabel van de drie verkoopopties",
        table: {
          headers: ["Criterium", "Via makelaar", "Zelf verkopen", "Opkoper (wijkopenpanden.be)"],
          rows: [
            ["Tijdlijn", "5–12 maanden", "4–10 maanden", "2–3 maanden"],
            ["Commissie", "3–4% + btw", "Geen", "Geen"],
            ["Keuringen (EPC, elektra, asbest)", "Kopers rekening", "Kopers rekening", "Volledig inbegrepen"],
            ["Ontruiming", "Eigen kosten", "Eigen kosten", "Volledig inbegrepen"],
            ["Zekerheid over prijs", "Pas bij compromis", "Pas bij akkoord", "Schriftelijk bod na bezoek"],
            ["Bezichtigingen door vreemden", "Ja, meerdere", "Ja, meerdere", "Nee — enkel ons bezoek"],
            ["Geschikt voor probleempanden", "Beperkt", "Moeilijk", "Ja — elke staat"],
          ],
        },
      },
    ],
    relatedArticles: ["commissie-makelaar-belgie", "keuringen-bij-verkoop-woning", "notariskosten-woning-verkoop", "verkoop-kosten-berekenen", "belastingen-bij-woningverkoop", "hoelang-duurt-huis-verkopen-belgie"],
    relatedSituations: ["verkopen-zonder-makelaar", "opknappand-verkopen", "huis-verkopen-bij-erfenis"],
    faqs: [
      {
        question: "Wat zijn de kosten als ik mijn huis verkoop in Antwerpen?",
        answer:
          "Als verkoper betaalt u doorgaans: makelaarscommissie (3–4% + btw, indien ingeschakeld), de verplichte attesten (EPC €150–350, elektriciteitskeuring €150–300, asbestinventaris €200–600) en eventueel uw eigen notaris. Bij een verkoop aan wijkopenpanden.be zijn alle keuringen inbegrepen en betaalt u geen commissie.",
      },
      {
        question: "Moet ik mijn woning renoveren voor ik verkoop?",
        answer:
          "Nee. U kunt een woning in elke staat verkopen. Renoveren loont zelden: de kost wordt zelden volledig terugverdiend in een hogere verkoopprijs. Een opkoper koopt uw woning as-is aan en houdt de renovatiekost intern in zijn bod.",
      },
      {
        question: "Wat is het verschil tussen compromis en akte?",
        answer:
          "Het compromis (voorlopige koopovereenkomst) is de eerste bindende overeenkomst tussen koper en verkoper. De akte is het officiële juridische document dat bij de notaris wordt ondertekend, waarna de eigendom overgaat. Tussen compromis en akte zit gemiddeld 3 tot 4 maanden.",
      },
      {
        question: "Kan ik mijn woning verkopen als er nog een hypotheek op staat?",
        answer:
          "Ja. De openstaande hypotheek wordt bij de notariële akte automatisch afgelost via de verkoopprijs. De notaris regelt de doorstorting naar uw bank. U ontvangt het saldo na aflossing.",
      },
      {
        question: "Hoeveel belasting betaal ik als ik mijn woning verkoop in Antwerpen?",
        answer:
          "Als u uw eigen woning (hoofdverblijfplaats) verkoopt, betaalt u in principe geen meerwaardebelasting. Verkoopt u een tweede woning of investering binnen 5 jaar na aankoop, dan bedraagt de meerwaardebelasting 16,5%. Registratierechten zijn een koperskost.",
      },
    ],
  },
  {
    slug: "hoelang-duurt-huis-verkopen-belgie",
    title: "Hoelang duurt een huis verkopen in België? Realistische tijdlijnen (2026)",
    metaTitle: "Hoelang duurt een huis verkopen in België? Tijdlijnen 2026 | wijkopenpanden.be",
    metaDescription:
      "Hoelang duurt het om een woning te verkopen in België? Van 6 weken tot meer dan een jaar — afhankelijk van uw keuze. Vergelijking per verkoopoptie voor 2026.",
    publishedAt: "2026-06-04",
    updatedAt: "2026-06-04",
    intro:
      "Hoelang duurt een huis verkopen in België? Het eerlijke antwoord: het hangt sterk af van hoe u verkoopt, in welke buurt de woning staat en in welke staat ze verkeert. Via een makelaar rekent u op 5 tot 12 maanden van beslissing tot akte. Via een vastgoedopkoper is dat gemiddeld 2 tot 3 maanden. In dit artikel leggen we elke fase uit — met concrete tijdlijnen per verkoopoptie — zodat u een realistische planning kunt maken.",
    sections: [
      {
        heading: "De drie fases van een woningverkoop in België",
        body: "Elke woningverkoop in België doorloopt drie fases, ongeacht de verkoopoptie:\n\nFase 1: Voorbereiding (2–8 weken)\nVoordat u uw woning kunt aanbieden, zijn er verplichte attesten nodig: EPC, elektriciteitskeuring en asbestinventaris. Een gecertificeerde energiedeskundige plannen kost doorgaans 1 tot 3 weken. Daarna volgt de eventuele fotografie, opmaak van de publicatie en het indienen bij de notaris.\n\nFase 2: Verkoop (2 weken tot 9 maanden)\nDit is de meest variabele fase. Via een makelaar wacht u op bezichtigingen, biedingen en onderhandelingen. In een gewilde Antwerpse buurt kan dit 4 tot 8 weken duren; in een pand dat grondige renovatie nodig heeft, kan het oplopen tot 6 tot 9 maanden — of langer.\n\nFase 3: Notarieel traject (2–4 maanden)\nVan het ondertekende compromis tot de notariële akte neemt gemiddeld 3 tot 4 maanden in beslag. De koper heeft tijd nodig om zijn financiering te regelen, de notaris vraagt attesten en bodemcertificaten op, en beide partijen moeten aanwezig zijn bij de akte.",
      },
      {
        heading: "Tijdlijn per verkoopoptie: concrete vergelijking",
        body: "Overzicht van de totale doorlooptijd per verkoopoptie",
        table: {
          headers: ["Verkoopoptie", "Voorbereiding", "Verkoop", "Akte", "Totaal"],
          rows: [
            ["Via makelaar (vlotte verkoop)", "3–5 weken", "4–8 weken", "3–4 maanden", "4–6 maanden"],
            ["Via makelaar (trage markt)", "3–5 weken", "3–9 maanden", "3–4 maanden", "7–14 maanden"],
            ["Zelf verkopen (Immoweb/Zimmo)", "2–4 weken", "6–12 weken", "3–4 maanden", "5–8 maanden"],
            ["Opkoper (wijkopenpanden.be)", "Geen — wij regelen dit", "1–3 werkdagen", "6–10 weken", "2–3 maanden"],
          ],
        },
      },
      {
        heading: "Wat verlengt de verkooptijdlijn? De 5 meest voorkomende oorzaken",
        body: "1. Slechte EPC-score (label E of F)\nKopers die een woning met label E of F kopen, zijn verplicht binnen 6 jaar te renoveren tot label D. Dit schrikt veel kopers af of leidt tot forse prijsonderhandelingen. Resultaat: langere zoektijd naar een koper die dit accepteert.\n\n2. Niet-conforme elektriciteitskeuring\nEen negatief keuringsattest verplicht de koper de installatie binnen 18 maanden in orde te brengen. Sommige banken financieren moeilijker. Gevolg: minder geïnteresseerden op de vrije markt.\n\n3. Meerdere erfgenamen die het niet eens zijn\nBij een erfenis moet elke erfgenaam akkoord gaan met de verkoopprijs en de timing. Discussies kunnen de tijdlijn maanden verlengen. Een gerechtelijke verdeling duurt zelfs 1 tot 3 jaar.\n\n4. Stedenbouwkundige overtredingen\nNiet-vergunde aanbouwen of verbouwingen vertragen het notarieel traject en bemoeilijken de financiering van de koper. Regularisatie vóór de verkoop kost 4 tot 6 maanden extra.\n\n5. Huurders in het pand\nEen bewoond pand verkopen is complexer. De huurder heeft wettelijk een recht van voorkoop in bepaalde situaties. Kopers die zelf willen intrekken, haken af. Dit verlengt de zoektijd aanzienlijk.",
      },
      {
        heading: "Hoelang duurt een huis verkopen in Antwerpen specifiek?",
        body: "Antwerpen heeft een actieve vastgoedmarkt, maar de doorlooptijden verschillen sterk per buurt en type woning.\n\nSnel verkopende gebieden (4–6 maanden via makelaar):\n• Zurenborg en omgeving: hoge vraag, beschermde gevels, instapklare woningen gaan snel\n• Berchem en Mortsel: gezinswoningen in goede staat vinden snel een koper\n• Centrum en Eilandje: appartementen met goede EPC-score en parking scoren goed\n\nTrager verkopende segmenten (7–14 maanden via makelaar):\n• Renovatiepanden in Seefhoek of Borgerhout: doelgroep is kleiner, onderhandelingen langduriger\n• Opbrengsteigendommen met problematische huurders: kopers zijn wantrouwig en voorzichtig\n• Panden met EPC label F en actieve handhaving: banken financieren terughoudend\n\nVia wijkopenpanden.be is de tijdlijn altijd 2 tot 3 maanden — ongeacht de buurt, de staat of de situatie.",
      },
      {
        heading: "Fase per fase: wat u als verkoper kunt verwachten",
        body: "Week 1–3: Attesten aanvragen\nU plant een energiedeskundige in voor het EPC, een erkend keurder voor de elektriciteit en een asbestdeskundige. Wacht op de rapporten.\n\nWeek 3–6: Publicatie en bezichtigingen\nDe makelaar plaatst de woning online. De eerste bezichtigingen vinden plaats. Dit is emotioneel: vreemden beoordelen uw woning kritisch.\n\nWeek 6 tot maanden: Biedingen en onderhandeling\nU ontvangt (hopelijk) biedingen. Er volgt onderhandeling over prijs, roerende goederen en de datum van de akte. De koper vraagt een hypotheek aan bij zijn bank — dit duurt 2 tot 6 weken extra.\n\nNa akkoord: Compromis (1–2 weken)\nKoper en verkoper ondertekenen een voorlopige koopovereenkomst bij de notaris of makelaar.\n\nNa compromis: Akte (3–4 maanden)\nDe notaris vraagt attesten op, de koper regelt zijn financiering, en beide partijen ondertekenen de definitieve akte. Op dat moment ontvangt u het geld.",
      },
      {
        heading: "Wanneer is snelheid belangrijker dan de maximumprijs?",
        body: "Er zijn situaties waarbij 2 tot 3 maanden een wereld van verschil maakt:\n\n• Erfenis met meerdere erfgenamen: hoe langer de woning leegstaat, hoe meer kosten (leegstandsverzekering, onroerende voorheffing, onderhoud).\n• Scheiding: elke maand langer betekent emotionele en financiële druk voor beide partijen.\n• Financiële druk: u heeft snel kapitaal nodig voor een nieuwe woning, een zorgkost of een andere investering.\n• Probleempand: een opknapper of pand met huurders staat maanden te koop zonder ernstig bod.\n\nIn al deze situaties is de tijdlijn van een opkoper — 2 tot 3 maanden, vast — waarschijnlijk meer waard dan de theoretische maximumprijs via een makelaar.",
      },
    ],
    relatedArticles: ["huis-verkopen-antwerpen-gids", "commissie-makelaar-belgie", "verkoop-kosten-berekenen", "energie-renovatieplicht-vlaanderen-2026", "stedenbouwkundige-overtreding-woning-verkopen"],
    relatedSituations: ["huis-verkopen-bij-erfenis", "huis-verkopen-bij-scheiding", "pand-met-huurders-verkopen"],
    faqs: [
      {
        question: "Hoelang duurt een huis verkopen in België gemiddeld?",
        answer:
          "Via een makelaar bedraagt de gemiddelde doorlooptijd in België 5 tot 9 maanden van beslissing tot ondertekening van de notariële akte. In Antwerpen kan dit in gewilde buurten 4 tot 6 maanden zijn; bij moeilijkere panden of minder gevraagde locaties loopt het op tot 10 tot 14 maanden. Via een vastgoedopkoper is de tijdlijn gemiddeld 2 tot 3 maanden.",
      },
      {
        question: "Hoelang duurt het tussen compromis en akte?",
        answer:
          "Gemiddeld 3 tot 4 maanden. De koper heeft tijd nodig om zijn hypothecaire financiering te regelen (2 tot 6 weken), de notaris vraagt de nodige attesten en bodemcertificaten op, en de akte wordt ingepland wanneer alle documenten beschikbaar zijn.",
      },
      {
        question: "Kan een huis sneller verkopen dan 3 maanden?",
        answer:
          "Via de traditionele weg (makelaar) is minder dan 3 maanden uitzonderlijk vanwege de verplichte termijnen in het notarieel traject. Via een opkoper is 6 tot 10 weken haalbaar in dringende situaties — als de attesten vlot beschikbaar zijn en beide partijen snel willen handelen.",
      },
      {
        question: "Waarom duurt een huis verkopen zo lang?",
        answer:
          "De notariële procedure alleen al neemt 3 tot 4 maanden in beslag: de koper moet financiering regelen, de notaris vraagt attesten op en er zijn wettelijke termijnen tussen compromis en akte. Daarboven komt de tijd om een koper te vinden: gemiddeld 4 tot 12 weken bij een aantrekkelijk pand, meerdere maanden bij een renovatiepand.",
      },
      {
        question: "Wat als ik mijn huis snel wil verkopen vanwege financiële problemen?",
        answer:
          "Een vastgoedopkoper is dan de meest directe optie. Wijkopenpanden.be geeft u een schriftelijk bod binnen 24 uur na het bezoek en plant de akte gemiddeld binnen 2 tot 3 maanden. Er zijn geen keuringskosten, geen commissie en geen bezichtigingen door derden.",
      },
      {
        question: "Is de verkoopprijs lager als ik snel wil verkopen?",
        answer:
          "Een opkoper biedt minder dan de theoretische maximumprijs die u bij een klassieke verkoop in perfecte marktomstandigheden zou kunnen halen. Maar het nettoverschil is kleiner dan het lijkt: u bespaart de makelaarscommissie (3–4%), de keuringen (€500–€1.200), eventuele herstellingen en meerdere maanden dubbele lasten.",
      },
    ],
  },
  {
    slug: "wat-is-een-vastgoedopkoper",
    title: "Wat is een vastgoedopkoper — en hoe werkt het in Antwerpen?",
    metaTitle: "Wat is een vastgoedopkoper? Hoe werkt het in Antwerpen? (2026)",
    metaDescription:
      "Een vastgoedopkoper koopt uw woning rechtstreeks aan — zonder makelaar, zonder wachttijd. Hoe bepaalt hij zijn prijs? En wanneer is het de beste keuze? Uitleg.",
    publishedAt: "2026-06-04",
    updatedAt: "2026-06-04",
    intro:
      "Een vastgoedopkoper is een bedrijf of investeerder die woningen en panden rechtstreeks aankoopt van de eigenaar — zonder makelaar, zonder publicatie op Immoweb en zonder maandenlange wachttijd. In Antwerpen is deze markt de laatste jaren sterk gegroeid, maar er bestaan ook veel misverstanden over hoe opkopers werken en hoeveel ze betalen. Dit artikel legt het helder uit.",
    sections: [
      {
        heading: "Wat doet een vastgoedopkoper precies?",
        body: "Een vastgoedopkoper — ook wel direct buyer of vastgoedinvesteerder genoemd — koopt woningen rechtstreeks van de eigenaar aan, zonder tussenkomst van een makelaar. Hij koopt de woning in de huidige staat, regelt alle praktische zaken (keuringen, ontruiming, notaris) en betaalt u een overeengekomen prijs bij de akte.\n\nVastgoedopkopers zijn geen speculanten die u proberen te misleiden. Het zijn professionele kopers die hun verdienmodel baseren op renovatie en doorverkoop of verhuur. Zij verdienen op de meerwaarde ná renovatie — niet door u een oneerlijk laag bod te geven.\n\nWat onderscheidt een serieuze opkoper?\n• Hij geeft u een schriftelijk bod na één bezoek — geen mondelinge beloftes\n• Hij legt u transparant uit hoe het bod berekend is\n• Hij vraagt geen voorschot, geen vergoeding en rekent u niets aan\n• Hij neemt alle keuringen en notariskosten voor zijn rekening\n• Hij respecteert uw beslissingstijd — geen druk",
      },
      {
        heading: "Hoe berekent een vastgoedopkoper zijn bod?",
        body: "De berekening van een opkoper is eenvoudiger dan velen denken:\n\nMarktwaarde na renovatie (ARV — After Renovation Value)\nDit is de geschatte verkoopprijs van de woning nadat ze volledig gerenoveerd is. De opkoper baseert zich op recente vergelijkbare transacties in de buurt.\n\nMin: renovatiekost\nDe opkoper schat de volledige renovatiekost op basis van de staat van de woning: structurele problemen, EPC-label, staat van de elektriciteit, dak, riolering. Wij werken met vaste aannemers en kennen de reële kosten — we overdrijven die niet.\n\nMin: kosten en winstmarge\nDe opkoper rekent registratierechten, notariskosten, financieringskosten en een redelijke marge voor het risico dat hij draagt.\n\nResultaat = uw bod\n\nConcreet voorbeeld:\nEen rijhuis in Borgerhout met EPC F en verouderde elektriciteit. Marktwaarde na renovatie: €280.000. Geschatte renovatiekost: €55.000. Kosten en marge opkoper: €25.000. Uw bod: circa €200.000 — netto in uw zak, zonder commissie of keuringskosten.",
      },
      {
        heading: "Wanneer is een vastgoedopkoper de beste keuze?",
        body: "Een opkoper is niet altijd de beste keuze — maar in bepaalde situaties is hij dat overduidelijk wel.\n\nKies voor een opkoper als:\n\n• U snel moet verkopen (erfenis, scheiding, financiële druk)\n• Uw woning in slechte staat is of een laag EPC-label heeft (E of F)\n• Er stedenbouwkundige overtredingen zijn die u niet wilt regulariseren\n• Er huurders in het pand zitten\n• U geen zin heeft in bezichtigingen, onderhandelingen en wachttijden\n• U zekerheid over de verkoopprijs wilt vóór u andere beslissingen neemt\n\nKies voor een makelaar als:\n\n• Uw woning in goede staat is en een goed EPC-label heeft\n• U voldoende tijd heeft en de maximumprijs wilt halen\n• De markt in uw buurt actief is en woningen snel verkopen",
      },
      {
        heading: "Mythes over vastgoedopkopers ontkracht",
        body: "Mythe 1: 'Een opkoper biedt altijd de helft van de waarde'\nOnjuist. Een serieuze opkoper biedt een marktconform bod op basis van de werkelijke renovatiekost. Bij een woning in goede staat is het verschil met de vrije marktprijs beperkt tot de commissie en keuringskosten die de opkoper overneemt.\n\nMythe 2: 'Opkopers zijn alleen geïnteresseerd in goedkope woningen'\nOnjuist. Opkopers kopen ook heren- en villa's, appartementen en opbrengsteigendommen aan — als de situatie van de eigenaar vraagt om snelheid of zekerheid.\n\nMythe 3: 'Je weet nooit of een opkoper serieus is'\nEen serieuze opkoper geeft u altijd een schriftelijk bod en is bereid zijn berekening toe te lichten. Hij vraagt geen exclusiviteit en dringt niet aan als u nee zegt.\n\nMythe 4: 'Je moet alles leegmaken voor de verkoop'\nBij wijkopenpanden.be hoeft u niets te doen. Wij nemen de ontruiming volledig over als onderdeel van het bod.",
      },
      {
        heading: "Vergelijking: vastgoedopkoper vs. makelaar vs. openbare verkoop",
        body: "Drie manieren om een woning te verkopen — naast elkaar",
        table: {
          headers: ["Criterium", "Vastgoedopkoper", "Makelaar", "Openbare verkoop"],
          rows: [
            ["Tijdlijn", "2–3 maanden", "5–12 maanden", "3–6 maanden (+ voorbereiding)"],
            ["Commissie", "Geen", "3–4% + btw", "1–3% + btw"],
            ["Keuringen inbegrepen", "Ja", "Nee", "Nee"],
            ["Ontruiming inbegrepen", "Ja", "Nee", "Nee"],
            ["Zekerheid over prijs", "Schriftelijk bod", "Pas bij compromis", "Afhankelijk van biedingen"],
            ["Geschikt voor probleempanden", "Ja", "Beperkt", "Ja (maar lagere opbrengst)"],
            ["Privacyvriendelijk", "Ja — geen publicatie", "Nee", "Nee"],
          ],
        },
      },
      {
        heading: "Hoe werkt wijkopenpanden.be als vastgoedopkoper in Antwerpen?",
        body: "wijkopenpanden.be is een vastgoedopkoper actief in Antwerpen en de directe omstreken. Ons proces:\n\n1. U vraagt een bod aan via het contactformulier of belt ons.\n2. Wij plannen een bezoek — doorgaans binnen 2 werkdagen.\n3. Tijdens het bezoek bekijken wij de woning grondig: structuur, EPC, elektriciteit, dak, inrichting.\n4. Binnen 24 uur na het bezoek ontvangt u een schriftelijk bod met een duidelijke toelichting.\n5. U beslist vrijblijvend. Geen tijdsdruk, geen clausules.\n6. Akkoord? Wij plannen de notariële akte. Gemiddelde doorlooptijd: 2 tot 3 maanden.\n\nWij betalen:\n• Alle keuringen (EPC, elektriciteit, asbest)\n• De ontruiming van de woning\n• Registratierechten en notariskosten aan koperskant\n\nU betaalt niets extra. Het bod is wat u ontvangt.",
      },
    ],
    relatedArticles: ["commissie-makelaar-belgie", "hoelang-duurt-huis-verkopen-belgie", "huis-verkopen-antwerpen-gids", "keuringen-bij-verkoop-woning", "pand-in-slechte-staat-verkopen"],
    relatedSituations: ["verkopen-zonder-makelaar", "opknappand-verkopen", "huis-verkopen-bij-erfenis"],
    faqs: [
      {
        question: "Is een vastgoedopkoper wettelijk erkend in België?",
        answer:
          "Ja. Een vastgoedopkoper is een gewone koper op de Belgische vastgoedmarkt. De verkoop verloopt via een notaris met een officiële akte, identiek aan een klassieke verkoop. Er zijn geen speciale vergunningen of erkenningen vereist om als vastgoedopkoper actief te zijn.",
      },
      {
        question: "Hoe weet ik of een vastgoedopkoper betrouwbaar is?",
        answer:
          "Een betrouwbare opkoper geeft u altijd een schriftelijk bod, legt de berekening uit, vraagt geen voorschot en dringt niet aan. Vraag altijd om een schriftelijk bod vóór u iets ondertekent. Controleer of het bedrijf een KBO-nummer heeft en zoek reviews of referenties op.",
      },
      {
        question: "Hoeveel minder biedt een opkoper dan een makelaar zou opleveren?",
        answer:
          "Het verschil is kleiner dan het lijkt. Bij een makelaar betaalt u commissie (3–4% + btw), keuringen (€500–€1.200), eventuele herstellingen en loopt u weken tot maanden dubbele lasten. Na aftrek van al die kosten is het nettoverschil doorgaans 5 tot 10% van de verkoopprijs — in ruil voor zekerheid, snelheid en geen gedoe.",
      },
      {
        question: "Kan ik onderhandelen met een vastgoedopkoper?",
        answer:
          "Ja. Het bod is een vertrekpunt, geen dictaat. Als u aanvullende informatie heeft (recente renovaties, nieuwe ketel, dakwerken) die de opkoper niet kende, kunt u dat meegeven. Wij herberekenen dan indien nodig. Wat wij niet doen: een eerste laag bod geven met de bedoeling op te bieden — ons eerste bod is meteen ons beste bod.",
      },
      {
        question: "Wat als ik het bod weiger?",
        answer:
          "Dan is er niets aan de hand. U bent nergens toe verplicht. Er zijn geen kosten, geen opzegtermijnen en geen exclusiviteitsclausules. U kunt het bod weigeren en via een makelaar verder gaan — of later terugkomen.",
      },
    ],
  },
  {
    slug: "verhuren-of-verkopen-antwerpen",
    title: "Verhuren of verkopen in Antwerpen? De eerlijke vergelijking (2026)",
    metaTitle: "Verhuren of verkopen in Antwerpen? Eerlijke vergelijking 2026 | wijkopenpanden.be",
    metaDescription:
      "Moet u uw woning verhuren of verkopen in Antwerpen? Rendement, risico's, EPC-verplichtingen en de nieuwe huurindexeringsregels — alles vergeleken voor 2026.",
    publishedAt: "2026-06-04",
    updatedAt: "2026-06-04",
    intro:
      "Verhuren of verkopen — het is een van de meest gestelde vragen bij eigenaars van een tweede woning, een erfenis of een opbrengsteigendom in Antwerpen. Het antwoord hangt af van uw financiële situatie, de staat van de woning en uw risicobereidheid. Maar in 2026 speelt er ook een nieuwe factor: de Vlaamse EPC-wetgeving maakt verhuren met een slecht energielabel steeds minder aantrekkelijk. In dit artikel vergelijken we beide opties eerlijk.",
    sections: [
      {
        heading: "De financiële vergelijking: wat levert verhuren op?",
        body: "Stel: u heeft een rijhuis in Borgerhout met een marktwaarde van €240.000 en een huurprijs van €1.000 per maand.\n\nBruto huurrendement: (€12.000 / €240.000) × 100 = 5%\n\nDat klinkt aantrekkelijk. Maar het brutocijfer is misleidend. Het nettorendement is wat overblijft na alle kosten:\n\n• Onroerende voorheffing: €800–€2.000 per jaar (afhankelijk van het KI)\n• Onderhoud en herstellingen: gemiddeld 1–2% van de waarde per jaar\n• Leegstand: bij elke huurderswisseling doorgaans 1 tot 3 maanden\n• Syndicus (bij appartementen): €600–€2.400 per jaar\n• Verzekering leegstand en aansprakelijkheid: €200–€500 per jaar\n• Beheer (als u zelf niet wilt beheren): 5–8% van de huurprijs\n\nIn de praktijk ligt het netto huurrendement op een Antwerps rijhuis tussen 2,5% en 3,5%. Dat is een correcte return — maar het houdt geen rekening met de nieuwe EPC-verplichtingen.",
      },
      {
        heading: "De nieuwe EPC-regels voor verhuurders: wat verandert er?",
        body: "Hier ligt het grootste risico voor eigenaars met een woning die een laag EPC-label heeft.\n\nSinds 1 oktober 2023 is de huurprijsindexering in Vlaanderen beperkt voor woningen met EPC-label D, E of F. Uw huurprijs kan niet meer volledig geïndexeerd worden aan de inflatie.\n\nVanaf 2028 is indexering volledig uitgesloten voor woningen met EPC-label E of F. Dit betekent dat de reële waarde van uw huurinkomsten elk jaar daalt door inflatie.\n\nVanaf 2030 mag u een woning met EPC-label E of F niet meer verhuren. De woning moet dan minstens label D hebben, of u kunt haar niet meer op de huurmarkt aanbieden.\n\nConcreet voor eigenaars in Antwerpen:\nEen groot deel van de Antwerpse rijhuizen en appartementen uit de vroege 20e eeuw haalt EPC-label E of F. Eigenaars die nu verhuren met zulke panden, moeten vóór 2030 investeren in energierenovatie — of verkopen. Renovatiekosten van EPC F naar D bedragen gemiddeld €20.000 tot €45.000.",
      },
      {
        heading: "Vergelijking: verhuren vs. verkopen — 7 criteria",
        body: "Overzicht voor een eigenaar van een woning in Antwerpen in 2026",
        table: {
          headers: ["Criterium", "Verhuren", "Verkopen"],
          rows: [
            ["Direct kapitaal beschikbaar", "Nee — maandelijks inkomen", "Ja — eenmalig bedrag"],
            ["Netto rendement (EPC D+)", "2,5–4% per jaar", "Verkoopprijs nu beschikbaar"],
            ["Netto rendement (EPC E/F)", "Afnemend door indexeringsbeperking", "Vermijdt renovatiekost"],
            ["Risico op wanbetaling huurder", "Ja — procedure duurt 6–18 maanden", "Geen"],
            ["Onderhoud en herstellingen", "Blijft uw verantwoordelijkheid", "Geen na verkoop"],
            ["EPC-verplichting 2030", "Renoveren verplicht (€20k–€45k)", "Probleem gaat over op koper"],
            ["Flexibiliteit", "Beperkt — huurder heeft rechten", "Volledig — u beschikt over het kapitaal"],
          ],
        },
      },
      {
        heading: "Wanneer is verhuren de betere keuze?",
        body: "Verhuren loont als:\n\n• Uw woning een goed EPC-label heeft (C of beter) — geen indexeringsbeperking, geen renovatieplicht vóór 2030\n• De huurmarkt in uw buurt sterk is en leegstand zeldzaam\n• U een langetermijnperspectief heeft en niet direct het kapitaal nodig heeft\n• U de woning op termijn wilt doorgeven aan kinderen of erfgenamen\n• U zelf de tijd en middelen heeft om huurders te begeleiden en herstellingen te regelen\n\nIn Antwerpen zijn buurten als Berchem, Mortsel en Zurenborg (voor instapklare panden) courant winstgevend voor verhuurders op lange termijn.",
      },
      {
        heading: "Wanneer is verkopen de betere keuze?",
        body: "Verkopen loont als:\n\n• Uw woning EPC-label E of F heeft — de renovatiekost eet uw rendement weg vóór 2030\n• U het kapitaal nu nodig heeft voor een andere investering, zorgkosten of pensioen\n• U problemen heeft met huurders (wanbetaling, schade, weigering vertrek)\n• De woning aanzienlijke herstellingen of renovaties nodig heeft\n• U de administratieve last van verhuur wilt vermijden\n• U meerdere erfgenamen bent en de nalatenschap wilt verdelen\n\nEen bijkomend argument: de huidige rente op veilige beleggingen (obligaties, spaarrekeningen) ligt hoger dan enkele jaren geleden. Het kapitaal uit de verkoop kan rendabeler elders ingezet worden dan via huur met 2,5% netto.",
      },
      {
        heading: "Snel beslissen: drie vragen die alles verduidelijken",
        body: "Als u twijfelt tussen verhuren of verkopen, beantwoord dan deze drie vragen:\n\n1. Wat is het EPC-label van uw woning?\nLabel E of F? Dan staat u voor een renovatieverplichting vóór 2030 als u wilt blijven verhuren. De vraag is dan niet 'verhuren of verkopen' maar 'nu verkopen of eerst renoveren en dan verhuren'.\n\n2. Heeft u de huurinkomsten nodig als inkomen, of is het kapitaal interessanter?\nAls u het geld nu kunt beleggen of gebruiken voor een betere investering, is verkopen financieel logischer.\n\n3. Bent u bereid de komende jaren verhuurder te zijn?\nEen huurder vinden, contracten opstellen, herstellingen regelen, eventuele conflicten oplossen — dat is werk. Als u dat niet wilt, is verhuren alleen aantrekkelijk met een beheerder, wat uw netto rendement drukt.",
      },
    ],
    relatedArticles: ["wat-is-een-vastgoedopkoper", "energie-renovatieplicht-vlaanderen-2026", "belastingen-bij-woningverkoop", "snel-geld-vrijmaken-woning", "huis-verkopen-antwerpen-gids"],
    relatedSituations: ["pand-met-huurders-verkopen", "opbrengsteigendom-verkopen-antwerpen", "verkopen-zonder-makelaar"],
    faqs: [
      {
        question: "Is verhuren of verkopen financieel voordeliger in Antwerpen?",
        answer:
          "Dat hangt af van het EPC-label en de staat van de woning. Bij een woning met EPC C of beter en een stabiele huurder is verhuren op lange termijn interessant (2,5–4% netto). Bij EPC E of F moet u vóór 2030 renoveren (€20k–€45k), wat het rendement sterk drukt. In dat geval is verkopen voor de meeste eigenaars financieel beter.",
      },
      {
        question: "Mag ik een woning met EPC label F nog verhuren in 2026?",
        answer:
          "In 2026 mag u nog verhuren met EPC F, maar de indexering van de huurprijs is al beperkt. Vanaf 2028 is indexering volledig uitgesloten voor EPC E en F. Vanaf 2030 mag u een woning met EPC E of F niet meer verhuren — dan is minimaal EPC D vereist.",
      },
      {
        question: "Wat zijn de risico's van verhuren in Antwerpen?",
        answer:
          "De grootste risico's zijn: huurachterstand (een gerechtelijke uithuiszetting duurt 6 tot 18 maanden), schade bij vertrek van een huurder, leegstand tussen twee huurders en onverwachte herstellingskosten. Daarnaast zijn er de nieuwe EPC-verplichtingen die renovatiekosten opleggen vóór 2030.",
      },
      {
        question: "Kan ik mijn woning verkopen terwijl er huurders in wonen?",
        answer:
          "Ja. Een bewoond pand verkopen is mogelijk. De huurder heeft een wettelijk recht van voorkoop in bepaalde omstandigheden. Op de vrije markt is een bewoond pand moeilijker te verkopen (minder kopers willen er zelf in wonen). Een vastgoedopkoper zoals wijkopenpanden.be koopt ook bewoonde panden aan en regelt de verdere afhandeling met de huurder.",
      },
      {
        question: "Hoeveel belasting betaal ik als ik mijn huurwoning verkoop?",
        answer:
          "Als u de woning meer dan 5 jaar geleden kocht, betaalt u geen meerwaardebelasting op de verkoopwinst. Kocht u ze minder dan 5 jaar geleden, dan bedraagt de meerwaardebelasting 16,5% op de gerealiseerde meerwaarde. Registratierechten zijn een koperskost.",
      },
    ],
  },
  {
    slug: "wat-is-mijn-woning-waard-antwerpen",
    title: "Wat is mijn woning waard in Antwerpen? Alles wat de waarde bepaalt (2026)",
    metaTitle: "Wat is mijn woning waard in Antwerpen? Waarde bepalen 2026",
    metaDescription:
      "Wat bepaalt de waarde van uw woning in Antwerpen? Ligging, EPC, staat en markt uitgelegd met concrete prijzen per wijk. Gratis indicatie via wijkopenpanden.be.",
    publishedAt: "2026-06-07",
    updatedAt: "2026-06-07",
    intro:
      "Wat is mijn woning waard? Het is de eerste vraag die elke eigenaar stelt zodra hij aan verkopen denkt. Het antwoord is nooit één getal — het is het resultaat van meerdere factoren die samen de marktwaarde vormen. In dit artikel leggen we uit wat de waarde van een woning in Antwerpen bepaalt, welke factoren positief of negatief wegen, en hoe u een realistische schatting kunt maken.",
    sections: [
      {
        heading: "De 7 factoren die de waarde van uw woning bepalen",
        body: "De marktwaarde van een woning is wat een gemotiveerde koper bereid is te betalen op een vrije markt. Die prijs wordt bepaald door zeven hoofdfactoren:\n\n1. Ligging\nDe buurt is de meest bepalende factor — en de enige die u niet kunt veranderen. Een rijhuis in Berchem is structureel meer waard dan een identiek pand in Seefhoek, simpelweg omdat kopers meer betalen voor de omgeving. Nabijheid van openbaar vervoer, scholen, winkels en parken weegt mee.\n\n2. Type en oppervlakte\nRijhuis, appartement, herenhuis of villa — elk type heeft zijn eigen marktwaarde. Grotere bewoonbare oppervlakte verhoogt de prijs, maar niet lineair: de eerste 100 m² zijn het meest waardevol per m².\n\n3. Staat van de woning\nEen instapklare woning brengt 15 tot 30% meer op dan een gelijkaardig pand dat grondige renovatie nodig heeft. Kopers rekenen de geschatte renovatiekost af van de prijs die ze willen betalen.\n\n4. EPC-label\nSinds de Vlaamse renovatieplicht (kopers van EPC E/F moeten binnen 6 jaar renoveren) weegt het energielabel sterk door in de prijs. EPC A of B verhoogt de waarde; EPC E of F verlaagt ze — kopers trekken de renovatiekost systematisch af.\n\n5. Stedenbouwkundige conformiteit\nNiet-vergunde constructies (aanbouwen, dakkapellen, verbouwingen) verlagen de waarde doordat kopers extra risico inschatten. Een geregulariseerd pand is meer waard dan een identiek pand met openstaande overtredingen.\n\n6. Marktomstandigheden\nVraag en aanbod in de buurt op het moment van verkoop. In een actieve markt met weinig aanbod stijgen de prijzen; in een trage markt dalen ze.\n\n7. Bezetting en juridische situatie\nEen woning met huurders is voor de meeste kopers minder aantrekkelijk (ze willen er zelf in wonen). Huurpanden worden doorgaans 10 tot 20% lager gewaardeerd dan leegstaande woningen op de vrije markt.",
      },
      {
        heading: "Hoe berekent een makelaar de waarde van uw woning?",
        body: "Een makelaar gebruikt de vergelijkende methode: hij vergelijkt uw woning met recente verkopen van gelijkaardige panden in dezelfde buurt. Hij corrigeert voor oppervlakte, staat, verdieping (bij appartementen) en EPC-label.\n\nBelangrijke kanttekening: een makelaar geeft een schatting van de vraagprijs — het bedrag dat hij denkt te kunnen vragen. Of dat bedrag ook gerealiseerd wordt, hangt af van de markt en de kopers die zich melden. De werkelijke verkoopprijs kan 5 tot 15% lager liggen dan de initiële vraagprijs.\n\nEen makelaarschatting is bovendien gratis maar niet neutraal: makelaars schatten soms iets hoger in om het mandaat te krijgen, met de belofte later bij te sturen als er geen koper komt.",
      },
      {
        heading: "Hoe berekent wijkopenpanden.be de waarde van uw woning?",
        body: "Wij hanteren een andere methode dan makelaars, omdat wij een andere rol spelen: wij kopen zelf aan, wij verkopen niet voor u.\n\nOnze berekening:\n\n1. Marktwaarde na renovatie (ARV): wat is de woning waard nadat ze volledig gerenoveerd en opgefrist is?\n2. Min renovatiekost: wat kost het ons om de woning op te knappen? Wij werken met vaste aannemers en kennen de reële kosten.\n3. Min onze operationele kosten en marge: registratierechten, financiering, en een correcte marge voor het risico dat wij dragen.\n\nResultaat: het bod dat u ontvangt.\n\nWij leggen elke stap transparant uit bij het bezoek. Het bod is schriftelijk en vrijblijvend. U hoeft niet te beslissen op de dag zelf.",
      },
      {
        heading: "Wat verhoogt de waarde van uw woning het meest?",
        body: "Als u wilt investeren om de verkoopprijs te verhogen, zijn dit de ingrepen met de beste return:\n\nHoog rendement:\n• Dakisolatie of dakvernieuwing — zichtbaar, sterk effect op EPC en verkoopprijs\n• Nieuwe condensatieketel of warmtepomp — verbetert EPC, geeft koper zekerheid\n• Neutraliseren en opfrissen: professioneel schilderwerk in neutrale kleuren\n\nLaag rendement (investering wordt zelden terugverdiend):\n• Nieuwe keuken of badkamer — smaakgebonden, koper wil vaak toch zijn eigen keuze\n• Vloervervanging — koper ziet het, maar betaalt er niet evenredig voor\n• Uitbreidingen of aanbouwen — duur, lang, en vereisen vergunning\n\nVuistregel: renoveer alleen als de investering minstens 1,5× terugkomt in een hogere verkoopprijs. In de praktijk is dat zelden het geval bij grote ingrepen.",
      },
    ],
    relatedArticles: ["energie-renovatieplicht-vlaanderen-2026", "huis-verkopen-antwerpen-gids", "pand-in-slechte-staat-verkopen", "wanneer-beste-moment-woning-verkopen", "commissie-makelaar-belgie"],
    relatedSituations: ["opknappand-verkopen", "verkopen-zonder-makelaar"],
    faqs: [
      {
        question: "Wat is mijn woning waard in Antwerpen?",
        answer:
          "De waarde hangt af van ligging, type, oppervlakte, staat en EPC-label. Een rijhuis in Borgerhout in gemiddelde staat is indicatief €185.000 tot €290.000 waard; een instapklaar rijhuis in Berchem zit tussen €320.000 en €420.000. Wij geven u na één bezoek een concreet schriftelijk bod.",
      },
      {
        question: "Hoe kan ik gratis weten wat mijn woning waard is?",
        answer:
          "Via een gratis schatting door een makelaar, via online schattingstools (indicatief), of via een bezoek van wijkopenpanden.be — wij geven u een schriftelijk bod na één bezoek, volledig vrijblijvend en kosteloos.",
      },
      {
        question: "Verlaagt een slecht EPC-label de waarde van mijn woning?",
        answer:
          "Ja, significant. Kopers die een woning met EPC E of F kopen, zijn verplicht binnen 6 jaar te renoveren tot minstens label D. Ze trekken de geschatte renovatiekost (€20.000–€45.000) systematisch af van hun bod. Bij wijkopenpanden.be weegt het EPC mee in onze berekening, maar wij overdrijven de aftrek niet.",
      },
      {
        question: "Wat is het verschil tussen vraagprijs en verkoopprijs?",
        answer:
          "De vraagprijs is wat de verkoper vraagt; de verkoopprijs is wat effectief betaald wordt. In Antwerpen liggen verkoopprijzen gemiddeld 3 tot 10% onder de initiële vraagprijs, afhankelijk van de markt en de staat van het pand. Bij een opkoper is het bod meteen de verkoopprijs — er is geen onderhandeling nadien.",
      },
      {
        question: "Moet ik renoveren voor ik mijn woning verkoop?",
        answer:
          "Zelden. De kost van een renovatie wordt bijna nooit volledig terugverdiend in een hogere verkoopprijs. Kleine cosmetische ingrepen (schilderwerk, opruimen) kunnen helpen. Grote renovaties (keuken, badkamer, dakwerken) leveren zelden een positieve return op.",
      },
    ],
  },
  {
    slug: "wanneer-beste-moment-woning-verkopen",
    title: "Wanneer is het beste moment om uw woning te verkopen? (2026)",
    metaTitle: "Wanneer is het beste moment om uw woning te verkopen? (2026)",
    metaDescription:
      "Lente, winter of nu meteen? Het juiste moment om uw woning te verkopen hangt af van meer dan het seizoen. Alle factoren voor 2026 op een rij.",
    publishedAt: "2026-06-07",
    updatedAt: "2026-06-07",
    intro:
      "Wanneer is het beste moment om uw woning te verkopen? Veel eigenaars wachten op het perfecte moment — de ideale markt, de juiste rentestanden, het goede seizoen. Maar wachten heeft altijd een kost. In dit artikel leggen we uit welke factoren het verkoopmoment beïnvloeden, wanneer wachten loont en wanneer u beter vandaag verkoopt dan morgen.",
    sections: [
      {
        heading: "Seizoenspatroon: wanneer zijn er de meeste kopers?",
        body: "Op de vrije vastgoedmarkt is het seizoenspatroon in België duidelijk:\n\nLente (maart–mei): het drukste seizoen. Kopers zijn actief, gezinnen willen voor het nieuwe schooljaar verhuizen, en woningen komen er op hun best uit in goed licht. De concurrentie is echter ook het hoogst — er staat meer te koop.\n\nHerfst (september–oktober): het tweede actieve seizoen. Kopers die in de zomer niets gevonden hebben, gaan opnieuw zoeken. Minder aanbod dan lente, wat in uw voordeel kan spelen.\n\nZomer (juni–augustus): rustiger. Veel kopers zijn op vakantie. Ideaal voor kopers die zoeken, minder ideaal voor verkopers die snel willen.\n\nWinter (november–februari): traditioneel het traagste seizoen. Minder bezichtigingen, maar de kopers die actief zijn, zijn serieus gemotiveerd.\n\nBelangrijke nuance: dit seizoenspatroon geldt voor de vrije markt via een makelaar. Bij een verkoop aan wijkopenpanden.be speelt het seizoen geen enkele rol — wij kopen het hele jaar door, ook in december.",
      },
      {
        heading: "Marktomstandigheden in 2026: is het een goed moment?",
        body: "De Antwerpse vastgoedmarkt in 2026 kenmerkt zich door:\n\nRentevoeten: de hypotheekrente piekte in 2023 op circa 3,5% en bedraagt begin 2026 gemiddeld circa 3,1% voor een lening op 25 jaar. Dat is een lichte daling t.o.v. de piek, maar nog steeds aanzienlijk hoger dan het historische dieptepunt van 1,2% in 2021. Kopers hebben minder leencapaciteit dan enkele jaren geleden — dat tempert de vraag en houdt prijzen onder druk, vooral bij renovatiepanden.\n\nEPC-druk: eigenaars van woningen met EPC E of F worden steeds meer geconfronteerd met de renovatieplicht (6 jaar na aankoop) en de verhuurbeperking (2030). Dat creëert een extra aanbod van renovatiepanden op de markt.\n\nVraag naar instapklare woningen: kopers die willen vermijden te renoveren, betalen premiums voor woningen met goede EPC-labels. Het prijsverschil tussen EPC A/B en EPC E/F is groter dan ooit.\n\nConclusie voor verkopers: als uw woning een goed label heeft en instapklaar is, is de markt behoorlijk actief. Als uw woning EPC E/F heeft of renovatie nodig heeft, is wachten zelden voordelig — de druk neemt toe naarmate 2030 nadert.",
      },
      {
        heading: "Persoonlijke omstandigheden: wanneer moet u verkopen?",
        body: "Het perfecte marktmoment bestaat niet — maar persoonlijke omstandigheden bepalen vaak of wachten realistisch is.\n\nVerkoop nú als:\n\n• U erft een woning en er zijn meerdere erfgenamen: elke maand leegstand kost geld (leegstandsverzekering, onroerende voorheffing, onderhoud). Snel verkopen is meestal de verstandigste beslissing.\n\n• U scheidt: zolang de woning niet verkocht is, blijven beide partijen financieel en emotioneel gebonden. Een snelle verkoop geeft beiden een schone lei.\n\n• Uw woning heeft EPC E of F en u verhuurt: de indexering van uw huurprijs is al beperkt. Vanaf 2028 vervalt indexering volledig; vanaf 2030 mag u niet meer verhuren zonder renovatie. Verkopen vóór die datum vermijdt een gedwongen renovatie.\n\n• U de opbrengst nodig heeft voor een andere aankoop of zorgkosten: zekerheid over timing en prijs weegt zwaarder dan een mogelijke meerprijs later.\n\nWacht en optimaliseer als:\n\n• Uw woning EPC C of beter heeft en in goede staat is: u kunt de lente afwachten voor maximale marktblootstelling.\n• De buurt in volle ontwikkeling is: nieuw openbaar vervoer, heraanleg, nieuwe projecten — die kunnen de waarde verhogen binnen 1 tot 2 jaar.",
      },
      {
        heading: "Vergelijking: nu verkopen vs. wachten",
        body: "Wat u wint en verliest bij uitstellen",
        table: {
          headers: ["Factor", "Nu verkopen", "6 maanden wachten", "1–2 jaar wachten"],
          rows: [
            ["Zekerheid over prijs", "Ja — direct bod", "Onzeker", "Onzeker"],
            ["Kosten tijdens wachttijd (leeg pand)", "Geen", "€3.000–€8.000", "€6.000–€20.000"],
            ["EPC E/F: extra druk", "Geen", "Groter", "Groot — 2028 nadert"],
            ["Renteschommeling (kopersvraag)", "Huidig niveau", "Onbekend", "Onbekend"],
            ["Marktprijsevolutie", "Huidig", "+/- 2–5%", "+/- 5–15%"],
            ["Emotionele belasting", "Eenmalig", "Aanslepend", "Aanslepend"],
          ],
        },
      },
      {
        heading: "Het 'perfecte moment' bestaat niet — maar dit wel",
        body: "Veel eigenaars wachten op het perfecte moment: de rente daalt nog wat, de markt trekt aan, het nieuwe jaar begint, de lente breekt aan. Intussen lopen de kosten door en groeit de onzekerheid.\n\nHet moment om te verkopen is niet wanneer de markt het beste staat — het is wanneer de beslissing voor u financieel en persoonlijk zinvol is.\n\nDrie vragen die alles verduidelijken:\n\n1. Kost de woning u geld zolang ze leegstaat of verhuurd is met een slechte EPC-score? Dan is elk kwartaal wachten een extra kost.\n\n2. Heeft u de verkoopprijs nodig voor iets concreets? Dan is zekerheid nu meer waard dan een hogere prijs over een jaar.\n\n3. Is de woning in goede staat en heeft u alle tijd? Dan kunt u de lente afwachten en via een makelaar de maximale prijs proberen te halen.\n\nWijkopenpanden.be koopt het hele jaar door. Wij geven u een schriftelijk bod na één bezoek — vrijblijvend, zonder tijdsdruk. Zo weet u wat de woning vandaag waard is en kunt u een weloverwogen beslissing nemen.",
      },
    ],
    relatedArticles: ["wat-is-mijn-woning-waard-antwerpen", "huis-verkopen-antwerpen-gids", "hoelang-duurt-huis-verkopen-belgie", "energie-renovatieplicht-vlaanderen-2026", "verhuren-of-verkopen-antwerpen"],
    relatedSituations: ["huis-verkopen-bij-erfenis", "huis-verkopen-bij-scheiding", "pand-met-huurders-verkopen"],
    faqs: [
      {
        question: "Wanneer is het beste moment om een woning te verkopen in Antwerpen?",
        answer:
          "Op de vrije markt is lente (maart–mei) het drukste seizoen met de meeste kopers. Maar het beste moment hangt ook af van uw persoonlijke situatie: bij erfenis, scheiding of een woning met EPC E/F loont snel verkopen meer dan wachten op de perfecte markt. Wijkopenpanden.be koopt het hele jaar door.",
      },
      {
        question: "Is het een goed moment om te verkopen in 2026?",
        answer:
          "Voor woningen in goede staat met een goed EPC-label is de markt in 2026 gunstig door dalende rentevoeten en actieve kopers. Voor woningen met EPC E/F wordt het wachten duurder: de druk van de renovatieplicht (EPC D verplicht bij aankoop) en het verhuurverbod in 2030 drukt de waarde jaar na jaar.",
      },
      {
        question: "Loont het om te wachten op een betere markt?",
        answer:
          "Zelden. De vastgoedmarkt is onvoorspelbaar en een leegstaand pand kost maandelijks geld. Bovendien heeft u bij een hoger verwacht bod altijd hogere makelaarskosten en bijkomende keuringen. Een concreet bod vandaag is in de meeste gevallen beter dan een onzeker bod over zes maanden.",
      },
      {
        question: "Wat als ik nog niet zeker ben of ik wil verkopen?",
        answer:
          "U kunt altijd vrijblijvend een bod aanvragen bij wijkopenpanden.be. Wij bezoeken de woning, geven u een schriftelijk bod en leggen de berekening uit. U bent nergens toe verplicht — geen exclusiviteit, geen kosten. Zo weet u wat uw woning vandaag waard is en kunt u beter beslissen.",
      },
      {
        question: "Heeft het seizoen invloed op de verkoopprijs?",
        answer:
          "Marginaal. In de lente zijn er meer bezichtigingen en iets meer concurrentie tussen kopers, wat de prijs licht kan opdrijven. Maar het effect is kleiner dan de invloed van ligging, staat en EPC-label. Voor een verkoop aan een opkoper speelt het seizoen geen enkele rol.",
      },
    ],
  },
  {
    slug: "pand-tippen-en-beloning-verdienen",
    title: "Pand tippen en tot €5.000 verdienen: zo werkt het beloningsprogramma",
    metaTitle: "Pand tippen en beloning verdienen tot €5.000 | wijkopenpanden.be",
    metaDescription:
      "Kent u een buur, kennis of familielid dat wil verkopen? Geef een tip aan wijkopenpanden.be en ontvang tot €5.000 beloning bij een succesvolle aankoop. Snel, discreet en gratis.",
    publishedAt: "2026-06-09",
    updatedAt: "2026-06-09",
    intro:
      "U kent vast iemand in uw omgeving die zijn woning liever kwijt is dan rijk: een buur met een leegstaand pand, een kennis die erft van een familielid, een collega die scheidt of emigreert. Die informatie is waardevol — en wij betalen ervoor. Via het beloningsprogramma van wijkopenpanden.be kunt u tot €5.000 verdienen door een tip door te geven over een pand in de Antwerpse regio. In dit artikel leggen we precies uit hoe dat werkt, wie in aanmerking komt en wat u kunt verwachten.",
    sections: [
      {
        heading: "Wat is een pand-tip en waarom betalen wij ervoor?",
        body: "Wij kopen panden aan in de Antwerpse regio — ook panden die niet op de markt staan. Veel eigenaars willen verkopen maar nemen zelf geen initiatief: ze kennen de opties niet, vinden het proces te complex of wachten op een aanleiding. Als wij die eigenaars bereiken via een vertrouwde tip, sparen wij tijd en kosten op prospectie. Die besparing delen wij met u.\n\nEen pand-tip is simpelweg het doorgeven van een adres van een woning waarvan u denkt dat de eigenaar mogelijk wil verkopen. U hoeft geen zekerheid te hebben — een vermoeden of een gesprek dat u ooit had met de eigenaar is voldoende. Wij nemen daarna discreet contact op met de eigenaar en onderzoeken of er interesse is.",
      },
      {
        heading: "Wie kan een tip geven?",
        body: "Iedereen. Er zijn geen vereisten, geen registratie en geen kosten. Concrete situaties die wij regelmatig zien:\n\n• Buren die weten dat de woning naast hen al maanden leegstaat\n• Familie van iemand die recent is verhuisd naar een rusthuis of woonzorgcentrum\n• Kennissen die een erfenis hebben ontvangen maar niet weten wat ermee te doen\n• Collega's of vrienden die scheiden en een gemeenschappelijk pand willen verkopen\n• Handwerklui of poetshulpen die in woningen komen en zien dat eigenaars overwegen te verkopen\n• Buurtbewoners die weten dat een naastgelegen pand te koop zou staan als er een eerlijk bod kwam\n\nU hoeft de eigenaar niet te kennen. U hoeft hem of haar zelfs niet te vragen of ze willen verkopen. U geeft het adres door — de rest doen wij.",
      },
      {
        heading: "Welke situaties zijn het meest interessant om te tippen?",
        body: "Hoe concreter de situatie, hoe groter de kans op een succesvolle deal. Dit zijn de situaties die wij het vaakst zien:\n\nLeegstand: een woning die al maanden of jaren leegstaat. De eigenaar betaalt onroerende voorheffing, verzekering en soms ook de leegstandsheffing van de gemeente — zonder inkomsten. Dat maakt verkopen aantrekkelijk.\n\nErfenis: iemand die een woning heeft geërfd maar er niet in wil wonen en het niet wil verhuren. Erfgenamen zijn vaak niet uit op de hoogste prijs, maar op een snelle, probleemloze afhandeling.\n\nScheiding: een koppel dat uit elkaar gaat en een gemeenschappelijk pand heeft. Beide partijen willen de situatie zo snel mogelijk oplossen zonder maandenlange juridische procedures.\n\nRenovatieplichtige woningen: eigenaars van woningen met EPC-label E of F die de renovatie niet willen of kunnen betalen. Wij kopen ook woningen as-is — zonder dat de eigenaar eerst moet renoveren.\n\nVerhuurproblemen: eigenaars met moeilijke huurders of een woning die al te lang leegstaat na vertrek van een huurder.\n\nEmigratie of verhuis: iemand die naar het buitenland vertrekt of definitief ergens anders gaat wonen en een pand in Antwerpen wil loslaten.",
      },
      {
        heading: "Hoe verloopt het beloningsprogramma stap voor stap?",
        body: "Het proces is eenvoudig en transparant:\n\nStap 1 — U geeft uw tip door via het formulier op wijkopenpanden.be/tip-een-pand. U vult het adres van het pand in, het type woning en eventueel een korte context (leegstand, erfenis, scheiding…). U geeft ook uw eigen contactgegevens op zodat wij u na een succesvolle deal kunnen bereiken.\n\nStap 2 — Wij nemen discreet contact op met de eigenaar. Uw naam wordt nooit vermeld tenzij u dit zelf wenst. Wij stellen ons voor als vastgoedopkoper die interesse heeft in de buurt en vragen vrijblijvend of de eigenaar openstaat voor een gesprek.\n\nStap 3 — Als de eigenaar interesse heeft, bezoeken wij de woning en doen wij een schriftelijk bod. De eigenaar beslist volledig vrij.\n\nStap 4 — Bij een ondertekend compromis of koopovereenkomst contacteren wij u om uw beloning te bevestigen.\n\nStap 5 — Na de ondertekening van de notariële akte wordt uw beloning uitbetaald. De uitbetaling verloopt via bankoverschrijving op een rekening naar keuze.",
      },
      {
        heading: "Hoeveel beloning kunt u verdienen?",
        body: "De beloning hangt af van het type pand en de aankoopprijs. Als richtlijn:\n\n• Rijhuis of halfopen woning: tot €2.000\n• Appartement: tot €1.500\n• Herenhuis of villa: tot €5.000\n• Opbrengsteigendom (meerdere units): tot €5.000\n• Bouwgrond: tot €3.000\n• Garage of box: tot €500\n\nHet exacte bedrag bespreken wij persoonlijk met u na ontvangst van uw tip. Er is geen onderhandeling achteraf: wij bevestigen de beloning schriftelijk vóór wij contact opnemen met de eigenaar.\n\nBelangrijk: u kunt meerdere tips geven. Voor elke succesvolle aankoop ontvangt u een aparte beloning. Er is geen maximum aan het aantal tips dat u kunt indienen.",
      },
      {
        heading: "Is het correct om een tip te geven over andermans woning?",
        body: "Dit is een vraag die veel tipgevers zich stellen. Het antwoord is: ja, en het is ook ethisch verantwoord — zolang u met goede intenties handelt.\n\nEen tip geven is niet hetzelfde als de eigenaar verplichten om te verkopen. U deelt informatie — wij doen de rest. Als de eigenaar niet geïnteresseerd is, stoppen wij meteen. Niemand wordt onder druk gezet.\n\nIn veel gevallen is de eigenaar zelfs blij dat iemand het initiatief neemt. Veel mensen willen verkopen maar weten niet hoe ze moeten beginnen, of ze hebben niemand die het voor hen in gang zet. Een discreet telefoontje van ons kan net de aanleiding zijn die ze nodig hadden.\n\nWij benaderen eigenaars altijd met respect en professioneel. Wij vermelden uw naam nooit — tenzij u dit zelf aangeeft — en wij forceren niets.",
      },
      {
        heading: "Veelgestelde vragen van tipgevers",
        body: "Moet ik zeker zijn dat de eigenaar wil verkopen? Nee. Een vermoeden is voldoende. Wij onderzoeken zelf of er interesse is.\n\nWat als meerdere mensen hetzelfde pand tippen? De beloning gaat naar de persoon die als eerste de tip heeft ingediend via het formulier.\n\nKan ik anoniem tippen? Uw identiteit wordt nooit gedeeld met de eigenaar, maar om de beloning te kunnen uitbetalen hebben wij uw contactgegevens nodig. Volledig anoniem tippen zonder beloning is ook mogelijk — maar dan kunnen wij u niet contacteren.\n\nHoe lang duurt het voor ik weet of mijn tip succesvol is? Dat varieert. Sommige eigenaars beslissen snel (enkele weken), anderen hebben maanden de tijd nodig. Wij houden u op de hoogte zodra er nieuws is.",
      },
    ],
    relatedArticles: ["wat-is-een-vastgoedopkoper", "huis-verkopen-antwerpen-gids", "hoelang-duurt-huis-verkopen-belgie"],
    relatedSituations: ["huis-verkopen-bij-erfenis", "huis-verkopen-bij-scheiding"],
    faqs: [
      {
        question: "Wanneer ontvang ik mijn beloning als tipgever?",
        answer:
          "De beloning wordt uitbetaald na de ondertekening van de notariële akte van aankoop. Van zodra de deal definitief is, contacteren wij u om de uitbetaling te regelen via bankoverschrijving.",
      },
      {
        question: "Wat als de eigenaar uiteindelijk niet wil verkopen?",
        answer:
          "Dan ontvangt u geen beloning — maar u riskeert ook niets. Een tip indienen is volledig gratis en vrijblijvend. Er zijn geen kosten, geen contracten en geen verplichtingen van uw kant.",
      },
      {
        question: "Moet ik belastingen betalen op de beloning?",
        answer:
          "In de meeste gevallen wordt een eenmalige beloning als tipgever fiscaal beschouwd als een divers inkomen. Wij raden u aan uw situatie te bespreken met een accountant of fiscalist. Wijkopenpanden.be is niet verantwoordelijk voor de fiscale verwerking aan de kant van de tipgever.",
      },
      {
        question: "Kan ik meerdere panden tippen?",
        answer:
          "Ja, absoluut. U kunt voor elk pand een apart formulier invullen. Er is geen limiet op het aantal tips. Voor elke succesvolle aankoop ontvangt u een aparte beloning.",
      },
      {
        question: "Wie krijgt de beloning als meerdere mensen hetzelfde pand tippen?",
        answer:
          "De beloning gaat naar de persoon die als eerste de tip heeft ingediend via het formulier op onze website. De datum en het tijdstip van indiening worden automatisch geregistreerd.",
      },
      {
        question: "Wat als ik de eigenaar persoonlijk ken — mag ik dan nog tippen?",
        answer:
          "Ja. Er zijn geen restricties op uw relatie met de eigenaar. Vrienden, familie of buren tippen is toegestaan. Wij benaderen de eigenaar altijd professioneel en discreet — uw naam wordt niet vermeld tenzij u dit zelf wenst.",
      },
    ],
  },
  {
    slug: "lijfrente-woning-verkopen-belgie",
    title: "Lijfrente: uw woning verkopen met maandelijkse uitkering — berekening, fiscus en nadelen",
    metaTitle: "Lijfrente woning verkopen 2026: berekening, fiscus & nadelen | wijkopenpanden.be",
    metaDescription:
      "Hoe werkt lijfrente bij vastgoed in België? Bouquet, berekening via sterftetafels, fiscale behandeling en vergelijking met gewone verkoop — volledig uitgelegd voor 2026.",
    publishedAt: "2026-06-09",
    updatedAt: "2026-06-09",
    intro:
      "Lijfrente is voor veel ouderen een onbekend alternatief voor de klassieke woningverkoop. U draagt de eigendom over, maar blijft in uw woning wonen en ontvangt maandelijks een uitkering voor de rest van uw leven. Dat klinkt aantrekkelijk — maar hoe wordt die uitkering berekend? Wat zijn de fiscale gevolgen? En wanneer is lijfrente niet de beste keuze? In dit artikel leggen we alles uit, inclusief de concrete berekening en een eerlijke vergelijking met de alternatieven.",
    sections: [
      {
        heading: "Wat is lijfrente bij vastgoed?",
        body: "Bij een lijfrenteverkoop (Frans: viager) draagt u de juridische eigendom van uw woning over aan een koper. In ruil daarvoor ontvangt u een maandelijkse uitkering — de lijfrente of rente — voor de rest van uw leven. Optioneel wordt er bij de ondertekening van de akte ook een eenmalig bedrag betaald: het bouquet.\n\nU behoudt doorgaans het recht van gebruik en bewoning of het vruchtgebruik:\n\n• Recht van gebruik en bewoning: u mag de woning zelf bewonen, maar niet verhuren. Dit is de meest voorkomende formule bij lijfrente.\n\n• Vruchtgebruik: u mag de woning bewonen én verhuren. Dat geeft u meer vrijheid maar heeft andere fiscale gevolgen.\n\nDe overeenkomst wordt vastgelegd in een notariële akte en is juridisch bindend voor beide partijen. De koper kan de eigendom pas volledig 'genieten' na uw overlijden.",
      },
      {
        heading: "Hoe wordt de lijfrente berekend?",
        body: "De berekening van de maandelijkse lijfrente is gebaseerd op drie factoren: de waarde van de woning, uw leeftijd en de huidige rentevoeten.\n\nStap 1 — Venale waarde: de notaris stelt de marktwaarde van de woning vast. Dit is het vertrekpunt van de berekening.\n\nStap 2 — Waarde van het voorbehouden recht: als u in de woning blijft wonen, wordt de waarde van dat recht van gebruik en bewoning afgetrokken van de venale waarde. Hoe ouder u bent, hoe kleiner die aftrek — want de verwachte resterende bewoningstermijn is korter.\n\nStap 3 — Bouquet in mindering: als er een eenmalig bedrag wordt afgesproken bij de akte, wordt dat in mindering gebracht op het resterende kapitaal.\n\nStap 4 — Omzetting naar lijfrente: het resterende kapitaal wordt omgezet naar een maandelijkse uitkering via sterftetafels. Die tabellen houden rekening met de statistische levensverwachting op basis van uw leeftijd en geslacht. Hoe ouder u bent, hoe hoger de maandelijkse uitkering — want de betalingsperiode is statistisch korter.\n\nPraktisch voorbeeld: een woning met een marktwaarde van €300.000, bewoner van 75 jaar, geen bouquet. Na aftrek van de waarde van het gebruik (geschat op basis van levensverwachting en huidige rentevoet) resulteert dit in een kapitaalbasis van bijvoorbeeld €180.000–€200.000. Omgezet naar een levenslange lijfrente betekent dit een maandelijkse uitkering van ruwweg €1.000–€1.400 per maand. De exacte berekening doet de notaris op basis van officiële sterftetabellen en de geldende interestvoet.",
      },
      {
        heading: "Bouquet: wat is het en hoeveel bedraagt het?",
        body: "Het bouquet is een eenmalige betaling die de koper uitbetaalt bij het ondertekenen van de notariële akte — bovenop of in plaats van een deel van de maandelijkse lijfrente. Het is niet verplicht maar wordt in de praktijk vaak ingebouwd.\n\nVoordelen van een bouquet:\n• U heeft onmiddellijk liquiditeiten voor een grote aankoop, schenking of specifieke behoefte\n• Het verlaagt het risico dat u 'niets ontvangt' als u vroeg overlijdt\n• Het verlaagt de maandelijkse lijfrente (het kapitaal is kleiner)\n\nHoe hoog kan het bouquet zijn? Er is geen wettelijke limiet, maar de praktijk houdt het bouquet doorgaans op 20% tot 40% van de venale waarde van het pand. Een te hoog bouquet maakt de maandelijkse lijfrente zo laag dat de formule haar aantrekkelijkheid verliest. Een te laag bouquet biedt onvoldoende bescherming bij vroeg overlijden.\n\nHet bouquet is juridisch een deel van de verkoopprijs en is onderworpen aan registratierechten.",
      },
      {
        heading: "Fiscale behandeling van lijfrente in België (2026)",
        body: "De fiscale behandeling van lijfrente bij vastgoed in België is genuanceerd en hangt af van de specifieke structuur van de overeenkomst. Wij geven een overzicht van de algemene principes; specifiek fiscaal advies vraagt u het best aan een notaris of fiscalist.\n\nRegistratierechten bij de akte:\nDe akte is onderworpen aan registratierechten op de totale verkoopwaarde (kapitalisatie van de rente + bouquet). Voor een woning die als enige en eigen woning wordt gebruikt, geldt het verlaagde tarief van 2%. Voor investeringspanden of tweede verblijven geldt het standaardtarief.\n\nBelasting op de maandelijkse rente:\nDe periodieke lijfrente wordt in België beschouwd als een divers inkomen in de personenbelasting. Een gedeelte van de rente wordt als kapitaalterugbetaling beschouwd (onbelast) en een gedeelte als interest (belastbaar). De verhouding hangt af van de kapitalisatievoet die bij de akte werd gebruikt. Uw notaris berekent dit bij de opmaak van de akte.\n\nRoerende voorheffing:\nOp de belastbare interestcomponent van de lijfrente is in principe roerende voorheffing van toepassing. De praktische afwikkeling verschilt afhankelijk van of de koper een particulier of een professionele partij is.\n\nBouquet:\nHet bouquet op zich is onderdeel van de verkooptransactie en wordt niet apart als inkomen belast naast de registratierechten.",
      },
      {
        heading: "Bescherming van de verkoper: wat als de koper niet betaalt?",
        body: "Het risico dat de koper op een dag de maandelijkse lijfrente niet meer kan betalen is reëel — zeker als de overeenkomst decennia duurt. De wet voorziet in een aantal beschermingsmechanismen die u als verkoper kunt inbouwen via uw notaris:\n\nHypotheekinschrijving: de koper stelt een hypothecaire zekerheid op de aangekochte woning als garantie voor de uitbetaling van de lijfrente. Als de koper in gebreke blijft, kunt u de woning laten uitwinnen.\n\nOntbindende clausule: als de koper drie of meer achtereenvolgende maanden niet betaalt, kan de verkoop worden ontbonden. De woning keert dan terug naar u — én u behoudt reeds ontvangen betalingen.\n\nIndexatie: een clausule die de lijfrente automatisch aanpast aan de index van de consumptieprijzen voorkomt dat inflatie uw koopkracht uitholt over de jaren.\n\nMinimale garantieperiode: sommige overeenkomsten voorzien dat de rente minstens X jaar wordt uitbetaald — ook als u vroeg overlijdt. In dat geval wordt na uw overlijden de resterende termijn uitbetaald aan uw erfgenamen.",
      },
      {
        heading: "Nadelen van lijfrente: wanneer is het niet de beste keuze?",
        body: "Lijfrente is niet voor iedereen de beste oplossing. Eerlijkheidshalve bespreken we ook de nadelen:\n\nU verliest de eigendom: eens de akte getekend is, bent u geen eigenaar meer. U kunt de woning niet meer verkopen, schenken of nalaten aan kinderen of kleinkinderen.\n\nGeen erfenis voor uw kinderen: als dat uw wens is om de woning na te laten, dan is lijfrente de verkeerde formule. Er is dan een alternatief: een gewone verkoop met het kapitaal geïnvesteerd in een spaar- of beleggingsproduct dat u wel kunt nalaten.\n\nAlea (het kansspelelement): als u vroeg overlijdt, heeft de koper de 'jackpot'. Als u heel lang leeft, betaalt de koper uiteindelijk veel meer dan de marktwaarde. Beide partijen nemen een risico. Voor u als verkoper is het risico: u ontvangt minder dan bij een gewone verkoop als u vroeg overlijdt.\n\nRenteberekening is complex: de berekening via sterftetabellen is niet transparant voor niet-specialisten. U heeft een goede notaris nodig die dit volledig uitlegt.\n\nNiet interessant voor jonge eigenaars: lijfrente is het meest voordelig voor eigenaars van 70 jaar of ouder. Bent u jonger, dan is de maandelijkse uitkering relatief laag omdat de statistische levensverwachting lang is.\n\nInflatierisico zonder indexering: als u geen indexeringsclausule inbouwt, verliest de vaste maandelijkse uitkering over de jaren koopkracht.",
      },
      {
        heading: "Lijfrente vs gewone verkoop vs sale-and-rent-back: vergelijking",
        body: "Drie formules om uw woning te verkopen en toch te blijven wonen. Wat zijn de verschillen?",
        table: {
          headers: ["Criterium", "Lijfrente", "Gewone verkoop", "Sale-and-rent-back"],
          rows: [
            ["Eenmalig kapitaal", "Alleen het bouquet (optioneel)", "Volledige verkoopprijs", "Volledige verkoopprijs"],
            ["Maandelijkse inkomsten", "Levenslange lijfrente", "Geen (tenzij geïnvesteerd)", "Geen (u betaalt huur)"],
            ["In de woning blijven", "Ja — recht van gebruik", "Neen", "Ja — als huurder"],
            ["Maandelijkse vaste kost", "Geen", "Geen", "Huur te betalen"],
            ["Erfenis voor kinderen", "Niet mogelijk", "Kapitaal nalaten", "Kapitaal nalaten"],
            ["Fiscale complexiteit", "Hoog", "Laag", "Matig"],
            ["Beste leeftijd", "70+", "Alle leeftijden", "Alle leeftijden"],
            ["Risico bij vroeg overlijden", "Ja (ontvangen minder)", "Geen", "Geen"],
          ],
        },
      },
      {
        heading: "Wanneer is lijfrente wél de juiste keuze?",
        body: "Ondanks de nadelen is lijfrente in specifieke situaties uitstekend geschikt:\n\n• U bent 70 jaar of ouder en eigenaar van uw woning\n• Uw wettelijk pensioen is onvoldoende om comfortabel te leven\n• U wilt in uw woning blijven wonen en niet verhuizen naar een appartementsgebouw of serviceflat\n• U heeft geen erfgenamen of heeft bewust gekozen om de woning niet na te laten\n• U heeft geen behoefte aan een groot eenmalig kapitaal maar wél aan een stabiel maandelijks inkomen\n• U wilt de woning niet verhuren maar ook niet gewoon leeg laten staan\n\nVoor eigenaars die aan dit profiel voldoen, biedt lijfrente een combinatie van woonzekerheid en financiële rust die geen enkele andere formule biedt.",
      },
    ],
    relatedArticles: ["wat-is-een-vastgoedopkoper", "verhuren-of-verkopen-antwerpen", "wanneer-beste-moment-woning-verkopen"],
    relatedSituations: ["lijfrente-antwerpen", "blijven-wonen"],
    faqs: [
      {
        question: "Vanaf welke leeftijd is lijfrente interessant?",
        answer:
          "Lijfrente is het meest voordelig voor eigenaars van 70 jaar of ouder. Hoe ouder u bent, hoe hoger de maandelijkse uitkering — omdat de statistische levensverwachting korter is en het kapitaal over minder maanden wordt gespreid. Bent u jonger dan 65, dan levert lijfrente doorgaans een lage maandelijkse rente op die minder aantrekkelijk is dan een gewone verkoop.",
      },
      {
        question: "Kan ik de woning nog renoveren of verbouwen als lijfrentekoper de eigenaar is?",
        answer:
          "Grote structurele werken vallen toe aan de nieuwe eigenaar (de koper). Kleine herstellingen en het dagelijks onderhoud blijven doorgaans voor rekening van de bewoner (u). Wat precies voor wiens rekening valt, wordt vastgelegd in de notariële akte. Dit is een punt om goed te onderhandelen vóór u tekent.",
      },
      {
        question: "Wat als mijn woning na de akte stijgt in waarde?",
        answer:
          "De meerwaarde gaat naar de koper. U heeft de woning verkocht en de prijs (maandelijkse rente) is vastgelegd bij de akte. Dat is het spiegelbeeldige risico van het alea-karakter van lijfrente: de koper betaalt mogelijk minder dan de woning later waard is, maar riskeert ook meer te betalen als u lang leeft.",
      },
      {
        question: "Is lijfrente hetzelfde als een omgekeerde hypotheek?",
        answer:
          "Neen. Bij een omgekeerde hypotheek (niet beschikbaar in België) blijft u eigenaar en leent u tegen de waarde van uw woning. Bij lijfrente draagt u de eigendom effectief over. De omgekeerde hypotheek bestaat als product niet in België — lijfrente is het dichtstbijzijnde alternatief voor ouderen die hun woning willen 'verzilveren'.",
      },
      {
        question: "Kan ik lijfrente combineren met een schenking aan mijn kinderen?",
        answer:
          "Niet van de woning zelf — die draagt u immers over aan de koper. Maar het bouquet dat u ontvangt, kunt u wel schenken aan uw kinderen. Ook de maandelijkse lijfrente kunt u (gedeeltelijk) schenken. Bespreek de fiscale optimalisatie hiervan met een notaris of fiscalist.",
      },
      {
        question: "Hoe wordt de lijfrente gegarandeerd als de koper overlijdt?",
        answer:
          "Als de koper vóór u overlijdt, worden zijn verplichtingen overgedragen aan zijn erfgenamen. De erfgenamen zijn gehouden de maandelijkse lijfrente verder te betalen. De hypothekinschrijving op de woning dient als bijkomende garantie. Dit is een standaardclausule in elke lijfrenteovereenkomst.",
      },
    ],
  },
  {
    slug: "leegstandsheffing-antwerpen-2026",
    title: "Leegstandsheffing in de Antwerpse regio 2026: wat u betaalt en wat u kunt doen",
    metaTitle: "Leegstandsheffing Antwerpen 2026: bedragen, regels en oplossingen | wijkopenpanden.be",
    metaDescription:
      "Staat uw woning leeg in de Antwerpse regio? Ontdek hoe de leegstandsheffing werkt in 2026, hoeveel u betaalt en welke opties u heeft om de heffing te vermijden.",
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-12",
    intro:
      "Een leegstaande woning kost u meer dan u denkt. Naast de gewone onroerende voorheffing legt de gemeente of stad een extra leegstandsheffing op — een belasting die elk jaar dat uw pand leegstaat zwaarder wordt. In de Antwerpse regio passen steeds meer gemeenten dit instrument toe als hefboom tegen leegstand. In dit artikel leggen we uit hoe de heffing werkt, wat de concrete gevolgen zijn en welke opties u heeft als eigenaar.",
    sections: [
      {
        heading: "Wat is een leegstandsheffing?",
        body: "Een leegstandsheffing is een gemeentelijke belasting op woningen en gebouwen die langdurig leegstaan. Het doel is tweeledig: eigenaars aanzetten om hun pand terug op de markt te brengen (verhuren of verkopen) én inkomsten genereren voor de gemeente als dat niet gebeurt.\n\nDe heffing komt bovenop de gewone onroerende voorheffing die u elk jaar al betaalt. Ze is dus een extra kost, geen vervanging.\n\nIn Vlaanderen zijn gemeenten vrij om zelf te bepalen of ze een leegstandsheffing invoeren, en aan welk tarief. Dat leidt tot grote verschillen tussen gemeenten. Antwerpen-stad en veel randgemeenten zoals Mortsel, Edegem en Berchem hebben een actief leegstandsbeleid.",
      },
      {
        heading: "Wanneer staat een woning 'officieel' leeg?",
        body: "Een woning wordt geregistreerd als leegstaand wanneer ze gedurende minstens twaalf opeenvolgende maanden niet effectief bewoond of gebruikt wordt. De gemeente stelt dit vast via een combinatie van:\n\n• Het bevolkingsregister: niemand ingeschreven op het adres\n• Waterverbruik: verbruik onder de drempelwaarde (doorgaans minder dan 1 m³ per jaar)\n• Elektriciteitsverbruik: geen of verwaarloosbaar verbruik\n• Visuele vaststellingen door de dienst Wonen of een gemeentelijke inspecteur\n\nEens een woning op het leegstandsregister staat, ontvangt u als eigenaar een brief met de melding. Vanaf dat moment begint de termijn voor de heffing te lopen. U heeft het recht om bezwaar in te dienen als u vindt dat de woning onterecht geregistreerd werd — bijvoorbeeld als u aannemingswerken uitvoert of als de woning reeds te huur of te koop staat.",
      },
      {
        heading: "Hoeveel bedraagt de leegstandsheffing in de Antwerpse regio?",
        body: "De exacte bedragen verschillen per gemeente en worden jaarlijks vastgesteld in het gemeentelijk belastingreglement. Een aantal principes zijn wel algemeen:\n\nProgressieve opbouw: het eerste jaar staat de heffing doorgaans het laagst. Elk jaar dat de woning leegstaat, stijgt het bedrag. Na drie à vier jaar kan de jaarlijkse heffing oplopen tot meerdere duizenden euro.\n\nBerekening op basis van het kadastraal inkomen (KI): veel gemeenten gebruiken een vermenigvuldigingsfactor op het KI. Een pand met een KI van €800 in een gemeente met een factor ×15 geeft een heffing van €12.000 — bovenop de gewone onroerende voorheffing.\n\nAntwerpen-stad: de stad Antwerpen hanteert een van de strengste leegstandsregelingen in Vlaanderen. De heffing loopt progressief op en kan na meerdere jaren leegstand substantieel zijn. Raadpleeg het meest recente belastingreglement op de website van de stad voor de actuele cijfers.\n\nRandgemeenten: Mortsel, Edegem, Berchem, Borgerhout en omgeving hebben elk hun eigen reglement. Sommige gemeenten rekenen een vast bedrag per jaar, andere werken met het KI als basis.",
      },
      {
        heading: "Onroerende voorheffing en leegstandsheffing gecombineerd",
        body: "Als eigenaar van een leegstaand pand betaalt u twee afzonderlijke belastingen tegelijk:\n\n1. Onroerende voorheffing (OV): een jaarlijkse gewestelijke en gemeentelijke belasting op alle onroerende goederen, ongeacht of ze bewoond zijn of niet. In Antwerpen bedraagt het gecombineerde tarief (gewest + gemeente + provincie) typisch 25 tot 35% van het geïndexeerd kadastraal inkomen.\n\n2. Leegstandsheffing: de extra gemeentelijke belasting als het pand leegstaat.\n\nBij een gemiddeld rijhuis in Antwerpen met een kadastraal inkomen van €600–€1.000 kan de combinatie van beide belastingen na enkele jaren leegstand jaarlijks €3.000 tot €8.000 bedragen — puur voor een pand dat niets opbrengt. Daarbij komen nog de kosten voor de opstalverzekering van een leegstaand pand (doorgaans duurder dan voor een bewoond pand) en eventuele beveiligingskosten.",
      },
      {
        heading: "Kunt u de leegstandsheffing vermijden?",
        body: "Er zijn een aantal wettige manieren om de heffing te vermijden of te beperken:\n\nVerhuren: als de woning effectief verhuurd wordt en de huurder is ingeschreven, valt ze van het leegstandsregister. Dit is de meest voor de hand liggende oplossing — maar voor eigenaars met een pand in slechte staat of met een EPC-label E/F is het verhuurverbod (vanaf 2030) een bijkomende drempel.\n\nActieve renovatiewerken: in veel gemeenten wordt een woning tijdelijk van de heffing vrijgesteld als er aantoonbare renovatiewerken lopende zijn (aannemingscontract, bouwaanvraag). De vrijstelling geldt doorgaans voor één à twee jaar.\n\nBezwaar indienen: als u vindt dat de registratie onterecht is, kunt u bezwaar aantekenen bij de gemeente. U moet wel bewijzen dat de woning effectief bewoond of in gebruik is — facturen van nutsverbruik, aangetekende correspondentie, getuigenissen.\n\nVergunningsproblemen: als de woning niet bewoonbaar verklaard is door de gemeente (onbewoonbaar- of ongeschiktheidverklaring), gelden andere regels. De heffing kan in dat geval tijdelijk worden opgeschort.\n\nVerkopen: de meest definitieve oplossing. Als de woning verkocht wordt, eindigt de leegstandsheffing automatisch op de datum van de notariële akte. Voor panden in slechte staat of met complexe situaties (erfenis, mede-eigendom) is verkopen aan een vastgoedopkoper vaak de snelste weg.",
      },
      {
        heading: "Leegstaande woning verkopen: is dat mogelijk?",
        body: "Ja, een leegstaand pand verkopen is volledig mogelijk — ook als het op het leegstandsregister staat. De registratie heeft geen invloed op de verkoopbaarheid van het pand. De koper neemt na de akte de eigendom over en de leegstandsheffing eindigt voor u op de datum van de akte.\n\nBelangrijk: bij de notariële akte wordt de koper geïnformeerd over de leegstandsregistratie. Als de koper ook plannen heeft om het pand leeg te laten, neemt hij de lopende heffing over. Kopers die een pand willen renoveren of verhuren zijn doorgaans niet bezorgd over de registratie.\n\nVoor eigenaars die snel van een leegstaand en problematisch pand af willen, is verkopen aan een vastgoedopkoper vaak de snelste en eenvoudigste optie: geen makelaarscomissie, geen keuringen voor u, en akte binnen twee à drie maanden. Wijkopenpanden.be koopt leegstaande panden in alle staten aan in de Antwerpse regio.",
      },
      {
        heading: "Wat als u een erfenis heeft met een leegstaand pand?",
        body: "Erfgenamen die een leegstaande woning erven, worden mede-eigenaar van het pand en zijn samen verantwoordelijk voor de leegstandsheffing. Dat leidt in de praktijk tot twee problemen:\n\nFinancieel: de heffing loopt maandelijks door, ook terwijl de erfgenamen onderling overleggen over wat er met het pand moet gebeuren. Iedere maand uitstel kost geld.\n\nJuridisch: bij mede-eigendom moeten álle erfgenamen akkoord gaan met een beslissing (verhuren, renoveren, verkopen). Bij meningsverschillen kan dit een traject van maanden of jaren worden — terwijl de heffing doorloopt.\n\nVoor erfgenamen in de Antwerpse regio biedt een snelle verkoop aan een opkoper een praktische uitweg: één notariële akte, de opbrengst verdeeld onder de erfgenamen, en de heffing eindigt definitief. Geen verdere discussies, geen maandelijkse kosten.",
      },
    ],
    relatedArticles: ["verhuren-of-verkopen-antwerpen", "energie-renovatieplicht-vlaanderen-2026", "huis-verkopen-bij-erfenis"],
    relatedSituations: ["huis-verkopen-bij-erfenis", "opknappand-verkopen", "pand-met-huurders-verkopen"],
    faqs: [
      {
        question: "Hoe weet ik of mijn woning op het leegstandsregister staat?",
        answer:
          "U ontvangt een aangetekende brief van de gemeente wanneer uw woning wordt geregistreerd als leegstaand. U kunt ook zelf navragen bij de dienst Wonen van uw gemeente of via het Vlaams Leegstandsregister. Stond u al jaren op de lijst zonder dat u het wist, dan kunt u de heffing terugvorderbaar maken als u kunt bewijzen dat de registratie onterecht was.",
      },
      {
        question: "Geldt de leegstandsheffing ook voor garages en niet-residentieel vastgoed?",
        answer:
          "Ja, in veel gemeenten geldt de leegstandsbelasting ook voor bedrijfspanden, kantoren en andere niet-residentiële gebouwen. De drempel en de berekening kunnen afwijken van die voor woningen. Raadpleeg het belastingreglement van uw specifieke gemeente.",
      },
      {
        question: "Wat als ik de leegstandsheffing niet betaal?",
        answer:
          "Niet-betaling leidt tot dwangbevel en gerechtelijke invordering. De gemeente kan uiteindelijk ook overgaan tot het leggen van een hypotheek op het pand als zekerheid. De schuld blijft verbonden aan het pand en wordt bij een eventuele verkoop verrekend bij de notariële akte.",
      },
      {
        question: "Kan ik de leegstandsheffing aftrekken van de belastingen?",
        answer:
          "Neen, de leegstandsheffing is een gemeentelijke boete en is niet fiscaal aftrekbaar als beroepskost of in de personenbelasting. Ze is een nettokost die volledig ten laste van de eigenaar valt.",
      },
      {
        question: "Hoe lang na de verkoop ontvang ik nog een aanslagbiljet?",
        answer:
          "De heffing eindigt op de datum van de notariële akte. Het aanslagbiljet voor het lopende jaar wordt doorgaans pro rata berekend tot op de datum van de akte. Na de overdracht is de koper verantwoordelijk. Zorg dat dit duidelijk wordt vastgelegd in de verkoopakte.",
      },
    ],
  },
  {
    slug: "erfbelasting-vlaanderen-2026",
    title: "Erfbelasting op een woning in Vlaanderen: tarieven, berekening en vrijstellingen (2026)",
    metaTitle: "Erfbelasting woning Vlaanderen 2026: tarieven & berekening | wijkopenpanden.be",
    metaDescription:
      "Hoeveel erfbelasting betaalt u op een woning in Vlaanderen? Nieuwe tarieven 2026, vrijstelling gezinswoning, berekening in rechte lijn en wanneer verkopen financieel slim is.",
    publishedAt: "2026-06-14",
    updatedAt: "2026-06-14",
    intro:
      "U erft een woning van uw ouders, partner of een familielid. Nog voor u beslist wat u met het pand doet — bewonen, verhuren of verkopen — krijgt u te maken met de erfbelasting. In Vlaanderen gelden sinds 2025–2026 nieuwe tarieven en hogere vrijstellingen. In dit artikel leggen we de volledige regeling uit: wie betaalt hoeveel, hoe wordt de belasting berekend, welke vrijstellingen bestaan er en wanneer is verkopen na een erfenis de verstandigste keuze?",
    sections: [
      {
        heading: "Wat is erfbelasting en wanneer moet u ze betalen?",
        body: "Erfbelasting (vroeger 'successierechten' genoemd) is een Vlaamse belasting die u betaalt op alles wat u erft — inclusief onroerend goed zoals woningen, appartementen, bouwgronden en garages. De belasting is verschuldigd op de netto-erfmassa: de waarde van de activa minus de schulden van de overledene.\n\nU moet de erfbelasting aangeven via een aangifte van nalatenschap, in te dienen bij de Vlaamse Belastingdienst (Vlabel). De aangifte moet in principe binnen vier maanden na het overlijden worden ingediend als het overlijden in België plaatsvond, of binnen vijf maanden als het in het buitenland was.\n\nDe belasting is betaalbaar binnen twee maanden na het versturen van het aanslagbiljet door Vlabel. Betaalt u niet op tijd, dan lopen er nalatigheidsintresten.",
      },
      {
        heading: "Tarieven erfbelasting in rechte lijn (2026)",
        body: "Rechte lijn betekent: kinderen, kleinkinderen, ouders en grootouders. Dit zijn de meest voorkomende erfgenamen bij een woning-erfenis. In Vlaanderen gelden voor 2026 de volgende tarieven per erfgenaam in rechte lijn:\n\n• Op de eerste schijf tot €50.000: 3%\n• Op de schijf van €50.000 tot €250.000: 9%\n• Op het bedrag boven €250.000: 27%\n\nBelangrijk: de tarieven worden toegepast op het aandeel van elke erfgenaam afzonderlijk, niet op de totale waarde van de nalatenschap. Als u samen met twee broers of zussen erft, wordt ieders aandeel apart belast.\n\nPraktisch voorbeeld: u erft als enig kind een woning met een fiscale waarde van €300.000 en er zijn geen schulden.\n\n• 3% op €50.000 = €1.500\n• 9% op €200.000 (van €50.000 tot €250.000) = €18.000\n• 27% op €50.000 (van €250.000 tot €300.000) = €13.500\n• Totaal: €33.000 erfbelasting\n\nHet maximumtarief van 27% in rechte lijn is verlaagd ten opzichte van het vroegere tarief van 30%, wat een besparing oplevert bij grotere nalatenschappen.",
      },
      {
        heading: "Vrijstelling op de gezinswoning voor de langstlevende partner",
        body: "De belangrijkste vrijstelling in het Vlaamse erfrecht is de volledige vrijstelling van erfbelasting op de gezinswoning voor de langstlevende partner. Dit geldt voor:\n\n• Gehuwde partners\n• Wettelijk samenwonenden\n• Feitelijk samenwonenden die minstens drie jaar ononderbroken op hetzelfde adres zijn ingeschreven\n\nDe voorwaarde is dat de woning de gezamenlijke hoofdverblijfplaats was op het moment van het overlijden. De langstlevende partner betaalt dus geen erfbelasting op het gedeelte van de woning dat hij of zij erft — ook niet als die woning meerdere honderdduizenden euro's waard is.\n\nDaarnaast geldt voor de langstlevende partner een algemene vrijstelling van €75.000 op de rest van de nalatenschap (roerende en andere onroerende goederen). Dit bedrag werd verhoogd van €50.000 naar €75.000 in de recentste Vlaamse hervorming.\n\nKinderen die de woning erven terwijl de langstlevende ouder er nog in woont, kunnen rekenen op een vermindering van de erfbelasting als de langstlevende ouder het vruchtgebruik van de woning behoudt.",
      },
      {
        heading: "Tarieven voor andere erfgenamen: broers, zussen en verre familie",
        body: "Voor erfgenamen buiten de rechte lijn gelden aanzienlijk hogere tarieven. Dit speelt bij de vererving van een woning aan broers, zussen, neven, nichten of niet-verwanten.\n\nBroers en zussen (zijlijn, eerste graad):\n• Tot €35.000: 25%\n• Van €35.000 tot €75.000: 30%\n• Van €75.000 tot €175.000: 40%\n• Boven €175.000: 55%\n\nOomsn, tantes, neven en nichten (zijlijn, verdere graden):\n• Tot €35.000: 35%\n• Van €35.000 tot €75.000: 50%\n• Boven €75.000: 65%\n\nNiet-verwanten (vrienden, samenwonenden zonder drie jaar inschrijving):\n• Tot €35.000: 35%\n• Van €35.000 tot €75.000: 50%\n• Boven €75.000: 65%\n\nVoor deze categorieën is de erfbelasting op een woning van gemiddelde waarde al snel substantieel. Een woning van €200.000 geërfd door een neef of nicht levert een erfbelasting op van meer dan €100.000.",
      },
      {
        heading: "Hoe wordt de fiscale waarde van de woning bepaald?",
        body: "De erfbelasting wordt niet berekend op de verkoopprijs maar op de fiscale waarde die de erfgenamen zelf aangeven in de aangifte van nalatenschap. In principe is dit de verkoopwaarde op datum van overlijden — de prijs die een derde bereid zou zijn te betalen.\n\nVlabel controleert de opgegeven waarden. Als de dienst vindt dat de waarde te laag is opgegeven, kan zij een tegenvoorstel doen. Erfgenamen kunnen dan akkoord gaan of bezwaar indienen.\n\nPraktische tips:\n• Laat de woning schatten door een erkend vastgoedexpert of notaris voor u de aangifte indient\n• Een te lage waardering is een fiscaal risico (boetes + intresten bij correctie achteraf)\n• Een realistische waardering is ook in uw belang als u snel wilt verkopen: als u de woning later verkoopt voor meer dan de aangegeven waarde, kan dat fiscale gevolgen hebben\n\nAls er meerdere erfgenamen zijn die de woning willen verkopen, is de uiteindelijke verkoopprijs doorgaans de sterkste indicatie van de reële waarde.",
      },
      {
        heading: "Erfbelasting en daarna: bewonen, verhuren of verkopen?",
        body: "Na betaling van de erfbelasting staat u voor een praktische keuze: wat doet u met de geërfde woning?\n\nBewonen: als u in de woning intrekt als hoofdverblijfplaats, vermijdt u verdere belastingen en kosten op korte termijn. Maar u neemt ook alle onderhoudsverplichtingen, onroerende voorheffing en eventuele renovatiekosten op u.\n\nVerhuren: een optie als u de woning wil bijhouden als investering. Maar in 2026 gelden strenge EPC-eisen voor verhuur. Een woning met label E of F verhuren wordt steeds moeilijker en kan leiden tot het verhuurverbod dat Vlaanderen invoert voor de slechts scorende woningen.\n\nVerkopen: vaak de meest praktische oplossing, zeker als er meerdere erfgenamen zijn die niet allemaal in de woning willen wonen of ze samen willen bijhouden. De opbrengst wordt verdeeld onder de erfgenamen na aftrek van eventuele schulden.\n\nBelangrijk fiscaal punt bij verkoop: als u de woning verkoopt binnen twee jaar na het overlijden, kunt u in bepaalde gevallen een teruggave van een deel van de erfbelasting bekomen als de verkoopprijs lager uitvalt dan de aangegeven fiscale waarde. Uw notaris kan u hierover informeren.",
      },
      {
        heading: "Wanneer is snel verkopen na een erfenis financieel verstandig?",
        body: "Er zijn specifieke situaties waarin snel verkopen — ook aan een vastgoedopkoper — financieel verstandiger is dan wachten:\n\nMeerdere erfgenamen met verschillende plannen: zolang de woning niet verkocht is, moeten alle mede-eigenaars het eens zijn over elke beslissing. Dat kan maanden duren. Ondertussen lopen de kosten door.\n\nWoning in slechte staat of met laag EPC-label: renoveren kost geld en tijd die erfgenamen niet altijd hebben of willen investeren in een woning die ze toch willen verkopen. Verkopen as-is aan een opkoper vermijdt die investering.\n\nLeegstandsheffing: als de woning leegstaat, begint na twaalf maanden de leegstandsheffing te lopen. Elke maand uitstel verhoogt de belastingdruk.\n\nErfbelasting financieren: erfgenamen moeten de erfbelasting betalen vóór ze de erfenis kunnen afronden. Als er geen spaargeld is, kan een snelle verkoop het benodigde kapitaal vrijmaken om de erfbelasting te voldoen.\n\nOnroerende voorheffing: deze loopt maandelijks door, ook als de woning leegstaat en niemand er van geniet.",
      },
    ],
    relatedArticles: ["leegstandsheffing-antwerpen-2026", "verhuren-of-verkopen-antwerpen", "energie-renovatieplicht-vlaanderen-2026"],
    relatedSituations: ["huis-verkopen-bij-erfenis", "verkopen-zonder-makelaar"],
    faqs: [
      {
        question: "Moet ik erfbelasting betalen als ik de woning meteen verkoop na de erfenis?",
        answer:
          "Ja. De erfbelasting is verschuldigd op het moment van overlijden, ongeacht wat u daarna doet met de woning. Verkopen nadien heeft geen invloed op de te betalen erfbelasting, maar de verkoopopbrengst kan u helpen om de erfbelasting te financieren als u niet genoeg spaargeld heeft.",
      },
      {
        question: "Wat als de erfgenamen de erfbelasting niet kunnen betalen?",
        answer:
          "Vlabel biedt in bepaalde gevallen de mogelijkheid tot gespreide betaling of uitstel. U kunt ook een bankfinanciering aanvragen (overbruggingskrediet) om de erfbelasting te betalen in afwachting van de verkoop van het pand. Bespreek de opties met uw notaris of een financieel adviseur.",
      },
      {
        question: "Betaalt u opnieuw registratierechten als u de geërfde woning verkoopt?",
        answer:
          "Neen, u heeft als verkoper geen registratierechten te betalen. De registratierechten zijn ten laste van de koper. Als koper van een woning betaalt men in Vlaanderen 2% (eigen woning, domicilie) of 12% (investering). Als verkoper ontvangt u gewoon de netto-opbrengst na notariskosten.",
      },
      {
        question: "Kunnen erfgenamen onderling afspreken dat één iemand de woning overneemt?",
        answer:
          "Ja. Eén erfgenaam kan de woning overnemen van de anderen door hen uit te kopen. Daarvoor wordt de waarde van de woning bepaald en betaalt de overnemer aan elke mede-erfgenaam hun aandeel. Dit verloopt via een notariële akte en is onderworpen aan verdeelrecht (in Vlaanderen momenteel 2,5%).",
      },
      {
        question: "Wat is het verschil tussen erfbelasting en schenkbelasting?",
        answer:
          "Erfbelasting betaalt u als u iets erft na het overlijden van iemand. Schenkbelasting betaalt u als iemand u bij leven iets schenkt. De schenkbelasting op onroerend goed in rechte lijn bedraagt 3% (kleine schenkingen) tot 27% — vergelijkbaar met de erfbelasting, maar geschonken vóór overlijden kan fiscaal voordeliger zijn als het ruim op voorhand gepland wordt.",
      },
      {
        question: "Geldt de vrijstelling voor de gezinswoning ook als de ouder naar een rusthuis verhuist?",
        answer:
          "Dat hangt af van de situatie. Als de ouder vrijwillig naar een rusthuis verhuist en de woning leegstaat, vervalt de vrijstelling in principe. Er bestaat wel een uitzondering als de ouder door medische redenen gedwongen is het huis te verlaten: de vrijstelling kan dan toch van toepassing zijn. Uw notaris kan beoordelen of u hierop aanspraak kunt maken.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
