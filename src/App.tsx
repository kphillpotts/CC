import { Converter } from './components/Converter';
import { SettingsMenu } from './components/SettingsMenu';
import { useTheme } from './hooks/useTheme';
import { useSounds } from './hooks/useSounds';
import './App.css';

function App() {
  const { theme, toggle } = useTheme();
  const { soundEnabled, toggleSound, play } = useSounds();

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Curious Converter</h1>
        <p className="app-subtitle">
          Convert between normal units and absolutely ridiculous ones
        </p>
      </header>

      <main>
        <Converter playSound={play} />
      </main>

      <footer className="app-footer">
        <p>Made with curiosity and questionable math</p>
      </footer>

      <SettingsMenu
        theme={theme}
        onToggleTheme={toggle}
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
      />
    </div>
  );
}

export default App;
