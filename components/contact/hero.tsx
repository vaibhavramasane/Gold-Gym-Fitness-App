"use client"

import { motion } from "framer-motion"

export function ContactHero() {
  return (
    <section className="relative w-full min-h-[40vh] bg-neutral-900 overflow-hidden pt-16 flex items-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/contact-bgg.jpg)",
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
            GET IN <span className="text-gold">TOUCH</span>
          </h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Contact us today and let's start your fitness journey.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
