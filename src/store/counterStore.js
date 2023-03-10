import { create } from 'zustand';

export const useCounterStore = create((set) => ({
  count: 1,
  increment: (newCount) => set(state => ({
    count: state.count + newCount,
  })),
}));
