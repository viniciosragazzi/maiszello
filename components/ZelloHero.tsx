import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, Heart, Zap } from "lucide-react"

export function ZelloHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center animate-fade-in-up">
          <div className="mb-6 flex justify-center gap-4">
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

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl">
            Proteção que vai além. <span className="text-[#3f17cc]">Planos de saúde sob medida</span> para você e sua
            empresa.
          </h1>

          <p className="mb-10 text-lg text-muted-foreground text-pretty md:text-xl max-w-3xl mx-auto">
            Na +Zello, conectamos você às melhores operadoras do mercado com consultoria gratuita e agilidade. Encontre
            o equilíbrio perfeito entre custo e benefício.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#3f17cc]/5 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#3f17cc]/5 blur-3xl" />
    </section>
  )
}
