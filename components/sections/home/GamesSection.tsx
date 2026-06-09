import type { Locale } from "@/lib/site-types";
import { getIranHomeContent } from "@/src/content/markets/iran";
import ButtonLink from "@/components/ui/ButtonLink";
import Reveal from "@/components/ui/Reveal";
import SafeImage from "@/components/ui/SafeImage";
import SectionShell from "@/components/layout/SectionShell";

type GamesSectionProps = {
  locale: Locale;
  content: ReturnType<typeof getIranHomeContent>["games"];
};

export default function GamesSection({ locale, content }: GamesSectionProps) {
  return (
    <SectionShell id="games" intro={content}>
      <div className="feature-grid">
        {content.cards.map((card, index) => (
          <Reveal className="feature-card" delay={index * 60} key={card.title}>
            <div className="feature-card__media">
              <SafeImage media={card.media} />
            </div>
            <div className="feature-card__body">
              {card.badge ? <span className="feature-card__badge">{card.badge}</span> : null}
              <h3 className="feature-card__title">{card.title}</h3>
              <p className="feature-card__text">{card.body}</p>
              <div className="feature-card__footer">
                <ButtonLink className="button-link--card-cta" item={card.cta} locale={locale} />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
