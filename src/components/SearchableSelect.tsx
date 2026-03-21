import { useState, useRef, useEffect } from 'react';
import type { Unit } from '../types/units';
import './SearchableSelect.css';

interface Props {
  units: Unit[];
  selected: Unit;
  onChange: (unit: Unit) => void;
}

export function SearchableSelect({ units, selected, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const filtered = search
    ? units.filter((u) =>
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        (u.description ?? '').toLowerCase().includes(search.toLowerCase())
      )
    : units;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  const handleSelect = (unit: Unit) => {
    onChange(unit);
    setOpen(false);
    setSearch('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setOpen(false);
      setSearch('');
    } else if (e.key === 'Enter' && filtered.length > 0) {
      handleSelect(filtered[0]);
    }
  };

  return (
    <div className="searchable-select" ref={containerRef}>
      <button
        className="searchable-select-trigger"
        onClick={() => setOpen(!open)}
        type="button"
      >
        <span className="trigger-name">{selected.name}{selected.isCustom ? ' *' : ''}</span>
        <svg className={`trigger-chevron ${open ? 'open' : ''}`} width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </svg>
      </button>

      <div className={`searchable-dropdown ${open ? 'open' : ''}`}>
        {open && (
          <>
            <div className="search-input-wrapper">
              <svg className="search-icon" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M9.5 9.5L13 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              <input
                ref={inputRef}
                className="search-input"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search units..."
              />
            </div>
            <div className="search-results" ref={listRef}>
              {filtered.length === 0 ? (
                <div className="search-empty">No units found</div>
              ) : (
                filtered.map((unit) => (
                  <button
                    key={unit.id}
                    className={`search-option ${unit.id === selected.id ? 'active' : ''}`}
                    onClick={() => handleSelect(unit)}
                    type="button"
                  >
                    <span className="option-name">{unit.name}{unit.isCustom ? ' *' : ''}</span>
                    {unit.description && (
                      <span className="option-desc">{unit.description}</span>
                    )}
                  </button>
                ))
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
