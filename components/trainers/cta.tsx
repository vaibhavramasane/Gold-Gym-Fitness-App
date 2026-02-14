"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function TrainersCTA() {
  return (
    <section className="py-20 sm:py-32 bg-neutral-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bebas tracking-wider text-white mb-6">
            READY TO WORK WITH A <span className="text-gold">TRAINER?</span>
          </h2>
          <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
            Our expert trainers are ready to help you achieve your fitness goals. Book a consultation today and start
            your transformation journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              className="bg-gradient-to-r from-gold to-gold-light text-neutral-900 font-bebas tracking-wider px-8 py-6 text-lg hover:shadow-lg hover:shadow-gold/50 transition-all duration-300"
            >
              <Link href="/join">BOOK CONSULTATION</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-2 border-gold text-gold font-bebas tracking-wider px-8 py-6 text-lg hover:bg-gold/10 hover:text-white transition-all duration-300 bg-transparent"
            >
              <Link href="/contact">CONTACT US</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
