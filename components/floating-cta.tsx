"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Link from "next/link"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 500
      setIsScrolled(scrolled)
      if (scrolled && !isVisible) {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isVisible])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-8 right-8 z-40 flex gap-2"
        >
          <Button
            asChild
            className="bg-gradient-to-r from-gold to-gold-light text-neutral-900 font-bebas tracking-wider shadow-lg shadow-gold/50 hover:shadow-xl hover:shadow-gold/60 transition-all duration-300"
          >
            <Link href="/join">JOIN NOW</Link>
          </Button>
          <button
            onClick={() => setIsVisible(false)}
            className="w-12 h-12 rounded-lg bg-neutral-800 border border-gold/20 hover:border-gold hover:bg-gold/10 flex items-center justify-center text-gold transition-all duration-300"
          >
            <X size={20} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
