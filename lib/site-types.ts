export type Locale = "fa" | "en";
export type Direction = "rtl" | "ltr";
export type PageKey = "home" | "partnership" | "faq";

export type LinkKind = "primary" | "secondary" | "text" | "messaging";

export type IconName =
  | "arrow"
  | "telegram"
  | "mail"
  | "globe"
  | "menu"
  | "close"
  | "check"
  | "spark"
  | "shield"
  | "chip"
  | "chart"
  | "wallet"
  | "support"
  | "football"
  | "slots"
  | "live"
  | "gift"
  | "network";

export type LinkItem = {
  label: string;
  href: string;
  kind?: LinkKind;
  external?: boolean;
  icon?: IconName;
  ariaLabel?: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type MediaFit = "cover" | "contain";

export type MediaSlotVariant =
  | "hero-tile"
  | "hero-stage"
  | "card"
  | "sport"
  | "offer"
  | "step"
  | "route"
  | "faq";

export type MediaAsset = {
  id: string;
  src: string;
  alt: string;
  ratio: string;
  fit: MediaFit;
  variant: MediaSlotVariant;
  decorative?: boolean;
};

export type SeoFields = {
  title: string;
  description: string;
};

export type SectionIntro = {
  eyebrow: string;
  title: string;
  description: string;
};

