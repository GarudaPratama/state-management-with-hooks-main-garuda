import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
  userName: '',
  item: '',
  comment: '',
  error: '',
  isLoading: false,
  isSuccess: false,
  reviews: [], 
};

function reviewReducer(state, action) {
  switch (action.type) {
    case 'SET_USER_NAME':
      return { ...state, userName: action.payload };
    case 'SET_ITEM':
        return {...state, item: action.payload};
    case 'SET_COMMENT':
      return { ...state, comment: action.payload };
    case 'SUBMIT_START':
      return { ...state, isLoading: true, error: '', isSuccess: false };
    case 'SUBMIT_SUCCESS':
      const newReview = {
        id: Date.now(),
        userName: state.userName.trim() || 'Anonim',
        item: state.item.trim(),
        comment: state.comment.trim(),
        date: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
      };
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        error: '',
        comment: '', 
        item: '',
        reviews: [newReview, ...state.reviews], 
      };
    case 'SUBMIT_ERROR':
      return { ...state, isLoading: false, isSuccess: false, error: action.payload };
    default:
      return state;
  }
}

const ReviewContext = createContext();

export function ReviewProvider({ children }) {
  const [state, dispatch] = useReducer(reviewReducer, initialState);

  return (
    <ReviewContext.Provider value={{ state, dispatch }}>
      {children}
    </ReviewContext.Provider>
  );
}

export function useReview() {
  return useContext(ReviewContext);
}