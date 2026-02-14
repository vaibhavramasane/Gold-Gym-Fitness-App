"use client"

import { motion } from "framer-motion"
import { Dumbbell, Zap, Leaf, Heart, Users, Apple } from "lucide-react"
import { Card } from "@/components/ui/card"
import Link from "next/link"

const programs = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    description: "Build muscle and increase your strength with our comprehensive weight training programs.",
    color: "from-gold to-gold-light",
  },
  {
    icon: Zap,
    title: "CrossFit",
    description: "High-intensity functional fitness combining weightlifting, gymnastics, and cardio.",
    color: "from-gold-light to-gold",
  },
  {
    icon: Leaf,
    title: "Yoga",
    description: "Improve flexibility, balance, and mental clarity with guided yoga sessions.",
    color: "from-gold to-gold-dark",
  },
  {
    icon: Heart,
    title: "Cardio",
    description: "Boost your cardiovascular health with our state-of-the-art cardio equipment.",
    color: "from-gold-light to-gold-dark",
  },
  {
    icon: Users,
    title: "Personal Coaching",
    description: "One-on-one training with certified coaches tailored to your specific goals.",
    color: "from-gold-dark to-gold",
  },
  {
    icon: Apple,
    title: "Nutrition",
    description: "Expert nutrition guidance to complement your training and maximize results.",
    color: "from-gold to-gold-light",
  },
]

export function ProgramsSection() {
  return (
    <section className="py-20 sm:py-32 bg-neutral-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bebas tracking-wider text-white mb-4">
            OUR <span className="text-gold">PROGRAMS</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Choose from our diverse range of fitness programs designed for all levels.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, transition: { duration: 0.3 } }}
              >
                <Card className="bg-neutral-900 border border-gold/20 hover:border-gold/50 p-6 h-full transition-all duration-300 group cursor-pointer hover:shadow-lg hover:shadow-gold/20">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${program.color} p-2.5 mb-4 group-hover:shadow-lg group-hover:shadow-gold/50 transition-all duration-300 group-hover:scale-110`}
                  >
                    <Icon className="w-full h-full text-neutral-900" />
                  </div>
                  <h3 className="text-xl font-bebas tracking-wider text-white mb-2">{program.title}</h3>
                  <p className="text-neutral-400 text-sm mb-4">{program.description}</p>
                  <Link
                    href="/programs"
                    className="inline-flex items-center text-gold hover:text-gold-light transition-colors text-sm font-medium"
                  >
                    Learn More →
                  </Link>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
