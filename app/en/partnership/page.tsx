import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import type { Locale } from "@/lib/site-types";
import { getIranPartnershipContent } from "@/src/content/markets/iran";
import PartnershipPageView from "@/components/pages/PartnershipPageView";

const locale: Locale = "en";

export function generateMetadata(): Metadata {
  return buildMetadata(locale, "partnership", getIranPartnershipContent(locale).seo);
}

export default function EnglishPartnershipPage() {
  return <PartnershipPageView locale={locale} />;
}

