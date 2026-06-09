"use client";

import { useEffect } from "react";
import type { Direction, Locale } from "@/lib/site-types";

type DocumentDirectionProps = {
  locale: Locale;
  direction: Direction;
};

export default function DocumentDirection({
  locale,
  direction,
}: DocumentDirectionProps) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
  }, [direction, locale]);

  return null;
}

