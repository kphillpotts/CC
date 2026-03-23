import type { Category } from '../types/units';

// Each phrase takes the form: "{fromDescription} is {phrase} {toDescription}."
const CATEGORY_PHRASES: Record<Category, string[]> = {
  weight: [
    'weighs about the same as',
    'is roughly the weight of',
    'is about as heavy as',
  ],
  length: [
    'is about the same length as',
    'is roughly as long as',
    'stretches to about',
  ],
  volume: [
    'is roughly the same volume as',
    'would fill about',
    'is about as much as',
  ],
  area: [
    'covers about the same area as',
    'is roughly the size of',
    'would take up about',
  ],
  time: [
    'lasts about as long as',
    'is roughly the same as',
    'is about the same duration as',
  ],
  speed: [
    'is about as fast as',
    'moves at roughly the same speed as',
    'is roughly the pace of',
  ],
  data: [
    'is about the same amount of data as',
    'takes up roughly as much space as',
    'is about the same size as',
  ],
};

// Returns just the number description — no hedging words like "about" or "roughly".
// Those are already in the category phrases.
function friendlyNumber(value: number): string {
  const abs = Math.abs(value);

  if (abs < 0.01) return 'a tiny fraction of';
  if (abs < 0.1) return 'a tenth of';
  if (abs >= 0.1 && abs < 0.18) return 'an eighth of';
  if (abs >= 0.18 && abs < 0.3) return 'a quarter of';
  if (abs >= 0.3 && abs < 0.4) return 'a third of';
  if (abs >= 0.4 && abs < 0.6) return 'half';
  if (abs >= 0.6 && abs < 0.8) return 'two-thirds of';
  if (abs >= 0.8 && abs < 0.95) return 'nearly';
  if (abs >= 0.95 && abs < 1.05) return '';
  if (abs >= 1.05 && abs < 1.2) return 'just over';
  if (abs >= 1.2 && abs < 1.4) return 'one and a quarter';
  if (abs >= 1.4 && abs < 1.6) return 'one and a half';
  if (abs >= 1.6 && abs < 1.85) return 'one and three-quarter';
  if (abs >= 1.85 && abs < 2.15) return '2';
  if (abs >= 2.15 && abs < 2.6) return 'two and a half';
  if (abs >= 2.6 && abs < 3.4) return '3';
  if (abs >= 3.4 && abs < 4.6) return '4';
  if (abs >= 4.6 && abs < 5.5) return '5';
  if (abs >= 5.5 && abs < 7.5) return '6 or 7';
  if (abs >= 7.5 && abs < 15) return `${Math.round(abs)}`;
  if (abs >= 15 && abs < 100) return `${Math.round(abs / 5) * 5}`;
  if (abs >= 100 && abs < 1000) return `${Math.round(abs / 10) * 10}`;
  if (abs >= 1000 && abs < 10_000) return `${(abs / 1000).toFixed(1).replace(/\.0$/, '')} thousand`;
  if (abs >= 10_000 && abs < 1_000_000) return `${Math.round(abs / 1000)} thousand`;
  if (abs >= 1_000_000 && abs < 1_000_000_000) return `${(abs / 1_000_000).toFixed(1).replace(/\.0$/, '')} million`;
  return `${(abs / 1_000_000_000).toFixed(1).replace(/\.0$/, '')} billion`;
}

export function pluralName(name: string, value: number): string {
  const abs = Math.abs(value);
  // Fractions and ~1 stay singular
  if (abs < 0.95) return name;
  if (abs >= 0.95 && abs < 1.05) return name;

  // Handle parenthetical suffixes: "Megabyte (MB)" → "Megabytes (MB)"
  const parenMatch = name.match(/^(.+?)(\s*\(.*\))$/);
  if (parenMatch) {
    return pluralizeWord(parenMatch[1]) + parenMatch[2];
  }

  return pluralizeWord(name);
}

function pluralizeWord(word: string): string {
  if (word.endsWith('oot')) {
    return word.replace(/oot$/, 'eet');
  }
  if (word.endsWith('s') || word.endsWith('x') || word.endsWith('ch') || word.endsWith('sh')) {
    return word + 'es';
  }
  if (word.endsWith('y') && !['a','e','i','o','u'].includes(word[word.length - 2]?.toLowerCase())) {
    return word.slice(0, -1) + 'ies';
  }
  return word + 's';
}

function formatFromDescription(inputValue: number, fromName: string): string {
  const fromPlural = inputValue !== 1;
  const name = fromPlural ? pluralName(fromName, inputValue) : fromName;
  if (inputValue === 1) {
    const article = /^[aeiou]/i.test(name) ? 'An' : 'A';
    return `${article} ${name}`;
  }
  return `${inputValue.toLocaleString()} ${name}`;
}

function formatToDescription(value: number, toName: string): string {
  const abs = Math.abs(value);
  const friendly = friendlyNumber(abs);
  const needsArticle = abs >= 0.8 && abs < 1.85;
  const isPlural = abs >= 1.85 || (abs >= 0.01 && abs < 0.3);
  const name = isPlural ? pluralName(toName, abs) : toName;

  // Fractions: "a quarter of a Banana"
  if (abs < 0.8) {
    const article = /^[aeiou]/i.test(toName) ? 'an' : 'a';
    return `${friendly} ${article} ${toName}`;
  }

  // ~1 range: friendly is empty, just use article + name
  if (friendly === '') {
    const article = /^[aeiou]/i.test(name) ? 'an' : 'a';
    return `${article} ${name}`;
  }

  // Near 1: "nearly a Kilogram", "just over a Kilogram"
  if (needsArticle) {
    const article = /^[aeiou]/i.test(name) ? 'an' : 'a';
    return `${friendly} ${article} ${name}`;
  }

  // Multiple: "1,000 Paper Clips"
  return `${friendly} ${name}`;
}

export function generateNaturalLanguage(
  value: number,
  inputValue: number,
  fromName: string,
  toName: string,
  category: Category,
): string {
  const phrases = CATEGORY_PHRASES[category];
  const phrase = phrases[Math.abs(Math.round(value * 7)) % phrases.length];

  const from = formatFromDescription(inputValue, fromName);
  const to = formatToDescription(value, toName);

  return `${from} ${phrase} ${to}.`;
}
