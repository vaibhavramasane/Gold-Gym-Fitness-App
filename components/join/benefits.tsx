"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { CheckCircle, Dumbbell, Users, Clock, Zap, Heart, Award } from "lucide-react"

const benefits = [
  {
    icon: Dumbbell,
    title: "State-of-the-Art Equipment",
    description: "Access to premium fitness equipment and facilities",
  }, 
  {
    icon: Users,
    title: "Expert Trainers",
    description: "Certified coaches ready to guide your fitness journey",
  },
  {
    icon: Clock,
    title: "24/7 Access",
    description: "Train whenever it fits your schedule",
  },
  {
    icon: Zap,
    title: "Group Classes",
    description: "Join dynamic group fitness classes daily",
  },
  {
    icon: Heart,
    title: "Nutrition Support",
    description: "Personalized nutrition guidance included",
  },
  {
    icon: Award,
    title: "Progress Tracking",
    description: "Monitor your fitness progress with our app",
  },
]

export function JoinBenefits() {
  return (
    <section className="py-20 sm:py-32 bg-neutral-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bebas tracking-wider text-white mb-8">WHY JOIN GOLDGYM?</h2>

          <div className="space-y-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-neutral-800 border border-gold/20 hover:border-gold/50 p-4 transition-all duration-300 group cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-gold-dark p-2 flex-shrink-0 group-hover:shadow-lg group-hover:shadow-gold/50 transition-all duration-300">
                        <Icon className="w-full h-full text-neutral-900" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bebas tracking-wider text-white mb-1">{benefit.title}</h3>
                        <p className="text-neutral-400 text-sm">{benefit.description}</p>
                      </div>
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 p-6 bg-gold/10 border border-gold/30 rounded-lg"
          >
            <p className="text-neutral-300 text-sm">
              <span className="text-gold font-bebas">SPECIAL OFFER:</span> Sign up this month and get your first month
              at 50% off! Plus, receive a free consultation with one of our expert trainers.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
