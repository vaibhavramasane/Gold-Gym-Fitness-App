"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative w-full h-screen bg-neutral-900 overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/bgg.jpg)",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/60 via-neutral-900/40 to-neutral-900/80" />
      </div>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x / 50,
          y: mousePosition.y / 50,
        }}
        transition={{ type: "spring", damping: 30 }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bebas tracking-wider text-white mb-6 leading-tight"
          >
            Transform Your Body.
            <br />
            <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
              Elevate Your Strength.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-neutral-300 mb-8 max-w-2xl mx-auto"
          >
            Join GoldGym and experience premium fitness training with world-class trainers, state-of-the-art facilities,
            and personalized coaching programs.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              className="bg-gradient-to-r from-gold to-gold-light text-neutral-900 font-bebas tracking-wider px-8 py-6 text-lg hover:shadow-lg hover:shadow-gold/50 transition-all duration-300"
            >
              <Link href="/join">JOIN NOW</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-2 border-gold text-gold font-bebas tracking-wider px-8 py-6 text-lg hover:bg-gold/10 transition-all duration-300 bg-transparent"
            >
              <Link href="/programs">VIEW PROGRAMS</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <ChevronDown className="text-gold" size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
