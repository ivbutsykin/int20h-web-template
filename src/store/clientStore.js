import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { STORE_NAME } from "../constants/store";

const useClientStore = create(
  persist(
    (set) => ({
      themeMode: "dark",
      toggleThemeMode: () => {
        set((state) => ({
          themeMode: state.themeMode === "dark" ? "light" : "dark",
        }));
      },
    }),
    {
      name: STORE_NAME,
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useClientStore;
