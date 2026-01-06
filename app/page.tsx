import { ZelloNavbar } from "@/components/ZelloNavbar"
import { ZelloHero } from "@/components/ZelloHero"
import { ZelloPartners } from "@/components/ZelloPartners"
import { ZelloDifferentials } from "@/components/ZelloDifferentials"
import { ZelloSimulator } from "@/components/ZelloSimulator"
import { ZelloFooter } from "@/components/ZelloFooter"
import ValuesCards from "@/components/ValuesCards"

export default function Page() {
  return (
    <>
      <ZelloNavbar />
      <ZelloHero />
      <ZelloPartners />
      <ValuesCards />
      <ZelloDifferentials />
      <ZelloSimulator />
      <ZelloFooter />
    </>
  )
}
