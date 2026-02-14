"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [stats, setStats] = useState([
    { label: "Expert Trainers", value: 0, target: 15 },
    { label: "Active Members", value: 0, target: 500 },
    { label: "Years Experience", value: 0, target: 20 },
    { label: "24/7 Access", value: 0, target: 100 },
  ])

  useEffect(() => {
    if (!isInView) return

    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setStats((prev) => {
          const newStats = [...prev]
          if (newStats[index].value < newStats[index].target) {
            newStats[index].value += Math.ceil(newStats[index].target / 30)
          }
          return newStats
        })
      }, 50)
    })

    return () => intervals.forEach(clearInterval)
  }, [isInView])

  return (
    <section ref={ref} className="relative py-20 sm:py-32 bg-neutral-900 overflow-hidden" id="about">
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
            ABOUT <span className="text-gold">GOLDGYM</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            We are committed to transforming lives through premium fitness experiences and personalized coaching.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-lg overflow-hidden"
          >
            <img
              src="/modern-gym-facility-interior.jpg"
              alt="GoldGym Facility"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-transparent" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bebas tracking-wider text-white mb-4">OUR STORY</h3>
            <p className="text-neutral-300 mb-4 leading-relaxed">
              Founded in 2005, GoldGym has been a beacon of fitness excellence for nearly two decades. Our mission is to
              provide world-class training facilities and expert coaching to help you achieve your fitness goals.
            </p>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              With state-of-the-art equipment, certified trainers, and a supportive community, we create an environment
              where transformation happens. Whether you're a beginner or an elite athlete, GoldGym is your partner in
              success.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-neutral-800/50 border border-gold/20 hover:border-gold/50 rounded-lg p-4 text-center transition-all duration-300 cursor-pointer"
                >
                  <div className="text-3xl font-bebas text-gold mb-2">
                    {Math.min(stat.value, stat.target)}
                    {stat.label === "24/7 Access" ? "h" : stat.label === "Years Experience" ? "" : "+"}
                  </div>
                  <p className="text-neutral-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
