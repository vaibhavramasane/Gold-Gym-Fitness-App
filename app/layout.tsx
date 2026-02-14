import type React from "react"
import type { Metadata } from "next"
import { Bebas_Neue, Inter } from "next/font/google"
import "./globals.css"
import { FloatingCTA } from "@/components/floating-cta"
import { ScrollProgress } from "@/components/scroll-progress"

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "GoldGym - Transform Your Body. Elevate Your Strength.",
  description:
    "Premium fitness brand offering strength training, CrossFit, yoga, cardio, personal coaching, and nutrition programs.",
  openGraph: {
    title: "GoldGym - Premium Fitness Brand",
    description: "Transform your body and elevate your strength with GoldGym.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bebasNeue.variable} ${inter.variable} font-sans bg-background text-foreground`}>
        <ScrollProgress />
        {children}
        <FloatingCTA />
      </body>
    </html>
  )
}
