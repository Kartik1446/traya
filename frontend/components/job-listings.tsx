"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { MapPin, Clock, Users, ArrowRight } from "lucide-react"

export default function JobListings() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const jobs = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "5+ years",
      description:
        "Lead the development of AI-powered railway optimization systems using machine learning and deep learning technologies.",
      skills: ["Python", "TensorFlow", "PyTorch", "Computer Vision", "NLP"],
    },
    {
      title: "Railway Systems Architect",
      department: "Engineering",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "8+ years",
      description: "Design and architect scalable railway management systems that handle millions of passengers daily.",
      skills: ["System Design", "Microservices", "Cloud Architecture", "Railway Domain", "Scalability"],
    },
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Build intuitive user interfaces for railway management dashboards and passenger applications.",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "UI/UX"],
    },
    {
      title: "Data Scientist",
      department: "Data & Analytics",
      location: "Delhi, India",
      type: "Full-time",
      experience: "4+ years",
      description: "Analyze railway operational data to derive insights and build predictive models for optimization.",
      skills: ["Python", "R", "SQL", "Machine Learning", "Statistics", "Data Visualization"],
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Pune, India",
      type: "Full-time",
      experience: "4+ years",
      description: "Manage and scale our cloud infrastructure to support mission-critical railway operations.",
      skills: ["AWS", "Kubernetes", "Docker", "CI/CD", "Monitoring", "Security"],
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "6+ years",
      description: "Drive product strategy and roadmap for next-generation railway management solutions.",
      skills: ["Product Strategy", "Agile", "User Research", "Railway Domain", "Analytics"],
    },
  ]

  return (
    <section className="py-20 bg-slate-950">
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
              Open Positions
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto text-balance">
            Join our mission to revolutionize Indian Railways with cutting-edge technology and innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {job.title}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium">
                    {job.department}
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all" />
              </div>

              <p className="text-slate-300 mb-4 line-clamp-2">{job.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {job.skills.slice(0, 3).map((skill, skillIndex) => (
                  <span key={skillIndex} className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-sm">
                    {skill}
                  </span>
                ))}
                {job.skills.length > 3 && (
                  <span className="px-2 py-1 bg-slate-700/50 text-slate-400 rounded text-sm">
                    +{job.skills.length - 3} more
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {job.location}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {job.type}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {job.experience}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-700/50">
                <button className="w-full bg-gradient-to-r from-blue-600/20 to-cyan-500/20 hover:from-blue-600/30 hover:to-cyan-500/30 text-cyan-300 py-2 px-4 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02]">
                  Apply Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
