import React from 'react';
import { useReview } from '../context/ReviewContext';

export default function ReviewForm() {
  const { state, dispatch } = useReview();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (state.comment.trim().length < 5) {
      dispatch({
        type: 'SUBMIT_ERROR',
        payload: 'Komentar terlalu pendek! Minimal 5 karakter.',
      });
      return;
    }

    dispatch({ type: 'SUBMIT_START' });

    setTimeout(() => {
      dispatch({ type: 'SUBMIT_SUCCESS' });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm mb-8">
      <h2 className="text-lg font-bold text-slate-800 mb-4">Tulis Ulasan</h2>

      <div className="mb-4">
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
          Nama Pengulas
        </label>
        <input
          type="text"
          value={state.userName}
          onChange={(e) => dispatch({ type: 'SET_USER_NAME', payload: e.target.value })}
          placeholder="Masukkan nama Anda..."
          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition"
        />
      </div>

      <div className="mb-4">
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
          Nama Barang
        </label>
        <input
          type="text"
          value={state.item}
          onChange={(e) => dispatch({ type: 'SET_ITEM', payload: e.target.value })}
          placeholder="Masukkan barang yang anda ulas..."
          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition"
        />
      </div>


      <div className="mb-4">
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
          Ulasan Komentar
        </label>
        <textarea
          rows="3"
          value={state.comment}
          onChange={(e) => dispatch({ type: 'SET_COMMENT', payload: e.target.value })}
          placeholder="Tulis ulasan minimal 5 karakter..."
          disabled={state.isLoading}
          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>

      
      {state.error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600 font-medium flex items-center gap-2">
          <span>⚠️</span> {state.error}
        </div>
      )}

      
      {state.isSuccess && (
        <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-700 font-medium flex items-center gap-2">
          <span>✅</span> Review berhasil!
        </div>
      )}

      
      <button
        type="submit"
        disabled={state.isLoading}
        className="w-full bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold py-3 px-4 rounded-xl text-sm transition shadow-md shadow-indigo-200 disabled:opacity-60 disabled:cursor-not-allowed flex justify-center items-center gap-2"
      >
        {state.isLoading ? (
          <>
            <span className="animate-spin">⏳</span>
            <span>Sedang Mengirim...</span>
          </>
        ) : (
          'Kirim Ulasan'
        )}
      </button>
    </form>
  );
}