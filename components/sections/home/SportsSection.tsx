import type { Locale } from "@/lib/site-types";
import { getIranHomeContent } from "@/src/content/markets/iran";
import ButtonLink from "@/components/ui/ButtonLink";
import Reveal from "@/components/ui/Reveal";
import SafeImage from "@/components/ui/SafeImage";
import SectionShell from "@/components/layout/SectionShell";

type SportsSectionProps = {
  locale: Locale;
  content: ReturnType<typeof getIranHomeContent>["sports"];
};

export default function SportsSection({ locale, content }: SportsSectionProps) {
  return (
    <SectionShell id="sports" intro={content}>
      <div className="sports-grid">
        {content.cards.map((card, index) => (
          <Reveal className="sports-card" delay={index * 70} key={card.title}>
            <div className="sports-card__media">
              <SafeImage media={card.media} />
            </div>
            <div className="sports-card__body">
              <h3 className="sports-card__title">{card.title}</h3>
              <p className="sports-card__text">{card.body}</p>
              <div className="sports-card__footer">
                <ButtonLink className="button-link--card-cta" item={card.cta} locale={locale} />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
