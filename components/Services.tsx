"use client"
import { motion } from 'framer-motion'
import { CodeBracketIcon, CommandLineIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline'

const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and modern web applications using the latest technologies.',
    icon: CodeBracketIcon,
  },
  {
    title: 'Backend Development',
    description: 'Creating robust and scalable backend solutions with best practices.',
    icon: CommandLineIcon,
  },
  {
    title: 'Mobile Development',
    description: 'Developing cross-platform mobile applications for iOS and Android.',
    icon: DevicePhoneMobileIcon,
  },
]

const Services = () => {
  return (
    <section id="services" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Services</h2>
          <p className="text-gray-400">What I can do for you</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 p-8 rounded-lg shadow-lg"
            >
              <service.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
