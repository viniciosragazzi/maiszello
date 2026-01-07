import React from "react";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#3f17cc]/10 to-white p-8">
      <h1 className="text-6xl font-extrabold text-[#3f17cc] mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-2">Página não encontrada</h2>
      <p className="text-gray-600 mb-6">A página que você procura não existe ou foi movida.</p>
      <a href="/" className="bg-[#3f17cc] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2a128a] transition-all">Voltar para a Home</a>
    </section>
  );
}
