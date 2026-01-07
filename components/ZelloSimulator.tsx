"use client"

import type React from "react"

import { useState } from "react"
import { toast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Calculator } from "lucide-react"

export function ZelloSimulator() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    age: "",
    dependents: "",
  })

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: formData.name,
          idade: formData.age,
          email: formData.whatsapp, // WhatsApp no campo email para manter compatibilidade, pode ajustar se quiser campo separado
          numero: formData.whatsapp,
          qtdPessoas: (Number.parseInt(formData.dependents) + 1).toString(),
        }),
      })
      if (res.ok) {
        toast({
          title: "Recebemos sua simulação!",
          description: "Em breve entraremos em contato.",
        })
        setFormData({ name: "", whatsapp: "", age: "", dependents: "" })
      } else {
        toast({
          title: "Erro ao enviar simulação",
          description: "Tente novamente ou fale com um consultor.",
          variant: "destructive",
        })
      }
    } catch {
      toast({
        title: "Erro de conexão",
        description: "Verifique sua internet e tente novamente.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="simulador" className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="mb-4 inline-flex items-center justify-center rounded-full bg-[#3f17cc]/10 p-4">
              <Calculator className="h-8 w-8 text-[#3f17cc]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Simule em menos de 1 minuto.</h2>
            <p className="text-muted-foreground text-lg">
              Preencha os dados abaixo e receba uma cotação personalizada diretamente no seu WhatsApp.
            </p>
          </div>

          <Card className="border-2 shadow-xl animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <CardHeader>
              <CardTitle className="text-2xl">Simulação Gratuita</CardTitle>
              <CardDescription>Sem compromisso. Resposta rápida e personalizada.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Digite seu nome completo"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp">WhatsApp com DDD</Label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    placeholder="(21) 99999-9999"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="age">Idade do Titular</Label>
                    <Input
                      id="age"
                      name="age"
                      type="number"
                      placeholder="Ex: 35"
                      value={formData.age}
                      onChange={handleChange}
                      required
                      min="0"
                      max="120"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dependents">Número de Dependentes</Label>
                    <Input
                      id="dependents"
                      name="dependents"
                      type="number"
                      placeholder="Ex: 2"
                      value={formData.dependents}
                      onChange={handleChange}
                      required
                      min="0"
                      max="20"
                      className="h-12"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#3f17cc] hover:bg-[#3f17cc]/90 text-white text-lg h-14"
                  disabled={loading}
                >
                  {loading ? "Enviando..." : "Enviar e Simular Agora"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Ao clicar em &quot;Enviar e Simular Agora&quot;, você receberá um contato personalizado em breve.
          </p>
        </div>
      </div>
    </section>
  )
}
