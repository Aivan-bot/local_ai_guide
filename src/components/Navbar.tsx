'use client';

import { useState } from 'react';

interface NavbarProps {
  locale: "en" | "de";
}

export default function Navbar({ locale }: NavbarProps) {
  const isEn = locale === "en";
  const [menuOpen, setMenuOpen] = useState(false);
  
  const links = [
    { href: isEn ? "/workshops/vibe-coding" : "/de/workshops/vibe-coding", label: isEn ? "Vibe Coding Workshop" : "Vibe Coding Workshop" },
    { href: isEn ? "/workshops/c-level" : "/de/workshops/c-level", label: isEn ? "C-Level Workshop" : "C-Level Workshop" },
    { href: isEn ? "/products" : "/de/products", label: isEn ? "Products" : "Produkte" },
    { href: isEn ? "/events" : "/de/events", label: isEn ? "Events" : "Events" },
    { href: isEn ? "/jobs" : "/de/jobs", label: isEn ? "Jobs" : "Jobs" },
    { href: "https://xalt.de", label: "xalt.de", external: true },
  ];
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(10,22,40,0.95)] backdrop-blur-[20px] border-b border-[rgba(78,205,196,0.1)] h-16 flex items-center justify-between px-4 lg:px-[max(40px,(100vw-1200px)/2)]">
      <a href="/" className="flex items-center gap-3 no-underline">
        <span className="font-montserrat text-[13px] font-semibold text-accent-teal tracking-[2px] uppercase">
          XALT AI
        </span>
      </a>
      
      {/* Desktop nav */}
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
      
      {/* Mobile: hamburger + language switcher */}
      <div className="flex md:hidden items-center gap-3">
        <LanguageSwitcher locale={locale} />
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="text-white p-1"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <>
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </>
            ) : (
              <>
                <path d="M3 12h18" />
                <path d="M3 6h18" />
                <path d="M3 18h18" />
              </>
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[rgba(10,22,40,0.98)] backdrop-blur-[20px] border-b border-[rgba(78,205,196,0.1)] md:hidden px-4 py-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {links.map((link, i) => (
            link.external ? (
              <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className="text-[rgba(255,255,255,0.7)] no-underline text-[15px] font-medium hover:text-accent-teal transition-colors py-2">
                {link.label}
              </a>
            ) : (
              <a key={i} href={link.href} className="text-[rgba(255,255,255,0.7)] no-underline text-[15px] font-medium hover:text-accent-teal transition-colors py-2">
                {link.label}
              </a>
            )
          ))}
          <a href={isEn ? "/contact" : "/de/contact"} className="bg-accent-teal text-primary-dark px-6 py-3 rounded-lg font-bold text-[13px] text-center mt-2">
            {isEn ? "GET IN TOUCH" : "KONTAKT"}
          </a>
        </div>
      )}
    </nav>
  );
}

interface LanguageSwitcherProps {
  locale: "en" | "de";
}

function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const isEn = locale === "en";
  
  return (
    <div className="flex gap-2 items-center shrink-0">
      <a href={isEn ? "/" : "/en"} className={`text-[13px] font-medium ${isEn ? "text-accent-teal" : "text-[rgba(255,255,255,0.5)]"}`}>🇬🇧 EN</a>
      <span className="text-[rgba(255,255,255,0.2)]">|</span>
      <a href={isEn ? "/de" : "/"} className={`text-[13px] font-medium ${!isEn ? "text-accent-teal" : "text-[rgba(255,255,255,0.5)]"}`}>🇩🇪 DE</a>
    </div>
  );
}
