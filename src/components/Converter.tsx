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

export function Converter() {
  const [category, setCategory] = useState<Category>('weight');
  const [inputValue, setInputValue] = useState<string>('1');
  const [fromId, setFromId] = useState<string>('kg');
  const [toId, setToId] = useState<string>('elephant');
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
    setCategory(cat);
    const units = allUnits
      .filter((u) => u.category === cat)
      .sort((a, b) => a.name.localeCompare(b.name));
    setFromId(units[0]?.id ?? '');
    setToId(units[1]?.id ?? '');
    setInputValue('1');
  };

  const handleSwap = () => {
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

    // Build pairs scored by how "interesting" the ratio is
    // Sweet spot: ratio between 2 and 100,000 (i.e. 1–5 orders of magnitude)
    const pairs: { a: Unit; b: Unit; score: number }[] = [];
    for (let i = 0; i < categoryUnits.length; i++) {
      for (let j = i + 1; j < categoryUnits.length; j++) {
        const a = categoryUnits[i];
        const b = categoryUnits[j];
        const ratio = Math.max(a.baseUnitValue, b.baseUnitValue) /
                      Math.min(a.baseUnitValue, b.baseUnitValue);
        const logRatio = Math.log10(ratio);
        // Ideal: 0.3 to 5 orders of magnitude (roughly 2x to 100,000x)
        if (logRatio >= 0.3 && logRatio <= 5) {
          // Score peaks around 2–3 orders of magnitude
          const score = 1 / (1 + Math.abs(logRatio - 2.5));
          pairs.push({ a, b, score });
        }
      }
    }

    if (pairs.length === 0) {
      // Fallback: just pick two random different units
      const shuffled = [...categoryUnits].sort(() => Math.random() - 0.5);
      setFromId(shuffled[0].id);
      setToId(shuffled[1].id);
    } else {
      // Weighted random: pick from top candidates
      const sorted = pairs.sort((a, b) => b.score - a.score);
      const topN = sorted.slice(0, Math.max(10, Math.floor(sorted.length * 0.3)));
      const pick = topN[Math.floor(Math.random() * topN.length)];
      // Randomly assign from/to direction
      if (Math.random() < 0.5) {
        setFromId(pick.a.id);
        setToId(pick.b.id);
      } else {
        setFromId(pick.b.id);
        setToId(pick.a.id);
      }
    }
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
