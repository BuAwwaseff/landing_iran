import { getIranPartnershipContent } from "@/src/content/markets/iran";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import SectionShell from "@/components/layout/SectionShell";

type BenefitsSectionProps = {
  content: ReturnType<typeof getIranPartnershipContent>["benefits"];
};

export default function BenefitsSection({ content }: BenefitsSectionProps) {
  return (
    <SectionShell id="benefits" intro={content}>
      <div className="benefit-grid">
        {content.cards.map((card, index) => (
          <Reveal className="benefit-card" delay={index * 60} key={card.title}>
            <span className="benefit-card__icon">
              <Icon name={card.icon} />
            </span>
            <h3 className="benefit-card__title">{card.title}</h3>
            <p className="benefit-card__text">{card.body}</p>
            {card.metric ? <span className="benefit-card__metric">{card.metric}</span> : null}
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

