import type {
  Direction,
  Locale,
  MediaFit,
  MediaSlotVariant,
  PageKey,
} from "@/lib/site-types";

export type IranNavKey =
  | "home"
  | "games"
  | "sports"
  | "offers"
  | "partnership"
  | "benefits"
  | "steps"
  | "paths"
  | "tools"
  | "faq";

export type IranHomeSectionKey = "hero" | "games" | "sports" | "offers";
export type IranPartnershipSectionKey =
  | "hero"
  | "benefits"
  | "steps"
  | "paths"
  | "tools";
export type IranFaqSectionKey = "intro" | "playerFaq" | "partnershipFaq" | "supportCta";

type MediaFallbackStyle = "tile" | "card" | "stage" | "wide";
type OverlaySafeArea = "bottom" | "center" | "full";

export type IranMediaSlotId =
  | "home-hero-01"
  | "home-hero-02"
  | "home-hero-03"
  | "home-game-01"
  | "home-game-02"
  | "home-game-03"
  | "home-game-04"
  | "home-game-05"
  | "home-game-06"
  | "home-sport-01"
  | "home-sport-02"
  | "home-sport-03"
  | "home-sport-04"
  | "home-offer-01"
  | "home-offer-02"
  | "home-offer-03"
  | "home-offer-04"
  | "partnership-hero-stage"
  | "partnership-step-01"
  | "partnership-step-02"
  | "partnership-step-03"
  | "partnership-route-01"
  | "partnership-route-02"
  | "faq-support";

export type IranMediaSlot = {
  page: PageKey;
  section: string;
  path: string;
  ratio: string;
  fit: MediaFit;
  variant: MediaSlotVariant;
  overlaySafeArea: OverlaySafeArea;
  fallback: MediaFallbackStyle;
};

export type CountryPageGlobals = {
  market: string;
  slug: string;
  locales: readonly Locale[];
  defaultLocale: Locale;
  directionByLocale: Record<Locale, Direction>;
  routeMap: Record<PageKey, Record<Locale, string>>;
  metadataMap: Record<PageKey, { canonical: Record<Locale, string> }>;
  chrome: {
    homeAnchors: string[];
    partnershipAnchors: string[];
    footerLinkKeys: IranNavKey[];
    navKeys: {
      home: IranNavKey[];
      partnership: IranNavKey[];
      faq: IranNavKey[];
      compact: IranNavKey[];
    };
    responsive: {
      fullNavMin: number;
      compactNavMin: number;
      mobileDrawerMax: number;
      mobileMenuWidth: string;
    };
  };
  routeAnchors: Record<IranNavKey, string>;
  pageCtaMap: Record<string, string>;
  ctaAvailability: Record<PageKey, string[]>;
  mediaFallbacks: Record<
    MediaFallbackStyle,
    {
      surfaceTone: string;
      accentTone: string;
      motif: string;
    }
  >;
  sizing: {
    density: "balanced";
    containerWidth: 1120;
    containerX: string;
    sectionY: string;
    sectionYTight: string;
    heroTop: string;
    heroBottom: string;
    gridGap: string;
    cardPadding: string;
    buttonMinHeight: string;
    buttonTier: "md";
    headerHeight: string;
    headerHeightMobile: string;
    radii: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      pill: string;
    };
  };
  typography: {
    display: string;
    heading: string;
    subheading: string;
    cardTitle: string;
    bodyLg: string;
    body: string;
    label: string;
    meta: string;
    metric: string;
    stat: string;
    lineHeight: {
      display: number;
      heading: number;
      body: number;
    };
  };
  pages: {
    home: {
      enabledSections: IranHomeSectionKey[];
      order: IranHomeSectionKey[];
      variants: {
        hero: "tile";
        games: "grid";
        sports: "cards";
        offers: "cards";
      };
      assets: {
        hero: IranMediaSlotId[];
        games: IranMediaSlotId[];
        sports: IranMediaSlotId[];
        offers: IranMediaSlotId[];
      };
    };
    partnership: {
      enabledSections: IranPartnershipSectionKey[];
      order: IranPartnershipSectionKey[];
      variants: {
        hero: "split";
        benefits: "dashboard";
        steps: "cards";
        paths: "dual-cards";
        tools: "showcase";
      };
      assets: {
        hero: IranMediaSlotId[];
        steps: IranMediaSlotId[];
        routes: IranMediaSlotId[];
      };
    };
    faq: {
      enabledSections: IranFaqSectionKey[];
      order: IranFaqSectionKey[];
      variants: {
        support: "split";
      };
      assets: {
        support: IranMediaSlotId[];
      };
    };
  };
  mediaSlots: Record<IranMediaSlotId, IranMediaSlot>;
};

