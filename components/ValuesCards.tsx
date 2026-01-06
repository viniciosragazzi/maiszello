'use client'
import Image from "next/image";
import React from "react";

const WHATSAPP_NUMBER = "5521972999798"; // Substitua pelo número real

function sendToWhatsApp(tipo: string) {
  const msg = encodeURIComponent(
    `Olá! Quero simular um plano de saúde do tipo: ${tipo}.`
  );
  if (typeof window !== "undefined") {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  }
}

export default function ValuesCards() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#f6f7fb] to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-balance text-[#3f17cc]">Valores a partir de</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Card Adesão */}
          <div className="bg-white rounded-3xl shadow-2xl border-2 border-[#e3e6f0] flex flex-col items-center p-10 transition-all hover:scale-[1.03] min-h-[420px]">
            <div className="w-full h-36 bg-gray-100 rounded-xl mb-6 flex items-center justify-center">
     <Image src="/images/familia-card.png" alt="Camera Icon" width={800} height={400} />
            </div>
            <div className="text-center flex-1 flex flex-col justify-between">
              <span className="text-base font-semibold text-[#3f17cc] uppercase tracking-wider">Planos de Adesão</span>
              <div className="my-3 text-5xl md:text-6xl font-extrabold text-[#3f17cc] drop-shadow-sm">R$ 99,90</div>
              <div className="text-gray-500 text-lg mb-4">a partir de</div>
              <ul className="text-gray-700 text-base mb-6 space-y-1">
                <li>✔ Cobertura nacional</li>
                <li>✔ Diversas operadoras</li>
                <li>✔ Redução de Carência </li>

              </ul>
              <button
                className="w-full bg-[#3f17cc] text-white py-3 rounded-lg font-bold text-lg hover:bg-[#2a128a] transition-all shadow-md mt-auto"
                onClick={() => sendToWhatsApp("Adesão")}
              >
                Fazer simulação
              </button>
            </div>
          </div>
          {/* Card Empresarial */}
          <div className="bg-white rounded-3xl shadow-2xl border-2 border-[#e3e6f0] flex flex-col items-center p-10 transition-all hover:scale-[1.03] min-h-[420px]">
            <div className="w-full h-36 bg-gray-100 rounded  rounded-xl mb-6 flex items-center justify-center">
                <Image src="/images/empresarial-card.png" alt="Camera Icon" width={800} height={400} />

            </div>
            <div className="text-center flex-1 flex flex-col justify-between">
              <span className="text-base font-semibold text-[#3f17cc] uppercase tracking-wider">Planos Empresariais</span>
              <div className="my-3 text-5xl md:text-6xl font-extrabold text-[#3f17cc] drop-shadow-sm">R$ 69,90</div>
              <div className="text-gray-500 text-lg mb-4">a partir de</div>
              <ul className="text-gray-700 text-base mb-6 space-y-1">
                <li>✔ A partir de 2 vidas</li>
                <li>✔ Cobertura nacional</li>
                <li>✔ Condições especiais para empresas</li>
                <li>✔ Redução de Carência </li>
              </ul>
              <button
                className="w-full bg-[#3f17cc] text-white py-3 rounded-lg font-bold text-lg hover:bg-[#2a128a] transition-all shadow-md mt-auto"
                onClick={() => sendToWhatsApp("Empresarial")}
              >
                Fazer simulação
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
