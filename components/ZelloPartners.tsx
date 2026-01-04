"use client"

import Image from "next/image"

export function ZelloPartners() {
  const partners = [
    { name: "Unimed", placeholder: "unimed" },
    { name: "Porto Seguro", placeholder: "porto-seguro" },
    { name: "Bradesco Saúde", placeholder: "bradesco" },
    { name: "Amil", placeholder: "amil" },
    { name: "SulAmérica", placeholder: "sulamerica" },
  ]

  return (
    <section id="parceiros" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            As melhores operadoras do Brasil estão aqui.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trabalhamos com as principais operadoras para garantir a melhor cobertura para você.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 rounded-lg bg-background border border-border hover:border-[#3f17cc]/50 transition-all hover:shadow-lg group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative w-32 h-16 grayscale group-hover:grayscale-0 transition-all">
                <Image
                  src={`/.jpg?height=80&width=160&query=${partner.placeholder}-logo`}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
