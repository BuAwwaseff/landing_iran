import { iranGlobals } from "@/src/config/iran.globals";
import type { Direction, Locale, PageKey } from "@/lib/site-types";

export function isLocale(value: string | null | undefined): value is Locale {
  return iranGlobals.locales.includes(value as Locale);
}

export function getDirection(locale: Locale): Direction {
  return iranGlobals.directionByLocale[locale];
}

function isExternalHref(href: string) {
  return /^(?:[a-z]+:)?\/\//i.test(href) || href.startsWith("mailto:");
}

function stripLocalePrefix(path: string) {
  if (path === "/en") return "/";
  if (path.startsWith("/en/")) return path.slice(3);
  return path || "/";
}

export function localizeHref(href: string, locale: Locale) {
  if (!href || isExternalHref(href)) return href;

  const [pathWithQuery, hash = ""] = href.split("#");
  const [rawPath = "/", queryString = ""] = pathWithQuery.split("?");
  const normalizedPath = stripLocalePrefix(rawPath);
  const localizedPath =
    locale === iranGlobals.defaultLocale
      ? normalizedPath
      : normalizedPath === "/"
        ? `/${locale}`
        : `/${locale}${normalizedPath}`;

  const query = queryString ? `?${queryString}` : "";
  const hashSuffix = hash ? `#${hash}` : "";
  return `${localizedPath}${query}${hashSuffix}`;
}

export function getLocalizedRoute(page: PageKey, locale: Locale) {
  return iranGlobals.routeMap[page][locale];
}

