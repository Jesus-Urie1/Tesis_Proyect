import create from "zustand";

const useClasesStore = create((set) => ({
  clases: [],
  setClases: (payload) => set({ clases: payload }),
}));

export default useClasesStore;
