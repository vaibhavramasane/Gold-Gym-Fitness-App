"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["Imadol, Lalitpur", "Kathmandu, Nepal"], 
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+977 9876543210", "+977 9876543210"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@goldgym.com", "support@goldgym.com"],
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon - Fri: 6am - 10pm", "Sat - Sun: 8am - 8pm"],
  },
]

export function ContactInfo() {
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
          <h2 className="text-3xl font-bebas tracking-wider text-white mb-8">CONTACT INFORMATION</h2>

          <div className="space-y-4 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-neutral-800 border border-gold/20 hover:border-gold/50 p-4 transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-gold-dark p-2 flex-shrink-0 group-hover:shadow-lg group-hover:shadow-gold/50 transition-all duration-300">
                        <Icon className="w-full h-full text-neutral-900" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bebas tracking-wider text-white mb-1">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-neutral-400 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-8 rounded-lg overflow-hidden border border-gold/20 h-64"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d25547.770347644466!2d85.33123926698853!3d27.65960100639379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1762261332926!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bebas tracking-wider text-white mb-4">FOLLOW US</h3>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-lg bg-neutral-800 hover:bg-gold hover:text-neutral-900 flex items-center justify-center transition-all duration-300 text-gold hover:shadow-lg hover:shadow-gold/50"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
