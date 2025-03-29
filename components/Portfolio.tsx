"use client"
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaDownload } from 'react-icons/fa'

const projects = [
  
  {
    title: 'Tuji Beads E-Commerce',
    description: 'A Next.js e-commerce platform featuring user authentication, product catalog, shopping cart, and email notifications.',
    image: '/project1.png',
    github: 'https://github.com/vintage254/tuji-beads.git',
    demo: 'https://tuji-beads.vercel.app/',
    tech: ['Next.js', 'Sanity CMS', 'Tailwind CSS', 'Node.js'],
  },
  {
    title: 'Job Listing Platform',
    description: 'A full-stack job listing application with user authentication, job search, and application tracking features.',
    image: '/Project2.png',
    github: 'https://github.com/vintage254/job-listing.git',
    demo: 'https://job-listing-gamma-two.vercel.app',
    tech: ['Next.js', 'PostgreSQL', 'Prisma', 'NextAuth.js'],
  },
  {
    title: 'Food Ordering App',
    description: 'A food delivery platform with restaurant listings, menu management, and order tracking system.',
    image: '/project3.png',
    github: 'https://github.com/sambutracy/food-ordering-app.git',
    demo: 'https://food-ordering-app-frontend-rkad.onrender.com/',
    tech: ['React', 'Express.js', 'MongoDB', 'Redux'],
  },
  {
    title: 'Malbrose Flutter App',
    description: 'A Flutter mobile application for managing and tracking personal finances with a beautiful UI and real-time updates.',
    image: '/project4.jpeg',
    github: 'https://github.com/vintage254/malbrose-flutter-app.git',
    demo: '#',
    tech: ['Flutter', 'Dart', 'Firebase', 'Provider'],
    isDownloadable: true,
  },
  {
    title: 'Project Management App',
    description: 'A collaborative project management tool with task tracking, team management, and real-time updates.',
    image: '/project5.png',
    github: 'https://github.com/vintage254/project-management-app.git',
    demo: 'https://synccraft.up.railway.app/',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Portfolio</h2>
          <p className="text-gray-400">Featured Projects</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg group"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-500 transition-colors duration-300"
                      title="View on GitHub"
                    >
                      <FaGithub size={24} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-500 transition-colors duration-300"
                      title={project.isDownloadable ? "Download Application" : "View Live Demo"}
                    >
                      {project.isDownloadable ? <FaDownload size={24} /> : <FaExternalLinkAlt size={24} />}
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
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

export default Portfolio
