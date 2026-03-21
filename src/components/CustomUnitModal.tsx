import { useState } from 'react';
import { type Category, CATEGORY_INFO, type Unit } from '../types/units';
import './CustomUnitModal.css';

interface Props {
  onSave: (unit: Unit) => void;
  onClose: () => void;
}

const CATEGORIES = Object.keys(CATEGORY_INFO) as Category[];

export function CustomUnitModal({ onSave, onClose }: Props) {
  const [name, setName] = useState('');
  const [emoji, setEmoji] = useState('⭐');
  const [category, setCategory] = useState<Category>('weight');
  const [baseUnitValue, setBaseUnitValue] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseFloat(baseUnitValue);
    if (!name.trim() || isNaN(val) || val <= 0) return;

    onSave({
      id: `custom-${Date.now()}`,
      name: name.trim(),
      emoji,
      category,
      baseUnitValue: val,
      isCustom: true,
      description: description.trim() || undefined,
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <h2 className="modal-title">Create Custom Unit</h2>
        <p className="modal-subtitle">Invent your own absurd unit of measurement!</p>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-row">
            <div className="form-group emoji-group">
              <label>Emoji</label>
              <input
                type="text"
                value={emoji}
                onChange={(e) => setEmoji(e.target.value)}
                maxLength={4}
                className="emoji-input"
              />
            </div>
            <div className="form-group name-group">
              <label>Unit Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., Rubber Duck"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Category</label>
            <select value={category} onChange={(e) => setCategory(e.target.value as Category)}>
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {CATEGORY_INFO[cat].emoji} {CATEGORY_INFO[cat].label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Value in {CATEGORY_INFO[category].baseUnit}</label>
            <input
              type="number"
              value={baseUnitValue}
              onChange={(e) => setBaseUnitValue(e.target.value)}
              placeholder={`How many ${CATEGORY_INFO[category].baseUnit} is 1 unit?`}
              step="any"
              min="0"
              required
            />
            <span className="form-hint">
              1 {name || 'unit'} = ? {CATEGORY_INFO[category].baseUnit}
            </span>
          </div>

          <div className="form-group">
            <label>Description (optional)</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g., Standard bath toy size"
            />
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn-save">Create Unit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
