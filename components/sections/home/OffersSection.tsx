import type { Locale } from "@/lib/site-types";
import { getIranHomeContent } from "@/src/content/markets/iran";
import ButtonLink from "@/components/ui/ButtonLink";
import Reveal from "@/components/ui/Reveal";
import SafeImage from "@/components/ui/SafeImage";
import SectionShell from "@/components/layout/SectionShell";

type OffersSectionProps = {
  locale: Locale;
  content: ReturnType<typeof getIranHomeContent>["offers"];
};

export default function OffersSection({ locale, content }: OffersSectionProps) {
  return (
    <SectionShell id="offers" intro={content}>
      <div className="offer-grid">
        {content.cards.map((card, index) => (
          <Reveal className="offer-card" delay={index * 70} key={card.title}>
            <div className="offer-card__media">
              <SafeImage media={card.media} />
            </div>
            <div className="offer-card__body">
              {card.badge ? <span className="offer-card__badge">{card.badge}</span> : null}
              <h3 className="offer-card__title">{card.title}</h3>
              <p className="offer-card__text">{card.body}</p>
              <div className="offer-card__footer">
                <ButtonLink item={card.cta} locale={locale} />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

