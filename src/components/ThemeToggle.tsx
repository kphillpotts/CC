import './ThemeToggle.css';

interface Props {
  theme: 'light' | 'dark';
  onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: Props) {
  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="theme-icon">
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
    </button>
  );
}
