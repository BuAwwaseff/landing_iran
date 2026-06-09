import { cn } from "@/lib/cn";
import type { FaqGroup } from "@/src/content/markets/iran";
import FaqAccordion from "@/components/ui/FaqAccordion";
import Reveal from "@/components/ui/Reveal";

type FaqGroupSectionProps = {
  id: string;
  title: string;
  group: FaqGroup;
  className?: string;
};

export default function FaqGroupSection({
  id,
  title,
  group,
  className,
}: FaqGroupSectionProps) {
  return (
    <section className={cn("faq-group-shell", className)} id={id}>
      <div className="container">
        <Reveal className="faq-group-card">
          <h2 className="faq-group-card__title">{title}</h2>
          <FaqAccordion items={group.items} />
        </Reveal>
      </div>
    </section>
  );
}
