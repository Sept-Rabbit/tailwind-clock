import create from "zustand";

export const useStore = create((set) => ({
    displayDelete: (showDelete) =>  set(() => ({
        setShowDelete(!showDelete);
      }))
  }));
  