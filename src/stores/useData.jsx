import { create } from "zustand";

export const useData = create ((set) => {
    return {
        reviewData: null,
        name: '',
        review: '',
        isSuccess: false,
        isError: false,

        actions: {
            setReviewData: (newReviewData) => set({ reviewData: newReviewData }),
            setName: (newName) => set({ name: newName }),
            setReview: (newReview) => set({ review: newReview }),
            setIsSuccess: (newIsSuccess) => set({ isSuccess: newIsSuccess }),
            setIsError: (newIsError) => set({ isError: newIsError }),
        }
        
    }
})