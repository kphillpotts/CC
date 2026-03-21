import type { Category } from '../types/units';

const CATEGORY_VERBS: Record<Category, string[]> = {
  weight: [
    'That weighs about as much as',
    'Picture something as heavy as',
    "That's roughly the weight of",
    'Imagine lifting',
  ],
  length: [
    "That's about as long as",
    'Picture lining up',
    "That's roughly the length of",
    'Imagine stretching out',
  ],
  volume: [
    "That's enough to fill",
    "You'd need about",
    "That's roughly the volume of",
    'Imagine pouring out',
  ],
  area: [
    "That's about the size of",
    'Picture a space covering',
    "That's roughly the area of",
    'Imagine spreading across',
  ],
  time: [
    "That's about as long as",
    'Picture waiting through',
    "That's roughly the same as",
    'Imagine sitting through',
  ],
  speed: [
    "That's about as fast as",
    'Picture something moving at',
    "That's roughly the speed of",
    'Imagine racing alongside',
  ],
};

function friendlyNumber(value: number): string {
  const abs = Math.abs(value);

  if (abs < 0.01) return 'a tiny fraction of';
  if (abs < 0.1) return 'about a tenth of';
  if (abs >= 0.1 && abs < 0.18) return 'about an eighth of';
  if (abs >= 0.18 && abs < 0.3) return 'about a quarter of';
  if (abs >= 0.3 && abs < 0.4) return 'about a third of';
  if (abs >= 0.4 && abs < 0.6) return 'about half';
  if (abs >= 0.6 && abs < 0.8) return 'about two-thirds of';
  if (abs >= 0.8 && abs < 0.95) return 'nearly';
  if (abs >= 0.95 && abs < 1.05) return 'about';
  if (abs >= 1.05 && abs < 1.2) return 'just over';
  if (abs >= 1.2 && abs < 1.4) return 'about one and a quarter';
  if (abs >= 1.4 && abs < 1.6) return 'about one and a half';
  if (abs >= 1.6 && abs < 1.85) return 'about one and three-quarter';
  if (abs >= 1.85 && abs < 2.15) return 'about 2';
  if (abs >= 2.15 && abs < 2.6) return 'about two and a half';
  if (abs >= 2.6 && abs < 3.4) return 'about 3';
  if (abs >= 3.4 && abs < 4.6) return 'about 4';
  if (abs >= 4.6 && abs < 5.5) return 'about 5';
  if (abs >= 5.5 && abs < 7.5) return 'roughly 6 or 7';
  if (abs >= 7.5 && abs < 15) return `roughly ${Math.round(abs)}`;
  if (abs >= 15 && abs < 100) return `about ${Math.round(abs / 5) * 5}`;
  if (abs >= 100 && abs < 1000) return `about ${Math.round(abs / 10) * 10}`;
  if (abs >= 1000 && abs < 10_000) return `roughly ${(abs / 1000).toFixed(1).replace(/\.0$/, '')} thousand`;
  if (abs >= 10_000 && abs < 1_000_000) return `about ${Math.round(abs / 1000)} thousand`;
  if (abs >= 1_000_000 && abs < 1_000_000_000) return `about ${(abs / 1_000_000).toFixed(1).replace(/\.0$/, '')} million`;
  return `about ${(abs / 1_000_000_000).toFixed(1).replace(/\.0$/, '')} billion`;
}

function pluralName(name: string, value: number): string {
  const abs = Math.abs(value);
  // Fractions that imply singular-ish ("a quarter of a Banana")
  if (abs < 0.95) return name;
  if (abs >= 0.95 && abs < 1.05) return name;
  // Pluralize
  if (name.endsWith('s') || name.endsWith('x') || name.endsWith('ch') || name.endsWith('sh')) {
    return name + 'es';
  }
  if (name.endsWith('y') && !['a','e','i','o','u'].includes(name[name.length - 2]?.toLowerCase())) {
    return name.slice(0, -1) + 'ies';
  }
  if (name.endsWith('oot')) {
    return name.replace(/oot$/, 'eet');
  }
  return name + 's';
}

export function generateNaturalLanguage(
  value: number,
  unitName: string,
  category: Category,
): string {
  const abs = Math.abs(value);
  const phrases = CATEGORY_VERBS[category];
  // Pick a phrase deterministically based on the value
  const phrase = phrases[Math.abs(Math.round(value * 7)) % phrases.length];

  const friendly = friendlyNumber(abs);
  const needsArticle = abs >= 0.8 && abs < 1.85;
  const isPlural = abs >= 1.85 || (abs >= 0.01 && abs < 0.3);
  const name = isPlural ? pluralName(unitName, abs) : unitName;

  // For fractions like "about a quarter of"
  if (abs < 0.8) {
    return `${phrase} ${friendly} a ${unitName}.`;
  }

  // "about 1" range
  if (needsArticle) {
    const article = /^[aeiou]/i.test(name) ? 'an' : 'a';
    return `${phrase} ${friendly} ${article} ${name}.`;
  }

  // Multiple
  return `${phrase} ${friendly} ${name}.`;
}
