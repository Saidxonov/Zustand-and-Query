import { create } from "zustand";

const useCounterStore = create((set) => ({
  counter: 0,
  increment: () => {
    set((state) => {
      return { counter: state.counter + 1 };
    });
  },
  decrement: () => {
    set((state) => {
      return { counter: state.counter - 1 };
    });
  },
}));

export { useCounterStore };
