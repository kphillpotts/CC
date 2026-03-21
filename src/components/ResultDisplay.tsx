import { useState, useEffect, useRef } from 'react';
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
  const [pulse, setPulse] = useState(false);
  const prevUnitsRef = useRef(`${fromUnit.id}-${toUnit.id}`);

  useEffect(() => {
    const key = `${fromUnit.id}-${toUnit.id}`;
    if (key !== prevUnitsRef.current) {
      prevUnitsRef.current = key;
      setPulse(true);
      const timer = setTimeout(() => setPulse(false), 500);
      return () => clearTimeout(timer);
    }
  }, [fromUnit.id, toUnit.id]);

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
    <div className={`result-cards ${pulse ? 'pulse' : ''}`}>
      <div className="result-card result-card--natural">
        <div className="result-card-text">{naturalText}</div>
        <button
          className={`copy-btn ${copiedId === 'natural' ? 'copied' : ''}`}
          onClick={() => handleCopy(naturalText, 'natural')}
        >
          <span className="copy-btn-label">
            {copiedId === 'natural' ? (
              <>
                <svg className="copy-tick" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6.5L4.5 9L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Copied
              </>
            ) : 'Copy'}
          </span>
        </button>
      </div>

      <div className="result-card result-card--precise">
        <div className="result-card-text">{preciseText}</div>
        <button
          className={`copy-btn ${copiedId === 'precise' ? 'copied' : ''}`}
          onClick={() => handleCopy(preciseText, 'precise')}
        >
          <span className="copy-btn-label">
            {copiedId === 'precise' ? (
              <>
                <svg className="copy-tick" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6.5L4.5 9L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Copied
              </>
            ) : 'Copy'}
          </span>
        </button>
      </div>
    </div>
  );
}
