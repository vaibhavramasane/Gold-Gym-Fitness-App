"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Instagram, Linkedin } from "lucide-react"

const trainers = [
  {
    name: "Alex Johnson",
    specialty: "Strength & Conditioning",
    image: "/male-fitness-trainer-portrait.jpg",
    bio: "10+ years of experience in competitive bodybuilding and strength training.",
  },
  {
    name: "Sarah Williams",
    specialty: "CrossFit & HIIT",
    image: "/female-fitness-trainer-portrait.png",
    bio: "Certified CrossFit Level 2 coach with a passion for functional fitness.",
  },
  {
    name: "Marcus Chen",
    specialty: "Yoga & Flexibility",
    image: "/male-yoga-instructor-portrait.jpg",
    bio: "Certified yoga instructor specializing in power yoga and flexibility training.",
  },
  {
    name: "Emma Rodriguez",
    specialty: "Nutrition & Wellness",
    image: "/female-nutritionist-portrait.png",
    bio: "Registered dietitian with expertise in sports nutrition and meal planning.",
  },
]

export function TrainersSection() {
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
            MEET OUR <span className="text-gold">TRAINERS</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Expert coaches dedicated to your fitness journey and personal growth.
          </p>
        </motion.div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -15 }}
            >
              <Card className="bg-neutral-800 border border-gold/20 hover:border-gold/50 overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-gold/20">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={trainer.image || "/placeholder.svg"}
                    alt={trainer.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-bebas tracking-wider text-white mb-1">{trainer.name}</h3>
                  <p className="text-gold text-sm font-medium mb-3">{trainer.specialty}</p>
                  <p className="text-neutral-400 text-xs mb-4 line-clamp-2">{trainer.bio}</p>

                  {/* Social Icons */}
                  <div className="flex gap-2">
                    <a
                      href="#"
                      className="w-8 h-8 rounded bg-neutral-700 hover:bg-gold hover:text-neutral-900 flex items-center justify-center transition-all duration-300 text-gold"
                    >
                      <Instagram size={16} />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded bg-neutral-700 hover:bg-gold hover:text-neutral-900 flex items-center justify-center transition-all duration-300 text-gold"
                    >
                      <Linkedin size={16} />
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
