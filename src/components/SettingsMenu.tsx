import { useState, useRef, useEffect } from 'react';
import './SettingsMenu.css';

interface Props {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export function SettingsMenu({ theme, onToggleTheme, soundEnabled, onToggleSound }: Props) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="settings-menu" ref={menuRef}>
      <button
        className="settings-trigger"
        onClick={() => setOpen(!open)}
        title="Settings"
        aria-label="Settings"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2 4H14M2 8H14M2 12H14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
      </button>

      <div className={`settings-dropdown ${open ? 'open' : ''}`}>
        <button className="settings-item" onClick={onToggleTheme}>
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="settings-item-icon">
            {theme === 'dark' ? (
              <path
                d="M8 1.5V2.5M8 13.5V14.5M1.5 8H2.5M13.5 8H14.5M3.4 3.4L4.1 4.1M11.9 11.9L12.6 12.6M3.4 12.6L4.1 11.9M11.9 4.1L12.6 3.4M11 8A3 3 0 1 1 5 8A3 3 0 0 1 11 8Z"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M14 9.5A6.5 6.5 0 0 1 6.5 2C6.5 1.65 6.53 1.31 6.58 1A7 7 0 1 0 15 9.42C14.69 9.47 14.35 9.5 14 9.5Z"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
          <span>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
        </button>

        <button className="settings-item" onClick={onToggleSound}>
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="settings-item-icon">
            {soundEnabled ? (
              <>
                <path d="M2 5.5H4L8 2V14L4 10.5H2C1.45 10.5 1 10.05 1 9.5V6.5C1 5.95 1.45 5.5 2 5.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11 4.5C12.1 5.6 12.7 7 12.7 8.5C12.7 10 12.1 11.4 11 12.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </>
            ) : (
              <>
                <path d="M2 5.5H4L8 2V14L4 10.5H2C1.45 10.5 1 10.05 1 9.5V6.5C1 5.95 1.45 5.5 2 5.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11 6L14 10M14 6L11 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </>
            )}
          </svg>
          <span>{soundEnabled ? 'Mute sounds' : 'Enable sounds'}</span>
        </button>
      </div>
    </div>
  );
}
