'use client'
import { useState } from "react";

const WHATSAPP_NUMBER = "5521972999798"; // Substitua pelo número real

interface ModalSimulacaoProps {
  open: boolean;
  onClose: () => void;
}

export default function ModalSimulacao({ open, onClose }: ModalSimulacaoProps) {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [email, setEmail] = useState("");
  const [numero, setNumero] = useState("");
  const [qtdPessoas, setQtdPessoas] = useState("");
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>("idle");
  const [error, setError] = useState("");

  async function handleSimular() {
    if (!nome.trim() || !numero.trim() || !idade.trim() || !email.trim() || !qtdPessoas.trim()) return;
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, idade, email, numero, qtdPessoas }),
      });
      if (res.ok) {
        setStatus("success");
        setNome("");
        setIdade("");
        setEmail("");
        setNumero("");
        setQtdPessoas("");
        setTimeout(() => {
          setStatus("idle");
          onClose();
        }, 2000);
      } else {
        const data = await res.json();
        setError(data.error || "Erro ao enviar");
        setStatus("error");
      }
    } catch {
      setError("Erro de conexão");
      setStatus("error");
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm mx-2 relative">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
          onClick={onClose}
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
            type="number"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3f17cc]"
            placeholder="Sua idade"
            value={idade}
            onChange={e => setIdade(e.target.value)}
            required
            min="0"
          />
          <input
            type="email"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3f17cc]"
            placeholder="Seu email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3f17cc]"
            placeholder="Seu número de WhatsApp"
            value={numero}
            onChange={e => setNumero(e.target.value)}
            required
          />
          <input
            type="number"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3f17cc]"
            placeholder="Quantidade de pessoas"
            value={qtdPessoas}
            onChange={e => setQtdPessoas(e.target.value)}
            required
            min="1"
          />
          <button
            type="submit"
            className="w-full bg-[#3f17cc] text-white py-2 rounded-lg font-semibold hover:bg-[#2a128a] transition-all mt-2"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Enviando...' : 'Simular agora'}
          </button>
          {status === 'success' && (
            <p className="text-green-600 text-center">Lead enviado com sucesso!</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 text-center">{error}</p>
          )}
        </form>
      </div>
    </div>
  );
}
