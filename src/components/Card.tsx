import { Link } from "@/lib/navigation";
import { useTranslations } from "next-intl";
import Card from "./Card";
import MetaBadge from "./MetaBadge";

interface CardProps {
  tag: string;
  title: string;
  description: string;
  meta?: { icon: string; text: string }[];
  href: string;
}

export default function CardComponent({ tag, title, description, meta, href }: CardProps) {
  const t = useTranslations("card");

  const cta = tag === "Job" ? t("viewJob") : 
              tag === "Event" ? t("learnMore") : 
              t("explore");

  return (
    <Link href={href} className="group glass rounded-[20px] p-[40px_36px] transition-all duration-300 relative overflow-hidden no-underline block hover:bg-[rgba(78,205,196,0.05)] hover:border-[rgba(78,205,196,0.3)] hover:translate-y-[-6px] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent-teal to-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-[20px_20px_0_0]" />
      
      <span className="inline-block text-[10px] tracking-[2px] uppercase text-accent-teal font-semibold bg-[rgba(78,205,196,0.1)] px-3 py-1 rounded mb-5">
        {tag}
      </span>
      
      <h2 className="font-montserrat text-[24px] font-bold text-white mb-3 leading-[1.3]">
        {title}
      </h2>
      
      <p className="text-[15px] text-[rgba(255,255,255,0.45)] leading-[1.6] mb-6">
        {description}
      </p>
      
      {meta && (
        <div className="flex flex-wrap gap-4 mb-6">
          {meta.map((m, i) => (
            <MetaBadge key={i} icon={m.icon} text={m.text} />
          ))}
        </div>
      )}
      
      <span className="inline-flex items-center gap-2 text-[14px] font-bold text-accent-teal tracking-[0.3px] group-hover:gap-[14px] transition-all">
        {cta}
      </span>
    </Link>
  );
}
