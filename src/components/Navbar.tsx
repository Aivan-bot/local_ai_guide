import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-100 bg-[rgba(10,22,40,0.95)] backdrop-blur-[20px] border-b border-[rgba(78,205,196,0.1)] h-16 flex items-center justify-between px-4 lg:px-[max(40px,(100vw-1200px)/2)]">
      <Link href="/" className="flex items-center gap-3 no-underline">
        <span className="font-montserrat text-[13px] font-semibold text-accent-teal tracking-[2px] uppercase">
          XALT AI
        </span>
      </Link>
      
      <div className="hidden md:flex gap-8 items-center">
        <Link href="/workshops/vibe-coding" className="text-[rgba(255,255,255,0.7)] no-underline text-[13px] font-medium tracking-[0.5px] hover:text-accent-teal transition-colors">
          Vibe Coding Workshop
        </Link>
        <Link href="/workshops/c-level" className="text-[rgba(255,255,255,0.7)] no-underline text-[13px] font-medium tracking-[0.5px] hover:text-accent-teal transition-colors">
          C-Level Workshop
        </Link>
        <Link href="https://xalt.de" className="text-[rgba(255,255,255,0.7)] no-underline text-[13px] font-medium tracking-[0.5px] hover:text-accent-teal transition-colors">
          xalt.de
        </Link>
        <Link href="/contact" className="bg-accent-teal text-primary-dark px-6 py-2 rounded-lg font-bold text-[12px] tracking-[0.5px] hover:translate-y-[-1px] hover:shadow-[0_4px_15px_rgba(78,205,196,0.3)] transition-all">
          GET IN TOUCH
        </Link>
        <span className="text-[13px] text-[rgba(255,255,255,0.5)]">🇬🇧 EN</span>
        <span className="text-[13px] text-[rgba(255,255,255,0.3)] cursor-not-allowed">🇩🇪 DE</span>
      </div>
      
      <button className="md:hidden text-white">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      </button>
    </nav>
  );
}
