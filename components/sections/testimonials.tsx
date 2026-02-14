"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Card } from "@/components/ui/card"

const testimonials = [
  {
    name: "John Smith",
    role: "Fitness Enthusiast",
    image: "/male-testimonial-portrait.jpg",
    quote: "GoldGym transformed my fitness journey. The trainers are incredibly knowledgeable and supportive.",
    rating: 5,
  },
  {
    name: "Lisa Anderson",
    role: "CrossFit Athlete",
    image: "/female-testimonial-portrait.jpg",
    quote: "The best gym I've ever been to. Amazing community, top-notch equipment, and expert coaching.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Business Professional",
    image: "/asian-male-testimonial-portrait.jpg",
    quote: "Perfect balance of professional training and flexible scheduling. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Yoga Practitioner",
    image: "/female-yoga-testimonial-portrait.jpg",
    quote: "The yoga classes here are exceptional. I've never felt more balanced and centered.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20 sm:py-32 bg-neutral-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bebas tracking-wider text-white mb-4">
            MEMBER <span className="text-gold">TESTIMONIALS</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Hear from our satisfied members about their transformation journey.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100, rotateY: 20 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -100, rotateY: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-neutral-800 border border-gold/20 p-8 sm:p-12 hover:border-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-gold/20">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xl text-neutral-200 mb-8 italic">"{testimonials[current].quote}"</p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[current].image || "/placeholder.svg"}
                    alt={testimonials[current].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gold"
                  />
                  <div>
                    <p className="text-white font-bebas tracking-wider">{testimonials[current].name}</p>
                    <p className="text-gold text-sm">{testimonials[current].role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-lg bg-neutral-800 border border-gold/20 hover:border-gold hover:bg-gold/10 flex items-center justify-center text-gold transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-gold w-8" : "bg-neutral-600 hover:bg-neutral-500"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-lg bg-neutral-800 border border-gold/20 hover:border-gold hover:bg-gold/10 flex items-center justify-center text-gold transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
