import { getIranFaqContent } from "@/src/content/markets/iran";
import SectionShell from "@/components/layout/SectionShell";

type FaqIntroProps = {
  content: ReturnType<typeof getIranFaqContent>["intro"];
};

export default function FaqIntro({ content }: FaqIntroProps) {
  return <SectionShell intro={content} />;
}

