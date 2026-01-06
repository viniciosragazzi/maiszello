'use client'
import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "5599999999999"; // Substitua pelo número real

export default function ModalSimulacao() {
  const [open, setOpen] = useState(false);
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");

  useEffect(() => {
    setOpen(true);
  }, []);

  function handleSimular() {
    if (!nome.trim() || !numero.trim()) return;
    const msg = encodeURIComponent(
      `Olá! Quero simular meu plano de saúde.\nNome: ${nome}\nTelefone: ${numero}`
    );
    if (typeof window !== "undefined") {
      window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
    }
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm mx-2 relative">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
          onClick={() => setOpen(false)}
          aria-label="Fechar"
        >
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-xl font-bold mb-2 text-[#3f17cc] text-center">Simule seu plano em segundos!</h2>
        <p className="text-gray-600 text-center mb-4">Preencha seus dados e receba a simulação direto no WhatsApp.</p>
        <form
          className="space-y-3"
          onSubmit={e => {
            e.preventDefault();
            handleSimular();
          }}
        >
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3f17cc]"
            placeholder="Seu nome"
            value={nome}
            onChange={e => setNome(e.target.value)}
            required
            autoFocus
          />
          <input
            type="tel"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3f17cc]"
            placeholder="Seu número de WhatsApp"
            value={numero}
            onChange={e => setNumero(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-[#3f17cc] text-white py-2 rounded-lg font-semibold hover:bg-[#2a128a] transition-all mt-2"
          >
            Simular agora
          </button>
        </form>
      </div>
    </div>
  );
}
