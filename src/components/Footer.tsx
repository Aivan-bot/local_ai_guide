"use client";

import { Link } from "@/lib/navigation";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-[#060e1a] px-4 lg:px-[max(60px,(100vw-1200px)/2)]">
      <div className="flex flex-col md:flex-row justify-between items-center py-10 gap-6">
        <span className="font-montserrat text-[20px] font-bold text-white tracking-[2px]">
          XALT
        </span>
        
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="/services" className="text-[rgba(255,255,255,0.7)] no-underline text-[13px] font-medium hover:text-accent-teal transition-colors">
            {t("footer.atlassian")}
          </Link>
          <Link href="https://linkedin.com/company/xalt" className="text-[rgba(255,255,255,0.7)] no-underline text-[13px] font-medium hover:text-accent-teal transition-colors">
            {t("footer.linkedin")}
          </Link>
          <Link href="/contact" className="text-[rgba(255,255,255,0.7)] no-underline text-[13px] font-medium hover:text-accent-teal transition-colors">
            {t("footer.contact")}
          </Link>
          <Link href="/impressum" className="text-[rgba(255,255,255,0.7)] no-underline text-[13px] font-medium hover:text-accent-teal transition-colors">
            {t("footer.impressum")}
          </Link>
        </div>
      </div>
      
      <div className="border-t border-[rgba(255,255,255,0.1)] py-4 text-center">
        <p className="text-[12px] text-[rgba(255,255,255,0.3)]">
          {t("copyright")}
        </p>
      </div>
    </footer>
  );
}
