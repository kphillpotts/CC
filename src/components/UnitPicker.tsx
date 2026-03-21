import { useState } from 'react';
import type { Unit } from '../types/units';
import { SearchableSelect } from './SearchableSelect';
import { AnimatedNumber } from './AnimatedNumber';
import './UnitPicker.css';

interface Props {
  units: Unit[];
  selected: Unit;
  onChange: (unit: Unit) => void;
  label: string;
  value?: string;
  numericValue?: number;
  onValueChange?: (val: string) => void;
  showInput?: boolean;
}

export function UnitPicker({ units, selected, onChange, label, value, numericValue, onValueChange, showInput }: Props) {
  const [shaking, setShaking] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    onValueChange?.(raw);

    const num = parseFloat(raw);
    if (raw !== '' && (isNaN(num) || num < 0)) {
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
    }
  };

  return (
    <div className="unit-picker">
      <label className="unit-picker-label">{label}</label>
      <div className={`unit-picker-body ${shaking ? 'shake' : ''}`}>
        {showInput && onValueChange ? (
          <input
            type="number"
            inputMode="decimal"
            className="unit-picker-value"
            value={value}
            onChange={handleChange}
            placeholder="0"
            min="0"
            step="any"
          />
        ) : (
          <div className="unit-picker-result">
            <AnimatedNumber value={numericValue ?? 0} />
          </div>
        )}
        <div className="unit-picker-select-wrapper">
          <SearchableSelect
            units={units}
            selected={selected}
            onChange={onChange}
          />
        </div>
      </div>
      {selected.description && (
        <span className="unit-picker-description">{selected.description}</span>
      )}
    </div>
  );
}
