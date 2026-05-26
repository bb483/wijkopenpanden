import type { Region } from "./types";

export const regions: Region[] = [
  {
    slug: "borgerhout",
    name: "Borgerhout",
    metaTitle: "Huis verkopen in Borgerhout — direct bod | wijkopenpanden.be",
    metaDescription:
      "Woning verkopen in Borgerhout? wijkopenpanden.be koopt rechtstreeks aan. Eerlijk contact binnen 2 uur, geen makelaar, geen commissie. Wij kennen Borgerhout.",
    h1: "Woning verkopen in Borgerhout",
    intro:
      "Borgerhout is een van de meest diverse en dynamische wijken van Antwerpen. De vastgoedmarkt hier heeft een eigen logica: rijhuizen uit de late 19e en vroege 20e eeuw domineren het straatbeeld, de prijzen variëren sterk per straat, en de wijk trekt zowel starters als investeerders aan. Wij zijn actief in Borgerhout en kennen de markt van binnenuit.",
    marketOverview:
      "Renovatiepanden komen regelmatig voor in Borgerhout, maar het aandeel instapklare woningen groeit. Oud-Borgerhout (binnen de ring) is gemiddeld duurder dan Borgerhout Extramuros door de centrale ligging. De huurmarkt is actief: veel eigenaars kopen als investering, wat de vraag naar instapklare panden opdrijft.",
    subdistricts: [
      {
        name: "Oud-Borgerhout (Intra-muros)",
        description:
          "Het historische hart van Borgerhout, binnen de ring gelegen. Dichte bebouwing, smalle straten, veel rijhuizen uit 1880-1930. Populair bij jonge kopers die renoveren. Prijsniveau hoger dan extramuros door de centrale ligging.",
      },
      {
        name: "Borgerhout Extramuros",
        description:
          "Ruimer opgezet, buiten de ring. Meer halfopen bebouwing, grotere percelen. Rustiger dan intramuros, goed bereikbaar via de ring. Prijsniveau iets lager maar met groeiend potentieel.",
      },
      {
        name: "Zurenborg-rand",
        description:
          "De grens met de wijk Zurenborg brengt mee dat sommige straten in Borgerhout een art-deco of eclectische gevel hebben. Dit verhoogt de waarde maar ook de onderhoudsverplichtingen. Beschermde panden komen hier voor.",
      },
    ],
    typicalProperties: ["rijhuis", "appartement", "opbrengsteigendom"],
    pricePerM2: { min: 1800, max: 3200 },
    geo: { lat: 51.2144, lng: 4.4469 },
    relatedPropertyTypes: ["rijhuis-verkopen-antwerpen", "appartement-verkopen-antwerpen", "opbrengsteigendom-verkopen-antwerpen"],
    recentPurchases: [
      {
        type: "Rijhuis",
        situation: "Erfenis — drie erfgenamen, woning leeg",
        duration: "18 dagen",
        description: "Rijhuis van 140m² in Oud-Borgerhout. Zware renovatie nodig, niet-conforme elektriciteit. Alle drie erfgenamen akkoord na eerste gesprek. Akte binnen 18 dagen.",
      },
      {
        type: "Opbrengsteigendom",
        situation: "Twee verhuurde units, eigenaar wenste te desinvesteren",
        duration: "24 dagen",
        description: "Opbrengstpand met twee appartementen, beide verhuurd. Huurrelatie overgenomen. Eigenaar ontving verkoopprijs netto, zonder makelaarskosten.",
      },
      {
        type: "Appartement",
        situation: "Scheiding — beide partijen wensten snelle afhandeling",
        duration: "14 dagen",
        description: "Twieslaapkamerappartement in Borgerhout Extramuros. Instapklaar. Akte binnen 14 dagen, beide partijen tekenden bij hun eigen notaris.",
      },
    ],
    faqs: [
      {
        question: "Koopt u ook panden in Borgerhout die zware renovatie nodig hebben?",
        answer:
          "Ja. Zware renovatie is voor ons geen reden om een bod te weigeren. Wij verrekenen de renovatiekost intern en doen u een eerlijk bod op de huidige staat van het pand.",
      },
      {
        question: "Hoe snel kunt u een bod doen op een woning in Borgerhout?",
        answer:
          "Doorgaans binnen 2 uur na ontvangst van de basisgegevens (adres, type, oppervlakte, staat). Wij bevestigen het bod schriftelijk.",
      },
      {
        question: "Zijn er beschermde panden in Borgerhout?",
        answer:
          "In de Zurenborg-rand en sommige straten van Oud-Borgerhout zijn er panden met beschermd straatgezicht. Wij werken met erkende aannemers voor erfgoedpanden en kunnen u ook voor dit type een concreet bod doen.",
      },
    ],
  },
  {
    slug: "antwerpen",
    name: "Antwerpen",
    metaTitle: "Woning verkopen in Antwerpen — direct bod | wijkopenpanden.be",
    metaDescription: "Woning verkopen in Antwerpen? wijkopenpanden.be koopt rechtstreeks aan. Contact binnen 2 uur, geen makelaarskosten.",
    h1: "Woning verkopen in Antwerpen",
    intro: "Antwerpen is onze thuismarkt. Wij kopen in alle districten en wijken.",
    marketOverview: "De Antwerpse vastgoedmarkt is divers, van het stadscentrum tot de buitenwijken.",
    subdistricts: [],
    typicalProperties: ["rijhuis", "appartement", "herenhuis"],
    pricePerM2: { min: 2000, max: 4500 },
    geo: { lat: 51.2194, lng: 4.4025 },
    relatedPropertyTypes: ["rijhuis-verkopen-antwerpen", "appartement-verkopen-antwerpen"],
    recentPurchases: [],
    faqs: [],
  },
  {
    slug: "deurne",
    name: "Deurne",
    metaTitle: "Woning verkopen in Deurne — direct bod | wijkopenpanden.be",
    metaDescription:
      "Woning verkopen in Deurne? wijkopenpanden.be koopt rechtstreeks aan in alle subwijken. Eerlijk contact binnen 2 uur, geen makelaar, geen commissie.",
    h1: "Woning verkopen in Deurne",
    intro:
      "Deurne is het grootste district van Antwerpen qua oppervlakte en het op één na grootste qua inwoneraantal. De vastgoedmarkt in Deurne is navenant gevarieerd: van rijhuizen uit de vroege 20e eeuw in Deurne-Noord tot ruimere gezinswoningen en halfopen bebouwing richting de gemeentegrenzen met Wommelgem en Borgerhout. De aanwezigheid van het Albertpark, het Boekenbergpark en de luchthaven Antwerpen bepalen mee de charme en de beperkingen van bepaalde zones. wijkopenpanden.be koopt in alle deelwijken van Deurne aan.",
    marketOverview:
      "Rijhuizen in Deurne-Noord zijn doorgaans toegankelijker geprijsd dan vergelijkbare panden in Berchem of Borgerhout-intramuros. Ruimere halfopen woningen in Deurne-Zuid of langs de groene zones halen hogere waarden. Appartementen zijn aanwezig maar minder dominant dan in andere districten. De markt wordt getrokken door gezinnen die meer ruimte zoeken op fietsafstand van het centrum.",
    subdistricts: [
      {
        name: "Deurne-Noord",
        description:
          "Het dichtst bebouwde deel van Deurne, aansluitend op Borgerhout. Rijhuizen uit de periode 1900-1940 domineren het straatbeeld. Populair bij gezinnen en investeerders. Prijsniveau vergelijkbaar met Borgerhout Extramuros. Meer renovatiepanden dan in Deurne-Centrum.",
      },
      {
        name: "Deurne-Centrum / Boekenbergpark",
        description:
          "Het hart van Deurne, met de Turnhoutsebaan als commerciële as. Het Boekenbergpark en het Albertpark bieden groen in de onmiddellijke omgeving. Gemengd aanbod van rijhuizen en appartementen. Hogere prijzen dan Deurne-Noord door betere voorzieningen en parkbereikbaarheid.",
      },
      {
        name: "Deurne-Zuid / luchthaven-rand",
        description:
          "Ruimer opgezet, meer halfopen en open bebouwing. Grotere percelen, rustigere straten. Luchthavenbeperkingen (geluid, hoogtebeperkingen voor bijgebouwen) gelden voor een deel van de zone maar zijn goed inprijsbaar. Aantrekkelijk voor kopers die ruimte zoeken dicht bij de ring.",
      },
    ],
    typicalProperties: ["rijhuis", "halfopen woning", "open bebouwing", "appartement"],
    pricePerM2: { min: 1900, max: 3000 },
    geo: { lat: 51.2178, lng: 4.4669 },
    relatedPropertyTypes: ["rijhuis-verkopen-antwerpen", "appartement-verkopen-antwerpen", "opbrengsteigendom-verkopen-antwerpen"],
    recentPurchases: [
      {
        type: "Rijhuis",
        situation: "Opknapper — eigenaar woonde in woonzorgcentrum",
        duration: "21 dagen",
        description: "Rijhuis van 120m² in Deurne-Noord. Niet-conforme elektriciteit, vochtige kelder, keuken uit de jaren 1970. Eigenaar in woonzorgcentrum, kinderen beheerden de verkoop. Akte binnen 21 dagen, leegruiming geregeld door wijkopenpanden.be.",
      },
      {
        type: "Halfopen woning",
        situation: "Erfenis — twee erfgenamen, woning leeg na overlijden",
        duration: "28 dagen",
        description: "Halfopen woning van 175m² in Deurne-Centrum, met tuin. Goed onderhouden maar verouderd schrijnwerk. Beide erfgenamen tekenden bij hun eigen notaris. Opbrengst verdeeld na akte.",
      },
      {
        type: "Appartement",
        situation: "Investeerder wenste te desinvesteren",
        duration: "17 dagen",
        description: "Tweeslaapkamerappartement in Deurne-Centrum, verhuurd. wijkopenpanden.be nam huurcontract over. Investeerder ontving nettobedrag na aflossing van het resterende leningssaldo.",
      },
    ],
    faqs: [
      {
        question: "Koopt u ook panden in Deurne-Noord die zware renovatie nodig hebben?",
        answer:
          "Ja. Zware renovatie is geen uitsluitingscriterium. Wij bezoeken het pand, beoordelen de renovatiekost en doen een eerlijk bod op de huidige staat. Niet-conforme elektriciteit, vochtige kelders en verouderde installaties zijn courant in Deurne-Noord en worden intern verrekend.",
      },
      {
        question: "Heeft de nabijheid van de luchthaven invloed op de verkoopprijs?",
        answer:
          "In de zones dichtst bij de luchthaven Antwerpen gelden geluidsbeperkingen en zijn er bouwbeperkingen voor bijgebouwen of uitbreidingen. Dat drukt de marktwaarde licht, maar maakt de woning niet onverkoopbaar. Wij kennen de zones en houden er rekening mee in onze inschatting.",
      },
      {
        question: "Hoe snel kunt u een bod doen op een woning in Deurne?",
        answer:
          "Na ontvangst van het adres, het type woning en een beschrijving van de staat, doorgaans binnen 2 uur. Voor grotere panden of complexere situaties — meerdere erfgenamen, verhuurde eenheden — plannen wij eerst een bezoek voor een definitief bod.",
      },
    ],
  },
  {
    slug: "berchem",
    name: "Berchem",
    metaTitle: "Woning verkopen in Berchem — direct bod | wijkopenpanden.be",
    metaDescription:
      "Woning verkopen in Berchem? wijkopenpanden.be koopt rijhuizen en appartementen rechtstreeks aan. Eerlijk contact binnen 2 uur, geen makelaarscommissie.",
    h1: "Woning verkopen in Berchem",
    intro:
      "Berchem is een van de meest gevraagde districten voor wie net buiten het stadscentrum wil wonen met behoud van een uitstekende bereikbaarheid. Station Berchem is een van de drukst bezochte treinstations van België; de ring en de A12 liggen op fietsafstand. Die bereikbaarheid trekt een brede kopers- en huurdersdoelgroep aan: gezinnen, pendelaars, investeerders. De vastgoedmarkt in Berchem is dan ook actiever dan die van de meeste omliggende gemeenten, maar ook duurder. wijkopenpanden.be koopt in alle deelwijken van Berchem aan.",
    marketOverview:
      "Rijhuizen in Berchem worden sterk gewaardeerd door de uitstekende bereikbaarheid en de kwaliteit van de wijk. Appartementen lopen uiteen van compacte studio's rondom het station tot grotere eenheden in rustiger straten. De grens met Zurenborg zorgt in de noordelijke zones voor een opwaartse prijsdruk. De huurmarkt is sterk: veel panden worden gekocht als investering en verhuurd aan pendelaars of starters.",
    subdistricts: [
      {
        name: "Berchem-Stationsbuurt",
        description:
          "Direct rondom Station Berchem. Hoge bebouwingsdichtheid, veel appartementen en gemengd gebruik. Sterkste huurmarkt van Berchem. Hogere prijzen per m² maar ook hogere huurinkomsten. Populair bij investeerders die verhuurd pand zoeken.",
      },
      {
        name: "Oud-Berchem / Driehoekstraat-buurt",
        description:
          "Het historische hart van Berchem, met brede rijhuizen en burgerswoningen uit de periode 1900-1930. Rustige straten, goede scholen en voorzieningen. Hogere waarde dan Deurne bij gelijke staat, gedreven door de aantrekkingskracht van de wijk.",
      },
      {
        name: "Zurenborg-grens (Berchemse zijde)",
        description:
          "De overgang naar Zurenborg in Antwerpen. Sommige straten in dit deel van Berchem hebben art-deco of eclectische gevels die bijna niet te onderscheiden zijn van de Zurenborg-panden. Dat brengt hogere prijzen maar ook hogere onderhoudsverplichtingen met zich mee.",
      },
    ],
    typicalProperties: ["rijhuis", "appartement", "opbrengsteigendom"],
    pricePerM2: { min: 2200, max: 3500 },
    geo: { lat: 51.1978, lng: 4.4186 },
    relatedPropertyTypes: ["rijhuis-verkopen-antwerpen", "appartement-verkopen-antwerpen", "opbrengsteigendom-verkopen-antwerpen"],
    recentPurchases: [
      {
        type: "Rijhuis",
        situation: "Verkoop zonder makelaar — eigenaar wenste snelle, discrete afhandeling",
        duration: "19 dagen",
        description: "Rijhuis van 155m² in Oud-Berchem. Goed onderhouden maar verouderd sanitair. Eigenaar wilde geen makelaar en geen bezichtigingen. Akte binnen 19 dagen, eigenaar koos zelf zijn notaris.",
      },
      {
        type: "Appartement",
        situation: "Erfenis — twee erfgenamen, discussie over waarde",
        duration: "25 dagen",
        description: "Tweeslaapkamerappartement in de Stationsbuurt. Beide erfgenamen woonden in het buitenland. wijkopenpanden.be regelde het contact met de Belgische notaris. Akte via volmacht ondertekend.",
      },
      {
        type: "Opbrengsteigendom",
        situation: "Twee verhuurde units, eigenaar ging met pensioen",
        duration: "22 dagen",
        description: "Opbrengstpand met twee appartementen in Berchem-Centrum. Beide units bewoond. wijkopenpanden.be nam huurrelaties over. Eigenaar ontving netto verkoopprijs na aflossing resterende lening.",
      },
    ],
    faqs: [
      {
        question: "Is Berchem een goede plek om snel te verkopen?",
        answer:
          "Berchem heeft een actieve vastgoedmarkt met een brede kopers- en huurdersdoelgroep. Via de klassieke markt gaan woningen in goede staat hier relatief snel. Wie sneller wil — of een pand heeft in minder goede staat — kan bij wijkopenpanden.be terecht voor een contact binnen 2 uur en een akte gemiddeld binnen 2 tot 3 maanden.",
      },
      {
        question: "Koopt u ook appartementen aan de ring of vlakbij het station in Berchem?",
        answer:
          "Ja. Appartementen in de Stationsbuurt en langs de ring zijn voor wijkopenpanden.be interessant door de sterke huurmarkt. Wij kopen zowel bewoonde als leegstaande appartementen aan, ongeacht de staat of de verhouding met de VME.",
      },
      {
        question: "Hoe snel kunt u een bod doen op een pand in Berchem?",
        answer:
          "Doorgaans binnen 2 uur na ontvangst van het adres, het type en de staat van het pand. Wij bevestigen het bod schriftelijk en plannen op uw verzoek een bezoek voor een definitieve prijszetting.",
      },
    ],
  },
  {
    slug: "mortsel",
    name: "Mortsel",
    metaTitle: "Woning verkopen in Mortsel — direct bod | wijkopenpanden.be",
    metaDescription: "Woning verkopen in Mortsel? wijkopenpanden.be koopt rechtstreeks aan. Contact binnen 2 uur, geen makelaar.",
    h1: "Woning verkopen in Mortsel",
    intro: "Mortsel grenst aan Antwerpen en heeft een eigen vastgoedmarkt met veel gezinswoningen.",
    marketOverview: "Rustige residentiële gemeente met stabiele prijzen.",
    subdistricts: [],
    typicalProperties: ["rijhuis", "halfopen woning"],
    pricePerM2: { min: 2000, max: 3200 },
    geo: { lat: 51.1736, lng: 4.4556 },
    relatedPropertyTypes: ["rijhuis-verkopen-antwerpen"],
    recentPurchases: [],
    faqs: [],
  },
  {
    slug: "edegem",
    name: "Edegem",
    metaTitle: "Woning verkopen in Edegem — direct bod | wijkopenpanden.be",
    metaDescription: "Woning verkopen in Edegem? wijkopenpanden.be koopt aan. Contact binnen 2 uur, geen commissie.",
    h1: "Woning verkopen in Edegem",
    intro: "Edegem is een groene gemeente ten zuiden van Antwerpen met voornamelijk open en halfopen bebouwing.",
    marketOverview: "Residentiële gemeente met hogere gemiddelde woningprijzen.",
    subdistricts: [],
    typicalProperties: ["halfopen woning", "open bebouwing", "villa"],
    pricePerM2: { min: 2300, max: 3800 },
    geo: { lat: 51.1533, lng: 4.4428 },
    relatedPropertyTypes: ["villa-verkopen-antwerpen"],
    recentPurchases: [],
    faqs: [],
  },
  {
    slug: "wilrijk",
    name: "Wilrijk",
    metaTitle: "Woning verkopen in Wilrijk — direct bod | wijkopenpanden.be",
    metaDescription: "Woning verkopen in Wilrijk? wijkopenpanden.be koopt rechtstreeks aan. Eerlijk contact binnen 2 uur.",
    h1: "Woning verkopen in Wilrijk",
    intro: "Wilrijk is een district van Antwerpen met een gevarieerd aanbod van rijhuizen tot villa's.",
    marketOverview: "Sterke markt met goede bereikbaarheid en ruime percelen.",
    subdistricts: [],
    typicalProperties: ["rijhuis", "halfopen woning", "open bebouwing"],
    pricePerM2: { min: 2100, max: 3400 },
    geo: { lat: 51.1689, lng: 4.3894 },
    relatedPropertyTypes: ["rijhuis-verkopen-antwerpen"],
    recentPurchases: [],
    faqs: [],
  },
  {
    slug: "ekeren",
    name: "Ekeren",
    metaTitle: "Woning verkopen in Ekeren — direct bod | wijkopenpanden.be",
    metaDescription: "Woning verkopen in Ekeren? wijkopenpanden.be koopt aan zonder makelaar. Contact binnen 2 uur.",
    h1: "Woning verkopen in Ekeren",
    intro: "Ekeren, in het noorden van Antwerpen, heeft een rustig karakter met veel open bebouwing.",
    marketOverview: "Ruime percelen, lagere dichtheid dan het centrum.",
    subdistricts: [],
    typicalProperties: ["open bebouwing", "halfopen woning"],
    pricePerM2: { min: 1800, max: 2900 },
    geo: { lat: 51.2933, lng: 4.4167 },
    relatedPropertyTypes: ["rijhuis-verkopen-antwerpen"],
    recentPurchases: [],
    faqs: [],
  },
  {
    slug: "kontich",
    name: "Kontich",
    metaTitle: "Woning verkopen in Kontich — direct bod | wijkopenpanden.be",
    metaDescription: "Woning verkopen in Kontich? wijkopenpanden.be koopt aan. Eerlijk contact binnen 2 uur, geen commissie.",
    h1: "Woning verkopen in Kontich",
    intro: "Kontich is een gemeente ten zuiden van Antwerpen met een rustig woonkarakter.",
    marketOverview: "Stabiele markt, populair bij gezinnen.",
    subdistricts: [],
    typicalProperties: ["open bebouwing", "halfopen woning"],
    pricePerM2: { min: 2000, max: 3300 },
    geo: { lat: 51.1333, lng: 4.4500 },
    relatedPropertyTypes: ["villa-verkopen-antwerpen"],
    recentPurchases: [],
    faqs: [],
  },
  {
    slug: "schilde",
    name: "Schilde",
    metaTitle: "Woning verkopen in Schilde — direct bod | wijkopenpanden.be",
    metaDescription: "Woning verkopen in Schilde? wijkopenpanden.be koopt villa's en woningen aan. Contact binnen 2 uur.",
    h1: "Woning verkopen in Schilde",
    intro: "Schilde is een groene gemeente in de Antwerpse Kempen, bekend om zijn villa-bebouwing en rustige leefomgeving.",
    marketOverview: "Hogere gemiddelde woningprijzen, veel open bebouwing en villa's.",
    subdistricts: [],
    typicalProperties: ["villa", "open bebouwing"],
    pricePerM2: { min: 2500, max: 4500 },
    geo: { lat: 51.2667, lng: 4.5833 },
    relatedPropertyTypes: ["villa-verkopen-antwerpen"],
    recentPurchases: [],
    faqs: [],
  },
  {
    slug: "brasschaat",
    name: "Brasschaat",
    metaTitle: "Woning verkopen in Brasschaat — direct bod | wijkopenpanden.be",
    metaDescription: "Woning verkopen in Brasschaat? wijkopenpanden.be koopt aan. Eerlijk contact binnen 2 uur, geen makelaarskosten.",
    h1: "Woning verkopen in Brasschaat",
    intro: "Brasschaat is een van de welvarendste gemeenten in de Antwerpse regio, met een sterk aanbod van ruime villa's en halfopen woningen.",
    marketOverview: "Stabiele markt met hogere gemiddelde woningwaarden, veel groenvlakken en ruime percelen.",
    subdistricts: [],
    typicalProperties: ["villa", "halfopen woning", "open bebouwing"],
    pricePerM2: { min: 2800, max: 5000 },
    geo: { lat: 51.2978, lng: 4.4944 },
    relatedPropertyTypes: ["villa-verkopen-antwerpen"],
    recentPurchases: [],
    faqs: [],
  },
  {
    slug: "antwerpen-noord",
    name: "Antwerpen Noord",
    metaTitle: "Woning verkopen in Antwerpen Noord — direct bod | wijkopenpanden.be",
    metaDescription: "Woning verkopen in Antwerpen Noord? wijkopenpanden.be koopt rechtstreeks aan in Seefhoek, Dam en omgeving. Eerlijk contact binnen 2 uur, geen makelaar.",
    h1: "Woning verkopen in Antwerpen Noord",
    intro: "Antwerpen Noord — de zone ten noorden van het stadscentrum, met wijken als Seefhoek, Dam en de Havenbuurt — heeft de voorbije jaren een sterke transformatie doorgemaakt. Oude arbeiderswijken met rijhuizen uit het begin van de 20e eeuw staan er naast nieuwe stadsontwikkelingen. wijkopenpanden.be koopt in alle straten van Antwerpen Noord aan, ook panden in grondige renovatiestand.",
    marketOverview: "Antwerpen Noord heeft een diverse markt met een breed prijsspectrum. Seefhoek en Dam trekken investeerders aan die inspelen op de stadsvernieuwing. Het aandeel renovatiepanden is hoog, maar instapklare woningen worden snel opgenomen.",
    subdistricts: [
      {
        name: "Seefhoek",
        description: "Dichtbevolkte arbeidswijk met rijhuizen uit de vroege 20e eeuw. Actieve stadsvernieuwing via het Seefhoek-project. Veel renovatiepanden maar ook groeiend aanbod instapklare woningen. Populair bij investeerders en starters.",
      },
      {
        name: "Dam",
        description: "Rustigere deelwijk, grenzend aan het havengebied. Meer open en halfopen bebouwing dan Seefhoek. Lagere bebouwingsdichtheid, grotere percelen in sommige straten.",
      },
      {
        name: "Havenbuurt / Oude Dokken",
        description: "Gemengd woon-werkgebied in transformatie. Historische pakhuizen naast nieuwbouwprojecten. Niche-markt voor lofts en herontwikkelde industriële panden.",
      },
    ],
    typicalProperties: ["rijhuis", "appartement", "opbrengsteigendom"],
    pricePerM2: { min: 1600, max: 2800 },
    geo: { lat: 51.2303, lng: 4.4053 },
    relatedPropertyTypes: ["rijhuis-verkopen-antwerpen", "opbrengsteigendom-verkopen-antwerpen"],
    recentPurchases: [],
    faqs: [
      {
        question: "Koopt u ook panden in Seefhoek die zwaar gerenoveerd moeten worden?",
        answer: "Ja. Seefhoek heeft veel panden in renovatiestand en dat is voor wijkopenpanden.be geen uitsluitingscriterium. Wij verrekenen de renovatiekost intern en doen u een eerlijk bod op de huidige staat.",
      },
      {
        question: "Hoe snel kunt u een bod doen op een pand in Antwerpen Noord?",
        answer: "Na ontvangst van het adres en een beschrijving van de staat, doorgaans binnen 2 uur — ook in het weekend.",
      },
    ],
  },
  {
    slug: "antwerpen-centrum",
    name: "Antwerpen Centrum",
    metaTitle: "Woning verkopen in Antwerpen Centrum — direct bod | wijkopenpanden.be",
    metaDescription: "Woning verkopen in Antwerpen centrum? wijkopenpanden.be koopt appartementen en herenhuizen rechtstreeks aan. Contact binnen 2 uur, geen makelaar.",
    h1: "Woning verkopen in Antwerpen Centrum",
    intro: "Het stadscentrum van Antwerpen — van de Grote Markt en Groenplaats over de Meir tot het Eilandje — is de meest gevraagde en meest uiteenlopende vastgoedzone van de stad. Appartementen in historische panden, herenhuizen aan statige lanen, lofts in gerenoveerde pakhuizen op het Eilandje: elke transactie vraagt om een specifieke aanpak. wijkopenpanden.be kent het centrum van binnen en koopt rechtstreeks aan, ongeacht het type of de staat.",
    marketOverview: "Het stadscentrum heeft een van de actiefste huurmarkten van Antwerpen. Beleggers kopen compacte appartementen nabij de Meir en het Eilandje voor verhuur aan jonge professionals en toeristen. Herenhuizen en grotere panden zijn schaars en worden doorgaans snel door projectontwikkelaars of vermogende particulieren opgekocht.",
    subdistricts: [
      {
        name: "Eilandje",
        description: "Getransformeerde havendokken met moderne nieuwbouw en gerenoveerde pakhuizen. Hoge vraag, lage beschikbaarheid. Populair bij investeerders en young professionals.",
      },
      {
        name: "Historisch centrum (Grote Markt / Groenplaats)",
        description: "Smalle straten, historische gevels, gemengd residentieel en commercieel gebruik. Appartementen boven winkels zijn courant. Strikte regels voor gevelwijzigingen.",
      },
      {
        name: "Meir-buurt / Stadspark",
        description: "Ruimere straten, statige herenhuizen en appartementsgebouwen. Goede bereikbaarheid, nabijheid van het Centraal Station. Hoge bezettingsgraad in de huurmarkt.",
      },
    ],
    typicalProperties: ["appartement", "herenhuis", "opbrengsteigendom"],
    pricePerM2: { min: 2200, max: 4500 },
    geo: { lat: 51.2194, lng: 4.4025 },
    relatedPropertyTypes: ["appartement-verkopen-antwerpen", "herenhuis-verkopen-antwerpen", "opbrengsteigendom-verkopen-antwerpen"],
    recentPurchases: [],
    faqs: [
      {
        question: "Koopt u ook panden in het historische centrum met beschermd straatgezicht?",
        answer: "Ja. Beschermde gevels of een beschermd straatgezicht vormen geen obstakel voor wijkopenpanden.be. Wij kennen de erfgoedvereisten en werken samen met erkende aannemers die ervaring hebben met historische panden in het centrum.",
      },
      {
        question: "Hoe snel kunt u een appartement in het centrum aankopen?",
        answer: "Na ontvangst van de basisgegevens doen wij u binnen 2 uur contact. Voor appartementen in mede-eigendom vragen wij de VME-informatie op bij de syndicus. De akte kan gemiddeld binnen 2 tot 3 maanden worden gepland.",
      },
    ],
  },
  {
    slug: "antwerpen-zuid",
    name: "Antwerpen Zuid",
    metaTitle: "Woning verkopen in Antwerpen Zuid — direct bod | wijkopenpanden.be",
    metaDescription: "Woning verkopen in Antwerpen Zuid? wijkopenpanden.be koopt herenhuizen en appartementen aan. Contact binnen 2 uur, geen commissie.",
    h1: "Woning verkopen in Antwerpen Zuid",
    intro: "Antwerpen Zuid — de zone tussen het stadscentrum en de gemeentegrens met Berchem, met iconische wijken als Zurenborg, het Quartier Latin en de Statiebuurt — behoort tot de meest gewaardeerde woonzones van de stad. De monumentale herenhuizen langs de Cogels-Osylei, de bruisende horecabuurt rond het museum voor Schone Kunsten en de rustigere straten van het Quartier Latin: elk deel van Antwerpen Zuid heeft zijn eigen karakter. wijkopenpanden.be koopt in de gehele zone aan.",
    marketOverview: "Antwerpen Zuid heeft een van de sterkste vastgoedmarkten van Antwerpen. Herenhuizen in Zurenborg zijn schaars en worden sterk gewaardeerd, ook door internationale kopers. Appartementen in gerenoveerde panden zijn in trek bij jonge professionals. De markt is minder volatiel dan het centrum door de stabiele woonfunctie.",
    subdistricts: [
      {
        name: "Zurenborg",
        description: "Iconische wijk met eclectische en art-decobebouwing uit 1895-1914. Cogels-Osylei, Waterloostraat en omgeving zijn beschermd stadsgezicht. Hoogste waarden van Antwerpen Zuid, sterke vraag van kopers en investeerders.",
      },
      {
        name: "Quartier Latin",
        description: "Levendige studentenbuurt met gemengd gebruik. Rijhuizen en appartementen, actieve huurmarkt. Populair bij jonge gezinnen en starters die de nabijheid van de universiteit waarderen.",
      },
      {
        name: "Statiebuurt / Museum",
        description: "Omgeving van het KMSKA (Museum voor Schone Kunsten). Breed straatprofiel, ruime herenhuizen. Veel opsplitsingen naar appartementen. Sterk aanbod van opbrengsteigendommen.",
      },
    ],
    typicalProperties: ["herenhuis", "appartement", "rijhuis"],
    pricePerM2: { min: 2400, max: 4200 },
    geo: { lat: 51.2050, lng: 4.4080 },
    relatedPropertyTypes: ["herenhuis-verkopen-antwerpen", "appartement-verkopen-antwerpen", "rijhuis-verkopen-antwerpen"],
    recentPurchases: [],
    faqs: [
      {
        question: "Koopt u ook beschermde herenhuizen in Zurenborg aan?",
        answer: "Ja. wijkopenpanden.be koopt beschermde panden aan en neemt de erfgoedverplichtingen over. Wij kennen de regelgeving rond het beschermd stadsgezicht in Zurenborg en werken met erkende aannemers voor dit type renovaties.",
      },
      {
        question: "Hoe snel kunt u een herenhuis in Antwerpen Zuid aankopen?",
        answer: "Na een bezoek aan het pand bezorgen wij u doorgaans binnen 24 tot 48 uur een schriftelijk bod. De akte kan gemiddeld binnen 2 tot 3 maanden worden gepland, afhankelijk van het dossier.",
      },
    ],
  },
  {
    slug: "hoboken",
    name: "Hoboken",
    metaTitle: "Woning verkopen in Hoboken — direct bod | wijkopenpanden.be",
    metaDescription: "Woning verkopen in Hoboken? wijkopenpanden.be koopt rechtstreeks aan. Eerlijk contact binnen 2 uur, geen makelaar, geen commissie.",
    h1: "Woning verkopen in Hoboken",
    intro: "Hoboken is een district van Antwerpen aan de linkeroever van de Schelde, ten zuiden van het centrum. De wijk combineert een industrieel verleden — de voormalige Cockerillwerven en de Union Minière — met een residentieel karakter dat de voorbije decennia sterk is gegroeid. Rijhuizen, halfopen woningen en appartementen vormen het grootste deel van het aanbod. wijkopenpanden.be is actief in alle deelwijken van Hoboken.",
    marketOverview: "Hoboken heeft een toegankelijkere markt dan de centrale districten, wat het aantrekkelijk maakt voor gezinnen en starters. De verbindingen met het centrum via tram en fiets zijn goed. De nabijheid van de Schelde en het groen in de wijk verhogen de leefkwaliteit en de vastgoedwaarden in de betere deelzones.",
    subdistricts: [
      {
        name: "Hoboken-Centrum",
        description: "Het commerciële hart van Hoboken, met de Grote Baan als as. Gemengd aanbod van rijhuizen en appartementen. Goede voorzieningen en bereikbaarheid via tram.",
      },
      {
        name: "Hoboken-Noord / Scheldeoever",
        description: "Residentiële zone langs de Schelde. Ruimere percelen, meer halfopen bebouwing. Scheldezicht verhoogt de waarde van panden in de eerste rijen.",
      },
    ],
    typicalProperties: ["rijhuis", "appartement", "halfopen woning"],
    pricePerM2: { min: 1800, max: 2900 },
    geo: { lat: 51.1756, lng: 4.3644 },
    relatedPropertyTypes: ["rijhuis-verkopen-antwerpen", "appartement-verkopen-antwerpen"],
    recentPurchases: [],
    faqs: [
      {
        question: "Koopt u ook panden in Hoboken die renovatie nodig hebben?",
        answer: "Ja. Renovatiepanden zijn voor wijkopenpanden.be geen probleem. Wij verrekenen de renovatiekost intern en doen u een eerlijk bod op de huidige staat — geen herstellingen nodig voor de verkoop.",
      },
      {
        question: "Hoe snel kunt u een bod doen op een woning in Hoboken?",
        answer: "Na ontvangst van het adres en een beschrijving van de staat, doorgaans binnen 2 uur — ook in het weekend en na 18 uur.",
      },
    ],
  },
  {
    slug: "merksem",
    name: "Merksem",
    metaTitle: "Woning verkopen in Merksem — direct bod | wijkopenpanden.be",
    metaDescription: "Woning verkopen in Merksem? wijkopenpanden.be koopt rechtstreeks aan. Eerlijk contact binnen 2 uur, geen makelaar.",
    h1: "Woning verkopen in Merksem",
    intro: "Merksem is een district van Antwerpen in het noorden van de stad, grenzend aan Ekeren, Deurne en het havengebied. De wijk heeft een sterk residentieel karakter met een overwicht aan rijhuizen en halfopen woningen uit de tweede helft van de 20e eeuw. De kanaalzone en de nabijheid van de haven geven Merksem een eigen industrieel reliëf dat contrasteert met de rustige woonstraten. wijkopenpanden.be koopt in alle deelwijken van Merksem aan.",
    marketOverview: "Merksem heeft een stabiele lokale markt die gedomineerd wordt door gezinswoningen. De prijzen liggen doorgaans lager dan in meer centrale districten, wat het een instappunt maakt voor kopers die meer ruimte zoeken aan een lagere prijs. De verbindingen met het centrum via tram en autosnelweg zijn goed.",
    subdistricts: [
      {
        name: "Merksem-Centrum",
        description: "Kern van het district met commerciële as langs de Bredabaan. Rijhuizen en appartementen, goede voorzieningen. Actieve lokale markt.",
      },
      {
        name: "Merksem-Noord / Kanaalzone",
        description: "Grenzend aan het Albertkanaal en de haveninfrastructuur. Gemengd residentieel en industrieel karakter. Ruimere percelen in sommige straten, lagere dichtheid.",
      },
    ],
    typicalProperties: ["rijhuis", "halfopen woning", "appartement"],
    pricePerM2: { min: 1700, max: 2700 },
    geo: { lat: 51.2481, lng: 4.4356 },
    relatedPropertyTypes: ["rijhuis-verkopen-antwerpen", "appartement-verkopen-antwerpen"],
    recentPurchases: [],
    faqs: [
      {
        question: "Is Merksem een actieve markt voor snelle verkoop?",
        answer: "Merksem heeft een stabiele markt met een vaste vraag van gezinnen. Via de klassieke markt duurt een verkoop gemiddeld enkele maanden. wijkopenpanden.be koopt rechtstreeks aan en plant de akte gemiddeld binnen 2 tot 3 maanden na het eerste contact.",
      },
      {
        question: "Koopt u ook woningen in de kanaalzone van Merksem?",
        answer: "Ja. Ook in de meer industrieel getinte zones van Merksem kopen wij aan. Wij beoordelen elk pand op zijn eigen merites en doen u een eerlijk bod.",
      },
    ],
  },
  {
    slug: "linkeroever",
    name: "Linkeroever",
    metaTitle: "Woning verkopen in Linkeroever Antwerpen — direct bod | wijkopenpanden.be",
    metaDescription: "Woning verkopen op de Linkeroever in Antwerpen? wijkopenpanden.be koopt rechtstreeks aan. Contact binnen 2 uur, geen makelaar.",
    h1: "Woning verkopen op de Linkeroever",
    intro: "De Linkeroever — officieel het Antwerpse deel van de gemeente Beveren, maar door Antwerpenaren kortweg zo genoemd — is de woonzone aan de westoever van de Schelde, verbonden met de stad via de Kennedytunnel en de Waaslandtunnel. De wijk heeft een heel eigen karakter: ruime appartementsblokken uit de jaren 1960-1980, open bebouwing en veel groen. Door de betere prijs-ruimteverhouding ten opzichte van rechteroever trekt de Linkeroever gezinnen en starters aan die zoeken naar meer leefruimte.",
    marketOverview: "De Linkeroever heeft een meer beperkt maar stabiel vastgoedaanbod. Appartementen in de grote blokken langs de Schelde-oever zijn de dominante categorie. Open bebouwing in de meer landelijke zones van Linkeroever is schaars maar gewild. De verbinding met Antwerpen-centrum via de tunnels is vlot voor automobilisten maar beperkter voor fietsers.",
    subdistricts: [
      {
        name: "Linkeroever-oever (Blokken)",
        description: "Grote appartementsblokken uit de jaren 1960-1980 langs de Scheldeoever. Ruime appartementen met soms Scheldezicht. VME-structuren met actieve syndici. Stabiele huurmarkt.",
      },
      {
        name: "Linkeroever-groen / Burcht",
        description: "Meer landelijk karakter, open en halfopen bebouwing. Rustige straten, grote tuinen. Populariteit groeit door betere prijs-ruimteverhouding.",
      },
    ],
    typicalProperties: ["appartement", "open bebouwing", "halfopen woning"],
    pricePerM2: { min: 1700, max: 2800 },
    geo: { lat: 51.2183, lng: 4.3764 },
    relatedPropertyTypes: ["appartement-verkopen-antwerpen", "villa-verkopen-antwerpen"],
    recentPurchases: [],
    faqs: [
      {
        question: "Koopt u ook appartementen in de grote blokken op de Linkeroever?",
        answer: "Ja. wijkopenpanden.be koopt appartementen in appartementsblokken aan, ook als de VME een actieve structuur heeft. Wij vragen de VME-informatie zelf op bij de syndicus en verrekenen de staat van de gemeenschappelijke delen in ons bod.",
      },
      {
        question: "Is de Linkeroever moeilijker te verkopen dan rechteroever?",
        answer: "De doelgroep voor de Linkeroever is iets smaller dan voor de centrale Antwerpse districten, maar wijkopenpanden.be koopt ongeacht de marktdiepte. Wij doen u een bod op basis van de lokale marktwaarde en de staat van het pand.",
      },
    ],
  },
  {
    slug: "wommelgem",
    name: "Wommelgem",
    metaTitle: "Woning verkopen in Wommelgem — direct bod | wijkopenpanden.be",
    metaDescription: "Woning verkopen in Wommelgem? wijkopenpanden.be koopt rechtstreeks aan. Eerlijk contact binnen 2 uur, geen makelaarscommissie.",
    h1: "Woning verkopen in Wommelgem",
    intro: "Wommelgem is een compacte gemeente ten oosten van Antwerpen, grenzend aan Deurne en Ranst. De gemeente heeft een residentieel karakter met een mix van halfopen en open bebouwing en een bescheiden aanbod rijhuizen. De nabijheid van de ring en de snelweg richting Brussel en Luik maakt Wommelgem aantrekkelijk voor pendelaars. wijkopenpanden.be koopt woningen aan in alle deelwijken van Wommelgem.",
    marketOverview: "Wommelgem heeft een rustige maar stabiele vastgoedmarkt. Gezinswoningen met tuin domineren het aanbod. De gemeente trekt kopers aan die de rust van een kleinere gemeente prefereren boven de drukte van de stad, met behoud van goede verbindingen.",
    subdistricts: [],
    typicalProperties: ["halfopen woning", "open bebouwing", "rijhuis"],
    pricePerM2: { min: 2000, max: 3100 },
    geo: { lat: 51.2133, lng: 4.5100 },
    relatedPropertyTypes: ["rijhuis-verkopen-antwerpen", "villa-verkopen-antwerpen"],
    recentPurchases: [],
    faqs: [
      {
        question: "Koopt u ook woningen in Wommelgem aan?",
        answer: "Ja. wijkopenpanden.be is actief in Wommelgem en de omliggende gemeenten. Na ontvangst van het adres en een beschrijving van de staat doen wij u binnen 2 uur contact.",
      },
      {
        question: "Hoe verschilt de markt in Wommelgem van Antwerpen-stad?",
        answer: "Wommelgem heeft rustiger straten, ruimere percelen en een meer residentieel profiel dan de centrale Antwerpse districten. De vraag is iets beperkter maar stabieler, gedreven door gezinnen die comfort en bereikbaarheid combineren.",
      },
    ],
  },
  {
    slug: "borsbeek",
    name: "Borsbeek",
    metaTitle: "Woning verkopen in Borsbeek — direct bod | wijkopenpanden.be",
    metaDescription: "Woning verkopen in Borsbeek? wijkopenpanden.be koopt rechtstreeks aan. Contact binnen 2 uur, geen commissie, geen makelaar.",
    h1: "Woning verkopen in Borsbeek",
    intro: "Borsbeek is een van de kleinste gemeenten van de provincie Antwerpen, maar heeft een eigen vastgoedmarkt met een divers aanbod van rijhuizen, halfopen en open bebouwing. De gemeente grenst aan Berchem, Deurne en Mortsel en is daarmee goed ingebed in de Antwerpse agglomeratie. De korte afstand tot de ring en tot Station Berchem maakt Borsbeek aantrekkelijk voor pendelaars en gezinnen die stadscomfort en rustig wonen willen combineren.",
    marketOverview: "Borsbeek heeft een stabiele markt die gedragen wordt door gezinnen. De schaal van de gemeente zorgt voor een beperkt aanbod, wat de waardes relatief stabiel houdt. Woningen wisselen hier minder frequent van eigenaar dan in de Antwerpse districten.",
    subdistricts: [],
    typicalProperties: ["rijhuis", "halfopen woning", "open bebouwing"],
    pricePerM2: { min: 2100, max: 3200 },
    geo: { lat: 51.1978, lng: 4.4736 },
    relatedPropertyTypes: ["rijhuis-verkopen-antwerpen"],
    recentPurchases: [],
    faqs: [
      {
        question: "Is Borsbeek een actieve markt voor u?",
        answer: "Ja. wijkopenpanden.be is actief in Borsbeek en de omliggende gemeenten. Wij kennen de lokale markt en doen u een eerlijk contact binnen 2 uur na ontvangst van de basisgegevens.",
      },
      {
        question: "Koopt u ook woningen aan die renovatie nodig hebben in Borsbeek?",
        answer: "Ja. Renovatiepanden zijn voor wijkopenpanden.be geen obstakel. Wij verrekenen de renovatiekost intern — u hoeft niets te herstellen of te verbouwen voor de verkoop.",
      },
    ],
  },
];

export function getRegion(slug: string): Region | undefined {
  return regions.find((r) => r.slug === slug);
}
