'use client';

import React, { useState } from 'react';
import ModalSimulacao from '../../components/ModalSimulacao';

export default function LinksPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleConsultorClick = () => {
    window.open('https://wa.me/5521972999798', '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#3f17cc] p-6">
      <div className="w-full max-w-md bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 flex flex-col gap-7 border border-white/30 relative animate-fade-in">
        <div className="flex flex-col items-center gap-2 mb-2">
          <img src="/images/1.png" alt="Logo" className="w-16 h-16 rounded-full shadow-lg border-4 border-white/40 bg-white object-contain" />
          <h1 className="text-3xl font-extrabold text-white drop-shadow text-center tracking-tight">Links Rápidos</h1>
        </div>
        <button
          className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-green-400 to-green-600 text-white font-bold text-lg shadow-lg hover:scale-[1.03] hover:from-green-500 hover:to-green-700 transition-all duration-200"
          onClick={handleConsultorClick}
        >
          <span className="inline-flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12c0 4.97 4.03 9 9 9 .93 0 1.84-.14 2.7-.41.41-.13.86-.03 1.17.27l2.1 2.1a.75.75 0 0 0 1.28-.53v-3.1c0-.28.16-.53.41-.64A8.963 8.963 0 0 0 21.75 12c0-4.97-4.03-9-9-9s-9 4.03-9 9Z" />
            </svg>
            Falar com Consultor
          </span>
        </button>
        <button
          className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold text-lg shadow-lg hover:scale-[1.03] hover:from-blue-600 hover:to-blue-900 transition-all duration-200"
          onClick={() => setModalOpen(true)}
        >
          <span className="inline-flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            Simulação Online
          </span>
        </button>
        <button
          className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-gray-300 to-gray-400 text-gray-600 font-bold text-lg shadow cursor-not-allowed opacity-70"
          disabled
        >
          <span className="inline-flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            Tabela de Preços
          </span>
        </button>
      </div>
      <ModalSimulacao open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
