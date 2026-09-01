import { create } from "zustand";

export const useData = create ((set) => {
    return {
        reviewData: null,
        setReviewData: (data) => set({ reviewData: data }),
    }
})