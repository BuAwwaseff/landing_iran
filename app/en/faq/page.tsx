import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import type { Locale } from "@/lib/site-types";
import { getIranFaqContent } from "@/src/content/markets/iran";
import FaqPageView from "@/components/pages/FaqPageView";

const locale: Locale = "en";

export function generateMetadata(): Metadata {
  return buildMetadata(locale, "faq", getIranFaqContent(locale).seo);
}

export default function EnglishFaqPage() {
  return <FaqPageView locale={locale} />;
}
