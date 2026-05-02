// Link replaced with <a> for static export compatibility
import enDict from "@/i18n/dictionaries/en.json";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jobs = [
  {
    title: "Senior AI & Business Transformation Consultant",
    description: "Bridge strategy and execution — re-engineer how enterprises work by integrating AI into their entire business lifecycle. Lead teams, architect solutions, drive transformation.",
    location: "📍 Leipzig, Munich, Remote",
    type: "💼 Full-time",
    skills: "🧠 AI & Atlassian"
  },
  {
    title: "Werkstudent Software Engineering & AI",
    description: "Entwickle echte Software-Produkte — von AI-Agents über Atlassian Forge Apps bis zu Cloud-Plattformen. Mit TypeScript, Python, React und modernsten AI-Tools.",
    location: "📍 Leipzig, München, Remote",
    type: "⏰ 15–20h / Woche",
    skills: "💻 TypeScript, Python & AI"
  },
  {
    title: "Forward Deployed Engineer",
    description: "Direkt beim Kunden eingebettet: Du ownst technische Delivery von Scoping bis Go-Live — als Sparringspartner, der Probleme versteht, Lösungen baut und Projekte vorantreibt.",
    location: "📍 Remote-first · Leipzig, Berlin, München",
    type: "💼 Voll- oder Teilzeit",
    skills: "🛠️ Full-Stack & Atlassian"
  },
  {
    title: "Integration Engineer — ITSM, CMDB & Enterprise Integration",
    description: "Du baust die Brücke zwischen Atlassian Cloud und On-Premise-Welt — in geschlossenen Netzwerken, mit strengen Sicherheitsanforderungen und über Organisationsgrenzen hinweg.",
    location: "📍 Remote-first + Reisetätigkeit",
    type: "💼 Vollzeit",
    skills: "🔗 JSM, CMDB & E-Bonding"
  },
  {
    title: "Werkstudent Hardware Engineering & IoT",
    description: "Baue physische Dashboards mit Raspberry Pi, entwirf Gehäuse mit unseren 3D-Druckern, löte Sensoren und verbinde Hardware mit AI-Agenten im Maker Space.",
    location: "📍 Leipzig (Maker Space)",
    type: "⏰ 15–20h / Woche",
    skills: "🖨️ 3D-Druck, IoT & Elektronik"
  },
  {
    title: "Werkstudent AI Engineering & OpenClaw",
    description: "Arbeite an AI-Agents und OpenClaw — dem AI-Assistenten, der dieses Job-Posting geschrieben hat. Kein Scherz.",
    location: "📍 Leipzig, Remote",
    type: "⏰ 15–20h / Woche",
    skills: "🤖 AI & Agents"
  }
];

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export default function JobsPage() {
  const lang: "en" | "de" = "en";

  return (
    <div className="min-h-screen bg-primary-dark text-white">
      <Navbar locale={lang} />
      <main className="pt-24 px-4 lg:px-[max(60px,(100vw-1200px)/2)] pb-20">
        <div className="max-w-4xl mx-auto mb-16">
          <span className="inline-block text-[11px] tracking-[3px] uppercase text-accent-teal font-semibold mb-5">
            {enDict.careers.tagline}
          </span>
          <h1 className="font-montserrat text-[48px] font-bold text-white leading-[1.2] mb-6">
            {enDict.careers.title}
          </h1>
          <p className="text-[18px] text-[rgba(255,255,255,0.6)] leading-[1.6] max-w-3xl">
            {enDict.careers.subtitle}
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          {jobs.map((job, index) => (
            <div key={index} className="glass rounded-2xl p-8 hover:bg-[rgba(78,205,196,0.05)] hover:border-[rgba(78,205,196,0.3)] hover:translate-y-[-4px] transition-all cursor-pointer group">
              <h3 className="font-montserrat text-[20px] font-bold text-white mb-3 group-hover:text-accent-teal transition-colors">
                {job.title}
              </h3>
              <p className="text-[rgba(255,255,255,0.6)] leading-6 mb-4">{job.description}</p>
              <div className="flex flex-wrap gap-4">
                <span className="text-[13px] text-[rgba(255,255,255,0.4)]">{job.location}</span>
                <span className="text-[13px] text-[rgba(255,255,255,0.4)]">{job.type}</span>
                <span className="text-[13px] text-[rgba(255,255,255,0.4)]">{job.skills}</span>
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
