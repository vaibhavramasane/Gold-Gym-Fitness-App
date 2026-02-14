"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { CheckCircle, Send } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
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
            <h2 className="text-3xl font-bebas tracking-wider text-white mb-2">SEND US A MESSAGE</h2>
            <p className="text-neutral-400 mb-8">We'll get back to you as soon as possible.</p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-gold mx-auto mb-4" />
                <h3 className="text-2xl font-bebas tracking-wider text-white mb-2">MESSAGE SENT!</h3>
                <p className="text-neutral-400">Thank you for reaching out. We'll contact you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">Full Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-neutral-800 border-neutral-700 text-white placeholder-neutral-500 focus:border-gold focus:ring-gold/50"
                    placeholder="Tejas"
                  />
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
                    className="bg-neutral-800 border-neutral-700 text-white placeholder-neutral-500 focus:border-gold focus:ring-gold/50"
                    placeholder="+977 9*********"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-neutral-800 border border-neutral-700 text-white rounded-md px-4 py-2 focus:border-gold focus:ring-gold/50 transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="programs">Programs Information</option>
                    <option value="trainers">Trainer Consultation</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 rounded-md px-4 py-2 focus:border-gold focus:ring-gold/50 transition-colors resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gold to-gold-light text-neutral-900 font-bebas tracking-wider py-6 text-lg hover:shadow-lg hover:shadow-gold/50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  SEND MESSAGE
                </Button>
              </form>
            )}
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
