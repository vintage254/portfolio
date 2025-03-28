"use client"
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-bold mb-6"
          >
            Hi, I'm <span className="text-blue-500">Derrick Njuguna</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-300 mb-8"
          >
            Full Stack Developer | UI/UX Designer | Problem Solver
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            <a
              href="#portfolio"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition-colors duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-full transition-colors duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
