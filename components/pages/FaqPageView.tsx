import type { Locale } from "@/lib/site-types";
import { getIranContent } from "@/src/content/markets/iran";
import MarketPageShell from "@/components/layout/MarketPageShell";
import FaqGroupSection from "@/components/sections/faq/FaqGroupSection";
import FaqIntro from "@/components/sections/faq/FaqIntro";
import FaqSupportCta from "@/components/sections/faq/FaqSupportCta";

type FaqPageViewProps = {
  locale: Locale;
};

export default function FaqPageView({ locale }: FaqPageViewProps) {
  const market = getIranContent(locale);

  return (
    <MarketPageShell
      footerContent={market.footer}
      headerAction={market.faq.support.primaryCta}
      locale={locale}
      navLabels={market.nav}
      pageKey="faq"
    >
      <FaqIntro content={market.faq.intro} />
      <FaqGroupSection
        group={market.faq.player}
        id="player-faq"
        title={market.faq.player.title}
      />
      <FaqGroupSection
        className="faq-group-shell--alt"
        group={market.faq.partnership}
        id="partnership-faq"
        title={market.faq.partnership.title}
      />
      <FaqSupportCta content={market.faq.support} locale={locale} />
    </MarketPageShell>
  );
}
