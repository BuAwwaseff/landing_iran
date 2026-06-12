import { getMediaSlot, iranGlobals, type IranMediaSlotId, type IranNavKey } from "@/src/config/iran.globals";
import type {
  FaqItem,
  IconName,
  LinkItem,
  Locale,
  MediaAsset,
  SeoFields,
  SectionIntro,
  StatItem,
} from "@/lib/site-types";

type DiscoveryCard = {
  title: string;
  body: string;
  badge?: string;
  note?: string;
  icon?: IconName;
  media: MediaAsset;
  cta: LinkItem;
};

type BenefitCard = {
  title: string;
  body: string;
  icon: IconName;
  metric?: string;
};

type StepCard = {
  step: string;
  title: string;
  body: string;
  media: MediaAsset;
};

type PathCard = {
  tag: string;
  title: string;
  body: string;
  bullets: string[];
  media: MediaAsset;
  cta: LinkItem;
};

type ToolPanel = {
  title: string;
  body: string;
  icon: IconName;
  stat?: StatItem;
  bullets?: string[];
};

type HeroContent = {
  eyebrow: string;
  title: string;
  body: string;
  primaryCta: LinkItem;
  secondaryCta: LinkItem;
  tertiaryCta?: LinkItem;
  stats: StatItem[];
  highlights: string[];
  media: MediaAsset[];
};

type FinalCtaContent = SectionIntro & {
  primaryCta: LinkItem;
  secondaryCta: LinkItem;
  messaging: LinkItem[];
};

type HomePageContent = {
  seo: SeoFields;
  hero: HeroContent;
  games: SectionIntro & { cards: DiscoveryCard[] };
  sports: SectionIntro & { cards: DiscoveryCard[] };
  offers: SectionIntro & { cards: DiscoveryCard[] };
  finalCta: FinalCtaContent;
};

type PartnershipPageContent = {
  seo: SeoFields;
  hero: HeroContent;
  benefits: SectionIntro & { cards: BenefitCard[] };
  steps: SectionIntro & { cards: StepCard[] };
  paths: SectionIntro & { cards: PathCard[] };
  tools: SectionIntro & {
    stage: {
      eyebrow: string;
      title: string;
      body: string;
      bullets: string[];
      primaryStat: StatItem;
      secondaryStat: StatItem;
    };
    primaryCta: LinkItem;
    panels: ToolPanel[];
  };
  finalCta: FinalCtaContent;
};

type FooterContent = {
  summary: string;
  groups: Array<{
    label: string;
    href: string;
    links: Array<{
      label: string;
      href: string;
    }>;
  }>;
  note: string;
};

export type FaqGroup = {
  title: string;
  items: FaqItem[];
};

type FaqPageContent = {
  seo: SeoFields;
  intro: SectionIntro;
  player: FaqGroup;
  partnership: FaqGroup;
  support: {
    title: string;
    body: string;
    image: MediaAsset;
    primaryCta: LinkItem;
    secondaryCta: LinkItem;
    messaging: LinkItem[];
  };
};

export type IranMarketContent = {
  locale: Locale;
  localeLabel: string;
  nav: Record<IranNavKey, string>;
  footer: FooterContent;
  home: HomePageContent;
  partnership: PartnershipPageContent;
  faq: FaqPageContent;
};

function slot(id: IranMediaSlotId, alt: string, decorative = false): MediaAsset {
  const media = getMediaSlot(id);
  return {
    id,
    src: media.path,
    alt,
    ratio: media.ratio,
    fit: media.fit,
    variant: media.variant,
    decorative,
  };
}

const sharedActions = {
  telegram: "https://t.me/TeamCash_Iran",
  email: "mailto:PAYPARTNERS-MIDDLEAST@MELBET.COM",
  home: iranGlobals.routeAnchors.home,
  games: iranGlobals.routeAnchors.games,
  sports: iranGlobals.routeAnchors.sports,
  offers: iranGlobals.routeAnchors.offers,
  partnership: iranGlobals.routeAnchors.partnership,
  benefits: iranGlobals.routeAnchors.benefits,
  paths: iranGlobals.routeAnchors.paths,
  tools: iranGlobals.routeAnchors.tools,
  faq: iranGlobals.routeAnchors.faq,
  playerFaq: "/faq#player-faq",
  partnershipFaq: "/faq#partnership-faq",
  support: "/faq#support",
};

