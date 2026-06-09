import type { Locale } from "@/lib/site-types";
import { getIranPartnershipContent } from "@/src/content/markets/iran";
import ButtonLink from "@/components/ui/ButtonLink";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";

type PartnershipHeroProps = {
  locale: Locale;
  content: ReturnType<typeof getIranPartnershipContent>["hero"];
};

export default function PartnershipHero({
  locale,
  content,
}: PartnershipHeroProps) {
  return (
    <section className="partnership-hero" id="top">
      <div className="container partnership-hero__grid">
        <Reveal className="partnership-hero__copy">
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h1 className="partnership-hero__title">{content.title}</h1>
          <p className="partnership-hero__body">{content.body}</p>
          <div className="button-row">
            <ButtonLink item={content.primaryCta} locale={locale} />
            <ButtonLink item={content.secondaryCta} locale={locale} />
          </div>
          <dl className="partnership-hero__stats">
            {content.stats.map((stat) => (
              <div className="partnership-hero__stat" key={stat.label}>
                <dt dir="ltr">{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </dl>
          <ul className="partnership-hero__highlights">
            {content.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
