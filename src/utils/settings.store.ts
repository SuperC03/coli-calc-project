import create from 'zustand';
import { Example, examples } from '../examples';

interface SettingsState {
  settings: Example | null;
  setExample: (example: Example) => void;
  clearSettings: () => void;
}

export const useSettings = create<SettingsState>(set => ({
  settings: examples[2],
  setExample: (example: Example) => set({ settings: example }),
  clearSettings: () => set(null),
}));