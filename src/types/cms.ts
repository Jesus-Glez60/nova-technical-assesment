export interface HeroProps {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  backgroundImage?: string;
}

export interface FeaturesProps {
  heading: string;
  items: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

export interface CTAProps {
  heading: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

// Discriminated union of all known block types
export type HeroBlock = { type: "hero"; props: HeroProps };
export type FeaturesBlock = { type: "features"; props: FeaturesProps };
export type CTABlock = { type: "cta"; props: CTAProps };

// Catch-all for unregistered types (e.g. "slider", "testimonials")
export type UnknownBlock = { type: string; props: Record<string, unknown> };

export type CMSBlock = HeroBlock | FeaturesBlock | CTABlock | UnknownBlock;
export type CMSPayload = CMSBlock[];
