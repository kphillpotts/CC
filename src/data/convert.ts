import type { Unit } from '../types/units';

export function convert(value: number, from: Unit, to: Unit): number {
  if (from.category !== to.category) {
    throw new Error(`Cannot convert between ${from.category} and ${to.category}`);
  }
  const baseValue = value * from.baseUnitValue;
  return baseValue / to.baseUnitValue;
}

export function formatResult(value: number): string {
  if (value === 0) return '0';
  const abs = Math.abs(value);
  if (abs >= 1_000_000_000) return value.toLocaleString(undefined, { maximumFractionDigits: 0 });
  if (abs >= 1_000_000) return value.toLocaleString(undefined, { maximumFractionDigits: 0 });
  if (abs >= 100) return value.toLocaleString(undefined, { maximumFractionDigits: 1 });
  if (abs >= 1) return value.toLocaleString(undefined, { maximumFractionDigits: 2 });
  if (abs >= 0.001) return value.toLocaleString(undefined, { maximumFractionDigits: 6 });
  if (abs >= 0.0000001) return value.toLocaleString(undefined, { maximumFractionDigits: 10 });
  return value.toFixed(20).replace(/0+$/, '').replace(/\.$/, '.0');
}
