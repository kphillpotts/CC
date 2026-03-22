import './SoundToggle.css';

interface Props {
  enabled: boolean;
  onToggle: () => void;
}

export function SoundToggle({ enabled, onToggle }: Props) {
  return (
    <button
      className="sound-toggle"
      onClick={onToggle}
      title={enabled ? 'Mute sounds' : 'Enable sounds'}
      aria-label={enabled ? 'Mute sounds' : 'Enable sounds'}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="sound-icon">
        {enabled ? (
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
    </button>
  );
}
