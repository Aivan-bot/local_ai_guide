// Link replaced with <a> for static export compatibility

interface NavbarProps {
  locale: "en" | "de";
}

export default function Navbar({ locale }: NavbarProps) {
  const isEn = locale === "en";
  
  const links = [
    { href: isEn ? "/workshops/vibe-coding" : "/de/workshops/vibe-coding", label: "Vibe Coding Workshop" },
    { href: isEn ? "/workshops/c-level" : "/de/workshops/c-level", label: "C-Level Workshop" },
    { href: "https://xalt.de", label: "xalt.de", external: true },
  ];
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(10,22,40,0.95)] backdrop-blur-[20px] border-b border-[rgba(78,205,196,0.1)] h-16 flex items-center justify-between px-4 lg:px-[max(40px,(100vw-1200px)/2)]">
      <a href="/" className="flex items-center gap-3 no-underline">
        <span className="font-montserrat text-[13px] font-semibold text-accent-teal tracking-[2px] uppercase">
          XALT AI
        </span>
      </a>
      
      <div className="hidden md:flex gap-8 items-center">
        {links.map((link, i) => (
          link.external ? (
            <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className="text-[rgba(255,255,255,0.7)] no-underline text-[13px] font-medium tracking-[0.5px] hover:text-accent-teal transition-colors">
              {link.label}
            </a>
          ) : (
            <a key={i} href={link.href} className="text-[rgba(255,255,255,0.7)] no-underline text-[13px] font-medium tracking-[0.5px] hover:text-accent-teal transition-colors">
              {link.label}
            </a>
          )
        ))}
        <a href={isEn ? "/contact" : "/de/contact"} className="bg-accent-teal text-primary-dark px-6 py-2 rounded-lg font-bold text-[12px] tracking-[0.5px] hover:translate-y-[-1px] hover:shadow-[0_4px_15px_rgba(78,205,196,0.3)] transition-all">
          {isEn ? "GET IN TOUCH" : "KONTAKT"}
        </a>
        <LanguageSwitcher locale={locale} />
      </div>
      
      <button className="md:hidden text-white">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      </button>
    </nav>
  );
}

interface LanguageSwitcherProps {
  locale: "en" | "de";
}

function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const isEn = locale === "en";
  
  return (
    <div className="flex gap-2 items-center">
      <a href={isEn ? "/" : "/en"} className={`text-[13px] font-medium ${isEn ? "text-accent-teal" : "text-[rgba(255,255,255,0.5)]"}`}>🇬🇧 EN</a>
      <span className="text-[rgba(255,255,255,0.2)]">|</span>
      <a href={isEn ? "/de" : "/"} className={`text-[13px] font-medium ${!isEn ? "text-accent-teal" : "text-[rgba(255,255,255,0.5)]"}`}>🇩🇪 DE</a>
    </div>
  );
}
