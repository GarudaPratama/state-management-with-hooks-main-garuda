import React from 'react';
import { useReview } from '../context/ReviewContext';

export default function Navbar() {
  const { state } = useReview();

  return (
    <nav className="bg-emerald-500 text-white px-6 py-4 rounded-2xl shadow-lg mb-8 flex justify-between items-center">
      <div className="flex items-center gap-2">
        
        <h1 className="text-lg font-bold tracking-wide">AdzReview</h1>
      </div>
      <div className="bg-indigo-700/60 px-4 py-1.5 rounded-full text-sm backdrop-blur-sm border border-indigo-400/30">
        Pengulas: <span className="font-semibold text-emerald-300">{state.userName || 'Anonim'}</span>
      </div>
    </nav>
  );
}