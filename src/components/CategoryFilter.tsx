interface CategoryFilterProps {
  categories: string[];
  active: string;
  onChange: (cat: string) => void;
}

export default function CategoryFilter({ categories, active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-10">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-4 py-1.5 text-xs uppercase tracking-wider border transition-all duration-300 cursor-pointer ${
            active === cat
              ? 'border-darkroom-accent text-darkroom-accent bg-darkroom-accent/10'
              : 'border-darkroom-border text-darkroom-text-dim hover:border-darkroom-text-dim hover:text-darkroom-text bg-transparent'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
