export type Category = 'weight' | 'length' | 'volume' | 'area' | 'time' | 'speed' | 'data';

export interface Unit {
  id: string;
  name: string;
  emoji: string;
  category: Category;
  /** Value of 1 of this unit in base SI units (kg, m, L, m², s, m/s, bytes) */
  baseUnitValue: number;
  isCustom: boolean;
  description?: string;
}

export const CATEGORY_INFO: Record<Category, { label: string; emoji: string; baseUnit: string }> = {
  weight: { label: 'Weight', emoji: '⚖️', baseUnit: 'kg' },
  length: { label: 'Length', emoji: '📏', baseUnit: 'm' },
  volume: { label: 'Volume', emoji: '🧪', baseUnit: 'L' },
  area: { label: 'Area', emoji: '📐', baseUnit: 'm²' },
  time: { label: 'Time', emoji: '⏰', baseUnit: 's' },
  speed: { label: 'Speed', emoji: '💨', baseUnit: 'm/s' },
  data: { label: 'Data', emoji: '💾', baseUnit: 'bytes' },
};
