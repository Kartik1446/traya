"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Heart, Lightbulb, Shield, Globe } from "lucide-react"

export default function CultureSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const values = [
    {
      icon: Heart,
      title: "People First",
      description: "We prioritize work-life balance and personal growth for every team member.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We encourage creative thinking and breakthrough solutions in everything we do.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We build trust through transparency, honesty, and ethical practices.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Globe,
      title: "Impact",
      description: "We create solutions that positively transform transportation for millions.",
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Our Culture
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto text-balance">
            At Traya, we foster an environment where innovation thrives, diversity is celebrated, and every voice
            matters.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105"
            >
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-r ${value.color} p-4 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
              >
                <value.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center">{value.title}</h3>
              <p className="text-slate-400 text-center">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/50 backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-3xl font-bold text-cyan-400 mb-2">50+</h4>
              <p className="text-slate-300">Team Members</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-green-400 mb-2">15+</h4>
              <p className="text-slate-300">Countries Represented</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-blue-400 mb-2">4.8/5</h4>
              <p className="text-slate-300">Employee Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
