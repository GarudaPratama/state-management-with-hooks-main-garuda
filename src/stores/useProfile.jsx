import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useProfile = create(
  persist(
    (set) => ({
      name: "Budi Santoso",
      email: "budi@example.com",
      role: "Frontend Developer",
      bio: "Suka ngoding React dan Tailwind.",
      isActive: true,
      setProfile: (newProfile) => set((state) => ({ ...state, ...newProfile })),
    }),
    { name: "profile-storage" }
  )
);