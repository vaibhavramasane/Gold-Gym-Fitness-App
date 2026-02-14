"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

const plans = [
  {
    name: "Basic",
    price: "$29",
    period: "/month",
    description: "Perfect for getting started",
    features: ["Access to gym facilities", "Basic equipment usage", "Community access", "Mobile app", "Email support"],
    highlighted: false,
  },
  {
    name: "Premium",
    price: "$59",
    period: "/month",
    description: "Most popular choice",
    features: [
      "Everything in Basic",
      "2 personal training sessions/month",
      "Group classes included",
      "Nutrition consultation",
      "Priority support",
      "Locker room access",
    ],
    highlighted: true,
  },
  {
    name: "Elite",
    price: "$99",
    period: "/month",
    description: "For serious athletes",
    features: [
      "Everything in Premium",
      "Unlimited personal training",
      "1-on-1 nutrition coaching",
      "Recovery services",
      "VIP lounge access",
      "24/7 phone support",
      "Custom program design",
    ],
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 sm:py-32 bg-neutral-950 relative overflow-hidden">
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
            MEMBERSHIP <span className="text-gold">PLANS</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your fitness journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -15 }}
              className={plan.highlighted ? "md:scale-105" : ""}
            >
              <Card
                className={`relative h-full p-8 transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-gradient-to-b from-neutral-800 to-neutral-900 border-2 border-gold shadow-2xl shadow-gold/30 hover:shadow-gold/50"
                    : "bg-neutral-900 border border-gold/20 hover:border-gold/50 hover:shadow-lg hover:shadow-gold/20"
                }`}
              >
                {/* Recommended Badge */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-gold to-gold-light text-neutral-900 px-4 py-1 rounded-full text-xs font-bebas tracking-wider">
                      RECOMMENDED
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bebas tracking-wider text-white mb-2">{plan.name}</h3>
                <p className="text-neutral-400 text-sm mb-4">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-bebas text-gold">{plan.price}</span>
                  <span className="text-neutral-400">{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  asChild
                  className={`w-full font-bebas tracking-wider ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-gold to-gold-light text-neutral-900 hover:shadow-lg hover:shadow-gold/50"
                      : "border-2 border-gold text-gold hover:bg-gold/10"
                  }`}
                >
                  <Link href="/join">START TRAINING</Link>
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
