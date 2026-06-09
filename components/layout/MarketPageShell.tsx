import { getDirection } from "@/lib/locale";
import { getPageDensity } from "@/lib/layout-contract";
import { getThemeStyleVars } from "@/lib/theme-vars";
import type { LinkItem, Locale, PageKey } from "@/lib/site-types";
import type { IranNavKey } from "@/src/config/iran.globals";
import type { IranMarketContent } from "@/src/content/markets/iran";
import DocumentDirection from "@/components/layout/DocumentDirection";
import PageBackdrop from "@/components/layout/PageBackdrop";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";

type MarketPageShellProps = {
  locale: Locale;
  pageKey: PageKey;
  navLabels: Record<IranNavKey, string>;
  footerContent: IranMarketContent["footer"];
  headerAction: LinkItem;
  children: React.ReactNode;
};

export default function MarketPageShell({
  locale,
  pageKey,
  navLabels,
  footerContent,
  headerAction,
  children,
}: MarketPageShellProps) {
  const direction = getDirection(locale);

  return (
    <div
      className="page-shell"
      data-density={getPageDensity()}
      dir={direction}
      lang={locale}
      style={getThemeStyleVars()}
    >
      <DocumentDirection direction={direction} locale={locale} />
      <PageBackdrop />
      <SiteHeader
        headerAction={headerAction}
        locale={locale}
        navLabels={navLabels}
        pageKey={pageKey}
      />
      <main className="page-shell__main">{children}</main>
      <SiteFooter content={footerContent} locale={locale} />
    </div>
  );
}

