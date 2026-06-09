import type { Locale } from "@/lib/site-types";
import { getIranContent } from "@/src/content/markets/iran";
import MarketPageShell from "@/components/layout/MarketPageShell";
import GamesSection from "@/components/sections/home/GamesSection";
import HomeHero from "@/components/sections/home/HomeHero";
import OffersSection from "@/components/sections/home/OffersSection";
import SportsSection from "@/components/sections/home/SportsSection";

type HomePageViewProps = {
  locale: Locale;
};

export default function HomePageView({ locale }: HomePageViewProps) {
  const market = getIranContent(locale);

  return (
    <MarketPageShell
      footerContent={market.footer}
      headerAction={market.home.hero.secondaryCta}
      locale={locale}
      navLabels={market.nav}
      pageKey="home"
    >
      <HomeHero content={market.home.hero} locale={locale} />
      <GamesSection content={market.home.games} locale={locale} />
      <SportsSection content={market.home.sports} locale={locale} />
      <OffersSection content={market.home.offers} locale={locale} />
    </MarketPageShell>
  );
}
