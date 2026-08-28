import React from 'react';
import { ReviewProvider } from './context/ReviewContext';
import Navbar from './components/Navbar';
import ReviewForm from './components/ReviewForm';
import ReviewCard from './components/ReviewCard';

export default function App() {
  return (
    <ReviewProvider>
      <div className="min-h-screen bg-slate-100 py-10 px-4">
        <div className="max-w-md mx-auto">
          <Navbar />
          <ReviewForm />
          <ReviewCard />
        </div>
      </div>
    </ReviewProvider>
  );
}