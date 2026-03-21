import { Converter } from './components/Converter';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Curious Converter</h1>
        <p className="app-subtitle">
          Convert between normal units and absolutely ridiculous ones
        </p>
      </header>

      <main>
        <Converter />
      </main>

      <footer className="app-footer">
        <p>Made with curiosity and questionable math</p>
      </footer>
    </div>
  );
}

export default App;
