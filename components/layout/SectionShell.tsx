import type { SectionIntro } from "@/lib/site-types";
import { cn } from "@/lib/cn";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";

type SectionShellProps = {
  id?: string;
  intro: SectionIntro;
  className?: string;
  children?: React.ReactNode;
};

export default function SectionShell({
  id,
  intro,
  className,
  children,
}: SectionShellProps) {
  return (
    <section className={cn("section-shell", className)} id={id}>
      <div className="container section-shell__inner">
        <Reveal className="section-shell__header">
          <Eyebrow>{intro.eyebrow}</Eyebrow>
          <h2 className="section-shell__title">{intro.title}</h2>
          <p className="section-shell__description">{intro.description}</p>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
