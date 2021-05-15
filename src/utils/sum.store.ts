import create from 'zustand';

interface SumState {
  value: number;
  setSum: (value: number) => void;
}

export const useSum = create<SumState>((set) => ({
  value: 0,
  setSum: (value: number) => set({ value }),
}));