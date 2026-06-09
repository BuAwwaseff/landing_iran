import type { FaqItem } from "@/lib/site-types";

type FaqAccordionProps = {
  items: FaqItem[];
};

export default function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <div className="faq-accordion">
      {items.map((item) => (
        <details className="faq-accordion__item" key={item.question}>
          <summary className="faq-accordion__summary">
            <span>{item.question}</span>
            <span className="faq-accordion__plus" aria-hidden="true">
              +
            </span>
          </summary>
          <p className="faq-accordion__answer">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

