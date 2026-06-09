"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";
import { localizeHref } from "@/lib/locale";
import type { LinkItem, Locale } from "@/lib/site-types";
import Icon from "@/components/ui/Icon";

type ButtonLinkProps = {
  item: LinkItem;
  locale: Locale;
  className?: string;
};

export default function ButtonLink({ item, locale, className }: ButtonLinkProps) {
  const kind = item.kind ?? "primary";
  const href = item.external ? item.href : localizeHref(item.href, locale);
  const iconName = item.icon ?? (kind === "text" ? "arrow" : undefined);
  const classes = cn("button-link", `button-link--${kind}`, className);

  const content = (
    <>
      <span className="button-link__label">{item.label}</span>
      {iconName ? (
        <span className="button-link__icon">
          <Icon name={iconName} />
        </span>
      ) : null}
    </>
  );

  if (item.external || href.startsWith("mailto:")) {
    const isBrowserExternal = /^https?:\/\//i.test(href);

    return (
      <a
        aria-label={item.ariaLabel}
        className={classes}
        href={href}
        rel={isBrowserExternal ? "noreferrer" : undefined}
        target={isBrowserExternal ? "_blank" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <Link aria-label={item.ariaLabel} className={classes} href={href}>
      {content}
    </Link>
  );
}

