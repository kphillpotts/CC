import { useCallback, useState } from 'react';

type SoundName = 'swap' | 'surprise' | 'copy' | 'click';

let audioCtx: AudioContext | null = null;

function getCtx(): AudioContext {
  if (!audioCtx) audioCtx = new AudioContext();
  return audioCtx;
}

function playTone(frequency: number, duration: number, type: OscillatorType = 'sine', volume = 0.08) {
  const ctx = getCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(frequency, ctx.currentTime);
  gain.gain.setValueAtTime(volume, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + duration);
}

const sounds: Record<SoundName, () => void> = {
  swap: () => {
    playTone(520, 0.08, 'sine', 0.06);
    setTimeout(() => playTone(680, 0.1, 'sine', 0.06), 60);
  },
  surprise: () => {
    playTone(400, 0.07, 'sine', 0.05);
    setTimeout(() => playTone(530, 0.07, 'sine', 0.05), 50);
    setTimeout(() => playTone(700, 0.12, 'sine', 0.06), 100);
  },
  copy: () => {
    playTone(800, 0.06, 'sine', 0.05);
    setTimeout(() => playTone(1000, 0.08, 'sine', 0.04), 50);
  },
  click: () => {
    playTone(600, 0.04, 'triangle', 0.04);
  },
};

function getStoredSoundPref(): boolean {
  try {
    const stored = localStorage.getItem('curious-converter-sound');
    if (stored === 'false') return false;
  } catch {
    // ignore
  }
  return true;
}

export function useSounds() {
  const [enabled, setEnabled] = useState(getStoredSoundPref);

  const toggle = useCallback(() => {
    setEnabled((prev) => {
      const next = !prev;
      localStorage.setItem('curious-converter-sound', String(next));
      return next;
    });
  }, []);

  const play = useCallback((name: SoundName) => {
    if (!enabled) return;
    try {
      sounds[name]();
    } catch {
      // Web Audio not supported — fail silently
    }
  }, [enabled]);

  return { soundEnabled: enabled, toggleSound: toggle, play };
}
