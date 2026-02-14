"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Instagram, Linkedin, Mail } from "lucide-react"

const trainersData = [
  {
    name: "Alex Johnson",
    specialty: "Strength & Conditioning",
    image: "/male-fitness-trainer-portrait.jpg",
    bio: "10+ years of experience in competitive bodybuilding and strength training. Certified NASM-CPT and specializes in progressive overload training.",
    certifications: ["NASM-CPT", "ISSA-CFT", "Precision Nutrition"],
    experience: "15 years",
    clients: "200+",
  },
  {
    name: "Sarah Williams",
    specialty: "CrossFit & HIIT",
    image: "/female-fitness-trainer-portrait.png",
    bio: "Certified CrossFit Level 2 coach with a passion for functional fitness. Former competitive athlete with expertise in high-intensity training.",
    certifications: ["CrossFit L2", "NASM-CPT", "ISSN-SNS"],
    experience: "12 years",
    clients: "180+",
  },
  {
    name: "Marcus Chen",
    specialty: "Yoga & Flexibility",
    image: "/male-yoga-instructor-portrait.jpg",
    bio: "Certified yoga instructor specializing in power yoga and flexibility training. Combines traditional yoga with modern fitness science.",
    certifications: ["RYT-500", "Yoga Alliance", "Mobility Specialist"],
    experience: "10 years",
    clients: "150+",
  },
  {
    name: "Emma Rodriguez",
    specialty: "Nutrition & Wellness",
    image: "/female-nutritionist-portrait.png",
    bio: "Registered dietitian with expertise in sports nutrition and meal planning. Helps clients optimize their diet for maximum performance.",
    certifications: ["RD", "ISSN-SNS", "Precision Nutrition"],
    experience: "8 years",
    clients: "120+",
  },
  {
    name: "James Mitchell",
    specialty: "Cardio & Endurance",
    image: "/male-cardio-trainer.jpg",
    bio: "Marathon runner and certified endurance coach. Specializes in building cardiovascular fitness and training for endurance events.",
    certifications: ["NASM-CPT", "ISSA-CFT", "Running Coach"],
    experience: "11 years",
    clients: "160+",
  },
  {
    name: "Lisa Thompson",
    specialty: "Rehabilitation & Recovery",
    image: "/female-physical-therapist.jpg",
    bio: "Licensed physical therapist with expertise in injury prevention and rehabilitation. Helps clients recover safely and return to training.",
    certifications: ["PT", "NASM-CPT", "Corrective Exercise"],
    experience: "13 years",
    clients: "140+",
  },
]

export function TrainersGrid() {
  return (
    <section className="py-20 sm:py-32 bg-neutral-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainersData.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-neutral-900 border border-gold/20 hover:border-gold/50 overflow-hidden h-full transition-all duration-300 group">
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={trainer.image || "/placeholder.svg"}
                    alt={trainer.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bebas tracking-wider text-white mb-1">{trainer.name}</h3>
                  <p className="text-gold text-sm font-medium mb-3">{trainer.specialty}</p>
                  <p className="text-neutral-400 text-sm mb-4 line-clamp-3">{trainer.bio}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 mb-4 py-3 border-y border-gold/20">
                    <div className="text-center">
                      <p className="text-gold font-bebas text-lg">{trainer.experience}</p>
                      <p className="text-neutral-500 text-xs">Experience</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gold font-bebas text-lg">{trainer.clients}</p>
                      <p className="text-neutral-500 text-xs">Clients</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gold font-bebas text-lg">{trainer.certifications.length}</p>
                      <p className="text-neutral-500 text-xs">Certs</p>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="mb-4">
                    <p className="text-xs text-neutral-500 mb-2">CERTIFICATIONS</p>
                    <div className="flex flex-wrap gap-1">
                      {trainer.certifications.map((cert, i) => (
                        <span key={i} className="text-xs bg-gold/10 text-gold px-2 py-1 rounded border border-gold/30">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-2">
                    <a
                      href="#"
                      className="flex-1 h-10 rounded bg-neutral-800 hover:bg-gold hover:text-neutral-900 flex items-center justify-center transition-all duration-300 text-gold"
                    >
                      <Instagram size={18} />
                    </a>
                    <a
                      href="#"
                      className="flex-1 h-10 rounded bg-neutral-800 hover:bg-gold hover:text-neutral-900 flex items-center justify-center transition-all duration-300 text-gold"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href="#"
                      className="flex-1 h-10 rounded bg-neutral-800 hover:bg-gold hover:text-neutral-900 flex items-center justify-center transition-all duration-300 text-gold"
                    >
                      <Mail size={18} />
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
