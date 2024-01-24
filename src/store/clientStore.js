import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { STORAGE_NAME } from "../constants/storage";

export const useClientStore = create(
  persist(
    (set, get) => ({
      count: 0,
      increase: () => set(() => ({ count: get().count + 1 })),
      decrease: () => set(() => ({ count: get().count - 1 })),
    }),
    {
      name: STORAGE_NAME,
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
