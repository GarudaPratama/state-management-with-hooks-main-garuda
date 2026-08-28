import React from 'react';
import { useReview } from '../context/ReviewContext';

export default function ReviewCard() {
  const { state } = useReview();

  return (
    <div className="space-y-4">
      <h3 className="text-base font-bold text-slate-800 flex items-center justify-between">
        <span>Daftar Kartu Ulasan ({state.reviews.length})</span>
        {state.userName && (
          <span className="text-xs font-normal text-slate-500">
            Ketikan Nama: <strong className="text-indigo-600">{state.userName}</strong>
          </span>
        )}
      </h3>

     
      {state.reviews.length === 0 ? (
        <div className="bg-white border border-dashed border-slate-300 p-6 rounded-2xl text-center text-slate-400 text-sm">
          Belum ada ulasan yang dikirim. Tulis ulasanmu di atas!
        </div>
      ) : (
        
        state.reviews.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-600 font-bold flex items-center justify-center text-sm">
                  {item.userName.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm leading-none">
                    {item.userName}
                  </h4>
                  <span className="text-[10px] text-slate-400">Pengulas Terverifikasi</span>
                </div>
              </div>
              <span className="text-xs text-slate-400">{item.date}</span>
            </div>
            
            <p className="text-slate-600 text-[11px] leading-relaxed mb-4">
              <span>Mengulas: </span><span className='text-blue-500'>{item.item}</span>
            </p>

            <p className="text-slate-600 text-sm leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
              "{item.comment}"
            </p>
          </div>
        ))
      )}
    </div>
  );
}