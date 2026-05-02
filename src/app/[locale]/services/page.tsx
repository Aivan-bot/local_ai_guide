"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "@/lib/navigation";
import { useTranslations } from "next-intl";
import { useRouter } from "@/lib/navigation";

export default function ServicesPage() {
  const t = useTranslations();
  const router = useRouter();
  const locale = "en";

  const services = [
    {
      title: "KI-Strategieberatung auf C-Level",
      description: "Individuelle KI-Strategieberatung für Ihre Geschäftsführung. Pragmatisch, umsetzbar, auf Ihr Unternehmen zugeschnitten.",
      icon: "🧠"
    },
    {
      title: "Atlassian Backup & Restore",
      description: "Ist Ihre Jira Cloud wirklich geschützt? Backup-Strategien und Disaster Recovery für Atlassian Cloud-Produkte.",
      icon: "🔒"
    },
    {
      title: "Dokumentenmanagement mit Confluence",
      description: "Audit-sicheres Dokumentenmanagement mit Confluence. Compliance, Versionierung und Governance für regulierte Branchen.",
      icon: "📄"
    },
    {
      title: "IT-Projektretter",
      description: "Ihr IT-Projekt brennt? Wir kommen, analysieren, retten. XALT Emergency Project Service für kritische Situationen.",
      icon: "🚨"
    },
    {
      title: "IT-SEK — Spezialeinsatzkommando",
      description: "Das Spezialeinsatzkommando für IT-Projekte. Wenn normale Beratung nicht mehr reicht, kommen wir.",
      icon: "⚡"
    },
    {
      title: "Atlassian Cloud für den Öffentlichen Sektor",
      description: "Atlassian Cloud für Behörden und öffentliche Einrichtungen. Sicher, compliant und mit AKDB als Partner.",
      icon: "🏛️"
    }
  ];

  return (
    <div className="min-h-screen bg-primary-dark text-white">
      <Navbar />
      <main className="pt-24 px-4 lg:px-[max(60px,(100vw-1200px)/2)] pb-20">
        <div className="max-w-4xl mx-auto mb-16">
          <span className="inline-block text-[11px] tracking-[3px] uppercase text-accent-teal font-semibold mb-5">
            {t("services.tagline")}
          </span>
          <h1 className="font-montserrat text-[48px] font-bold text-white leading-[1.2] mb-6">
            {t("services.title")}
          </h1>
          <p className="text-[18px] text-[rgba(255,255,255,0.6)] leading-[1.6] max-w-3xl">
            {t("services.subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="glass rounded-2xl p-8 hover:bg-[rgba(78,205,196,0.05)] hover:border-[rgba(78,205,196,0.3)] hover:translate-y-[-4px] transition-all cursor-pointer">
              <span className="text-[40px] mb-4 block">{service.icon}</span>
              <h2 className="font-montserrat text-[20px] font-bold text-white mb-3">{service.title}</h2>
              <p className="text-[rgba(255,255,255,0.6)] leading-6">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16 max-w-3xl mx-auto">
          <Link href="/contact" className="bg-accent-teal text-primary-dark px-8 py-3 rounded-lg font-bold text-[14px] tracking-[0.5px] hover:translate-y-[-1px] hover:shadow-[0_4px_15px_rgba(78,205,196,0.3)] transition-all inline-block">
            {t("nav.contact")}
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
