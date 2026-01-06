import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, Heart, Zap } from "lucide-react"
import Image from "next/image"

export function ZelloHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="animate-fade-in-up">
            <div className="mb-6 flex gap-4">
              <div className="rounded-full bg-[#3f17cc]/10 p-3">
                <Shield className="h-6 w-6 text-[#3f17cc]" />
              </div>
              <div className="rounded-full bg-[#3f17cc]/10 p-3">
                <Heart className="h-6 w-6 text-[#3f17cc]" />
              </div>
              <div className="rounded-full bg-[#3f17cc]/10 p-3">
                <Zap className="h-6 w-6 text-[#3f17cc]" />
              </div>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
              Proteção que vai além. <span className="text-[#3f17cc]">Planos de saúde sob medida</span> para você e sua
              empresa.
            </h1>

            <p className="mb-10 text-lg text-muted-foreground text-pretty md:text-xl">
              Na +Zello, conectamos você às melhores operadoras do mercado com consultoria gratuita e agilidade.
              Encontre o equilíbrio perfeito entre custo e benefício.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#3f17cc] hover:bg-[#3f17cc]/90 text-white text-lg px-8 py-6">
                <Link href="#simulador">Quero uma Simulação Gratuita</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-[#3f17cc] text-[#3f17cc] hover:bg-[#3f17cc]/10 bg-transparent"
              >
                <Link href="#parceiros">Conhecer Planos</Link>
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in-up animation-delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/familia.png"
                alt="Família feliz protegida pelo plano de saúde +Zello"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -z-10 -bottom-6 -right-6 h-full w-full rounded-2xl bg-[#3f17cc]/20" />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#3f17cc]/5 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#3f17cc]/5 blur-3xl" />
    </section>
  )
}
