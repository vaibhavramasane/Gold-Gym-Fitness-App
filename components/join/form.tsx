"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export function JoinForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    plan: "premium",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ firstName: "", lastName: "", email: "", phone: "", plan: "premium" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section className="py-20 sm:py-32 bg-neutral-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <Card className="bg-neutral-900 border border-gold/20 p-8 sm:p-12">
            <h2 className="text-3xl font-bebas tracking-wider text-white mb-2">MEMBERSHIP SIGNUP</h2>
            <p className="text-neutral-400 mb-8">Fill out the form below to get started with GoldGym.</p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-gold mx-auto mb-4" />
                <h3 className="text-2xl font-bebas tracking-wider text-white mb-2">SUCCESS!</h3>
                <p className="text-neutral-400">
                  Thank you for signing up! We'll contact you shortly to confirm your membership.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">First Name</label>
                    <Input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="bg-neutral-800 border-neutral-700 text-white placeholder-neutral-500 focus:border-gold focus:ring-gold/50"
                      placeholder="Tejas"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">Last Name</label>
                    <Input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="bg-neutral-800 border-neutral-700 text-white placeholder-neutral-500 focus:border-gold focus:ring-gold/50"
                      placeholder="sha"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">Email Address</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-neutral-800 border-neutral-700 text-white placeholder-neutral-500 focus:border-gold focus:ring-gold/50"
                    placeholder="tejas@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">Phone Number</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-neutral-800 border-neutral-700 text-white placeholder-neutral-500 focus:border-gold focus:ring-gold/50"
                    placeholder="+977 9*********"
                  />
                </div>

                {/* Plan Selection */}
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">Select Plan</label>
                  <select
                    name="plan"
                    value={formData.plan}
                    onChange={handleChange}
                    className="w-full bg-neutral-800 border border-neutral-700 text-white rounded-md px-4 py-2 focus:border-gold focus:ring-gold/50 transition-colors"
                  >
                    <option value="basic">Basic - $29/month</option>
                    <option value="premium">Premium - $59/month</option>
                    <option value="elite">Elite - $99/month</option>
                  </select>
                </div>

                {/* Terms */}
                <div className="flex items-start gap-3 py-4">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="mt-1 w-4 h-4 rounded border-neutral-700 bg-neutral-800 text-gold focus:ring-gold/50"
                  />
                  <label htmlFor="terms" className="text-sm text-neutral-400">
                    I agree to the Terms of Service and Privacy Policy
                  </label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gold to-gold-light text-neutral-900 font-bebas tracking-wider py-6 text-lg hover:shadow-lg hover:shadow-gold/50 transition-all duration-300"
                >
                  JOIN NOW
                </Button>

                <p className="text-xs text-neutral-500 text-center">No credit card required. Cancel anytime.</p>
              </form>
            )}
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
