import { useState, useMemo } from 'react';
import type { Category, Unit } from '../types/units';
import { BUILT_IN_UNITS } from '../data/units';
import { convert, formatResult } from '../data/convert';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { CategoryTabs } from './CategoryTabs';
import { UnitPicker } from './UnitPicker';
import { ResultDisplay } from './ResultDisplay';
import { CustomUnitModal } from './CustomUnitModal';
import './Converter.css';

const ALL_CATEGORIES: Category[] = ['weight', 'length', 'volume', 'area', 'time', 'speed', 'data'];

function pickInterestingPair(units: Unit[]): { fromId: string; toId: string } {
  if (units.length < 2) return { fromId: units[0]?.id ?? '', toId: units[1]?.id ?? '' };

  const pairs: { a: Unit; b: Unit; score: number }[] = [];
  for (let i = 0; i < units.length; i++) {
    for (let j = i + 1; j < units.length; j++) {
      const a = units[i];
      const b = units[j];
      const ratio = Math.max(a.baseUnitValue, b.baseUnitValue) /
                    Math.min(a.baseUnitValue, b.baseUnitValue);
      const logRatio = Math.log10(ratio);
      if (logRatio >= 0.3 && logRatio <= 5) {
        const score = 1 / (1 + Math.abs(logRatio - 2.5));
        pairs.push({ a, b, score });
      }
    }
  }

  if (pairs.length === 0) {
    const shuffled = [...units].sort(() => Math.random() - 0.5);
    const [x, y] = shuffled[0].baseUnitValue >= shuffled[1].baseUnitValue
      ? [shuffled[0], shuffled[1]] : [shuffled[1], shuffled[0]];
    return { fromId: x.id, toId: y.id };
  }

  const sorted = pairs.sort((x, y) => y.score - x.score);
  const topN = sorted.slice(0, Math.max(10, Math.floor(sorted.length * 0.3)));
  const pick = topN[Math.floor(Math.random() * topN.length)];
  // From = bigger unit, To = smaller unit (reads better: "1 Kilogram = 1,000 Grams")
  const [from, to] = pick.a.baseUnitValue >= pick.b.baseUnitValue
    ? [pick.a, pick.b] : [pick.b, pick.a];
  return { fromId: from.id, toId: to.id };
}

// Pick random initial category and units
const initialCategory = ALL_CATEGORIES[Math.floor(Math.random() * ALL_CATEGORIES.length)];
const initialUnits = BUILT_IN_UNITS
  .filter((u) => u.category === initialCategory)
  .sort((a, b) => a.name.localeCompare(b.name));
const initialPair = pickInterestingPair(initialUnits);

interface ConverterProps {
  playSound: (name: 'swap' | 'surprise' | 'copy' | 'click') => void;
}

export function Converter({ playSound }: ConverterProps) {
  const [category, setCategory] = useState<Category>(initialCategory);
  const [inputValue, setInputValue] = useState<string>('1');
  const [fromId, setFromId] = useState<string>(initialPair.fromId);
  const [toId, setToId] = useState<string>(initialPair.toId);
  const [showModal, setShowModal] = useState(false);
  const [swapCount, setSwapCount] = useState(0);
  const [customUnits, setCustomUnits] = useLocalStorage<Unit[]>('curious-converter-custom-units', []);

  const allUnits = useMemo(
    () => [...BUILT_IN_UNITS, ...customUnits],
    [customUnits]
  );

  const categoryUnits = useMemo(
    () => allUnits
      .filter((u) => u.category === category)
      .sort((a, b) => a.name.localeCompare(b.name)),
    [allUnits, category]
  );

  const fromUnit = categoryUnits.find((u) => u.id === fromId) ?? categoryUnits[0];
  const toUnit = categoryUnits.find((u) => u.id === toId) ?? categoryUnits[1];

  const numericValue = parseFloat(inputValue) || 0;
  const result = fromUnit && toUnit ? convert(numericValue, fromUnit, toUnit) : 0;

  const handleCategoryChange = (cat: Category) => {
    playSound('click');
    setCategory(cat);
    const units = allUnits
      .filter((u) => u.category === cat)
      .sort((a, b) => a.name.localeCompare(b.name));
    const pair = pickInterestingPair(units);
    setFromId(pair.fromId);
    setToId(pair.toId);
    setInputValue('1');
  };

  const handleSwap = () => {
    playSound('swap');
    setFromId(toUnit.id);
    setToId(fromUnit.id);
    setInputValue(formatResult(result));
    setSwapCount((c) => c + 1);
  };

  const handleAddCustomUnit = (unit: Unit) => {
    setCustomUnits((prev) => [...prev, unit]);
    setShowModal(false);
  };

  const handleDeleteCustomUnit = (id: string) => {
    setCustomUnits((prev) => prev.filter((u) => u.id !== id));
    if (fromId === id) setFromId(categoryUnits[0]?.id ?? '');
    if (toId === id) setToId(categoryUnits[1]?.id ?? '');
  };

  const handleSurprise = () => {
    if (categoryUnits.length < 2) return;
    playSound('surprise');
    const pair = pickInterestingPair(categoryUnits);
    setFromId(pair.fromId);
    setToId(pair.toId);
    setInputValue('1');
  };

  const customInCategory = customUnits.filter((u) => u.category === category);

  return (
    <div className="converter">
      <CategoryTabs selected={category} onChange={handleCategoryChange} />

      <div className="converter-card">
        <div className="panels-row">
          <UnitPicker
            units={categoryUnits}
            selected={fromUnit}
            onChange={(u) => setFromId(u.id)}
            label="From"
            value={inputValue}
            onValueChange={setInputValue}
            showInput
          />

          <div className="swap-row">
            <div className="swap-line" />
            <button className="swap-button" onClick={handleSwap} title="Swap units" style={{ transform: `rotate(${swapCount * 180}deg)` }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 2L4 14M4 14L1 11M4 14L7 11M12 14L12 2M12 2L9 5M12 2L15 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="swap-line" />
          </div>

          <UnitPicker
            units={categoryUnits}
            selected={toUnit}
            onChange={(u) => setToId(u.id)}
            label="To"
            numericValue={result}
          />
        </div>

        <ResultDisplay
          value={result}
          inputValue={numericValue}
          fromUnit={fromUnit}
          toUnit={toUnit}
          onCopy={() => playSound('copy')}
        />
      </div>

      <div className="custom-section">
        <button className="surprise-button" onClick={handleSurprise}>
          Surprise me
        </button>
        <button className="add-custom-button" onClick={() => setShowModal(true)}>
          + Create custom unit
        </button>

        {customInCategory.length > 0 && (
          <div className="custom-units-list">
            {customInCategory.map((u) => (
              <div key={u.id} className="custom-unit-chip">
                <span>{u.name}</span>
                <button
                  className="delete-custom"
                  onClick={() => handleDeleteCustomUnit(u.id)}
                  title="Delete unit"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {showModal && (
        <CustomUnitModal
          onSave={handleAddCustomUnit}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