const localizedContent: Record<Locale, IranMarketContent> = {
  fa: {
    locale: "fa",
    localeLabel: "فارسی",
    nav: {
      home: "خانه",
      games: "بازی‌ها",
      sports: "ورزشی",
      offers: "پیشنهادها",
      partnership: "همکاری",
      benefits: "مزایا",
      steps: "مراحل",
      paths: "مسیرها",
      tools: "ابزارها",
      faq: "سوالات",
    },
    footer: {
      summary:
        "مسیر ایران برای شروعی روشن‌تر، پشتیبانی مستقیم و تجربه‌ای منظم‌تر طراحی شده است.",
      groups: [
        {
          label: "خانه",
          href: sharedActions.home,
          links: [
            { label: "بازی‌ها", href: sharedActions.games },
            { label: "ورزشی", href: sharedActions.sports },
            { label: "پیشنهادها", href: sharedActions.offers },
          ],
        },
        {
          label: "همکاری",
          href: sharedActions.partnership,
          links: [
            { label: "مزایا", href: sharedActions.benefits },
            { label: "مسیرها", href: sharedActions.paths },
            { label: "ابزارها", href: sharedActions.tools },
          ],
        },
        {
          label: "سوالات",
          href: sharedActions.faq,
          links: [
            { label: "سوالات بازیکنان", href: sharedActions.playerFaq },
            { label: "سوالات همکاری", href: sharedActions.partnershipFaq },
            { label: "پشتیبانی", href: sharedActions.support },
          ],
        },
      ],
      note: "برای شروع سریع‌تر، مسیر مناسب را انتخاب کنید و مستقیم با تیم هماهنگ شوید.",
    },
    home: {
      seo: {
        title: "Iran | فوتبال، کازینو زنده و پیشنهادهای روزانه",
        description:
          "برای بازیکنان ایران، مسیر سریع ورود به فوتبال، بازی‌های زنده، اسلات و پیشنهادهایی که شروع را ساده‌تر می‌کنند.",
      },
      hero: {
        eyebrow: "ورود سریع برای بازیکنان ایران",
        title: "فوتبال، کازینو زنده و پاداش‌های روزانه در یک مسیر سریع و روان",
        body:
          "از مسابقه‌های زنده تا اسلات و میزهای کلاسیک، روی موبایل وارد شوید، دسته دلخواهتان را باز کنید و در صورت نیاز مستقیم با پشتیبانی در ارتباط باشید.",
        primaryCta: {
          label: "بخش بازی‌ها",
          href: sharedActions.games,
          kind: "primary",
          icon: "arrow",
        },
        secondaryCta: {
          label: "تلگرام",
          href: sharedActions.telegram,
          kind: "messaging",
          external: true,
          icon: "telegram",
        },
        tertiaryCta: {
          label: "ایمیل",
          href: sharedActions.email,
          kind: "secondary",
          external: true,
          icon: "mail",
        },
        stats: [
          { value: "24/7", label: "پشتیبانی مستقیم" },
          { value: "4", label: "دسته ورزشی داغ" },
          { value: "6", label: "مسیر بازی آماده" },
          { value: "1", label: "ورود موبایلی سریع" },
        ],
        highlights: [
          "فوتبال زنده با ریتم سریع",
          "کازینو، میز و اسلات در یک جریان",
          "پیشنهادهای روزانه برای شروع راحت‌تر",
        ],
        media: [
          slot("home-hero-01", "صحنه ورزشی برای کارت اول هیرو ایران", true),
          slot("home-hero-02", "صحنه بازی‌های زنده برای کارت دوم هیرو ایران", true),
          slot("home-hero-03", "صحنه جوایز و پیشنهادها برای کارت سوم هیرو ایران", true),
        ],
      },
      games: {
        eyebrow: "کازینو و بازی",
        title: "برای هر سلیقه یک مسیر روشن آماده است",
        description:
          "هر کارت روی یک تجربه مشخص تمرکز دارد تا سریع‌تر وارد همان بخشی شوید که برای شما جذاب‌تر است.",
        cards: [
          {
            title: "اسلات‌های پرسرعت",
            body: "برای دورهای کوتاه، ریتم بالا و تنوعی که هر بار تازه بماند.",
            badge: "Slots",
            media: slot("home-game-01", "اسلات‌های پرسرعت برای بازیکنان ایران"),
            cta: {
              label: "شروع سریع",
              href: sharedActions.faq,
              kind: "secondary",
              icon: "arrow",
            },
          },
          {
            title: "میزهای زنده",
            body: "بلک‌جک، رولت و تجربه‌هایی که حس میز واقعی را نزدیک نگه می‌دارند.",
            badge: "Live",
            media: slot("home-game-02", "میزهای زنده برای بازیکنان ایران"),
            cta: {
              label: "گفت‌وگو با پشتیبانی",
              href: sharedActions.telegram,
              kind: "messaging",
              external: true,
              icon: "telegram",
            },
          },
          {
            title: "بازی‌های لحظه‌ای",
            body: "برای وقتی که تصمیم سریع، هیجان کوتاه و حرکت پیوسته می‌خواهید.",
            badge: "Instant",
            media: slot("home-game-03", "بازی‌های لحظه‌ای برای بازیکنان ایران"),
            cta: {
              label: "راهنمای ورود",
              href: sharedActions.faq,
              kind: "text",
              icon: "arrow",
            },
          },
          {
            title: "میزهای کلاسیک",
            body: "اگر مسیر حساب‌شده‌تر را ترجیح می‌دهید، اینجا انتخاب‌های ثابت و آشنا آماده است.",
            badge: "Table",
            media: slot("home-game-04", "میزهای کلاسیک برای بازیکنان ایران"),
            cta: {
              label: "بخش پیشنهادها",
              href: sharedActions.offers,
              kind: "secondary",
              icon: "gift",
            },
          },
          {
            title: "جلسه‌های شبانه",
            body: "برای بازی آرام‌تر، زمان بیشتر و دسته‌هایی که در شب بهتر می‌نشینند.",
            badge: "Night",
            media: slot("home-game-05", "جلسه‌های شبانه برای بازیکنان ایران"),
            cta: {
              label: "ورود به ورزشی",
              href: sharedActions.sports,
              kind: "text",
              icon: "football",
            },
          },
          {
            title: "کازینوی موبایل",
            body: "همه چیز برای بازشدن تمیز روی موبایل چیده شده تا جابه‌جایی بین بخش‌ها سریع بماند.",
            badge: "Mobile",
            media: slot("home-game-06", "کازینوی موبایل برای بازیکنان ایران"),
            cta: {
              label: "پشتیبانی موبایل",
              href: sharedActions.telegram,
              kind: "messaging",
              external: true,
              icon: "support",
            },
          },
        ],
      },
      sports: {
        eyebrow: "ضرب‌آهنگ مسابقه",
        title: "ورزشی را با تمرکز، سرعت و پوشش واضح دنبال کنید",
        description:
          "چه دنبال فوتبال باشید، چه سراغ انتخاب‌های زنده‌تر بروید، این بخش برای حرکت سریع بین بازارهای اصلی ساخته شده است.",
        cards: [
          {
            title: "فوتبالِ محور",
            body: "برای شروع مستقیم با مسابقه‌هایی که بیشترین توجه را می‌گیرند.",
            note: "لیگ، بازی زنده و انتخاب سریع",
            icon: "football",
            media: slot("home-sport-01", "فوتبال برای بازیکنان ایران"),
            cta: {
              label: "پیشنهادها را ببینید",
              href: sharedActions.offers,
              kind: "secondary",
              icon: "gift",
            },
          },
          {
            title: "ریتم زنده",
            body: "بازارهایی که برای تصمیم سریع و دنبال‌کردن لحظه‌به‌لحظه طراحی شده‌اند.",
            note: "تمرکز روی ورود کوتاه و پیوسته",
            icon: "live",
            media: slot("home-sport-02", "بازارهای زنده برای بازیکنان ایران"),
            cta: {
              label: "تلگرام را باز کنید",
              href: sharedActions.telegram,
              kind: "messaging",
              external: true,
              icon: "telegram",
            },
          },
          {
            title: "تنیس و ضرباهنگ فردی",
            body: "برای کسانی که بازارهای فردی، ست‌به‌ست و تصمیم‌های فشرده را ترجیح می‌دهند.",
            note: "کم‌حجم، سریع و دقیق",
            icon: "spark",
            media: slot("home-sport-03", "تنیس برای بازیکنان ایران"),
            cta: {
              label: "راهنمای سریع را ببینید",
              href: sharedActions.faq,
              kind: "text",
              icon: "arrow",
            },
          },
          {
            title: "بسکتبال و سرعت بالا",
            body: "اگر بازی تند، تغییر امتیاز سریع و فضای پویا می‌خواهید، این مسیر نزدیک‌تر است.",
            note: "برای دنبال‌کردن جریان سریع‌تر",
            icon: "chart",
            media: slot("home-sport-04", "بسکتبال برای بازیکنان ایران"),
            cta: {
              label: "وارد بازی‌ها شوید",
              href: sharedActions.games,
              kind: "text",
              icon: "arrow",
            },
          },
        ],
      },
      offers: {
        eyebrow: "جوایز و مزایا",
        title: "پیشنهادهایی که شروع را سبک‌تر و ماندن را جذاب‌تر می‌کنند",
        description:
          "هر پیشنهاد با یک مسیر مشخص همراه شده تا بدانید برای فعال‌سازی یا پرسیدن جزئیات، کجا باید بروید.",
        cards: [
          {
            title: "شروع خوش‌آمد",
            body: "برای ورود اول، حرکت ابتدایی را ساده‌تر می‌کند و فشار شروع را کمتر می‌گذارد.",
            badge: "Welcome",
            media: slot("home-offer-01", "پیشنهاد خوش‌آمد برای بازیکنان ایران"),
            cta: {
              label: "دریافت کنید",
              href: sharedActions.telegram,
              kind: "messaging",
              external: true,
            },
          },
          {
            title: "جوایز هفتگی",
            body: "برای بازیکنانی که می‌خواهند در طول هفته دلیل تازه‌ای برای برگشتن داشته باشند.",
            badge: "Weekly",
            media: slot("home-offer-02", "جوایز هفتگی برای بازیکنان ایران"),
            cta: {
              label: "دریافت کنید",
              href: sharedActions.email,
              kind: "secondary",
              external: true,
            },
          },
          {
            title: "مزایای بازی زنده",
            body: "وقتی تمرکز شما روی ریتم زنده است، این پیشنهادها مسیر را هماهنگ‌تر می‌کنند.",
            badge: "Live",
            media: slot("home-offer-03", "مزایای بازی زنده برای بازیکنان ایران"),
            cta: {
              label: "دریافت کنید",
              href: sharedActions.telegram,
              kind: "messaging",
              external: true,
            },
          },
        ],
      },
      finalCta: {
        eyebrow: "مسیر بعدی",
        title: "بخش موردنظر را باز کنید یا مستقیم با پشتیبانی هماهنگ شوید",
        description:
          "اگر آماده ورود هستید، از بازی‌ها یا پیشنهادها شروع کنید. اگر سوال دارید، پیام مستقیم سریع‌تر شما را جلو می‌برد.",
        primaryCta: {
          label: "دیدن پیشنهادها",
          href: sharedActions.offers,
          kind: "primary",
          icon: "gift",
        },
        secondaryCta: {
          label: "تلگرام پشتیبانی",
          href: sharedActions.telegram,
          kind: "messaging",
          external: true,
          icon: "telegram",
        },
        messaging: [
          {
            label: "تلگرام",
            href: sharedActions.telegram,
            kind: "messaging",
            external: true,
            icon: "telegram",
          },
          {
            label: "ایمیل",
            href: sharedActions.email,
            kind: "secondary",
            external: true,
            icon: "mail",
          },
        ],
      },
    },
    partnership: {
      seo: {
        title: "Iran Partnership | مسیر شریک و ایجنت محلی",
        description:
          "برای شریک تبلیغاتی و ایجنت محلی در ایران، مسیر همکاری، ابزار اجرایی، پشتیبانی مستقیم و گام‌های شروع روشن شده است.",
      },
      hero: {
        eyebrow: "مسیر همکاری ایران",
        title: "اگر مخاطب، شبکه محلی یا توان پشتیبانی دارید، از مسیر درست وارد همکاری شوید",
        body:
          "برای شریک تبلیغاتی و ایجنت محلی، ساختار روشن، مدیر مستقیم و ابزار عملیاتی آماده است تا سریع‌تر وارد اجرا شوید.",
        primaryCta: {
          label: "شروع همکاری در تلگرام",
          href: sharedActions.telegram,
          kind: "primary",
          external: true,
          icon: "telegram",
        },
        secondaryCta: {
          label: "ارسال ایمیل همکاری",
          href: sharedActions.email,
          kind: "secondary",
          external: true,
          icon: "mail",
        },
        stats: [
          { value: "2", label: "مسیر همکاری روشن" },
          { value: "3", label: "گام شروع" },
          { value: "24/7", label: "هماهنگی مستقیم" },
        ],
        highlights: [
          "مسیر تبلیغاتی برای جامعه و ترافیک",
          "مسیر ایجنت برای پشتیبانی محلی و تراکنش",
          "هماهنگی با مدیر ثابت از اولین گفتگو",
        ],
        media: [slot("partnership-hero-stage", "صحنه همکاری برای بازار ایران", true)],
      },
      benefits: {
        eyebrow: "چرا این مسیر جواب می‌دهد",
        title: "همکاری برای اجرا طراحی شده، نه فقط برای معرفی",
        description:
          "هر مزیت این صفحه روی شفافیت، هماهنگی و حرکت روزانه تمرکز دارد تا شریک و ایجنت بدانند دقیقاً با چه چیزی جلو می‌روند.",
        cards: [
          {
            title: "نمای روشن از جریان کار",
            body: "از ابتدا می‌دانید کدام مسیر مناسب شماست و هر بخش چه نقشی در اجرا دارد.",
            icon: "chart",
            metric: "شفاف",
          },
          {
            title: "پشتیبانی محلی و مستقیم",
            body: "وقتی نیاز به هماهنگی، پاسخ سریع یا تنظیم مسیر دارید، ارتباط مستقیم باز می‌ماند.",
            icon: "support",
            metric: "روزانه",
          },
          {
            title: "مواد کمپین و مسیر تبلیغ",
            body: "برای شریک، کد، پیام، زاویه کمپین و ابزار معرفی از ابتدا روشن است.",
            icon: "spark",
            metric: "آماده",
          },
          {
            title: "اعتماد عملیاتی برای ایجنت",
            body: "برای نقش محلی، تمرکز روی پیگیری، پشتیبانی بازیکن و نظم اجرایی حفظ می‌شود.",
            icon: "shield",
            metric: "منظم",
          },
        ],
      },
      steps: {
        eyebrow: "سه گام شروع",
        title: "شروع همکاری کوتاه، روشن و قابل اجرا نگه داشته شده است",
        description:
          "به‌جای مسیر پیچیده، سه گام اصلی تعریف شده تا بدانید از تماس اول تا شروع کار چه اتفاقی می‌افتد.",
        cards: [
          {
            step: "01",
            title: "مسیر مناسب را مشخص کنید",
            body: "اگر جامعه، کانال یا ترافیک دارید، مسیر شریک مناسب‌تر است. اگر پشتیبانی محلی می‌دهید، مسیر ایجنت روشن‌تر است.",
            media: slot("partnership-step-01", "گام اول همکاری برای بازار ایران"),
          },
          {
            step: "02",
            title: "با مدیر هماهنگ شوید",
            body: "بعد از انتخاب مسیر، درباره نیازها، ابزار، نحوه شروع و روش ارتباط مستقیم هماهنگی انجام می‌شود.",
            media: slot("partnership-step-02", "گام دوم همکاری برای بازار ایران"),
          },
          {
            step: "03",
            title: "اولین جریان را اجرا کنید",
            body: "کمپین، پشتیبانی یا فرآیند محلی از همین نقطه وارد اجرا می‌شود و مسیر بعدی مرحله‌به‌مرحله روشن می‌ماند.",
            media: slot("partnership-step-03", "گام سوم همکاری برای بازار ایران"),
          },
        ],
      },
      paths: {
        eyebrow: "دو مسیر متمایز",
        title: "شریک و ایجنت یکی نیستند؛ هر کدام نقش و ابزار خود را دارند",
        description:
          "این صفحه مسیر تبلیغاتی را از مسیر محلی جدا می‌کند تا تصمیم شما از همان ابتدا دقیق‌تر باشد.",
        cards: [
          {
            tag: "Partner",
            title: "مسیر شریک تبلیغاتی",
            body: "برای افرادی که جامعه، پیج، کانال، ترافیک یا فضای رسانه‌ای دارند و می‌خواهند بازیکن را با کد و کمپین جذب کنند.",
            bullets: [
              "کد یا لینک مشخص برای معرفی",
              "پیام و محتوای کمپین برای شروع سریع",
              "مدیر برای هماهنگی روزانه و تنظیم مسیر",
            ],
            media: slot("partnership-route-01", "مسیر شریک تبلیغاتی در ایران"),
            cta: {
              label: "تلگرام",
              href: sharedActions.telegram,
              kind: "messaging",
              external: true,
              icon: "telegram",
            },
          },
          {
            tag: "Agent",
            title: "مسیر ایجنت محلی",
            body: "برای کسانی که می‌توانند پشتیبانی محلی بدهند، ارتباط بازیکن را نگه دارند و جریان‌های اجرایی را منظم پیش ببرند.",
            bullets: [
              "پشتیبانی محلی و پاسخ نزدیک‌تر",
              "هماهنگی بهتر برای تراکنش و اعتماد عملیاتی",
              "ارتباط مستقیم با مدیر برای حل سریع مسئله‌ها",
            ],
            media: slot("partnership-route-02", "مسیر ایجنت محلی در ایران"),
            cta: {
              label: "ایمیل",
              href: sharedActions.email,
              kind: "secondary",
              external: true,
              icon: "mail",
            },
          },
        ],
      },
      tools: {
        eyebrow: "ابزار اجرا",
        title: "برای پیگیری، هماهنگی و حرکت روزانه، ابزارها در همان مسیر کار قرار می‌گیرند",
        description:
          "این بخش درباره زرق‌وبرق نیست؛ برای این است که شریک و ایجنت بدانند اجرای روزانه با چه تکیه‌گاه‌هایی جلو می‌رود.",
        stage: {
          eyebrow: "Operational Focus",
          title: "از گزارش، پیام و پشتیبانی تا اجرای اولین موج",
          body:
            "وقتی تصمیم گرفته شد، مسیر باید قابل پیگیری بماند. اینجا تمرکز روی ابزارهایی است که از تماس اول تا اجرای مداوم، هماهنگی را سبک‌تر می‌کنند.",
          bullets: [
            "نمای جمع‌وجور برای مرور جریان",
            "پیام هماهنگ برای شروع و ادامه کمپین",
            "دسترسی مستقیم برای حل سریع مسئله‌ها",
          ],
          primaryStat: {
            value: "24/7",
            label: "پنجره هماهنگی",
          },
          secondaryStat: {
            value: "2",
            label: "مسیر اجرایی شفاف",
          },
        },
        primaryCta: {
          label: "صحبت با مدیر",
          href: sharedActions.telegram,
          kind: "primary",
          external: true,
          icon: "telegram",
        },
        panels: [
          {
            title: "کیت شروع کمپین",
            body: "تا شریک برای شروع منتظر نماند و از همان ابتدا پیام و مسیر مشخص داشته باشد.",
            icon: "spark",
            bullets: ["متن کوتاه", "زاویه کمپین", "دعوت‌به‌اقدام روشن"],
          },
          {
            title: "پشتیبانی محلی",
            body: "برای ایجنت‌هایی که باید نزدیک بمانند و ارتباط بازیکن را بدون پیچیدگی مدیریت کنند.",
            icon: "wallet",
            bullets: ["هماهنگی نزدیک", "حل سریع مسئله", "اعتماد عملیاتی"],
          },
        ],
      },
      finalCta: {
        eyebrow: "آماده شروع",
        title: "مسیر مناسب را انتخاب کنید و با یک گفت‌وگوی روشن وارد همکاری شوید",
        description:
          "اگر می‌دانید شریک هستید یا ایجنت، همان مسیر را باز کنید. اگر هنوز بین این دو مردد هستید، از تلگرام یا ایمیل شروع کنید.",
        primaryCta: {
          label: "شروع در تلگرام",
          href: sharedActions.telegram,
          kind: "primary",
          external: true,
          icon: "telegram",
        },
        secondaryCta: {
          label: "ارسال ایمیل همکاری",
          href: sharedActions.email,
          kind: "secondary",
          external: true,
          icon: "mail",
        },
        messaging: [
          {
            label: "تلگرام",
            href: sharedActions.telegram,
            kind: "messaging",
            external: true,
            icon: "telegram",
          },
          {
            label: "ایمیل",
            href: sharedActions.email,
            kind: "secondary",
            external: true,
            icon: "mail",
          },
        ],
      },
    },
    faq: {
      seo: {
        title: "Iran FAQ | پاسخ کوتاه برای بازیکن، شریک و ایجنت",
        description:
          "پرسش‌های اصلی بازیکنان، شرکا و ایجنت‌ها در یک صفحه کوتاه جمع شده تا مسیر شروع و تماس سریع‌تر روشن شود.",
      },
      intro: {
        eyebrow: "پرسش‌های متداول",
        title: "پاسخ‌های کوتاه برای شروع سریع‌تر",
        description:
          "اگر برای ورود، همکاری یا تماس سوالی دارید، جواب‌های اصلی همین‌جا جمع شده تا مسیر بعدی روشن‌تر باشد.",
      },
      player: {
        title: "برای بازیکنان",
        items: [
          {
            question: "از کجا شروع کنم؟",
            answer:
              "اگر می‌خواهید سریع وارد شوید، از بخش بازی‌ها یا ورزشی شروع کنید. اگر هنوز سوال دارید، تلگرام سریع‌ترین مسیر هماهنگی است.",
          },
          {
            question: "چه بازی‌هایی در دسترس هستند؟",
            answer:
              "مسیر خانه روی فوتبال، اسلات، میزهای زنده، بازی‌های لحظه‌ای و چند دسته اصلی کازینو تمرکز دارد.",
          },
          {
            question: "بخش ورزشی و کازینو جداست؟",
            answer:
              "بله. هر بخش با ناوبری روشن جدا شده تا بتوانید سریع‌تر بین فوتبال، بازارهای زنده و بازی‌های کازینویی جابه‌جا شوید.",
          },
          {
            question: "پیشنهادها و جوایز از کجا پیگیری می‌شوند؟",
            answer:
              "کارت‌های بخش پیشنهادها مسیر دقیق فعال‌سازی یا پرسیدن شرایط را نشان می‌دهند؛ بیشتر پرسش‌ها از تلگرام یا ایمیل سریع‌تر حل می‌شود.",
          },
          {
            question: "همه چیز روی موبایل هم خوب کار می‌کند؟",
            answer:
              "ساختار صفحه و مسیرهای اصلی برای ورود، جابه‌جایی بین بخش‌ها و تماس سریع روی موبایل هم جمع‌وجور و قابل استفاده نگه داشته شده‌اند.",
          },
          {
            question: "اگر کمک بخواهم از کجا پیام بدهم؟",
            answer:
              "تلگرام سریع‌ترین راه است. اگر لازم باشد جزئیات بیشتری بفرستید، ایمیل هم برای همان کار در دسترس است.",
          },
        ],
      },
      partnership: {
        title: "برای همکاری",
        items: [
          {
            question: "چه کسی می‌تواند برای همکاری اقدام کند؟",
            answer:
              "اگر جامعه، کانال، پیج، ترافیک، ارتباط محلی یا توان پشتیبانی بازیکن و تراکنش را دارید، این مسیر برای شما طراحی شده است.",
          },
          {
            question: "تفاوت شریک و ایجنت چیست؟",
            answer:
              "شریک بیشتر روی معرفی، کمپین و جذب مخاطب کار می‌کند. ایجنت روی پشتیبانی محلی، پیگیری اجرایی و حفظ جریان نزدیک‌تر است.",
          },
          {
            question: "چه ابزار یا پشتیبانی دریافت می‌کنم؟",
            answer:
              "مسیر همکاری شامل هماهنگی مستقیم، تنظیم مسیر شروع، مواد اولیه کمپین و پشتیبانی روزانه برای ادامه کار است.",
          },
          {
            question: "چطور عملکرد و پیشرفت پیگیری می‌شود؟",
            answer:
              "تمرکز روی مرور منظم، پیام هماهنگ و ارتباط مستقیم با مدیر است تا بدانید کدام مسیر و کدام اقدام بهتر جواب می‌دهد.",
          },
          {
            question: "شرایط همکاری چطور مطرح می‌شود؟",
            answer:
              "جزئیات دقیق بعد از مشخص‌شدن مسیر شما مطرح می‌شود تا گفتگو از همان ابتدا به نقش واقعی شما نزدیک بماند.",
          },
          {
            question: "برای شروع از کجا باید تماس بگیرم؟",
            answer:
              "اگر می‌خواهید سریع‌تر شروع کنید، از تلگرام وارد شوید. اگر لازم است شرح کامل‌تری بفرستید، ایمیل مسیر بهتری است.",
          },
        ],
      },
      support: {
        title: "هنوز سوالی مانده؟",
        body:
          "در تلگرام پیام بدهید یا جزئیات را با ایمیل بفرستید تا مسیر مناسب برای بازی، همکاری یا پشتیبانی سریع‌تر پیشنهاد شود.",
        image: slot("faq-support", "پشتیبانی و هماهنگی برای بازار ایران", true),
        primaryCta: {
          label: "تلگرام",
          href: sharedActions.telegram,
          kind: "primary",
          external: true,
          icon: "telegram",
        },
        secondaryCta: {
          label: "ارسال ایمیل",
          href: sharedActions.email,
          kind: "secondary",
          external: true,
          icon: "mail",
        },
        messaging: [
          {
            label: "تلگرام",
            href: sharedActions.telegram,
            kind: "messaging",
            external: true,
            icon: "telegram",
          },
          {
            label: "ایمیل",
            href: sharedActions.email,
            kind: "secondary",
            external: true,
            icon: "mail",
          },
        ],
      },
    },
  },
  en: {
    locale: "en",
    localeLabel: "English",
    nav: {
      home: "Home",
      games: "Games",
      sports: "Sports",
      offers: "Offers",
      partnership: "Partnership",
      benefits: "Benefits",
      steps: "Steps",
      paths: "Paths",
      tools: "Tools",
      faq: "FAQ",
    },
    footer: {
      summary:
        "The Iran route is built for a cleaner start, direct support, and a steadier overall flow.",
      groups: [
        {
          label: "Home",
          href: sharedActions.home,
          links: [
            { label: "Games", href: sharedActions.games },
            { label: "Sports", href: sharedActions.sports },
            { label: "Offers", href: sharedActions.offers },
          ],
        },
        {
          label: "Partnership",
          href: sharedActions.partnership,
          links: [
            { label: "Benefits", href: sharedActions.benefits },
            { label: "Paths", href: sharedActions.paths },
            { label: "Tools", href: sharedActions.tools },
          ],
        },
        {
          label: "FAQ",
          href: sharedActions.faq,
          links: [
            { label: "Player FAQ", href: sharedActions.playerFaq },
            { label: "Partnership FAQ", href: sharedActions.partnershipFaq },
            { label: "Support", href: sharedActions.support },
          ],
        },
      ],
      note: "Choose the route that fits you and move into a direct conversation instead of a long handoff.",
    },
    home: {
      seo: {
        title: "Iran | football, live casino, and daily rewards",
        description:
          "A player-facing Iran route built around football, live play, slots, mobile access, and offers that make the first step easier.",
      },
      hero: {
        eyebrow: "Fast entry for the Iranian audience",
        title: "Football, live casino, and daily rewards in one fast, polished route",
        body:
          "Move from live matches to slots and table games on mobile, keep support within reach, and use offers that make the first step easier.",
        primaryCta: {
          label: "Open games",
          href: sharedActions.games,
          kind: "primary",
          icon: "arrow",
        },
        secondaryCta: {
          label: "Telegram",
          href: sharedActions.telegram,
          kind: "messaging",
          external: true,
          icon: "telegram",
        },
        tertiaryCta: {
          label: "Email",
          href: sharedActions.email,
          kind: "secondary",
          external: true,
          icon: "mail",
        },
        stats: [
          { value: "24/7", label: "direct support" },
          { value: "4", label: "hot sports lanes" },
          { value: "6", label: "ready game paths" },
          { value: "1", label: "fast mobile entry" },
        ],
        highlights: [
          "live football with a fast match rhythm",
          "casino, tables, and slots in one clean flow",
          "daily offers that keep the start lighter",
        ],
        media: [
          slot("home-hero-01", "Sport-led hero tile for the Iran home page", true),
          slot("home-hero-02", "Live games tile for the Iran home page", true),
          slot("home-hero-03", "Offers tile for the Iran home page", true),
        ],
      },
      games: {
        eyebrow: "Casino and discovery",
        title: "Each lane is set up to help you enter the right game flow faster",
        description:
          "Every card holds a clearer promise, so you can move straight into the part of the catalog that fits your mood.",
        cards: [
          {
            title: "Fast slots",
            body: "Built for short rounds, high rhythm, and a catalog that keeps moving.",
            badge: "Slots",
            media: slot("home-game-01", "Fast slots for the Iran audience"),
            cta: {
              label: "Quick start guide",
              href: sharedActions.faq,
              kind: "secondary",
              icon: "arrow",
            },
          },
          {
            title: "Live tables",
            body: "Blackjack, roulette, and live table energy that stays closer to a real-seat feeling.",
            badge: "Live",
            media: slot("home-game-02", "Live tables for the Iran audience"),
            cta: {
              label: "Talk to support",
              href: sharedActions.telegram,
              kind: "messaging",
              external: true,
              icon: "telegram",
            },
          },
          {
            title: "Instant rounds",
            body: "For players who want quicker decisions, tighter timing, and a steady pace.",
            badge: "Instant",
            media: slot("home-game-03", "Instant rounds for the Iran audience"),
            cta: {
              label: "startt now",
              href: sharedActions.faq,
              kind: "text",
              icon: "arrow",
            },
          },
          {
            title: "Table classics",
            body: "A calmer route for players who prefer familiar structures and cleaner pacing.",
            badge: "Table",
            media: slot("home-game-04", "Table classics for the Iran audience"),
            cta: {
              label: "See offers",
              href: sharedActions.offers,
              kind: "secondary",
              icon: "gift",
            },
          },
          {
            title: "Night sessions",
            body: "For longer stretches, slower pacing, and a more focused late-hour flow.",
            badge: "Night",
            media: slot("home-game-05", "Night sessions for the Iran audience"),
            cta: {
              label: "Open sports",
              href: sharedActions.sports,
              kind: "text",
              icon: "football",
            },
          },
          {
            title: "Mobile casino",
            body: "The switch between sections stays compact so the route still feels clean on smaller screens.",
            badge: "Mobile",
            media: slot("home-game-06", "Mobile casino for the Iran audience"),
            cta: {
              label: "Mobile support",
              href: sharedActions.telegram,
              kind: "messaging",
              external: true,
              icon: "support",
            },
          },
        ],
      },
      sports: {
        eyebrow: "Match rhythm",
        title: "Follow sports with a sharper structure and faster movement between lanes",
        description:
          "Whether you start with football or move into faster live markets, the section keeps the main categories within easy reach.",
        cards: [
          {
            title: "Football focus",
            body: "A direct route into the sport that usually sets the pace for the whole page.",
            note: "league, live match, and quick entry",
            icon: "football",
            media: slot("home-sport-01", "Football for the Iran audience"),
            cta: {
              label: "Explore offers",
              href: sharedActions.offers,
              kind: "secondary",
              icon: "gift",
            },
          },
          {
            title: "Live momentum",
            body: "Made for faster reads, tighter timing, and players who want the action to stay close.",
            note: "short entry, steady movement",
            icon: "live",
            media: slot("home-sport-02", "Live momentum for the Iran audience"),
            cta: {
              label: "Open Telegram",
              href: sharedActions.telegram,
              kind: "messaging",
              external: true,
              icon: "telegram",
            },
          },
          {
            title: "Tennis rhythm",
            body: "A cleaner lane for set-by-set movement, sharper timing, and more individual pacing.",
            note: "faster reads, tighter windows",
            icon: "spark",
            media: slot("home-sport-03", "Tennis for the Iran audience"),
            cta: {
              label: "See the quick guide",
              href: sharedActions.faq,
              kind: "text",
              icon: "arrow",
            },
          },
          {
            title: "Basketball pace",
            body: "For players who want quicker swings, high tempo, and a more dynamic score flow.",
            note: "stronger movement, faster turns",
            icon: "chart",
            media: slot("home-sport-04", "Basketball for the Iran audience"),
            cta: {
              label: "Jump into games",
              href: sharedActions.games,
              kind: "text",
              icon: "arrow",
            },
          },
        ],
      },
      offers: {
        eyebrow: "Rewards and value",
        title: "Offers that make the first move lighter and the return path more attractive",
        description:
          "Every offer points to a real next step, so activation, support, or clarification never feels hidden.",
        cards: [
          {
            title: "Welcome entry",
            body: "A smoother first move for players who want to begin with a little more breathing room.",
            badge: "Welcome",
            media: slot("home-offer-01", "Welcome entry offer for the Iran audience"),
            cta: {
              label: "Claim now",
              href: sharedActions.telegram,
              kind: "messaging",
              external: true,
            },
          },
          {
            title: "Weekly rewards",
            body: "A steady reason to come back during the week instead of relying on one-off bursts.",
            badge: "Weekly",
            media: slot("home-offer-02", "Weekly rewards for the Iran audience"),
            cta: {
              label: "Claim now",
              href: sharedActions.email,
              kind: "secondary",
              external: true,
            },
          },
          {
            title: "Live-play extras",
            body: "Built for players whose main energy comes from live pacing and short-turn action.",
            badge: "Live",
            media: slot("home-offer-03", "Live-play extras for the Iran audience"),
            cta: {
              label: "Claim now",
              href: sharedActions.telegram,
              kind: "messaging",
              external: true,
            },
          },
        ],
      },
      finalCta: {
        eyebrow: "Next move",
        title: "Open the right lane now, or go straight into direct support",
        description:
          "If you are ready to move, start from games or offers. If you still need a clearer answer, a direct message keeps the path shorter.",
        primaryCta: {
          label: "See offers",
          href: sharedActions.offers,
          kind: "primary",
          icon: "gift",
        },
        secondaryCta: {
          label: "Telegram support",
          href: sharedActions.telegram,
          kind: "messaging",
          external: true,
          icon: "telegram",
        },
        messaging: [
          {
            label: "Telegram",
            href: sharedActions.telegram,
            kind: "messaging",
            external: true,
            icon: "telegram",
          },
          {
            label: "Email",
            href: sharedActions.email,
            kind: "secondary",
            external: true,
            icon: "mail",
          },
        ],
      },
    },
    partnership: {
      seo: {
        title: "Iran Partnership | partner and local agent routes",
        description:
          "A business-facing Iran route with separate partner and agent logic, clearer operational support, and direct onboarding contact.",
      },
      hero: {
        eyebrow: "Iran partnership route",
        title: "If you have audience, local reach, or support capacity, enter through the right route",
        body:
          "The page separates promotional partner work from local agent support, then keeps the first actions, tools, and contact paths clear.",
        primaryCta: {
          label: "Start in Telegram",
          href: sharedActions.telegram,
          kind: "primary",
          external: true,
          icon: "telegram",
        },
        secondaryCta: {
          label: "Email the partnership desk",
          href: sharedActions.email,
          kind: "secondary",
          external: true,
          icon: "mail",
        },
        stats: [
          { value: "2", label: "clear work routes" },
          { value: "3", label: "start steps" },
          { value: "24/7", label: "direct coordination" },
        ],
        highlights: [
          "one path for audience growth and codes",
          "one path for local support and execution",
          "a direct manager line from the first conversation",
        ],
        media: [slot("partnership-hero-stage", "Partnership stage for the Iran route", true)],
      },
      benefits: {
        eyebrow: "Why this route works",
        title: "The structure is made for execution, not just for a surface-level intro",
        description:
          "Each benefit focuses on clarity, support, and day-to-day movement so partners and agents know how the route stays usable after the first contact.",
        cards: [
          {
            title: "Clear operating view",
            body: "You know early which path fits you and how each part of the route supports that role.",
            icon: "chart",
            metric: "clear",
          },
          {
            title: "Direct local support",
            body: "When coordination, adjustments, or quick answers matter, the line stays short and practical.",
            icon: "support",
            metric: "daily",
          },
          {
            title: "Campaign-ready material",
            body: "For partners, the route starts with usable messages, promo structure, and a sharper launch angle.",
            icon: "spark",
            metric: "ready",
          },
          {
            title: "Operational trust for agents",
            body: "For local support roles, the focus stays on order, consistency, and cleaner player-facing follow-through.",
            icon: "shield",
            metric: "steady",
          },
        ],
      },
      steps: {
        eyebrow: "Three-step start",
        title: "The opening flow stays short, clear, and usable",
        description:
          "Instead of a heavy onboarding path, the first movement is shaped around three clear steps that keep the route practical.",
        cards: [
          {
            step: "01",
            title: "Choose the right route",
            body: "If you bring audience, channels, or traffic, the partner path will usually fit better. If you support local execution, the agent path is closer.",
            media: slot("partnership-step-01", "Step one for the Iran partnership route"),
          },
          {
            step: "02",
            title: "Align with the manager",
            body: "The next step is to match your role, needs, and start conditions to a clear operating flow.",
            media: slot("partnership-step-02", "Step two for the Iran partnership route"),
          },
          {
            step: "03",
            title: "Launch the first flow",
            body: "From that point, the first campaign or support loop starts, and the next actions stay visible instead of vague.",
            media: slot("partnership-step-03", "Step three for the Iran partnership route"),
          },
        ],
      },
      paths: {
        eyebrow: "Two separate paths",
        title: "Partner and agent are not the same role, so they should not share the same pitch",
        description:
          "This route separates promotional growth work from local support work, making the next step sharper from the start.",
        cards: [
          {
            tag: "Partner",
            title: "Promotional partner path",
            body: "Built for people with communities, channels, content, traffic, or a media position that can bring players in through sharper promotion.",
            bullets: [
              "a clear code or link-led route",
              "campaign-ready messaging and launch material",
              "daily coordination with a manager when adjustments matter",
            ],
            media: slot("partnership-route-01", "Promotional partner path for Iran"),
            cta: {
              label: "Telegram",
              href: sharedActions.telegram,
              kind: "messaging",
              external: true,
              icon: "telegram",
            },
          },
          {
            tag: "Agent",
            title: "Local agent path",
            body: "Built for people who can stay closer to players, local support, transaction trust, and day-to-day operating follow-through.",
            bullets: [
              "closer local support and response",
              "better coordination for transaction-related trust",
              "direct manager access when issues need a faster path",
            ],
            media: slot("partnership-route-02", "Local agent path for Iran"),
            cta: {
              label: "Email",
              href: sharedActions.email,
              kind: "secondary",
              external: true,
              icon: "mail",
            },
          },
        ],
      },
      tools: {
        eyebrow: "Execution tools",
        title: "Daily work stays lighter when reporting, messaging, and support are already aligned",
        description:
          "This section is built around practical movement, not decoration, so the route stays credible after the first conversation.",
        stage: {
          eyebrow: "Operational focus",
          title: "From reporting and messaging to the first launch wave",
          body:
            "Once the role is clear, the route needs visible support. The tool layer keeps reporting, message flow, and direct help close to the work itself.",
          bullets: [
            "a compact view for ongoing checks",
            "clean campaign framing for the next move",
            "direct access when an issue needs a faster answer",
          ],
          primaryStat: {
            value: "24/7",
            label: "coordination window",
          },
          secondaryStat: {
            value: "2",
            label: "clear execution paths",
          },
        },
        primaryCta: {
          label: "Talk to the manager",
          href: sharedActions.telegram,
          kind: "primary",
          external: true,
          icon: "telegram",
        },
        panels: [
          {
            title: "Launch kit",
            body: "So partners do not wait for a starting point and can move into a cleaner first wave.",
            icon: "spark",
            bullets: ["short copy", "campaign angle", "direct call to action"],
          },
          {
            title: "Local support loop",
            body: "For agents who need to stay close to players and keep the operating path steady.",
            icon: "wallet",
            bullets: ["closer coordination", "faster issue handling", "operational trust"],
          },
        ],
      },
      finalCta: {
        eyebrow: "Ready to move",
        title: "Pick the route that fits you and start with a clear conversation",
        description:
          "If you already know you are closer to partner or agent work, open that lane now. If not, begin with Telegram or email and sort it out fast.",
        primaryCta: {
          label: "Start in Telegram",
          href: sharedActions.telegram,
          kind: "primary",
          external: true,
          icon: "telegram",
        },
        secondaryCta: {
          label: "Email the desk",
          href: sharedActions.email,
          kind: "secondary",
          external: true,
          icon: "mail",
        },
        messaging: [
          {
            label: "Telegram",
            href: sharedActions.telegram,
            kind: "messaging",
            external: true,
            icon: "telegram",
          },
          {
            label: "Email",
            href: sharedActions.email,
            kind: "secondary",
            external: true,
            icon: "mail",
          },
        ],
      },
    },
    faq: {
      seo: {
        title: "Iran FAQ | short answers for players, partners, and agents",
        description:
          "The main player and partnership questions are gathered in one short Iran FAQ with a direct support path for follow-up.",
      },
      intro: {
        eyebrow: "Frequently asked questions",
        title: "Short answers that make the next step clearer",
        description:
          "If you need a faster read on entry, support, or partnership direction, the main answers are collected here.",
      },
      player: {
        title: "For players",
        items: [
          {
            question: "Where should I start?",
            answer:
              "If you want the fastest entry, start from Games or Sports. If you still need a clearer answer first, Telegram is the shortest support path.",
          },
          {
            question: "What kinds of games are available?",
            answer:
              "The home route is built around football, slots, live tables, instant rounds, and a compact set of core casino categories.",
          },
          {
            question: "Are sports and casino kept separate?",
            answer:
              "Yes. The navigation keeps sports, games, offers, and support paths clearer so moving between them stays quicker.",
          },
          {
            question: "How do I follow offers and rewards?",
            answer:
              "Each offer card points to a real next action, and most detail-heavy questions move faster through Telegram or email.",
          },
          {
            question: "Does the route work well on mobile?",
            answer:
              "The structure is kept compact for mobile entry, section changes, and support actions, so the page stays usable on smaller screens too.",
          },
          {
            question: "Where do I ask for help?",
            answer:
              "Telegram is the fastest path. If you need to send more detailed context, email is also available for the same route.",
          },
        ],
      },
      partnership: {
        title: "For partnership",
        items: [
          {
            question: "Who can apply for the partnership route?",
            answer:
              "People with audience, channels, local reach, support capacity, or practical execution ability are the closest fit for this page.",
          },
          {
            question: "What is the difference between partner and agent?",
            answer:
              "Partners focus on audience growth, codes, and promotion. Agents stay closer to local support, transaction trust, and operating follow-through.",
          },
          {
            question: "What support or tools are included?",
            answer:
              "The route is built around direct coordination, launch guidance, campaign-ready framing, and practical day-to-day follow-up.",
          },
          {
            question: "How is progress reviewed?",
            answer:
              "The structure leans on regular review, message alignment, and direct manager access so the route can adjust without long delays.",
          },
          {
            question: "How are terms discussed?",
            answer:
              "Exact terms are handled after your route is clearer, so the conversation stays tied to the real role instead of a generic pitch.",
          },
          {
            question: "How do I start the conversation?",
            answer:
              "Telegram is the fastest opening move. If you need to send fuller context, email is the cleaner route.",
          },
        ],
      },
      support: {
        title: "Still need a clearer answer?",
        body:
          "Use Telegram for the faster route, or send the full context by email so the best player, partner, or agent path can be suggested without delay.",
        image: slot("faq-support", "Support and onboarding support art for Iran", true),
        primaryCta: {
          label: "Telegram",
          href: sharedActions.telegram,
          kind: "primary",
          external: true,
          icon: "telegram",
        },
        secondaryCta: {
          label: "Send email",
          href: sharedActions.email,
          kind: "secondary",
          external: true,
          icon: "mail",
        },
        messaging: [
          {
            label: "Telegram",
            href: sharedActions.telegram,
            kind: "messaging",
            external: true,
            icon: "telegram",
          },
          {
            label: "Email",
            href: sharedActions.email,
            kind: "secondary",
            external: true,
            icon: "mail",
          },
        ],
      },
    },
  },
};

export function getIranContent(locale: Locale) {
  return localizedContent[locale];
}

export function getIranHomeContent(locale: Locale) {
  return getIranContent(locale).home;
}

export function getIranPartnershipContent(locale: Locale) {
  return getIranContent(locale).partnership;
}

export function getIranFaqContent(locale: Locale) {
  return getIranContent(locale).faq;
}
