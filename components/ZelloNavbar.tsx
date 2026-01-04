import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ZelloNavbar() {
  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/images/1.png" alt="+Zello - Planos de Saúde" width={180} height={60} className="h-12 w-auto" />
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="#parceiros" className="text-sm font-medium hover:text-[#3f17cc] transition-colors">
              Parceiros
            </Link>
            <Link href="#diferenciais" className="text-sm font-medium hover:text-[#3f17cc] transition-colors">
              Diferenciais
            </Link>
            <Link href="#simulador" className="text-sm font-medium hover:text-[#3f17cc] transition-colors">
              Simulador
            </Link>
            <Button asChild className="bg-[#3f17cc] hover:bg-[#3f17cc]/90 text-white">
              <Link href="https://wa.me/5521972999798?text=Olá%20%2BZello%2C%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações">
                Falar no WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
