import { getIranPartnershipContent } from "@/src/content/markets/iran";
import Reveal from "@/components/ui/Reveal";
import SafeImage from "@/components/ui/SafeImage";
import SectionShell from "@/components/layout/SectionShell";

type StepsSectionProps = {
  content: ReturnType<typeof getIranPartnershipContent>["steps"];
};

export default function StepsSection({ content }: StepsSectionProps) {
  return (
    <SectionShell id="steps" intro={content}>
      <div className="steps-grid">
        {content.cards.map((card, index) => (
          <Reveal className="step-card" delay={index * 70} key={card.step}>
            <div className="step-card__media">
              <SafeImage media={card.media} />
            </div>
            <div className="step-card__body">
              <span className="step-card__index" dir="ltr">
                {card.step}
              </span>
              <h3 className="step-card__title">{card.title}</h3>
              <p className="step-card__text">{card.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

