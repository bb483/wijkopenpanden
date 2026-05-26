# Sleutel — Vastgoed opkoper Antwerpen

Next.js fundering voor de Berabrick leads website. Bevat het design-systeem, core componenten en de basisstructuur voor volgende sprints.

## Setup

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) voor de homepage.
Open [http://localhost:3000/styleguide](http://localhost:3000/styleguide) om alle componenten visueel te valideren.

## Tech stack

- **Next.js 16** met App Router + TypeScript
- **Tailwind CSS v4** — tokens gedefinieerd via `@theme` in `globals.css`
- **Framer Motion** — geïnstalleerd, nog niet actief
- **Fraunces** (serif) + **Inter** (sans) via `next/font/google`

## Design tokens (globals.css)

| Token     | Waarde    | Gebruik                         |
|-----------|-----------|----------------------------------|
| `bone`    | `#F5F2ED` | Hoofdachtergrond                |
| `ink`     | `#1A1A1A` | Hoofdtekst                      |
| `accent`  | `#B8633A` | Terracotta, spaarzaam gebruiken |
| `navy`    | `#1E2A3A` | Subtiele diepte                 |
| `muted`   | `#8A8A85` | Ondersteunende tekst            |

## Componenten (`/components`)

| Component     | Beschrijving                                         |
|---------------|------------------------------------------------------|
| `Container`   | Max-width wrapper met responsive padding             |
| `Section`     | Verticale sectie met `bone/white/ink` varianten      |
| `Button`      | `primary` (ink) en `secondary` (outlined) varianten |
| `Heading`     | h1/h2/h3 met Fraunces serif, correcte schaal         |
| `Prose`       | Body-tekst wrapper met `max-w-prose` en line-height  |
| `Nav`         | Minimalistisch: logo links, tel + CTA rechts         |
| `Footer`      | KBO, contact, privacybeleid                          |

## Pagina's

- `/` — Homepage: Nav + placeholder hero + Footer
- `/styleguide` — Alle componenten in alle varianten (intern, altijd beschikbaar)
