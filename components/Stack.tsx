"use client"
import { motion } from 'framer-motion'
import { FaCode, FaServer, FaDatabase, FaCogs, FaBrain, FaTools } from 'react-icons/fa'
import Particles from './ui/particles'

const categories = [
  {
    title: 'Frontend',
    icon: FaCode,
    technologies: [
      { name: 'HTML', category: 'Core Web' },
      { name: 'CSS', category: 'Core Web' },
      { name: 'JavaScript', category: 'Core Web' },
      { name: 'React.js', category: 'Framework' },
      { name: 'Next.js', category: 'Framework' },
      { name: 'Tailwind CSS', category: 'Styling' },
    ]
  },
  {
    title: 'Backend',
    icon: FaServer,
    technologies: [
      { name: 'Node.js', category: 'Runtime' },
      { name: 'Express.js', category: 'Framework' },
      { name: 'PHP', category: 'Language' },
      { name: 'Laravel', category: 'Framework' },
      { name: 'Python', category: 'Language' },
      { name: 'Flask/Django', category: 'Framework' },
    ]
  },
  {
    title: 'Databases & Storage',
    icon: FaDatabase,
    technologies: [
      { name: 'MySQL', category: 'SQL' },
      { name: 'PostgreSQL', category: 'SQL' },
      { name: 'MongoDB', category: 'NoSQL' },
      { name: 'Redis', category: 'Cache' },
      { name: 'File Storage', category: 'Storage' },
    ]
  },
  {
    title: 'DevOps & System',
    icon: FaCogs,
    technologies: [
      { name: 'Shell Scripting', category: 'Automation' },
      { name: 'Docker', category: 'Containerization' },
      { name: 'CI/CD', category: 'DevOps' },
      { name: 'C Programming', category: 'System' },
    ]
  },
  {
    title: 'Machine Learning',
    icon: FaBrain,
    technologies: [
      { name: 'Python', category: 'Data Science' },
      { name: 'Web Scraping', category: 'Data Collection' },
      { name: 'AI & ML Models', category: 'Machine Learning' },
      { name: 'Trading Bots', category: 'Automation' },
    ]
  },
  {
    title: 'Other Skills',
    icon: FaTools,
    technologies: [
      { name: 'BeautifulSoup', category: 'Web Scraping' },
      { name: 'Selenium', category: 'Web Scraping' },
      { name: 'AI SaaS', category: 'Development' },
    ]
  }
]

const Stack = () => {
  return (
    <section id="stack" className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div style={{ width: '100%', height: '600px', position: 'absolute', top: 0, left: 0 }}>
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Tech Stack
          </motion.h2>
          <p className="text-gray-400 text-lg">Technologies I work with</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Animated Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt" />
              
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                <motion.div 
                  className="flex items-center mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-4">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </motion.div>
                
                <div className="grid grid-cols-1 gap-3">
                  {category.technologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="group/tech bg-gray-800/50 p-3 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-medium text-white group-hover/tech:text-blue-400 transition-colors">
                            {tech.name}
                          </h4>
                          <p className="text-sm text-gray-400">{tech.category}</p>
                        </div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover/tech:opacity-100 transition-opacity" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stack;