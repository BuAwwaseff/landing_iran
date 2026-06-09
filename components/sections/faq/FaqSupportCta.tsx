import type { Locale } from "@/lib/site-types";
import { getIranFaqContent } from "@/src/content/markets/iran";
import ButtonLink from "@/components/ui/ButtonLink";
import Reveal from "@/components/ui/Reveal";
import SafeImage from "@/components/ui/SafeImage";

type FaqSupportCtaProps = {
  locale: Locale;
  content: ReturnType<typeof getIranFaqContent>["support"];
};

export default function FaqSupportCta({ locale, content }: FaqSupportCtaProps) {
  return (
    <section className="faq-support-shell" id="support">
      <div className="container">
        <Reveal className="faq-support">
          <div className="faq-support__media">
            <SafeImage media={content.image} />
          </div>
          <div className="faq-support__copy">
            <h2 className="faq-support__title">{content.title}</h2>
            <p className="faq-support__text">{content.body}</p>
            <div className="faq-support__messaging">
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
