import create from "zustand";

export const useStore = create((set) => ({
  showDelete: false,
  toggleShowDelete: () =>
    set((state) => ({
      showDelete: !state.showDelete,
    })),
}));
