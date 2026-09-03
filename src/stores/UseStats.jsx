import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStats = create(
  persist(
    (set) => ({
      totalProjects: 12,
      completedTasks: 48,
      points: 1250,
      setStats: (newStats) => set((state) => ({ ...state, ...newStats })),
    }),
    { name: "stats-storage" }
  )
);