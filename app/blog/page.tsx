import React from "react";

const posts = [
  {
    slug: "como-escolher-plano-saude",
    title: "Como escolher o melhor plano de saúde?",
    excerpt: "Veja dicas essenciais para escolher o plano ideal para você e sua família.",
    date: "2026-01-07",
  },
  {
    slug: "vantagens-plano-empresarial",
    title: "Vantagens do plano empresarial",
    excerpt: "Descubra por que empresas estão optando por planos coletivos e como isso pode beneficiar seus colaboradores.",
    date: "2026-01-06",
  },
];

export default function BlogPage() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8 text-[#3f17cc]">Blog +Zello</h1>
      <div className="space-y-8">
        {posts.map((post, i) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block bg-white rounded-xl shadow p-6 border border-[#e3e6f0] hover:scale-[1.01] transition-all animate-fade-in-up"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <div className="text-xs text-gray-400 mb-1">{post.date}</div>
            <div className="text-xl font-bold text-[#3f17cc] mb-2">{post.title}</div>
            <div className="text-gray-700">{post.excerpt}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
