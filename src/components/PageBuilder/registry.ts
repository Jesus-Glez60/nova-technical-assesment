import type { ComponentType } from "react";
import { Hero } from "./blocks/Hero";
import { Features } from "./blocks/Features";
import { CTA } from "./blocks/CTA";
import { UnknownBlock } from "./blocks/UnknownBlock";

// Maps CMS block type strings to their React components.
// To register a new block type, add one entry here — no other file needs changing.
export const blockRegistry: Record<string, ComponentType<any>> = { // eslint-disable-line @typescript-eslint/no-explicit-any
  hero: Hero,
  features: Features,
  cta: CTA,
};

export { UnknownBlock };
