import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";

export default function ImpressumPage() {
  const t = useTranslations();
  return (
    <div className="min-h-screen bg-primary-dark text-white">
      <Navbar />
      <main className="pt-24 px-4 lg:px-[max(60px,(100vw-1200px)/2)] pb-20">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-[11px] tracking-[3px] uppercase text-accent-teal font-semibold mb-5">
            {t("footer.impressum")}
          </span>
          <h1 className="font-montserrat text-[48px] font-bold text-white leading-[1.2] mb-8">
            {t("footer.impressum")}
          </h1>
          <div className="glass rounded-2xl p-8 text-[rgba(255,255,255,0.7)] leading-8">
            <p><strong>XALT Business Consulting GmbH</strong></p>
            <p>Amaliens trift 6</p>
            <p>04109 Leipzig</p>
            <p style={{ marginTop: "12px" }}>Geschäftsführer: Richard R</p>
            <p>Handelsregister: Amtsgericht Leipzig HRB Nr. 34567</p>
            <p style={{ marginTop: "12px" }}>Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: DE345678901</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
