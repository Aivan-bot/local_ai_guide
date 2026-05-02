import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePage from "@/components/Hero";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  
  if (!["en", "de"].includes(locale)) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-primary-dark text-white">
      <Navbar locale={locale as "en" | "de"} />
      <HomePage />
      <Footer locale={locale as "en" | "de"} />
    </div>
  );
}
