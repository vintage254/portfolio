"use client"
import { motion } from 'framer-motion'
import { FaCode, FaServer, FaDatabase, FaCogs, FaBrain, FaTools } from 'react-icons/fa'

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
    <section id="stack" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tech Stack</h2>
          <p className="text-gray-400">Technologies I work with</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <category.icon className="w-6 h-6 text-blue-500 mr-2" />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {category.technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-700 p-3 rounded-lg"
                  >
                    <h4 className="font-medium">{tech.name}</h4>
                    <p className="text-sm text-gray-400">{tech.category}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stack
