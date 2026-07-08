import type Lenis from "lenis";

// Gedeelde verwijzing naar de actieve Lenis-instantie (alleen op desktop actief,
// zie SmoothScrollProvider). Programmatisch scrollen moet via Lenis lopen zodat
// Lenis' interne scrollpositie in sync blijft; anders springt de pagina terug
// naar boven zodra de gebruiker daarna zelf scrolt.
let current: Lenis | null = null;

export function setLenisInstance(instance: Lenis | null) {
  current = instance;
}

export function getLenisInstance(): Lenis | null {
  return current;
}
