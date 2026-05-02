"use client";

import { Link } from "@/lib/navigation";
import { useLocale } from "next-intl";

export default function Footer() {
  const locale = useLocale();
  const isEn = locale === "en";

  return (
    <footer className="bg-[#060e1a] px-4 lg:px-[max(60px,(100vw-1200px)/2)]">
      <div className="flex flex-col md:flex-row justify-between items-center py-10 gap-6">
        <p className="text-[12px] text-[rgba(255,255,255,0.3)]">© 2026 XALT Business Consulting GmbH</p>
        
        <div className="flex flex-wrap justify-center gap-6">
          <Link href={isEn ? "/services" : "/de/services"} className="text-[rgba(255,255,255,0.7)] no-underline text-[13px] font-medium hover:text-accent-teal transition-colors">
            Atlassian Services
          </Link>
          <a href="https://linkedin.com/company/xalt" target="_blank" rel="noopener noreferrer" className="text-[rgba(255,255,255,0.7)] no-underline text-[13px] font-medium hover:text-accent-teal transition-colors">
            LinkedIn
          </a>
          <Link href={isEn ? "/contact" : "/de/contact"} className="text-[rgba(255,255,255,0.7)] no-underline text-[13px] font-medium hover:text-accent-teal transition-colors">
            {isEn ? "Contact" : "Kontakt"}
          </Link>
          <Link href={isEn ? "/impressum" : "/de/impressum"} className="text-[rgba(255,255,255,0.7)] no-underline text-[13px] font-medium hover:text-accent-teal transition-colors">
            Impressum
          </Link>
        </div>
      </div>
      
      <div className="border-t border-[rgba(255,255,255,0.1)] py-4 text-center">
        <p className="text-[12px] text-[rgba(255,255,255,0.3)]">
          © 2026 XALT Business Consulting GmbH
        </p>
      </div>
    </footer>
  );
}
