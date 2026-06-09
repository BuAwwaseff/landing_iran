import Link from "next/link";
import { localizeHref } from "@/lib/locale";
import type { Locale } from "@/lib/site-types";
import IranLogo from "@/components/brand/IranLogo";
import type { IranMarketContent } from "@/src/content/markets/iran";

type SiteFooterProps = {
  locale: Locale;
  content: IranMarketContent["footer"];
};

export default function SiteFooter({ locale, content }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand-block">
          <IranLogo locale={locale} />
          <p className="site-footer__summary">{content.summary}</p>
        </div>

        <nav
          aria-label={locale === "fa" ? "پیوندهای پایین صفحه" : "Footer navigation"}
          className="site-footer__groups"
        >
          {content.groups.map((group) => (
            <div className="site-footer__group" key={group.href}>
              <Link
                className="site-footer__group-title"
                href={localizeHref(group.href, locale)}
              >
                {group.label}
              </Link>
              <div className="site-footer__group-links">
                {group.links.map((link) => (
                  <Link
                    className="site-footer__group-link"
                    href={localizeHref(link.href, locale)}
                    key={`${group.href}-${link.href}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>

      <div className="container site-footer__note">{content.note}</div>
    </footer>
  );
}