const homeHeroSlots = [
  "home-hero-01",
  "home-hero-02",
  "home-hero-03",
] as const satisfies IranMediaSlotId[];

const homeGameSlots = [
  "home-game-01",
  "home-game-02",
  "home-game-03",
  "home-game-04",
  "home-game-05",
  "home-game-06",
] as const satisfies IranMediaSlotId[];

const homeSportSlots = [
  "home-sport-01",
  "home-sport-02",
  "home-sport-03",
  "home-sport-04",
] as const satisfies IranMediaSlotId[];

const homeOfferSlots = [
  "home-offer-01",
  "home-offer-02",
  "home-offer-03",
  "home-offer-04",
] as const satisfies IranMediaSlotId[];

const partnershipHeroSlots = ["partnership-hero-stage"] as const satisfies IranMediaSlotId[];
const partnershipStepSlots = [
  "partnership-step-01",
  "partnership-step-02",
  "partnership-step-03",
] as const satisfies IranMediaSlotId[];
const partnershipRouteSlots = [
  "partnership-route-01",
  "partnership-route-02",
] as const satisfies IranMediaSlotId[];

export const iranGlobals = {
  market: "Iran",
  slug: "iran",
  locales: ["fa", "en"] as const,
  defaultLocale: "fa",
  directionByLocale: {
    fa: "rtl",
    en: "ltr",
  },
  routeMap: {
    home: {
      fa: "/",
      en: "/en",
    },
    partnership: {
      fa: "/partnership",
      en: "/en/partnership",
    },
    faq: {
      fa: "/faq",
      en: "/en/faq",
    },
  },
  metadataMap: {
    home: {
      canonical: {
        fa: "/",
        en: "/en",
      },
    },
    partnership: {
      canonical: {
        fa: "/partnership",
        en: "/en/partnership",
      },
    },
    faq: {
      canonical: {
        fa: "/faq",
        en: "/en/faq",
      },
    },
  },
  chrome: {
    homeAnchors: ["/", "/#games", "/#sports", "/#offers"],
    partnershipAnchors: [
      "/partnership",
      "/partnership#benefits",
      "/partnership#tools",
      "/partnership#steps",
      "/partnership#paths",
    ],
    footerLinkKeys: ["home", "games", "sports", "offers", "partnership", "faq"],
    navKeys: {
      home: ["home", "partnership", "faq"],
      partnership: ["home", "partnership", "faq"],
      faq: ["home", "partnership", "faq"],
      compact: ["home", "partnership", "faq"],
    },
    responsive: {
      fullNavMin: 1180,
      compactNavMin: 980,
      mobileDrawerMax: 979,
      mobileMenuWidth: "min(92vw, 22rem)",
    },
  },
  routeAnchors: {
    home: "/",
    games: "/#games",
    sports: "/#sports",
    offers: "/#offers",
    partnership: "/partnership",
    benefits: "/partnership#benefits",
    steps: "/partnership#steps",
    paths: "/partnership#paths",
    tools: "/partnership#tools",
    faq: "/faq",
  },
  pageCtaMap: {
    homePrimary: "/#games",
    homeSupport: "https://t.me/TeamCash_Iran",
    partnershipPrimary: "https://t.me/TeamCash_Iran",
    partnershipSecondary: "mailto:PAYPARTNERS-MIDDLEAST@MELBET.COM",
    faqSupport: "https://t.me/TeamCash_Iran",
  },
  ctaAvailability: {
    home: [
      "hero.primary",
      "hero.secondary",
      "hero.tertiary",
      "games.cards",
      "sports.cards",
      "offers.cards",
    ],
    partnership: [
      "hero.primary",
      "hero.secondary",
      "paths.partner",
      "paths.agent",
      "tools.primary",
    ],
    faq: ["supportCta.primary", "supportCta.secondary"],
  },
  mediaFallbacks: {
    tile: {
      surfaceTone: "emerald glass",
      accentTone: "gold halo",
      motif: "tight lattice",
    },
    card: {
      surfaceTone: "dark shell",
      accentTone: "emerald line",
      motif: "fine grid",
    },
    stage: {
      surfaceTone: "deep stage",
      accentTone: "gold spotlight",
      motif: "soft arch",
    },
    wide: {
      surfaceTone: "dark ribbon",
      accentTone: "red ember",
      motif: "quiet tile",
    },
  },
  sizing: {
    density: "balanced",
    containerWidth: 1120,
    containerX: "clamp(1rem, 3vw, 2.5rem)",
    sectionY: "clamp(3.35rem, 5vw, 4.75rem)",
    sectionYTight: "clamp(2.4rem, 4vw, 3.35rem)",
    heroTop: "clamp(4.3rem, 10vw, 6.25rem)",
    heroBottom: "clamp(3rem, 6vw, 4.8rem)",
    gridGap: "clamp(0.95rem, 1.6vw, 1.2rem)",
    cardPadding: "clamp(1rem, 1.8vw, 1.22rem)",
    buttonMinHeight: "50px",
    buttonTier: "md",
    headerHeight: "72px",
    headerHeightMobile: "64px",
    radii: {
      sm: "14px",
      md: "18px",
      lg: "28px",
      xl: "36px",
      pill: "999px",
    },
  },
  typography: {
    display: "clamp(2.2rem, 6.8vw, 4.8rem)",
    heading: "clamp(1.78rem, 4.2vw, 3rem)",
    subheading: "clamp(1rem, 2.2vw, 1.22rem)",
    cardTitle: "clamp(1.02rem, 1.9vw, 1.2rem)",
    bodyLg: "clamp(1rem, 1.9vw, 1.18rem)",
    body: "clamp(0.95rem, 1.45vw, 1.03rem)",
    label: "clamp(0.76rem, 1.1vw, 0.88rem)",
    meta: "clamp(0.76rem, 1.1vw, 0.86rem)",
    metric: "clamp(1.35rem, 3vw, 2.4rem)",
    stat: "clamp(1.08rem, 2.2vw, 1.55rem)",
    lineHeight: {
      display: 0.96,
      heading: 1.08,
      body: 1.68,
    },
  },
  pages: {
    home: {
      enabledSections: ["hero", "games", "sports", "offers"],
      order: ["hero", "games", "sports", "offers"],
      variants: {
        hero: "tile",
        games: "grid",
        sports: "cards",
        offers: "cards",
      },
      assets: {
        hero: [...homeHeroSlots],
        games: [...homeGameSlots],
        sports: [...homeSportSlots],
        offers: [...homeOfferSlots],
      },
    },
    partnership: {
      enabledSections: ["hero", "benefits", "tools", "steps", "paths"],
      order: ["hero", "benefits", "tools", "steps", "paths"],
      variants: {
        hero: "split",
        benefits: "dashboard",
        steps: "cards",
        paths: "dual-cards",
        tools: "showcase",
      },
      assets: {
        hero: [...partnershipHeroSlots],
        steps: [...partnershipStepSlots],
        routes: [...partnershipRouteSlots],
      },
    },
    faq: {
      enabledSections: ["intro", "playerFaq", "partnershipFaq", "supportCta"],
      order: ["intro", "playerFaq", "partnershipFaq", "supportCta"],
      variants: {
        support: "split",
      },
      assets: {
        support: ["faq-support"],
      },
    },
  },
  mediaSlots: {
    "home-hero-01": {
      page: "home",
      section: "hero",
      path: "/iran/home/hero/hero-01.webp",
      ratio: "8:7",
      fit: "cover",
      variant: "hero-tile",
      overlaySafeArea: "bottom",
      fallback: "tile",
    },
    "home-hero-02": {
      page: "home",
      section: "hero",
      path: "/iran/home/hero/hero-02.webp",
      ratio: "8:7",
      fit: "cover",
      variant: "hero-tile",
      overlaySafeArea: "bottom",
      fallback: "tile",
    },
    "home-hero-03": {
      page: "home",
      section: "hero",
      path: "/iran/home/hero/hero-03.webp",
      ratio: "8:7",
      fit: "cover",
      variant: "hero-tile",
      overlaySafeArea: "bottom",
      fallback: "tile",
    },
    "home-game-01": {
      page: "home",
      section: "games",
      path: "/iran/home/games/game-01.webp",
      ratio: "6:5",
      fit: "contain",
      variant: "card",
      overlaySafeArea: "center",
      fallback: "card",
    },
    "home-game-02": {
      page: "home",
      section: "games",
      path: "/iran/home/games/game-02.webp",
      ratio: "6:5",
      fit: "contain",
      variant: "card",
      overlaySafeArea: "center",
      fallback: "card",
    },
    "home-game-03": {
      page: "home",
      section: "games",
      path: "/iran/home/games/game-03.webp",
      ratio: "6:5",
      fit: "contain",
      variant: "card",
      overlaySafeArea: "center",
      fallback: "card",
    },
    "home-game-04": {
      page: "home",
      section: "games",
      path: "/iran/home/games/game-04.webp",
      ratio: "6:5",
      fit: "contain",
      variant: "card",
      overlaySafeArea: "center",
      fallback: "card",
    },
    "home-game-05": {
      page: "home",
      section: "games",
      path: "/iran/home/games/game-05.webp",
      ratio: "6:5",
      fit: "contain",
      variant: "card",
      overlaySafeArea: "center",
      fallback: "card",
    },
    "home-game-06": {
      page: "home",
      section: "games",
      path: "/iran/home/games/game-06.webp",
      ratio: "6:5",
      fit: "contain",
      variant: "card",
      overlaySafeArea: "center",
      fallback: "card",
    },
    "home-sport-01": {
      page: "home",
      section: "sports",
      path: "/iran/home/sports/sport-01.webp",
      ratio: "4:5",
      fit: "cover",
      variant: "sport",
      overlaySafeArea: "bottom",
      fallback: "card",
    },
    "home-sport-02": {
      page: "home",
      section: "sports",
      path: "/iran/home/sports/sport-02.webp",
      ratio: "4:5",
      fit: "cover",
      variant: "sport",
      overlaySafeArea: "bottom",
      fallback: "card",
    },
    "home-sport-03": {
      page: "home",
      section: "sports",
      path: "/iran/home/sports/sport-03.webp",
      ratio: "4:5",
      fit: "cover",
      variant: "sport",
      overlaySafeArea: "bottom",
      fallback: "card",
    },
    "home-sport-04": {
      page: "home",
      section: "sports",
      path: "/iran/home/sports/sport-04.webp",
      ratio: "4:5",
      fit: "cover",
      variant: "sport",
      overlaySafeArea: "bottom",
      fallback: "card",
    },
    "home-offer-01": {
      page: "home",
      section: "offers",
      path: "/iran/home/offers/offer-01.webp",
      ratio: "4:3",
      fit: "contain",
      variant: "offer",
      overlaySafeArea: "center",
      fallback: "card",
    },
    "home-offer-02": {
      page: "home",
      section: "offers",
      path: "/iran/home/offers/offer-02.webp",
      ratio: "4:3",
      fit: "contain",
      variant: "offer",
      overlaySafeArea: "center",
      fallback: "card",
    },
    "home-offer-03": {
      page: "home",
      section: "offers",
      path: "/iran/home/offers/offer-03.webp",
      ratio: "4:3",
      fit: "contain",
      variant: "offer",
      overlaySafeArea: "center",
      fallback: "card",
    },
    "home-offer-04": {
      page: "home",
      section: "offers",
      path: "/iran/home/offers/offer-04.webp",
      ratio: "4:3",
      fit: "contain",
      variant: "offer",
      overlaySafeArea: "center",
      fallback: "card",
    },
    "partnership-hero-stage": {
      page: "partnership",
      section: "hero",
      path: "/iran/partnership/hero/hero-stage.png",
      ratio: "16:10",
      fit: "contain",
      variant: "hero-stage",
      overlaySafeArea: "center",
      fallback: "stage",
    },
    "partnership-step-01": {
      page: "partnership",
      section: "steps",
      path: "/iran/partnership/steps/step-01.webp",
      ratio: "16:10",
      fit: "cover",
      variant: "step",
      overlaySafeArea: "center",
      fallback: "card",
    },
    "partnership-step-02": {
      page: "partnership",
      section: "steps",
      path: "/iran/partnership/steps/step-02.webp",
      ratio: "16:10",
      fit: "cover",
      variant: "step",
      overlaySafeArea: "center",
      fallback: "card",
    },
    "partnership-step-03": {
      page: "partnership",
      section: "steps",
      path: "/iran/partnership/steps/step-03.webp",
      ratio: "16:10",
      fit: "cover",
      variant: "step",
      overlaySafeArea: "center",
      fallback: "card",
    },
    "partnership-route-01": {
      page: "partnership",
      section: "paths",
      path: "/iran/partnership/routes/route-01.webp",
      ratio: "16:10",
      fit: "contain",
      variant: "route",
      overlaySafeArea: "center",
      fallback: "card",
    },
    "partnership-route-02": {
      page: "partnership",
      section: "paths",
      path: "/iran/partnership/routes/route-02.webp",
      ratio: "16:10",
      fit: "contain",
      variant: "route",
      overlaySafeArea: "center",
      fallback: "card",
    },
    "faq-support": {
      page: "faq",
      section: "support",
      path: "/iran/faq/faq-support.webp",
      ratio: "16:10",
      fit: "contain",
      variant: "faq",
      overlaySafeArea: "center",
      fallback: "wide",
    },
  },
} satisfies CountryPageGlobals;

export function getMediaSlot(slotId: IranMediaSlotId) {
  return iranGlobals.mediaSlots[slotId];
}
