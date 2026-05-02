// Link replaced with <a> for static export compatibility
import enDict from "@/i18n/dictionaries/en.json";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const events = [
  {
    title: "CloudBound",
    description: "XALT's flagship cloud and DevOps event in Munich. Connect with industry experts, explore the latest in cloud transformation, and discover how leading organizations modernize their infrastructure.",
    location: "📍 Munich",
    focus: "☁️ Cloud & DevOps",
    type: "🤝 Networking"
  },
  {
    title: "Enterprise AI Summit — San Jose 2026",
    description: "XALT at the Enterprise AI Summit in San Jose. Meet our team and learn how we help enterprises adopt AI at scale.",
    location: "📍 San Jose",
    focus: "🤖 Enterprise AI",
    type: "🇺🇸 English"
  },
  {
    title: "10 Jahre XALT — Jubiläum 2026",
    description: "Ein Jubiläum. Ein Festival. Ein Erlebnis. Feiern Sie 10 Jahre XALT mit uns — Partner, Kunden und Freunde willkommen.",
    location: "📍 Leipzig",
    focus: "🎉 Jubiläum",
    type: "🎊 Festival"
  }
];

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export default function EventsPage() {

  const lang: "en" | "de" = "en";
  return (
    <div className="min-h-screen bg-primary-dark text-white">
      <Navbar locale={lang} />
      <main className="pt-24 px-4 lg:px-[max(60px,(100vw-1200px)/2)] pb-20">
        <div className="max-w-4xl mx-auto mb-16">
          <span className="inline-block text-[11px] tracking-[3px] uppercase text-accent-teal font-semibold mb-5">
            {enDict.events.tagline}
          </span>
          <h1 className="font-montserrat text-[48px] font-bold text-white leading-[1.2] mb-6">
            {enDict.events.title}
          </h1>
          <p className="text-[18px] text-[rgba(255,255,255,0.6)] leading-[1.6] max-w-3xl">
            {enDict.events.subtitle}
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          {events.map((event, index) => (
            <div key={index} className="glass rounded-2xl p-8 hover:bg-[rgba(78,205,196,0.05)] hover:border-[rgba(78,205,196,0.3)] hover:translate-y-[-4px] transition-all cursor-pointer group">
              <h3 className="font-montserrat text-[24px] font-bold text-white mb-3 group-hover:text-accent-teal transition-colors">
                {event.title}
              </h3>
              <p className="text-[rgba(255,255,255,0.6)] leading-7 mb-4">{event.description}</p>
              <div className="flex flex-wrap gap-4">
                <span className="text-[13px] text-[rgba(255,255,255,0.4)]">{event.location}</span>
                <span className="text-[13px] text-[rgba(255,255,255,0.4)]">{event.focus}</span>
                <span className="text-[13px] text-[rgba(255,255,255,0.4)]">{event.type}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16 max-w-3xl mx-auto">
          <a href="/contact" className="bg-accent-teal text-primary-dark px-8 py-3 rounded-lg font-bold text-[14px] tracking-[0.5px] hover:translate-y-[-1px] hover:shadow-[0_4px_15px_rgba(78,205,196,0.3)] transition-all inline-block">
            {enDict.nav.contact}
          </a>
        </div>
      </main>
      <Footer locale={lang} />
    </div>
  );
}
