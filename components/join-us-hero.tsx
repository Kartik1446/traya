"use client"

import { motion } from "framer-motion"
import { ArrowRight, Users, Zap, Target } from "lucide-react"

export default function JoinUsHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,76,146,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(29,233,182,0.1),transparent_50%)]" />
      </div>

      {/* Animated railway lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
            style={{
              top: `${30 + i * 20}%`,
              left: "-100%",
              width: "200%",
            }}
            animate={{
              x: ["0%", "50%"],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-green-400 bg-clip-text text-transparent">
              Join the Future
            </span>
            <br />
            <span className="text-white">of Railways</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto text-balance">
            Be part of India's railway revolution. Build cutting-edge AI solutions that transform transportation for
            millions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {[
            { icon: Users, title: "Collaborative Team", desc: "Work with brilliant minds" },
            { icon: Zap, title: "Innovation First", desc: "Push technological boundaries" },
            { icon: Target, title: "Impact Millions", desc: "Transform Indian Railways" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <item.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="group bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
            View Open Positions
            <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
