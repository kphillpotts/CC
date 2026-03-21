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
    const prevInput = inputValue;
    setFromId(toUnit.id);
    setToId(fromUnit.id);
    setInputValue(formatResult(result));
    void prevInput;
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
            <button className="swap-button" onClick={handleSwap} title="Swap units">
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
            value={numericValue ? formatResult(result) : ''}
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
