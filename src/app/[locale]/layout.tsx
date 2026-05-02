import type { Metadata } from "next";
import { montserrat, roboto } from "../fonts";
import "../globals.css";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "de" ? "XALT KI" : "XALT AI",
    description: locale === "de"
      ? "KI-gestützte Workshops, Unternehmenslösungen und digitale Innovation. Schneller bauen, smarter führen."
      : "AI-powered workshops, enterprise solutions, and digital innovation services. Build faster, lead smarter with XALT AI.",
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale} className={`${montserrat.variable} ${roboto.variable}`}>
      <body className={`${montserrat.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
