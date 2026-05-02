"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "@/lib/navigation";
import { useTranslations } from "next-intl";
import { useRouter } from "@/lib/navigation";

export default function VibeCodingWorkshop() {
  const t = useTranslations();
  const router = useRouter();
  const locale = "en";

  return (
    <div className="min-h-screen bg-primary-dark text-white">
      <Navbar />
      <main className="pt-24 px-4 lg:px-[max(60px,(100vw-1200px)/2)] pb-20">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-[11px] tracking-[3px] uppercase text-accent-teal font-semibold mb-5">
            {t("vibeCoding.tagline")}
          </span>
          <h1 className="font-montserrat text-[48px] font-bold text-white leading-[1.2] mb-6">
            {t("vibeCoding.title")}
          </h1>
          <p className="text-[18px] text-[rgba(255,255,255,0.6)] leading-[1.6] mb-10 max-w-3xl">
            {t("vibeCoding.subtitle")}
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            <span className="text-[13px] text-[rgba(255,255,255,0.4)] flex items-center gap-1.5">⏱️ {t("vibeCoding.duration")}</span>
            <span className="text-[13px] text-[rgba(255,255,255,0.4)] flex items-center gap-1.5">🌐 {t("vibeCoding.format")}</span>
            <span className="text-[13px] text-[rgba(255,255,255,0.4)] flex items-center gap-1.5">👥 {t("vibeCoding.max")}</span>
          </div>
          <Link href="/contact`} className="bg-accent-teal text-primary-dark px-8 py-3 rounded-lg font-bold text-[14px] tracking-[0.5px] hover:translate-y-[-1px] hover:shadow-[0_4px_15px_rgba(78,205,196,0.3)] transition-all inline-block">
            {t("vibeCoding.cta")}
          </Link>
        </div>
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8 mb-8">
            <h2 className="font-montserrat text-[24px] font-bold text-white mb-4">{t("vibeCoding.learnTitle")}</h2>
            <ul className="list-disc list-inside text-[rgba(255,255,255,0.7)] leading-8">
              <li>{t("vibeCoding.learn1")}</li>
              <li>{t("vibeCoding.learn2")}</li>
              <li>{t("vibeCoding.learn3")}</li>
              <li>{t("vibeCoding.learn4")}</li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-8">
            <h2 className="font-montserrat text-[24px] font-bold text-white mb-4">{t("vibeCoding.audienceTitle")}</h2>
            <p className="text-[rgba(255,255,255,0.7)] leading-7">{t("vibeCoding.audience")}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
