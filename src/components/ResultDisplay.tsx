import { useState, useEffect, useRef } from 'react';
import type { Unit } from '../types/units';
import { formatResult } from '../data/convert';
import { generateNaturalLanguage, pluralName } from '../data/naturalLanguage';
import { shareConversion } from '../utils/shareCard';
import './ResultDisplay.css';

interface Props {
  value: number;
  inputValue: number;
  fromUnit: Unit;
  toUnit: Unit;
  onCopy?: () => void;
}

export function ResultDisplay({ value, inputValue, fromUnit, toUnit, onCopy }: Props) {
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
  const fromName = inputValue === 1 ? fromUnit.name : pluralName(fromUnit.name, inputValue);
  const toName = value === 1 ? toUnit.name : pluralName(toUnit.name, value);

  const preciseText = `${formattedInput} ${fromName} = ${formattedResult} ${toName}`;
  const naturalText = generateNaturalLanguage(value, inputValue, fromUnit.name, toUnit.name, fromUnit.category);

  const [sharing, setSharing] = useState(false);

  const handleCopy = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedId(id);
    onCopy?.();
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleShare = async () => {
    setSharing(true);
    try {
      await shareConversion({
        preciseText,
        naturalText,
        category: fromUnit.category,
      });
    } catch {
      // User cancelled share or it failed — ignore
    }
    setSharing(false);
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

      <button className="share-btn" onClick={handleShare} disabled={sharing}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M4.5 8L9.5 5.5M4.5 6L9.5 8.5M5 7A2 2 0 1 1 1 7A2 2 0 0 1 5 7ZM13 4A2 2 0 1 1 9 4A2 2 0 0 1 13 4ZM13 10A2 2 0 1 1 9 10A2 2 0 0 1 13 10Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {sharing ? 'Creating...' : 'Share as image'}
      </button>
    </div>
  );
}
