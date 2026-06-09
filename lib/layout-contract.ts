import { iranGlobals } from "@/src/config/iran.globals";
import type { PageKey } from "@/lib/site-types";

export function getPageSectionOrder(page: PageKey) {
  return iranGlobals.pages[page].order;
}

export function getPageAnchors(page: PageKey) {
  switch (page) {
    case "home":
      return iranGlobals.chrome.homeAnchors;
    case "partnership":
      return iranGlobals.chrome.partnershipAnchors;
    case "faq":
    default:
      return ["/faq"];
  }
}

export function getPageDensity() {
  return iranGlobals.sizing.density;
}

