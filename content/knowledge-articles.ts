import type { Article } from "./types";

export const articles: Article[] = [
  {
    slug: "commissie-makelaar-belgie",
    title: "Makelaarsloon in België: wat betaalt u echt?",
    metaTitle: "Makelaarsloon in België 2026 — wat betaalt u echt?",
    metaDescription:
      "Wat kost een makelaar in België? Commissie en verborgen kosten lopen hoog op. Vergelijk de volledige rekening met verkopen aan een opkoper zonder commissie.",
    publishedAt: "2026-01-10",
    updatedAt: "2026-01-15",
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
    relatedArticles: ["notariskosten-woning-verkoop", "keuringen-bij-verkoop-woning", "hoelang-duurt-huis-verkopen-belgie", "compromis-verkoop-woning-belgie"],
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
    metaTitle: "Verplichte keuringen bij woningverkoop in België 2026",
    metaDescription:
      "EPC, elektriciteitskeuring, asbestinventaris: welke keuringen zijn wettelijk verplicht bij de verkoop van uw woning? Overzicht van kosten en termijnen.",
    publishedAt: "2026-02-01",
    updatedAt: "2026-03-10",
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
    metaTitle: "Verkoopkosten woning berekenen in België 2026",
    metaDescription:
      "Wat zijn de werkelijke kosten bij de verkoop van uw woning? Notariskosten, keuringen, commissie, fiscaliteit — bereken uw netto-opbrengst voor u beslist.",
    publishedAt: "2026-02-15",
    updatedAt: "2026-03-10",
    intro:
      "De verkoopprijs van uw woning is niet wat u netto ontvangt. Tussen de vraagprijs en het bedrag op uw rekening staan meerdere kostenposten die samen snel enkele procenten van de verkoopprijs kunnen uitmaken. Dit artikel brengt alle kosten in kaart en geeft een realistisch beeld van uw netto-opbrengst.",
    sections: [
      {
        heading: "Kosten die u als verkoper draagt",
        body: "Bij een klassieke verkoop via de markt zijn de volgende kosten voor rekening van de verkoper:\n\n• Makelaarscommissie (inclusief 21% btw)\n• EPC-attest (150–300 euro)\n• Elektriciteitskeuring (150–350 euro)\n• Asbestinventaris (250–600 euro)\n• Bodemattest (€67 via het Vastgoedinformatieplatform — eventuele sanering is extra kostbaar)\n• Eventuele herstellingen of schilderwerken vóór de verkoop\n• Dubbele notariskosten als u opnieuw aankoopt\n\nDe notariskosten voor de verkoopakte zelf zijn in België traditioneel ten laste van de koper. Maar als er een hypotheek op het pand rust, zijn de kosten voor de doorhaling van de hypotheek wel voor de verkoper.",
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
    metaTitle: "EPC-attest aanvragen in Antwerpen 2026 — kosten en procedure",
    metaDescription:
      "Wat is een EPC-attest, hoe vraagt u het aan in Antwerpen, hoeveel kost het en wat zijn de gevolgen van een lage energiescore voor uw verkoopprijs?",
    publishedAt: "2026-03-01",
    updatedAt: "2026-03-15",
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
    metaTitle: "Erfenis woning verkopen in België — stappenplan 2026",
    metaDescription:
      "Wat zijn de stappen bij de verkoop van een geërfde woning? Successierechten, onverdeeldheid, bodemattest en tijdsdruk — lees het volledige stappenplan.",
    publishedAt: "2026-03-01",
    updatedAt: "2026-03-20",
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
    metaTitle: "Compromis, verkoopbelofte en akte bij woningverkoop uitgelegd",
    metaDescription:
      "Wat is het verschil tussen een verkoopbelofte, een compromis en een notariële akte? Wanneer is de verkoop definitief? Alles uitgelegd voor verkopers.",
    publishedAt: "2026-03-10",
    updatedAt: "2026-03-20",
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
    metaTitle: "Notariskosten bij woningverkoop in België 2026",
    metaDescription:
      "Hoeveel kost een notaris bij de verkoop van uw woning? Registratierechten, ereloon, doorhaling hypotheek — volledig overzicht van de notariskosten in België.",
    publishedAt: "2026-03-15",
    updatedAt: "2026-03-25",
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
    metaTitle: "Lijfrente woning verkopen uitgelegd 2026",
    metaDescription:
      "Lijfrente bij vastgoed: wat is het, hoe wordt de prijs berekend, wat zijn de fiscale voordelen en voor wie is een lijfrenteverkoop interessant?",
    publishedAt: "2026-03-20",
    updatedAt: "2026-04-01",
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
    metaTitle: "Blijven wonen na verkoop woning — huur of vruchtgebruik",
    metaDescription:
      "Hoe kunt u in uw woning blijven wonen na de verkoop? Terughuurovereenkomst, vruchtgebruik of recht van bewoning — uitleg, voor- en nadelen.",
    publishedAt: "2026-03-25",
    updatedAt: "2026-04-01",
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
    metaTitle: "Pand in slechte staat verkopen in Antwerpen 2026",
    metaDescription:
      "Woning in slechte staat verkopen? Wat mag u verwachten qua prijs en wat loont het meest: renoveren voor de verkoop of as-is verkopen aan een opkoper?",
    publishedAt: "2026-04-01",
    updatedAt: "2026-04-10",
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
    relatedArticles: ["keuringen-bij-verkoop-woning", "epc-attest-antwerpen", "verkoop-kosten-berekenen", "huis-verkopen-na-brand-of-schade"],
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
    metaTitle: "Belastingen bij woningverkoop in België 2026",
    metaDescription:
      "Welke belastingen betaalt u bij de verkoop van uw woning in België? Meerwaardebelasting, registratierechten en onroerende voorheffing helder uitgelegd.",
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-28",
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
    metaTitle: "Mede-eigendom verkopen in België 2026 — erfenis, scheiding",
    metaDescription:
      "Wat als een mede-eigenaar niet wil verkopen? Alles over een woning in onverdeeldheid verkopen na erfenis of scheiding en gedwongen verdeling in België.",
    publishedAt: "2026-05-10",
    updatedAt: "2026-05-28",
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
    metaTitle: "Snel geld vrijmaken uit uw woning in België 2026",
    metaDescription:
      "Snel geld vrijmaken uit uw woning? Vergelijk alle opties: verkoop aan een opkoper, herfinanciering, lijfrente en sale-and-leaseback. Helder overzicht.",
    publishedAt: "2026-05-20",
    updatedAt: "2026-05-28",
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
    metaTitle: "Energie-renovatieplicht Vlaanderen 2026 — gevolgen voor verkopers",
    metaDescription:
      "EPC-label E of F? De Vlaamse renovatieplicht verplicht kopers tot renoveren binnen 6 jaar. Wat betekent dit voor uw verkoopprijs en wat zijn uw opties?",
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
    metaTitle: "Stedenbouwkundige overtreding woning verkopen Antwerpen 2026",
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
    metaTitle: "Huis verkopen in Antwerpen — complete gids 2026",
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
    relatedArticles: ["commissie-makelaar-belgie", "keuringen-bij-verkoop-woning", "notariskosten-woning-verkoop", "verkoop-kosten-berekenen", "belastingen-bij-woningverkoop", "huis-verkopen-bij-betalingsproblemen-schulden"],
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
    metaTitle: "Hoelang duurt een huis verkopen in België? Tijdlijnen 2026",
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
    metaTitle: "Verhuren of verkopen in Antwerpen? Eerlijke vergelijking 2026",
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
    metaTitle: "Pand tippen en beloning verdienen tot €5.000",
    metaDescription:
      "Kent u iemand die zijn pand wil verkopen? Geef een tip aan wijkopenpanden.be en ontvang tot €5.000 bij een succesvolle aankoop. Snel, discreet en gratis.",
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
    metaTitle: "Lijfrente woning verkopen 2026: berekening, fiscus & nadelen",
    metaDescription:
      "Hoe werkt lijfrente bij vastgoed in België? Bouquet, berekening via sterftetafels en de fiscale behandeling — volledig uitgelegd voor 2026.",
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
    metaTitle: "Leegstandsheffing Antwerpen 2026: bedragen, regels en oplossingen",
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
    relatedArticles: ["verhuren-of-verkopen-antwerpen", "energie-renovatieplicht-vlaanderen-2026"],
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
    metaTitle: "Erfbelasting woning Vlaanderen 2026: tarieven & berekening",
    metaDescription:
      "Hoeveel erfbelasting betaalt u op een woning in Vlaanderen? Tarieven 2026, vrijstelling gezinswoning en wanneer verkopen financieel slim is.",
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
  {
    slug: "hoelang-tijd-erfbelasting-betalen",
    title: "Hoelang heb ik de tijd om erfbelasting te betalen in Vlaanderen?",
    metaTitle: "Hoelang erfbelasting betalen Vlaanderen? Termijnen & uitstel 2026",
    metaDescription:
      "Wanneer moet u erfbelasting betalen na een overlijden? Aangifte binnen 4 maanden, betaling na het aanslagbiljet. Wat bij te laat betalen en uitstel?",
    publishedAt: "2026-06-15",
    updatedAt: "2026-06-15",
    intro:
      "Na een overlijden staat u als erfgenaam voor een reeks verplichtingen — en erfbelasting is er één van. Maar wanneer precies moet u die aangifte indienen? Wanneer moet u betalen? En wat gebeurt er als u de termijn mist? In Vlaanderen zijn de regels duidelijk maar niet altijd bekend. Dit artikel legt alle termijnen stap voor stap uit, inclusief de mogelijkheden voor uitstel en gespreide betaling.",
    sections: [
      {
        heading: "Stap 1: de aangifte van nalatenschap — termijn voor indiening",
        body: "Vóór u erfbelasting kunt betalen, moet u een aangifte van nalatenschap indienen bij de Vlaamse Belastingdienst (Vlabel). Dit is een officieel document dat een overzicht geeft van alle bezittingen en schulden van de overledene.\n\nDe wettelijke termijn voor indiening hangt af van waar het overlijden plaatsvond:\n\n• Overlijden in België: aangifte indienen binnen 4 maanden na de datum van overlijden\n• Overlijden in een ander Europees land: binnen 5 maanden\n• Overlijden buiten Europa: binnen 6 maanden\n\nDe aangifte wordt normaal opgemaakt door de notaris die de nalatenschap behandelt. U hoeft dit als erfgenaam niet zelf te doen, maar u tekent wel mee voor de juistheid van de opgegeven waarden.\n\nBelangrijk: de indieningstermijn begint te lopen op de dag van het overlijden, niet op de dag van de begrafenis of de dag waarop u op de hoogte werd gebracht.",
      },
      {
        heading: "Stap 2: uitstel van de aangiftetermijn aanvragen",
        body: "Als de vier maanden te krap zijn — bijvoorbeeld omdat de nalatenschap complex is, er onroerend goed in het buitenland zit of de erfgenamen het niet eens zijn — kunt u uitstel aanvragen bij Vlabel.\n\nHoe vraagt u uitstel aan?\nU stuurt een gemotiveerd verzoek naar Vlabel vóór het verstrijken van de oorspronkelijke termijn. Een eenvoudige brief of e-mail met de reden voor het uitstel volstaat in de meeste gevallen. Vlabel kent doorgaans een bijkomende termijn toe van twee maanden, soms meer bij complexe dossiers.\n\nVlabel is soepel bij:\n• Complexe nalatenschappen met veel activa of schulden\n• Onroerend goed waarvan de waarde nog niet bepaald is\n• Meningsverschillen tussen erfgenamen\n• Buitenlands vastgoed of rekeningen\n• Overlijden op het einde van het jaar (wat de termijn doet samenvallen met de drukke periode)\n\nVraag uitstel altijd tijdig aan — na het verstrijken van de termijn zonder aanvraag kunnen er al automatisch boetes beginnen lopen.",
      },
      {
        heading: "Stap 3: het aanslagbiljet van Vlabel",
        body: "Nadat u de aangifte heeft ingediend, verwerkt Vlabel de informatie en berekent de verschuldigde erfbelasting. U ontvangt vervolgens een aanslagbiljet — een officieel document met het te betalen bedrag, opgesplitst per erfgenaam.\n\nHoelang duurt de verwerking?\nVlabel heeft wettelijk twee jaar de tijd om een aanslagbiljet te sturen na de indiening van de aangifte. In de praktijk ontvangt u het biljet doorgaans binnen enkele maanden na indiening, maar bij complexe nalatenschappen of als Vlabel vragen heeft over de opgegeven waarden kan het langer duren.\n\nAls Vlabel vindt dat de waarde van een woning of andere activa te laag werd opgegeven, kan de dienst een tegenvoorstel doen. U kunt dan akkoord gaan of een bezwaar indienen.",
      },
      {
        heading: "Stap 4: betaaltermijn na het aanslagbiljet",
        body: "Eens u het aanslagbiljet heeft ontvangen, heeft u twee maanden de tijd om de erfbelasting te betalen. De vervaldatum staat duidelijk vermeld op het biljet.\n\nBetalingswijzen:\n• Bankoverschrijving op het rekeningnummer van Vlabel (vermeld op het biljet)\n• QR-code betaling via de MyMinfin-portal van Vlabel\n\nBetaalt u niet op tijd? Dan begint Vlabel automatisch nalatigheidsintresten aan te rekenen. Het tarief bedraagt momenteel 4% per jaar, berekend op het openstaande bedrag vanaf de dag na de vervaldatum.",
      },
      {
        heading: "Gespreide betaling: wanneer en hoe?",
        body: "Als de erfbelasting te hoog is om in één keer te betalen, kunt u bij Vlabel een afbetalingsplan aanvragen. Dit is niet automatisch — u moet het actief aanvragen en onderbouwen.\n\nVoorwaarden voor gespreide betaling:\n• U kunt aantonen dat onmiddellijke betaling financieel onmogelijk of zeer belastend is\n• U vraagt het aan vóór of kort na de vervaldatum op het aanslagbiljet\n• Vlabel kan bijkomende garanties vragen (bv. een hypotheekinschrijving op het geërfde pand)\n\nBelangrijke nuance: gespreide betaling schort de nalatigheidsintresten niet op. U betaalt intresten op het openstaande saldo zolang u nog niet volledig hebt betaald. Het afbetalingsplan vermijdt dwanginvordering, maar kost u extra op de lange termijn.\n\nAlternatief: als de erfenis een woning bevat en u de middelen niet heeft om de erfbelasting te betalen, is verkopen van de woning vaak de snelste oplossing. U gebruikt de verkoopopbrengst om de erfbelasting te voldoen. Als het aanslagbiljet al beschikbaar is, kan de notaris dit bij de akte meenemen in de afrekening van de opbrengst.",
      },
      {
        heading: "Wat als u te laat betaalt of de aangifte niet indient?",
        body: "Te late aangifte:\nDient u de aangifte niet in binnen de wettelijke termijn (en heeft u geen uitstel aangevraagd), dan riskeert u een boete van €25 tot €250, afhankelijk van de duur van de vertraging. Bij opzettelijke niet-aangifte zijn de sancties zwaarder.\n\nVlabel stuurt bij laattijdige aangifte eerst een aanmaning. Bij aanhoudende niet-naleving kan Vlabel een ambtshalve aanslag vestigen op basis van een geschatte waarde — wat bijna altijd hoger uitvalt dan de werkelijke waarde.\n\nTe late betaling:\nNalatigheidsintresten lopen automatisch vanaf de dag na de vervaldatum op het aanslagbiljet. Bij langdurige niet-betaling kan Vlabel overgaan tot dwanginvordering via een gerechtsdeurwaarder en — in extremis — de uitwinning van het geërfde onroerend goed.",
      },
      {
        heading: "Praktische tijdlijn na een overlijden",
        body: "Ter verduidelijking: een schematisch overzicht van de stappen en termijnen.",
        table: {
          headers: ["Stap", "Termijn", "Door wie"],
          rows: [
            ["Overlijden vastgesteld", "Dag 0", "/"],
            ["Aangifte nalatenschap indienen", "Binnen 4 maanden (BE)", "Notaris + erfgenamen"],
            ["Uitstel aanvragen (indien nodig)", "Vóór dag 120", "Erfgenamen via Vlabel"],
            ["Vlabel verwerkt aangifte en stuurt aanslagbiljet", "Enkele weken tot maanden", "Vlabel"],
            ["Erfbelasting betalen", "Binnen 2 maanden na aanslagbiljet", "Erfgenamen"],
            ["Afbetalingsplan aanvragen (indien nodig)", "Vóór of bij vervaldatum", "Erfgenamen via Vlabel"],
          ],
        },
      },
    ],
    relatedArticles: ["erfbelasting-vlaanderen-2026", "leegstandsheffing-antwerpen-2026"],
    relatedSituations: ["huis-verkopen-bij-erfenis", "verkopen-zonder-makelaar"],
    faqs: [
      {
        question: "Hoelang heb ik de tijd om erfbelasting te betalen na een overlijden in België?",
        answer:
          "U heeft twee maanden de tijd om te betalen, te rekenen vanaf de datum op het aanslagbiljet van Vlabel. Vóór u dat biljet ontvangt, moet u eerst de aangifte van nalatenschap indienen — dat moet binnen vier maanden na het overlijden (als het overlijden in België plaatsvond).",
      },
      {
        question: "Wat als ik de aangifte van nalatenschap te laat indien?",
        answer:
          "Vlabel stuurt eerst een aanmaning. Blijft de aangifte uit, dan kan Vlabel een ambtshalve aanslag vestigen op basis van een geschatte waarde — doorgaans hoger dan de werkelijke waarde. Boetes bedragen €25 tot €250 afhankelijk van de vertraging. Vraag tijdig uitstel aan als vier maanden te krap is.",
      },
      {
        question: "Kan ik uitstel krijgen voor de betaling van erfbelasting?",
        answer:
          "Ja. U kunt bij Vlabel een afbetalingsplan aanvragen als betaling in één keer financieel onmogelijk is. Vlabel kan bijkomende garanties vragen. Let op: nalatigheidsintresten (4% per jaar) blijven lopen op het openstaande saldo, ook bij een afbetalingsplan.",
      },
      {
        question: "Wat zijn de nalatigheidsintresten bij laattijdige betaling?",
        answer:
          "Vlabel rekent momenteel 4% per jaar aan op het openstaande bedrag, berekend vanaf de dag na de vervaldatum op het aanslagbiljet. Bij een erfbelasting van €20.000 die één jaar te laat wordt betaald, loopt dat op tot €800 extra.",
      },
      {
        question: "Kan de verkoop van de geërfde woning de erfbelasting betalen?",
        answer:
          "Ja. U gebruikt de verkoopopbrengst om de erfbelasting te betalen. Als het aanslagbiljet al beschikbaar is op het moment van de akte, kan de notaris het bedrag meenemen in de afrekening. Is de aanslag nog niet gevallen, dan betaalt u Vlabel zelf zodra u het biljet ontvangt. Een snelle verkoop aan een vastgoedopkoper kan dit proces aanzienlijk versnellen.",
      },
      {
        question: "Betalen alle erfgenamen erfbelasting apart of samen?",
        answer:
          "Elk erfgenaam ontvangt een afzonderlijk aanslagbiljet voor zijn of haar aandeel in de nalatenschap. De tarieven worden berekend op ieders individueel aandeel. Erfgenamen betalen dus apart — niet gezamenlijk op het totale nalatenschapsbedrag.",
      },
    ],
  },
  {
    slug: "ontbrekend-busnummer-onvergund-appartement-antwerpen",
    title: "Ontbrekend busnummer en onvergund appartement in Antwerpen: wat nu?",
    metaTitle: "Ontbrekend busnummer appartement Antwerpen: oplossing 2026",
    metaDescription:
      "Geen busnummer, geen EPC, geen verkoop? Waarom busnummers ontbreken in Antwerpen, de tijdelijke oplossing via VEKA en wanneer verkopen toch kan.",
    publishedAt: "2026-06-15",
    updatedAt: "2026-06-15",
    intro:
      "Veel eigenaars van appartementen in Antwerpen lopen tegen een onverwacht probleem aan: hun woning heeft geen officieel busnummer in het adressenregister. Zonder busnummer kan er geen EPC-attest worden opgemaakt. Zonder EPC is verkopen, schenken of nieuw verhuren wettelijk onmogelijk. Hoe ontstaat dit probleem, wat zijn de gevolgen en welke oplossingen bestaan er in Antwerpen? In dit artikel leggen we alles uit — inclusief de specifieke regeling die Antwerpen toepast voor panden van vóór 1979.",
    sections: [
      {
        heading: "Wat is een busnummer en waarom is het verplicht?",
        body: "Een busnummer is de officiële aanduiding van een individuele wooneenheid binnen een gebouw met meerdere units. Op uw adres staat het dan als: 'Kerkstraat 12 bus 3'. In het Vlaamse adressenregister (CRAB/BASISREGISTERS) is elk vergund appartement gelinkt aan zo'n busnummer.\n\nDie koppeling is niet louter administratief. Het busnummer is de sleutel tot een reeks verplichte attesten:\n\n• Het EPC-attest: een energiedeskundige kan geen EPC opmaken voor een adres dat niet bestaat in het adressenregister. Zonder EPC mag u de woning niet te koop stellen, niet schenken en niet nieuw verhuren.\n• De elektriciteitskeuring: ook die is gekoppeld aan een geldig adres.\n• De asbestinventaris: idem.\n\nHet ontbreken van een busnummer blokkeert dus de volledige verkoopprocedure — nog vóór u met een makelaar of notaris contact heeft opgenomen.",
      },
      {
        heading: "Waarom ontbreekt een busnummer in Antwerpen?",
        body: "De meest voorkomende oorzaak is een ontbrekende of onvolledige stedenbouwkundige vergunning. Busnummers worden in het adressenregister opgenomen op basis van vergunde wooneenheden. Is een appartement nooit officieel vergund, dan bestaat het ook niet in het register — en heeft het dus geen busnummer.\n\nDit probleem is bijzonder wijdverspreid in Antwerpen. De stad telt duizenden rijhuizen en panden die in de loop van de twintigste eeuw — vaak zonder vergunning — werden opgesplitst in meerdere appartementen. In wijken als Borgerhout, Berchem, Deurne en de Antwerpse binnenstad zijn panden met 2 tot 4 appartementen waarvan slechts één of geen enkele officieel vergund is, geen uitzondering maar de regel.\n\nConcreet ziet de problematiek er zo uit:\n• Het pand heeft een bouwvergunning voor één woning, maar bestaat feitelijk uit drie appartementen\n• De appartementen zijn kadastraal opgesplitst en er bestaan notariële aktes per eenheid — maar er is nooit een omgevingsvergunning aangevraagd voor de opsplitsing\n• Resultaat: twee van de drie appartementen hebben geen busnummer en zijn administratief 'onzichtbaar'",
      },
      {
        heading: "De koppeling tussen onvergunde panden en ontbrekende busnummers",
        body: "Een onvergund pand en een ontbrekend busnummer zijn vaak twee kanten van dezelfde medaille. Wanneer er een discrepantie bestaat tussen het aantal vergunde wooneenheden en het werkelijk aantal appartementen in een gebouw, spreekt men van een bouwovertreding of stedenbouwkundige overtreding.\n\nDie overtreding heeft directe gevolgen voor het adressenregister:\n• Zonder geldige vergunning voor een wooneenheid kan de gemeente geen officieel busnummer toekennen\n• Zelfs als er een notariële akte bestaat voor het appartement — wat kadastrale registratie mogelijk maakt — geeft dat geen recht op een busnummer\n• De energiedeskundige die een EPC wil opmaken, stuit op een leeg veld in het adressenregister en kan niet verder\n\nSinds april 2024 is de verjaringstermijn voor stedenbouwkundige overtredingen in Vlaanderen verlengd van 5 naar 10 jaar. Dit betekent dat recente overtredingen minder snel verjaren. Verjaring geeft overigens geen recht op een busnummer — het schort enkel de handhaving op.",
      },
      {
        heading: "De specifieke Antwerpse oplossing: tijdelijk busnummer via bevolkingsregister",
        body: "Antwerpen heeft een pragmatische regeling ontwikkeld voor panden waarvan de appartementen aantoonbaar al bestonden vóór november 1979.\n\nHoe werkt dat?\nAls de eigenaar kan aantonen — via inschrijvingen in het historische bevolkingsregister — dat de wooneenheid al bestond vóór november 1979, kan de stad Antwerpen een tijdelijk busnummer toekennen. Dit tijdelijke busnummer laat toe om een EPC op te maken en de woning opnieuw verkoopbaar of verhuurbaar te maken.\n\nBelangrijke nuances:\n• Het tijdelijke busnummer lost de onderliggende stedenbouwkundige overtreding niet op. Het is een administratieve overbrugging, geen regularisatie.\n• De overtreding blijft bestaan en moet vermeld worden in het maatregelenregister (verplicht bij verkoop in Antwerpen sinds april 2026)\n• Heeft u geen historisch bewijs van vóór 1979, dan volstaat deze route niet en moet u regulariseren\n\nHoe vraagt u een tijdelijk busnummer aan in Antwerpen?\nU neemt contact op met de dienst Wonen of de dienst Huisnummering van de stad Antwerpen. Breng historisch bewijs mee: oude huurcontracten, bevolkingsregistratiebewijzen, foto's met datum of correspondentie die de bewoning vóór 1979 aantonen.",
      },
      {
        heading: "De route via VEKA: wat als de energiedeskundige vastloopt?",
        body: "Als een energiedeskundige vaststelt dat een busnummer ontbreekt, kan hij het EPC niet opmaken. De procedure is dan als volgt:\n\n1. De eigenaar meldt het ontbrekende busnummer aan het Vlaams Energie- en Klimaatagentschap (VEKA)\n2. VEKA contacteert de betrokken stad of gemeente om het adres na te laten kijken\n3. De gemeente onderzoekt of het busnummer administratief toegekend kan worden\n4. Als dat mogelijk is (bv. via de Antwerpse bevolkingsregisterroute), wordt het busnummer aangemaakt\n5. De energiedeskundige kan daarna alsnog het EPC opmaken\n\nDeze procedure duurt in de praktijk enkele weken tot enkele maanden, afhankelijk van de werkdruk bij de gemeente en de beschikbaarheid van historisch bewijsmateriaal. Het is dus geen snelle oplossing als u de woning snel wil verkopen.",
      },
      {
        heading: "Regularisatie: de structurele oplossing",
        body: "Als het tijdelijke busnummer via het bevolkingsregister niet mogelijk is — omdat de wooneenheid niet aantoonbaar dateert van vóór 1979 of omdat de gemeente niet akkoord gaat — dan is regularisatie de enige structurele oplossing.\n\nRegularisatie houdt in dat u alsnog een omgevingsvergunning aanvraagt voor de bestaande toestand. U laat een architect of stedenbouwkundige de plannen opmaken van de bestaande opsplitsing en dient een vergunningsaanvraag in bij de gemeente.\n\nNiet elke situatie is regulariseerbaar:\n• Als de opsplitsing strijdig is met het geldende bestemmingsplan (bv. zone voor eengezinswoningen)\n• Als de woning niet voldoet aan de minimumnormen voor bewoonbaarheid (oppervlakte, daglicht, ventilatie)\n• Als er bezwaren zijn van buren of de gemeente principieel weigert\n\nKosten van regularisatie:\n• Architect of stedenbouwkundige: €500–€2.000 afhankelijk van de complexiteit\n• Gemeentelijke dossiertaksen\n• Eventuele aanpassingswerken om aan normen te voldoen\n• Tijdsduur: 3 tot 12 maanden\n\nRegularisatie is niet altijd haalbaar en altijd tijdrovend. Voor eigenaars die snel willen verkopen is het zelden de meest praktische weg.",
      },
      {
        heading: "Verkopen zonder regularisatie: kan dat?",
        body: "Ja — maar enkel als het busnummer administratief beschikbaar is (tijdelijk of definitief) zodat het EPC kan worden opgemaakt. Zonder EPC is verkopen wettelijk niet mogelijk.\n\nAls het busnummer beschikbaar is maar de onderliggende overtreding niet geregulariseerd, gelden de regels van de stedenbouwkundige overtreding bij verkoop:\n\n• De overtreding moet worden vermeld in het maatregelenregister (verplicht in Antwerpen sinds april 2026)\n• De koper wordt bij de akte geïnformeerd over de overtreding\n• De koper neemt de overtreding en de eventuele handhavingsrisico's over\n\nVoor particuliere kopers die de woning zelf willen bewonen, is een onvergunde wooneenheid een risico. Voor professionele vastgoedopkopers die zelf regulariseren of voor eigen gebruik verbouwen, is het een courante situatie.\n\nWijkopenpanden.be koopt panden met busnummer-problematiek en stedenbouwkundige overtredingen aan in de Antwerpse regio. Wij nemen de administratieve situatie volledig op ons — u verkoopt as-is, zonder voorafgaande regularisatie of extra attesten.",
      },
    ],
    relatedArticles: ["stedenbouwkundige-overtreding-woning-verkopen", "keuringen-bij-verkoop-woning", "leegstandsheffing-antwerpen-2026"],
    relatedSituations: ["opknappand-verkopen", "verkopen-zonder-makelaar"],
    faqs: [
      {
        question: "Kan ik mijn appartement verkopen als het geen busnummer heeft?",
        answer:
          "Niet direct. Zonder busnummer kan er geen EPC worden opgemaakt, en zonder EPC mag u de woning wettelijk niet te koop stellen. U moet eerst een busnummer laten toekennen — via de tijdelijke route (Antwerpen, bewoning aantoonbaar vóór 1979), via VEKA, of via regularisatie — alvorens de verkoop te starten.",
      },
      {
        question: "Hoe vraag ik een busnummer aan in Antwerpen?",
        answer:
          "U neemt contact op met de dienst Wonen of de dienst Huisnummering van de stad Antwerpen. Als de wooneenheid aantoonbaar bestaat since november 1979 (via historisch bevolkingsregister), kan Antwerpen een tijdelijk busnummer toekennen. Voor recentere situaties of gevallen zonder historisch bewijs is regularisatie via een omgevingsvergunning nodig.",
      },
      {
        question: "Wat is het verschil tussen een tijdelijk en een definitief busnummer?",
        answer:
          "Een tijdelijk busnummer laat toe dat er een EPC wordt opgemaakt en dat de woning verkocht of verhuurd kan worden. Maar het lost de onderliggende stedenbouwkundige overtreding niet op. Een definitief busnummer wordt toegekend na een goedgekeurde omgevingsvergunning (regularisatie). Enkel dan is de situatie volledig gelegaliseerd.",
      },
      {
        question: "Moet ik de stedenbouwkundige overtreding vermelden bij de verkoop?",
        answer:
          "Ja. In Antwerpen is het maatregelenregister verplicht bij verkoop (sinds april 2026). Overtredingen moeten worden opgenomen en de koper wordt bij de akte geïnformeerd. Verzwijgen van een bekende overtreding kan leiden tot aansprakelijkheid achteraf.",
      },
      {
        question: "Loopt de verjaringstermijn voor een onvergund appartement nog?",
        answer:
          "Sinds april 2024 bedraagt de verjaringstermijn voor stedenbouwkundige overtredingen in Vlaanderen 10 jaar (verlengd van 5 jaar). Een overtreding van vóór 2016 is dus mogelijk reeds verjaard. Maar verjaring geeft geen recht op een busnummer — daarvoor blijft regularisatie of de Antwerpse tijdelijke route nodig.",
      },
      {
        question: "Koopt wijkopenpanden.be appartementen met ontbrekend busnummer?",
        answer:
          "Ja. Wij kopen panden aan in alle administratieve situaties, inclusief onvergunde wooneenheden en panden zonder officieel busnummer. Wij regelen de verdere administratieve afhandeling zelf na de aankoop. U verkoopt as-is, zonder dat u zelf moet regulariseren of attesten moet verzamelen.",
      },
    ],
  },
  {
    slug: "huis-verkopen-met-hypotheek",
    title: "Huis verkopen met een lopende hypotheek: wat u moet weten in België",
    metaTitle: "Huis verkopen met hypotheek België 2026: hoe werkt het?",
    metaDescription:
      "Kunt u uw woning verkopen met een lopende hypotheek? Ja. Alles over de boete voor vervroegde terugbetaling en wat bij te weinig opbrengst. Uitleg 2026.",
    publishedAt: "2026-06-15",
    updatedAt: "2026-06-15",
    intro:
      "Veel eigenaars denken dat een lopende hypotheek de verkoop van hun woning blokkeert. Dat klopt niet. U kunt uw woning gewoon verkopen, ook als u nog maandelijks afbetaalt bij de bank. Maar er zijn een aantal stappen en kosten waarmee u rekening moet houden. In dit artikel leggen we uit hoe de aflossing van uw hypotheek bij verkoop precies verloopt, wat een wedersamenstellingsvergoeding is en wat u kunt doen als de verkoopprijs lager ligt dan het openstaande saldo.",
    sections: [
      {
        heading: "Kan ik mijn woning verkopen met een lopende hypotheek?",
        body: "Ja, absoluut. Een lopende hypotheeklening is geen belemmering voor de verkoop van uw woning. Bij de notariële akte wordt de resterende schuld automatisch afgelost uit de verkoopopbrengst. U ontvangt dan het saldo na aftrek van de openstaande lening en de bijkomende kosten.\n\nDe procedure verloopt via de notaris:\n1. De notaris vraagt bij uw bank het openstaande saldo op\n2. Bij de akte wordt het verschuldigde bedrag rechtstreeks overgemaakt aan de bank\n3. De bank schrapt de hypotheekinschrijving (doorhaling)\n4. U ontvangt het resterende bedrag na aftrek van alle schulden en kosten\n\nU hoeft zelf niets te regelen met de bank vóór de verkoop. De notaris coördineert dit volledig.",
      },
      {
        heading: "Wedersamenstellingsvergoeding: de kost van vervroegde terugbetaling",
        body: "Als u uw hypotheeklening vervroegd terugbetaalt — wat het geval is bij verkoop — rekent de bank een wedersamenstellingsvergoeding (ook: wederbeleggingsvergoeding of heropnemingsvergoeding) aan. Dit is een compensatie voor de bank voor de renteinkomsten die ze misloopt.\n\nHoe hoog is de wedersamenstellingsvergoeding?\nIn België is deze vergoeding wettelijk begrensd op maximaal drie maanden interest op het openstaande saldo, berekend aan de contractuele rentevoet.\n\nVoorbeeldberekening:\n• Openstaand saldo: €120.000\n• Contractuele rentevoet: 2,5%\n• Drie maanden interest: €120.000 × 2,5% ÷ 12 × 3 = €750\n\nDe effectieve vergoeding kan nooit hoger zijn dan dat wettelijke maximum van drie maanden interest. Bij leningen afgesloten na 2014 (consumentenkrediet) gelden soms nog strengere begrenzingen.\n\nBelangrijke uitzondering: als u de woning verkoopt na een echtscheiding of overlijden, vervalt de wedersamenstellingsvergoeding in veel gevallen volledig. Controleer uw leningscontract of vraag dit na bij uw bank.",
      },
      {
        heading: "Kosten van hypotheekdoorhal: wat betaalt u?",
        body: "Naast de wedersamenstellingsvergoeding betaalt u als verkoper ook de kosten voor de hypotheekdoorhal — het officieel schrappen van de hypotheekinschrijving bij het hypotheekkantoor.\n\nDeze kosten bestaan uit:\n• Notariskosten voor de akte van doorhaling: €300–€600 afhankelijk van de notaris en het saldo\n• Registratierechten en hypotheekrechten op de doorhaling: circa 0,3% van het openstaand saldo bij de vestiging van de hypotheek (maar dit wordt bij doorhaling doorgaans beperkt tot een forfait)\n\nIn de praktijk rekent u voor een doorhaling bij een gemiddelde Belgische hypotheeklening op een totaalkost van €400–€800. Deze kosten worden ingehouden op de verkoopopbrengst bij de akte.",
      },
      {
        heading: "Wat als de verkoopprijs lager is dan het openstaande saldo?",
        body: "Dit noemt men een 'onderwaterhypotheek' of 'negatief eigen vermogen'. Het komt voor als:\n• De woning sterk in waarde is gedaald\n• U kort na aankoop al verkoopt (lening nog nauwelijks afbetaald)\n• U een woning heeft met zware structurele problemen waardoor de marktwaarde laag ligt\n\nWat gebeurt er dan?\nU kunt de woning nog steeds verkopen, maar u moet het tekort zelf bijpassen. De notaris betaalt de volledige verkoopopbrengst aan de bank, en het resterende saldo — het verschil tussen de opbrengst en de schuld — blijft u persoonlijk verschuldigd aan de bank.\n\nMogelijke oplossingen:\n• Onderhandelen met de bank: sommige banken aanvaarden een kwijtschelding van het resterende saldo in ruil voor een eenmalige betaling of een betalingsplan\n• Persoonlijk akkoord: de bank en u spreken af dat u het restbedrag gespreid aflost na de verkoop\n• Wachten: als de marktwaarde tijdelijk laag is, kunt u wachten op een betere markt\n\nEen verkoop onder de marktwaarde — bijvoorbeeld aan een vastgoedopkoper — kan in dit scenario toch zinvol zijn als u verwacht dat de waarde verder daalt of als de lopende lasten te zwaar wegen.",
      },
      {
        heading: "Woning verkopen vóór einde looptijd: wanneer loont het?",
        body: "Of vervroegde verkoop financieel verstandig is, hangt af van de verhouding tussen de wedersamenstellingsvergoeding en de maandelijkse lasten die u bespaart.\n\nVerkoop loont als:\n• Uw maandelijkse hypotheeklast plus onroerende voorheffing plus verzekering zwaarder wegen dan de eenmalige vergoeding bij verkoop\n• U de woning toch niet meer nodig heeft (verhuis, erfenis, scheiding)\n• De waarde van de woning momenteel hoog is en u een goed bod kunt realiseren\n• De rente die u betaalt hoger is dan het rendement dat u op de opbrengst kunt halen na belegging\n\nVerkoop loont minder als:\n• U een lage vaste rentevoet heeft die u na afloop kunt vervangen door een hogere variabele rente\n• De woning fors gestegen is in waarde maar u de meerwaarde nog niet wil realiseren\n• Het openstaande saldo nog zeer hoog is en de wedersamenstellingsvergoeding navenant",
      },
      {
        heading: "Verkopen aan een opkoper met lopende hypotheek: kan dat?",
        body: "Ja, en het verloopt identiek als bij een klassieke verkoop. De notaris lost de hypotheek af bij de akte en u ontvangt het nettobedrag na aftrek van de schuld en de kosten.\n\nEen bijkomend voordeel bij verkoop aan een vastgoedopkoper: de akte kan sneller worden gepland (doorgaans binnen twee tot drie maanden), waardoor u ook sneller verlost bent van de maandelijkse hypotheeklasten. Voor eigenaars die de lening als financiële last ervaren, is dat een concrete besparing.\n\nWijkopenpanden.be koopt woningen aan in alle situaties, ook als er een lopende hypotheek op rust. Wij coördineren met de notaris en zorgen voor een vlotte afhandeling.",
      },
    ],
    relatedArticles: ["commissie-makelaar-belgie", "hoelang-duurt-huis-verkopen-belgie", "huis-verkopen-antwerpen-gids", "huis-verkopen-bij-betalingsproblemen-schulden"],
    relatedSituations: ["huis-verkopen-bij-scheiding", "verkopen-zonder-makelaar"],
    faqs: [
      {
        question: "Kan ik mijn woning verkopen als ik nog een hypotheek heb?",
        answer:
          "Ja. Bij de notariële akte wordt het openstaande saldo automatisch afgelost uit de verkoopopbrengst. U ontvangt het restbedrag na aftrek. U hoeft dit niet zelf te regelen — de notaris coördineert de aflossing rechtstreeks met uw bank.",
      },
      {
        question: "Hoeveel kost de wedersamenstellingsvergoeding?",
        answer:
          "De wedersamenstellingsvergoeding is wettelijk begrensd op drie maanden interest op het openstaande saldo aan uw contractuele rentevoet. Bij een saldo van €120.000 aan 2,5% bedraagt dat maximaal €750. Bij scheiding of overlijden vervalt de vergoeding in veel gevallen.",
      },
      {
        question: "Wat zijn de kosten voor de doorhaling van de hypotheek?",
        answer:
          "De notariskosten voor de hypotheekdoorhal bedragen doorgaans €400–€800, afhankelijk van het openstaande saldo en de notaris. Deze kosten worden ingehouden op de verkoopopbrengst bij de akte.",
      },
      {
        question: "Wat als de verkoopprijs lager is dan mijn resterende hypotheeklening?",
        answer:
          "Dan moet u het tekort zelf bijpassen. De volledige verkoopopbrengst gaat naar de bank en u blijft het resterende saldo schuldig. In overleg met uw bank zijn er soms oplossingen zoals een betalingsplan of gedeeltelijke kwijtschelding.",
      },
      {
        question: "Hoe snel kan ik verkopen als ik een hypotheek heb?",
        answer:
          "Even snel als zonder hypotheek. De doorlooptijd wordt bepaald door de verkoop zelf, niet door de hypotheek. Bij verkoop aan een opkoper kan de akte binnen twee tot drie maanden worden gepland. De bank-afhandeling verloopt parallel via de notaris.",
      },
    ],
  },
  {
    slug: "compromis-verkoop-woning-belgie",
    title: "Het compromis bij de verkoop van uw woning: rechten, plichten en risico's",
    metaTitle: "Compromis verkoop woning België 2026: alles wat u moet weten",
    metaDescription:
      "Wat is een compromis bij de verkoop van een woning? Wat als de koper of verkoper afziet? Opschortende voorwaarden, bankwaarborg en risico's uitgelegd voor 2026.",
    publishedAt: "2026-06-15",
    updatedAt: "2026-06-15",
    intro:
      "Het compromis is het belangrijkste document in het verkoopproces van een woning — en tegelijk het minst begrepen. Veel verkopers weten niet precies wat ze tekenen, wat er gebeurt als de koper achteraf afziet en welke risico's ze zelf lopen. In dit artikel leggen we het compromis van A tot Z uit: wat het is, wat erin staat, wanneer u eraan gebonden bent en wat uw opties zijn als er iets misloopt.",
    sections: [
      {
        heading: "Wat is een compromis?",
        body: "Een compromis (officieel: de onderhandse verkoopovereenkomst of 'verkoopbelofte') is het document waarbij u als verkoper en de koper schriftelijk akkoord gaan over de verkoop van de woning. Het bevat de essentiële elementen van de transactie:\n\n• Het adres en de beschrijving van het pand\n• De overeengekomen verkoopprijs\n• De identiteit van de koper en de verkoper\n• De voorziene datum van de notariële akte\n• Eventuele opschortende voorwaarden (bv. het bekomen van een banklening)\n• De staat van het pand en de attesten\n\nHet compromis is een bindend contract. Zodra beide partijen hebben getekend, is de verkoop juridisch definitief — ook al is de notariële akte nog niet opgesteld. 'Verkoop is verkoop' zodra beide partijen het eens zijn over de prijs en het goed.",
      },
      {
        heading: "Wanneer is het compromis bindend?",
        body: "Het compromis is bindend vanaf het moment dat beide partijen — koper én verkoper — hebben ondertekend. Er is geen bedenktermijn voor de verkoper in het Belgische vastgoedrecht (in tegenstelling tot sommige andere landen).\n\nBelangrijke uitzondering voor de koper bij verkoop op plan:\nAls een particulier een woning op plan (VEFA) koopt van een professionele ontwikkelaar, geldt er een wettelijke bedenktermijn van 7 werkdagen. Bij de klassieke verkoop van een bestaande woning bestaat die bedenktermijn niet voor de koper.\n\nEén uitzondering: als het compromis werd ondertekend onder opschortende voorwaarden die nog niet vervuld zijn — zie volgende sectie — is de overeenkomst pas definitief wanneer aan die voorwaarden is voldaan.",
      },
      {
        heading: "Opschortende voorwaarden: wat zijn ze en welk risico brengen ze mee?",
        body: "Een opschortende voorwaarde is een clausule die bepaalt dat de verkoop enkel doorgaat als een bepaalde voorwaarde wordt vervuld. De meest voorkomende is de financieringsvoorwaarde (ook: 'voorwaarde van het bekomen van een lening').\n\nHoe werkt de financieringsvoorwaarde?\nAls de koper de woning wil kopen onder voorbehoud van het bekomen van een banklening, staat dat in het compromis. Krijgt de koper zijn lening niet binnen de afgesproken termijn (doorgaans 4 tot 8 weken), dan kan hij de overeenkomst annuleren zonder kosten of boete.\n\nRisico voor de verkoper:\nAls de financieringsvoorwaarde wordt ingeroepen, is de verkoop nietig en begint u van nul. U heeft tijd verloren, attesten laten opmaken en eventueel andere kandidaat-kopers afgehouden.\n\nHoe beschermt u zich als verkoper?\n• Beperk de termijn voor de financieringsvoorwaarde zo strak mogelijk (4 weken is redelijk)\n• Vraag een bewijs van pre-goedkeuring of financiële capaciteit vóór het tekenen\n• Onderhandel over een beperkt maximumbedrag waarvoor de lening moet worden aangevraagd\n• Overweeg een koper zonder financieringsvoorwaarde — zoals een vastgoedopkoper die cash koopt",
      },
      {
        heading: "Bankwaarborg en handgeld: bescherming voor de verkoper",
        body: "Bij het compromis wordt doorgaans een waarborg of handgeld afgesproken. Dit is een bedrag dat de koper betaalt als zekerheid voor zijn verbintenis.\n\nIn België bedraagt de standaardwaarborg 10% van de verkoopprijs, gestort op een geblokkeerde rekening van de notaris. Het geld blijft geblokkeerd tot de notariële akte en wordt dan verrekend met de totale koopprijs.\n\nWat als de koper afziet na het compromis (zonder geldige opschortende voorwaarde)?\nDan behoudt u als verkoper het recht op de waarborg van 10% als forfaitaire schadevergoeding — of u kunt de gedwongen uitvoering van de verkoop vorderen via de rechtbank (hoewel dat zelden praktisch is).\n\nWat als u als verkoper afziet na het compromis?\nDan moet u de koper het dubbele van de waarborg terugbetalen — dus 20% van de verkoopprijs — als forfaitaire schadevergoeding. Dit is de spiegelregel: de koper verliest zijn waarborg, de verkoper betaalt het dubbele.",
      },
      {
        heading: "Wat staat er verplicht in een compromis?",
        body: "Een geldig compromis moet wettelijk een aantal gegevens bevatten. Ontbreken die, dan kan de overeenkomst aanvechtbaar zijn:\n\nVerplichte vermeldingen:\n• Identiteitsgegevens en burgerlijke staat van beide partijen\n• Nauwkeurige omschrijving van het goed (adres, kadastrale gegevens)\n• Verkoopprijs en betalingsmodaliteiten\n• Datum van de akte (of een indicatieve termijn)\n• Informatie over de stedenbouwkundige situatie (vergunningen, overtredingen)\n• Bodemattest en overeenstemming met de resultaten\n• EPC-score\n• Asbestinventaris (voor gebouwen vóór 2001)\n• Elektriciteitskeuringsattest\n• Vermelding van het recht van voorkoop (indien van toepassing)\n• Informatie over erfdienstbaarheden en lasten\n\nWie stelt het compromis op?\nHet compromis kan worden opgemaakt door:\n• De makelaar (meest voorkomend bij klassieke verkopen)\n• De notaris van de koper of verkoper\n• De partijen zelf (onderhands, zonder begeleiding)\n\nEen compromis opgemaakt zonder notaris is even bindend, maar het risico op fouten of ontbrekende vermeldingen is groter. Bij twijfel laat u het best nakijken door uw notaris vóór u tekent.",
      },
      {
        heading: "Compromis en vastgoedopkoper: hoe verschilt het?",
        body: "Bij de verkoop aan een vastgoedopkoper zoals wijkopenpanden.be verloopt het compromis sneller en eenvoudiger dan bij een klassieke verkoop:\n\n• Geen financieringsvoorwaarde: wijkopenpanden.be koopt cash — u heeft geen risico dat de verkoop na weken wordt geannuleerd omdat de koper geen lening krijgt\n• Snellere timing: het compromis kan binnen enkele dagen na het bod worden getekend\n• Eenvoudigere clausules: er zijn geen complexe voorwaarden, geen makelaarsclausules en geen lange onderhandelingen\n• Zekerheid: zodra u het compromis tekent, is de verkoop definitief\n\nDit maakt de verkoop via opkoper bijzonder aantrekkelijk voor eigenaars die zekerheid willen over de timing en het definitieve karakter van de transactie.",
      },
    ],
    relatedArticles: ["hoelang-duurt-huis-verkopen-belgie", "commissie-makelaar-belgie", "huis-verkopen-met-hypotheek"],
    relatedSituations: ["huis-verkopen-bij-scheiding", "huis-verkopen-bij-erfenis", "verkopen-zonder-makelaar"],
    faqs: [
      {
        question: "Is een compromis definitief of kan ik nog van de verkoop af?",
        answer:
          "Een compromis is definitief zodra beide partijen hebben getekend. Er is geen wettelijke bedenktermijn voor de verkoper bij klassieke woningverkoop. U kunt enkel nog af van de verkoop als er een geldige opschortende voorwaarde van toepassing is die niet wordt vervuld, of als de koper akkoord gaat met annulering.",
      },
      {
        question: "Wat als de koper na het compromis afziet van de aankoop?",
        answer:
          "Als de koper afziet zonder geldige reden (bv. de opschortende voorwaarde is vervuld of er was geen), behoudt u als verkoper de waarborg van 10% als forfaitaire schadevergoeding. U kunt ook via de rechtbank de gedwongen uitvoering vorderen, maar dat is tijdrovend en zelden aangewezen.",
      },
      {
        question: "Wat is een opschortende voorwaarde en moet ik die aanvaarden?",
        answer:
          "Een opschortende voorwaarde (bv. het bekomen van een lening) maakt de verkoop afhankelijk van een externe factor. Als die factor wegvalt, kan de koper de overeenkomst annuleren zonder kosten. U bent niet verplicht een opschortende voorwaarde te aanvaarden — maar in de praktijk doen de meeste kopers een aanvraag via de bank en zult u die voorwaarde bijna altijd tegenkomen bij particuliere kopers.",
      },
      {
        question: "Hoeveel bedraagt de waarborg bij het compromis?",
        answer:
          "De standaardwaarborg in België bedraagt 10% van de verkoopprijs, gestort op een geblokkeerde notarisrekening. Dit bedrag wordt verrekend bij de notariële akte. Als de koper afziet, behoudt u die 10%. Als u als verkoper afziet, betaalt u het dubbele terug: 20% van de verkoopprijs.",
      },
      {
        question: "Wie stelt het compromis op: makelaar of notaris?",
        answer:
          "Beide zijn mogelijk. Bij een klassieke verkoop via makelaar stelt de makelaar doorgaans het compromis op. Bij verkoop via notaris of rechtstreeks doet de notaris dat. Een compromis opgesteld door de makelaar is even juridisch bindend, maar controleer altijd of alle verplichte vermeldingen aanwezig zijn. Twijfelt u, laat het nakijken door uw eigen notaris vóór u tekent.",
      },
      {
        question: "Hoe lang zit er tussen het compromis en de notariële akte?",
        answer:
          "Doorgaans twee tot vier maanden. Die periode dient om alle attesten te verzamelen, de financiering van de koper te regelen en de notaris het dossier te laten voorbereiden. Bij verkoop aan een vastgoedopkoper die cash koopt, kan die termijn worden ingekort tot vier tot acht weken.",
      },
    ],
  },
  {
    slug: "verborgen-gebreken-woning-verkoop-belgie",
    title: "Verborgen gebreken bij de verkoop van uw woning: aansprakelijkheid en bescherming",
    metaTitle: "Verborgen gebreken bij woningverkoop België 2026",
    metaDescription:
      "Aansprakelijk als verkoper voor verborgen gebreken? Wanneer geldt de vrijwaringsplicht en hoe beschermt een as-is-clausule u? Uitleg voor 2026.",
    publishedAt: "2026-06-23",
    updatedAt: "2026-06-23",
    intro:
      "Veel verkopers vrezen dat ze na de notariële akte nog jaren kunnen worden aangesproken voor gebreken die de koper ontdekt. Die angst is begrijpelijk — maar de werkelijkheid is genuanceerder. De Belgische wet beschermt verkopers te goeder trouw, en er zijn concrete manieren om uw aansprakelijkheid te beperken. In dit artikel leggen we uit wanneer u als verkoper wél aansprakelijk bent, wanneer niet, en wat u kunt doen om risico's te vermijden.",
    sections: [
      {
        heading: "Wat zijn verborgen gebreken?",
        body: "De wettelijke vrijwaringsplicht voor verborgen gebreken is vastgelegd in de artikelen 1641–1649 van het Burgerlijk Wetboek. Een gebrek is 'verborgen' als het aan vier cumulatieve voorwaarden voldoet:\n\n1. **Het gebrek was niet zichtbaar** bij een gewone bezichtiging — een koper die normaal oplettend is, kon het niet ontdekken\n2. **Het gebrek bestond al vóór de verkoop** — een gebrek dat pas na de overdracht is ontstaan, valt er niet onder\n3. **Het gebrek is ernstig** — het tast het normale gebruik van de woning aanzienlijk aan of zou de koper hebben doen afzien van de aankoop, of een lagere prijs hebben laten betalen\n4. **De koper wist het niet** — een gebrek dat de koper kende of had moeten kennen bij normaal onderzoek, is niet 'verborgen'\n\nVoorbeelden van verborgen gebreken die rechters in België hebben erkend:\n• Structurele waterinfiltratie via de fundering, niet zichtbaar bij bezoek door droog weer\n• Instabiele draagmuur achter verse bepleistering\n• Verborgen asbestplaten in de spouwmuur die niet in de asbestinventaris stonden\n• Een illegale septische tank die niet conform de wetgeving was\n• Ernstige zwamvorming in de vloerbalken, volledig aan het zicht onttrokken\n\nNiet als verborgen gebreken beschouwd:\n• Zichtbare scheuren, losse tegels, verouderde installaties die een oplettende koper kon zien\n• Gebreken die vermeld staan in een keuring of attest\n• Gewone slijtage die evenredig is met de leeftijd van het pand\n• Gebreken waarop de koper uitdrukkelijk gewezen werd vóór de ondertekening",
      },
      {
        heading: "Te goeder trouw vs. te kwader trouw: het cruciale onderscheid",
        body: "De Belgische wet maakt een fundamenteel onderscheid tussen verkopers die het gebrek kenden en verkopers die het niet kenden.\n\n**Verkoper te goeder trouw** — u wist het gebrek niet\nAls u het verborgen gebrek zelf niet kende, bent u enkel gehouden tot de zogenaamde actio redhibitoria (ontbinding van de koop met terugbetaling van de prijs en kosten) of de actio quanti minoris (prijsvermindering in verhouding tot het gebrek). U betaalt geen verdere schadevergoeding.\n\n**Verkoper te kwader trouw** — u kende het gebrek en zweeg\nAls u wist van het gebrek en het bewust heeft verzwegen of verborgen gehouden, riskeert u naast de ontbinding of prijsvermindering ook de betaling van alle schade die de koper heeft geleden. De rechter kan bovendien oordelen dat de vrijwaringsclausule (zie volgende sectie) niet geldig is.\n\nDit onderscheid is in de praktijk van groot belang: een verkoper die te goeder trouw handelt en alles meldt wat hij weet, loopt aanzienlijk minder risico dan iemand die problemen bewust verzwijgt.",
      },
      {
        heading: "Verjaringstermijn: hoe lang bent u aansprakelijk?",
        body: "Sinds de hervorming van het verbintenissenrecht in 2021 (inwerkingtreding 1 januari 2023) gelden de volgende regels:\n\n• De koper moet de rechtsvordering instellen binnen **één jaar na de ontdekking** van het verborgen gebrek\n• De ontdekking moet plaatsvinden binnen een **redelijke termijn** na de eigendomsoverdracht\n• Er geldt een **absolute verjaringstermijn van 10 jaar** na de levering van het goed, waarna geen vordering meer mogelijk is\n\nVóór 2023 gold een verjaringstermijn van 5 jaar na de ontdekking — die is dus verlengd naar 10 jaar. Voor overeenkomsten gesloten vóór 1 januari 2023 geldt nog de oude regeling.\n\nIn de praktijk betekent dit: als een koper drie jaar na de aankoop een ernstig structureel probleem ontdekt, heeft hij nog één jaar om te dagvaarden — mits hij dit redelijk snel na ontdekking doet. U kunt als verkoper dus tot 10 jaar na de akte worden aangesproken.",
      },
      {
        heading: "As-is-clausule: hoe beschermt u zichzelf als verkoper?",
        body: "De meest gebruikte bescherming voor verkopers is de vrijwaringsclausule, in de volksmond ook wel de 'as-is-clausule' of 'verkoop in de staat waarin het zich bevindt'-clausule.\n\nHoe werkt ze?\nIn het compromis en de notariële akte wordt opgenomen dat de koper het pand aanvaardt 'in de staat waarin het zich bevindt', met uitsluiting van elke vrijwaring voor verborgen gebreken. De koper erkent dat hij het pand heeft bezichtigd en aanvaardt alle zichtbare en redelijkerwijs opspoorbare gebreken.\n\nBelangrijke beperking:\nEen as-is-clausule is **niet geldig als de verkoper te kwader trouw is** — als u wist van een gebrek en het bewust heeft verzwegen, kan de rechter de clausule terzijde schuiven. De clausule beschermt uitsluitend verkopers die zelf onwetend waren van het gebrek.\n\nTips om de clausule zo sterk mogelijk te maken:\n• Laat alle beschikbare keuringsrapporten, attesten en verslagen aan de koper overhandigen vóór het compromis\n• Noteer in het compromis welke specifieke gebreken de koper heeft gezien en aanvaard\n• Als u twijfelt over een element (bv. de toestand van het dak), vermeld dat dan expliciet als 'niet gegarandeerd' eerder dan te zwijgen\n• Laat de clausule opstellen door uw notaris — een vage algemene vrijwaring is minder afdwingbaar dan een concrete, gedetailleerde omschrijving",
      },
      {
        heading: "Wat kunt u doen vóór de verkoop om risico te beperken?",
        body: "De beste bescherming is volledige transparantie gecombineerd met professionele keuringen.\n\n**Laat een bouwkundige keuring uitvoeren**\nEen onafhankelijke bouwexpert stelt een gedetailleerd rapport op over de staat van het pand — fundering, dak, muren, installaties. Dat rapport overhandigt u aan de koper vóór het compromis. Gebreken die in het rapport staan zijn per definitie niet 'verborgen' — de koper is er immers van op de hoogte gesteld.\n\n**Lever alle verplichte attesten correct op**\nEPC, elektriciteitskeuring, asbestinventaris, bodemattest, overstromingskaart — als een gebrek al gedocumenteerd is in een attest (bv. een niet-conform elektriciteitsrapport), kan de koper dat later niet als verborgen gebrek inroepen.\n\n**Documenteer mondeling gegeven informatie**\nAls u de koper mondeling heeft verteld over een lekkend dak dat u heeft laten herstellen, leg dat dan schriftelijk vast in het compromis: 'de verkoper heeft de koper geïnformeerd over een voormalige daklekkage, hersteld op [datum], koper aanvaardt dit'.\n\n**Wees eerlijk over wat u niet weet**\nZeg liever 'ik weet de exacte toestand van de fundering niet' dan niets te zeggen. Te goeder trouw onwetend zijn is juridisch sterk — proberen iets te verbergen is dat niet.",
      },
      {
        heading: "Verkopen aan een opkoper: nul aansprakelijkheidsrisico",
        body: "Wie zijn woning verkoopt aan een professionele vastgoedopkoper zoals wijkopenpanden.be, verkrijgt in de praktijk de sterkst mogelijke bescherming tegen vorderingen wegens verborgen gebreken.\n\nWaarom?\n• Professionele opkopers kopen uitdrukkelijk 'as-is' — de as-is-clausule is een standaardbeding in het compromis\n• Als professionele partij wordt van een opkoper verwacht dat hij zelf een grondige inspectie uitvoert vóór het bod\n• Rechtbanken aanvaarden de vrijwaringsclausule makkelijker tussen een particulier en een professionele koper dan tussen twee particulieren\n• De opkoper koopt precies om te renoveren — hij is niet verrast door gebreken, hij verwacht ze\n\nVoor eigenaars met een oud pand, een woning met gekende structurele problemen of een erfenis waarbij men de exacte staat niet kent, is verkoop aan een opkoper de meest zekere manier om elk risico op een latere vordering te vermijden.",
      },
    ],
    relatedArticles: ["keuringen-bij-verkoop-woning", "compromis-verkoop-woning-belgie", "huis-verkopen-met-hypotheek", "commissie-makelaar-belgie"],
    relatedSituations: ["opknappand-verkopen", "huis-verkopen-bij-erfenis", "verkopen-zonder-makelaar"],
    faqs: [
      {
        question: "Ben ik als verkoper aansprakelijk voor gebreken die ik zelf niet kende?",
        answer:
          "Als u te goeder trouw was — u kende het gebrek niet — bent u enkel gehouden tot ontbinding van de koop of een prijsvermindering. U betaalt geen verdere schadevergoeding. Dat risico beperkt u verder door een as-is-clausule in het compromis op te nemen en alle keuringen correct op te leveren.",
      },
      {
        question: "Hoe lang kan een koper mij aanspreken voor verborgen gebreken?",
        answer:
          "Eén jaar vanaf de ontdekking van het gebrek, met een absolute grens van 10 jaar na de levering van de woning (voor overeenkomsten gesloten vanaf 1 januari 2023). Vóór die datum gold een verjaringstermijn van 5 jaar na ontdekking.",
      },
      {
        question: "Wat is een as-is-clausule en werkt die altijd?",
        answer:
          "Een as-is-clausule sluit uw aansprakelijkheid voor verborgen gebreken uit. Ze is geldig zolang u te goeder trouw was — dus zolang u het gebrek zelf niet kende. Kende u het gebrek wél en zweeg u erover, dan kan de rechter de clausule terzijde schuiven.",
      },
      {
        question: "Kan ik mezelf beschermen door een bouwkundige keuring te laten uitvoeren?",
        answer:
          "Ja, en dit is een van de effectiefste beschermingen. Gebreken die in een professioneel keuringsrapport staan dat u vóór het compromis aan de koper heeft overhandigd, zijn per definitie niet 'verborgen'. De koper werd immers geïnformeerd en kan ze later niet meer als verrassing inroepen.",
      },
      {
        question: "Wat als ik een erfenis verkoop en de staat van de woning niet ken?",
        answer:
          "Dit is een klassieke situatie. U kunt te goeder trouw zijn over gebreken die u als erfgenaam niet kende. Bescherm uzelf door: (1) alle beschikbare attesten op te vragen, (2) een bouwkundige keuring te laten uitvoeren, (3) een sterke as-is-clausule in het compromis op te nemen, en (4) te overwegen de woning aan een professionele opkoper te verkopen die uitdrukkelijk as-is koopt.",
      },
    ],
  },
  {
    slug: "lijfrente-rechten-bescherming-verkoper",
    title: "Lijfrente verkopen: uw rechten en bescherming als verkoper",
    metaTitle: "Lijfrente verkopen België 2026: rechten en bescherming verkoper",
    metaDescription:
      "Ontbindingsbeding, brandverzekering en wat bij overlijden van de koper: uw juridische bescherming als u uw woning op lijfrente verkoopt in 2026.",
    publishedAt: "2026-06-24",
    updatedAt: "2026-06-24",
    intro:
      "Een lijfrenteverkoop klinkt aantrekkelijk: maandelijks inkomen, in uw woning blijven, geen erfenisgedoe. Maar wat als de koper stopt met betalen? Wie betaalt de brandverzekering? En wat als de koper vóór u overlijdt? Dit zijn de vragen die ernstige kandidaat-verkopers stellen — en ze krijgen zelden een helder antwoord. In dit artikel zetten we de concrete juridische bescherming van de verkoper uiteen, gebaseerd op het Belgisch notarieel recht en de geldende fiscale regels voor 2026.",
    sections: [
      {
        heading: "Het ontbindingsbeding: uw grootste bescherming als verkoper",
        body: "Het ontbindingsbeding (of ontbindende voorwaarde bij wanbetaling) is de hoeksteen van de bescherming van de verkoper bij een lijfrenteovereenkomst. Het bepaalt wat er gebeurt als de koper zijn betalingsverplichtingen niet nakomt.\n\nHoe werkt het?\nAls de koper ophoudt met het betalen van de maandelijkse lijfrente, heeft u als verkoper het recht om de ontbinding van de overeenkomst in rechte te vorderen. Bij een correct geformuleerd ontbindingsbeding in de notariële akte kan dat zelfs automatisch plaatsvinden — de overeenkomst wordt ontbonden van rechtswege na een formele ingebrekestelling en een wachttermijn.\n\nWat zijn de gevolgen van de ontbinding?\n• De woning keert volledig terug naar u als verkoper\n• Alle tot dan toe ontvangen bedragen — het bouquet én de betaalde maandelijkse renten — behoudt u als schadevergoeding\n• De koper verliest zijn investering en heeft geen recht op terugbetaling\n\nDit maakt de positie van de verkoper bij een lijfrenteverkoop feitelijk sterker dan die van een verhuurder bij een huurder die niet betaalt. Een verhuurder moet via de vrederechter en een uithuiszettingsprocedure; bij lijfrente met correct ontbindingsbeding is de procedure rechtlijniger.\n\nBelangrijk: het ontbindingsbeding moet expliciet en correct worden opgesteld door de notaris. Een vage formulering kan de afdwingbaarheid beperken. Laat de clausule altijd nakijken door uw eigen notaris.",
      },
      {
        heading: "Registratierechten bij lijfrente: wie betaalt wat?",
        body: "Een veelgestelde vraag bij lijfrenteverkoop is wie de registratierechten betaalt en over welke grondslag ze worden berekend.\n\nDe regel in België:\n• De registratierechten worden betaald door de **koper**, net als bij een klassieke verkoop\n• Ze worden berekend op de **volledige marktwaarde van de woning**, niet enkel op het bouquet of de kapitaalwaarde van de toekomstige renten\n• In Vlaanderen bedraagt het verlaagde tarief voor de enige eigen woning 2% (vanaf 2024); het standaardtarief is 12%\n• De registratierechten worden in één keer betaald bij de notariële akte\n\nGevolg voor de verkoper:\nU ontvangt de registratierechten niet — die gaan rechtstreeks naar de overheid. Maar u betaalt ze ook niet. Als verkoper heeft u hier geen financieel nadeel van. Toch is het nuttig om dit te begrijpen, omdat kopers de registratierechten soms meenemen in de onderhandeling over het bouquet of de maandelijkse rente.\n\nVlaanderen specifiek:\nHet verlaagde tarief van 2% geldt voor de koper als het zijn enige eigen woning wordt en hij er effectief gaat wonen. Bij lijfrente met vruchtgebruik voor de verkoper woont de koper er initieel niet — controleer met uw notaris of het verlaagde tarief van toepassing is op uw concrete situatie.",
      },
      {
        heading: "Brandverzekering en onderhoud: wie draagt welke kosten?",
        body: "Bij een lijfrenteverkoop met vruchtgebruik voor de verkoper ontstaat een gedeelde eigendomssituatie die vergelijkbaar is met de relatie huurder–verhuurder. Die vergelijking helpt om te begrijpen wie welke verzekeringen en onderhoudskosten draagt.\n\nBrandverzekering:\n• De **koper** als blote eigenaar sluit een brandverzekering af voor het gebouw zelf\n• U als **verkoper-vruchtgebruiker** sluit een verzekering af voor uw burgerrechtelijke aansprakelijkheid als bewoner (vergelijkbaar met de huurdersaansprakelijkheid in een klassieke huurrelatie)\n• In de praktijk opteren sommige notarissen voor één gezamenlijke polis waarbij beide partijen zijn opgenomen — dat vermijdt discussies over welke schade onder welke polis valt\n\nOnderhoud en herstellingen:\n• **Kleine herstellingen en gewoon onderhoud**: ten laste van u als vruchtgebruiker (vergelijkbaar met huurder)\n• **Grote herstellingen en structurele werken** (dak, fundering, riolering): ten laste van de koper als blote eigenaar\n• De grens tussen 'klein onderhoud' en 'grote herstellingen' is in het Belgisch recht niet altijd scherp afgebakend — laat dit in de notariële akte zo concreet mogelijk omschrijven\n\nOnroerende voorheffing:\nAls vruchtgebruiker betaalt u de onroerende voorheffing. Dat is de standaardregel bij vruchtgebruik in België. Dit is een kostenpost die sommige verkopers vergeten te meenemen in hun berekening van het netto-inkomen uit de lijfrente.",
      },
      {
        heading: "Lijfrente op twee levens: extra bescherming bij koppels",
        body: "Als u als koppel uw gezinswoning op lijfrente wil verkopen, is er de optie van een lijfrente op twee levens. Dit heeft concrete gevolgen voor de bescherming van de langstlevende partner.\n\nHoe werkt het?\nDe maandelijkse rente loopt zolang minstens één van de twee verkopers in leven is. Pas bij het overlijden van de langstlevende partner stopt de betalingsverplichting van de koper.\n\nVoordeel voor de verkoper:\nDe langstlevende partner heeft inkomensbescherming: ook na het overlijden van de eersteoverleder blijft de volledige rente doorlopen. Er is geen automatische halvering van het inkomen.\n\nInvloed op de maandelijkse rente:\nAangezien de koper statistisch gezien langer moet betalen bij twee levens, is de maandelijkse rente lager dan bij een lijfrente op één leven. De notaris berekent dit op basis van de gecombineerde levensverwachting van beide verkopers via de officiële sterftetafels.\n\nPraktisch advies:\nVraag de notaris bij de berekening altijd een vergelijking te maken tussen lijfrente op één leven (met een verhoogde rente na eerste overlijden) en lijfrente op twee levens. De beste formule hangt af van het leeftijdsverschil tussen de partners en de gezondheidsituatie.",
      },
      {
        heading: "Wat als de koper eerder overlijdt dan u?",
        body: "Dit is een scenario dat verkopers zelden vooraf bedenken, maar het is juridisch relevant en kan uw inkomenssituatie ingrijpend beïnvloeden.\n\nWat gebeurt er?\nBij het overlijden van de koper gaan zowel de eigendom van het pand als de verplichting tot het betalen van de lijfrente over op zijn erfgenamen. De overeenkomst loopt gewoon door — de erfgenamen treden in de rechten en plichten van de overleden koper.\n\nMogelijke scenario's:\n\n**Erfgenamen aanvaarden de nalatenschap:**\nZij erven de woning én de verplichting om u maandelijks te blijven betalen. Uw rente-inkomsten lopen ononderbroken door. U hoeft niets te doen.\n\n**Erfgenamen verwerpen de nalatenschap:**\nAls de erfgenamen de nalatenschap verwerpen (omdat de schulden of verplichtingen te zwaar zijn), erven ze ook de woning niet. De woning valt dan terug naar u als verkoper — conform het ontbindingsbeding. U behoudt alle ontvangen bedragen als schadevergoeding.\n\nPraktische bescherming:\nVraag uw notaris om in de akte expliciet te voorzien wat er bij overlijden van de koper moet gebeuren, inclusief een termijn waarbinnen de erfgenamen zich moeten uitspreken. Zo vermijdt u een juridisch vacuüm waarbij niemand de rente betaalt en u niet weet wat u moet ondernemen.",
      },
      {
        heading: "Indexatie: uw rente beschermen tegen inflatie",
        body: "Een lijfrente afgesloten zonder indexatieclausule heeft over tien of twintig jaar aanzienlijk minder koopkracht dan op de dag van ondertekening. Gezien de inflatie van de voorbije jaren is dit geen theoretisch risico.\n\nHoe werkt indexatie bij lijfrente?\nDe meest gebruikte index in België is de gezondheidsindex (abex-index of consumptieindex). De rente wordt jaarlijks aangepast aan de stijging van die index. Als de index met 3% stijgt, stijgt uw maandelijkse rente dat jaar ook met 3%.\n\nEffect op het starttarief:\nEen geïndexeerde lijfrente start lager dan een niet-geïndexeerde lijfrente voor hetzelfde pand. De koper betaalt initieel minder maar compenseert dat over de jaren via de indexatie. Over een langere looptijd is een geïndexeerde lijfrente voor de verkoper doorgaans voordeliger.\n\nAdvies:\nVraag de notaris altijd de simulatie te maken voor beide opties — met en zonder indexatie — over een horizon van 10, 15 en 20 jaar. Zo kunt u zelf de keuze maken op basis van concrete cijfers in plaats van abstracte percentages.",
      },
      {
        heading: "Lijfrente vs. klassieke verkoop: de beschermingsvergelijking",
        body: "Wie kiest voor lijfrente in plaats van klassieke verkoop, ruilt zekerheid over de prijs in voor zekerheid over het inkomen. Hieronder de vergelijking vanuit het perspectief van de verkoper.\n\nDe lijfrente is een formule voor verkopers die nood hebben aan maandelijkse inkomenszekerheid en in hun woning willen blijven. Wie een maximale verkoopprijs wil en flexibel is over de timing, kiest beter voor een klassieke verkoop.",
        table: {
          headers: ["Aspect", "Klassieke verkoop", "Lijfrente met vruchtgebruik"],
          rows: [
            ["Ontvangst van de prijs", "Eenmalig bij akte", "Gespreid over uw leven"],
            ["Inkomenszekerheid", "Geen — u beheert zelf het kapitaal", "Maandelijks gegarandeerd"],
            ["Woonzekerheid", "U verhuist", "U blijft wonen"],
            ["Erfenis", "Kapitaal voor erfgenamen", "Woning gaat naar koper"],
            ["Bescherming bij wanbetaling", "Niet van toepassing", "Ontbindingsbeding"],
            ["Fiscale behandeling", "Kapitaal belegd: belasting op inkomsten", "Rente zelf niet belast"],
            ["Risico bij lang leven", "Geen", "Voordeel: rente loopt door"],
            ["Risico bij vroeg overlijden", "Geen", "Nadeel: erfgenamen ontvangen niets meer"],
          ],
        },
      },
    ],
    relatedArticles: ["lijfrente-woning-verkopen-belgie", "erfbelasting-vlaanderen-2026", "hoelang-tijd-erfbelasting-betalen", "compromis-verkoop-woning-belgie"],
    relatedSituations: ["huis-verkopen-bij-erfenis", "verkopen-zonder-makelaar"],
    faqs: [
      {
        question: "Wat als de koper stopt met het betalen van de lijfrente?",
        answer:
          "Als de koper zijn betalingen stopzet, kunt u via het ontbindingsbeding in de notariële akte de overeenkomst laten ontbinden. De woning keert terug naar u en u behoudt alle ontvangen bedragen — bouquet én betaalde renten — als schadevergoeding. De koper verliest zijn investering volledig.",
      },
      {
        question: "Wie betaalt de registratierechten bij een lijfrenteverkoop?",
        answer:
          "De koper betaalt de registratierechten, berekend op de volledige marktwaarde van de woning — net als bij een klassieke verkoop. In Vlaanderen geldt het standaardtarief van 12% of het verlaagde tarief van 2% als aan de voorwaarden is voldaan. Als verkoper betaalt u geen registratierechten.",
      },
      {
        question: "Wie betaalt de brandverzekering bij lijfrente met vruchtgebruik?",
        answer:
          "De koper verzekert het gebouw als eigenaar. U als verkoper-vruchtgebruiker sluit een aansprakelijkheidsverzekering af als bewoner, vergelijkbaar met een huurder. Sommige notarissen raden een gezamenlijke polis aan om discussies te vermijden.",
      },
      {
        question: "Wat gebeurt er als de koper eerder overlijdt dan de verkoper?",
        answer:
          "De verplichting tot het betalen van de lijfrente gaat over op de erfgenamen van de koper. Zij erven zowel de woning als de betalingsverplichting. Verwerpen zij de nalatenschap, dan keert de woning terug naar u als verkoper conform het ontbindingsbeding.",
      },
      {
        question: "Is de maandelijkse lijfrente belastbaar als inkomen?",
        answer:
          "Nee, de maandelijkse lijfrente-uitkering wordt in België niet beschouwd als belastbaar inkomen in de personenbelasting. Ze heeft ook geen invloed op sociale uitkeringen of pensioenen. Uitzondering: als de woning commercieel werd gebruikt of aan een vennootschap wordt verkocht, kunnen de regels afwijken.",
      },
      {
        question: "Is een lijfrente op twee levens beter voor koppels?",
        answer:
          "Dat hangt af van de situatie. Bij lijfrente op twee levens loopt de rente door zolang één van de twee partners leeft — de langstlevende behoudt het volledige inkomen. De maandelijkse rente is wel lager dan bij een lijfrente op één leven. Vraag de notaris beide opties door te rekenen voor uw specifieke leeftijden.",
      },
    ],
  },
  {
    slug: "bodemattest-vlaanderen-verkoop",
    title: "Bodemattest bij de verkoop van uw woning in Vlaanderen: procedure, kosten en types",
    metaTitle: "Bodemattest Vlaanderen 2026: procedure, kosten & OVAM",
    metaDescription:
      "Welk bodemattest heeft u nodig bij de verkoop van uw woning in Vlaanderen? OVAM-procedure, kosten 2026, geldigheidsduur en wat u doet bij verontreiniging.",
    publishedAt: "2026-06-27",
    updatedAt: "2026-06-27",
    intro:
      "Bij de verkoop van een woning in Vlaanderen is het bodemattest een verplicht document. Zonder geldig bodemattest kan de notaris de akte niet verlijden. Toch weten veel eigenaars niet hoe ze het moeten aanvragen, hoe lang het duurt en wat de gevolgen zijn als het perceel als verontreinigd geregistreerd staat. In dit artikel leggen we de volledige procedure uit — inclusief de kosten, de verschillende types en wat u kunt doen als uw bodemattest problemen aantoont.",
    sections: [
      {
        heading: "Wat is een bodemattest en waarom is het verplicht?",
        body: "Een bodemattest is een officieel document dat de Openbare Vlaamse Afvalstoffenmaatschappij (OVAM) uitreikt. Het vermeldt of een perceel al dan niet geregistreerd staat als een risicogrond en wat de vastgestelde bodemtoestand is.\n\nDe verplichting is verankerd in het VLAREBO (Vlaams Reglement betreffende de Bodemsanering en de Bodembescherming). De wet bepaalt dat bij elke overdracht van een onroerend goed in Vlaanderen een geldig bodemattest beschikbaar moet zijn. De notaris is verplicht dit document op te vragen en de inhoud ervan mee te delen aan de koper vóór het verlijden van de akte.\n\nEen risicogrond is elk perceel waarop ooit een activiteit heeft plaatsgevonden die mogelijke bodemverontreiniging veroorzaakt. Klassieke voorbeelden:\n\n• Vroegere tankstations of stookolietanks\n• Voormalige chemische wasserijen of droogkuiserijen\n• Voormalig industrieel gebruik (metaalbewerking, verfproductie)\n• Opslag van gevaarlijke stoffen\n• Voormalige gasfabrieken of electriciteitsinstallaties\n\nVoor de meeste woonpercelen in Antwerpen is er geen risicoactiviteit bekend en levert het bodemattest een 'schone' verklaring op.",
      },
      {
        heading: "Hoe vraagt u een bodemattest aan bij OVAM?",
        body: "U vraagt het bodemattest aan via het officiële digitale loket voor vastgoedinformatie in Vlaanderen. Sinds 1 januari 2026 verloopt de aanvraag via het Vastgoedinformatieplatform (VIP) op vastgoedinformatieplatform.vlaanderen.be. De procedure verloopt in enkele stappen:\n\n1. Meld u aan met uw e-ID of itsme\n2. Zoek het perceel op via adres of perceelnummer\n3. Vraag het bodemattest aan en betaal de vergoeding digitaal\n4. Ontvang het bodemattest in uw digitale omgeving\n\nTermijnen: de wet voorziet twee verwerkingstermijnen afhankelijk van de beschikbare gegevens:\n• Als OVAM geen gegevens heeft over het perceel in het Grondinformatieregister: **14 kalenderdagen**\n• Als OVAM wel bestaande gegevens heeft over het perceel: **60 kalenderdagen**\n\nVoor de meeste gewone woonpercelen zonder industrieel verleden ontvangt u het attest binnen 14 kalenderdagen.\n\nBelangrijke regel: alleen de eigenaar van het perceel, of iemand met een aankoopbelofte (compromis), kan een bodemattest aanvragen. Als potentiële koper kunt u geen bodemattest aanvragen voor een woning die u nog niet heeft gekocht. Dat is de taak van de verkoper of de notaris.\n\nAls u niet in staat bent het bodemattest digitaal aan te vragen, kunt u een papieren aanvraag indienen via OVAM in Mechelen. De behandelingstermijn is in dat geval langer.",
      },
      {
        heading: "Hoeveel kost een bodemattest in 2026?",
        body: "OVAM rekent een vaste vergoeding aan per aangevraagd bodemattest. De tarieven worden periodiek aangepast via het besluit van de Vlaamse Regering.\n\nIn 2026 betaalt u voor een standaard bodemattest van één volledig woonperceel **€73,05**: de OVAM-retributie van €67 (vrij van btw) plus de VIP-platformvergoeding van €5 (€6,05 incl. 21% btw). Sinds 1 januari 2026 verlopen de aanvraag en de betaling verplicht via het Vastgoedinformatieplatform (stand juni 2026). Dit is een vergoeding voor de administratieve verwerking — niet voor een eventueel bodemonderzoek ter plaatse.\n\nBelangrijke nuance: als uw perceel als risicogrond geregistreerd staat, kan OVAM een aanvullend oriënterend bodemonderzoek vereisen vóór u kunt verkopen. De kosten van zo'n bodemonderzoek — uitgevoerd door een erkend bodemsaneringsdeskundige (BSD) — variëren van €1.500 tot €5.000 of meer, afhankelijk van de omvang van de site.\n\nAls het bodemonderzoek aantoont dat er verontreiniging is die sanering vereist, loopt de kostprijs aanzienlijk hoger op. Dit is echter een situatie die bij de overgrote meerderheid van woonpercelen niet speelt.",
      },
      {
        heading: "Welke informatie staat in een bodemattest?",
        body: "Een bodemattest vermeldt de volgende informatie:\n\n• Of het perceel al dan niet voorkomt in het grondeninformatieregister van OVAM\n• Of er een risicoactiviteit bekend is op het perceel\n• Of er een bodemonderzoek is uitgevoerd en wat de conclusie was\n• Of er bodemsaneringswerken zijn uitgevoerd of lopend zijn\n• Of er gebruiksbeperkingen gelden voor het perceel\n\nEen 'schoon' bodemattest — waarbij het perceel niet in het risicoregister staat en er geen verontreiniging is vastgesteld — bevat weinig meer dan een bevestiging dat er geen informatie is die op een probleem wijst. Dat is het geval voor de meeste woonpercelen.\n\nEen problematisch bodemattest kan vermelden dat er een oriënterend of beschrijvend bodemonderzoek werd uitgevoerd, dat er verontreiniging werd vastgesteld en welke stoffen werden gedetecteerd. In dat geval zijn er gevolgen voor de verkoop.",
      },
      {
        heading: "Wat als het bodemattest een risico of verontreiniging aangeeft?",
        body: "Als OVAM het perceel heeft geklasseerd als risicogrond of als er bij een eerder bodemonderzoek verontreiniging is vastgesteld, zijn er meerdere pistes:\n\n1. Oriënterend bodemonderzoek\nAls er nog geen bodemonderzoek is gebeurd, vereist de wet dat er een oriënterend onderzoek plaatsvindt vóór de overdracht. Een erkend bodemsaneringsdeskundige voert dit uit. Doel: nagaan of de verontreiniging al dan niet de drempelwaarden overschrijdt.\n\n2. Beschrijvend bodemonderzoek\nAls het oriënterend onderzoek uitwijst dat de verontreiniging significanter is, volgt een uitgebreid beschrijvend onderzoek. Dat brengt de omvang en de risico's in kaart.\n\n3. Bodemsaneringswerken\nAls sanering noodzakelijk is, moeten er bodemsaneringswerken worden uitgevoerd. Dit kan de verkoop vertragen en aanzienlijke kosten met zich meebrengen. De verplichte partij voor sanering is de eigenaar — niet de potentiële koper.\n\n4. Overdracht met 'overdrachtsattest'\nIn bepaalde gevallen kan een verontreinigd perceel toch overgedragen worden, mits de koper op de hoogte is en er een overdrachtsattest werd opgesteld door een erkende BSD. De OVAM geeft toestemming voor de overdracht via dit attest.\n\nVoor de verkoper is het cruciaal dit vroegtijdig te onderzoeken. Wacht u tot het compromis ondertekend is om het bodemattest op te vragen, dan riskeert u een vertraging van weken of maanden.",
      },
      {
        heading: "Bodemattest en verkoop aan wijkopenpanden.be",
        body: "Bij een verkoop aan wijkopenpanden.be bezorgen wij alle attesten, inclusief het bodemattest, op eigen kosten. U hoeft geen OVAM-aanvraag te doen — wij coördineren dit in samenwerking met de notaris.\n\nAls het bodemattest van uw perceel een risicogrond aangeeft, bespreken we dit transparant met u. We werken samen met erkende bodemsaneringsdeskundigen en kennen de procedure. In de meeste gevallen is het probleem kleiner dan gevreesd — en wij zijn bereid ook dergelijke panden over te nemen, mits de situatie duidelijk is.",
      },
    ],
    relatedArticles: ["keuringen-bij-verkoop-woning", "verkoop-kosten-berekenen", "stedenbouwkundige-overtreding-woning-verkopen"],
    relatedSituations: ["verkopen-zonder-makelaar", "huis-verkopen-bij-erfenis"],
    faqs: [
      {
        question: "Is het bodemattest gratis bij OVAM?",
        answer:
          "Nee, het bodemattest is niet gratis. Sinds 1 januari 2026 vraagt u het aan via het Vastgoedinformatieplatform (VIP). U betaalt de OVAM-retributie van €67 per perceel plus een VIP-platformvergoeding van €5 (€6,05 incl. btw), samen €73,05 per perceel (stand juni 2026). Eventuele bodemonderzoeken door erkende deskundigen kosten extra en zijn niet inbegrepen in dit bedrag.",
      },
      {
        question: "Hoe lang is een bodemattest geldig?",
        answer:
          "Een bodemattest heeft geen formele vervaldatum, maar beschrijft de toestand op de datum van uitgifte. Voor een verkoop wordt doorgaans een recent attest gevraagd — bij voorkeur niet ouder dan één jaar. Als er intussen nieuwe informatie beschikbaar is gekomen bij OVAM, kan een nieuw attest een andere conclusie tonen.",
      },
      {
        question: "Kan ik mijn woning verkopen als er bodemverontreiniging is?",
        answer:
          "Ja, maar de procedure is complexer. U moet als verkoper het bodemonderzoek laten uitvoeren door een erkend bodemsaneringsdeskundige. Afhankelijk van de ernst van de verontreiniging volgt eventueel sanering of wordt de overdracht via een speciaal overdrachtsattest goedgekeurd door OVAM.",
      },
      {
        question: "Wie betaalt het bodemattest bij een klassieke verkoop via makelaar?",
        answer:
          "Het bodemattest is ten laste van de verkoper als onderdeel van de verplichte documentatie bij verkoop. De meeste makelaars wijzen de eigenaar hierop, maar de aanvraag moet u zelf doen via MyOVAM of via de notaris.",
      },
      {
        question: "Hoe lang duurt het om een bodemattest te ontvangen?",
        answer:
          "OVAM heeft wettelijk 30 dagen om het bodemattest af te leveren. Bij eenvoudige aanvragen voor woonpercelen is de doorlooptijd in de praktijk vaak korter — soms enkele werkdagen. Dien de aanvraag tijdig in om geen vertraging in de verkoop te riskeren.",
      },
    ],
  },
  {
    slug: "meerwaardebelasting-tweede-verblijf-belgie",
    title: "Meerwaardebelasting bij verkoop van een tweede verblijf of beleggingspand in België",
    metaTitle: "Meerwaardebelasting tweede verblijf België 2026 — tarieven",
    metaDescription:
      "Wanneer betaalt u belasting op de winst bij de verkoop van een tweede woning of beleggingspand in België? Tarieven 16,5% en 33%, berekening en uitzonderingen.",
    publishedAt: "2026-06-27",
    updatedAt: "2026-06-27",
    intro:
      "In België kennen particulieren geen algemene meerwaardebelasting op onroerend goed. Maar dat betekent niet dat u altijd vrij bent van belasting op de winst bij een verkoop. Wie een tweede verblijf, beleggingspand of grond bezit en dat verkoopt binnen een bepaalde termijn, kan geconfronteerd worden met een meerwaardebelasting van 16,5% of zelfs 33%. In dit artikel leggen we de regels stap voor stap uit — met een concreet rekenvoorbeeld.",
    sections: [
      {
        heading: "De basisregel: uw eigen woning is vrijgesteld",
        body: "De Belgische fiscale wet voorziet een vrijstelling van meerwaardebelasting voor de verkoop van de woning die u als hoofdverblijfplaats bewoont. Voorwaarden:\n\n• U heeft de woning effectief als hoofdverblijfplaats gebruikt\n• U was er ingeschreven in het bevolkingsregister\n• Er is geen speculatief opzet\n\nDeze vrijstelling geldt voor uw enige eigen woning, ongeacht de winst die u maakt. Een rijhuis in Antwerpen dat u 20 jaar heeft bewoond en nu verkoopt voor €100.000 meer dan u betaalde: geen meerwaardebelasting.\n\nVoor alle andere eigendommen — tweede verblijf, beleggingspand, garageboxen, gronden — gelden andere regels.",
      },
      {
        heading: "Wanneer betaalt u belasting op de meerwaarde?",
        body: "Er zijn twee specifieke situaties waarbij particulieren meerwaardebelasting verschuldigd zijn:\n\n**Gebouwde onroerende goederen verkocht binnen 5 jaar na aankoop:**\nAls u een woning, appartement of ander gebouw koopt en verkoopt binnen 5 jaar na de aankoopdatum (datum van de aankoopakte, niet het compromis), bent u belasting verschuldigd op de gerealiseerde meerwaarde. Het tarief bedraagt 16,5%, te vermeerderen met gemeentebelasting.\n\nDe 5-jaarsperiode wordt berekend van datum aankoopakte tot datum van de verkoopbelofte (compromis).\n\n**Gronden verkocht binnen 8 jaar na aankoop:**\nVoor onbebouwde percelen gelden strengere regels:\n• Verkoop binnen 5 jaar na aankoop: 33% op de meerwaarde\n• Verkoop tussen 5 en 8 jaar na aankoop: 16,5% op de meerwaarde\n• Na 8 jaar: geen meerwaardebelasting\n\n**Speculatief karakter:**\nBuiten de wettelijke termijnen kan de belastingdienst toch meerwaardebelasting heffen als de verkoop een 'normaal beheer van het privévermogen' overschrijdt. Dit speelt bij herhaalde aankopen en doorverkopen of bij aankoop met duidelijk speculatief opzet. In dat geval wordt de volledige meerwaarde belast als diverse inkomsten (divers inkomen) aan het progressieve tarief.",
      },
      {
        heading: "Hoe wordt de belastbare meerwaarde berekend?",
        body: "De belastbare meerwaarde is het verschil tussen de verkoopprijs en een gecorrigeerde aankoopprijs. De exacte berekeningswijze is complex en hangt af van de omstandigheden van uw dossier — laat de berekening altijd uitvoeren door de notaris of een fiscalist.\n\nIn grote lijnen worden bij de berekening de volgende elementen meegenomen:\n\n• De aankoopprijs wordt gecorrigeerd voor inflatie via een wettelijke indexatiecoëfficiënt (gepubliceerd door de FOD Financiën)\n• Bewezen kosten bij de aankoop (registratierechten, notariskosten) en de verkoop (notariskosten, makelaarscommissie) kunnen worden meegeteld\n• Bewezen verbouwingskosten (met facturen) kunnen de aankoopbasis verhogen\n• De belastbare meerwaarde kan ook worden verminderd naargelang het aantal volledige jaren eigendom\n\nDe notaris berekent het belastbare bedrag op basis van de fiscale dossiergegevens en de officiële jaarcoëfficiënten. Vraag dit vóór de compromis te laten simuleren als de termijn van 5 jaar nadert.",
      },
      {
        heading: "Concreet: wat betaalt u bij een beleggingspand verkocht binnen 5 jaar?",
        body: "Stel: u heeft een appartement als beleggingspand gekocht 3 jaar geleden en verkoopt het nu met een gerealiseerde winst van €30.000 na alle correcties.\n\nMeerwaardebelasting: €30.000 × 16,5% = €4.950\nGemeentebelasting (doorgaans 6–8% van de belasting): circa €300–€400 extra\n\nTotale belastingkost: circa €5.250–€5.350\n\nAls u dezelfde winst maakt na 5 jaar eigendom: €0 meerwaardebelasting.\n\nHet tarief van 16,5% geldt op de belastbare meerwaarde na correcties. De notaris berekent de exacte belastbare grondslag in uw dossier.",
      },
      {
        heading: "Speciale gevallen: erfenis, schenking en nieuwbouw",
        body: "**Geërfd vastgoed:**\nAls u een woning erft, start de 5-jaarstermijn voor de meerwaardebelasting op de datum van overlijden — niet op de datum waarop de overledene het goed kocht. Erft u een woning en verkoopt u die minder dan 5 jaar na het overlijden, dan kan er meerwaardebelasting verschuldigd zijn als er een meerwaarde is ten opzichte van de fiscale waarde bij het overlijden.\n\nIn de praktijk is de belastbare meerwaarde bij erfeniswoningen vaak beperkt als u snel verkoopt aan of rond de waarde die bij de erfbelasting werd opgegeven.\n\n**Geschonken vastgoed:**\nBij een schenking start de 5-jaarstermijn op de datum van de schenkingsakte. Als u een geschonken woning verkoopt binnen 5 jaar na de schenking, gelden dezelfde regels als bij een aankoop.\n\n**Nieuwbouw en btw:**\nAls u een nieuwbouwappartement binnen 2 jaar na eerste ingebruikname verkoopt, zijn er btw-implicaties (zie artikel over belastingen bij woningverkoop). Dit staat los van de meerwaardebelasting.",
      },
      {
        heading: "Wanneer bent u definitief vrijgesteld van meerwaardebelasting?",
        body: "Als particulier bent u vrijgesteld van meerwaardebelasting bij de verkoop van onroerend goed in de volgende gevallen:\n\n• Verkoop van uw eigen woning (hoofdverblijfplaats) — altijd vrijgesteld\n• Verkoop van een gebouw meer dan 5 jaar na de aankoopakte\n• Verkoop van een grond meer dan 8 jaar na de aankoopakte\n• Als de gerealiseerde meerwaarde nihil of negatief is (verlies)\n• Als de belastingdienst de transactie beschouwt als normaal beheer van uw privévermogen\n\nDe vrijstellingsduur begint te lopen op de dag van de aankoopakte — niet op de dag van het compromis of de betaling.",
      },
    ],
    relatedArticles: ["belastingen-bij-woningverkoop", "notariskosten-woning-verkoop", "verhuren-of-verkopen-antwerpen"],
    relatedSituations: ["huis-verkopen-bij-erfenis", "verkopen-zonder-makelaar"],
    faqs: [
      {
        question: "Betaal ik meerwaardebelasting als ik mijn tweede woning verkoop na 5 jaar?",
        answer:
          "Nee. Als u een gebouweigendom meer dan 5 jaar bezit voor de verkoopbelofte (compromis) wordt ondertekend, is er geen meerwaardebelasting verschuldigd. De 5-jaarstermijn wordt berekend van de datum van de aankoopakte tot de datum van het compromis.",
      },
      {
        question: "Hoe hoog is de meerwaardebelasting op een beleggingspand dat ik binnen 5 jaar verkoop?",
        answer:
          "Het tarief bedraagt 16,5% op de belastbare meerwaarde, te vermeerderen met de gemeentebelasting. De belastbare meerwaarde wordt berekend na indexering van de aankoopprijs en aftrek van kosten en een korting van 5% per volledig jaar bezit.",
      },
      {
        question: "Is er een manier om de meerwaardebelasting te vermijden?",
        answer:
          "Legale opties zijn: wachten tot de 5-jaarstermijn (of 8 jaar voor grond) verstreken is, de woning als uw eigen hoofdverblijfplaats gebruiken voor de verkoop, of alle aftrekbare kosten en indexering maximaal toepassen om de belastbare grondslag te verlagen. Raadpleeg een notaris of fiscalist voor uw specifieke situatie.",
      },
      {
        question: "Speelt de meerwaardebelasting ook bij een verkoop aan een opkoper?",
        answer:
          "Ja, de meerwaardebelasting wordt berekend op basis van de juridische eigendomsduur en de gerealiseerde meerwaarde — ongeacht wie de koper is. De belasting staat los van de verkoopformule. Als u binnen de 5-jaarstermijn verkoopt aan wijkopenpanden.be, is de meerwaardebelasting even van toepassing als bij een klassieke verkoop.",
      },
      {
        question: "Hoe zit het met de meerwaardebelasting bij een echtscheiding?",
        answer:
          "Als de gezinswoning wordt verkocht bij een echtscheiding en het gaat om de enige eigen woning, is er doorgaans geen meerwaardebelasting. Bij een tweede woning of een pand dat niet als hoofdverblijfplaats gold, gelden de normale regels. Neem de situatie op met uw notaris bij de opstelling van de echtscheidingsakte.",
      },
    ],
  },
  {
    slug: "schenking-woning-vlaanderen",
    title: "Uw woning schenken aan uw kinderen in Vlaanderen: belasting, voordelen en valkuilen",
    metaTitle: "Woning schenken Vlaanderen 2026: tarieven & voordelen",
    metaDescription:
      "Woning schenken aan uw kinderen in Vlaanderen: schenkbelasting 3%-18%, verschil met erfbelasting, schenking met vruchtgebruik en wanneer het fiscaal loont.",
    publishedAt: "2026-06-27",
    updatedAt: "2026-06-27",
    intro:
      "Veel eigenaars overwegen hun woning al bij leven over te dragen aan hun kinderen — om de erfbelasting te verlagen, familiale conflicten te vermijden of gewoon omdat ze weten dat ze er niet meer in zullen wonen. In Vlaanderen is dit fiscaal bijzonder interessant, omdat de schenkbelasting voor onroerend goed lager kan uitvallen dan de erfbelasting. In dit artikel leggen we de tarieven, de procedure en de strategische overwegingen uit.",
    sections: [
      {
        heading: "Wat is een schenking van onroerend goed?",
        body: "Een schenking van onroerend goed — een woning, appartement, bouwgrond of garage — is een rechtsgeldige overdracht van eigendom bij leven, zonder betaling van de verkoopprijs. De schenker (donateur) geeft het goed vrij aan de begiftigde (donataire).\n\nIn België is een notariële akte verplicht voor elke schenking van onroerend goed. U kunt een woning niet via een handgift of bankgift overdragen — er is altijd een notarisbezoek vereist. Dit heeft een belangrijke fiscale consequentie: alle schenkingen van onroerend goed worden geregistreerd en zijn onmiddellijk onderworpen aan de schenkbelasting.\n\nDe schenking hoeft niet altijd 'volledig' te zijn. U kunt:\n• De volle eigendom schenken (blote eigendom + vruchtgebruik)\n• Alleen de blote eigendom schenken en zelf het vruchtgebruik behouden\n• Een deel van de woning schenken (bv. de helft aan elk kind)",
      },
      {
        heading: "Schenkbelasting in Vlaanderen: tarieven voor onroerend goed (2026)",
        body: "De schenkbelasting is een Vlaamse belasting die u betaalt bij de registratie van de schenkingsakte. De tarieven hangen af van de relatie tussen schenker en begiftigde.\n\n**In rechte lijn (ouders aan kinderen, kleinkinderen; partners):**\n• 3% op de schijf tot €150.000\n• 9% op de schijf van €150.000 tot €250.000\n• 18% op de schijf van €250.000 tot €450.000\n• 27% op het bedrag boven €450.000\n\nBelangrijk: in 2028 is een tariefverlaging gepland naar 3%/6%/10%/14% — maar deze is nog niet van kracht. Controleer de actuele tarieven bij uw notaris.\n\nVergelijking met de erfbelasting in rechte lijn:\n• 3% op de schijf tot €50.000\n• 9% op de schijf van €50.000 tot €250.000\n• 27% op het bedrag boven €250.000\n\nHet toppercentage bij schenken (27% pas boven €450.000) is gunstiger gepositioneerd dan bij erven (27% al boven €250.000). De brede eerste schijf bij schenken (€150.000 vs €50.000 bij erven) levert voor middelgrote waarden een tastbaar belastingvoordeel op.\n\n**Andere personen (broers, zussen, neven, nichten, vrienden):**\n• 10% tot €150.000\n• 20% van €150.000 tot €250.000\n• 30% van €250.000 tot €450.000\n• 40% boven €450.000\n\nDe schenkbelasting wordt berekend per begiftigde. Als u uw woning schenkt aan twee kinderen, betaalt elk kind schenkbelasting op hun aandeel — niet op de totale waarde.",
      },
      {
        heading: "Schenken met behoud van vruchtgebruik: de populairste formule",
        body: "De meest gebruikte schenkingsstrategie voor onroerend goed in Vlaanderen is de schenking van de blote eigendom met behoud van het vruchtgebruik door de ouders.\n\nHoe werkt het?\n• U schenkt de blote eigendom van de woning aan uw kind(eren)\n• U behoudt het vruchtgebruik: u mag de woning blijven bewonen en verhuren\n• Bij uw overlijden dooft het vruchtgebruik automatisch uit — uw kinderen worden dan volle eigenaar, zonder erfbelasting op dat ogenblik\n\nFiscaal voordeel: de schenkbelasting wordt niet berekend op de volle eigendomswaarde, maar enkel op de waarde van de blote eigendom. Die waarde hangt af van uw leeftijd:\n• Hoe ouder u bent, hoe kleiner de blote eigendomswaarde (want de statistische resterende duur van het vruchtgebruik is korter)\n• Een 70-jarige die de blote eigendom schenkt, betaalt schenkbelasting op circa 50–55% van de marktwaarde\n• Een 60-jarige betaalt op circa 40–45% van de marktwaarde\n\nPraktisch voorbeeld: een woning met een marktwaarde van €400.000, schenker is 72 jaar oud.\n• Blote eigendomswaarde (ca. 50%): €200.000\n• Schenkbelasting rechte lijn: 3% × €150.000 + 9% × €50.000 = €4.500 + €4.500 = €9.000\n\nZonder schenking: bij overlijden zou de erfbelasting op dezelfde woning (volle eigendom) voor één kind oplopen tot:\n• 3% × €50.000 + 9% × €200.000 + 27% × €150.000 = €1.500 + €18.000 + €40.500 = €60.000\n\nHet fiscale voordeel kan dus enorm zijn.",
      },
      {
        heading: "Wanneer is schenken fiscaal voordeliger dan erven?",
        body: "Schenken van onroerend goed is in de volgende situaties doorgaans fiscaal voordeliger dan nalaten via erfenis:\n\n• **Grote waarden boven €250.000**: het toppercentage bij schenken (18%) is lager dan bij erven (27%). Het voordeel is het grootst bij hoge vastgoedwaarden.\n\n• **Schenken met vruchtgebruik op jonge(re) leeftijd**: de blote eigendomswaarde is kleiner als u jonger bent, waardoor de schenkbelasting lager uitvalt. Hoe vroeger u schenkt, hoe groter het belastingvoordeel.\n\n• **Vastgoed dat in waarde stijgt**: als u vandaag schenkt aan de huidige marktwaarde, stijgt de toekomstige meerwaarde bij de kinderen belastingvrij. Bij een erfenis wordt de hogere waarde bij overlijden belast.\n\n• **Meerdere kinderen**: elk kind betaalt apart schenkbelasting op zijn/haar aandeel. Het progressieve tarief wordt zo meerdere keren 'herstart' — wat voordeliger is dan één kind dat de hele woning erft.\n\nWanneer is schenken NIET voordeliger?\n• Bij kleinere waarden (onder €250.000) kan het fiscale voordeel beperkt zijn — de erfbelasting is dan gelijkaardig\n• Als u het vruchtgebruik niet kunt of wil behouden (u heeft de woningwaarde nodig voor levensonderhoud)\n• Als uw situatie complex is (echtscheiding, tweede huwelijk, bijzondere familiale omstandigheden)",
      },
      {
        heading: "De procedure: hoe verloopt een schenking van onroerend goed?",
        body: "Een schenking van onroerend goed verloopt via een notaris. De stappen:\n\n1. Overleg met uw notaris over de meest geschikte formule (volle eigendom of blote eigendom + vruchtgebruik)\n2. De notaris maakt de schenkingsakte op, met de juiste clausules voor vruchtgebruik, lasten en voorwaarden\n3. U en de begiftigde(n) ondertekenen de akte voor de notaris\n4. De notaris registreert de akte bij de belastingdienst en betaalt de schenkbelasting\n5. U ontvangt een ontvangstbewijs van de betaalde schenkbelasting\n\nAls u de woning aan meerdere kinderen schenkt, kunnen ze elk hun eigen notaris meebrengen — maar in de praktijk werkt men doorgaans samen met één notaris.\n\nVoor de schenker zijn er geen inkomsten- of meerwaardebelasting verschuldigd. De schenkbelasting wordt betaald door de begiftigde(n).",
      },
      {
        heading: "Aandachtspunten en valkuilen bij een schenking van onroerend goed",
        body: "Een schenking is onherroepelijk. Eens de akte getekend en geregistreerd, kunt u de schenking niet zomaar terugdraaien. Er zijn uitzonderingen (ondankbaarheid van de begiftigde, niet-nakoming van lasten), maar die zijn beperkt.\n\nSamentellingsregel:\nAls u aan dezelfde persoon meerdere schenkingen van onroerend goed doet binnen drie jaar, worden alle waarden samengeteld voor de progressieve berekening van de schenkbelasting. Een tweede schenking binnen drie jaar kan daardoor in een hogere schijf vallen. Spreid schenkingen over meer dan drie jaar als u van de laagste schijf wil blijven genieten.\n\nOpduweffect bij overlijden:\nAls u overlijdt binnen drie jaar na de schenking, wordt de waarde van het geschonken goed fictief opgeteld bij de nalatenschap voor de berekening van de erfbelasting op andere geërfde goederen. Het geschonken goed zelf wordt niet opnieuw belast — de schenkbelasting werd al betaald — maar de extra waarde kan de resterende goederen in een hogere erfbelastingschijf duwen. Bespreek dit risico met uw notaris als u een gezondheidssituatie heeft die dit relevant maakt.\n\nBelang van goede clausules:\n• Een terugkeerbeding zorgt ervoor dat het goed automatisch naar u terugkeert als de begiftigde vóór u overlijdt (zonder erfbelasting op die terugkeer)\n• Een verbod op vervreemding kan voorkomen dat de begiftigde het goed snel verkoopt\n• Lasten opleggen (bv. u financieel ondersteunen) is mogelijk maar moet juridisch correct worden opgesteld\n\nHypotheek op de geschonken woning:\nAls er een hypotheek rust op de woning die u schenkt, moet dat worden meegedeeld. De begiftigde kan de lening overnemen of u laat de lening aflossen voor de schenking. Een notaris zal u dit precies uitleggen.\n\nGelijkheid tussen kinderen (inbreng en inkorting):\nEen schenking telt als een voorschot op de erfenis, tenzij u uitdrukkelijk 'buiten erfdeel' schenkt. Dit heeft gevolgen voor de verdeling van de rest van uw nalatenschap. Laat u hierover adviseren door de notaris als u meerdere kinderen heeft.",
      },
    ],
    relatedArticles: ["erfbelasting-vlaanderen-2026", "notariskosten-woning-verkoop", "belastingen-bij-woningverkoop"],
    relatedSituations: ["huis-verkopen-bij-erfenis", "verkopen-zonder-makelaar"],
    faqs: [
      {
        question: "Is schenken van een woning altijd goedkoper dan nalaten via erfenis?",
        answer:
          "Niet altijd. Bij waarden tot €250.000 is het belastingvoordeel beperkt. Bij hogere waarden en bij schenking met vruchtgebruik is schenken doorgaans fiscaal voordeliger. Laat een notaris beide scenario's doorrekenen voor uw specifieke situatie.",
      },
      {
        question: "Moet ik schenkbelasting betalen als ik mijn woning schenk aan mijn kinderen?",
        answer:
          "Ja. De schenkbelasting voor onroerend goed in rechte lijn bedraagt in Vlaanderen 3% op de eerste €150.000, 9% van €150.000 tot €250.000 en 18% boven €250.000. De belasting wordt berekend op de waarde van wat u schenkt — bij schenking met vruchtgebruik enkel op de waarde van de blote eigendom.",
      },
      {
        question: "Kan ik mijn woning schenken maar er toch blijven wonen?",
        answer:
          "Ja, via een schenking met behoud van vruchtgebruik. U schenkt de blote eigendom aan uw kinderen maar behoudt het recht om in de woning te wonen en eventueel te verhuren. Na uw overlijden worden uw kinderen automatisch volle eigenaar, zonder extra erfbelasting.",
      },
      {
        question: "Heeft een schenking van onroerend goed een fiscaal gevolg als de schenker snel overlijdt?",
        answer:
          "Ja, er is een opduweffect. Als de schenker overlijdt binnen drie jaar na de schenking, wordt de waarde van het geschonken goed fictief opgeteld bij de resterende nalatenschap voor de berekening van de erfbelasting op die andere goederen. Het geschonken goed zelf wordt niet opnieuw belast — de schenkbelasting werd al betaald — maar de waarde ervan kan de overige geërfde goederen in een hogere belastingschijf duwen. Raadpleeg uw notaris als dit risico van toepassing kan zijn.",
      },
      {
        question: "Wat als de geschonken woning later stijgt in waarde?",
        answer:
          "De meerwaarde na de schenking is voor rekening van de begiftigde. Als uw kind de woning later verkoopt voor meer dan de schenkingswaarde, zijn de normale regels voor meerwaardebelasting van toepassing — maar de meerwaarde die vóór de schenking werd opgebouwd, valt buiten de grondslag.",
      },
    ],
  },
  {
    slug: "huurder-rechten-bij-verkoop-woning",
    title: "Huurder in uw woning bij verkoop: rechten, recht van voorkoop en hoe u de verkoop organiseert",
    metaTitle: "Huurder rechten bij verkoop woning Vlaanderen 2026",
    metaDescription:
      "Verhuurde woning verkopen in Vlaanderen? Alles over het recht van voorkoop van de huurder, opzegtermijnen en hoe de koper het huurcontract overneemt.",
    publishedAt: "2026-06-27",
    updatedAt: "2026-06-27",
    intro:
      "U wilt uw verhuurde woning verkopen — maar u weet niet goed wat de rechten van de huurder zijn, wanneer u hem of haar moet informeren en of u het huurcontract kunt beëindigen. In Vlaanderen regelt het Woninghuurdecreet van 2018 de relatie tussen verhuurder, huurder en nieuwe eigenaar bij een verkoop. De regels zijn strikt en wie ze niet volgt, riskeert juridische complicaties. In dit artikel leggen we alles uit.",
    sections: [
      {
        heading: "De basisregel: het huurcontract volgt de woning",
        body: "Wanneer u een verhuurde woning verkoopt, neemt de nieuwe eigenaar het lopende huurcontract automatisch over. Dit is een fundamenteel principe van het Belgisch huurrecht: 'koop breekt geen huur'.\n\nDit betekent:\n• De huurder blijft in de woning wonen onder dezelfde voorwaarden\n• De huurprijs, de duur, de opzegtermijnen — alles blijft onveranderd\n• De nieuwe eigenaar kan de huurder niet zomaar uitzetten omdat hij het pand heeft gekocht\n\nAls nieuwe eigenaar bent u gebonden aan de lopende huurovereenkomst. Wilt u de woning daarna zelf bewonen of renoveren, dan moet u de normale opzegtermijnen van het huurrecht respecteren.\n\nDeze basisregel is absoluut: ook als de nieuwe eigenaar niet wist dat de woning verhuurd was, blijft het huurcontract van kracht.",
      },
      {
        heading: "Het recht van voorkoop van de huurder in Vlaanderen",
        body: "Onder het Vlaamse Woninghuurdecreet heeft de huurder een recht van voorkoop bij de verkoop van de woning. Dit is het recht om de woning te kopen onder dezelfde voorwaarden als de kandidaat-koper.\n\nVoorwaarden voor het recht van voorkoop:\n• Het gaat om een woning verhuurd als hoofdverblijfplaats\n• De huurder heeft een lopende overeenkomst (geen tijdelijk verblijf of studentenkamer)\n• De verkoop is niet aan een specifieke uitzondering onderworpen (zie hieronder)\n\nHoe werkt het?\n1. U vindt een koper en bereikt een akkoord over de prijs\n2. Vóór het ondertekenen van het compromis stelt u de huurder schriftelijk op de hoogte van de verkoopprijs, voorwaarden en identiteit van de kandidaat-koper\n3. De huurder heeft 1 maand de tijd om zijn recht van voorkoop uit te oefenen\n4. Kiest de huurder voor de aankoop, dan koopt hij de woning aan dezelfde prijs en voorwaarden\n5. Kiest de huurder niet, dan verloopt de verkoop aan de aangemelde koper\n\nUitzonderingen op het recht van voorkoop:\n• Verkoop aan een familielid tot en met de derde graad (ouders, kinderen, broers/zussen, neven/nichten)\n• Verkoop van meerdere eigendommen tegelijk als geheel (bv. een volledig appartementengebouw)\n\nBelangrijk: als u het recht van voorkoop niet respecteert, kan de huurder de verkoop aanvechten en bij voorkeur in de koop treden. De notaris is verplicht dit te controleren.",
      },
      {
        heading: "Kan de verhuurder de huurder opzeggen voor de verkoop?",
        body: "Als u de woning wil verkopen als leeg pand (zonder huurder), moet u het huurcontract beëindigen vóór de verkoop. Dat is alleen mogelijk onder de wettelijke opzeggingsgronden:\n\n**Eigen gebruik (art. 5 Woninghuurdecreet):**\nU kunt de huurder opzeggen als u of een naaste familielid de woning zelf wil bewonen. U moet de intentie tot eigen gebruik concreet kunnen aantonen. Opzegtermijn: 6 maanden.\n\n**Renovatie (art. 5 Woninghuurdecreet):**\nU kunt opzeggen als u grondige renovatiewerken plant die niet kunnen worden uitgevoerd terwijl de huurder er woont. U moet voorafgaand een omgevingsvergunning hebben. Opzegtermijn: 6 maanden.\n\n**Op het einde van een huurperiode (3/6/9):**\nBij een standaard 9-jarig huurcontract kunt u op het einde van de derde of zesde huurjaar opzeggen — mits u dit tijdig doet (6 maanden op voorhand).\n\n**Geen reden vereist:** Opzegging op het einde van de negende huurjaar (of bij een kortetermijnhuur op het einde van de termijn) vereist geen specifieke reden, mits de termijn van 6 maanden gerespecteerd wordt.\n\nOpzegging enkel voor de verkoop — zonder eigen gebruik of renovatieplan — is NIET toegestaan. U kunt niet opzeggen met als enige reden dat u de woning leeg wil verkopen.",
      },
      {
        heading: "Hoe organiseert u bezichtigingen met een huurder in het pand?",
        body: "Als u de woning wil verkopen terwijl de huurder er nog in woont, heeft u bepaalde rechten maar ook verplichtingen.\n\nWettelijk kader:\n• U heeft het recht om de woning te laten bezichtigen door potentiële kopers\n• De huurder is verplicht mee te werken, maar heeft recht op privacy en een redelijke aankondigingstermijn\n• Gangbaar is een afspraak van minimaal 24 tot 48 uur op voorhand\n• Bezichtigingen zijn in de regel beperkt tot een redelijk aantal per week en tot normale uren\n\nPraktisch advies:\n• Communiceer open met de huurder over de verkoopplannen. Een huurder die zich gerespecteerd voelt, werkt vlotter mee\n• Bied eventueel een kleine vergoeding aan voor het meewerken aan bezichtigingen — dit is wettelijk niet verplicht maar bevordert de sfeer\n• Onderneem geen acties die de huurder bewust hinderen in zijn gebruik van de woning\n\nAls de huurder de bezichtigingen actief belemmert (deuren niet opendoet, weigert redelijke afspraken), kunt u via de vrederechter een machtiging vragen om toch toegang te krijgen.",
      },
      {
        heading: "Huurkorting bij verkoop met huurder: hoe wordt de prijs bepaald?",
        body: "Een verhuurde woning is op de klassieke markt minder eenvoudig te verkopen dan een leeg pand. De meeste particuliere kopers willen zelf in de woning wonen of ze leeg kopen voor renovatie. Dit beperkt uw markt.\n\nAls de woning al verhuurd is, zijn de typische kopers:\n• Andere investeerders die een rendementspand zoeken — zij betalen op basis van het huurrendement, niet de marktwaarde als eigen woning\n• Professionele vastgoedopkopers die de situatie kennen\n• Kopers die bereid zijn te wachten tot het huurcontract afloopt\n\nIn de praktijk betekent dit dat een verhuurde woning doorgaans 5% tot 15% minder opbrengt dan een vergelijkbaar leeg pand, afhankelijk van de huurprijs, resterende huurtermijn en staat van het pand.\n\nAls u geen tijd heeft om te wachten op het einde van de huurovereenkomst — of als opzeggen niet mogelijk is — is een verkoop aan een vastgoedopkoper vaak de snelste en meest praktische weg.",
      },
      {
        heading: "Verhuurde woning verkopen aan wijkopenpanden.be",
        body: "Wij kopen verhuurde panden aan — met huurder, mét lopend huurcontract. U hoeft de huurder niet op te zeggen, niet te verhuizen en niet te wachten tot het huurcontract afloopt.\n\nWij nemen het huurcontract over als nieuwe verhuurder en regelen de relatie met de huurder professioneel. U ontvangt uw bod netto, de overdracht verloopt via de notaris en de huurder wordt tijdig en correct geïnformeerd — inclusief het recht van voorkoop.\n\nDe prijs houdt rekening met de huurinkomsten en de resterende huurperiode, maar u vermijdt de langdurige leegstand, de opzeggingsprocedure en de onzekerheid van een verkoop via de vrije markt.",
      },
    ],
    relatedArticles: ["verhuren-of-verkopen-antwerpen", "mede-eigendom-verkopen", "verkoop-kosten-berekenen"],
    relatedSituations: ["pand-met-huurders-verkopen", "huis-verkopen-bij-erfenis"],
    faqs: [
      {
        question: "Kan ik mijn verhuurde woning verkopen zonder de huurder op te zeggen?",
        answer:
          "Ja. U kunt de woning verkopen terwijl de huurder er nog in woont. De nieuwe eigenaar neemt het huurcontract automatisch over. U moet wel het recht van voorkoop van de huurder respecteren en hem schriftelijk informeren vóór het sluiten van de koopovereenkomst.",
      },
      {
        question: "Moet ik als verhuurder de huurder op de hoogte stellen van de verkoop?",
        answer:
          "Ja. Onder het Vlaamse Woninghuurdecreet moet u de huurder schriftelijk informeren over de voorgenomen verkoop, de vraagprijs en de voorwaarden. De huurder heeft dan 1 maand om zijn recht van voorkoop uit te oefenen, tenzij u verkoopt aan een familielid.",
      },
      {
        question: "Hoe lang heeft een huurder om zijn recht van voorkoop te gebruiken?",
        answer:
          "De huurder heeft 1 maand na de schriftelijke kennisgeving van de verkoop om zijn recht van voorkoop uit te oefenen. Als hij niet reageert, mag u de verkoop doorzetten aan de aangemelde koper.",
      },
      {
        question: "Kan ik de huurder uitkopen om de woning leeg te kunnen verkopen?",
        answer:
          "Ja, dat is wettelijk toegestaan maar vereist de akkoord van de huurder. U kunt een vrijwillige beëindiging van de huur overeenkomen, eventueel met een vergoeding (goodwill) voor de huurder. Zorg voor een schriftelijke overeenkomst die door beide partijen wordt ondertekend.",
      },
      {
        question: "Welke invloed heeft een huurder op de verkoopprijs?",
        answer:
          "Een verhuurde woning brengt op de vrije markt doorgaans 5% tot 15% minder op dan een leeg vergelijkbaar pand, omdat particuliere kopers de woning doorgaans leeg willen hebben. Investeerders betalen op basis van het rendement. Een vastgoedopkoper kan een snelle, zekere transactie bieden zonder dat u de huurder moet opzeggen.",
      },
    ],
  },
  {
    slug: "appartement-vme-syndicus-verkopen",
    title: "Appartement in een VME verkopen: syndicus, reservekapitaal en verkoopproces",
    metaTitle: "Appartement VME verkopen 2026: syndicus & attest uitgelegd",
    metaDescription:
      "Appartement in een VME verkopen? Wat de syndicus moet aanleveren, wat er met het reservekapitaal gebeurt en wat bij grote geplande werken. Uitgelegd.",
    publishedAt: "2026-06-27",
    updatedAt: "2026-06-27",
    intro:
      "Wie een appartement verkoopt in een flatgebouw, verkoopt niet alleen zijn eigen unit — maar ook zijn aandeel in de gemeenschappelijke delen en de rechten en plichten in de Vereniging van Mede-Eigenaars (VME). Dat maakt de procedure complexer dan de verkoop van een vrijstaande woning. De notaris heeft verplicht informatie nodig van de syndicus, er zijn openstaande schulden die verrekend worden, en het reservekapitaal gaat automatisch over op de koper. In dit artikel leggen we uit hoe dit alles werkt.",
    sections: [
      {
        heading: "Wat is een VME en welke rol speelt ze bij de verkoop?",
        body: "Een Vereniging van Mede-Eigenaars (VME) is de verplichte rechtspersoon die in elk gebouw met meerdere appartementen of commerciële units bestaat. De VME beheert de gemeenschappelijke delen: het dak, de gevel, de traphal, de lift, de gemeenschappelijke verwarmingsinstallatie, enzovoort.\n\nAls mede-eigenaar van een appartement bent u automatisch lid van de VME en heeft u bepaalde rechten en verplichtingen. Die overdragen mee bij de verkoop van uw appartement.\n\nBij de verkoop speelt de VME om twee redenen een centrale rol:\n\n1. De notaris is wettelijk verplicht bepaalde informatie van de syndicus op te vragen vóór de akte wordt verleden (Art. 577-11 §1 BW)\n2. Openstaande bijdragen en schulden van de verkopende eigenaar worden verrekend via de notaris — de koper wordt beschermd tegen onbekende schulden\n\nDe syndicus is de professionele (of vrijwillige) beheerder van de VME. Zij is de schakel tussen de notaris, de VME en de kopers en verkopers.",
      },
      {
        heading: "Welke documenten moet de syndicus aanleveren bij de verkoop?",
        body: "De wet (Appartementswet, art. 577-11 §1 BW) verplicht de syndicus om binnen 30 dagen na een officieel verzoek van de notaris een reeks documenten en verklaringen te bezorgen. De verplichte informatie omvat:\n\n**1. Notulen van de algemene vergadering:**\nDe notulen van de laatste drie algemene vergaderingen, zodat de koper op de hoogte is van de belangrijkste beslissingen (goedgekeurde werken, budgetten, conflicten).\n\n**2. Balans van het reservekapitaal:**\nHet saldo van het reservefonds op de datum van de informatieoverdracht. Dit fonds dient voor grote herstellingen aan de gemeenschappelijke delen.\n\n**3. Openstaande schulden van het te verkopen appartement:**\nDe syndicus geeft aan of de te verkopen eigenaar achterstallen heeft op zijn bijdragen (gewone kosten en bijdragen aan het reservekapitaal). Die schulden worden bij de akte automatisch verrekend.\n\n**4. Lopende procedures:**\nAls er rechtszaken lopen waarbij de VME partij is (bv. aannemersconflicten, schadeclaims), moet de koper dat weten. Rechtszaken kunnen gevolgen hebben voor de VME-financiën.\n\n**5. Goedgekeurde maar nog niet uitgevoerde werken:**\nAls de algemene vergadering grote werken heeft goedgekeurd (bv. dakrenovatie, liftrenovatie) waarvoor al extra bijdragen zijn of worden gevraagd, moet de koper dit weten.\n\n**6. Huidig budget en verdeling kosten:**\nHet actuele werkingsbudget van de VME en het aandeel van het te verkopen appartement.",
      },
      {
        heading: "Wat gebeurt er met het reservekapitaal bij de verkoop?",
        body: "Elk appartement in een VME heeft een aandeel in het reservekapitaal — het fonds dat wordt opgebouwd om toekomstige grote herstellingen te financieren (nieuw dak, renovatie gevel, liftrenovatie, etc.).\n\nWettelijke regel: het reservekapitaal hoort bij het appartement, niet bij de eigenaar. Het wordt niet terugbetaald aan de verkoper — het gaat automatisch over op de koper.\n\nDit heeft een concrete gevolg voor de prijsonderhandeling:\n• Als het reservefonds een hoog saldo heeft (bv. €15.000 voor uw aandeel), is dat een voordeel voor de koper — hij neemt een goed gevuld potje over\n• Als het fonds leeg of negatief is, is dat een signaal voor de koper dat er mogelijk snel extra bijdragen worden gevraagd\n\nDe notaris vermeldt het saldo van het reservekapitaal op de datum van de akte expliciet in het verkoopinstrument. Als de verkoper nog bijdragen verschuldigd was aan het reservekapitaal, worden die afgehouden van de verkoopprijs.\n\nVerkoper en koper kunnen eventueel onderhandelen over een verrekening van het reservekapitaal in de verkoopprijs, maar de wet geeft de notaris de bevoegdheid om alle schulden te verrekenen — dat is niet facultatief.",
      },
      {
        heading: "Wat als de syndicus niet reageert binnen 30 dagen?",
        body: "De wet voorziet een sanctie: als de syndicus nalaat om de gevraagde informatie binnen 30 dagen te bezorgen, kan de notaris de akte verlijden zonder die informatie. In dat geval is de VME niet gerechtigd om schulden die niet werden meegedeeld te verhalen op de koper — die schulden blijven ten laste van de verkoper.\n\nIn de praktijk is een traag of niet-reagerende syndicus een reëel probleem. Problemen met de syndicus verzoorzaken vertraging in de verkoopprocedure, wat bij tijdsgevoelige situaties (erfenis, scheiding) extra stress geeft.\n\nTips bij een traag syndicus:\n• Informeer de syndicus zo vroeg mogelijk dat u wil verkopen\n• Vraag de notaris om tijdig een formele aanvraag te sturen met vermelding van de wettelijke 30-dagentermijn\n• Als de syndicus structureel tekortschiet, kan de algemene vergadering beslissen om een nieuwe syndicus aan te stellen — maar dat is een langdurig traject",
      },
      {
        heading: "Grote werken gepland: wat betekent dat voor de verkoop?",
        body: "Als de algemene vergadering grote werken heeft goedgekeurd (maar nog niet uitgevoerd), heeft dat gevolgen voor de verkoop:\n\n**Reeds goedgekeurde werken:**\nAls de VME al een leverancier heeft gecontracteerd of een bijdrage heeft gevraagd van de mede-eigenaars, is dit een gekende last. De notaris vermeldt dit in de akte. Afhankelijk van de afspraken draagt de verkoper of de koper de bijdragen voor die werken.\n\n**Geplande maar nog niet goedgekeurde werken:**\nAls er geruchten zijn van grote werken (bv. het dak moet dringend vernieuwd worden) maar er nog geen formele beslissing is gevallen, staat dit niet in het syndicus-attest. De koper draagt dan het risico.\n\n**Praktisch advies voor de koper:**\nVraag de notulen van de laatste drie algemene vergaderingen grondig door te nemen. Kijk niet alleen naar wat formeel is goedgekeurd, maar ook naar wat er is 'besproken' of 'ter studie gelegd' — dat geeft een beeld van aankomende bijdragen.\n\n**Voor de verkoper:**\nBent u op de hoogte van structurele gebreken aan de gemeenschappelijke delen die u niet proactief meedeelt? Dat kan na de verkoop tot aansprakelijkheidsclaims leiden op basis van verborgen gebreken. Wees transparant — ook als het uw prijs drukt.",
      },
      {
        heading: "Appartement in VME verkopen: praktische tijdlijn",
        body: "De meerderheid van de vertraging bij appartementsverkopen is te herleiden tot de syndicus. Houd rekening met de volgende tijdlijn:\n\n• Week 1: notaris stelt formeel informatieverzoek aan de syndicus (art. 577-11)\n• Week 1 tot 4: syndicus bereidt het dossier voor (30 dagen wettelijke termijn)\n• Week 4 tot 6: notaris verwerkt de informatie, maakt compromis op\n• Week 6 tot 16: gebruikelijke termijn tussen compromis en akte (doorgaans 4 maanden)\n• Akte: notaris verrekent alle schulden en maakt de overdracht definitief\n\nVerkoop via een professionele opkoper zoals wijkopenpanden.be kan de proceduretijden aanzienlijk verkorten. Wij coördineren rechtstreeks met de syndicus, kennen de procedure en zorgen dat alle documenten tijdig beschikbaar zijn voor de notaris.",
      },
    ],
    relatedArticles: ["notariskosten-woning-verkoop", "mede-eigendom-verkopen", "verborgen-gebreken-woning-verkoop-belgie"],
    relatedSituations: ["pand-met-huurders-verkopen", "huis-verkopen-bij-erfenis"],
    faqs: [
      {
        question: "Wat is een VME en moet ik er iets mee doen bij de verkoop van mijn appartement?",
        answer:
          "Een VME (Vereniging van Mede-Eigenaars) beheert de gemeenschappelijke delen van een appartementsgebouw. Bij de verkoop van uw appartement is de notaris verplicht bepaalde documenten op te vragen bij de syndicus — u hoeft dit niet zelf te regelen, maar het is nuttig de syndicus al vroeg te informeren om de procedure te versnellen.",
      },
      {
        question: "Krijg ik het reservekapitaal van de VME terugbetaald bij de verkoop?",
        answer:
          "Nee. Het reservekapitaal (groot onderhoudsfonds) is eigendom van het appartement en gaat automatisch over op de koper. U krijgt het niet terugbetaald. Het saldo kan echter wel een rol spelen in de prijsonderhandeling.",
      },
      {
        question: "Wat als ik achterstand heb in het betalen van mijn VME-bijdragen?",
        answer:
          "De syndicus meldt de openstaande schulden aan de notaris. De notaris houdt die bedragen in bij het verlijden van de akte en betaalt ze rechtstreeks uit aan de VME. U ontvangt als verkoper de verkoopprijs minus de openstaande VME-schulden.",
      },
      {
        question: "Hoe lang duurt het om de syndicus-documenten te ontvangen?",
        answer:
          "De wet geeft de syndicus 30 dagen om te reageren op een formeel verzoek van de notaris. In de praktijk kan dit sneller gaan bij professionele syndici of trager bij vrijwilligers-syndici in kleine gebouwen. Informeer de syndicus zo vroeg mogelijk om vertraging te vermijden.",
      },
      {
        question: "Kan ik mijn appartement verkopen als er grote werken gepland zijn in de VME?",
        answer:
          "Ja. Goedgekeurde werken worden vermeld in het syndicus-attest en zijn een gekende last voor de koper. De verdeling van de bijdragen voor die werken tussen verkoper en koper wordt overeengekomen in het compromis. Dit vereist wel transparantie en een duidelijke formulering in de verkoopovereenkomst.",
      },
    ],
  },
  {
    slug: "woning-staat-al-maanden-te-koop",
    title: "Uw woning staat al maanden te koop zonder resultaat: oorzaken en oplossingen",
    metaTitle: "Woning verkoopt niet? Oorzaken en oplossingen 2026",
    metaDescription:
      "Uw woning raakt niet verkocht of staat al maanden te koop? De echte oorzaken, wat het u kost en wat u kunt doen om de verkoop alsnog te deblokkeren.",
    publishedAt: "2026-06-28",
    updatedAt: "2026-06-29",
    intro:
      "Weinig is zo ontmoedigend als een woning die maand na maand te koop staat zonder een serieus bod. De bezichtigingen drogen op, de advertentie zakt weg op de portalen en elke maand kost de woning u geld. Wat kunt u doen als uw woning niet verkocht geraakt? In dit artikel leest u waarom woningen blijven hangen, wat een stilstaande verkoop u concreet kost en welke stappen de verkoop weer in beweging brengen — van een prijscorrectie tot een rechtstreekse verkoop zonder makelaar.",
    sections: [
      {
        heading: "Wat als uw woning niet verkocht geraakt? Het korte antwoord",
        body: "Raakt uw woning maar niet verkocht, dan ligt dat vrijwel nooit aan pech — er is bijna altijd een aanwijsbare oorzaak die u kunt bijsturen.\n\nIn de regel komt het op één van deze vijf punten neer: de vraagprijs staat te hoog, de presentatie schiet tekort, de staat van de woning schrikt kopers af, er zit een probleem in het dossier, of u bereikt via het gekozen kanaal niet de juiste koper.\n\nWat u kunt doen, in volgorde:\n1. Stel de oorzaak vast — prijs, presentatie, staat, dossier of kanaal\n2. Stuur dat ene punt gericht bij; meestal is dat de prijs of de presentatie\n3. Lukt verkopen via de markt niet, weeg dan een rechtstreekse verkoop af tegen verder afwachten\n\nHieronder werken we elke oorzaak en elke oplossing concreet uit, samen met wat een stilstaande verkoop u intussen kost.",
      },
      {
        heading: "Hoelang is te lang? Wanneer u zich zorgen mag maken",
        body: "Niet elke woning verkoopt in een paar weken, en dat hoeft ook niet. Maar er is een verschil tussen een normale doorlooptijd en een dossier dat vastzit.\n\nEen courante woning in een gewilde buurt krijgt doorgaans binnen de eerste weken de meeste bezichtigingen en biedingen. Loopt de teller op tot meerdere maanden zonder concreet bod, dan is dat zelden toeval — er is meestal één duidelijke oorzaak, of een combinatie ervan.\n\nEen praktische vuistregel: blijven na de eerste vier tot zes weken de bezichtigingen uit, of komen er wel kijkers maar geen biedingen, dan zit er iets fout in de prijs, de presentatie, de staat of het dossier. Hoe langer u wacht met bijsturen, hoe meer de woning 'verbrandt' op de markt.",
      },
      {
        heading: "Reden 1: de vraagprijs staat te hoog",
        body: "Dit is veruit de meest voorkomende reden. Een te hoge vraagprijs filtert net de kopers weg die uw woning anders zouden bezoeken — zij zien de woning niet eens omdat ze buiten hun zoekfilter valt.\n\nKenmerkende signalen van een te hoge prijs:\n• Veel online weergaven, maar nauwelijks aanvragen voor een bezichtiging\n• Wel bezichtigingen, maar geen enkel bod\n• Kopers vergelijken uw woning hardop met goedkopere, vergelijkbare panden\n\nEen woning is exact zoveel waard als wat een koper er vandaag voor wil betalen — niet wat een vergelijkbare woning twee jaar geleden opbracht. Wat de woning werkelijk waard is, bepaalt u best op basis van recente, vergelijkbare transacties in dezelfde buurt en de actuele staat van het pand.",
      },
      {
        heading: "Reden 2: presentatie en zichtbaarheid schieten tekort",
        body: "Kopers beslissen in enkele seconden op basis van de eerste foto's of ze verder klikken. Zwakke of donkere foto's, een rommelig interieur of een onvolledige beschrijving kosten u bezichtigingen die u nooit ziet gebeuren.\n\nVeelvoorkomende presentatieproblemen:\n• Te weinig, te donkere of te kleine foto's\n• Een advertentie zonder plattegrond of zonder duidelijke vermelding van oppervlakte en EPC\n• Een woning die volgestouwd of slecht onderhouden oogt op beeld\n• Een advertentie die al maanden ongewijzigd online staat en daardoor 'oud' aanvoelt\n\nEen woning die te lang ongewijzigd online staat, krijgt bovendien het stempel 'er is iets mis mee' — ook als de prijs intussen redelijk is. Dat fenomeen heet marktmoeheid.",
      },
      {
        heading: "Reden 3: de staat van de woning schrikt af",
        body: "Veel kopers op de klassieke markt zoeken een woning waar ze meteen in kunnen. Zien zij een verouderde keuken, een te vernieuwen elektriciteitsinstallatie, vochtproblemen of een laag EPC-label, dan haken ze af of bieden ze fors lager dan u verwacht.\n\nHet gevolg is een patstelling: u wilt niet investeren in een woning die u toch verkoopt, maar zonder die investering blijven de biedingen uit of liggen ze laag. Sinds de invoering van de renovatieverplichting voor woningen met een zwak energielabel weegt dit nog zwaarder door — kopers calculeren de verplichte renovatiekost meteen in hun bod in.\n\nWie niet wil of kan renoveren vóór de verkoop, heeft baat bij een koper die het pand in de huidige staat (as-is) overneemt en de renovatie zelf op zich neemt.",
      },
      {
        heading: "Reden 4: een juridisch of technisch probleem in het dossier",
        body: "Soms ligt de blokkade niet bij de woning zelf, maar bij het dossier. Kopers — en hun bank — schrikken terug voor onzekerheid.\n\nDossierproblemen die een verkoop doen vastlopen:\n• Een stedenbouwkundige overtreding of een niet-vergunde verbouwing\n• Een ontbrekend of onduidelijk busnummer bij een opgesplitst pand\n• Onvolledige of verlopen attesten (EPC, asbestinventaris, elektrische keuring)\n• Een onverdeeldheid waarbij niet alle eigenaars het eens zijn (erfenis, scheiding)\n• Een lopende hypotheek, beslag of andere lasten op het pand\n\nDeze knelpunten zijn vaak oplosbaar, maar ze vragen tijd en kennis. Een koper die gewend is om panden in alle situaties aan te kopen, schrikt hier niet van terug waar een particuliere koper afhaakt.",
      },
      {
        heading: "Reden 5: het verkeerde kanaal voor uw situatie",
        body: "Niet elke verkoop hoort thuis op een publiek vastgoedportaal. Wie discreet wil verkopen, snel zekerheid nodig heeft of een pand bezit dat de doorsnee gezinskoper niet zoekt — een opbrengsteigendom, een opknappand, een verhuurd pand — bereikt via de klassieke etalage net niet de juiste koper.\n\nIn die gevallen kan maandenlang adverteren op een portaal weinig opleveren, niet omdat de woning onverkoopbaar is, maar omdat het publiek niet matcht. Een rechtstreekse verkoop aan een professionele opkoper sluit dan beter aan bij de werkelijke vraag.",
      },
      {
        heading: "Wat een stilstaande verkoop u elke maand kost",
        body: "Een woning die blijft hangen is niet kosteloos. De rekening loopt stil maar gestaag op, en weegt op tegen de meeropbrengst waar u op hoopt.",
        table: {
          headers: ["Kostenpost", "Wat het inhoudt", "Impact"],
          rows: [
            ["Dubbele woonlast", "Hypotheek of huur voor uw nieuwe woning bovenop de lasten van het onverkochte pand", "Loopt maandelijks op"],
            ["Onroerende voorheffing", "Jaarlijkse belasting blijft volledig ten laste van de eigenaar", "Een extra jaar bij vertraging"],
            ["Leegstandsheffing", "Heffing op langdurig leegstaande panden in veel Antwerpse gemeenten", "Stijgt per jaar leegstand"],
            ["Verzekering en onderhoud", "Een leegstaand pand is duurder te verzekeren en blijft onderhoud vragen", "Doorlopend"],
            ["Prijsverlagingen", "Hoe langer de woning te koop staat, hoe meer u uiteindelijk moet zakken", "Vaak meer dan een vroege correctie"],
          ],
        },
      },
      {
        heading: "Wat u kunt doen: de verkoop opnieuw in beweging brengen",
        body: "Een vastgelopen verkoop deblokkeren begint bij eerlijk vaststellen wáár het misloopt. Werk de oorzaken één voor één af:\n1. Herbekijk de vraagprijs op basis van recente, vergelijkbare verkopen in de buurt — niet op basis van de oorspronkelijke verwachting\n2. Vernieuw de advertentie: nieuwe, lichte foto's, een volledige beschrijving en een frisse publicatiedatum\n3. Los oplosbare dossierproblemen op of zet ze transparant in de advertentie\n4. Overweeg een ander kanaal of een andere makelaar als er na maanden niets beweegt\n5. Vergelijk de hoogste haalbare prijs op de klassieke markt met de zekerheid van een rechtstreeks bod, inclusief alle wachtkosten\n\nDe kernvraag is niet alleen 'wat is de hoogst mogelijke prijs', maar 'wat houd ik netto over na alle kosten en wachttijd, en hoeveel zekerheid wil ik'.",
      },
      {
        heading: "Wanneer een rechtstreekse verkoop de knoop doorhakt",
        body: "Als uw woning al maanden te koop staat en u de wachttijd, de onzekerheid of de oplopende kosten beu bent, is een rechtstreekse verkoop aan wijkopenpanden.be een uitweg.\n\nWij kopen uw woning rechtstreeks aan, zonder makelaar en zonder commissie. U hoeft geen nieuwe foto's te laten maken, geen bezichtigingen meer te organiseren en geen te-koop-bord te plaatsen. Wij brengen na een bezoek een concreet, schriftelijk bod uit en u kiest zelf de datum van de akte.\n\nVoor een woning die niet verkocht raakt op de klassieke markt — door staat, dossier of het verkeerde publiek — biedt dit zekerheid in plaats van opnieuw maanden afwachten. U weegt zelf af of de zekerheid en de bespaarde kosten opwegen tegen het verschil met een onzekere verkoopprijs op termijn.",
      },
    ],
    relatedArticles: ["wat-is-mijn-woning-waard-antwerpen", "hoelang-duurt-huis-verkopen-belgie", "commissie-makelaar-belgie", "pand-in-slechte-staat-verkopen", "huis-verkopen-bij-betalingsproblemen-schulden", "wanneer-beste-moment-woning-verkopen"],
    relatedSituations: ["verkopen-zonder-makelaar", "opknappand-verkopen"],
    faqs: [
      {
        question: "Wat als mijn woning niet verkocht geraakt?",
        answer:
          "Dan is er bijna altijd een aanwijsbare oorzaak die u kunt bijsturen: een te hoge vraagprijs, zwakke presentatie, de staat van de woning, een dossierprobleem of het verkeerde verkoopkanaal. Stel de oorzaak vast, stuur dat punt gericht bij, en weeg — als verkopen via de markt niet lukt — een rechtstreekse verkoop af tegen verder afwachten.",
      },
      {
        question: "Wat moet ik doen als mijn huis maar niet verkoopt?",
        answer:
          "Begin bij de vraagprijs: vergelijk ze met recente, vergelijkbare verkopen in de buurt. Vernieuw daarna de advertentie met nieuwe foto's en een frisse publicatiedatum, los oplosbare dossierproblemen op en overweeg een ander kanaal of een andere makelaar. Levert dat niets op, dan biedt een rechtstreekse verkoop aan een opkoper zekerheid.",
      },
      {
        question: "Kan ik mijn woning uit de verkoop halen en later opnieuw proberen?",
        answer:
          "Ja. U kunt de woning van de markt halen en later opnieuw te koop zetten. Houd er wel rekening mee dat een advertentie die lang online stond marktmoeheid oproept; een echte pauze en een nieuwe, correcte prijs werken dan beter dan dezelfde advertentie opnieuw publiceren. Intussen blijven de vaste lasten doorlopen.",
      },
      {
        question: "Hoelang mag een woning normaal te koop staan?",
        answer:
          "Een courante woning in een gewilde buurt krijgt doorgaans de meeste bezichtigingen en biedingen in de eerste weken na publicatie. Loopt het op tot meerdere maanden zonder concreet bod, dan is er meestal een aanwijsbare oorzaak in de prijs, de presentatie, de staat of het dossier.",
      },
      {
        question: "Waarom krijg ik wel bezichtigingen maar geen biedingen?",
        answer:
          "Dat wijst meestal op een verschil tussen de vraagprijs en wat kopers de woning waard vinden in de huidige staat. Kopers komen kijken op basis van de foto's, maar haken af op de prijs, op zichtbare gebreken of op een renovatiekost die ze niet hadden ingecalculeerd.",
      },
      {
        question: "Schaadt het mijn verkoop als de woning al lang online staat?",
        answer:
          "Ja. Een advertentie die maandenlang ongewijzigd online staat, wekt bij kopers de indruk dat er iets mis is met de woning — ook als de prijs intussen redelijk is. Dit heet marktmoeheid. Een vernieuwde advertentie met nieuwe foto's en een correcte prijs werkt dit tegen.",
      },
      {
        question: "Moet ik mijn woning renoveren om ze verkocht te krijgen?",
        answer:
          "Niet noodzakelijk. Renoveren vóór de verkoop kost geld en tijd en de meeropbrengst is onzeker. Een alternatief is verkopen in de huidige staat aan een koper die het pand as-is overneemt en de renovatie zelf op zich neemt, zoals een vastgoedopkoper.",
      },
      {
        question: "Wat kost het mij om de woning langer te koop te laten staan?",
        answer:
          "Naast eventuele dubbele woonlasten betaalt u onroerende voorheffing, mogelijk leegstandsheffing, doorlopende verzekering en onderhoud. Bovendien moet u na verloop van tijd vaak alsnog in prijs zakken — soms meer dan een vroege, correcte prijscorrectie had gekost.",
      },
      {
        question: "Kan ik een woning die al maanden te koop staat rechtstreeks verkopen?",
        answer:
          "Ja. wijkopenpanden.be koopt woningen rechtstreeks aan, ook panden die op de klassieke markt blijven hangen. U vraagt een vrijblijvend bod aan, wij bezoeken het pand en brengen een schriftelijk bod uit. U hoeft geen nieuwe bezichtigingen of foto's te regelen.",
      },
    ],
  },
  {
    slug: "huis-verkopen-bij-betalingsproblemen-schulden",
    title: "Huis verkopen bij betalingsproblemen of schulden in België",
    metaTitle: "Huis verkopen bij schulden of betalingsproblemen? (2026)",
    metaDescription:
      "Achterstallige hypotheek of beslag op uw woning? Zelf verkopen kan vaak nog en brengt meer op dan een gedwongen verkoop. Zo werkt het in België.",
    publishedAt: "2026-06-28",
    updatedAt: "2026-06-28",
    intro:
      "Wie de hypotheek niet meer rond krijgt of onder een schuldenberg dreigt te bezwijken, denkt soms dat de woning sowieso verloren is. Dat is meestal onterecht. In de meeste situaties kunt u uw woning nog zélf verkopen — en een vrijwillige verkoop brengt vrijwel altijd meer op dan een gedwongen openbare verkoop. In dit artikel leest u wat er gebeurt als u de hypotheek niet meer betaalt, het verschil tussen vrijwillig en gedwongen verkopen, hoe een verkoop verloopt na beslag of in een collectieve schuldenregeling, en wat er gebeurt met een eventuele restschuld.",
    sections: [
      {
        heading: "Kan ik mijn woning verkopen als ik betalingsproblemen heb?",
        body: "Ja. Zolang er nog geen openbare verkoop is bevolen, blijft u eigenaar en mag u uw woning zelf verkopen. Sterker nog: zelf en op tijd verkopen is bijna altijd de financieel verstandigste keuze.\n\nDe reden is eenvoudig: hoe vroeger u handelt, hoe meer controle u houdt over de prijs, de timing en de koper. Wacht u tot de bank of een schuldeiser de uitwinning in gang zet, dan verliest u die controle en komt de woning in een procedure terecht die doorgaans minder opbrengt.\n\nSnel handelen beperkt bovendien de oplopende achterstandsintresten, kosten en gerechtsdeurwaarderskosten die elke maand bij uw schuld komen.",
      },
      {
        heading: "Wat gebeurt er als u de hypotheek niet meer betaalt?",
        body: "Een gemiste aflossing leidt niet meteen tot verlies van uw woning, maar zet wel een keten in gang. Het verloop is in grote lijnen:\n1. **Herinnering en ingebrekestelling.** De bank stuurt eerst herinneringen en daarna een formele ingebrekestelling om de achterstand recht te zetten.\n2. **Registratie bij de Centrale voor Kredieten aan Particulieren.** De Nationale Bank houdt een register bij van betalingsachterstanden. Een achterstand wordt geregistreerd zodra een verschuldigd bedrag een bepaalde periode na de vervaldag onbetaald blijft, of zodra het krediet wordt opgezegd. Die registratie bemoeilijkt het afsluiten van nieuwe kredieten.\n3. **Opzegging van het krediet.** Blijft de achterstand aanhouden, dan kan de bank het krediet opzeggen en het volledige openstaande saldo in één keer opeisen (vervroegde opeisbaarheid).\n4. **Uitwinning.** Als de schuld niet wordt aangezuiverd, kan de bank als hypothecaire schuldeiser overgaan tot uitwinning van de hypotheek via een gedwongen verkoop.\n\nDe exacte termijnen en voorwaarden hangen af van uw kredietcontract en de toepasselijke regels voor hypothecair krediet. Tussen de eerste gemiste betaling en een effectieve gedwongen verkoop zit doorgaans een ruime periode — net die tijd kunt u gebruiken om zelf een betere oplossing te organiseren.",
      },
      {
        heading: "Vrijwillig verkopen versus een gedwongen openbare verkoop",
        body: "Het grote verschil tussen zelf verkopen en een gedwongen verkoop zit in de opbrengst en de regie. Bij een vrijwillige onderhandse verkoop bepaalt u mee de prijs en de koper. Bij een gedwongen openbare verkoop wordt het pand publiek geveild onder tijdsdruk, vaak met een lagere opbrengst en bijkomende gerechtskosten tot gevolg.",
        table: {
          headers: ["", "Vrijwillige verkoop", "Gedwongen openbare verkoop"],
          rows: [
            ["Wie beslist", "U, als eigenaar", "De rechtbank en de schuldeiser"],
            ["Prijs", "Marktconform of een onderhandeld bod", "Vaak lager — verkoop onder tijdsdruk"],
            ["Tijdsdruk", "U kiest mee de timing", "Opgelegd door de procedure"],
            ["Bijkomende kosten", "Beperkt", "Gerechts- en deurwaarderskosten komen bij de schuld"],
            ["Discretie", "Privé", "Openbaar bekendgemaakt"],
          ],
        },
      },
      {
        heading: "Verkopen nadat er beslag op de woning ligt",
        body: "Ook als een schuldeiser al uitvoerend beslag op uw woning heeft gelegd, is zelf verkopen niet per definitie uitgesloten.\n\nEen uitvoerend beslag op onroerend goed verloopt via een bevel tot betaling door een gerechtsdeurwaarder, gevolgd door een beslagexploot. Daarna kan de woning openbaar verkocht worden via een notaris, onder toezicht van de beslagrechter.\n\nHet Gerechtelijk Wetboek voorziet echter dat de beslagrechter een onderhandse verkoop kan toestaan in plaats van een openbare verkoop. Een onderhandse verkoop brengt doorgaans meer op, wat in het belang is van zowel u als de schuldeisers. U heeft daarvoor de machtiging van de beslagrechter nodig, meestal op basis van een concreet bod.\n\nLaat u in deze fase altijd bijstaan door uw notaris of een advocaat. Een tijdig, concreet bod kan net het verschil maken tussen een onderhandse verkoop tegen een redelijke prijs en een publieke veiling.",
      },
      {
        heading: "Verkopen tijdens een collectieve schuldenregeling",
        body: "Zit u in een collectieve schuldenregeling, dan beheert een schuldbemiddelaar uw inkomsten en vermogen om uw schuldeisers af te betalen. U kunt uw woning in die situatie niet zomaar op eigen houtje verkopen.\n\nDe verkoop van een woning tijdens een collectieve schuldenregeling kan in de regel enkel met de tussenkomst van de schuldbemiddelaar en een machtiging van de arbeidsrechtbank. De verkoop verloopt dan via een door de rechtbank aangestelde notaris en de opbrengst gaat naar de afbetaling van de schulden volgens de regeling.\n\nIn de praktijk wordt een woning binnen een collectieve schuldenregeling vaak net verkocht om de schuldenlast te verlichten. Een vlotte, zekere verkoop met een concreet bod kan de bemiddelaar en de rechter daarbij over de streep trekken. Bespreek elk verkoopvoornemen eerst met uw schuldbemiddelaar.",
      },
      {
        heading: "Wat als de opbrengst de schuld niet dekt?",
        body: "Als de verkoopprijs lager ligt dan het openstaande saldo van uw hypotheek, blijft het verschil — de restschuld — in principe persoonlijk verschuldigd aan de bank. De verkoop wist de schuld dus niet automatisch volledig uit.\n\nU staat daar echter niet machteloos:\n• Sommige banken aanvaarden een kwijtschelding van het restbedrag in ruil voor een eenmalige betaling of een haalbaar afbetalingsplan\n• U kunt een gespreide aflossing van de restschuld afspreken\n• Binnen een collectieve schuldenregeling kan een deel van de restschuld via de aanzuiveringsregeling worden kwijtgescholden\n\nDe mechaniek van een verkoop met een lopende lening — inclusief de afrekening bij de notaris en de situatie waarin de opbrengst tekortschiet — leggen we uitgebreider uit in ons artikel over een huis verkopen met een lopende hypotheek.",
      },
      {
        heading: "Hoe de notaris uw schuldeisers uitbetaalt bij de verkoop",
        body: "Bij de verkoop hoeft u de schuldeisers niet zelf te betalen — de notaris regelt dit uit de verkoopopbrengst. Het verloop:\n1. De notaris vraagt het exacte openstaande saldo op bij de bank en bij eventuele andere schuldeisers met een inschrijving op het pand\n2. Bij de akte betaalt de notaris de schuldeisers uit volgens hun wettelijke rang — de hypothecaire schuldeiser heeft voorrang\n3. De hypotheekinschrijving wordt geschrapt (doorhaling)\n4. Wat overblijft na aftrek van de schulden en de kosten, ontvangt u als verkoper\n\nZo weet u vooraf welk nettobedrag u overhoudt, of — bij een tekort — hoeveel restschuld er overblijft om met de bank te regelen.",
      },
      {
        heading: "Snel en discreet verkopen via wijkopenpanden.be",
        body: "Bij betalingsproblemen telt vooral snelheid en zekerheid. wijkopenpanden.be koopt uw woning rechtstreeks aan, zonder makelaar en zonder commissie, en brengt na een bezoek een concreet, schriftelijk bod uit.\n\nVoor wie onder druk staat, biedt dat drie voordelen: u krijgt snel duidelijkheid over wat de woning oplevert, u vermijdt maandenlange onzekerheid en bijkomende kosten, en de verkoop verloopt discreet, zonder publieke advertentie of veiling. Dringende dossiers behandelen wij met voorrang.\n\nWij kopen aan in alle situaties — met een lopende hypotheek, bij beslag of binnen een schuldenregeling — en coördineren met uw notaris voor een vlotte afhandeling. Een vrijblijvend bod aanvragen verplicht u tot niets en geeft u een concreet vergelijkingspunt om uw situatie te beoordelen.",
      },
    ],
    relatedArticles: ["huis-verkopen-met-hypotheek", "snel-geld-vrijmaken-woning", "mede-eigendom-verkopen", "woning-staat-al-maanden-te-koop", "hoelang-duurt-huis-verkopen-belgie", "verkoop-kosten-berekenen"],
    relatedSituations: ["verkopen-zonder-makelaar", "huis-verkopen-bij-scheiding"],
    faqs: [
      {
        question: "Kan ik mijn huis verkopen als ik mijn hypotheek niet meer kan betalen?",
        answer:
          "Ja. Zolang er geen openbare verkoop is bevolen, blijft u eigenaar en mag u zelf verkopen. Zelf en op tijd verkopen is doorgaans de verstandigste keuze, omdat u zo de prijs en de timing mee bepaalt en oplopende kosten en intresten beperkt.",
      },
      {
        question: "Brengt een vrijwillige verkoop meer op dan een gedwongen verkoop?",
        answer:
          "In de regel wel. Bij een vrijwillige onderhandse verkoop bepaalt u mee de prijs en de koper, terwijl een gedwongen openbare verkoop onder tijdsdruk gebeurt en vaak een lagere opbrengst geeft. Daarbovenop komen bij een gedwongen verkoop gerechts- en deurwaarderskosten bij uw schuld.",
      },
      {
        question: "Kan ik mijn woning nog verkopen als er al beslag op ligt?",
        answer:
          "Dat kan, maar niet meer volledig vrij. De beslagrechter kan een onderhandse verkoop toestaan in plaats van een openbare verkoop, doorgaans op basis van een concreet bod, omdat een onderhandse verkoop meestal meer opbrengt. Laat u in deze fase bijstaan door uw notaris of een advocaat.",
      },
      {
        question: "Mag ik mijn woning verkopen in een collectieve schuldenregeling?",
        answer:
          "Niet op eigen houtje. De verkoop kan in de regel enkel met de tussenkomst van de schuldbemiddelaar en een machtiging van de arbeidsrechtbank. De opbrengst gaat naar de afbetaling van de schulden. Bespreek elk verkoopvoornemen eerst met uw schuldbemiddelaar.",
      },
      {
        question: "Wat gebeurt er met mijn schuld als de verkoopprijs te laag is?",
        answer:
          "Het verschil tussen de verkoopprijs en het openstaande saldo — de restschuld — blijft in principe persoonlijk verschuldigd aan de bank. Vaak is een kwijtschelding, een eenmalige betaling of een gespreid afbetalingsplan bespreekbaar. Binnen een collectieve schuldenregeling kan een deel kwijtgescholden worden.",
      },
      {
        question: "Wie betaalt mijn schuldeisers bij de verkoop?",
        answer:
          "De notaris. Die vraagt het openstaande saldo op, betaalt de schuldeisers uit de verkoopopbrengst volgens hun wettelijke rang — de hypothecaire schuldeiser eerst — en schrapt de hypotheekinschrijving. Het saldo na aftrek van schulden en kosten ontvangt u als verkoper.",
      },
      {
        question: "Behandelt wijkopenpanden.be dringende dossiers sneller?",
        answer:
          "Ja. Dringende dossiers behandelen wij met voorrang. Wij reageren binnen 2 uur op uw aanvraag, bezoeken het pand snel en brengen een schriftelijk bod uit. Wij kopen aan met een lopende hypotheek, bij beslag of binnen een schuldenregeling en coördineren met uw notaris.",
      },
    ],
  },
  {
    slug: "betrouwbaar-verkopen-aan-opkoper",
    title: "Is verkopen aan een opkoper betrouwbaar? Het addertje, de prijs en waar u op moet letten",
    metaTitle: "Is verkopen aan een opkoper betrouwbaar? Checklist 2026",
    metaDescription:
      "Is verkopen aan een opkoper betrouwbaar? Wat is het addertje, krijgt u een eerlijke prijs en waaraan herkent u een serieuze partij? Eerlijk uitgelegd.",
    publishedAt: "2026-06-29",
    updatedAt: "2026-06-29",
    intro:
      "Snel verkopen aan een opkoper klinkt voor veel mensen te mooi om waar te zijn — en dat wekt terecht wantrouwen. De sector heeft een gemengde reputatie: naast correcte partijen bestaan er ook bedrijven die met een mooi bod lokken en bij de akte plots zakken. In dit artikel geven wij het eerlijke antwoord op de drie vragen die elke verkoper zich stelt: is dit betrouwbaar, wat is het addertje onder het gras, en krijg ik een eerlijke prijs of betaal ik te veel onder de marktwaarde? Plus een checklist om een betrouwbare opkoper te herkennen.",
    sections: [
      {
        heading: "Is snel verkopen aan een opkoper betrouwbaar?",
        body: "Op zich wel — mits u met een serieuze partij werkt en het proces via een notaris verloopt. De verkoop van vastgoed in België passeert verplicht langs een notaris, en die beschermt zowel de koper als de verkoper. De notaris controleert de identiteit en kredietwaardigheid van de koper, beheert de gelden en zorgt dat u pas tekent als alles juridisch in orde is.\n\nDat betekent niet dat élke opkoper betrouwbaar is. Het verschil zit in de werkwijze:\n• Een betrouwbare opkoper geeft een **schriftelijk, gemotiveerd bod** en houdt zich daaraan tot de akte\n• Een onbetrouwbare partij geeft een mondeling 'richtbod' dat later, vlak voor de akte, plots zakt\n\nDe achterdocht is dus terecht, maar ze hoort gericht te zijn op de werkwijze van de specifieke partij — niet op het principe van rechtstreeks verkopen.",
      },
      {
        heading: "Wat is het addertje onder het gras bij directe verkoop?",
        body: "Het eerlijke antwoord: er is geen verborgen addertje, maar er is wél een afweging die u moet kennen.\n\nEen opkoper biedt doorgaans onder de **maximale** marktwaarde die u in theorie via een makelaar zou kunnen halen. Dat is geen truc — het is de logica van het model. In ruil voor een lagere brutoprijs krijgt u zekerheid, snelheid en het wegvallen van alle kosten en rompslomp.\n\nHet échte addertje zit elders: bij partijen die níét transparant zijn over dat verschil. Let op voor:\n• Een aantrekkelijk bod dat vlak voor de akte plots wordt verlaagd met een vaag excuus\n• 'Gratis' beloftes die later toch kosten of commissies blijken te bevatten\n• Druk om snel te tekenen zonder bedenktijd\n• Een bedrijf zonder controleerbare gegevens (ondernemingsnummer, adres, telefoonnummer)\n\nBij een correcte partij is het 'addertje' dus gewoon een eerlijke ruil die op voorhand duidelijk op tafel ligt: minder brutoprijs, in ruil voor meer zekerheid en minder gedoe.",
      },
      {
        heading: "Krijg ik een eerlijke prijs of betaal ik te veel onder de marktwaarde?",
        body: "Om dit eerlijk te beoordelen, moet u het verschil kennen tussen de **brutoprijs** en wat u **netto** overhoudt.\n\nBij een verkoop via makelaar lijkt de verkoopprijs hoger, maar daar gaan nog posten vanaf:\n• Makelaarscommissie plus btw\n• Keuringen, EPC, asbestinventaris, bodemattest\n• Fotografie en publicatie op vastgoedportalen\n• Eventuele opfris- of herstelkosten vóór de verkoop\n• Dubbele woonlast, onroerende voorheffing en verzekering tijdens de wachttijd\n\nBij een rechtstreekse verkoop vallen al die posten weg. Het nettoverschil tussen beide is daardoor kleiner dan de brutoprijzen doen vermoeden.\n\nEen eerlijk bod herkent u niet aan het feit dat het de hoogste brutoprijs is, maar aan een **navolgbare berekening**: een opkoper die uitlegt hoe hij tot zijn bod komt — op basis van recente, vergelijkbare transacties in de buurt, de staat van de woning en de actuele markt — en die geen extra kortingen vraagt bij de akte. Vraag altijd om die motivering.",
      },
      {
        heading: "Waarom biedt een opkoper onder de maximale marktwaarde?",
        body: "Een opkoper neemt risico's en kosten over die anders bij u zouden liggen, en dat verrekent hij in het bod. Concreet:\n• De opkoper koopt het pand in de huidige staat (as-is) en draagt zelf de renovatiekost en het risico\n• De opkoper betaalt de woning meteen, zonder afhankelijk te zijn van een koper die nog een lening moet rondkrijgen\n• De opkoper draagt de leegstand, verzekering en lasten tot het pand opnieuw verkocht of verhuurd is\n\nDie zekerheid heeft een prijs. Voor wie snelheid en zekerheid belangrijker vindt dan de allerlaatste euro, is dat een logische ruil. Voor wie alle tijd heeft en een woning in topstaat verkoopt op een hete markt, levert een klassieke verkoop mogelijk netto meer op. Beide kunnen juist zijn — het hangt af van uw situatie.",
      },
      {
        heading: "Hoe herkent u een betrouwbare opkoper? Een checklist",
        body: "Voor u met een partij in zee gaat, loopt u best deze punten af:\n1. Is het bedrijf controleerbaar? Een ondernemingsnummer, een vast adres en bereikbare telefoonnummers\n2. Krijgt u een schriftelijk, gemotiveerd bod in plaats van een mondeling richtbod?\n3. Wordt er duidelijk gezegd dat er geen extra kortingen volgen bij de akte?\n4. Is het bod een redelijke periode geldig, zodat u tijd heeft om te vergelijken?\n5. Wordt er geen exclusiviteit of onmiddellijke handtekening geëist?\n6. Verloopt de verkoop via een notaris naar uw keuze?\n7. Mag u uw eigen adviseur of notaris raadplegen vóór u tekent?\n\nKan een partij op al deze punten gerust gesteld worden, dan is de kans op een vervelende verrassing klein.",
      },
      {
        heading: "Hoe wijkopenpanden.be dit aanpakt",
        body: "Wij zijn een Belgisch bedrijf met controleerbare gegevens en kopen panden rechtstreeks aan, zonder als makelaar op te treden.\n\nOnze werkwijze is opgebouwd rond net die punten waar verkopers terecht achterdochtig over zijn:\n• U krijgt na een bezoek een **schriftelijk, gemotiveerd bod**, doorgaans 7 dagen geldig\n• Wat in het bod staat, is wat u ontvangt — wij vragen geen extra kortingen bij de akte\n• Het bod is vrijblijvend en gratis; u bent tot niets verplicht\n• Wij eisen geen exclusiviteit, zodat u vrij kunt vergelijken\n• De verkoop verloopt via een notaris; u kiest uw eigen notaris of werkt met de onze\n\nZo wordt de afweging tussen brutoprijs en zekerheid een eerlijke, transparante keuze — geen verrassing achteraf.",
      },
    ],
    relatedArticles: ["wat-is-een-vastgoedopkoper", "commissie-makelaar-belgie", "wat-is-mijn-woning-waard-antwerpen", "bod-aanvragen-vrijblijvend-bindend", "opkoper-of-makelaar-verschil", "verkoop-kosten-berekenen"],
    relatedSituations: ["verkopen-zonder-makelaar"],
    faqs: [
      {
        question: "Is verkopen aan een opkoper veilig?",
        answer:
          "Ja, mits u met een serieuze partij werkt en de verkoop via een notaris verloopt. De notaris beschermt zowel koper als verkoper, controleert de koper en beheert de gelden. Het risico zit niet in het principe van rechtstreeks verkopen, maar in de werkwijze van de specifieke partij.",
      },
      {
        question: "Wat is het addertje onder het gras bij een directe verkoop?",
        answer:
          "Bij een correcte partij is er geen verborgen addertje, maar wel een eerlijke ruil: u krijgt doorgaans een lagere brutoprijs dan de maximale marktwaarde, in ruil voor zekerheid, snelheid en het wegvallen van kosten. Het echte gevaar zijn partijen die het bod plots verlagen bij de akte of onduidelijk zijn over kosten.",
      },
      {
        question: "Betaal ik veel onder de marktwaarde bij een opkoper?",
        answer:
          "Een opkoper biedt onder de maximale marktwaarde, maar het nettoverschil met een klassieke verkoop is kleiner dan het lijkt. Bij een verkoop via makelaar gaan commissie, keuringen, publicatie en wachtkosten van de brutoprijs af. Vraag altijd een navolgbare berekening van het bod.",
      },
      {
        question: "Waaraan herken ik een betrouwbare opkoper?",
        answer:
          "Aan een controleerbaar bedrijf (ondernemingsnummer, adres, telefoon), een schriftelijk en gemotiveerd bod, de garantie dat er geen extra kortingen volgen bij de akte, een redelijke geldigheidsduur, geen verplichte exclusiviteit, en een verkoop via een notaris naar uw keuze.",
      },
      {
        question: "Wat als de opkoper het bod verlaagt vlak voor de akte?",
        answer:
          "Dat is een rode vlag. Een betrouwbare opkoper houdt zich aan het schriftelijke bod tot de akte. Werk daarom enkel met een partij die expliciet bevestigt dat er geen extra kortingen volgen, en laat dit opnemen in de afspraken. wijkopenpanden.be vraagt geen extra kortingen bij de akte.",
      },
    ],
  },
  {
    slug: "bod-aanvragen-vrijblijvend-bindend",
    title: "Een bod aanvragen: gratis, vrijblijvend en hoe bindend is het echt?",
    metaTitle: "Is een bod aanvragen vrijblijvend en gratis? (2026)",
    metaDescription:
      "Zit u ergens aan vast als u een bod aanvraagt? Is het gratis, wat als u niet aanvaardt en wanneer is een verkoop juridisch bindend? Helder uitgelegd.",
    publishedAt: "2026-06-29",
    updatedAt: "2026-06-29",
    intro:
      "Een bod aanvragen voelt voor veel mensen als een verbintenis: zit ik er dan aan vast? Moet ik verkopen? Wat als het bod tegenvalt? De korte antwoorden zijn geruststellend — een bod aanvragen is gratis en vrijblijvend, en u zit nergens aan vast tot u zélf tekent. In dit artikel leggen we precies uit wanneer u vrij bent, wanneer een verkoop juridisch bindend wordt, en hoe u zeker weet dat een bod echt en hard is.",
    sections: [
      {
        heading: "Is een bod aanvragen gratis?",
        body: "Ja. Het aanvragen van een bod, het bezoek aan het pand en het uitbrengen van het schriftelijke bod horen kosteloos te zijn. U betaalt niets om te weten wat uw woning rechtstreeks opbrengt.\n\nAnders dan bij een makelaar zijn er bij een rechtstreekse verkoop geen voorschotten voor fotografie, publicatie of keuringen. Wie u kosten aanrekent louter om een bod uit te brengen, is geen partij om mee verder te gaan.\n\nEen vrijblijvend bod aanvragen is dus risicoloos: het geeft u een concreet vergelijkingspunt zonder enige verplichting of kost.",
      },
      {
        heading: "Zit ik ergens aan vast als ik een bod aanvraag?",
        body: "Nee. Een aanvraag is geen verkoop en geen contract. U vraagt enkel informatie op — wat uw woning waard is bij een directe verkoop.\n\nConcreet betekent dat:\n• U bent na de aanvraag tot niets verplicht\n• U bent na het bezoek aan het pand tot niets verplicht\n• U bent na ontvangst van het schriftelijke bod tot niets verplicht\n\nU zit pas vast wanneer u zelf een koopovereenkomst (koopbelofte of compromis) ondertekent. Tot dat moment beslist u volledig vrij of u verder gaat, vergelijkt of afhaakt.",
      },
      {
        heading: "Wat als ik het bod niet wil aanvaarden?",
        body: "Dan gebeurt er niets. U laat het bod gewoon verlopen.\n\nEen schriftelijk bod is doorgaans een beperkte periode geldig — bijvoorbeeld 7 kalenderdagen. Aanvaardt u het niet binnen die termijn, dan vervalt het automatisch. U hoeft geen reden op te geven en er volgt geen kost of boete.\n\nEen serieuze partij vraagt in die periode ook geen exclusiviteit. U mag het bod dus vrij vergelijken met een schatting van een makelaar of met een ander bod, en op basis daarvan beslissen.",
      },
      {
        heading: "Hoe weet ik dat het bod echt en bindend is?",
        body: "Het verschil tussen een serieuze partij en een onbetrouwbare zit in de hardheid van het bod. Let op deze kenmerken:\n• Het bod staat **op papier** (of in een duidelijke schriftelijke bevestiging), niet enkel mondeling\n• Het bod is **gemotiveerd**: u ziet waarop het gebaseerd is\n• Er wordt expliciet bevestigd dat er **geen extra kortingen** volgen bij de akte\n• Het bod heeft een duidelijke **geldigheidsduur**\n\nEen mondeling 'richtbod' dat later kan zakken, biedt geen zekerheid. Een schriftelijk bod met de belofte dat de prijs niet meer verandert, wel. Vraag dat laatste altijd uitdrukkelijk.",
      },
      {
        heading: "Vanaf wanneer is de verkoop juridisch bindend?",
        body: "In België komt een verkoop juridisch tot stand zodra koper en verkoper het eens zijn over de zaak en de prijs, en dat akkoord wordt vastgelegd in een ondertekende overeenkomst. Dat moment — niet de notariële akte — is het kantelpunt.\n\nDe stappen op een rij:\n1. **Aanvraag en bod** — vrijblijvend, u zit nergens aan vast\n2. **Koopbelofte of compromis** — zodra u dit tekent, is de verkoop in principe bindend\n3. **Notariële akte** — de officiële bevestiging en de eigendomsoverdracht, doorgaans binnen enkele maanden na het compromis\n\nHet is dus de **handtekening onder de koopbelofte of het compromis** die u verbindt, niet de aanvraag of het bod. Neem voor die handtekening de tijd en raadpleeg gerust uw notaris of een adviseur.",
      },
      {
        heading: "Kan ik me nog bedenken na het tekenen?",
        body: "Voor de verkoop van een woning tussen particulieren bestaat er in België **geen wettelijke bedenktijd of herroepingsrecht** zoals bij sommige aankopen op afstand. Eens u de koopbelofte of het compromis hebt getekend, is de verkoop bindend.\n\nDat maakt het des te belangrijker om de afweging vóór de handtekening te maken, niet erna. Concreet:\n• Lees het bod en de overeenkomst rustig na\n• Vergelijk gerust met een tweede inschatting\n• Raadpleeg uw notaris of een adviseur als u twijfelt\n\nSommige overeenkomsten bevatten wel **opschortende voorwaarden** (bijvoorbeeld in verband met een attest of een vergunning). Die werken anders dan een bedenktijd: ze maken de verkoop afhankelijk van een welbepaalde voorwaarde. Laat u hierover adviseren als dit voor uw situatie speelt.",
      },
      {
        heading: "Zo werkt het bij wijkopenpanden.be",
        body: "Wij houden de aanvraag bewust vrijblijvend en helder.\n\n• U vraagt een bod aan via het formulier of telefonisch — gratis en zonder verplichting\n• Wij bezoeken het pand; ook dat bezoek is vrijblijvend\n• U ontvangt een schriftelijk, gemotiveerd bod, doorgaans 7 dagen geldig\n• Wij vragen geen exclusiviteit, zodat u vrij kunt vergelijken\n• Wat in het bod staat, is wat u ontvangt — geen extra kortingen bij de akte\n• U zit pas vast wanneer u zélf de koopovereenkomst ondertekent\n\nZo kunt u zonder risico uitzoeken wat uw woning rechtstreeks opbrengt, en pas beslissen wanneer u alle informatie heeft.",
      },
    ],
    relatedArticles: ["wat-is-een-vastgoedopkoper", "verkoopbelofte-compromis-akte", "compromis-verkoop-woning-belgie", "betrouwbaar-verkopen-aan-opkoper", "opkoper-of-makelaar-verschil", "notariskosten-woning-verkoop"],
    relatedSituations: ["verkopen-zonder-makelaar"],
    faqs: [
      {
        question: "Is een bod aanvragen gratis?",
        answer:
          "Ja. De aanvraag, het bezoek aan het pand en het schriftelijke bod horen kosteloos te zijn. Bij een rechtstreekse verkoop zijn er geen voorschotten voor fotografie, publicatie of keuringen. U betaalt niets om te weten wat uw woning rechtstreeks opbrengt.",
      },
      {
        question: "Zit ik ergens aan vast als ik een bod aanvraag?",
        answer:
          "Nee. Een aanvraag is geen verkoop en geen contract. U bent na de aanvraag, na het bezoek en na ontvangst van het bod tot niets verplicht. U zit pas vast wanneer u zelf een koopbelofte of compromis ondertekent.",
      },
      {
        question: "Wat gebeurt er als ik het bod niet aanvaard?",
        answer:
          "Dan vervalt het bod na de geldigheidsduur, bijvoorbeeld 7 dagen. Er volgt geen kost, geen boete en u hoeft geen reden op te geven. Een serieuze partij vraagt geen exclusiviteit, zodat u het bod vrij kunt vergelijken.",
      },
      {
        question: "Vanaf wanneer is de verkoop bindend?",
        answer:
          "In België is een verkoop juridisch rond zodra koper en verkoper het eens zijn over zaak en prijs en dat wordt vastgelegd in een ondertekende koopbelofte of compromis. Niet de aanvraag of het bod verbindt u, maar uw handtekening onder die overeenkomst.",
      },
      {
        question: "Kan ik me bedenken nadat ik getekend heb?",
        answer:
          "Voor de verkoop van een woning tussen particulieren bestaat er in België geen wettelijke bedenktijd of herroepingsrecht. Eens u de koopbelofte of het compromis tekent, is de verkoop bindend. Neem de afweging dus vóór de handtekening en raadpleeg desgewenst uw notaris.",
      },
      {
        question: "Hoe weet ik dat een bod echt en hard is?",
        answer:
          "Aan een schriftelijk, gemotiveerd bod met een duidelijke geldigheidsduur en de expliciete bevestiging dat er geen extra kortingen volgen bij de akte. Een mondeling richtbod dat later kan zakken, biedt geen zekerheid.",
      },
    ],
  },
  {
    slug: "opkoper-of-makelaar-verschil",
    title: "Opkoper of makelaar? Het volledige verschil in kosten, snelheid en gedoe",
    metaTitle: "Opkoper of makelaar? Verschil in kosten en snelheid 2026",
    metaDescription:
      "Opkoper of makelaar? Een eerlijke vergelijking: commissie, snelheid, foto's, bezichtigingen en wat u bij elke formule zelf nog moet regelen.",
    publishedAt: "2026-06-29",
    updatedAt: "2026-06-29",
    intro:
      "Een makelaar en een opkoper lijken op elkaar — beide helpen u verkopen — maar ze doen fundamenteel iets anders. Een makelaar zoekt een koper voor u en rekent daarvoor commissie aan. Een opkoper is zélf de koper en rekent geen commissie. Dat verschil bepaalt wat u betaalt, hoe snel u verkoopt en hoeveel u zelf moet regelen. In dit artikel zetten we beide naast elkaar: kosten, snelheid, zekerheid en de praktische rompslomp van foto's, bezichtigingen en een te-koop-bord.",
    sections: [
      {
        heading: "Wat is het verschil tussen een opkoper en een makelaar?",
        body: "Het kernverschil is hun rol in de verkoop.\n\nEen **makelaar** is een bemiddelaar. Hij brengt uw woning op de markt, zoekt een koper en begeleidt de onderhandeling. Hij koopt zelf niet — hij verbindt u met een derde partij en rekent voor die dienst commissie aan. De verkoopprijs en de timing hangen af van wanneer er een geschikte koper opdaagt.\n\nEen **opkoper** is zelf de koper. wijkopenpanden.be koopt uw woning rechtstreeks aan, zonder als makelaar op te treden. Er komt geen derde koper aan te pas, dus ook geen commissie. U weet na het bod meteen wie koopt, tegen welke prijs en op welke termijn.\n\nKort: een makelaar verkoopt uw woning vóór u, een opkoper koopt ze ván u.",
      },
      {
        heading: "Vragen jullie kosten of commissie?",
        body: "Nee. Een opkoper koopt rechtstreeks aan en rekent geen makelaarscommissie aan. Dit is het meest concrete verschil met een makelaar.\n\nBij een verkoop via makelaar betaalt u een commissie als percentage van de verkoopprijs, te vermeerderen met 21% btw. Daarbovenop komen vaak nog kosten voor keuringen, EPC, fotografie en publicatie, die de verkoper voorschiet of die van de prijs worden afgetrokken.\n\nBij een rechtstreekse verkoop aan wijkopenpanden.be:\n• Geen commissie\n• Geen btw op een commissie\n• Geen kosten voor keuringen, EPC of asbestinventaris — wij regelen dat\n• Geen kosten voor fotografie of publicatie\n\nU ontvangt netto de overeengekomen verkoopprijs. De geijkte kosten die een verkoper bij een notariële verkoop draagt (zoals de doorhaling van een eventuele hypotheek) blijven uiteraard bestaan, ongeacht via wie u verkoopt.",
      },
      {
        heading: "Moet ik nog foto's, bezichtigingen of een te-koop-bord regelen?",
        body: "Nee. Dit is het verschil dat in het dagelijkse leven het meeste scheelt.\n\nBij een klassieke verkoop hoort een hele machine: professionele foto's, een aantrekkelijke advertentie, een te-koop-bord, en vooral een doorlopende reeks bezichtigingen met wildvreemden in uw woning — vaak 's avonds en in het weekend, soms wekenlang.\n\nBij een rechtstreekse verkoop valt dat allemaal weg:\n• Geen foto's of verkoopbrochure nodig\n• Geen advertentie op vastgoedportalen\n• Geen te-koop-bord aan de gevel\n• Geen reeks bezichtigingen — enkel één bezoek van ons om het pand te taxeren\n\nVoor wie discreet wil verkopen, weinig tijd heeft of een bewoond pand verkoopt, is dat een groot praktisch voordeel.",
      },
      {
        heading: "Verschil in snelheid en zekerheid",
        body: "Bij een makelaar is de uitkomst onzeker tot er een koper tekent. U weet niet op voorhand wat de woning opbrengt, noch wanneer ze verkocht raakt. De doorlooptijd hangt af van de markt, de prijs en het aantal geïnteresseerden, en kan oplopen tot vele maanden.\n\nBij een opkoper krijgt u na het bezoek een concreet, schriftelijk bod. U weet meteen wat u ontvangt en u kiest mee de datum van de akte. Dat ruilt u in tegen een brutoprijs die doorgaans onder de maximale marktwaarde ligt — de prijs van die zekerheid en snelheid.\n\nDe juiste keuze hangt af van wat u zwaarder laat wegen: de hoogst mogelijke brutoprijs, of zekerheid, snelheid en het wegvallen van kosten en rompslomp.",
      },
      {
        heading: "Opkoper versus makelaar: de vergelijking",
        body: "Onderstaande tabel zet de belangrijkste verschillen naast elkaar.",
        table: {
          headers: ["", "Via makelaar", "Via wijkopenpanden.be"],
          rows: [
            ["Rol", "Bemiddelaar — zoekt een koper", "Zelf de koper — koopt rechtstreeks"],
            ["Commissie", "Percentage + 21% btw", "Geen"],
            ["Keuringen, EPC, asbest", "Ten laste van verkoper", "Geregeld door wijkopenpanden.be"],
            ["Foto's, advertentie, te-koop-bord", "Nodig", "Niet nodig"],
            ["Bezichtigingen", "Reeks bezichtigingen", "Eén taxatiebezoek"],
            ["Zekerheid over prijs", "Pas bij ondertekend compromis", "Schriftelijk bod na bezoek"],
            ["Timing", "Afhankelijk van de markt", "U kiest mee de datum van de akte"],
            ["Brutoprijs", "Mogelijk hoger", "Onder maximale marktwaarde"],
          ],
        },
      },
      {
        heading: "Wanneer kiest u voor wie?",
        body: "Geen van beide is altijd beter — het hangt af van uw situatie.\n\nEen **makelaar** is interessant als:\n• Uw woning in goede staat is en vlot verkoopt op de markt\n• U geen haast heeft en de hoogst mogelijke brutoprijs wilt nastreven\n• U geen bezwaar heeft tegen bezichtigingen en wachttijd\n\nEen **opkoper** is interessant als:\n• U snel of op een gekozen datum zekerheid wilt\n• U niet wilt of kunt renoveren vóór de verkoop\n• U discreet wilt verkopen, zonder bezichtigingen of advertentie\n• U een pand verkoopt dat de doorsnee koper niet zoekt (opknappand, opbrengsteigendom, verhuurd pand)\n• U gedoe en bijkomende kosten wilt vermijden\n\nTwijfelt u? Een vrijblijvend bod aanvragen kost niets en geeft u een concreet vergelijkingspunt naast een schatting van een makelaar.",
      },
    ],
    relatedArticles: ["commissie-makelaar-belgie", "wat-is-een-vastgoedopkoper", "hoelang-duurt-huis-verkopen-belgie", "betrouwbaar-verkopen-aan-opkoper", "bod-aanvragen-vrijblijvend-bindend", "verkoop-kosten-berekenen"],
    relatedSituations: ["verkopen-zonder-makelaar", "opknappand-verkopen"],
    faqs: [
      {
        question: "Vraagt wijkopenpanden.be commissie of kosten?",
        answer:
          "Nee. Een opkoper koopt rechtstreeks aan en rekent geen makelaarscommissie aan. Er is ook geen btw op een commissie en geen kost voor keuringen, EPC, asbestinventaris, fotografie of publicatie. U ontvangt netto de overeengekomen verkoopprijs.",
      },
      {
        question: "Wat is het verschil tussen een opkoper en een makelaar?",
        answer:
          "Een makelaar is een bemiddelaar die een koper voor u zoekt en daarvoor commissie aanrekent. Een opkoper is zelf de koper en rekent geen commissie aan. Bij een opkoper weet u na het bod meteen wie koopt, tegen welke prijs en op welke termijn.",
      },
      {
        question: "Moet ik foto's, bezichtigingen of een te-koop-bord regelen?",
        answer:
          "Nee. Bij een rechtstreekse verkoop zijn er geen foto's, advertentie of te-koop-bord nodig en is er geen reeks bezichtigingen. Er is enkel één taxatiebezoek om het pand te beoordelen. Dat is een groot voordeel als u discreet wilt verkopen of weinig tijd heeft.",
      },
      {
        question: "Levert een makelaar meer op dan een opkoper?",
        answer:
          "De brutoprijs via een makelaar ligt mogelijk hoger, maar daar gaan commissie, btw, keuringen, publicatie en wachtkosten van af. Bij een opkoper ligt de brutoprijs onder de maximale marktwaarde, maar vallen die kosten weg. Het nettoverschil is kleiner dan de brutoprijzen doen vermoeden.",
      },
      {
        question: "Wanneer kies ik beter voor een opkoper dan voor een makelaar?",
        answer:
          "Een opkoper is interessant als u snel of op een gekozen datum zekerheid wilt, niet wilt renoveren vóór de verkoop, discreet wilt verkopen, of een pand heeft dat de doorsnee koper niet zoekt. Een makelaar past beter bij een woning in goede staat als u geen haast heeft en de hoogste brutoprijs nastreeft.",
      },
    ],
  },
  {
    slug: "keuringen-attesten-bij-directe-verkoop",
    title: "Asbestattest, EPC en elektrische keuring bij een directe verkoop: wat regelt u nog zelf?",
    metaTitle: "EPC, asbestattest en keuring bij directe verkoop (2026)",
    metaDescription:
      "Heeft u bij een directe verkoop nog een EPC, asbestattest of keuring nodig? Welke attesten verplicht blijven en wat de opkoper voor u regelt.",
    publishedAt: "2026-06-29",
    updatedAt: "2026-06-29",
    intro:
      "Bij de verkoop van een woning in Vlaanderen horen verplichte attesten en keuringen: een EPC, een asbestattest, een elektrische keuring, een bodemattest en stedenbouwkundige informatie. Veel verkopers vrezen het opzoekwerk, de kosten en de wachttijd die daarbij komen kijken. De goede nieuws bij een directe verkoop: de wettelijke verplichtingen blijven, maar u hoeft ze niet zelf te regelen. In dit artikel leest u welke attesten verplicht zijn, of die verplichting ook geldt bij een directe verkoop, en wat wijkopenpanden.be in uw plaats opneemt.",
    sections: [
      {
        heading: "Welke attesten en keuringen zijn verplicht bij een woningverkoop?",
        body: "Voor de verkoop van een woning in Vlaanderen is een aantal documenten wettelijk verplicht. De verkoper moet ze (laten) aanleveren vóór of bij de verkoop.",
        table: {
          headers: ["Document", "Waarvoor", "Wanneer verplicht"],
          rows: [
            ["EPC", "Energieprestatie van de woning", "Bij elke verkoop van een woning"],
            ["Asbestattest", "Aanwezigheid van asbest", "Bij verkoop van gebouwen van vóór 2001"],
            ["Elektrische keuring", "Conformiteit van de elektrische installatie", "Bij verkoop van een residentiële eenheid"],
            ["Bodemattest", "Historiek van bodemverontreiniging", "Bij elke overdracht van een grond"],
            ["Stedenbouwkundige info", "Vergunningen en bestemming", "Bij elke verkoop, opgevraagd via de notaris"],
            ["Postinterventiedossier", "Uitgevoerde werken sinds 2001", "Als er na 1 mei 2001 werken zijn uitgevoerd"],
          ],
        },
      },
      {
        heading: "Blijven die attesten verplicht als ik direct verkoop?",
        body: "Ja. De wettelijke verplichtingen hangen vast aan de **verkoop zelf**, niet aan het type koper. Of u nu verkoopt aan een particulier via een makelaar of rechtstreeks aan een opkoper: dezelfde attesten zijn nodig om de verkoop notarieel te kunnen afronden.\n\nHet verschil zit dus niet in wát er nodig is, maar in **wie het regelt en betaalt**. Bij een klassieke verkoop schiet u als verkoper de keuringen en attesten voor. Bij een directe verkoop aan wijkopenpanden.be nemen wij dat opzoekwerk en die kosten over.\n\nU hoeft met andere woorden geen keurder te zoeken, geen offertes te vergelijken en geen weken te wachten op een asbestdeskundige. De woning wordt in de huidige staat aangekocht en wij coördineren de nodige documenten met de notaris.",
      },
      {
        heading: "Wat wijkopenpanden.be voor u regelt",
        body: "Bij een directe verkoop nemen wij de praktische rompslomp van de keuringen en attesten op ons. Concreet betekent dat:\n• U hoeft zelf geen EPC-deskundige, elektrokeurder of asbestexpert aan te stellen\n• U schiet de kosten van die keuringen niet voor\n• U verzamelt het dossier niet zelf — wij coördineren met de notaris\n• De woning wordt aangekocht in de huidige staat, ook als de elektriciteit niet conform is of er asbest aanwezig is\n\nDat laatste is een wezenlijk verschil. Op de klassieke markt schrikken een niet-conforme elektrische installatie of de aanwezigheid van asbest kopers af of drukken ze het bod. Bij een directe verkoop zijn die elementen mee verrekend in een transparant bod, zonder dat u eerst moet laten herstellen of saneren.",
      },
      {
        heading: "EPC, asbestattest en elektrische keuring: wat houdt elk in?",
        body: "Een korte toelichting bij de drie attesten waar verkopers de meeste vragen over hebben:\n\n**EPC (energieprestatiecertificaat).** Toont het energielabel van de woning en is doorgaans tien jaar geldig. Sinds de invoering van de renovatieverplichting voor woningen met een zwak label weegt het EPC zwaarder door in de aankoopbeslissing van klassieke kopers.\n\n**Asbestattest.** Verplicht bij de verkoop van gebouwen die vóór 2001 zijn gebouwd. Een gecertificeerd deskundige inventariseert het asbest in de woning. Het attest is informatief — u hoeft het asbest niet te verwijderen vóór de verkoop.\n\n**Elektrische keuring.** Controleert of de elektrische installatie voldoet aan het Algemeen Reglement op de Elektrische Installaties. Is de installatie niet conform, dan moet de koper ze na de aankoop binnen een wettelijke termijn in orde laten brengen. Bij een directe verkoop is dat geen obstakel.\n\nVoor een diepgaande uitleg per attest verwijzen we naar onze aparte artikels over de verplichte keuringen, het EPC en het bodemattest.",
      },
      {
        heading: "Bodemattest en stedenbouwkundige informatie",
        body: "Naast de keuringen die de staat van de woning betreffen, zijn er twee administratieve documenten:\n\n**Bodemattest.** Bij elke overdracht van een grond is een bodemattest van de bevoegde instantie vereist. Het geeft de gekende historiek van eventuele bodemverontreiniging weer. De notaris vraagt dit doorgaans aan.\n\n**Stedenbouwkundige inlichtingen.** De notaris vraagt bij de gemeente de informatie op over vergunningen, de bestemming van het pand en eventuele overtredingen. Dit gebeurt bij elke verkoop.\n\nOok deze documenten coördineren wij bij een directe verkoop mee met de notaris, zodat u er zelf niet achteraan hoeft te gaan.",
      },
      {
        heading: "Het verschil met een verkoop via makelaar",
        body: "Bij een klassieke verkoop blijven de attesten ten laste van de verkoper. U laat ze opmaken vóór de publicatie — onder meer omdat het EPC al in de advertentie moet staan — en betaalt de keurders zelf. Een makelaar regelt dit soms tegen vergoeding, maar de kosten blijven uw rekening.\n\nVerkoopt u liever via een makelaar, dan kan dat uiteraard — bijvoorbeeld via een vastgoedkantoor zoals Berabrick, dat het volledige verkooptraject en de attesten in uw plaats opvolgt. De afweging blijft dezelfde als altijd: een mogelijk hogere brutoprijs tegenover de kosten, de wachttijd en de rompslomp.\n\nBij een directe verkoop aan wijkopenpanden.be vallen die keuringskosten en dat opzoekwerk weg. U levert de woning aan zoals ze is; wij doen de rest.",
      },
    ],
    relatedArticles: ["keuringen-bij-verkoop-woning", "epc-attest-antwerpen", "bodemattest-vlaanderen-verkoop", "opkoper-of-makelaar-verschil", "pand-in-slechte-staat-verkopen", "hoe-snel-verkopen-en-geld-ontvangen"],
    relatedSituations: ["verkopen-zonder-makelaar", "opknappand-verkopen"],
    faqs: [
      {
        question: "Heb ik bij een directe verkoop nog een EPC nodig?",
        answer:
          "Het EPC blijft wettelijk verplicht, want die verplichting hangt aan de verkoop, niet aan het type koper. Het verschil is dat u het bij een directe verkoop aan wijkopenpanden.be niet zelf hoeft te laten opmaken of voor te schieten — wij regelen de nodige documenten met de notaris.",
      },
      {
        question: "Moet ik asbest verwijderen of de elektriciteit herstellen vóór ik verkoop?",
        answer:
          "Nee. Bij een directe verkoop koopt wijkopenpanden.be de woning in de huidige staat aan. Een niet-conforme elektrische installatie of de aanwezigheid van asbest is geen obstakel; die elementen zijn mee verrekend in een transparant bod, zonder dat u eerst moet herstellen of saneren.",
      },
      {
        question: "Wie betaalt de keuringen bij een directe verkoop?",
        answer:
          "Bij een directe verkoop aan wijkopenpanden.be neemt de opkoper het opzoekwerk en de kosten van de keuringen over. Bij een klassieke verkoop via makelaar schiet de verkoper die kosten zelf voor.",
      },
      {
        question: "Is een asbestattest altijd verplicht?",
        answer:
          "Een asbestattest is verplicht bij de verkoop van gebouwen die vóór 2001 zijn gebouwd. Het is een informatief document op basis van een inventarisatie door een gecertificeerd deskundige; u hoeft het asbest niet te verwijderen vóór de verkoop.",
      },
      {
        question: "Regelt wijkopenpanden.be ook het bodemattest en de stedenbouwkundige info?",
        answer:
          "Ja. Het bodemattest en de stedenbouwkundige inlichtingen worden via de notaris opgevraagd. Bij een directe verkoop coördineren wij die documenten mee, zodat u er zelf niet achteraan hoeft te gaan.",
      },
    ],
  },
  {
    slug: "hoe-snel-verkopen-en-geld-ontvangen",
    title: "Hoe snel kunt u verkopen en wanneer staat het geld op uw rekening?",
    metaTitle: "Hoe snel verkopen en wanneer krijgt u het geld? (2026)",
    metaDescription:
      "Hoe snel verkoopt u aan een opkoper en wanneer staat het geld op uw rekening? De volledige tijdlijn van aanvraag tot uitbetaling — en wat het tempo bepaalt.",
    publishedAt: "2026-06-29",
    updatedAt: "2026-06-29",
    intro:
      "Wie snel wil verkopen, heeft eigenlijk twee vragen: hoe snel is de verkoop rond, en wanneer staat het geld effectief op mijn rekening? Die twee vallen niet samen — een akkoord is sneller bereikt dan de uitbetaling, want daar zit nog de notariële akte tussen. In dit artikel leest u de volledige tijdlijn van een directe verkoop, van de eerste aanvraag tot het moment dat de opbrengst op uw rekening staat, en wat dat tempo kan versnellen of vertragen.",
    sections: [
      {
        heading: "Hoe snel kunt u verkopen aan een opkoper?",
        body: "Bij een directe verkoop ligt de zekerheid over de verkoop er snel. Het akkoord — het moment waarop u weet dat u verkoopt en tegen welke prijs — kan al binnen enkele dagen rond zijn.\n\nEen typisch verloop bij wijkopenpanden.be:\n• Reactie op uw aanvraag binnen 2 uur, ook in het weekend\n• Bezoek aan het pand doorgaans binnen 48 uur\n• Een schriftelijk, gemotiveerd bod kort na het bezoek\n\nDat staat in scherp contrast met een klassieke verkoop, waar het wachten is op een geschikte koper. De doorlooptijd op de open markt kan oplopen tot vele maanden, en is pas zeker zodra een koper het compromis tekent.",
      },
      {
        heading: "Waarom een directe verkoop sneller verloopt",
        body: "De snelheid van een directe verkoop komt voort uit het wegvallen van de stappen die een klassieke verkoop traag maken:\n• Geen wachttijd tot er een geïnteresseerde koper opdaagt\n• Geen reeks bezichtigingen die zich over weken uitspreidt\n• Geen onderhandelingsrondes met meerdere kandidaat-kopers\n• Geen koper die nog een hypothecaire lening moet rondkrijgen\n\nDe opkoper is zelf de koper en betaalt uit eigen middelen. Daardoor hangt de verkoop niet af van een externe financiering en kan de planning van de akte sneller en met meer zekerheid verlopen.",
      },
      {
        heading: "De volledige tijdlijn: van aanvraag tot geld op de rekening",
        body: "De verkoop verloopt in twee fasen: eerst het akkoord, daarna de notariële afhandeling tot de uitbetaling.\n1. **Aanvraag** — u vraagt een vrijblijvend bod aan via het formulier of telefonisch\n2. **Bezoek** — wij bezoeken het pand, doorgaans binnen 48 uur\n3. **Schriftelijk bod** — kort na het bezoek, met een duidelijke geldigheidsduur\n4. **Akkoord** — u aanvaardt het bod en ondertekent de koopovereenkomst\n5. **Notarisdossier** — de notaris stelt het dossier samen en vraagt de nodige documenten op\n6. **Notariële akte** — de officiële ondertekening en de eigendomsoverdracht, doorgaans binnen 2 tot 3 maanden na het akkoord\n7. **Uitbetaling** — de opbrengst wordt via de notaris aan u uitbetaald\n\nDe periode tussen het akkoord en de akte wordt grotendeels bepaald door wettelijke en administratieve termijnen — niet door de koper. U kiest binnen die marge mee de datum van de akte.",
      },
      {
        heading: "Wanneer staat het geld op mijn rekening?",
        body: "De uitbetaling gebeurt via de notaris, rond het moment van de notariële akte — niet rechtstreeks van koper naar verkoper.\n\nHet verloop:\n• De koopprijs staat doorgaans **vóór of op het moment van de akte** op de derdenrekening van de notaris\n• Bij de akte verrekent de notaris eerst de lasten op het pand (bijvoorbeeld de aflossing van een lopende hypotheek) en eventuele schulden\n• Het **nettosaldo** wordt daarna aan u overgemaakt\n\nIn de praktijk staat dat saldo doorgaans binnen enkele werkdagen na de akte op uw rekening. De akte zelf is dus het kantelpunt: vanaf dat moment is de woning niet langer van u en is de uitbetaling een kwestie van dagen, niet van weken.",
      },
      {
        heading: "Wat de uitbetaling kan vertragen",
        body: "Enkele situaties kunnen de afhandeling tussen akkoord en uitbetaling verlengen. Goed om vooraf te kennen:\n• **Een lopende hypotheek** — de notaris lost die af uit de opbrengst en zorgt voor de doorhaling; dit verloopt vlot maar vraagt coördinatie met de bank\n• **Beslag of schulden op het pand** — de notaris moet de schuldeisers correct uitbetalen volgens hun rang vóór u het saldo ontvangt\n• **Ontbrekende of laattijdige documenten** — bijvoorbeeld attesten of informatie van een syndicus bij een appartement\n• **Een onverdeeldheid** — bij een erfenis of scheiding moeten alle eigenaars meetekenen\n\nDeze elementen verhinderen de verkoop niet, maar bepalen mee het tempo. Hoe vroeger ze gekend zijn, hoe vlotter de planning.",
      },
      {
        heading: "Kan het sneller bij hoogdringendheid?",
        body: "In dringende situaties — denk aan betalingsproblemen, een dreigende gedwongen verkoop of een scheiding waarbij snel duidelijkheid nodig is — kan het tempo omhoog.\n\nDringende dossiers behandelen wij met voorrang: een snel bezoek, een snel bod en, in overleg met de notaris, een zo vroeg mogelijke datum van de akte. De wettelijke en administratieve termijnen blijven gelden, maar binnen die marge wordt alles op snelheid georganiseerd.\n\nWeegt elke week voor u door, dan is het zinvol om dit meteen bij de aanvraag te melden, zodat het dossier van bij de start met voorrang loopt.",
      },
      {
        heading: "Snel én zeker verkopen via wijkopenpanden.be",
        body: "Snelheid is maar waardevol als ze samengaat met zekerheid. Daarom combineren wij beide:\n• Een reactie binnen 2 uur en een bezoek binnen 48 uur\n• Een schriftelijk bod dat niet meer zakt bij de akte\n• U kiest mee de datum van de akte\n• Een uitbetaling via de notaris, doorgaans binnen enkele werkdagen na de akte\n\nZo weet u niet alleen snel of u verkoopt en tegen welke prijs, maar ook met redelijke precisie wanneer de opbrengst op uw rekening staat. Een vrijblijvend bod aanvragen verplicht u tot niets en geeft u meteen een concreet beeld van de timing.",
      },
    ],
    relatedArticles: ["hoelang-duurt-huis-verkopen-belgie", "notariskosten-woning-verkoop", "huis-verkopen-met-hypotheek", "bod-aanvragen-vrijblijvend-bindend", "opkoper-of-makelaar-verschil", "keuringen-attesten-bij-directe-verkoop"],
    relatedSituations: ["verkopen-zonder-makelaar", "huis-verkopen-bij-scheiding"],
    faqs: [
      {
        question: "Hoe snel kan ik mijn woning verkopen aan een opkoper?",
        answer:
          "Het akkoord kan binnen enkele dagen rond zijn: bij wijkopenpanden.be reageren wij binnen 2 uur op uw aanvraag, bezoeken het pand doorgaans binnen 48 uur en brengen kort daarna een schriftelijk bod uit. De notariële akte volgt doorgaans 2 tot 3 maanden na het akkoord.",
      },
      {
        question: "Wanneer staat het geld op mijn rekening na de verkoop?",
        answer:
          "De uitbetaling gebeurt via de notaris rond het moment van de notariële akte. De koopprijs staat doorgaans vóór of bij de akte op de derdenrekening van de notaris; na verrekening van eventuele lasten ontvangt u het nettosaldo, gewoonlijk binnen enkele werkdagen na de akte.",
      },
      {
        question: "Waarom duurt het na het akkoord nog enkele maanden tot de akte?",
        answer:
          "Tussen het akkoord en de notariële akte zitten wettelijke en administratieve termijnen: het samenstellen van het notarisdossier en het opvragen van de nodige documenten en attesten. Die periode wordt bepaald door de procedure, niet door de koper. U kiest binnen die marge mee de datum van de akte.",
      },
      {
        question: "Krijg ik mijn geld rechtstreeks van de koper?",
        answer:
          "Nee. De betaling verloopt via de notaris. De koopprijs staat op de derdenrekening van de notaris, die eerst de lasten op het pand verrekent en daarna het nettosaldo aan u overmaakt. Dat beschermt zowel koper als verkoper.",
      },
      {
        question: "Wat kan de uitbetaling vertragen?",
        answer:
          "Een lopende hypotheek, beslag of schulden op het pand, ontbrekende documenten of een onverdeeldheid bij erfenis of scheiding kunnen de afhandeling verlengen. Ze verhinderen de verkoop niet, maar bepalen mee het tempo. Hoe vroeger ze gekend zijn, hoe vlotter de planning.",
      },
      {
        question: "Kan een dringende verkoop sneller afgehandeld worden?",
        answer:
          "Ja. Dringende dossiers behandelen wij met voorrang: een snel bezoek, een snel bod en in overleg met de notaris een zo vroeg mogelijke datum van de akte. Meld de hoogdringendheid best meteen bij de aanvraag, zodat het dossier van bij de start met voorrang loopt.",
      },
    ],
  },
  {
    slug: "vruchtgebruik-woning-verkopen",
    title: "Woning verkopen met vruchtgebruik: hoe werkt het en wie krijgt wat?",
    metaTitle: "Woning verkopen met vruchtgebruik: zo werkt het (2026)",
    metaDescription:
      "Woning verkopen met vruchtgebruik? Ontdek wie akkoord moet gaan, hoe de prijs verdeeld wordt via de omzettingstabellen en welke fouten u best vermijdt.",
    publishedAt: "2026-07-02",
    updatedAt: "2026-07-02",
    intro:
      "Een woning verkopen met vruchtgebruik is juridisch perfect mogelijk, maar ligt vaak gevoelig: de vruchtgebruiker (dikwijls de langstlevende ouder) en de blote eigenaars (meestal de kinderen) moeten sámen beslissen én de verkoopprijs correct verdelen. Wie dat verkeerd aanpakt, riskeert een fiscale herkwalificatie als schenking of een familiaal conflict dat de verkoop jaren blokkeert. In dit artikel leest u wanneer vruchtgebruik ontstaat, waarom niemand alleen kan verkopen, hoe de wettelijke omzettingstabellen van 1 juli 2025 de waarde van het vruchtgebruik bepalen (met concrete percentages per leeftijd), welk alternatief zaakvervanging biedt en welke fouten families in de praktijk het vaakst maken. Zo weet u vooraf precies wie wat krijgt.",
    sections: [
      {
        heading: "Wat is vruchtgebruik en hoe ontstaat het?",
        body: "Vruchtgebruik is het recht om een goed van iemand anders te gebruiken en er de vruchten van te innen: er zelf wonen, of het verhuren en de huur opstrijken. De **blote eigenaar** bezit de woning op papier, maar kan er niet van genieten zolang het vruchtgebruik loopt. Sinds 1 september 2021 regelt Boek 3 van het nieuwe Burgerlijk Wetboek (wet van 4 februari 2020) het vruchtgebruik, met onder meer een maximale duur van 99 jaar (art. 3.141 BW) en een wettelijke verdeling van de kosten: de vruchtgebruiker staat in voor onderhoud en verzekering, de blote eigenaar voor grove herstellingen.\n\nIn de praktijk ontstaat vruchtgebruik op een woning meestal op drie manieren:\n\n• **Erfenis**: de langstlevende echtgenoot erft het vruchtgebruik van de hele nalatenschap, de kinderen erven de blote eigendom. Een wettelijk samenwonende partner erft het vruchtgebruik van de gezinswoning en de inboedel.\n• **Schenking met voorbehoud van vruchtgebruik**: ouders schenken de woning aan de kinderen, maar blijven er levenslang wonen of verhuren ze.\n• **Gesplitste aankoop**: ouders kopen het vruchtgebruik, kinderen kopen tegelijk de blote eigendom, vaak als vorm van successieplanning.\n\nHoe het vruchtgebruik ontstond, bepaalt mee welke fiscale regels bij een latere verkoop spelen — daarover verder meer.",
      },
      {
        heading: "Verkopen kan alleen als iedereen tekent",
        body: "De belangrijkste regel: **de volle eigendom verkopen kan alleen met het akkoord van de vruchtgebruiker én alle blote eigenaars**. De vruchtgebruiker kan de woning niet alleen verkopen, want hij bezit ze niet. De blote eigenaars kunnen strikt genomen wel hun blote eigendom afzonderlijk verkopen, maar het vruchtgebruik blijft dan op de woning rusten. Weinig kandidaat-kopers willen een woning waar iemand anders levenslang mag blijven wonen, dus die formule brengt in de praktijk nauwelijks iets op.\n\nWeigert één partij, dan zit de verkoop vast. Er bestaat wel een uitweg via het erfrecht: zowel de langstlevende als de kinderen kunnen de **omzetting van het vruchtgebruik** vragen (art. 4.63 e.v. BW), waarbij het wordt omgezet in volle eigendom, een geldsom of een rente. Eén belangrijke uitzondering: voor de **gezinswoning en de inboedel heeft de langstlevende echtgenoot een vetorecht**. Een rechter kan de omzetting daarvan nooit opleggen zonder zijn of haar instemming. De kinderen kunnen een ouder of stiefouder dus niet dwingen om het ouderlijk huis te verlaten of te verkopen.",
      },
      {
        heading: "Wie krijgt wat? De omzettingstabellen van Justitie",
        body: "Bij verkoop van de volle eigendom wordt de prijs gesplitst: een deel voor de vruchtgebruiker, de rest voor de blote eigenaars. De verdeelsleutel volgt in de regel uit de **wettelijke omzettingstabellen** die de minister van Justitie elk jaar op 1 juli in het Belgisch Staatsblad publiceert (art. 4.64, §§ 3 en 5 BW). Die tabellen — één voor mannen, één voor vrouwen — vertrekken van de levensverwachting van de vruchtgebruiker en de gemiddelde rentevoet van lineaire obligaties over de laatste twee jaar, met een minimum van 1%. Hoe ouder de vruchtgebruiker, hoe lager de waarde van het vruchtgebruik.\n\nEen rekenvoorbeeld met de tabel van 1 juli 2025: verkoopt u een woning voor €350.000 en is de vruchtgebruikster een vrouw van 75, dan is haar vruchtgebruik 28,11% waard, ofwel €98.385. De blote eigenaars verdelen de resterende €251.615.\n\nGoed om te weten: de forfaitaire percentages uit de Vlaamse Codex Fiscaliteit (gebruikt voor de erfbelasting) liggen een stuk lager dan de omzettingswaarde. Verwar beide niet: bij een verkoop telt de burgerlijke waardering, niet het fiscale forfait. Partijen mogen in onderling akkoord ook een andere, economisch onderbouwde waardering afspreken; bij betwisting valt de rechter terug op de wettelijke tabellen.",
        table: {
          headers: ["Leeftijd vruchtgebruiker", "Man (omzettingstabel BW, 1/7/2025)", "Vrouw (omzettingstabel BW, 1/7/2025)", "Forfait erfbelasting (VCF)"],
          rows: [
            ["60 jaar", "46,35%", "50,06%", "38%"],
            ["65 jaar", "39,25%", "43,59%", "32%"],
            ["70 jaar", "31,64%", "36,12%", "24%"],
            ["75 jaar", "23,89%", "28,11%", "16%"],
            ["80 jaar", "16,63%", "20,05%", "8%"],
            ["85 jaar", "10,82%", "13,05%", "8%"],
          ],
        },
      },
      {
        heading: "Alternatief: het vruchtgebruik voortzetten op de verkoopprijs",
        body: "De prijs meteen verdelen is niet verplicht. Dankzij de **zakelijke subrogatie of zaakvervanging** (art. 3.10 BW) kan het vruchtgebruik na de verkoop gewoon verder lopen op de verkoopprijs. De vruchtgebruiker int dan de intresten of huurt er bijvoorbeeld een assistentiewoning mee, terwijl het kapitaal voor de blote eigenaars bewaard blijft.\n\nHet nieuwe goederenrecht koppelt daar duidelijke spelregels aan: de som moet op een **afzonderlijke rekening** op naam van de vruchtgebruiker staan, gescheiden van zijn persoonlijk vermogen, en beleggen kan enkel **met instemming van de blote eigenaars**. Bij het overlijden van de vruchtgebruiker dooft het vruchtgebruik uit en komt het saldo automatisch volledig toe aan de blote eigenaars.\n\nDeze formule is vooral interessant wanneer de langstlevende inkomsten nodig heeft maar de familie het kapitaal wil samenhouden, of wanneer een onmiddellijke verdeling tot discussie over de percentages zou leiden. Laat de afspraken wel altijd schriftelijk vastleggen bij de notaris.",
      },
      {
        heading: "Veelgemaakte fouten en fiscale valkuilen",
        body: "Bij een verkoop met vruchtgebruik lopen families vooral op deze punten vast:\n\n• **De volledige prijs naar één partij laten vloeien.** Stort de koper alles aan de vruchtgebruiker zonder regeling van zaakvervanging, of staan de kinderen hun deel informeel af, dan kan de fiscus dat als een onrechtstreekse schenking beschouwen — met mogelijk schenk- of erfbelasting tot gevolg. Verdeel de prijs volgens een verdedigbare waardering of leg de voortzetting op de prijs notarieel vast.\n• **Het VCF-forfait gebruiken in plaats van de omzettingstabellen.** Een 75-jarige vruchtgebruikster heeft fiscaal een forfait van 16%, maar burgerlijk 28,11%. Wie het forfait hanteert, benadeelt de vruchtgebruiker met tienduizenden euro's.\n• **De gesplitste aankoop uit het oog verliezen.** Werd de woning destijds gesplitst aangekocht, dan geldt de fictiebepaling van art. 2.7.1.0.7 VCF: de blote eigendom wordt bij overlijden geacht uit de nalatenschap te komen, tenzij de kinderen kunnen bewijzen dat ze hun deel met eigen middelen betaalden. Houd betaalbewijzen dus zorgvuldig bij, ook na de verkoop.\n• **Conflicten in nieuw samengestelde gezinnen onderschatten.** Vragen stiefkinderen de omzetting, dan wordt de langstlevende voor de waardering geacht minstens 20 jaar ouder te zijn dan het oudste stiefkind — wat de waarde van het vruchtgebruik fors drukt. Net in die gezinnen loont een onderhandelde verkoop met duidelijke verdeelsleutel.",
      },
      {
        heading: "Stappenplan: zo verloopt de verkoop concreet",
        body: "1. **Breng de eigendomsstructuur in kaart.** De notaris of de eigendomstitel toont wie vruchtgebruiker is en wie blote eigenaar, en hoe het vruchtgebruik ontstond (erfenis, schenking of gesplitste aankoop).\n2. **Laat de woning waarderen.** Eén realistische marktwaarde vermijdt latere discussies over ieders aandeel.\n3. **Spreek de verdeelsleutel af.** Reken het aandeel van de vruchtgebruiker uit met de meest recente omzettingstabel, of kies voor voortzetting van het vruchtgebruik op de prijs.\n4. **Onderteken samen het compromis.** Zowel de vruchtgebruiker als álle blote eigenaars ondertekenen de verkoopbelofte of het compromis; één ontbrekende handtekening maakt de verkoop onmogelijk.\n5. **Verleden van de notariële akte.** De notaris vermeldt de verdeling of de zaakvervanging uitdrukkelijk in de akte en betaalt ieders aandeel rechtstreeks uit.\n\nReken voor het volledige traject op enkele maanden, op voorwaarde dat alle partijen op dezelfde lijn zitten. Net daar knelt het vaak: hoe meer partijen, hoe trager de klassieke verkoop.",
      },
      {
        heading: "Eén duidelijk bod voor vruchtgebruiker én blote eigenaars",
        body: "Een woning met vruchtgebruik verkopen vraagt vooral één ding: een voorstel waar álle partijen tegelijk ja op kunnen zeggen. Lange bezichtigingsrondes, afspringende kopers met een financieringsvoorbehoud of maandenlange onzekerheid maken het moeilijk om een ouder en meerdere kinderen op één lijn te houden.\n\nDaarom kiezen families in deze situatie geregeld voor een directe verkoop aan wijkopenpanden.be. U ontvangt een **gratis en vrijblijvend bod**, met reactie binnen 2 uur — ook in het weekend — en doorgaans een plaatsbezoek binnen 48 uur. Het bod is schriftelijk gemotiveerd, zodat vruchtgebruiker en blote eigenaars op basis van dezelfde cijfers kunnen beslissen en de verdeling via de omzettingstabellen transparant kunnen doorrekenen. Wij kopen in de huidige staat, betalen uit eigen middelen zonder financieringsvoorbehoud en rekenen geen makelaarscommissie aan. Na akkoord coördineren wij de attesten met de notaris en volgt de akte doorgaans binnen 2 à 3 maanden. Zo krijgt elke partij snel duidelijkheid over wie wat krijgt — zonder dat de familieband onder de verkoop lijdt.",
      },
    ],
    relatedArticles: ["erfenis-woning-stappenplan", "schenking-woning-vlaanderen", "erfbelasting-vlaanderen-2026", "mede-eigendom-verkopen", "blijven-wonen-na-verkoop", "notariskosten-woning-verkoop"],
    relatedSituations: ["huis-verkopen-bij-erfenis"],
    faqs: [
      {
        question: "Kan ik mijn woning verkopen als iemand anders het vruchtgebruik heeft?",
        answer:
          "Niet alleen. De volle eigendom verkopen vereist het akkoord van de vruchtgebruiker én alle blote eigenaars; iedereen ondertekent het compromis en de akte. U kunt in theorie enkel uw blote eigendom verkopen, maar omdat het vruchtgebruik dan op de woning blijft rusten, vindt u daar in de praktijk nauwelijks kopers voor — en al zeker niet tegen een correcte prijs.",
      },
      {
        question: "Hoeveel is het vruchtgebruik op mijn woning waard?",
        answer:
          "Dat hangt af van leeftijd en geslacht van de vruchtgebruiker. Volgens de omzettingstabellen van 1 juli 2025 is het vruchtgebruik van een 65-jarige vrouw 43,59% van de woningwaarde, van een 75-jarige vrouw 28,11% en van een 85-jarige vrouw 13,05%. Voor mannen liggen de percentages iets lager. De tabellen worden elk jaar op 1 juli geactualiseerd in het Belgisch Staatsblad.",
      },
      {
        question: "Kan de vruchtgebruiker verplicht worden om mee te verkopen?",
        answer:
          "Nee. Zonder handtekening van de vruchtgebruiker komt er geen verkoop van de volle eigendom. Blote eigenaars kunnen wel de omzetting van het vruchtgebruik vragen aan de rechter, maar voor de gezinswoning en de inboedel heeft de langstlevende echtgenoot een vetorecht: de rechter kan die omzetting nooit opleggen zonder zijn of haar instemming.",
      },
      {
        question: "Wat gebeurt er met het geld als het vruchtgebruik op de verkoopprijs verder loopt?",
        answer:
          "Via zaakvervanging (art. 3.10 BW) verschuift het vruchtgebruik naar de verkoopprijs. Die som komt op een afzonderlijke rekening op naam van de vruchtgebruiker, gescheiden van zijn eigen vermogen. De vruchtgebruiker int de opbrengsten, maar beleggen kan alleen met instemming van de blote eigenaars. Bij zijn of haar overlijden gaat het saldo automatisch en zonder extra formaliteiten naar de blote eigenaars.",
      },
      {
        question: "Betalen de kinderen erfbelasting als het vruchtgebruik uitdooft?",
        answer:
          "Bij een vruchtgebruik uit een erfenis of een schenking met voorbehoud van vruchtgebruik dooft het recht bij overlijden gewoon uit: de blote eigenaars worden volle eigenaar zonder nieuwe erfbelasting. Bij een gesplitste aankoop geldt wel de fictiebepaling van art. 2.7.1.0.7 VCF: de kinderen moeten kunnen bewijzen dat ze de blote eigendom destijds met eigen middelen betaalden, anders volgt alsnog erfbelasting.",
      },
      {
        question: "Zijn de omzettingstabellen verplicht bij de prijsverdeling?",
        answer:
          "Niet absoluut. Vruchtgebruiker en blote eigenaars mogen in onderling akkoord een andere, economisch onderbouwde waardering afspreken. Maar bij betwisting of bij een gerechtelijke omzetting past de rechter de wettelijke omzettingstabellen van de minister van Justitie toe. Een verdeling die sterk afwijkt zonder motivering, riskeert bovendien door de fiscus als een onrechtstreekse schenking te worden gelezen. De tabellen volgen is dus de veiligste route.",
      },
    ],
  },
  {
    slug: "stookolietank-woning-verkopen",
    title: "Huis verkopen met een stookolietank (mazouttank): keuring, sanering en uw plichten",
    metaTitle: "Huis verkopen met stookolietank (2026)",
    metaDescription:
      "Huis verkopen met een stookolietank in Vlaanderen? Keuringsplicht, dopkleuren, buitengebruikstelling en het Promaz-fonds: uw plichten in 2026.",
    publishedAt: "2026-07-02",
    updatedAt: "2026-07-02",
    intro:
      "Heel wat woningen in de regio Antwerpen worden nog met stookolie verwarmd, of hebben in de kelder of tuin een oude mazouttank die al jaren niet meer gebruikt wordt. Bij een verkoop roept dat vragen op: moet de tank gekeurd worden, mag u verkopen met een niet-conforme tank, en wie betaalt de sanering als de tank ooit gelekt heeft? De Vlaamse regels zijn recent strenger geworden — sinds 1 januari 2026 moet een ongebruikte tank binnen de twee jaar definitief buiten gebruik gesteld worden — en het Promaz-fonds werkt sinds maart 2025 volgens een nieuw systeem. In dit artikel zetten we uw plichten als verkoper op een rij, met concrete termijnen en kostenordes.",
    sections: [
      {
        heading: "De keuringsplicht in Vlaanderen: ondergronds versus bovengronds",
        body: "Elke stookolietank in Vlaanderen moet gekeurd worden door een erkend stookolietechnicus vóór hij in gebruik wordt genomen. Wat daarna volgt, hangt af van het type tank. Voor particuliere tanks met een inhoud van minder dan 5.000 kg (ongeveer 6.000 liter) gelden deze regels:\n\n• **Ondergrondse tank**: verplichte periodieke controle om de **5 jaar** door een erkend technicus\n• **Bovengrondse tank** (ook een keldertank telt als bovengronds): sinds 1 maart 2009 geen periodieke keuringsplicht meer — enkel de controle bij plaatsing blijft verplicht\n\nVoor grotere tanks vanaf 5.000 kg zijn de regels strenger: een ondergrondse tank krijgt dan een beperkt onderzoek om de 2 jaar (jaarlijks in waterwingebied) en een algemeen onderzoek om de 15 jaar; een bovengrondse grote tank een beperkt onderzoek om de 3 jaar. Bij een gewone woning speelt dit zelden — de meeste particuliere tanks vallen onder de eerste categorie.\n\nDe keuring zelf is beperkt in kost: reken doorgaans op €100 tot €300, waarbij een ondergrondse tank duurder uitvalt dan een bovengrondse.",
      },
      {
        heading: "Groene, oranje of rode dop: wat betekent de kleur?",
        body: "Na elke controle brengt de erkende technicus een merkplaatje of dop aan op de vulleiding, en levert hij een attest (conformiteitsattest) af. De kleur bepaalt of de tank nog gebruikt en bijgevuld mag worden — en is dus cruciale informatie voor een koper.\n\nStaat uw tank op oranje, dan moet u hem binnen de zes maanden opnieuw conform laten maken. Staat hij op rood, dan is bijvullen verboden en moet de technicus de toestand binnen de 14 dagen melden. Een leverancier mag een tank met rode dop niet vullen.",
        table: {
          headers: ["Kleur", "Betekenis", "Gevolg"],
          rows: [
            ["Groen", "Tank voldoet aan de wettelijke bepalingen", "Normaal gebruik en bijvullen toegelaten"],
            ["Oranje", "Tank niet conform, maar geen directe verontreiniging buiten de tank", "Nog maximaal 6 maanden bijvullen; intussen in orde laten stellen"],
            ["Rood", "Tank niet conform", "Bijvullen verboden; technicus meldt dit binnen 14 dagen"],
          ],
        },
      },
      {
        heading: "Wat moet u bij verkoop meedelen en aanleveren?",
        body: "Een veelgehoord misverstand: er bestaat géén wettelijke verplichting om de stookolietank opnieuw te laten keuren bij de verkoop van uw woning. De eigendomsoverdracht is niet gekoppeld aan een herkeuring. Wat wél geldt:\n\n1. **Informatieplicht**: u moet de koper correct informeren over de aanwezigheid en de toestand van de tank — ook over een oude, ongebruikte tank in de tuin of kelder.\n2. **Attesten voorleggen**: u moet de attesten van de laatste controles (en het attest van buitengebruikstelling, als de tank buiten dienst is) kunnen bezorgen aan de koper. Een tank die nog in gebruik is, hoort een groene dop of merkplaat te hebben.\n3. **Vermelding in het compromis**: de aanwezigheid van de tank en de beschikbare attesten worden best expliciet opgenomen in de verkoopbelofte of het compromis. Zo vermijdt u discussies achteraf.\n\nIn de praktijk vragen de meeste notarissen een geldig keuringsattest vóór het verlijden van de akte. Ontbreekt dat, dan is de woning nog steeds verkoopbaar, maar moet dit duidelijk aan de koper gemeld worden — en zal die het vaak als drukkingsmiddel gebruiken om de prijs te verlagen. Meer over de volledige documentenlijst leest u in ons artikel over keuringen bij de verkoop van een woning.",
      },
      {
        heading: "Tank niet meer in gebruik? Leegmaken, reinigen en verwijderen of opvullen",
        body: "Schakelde u ooit over op aardgas of een warmtepomp, dan mag de oude mazouttank niet gewoon blijven liggen. Bij een definitieve buitengebruikstelling moet de tank door een erkend technicus **geledigd en gereinigd** worden. Daarna geldt:\n\n• Een **ondergrondse tank** moet in principe **verwijderd** worden. Enkel als dat technisch niet haalbaar is — bijvoorbeeld omdat de stabiliteit van de woning in gevaar komt — mag hij na reiniging opgevuld worden met een inert materiaal zoals zand of schuim. Sinds 2025 moet de technicus schriftelijk motiveren waarom verwijdering niet mogelijk is.\n• Een **bovengrondse particuliere tank** van minder dan 6.000 liter moet niet verwijderd worden, maar wel professioneel geledigd en gereinigd.\n\nDe technicus levert een **attest van buitengebruikstelling** af, met zijn naam en erkenningsnummer. Dat attest is uw bewijs naar de koper en de notaris toe dat alles reglementair gebeurde. Bewaar het zorgvuldig.\n\nBelangrijk voor wie nu verkoopt: sinds **1 januari 2026** is de termijn om een ongebruikte tank definitief buiten gebruik te stellen verkort van vijf naar **twee jaar**. Een lekkende tank moet u onmiddellijk laten leegmaken en reinigen. Een tank die al jaren ongebruikt en zonder attest ligt te wachten, is dus niet langer een detail — het is een niet-nageleefde wettelijke verplichting die bij de verkoop op tafel komt.",
      },
      {
        heading: "Lek gehad? Zo werkt het Promaz-fonds vandaag",
        body: "Een lekkende stookolietank kan de bodem ernstig verontreinigen, en een bodemsanering loopt al snel op tot €20.000 à €50.000 — in zware gevallen zelfs honderdduizenden euro's. Voor die situaties bestaat het Promaz-fonds, gefinancierd door de mazoutsector.\n\nDe belangrijkste aanvraagperiode is intussen afgesloten: voor bodemverontreinigingen die **vóór 28 februari 2025** gekend waren, kon u tot die datum een aanvraag indienen. Ongeveer 5.700 particulieren en bedrijven deden dat; die dossiers worden nog steeds behandeld. Voor oude, al gekende verontreinigingen kan géén nieuwe aanvraag meer worden gedaan.\n\nMaar Promaz is niet verdwenen. Voor **nieuwe incidenten** — een lek dat wordt vastgesteld ná 28 februari 2025, bijvoorbeeld bij een keuring of buitengebruikstelling in aanloop naar uw verkoop — kunt u zich sinds 1 maart 2025 nog steeds aanmelden. Promaz neemt dan de sanering operationeel over. De tussenkomst bedraagt maximaal **€100.000 (incl. btw) per terrein** voor een gebouw met woonfunctie. Uw eigen bijdrage blijft beperkt: maximaal €525 (excl. btw) als u nog met mazout verwarmt; verwarmt u sinds 8 mei 2019 niet meer met mazout, dan komt daar een franchise van €1.000 bij. Hebt u een brandverzekering die bodemverontreiniging dekt, dan moet u die eerst aanspreken; Promaz vult aan. Let op: de kosten voor het verwijderen van de tank zelf worden niet vergoed, tenzij dat noodzakelijk is voor de sanering.",
      },
      {
        heading: "Kostenordes — en waarom de tank verzwijgen de duurste optie is",
        body: "Voor een verkoper zijn dit de gebruikelijke kostenordes (richtprijzen, afhankelijk van volume en bereikbaarheid):\n\n• Keuring van de tank: **€100 – €300**\n• Bovengrondse tank laten verwijderen: **€700 – €1.500**\n• Ondergrondse tank laten verwijderen: **€1.200 – €2.500**\n• Tank laten opvullen met inert materiaal: **€400 – €1.000**\n• Bodemsanering na een lek: **€20.000 – €50.000 of meer** (grotendeels gedekt via Promaz als de verontreiniging pas nu wordt vastgesteld)\n\nDe verleiding is soms groot om een oude tank simpelweg niet te vermelden — hij ligt toch onder de grond. Dat is juridisch de slechtste keuze die u kunt maken. Blijkt na de verkoop dat er een verzwegen of lekkende tank aanwezig is, dan kan de koper zich beroepen op de regels rond verborgen gebreken. Verzweeg u de tank bewust, dan bent u te kwader trouw: het exoneratiebeding in de akte ('verkocht in de staat waarin het zich bevindt') beschermt u dan niet meer, en de koper kan naast een prijsvermindering of ontbinding ook een volledige schadevergoeding vorderen — inclusief saneringskosten. Lees hierover meer in ons artikel over verborgen gebreken bij de verkoop. Transparantie is dus niet alleen correct, ze is ook financieel de veiligste weg.",
      },
      {
        heading: "Verkopen met een oude of niet-conforme mazouttank: het kan ook zonder rompslomp",
        body: "Wie klassiek verkoopt, moet de tanksituatie vooraf regulariseren of aanvaarden dat kopers afhaken of stevig onderhandelen: een keuring inplannen, eventueel de tank laten verwijderen of opvullen, attesten verzamelen en alles correct in het compromis laten opnemen. Haalbaar, maar het kost tijd en geld — zeker bij een geërfde woning waar niemand nog weet welke attesten ooit zijn opgemaakt.\n\nEr bestaat een alternatief. Bij een directe verkoop aan wijkopenpanden.be kopen wij uw woning in de huidige staat — óók met een oude, ongekeurde of niet-conforme stookolietank. De kosten voor buitengebruikstelling of verwijdering verrekenen we transparant in ons schriftelijk gemotiveerd bod, zodat u exact ziet hoe we tot ons cijfer komen. U hoeft zelf geen technicus of aannemer aan te sturen: wij coördineren de nodige attesten met de notaris.\n\nHet bod is gratis en vrijblijvend: u ontvangt binnen 2 uur een reactie, ook in het weekend, en een bezoek volgt doorgaans binnen 48 uur. Wij betalen uit eigen middelen, u betaalt geen makelaarscommissie, en de akte wordt doorgaans 2 à 3 maanden na akkoord verleden. Zo wordt een mazouttank een verrekenpost in plaats van een struikelblok.",
      },
    ],
    relatedArticles: ["keuringen-bij-verkoop-woning", "bodemattest-vlaanderen-verkoop", "verborgen-gebreken-woning-verkoop-belgie", "keuringen-attesten-bij-directe-verkoop", "pand-in-slechte-staat-verkopen", "verkoopbelofte-compromis-akte"],
    relatedSituations: ["huis-verkopen-bij-erfenis", "opknappand-verkopen"],
    faqs: [
      {
        question: "Moet ik mijn stookolietank laten keuren als ik mijn huis verkoop?",
        answer:
          "Nee, een herkeuring bij verkoop is wettelijk niet verplicht: de eigendomsoverdracht is niet gekoppeld aan een keuring. U moet wel de attesten van de laatste controles kunnen voorleggen en de koper correct informeren. In de praktijk vragen de meeste notarissen een geldig keuringsattest vóór het verlijden van de akte, dus een recente keuring (doorgaans €100 à €300) vermijdt discussies en vertraging.",
      },
      {
        question: "Wat betekent een rode dop of merkplaat op mijn mazouttank?",
        answer:
          "Een rode dop of merkplaat betekent dat de tank niet voldoet aan de wettelijke bepalingen: bijvullen is verboden en de technicus moet de toestand binnen de 14 dagen melden. Een oranje markering betekent niet-conform zonder direct verontreinigingsgevaar: u mag nog maximaal 6 maanden bijvullen en moet de tank intussen in orde laten stellen. Enkel een groene markering staat voor een conforme tank.",
      },
      {
        question: "Moet een oude ondergrondse mazouttank verwijderd worden vóór de verkoop?",
        answer:
          "Een ondergrondse tank die definitief buiten gebruik is, moet in principe geledigd, gereinigd én verwijderd worden door een erkend technicus. Enkel als verwijdering technisch niet haalbaar is, mag de tank opgevuld worden met inert materiaal zoals zand of schuim. Sinds 1 januari 2026 moet dit binnen de twee jaar na het stopzetten van het gebruik gebeuren. De technicus levert een attest van buitengebruikstelling af dat u aan de koper bezorgt.",
      },
      {
        question: "Kan ik nog een tussenkomst aanvragen bij het Promaz-fonds?",
        answer:
          "Dat hangt af van wanneer de verontreiniging werd vastgesteld. Voor verontreinigingen die al vóór 28 februari 2025 gekend waren, is de aanvraagtermijn verstreken. Wordt een lek pas nu vastgesteld — bijvoorbeeld bij een keuring of verwijdering in aanloop naar uw verkoop — dan kunt u zich nog steeds aanmelden. Promaz neemt de sanering dan over, met een plafond van €100.000 per terrein voor gebouwen met woonfunctie en een beperkte eigen bijdrage.",
      },
      {
        question: "Wat kost het om een mazouttank te laten verwijderen of opvullen?",
        answer:
          "Reken voor het verwijderen van een bovengrondse tank doorgaans op €700 à €1.500 en voor een ondergrondse tank op €1.200 à €2.500, afhankelijk van het volume en de bereikbaarheid. Het opvullen met inert materiaal, als verwijderen niet mogelijk is, kost gemiddeld €400 à €1.000. Bij een verkoop aan wijkopenpanden.be hoeft u dit niet vooraf te regelen: wij verrekenen deze kosten transparant in ons bod.",
      },
      {
        question: "Wat riskeer ik als ik de mazouttank verzwijg bij de verkoop?",
        answer:
          "Veel. Ontdekt de koper na de verkoop een verzwegen of lekkende tank, dan kan hij zich beroepen op de regels rond verborgen gebreken. Bij bewust verzwijgen bent u te kwader trouw en beschermt de exoneratieclausule in de akte u niet: de koper kan prijsvermindering of ontbinding vorderen, plus volledige schadevergoeding — inclusief saneringskosten die tot tienduizenden euro's oplopen. Meld de tank dus altijd en neem de attesten op in het compromis.",
      },
    ],
  },
  {
    slug: "woning-verkopen-via-biddit",
    title: "Uw woning verkopen via Biddit: kosten, verloop en voor wie het loont",
    metaTitle: "Woning verkopen via Biddit: kosten & verloop (2026)",
    metaDescription:
      "Uw woning verkopen via Biddit? Zo werkt de online openbare verkoop: instelprijs, biedweek, bindende biedingen zonder financieringsvoorbehoud en kosten.",
    publishedAt: "2026-07-02",
    updatedAt: "2026-07-02",
    intro:
      "Biddit is het online veilingplatform van de Belgische notarissen, gelanceerd in het najaar van 2018. Wie zijn woning via Biddit verkoopt, kiest voor een openbare verkoop in digitale vorm: kandidaat-kopers bieden gedurende acht dagen tegen elkaar op, en het hoogste bod is bindend — zonder opschortende voorwaarde voor een lening. Dat klinkt aantrekkelijk voor wie zekerheid zoekt, maar het traject heeft ook een eigen kostenplaatje, een vaste doorlooptijd en een onzekere eindprijs. In dit artikel leest u hoe een Biddit-verkoop stap voor stap verloopt, wat het u als verkoper kost, wanneer een openbare verkoop verplicht of aangewezen is, en hoe het platform zich verhoudt tot een klassieke onderhandse verkoop of een directe verkoop aan een opkoper.",
    sections: [
      {
        heading: "Hoe verloopt een verkoop via Biddit stap voor stap?",
        body: "Een Biddit-verkoop loopt volledig via de notaris. U kunt niet zelf een zoekertje plaatsen: de notaris stelt het dossier samen, organiseert de publiciteit en volgt de biedingen op. Het traject ziet er doorgaans zo uit:\n\n1. **Dossiervoorbereiding.** De notaris verzamelt vooraf alle attesten en doet de wettelijke opzoekingen (EPC, bodemattest, stedenbouwkundige inlichtingen, hypothecaire staat). Bij Biddit gebeurt dit vóór de biedingen, niet erna — kandidaat-kopers weten dus exact wat ze kopen.\n2. **Instelprijs en minimumprijs.** Samen met de notaris bepaalt u een startprijs die het bieden op gang moet trekken, én een minimumbedrag waaronder u niet wil verkopen. Die ondergrens blijft vertrouwelijk.\n3. **Publiciteit en bezoekdagen.** Het pand staat doorgaans minstens vier weken zichtbaar op biddit.be, met vastgelegde kijkmomenten.\n4. **De biedweek.** Kandidaten die zich registreren met eID of itsme bieden gedurende **acht kalenderdagen**. Komt er in de laatste vijf minuten een hoger bod binnen, dan verlengt de termijn telkens met vijf minuten — last-minute snipen is dus uitgesloten.\n5. **Toewijzing.** De hoogste bieder ondertekent binnen tien werkdagen het proces-verbaal van toewijzing bij de notaris. De koper betaalt de aktekosten kort na de toewijzing en de volledige prijs binnen zes weken.",
      },
      {
        heading: "Rode of blauwe Biddit: openbare verkoop of online onderhandse verkoop",
        body: "Minder bekend: op Biddit bestaan twee formules, in de praktijk vaak de \"rode\" en de \"blauwe\" Biddit genoemd.\n\n• **De rode Biddit (online openbare verkoop).** Dit is de echte veiling: na afloop van de biedweek is het hoogste bod automatisch bindend, tenzij het onder uw minimumprijs blijft. De koper kan zich niet beroepen op een opschortende voorwaarde voor zijn lening en moet de prijs binnen zes weken betalen.\n• **De blauwe Biddit (online verkoop uit de hand).** Hier gebruikt de notaris het biedplatform, maar blijft de verkoop juridisch onderhands. U beslist zelf of u het hoogste bod aanvaardt, opschortende voorwaarden zijn mogelijk en de koper heeft tot vier maanden tussen overeenkomst en akte om zijn financiering te regelen.\n\nVoor u als verkoper is dat verschil wezenlijk. De rode formule geeft maximale zekerheid en snelheid ná de toewijzing, maar schrikt kopers af die een woonkrediet nodig hebben en dat niet vooraf rond krijgen. De blauwe formule houdt een groter kopubliek aan boord, maar dan verkoopt u opnieuw met de klassieke onzekerheden van een onderhandse verkoop.",
      },
      {
        heading: "Bindende biedingen zonder financieringsvoorbehoud: zekerheid met een prijs",
        body: "Het grootste verschil met een onderhandse verkoop zit in het bindende karakter van de biedingen. Wie op een openbare Biddit-verkoop biedt, verbindt zich definitief: er is **geen opschortende voorwaarde voor het verkrijgen van een krediet**, tenzij de verkoopvoorwaarden dat uitzonderlijk uitdrukkelijk voorzien. Weigert de hoogste bieder te tekenen of te betalen, dan stelt hij zich bloot aan een schadevergoeding.\n\nVoor u als verkoper betekent dat: geen koper die drie weken na het compromis afhaakt omdat de bank weigert, geen heronderhandeling na de bouwkeuring. De notaris kan bovendien al tijdens het bieden de identiteit en solvabiliteit van bieders nagaan.\n\nDe keerzijde is dat u vist in een kleinere vijver. Kandidaten moeten hun financiering volledig rond hebben vóór ze bieden en de volledige prijs binnen zes weken kunnen storten. Jonge gezinnen die krap lenen, haken daardoor vaak af. Uw publiek bestaat dan vooral uit kopers met eigen middelen, investeerders en professionelen — kapitaalkrachtig, maar doorgaans ook prijsbewuster dan een verliefde particulier op de onderhandse markt. Volgens cijfers van Fednot trok een Biddit-verkoop in de eerste vijf jaar gemiddeld zes bieders en 45 biedingen per pand, wat aantoont dat het opbod wel degelijk kan spelen — als het pand voldoende interesse wekt.",
      },
      {
        heading: "Wat kost verkopen via Biddit?",
        body: "Bij een openbare verkoop betaalt de koper de aktekosten grotendeels via een geforfaitiseerd bedrag dat bovenop de prijs komt: registratiebelasting, notarieel ereloon en administratieve kosten. Dat betekent echter niet dat de verkoop voor u gratis is.\n\n• **Tekoopstellingskosten.** U vergoedt de kosten van publiciteit, bezoekdagen, het Biddit-platform en de voorafgaande opzoekingen. Die zijn variabel, maar lopen doorgaans op tot **enkele duizenden euro's** — vaak 3.000 à 5.000 euro, en meer als u extra publiciteit of bezoekdagen wil. Vraag uw notariskantoor vooraf een raming.\n• **Verschil met het forfait.** Ligt het werkelijke kostenplaatje hoger dan het forfait dat de koper betaalt, dan is dat verschil voor uw rekening.\n• **Kosten bij mislukking.** Haalt geen enkel bod uw minimumprijs en beslist u niet te verkopen, dan bent u de gemaakte publiciteits- en dossierkosten doorgaans toch kwijt.\n\nTer vergelijking: een vastgoedmakelaar rekent in Vlaanderen doorgaans zo'n 3% commissie plus 21% btw, maar enkel bij effectieve verkoop. Bij een woning van 250.000 euro komen makelaarskosten en Biddit-kosten dus in dezelfde orde van grootte uit — het verschil zit vooral in wanneer u betaalt en of u betaalt zonder resultaat.",
      },
      {
        heading: "Biddit, onderhandse verkoop of directe verkoop: de vergelijking",
        body: "Elke verkoopvorm heeft een eigen evenwicht tussen snelheid, zekerheid, kosten en bereik. De tabel hieronder zet de drie routes naast elkaar. Reken voor een volledig Biddit-traject op ruwweg twee tot drie maanden: dossiervoorbereiding, minstens vier weken publiciteit, acht dagen biedweek en zes weken betaaltermijn. Dat is sneller dan een moeizame onderhandse verkoop, maar niet sneller dan een vlotte — en over de looptijd van een klassieke verkoop leest u meer in ons artikel over hoelang een huisverkoop in België duurt.",
        table: {
          headers: ["", "Biddit (openbare verkoop)", "Onderhands via makelaar", "Directe verkoop aan opkoper"],
          rows: [
            ["Snelheid", "Ca. 2 à 3 maanden: publiciteit, biedweek van 8 dagen, betaling binnen 6 weken", "Sterk variabel: van enkele weken tot vele maanden, plus 3-4 maanden tot de akte", "Bod binnen dagen; akte doorgaans 2 à 3 maanden na akkoord"],
            ["Zekerheid", "Hoog na toewijzing: bindend bod, geen financieringsvoorbehoud; wél onzekere eindprijs", "Compromis vaak met opschortende voorwaarde krediet; kans dat de koper afhaakt", "Hoog: schriftelijk bod, betaling uit eigen middelen, geen financieringsvoorbehoud"],
            ["Kosten verkoper", "Tekoopstellingskosten, doorgaans enkele duizenden euro's, ook zonder verkoop", "Commissie doorgaans ca. 3% + btw, enkel bij verkoop", "Geen commissie; het bod is een nettobedrag"],
            ["Publiek en prijs", "Iedereen kan meebieden, maar enkel kopers met rondgemaakte financiering; prijs bepaald door opbod", "Breedste publiek, ook kopers met krediet; onderhandelde marktprijs", "Eén professionele koper; gemotiveerd bod, doorgaans onder de topprijs van de markt in ruil voor zekerheid"],
          ],
        },
      },
      {
        heading: "Wanneer is een openbare verkoop verplicht of aangewezen — en wat zijn de risico's?",
        body: "In een aantal situaties is de openbare verkoop niet zomaar een keuze, maar de wettelijke standaard. Het Gerechtelijk Wetboek schrijft in principe een openbare verkoop voor bij vastgoed van **minderjarigen en beschermde personen onder bewind** (art. 1186-1187 Ger.W.), al kan de vrederechter een onderhandse verkoop toestaan als die in het belang van de beschermde persoon is. Ook bij een **gerechtelijke vereffening-verdeling** — wanneer erfgenamen of ex-partners niet tot een akkoord komen over een woning in onverdeeldheid — kan de rechtbank de openbare verkoop bevelen. Bij een **faillissement** kiest de curator, met machtiging, tussen openbare of onderhandse verkoop.\n\nBuiten die gevallen loont Biddit vooral voor courante, correct geprijsde panden in gegeerde buurten, waar meerdere bieders elkaar kunnen opjagen, en voor verkopers die een objectieve, transparante prijsvorming willen — bijvoorbeeld erfgenamen die elke discussie over de prijs willen vermijden.\n\nHet grootste risico blijft de uitkomst: haalt geen bod uw minimumprijs, dan hoeft u niet te verkopen, maar bent u wel de tekoopstellingskosten kwijt en staat uw pand publiek te boek als \"niet toegewezen\". En anders dan soms gedacht garandeert een veiling geen topprijs: bij beperkte interesse blijft het opbod uit en eindigt u mogelijk onder wat een onderhandse verkoop had opgebracht.",
      },
      {
        heading: "De derde weg: dezelfde zekerheid, zonder veiling",
        body: "Wat verkopers in Biddit aantrekt, is de zekerheid: een bindend bod van een koper die niet afhangt van een bank. Maar die zekerheid bestaat ook zonder openbare verkoop, zonder vier weken publiciteit, zonder bezoekdagen en zonder tekoopstellingskosten die u ook bij een mislukte veiling betaalt.\n\nBij wijkopenpanden.be verkoopt u rechtstreeks aan een lokale opkoper in de regio Antwerpen:\n\n• U vraagt een **gratis en vrijblijvend bod** aan en krijgt binnen 2 uur reactie, ook in het weekend.\n• Een plaatsbezoek volgt doorgaans binnen 48 uur, waarna u een **schriftelijk, gemotiveerd bod** ontvangt.\n• Wij kopen in de huidige staat en betalen **uit eigen middelen** — net als bij Biddit is er geen financieringsvoorbehoud, dus geen koper die achteraf afhaakt.\n• Er is geen makelaarscommissie en geen publiciteitskost; de akte volgt doorgaans 2 à 3 maanden na akkoord.\n\nTwijfelt u tussen de veiling, de makelaar en de directe verkoop? Vraag dan eerst een vrijblijvend bod aan. Zo weet u binnen enkele dagen welk nettobedrag de directe weg oplevert, en kunt u dat met kennis van zaken afwegen tegen een Biddit-traject van meerdere maanden met onzekere uitkomst.",
      },
    ],
    relatedArticles: ["commissie-makelaar-belgie", "notariskosten-woning-verkoop", "verkoop-kosten-berekenen", "hoelang-duurt-huis-verkopen-belgie", "opkoper-of-makelaar-verschil", "wat-is-mijn-woning-waard-antwerpen"],
    relatedSituations: ["huis-verkopen-bij-erfenis", "verkopen-zonder-makelaar"],
    faqs: [
      {
        question: "Is een bod op Biddit altijd bindend?",
        answer:
          "Bij de online openbare verkoop (de \"rode\" Biddit) wel: elk bod is definitief en het hoogste bod bindt de koper zodra de biedweek sluit. Er geldt geen opschortende voorwaarde voor een lening, tenzij de verkoopvoorwaarden dat uitzonderlijk voorzien. Bij de \"blauwe\" Biddit — een onderhandse verkoop via het platform — beslist u als verkoper zelf of u een bod aanvaardt en zijn opschortende voorwaarden wel mogelijk.",
      },
      {
        question: "Wat gebeurt er als het hoogste bod onder mijn minimumprijs blijft?",
        answer:
          "U bent niet verplicht te verkopen. Vooraf spreekt u met de notaris een vertrouwelijke minimumprijs af; blijft het hoogste bod daaronder, dan kunt u weigeren of eventueel het tweede bod laten bekijken. Houd er wel rekening mee dat de gemaakte publiciteits- en dossierkosten doorgaans voor uw rekening blijven, ook als het pand uiteindelijk niet wordt toegewezen.",
      },
      {
        question: "Hoeveel kost een woning verkopen via Biddit?",
        answer:
          "De koper betaalt bovenop de prijs een geforfaitiseerd bedrag voor aktekosten en registratiebelasting. Als verkoper draagt u de tekoopstellingskosten: publiciteit, bezoekdagen, platformkosten en voorafgaande opzoekingen. Reken doorgaans op enkele duizenden euro's, vaak 3.000 à 5.000 euro, afhankelijk van hoeveel publiciteit u wenst. Vraag uw notariskantoor vooraf een concrete raming, want de bedragen verschillen per dossier.",
      },
      {
        question: "Hoe lang duurt een volledig Biddit-traject?",
        answer:
          "Reken op ruwweg twee tot drie maanden. De notaris bereidt eerst het dossier met alle attesten voor, daarna staat het pand doorgaans minstens vier weken op biddit.be met bezoekdagen. De biedweek zelf duurt acht kalenderdagen, met automatische verlenging bij late biedingen. Na de toewijzing tekent de koper binnen tien werkdagen het proces-verbaal en betaalt hij de prijs binnen zes weken.",
      },
      {
        question: "Brengt een openbare verkoop meer op dan een onderhandse verkoop?",
        answer:
          "Dat is niet gegarandeerd. Bij voldoende interesse kan het opbod de prijs boven de verwachting tillen — gemiddeld telde een Biddit-verkoop in de eerste vijf jaar zes bieders en 45 biedingen. Maar omdat enkel kandidaten met rondgemaakte financiering kunnen bieden, is het publiek kleiner dan op de onderhandse markt. Bij beperkte belangstelling blijft het opbod uit en kan de eindprijs lager uitvallen.",
      },
      {
        question: "Wanneer is een openbare verkoop verplicht?",
        answer:
          "In principe bij de verkoop van vastgoed van minderjarigen en beschermde personen onder bewind (art. 1186-1187 Ger.W.), al kan de vrederechter een onderhandse verkoop machtigen. Ook bij een gerechtelijke vereffening-verdeling — bijvoorbeeld erfgenamen die niet uit onverdeeldheid raken — kan de rechtbank de openbare verkoop bevelen. Bij faillissement kiest de curator, met de nodige machtiging, tussen openbaar en onderhands.",
      },
    ],
  },
  {
    slug: "woning-verkopen-verhuis-woonzorgcentrum",
    title: "De woning verkopen bij een verhuis naar het woonzorgcentrum: kosten, zorgbudget en timing",
    metaTitle: "Woning verkopen bij verhuis naar woonzorgcentrum (2026)",
    metaDescription:
      "Een woonzorgcentrum kost gemiddeld 2.294 euro per maand. Wat betekent de verkoop van de woning voor zorgbudget, OCMW en kinderen? Regels en timing.",
    publishedAt: "2026-07-02",
    updatedAt: "2026-07-02",
    intro:
      "Een verhuis naar het woonzorgcentrum is zelden een louter financiële beslissing, maar de cijfers dwingen wel tot keuzes. Een kamer kost in Vlaanderen gemiddeld 74,52 euro per dag, ruim 2.200 euro per maand zonder supplementen, terwijl het gemiddelde netto pensioen rond 1.700 euro ligt. De gezinswoning is dan vaak het grootste spaarpotje, maar de verkoop ervan heeft gevolgen: voor het zorgbudget voor ouderen, voor een eventuele OCMW-tussenkomst en voor wat de kinderen later erven. In dit artikel zetten we op een rij wat een woonzorgcentrum vandaag echt kost, hoe de verkoop van de woning meetelt in de inkomenstoets, wat de alternatieven zijn en waarom jarenlange leegstand meestal de duurste keuze is.",
    sections: [
      {
        heading: "Wat kost een woonzorgcentrum vandaag echt?",
        body: "Volgens de meest recente dagprijsmeting van het Departement Zorg (mei 2025, 816 woonzorgcentra) kost een woongelegenheid in een Vlaams woonzorgcentrum gemiddeld **74,52 euro per dag**. Openbare voorzieningen zijn gemiddeld het goedkoopst (70,45 euro), commerciële het duurst (80,66 euro). Het goedkoopste woonzorgcentrum rekent 40,72 euro per dag, het duurste bijna 159 euro.\n\nOp maandbasis komt dat volgens de OKRA-barometer 2025 neer op gemiddeld **2.294 euro zonder supplementen**. Daarbovenop komen nog variabele kosten: medicatie, dokter, was, kapper, telefonie. Voor die extra's bestaat geen wettelijk maximum, al moeten ze wel gedetailleerd op de factuur staan.\n\nZet daar het gemiddelde netto pensioen tegenover — 1.701 euro per maand, voor wie een zuivere werknemersloopbaan had zelfs maar 1.523 euro — en het tekort loopt al snel op tot **600 à 770 euro per maand**. Wie in het woonzorgcentrum verblijft, ontvangt doorgaans wel het zorgbudget voor zwaar zorgbehoevenden (140 euro per maand), maar dat dicht de kloof niet. Het verschil moet uit spaargeld, uit de kinderen of uit de woning komen.",
      },
      {
        heading: "Het zorgbudget voor ouderen: wat verandert er als u de woning verkoopt?",
        body: "Naast het zorgbudget voor zwaar zorgbehoevenden bestaat het **zorgbudget voor ouderen met een zorgnood** (het vroegere THAB): 110 tot 739 euro per maand vanaf 66 jaar, afhankelijk van de zorgzwaarte én van een strenge inkomens- en vermogenstoets. Niet alleen pensioen telt mee, maar ook spaargeld, beleggingen, eigendommen en de opbrengst van een verkochte of geschonken woning.\n\nZolang u de woning gewoon bezit, weegt ze verrassend licht: er wordt gerekend met het **niet-geïndexeerde kadastraal inkomen**, waarvan de eerste schijf (743,68 euro) is vrijgesteld. Voor veel bescheiden gezinswoningen betekent dat: nauwelijks of geen impact.\n\nVerkoopt u, dan verandert dat fundamenteel. De zorgkas rekent dan een **fictief inkomen van 6% op de verkoopwaarde** aan — niet op wat er van het geld overblijft. Er gelden wel correcties: bij de verkoop van de enige woning wordt een vrijstelling van circa 37.200 euro toegepast, en per verstreken jaar sinds de verkoop komt daar een abattement van 1.500 euro bij. In de praktijk leidt een verkoop volgens het Departement Zorg meestal tot een **vermindering of stopzetting** van het zorgbudget.\n\nTwee zaken zijn cruciaal:\n\n• U bent verplicht de verkoop of schenking **binnen drie maanden** te melden aan uw zorgkas; anders worden onterecht betaalde bedragen teruggevorderd.\n\n• Laat vóór de verkoop door de zorgkas, het ziekenfonds of de dienst maatschappelijk werk **doorrekenen** wat de impact is. Vaak weegt het weggevallen zorgbudget niet op tegen de verkoopopbrengst, maar u beslist beter met cijfers dan met veronderstellingen.",
      },
      {
        heading: "Wat als het geld op is? OCMW-steun en de onderhoudsplicht van kinderen",
        body: "Volstaan pensioen, spaargeld en zorgbudgetten niet, dan kan de bewoner aankloppen bij het **OCMW van de gemeente waar hij was ingeschreven**. Het OCMW past dan het verschil tussen de factuur en de eigen middelen bij.\n\nWie nog een woning bezit, moet er rekening mee houden dat het OCMW verwacht dat dit vermogen eerst wordt aangesproken. Het OCMW kan zijn tussenkomst bovendien veiligstellen via een **wettelijke hypotheek op de woning**: de steun wordt dan later gerecupereerd uit de verkoop of de nalatenschap. Gratis is de OCMW-tussenkomst voor eigenaars dus zelden.\n\nDaarnaast bestaat de **onderhoudsplicht van kinderen**. Het OCMW mag zijn kosten terugvorderen bij de kinderen volgens een wettelijke schaal (KB van 9 mei 1984): pas vanaf een netto belastbaar jaarinkomen van 29.043,35 euro (plus 4.066,07 euro per persoon ten laste) kan een bijdrage worden gevraagd, verdeeld per kind. Wie bijdraagt, kan 80% daarvan fiscaal inbrengen.\n\nElk OCMW beslist zelf of het die terugvordering toepast. Bij een telling van VRT NWS in 2023 deden 272 van de 300 Vlaamse gemeenten dat nog, terwijl 28 gemeenten de onderhoudsplicht hadden afgeschaft — en de politieke druk om ze overal af te schaffen groeit. Informeer dus altijd bij het concrete OCMW; de verschillen tussen gemeenten zijn groot.",
      },
      {
        heading: "Verkopen, verhuren of laten leegstaan: de nuchtere vergelijking",
        body: "Voor de gezinswoning zijn er na de verhuis drie scenario's. Verhuren lijkt aantrekkelijk — de woning blijft in de familie en er komt maandelijks geld binnen — maar de huur van een doorsnee gezinswoning dekt zelden de volledige maandfactuur van het woonzorgcentrum, en u wordt op uw tachtigste of negentigste (of via de kinderen) wél verhuurder, met alle verplichtingen van dien: conformiteit, herstellingen, EPC-eisen, risico op wanbetaling. Een uitgebreide afweging leest u in ons artikel over verhuren of verkopen in Antwerpen.\n\nLaten leegstaan is bijna altijd de slechtste optie, zoals we hieronder toelichten. Verkopen geeft als enige scenario volledige zekerheid: de zorgkosten zijn voor jaren gedekt en er blijft niets 'hangen' dat beheerd moet worden.",
        table: {
          headers: ["", "Verkopen", "Verhuren", "Laten leegstaan"],
          rows: [
            ["Maandelijkse opbrengst", "Eenmalig kapitaal dat jaren dagprijs dekt", "Huur, dekt zelden de volledige factuur", "Geen — alleen kosten"],
            ["Impact zorgbudget ouderen", "6% van verkoopwaarde telt als fictief inkomen; vaak vermindering of verlies", "Niet-geïndexeerd KI telt mee (eerste 743,68 euro vrijgesteld)", "Idem: KI telt mee"],
            ["Beheer en risico", "Geen, na de akte", "Onderhoud, huurdersrisico, conformiteitseisen", "Verval, inbraak, verzekeringsdiscussies"],
            ["Extra heffingen", "Geen", "Onroerende voorheffing loopt door", "Onroerende voorheffing + mogelijke leegstandsheffing"],
            ["Geschikt als", "Zorgkosten structureel gedekt moeten zijn", "Woning in goede staat, familie wil beheren", "Eigenlijk nooit als bewuste strategie"],
          ],
        },
      },
      {
        heading: "De klassieke fout: de woning jaren laten leegstaan 'voor later'",
        body: "In de praktijk gebeurt vaak dit: de woning blijft 'nog even' staan zoals ze was, met de inboedel erin, voor als vader of moeder terugkeert of tot de familie eruit is wat ermee moet gebeuren. Uit die tijdelijke situatie groeien jaren van leegstand — en die kosten stevig:\n\n• **Vaste kosten lopen door**: onroerende voorheffing, verzekering, verwarming op waakstand, nutsvoorzieningen, tuinonderhoud.\n\n• **Gemeenten belasten leegstand**: wie op de leegstandsregister belandt, riskeert een jaarlijkse heffing die snel oploopt (zie ons artikel over de leegstandsheffing in Antwerpen).\n\n• **De woning veroudert dubbel**: vocht en sluipende gebreken bij gebrek aan bewoning, terwijl de energie- en renovatie-eisen voor kopers strenger worden. Elke winter leegstand knabbelt aan de verkoopprijs.\n\n• **Verzekeraars stellen voorwaarden** bij langdurige leegstand; bij schade dreigen discussies over de dekking.\n\nFiscaal is er intussen weinig reden om te wachten: op de verkoop van de eigen gezinswoning betaalt u **geen meerwaardebelasting**, en ook wie al langer dan vijf jaar eigenaar is, blijft buiten de meerwaardebelasting van 16,5% op andere woningen. Wachten levert fiscaal dus niets op, terwijl de kosten en het waardeverlies wél doorlopen.",
      },
      {
        heading: "Timing en volmacht: praktische aandachtspunten bij de verkoop",
        body: "De timing verdient meer aandacht dan ze meestal krijgt. Vanaf de verhuisdag lopen twee kosten parallel: de dagprijs van het woonzorgcentrum én alle kosten van de woning. Elke maand dat de verkoop aansleept, kost het gezin al snel 2.500 tot 3.000 euro aan gecombineerde lasten. Een klassiek verkooptraject met makelaar duurt van eerste bezoek tot akte gemakkelijk zes tot twaalf maanden; hou daar in de financiële planning rekening mee.\n\nBelangrijk is ook **wie mag tekenen**. Zolang de eigenaar wilsbekwaam is, tekent hij of zij zelf, eventueel met een notariële volmacht voor praktische stappen. Is dat niet meer het geval, dan is een vooraf geregistreerde **zorgvolmacht** goud waard; zonder zorgvolmacht moet de vrederechter een bewindvoerder aanstellen en de verkoop machtigen, wat maanden extra kan duren. Bespreek dit tijdig met de notaris — het liefst vóór de verhuis, niet erna.\n\nMeld de verkoop tot slot binnen de drie maanden aan de zorgkas en, als de bewoner een inkomensgarantie voor ouderen (IGO) ontvangt, ook aan de pensioendienst.",
      },
      {
        heading: "Snel zekerheid nodig? Zo helpt een directe verkoop",
        body: "Bij een verhuis naar het woonzorgcentrum telt niet de allerlaatste euro, maar **tempo en zekerheid**: de zorgfactuur komt elke maand, en niemand in de familie zit te wachten op een jaar bezichtigingen in het huis van mama of papa.\n\nEen directe verkoop aan wijkopenpanden.be geeft die duidelijkheid snel. U vraagt een **gratis en vrijblijvend bod** aan en krijgt binnen 2 uur reactie, ook in het weekend. Doorgaans komen we binnen 48 uur langs en ontvangt u een **schriftelijk, gemotiveerd bod**. We kopen de woning **in de huidige staat** — ook met verouderde afwerking of een volle inboedel — zodat er niet eerst opgeruimd of opgefrist hoeft te worden. Er is geen makelaarscommissie, we betalen uit eigen middelen, en de akte volgt doorgaans twee tot drie maanden na het akkoord. U kiest bovendien mee de datum van de akte, zodat die aansluit op de verhuis en de financiële planning van het gezin.\n\nZo weet iedereen binnen enkele dagen waar het gezin aan toe is — en kan de aandacht terug naar wat echt telt: een goede start in het woonzorgcentrum.",
      },
    ],
    relatedArticles: ["verhuren-of-verkopen-antwerpen", "leegstandsheffing-antwerpen-2026", "verkoop-kosten-berekenen", "belastingen-bij-woningverkoop", "hoelang-duurt-huis-verkopen-belgie", "blijven-wonen-na-verkoop"],
    relatedSituations: ["huis-verkopen-bij-erfenis", "opknappand-verkopen"],
    faqs: [
      {
        question: "Moeten we het huis verkopen om het woonzorgcentrum te betalen?",
        answer:
          "Niet altijd, maar de rekening is vaak snel gemaakt: een kamer kost gemiddeld 2.294 euro per maand zonder supplementen, terwijl het gemiddelde netto pensioen rond 1.701 euro ligt. Volstaat het spaargeld niet om dat tekort jarenlang bij te passen, dan is de woning meestal de enige reserve. Bekijk eerst zorgbudgetten en spaargeld, en laat de impact van een verkoop vooraf doorrekenen.",
      },
      {
        question: "Verliest mijn ouder het zorgbudget als de woning verkocht wordt?",
        answer:
          "Vaak wel, geheel of gedeeltelijk. Na de verkoop rekent de zorgkas een fictief inkomen van 6% op de verkoopwaarde aan, met een vrijstelling van circa 37.200 euro voor de enige woning en 1.500 euro abattement per verstreken jaar. Volgens het Departement Zorg leidt een verkoop meestal tot vermindering of stopzetting van het zorgbudget. De verkoop moet binnen drie maanden gemeld worden aan de zorgkas.",
      },
      {
        question: "Kunnen de kinderen verplicht worden om het rusthuis mee te betalen?",
        answer:
          "Alleen als het OCMW tussenkomt én dat OCMW de onderhoudsplicht toepast. De terugvordering volgt een wettelijke schaal: pas vanaf een netto belastbaar jaarinkomen van 29.043,35 euro (plus 4.066,07 euro per persoon ten laste) wordt een bijdrage gevraagd, verdeeld over de kinderen. In 2023 pasten 272 van de 300 Vlaamse gemeenten dit toe; 28 gemeenten schaften het af. Informeer dus bij uw OCMW.",
      },
      {
        question: "Is verhuren geen beter idee dan verkopen?",
        answer:
          "Soms, maar reken realistisch: de huur van een doorsnee gezinswoning dekt zelden de volledige maandfactuur van het woonzorgcentrum, en er komt verhuurdersverantwoordelijkheid bij — onderhoud, conformiteit, huurdersrisico. Voordeel is wel dat een verhuurde woning voor het zorgbudget enkel via het kadastraal inkomen meetelt, terwijl na een verkoop 6% van de verkoopwaarde wordt aangerekend. Laat beide scenario's cijfermatig vergelijken.",
      },
      {
        question: "Betalen we belasting op de verkoop van de gezinswoning?",
        answer:
          "Nee. De verkoop van de eigen gezinswoning die als hoofdverblijfplaats werd bewoond, is vrijgesteld van meerwaardebelasting, ongeacht de winst. Stond de woning al langere tijd leeg, dan geldt doorgaans alsnog de vrijstelling voor wie meer dan vijf jaar eigenaar is. Hou wel rekening met de meldingsplicht aan de zorgkas en eventueel de pensioendienst, want daar kan de opbrengst wél gevolgen hebben.",
      },
      {
        question: "Hoe snel kan de woning verkocht zijn na de verhuis?",
        answer:
          "Via een klassiek traject met makelaar duurt het van te-koop-zetting tot akte vaak zes tot twaalf maanden, terwijl dagprijs en woningkosten doorlopen. Bij een directe verkoop aan wijkopenpanden.be krijgt u binnen 2 uur reactie, doorgaans binnen 48 uur een bezoek en een schriftelijk gemotiveerd bod; de akte volgt meestal twee tot drie maanden na het akkoord, op een datum die u mee kiest.",
      },
    ],
  },
  {
    slug: "woning-verkopen-onder-bewind",
    title: "Woning verkopen onder bewind: machtiging van de vrederechter stap voor stap",
    metaTitle: "Woning verkopen onder bewind: machtiging vrederechter (2026)",
    metaDescription:
      "Woning verkopen onder bewind? Zo vraagt de bewindvoerder de machtiging van de vrederechter aan: verzoekschrift, schatting en de fouten die u vermijdt.",
    publishedAt: "2026-07-02",
    updatedAt: "2026-07-02",
    intro:
      "Uw moeder heeft dementie en verblijft sinds kort in een woonzorgcentrum. Haar huis staat leeg, de facturen lopen op en iedereen in de familie is het erover eens: verkopen is de verstandigste keuze. Toch kunt u niet zomaar naar de notaris stappen. Zodra iemand wilsonbekwaam is, kan die persoon zelf geen geldige verkoop meer ondertekenen — en ook een bewindvoerder mag de woning niet verkopen zonder een bijzondere machtiging van de vrederechter. Die procedure is goed te doorlopen, op voorwaarde dat u de stappen in de juiste volgorde zet. In dit artikel leest u hoe de machtiging werkt, welke stukken u nodig hebt, hoelang het duurt, wat er met de opbrengst gebeurt en welke fouten een dossier maandenlang kunnen blokkeren.",
    sections: [
      {
        heading: "Waarom u niet zomaar mag verkopen bij dementie of wilsonbekwaamheid",
        body: "Een verkoop is een contract, en een contract vereist een geldige toestemming. Wie door dementie, een beroerte of een andere aandoening de gevolgen van zijn beslissingen niet meer kan inschatten, is juridisch **wilsonbekwaam** en kan die toestemming niet meer geven. De notaris die twijfelt aan de wilsbekwaamheid van de verkoper, zal weigeren de akte te verlijden — terecht, want een akte getekend door een wilsonbekwame eigenaar staat juridisch op losse schroeven.\n\nOok een volmacht die vroeger werd getekend, biedt geen uitweg: een gewone volmacht vervalt zodra de volmachtgever wilsonbekwaam wordt. En de kinderen die onderling 'regelen' dat het huis van moeder verkocht wordt? Zij zijn geen eigenaar en kunnen dus niets rechtsgeldig ondertekenen.\n\nDe wettelijke oplossing is het **bewind**, ingevoerd door de wet van 17 maart 2013. De vrederechter stelt een bewindvoerder aan — vaak een familielid, soms een advocaat — die de goederen van de beschermde persoon beheert. Maar let op: beheren is niet hetzelfde als verkopen. Voor het **vervreemden van onroerend goed** heeft de bewindvoerder altijd een bijzondere machtiging van de vrederechter nodig (art. 499/7 van het toepasselijke Burgerlijk Wetboek). Die machtiging wordt enkel verleend als de verkoop in het belang van de beschermde persoon is.",
      },
      {
        heading: "Zorgvolmacht of bewind: het verschil in één oogopslag",
        body: "Wie tijdig vooruitdenkt, kan een bewind vaak vermijden met een **zorgvolmacht**: een notariële lastgeving waarin u zelf aanduidt wie uw vermogen mag beheren — en desgewenst uw woning mag verkopen — als u het zelf niet meer kunt. Cruciaal: een zorgvolmacht kan alleen worden opgesteld zolang de persoon nog wilsbekwaam is, en ze moet geregistreerd zijn in het Centraal Register voor Lastgevingen (CRL) om te blijven werken na de wilsonbekwaamheid. Bij beginnende dementie is snel handelen dus essentieel.\n\nIs er geen (geldige) zorgvolmacht en is de eigenaar al wilsonbekwaam, dan is het bewind de enige weg. Een zorgvolmacht achteraf opstellen kan niet meer.",
        table: {
          headers: ["", "Zorgvolmacht", "Bewind"],
          rows: [
            ["Wanneer regelen", "Vooraf, zolang de persoon wilsbekwaam is", "Nadien, via verzoekschrift bij de vrederechter"],
            ["Wie beslist", "De lasthebber die u zelf koos", "De door de rechter aangestelde bewindvoerder"],
            ["Woning verkopen", "Kan zonder machtiging, als de volmacht dit voorziet", "Enkel met bijzondere machtiging van de vrederechter"],
            ["Controle", "Beperkt; de vrederechter kan ingrijpen bij misbruik", "Structureel: machtigingen en periodieke verslagen"],
            ["Doorlooptijd verkoop", "Vergelijkbaar met een gewone verkoop", "Extra weken tot maanden voor de machtiging"],
          ],
        },
      },
      {
        heading: "Stap voor stap: zo verloopt de machtigingsprocedure",
        body: "De verkoop van een woning onder bewind volgt een vaste volgorde. Wie ze respecteert, houdt het dossier op tempo.\n\n1. **Laat de woning schatten door een onafhankelijk expert.** De vrederechter beslist niet op basis van een buikgevoel of een vraagprijs, maar op basis van een recent schattingsverslag van een onafhankelijk deskundige (landmeter-expert of notaris). Dit verslag bepaalt de ondergrens van de verkoop.\n\n2. **Verzamel een concreet en aanvaardbaar bod.** Bij een onderhandse verkoop vraagt u de machtiging doorgaans pas aan wanneer er een kandidaat-koper is. Een schriftelijk, gemotiveerd bod dat de geschatte waarde haalt, maakt het dossier sterk.\n\n3. **Dien het verzoekschrift in bij het vredegerecht** van de plaats waar het bewind loopt. Modelformulieren zijn beschikbaar via rechtbanken-tribunaux.be. Voeg toe: het schattingsverslag, het bod of de ontwerpverkoopovereenkomst (vaak ook een ontwerp van notariële akte), en een grondige motivering waarom de verkoop het belang van de beschermde persoon dient — bijvoorbeeld omdat de woning leegstaat, kosten genereert en de opbrengst nodig is voor de zorg.\n\n4. **De vrederechter beoordeelt en machtigt.** Hij toetst de prijs aan de schatting, kan bijkomende voorwaarden opleggen en duidt de notaris aan die de akte zal verlijden.\n\n5. **Pas ná de machtiging wordt de verkoopovereenkomst getekend** en volgt de notariële akte.",
      },
      {
        heading: "Onderhandse of openbare verkoop onder bewind?",
        body: "De wet vertrekt van het principe van de **openbare verkoop**, maar het Gerechtelijk Wetboek (art. 1193bis Ger.W.) laat uitdrukkelijk toe dat de vrederechter een **onderhandse verkoop** machtigt. In de praktijk is dat vandaag de meest gangbare weg: een openbare verkoop brengt extra kosten mee en houdt het risico in dat het pand niet of onder de verwachte prijs verkocht raakt.\n\nWie onderhands wil verkopen, moet in het verzoekschrift wel aantonen dat deze verkoopwijze **voordeliger is voor de beschermde persoon** dan een openbare verkoop. Concreet betekent dit: een schattingsverslag, een bod dat minstens de geschatte waarde benadert of haalt, en een duidelijke kostenvergelijking. Vrederechters koppelen aan hun machtiging doorgaans voorwaarden: de verkoop mag niet onder de geschatte waarde gebeuren, en de opbrengst moet integraal toekomen aan de beschermde persoon.\n\nVoor bewindvoerders is dit meteen het praktische verschil met een gewone verkoop: niet de hoogste bieder op een drukbezochte bezichtiging telt, maar een **onderbouwd, schriftelijk bod** dat de toets van de rechter doorstaat. Een koper zonder financieringsvoorbehoud weegt daarbij zwaarder, omdat de machtiging anders dreigt te slaan op een verkoop die alsnog afspringt.",
      },
      {
        heading: "Timing, de rol van de notaris en wat er met de opbrengst gebeurt",
        body: "Reken voor de behandeling van het verzoekschrift op **enkele weken tot anderhalve maand**; in de praktijk worden termijnen van twee tot zes weken genoemd, afhankelijk van het vredegerecht en de volledigheid van uw dossier. Tel daarbij de tijd voor de schatting, de verplichte attesten (EPC, elektrische keuring, bodemattest) en na de machtiging de gebruikelijke doorlooptijd tot de akte.\n\nDe **notaris** speelt een dubbele rol: vóór de machtiging helpt hij vaak bij de ontwerpakte of ontwerpovereenkomst die bij het verzoekschrift wordt gevoegd; na de machtiging verlijdt de door de vrederechter aangeduide notaris de akte en waakt hij erover dat alle voorwaarden uit de beschikking worden nageleefd. Wijkt de uiteindelijke verkoop af van wat gemachtigd werd (andere koper, lagere prijs), dan is een nieuwe machtiging nodig.\n\nDe verkoopprijs blijft eigendom van de beschermde persoon. De netto-opbrengst gaat naar een rekening op diens naam binnen het bewind — in de praktijk vaak een **geblokkeerde of gecontroleerde rekening** — en mag uitsluitend in het belang van de beschermde persoon worden gebruikt: het woonzorgcentrum, medische kosten, levensonderhoud. De bewindvoerder verantwoordt de besteding in zijn **periodieke verslag** aan de vrederechter. Voor de familie is dat een geruststelling, maar het betekent ook: geen voorschotten aan erfgenamen zolang de beschermde persoon leeft. Een bewinddossier is geen erfeniskwestie.",
      },
      {
        heading: "De drie fouten die een bewinddossier doen stranden",
        body: "**1. Het compromis tekenen vóór de machtiging.** De verleiding is groot om een koper vast te leggen 'onder opschortende voorwaarde van machtiging door de vrederechter'. Uit de rechtspraak blijkt dat dit geen geldige constructie is: de controlefunctie van de vrederechter moet éérst worden uitgeoefend, pas daarna mag verkocht worden. Een compromis dat vooruitloopt op de machtiging is aantastbaar en kan de hele verkoop onderuithalen. De juiste volgorde: bod verzamelen, machtiging vragen, dan pas tekenen.\n\n**2. Verkopen onder de geschatte waarde.** De schatting is geen formaliteit maar de lat waaraan de rechter het bod toetst. Een bod ruim onder de schatting wordt geweigerd, tenzij u zeer sterk motiveert waarom het toch het belang van de beschermde persoon dient (bv. een geactualiseerde schatting na vaststelling van gebreken).\n\n**3. Onderling 'regelen' zonder statuut.** Familie die de woning van een wilsonbekwame ouder te koop zet zonder bewind of geregistreerde zorgvolmacht, komt bij de notaris muurvast te zitten: de akte kan eenvoudigweg niet verleden worden. Elke maand die zo verloren gaat, komt bovenop de latere machtigingsprocedure. Start het bewind of activeer de zorgvolmacht vóór u de verkoop opstart, niet erna.",
      },
      {
        heading: "Een directe verkoop binnen een bewindtraject: praktisch en dossiervast",
        body: "Een bewinddossier vraagt precies wat een klassieke verkoop met bezoekdagen en onzekere kandidaten moeilijk kan garanderen: een schriftelijk bod, een zekere koper en een voorspelbare timing. Een directe verkoop aan wijkopenpanden.be sluit daar goed op aan.\n\nU ontvangt een **gratis en vrijblijvend bod**: reactie binnen 2 uur, ook in het weekend, en een plaatsbezoek doorgaans binnen 48 uur. Het bod is **schriftelijk en gemotiveerd** — een stuk dat u samen met het schattingsverslag bij het verzoekschrift kunt voegen, zodat de vrederechter concreet kan toetsen. Er is **geen financieringsvoorbehoud**: de aankoop gebeurt uit eigen middelen, waardoor de gemachtigde verkoop niet alsnog kan afspringen op een geweigerd krediet. De woning wordt in haar **huidige staat** gekocht — ook als ze jaren bewoond werd door iemand die er niet meer in kon investeren — en er is geen makelaarscommissie. Na akkoord en machtiging volgt de akte doorgaans binnen 2 à 3 maanden.\n\nBent u bewindvoerder of bereidt u als familielid een bewinddossier voor? Vraag vrijblijvend een bod aan; u beslist daarna in alle rust, en uiteindelijk beslist de vrederechter mee. Zo hoort het ook.",
      },
    ],
    relatedArticles: ["erfenis-woning-stappenplan", "compromis-verkoop-woning-belgie", "notariskosten-woning-verkoop", "mede-eigendom-verkopen", "wat-is-een-vastgoedopkoper", "hoelang-duurt-huis-verkopen-belgie"],
    relatedSituations: ["huis-verkopen-bij-erfenis", "verkopen-zonder-makelaar"],
    faqs: [
      {
        question: "Mag een bewindvoerder een huis verkopen zonder toestemming van de vrederechter?",
        answer:
          "Nee. Het beheer van de goederen omvat niet het recht om onroerend goed te vervreemden. Voor de verkoop van een woning heeft de bewindvoerder altijd een bijzondere machtiging van de vrederechter nodig (art. 499/7 BW). De rechter verleent die enkel als de verkoop aantoonbaar in het belang van de beschermde persoon is, op basis van een schattingsverslag en een gemotiveerd verzoekschrift.",
      },
      {
        question: "Hoelang duurt een machtiging van de vrederechter voor de verkoop van een woning?",
        answer:
          "Reken op enkele weken tot ongeveer anderhalve maand voor de behandeling van het verzoekschrift; in de praktijk worden termijnen van twee tot zes weken genoemd, afhankelijk van het vredegerecht en de agenda. Een volledig dossier — recent schattingsverslag, concreet bod, duidelijke motivering — versnelt de zaak aanzienlijk. Daarna volgt nog de gebruikelijke doorlooptijd tot de notariële akte.",
      },
      {
        question: "Kan ik het huis van mijn ouder met dementie verkopen zonder bewind?",
        answer:
          "Alleen als er tijdig een zorgvolmacht werd opgesteld en geregistreerd in het Centraal Register voor Lastgevingen, toen uw ouder nog wilsbekwaam was. Dan kan de lasthebber verkopen zonder machtiging, als de volmacht dat voorziet. Is er geen zorgvolmacht en is uw ouder al wilsonbekwaam, dan kan de akte niet verleden worden en is een bewind met machtiging de enige rechtsgeldige weg.",
      },
      {
        question: "Mag ik al een compromis tekenen terwijl de machtiging nog loopt?",
        answer:
          "Nee. Een verkoopovereenkomst 'onder opschortende voorwaarde van machtiging door de vrederechter' is volgens de rechtspraak geen geldige constructie: de rechter moet zijn controle vooraf uitoefenen. Verzamel dus eerst een schriftelijk bod, vraag daarmee de machtiging aan en teken pas na de beschikking. Een te vroeg getekend compromis brengt de hele verkoop in gevaar.",
      },
      {
        question: "Mag de woning onder de geschatte waarde verkocht worden?",
        answer:
          "In principe niet. De vrederechter toetst het bod aan het schattingsverslag van de onafhankelijke expert en koppelt de machtiging doorgaans aan de voorwaarde dat minstens de geschatte waarde wordt gehaald. Een lager bod maakt enkel kans met een zeer sterke motivering, bijvoorbeeld een geactualiseerde schatting na vaststelling van ernstige gebreken of langdurige onverkoopbaarheid.",
      },
      {
        question: "Wat gebeurt er met de verkoopopbrengst bij een verkoop onder bewind?",
        answer:
          "De netto-opbrengst wordt gestort op een rekening op naam van de beschermde persoon, in de praktijk vaak geblokkeerd of gecontroleerd binnen het bewind. Het geld mag uitsluitend voor de beschermde persoon worden gebruikt, zoals de kosten van het woonzorgcentrum of medische zorg. De bewindvoerder verantwoordt de besteding in zijn periodieke verslag aan de vrederechter; voorschotten aan erfgenamen zijn uitgesloten.",
      },
    ],
  },
  {
    slug: "overstromingsgevoelige-woning-verkopen",
    title: "Overstromingsgevoelige woning verkopen: P-score, G-score en wat u verplicht moet melden",
    metaTitle: "Overstromingsgevoelige woning verkopen: P- en G-score (2026)",
    metaDescription:
      "Overstromingsgevoelige woning verkopen? Sinds 2023 moet u de P- en G-score vermelden. Wat de klassen A-D betekenen voor prijs, verzekering en verkoop.",
    publishedAt: "2026-07-02",
    updatedAt: "2026-07-02",
    intro:
      "Wie in Vlaanderen een woning verkoopt, moet sinds 1 januari 2023 verplicht communiceren over de overstromingsgevoeligheid ervan. Elk gebouw en elk perceel kreeg daarvoor een score van A tot D: de G-score voor het gebouw, de P-score voor het perceel. Die scores horen thuis in uw zoekertje, in het compromis én in de notariële akte. Voor woningen langs de Schijn, het Groot Schijn, de Schelde of in lager gelegen Antwerpse wijken is dat geen detail: een score C of D roept bij kandidaat-kopers vragen op over verzekering, financiering en herverkoopwaarde. In dit artikel leest u wat elke score betekent, wat u exact moet melden, wat de gevolgen zijn voor uw prijs en hoe u een overstromingsgevoelig pand toch vlot verkocht krijgt.",
    sections: [
      {
        heading: "Wat u sinds 1 januari 2023 verplicht moet melden",
        body: "De informatieplicht over overstromingsgevoeligheid bestaat al sinds 2013, maar werd op 1 januari 2023 grondig verfijnd. Vlaanderen stapte af van de grove indeling in 'mogelijk' en 'effectief overstromingsgevoelig gebied' en voerde twee scores op maat van uw eigendom in: de **P-score** voor het perceel en de **G-score** voor elk gebouw groter dan 25 m².\n\nDe verplichting geldt in drie stappen:\n\n1. **In de publiciteit** (immosite, zoekertje, affiche): sinds 1 januari 2023 vermeldt u de P-score en de G-score. Valt een score in klasse D, dan toont u ook het officiële overstromingssymbool.\n2. **In het compromis**: sinds 1 april 2023 bevat elke onderhandse overeenkomst een waterparagraaf met beide scores en de vermelding of het goed in een afgebakend overstromingsgebied of oeverzone ligt.\n3. **In de authentieke akte**: de notaris herneemt dezelfde informatie.\n\nDe plicht geldt ook bij verhuur voor meer dan negen jaar, bij overdracht van vruchtgebruik, erfpacht of opstalrecht en bij inbreng in een vennootschap. Verkoopt u zonder makelaar, dan draagt u die verantwoordelijkheid volledig zelf — niemand controleert uw zoekertje vooraf, maar de gevolgen achteraf zijn wel voor u.",
      },
      {
        heading: "P-score en G-score: de klassen A tot D uitgelegd",
        body: "Elk perceel en elk gebouw in Vlaanderen kreeg een score op een schaal van A tot D, gebaseerd op drie overstromingsbronnen: de zee, waterlopen en intense neerslag. De **meest kritieke bron bepaalt de eindscore**. Een woning die droog blijft bij hoogtij van de Schelde maar bij hevige regenval water in de kelder krijgt, scoort dus op basis van dat regenrisico.\n\nHet onderscheid tussen P- en G-score is belangrijker dan het lijkt. Een perceel met score C of D terwijl het gebouw score A heeft, komt vaak voor: de tuin kan onder water lopen, maar de woning staat hoog genoeg. Dat is voor een koper een wezenlijk ander verhaal dan een gebouw dat zelf in klasse D zit — en dat verschil mag u in uw communicatie uitspelen, zolang u beide scores correct vermeldt.\n\nU zoekt de scores gratis op via **waterinfo.be/informatieplicht**, waar u ook het overstromingsrapport genereert dat uw notaris nodig heeft voor de waterparagraaf. Werk altijd met een recent rapport: de scores volgen de officiële watertoetskaarten en kunnen wijzigen wanneer die geactualiseerd worden.",
        table: {
          headers: ["Klasse", "Betekenis", "Wat het praktisch inhoudt"],
          rows: [
            ["A", "Geen overstroming gemodelleerd", "Geen gekend risico volgens de huidige kaarten; gunstigste score"],
            ["B", "Kleine kans op overstroming bij klimaatverandering", "Vandaag geen gemodelleerd risico, wel in het klimaatscenario 2050"],
            ["C", "Kleine kans op overstroming onder het huidige klimaat", "Reëel maar beperkt risico; kopers en verzekeraars kijken al kritischer"],
            ["D", "Middelgrote kans op overstroming onder het huidige klimaat", "Hoogste score; overstromingssymbool verplicht in de publiciteit"],
          ],
        },
      },
      {
        heading: "Score te streng? Laat ze bijstellen met een overstromingsattest",
        body: "De modellen achter de scores kennen uw woning niet vanbinnen. Wie waterwerende maatregelen nam — verhoogde drempels, waterdichte kelderdichting, terugslagkleppen op de riolering, een opgehoogde vloerpas — kan een **erkend deskundige overstromingsattest** aanstellen. Die deskundige, erkend door de Vlaamse Milieumaatschappij, kan na een plaatsbezoek de P- of G-score via een overstromingsattest verbeteren als het werkelijke risico lager ligt dan gemodelleerd.\n\nBij een geplande verkoop van een pand met score C of D kan dat attest het verschil maken tussen een afgeschrikte en een gerustgestelde koper. Maar verwacht geen mirakel: de deskundige kan de score enkel bijstellen binnen wat technisch verdedigbaar is, niet voor een woning die effectief al eens onder water stond.",
      },
      {
        heading: "Wat een hoge waterscore doet met prijs en verzekerbaarheid",
        body: "De cijfers zijn genuanceerder dan u misschien vreest. Onderzoek van Zimmo en StadimData (2025) toont dat woningen in overstromingsgevoelig gebied in Vlaanderen gemiddeld zelfs **duurder** verkopen dan vergelijkbare woningen daarbuiten — het verschil liep op tot zo'n 36.000 euro, omdat waterrijke ligging vaak samenvalt met gegeerde locaties. In Wallonië, getekend door de overstromingen van juli 2021, is het beeld omgekeerd: daar noteren woningen in risicogebied gemiddeld tienduizenden euro's ónder vergelijkbare panden.\n\nDat gemiddelde verbergt grote verschillen. Voor een concrete woning met **G-score D** zonder compenserende ligging werkt de score wél prijsdrukkend:\n\n• Kandidaat-kopers verrekenen verzekeringskost en schaderisico in hun bod, of haken af.\n• Banken bekijken het pand kritischer als waarborg voor de hypotheek.\n• Het verplichte overstromingssymbool filtert kopers weg nog vóór het eerste bezoek, waardoor uw pand langer online blijft staan — wat op zich al argwaan wekt.\n\nDe verzekering zelf is een dubbel verhaal. De dekking tegen natuurrampen, waaronder overstroming, zit **verplicht in elke Belgische brandverzekering**. Maar ligt de woning in een bij koninklijk besluit afgebakende risicozone, dan mag de verzekeraar een fors hogere premie of vrijstelling aanrekenen. Weigert hij of overdrijft hij, dan is er het **Tariferingsbureau Natuurrampen** als vangnet met gereglementeerde maximumvoorwaarden. Eén uitzondering: voor gebouwen opgericht in een risicozone méér dan 18 maanden na de aanwijzing ervan mag de dekking volledig geweigerd worden, zonder beroep op het Tariferingsbureau. Anticipeer op die vraag vóór ze u aan de onderhandeltafel overvalt.",
      },
      {
        heading: "Signaalgebieden en WORG: als ook de bouwmogelijkheden sneuvelen",
        body: "Naast de scores bestaat er een tweede, minder bekende laag: de **watergevoelige openruimtegebieden** (WORG). Dat zijn voormalige signaalgebieden — onbebouwde gronden met een harde bestemming zoals woon- of industriegebied, maar met een hoog overstromingsrisico — die de Vlaamse Regering definitief bouwvrij houdt. Op 19 juli 2024 keurde ze de aanduiding van 139 watergevoelige openruimtegebieden goed, samen ruim 710 hectare.\n\nDe impact is ingrijpend: binnen een WORG kan de oude bestemming **niet langer gerealiseerd** worden. Een perceel dat op het gewestplan woongebied is, verliest de facto zijn bouwmogelijkheden; nieuwe omgevingsvergunningen voor woningen of bedrijven zijn er niet meer mogelijk. Enkel waterbeheer, natuur, bosbouw, landbouw en kleinschalige recreatie blijven toegelaten.\n\nVerkoopt u een woning mét aanpalende grond of een groot perceel in zo'n gebied, reken u dan niet rijk aan 'bouwgrond' die er juridisch geen meer is. En ook de ligging in een WORG valt onder de informatieplicht: wie een perceel als bouwgrond aanprijst terwijl het watergevoelig openruimtegebied is, zet de deur wagenwijd open voor een vordering van de koper.",
      },
      {
        heading: "Veelgemaakte fouten — en wat u riskeert",
        body: "In de praktijk loopt het op drie punten geregeld mis:\n\n• **De scores ontbreken in het zoekertje.** Wie zelf verkoopt, vergeet vaak dat de informatieplicht al bij de publiciteit begint — niet pas bij de notaris.\n• **Er circuleert een verouderde score.** De herindeling van 1 januari 2023 heeft de kaarten hertekend: een pand dat vroeger niet als overstromingsgevoelig stond aangeduid, kan nu score C of D hebben, en omgekeerd. Wie een oud rapport of de oude terminologie blijft gebruiken, informeert de koper fout.\n• **Het overstromingssymbool bij klasse D wordt weggelaten** omdat het 'afschrikt'. Precies daar kijkt een ontevreden koper achteraf als eerste naar.\n\nHet decreet integraal waterbeleid koppelt aan de informatieplicht geen automatische nietigheid, maar dat maakt de schending niet vrijblijvend. Een koper die kan aantonen dat hij verkeerd of niet werd geïnformeerd, kan via het gemeen recht **dwaling of bedrog** inroepen en de vernietiging van de koop of een schadevergoeding — in de praktijk vaak een prijsvermindering — vorderen. Ook uw notaris laat een dossier zonder correct overstromingsrapport niet zomaar passeren, wat het traject tussen compromis en akte vertraagt. Correct en volledig melden is dus niet alleen verplicht, het is ook uw beste bescherming tegen discussies achteraf.",
      },
      {
        heading: "Overstromingsgevoelig pand verkopen zonder maandenlange onzekerheid",
        body: "Op de klassieke markt is een score C of D een handicap die u niet wegmoffelt: het symbool staat in uw zoekertje, verzekeraars rekenen en banken stellen vragen. Het gevolg is voorspelbaar — minder bezoekers, voorzichtige biedingen en een verkoop die aansleept.\n\nEr bestaat een alternatief. wijkopenpanden.be kent de waterscores van de Antwerpse wijken en koopt ook overstromingsgevoelige panden aan, **in de huidige staat**. U vraagt een gratis en vrijblijvend bod aan en krijgt binnen 2 uur reactie, ook in het weekend. Een bezoek volgt doorgaans binnen 48 uur, waarna u een schriftelijk gemotiveerd bod ontvangt: u ziet zwart op wit hoe de P- en G-score in de prijs is verrekend, in plaats van te gissen wat kopers er stilzwijgend voor aftrekken. De aankoop gebeurt met eigen middelen — geen financieringsvoorwaarde die afspringt omdat een bank het waterrisico te hoog vindt — en zonder makelaarscommissie. De akte volgt doorgaans 2 à 3 maanden na akkoord.\n\nVergelijken kost niets: vraag het bod aan, leg het naast een schatting voor de klassieke markt en beslis met volledige kennis van zaken. Ook met een score D hoeft uw verkoop geen jaar te duren.",
      },
    ],
    relatedArticles: ["verborgen-gebreken-woning-verkoop-belgie", "bodemattest-vlaanderen-verkoop", "stedenbouwkundige-overtreding-woning-verkopen", "compromis-verkoop-woning-belgie", "woning-staat-al-maanden-te-koop", "keuringen-bij-verkoop-woning"],
    relatedSituations: ["verkopen-zonder-makelaar", "opknappand-verkopen"],
    faqs: [
      {
        question: "Moet ik de P- en G-score ook vermelden als beide klasse A zijn?",
        answer:
          "Ja. Sinds 1 januari 2023 vermeldt u de P-score en de G-score in de publiciteit, ongeacht de klasse. Een dubbele A is bovendien een verkoopargument: het stelt kopers meteen gerust over verzekering en risico. Het overstromingssymbool is enkel verplicht wanneer een score in klasse D valt. In het compromis en de akte komt de informatie sowieso altijd terug via de waterparagraaf.",
      },
      {
        question: "Waar vind ik de overstromingsscore van mijn woning?",
        answer:
          "Op waterinfo.be/informatieplicht zoekt u gratis de P-score van uw perceel en de G-score van elk gebouw groter dan 25 m² op. U kunt er ook een volledig overstromingsrapport genereren met alle detailinformatie — dat document heeft uw notaris nodig voor de waterparagraaf in compromis en akte. Gebruik altijd een recent rapport, want de scores volgen de actuele watertoetskaarten.",
      },
      {
        question: "Kan ik een slechte G-score of P-score laten verbeteren?",
        answer:
          "Soms wel. Een door de Vlaamse Milieumaatschappij erkend deskundige kan na een plaatsbezoek een overstromingsattest opstellen dat de score bijstelt, bijvoorbeeld omdat u waterwerende maatregelen nam zoals terugslagkleppen, verhoogde drempels of een waterdichte kelder. Het attest kan de score alleen verbeteren als het werkelijke risico aantoonbaar lager ligt dan de modellen aangeven. Bij een geplande verkoop kan dat een zinvolle investering zijn.",
      },
      {
        question: "Kan de koper van mijn overstromingsgevoelige woning zich nog verzekeren?",
        answer:
          "Ja, de dekking tegen natuurrampen — inclusief overstroming — zit verplicht in elke Belgische brandverzekering. In een officiële risicozone mag de verzekeraar wel een hogere premie of vrijstelling aanrekenen; het Tariferingsbureau Natuurrampen dient dan als vangnet met maximumvoorwaarden. Enkel voor gebouwen die meer dan 18 maanden na de aanwijzing van de risicozone werden opgericht, mag de dekking geweigerd worden.",
      },
      {
        question: "Wat riskeer ik als ik de overstromingsscore niet vermeld?",
        answer:
          "Het decreet voorziet geen automatische nietigheid, maar een koper die verkeerd of niet geïnformeerd werd, kan dwaling of bedrog inroepen en de vernietiging van de koop of een schadevergoeding vorderen — in de praktijk vaak een prijsvermindering. Daarnaast blokkeert of vertraagt een onvolledig dossier het verlijden van de akte. Correct melden in zoekertje, compromis en akte is dus ook uw eigen bescherming.",
      },
      {
        question: "Koopt wijkopenpanden.be ook woningen met een score D?",
        answer:
          "Ja. Een hoge P- of G-score is voor ons geen reden om af te haken: wij kopen panden in de huidige staat, ook in overstromingsgevoelig gebied. U ontvangt een schriftelijk gemotiveerd bod waarin de waterscore transparant verrekend zit, betaald uit eigen middelen en zonder makelaarscommissie. Reactie volgt binnen 2 uur, een bezoek doorgaans binnen 48 uur, en de akte meestal 2 à 3 maanden na akkoord.",
      },
    ],
  },
  {
    slug: "huis-verkopen-met-zonnepanelen",
    title: "Huis verkopen met zonnepanelen: wat gaat mee, wat mag u vragen en welke documenten heeft de koper nodig?",
    metaTitle: "Huis verkopen met zonnepanelen: regels en waarde (2026)",
    metaDescription:
      "Huis verkopen met zonnepanelen? De panelen horen juridisch bij de woning en de certificaten gaan mee. Documenten, meerwaarde en overdracht bij Fluvius.",
    publishedAt: "2026-07-02",
    updatedAt: "2026-07-02",
    intro:
      "Wie vandaag een woning met zonnepanelen verkoopt, verkoopt meer dan alleen stenen: op het dak ligt een installatie die de energiefactuur drukt, het EPC-label verbetert en voor kopers een concreet verkoopargument is. Toch zorgt net die installatie geregeld voor discussie. Horen de panelen automatisch bij de verkoop? Mag u er een meerprijs voor vragen, en hoeveel dan? Wat gebeurt er met groenestroomcertificaten van een oudere installatie, en moet u een premie terugbetalen? En welke documenten verwacht de koper — of diens notaris — op tafel? In dit artikel zetten we de juridische regels, de geverifieerde cijfers over meerwaarde en de praktische overdracht bij Fluvius op een rij, zodat u zonder losse eindjes verkoopt.",
    sections: [
      {
        heading: "Zonnepanelen horen juridisch bij de woning — tenzij u iets anders afspreekt",
        body: "Zonnepanelen die op of in het dak gemonteerd zijn, zijn **onroerend door incorporatie**: ze zijn duurzaam met het gebouw verbonden en kunnen niet zonder schade verwijderd worden. Juridisch gevolg: verkoopt u uw woning, dan verkoopt u de panelen mee, ook als het compromis er met geen woord over rept. De koper mag er dus van uitgaan dat de installatie in de prijs zit, tenzij uitdrukkelijk anders overeengekomen.\n\nWilt u de panelen tóch meenemen of apart verkopen? Dat kan alleen als het zwart op wit in de verkoopovereenkomst staat, en de notaris neemt die afspraak dan op in de akte. Weet wel dat een verhuis van de installatie zelden loont: u betaalt demontage, transport, heropbouw en een nieuwe keuring, en u moet de volledige installatie (panelen, omvormer én productiemeter) meenemen.\n\nEén uitzondering verdient extra aandacht: panelen die u **huurt, least of via derdepartijfinanciering** liet plaatsen, zijn vaak geen volle eigendom. Meld dat altijd vooraf aan de koper en regel de overname of afkoop van het contract vóór het compromis — verzwijgen leidt tot discussies of zelfs aansprakelijkheid achteraf.",
      },
      {
        heading: "Wat zijn uw zonnepanelen waard bij verkoop? De cijfers achter de meerwaarde",
        body: "Zonnepanelen verkopen niet als een los toestel maar via hun effect op het **EPC-label**. Een correct geregistreerde PV-installatie verlaagt de EPC-score doorgaans met 50 tot 200 kWh/m² per jaar, afhankelijk van het woningtype, de dakoriëntatie en het vermogen. Dat kan het verschil betekenen tussen label C en label B — en dat verschil is meetbaar in euro's.\n\nOnderzoek van de KU Leuven naar het effect van het EPC op verkoopprijzen in Vlaanderen toont dat woningen met de beste energiescores tot bijna 11% duurder verkocht worden dan vergelijkbare woningen met een slechte score. Onderzoekers van de Nationale Bank, KU Leuven en UAntwerpen berekenden zelfs dat woningen met label A gemiddeld 22,6% meer waard zijn dan vergelijkbare woningen met label D. Bovendien verkopen energiezuinige woningen sneller.\n\nRealistisch blijven is wel de boodschap: een koper betaalt geen euro-per-euro vergoeding voor uw investering van tien jaar geleden. De panelen tellen mee via het label, de lagere energiefactuur en de resterende levensduur van panelen (25 à 30 jaar) en omvormer (10 à 15 jaar). Laat uw EPC dus opmaken ná registratie van de installatie, anders verkoopt u uw sterkste troef onder de prijs.",
      },
      {
        heading: "Terugdraaiende teller is verleden tijd: wat mag u nog beloven?",
        body: "Jarenlang was \"gratis stroom dankzij de terugdraaiende teller\" hét verkoopargument bij zonnepanelen. Dat argument is uitgedoofd. Sinds 2025 zijn eigenaars van zonnepanelen verplicht een **digitale meter** te laten plaatsen, en Fluvius rondde die ombouw bij prosumenten eind 2025 af. Een digitale meter draait niet terug: wat u injecteert, wordt apart geteld en vergoed via een (bescheiden) terugleververgoeding van uw energieleverancier.\n\nVoor de verkoop betekent dat concreet:\n\n• Beloof een koper **nooit** dat de teller terugdraait — de nieuwe eigenaar start sowieso met een digitale meter en een eigen energiecontract.\n\n• Het echte financiële voordeel zit vandaag in **zelfverbruik**: stroom rechtstreeks gebruiken wanneer de zon schijnt, eventueel aangevuld met een thuisbatterij of slimme sturing. Dát is het verhaal dat u eerlijk kunt vertellen.\n\n• De retroactieve investeringspremie (tot 3.750 euro) die eigenaars van oudere installaties compenseerde voor het verlies van de terugdraaiende teller, moest uiterlijk eind 2025 aangevraagd worden en speelt bij een verkoop in 2026 geen rol meer.\n\nEen correcte voorstelling van zaken beschermt u ook juridisch: overdreven beloftes over opbrengst kunnen achteraf tegen u gebruikt worden.",
      },
      {
        heading: "Groenestroomcertificaten: onlosmakelijk verbonden met de installatie",
        body: "Heeft u een oudere installatie (in dienst genomen vóór 2013), dan ontvangt u mogelijk nog **groenestroomcertificaten** (GSC) per 1.000 kWh geproduceerde stroom. Goed om weten: die certificaten zijn volgens Fluvius \"onlosmakelijk verbonden met de installatie\", niet met u als persoon.\n\nBij verkoop van de woning gaan het recht op certificaten en de resterende looptijd dus automatisch over op de nieuwe eigenaar. De toekenning loopt gewoon door; alleen de begunstigde verandert. Wat u praktisch moet doen:\n\n1. Meld de eigendomsoverdracht via **Mijn Fluvius** (rubriek groene stroom), met de gegevens van de nieuwe eigenaar.\n\n2. Geef de **meterstand van de productiemeter** door op de dag van de overdracht — meestal de aktedatum. Certificaten voor productie tot die stand zijn nog voor u; alles erna is voor de koper.\n\n3. De nieuwe eigenaar krijgt daarna zijn eigen toegang en ontvangt de volgende uitbetalingen op zijn rekeningnummer.\n\nVerkoopt u een woning met zo'n oudere installatie, vermeld de resterende certificatenwaarde dan expliciet in uw prijszetting: voor kopers is een gegarandeerde jaarlijkse vergoeding een becijferbaar voordeel.",
      },
      {
        heading: "Welke documenten verwacht de koper? De checklist",
        body: "Een koper (en zijn bank of notaris) wil kunnen nagaan of de installatie veilig, aangemeld en rendabel is. Verzamel deze documenten vóór het compromis — het voorkomt vertraging tussen compromis en akte.\n\nBelangrijkste aandachtspunt is het **AREI-keuringsattest**. Zonnepanelen zijn een uitbreiding van de elektrische installatie en moesten bij plaatsing verplicht gekeurd worden door een erkend keuringsorganisme. Een positief attest blijft 25 jaar geldig zolang de installatie niet ingrijpend wijzigt. Kunt u het niet meer terugvinden, vraag dan een duplicaat op bij het keuringsorganisme of laat een herkeuring uitvoeren (reken op zo'n 135 à 175 euro). Daarnaast controleert de koper best of de installatie effectief bij Fluvius is aangemeld — een verrassend vaak vergeten stap bij doe-het-zelf-installaties.",
        table: {
          headers: ["Document", "Waarom nodig", "Waar te vinden"],
          rows: [
            ["AREI-keuringsattest zonnepanelen", "Bewijst dat de installatie veilig gekeurd werd; 25 jaar geldig", "Erkend keuringsorganisme (duplicaat mogelijk) of dossier installateur"],
            ["Bewijs van aanmelding bij Fluvius", "Zonder aanmelding geen correcte registratie en geen certificaten", "Mijn Fluvius of bevestigingsmail installateur"],
            ["EPC met geregistreerde PV-installatie", "Zonnepanelen verbeteren het label en dus de vraagprijs", "Energiedeskundige; controleer op energiesparen.be"],
            ["Factuur en garantiebewijzen panelen en omvormer", "Fabrieksgarantie (vaak 10-25 jaar) is overdraagbaar en waardevol", "Installateur of eigen administratie"],
            ["Handleiding en documentatie omvormer", "Nieuwe eigenaar moet opbrengst kunnen monitoren en storingen melden", "Installateur of website fabrikant"],
            ["Meterstand productiemeter op aktedatum", "Nodig voor overdracht groenestroomcertificaten (oudere installaties)", "Productiemeter zelf; doorgeven via Mijn Fluvius"],
            ["Leasing- of huurkoopcontract (indien van toepassing)", "Panelen in derdepartijfinanciering zijn geen volle eigendom", "Contractpartij (energiebedrijf of financier)"],
          ],
        },
      },
      {
        heading: "Premies: moet u iets terugbetalen bij verkoop?",
        body: "Het korte antwoord: **bij een gewone verkoop meestal niet**. De Vlaamse zonnepanelenpremie via Fluvius gold voor installaties die tussen 1 januari 2021 en 31 december 2023 werden gekeurd (in 2021-2022 tot 1.500 euro, in 2023 tot 750 euro). De kernvoorwaarde is dat de installatie de eerste vijftien jaar na de indienstneming **niet verplaatst wordt naar een ander perceel**. Verkoopt u de woning mét de panelen op het dak, dan blijft de installatie op hetzelfde perceel en is er niets aan de hand: u betaalt niets terug.\n\nAnders wordt het als u de panelen zou demonteren en meenemen binnen die vijftienjarige periode: wie niet meer aan de voorwaarden voldoet, moet de premie terugbetalen. Ook dat is dus een argument om de installatie gewoon mee te verkopen.\n\nNog twee nuances. Zonnepanelen vallen níet onder Mijn VerbouwPremie — die dekt wel isolatie, ramen, warmtepompen en zonneboilers, met eigen voorwaarden per maatregel. En de premies die u ooit ontving, hoeft u niet te verrekenen met de koper: ze verlagen hoogstens de investeringswaarde die u redelijkerwijs in uw vraagprijs kunt doorrekenen.",
      },
      {
        heading: "Veelgemaakte fouten — en hoe u zonder losse eindjes verkoopt",
        body: "De klassieke valkuilen bij een verkoop met zonnepanelen zijn vermijdbaar:\n\n• **Installatie nooit aangemeld bij Fluvius**: geen registratie betekent problemen bij de overdracht en mogelijk discussie over de conformiteit. Regulariseer vóór de verkoop.\n\n• **EPC opgemaakt zonder de panelen**: uw label is dan slechter dan de realiteit en u onderhandelt vanuit een te lage waardering.\n\n• **Geleasede panelen verzwijgen**: de koper ontdekt na de akte dat een derde partij eigenaar is — een recept voor conflicten.\n\n• **Certificaten en eigendomsoverdracht vergeten**: zonder melding en meterstand blijven uitbetalingen naar de verkeerde persoon lopen.\n\n• **Verouderde beloftes doen** over terugdraaiende tellers of rendementen die niet meer gelden.\n\nVerkoopt u liever zonder dat hele administratieve traject zelf te trekken? Bij wijkopenpanden.be wordt uw installatie gewoon mee verrekend in een **schriftelijk gemotiveerd bod**: u ziet zwart op wit hoe de zonnepanelen en het EPC-label meetellen in de totaalwaardering. U ontvangt binnen 2 uur reactie — ook in het weekend — en doorgaans binnen 48 uur een bezoek. Wij kopen in huidige staat, betalen uit eigen middelen, rekenen geen makelaarscommissie en coördineren de attesten met de notaris; de akte volgt doorgaans 2 à 3 maanden na akkoord. Zo verkoopt u met panelen op het dak, maar zonder losse eindjes met certificaten of overdrachten. Een bod aanvragen is gratis en vrijblijvend.",
      },
    ],
    relatedArticles: ["epc-attest-antwerpen", "keuringen-bij-verkoop-woning", "energie-renovatieplicht-vlaanderen-2026", "compromis-verkoop-woning-belgie", "wat-is-mijn-woning-waard-antwerpen", "verkoop-kosten-berekenen"],
    relatedSituations: ["verkopen-zonder-makelaar", "huis-verkopen-bij-erfenis"],
    faqs: [
      {
        question: "Horen zonnepanelen automatisch bij de verkoop van mijn huis?",
        answer:
          "Ja. Panelen die vast op het dak gemonteerd zijn, zijn onroerend door incorporatie en horen bij de woning. Zegt het compromis er niets over, dan mag de koper ervan uitgaan dat ze in de prijs zitten. Wilt u ze meenemen of apart verkopen, dan moet dat uitdrukkelijk in de verkoopovereenkomst staan en neemt de notaris het op in de akte.",
      },
      {
        question: "Hoeveel meerwaarde geven zonnepanelen bij de verkoop van een woning?",
        answer:
          "Zonnepanelen verlagen de EPC-score doorgaans met 50 tot 200 punten, wat vaak een labelverschil oplevert. Onderzoek van de KU Leuven toont dat woningen met de beste energiescores tot bijna 11% duurder verkopen; volgens onderzoek van de Nationale Bank, KU Leuven en UAntwerpen is een woning met label A gemiddeld 22,6% meer waard dan een vergelijkbare woning met label D. Reken dus op meerwaarde via het label, niet op een euro-per-euro terugverdieneffect.",
      },
      {
        question: "Gaan mijn groenestroomcertificaten over op de nieuwe eigenaar?",
        answer:
          "Ja. Groenestroomcertificaten zijn onlosmakelijk verbonden met de installatie, niet met de persoon. Bij verkoop van de woning loopt de toekenning gewoon door en gaat het recht op certificaten over op de koper. U meldt de eigendomsoverdracht via Mijn Fluvius en geeft de meterstand van de productiemeter door op de dag van de overdracht; vanaf dan ontvangt de nieuwe eigenaar de certificaten.",
      },
      {
        question: "Moet ik mijn zonnepanelenpremie terugbetalen als ik verkoop?",
        answer:
          "Bij een gewone verkoop niet. De voorwaarde van de Fluvius-premie (voor installaties gekeurd tussen 2021 en 2023) is dat de installatie de eerste vijftien jaar niet naar een ander perceel verhuist. Verkoopt u de woning mét de panelen, dan blijft alles op hetzelfde perceel en betaalt u niets terug. Demonteert u de panelen en neemt u ze mee, dan kan terugvordering wél aan de orde zijn.",
      },
      {
        question: "Welk keuringsattest heeft de koper nodig voor de zonnepanelen?",
        answer:
          "Het AREI-keuringsattest van de installatie. Zonnepanelen zijn een uitbreiding van de elektrische installatie en moesten bij plaatsing gekeurd worden door een erkend organisme. Een positief attest blijft 25 jaar geldig zolang er geen grote wijzigingen gebeuren. Bent u het kwijt, vraag dan een duplicaat bij het keuringsorganisme of laat een herkeuring uitvoeren, doorgaans voor 135 à 175 euro.",
      },
      {
        question: "Krijgt de koper nog een terugdraaiende teller?",
        answer:
          "Nee. Sinds 2025 is een digitale meter verplicht voor eigenaars van zonnepanelen en de ombouw bij prosumenten is afgerond. Een digitale meter draait niet terug: geïnjecteerde stroom wordt apart geteld en vergoed via een terugleververgoeding van de energieleverancier. Het financiële voordeel voor de koper zit vooral in zelfverbruik, een lagere energiefactuur en het betere EPC-label — beloof dus geen gratis stroom.",
      },
    ],
  },
  {
    slug: "huis-verkopen-binnen-5-jaar",
    title: "Huis verkopen binnen 5 jaar na aankoop: dit betaalt u aan belastingen en kosten",
    metaTitle: "Huis verkopen binnen 5 jaar: belastingen en kosten (2026)",
    metaDescription:
      "Huis verkopen binnen 5 jaar na aankoop? Wanneer 16,5% meerwaardebelasting speelt, hoe u 3/5 van het verkooprecht terugvraagt en wat uw hypotheek kost.",
    publishedAt: "2026-07-02",
    updatedAt: "2026-07-02",
    intro:
      "Een huis verkopen binnen 5 jaar na aankoop: het overkomt meer mensen dan u denkt. Een scheiding, jobverlies, een verhuis voor het werk of een aankoop die achteraf tegenvalt — plots moet de woning weer de markt op, terwijl de aankoopkosten amper verteerd zijn. De vraag is dan niet alleen wat de woning opbrengt, maar vooral wat er netto overblijft. Vier posten bepalen die rekening: de meerwaardebelasting van 16,5% (met een belangrijke vrijstelling voor de eigen woning), de mogelijke teruggave van een deel van het verkooprecht bij verkoop binnen 2 jaar, de kosten om uw hypotheek vervroegd af te lossen, en de klassieke transactiekosten. In dit artikel rekenen we elke post concreet uit, met een stap-voor-stap voorbeeld.",
    sections: [
      {
        heading: "De vier kostenposten bij een snelle wederverkoop",
        body: "Wie kort na aankoop weer verkoopt, betaalt in het slechtste geval vier keer: aan de fiscus, aan de bank, aan de notaris en aan de tussenpersoon. Zet ze op een rij voor u een beslissing neemt:\n\n• **Meerwaardebelasting**: 16,5% (plus gemeentebelasting) op de belastbare meerwaarde als u een gebouw met winst verkoopt binnen 5 jaar na aankoop — maar de eigen gezinswoning is vrijgesteld.\n• **Verkooprecht dat u kunt terugvragen**: verkoopt u binnen 2 jaar na aankoop, dan kunt u in Vlaanderen 3/5 van het betaalde verkooprecht recupereren — een meevaller in plaats van een kost, al gelden er voorwaarden.\n• **Hypotheekkosten**: wederbeleggingsvergoeding (maximaal 3 maanden intrest) plus de handlichting van de hypothecaire inschrijving.\n• **Transactiekosten**: makelaarscommissie, verplichte keuringen en attesten, publiciteit. Een overzicht van alle attesten vindt u in ons artikel over keuringen bij verkoop.\n\nDe eerste twee posten hangen volledig af van het type pand en de timing. Daar beginnen we.",
      },
      {
        heading: "Meerwaardebelasting: 16,5%, maar niet op uw eigen woning",
        body: "Verkoopt u een **gebouw** met winst binnen 5 jaar na de aankoopakte, dan belast de fiscus die meerwaarde als divers inkomen aan **16,5%**, te verhogen met de aanvullende gemeentebelasting van uw gemeente (vaak 6 à 9% op de belasting, waardoor u effectief richting 17,5 à 18% gaat). Na 5 jaar is de meerwaarde op een gebouw volledig belastingvrij.\n\nDe belangrijkste uitzondering meteen: **uw eigen gezinswoning is vrijgesteld**, ook als u ze al na één of twee jaar weer verkoopt. Voorwaarde is dat de woning gedurende een **ononderbroken periode van minstens 12 maanden** vóór de verkoop uw eigen woning was. Tussen die bewoningsperiode en de maand van verkoop mag bovendien nog maximaal 6 maanden zitten — in de praktijk komt het er dus op neer dat de woning 12 maanden lang uw eigen woning was binnen de 18 maanden vóór de verkoop. Wie zijn gezinswoning verkoopt na een scheiding of verhuis, hoeft dus meestal **geen** meerwaardebelasting te vrezen.\n\nDe keerzijde van die vrijstelling: verkoopt u uw eigen woning binnen 5 jaar **met verlies** — bijvoorbeeld omdat u destijds op de piek kocht — dan is dat verlies fiscaal niet aftrekbaar. De vrijstelling werkt in twee richtingen: geen belasting op winst, geen aftrek van verlies.\n\nVoor **bouwgrond** gelden strengere regels: 33% (plus gemeentebelasting) bij verkoop binnen 5 jaar, en nog 16,5% bij verkoop tussen 5 en 8 jaar na aankoop.",
      },
      {
        heading: "Rekenvoorbeeld: tweede verblijf verkocht na 3 jaar",
        body: "De fiscus belast niet zomaar het verschil tussen aankoop- en verkoopprijs. Twee forfaits verzachten de rekening aanzienlijk. Stel: u kocht drie jaar geleden een appartement als tweede verblijf voor **200.000 euro** en verkoopt het nu voor **320.000 euro**, met 10.000 euro verkoopkosten (commissie, publiciteit).\n\n1. **Verkoopprijs corrigeren**: 320.000 euro min de verkoopkosten van 10.000 euro = 310.000 euro.\n2. **Aankoopprijs verhogen met het kostenforfait**: 200.000 euro + 25% forfait (50.000 euro) = 250.000 euro. Waren uw werkelijke aankoopkosten (registratiebelasting, notaris) hoger dan 25%, dan mag u die bewijzen.\n3. **Verhoging per jaar bezit**: 5% van de verhoogde aankoopprijs per volledig jaar tussen aankoop en verkoop. Hier: 3 × 12.500 euro = 37.500 euro. Totaal: 287.500 euro.\n4. **Renovatiefacturen toevoegen**: werken uitgevoerd door een geregistreerde aannemer mag u hier nog bij optellen. In dit voorbeeld: geen.\n5. **Belastbare meerwaarde**: 310.000 − 287.500 = **22.500 euro**.\n6. **Belasting**: 16,5% van 22.500 euro = **3.712,50 euro**, plus gemeentebelasting.\n\nOpvallend: hoewel de brutowinst 120.000 euro bedraagt, blijft er door de forfaits maar 22.500 euro belastbaar over. Bij kleinere winsten valt de belastbare meerwaarde vaak zelfs op nul. Reken dus altijd eerst, voor u zich blindstaart op '16,5% op de winst'. Meer achtergrond leest u in ons artikel over de meerwaardebelasting op een tweede verblijf.",
      },
      {
        heading: "Overzicht: wat betaalt u bij verkoop binnen 5 jaar?",
        body: "Onderstaande tabel vat samen wanneer de meerwaardebelasting speelt, per type pand en per termijn. De termijn loopt telkens van authentieke aankoopakte tot authentieke verkoopakte.",
        table: {
          headers: ["Situatie", "Verkoop binnen 5 jaar", "Verkoop na 5 jaar", "Aandachtspunt"],
          rows: [
            ["Eigen gezinswoning", "Geen meerwaardebelasting (mits 12 maanden bewoning)", "Geen meerwaardebelasting", "Verlies is niet aftrekbaar"],
            ["Tweede verblijf of opbrengstpand", "16,5% + gemeentebelasting op de belastbare meerwaarde", "Geen meerwaardebelasting", "Forfaits (25% + 5%/jaar) verlagen de rekening fors"],
            ["Bouwgrond", "33% + gemeentebelasting", "16,5% tussen jaar 5 en 8, daarna 0%", "Termijn loopt hier tot 8 jaar"],
            ["Geërfde woning", "Geen 16,5%-heffing (verkrijging om niet)", "Geen meerwaardebelasting", "Verkoop binnen 2 jaar boven de aangegeven waarde kan tot bijkomende erfbelasting leiden"],
            ["Geschonken woning", "16,5% als u verkoopt binnen 3 jaar na de schenking én binnen 5 jaar na de aankoop door de schenker", "Geen meerwaardebelasting", "De aankoopdatum van de schenker telt mee"],
          ],
        },
      },
      {
        heading: "Verkoop binnen 2 jaar: vraag 3/5 van het verkooprecht terug",
        body: "Hier zit het goede nieuws. Wie in Vlaanderen een woning koopt, betaalt sinds 1 januari 2025 **2% verkooprecht** voor de enige eigen woning en **12%** voor elk ander vastgoed (de meeneembaarheid van vroeger betaalde rechten is intussen afgeschaft; vanaf 2026 zijn de voorwaarden voor het 2%-tarief bovendien verstrengd, met onder meer een jaar ononderbroken domicilie).\n\nVerkoopt u datzelfde pand opnieuw **binnen 2 jaar** — gerekend van authentieke akte tot authentieke akte, de compromisdatum telt niet — dan kunt u **3/5 van het betaalde verkooprecht terugvorderen**. Betaalde u bij aankoop 12% op 250.000 euro (30.000 euro), dan recupereert u 18.000 euro. Let wel: verkoopt u aan een lagere prijs dan u kocht, dan wordt de teruggave op die lagere prijs berekend.\n\nTwee belangrijke nuances:\n\n• De teruggave geldt enkel voor aankopen aan het **standaardtarief van 12%**. Kocht u aan het verlaagd tarief van 2% (of vroeger 3%), dan is teruggave technisch mogelijk maar zinloos: u moet eerst aanvullende rechten tot 12% bijbetalen en krijgt daarna 7,2% terug — netto verliest u daaraan.\n• De teruggave gebeurt **niet automatisch**. U vraagt ze aan via een gemotiveerd verzoek; in de praktijk neemt de notaris dat gewoon op in de verkoopakte.\n\nVooral wie een tweede verblijf of investeringspand snel weer moet verkopen, haalt hier dus een flink stuk van de aankoopkosten terug.",
      },
      {
        heading: "Uw hypotheek vervroegd aflossen: wederbeleggingsvergoeding en handlichting",
        body: "Loopt er nog een woonkrediet op het pand, dan wil de bank bij verkoop het openstaande kapitaal terug — plus een vergoeding. Die **wederbeleggingsvergoeding** is wettelijk begrensd op **3 maanden intrest** op het vervroegd terugbetaalde kapitaal. Concreet: bij een openstaand saldo van 150.000 euro aan 3% betaalt u maximaal zo'n 1.125 euro (150.000 × 3% ÷ 4).\n\nDaarnaast moet de hypothecaire inschrijving geschrapt worden via een **handlichting** (doorhaling). Dat gebeurt bij notariële akte en kost doorgaans **700 à 1.000 euro**, afhankelijk van het ingeschreven bedrag. Die kosten zijn voor de verkoper: de koper wil uiteraard een pand vrij van inschrijvingen. Hoe dat hele traject verloopt, leest u in ons artikel over een huis verkopen met hypotheek.\n\nTel daarbij de gewone verkoopkosten — EPC, elektrische keuring, bodemattest, eventueel makelaarscommissie van 3% of meer — en de rekening van een snelle wederverkoop wordt duidelijk. Twee veelgemaakte denkfouten tot slot:\n\n• **Onnodige paniek**: veel eigenaars denken dat de 5-jaarsregel ook voor hun eigen gezinswoning geldt en stellen een noodzakelijke verkoop uit. Onterecht: de vrijstelling dekt vrijwel elke normale gezinssituatie.\n• **De heffing vergeten bij een tweede pand**: wie een geschonken woning of een opbrengstpand snel verkoopt, wordt soms verrast door de 16,5%-heffing. Bij een **erfenis** speelt die heffing dan weer niet — u verkreeg het pand om niet — maar een verkoop binnen 2 jaar boven de waarde uit de aangifte van nalatenschap kan wel bijkomende erfbelasting uitlokken.",
      },
      {
        heading: "Snel weer verkopen? Hou de rekening voorspelbaar",
        body: "Wie binnen 5 jaar na aankoop moet verkopen, doet dat zelden uit luxe. Bij een scheiding, jobverlies of onverwachte verhuis draait alles om één vraag: **wat blijft er netto over, en wanneer?** De belastingregels hierboven liggen vast — daar valt weinig aan te optimaliseren behalve de timing. Wat u wél in de hand hebt, zijn de transactiekosten en de doorlooptijd.\n\nEen directe verkoop aan wijkopenpanden.be maakt die rekensom een stuk voorspelbaarder. Er is **geen makelaarscommissie**, u ontvangt een **schriftelijk gemotiveerd bod** en kent dus meteen het exacte nettobedrag — handig om naast uw openstaand kredietsaldo en de eventuele belasting te leggen. We reageren binnen 2 uur, ook in het weekend, komen doorgaans binnen 48 uur langs en kopen het pand in de huidige staat, met betaling uit eigen middelen. De akte volgt doorgaans 2 tot 3 maanden na akkoord — wat bij een verkoop binnen de 2 jaar ook telt om de teruggavetermijn van het verkooprecht te halen.\n\nHet bod is gratis en vrijblijvend. Vergelijken met een klassiek verkooptraject kan dus altijd — u beslist pas als alle cijfers op tafel liggen.",
      },
    ],
    relatedArticles: ["meerwaardebelasting-tweede-verblijf-belgie", "belastingen-bij-woningverkoop", "huis-verkopen-met-hypotheek", "verkoop-kosten-berekenen", "notariskosten-woning-verkoop", "keuringen-bij-verkoop-woning"],
    relatedSituations: ["huis-verkopen-bij-scheiding", "huis-verkopen-bij-erfenis"],
    faqs: [
      {
        question: "Moet ik meerwaardebelasting betalen als ik mijn eigen huis binnen 5 jaar verkoop?",
        answer:
          "Nee, in de meeste gevallen niet. De eigen gezinswoning is vrijgesteld van de 16,5%-meerwaardebelasting, op voorwaarde dat ze gedurende een ononderbroken periode van minstens 12 maanden vóór de verkoop uw eigen woning was (met maximaal 6 maanden speling tot de verkoopmaand). De 5-jaarsregel treft vooral tweede verblijven, opbrengstpanden en bouwgrond — niet de woning waarin u zelf woont.",
      },
      {
        question: "Hoeveel registratiebelasting krijg ik terug als ik binnen 2 jaar verkoop?",
        answer:
          "In Vlaanderen kunt u 3/5 van het betaalde verkooprecht terugvorderen als de verkoopakte binnen 2 jaar na de aankoopakte wordt verleden. Betaalde u 12% op 250.000 euro, dan recupereert u 18.000 euro. De teruggave geldt enkel bij het standaardtarief van 12%, gebeurt niet automatisch en wordt meestal door de notaris in de verkoopakte aangevraagd.",
      },
      {
        question: "Ik verkoop mijn woning binnen 5 jaar met verlies. Kan ik dat verlies aftrekken?",
        answer:
          "Nee. De vrijstelling voor de eigen woning werkt in twee richtingen: winst wordt niet belast, maar een verlies is fiscaal ook niet aftrekbaar. Ook bij een tweede verblijf kunt u een minderwaarde niet verrekenen met andere inkomsten. Verkoopt u met verlies binnen 2 jaar, dan verzacht de teruggave van 3/5 van het verkooprecht de pijn wel gedeeltelijk.",
      },
      {
        question: "Geldt de 5-jaarsregel ook voor een geërfde of geschonken woning?",
        answer:
          "Bij een erfenis niet: u verkreeg het pand om niet, dus de 16,5%-regeling speelt niet. Let wel op als u binnen 2 jaar verkoopt boven de waarde uit de aangifte van nalatenschap — dat kan bijkomende erfbelasting kosten. Bij een schenking geldt een bijzondere regel: verkoopt u binnen 3 jaar na de schenking én binnen 5 jaar nadat de schenker kocht, dan is de meerwaarde wél belastbaar aan 16,5%.",
      },
      {
        question: "Wat kost het om mijn hypotheek stop te zetten bij een snelle verkoop?",
        answer:
          "U betaalt de bank een wederbeleggingsvergoeding van maximaal 3 maanden intrest op het openstaande kapitaal — bij 150.000 euro aan 3% is dat zo'n 1.125 euro. Daarnaast kost de handlichting (schrapping van de hypothecaire inschrijving) via de notaris doorgaans 700 à 1.000 euro. Beide kosten zijn voor de verkoper en komen bovenop het terug te betalen kredietsaldo.",
      },
      {
        question: "Hoe berekent de fiscus de meerwaarde op een tweede verblijf?",
        answer:
          "Niet op de brutowinst. De verkoopprijs wordt eerst verminderd met de verkoopkosten. De aankoopprijs wordt verhoogd met een forfait van 25% (of de hogere werkelijke kosten), plus 5% per volledig jaar bezit, plus facturen van een geregistreerde aannemer. Alleen het verschil dat dan overblijft, wordt belast aan 16,5% plus gemeentebelasting. Bij beperkte winst valt de belastbare basis daardoor vaak op nul.",
      },
    ],
  },
  {
    slug: "woning-verkopen-vanuit-buitenland",
    title: "Uw Belgische woning verkopen vanuit het buitenland: volmacht, digitale akte en fiscale aandachtspunten",
    metaTitle: "Woning verkopen vanuit het buitenland (2026)",
    metaDescription:
      "Woning in België verkopen vanuit het buitenland? Zo regelt u volmacht, digitale akte via videoconferentie, apostille en de fiscale afhandeling.",
    publishedAt: "2026-07-02",
    updatedAt: "2026-07-02",
    intro:
      "Wie in het buitenland woont en een woning in België wil verkopen, botst al snel op een praktisch probleem: voor de notariële akte moet u in principe verschijnen bij de notaris. Toch hoeft u vandaag niet meer telkens het vliegtuig te nemen. Sinds 2020 bestaat de digitale volmacht via videoconferentie, en sinds 8 april 2024 kunnen de meeste notariële akten zelfs volledig digitaal ondertekend worden met eID of itsme. Wie geen Belgische eID heeft, kan terugvallen op een volmacht via een lokale notaris met apostille of legalisatie. Daarnaast gelden voor niet-rijksinwoners specifieke fiscale regels, met in bepaalde gevallen een inhouding door de notaris. Dit artikel zet de routes, de valkuilen en de fiscale aandachtspunten op een rij.",
    sections: [
      {
        heading: "Wat kan op afstand — en waar knelt het?",
        body: "Een woningverkoop in België verloopt in twee juridische stappen: de onderhandse verkoopovereenkomst (het compromis) en de notariële akte. Voor het compromis is fysieke aanwezigheid nooit vereist: het is een onderhands document dat u geldig elektronisch kunt ondertekenen, bijvoorbeeld via een beveiligd platform dat uw identiteit verifieert.\n\nDe notariële verkoopakte ligt anders. Die is een authentieke akte: u moet verschijnen voor de notaris, fysiek of — sinds de digitalisering van het notariaat — digitaal. Wie niet kan verschijnen, laat zich vertegenwoordigen door een volmachtdrager. En daar zit de belangrijkste valkuil voor verkopers in het buitenland: **een onderhandse volmacht (een gewoon ondertekend briefje) volstaat niet voor een notariële verkoopakte**. U hebt een authentieke volmacht nodig, dus een volmacht die zelf voor een notaris werd verleden. Wie dat te laat ontdekt, verliest weken.\n\nHou ook de timing in het oog: de akte moet binnen de vier maanden na het compromis verleden worden. Uw volmacht moet dus ruim vóór die deadline in orde zijn.",
      },
      {
        heading: "Drie routes naar een geldige volmacht vanuit het buitenland",
        body: "Er zijn in de praktijk drie manieren om vanuit het buitenland aan een authentieke volmacht te geraken.\n\n1. **De digitale volmacht via videoconferentie** bij een Belgische notaris. U verschijnt online, de notaris licht de volmacht én het ontwerp van de akte toe, en u ondertekent elektronisch. Dit is veruit de snelste route — maar ze vereist een Belgische eID met pincode of een actieve itsme-account.\n\n2. **Een volmacht bij een lokale notaris in uw woonland**, die daarna een apostille of legalisatie krijgt en zo nodig beëdigd vertaald wordt naar het Nederlands, Frans of Duits. Dit werkt overal, maar telt meerdere stappen en administraties.\n\n3. **Ondertekening op een Belgische ambassade of consulaat**, of bij een Belgische notaris tijdens een bezoek aan België. Consulaire posten hebben een notariële bevoegdheid, maar die is beperkt: binnen de EU verwijzen ze u doorgaans naar een lokale notaris, en buiten de EU verloopt alles via een ontwerp dat uw Belgische notaris eerst naar de FOD Buitenlandse Zaken stuurt. Reken op afspraaktermijnen en verplaatsing.",
        table: {
          headers: ["Route", "Voor wie", "Voordelen", "Nadelen", "Doorlooptijd (indicatief)"],
          rows: [
            ["Digitale volmacht via videoconferentie", "Wie een Belgische eID (met pincode) of itsme heeft", "Snelst, geen verplaatsing, notaris licht meteen de ontwerpakte toe", "Niet mogelijk zonder Belgische eID of itsme; stabiele internetverbinding en webcam nodig", "Enkele dagen tot 2 weken"],
            ["Lokale notaris + apostille/legalisatie", "Iedereen, ook zonder Belgische eID", "Werkt wereldwijd, ook voor buitenlandse mede-eigenaars", "Apostille of legalisatieketen, vaak beëdigde vertaling; afstemming tussen twee notarissen", "2 tot 6 weken, soms langer"],
            ["Belgisch consulaat of bezoek aan België", "Belgen buiten de EU, of wie toch naar België komt", "Belgische akte, geen apostille of vertaling nodig", "Beperkte consulaire dienstverlening, afspraak- en verzendtermijnen, verplaatsing", "Afhankelijk van agenda: weken tot maanden"],
          ],
        },
      },
      {
        heading: "De digitale volmacht via videoconferentie: zo werkt het",
        body: "De digitale volmacht bestaat sinds 2020 en is intussen een vaste waarde in het Belgische notariaat, via het beveiligde platform van de notarissen (Fednot). Het verloop is eenvoudig:\n\n1. Uw notaris bereidt de volmacht en het ontwerp van de verkoopakte voor.\n2. U krijgt een uitnodiging voor een videoconferentie. Tijdens dat gesprek identificeert u zich en licht de notaris zowel de volmacht als de ontwerpakte toe — u weet dus exact wat er in uw naam ondertekend zal worden.\n3. U ondertekent de authentieke volmacht elektronisch, met uw Belgische eID en pincode of via itsme.\n4. Op de dag van de akte tekent de volmachtdrager — meestal een medewerker van het notariskantoor of een vertrouwenspersoon — in uw plaats. U hoeft daar niet bij te zijn.\n\nSinds 8 april 2024 gaat de digitalisering nog verder: de meeste notariële akten, waaronder verkoopaktes, kunnen digitaal ondertekend worden met eID of itsme, ook wanneer partijen elk bij hun eigen notaris zitten en via videoconferentie verbonden zijn. Enkel testamenten en gelijkaardige uiterste wilsbeschikkingen blijven een handgeschreven handtekening vereisen.\n\n**De belangrijke beperking**: dit alles staat of valt met Belgische digitale identificatie. Een vervallen eID, een vergeten pincode of een nooit geactiveerde itsme-account betekent dat de digitale route afvalt. Controleer dit maanden vooraf — een nieuwe eID of pincode aanvragen vanuit het buitenland loopt via het consulaat en duurt.",
      },
      {
        heading: "Apostille, legalisatie en beëdigde vertaling: het buitenlandse papierwerk",
        body: "Kiest u voor een volmacht bij een notaris in uw woonland, dan is die volmacht pas bruikbaar in België na een extra stap. Woont u in een land dat partij is bij het Apostilleverdrag van Den Haag van 5 oktober 1961 — ruim 120 landen, waaronder de hele EU, het VK, de VS, Canada en Australië — dan volstaat één apostillestempel van de bevoegde autoriteit in dat land. Woont u in een land buiten het verdrag, dan geldt de zwaardere legalisatieketen via lokale autoriteiten en de Belgische ambassade.\n\nIs de volmacht niet opgesteld in het Nederlands, Frans of Duits, dan vraagt de Belgische notaris doorgaans ook een **beëdigde vertaling**. De juiste volgorde is: document laten opmaken in het woonland, daar laten apostilleren of legaliseren, en pas daarna laten vertalen.\n\nDenk verder aan de bewijsstukken die de notaris sowieso nodig heeft en die vanuit het buitenland trager binnenkomen: een leesbare identiteitskaart of paspoort, een recent attest van burgerlijke staat of woonst, en bij gehuwden het huwelijkscontract of huwelijksstelsel — dat stelsel bepaalt mee wie moet tekenen. Bent u mede-eigenaar met familieleden verspreid over meerdere landen, dan heeft élke verkoper een eigen geldige volmacht nodig.",
      },
      {
        heading: "Fiscale aandachtspunten voor niet-inwoners",
        body: "Wie fiscaal geen rijksinwoner meer is, valt bij de verkoop van Belgisch vastgoed onder de belasting niet-inwoners (BNI). De meerwaarderegels zijn dezelfde als voor inwoners, maar de inning verloopt anders.\n\n• **Verkoop binnen de speculatietermijn**: verkoopt u een gebouw binnen de 5 jaar na aankoop, dan is de meerwaarde belastbaar tegen 16,5%; voor gronden geldt 33% bij verkoop binnen de 8 jaar. Voor niet-inwoners wordt deze belasting als **bedrijfsvoorheffing ingehouden via de notaris** bij het verlijden van de akte. Ze werkt bevrijdend: u hoeft er geen BNI-aangifte meer voor in te dienen.\n\n• **Buiten de termijn en binnen het normale beheer van privévermogen**: dan is er, net zoals voor inwoners, geen meerwaardebelasting op deze grondslag verschuldigd.\n\n• **Speculatieve verrichtingen buiten het normale beheer**: daarvoor geldt een inhouding van 30,28% op het brutobedrag, eveneens als eindbelasting.\n\nDaarbovenop speelt uw woonland. Vrijwel alle dubbelbelastingverdragen wijzen de heffingsbevoegdheid over vastgoed toe aan het land waar het vastgoed ligt — België dus — maar uw woonland kan de verkoopopbrengst of meerwaarde in eigen regels betrekken (denk aan een vermogensbelasting of eigen meerwaardetaks). Laat dat lokaal aftoetsen.\n\nPraktisch nog dit: de notaris kan de netto verkoopprijs overschrijven naar een buitenlandse rekening op uw naam, maar voert daarbij strengere controles uit in het kader van de antiwitwaswetgeving. Geef uw rekeninggegevens (IBAN/BIC) vroeg door en verwacht bij niet-Europese rekeningen extra verificatie en mogelijk enkele dagen vertraging.",
      },
      {
        heading: "Veelgemaakte fouten bij verkoop vanuit het buitenland",
        body: "Dezelfde struikelblokken keren telkens terug:\n\n• **Een onderhandse volmacht opsturen** en ervan uitgaan dat de notaris die aanvaardt voor de akte. Voor de authentieke verkoopakte is een authentieke volmacht de regel — de notaris zal een gewoon ondertekend document weigeren.\n\n• **De apostille of legalisatie vergeten**, of de stappen in de verkeerde volgorde zetten (eerst vertalen, dan pas apostilleren — dat moet omgekeerd).\n\n• **De eID-pincode niet meer kennen** of een vervallen eID hebben, waardoor de digitale volmacht op het laatste moment afvalt en u alsnog via het lokale circuit moet.\n\n• **De timing onderschatten**: tussen compromis en akte liggen maximaal vier maanden. Wie pas na het compromis aan de volmacht begint en op een consulaire afspraak of legalisatie moet wachten, komt in tijdsnood.\n\n• **Het huwelijksstelsel negeren**: bent u in het buitenland gehuwd, dan kan uw partner mee moeten tekenen, ook als het pand alleen op uw naam staat.\n\n• **Niemand ter plaatse hebben** voor bezichtigingen, sleutels, keuringen en meteropnames. Op afstand een klassiek verkooptraject coördineren is voor veel eigenaars in het buitenland de echte bottleneck, meer nog dan het notariële luik.",
      },
      {
        heading: "Verkopen vanuit het buitenland zonder eindeloos heen-en-weer",
        body: "Het notariële luik is vandaag goed op afstand te regelen; het commerciële luik veel minder. Een klassieke verkoop betekent maandenlang bezichtigingen laten begeleiden en telkens iemand ter plaatse regelen — terwijl u in een andere tijdzone zit.\n\nEen directe verkoop beperkt het aantal bewegende delen. Bij wijkopenpanden.be verloopt dat zo: u vraagt een gratis en vrijblijvend bod aan en krijgt reactie binnen 2 uur, ook in het weekend. Wij plannen doorgaans binnen 48 uur één bezoek aan het pand — daarvoor volstaat één sleutelmoment via een buur of familielid. U ontvangt een schriftelijk, gemotiveerd bod, wij kopen in de huidige staat aan en betalen uit eigen middelen, zonder makelaarscommissie. De attesten coördineren wij samen met de notaris, en de volledige notariële afhandeling kan per volmacht verlopen — digitaal als u een Belgische eID of itsme hebt, anders via een gelegaliseerde volmacht uit uw woonland. De akte volgt doorgaans 2 tot 3 maanden na akkoord, ruim binnen de wettelijke termijn. Zo herleidt u een internationale verkoop tot een handvol duidelijke stappen, zonder één overbodige vlucht.",
      },
    ],
    relatedArticles: ["verkoopbelofte-compromis-akte", "notariskosten-woning-verkoop", "belastingen-bij-woningverkoop", "meerwaardebelasting-tweede-verblijf-belgie", "erfenis-woning-stappenplan", "hoelang-duurt-huis-verkopen-belgie"],
    relatedSituations: ["huis-verkopen-bij-erfenis", "verkopen-zonder-makelaar"],
    faqs: [
      {
        question: "Kan ik mijn huis in België verkopen zonder zelf naar België te komen?",
        answer:
          "Ja. Het compromis kunt u elektronisch of per post ondertekenen, en voor de notariële akte geeft u een authentieke volmacht. Die volmacht regelt u via videoconferentie met een Belgische notaris (met eID of itsme), via een lokale notaris in uw woonland met apostille of legalisatie, of via een Belgisch consulaat buiten de EU. Op de aktedag tekent de volmachtdrager in uw plaats.",
      },
      {
        question: "Volstaat een gewone geschreven volmacht voor de verkoopakte?",
        answer:
          "Nee. Voor een authentieke verkoopakte eist de notaris in de regel een authentieke volmacht, dus een volmacht die zelf voor een notaris werd verleden. Een onderhandse volmacht — een gewoon ondertekend document — wordt voor de akte geweigerd. Voor het onderhandse compromis kan een eenvoudige volmacht of elektronische handtekening wel volstaan.",
      },
      {
        question: "Hoe werkt de digitale volmacht via videoconferentie precies?",
        answer:
          "De notaris nodigt u uit op het beveiligde videoplatform van het notariaat. Tijdens het gesprek identificeert u zich, licht de notaris de volmacht en de ontwerpakte toe, en ondertekent u elektronisch met uw Belgische eID en pincode of via itsme. Daarna tekent een volmachtdrager, vaak een notarismedewerker, de akte in uw plaats. Zonder Belgische eID of itsme is deze route niet mogelijk.",
      },
      {
        question: "Wat is een apostille en wanneer heb ik die nodig?",
        answer:
          "Een apostille is een internationale echtheidsstempel op basis van het Apostilleverdrag van Den Haag (1961). Laat u uw volmacht opmaken bij een notaris in uw woonland, dan moet die volmacht geapostilleerd worden (of gelegaliseerd als uw land geen verdragsland is) vóór de Belgische notaris ze aanvaardt. Is de volmacht niet in het Nederlands, Frans of Duits opgesteld, dan komt daar meestal een beëdigde vertaling bij.",
      },
      {
        question: "Betaal ik als niet-inwoner belasting op de verkoop van mijn Belgische woning?",
        answer:
          "Dezelfde meerwaarderegels gelden als voor inwoners: 16,5% bij verkoop van een gebouw binnen 5 jaar na aankoop, 33% voor grond binnen 8 jaar. Bij niet-inwoners houdt de notaris deze belasting als bedrijfsvoorheffing in bij de akte; ze werkt meestal bevrijdend, zodat u geen BNI-aangifte meer hoeft te doen. Buiten die termijnen is er bij normaal beheer van privévermogen geen Belgische meerwaardebelasting. Check ook de regels van uw woonland.",
      },
      {
        question: "Kan de notaris de verkoopprijs op mijn buitenlandse rekening storten?",
        answer:
          "Ja, de notaris kan het saldo overschrijven naar een buitenlandse rekening op uw naam. Verwacht wel extra controles in het kader van de antiwitwaswetgeving, zeker bij rekeningen buiten Europa, en mogelijk enkele dagen extra doorlooptijd. Geef uw IBAN- en BIC-gegevens vroeg in het dossier door en zorg dat de rekening op naam staat van de verkoper(s) zelf.",
      },
    ],
  },
  {
    slug: "ongeschikt-onbewoonbaar-verklaarde-woning-verkopen",
    title: "Ongeschikt of onbewoonbaar verklaarde woning verkopen: inventaris, heffing en uw uitwegen",
    metaTitle: "Ongeschikt verklaarde woning verkopen (2026)",
    metaDescription:
      "Woning ongeschikt of onbewoonbaar verklaard? Zo werken inventaris en heffing, en zo verkoopt u het pand toch rechtsgeldig — uw opties op een rij.",
    publishedAt: "2026-07-02",
    updatedAt: "2026-07-02",
    intro:
      "Een besluit van de burgemeester dat uw woning ongeschikt of onbewoonbaar verklaart, voelt als een stempel die alles blokkeert. Toch is het geen verkoopverbod. Wel start er een strak juridisch traject: opname in de Vlaamse inventaris (VIVOO), een jaarlijkse heffing die progressief stijgt, een herstelplicht en — bij verhuur — zelfs strafrechtelijke risico's. Wie het besluit naast zich neerlegt, ziet de kosten elk jaar oplopen. Wie doordacht handelt, heeft drie uitwegen: renoveren tot een conformiteitsattest, verkopen met correcte vermelding van het statuut, of in uitzonderlijke gevallen slopen of herbestemmen. In dit artikel leest u hoe de procedure en de heffing precies werken, wat u wettelijk moet melden bij een verkoop, en waarom de tijd hier letterlijk geld kost.",
    sections: [
      {
        heading: "Hoe een woning ongeschikt of onbewoonbaar wordt verklaard",
        body: "Het traject start meestal met een klacht van een huurder of een controle door de gemeente. Een woningcontroleur voert dan een **conformiteitsonderzoek** uit en stelt een technisch verslag op. Sinds de hervorming van de woningkwaliteitsbewaking werkt Vlaanderen met drie gebrekencategorieën:\n\n• **Categorie I**: lichte gebreken (bv. beperkte vochtschade, kleine beschadigingen). Let op: zeven of meer categorie I-gebreken tellen samen als één gebrek van categorie II.\n• **Categorie II**: ernstige gebreken zonder acuut risico — de woning is dan **ongeschikt**.\n• **Categorie III**: gebreken met een acuut veiligheids- of gezondheidsrisico — de woning is **onbewoonbaar** en mag niet langer bewoond worden.\n\nOp basis van het verslag en het advies van Wonen in Vlaanderen neemt de **burgemeester een besluit**, nadat u als eigenaar gehoord bent. Tegen dat besluit kunt u binnen 30 dagen na de betekening beroep aantekenen bij de Vlaamse minister van Wonen. Doe dat alleen met stevige argumenten: een beroep schort de problemen niet op en de gebreken blijven gedocumenteerd.",
      },
      {
        heading: "De VIVOO-inventaris en de heffing die elk jaar zwaarder weegt",
        body: "Na het besluit wordt uw woning opgenomen in de **Vlaamse inventaris van ongeschikte en onbewoonbare woningen (VIVOO)**. Staat het pand daar **12 opeenvolgende maanden** op, dan wordt de jaarlijkse heffing — in de volksmond de krotbelasting — verschuldigd, en dat elk jaar opnieuw tot de schrapping.\n\nDe Vlaamse heffing wordt berekend als **geïndexeerd kadastraal inkomen × (P + 1)**. Daarbij is P het aantal periodes van 12 maanden dat de woning ononderbroken op de inventaris staat, met een maximum van 4. Ligt het geïndexeerde KI onder 990 euro, dan rekent de Vlaamse Belastingdienst met 990 euro als minimum. Concreet: de heffing verdubbelt tot vervijfvoudigt naarmate u langer wacht — zelfs voor een bescheiden rijwoning loopt dat na enkele jaren op tot duizenden euro's per jaar.\n\nBelangrijk voor de regio Antwerpen: gemeenten mogen een **eigen heffing** op ongeschikte en onbewoonbare panden invoeren, die dan doorgaans in de plaats komt van de Vlaamse. Stad Antwerpen heeft zo'n eigen belasting, met bedragen die eveneens oplopen per jaar op de inventaris. De precieze tarieven verschillen per gemeente en per aanslagjaar; het mechanisme — hoe langer op de inventaris, hoe duurder — is overal hetzelfde.",
      },
      {
        heading: "Meer dan een belasting: verhuurverbod, herstelplicht en sociaal beheersrecht",
        body: "De heffing is niet het enige gevolg. Een ongeschikt- of onbewoonbaarverklaring activeert een reeks verplichtingen:\n\n• **Verhuren is strafbaar.** Een woning die ongeschikt of onbewoonbaar is verklaard verder verhuren of te huur stellen, is een misdrijf. De Vlaamse Wooninspectie kan een proces-verbaal opstellen en er dreigen GAS-boetes of strafvervolging. Bij onbewoonbaarheid moet de bewoning stoppen; de gemeente kan bewoners herhuisvesten en die kosten op u verhalen.\n• **U heeft een herstelplicht.** Het besluit verplicht u de gebreken weg te werken. Schrapping uit de inventaris kan pas via een **conformiteitsattest** na herstel, een opheffingsbesluit na sloop of herbestemming, of een hercontrole waaruit blijkt dat er geen categorie II- of III-gebreken meer zijn.\n• **Sociaal beheersrecht.** Staat het pand minstens twee jaar op de inventaris, dan kan de gemeente in bepaalde gevallen het beheer overnemen, renoveren en het pand sociaal verhuren.\n\nVerwar dit statuut niet met **leegstand**: een leegstaande woning kan perfect in orde zijn, maar wordt geviseerd omdat ze niet gebruikt wordt. Ongeschiktheid en onbewoonbaarheid gaan over de kwaliteit van de woning zelf. Beide inventarissen en heffingen bestaan naast elkaar — over de leegstandsheffing leest u meer in ons artikel over de leegstandsheffing in Antwerpen.",
      },
      {
        heading: "Mag u een ongeschikt of onbewoonbaar verklaarde woning verkopen? Ja — met meldingsplicht",
        body: "Een veelgehoord misverstand: dat een geïnventariseerd pand niet verkocht mag worden. Dat klopt niet. **Verkopen mag**, maar de wet legt strikte spelregels op:\n\n1. **Meldingsplicht aan de koper.** U moet de opname in de inventaris en het besluit van de burgemeester vermelden in de publiciteit, in de onderhandse verkoopovereenkomst (compromis) én in de notariële akte, inclusief de juridische gevolgen ervan.\n2. **De notaris meldt de overdracht.** Binnen 30 dagen na het verlijden van de akte wordt de eigendomsoverdracht gemeld aan de inventarisbeheerder. Verzwijgen is dus zinloos en gevaarlijk: het opent de deur naar nietigverklaring of schadeclaims wegens verborgen gebreken.\n3. **De koper neemt de herstelplicht over.** Het statuut verhuist mee met het pand. De nieuwe eigenaar kan wel een **opschorting van de heffing van twee jaar** aanvragen vanaf de notariële akte, op voorwaarde dat hij het pand in die periode niet doorverkoopt en het tijdig laat schrappen uit de inventaris (of een andere vrijstelling bekomt).\n\nDie opschortingstermijn is meteen de reden waarom zulke panden vooral interessant zijn voor kopers die snel en professioneel kunnen renoveren: zij krijgen twee jaar ademruimte om het pand conform te maken zonder heffing.",
      },
      {
        heading: "Uw drie uitwegen naast elkaar",
        body: "Als eigenaar van een ongeschikt of onbewoonbaar verklaard pand heeft u in essentie drie opties. De juiste keuze hangt af van uw budget, uw tijd en uw zin om zelf een renovatietraject met keuringen en hercontroles te doorlopen.\n\nZelf renoveren loont vooral als de gebreken beperkt zijn (enkele categorie II-punten, bv. elektriciteit en vocht) en u de werken snel kunt financieren. Bij structurele problemen — stabiliteit, volledige technieken, dak én vocht — loopt de kostprijs vaak hoger op dan de meerwaarde na herstel. Niets doen is de duurste optie: de heffing stijgt progressief, het pand verliest verder waarde en na twee jaar komt zelfs het sociaal beheersrecht in beeld.",
        table: {
          headers: ["", "Renoveren tot conformiteitsattest", "Verkopen in huidige staat", "Niets doen"],
          rows: [
            ["Kostprijs", "Vaak tienduizenden euro's, vooraf te financieren", "Geen investering; verkoopprijs weerspiegelt de staat", "Heffing stijgt elk jaar (factor P loopt op tot 4)"],
            ["Doorlooptijd", "Maanden tot jaren, plus hercontrole en attest", "Akkoord op enkele dagen mogelijk; akte doorgaans 2-3 maanden later", "Onbeperkt — de teller blijft lopen"],
            ["Heffing", "Stopt pas na schrapping uit de inventaris", "Koper kan 2 jaar opschorting krijgen; uw teller stopt bij de akte", "Verschuldigd na 12 maanden, daarna jaarlijks en progressief"],
            ["Risico", "Budgetoverschrijding, aannemersplanning, herkeuring", "Correcte meldingsplicht is essentieel", "Verhuurverbod, sociaal beheersrecht, verder waardeverlies"],
            ["Voor wie", "Eigenaars met budget, tijd en renovatie-ervaring", "Wie zekerheid wil en de last wil doorgeven", "Eigenlijk niemand"],
          ],
        },
      },
      {
        heading: "Veelgemaakte fouten die u geld kosten",
        body: "In de praktijk zien we bij eigenaars van geïnventariseerde panden steeds dezelfde valkuilen:\n\n• **Blijven verhuren na het besluit.** Sommige eigenaars laten de huurder zitten \"tot er een oplossing is\". Dat is geen grijze zone maar een misdrijf, met de Wooninspectie en mogelijke strafvervolging als gevolg. Bovendien kan de huurder huurvermindering of terugbetaling eisen.\n• **Verkopen zonder het statuut te vermelden.** Wie de inventarisatie verzwijgt in advertentie, compromis of akte, riskeert de vernietiging van de verkoop of een vordering wegens verborgen gebreken — en de notaris zal het statuut sowieso ontdekken bij zijn opzoekingen.\n• **Jarenlang wachten.** Elke periode van 12 maanden op de inventaris verhoogt de factor P en dus de heffing. Wie vier jaar wacht, betaalt tot vijf keer het geïndexeerde KI per jaar, terwijl het pand verder aftakelt en de renovatieplicht bij verkoop van energieverslindende woningen er nog bovenop komt.\n• **Halfslachtig renoveren.** Enkel de zichtbare gebreken aanpakken zonder hercontrole levert geen schrapping op. Zolang er geen conformiteitsattest of opheffingsbesluit is, blijft de woning op de inventaris staan — en blijft u betalen.\n• **Het beroep als uitstel gebruiken.** Beroep aantekenen zonder dossier wint zelden en verandert niets aan de vastgestelde gebreken. De energie gaat beter naar herstellen of verkopen.",
      },
      {
        heading: "Verkopen aan een professionele opkoper: de teller stopt bij de akte",
        body: "Op de klassieke markt is een ongeschikt of onbewoonbaar verklaard pand een moeilijk verhaal. Particuliere kopers schrikken van het besluit op de gevel, banken financieren aarzelend, en elke bezichtiging eindigt in dezelfde vragen over de inventaris en de heffing. Ondertussen loopt uw teller door.\n\nVoor een professionele opkoper ligt dat anders. **wijkopenpanden.be** koopt woningen in de regio Antwerpen aan **in de huidige staat**, ook met een ongeschikt- of onbewoonbaarverklaring. Wij kennen de Antwerpse procedures, nemen als koper de herstelplicht over en renoveren het pand tot het opnieuw conform is — precies het scenario waarvoor de tweejarige opschorting voor nieuwe eigenaars bedoeld is. Voor u stopt de heffingsteller bij het verlijden van de akte, en de meldingsplicht wordt correct afgehandeld in samenspraak met de notaris.\n\nPraktisch: u vraagt een **gratis en vrijblijvend bod** aan en krijgt reactie binnen 2 uur, ook in het weekend. Een plaatsbezoek volgt doorgaans binnen 48 uur, waarna u een **schriftelijk gemotiveerd bod** ontvangt. Wij betalen uit eigen middelen — dus geen opschortende voorwaarde van financiering — en u betaalt geen makelaarscommissie. De akte volgt doorgaans 2 tot 3 maanden na akkoord. Zo weet u snel waar u aan toe bent, zonder verdere jaren op de inventaris.",
      },
    ],
    relatedArticles: ["pand-in-slechte-staat-verkopen", "leegstandsheffing-antwerpen-2026", "huis-verkopen-na-brand-of-schade", "verkoopbelofte-compromis-akte", "energie-renovatieplicht-vlaanderen-2026", "verborgen-gebreken-woning-verkoop-belgie"],
    relatedSituations: ["opknappand-verkopen", "pand-met-huurders-verkopen"],
    faqs: [
      {
        question: "Mag ik een ongeschikt of onbewoonbaar verklaarde woning verkopen?",
        answer:
          "Ja, verkopen mag altijd. U moet het besluit en de opname in de Vlaamse inventaris (VIVOO) wel uitdrukkelijk vermelden in de publiciteit, het compromis en de notariële akte. De notaris meldt de overdracht binnen 30 dagen aan de inventarisbeheerder. De koper neemt de herstelplicht over en kan een opschorting van de heffing van twee jaar aanvragen.",
      },
      {
        question: "Wat is het verschil tussen ongeschikt en onbewoonbaar?",
        answer:
          "Ongeschikt betekent dat de woning ernstige gebreken van categorie II vertoont maar geen acuut gevaar oplevert; bewoning is af te raden maar niet verboden. Onbewoonbaar betekent dat er categorie III-gebreken zijn met een acuut veiligheids- of gezondheidsrisico: de woning mag niet langer bewoond worden en de bewoners moeten vertrekken. Beide statuten leiden tot opname in de inventaris.",
      },
      {
        question: "Hoeveel bedraagt de heffing op een ongeschikte of onbewoonbare woning?",
        answer:
          "De Vlaamse heffing wordt verschuldigd zodra de woning 12 opeenvolgende maanden op de inventaris staat en bedraagt het geïndexeerde kadastraal inkomen vermenigvuldigd met (P + 1), waarbij P het aantal volledige jaren op de inventaris is (maximaal 4). Voor de berekening geldt een minimum-KI van 990 euro. Gemeenten zoals Antwerpen kunnen een eigen, eveneens oplopende heffing toepassen.",
      },
      {
        question: "Mag ik mijn ongeschikt verklaarde woning nog verhuren?",
        answer:
          "Nee. Een woning die ongeschikt of onbewoonbaar is verklaard verder verhuren of te huur stellen, is strafbaar. De Vlaamse Wooninspectie kan een proces-verbaal opstellen en er dreigen boetes of strafvervolging. Bij onbewoonbaarheid moet de bewoning onmiddellijk stoppen en kan de gemeente de herhuisvestingskosten van de bewoners op u verhalen.",
      },
      {
        question: "Hoe raakt een woning weer van de inventaris?",
        answer:
          "Er zijn drie wegen: een conformiteitsattest aanvragen nadat alle gebreken hersteld zijn, een opheffingsbesluit na sloop of herbestemming van het pand, of een hercontrole waaruit blijkt dat er geen gebreken van categorie II of III meer zijn. Zolang geen van die drie gebeurt, blijft de woning geïnventariseerd en blijft de jaarlijkse heffing lopen.",
      },
      {
        question: "Stopt de heffing als ik mijn geïnventariseerd pand verkoop?",
        answer:
          "Voor u als verkoper stopt de opbouw bij de eigendomsoverdracht: na de notariële akte bent u geen houder van het zakelijk recht meer. De woning blijft wel op de inventaris staan. De nieuwe eigenaar kan een opschorting van twee jaar aanvragen, op voorwaarde dat hij niet doorverkoopt en het pand binnen die termijn laat schrappen — een scenario dat een professionele koper met renovatieplannen goed kent.",
      },
    ],
  },
  {
    slug: "eerst-kopen-dan-verkopen-overbruggingskrediet",
    title: "Eerst kopen, dan verkopen: overbruggingskrediet, dubbele kosten en hoe u de timing beheerst",
    metaTitle: "Overbruggingskrediet bij huis verkopen: zo werkt het (2026)",
    metaDescription:
      "Eerst kopen, dan verkopen? Zo werkt een overbruggingskrediet: looptijd, rente, kosten en risico's. En hoe een vaste verkoopprijs de overbrugging verkort.",
    publishedAt: "2026-07-02",
    updatedAt: "2026-07-02",
    intro:
      "Uw droomwoning staat te koop, maar uw huidige huis is nog niet verkocht. Duizenden Vlaamse gezinnen zitten elk jaar in precies die situatie. De klassieke oplossing is een overbruggingskrediet: de bank schiet de verwachte verkoopopbrengst voor, zodat u de nieuwe woning al kunt betalen. Dat werkt, maar het is geen gratis comfort. U betaalt maandelijks intresten, draagt tijdelijk de lasten van twee woningen en neemt een risico op de verkoopprijs en de verkooptermijn. Wie de mechaniek kent, kan de kosten beperken en de valkuilen vermijden. In dit artikel leest u hoe een overbruggingskrediet werkt bij de Belgische banken, wat het echt kost, waar het misloopt en welke alternatieven er zijn — inclusief de route waarbij u eerst zekerheid over uw verkoopprijs krijgt en pas daarna koopt.",
    sections: [
      {
        heading: "Hoe werkt een overbruggingskrediet precies?",
        body: "Een overbruggingskrediet is een kortlopend krediet waarmee de bank de verwachte opbrengst van uw huidige woning voorschiet. U gebruikt dat bedrag om uw nieuwe woning te betalen, en zodra uw oude woning verkocht is, lost u het volledige kapitaal **in één keer** af met de verkoopopbrengst.\n\nDe structuur verschilt van een gewone woonlening:\n\n• **Geen kapitaalaflossing tijdens de looptijd.** U betaalt doorgaans enkel maandelijks intresten; bij Belfius bijvoorbeeld betaalt u maandelijks alleen de interesten en wordt het kapitaal terugbetaald op de eindvervaldag of bij de verkoop.\n• **Het bedrag hangt af van uw huidige woning**, niet van uw inkomen alleen. Banken lenen doorgaans 70 tot 100% van de verwachte verkoopprijs, min het openstaande saldo van uw lopende hypotheek. Argenta gaat bijvoorbeeld tot 95% van de marktwaarde als de woning nog niet verkocht is, en tot 100% van de verkoopprijs als er al een compromis getekend is.\n• **De rentevoet ligt vast** voor de volledige looptijd.\n\nBanken rekenen bewust met een voorzichtige schatting: liever te laag dan te hoog, want het krediet moet volledig terugbetaald kunnen worden uit de verkoop.",
      },
      {
        heading: "Looptijd en rente: wat bieden de banken in 2026?",
        body: "De looptijd verschilt sterk per bank, en dat is belangrijker dan het lijkt:\n\n• **KBC**: maximaal 12 maanden, eenmalig verlengbaar met 12 maanden als de woning nog niet verkocht is. Verkoopt u sneller, dan betaalt u geen herbeleggingsvergoeding bij vervroegde terugbetaling.\n• **Belfius**: maximale looptijd van 2 jaar, minimumbedrag 12.500 euro.\n• **Argenta**: tot 24 maanden voor een bestaande woning en tot 36 maanden bij nieuwbouw, maar enkel in combinatie met een Argenta-hypotheek. Verwacht u meer dan 12 maanden nodig te hebben, dan moet u aantonen dat u de dubbele woonlast zo lang kunt dragen.\n\nDe rentevoet van een overbruggingskrediet ligt doorgaans **hoger dan die van een klassieke woonlening**, omdat de looptijd kort is en het risico voor de bank groter. Medio 2026 situeren de tarieven zich grosso modo tussen 4 en 6% op jaarbasis, afhankelijk van bank, bedrag en dossier. Op een overbrugging van 200.000 euro betekent elk procentpunt 2.000 euro intrest per jaar — vergelijken loont dus, zeker omdat sommige banken de overbrugging koppelen aan de nieuwe hypotheek.",
      },
      {
        heading: "Wat kost een overbrugging echt? Een simulatie",
        body: "Naast de intresten komen er eenmalige kosten bij. De **dossierkosten** bedragen bij de meeste banken circa 300 euro voor een losstaand overbruggingskrediet (tot 500 euro in combinatie met een hypothecaire lening; enkele spelers rekenen niets aan).\n\nDe grootste variabele is de **waarborg**. Drie formules komen voor:\n\n1. **Volledige hypothecaire inschrijving**: de duurste optie — voor een gemiddeld krediet al snel meer dan 6.000 euro aan registratierechten, hypotheekkosten en notariskosten.\n2. **Hypothecair mandaat**: u geeft de bank een volmacht om later een hypotheek te nemen. Voor een overbrugging van 150.000 euro kost dat ongeveer 1.100 euro.\n3. **Onherroepelijke opdracht aan de notaris**: de notaris verbindt zich ertoe het krediet rechtstreeks terug te betalen bij het verlijden van de verkoopakte. Deze formule is gratis, maar niet elke bank aanvaardt ze als enige waarborg.\n\nOnderstaande simulatie toont de totale kostprijs van een overbrugging van 200.000 euro gedurende 12 maanden tegen 4,5%, met hypothecair mandaat. Wilt u het volledige kostenplaatje van uw verkoop kennen, bekijk dan ook ons artikel over verkoopkosten berekenen.",
        table: {
          headers: ["Kostenpost", "Bedrag (indicatief)", "Toelichting"],
          rows: [
            ["Intresten (4,5% op € 200.000)", "€ 9.000 (± € 750/maand)", "Enkel intresten, geen kapitaalaflossing"],
            ["Dossierkosten bank", "± € 300", "Tot € 500 bij combinatie met hypotheek"],
            ["Hypothecair mandaat", "± € 1.100 à € 1.500", "Volledige inschrijving kost ruim € 6.000"],
            ["Dubbele vaste lasten (verzekering, onroerende voorheffing, energie, onderhoud)", "± € 3.000 à € 4.500", "Sterk afhankelijk van de woning"],
            ["Totaal over 12 maanden", "± € 13.500 à € 15.000", "Elke extra maand kost ± € 1.000 à € 1.200"],
          ],
        },
      },
      {
        heading: "Het grootste risico: uw woning verkoopt trager of voor minder",
        body: "Een overbruggingskrediet is gebouwd op één aanname: dat uw woning binnen de looptijd verkoopt tegen (minstens) de geschatte prijs. Gaat die aanname niet op, dan stapelen de problemen zich op:\n\n• **De looptijd verstrijkt.** Verlengen kan soms — bij KBC eenmalig met 12 maanden — maar het is geen recht. Bij een verlenging kan de bank bovendien een hogere rentevoet aanrekenen.\n• **De opbrengst valt tegen.** Verkoopt u uiteindelijk voor minder dan geschat, dan volstaat de opbrengst mogelijk niet om het krediet volledig af te lossen. Het verschil moet u uit eigen zak bijpassen, bovenop alle betaalde intresten.\n• **Verkopen onder tijdsdruk.** Hoe dichter de eindvervaldag nadert, hoe zwakker uw onderhandelingspositie. Kandidaat-kopers voelen dat, en in het slechtste geval dreigt een gedwongen verkoop tegen een lagere prijs.\n\nDe veelgemaakte fouten liggen in het verlengde daarvan: het krediet dimensioneren op een **te optimistische vraagprijs**, een overbrugging afsluiten **zonder exitplan** (wat als de woning na 18 maanden nog te koop staat?), en het compromis voor de nieuwe woning tekenen **zonder opschortende voorwaarde** van financiering.",
      },
      {
        heading: "Dubbele lasten en de valkuil van de leegstaande woning",
        body: "Zolang beide woningen op uw naam staan, betaalt u alles dubbel: **twee brandverzekeringen, twee keer onroerende voorheffing, twee energiecontracten** en het onderhoud van twee panden. Reken al snel op enkele honderden euro's per maand bovenop de intresten van de overbrugging.\n\nVerhuist u naar de nieuwe woning terwijl de oude te koop staat, dan komt daar een onderschat probleem bij: **leegstand**. Drie effecten spelen tegelijk:\n\n• **Uw verzekering.** Meld leegstand altijd aan uw verzekeraar. Doet u dat niet, dan kan de dekking bij schade verminderd of zelfs geweigerd worden. Veel verzekeraars beperken na circa drie maanden leegstand de waarborgen voor inbraak en diefstal.\n• **Uw verkoopprijs.** Een leeggehaalde, onverwarmde woning oogt minder aantrekkelijk op bezoeken en foto's, en kopers ruiken onderhandelingsruimte bij een eigenaar die al verhuisd is.\n• **Het pand zelf.** Vocht, vorst en inbraak treffen leegstaande woningen vaker; kleine gebreken blijven onopgemerkt.\n\nStaat uw woning al een tijd te koop terwijl de teller loopt? Lees dan zeker ons artikel over een woning die al maanden te koop staat.",
      },
      {
        heading: "De fiscale klok: het 2%-tarief en de tweejaarstermijn",
        body: "Wie eerst koopt en daarna verkoopt, moet ook naar de registratiebelasting kijken. In Vlaanderen betaalt u voor de aankoop van uw **enige eigen woning** slechts 2% verkooprecht in plaats van het standaardtarief van 12%. Voorwaarde is onder meer dat u op de datum van de notariële akte geen volle eigenaar bent van een andere woning of bouwgrond.\n\nBezit u op dat moment nog uw huidige woning (zogenaamd *verhinderend bezit*), dan is het 2%-tarief niet verloren, maar er loopt een klok: u moet die woning **binnen de twee jaar na de aankoopakte verkopen**, en er moet een causaal verband bestaan tussen die verkoop en de nieuwe aankoop. In de praktijk betaalt u bij de aankoop eerst 12% en vraagt u na de verkoop de teruggave van het verschil (10 procentpunten) aan de Vlaamse Belastingdienst. Op een aankoop van 350.000 euro gaat dat om **35.000 euro** — geen detail dus.\n\nSinds 1 januari 2026 zijn de voorwaarden bovendien verstrengd: u moet binnen de drie jaar uw domicilie op het nieuwe adres nemen én er minstens één jaar ononderbroken ingeschreven blijven. Raakt uw oude woning niet tijdig verkocht, dan is het voordeel definitief verloren. De verkooptermijn bepaalt dus niet alleen uw kredietkosten, maar ook uw belastingfactuur.",
      },
      {
        heading: "Alternatieven: timing kopen in plaats van tijd huren",
        body: "Een overbruggingskrediet koopt tijd, maar tegen een reële prijs en met een open einde. Bekijk daarom altijd de alternatieven:\n\n• **Verkopen met een langere aktetermijn.** U verkoopt eerst en spreekt met de koper een ruimere periode tussen compromis en akte af, zodat u tijd heeft om te kopen en te verhuizen.\n• **Tijdelijk huren.** U verkoopt eerst, huurt kort tussenin en koopt daarna zonder tijdsdruk. Dubbele verhuis, maar geen krediet- of prijsrisico.\n• **Eerst zekerheid, dan kopen.** U laat een professionele koper een bindend bod op uw woning uitbrengen vóór u de nieuwe aankoop tekent. Dan weet u exact met welk budget u kunt kopen.\n\nDie laatste route is precies wat een directe verkoop aan wijkopenpanden.be mogelijk maakt. De grootste onzekerheid bij eerst kopen is immers niet de rentevoet, maar de **verkooptermijn** van uw huidige woning. Een vast, schriftelijk gemotiveerd bod neemt die onzekerheid weg: u kent de prijs, wij kopen in de huidige staat en betalen uit eigen middelen, zonder financieringsvoorbehoud en zonder makelaarscommissie. De akte volgt doorgaans 2 tot 3 maanden na akkoord en **u kiest de aktedatum mee** — zodat die aansluit op uw nieuwe aankoop. Een overbruggingskrediet wordt zo veel korter, of zelfs overbodig.\n\nEen bod aanvragen is gratis en vrijblijvend: u krijgt een reactie binnen 2 uur, ook in het weekend, en een bezoek volgt doorgaans binnen 48 uur. Zo rekent u niet op een schatting, maar op een cijfer dat vaststaat — en beheerst u zelf de timing tussen kopen en verkopen.",
      },
    ],
    relatedArticles: ["huis-verkopen-met-hypotheek", "hoelang-duurt-huis-verkopen-belgie", "verkoop-kosten-berekenen", "bod-aanvragen-vrijblijvend-bindend", "compromis-verkoop-woning-belgie", "wanneer-beste-moment-woning-verkopen"],
    relatedSituations: ["verkopen-zonder-makelaar", "opknappand-verkopen"],
    faqs: [
      {
        question: "Hoeveel kan ik lenen met een overbruggingskrediet?",
        answer:
          "Banken lenen doorgaans 70 tot 100% van de verwachte verkoopprijs van uw huidige woning, verminderd met het openstaande saldo van uw lopende hypotheek. Is uw woning al verkocht (compromis getekend), dan kan het percentage hoger liggen dan wanneer ze nog te koop staat. Banken schatten bewust voorzichtig, zodat het krediet zeker volledig terugbetaald kan worden uit de verkoopopbrengst.",
      },
      {
        question: "Hoe lang loopt een overbruggingskrediet?",
        answer:
          "Dat verschilt per bank: bij KBC maximaal 12 maanden (eenmalig verlengbaar met 12 maanden), bij Belfius maximaal 2 jaar, bij Argenta tot 24 maanden voor een bestaande woning en 36 maanden bij nieuwbouw. Verkoopt u sneller, dan betaalt u vervroegd terug — bij KBC bijvoorbeeld zonder herbeleggingsvergoeding. Een verlenging is nooit gegarandeerd en kan gepaard gaan met een hogere rentevoet.",
      },
      {
        question: "Betaal ik maandelijks af op een overbruggingskrediet?",
        answer:
          "U lost tijdens de looptijd geen kapitaal af. Doorgaans betaalt u maandelijks enkel de intresten; het volledige kapitaal betaalt u in één keer terug bij de verkoop van uw woning of op de eindvervaldag. Sommige formules stellen ook de intresten uit tot het einde, maar dan leent de bank meestal een kleiner percentage van de verwachte verkoopprijs.",
      },
      {
        question: "Wat als mijn woning niet verkocht is wanneer het krediet afloopt?",
        answer:
          "Dan moet u het krediet verlengen — wat de bank kan weigeren of duurder maken — of het kapitaal op een andere manier terugbetalen. Verkoopt de woning uiteindelijk voor minder dan geschat, dan past u het verschil zelf bij. Daarom is het cruciaal het krediet te baseren op een realistische waardering en vooraf een exitplan te hebben, in plaats van op een optimistische vraagprijs.",
      },
      {
        question: "Verlies ik het 2%-registratietarief als ik eerst koop en daarna verkoop?",
        answer:
          "Niet definitief. Bezit u op de aktedatum van uw nieuwe woning nog uw oude woning, dan betaalt u eerst 12%, maar verkoopt u die oude woning binnen de twee jaar (met causaal verband tussen beide transacties), dan kunt u het verschil terugvragen bij de Vlaamse Belastingdienst. Mist u die termijn, dan bent u het voordeel — 10 procentpunten — definitief kwijt.",
      },
      {
        question: "Kan een overbruggingskrediet vermeden worden?",
        answer:
          "Ja, als u de verkoop van uw huidige woning vastlegt vóór of gelijktijdig met uw aankoop. Dat kan via een verkoop met langere aktetermijn, tijdelijk huren, of een bindend bod van een professionele koper zoals wijkopenpanden.be. In dat laatste geval kent u de prijs vooraf en kiest u de aktedatum mee, waardoor de overbrugging heel kort wordt of volledig wegvalt.",
      },
    ],
  },
  {
    slug: "huis-verkopen-na-brand-of-schade",
    title: "Huis verkopen na brand of zware schade in Vlaanderen: verzekering, attesten en de keuze tussen herstellen en verkopen",
    metaTitle: "Huis verkopen na brand of zware schade: gids 2026",
    metaDescription:
      "Woning verkopen na brand of zware schade? Lees hoe de schaderegeling verloopt, wat de wederopbouwclausule betekent en welke attesten u nodig hebt.",
    publishedAt: "2026-07-05",
    updatedAt: "2026-07-05",
    intro:
      "Een brand of zware waterschade zet uw leven op zijn kop. Naast de emotionele klap komt er meteen een reeks praktische en juridische vragen op u af: hoe verloopt de schaderegeling met de verzekeraar, wat moet er meteen gebeuren om verdere schade te voorkomen, en krijgt u de volledige vergoeding als u beslist om niet herop te bouwen maar te verkopen? Veel eigenaars weten niet dat de uitbetaling van de brandverzekering vaak gekoppeld is aan de heropbouw, en dat verkopen in beschadigde staat andere gevolgen heeft voor de vergoeding. Daarnaast blijven de gewone verkoopverplichtingen gelden: ook voor een zwaar beschadigde woning hebt u in principe een EPC, een asbestattest en andere documenten nodig. Dit artikel zet op een rij wat wettelijk vastligt, wat van uw polis afhangt en welke opties u hebt: herstellen, heropbouwen of verkopen in de huidige staat.",
    sections: [
      {
        heading: "De eerste dagen na de brand: aangifte, schadebeperking en eventuele verzegeling",
        body: "Doe zo snel mogelijk **aangifte bij uw brandverzekeraar**, meestal binnen de termijn die uw polis voorschrijft. Verzamel bewijsmateriaal: foto's, video's, aankoopfacturen en een eerste lijst van beschadigde goederen. Gooi niets weg voordat de expert van de verzekeraar is langsgekomen, tenzij het om veiligheidsredenen niet anders kan.\n\nAls verzekerde hebt u een **schadebeperkingsplicht**: u moet redelijke maatregelen nemen om verdere schade te voorkomen. Denk aan het laten afdekken van het dak, het dichtmaken van ramen en deuren tegen inbraak en weer, en waar nodig het **stutten van instabiele delen**. Bespreek deze dringende kosten vooraf met de verzekeraar; dringende beveiligingswerken worden doorgaans mee in de schaderegeling opgenomen.\n\nBij een brand met onduidelijke oorzaak of een vermoeden van kwaad opzet kan het **parket een branddeskundige aanstellen** en de woning tijdelijk laten verzegelen. Zolang die verzegeling loopt, hebt u geen vrije toegang tot het pand en ligt ook de schaderegeling deels stil. Dat is vervelend, maar het onderzoek dient ook uw belang: het rapport over de brandoorzaak speelt mee in het verzekeringsdossier.\n\n**Opruimings- en afbraakkosten** zijn in veel woningpolissen gedekt, maar de omvang van die dekking verschilt per contract. Vraag uw verzekeraar of makelaar schriftelijk te bevestigen wat precies gedekt is voordat u een aannemer opdracht geeft.",
      },
      {
        heading: "Hoe de schaderegeling verloopt: expertise, tegenexpertise en derde expert",
        body: "Na uw aangifte stuurt de verzekeraar een **expert** die de schade begroot. Diens raming vormt de basis van het vergoedingsvoorstel. U bent niet verplicht dat voorstel zomaar te aanvaarden.\n\nBent u het niet eens met de begroting, dan kunt u een **tegenexpert** aanstellen: een deskundige die uitsluitend uw belangen verdedigt. Bij grote schade, zoals na een brand, is dat een gangbare stap. De kosten van de tegenexpert worden in veel polissen geheel of gedeeltelijk terugbetaald volgens een barema, vaak via de brandpolis zelf of via uw rechtsbijstandsverzekering. Kijk dit na in uw contract voordat u iemand aanstelt.\n\nRaken de expert van de verzekeraar en uw tegenexpert het niet eens, dan wordt doorgaans een **derde expert** aangesteld die de knoop doorhakt. De kosten daarvan worden in de regel verdeeld volgens wat de polis bepaalt.\n\nSinds 1 juli 2025 gelden er bovendien **nieuwe wettelijke regels over expertises in de brandverzekering** (aanpassingen aan de wet van 4 april 2014 betreffende de verzekeringen), die de positie van de verzekerde in de expertiseprocedure verduidelijken.\n\nEen praktische tip: onderteken geen definitieve afrekening zolang u overweegt te verkopen in plaats van te herstellen. De keuze tussen heropbouwen en verkopen beïnvloedt namelijk hoeveel er wordt uitbetaald, zoals hieronder uitgelegd.",
      },
      {
        heading: "De wederopbouwclausule: krijgt u de volledige vergoeding als u verkoopt in plaats van heropbouwt?",
        body: "Dit is voor twijfelende eigenaars het belangrijkste punt. De meeste Belgische woningpolissen verzekeren het gebouw tegen **nieuwwaarde**: de kostprijs om het opnieuw op te bouwen. Maar die volledige nieuwwaarde wordt doorgaans alleen uitbetaald **als u effectief heropbouwt of herstelt**.\n\nDe vergoedingsregels zijn vastgelegd in de verzekeringswetgeving (wet van 4 april 2014 en het koninklijk besluit van 24 december 1992 over de brandverzekering):\n\n• Bij heropbouw wordt de vergoeding vaak **in schijven** uitbetaald, naarmate de werken vorderen. U krijgt eerst een deel en de rest volgt op basis van facturen of de voortgang van de werf.\n• Bouwt u **niet** herop en is uw gebouw verzekerd tegen nieuwwaarde, dan wordt de vergoeding doorgaans beperkt tot **80% van de nieuwwaarde**, rekening houdend met de slijtage van het gebouw. De exacte berekening hangt af van uw polis.\n• Sommige polissen bevatten strengere bedingen die de vergoeding zonder heropbouw verder beperken; wat precies geldt, hangt af van uw contract.\n\nConcreet: wie verkoopt in plaats van heropbouwt, ontvangt doorgaans een **lagere vergoeding** dan wie heropbouwt. Dat is geen sanctie, maar een gevolg van hoe de nieuwwaardeverzekering werkt. Vraag uw verzekeraar of tegenexpert om beide scenario's cijfermatig naast elkaar te zetten voordat u beslist. Pas dan kunt u eerlijk vergelijken: vergoeding bij heropbouw plus herstelde woning, tegenover lagere vergoeding plus verkoopprijs in de huidige staat.",
      },
      {
        heading: "Verkopen vóór de schaderegeling is afgerond: mag dat, en wat met de vergoeding?",
        body: "U mag een beschadigd of zelfs uitgebrand pand **verkopen voordat het verzekeringsdossier is afgesloten**. Er bestaat geen wettelijk verbod om te verkopen tijdens een lopende schaderegeling, al moet u de koper uiteraard correct informeren over de schade en het lopende dossier.\n\nDe **schadevergoeding** voor een schadegeval dat plaatsvond toen u eigenaar was, komt in principe aan u als verzekerde toe, ook als de uitbetaling pas na de verkoop volgt. In de praktijk zijn er twee gangbare formules:\n\n• U verkoopt het pand in beschadigde staat en **houdt de vordering op de verzekeraar zelf**. De verkoopprijs weerspiegelt dan de beschadigde toestand.\n• U draagt de rechten op de schadevergoeding **over aan de koper**, wat in het compromis en de notariële akte wordt vastgelegd. De prijs houdt daar dan rekening mee.\n\nLaat u hierbij begeleiden door uw **notaris**: de formulering in de akte bepaalt wie welke aanspraak heeft, en de verzekeraar moet correct worden ingelicht.\n\nGoed om te weten: bij verkoop eindigt uw brandpolis niet meteen. De wet bepaalt dat de verzekering van rechtswege pas **drie maanden na het verlijden van de authentieke akte** eindigt. Tot dan geniet ook de nieuwe eigenaar dekking, tenzij die al een eigen polis heeft afgesloten.",
      },
      {
        heading: "Welke attesten hebt u nodig om een zwaar beschadigd pand te verkopen?",
        body: "Ook voor een beschadigde woning gelden in Vlaanderen de **gewone verkoopverplichtingen**. Er bestaat geen algemene vrijstelling voor panden die er slecht aan toe zijn; enkel voor bepaalde niet-residentiële gebouwen met een sloopvergunning is er een EPC-uitzondering. Voor een woning hebt u de attesten dus in principe nodig, ook als de koper vermoedelijk zal slopen.\n\nBijzonder aandachtspunt na brand: **asbest**. In woningen van vóór 2001 kan een brand asbesthoudende materialen (zoals leien of golfplaten) beschadigen, waardoor vezels vrijkomen. De opruiming daarvan is gespecialiseerd werk, en de asbestdeskundige zal de situatie in het asbestattest documenteren. Bespreek met uw verzekeraar in hoeverre asbestverwijdering in de schaderegeling zit.\n\nEen beschadigde woning laten keuren is soms praktisch lastig, bijvoorbeeld als delen onveilig zijn. Bespreek dit vooraf met de EPC-deskundige en de keurder; zij bepalen wat veilig opgemeten kan worden.",
        table: {
          headers: ["Attest of keuring", "Verplicht bij verkoop?", "Aandachtspunt na brand of zware schade"],
          rows: [
            ["EPC (energieprestatiecertificaat)", "Ja, al vanaf de eerste advertentie", "Geen algemene uitzondering voor beschadigde woningen, ook niet bij geplande sloop"],
            ["Asbestattest", "Ja, voor gebouwen met bouwjaar vóór 2001", "Brand kan asbest beschadigen en vezels verspreiden; opruiming is gespecialiseerd werk"],
            ["Elektriciteitskeuring", "Ja", "Na brandschade is de installatie vaak afgekeurd; verkoop kan wel, de koper erft de herstelplicht"],
            ["Bodemattest (OVAM)", "Ja, bij elke verkoop", "Aan te vragen via de notaris of rechtstreeks bij OVAM"],
            ["Keuringsattest stookolietank", "Ja, indien er een stookolietank aanwezig is", "Controleer of de tank bij de brand beschadigd raakte"],
          ],
        },
      },
      {
        heading: "Onbewoonbaarverklaring, onroerende voorheffing en renovatieplicht: de bredere gevolgen",
        body: "Na een zware brand kan de **burgemeester** de woning ongeschikt of onbewoonbaar verklaren op basis van de Vlaamse Codex Wonen, zeker wanneer de veiligheid in het gedrang komt. De woning komt dan op een inventaris terecht. Blijft ze daar langer dan een jaar op staan zonder herstel, dan kan een **jaarlijkse heffing** volgen, Vlaams of gemeentelijk afhankelijk van uw gemeente. Verkopen mag ook met zo'n besluit, maar u moet de koper erover informeren en de status drukt op de prijs.\n\nEr is ook een fiscale tegemoetkoming mogelijk. Wordt uw gebouw geheel of gedeeltelijk vernield (minstens een kwart van het kadastraal inkomen) door een ramp zoals brand, of staat het buiten uw wil minstens negentig dagen leeg en improductief, dan kunt u bij de Vlaamse Belastingdienst een **proportionele vermindering van de onroerende voorheffing** vragen. Dat gebeurt via een bezwaarschrift; let op de bezwaartermijn.\n\nHou ten slotte rekening met de regels die de waarde voor kopers bepalen. Wie een woning met **EPC-label E of F** koopt, moet die volgens de regels van 2026 binnen zes jaar naar minstens **label D** renoveren; die renovatieplicht geldt onverkort voor beschadigde panden. Kiest een koper voor **sloop en heropbouw**, dan geldt onder voorwaarden (enige eigen woning, maximaal 200 m² bewoonbare oppervlakte, werken via een aannemer) het verlaagde btw-tarief van 6%. Die elementen bepalen mee wat professionele en particuliere kopers voor uw pand kunnen bieden.",
      },
      {
        heading: "Verkopen in de huidige staat aan een professionele koper",
        body: "Wie niet wil of kan heropbouwen, hoeft de woning niet eerst op te knappen om te verkopen. Er zijn twee gangbare wegen: de klassieke verkoop via een makelaar of notaris, en de rechtstreekse verkoop aan een **professionele vastgoedkoper** die panden in de huidige staat aankoopt.\n\nDe klassieke markt voor zwaar beschadigde panden is beperkt: veel particuliere kopers krijgen de aankoop moeilijk gefinancierd omdat banken terughoudend zijn bij panden met brandschade, en kijkers haken af op de staat van het pand. Daardoor kan de verkoop lang aanslepen, terwijl kosten zoals beveiliging, verzekering en eventuele heffingen doorlopen.\n\nEen rechtstreekse verkoop aan een opkoper gaat sneller, doorgaans tegen een prijs onder de waarde na herstel; de koper neemt immers de herstel- of sloopkosten en het risico over. Voor sommige eigenaars weegt de zekerheid en snelheid zwaarder dan het prijsverschil, zeker wanneer de verzekeringsvergoeding zonder heropbouw toch lager uitvalt.\n\n**Wijkopenpanden.be** koopt panden in de regio Antwerpen aan in de huidige staat, ook met brand- of waterschade. U ontvangt binnen 2 uur een reactie op uw aanvraag en na een plaatsbezoek een schriftelijk bod. De verplichte keuringen en de ontruiming zijn inbegrepen, u betaalt geen commissie, en de akte volgt doorgaans binnen 2 tot 3 maanden. Vergelijk zo'n bod altijd met de raming van uw tegenexpert en met de twee scenario's uit de schaderegeling, zodat u met volledige informatie beslist.",
      },
    ],
    relatedArticles: ["pand-in-slechte-staat-verkopen", "ongeschikt-onbewoonbaar-verklaarde-woning-verkopen", "keuringen-bij-verkoop-woning", "verborgen-gebreken-woning-verkoop-belgie", "energie-renovatieplicht-vlaanderen-2026", "hoe-snel-verkopen-en-geld-ontvangen"],
    relatedSituations: ["opknappand-verkopen", "verkopen-zonder-makelaar"],
    faqs: [
      {
        question: "Krijg ik de volledige verzekeringsvergoeding als ik niet heropbouw maar verkoop?",
        answer:
          "Doorgaans niet volledig. Bij een verzekering tegen nieuwwaarde wordt de vergoeding zonder heropbouw doorgaans beperkt tot 80% van de nieuwwaarde, rekening houdend met de slijtage van het gebouw; de exacte berekening hangt af van uw polis. Bouwt u wel herop, dan wordt de volledige vergoeding uitbetaald, vaak in schijven naarmate de werken vorderen. Vraag uw verzekeraar om beide scenario's cijfermatig uit te werken voordat u beslist tussen herstellen en verkopen.",
      },
      {
        question: "Mag ik mijn huis verkopen voordat de schaderegeling met de verzekeraar is afgerond?",
        answer:
          "Ja, er bestaat geen wettelijk verbod om te verkopen tijdens een lopend verzekeringsdossier. De schadevergoeding voor een schadegeval van vóór de verkoop komt in principe aan u toe als verzekerde. U kunt de vordering op de verzekeraar zelf houden of ze contractueel overdragen aan de koper; dat wordt vastgelegd in het compromis en de notariële akte. Informeer de koper correct over de schade en laat u begeleiden door uw notaris.",
      },
      {
        question: "Wie betaalt de tegenexpert na een brand?",
        answer:
          "In veel Belgische woningpolissen worden de kosten van een tegenexpert geheel of gedeeltelijk terugbetaald volgens een barema dat in de polisvoorwaarden staat, soms via de brandpolis zelf en soms via de rechtsbijstandsverzekering. Bij onenigheid tussen de expert van de verzekeraar en uw tegenexpert kan een derde expert worden aangesteld, waarvan de kosten volgens de polis worden verdeeld. Controleer uw contract voordat u een tegenexpert aanstelt.",
      },
      {
        question: "Wat gebeurt er als mijn woning na de brand onbewoonbaar wordt verklaard?",
        answer:
          "De burgemeester kan een woning na brand ongeschikt of onbewoonbaar verklaren op basis van de Vlaamse Codex Wonen. De woning komt dan op een inventaris; blijft ze daar langer dan een jaar op staan, dan kan een jaarlijkse Vlaamse of gemeentelijke heffing volgen. Verkopen blijft mogelijk, maar u moet de koper over het besluit informeren. Herstel gevolgd door een conformiteitsonderzoek, of verkoop aan een koper die renoveert of sloopt, beëindigt de situatie.",
      },
      {
        question: "Moet ik nog onroerende voorheffing betalen op een afgebrande woning?",
        answer:
          "U kunt een proportionele vermindering van de onroerende voorheffing aanvragen bij de Vlaamse Belastingdienst. Dat kan wanneer het gebouw geheel of gedeeltelijk vernield is (minstens een kwart van het kadastraal inkomen) door een ramp zoals brand, of wanneer het buiten uw wil minstens negentig dagen leegstaat en geen inkomsten oplevert. De aanvraag verloopt via een bezwaarschrift na ontvangst van het aanslagbiljet; respecteer de bezwaartermijn.",
      },
      {
        question: "Heb ik een EPC en asbestattest nodig om een uitgebrande woning te verkopen?",
        answer:
          "In principe wel. Voor woningen bestaat er geen algemene vrijstelling van het EPC bij verkoop, ook niet wanneer de koper vermoedelijk zal slopen; enkel bepaalde niet-residentiële gebouwen met sloopvergunning zijn uitgezonderd. Het asbestattest is verplicht voor gebouwen met bouwjaar vóór 2001, en is na brand extra relevant omdat beschadigd asbest vezels kan verspreiden. Daarnaast zijn een elektriciteitskeuring, een bodemattest en, indien van toepassing, een keuringsattest van de stookolietank vereist.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
