import type { Locale } from "@/lib/site-types";
import { getIranHomeContent } from "@/src/content/markets/iran";
import ButtonLink from "@/components/ui/ButtonLink";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import SafeImage from "@/components/ui/SafeImage";

type HomeHeroProps = {
  locale: Locale;
  content: ReturnType<typeof getIranHomeContent>["hero"];
};

export default function HomeHero({ locale, content }: HomeHeroProps) {
  return (
    <section className="home-hero" id="top">
      <div className="container home-hero__grid">
        <Reveal className="home-hero__copy">
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h1 className="home-hero__title">{content.title}</h1>
          <p className="home-hero__body">{content.body}</p>

          <div className="button-row">
            <ButtonLink item={content.primaryCta} locale={locale} />
            <ButtonLink item={content.secondaryCta} locale={locale} />
            {content.tertiaryCta ? <ButtonLink item={content.tertiaryCta} locale={locale} /> : null}
          </div>

          <dl className="home-hero__stats">
            {content.stats.map((stat) => (
              <div className="home-hero__stat" key={stat.label}>
                <dt dir="ltr">{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </dl>

          <ul className="home-hero__highlights">
            {content.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="home-hero__tiles" delay={120} variant="scale">
          {content.media.map((media, index) => (
            <div className="home-hero__tile" key={media.id}>
              <SafeImage media={media} priority={index === 0} />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
