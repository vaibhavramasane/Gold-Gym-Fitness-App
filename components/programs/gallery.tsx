"use client"

import { motion } from "framer-motion"

const galleryImages = [
  {
    title: "Strength Training",
    image: "/weightlifting-gym-training.jpg",
  },
  {
    title: "CrossFit Classes",
    image: "/crossfit-group-training.jpg",
  },
  {
    title: "Yoga Sessions",
    image: "/yoga-class-meditation.png",
  },
  {
    title: "Cardio Equipment",
    image: "/cardio-treadmill-gym.jpg",
  },
  {
    title: "Personal Training",
    image: "/personal-trainer-coaching.png",
  },
  {
    title: "Nutrition Coaching",
    image: "/healthy-nutrition-meal-prep.jpg",
  },
]

export function ProgramsGallery() {
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
            PROGRAM <span className="text-gold">GALLERY</span>
          </h2>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
            >
              <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h3 className="text-white font-bebas tracking-wider text-lg">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
