import type { Locale } from "@/lib/site-types";
import { getIranPartnershipContent } from "@/src/content/markets/iran";
import ButtonLink from "@/components/ui/ButtonLink";
import Reveal from "@/components/ui/Reveal";
import SafeImage from "@/components/ui/SafeImage";
import SectionShell from "@/components/layout/SectionShell";

type PathsSectionProps = {
  locale: Locale;
  content: ReturnType<typeof getIranPartnershipContent>["paths"];
};

export default function PathsSection({ locale, content }: PathsSectionProps) {
  return (
    <SectionShell id="paths" intro={content}>
      <div className="path-grid">
        {content.cards.map((card, index) => (
          <Reveal className="path-card" delay={index * 80} key={card.title}>
            <div className="path-card__media">
              <SafeImage media={card.media} />
            </div>
            <div className="path-card__body">
              <span className="path-card__tag">{card.tag}</span>
              <h3 className="path-card__title">{card.title}</h3>
              <p className="path-card__text">{card.body}</p>
              <ul className="path-card__bullets">
                {card.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <div className="path-card__footer">
                <ButtonLink item={card.cta} locale={locale} />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

