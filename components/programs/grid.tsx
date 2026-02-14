"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Dumbbell, Zap, Leaf, Heart, Users, Apple } from "lucide-react"

const programDetails = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    description: "Build muscle and increase your strength with our comprehensive weight training programs.",
    details: [
      "Progressive overload training",
      "Personalized workout plans",
      "Form correction and technique",
      "Nutrition guidance included",
    ],
    duration: "12 weeks",
    level: "All Levels",
  },
  {
    icon: Zap,
    title: "CrossFit",
    description: "High-intensity functional fitness combining weightlifting, gymnastics, and cardio.",
    details: [
      "Functional movement training",
      "Group classes available",
      "Competition preparation",
      "Scaling options for all levels",
    ],
    duration: "Ongoing",
    level: "Intermediate+",
  },
  {
    icon: Leaf,
    title: "Yoga",
    description: "Improve flexibility, balance, and mental clarity with guided yoga sessions.",
    details: [
      "Vinyasa flow classes",
      "Restorative yoga sessions",
      "Meditation and breathing",
      "Flexibility enhancement",
    ],
    duration: "Ongoing",
    level: "All Levels",
  },
  {
    icon: Heart,
    title: "Cardio",
    description: "Boost your cardiovascular health with our state-of-the-art cardio equipment.",
    details: ["HIIT training programs", "Endurance building", "Heart rate zone training", "Equipment variety"],
    duration: "8 weeks",
    level: "All Levels",
  },
  {
    icon: Users,
    title: "Personal Coaching",
    description: "One-on-one training with certified coaches tailored to your specific goals.",
    details: ["Custom program design", "Weekly progress tracking", "Goal-oriented training", "Flexible scheduling"],
    duration: "Flexible",
    level: "All Levels",
  },
  {
    icon: Apple,
    title: "Nutrition",
    description: "Expert nutrition guidance to complement your training and maximize results.",
    details: ["Personalized meal plans", "Macro tracking guidance", "Supplement recommendations", "Lifestyle coaching"],
    duration: "Ongoing",
    level: "All Levels",
  },
]

export function ProgramsGrid() {
  return (
    <section className="py-20 sm:py-32 bg-neutral-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programDetails.map((program, index) => {
            const Icon = program.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-neutral-900 border border-gold/20 hover:border-gold/50 p-6 h-full transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold to-gold-dark p-2.5 mb-4 group-hover:shadow-lg group-hover:shadow-gold/50 transition-all duration-300">
                    <Icon className="w-full h-full text-neutral-900" />
                  </div>

                  <h3 className="text-2xl font-bebas tracking-wider text-white mb-2">{program.title}</h3>
                  <p className="text-neutral-400 text-sm mb-4">{program.description}</p>

                  {/* Details */}
                  <ul className="space-y-2 mb-6">
                    {program.details.map((detail, i) => (
                      <li key={i} className="text-neutral-300 text-sm flex items-start gap-2">
                        <span className="text-gold mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Meta */}
                  <div className="flex justify-between items-center pt-4 border-t border-gold/20">
                    <div>
                      <p className="text-xs text-neutral-500">Duration</p>
                      <p className="text-sm font-medium text-gold">{program.duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-neutral-500">Level</p>
                      <p className="text-sm font-medium text-gold">{program.level}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
