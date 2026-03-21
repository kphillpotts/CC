import { useState } from 'react';
import type { Unit } from '../types/units';
import { formatResult } from '../data/convert';
import { generateNaturalLanguage } from '../data/naturalLanguage';
import './ResultDisplay.css';

interface Props {
  value: number;
  inputValue: number;
  fromUnit: Unit;
  toUnit: Unit;
}

export function ResultDisplay({ value, inputValue, fromUnit, toUnit }: Props) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (inputValue === 0 || isNaN(inputValue)) {
    return null;
  }

  const formattedInput = formatResult(inputValue);
  const formattedResult = formatResult(value);
  const inputPlural = inputValue !== 1;
  const resultPlural = value !== 1;

  const preciseText = `${formattedInput} ${fromUnit.name}${inputPlural ? 's' : ''} = ${formattedResult} ${toUnit.name}${resultPlural ? 's' : ''}`;
  const naturalText = generateNaturalLanguage(value, toUnit.name, toUnit.category);

  const handleCopy = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="result-cards">
      <div className="result-card result-card--natural">
        <div className="result-card-text">{naturalText}</div>
        <button
          className="copy-btn"
          onClick={() => handleCopy(naturalText, 'natural')}
        >
          {copiedId === 'natural' ? 'Copied' : 'Copy'}
        </button>
      </div>

      <div className="result-card result-card--precise">
        <div className="result-card-text">{preciseText}</div>
        <button
          className="copy-btn"
          onClick={() => handleCopy(preciseText, 'precise')}
        >
          {copiedId === 'precise' ? 'Copied' : 'Copy'}
        </button>
      </div>
    </div>
  );
}
