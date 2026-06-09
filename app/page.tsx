import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import type { Locale } from "@/lib/site-types";
import { getIranHomeContent } from "@/src/content/markets/iran";
import HomePageView from "@/components/pages/HomePageView";

const locale: Locale = "fa";

export function generateMetadata(): Metadata {
  return buildMetadata(locale, "home", getIranHomeContent(locale).seo);
}

export default function HomePage() {
  return <HomePageView locale={locale} />;
}

