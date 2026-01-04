import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function ZelloFooter() {
  return (
    <footer className="bg-muted/30 border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <Image src="/images/2.png" alt="+Zello - Planos de Saúde" width={160} height={53} className="h-10 w-auto" />
            <p className="text-sm text-muted-foreground text-pretty">
              A +Zello nasceu para simplificar o acesso à saúde de qualidade. Localizados no Rio de Janeiro, atendemos
              com a transparência e a seriedade que a sua segurança exige.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#parceiros"
                  className="text-sm text-muted-foreground hover:text-[#3f17cc] transition-colors"
                >
                  Parceiros
                </Link>
              </li>
              <li>
                <Link
                  href="#diferenciais"
                  className="text-sm text-muted-foreground hover:text-[#3f17cc] transition-colors"
                >
                  Diferenciais
                </Link>
              </li>
              <li>
                <Link
                  href="#simulador"
                  className="text-sm text-muted-foreground hover:text-[#3f17cc] transition-colors"
                >
                  Simulador
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-[#3f17cc]" />
                <a href="mailto:contato@maiszello.com" className="hover:text-[#3f17cc] transition-colors">
                  contato@maiszello.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-[#3f17cc]" />
                <a
                  href="https://wa.me/5521972999798"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#3f17cc] transition-colors"
                >
                  (21) 97299-9798
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-[#3f17cc]" />
                <span>Rio de Janeiro, RJ</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} +Zello - Planos de Saúde. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            <Link href="https://maiszello.com" target="_blank" className="hover:text-[#3f17cc] transition-colors">
              maiszello.com
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
