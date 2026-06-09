import type { Locale } from "@/lib/site-types";
import { getIranHomeContent } from "@/src/content/markets/iran";
import ButtonLink from "@/components/ui/ButtonLink";
import Reveal from "@/components/ui/Reveal";

type HomeFinalCtaProps = {
  locale: Locale;
  content: ReturnType<typeof getIranHomeContent>["finalCta"];
};

export default function HomeFinalCta({ locale, content }: HomeFinalCtaProps) {
  return (
    <section className="cta-shell">
      <div className="container">
        <Reveal className="cta-card">
          <div className="cta-card__copy">
            <span className="eyebrow">{content.eyebrow}</span>
            <h2 className="cta-card__title">{content.title}</h2>
            <p className="cta-card__text">{content.description}</p>
          </div>
          <div className="cta-card__actions">
            <div className="button-row button-row--stack-mobile">
              <ButtonLink item={content.primaryCta} locale={locale} />
              <ButtonLink item={content.secondaryCta} locale={locale} />
            </div>
            <div className="cta-card__messaging">
              {content.messaging.map((item) => (
                <ButtonLink
                  className="button-link--compact"
                  item={item}
                  key={item.href}
                  locale={locale}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

