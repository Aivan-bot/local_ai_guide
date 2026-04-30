export interface CardData {
  id: string;
  tag: string;
  title: string;
  description: string;
  meta?: { icon: string; text: string }[];
  href: string;
}

export const allCards: CardData[] = [
  // Programs
  {
    id: "kmu-ai",
    tag: "AI für KMU",
    title: "Bring your Business online – in 4 Stunden",
    description: "Kein Berater-Blabla. In einem halben Tag zeigen wir dir, wie AI dein Unternehmen transformiert – und setzen den ersten Use Case direkt um.",
    meta: [
      { icon: "⏱️", text: "4 Stunden" },
      { icon: "🇩🇪", text: "Deutsch" },
      { icon: "💰", text: "Ab 2.490 €" }
    ],
    href: "/services/kmu"
  },
  {
    id: "blueflag",
    tag: "XALT × BlueFlag Security",
    title: "AI Agent Compliance for the Enterprise",
    description: "Govern every AI agent identity across your enterprise. Container 8 DevSecOps compliance meets Blue Security AI agent risk assessment — proven at Deutsche Bank, Bosch, and Dominion Energy.",
    meta: [
      { icon: "🛡️", text: "DevSecOps + AI Governance" },
      { icon: "🔒", text: "Zero Trust" },
      { icon: "🇺🇸🇪🇺", text: "Global" }
    ],
    href: "/services/enterprise"
  },
  {
    id: "enterprise-ai",
    tag: "Enterprise AI",
    title: "AI-Transformation für Konzerne",
    description: "Von Assessment bis Skalierung: Pragmatische AI-Einführung, die Compliance, IT-Security und Betriebsrat überlebt. Keine Slides – echte Ergebnisse.",
    meta: [
      { icon: "🏢", text: "Enterprise 500+ MA" },
      { icon: "🇩🇪", text: "DSGVO & AI Act" },
      { icon: "📊", text: "Messbarer ROI" }
    ],
    href: "/services/enterprise"
  },
  {
    id: "whitelabel",
    tag: "White-Label Partner",
    title: "AI-Expertise unter Ihrer Marke",
    description: "Sie haben die Kundenbeziehung. Wir haben die AI-Kompetenz. Zusammen skalieren Sie Ihr Angebot – ohne eigenes AI-Team aufzubauen.",
    meta: [
      { icon: "🏷️", text: "Invisible Delivery" },
      { icon: "🤝", text: "Für Beratungshäuser" },
      { icon: "🔒", text: "NDA-geschützt" }
    ],
    href: "/services/partnerships"
  },
  {
    id: "cobrand",
    tag: "Co-Branded Partner",
    title: "AI-Transformation. Gemeinsam stärker.",
    description: "Kombinieren Sie Ihre Branchenexpertise mit unserer AI-Kompetenz. Zwei Marken, ein Versprechen, doppelter Vertrauensvorsprung.",
    meta: [
      { icon: "🤝", text: "Beide Logos" },
      { icon: "📢", text: "Joint Go-to-Market" },
      { icon: "💰", text: "Revenue Share" }
    ],
    href: "/services/partnerships"
  },
  {
    id: "nevolion",
    tag: "XALT × Nevolion",
    title: "KI-gestützte Kundengewinnung für den Mittelstand",
    description: "Atlassian-Expertise trifft KI-gestützte Kundengewinnung. Smarte Marketing-Automatisierung und digitale Transformation für KMU — alles aus einer Hand.",
    meta: [
      { icon: "🤖", text: "KI-Marketing" },
      { icon: "📊", text: "Marktanalyse" },
      { icon: "🇩🇪", text: "DSGVO-konform" }
    ],
    href: "/services/partnerships"
  },
  {
    id: "baustelle",
    tag: "Baustelle + AI",
    title: "Baustellenprotokoll per Sprache. Tasks direkt in Jira.",
    description: "PLAUD am Helm, Aufnahme starten, Baustelle ablaufen. Die AI erstellt das Protokoll, erkennt Mängel und legt Tasks in Jira an. Kein Zettel, kein Laptop, kein Nacharbeiten.",
    meta: [
      { icon: "🏗️", text: "Bauwesen" },
      { icon: "🎙️", text: "PLAUD Recorder" },
      { icon: "📋", text: "Atlassian" }
    ],
    href: "/services/partnerships"
  },
  {
    id: "aviation",
    tag: "Aviation AI",
    title: "Airfield Operations. Intelligent automatisiert.",
    description: "AI-gestützte Lösungen für Flughafenbetreiber: Safety Self-Inspections, FOD-Erkennung, Wildlife Management, Compliance-Automatisierung. Von Assessment bis Produktion in 8 Wochen.",
    meta: [
      { icon: "✈️", text: "Flughäfen" },
      { icon: "🔍", text: "Safety Inspections" },
      { icon: "🇪🇺", text: "EASA-konform" }
    ],
    href: "/services/partnerships"
  },
  // Workshops
  {
    id: "vibe-coding",
    tag: "Workshop",
    title: "Vibe Coding Workshop",
    description: "Hands-on AI-powered development workshop for engineers and technical leaders. Learn to build software faster with AI coding assistants, master prompt engineering, and modernize your delivery pipeline.",
    meta: [
      { icon: "⏱️", text: "4 Hours" },
      { icon: "🌐", text: "Online" },
      { icon: "👥", text: "Max 12" },
      { icon: "🇬🇧", text: "English" }
    ],
    href: "/workshops/vibe-coding"
  },
  {
    id: "c-level",
    tag: "C-Level Workshop",
    title: "Vibe Coding — C-Level Edition",
    description: "Strategic AI leadership briefing for CTOs, CIOs, and board members. Understand how AI is reshaping software economics, evaluate organizational readiness, and build your AI adoption roadmap.",
    meta: [
      { icon: "🎯", text: "Strategic Focus" },
      { icon: "🏢", text: "Executive Audience" },
      { icon: "📊", text: "ROI-Driven" }
    ],
    href: "/workshops/c-level"
  },
  {
    id: "vibe-leaders",
    tag: "Workshop",
    title: "Vibe Coding — Leaders Edition",
    description: "Elevate your AI strategy as a tech leader. Understand how AI-powered development transforms team velocity, learn to evaluate AI tools, and build a roadmap for your engineering organization.",
    meta: [
      { icon: "🎯", text: "For Tech Leaders" },
      { icon: "🚀", text: "AI Strategy" },
      { icon: "📈", text: "Elevate Your Team" }
    ],
    href: "/workshops/vibe-coding"
  },
  // Apps
  {
    id: "calendar",
    tag: "Atlassian Forge App",
    title: "Advanced Calendar for Jira",
    description: "Turn Jira issues into a real, readable calendar. Weekly and monthly views, color-coded statuses, live analytics, and deep links back to Jira — built by XALT.",
    meta: [
      { icon: "📅", text: "Jira Software & JSM" },
      { icon: "🆓", text: "Free" },
      { icon: "🔧", text: "Atlassian Forge" }
    ],
    href: "/products/calendar"
  },
  {
    id: "menu-maker",
    tag: "Atlassian Forge App",
    title: "Advanced Menu Maker for Confluence",
    description: "Transform your Confluence navigation with powerful, fully customizable menus. Drag-and-drop ordering, per-space configs, custom icons, and real-time previews — built by XALT.",
    meta: [
      { icon: "☁️", text: "Confluence Cloud" },
      { icon: "🆓", text: "Free" },
      { icon: "🔧", text: "Atlassian Forge" }
    ],
    href: "/products/menu-maker"
  },
  {
    id: "marketplace",
    tag: "Products",
    title: "XALT Marketplace Apps",
    description: "Explore our Atlassian Marketplace apps for Jira, Confluence, Bitbucket and Bamboo. From calendars to navigation menus — built by an Atlassian Platinum Solution Partner.",
    meta: [
      { icon: "🔧", text: "9 Atlassian Apps" },
      { icon: "🆓", text: "7 Free" },
      { icon: "☁️", text: "Cloud & Data Center" }
    ],
    href: "/products"
  },
  // Jobs
  {
    id: "job-1",
    tag: "Job",
    title: "Senior AI & Business Transformation Consultant",
    description: "Bridge strategy and execution — re-engineer how enterprises work by integrating AI into their entire business lifecycle. Lead teams, architect solutions, drive transformation.",
    meta: [
      { icon: "📍", text: "Leipzig, Munich, Remote" },
      { icon: "💼", text: "Full-time" },
      { icon: "🧠", text: "AI & Atlassian" }
    ],
    href: "/jobs"
  },
  {
    id: "job-2",
    tag: "Job",
    title: "Werkstudent Software Engineering & AI",
    description: "Entwickle echte Software-Produkte — von AI-Agents über Atlassian Forge Apps bis zu Cloud-Plattformen. Mit TypeScript, Python, React und modernsten AI-Tools.",
    meta: [
      { icon: "📍", text: "Leipzig, München, Remote" },
      { icon: "⏰", text: "15–20h / Woche" },
      { icon: "💻", text: "TypeScript, Python & AI" }
    ],
    href: "/jobs"
  },
  {
    id: "job-3",
    tag: "Job",
    title: "Forward Deployed Engineer",
    description: "Direkt beim Kunden eingebettet: Du ownst technische Delivery von Scoping bis Go-Live — als Sparringspartner, der Probleme versteht, Lösungen baut und Projekte vorantreibt.",
    meta: [
      { icon: "📍", text: "Remote-first · Leipzig, Berlin, München" },
      { icon: "💼", text: "Voll- oder Teilzeit" },
      { icon: "🛠️", text: "Full-Stack & Atlassian" }
    ],
    href: "/jobs"
  },
  {
    id: "job-4",
    tag: "Job",
    title: "Integration Engineer — ITSM, CMDB & Enterprise Integration",
    description: "Du baust die Brücke zwischen Atlassian Cloud und On-Premise-Welt — in geschlossenen Netzwerken, mit strengen Sicherheitsanforderungen und über Organisationsgrenzen hinweg.",
    meta: [
      { icon: "📍", text: "Remote-first + Reisetätigkeit" },
      { icon: "💼", text: "Vollzeit" },
      { icon: "🔗", text: "JSM, CMDB & E-Bonding" }
    ],
    href: "/jobs"
  },
  {
    id: "job-5",
    tag: "Job",
    title: "Werkstudent Hardware Engineering & IoT",
    description: "Baue physische Dashboards mit Raspberry Pi, entwirf Gehäuse mit unseren 3D-Druckern, löte Sensoren und verbinde Hardware mit AI-Agenten im Maker Space.",
    meta: [
      { icon: "📍", text: "Leipzig (Maker Space)" },
      { icon: "⏰", text: "15–20h / Woche" },
      { icon: "🖨️", text: "3D-Druck, IoT & Elektronik" }
    ],
    href: "/jobs"
  },
  {
    id: "job-6",
    tag: "Job",
    title: "Werkstudent AI Engineering & OpenClaw",
    description: "Arbeite an AI-Agents und OpenClaw — dem AI-Assistenten, der dieses Job-Posting geschrieben hat. Kein Scherz.",
    meta: [
      { icon: "📍", text: "Leipzig, Remote" },
      { icon: "⏰", text: "15–20h / Woche" },
      { icon: "🤖", text: "AI & Agents" }
    ],
    href: "/jobs"
  },
  // Events
  {
    id: "cloudbound",
    tag: "Event",
    title: "CloudBound",
    description: "XALT's flagship cloud and DevOps event in Munich. Connect with industry experts, explore the latest in cloud transformation, and discover how leading organizations modernize their infrastructure.",
    meta: [
      { icon: "📍", text: "Munich" },
      { icon: "☁️", text: "Cloud & DevOps" },
      { icon: "🤝", text: "Networking" }
    ],
    href: "/events"
  },
  {
    id: "enterprise-summit",
    tag: "Event",
    title: "Enterprise AI Summit — San Jose 2026",
    description: "XALT at the Enterprise AI Summit in San Jose. Meet our team and learn how we help enterprises adopt AI at scale.",
    meta: [
      { icon: "📍", text: "San Jose" },
      { icon: "🤖", text: "Enterprise AI" },
      { icon: "🇺🇸", text: "English" }
    ],
    href: "/events"
  },
  {
    id: "jubilee",
    tag: "Event",
    title: "10 Jahre XALT — Jubiläum 2026",
    description: "Ein Jubiläum. Ein Festival. Ein Erlebnis. Feiern Sie 10 Jahre XALT mit uns — Partner, Kunden und Freunde willkommen.",
    meta: [
      { icon: "🎉", text: "Jubiläum" },
      { icon: "📍", text: "Leipzig" },
      { icon: "🎊", text: "Festival" }
    ],
    href: "/events"
  },
  // Services
  {
    id: "ki-strategy",
    tag: "Angebot",
    title: "KI-Strategieberatung auf C-Level",
    description: "Individuelle KI-Strategieberatung für Ihre Geschäftsführung. Pragmatisch, umsetzbar, auf Ihr Unternehmen zugeschnitten.",
    meta: [
      { icon: "🧠", text: "C-Level" },
      { icon: "🇩🇪", text: "Deutsch" },
      { icon: "📋", text: "Individuell" }
    ],
    href: "/services"
  },
  {
    id: "backup",
    tag: "Service",
    title: "Atlassian Backup & Restore",
    description: "Ist Ihre Jira Cloud wirklich geschützt? Backup-Strategien und Disaster Recovery für Atlassian Cloud-Produkte.",
    meta: [
      { icon: "🔒", text: "Jira Cloud" },
      { icon: "☁️", text: "Backup" },
      { icon: "🛡️", text: "Disaster Recovery" }
    ],
    href: "/services"
  },
  {
    id: "doc-mgmt",
    tag: "Service",
    title: "Dokumentenmanagement mit Confluence",
    description: "Audit-sicheres Dokumentenmanagement mit Confluence. Compliance, Versionierung und Governance für regulierte Branchen.",
    meta: [
      { icon: "📄", text: "Confluence" },
      { icon: "✅", text: "Audit-sicher" },
      { icon: "🏢", text: "Enterprise" }
    ],
    href: "/services"
  },
  {
    id: "emergency",
    tag: "Emergency Service",
    title: "IT-Projektretter",
    description: "Ihr IT-Projekt brennt? Wir kommen, analysieren, retten. XALT Emergency Project Service für kritische Situationen.",
    meta: [
      { icon: "🚨", text: "Sofort-Einsatz" },
      { icon: "🔧", text: "Projektrettung" },
      { icon: "🇩🇪", text: "Deutsch" }
    ],
    href: "/services"
  },
  {
    id: "itsek",
    tag: "Emergency Service",
    title: "IT-SEK — Spezialeinsatzkommando",
    description: "Das Spezialeinsatzkommando für IT-Projekte. Wenn normale Beratung nicht mehr reicht, kommen wir.",
    meta: [
      { icon: "🎯", text: "Spezialeinsatz" },
      { icon: "⚡", text: "Schnelle Hilfe" },
      { icon: "🇩🇪", text: "Deutsch" }
    ],
    href: "/services"
  },
  // Public Sector
  {
    id: "public-sector",
    tag: "Public Sector",
    title: "Atlassian Cloud für den Öffentlichen Sektor",
    description: "Atlassian Cloud für Behörden und öffentliche Einrichtungen. Sicher, compliant und mit AKDB als Partner.",
    meta: [
      { icon: "🏛️", text: "Öffentlicher Sektor" },
      { icon: "☁️", text: "Atlassian Cloud" },
      { icon: "🤝", text: "XALT & AKDB" }
    ],
    href: "/services"
  },
  // Other
  {
    id: "ventures",
    tag: "Venture Studio",
    title: "XALT Venture Studio",
    description: "We co-build the next generation of work tooling. Deep Atlassian ecosystem expertise, enterprise customer access, and hands-on startup building — for technical founders ready to launch.",
    meta: [
      { icon: "🚀", text: "Batch 01 Open" },
      { icon: "💰", text: "Pre-Seed Capital" },
      { icon: "🏢", text: "Enterprise Access" }
    ],
    href: "/ventures"
  },
  {
    id: "blog",
    tag: "Blog",
    title: "Atlassian Expertise Blog",
    description: "Praxiswissen zu Atlassian: Cloud Migration, Jira & Confluence Beratung, DevOps, Agile at Scale, Enterprise Service Management und Lizenzierung.",
    meta: [
      { icon: "📝", text: "15 Artikel" },
      { icon: "🏆", text: "Platinum Partner" },
      { icon: "☁️", text: "Cloud & Migration" }
    ],
    href: "/blog"
  },
  {
    id: "case-study",
    tag: "Case Study",
    title: "How We Built It",
    description: "A behind-the-scenes look at how we built the XALT Vibe Coding Workshop landing page — using the very AI-powered techniques we teach. From prompt to production.",
    meta: [
      { icon: "🛠️", text: "Behind the Scenes" },
      { icon: "⚡", text: "Vibe Coding in Action" },
      { icon: "📖", text: "Real Process" }
    ],
    href: "/blog/case-study"
  },
  {
    id: "infrastructure",
    tag: "Architecture",
    title: "StartLobster Infrastructure",
    description: "Technical architecture documentation for the StartLobster platform — HA reverse proxy with Caddy, automated SSL, self-registration API, and fully automated server provisioning pipeline.",
    meta: [
      { icon: "🏗️", text: "HA Reverse Proxy" },
      { icon: "☁️", text: "Hetzner Cloud" },
      { icon: "🔄", text: "Auto-Provisioning" }
    ],
    href: "/blog/infrastructure"
  },
  {
    id: "book-spotlight",
    tag: "Book Spotlight",
    title: "Hyper Adaptive — Melissa M. Reeve",
    description: "From developer platforms to AI-governed coder platforms. Why the real bottleneck is no longer code — it's change management and governance at scale.",
    meta: [
      { icon: "📖", text: "IT Revolution" },
      { icon: "🤖", text: "AI Platforms" },
      { icon: "🇺🇸", text: "English" }
    ],
    href: "/blog/book-spotlight"
  }
];

export const filterCategories = [
  { name: "All", key: "all" },
  { name: "Workshops", key: "workshop" },
  { name: "Forge Apps", key: "forge" },
  { name: "Events", key: "event" },
  { name: "Venture", key: "venture" },
  { name: "Jobs", key: "job" },
  { name: "Case Studies", key: "case" },
  { name: "Products", key: "product" },
  { name: "Branding", key: "brand" },
  { name: "Blog", key: "blog" }
];

// Category to tag mapping
const categoryToTag: Record<string, string[]> = {
  workshop: ["Workshop", "C-Level Workshop"],
  forge: ["Atlassian Forge App"],
  event: ["Event"],
  venture: ["Venture Studio"],
  job: ["Job"],
  case: ["Case Study"],
  product: ["Products", "Architecture"],
  brand: ["AI für KMU", "XALT × BlueFlag Security", "Enterprise AI", "White-Label Partner", "Co-Branded Partner", "XALT × Nevolion", "Baustelle + AI", "Aviation AI"],
  blog: ["Blog", "Book Spotlight"]
};

export function getFilteredCards(category: string): CardData[] {
  if (category === "all") return allCards;
  const tags = categoryToTag[category] || [];
  return allCards.filter(card => tags.includes(card.tag));
}
