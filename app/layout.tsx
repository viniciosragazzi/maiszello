import type React from "react"
import type { Metadata } from "next"
import { Figtree, Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import ChatWidget from "../components/ChatWidget"
import GlobalModalSimulacao from "../components/GlobalModalSimulacao"
import CookieBanner from "../components/CookieBanner"
import AccessibilityClientEffect from "../components/AccessibilityClientEffect"
import DarkModeToggle from "../components/DarkModeToggle"

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["400", "500", "600"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "+Zello - Planos de Saúde | Consultoria Gratuita",
  description:
    "Conectamos você às melhores operadoras do mercado com consultoria gratuita e agilidade. Encontre o equilíbrio perfeito entre custo e benefício em planos de saúde.",
  generator: "v0.app",
  icons: {
    icon: "/icon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const siteUrl = "https://www.maiszello.com";
  const title = "+Zello - Planos de Saúde | Consultoria Gratuita";
  const description = "Conectamos você às melhores operadoras do mercado com consultoria gratuita e agilidade. Encontre o equilíbrio perfeito entre custo e benefício em planos de saúde.";
  const image = siteUrl + "/images/og-image.png";
  return (
    <html lang="pt-BR">
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={siteUrl} />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={image} />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        {/* Dados estruturados Organization */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "+Zello",
          "url": siteUrl,
          "logo": siteUrl + "/icon.svg",
          "contactPoint": [{
            "@type": "ContactPoint",
            "telephone": "+55-21-99999-9999",
            "contactType": "customer service",
            "areaServed": "BR",
            "availableLanguage": ["Portuguese", "English"]
          }],
          "sameAs": [
            "https://www.instagram.com/maiszello/"
          ]
        }) }} />
      </head>
      <body className={`${inter.variable} ${figtree.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <GlobalModalSimulacao />
        <ChatWidget />
        <CookieBanner />
        <DarkModeToggle />
        <Analytics />
        <AccessibilityClientEffect />
      </body>
    </html>
  )
}
