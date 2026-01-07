
import React from "react";

const testimonials = [
  {
    name: "Ana Souza",
    role: "Empresária",
    text: "A +Zello me ajudou a encontrar o melhor plano para minha família. Atendimento rápido e transparente!",
    avatar: "/images/Ana.jpg",
  },
  {
    name: "Carlos Lima",
    role: "Autônomo",
    text: "Fiquei surpreso com a agilidade e o suporte. Recomendo para todos que buscam economia e segurança.",
    avatar: "/images/Carlos.png",
  },
  {
    name: "Juliana Alves",
    role: "RH de empresa",
    text: "Conseguimos um plano empresarial com ótimas condições. O consultor foi super atencioso!",
    avatar: "/images/Juliana.png",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f6f7fb]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#3f17cc]">O que dizem nossos clientes</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-[#e3e6f0] hover:scale-[1.03] transition-all animate-fade-in-up" style={{ animationDelay: `${i * 120}ms` }}>
              <img src={t.avatar} alt={t.name} className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-[#3f17cc]/10" />
              <p className="text-lg text-gray-700 mb-4">“{t.text}”</p>
              <div className="font-bold text-[#3f17cc]">{t.name}</div>
              <div className="text-sm text-gray-500">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
