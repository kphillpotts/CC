import type { Unit } from '../types/units';

export const BUILT_IN_UNITS: Unit[] = [
  // ── Weight ──────────────────────────────────────────
  { id: 'kg', name: 'Kilogram', emoji: '⚖️', category: 'weight', baseUnitValue: 1, isCustom: false },
  { id: 'lb', name: 'Pound', emoji: '🏋️', category: 'weight', baseUnitValue: 0.453592, isCustom: false },
  { id: 'elephant', name: 'African Elephant', emoji: '🐘', category: 'weight', baseUnitValue: 6000, isCustom: false, description: '~6,000 kg' },
  { id: 'bluewhale-w', name: 'Blue Whale', emoji: '🐋', category: 'weight', baseUnitValue: 150000, isCustom: false, description: '~150,000 kg' },
  { id: 'jumbojet', name: 'Boeing 747 (loaded)', emoji: '✈️', category: 'weight', baseUnitValue: 412775, isCustom: false, description: '~412,775 kg' },
  { id: 'housecat', name: 'House Cat', emoji: '🐱', category: 'weight', baseUnitValue: 4.5, isCustom: false, description: '~4.5 kg' },
  { id: 'golden-retriever', name: 'Golden Retriever', emoji: '🐕', category: 'weight', baseUnitValue: 30, isCustom: false, description: '~30 kg' },
  { id: 'bowling-ball', name: 'Bowling Ball', emoji: '🎳', category: 'weight', baseUnitValue: 6.35, isCustom: false, description: '~6.35 kg' },
  { id: 'grand-piano', name: 'Grand Piano', emoji: '🎹', category: 'weight', baseUnitValue: 480, isCustom: false, description: '~480 kg' },
  { id: 'tonne', name: 'Metric Tonne', emoji: '🏗️', category: 'weight', baseUnitValue: 1000, isCustom: false },

  // ── Length ──────────────────────────────────────────
  { id: 'm', name: 'Metre', emoji: '📏', category: 'length', baseUnitValue: 1, isCustom: false },
  { id: 'ft', name: 'Foot', emoji: '🦶', category: 'length', baseUnitValue: 0.3048, isCustom: false },
  { id: 'banana', name: 'Banana', emoji: '🍌', category: 'length', baseUnitValue: 0.178, isCustom: false, description: '~17.8 cm' },
  { id: 'bluewhale-l', name: 'Blue Whale', emoji: '🐋', category: 'length', baseUnitValue: 30, isCustom: false, description: '~30 m' },
  { id: 'giraffe', name: 'Giraffe (height)', emoji: '🦒', category: 'length', baseUnitValue: 5.5, isCustom: false, description: '~5.5 m' },
  { id: 'schoolbus', name: 'School Bus', emoji: '🚌', category: 'length', baseUnitValue: 10.67, isCustom: false, description: '~10.67 m' },
  { id: 'eiffel', name: 'Eiffel Tower', emoji: '🗼', category: 'length', baseUnitValue: 330, isCustom: false, description: '~330 m' },
  { id: 'football-field', name: 'Football Field', emoji: '🏈', category: 'length', baseUnitValue: 91.44, isCustom: false, description: '~91.44 m (100 yards)' },
  { id: 'km', name: 'Kilometre', emoji: '🛣️', category: 'length', baseUnitValue: 1000, isCustom: false },
  { id: 'mile', name: 'Mile', emoji: '🏃', category: 'length', baseUnitValue: 1609.34, isCustom: false },

  // ── Volume ─────────────────────────────────────────
  { id: 'litre', name: 'Litre', emoji: '🧪', category: 'volume', baseUnitValue: 1, isCustom: false },
  { id: 'gallon', name: 'US Gallon', emoji: '🪣', category: 'volume', baseUnitValue: 3.78541, isCustom: false },
  { id: 'bathtub', name: 'Bathtub', emoji: '🛁', category: 'volume', baseUnitValue: 300, isCustom: false, description: '~300 L' },
  { id: 'swimming-pool', name: 'Olympic Swimming Pool', emoji: '🏊', category: 'volume', baseUnitValue: 2500000, isCustom: false, description: '~2,500,000 L' },
  { id: 'teaspoon', name: 'Teaspoon', emoji: '🥄', category: 'volume', baseUnitValue: 0.00492892, isCustom: false },
  { id: 'soda-can', name: 'Soda Can', emoji: '🥫', category: 'volume', baseUnitValue: 0.355, isCustom: false, description: '~355 mL' },
  { id: 'coffee-mug', name: 'Coffee Mug', emoji: '☕', category: 'volume', baseUnitValue: 0.35, isCustom: false, description: '~350 mL' },

  // ── Area ───────────────────────────────────────────
  { id: 'sqm', name: 'Square Metre', emoji: '📐', category: 'area', baseUnitValue: 1, isCustom: false },
  { id: 'sqft', name: 'Square Foot', emoji: '🏠', category: 'area', baseUnitValue: 0.092903, isCustom: false },
  { id: 'tennis-court', name: 'Tennis Court', emoji: '🎾', category: 'area', baseUnitValue: 260.87, isCustom: false, description: '~260.87 m²' },
  { id: 'football-pitch', name: 'Football Pitch', emoji: '⚽', category: 'area', baseUnitValue: 7140, isCustom: false, description: '~7,140 m²' },
  { id: 'nyc-block', name: 'NYC City Block', emoji: '🏙️', category: 'area', baseUnitValue: 20234, isCustom: false, description: '~20,234 m²' },
  { id: 'acre', name: 'Acre', emoji: '🌾', category: 'area', baseUnitValue: 4046.86, isCustom: false },

  // ── Time ───────────────────────────────────────────
  { id: 'second', name: 'Second', emoji: '⏱️', category: 'time', baseUnitValue: 1, isCustom: false },
  { id: 'minute', name: 'Minute', emoji: '⏰', category: 'time', baseUnitValue: 60, isCustom: false },
  { id: 'hour', name: 'Hour', emoji: '🕐', category: 'time', baseUnitValue: 3600, isCustom: false },
  { id: 'microwave-minute', name: 'Microwave Minute', emoji: '📡', category: 'time', baseUnitValue: 60, isCustom: false, description: 'Feels like an eternity' },
  { id: 'dog-year', name: 'Dog Year', emoji: '🐶', category: 'time', baseUnitValue: 220752000, isCustom: false, description: '~7 human years' },
  { id: 'nap', name: 'Power Nap', emoji: '😴', category: 'time', baseUnitValue: 1200, isCustom: false, description: '~20 minutes' },
  { id: 'movie', name: 'Average Movie', emoji: '🎬', category: 'time', baseUnitValue: 7200, isCustom: false, description: '~2 hours' },
  { id: 'day', name: 'Day', emoji: '📅', category: 'time', baseUnitValue: 86400, isCustom: false },

  // ── Speed ──────────────────────────────────────────
  { id: 'ms', name: 'Metres/second', emoji: '💨', category: 'speed', baseUnitValue: 1, isCustom: false },
  { id: 'kmh', name: 'km/h', emoji: '🚗', category: 'speed', baseUnitValue: 0.277778, isCustom: false },
  { id: 'mph', name: 'mph', emoji: '🏎️', category: 'speed', baseUnitValue: 0.44704, isCustom: false },
  { id: 'sloth', name: 'Sloth Top Speed', emoji: '🦥', category: 'speed', baseUnitValue: 0.03, isCustom: false, description: '~0.03 m/s' },
  { id: 'cheetah', name: 'Cheetah Top Speed', emoji: '🐆', category: 'speed', baseUnitValue: 33.33, isCustom: false, description: '~120 km/h' },
  { id: 'usain-bolt', name: 'Usain Bolt Top Speed', emoji: '🏃‍♂️', category: 'speed', baseUnitValue: 12.27, isCustom: false, description: '~44.17 km/h' },
  { id: 'snail', name: 'Garden Snail', emoji: '🐌', category: 'speed', baseUnitValue: 0.001, isCustom: false, description: '~0.001 m/s' },
  { id: 'speed-of-sound', name: 'Speed of Sound', emoji: '💥', category: 'speed', baseUnitValue: 343, isCustom: false, description: '~343 m/s' },
];
