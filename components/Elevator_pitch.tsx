"use client"
import { motion } from 'framer-motion'

const ElevatorPitch = () => {
  return (
    <section id="elevator-pitch" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">My Elevator Pitch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch this short video to learn more about my skills and what I can bring to your team.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl"
        >
          <iframe 
            src="https://www.youtube.com/embed/xIWhcE9QdZY" 
            title="Elevator Pitch"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </motion.div>
      </div>
    </section>
  )
}

export default ElevatorPitch