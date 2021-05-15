import create from 'zustand';
import { devtools } from 'zustand/middleware';

import { Example, examples } from '../examples';

interface SettingsState {
  settings: Example | null;
  setExample: (example: Example) => void;
  setGraphWidth: (value: number) => void;
  setGraphHeight: (value: number) => void;
  setRectangleCount: (value: number) => void;
  setRightSum: (value: boolean) => void;
  clearSettings: () => void;
}

export const useSettings = create<SettingsState>(devtools<SettingsState>((set, get) => ({
  settings: examples[0],
  setExample: (example: Example) => set({ settings: example }),
  setGraphHeight: (value: number) => set({ settings: { ...get().settings, graphHeight: value }}),
  setGraphWidth: (value: number) => set({ settings: { ...get().settings, graphWidth: value }}),
  setRectangleCount: (value: number) => set({ settings: { ...get().settings, rectangleCount: value }}),
  setRightSum: (value: boolean) => set({ settings: { ...get().settings, rightSum: value }}),
  clearSettings: () => set(null),
})));