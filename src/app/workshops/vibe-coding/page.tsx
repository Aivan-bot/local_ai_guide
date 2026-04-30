import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Link from "next/link";

export default function VibeCodingWorkshop() {
  return (
    <div className="min-h-screen bg-primary-dark text-white">
      <Navbar />
      
      <main className="pt-24 px-4 lg:px-[max(60px,(100vw-1200px)/2)] pb-20">
        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-[11px] tracking-[3px] uppercase text-accent-teal font-semibold mb-5">
            Workshop
          </span>
          
          <h1 className="font-montserrat text-[48px] font-bold text-white leading-[1.2] mb-6">
            Vibe Coding Workshop
          </h1>
          
          <p className="text-[18px] text-[rgba(255,255,255,0.6)] leading-[1.6] mb-10 max-w-3xl">
            Hands-on AI-powered development workshop for engineers and technical leaders. Learn to build software faster with AI coding assistants, master prompt engineering, and modernize your delivery pipeline.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-10">
            <span className="text-[13px] text-[rgba(255,255,255,0.4)] flex items-center gap-1.5">
              ⏱️ 4 Hours
            </span>
            <span className="text-[13px] text-[rgba(255,255,255,0.4)] flex items-center gap-1.5">
              🌐 Online
            </span>
            <span className="text-[13px] text-[rgba(255,255,255,0.4)] flex items-center gap-1.5">
              👥 Max 12
            </span>
            <span className="text-[13px] text-[rgba(255,255,255,0.4)] flex items-center gap-1.5">
              🇬🇧 English
            </span>
          </div>
          
          <Link href="/contact" className="bg-accent-teal text-primary-dark px-8 py-3 rounded-lg font-bold text-[14px] tracking-[0.5px] hover:translate-y-[-1px] hover:shadow-[0_4px_15px_rgba(78,205,196,0.3)] transition-all inline-block">
            Book Your Workshop
          </Link>
        </div>
        
        {/* Content */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8 mb-8">
            <h2 className="font-montserrat text-[24px] font-bold text-white mb-4">What You'll Learn</h2>
            <ul className="list-disc list-inside text-[rgba(255,255,255,0.7)] leading-8">
              <li>AI coding assistants and prompt engineering</li>
              <li>Building full-stack applications with AI</li>
              <li>Modern development workflows and CI/CD</li>
              <li>Team productivity with AI tools</li>
            </ul>
          </div>
          
          <div className="glass rounded-2xl p-8">
            <h2 className="font-montserrat text-[24px] font-bold text-white mb-4">Target Audience</h2>
            <p className="text-[rgba(255,255,255,0.7)] leading-7">
              Engineers, technical leads, and anyone interested in AI-assisted development. No prior AI experience required — just bring your curiosity and laptop.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
