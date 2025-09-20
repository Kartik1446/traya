"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FileText, Users, Code, CheckCircle, Mail, Phone } from "lucide-react"

export default function ApplicationProcess() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })


  
  const steps = [
    {
      icon: FileText,
      title: "Apply Online",
      description: "Submit your application with resume and cover letter through our portal.",
      duration: "5 minutes",
    },
    {
      icon: Users,
      title: "Initial Screening",
      description: "Our talent team reviews your application and conducts a brief phone screening.",
      duration: "30 minutes",
    },
    {
      icon: Code,
      title: "Technical Assessment",
      description: "Complete a technical challenge relevant to your role and expertise.",
      duration: "2-3 hours",
    },
    {
      icon: Users,
      title: "Team Interviews",
      description: "Meet with team members and hiring managers to discuss your experience.",
      duration: "1-2 hours",
    },
    {
      icon: CheckCircle,
      title: "Final Decision",
      description: "We make our decision and extend an offer to successful candidates.",
      duration: "2-3 days",
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
              Application Process
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto text-balance">
            Our streamlined hiring process is designed to be transparent, efficient, and focused on finding the right
            fit.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-500/50 via-cyan-400/50 to-green-400/50 hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="flex-1 max-w-md">
                  <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 p-3">
                        <step.icon className="w-full h-full text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                        <span className="text-sm text-cyan-300">{step.duration}</span>
                      </div>
                    </div>
                    <p className="text-slate-300">{step.description}</p>
                  </div>
                </div>

                {/* Step number */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-cyan-500/25">
                  {index + 1}
                </div>

                <div className="flex-1 max-w-md md:block hidden" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Join Us?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Have questions about our roles or application process? We're here to help you take the next step in your
              career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                <Mail className="inline-block mr-2 w-5 h-5" />
                careers@traya.in
              </button>
              <button className="group bg-slate-700/50 hover:bg-slate-700/70 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 border border-slate-600/50">
                <Phone className="inline-block mr-2 w-5 h-5" />
                +91 98765 43210
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
