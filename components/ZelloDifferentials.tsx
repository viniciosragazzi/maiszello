import { Users, Clock, Building2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ZelloDifferentials() {
  const differentials = [
    {
      icon: Users,
      title: "Consultoria Especializada",
      description: "Não vendemos apenas planos, entregamos a solução ideal para o seu perfil e bolso.",
    },
    {
      icon: Clock,
      title: "Atendimento Ágil",
      description: "Esqueça a burocracia. Nosso time resolve tudo para você, do contrato à utilização.",
    },
    {
      icon: Building2,
      title: "Variedade",
      description: "Opções completas para MEI, empresas de todos os tamanhos e planos familiares.",
    },
  ]

  return (
    <section id="diferenciais" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Por que a <span className="text-[#3f17cc]">+Zello</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nossa missão é simplificar o acesso à saúde de qualidade com transparência e agilidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {differentials.map((item, index) => (
            <Card
              key={index}
              className="border-2 hover:border-[#3f17cc]/50 transition-all hover:shadow-lg group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-[#3f17cc]/10 p-4 group-hover:bg-[#3f17cc]/20 transition-colors">
                  <item.icon className="h-8 w-8 text-[#3f17cc]" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-pretty">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
