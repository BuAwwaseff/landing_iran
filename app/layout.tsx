import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Iran route",
  description: "A production test build for the Iran market landing system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="fa" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
