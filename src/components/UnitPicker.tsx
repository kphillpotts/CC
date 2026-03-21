import type { Unit } from '../types/units';
import './UnitPicker.css';

interface Props {
  units: Unit[];
  selected: Unit;
  onChange: (unit: Unit) => void;
  label: string;
  value?: string;
  onValueChange?: (val: string) => void;
  showInput?: boolean;
}

export function UnitPicker({ units, selected, onChange, label, value, onValueChange, showInput }: Props) {
  return (
    <div className="unit-picker">
      <label className="unit-picker-label">{label}</label>
      <div className="unit-picker-body">
        {showInput && onValueChange ? (
          <input
            type="number"
            className="unit-picker-value"
            value={value}
            onChange={(e) => onValueChange(e.target.value)}
            placeholder="0"
            min="0"
            step="any"
          />
        ) : (
          <div className="unit-picker-result">{value || '0'}</div>
        )}
        <div className="unit-picker-select-wrapper">
          <select
            className="unit-picker-select"
            value={selected.id}
            onChange={(e) => {
              const unit = units.find((u) => u.id === e.target.value);
              if (unit) onChange(unit);
            }}
          >
            {units.map((unit) => (
              <option key={unit.id} value={unit.id}>
                {unit.name}
                {unit.isCustom ? ' *' : ''}
              </option>
            ))}
          </select>
        </div>
      </div>
      {selected.description && (
        <span className="unit-picker-description">{selected.description}</span>
      )}
    </div>
  );
}
