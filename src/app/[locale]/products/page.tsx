"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "@/lib/navigation";
import { useTranslations } from "next-intl";
import { useRouter } from "@/lib/navigation";

const products = [
  {
    title: "Advanced Calendar for Jira",
    description: "Turn Jira issues into a real, readable calendar. Weekly and monthly views, color-coded statuses, live analytics, and deep links back to Jira — built by XALT.",
    tags: ["📅 Jira Software & JSM", "🆓 Free", "🔧 Atlassian Forge"],
    href: "/products/calendar"
  },
  {
    title: "Advanced Menu Maker for Confluence",
    description: "Transform your Confluence navigation with powerful, fully customizable menus. Drag-and-drop ordering, per-space configs, custom icons, and real-time previews — built by XALT.",
    tags: ["☁️ Confluence Cloud", "🆓 Free", "🔧 Atlassian Forge"],
    href: "/products/menu-maker"
  },
  {
    title: "XALT Marketplace Apps",
    description: "Explore our Atlassian Marketplace apps for Jira, Confluence, Bitbucket and Bamboo. From calendars to navigation menus — built by an Atlassian Platinum Solution Partner.",
    tags: ["🔧 9 Atlassian Apps", "🆓 7 Free", "☁️ Cloud & Data Center"],
    href: "https://marketplace.atlassian.com"
  }
];

const ventures = [
  {
    title: "XALT Venture Studio",
    description: "We co-build the next generation of work tooling. Deep Atlassian ecosystem expertise, enterprise customer access, and hands-on startup building — for technical founders ready to launch.",
    tags: ["🚀 Batch 01 Open", "💰 Pre-Seed Capital", "🏢 Enterprise Access"],
    href: "/ventures"
  }
];

export default function ProductsPage() {
  const t = useTranslations();
  const router = useRouter();
  const locale = "en";

  return (
    <div className="min-h-screen bg-primary-dark text-white">
      <Navbar />
      <main className="pt-24 px-4 lg:px-[max(60px,(100vw-1200px)/2)] pb-20">
        <div className="max-w-4xl mx-auto mb-16">
          <span className="inline-block text-[11px] tracking-[3px] uppercase text-accent-teal font-semibold mb-5">
            {t("products.tagline")}
          </span>
          <h1 className="font-montserrat text-[48px] font-bold text-white leading-[1.2] mb-6">
            {t("products.title")}
          </h1>
          <p className="text-[18px] text-[rgba(255,255,255,0.6)] leading-[1.6] max-w-3xl">
            {t("products.subtitle")}
          </p>
        </div>
        <div className="mb-20">
          <h2 className="font-montserrat text-[32px] font-bold text-white mb-10">{t("products.apps")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <Link key={index} href={product.href} className="glass rounded-2xl p-8 hover:bg-[rgba(78,205,196,0.05)] hover:border-[rgba(78,205,196,0.3)] hover:translate-y-[-4px] transition-all no-underline block">
                <h3 className="font-montserrat text-[24px] font-bold text-white mb-3">{product.title}</h3>
                <p className="text-[rgba(255,255,255,0.6)] leading-6 mb-4">{product.description}</p>
                <div className="flex flex-wrap gap-3">
                  {product.tags.map((tag, i) => (
                    <span key={i} className="text-[12px] text-[rgba(255,255,255,0.35)] flex items-center gap-1">{tag}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-montserrat text-[32px] font-bold text-white mb-10">{t("products.ventures")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-5xl mx-auto">
            {ventures.map((venture, index) => (
              <Link key={index} href={venture.href} className="glass rounded-2xl p-8 hover:bg-[rgba(78,205,196,0.05)] hover:border-[rgba(78,205,196,0.3)] hover:translate-y-[-4px] transition-all no-underline block">
                <h3 className="font-montserrat text-[24px] font-bold text-white mb-3">{venture.title}</h3>
                <p className="text-[rgba(255,255,255,0.6)] leading-6 mb-4">{venture.description}</p>
                <div className="flex flex-wrap gap-3">
                  {venture.tags.map((tag, i) => (
                    <span key={i} className="text-[12px] text-[rgba(255,255,255,0.35)] flex items-center gap-1">{tag}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
