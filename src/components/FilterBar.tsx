import Link from "next/link";

interface Category {
  name: string;
  key: string;
}

interface FilterBarProps {
  categories: Category[];
  activeFilter: string;
  onFilterChange: (key: string) => void;
}

export default function FilterBar({ categories, activeFilter, onFilterChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      {categories.map(cat => (
        <button
          key={cat.key}
          onClick={() => onFilterChange(cat.key)}
          className={`px-4 py-2 rounded-lg text-[13px] font-medium transition-all ${
            activeFilter === cat.key
              ? "bg-accent-teal text-primary-dark"
              : "text-[rgba(255,255,255,0.6)] hover:text-white hover:bg-[rgba(255,255,255,0.05)]"
          }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}
