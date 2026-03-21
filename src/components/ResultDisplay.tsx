import { useState } from 'react';
import type { Unit } from '../types/units';
import { formatResult } from '../data/convert';
import './ResultDisplay.css';

interface Props {
  value: number;
  inputValue: number;
  fromUnit: Unit;
  toUnit: Unit;
}

export function ResultDisplay({ value, inputValue, fromUnit, toUnit }: Props) {
  const [copied, setCopied] = useState(false);

  if (inputValue === 0 || isNaN(inputValue)) {
    return null;
  }

  const formattedInput = formatResult(inputValue);
  const formattedResult = formatResult(value);
  const inputPlural = inputValue !== 1;
  const resultPlural = value !== 1;

  const summaryText = `${formattedInput} ${fromUnit.name}${inputPlural ? 's' : ''} = ${formattedResult} ${toUnit.name}${resultPlural ? 's' : ''}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="result-display">
      <div className="result-summary">{summaryText}</div>
      <button className="copy-button" onClick={handleCopy}>
        {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  );
}
