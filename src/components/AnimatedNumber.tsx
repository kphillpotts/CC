import { useEffect, useRef, useState } from 'react';
import { formatResult } from '../data/convert';

interface Props {
  value: number;
  duration?: number;
}

export function AnimatedNumber({ value, duration = 400 }: Props) {
  const [display, setDisplay] = useState(formatResult(value));
  const rafRef = useRef<number>(0);
  const startRef = useRef<number>(0);
  const fromRef = useRef<number>(value);

  useEffect(() => {
    const from = fromRef.current;
    const to = value;

    // Skip animation if going to/from zero or same value
    if (from === to) {
      setDisplay(formatResult(to));
      return;
    }

    const startTime = performance.now();
    startRef.current = startTime;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);

      const current = from + (to - from) * eased;
      setDisplay(formatResult(current));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        fromRef.current = to;
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      fromRef.current = from + (value - from) * Math.min((performance.now() - startTime) / duration, 1);
    };
  }, [value, duration]);

  return <>{display}</>;
}
