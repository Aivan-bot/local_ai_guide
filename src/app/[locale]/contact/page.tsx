// Link replaced with <a> for static export compatibility
import enDict from "@/i18n/dictionaries/en.json";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactFormClient";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export default function ContactPage() {
  const lang: "en" | "de" = "en";
  return (
    <div className="min-h-screen bg-primary-dark text-white">
      <Navbar locale={lang} />
      <main className="pt-24 px-4 lg:px-[max(60px,(100vw-1200px)/2)] pb-20">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <span className="inline-block text-[11px] tracking-[3px] uppercase text-accent-teal font-semibold mb-5">
            {enDict.contact.tagline}
          </span>
          <h1 className="font-montserrat text-[48px] font-bold text-white leading-[1.2] mb-6">
            {enDict.contact.title}
          </h1>
          <p className="text-[18px] text-[rgba(255,255,255,0.6)] leading-[1.6] max-w-2xl mx-auto">
            {enDict.contact.subtitle}
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <ContactForm locale="en" contactT={enDict.contact} />
        </div>
      </main>
      <Footer locale={lang} />
    </div>
  );
}
