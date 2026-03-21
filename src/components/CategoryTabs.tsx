import { type Category, CATEGORY_INFO } from '../types/units';
import './CategoryTabs.css';

interface Props {
  selected: Category;
  onChange: (cat: Category) => void;
}

const CATEGORIES = Object.keys(CATEGORY_INFO) as Category[];

export function CategoryTabs({ selected, onChange }: Props) {
  return (
    <div className="category-tabs">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          className={`category-tab ${cat === selected ? 'active' : ''}`}
          onClick={() => onChange(cat)}
        >
          <span className="tab-label">{CATEGORY_INFO[cat].label}</span>
        </button>
      ))}
    </div>
  );
}
