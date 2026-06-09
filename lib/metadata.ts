import type { Metadata } from "next";
import { iranGlobals } from "@/src/config/iran.globals";
import type { Locale, PageKey, SeoFields } from "@/lib/site-types";

export function buildMetadata(locale: Locale, page: PageKey, seo: SeoFields): Metadata {
  const canonical = iranGlobals.metadataMap[page].canonical[locale];

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical,
      languages: {
        fa: iranGlobals.metadataMap[page].canonical.fa,
        en: iranGlobals.metadataMap[page].canonical.en,
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonical,
      locale: locale === "fa" ? "fa_IR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
  };
}

