import { createContext, useReducer, useState } from 'react';

const ReviewContext = createContext(null);

function reviewReducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value,
        isSuccess: false,
        isError: false,
      };
    case 'SUCCESS':
      return {
        ...state,
        isSuccess: true,
        isError: false,
        name: '',
        review: '',
      };
    case 'ERROR':
      return {
        ...state,
        isSuccess: false,
        isError: true,
      };
    default:
      return state;
  }
}

function ReviewProvider({ children }) {
  const [reviewData, setReviewData] = useState(null);
  const [username, setUsername] = useState('');
  const [state, dispatch] = useReducer(reviewReducer, {
    name: '',
    review: '',
    isSuccess: false,
    isError: false,
  });

  return (
    <ReviewContext.Provider
      value={{
        state,
        dispatch,
        username,
        setUsername,
        reviewData,
        setReviewData,
      }}>
      {children}
    </ReviewContext.Provider>
  );
}

export { ReviewContext, ReviewProvider };
