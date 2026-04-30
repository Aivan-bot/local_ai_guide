import type { Metadata } from "next";
import { montserrat, roboto } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "XALT AI",
  description:
    "AI-powered workshops, enterprise solutions, and digital innovation services. Build faster, lead smarter with XALT AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${roboto.variable}`}
    >
      <body className={`${montserrat.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
