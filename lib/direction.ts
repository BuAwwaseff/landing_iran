import type { Direction, Locale } from "@/lib/site-types";

export function isRtl(direction: Direction) {
  return direction === "rtl";
}

export function getDirectionalValue<T>(
  locale: Locale,
  values: {
    rtl: T;
    ltr: T;
  },
) {
  return locale === "fa" ? values.rtl : values.ltr;
}

export function withDirectionalArrow(locale: Locale, baseRotation = 0) {
  return locale === "fa" ? baseRotation + 180 : baseRotation;
}

