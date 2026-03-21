import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem('curious-converter-theme');
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    // ignore
  }
  return null;
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => getStoredTheme() ?? getSystemTheme());

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('curious-converter-theme', theme);
  }, [theme]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => {
      if (!getStoredTheme()) {
        setTheme(mq.matches ? 'dark' : 'light');
      }
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return { theme, toggle };
}
