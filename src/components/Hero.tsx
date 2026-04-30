"use client";

import Link from "next/link";
import CardComponent from "./Card";
import FilterBar from "./FilterBar";
import { allCards, getFilteredCards, filterCategories } from "../lib/data";
import { useState, useMemo } from "react";

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filteredCards = useMemo(() => {
    return getFilteredCards(activeFilter);
  }, [activeFilter]);

  return (
    <main className="min-h-screen bg-primary-dark relative">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center text-center px-10 pt-24 pb-16 relative overflow-hidden">
        <div className="absolute top-[-200px] right-[-200px] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(78,205,196,0.08)_0%,transparent_60%)] rounded-full" />
        <div className="absolute bottom-[-150px] left-[-100px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,82,204,0.06)_0%,transparent_60%)] rounded-full" />
        
        <div className="relative z-10 max-w-[750px]">
          <span className="inline-block text-[11px] tracking-[3px] uppercase text-accent-teal font-semibold mb-5">
            XALT AI-Powered Services
          </span>
          
          <h1 className="font-montserrat text-[48px] md:text-[52px] font-bold text-white leading-[1.15] mb-5 tracking-[-1px]">
            Build Faster. <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-accent-teal to-[#7ee8e0] bg-clip-text text-transparent">
              Lead Smarter.
            </span>
          </h1>
          
          <p className="text-[18px] text-[rgba(255,255,255,0.5)] max-w-[580px] mx-auto mb-10 leading-[1.5]">
            Explore XALT's AI-powered workshops and services. From hands-on Vibe Coding for engineers to strategic C-Level briefings — we help your organization adopt AI with confidence.
          </p>
          
          <Link href="/contact" className="bg-accent-teal text-primary-dark px-8 py-3 rounded-lg font-bold text-[14px] tracking-[0.5px] hover:translate-y-[-1px] hover:shadow-[0_4px_15px_rgba(78,205,196,0.3)] transition-all inline-block">
            GET IN TOUCH
          </Link>
        </div>
      </section>

      {/* Cards Section */}
      <section className="px-4 lg:px-[max(60px,(100vw-1200px)/2)] pb-24">
        <FilterBar 
          categories={filterCategories}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredCards.map(card => (
            <CardComponent key={card.id} {...card} />
          ))}
        </div>
      </section>
    </main>
  );
}
