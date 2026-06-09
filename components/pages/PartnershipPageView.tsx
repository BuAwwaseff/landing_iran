import type { Locale } from "@/lib/site-types";
import { getIranContent } from "@/src/content/markets/iran";
import MarketPageShell from "@/components/layout/MarketPageShell";
import BenefitsSection from "@/components/sections/partnership/BenefitsSection";
import PartnershipHero from "@/components/sections/partnership/PartnershipHero";
import PathsSection from "@/components/sections/partnership/PathsSection";
import StepsSection from "@/components/sections/partnership/StepsSection";
import ToolsSection from "@/components/sections/partnership/ToolsSection";

type PartnershipPageViewProps = {
  locale: Locale;
};

export default function PartnershipPageView({
  locale,
}: PartnershipPageViewProps) {
  const market = getIranContent(locale);

  return (
    <MarketPageShell
      footerContent={market.footer}
      headerAction={market.partnership.hero.primaryCta}
      locale={locale}
      navLabels={market.nav}
      pageKey="partnership"
    >
      <PartnershipHero content={market.partnership.hero} locale={locale} />
      <BenefitsSection content={market.partnership.benefits} />
      <ToolsSection content={market.partnership.tools} locale={locale} />
      <StepsSection content={market.partnership.steps} />
      <PathsSection content={market.partnership.paths} locale={locale} />
    </MarketPageShell>
  );
}
