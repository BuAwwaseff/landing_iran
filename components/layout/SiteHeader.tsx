"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import { iranGlobals, type IranNavKey } from "@/src/config/iran.globals";
import { localizeHref } from "@/lib/locale";
import type { LinkItem, Locale, PageKey } from "@/lib/site-types";
import IranLogo from "@/components/brand/IranLogo";
import ButtonLink from "@/components/ui/ButtonLink";
import Icon from "@/components/ui/Icon";

type SiteHeaderProps = {
  locale: Locale;
  pageKey: PageKey;
  navLabels: Record<IranNavKey, string>;
  headerAction: LinkItem;
};

const pageKeyToNavKey: Record<PageKey, IranNavKey> = {
  home: "home",
  partnership: "partnership",
  faq: "faq",
};

export default function SiteHeader({
  locale,
  pageKey,
  navLabels,
  headerAction,
}: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  const fullNavKeys = useMemo(() => iranGlobals.chrome.navKeys[pageKey], [pageKey]);
  const compactNavKeys = iranGlobals.chrome.navKeys.compact;
  const activeNavKey = pageKeyToNavKey[pageKey];

  const localeTargets = iranGlobals.locales.map((value) => ({
    value,
    href: iranGlobals.routeMap[pageKey][value],
  }));

  const renderNavItems = (keys: IranNavKey[], mode: "full" | "compact" | "drawer") =>
    keys.map((key) => {
      const href = localizeHref(iranGlobals.routeAnchors[key], locale);
      const isActive = key === activeNavKey;

      return (
        <Link
          className={cn(
            "site-header__nav-link",
            `site-header__nav-link--${mode}`,
            isActive && "is-active",
          )}
          href={href}
          key={`${mode}-${key}`}
          onClick={() => setOpen(false)}
        >
          {navLabels[key]}
        </Link>
      );
    });

  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header__bar">
          <Link className="site-header__brand" href={localizeHref("/", locale)} onClick={() => setOpen(false)}>
            <IranLogo compact locale={locale} variation="flip" />
          </Link>

          <nav className="site-header__nav site-header__nav--full">
            {renderNavItems(fullNavKeys, "full")}
          </nav>

          <nav className="site-header__nav site-header__nav--compact">
            {renderNavItems(compactNavKeys, "compact")}
          </nav>

          <div className="site-header__actions">
            <div className="site-header__locale-switch">
              {localeTargets.map((target) => (
                <Link
                  className={cn(
                    "site-header__locale-link",
                    target.value === locale && "is-active",
                  )}
                  href={target.href}
                  key={target.value}
                  onClick={() => setOpen(false)}
                >
                  {target.value.toUpperCase()}
                </Link>
              ))}
            </div>

            <ButtonLink
              className="site-header__cta"
              item={headerAction}
              locale={locale}
            />

            <button
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="site-header__menu-button"
              onClick={() => setOpen((value) => !value)}
              type="button"
            >
              <Icon name={open ? "close" : "menu"} />
            </button>
          </div>
        </div>

        <div className={cn("site-header__drawer", open && "is-open")}>
          <div className="site-header__drawer-card">
            <nav className="site-header__drawer-nav">{renderNavItems(fullNavKeys, "drawer")}</nav>

            <div className="site-header__drawer-footer">
              <div className="site-header__drawer-locales">
                {localeTargets.map((target) => (
                  <Link
                    className={cn(
                      "site-header__locale-link",
                      target.value === locale && "is-active",
                    )}
                    href={target.href}
                    key={`drawer-${target.value}`}
                    onClick={() => setOpen(false)}
                  >
                    {target.value.toUpperCase()}
                  </Link>
                ))}
              </div>
              <ButtonLink item={headerAction} locale={locale} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
