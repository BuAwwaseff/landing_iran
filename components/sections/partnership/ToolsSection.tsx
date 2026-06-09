import type { Locale } from "@/lib/site-types";
import { cn } from "@/lib/cn";
import { getIranPartnershipContent } from "@/src/content/markets/iran";
import ButtonLink from "@/components/ui/ButtonLink";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionShell from "@/components/layout/SectionShell";

type ToolsSectionProps = {
  locale: Locale;
  content: ReturnType<typeof getIranPartnershipContent>["tools"];
};

export default function ToolsSection({ locale, content }: ToolsSectionProps) {
  const panelLabels =
    locale === "fa"
      ? ["شروع", "پشتیبانی"]
      : ["Launch", "Support"];

  return (
    <SectionShell className="section-shell--tools" id="tools" intro={content}>
      <div className="tools-grid">
        <Reveal className="tools-stage">
          <div className="tools-stage__topline">
            <span className="eyebrow">{content.stage.eyebrow}</span>
            <span className="tools-stage__status">
              <span className="tools-stage__status-dot" />
              <span>{locale === "fa" ? "هماهنگی زنده" : "Live coordination"}</span>
            </span>
          </div>
          <div className="tools-stage__layout">
            <div className="tools-stage__main">
              <div className="tools-stage__intro">
                <h3 className="tools-stage__title">{content.stage.title}</h3>
                <p className="tools-stage__text">{content.stage.body}</p>
              </div>
              <ol className="tools-stage__sequence">
                {content.stage.bullets.map((bullet, index) => (
                  <li className="tools-stage__step" key={bullet}>
                    <span className="tools-stage__step-index" dir="ltr">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="tools-stage__step-text">{bullet}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="tools-stage__aside">
              <div className="tools-stage__stats">
                <div className="tools-stage__stat">
                  <strong dir="ltr">{content.stage.primaryStat.value}</strong>
                  <span>{content.stage.primaryStat.label}</span>
                </div>
                <div className="tools-stage__stat">
                  <strong dir="ltr">{content.stage.secondaryStat.value}</strong>
                  <span>{content.stage.secondaryStat.label}</span>
                </div>
              </div>
              <ButtonLink
                className="tools-stage__cta"
                item={content.primaryCta}
                locale={locale}
              />
            </div>
          </div>
        </Reveal>

        <div className="tool-panel-grid">
          {content.panels.map((panel, index) => (
            <Reveal
              className={cn(
                "tool-panel",
                index === 1 && "tool-panel--accent",
              )}
              delay={index * 70}
              key={panel.title}
            >
              <div className="tool-panel__topline">
                <span className="tool-panel__label">
                  {panelLabels[index] ?? String(index + 1).padStart(2, "0")}
                </span>
                <span className="tool-panel__icon">
                  <Icon name={panel.icon} />
                </span>
              </div>
              <div className="tool-panel__copy">
                <h3 className="tool-panel__title">{panel.title}</h3>
                <p className="tool-panel__text">{panel.body}</p>
              </div>
              {panel.stat ? (
                <div className="tool-panel__stat">
                  <strong dir="ltr">{panel.stat.value}</strong>
                  <span>{panel.stat.label}</span>
                </div>
              ) : null}
              {panel.bullets ? (
                <ul className="tool-panel__bullets">
                  {panel.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
