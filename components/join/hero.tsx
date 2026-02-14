"use client"

import { motion } from "framer-motion"

export function JoinHero() {
  return (
    <section className="relative w-full min-h-[40vh] bg-neutral-900 overflow-hidden pt-16 flex items-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/placeholder.svg?height=600&width=1920&query=fitness+community+gym+members)",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/70 via-neutral-900/50 to-neutral-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bebas tracking-wider text-white mb-4">
            JOIN <span className="text-gold">GOLDGYM</span> TODAY
          </h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Start your transformation journey with premium fitness training and expert coaching.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
