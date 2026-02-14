"use client"

import { motion } from "framer-motion"

export function ProgramsHero() {
  return (
    <section className="relative w-full min-h-screen bg-neutral-900 overflow-hidden pt-16 flex items-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/programs.jpg)",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/70 via-neutral-900/50 to-neutral-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bebas tracking-wider text-white mb-6">
            OUR <span className="text-gold">PROGRAMS</span>
          </h1>
          <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto">
            Discover our comprehensive range of fitness programs designed to help you achieve your goals, no matter your
            fitness level or experience.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
