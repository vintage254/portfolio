"use client"
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaDownload, FaChevronLeft, FaChevronRight, FaArrowRight } from 'react-icons/fa'
import { projects, type Project } from '../constants'

const SmallPortfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleProjects, setVisibleProjects] = useState(1)

  // Responsive visible projects
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleProjects(3)
      } else if (window.innerWidth >= 768) {
        setVisibleProjects(2)
      } else {
        setVisibleProjects(1)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= projects.length - visibleProjects ? 0 : prevIndex + 1
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [visibleProjects])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= projects.length - visibleProjects ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? projects.length - visibleProjects : prevIndex - 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="portfolio" className="py-20 bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>
          <p className="text-gray-400 text-lg">A showcase of my recent work</p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-gray-800/80 backdrop-blur-sm rounded-full text-white hover:bg-blue-500 transition-all duration-300 shadow-lg border border-gray-700/50 -ml-6"
          >
            <FaChevronLeft size={20} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-gray-800/80 backdrop-blur-sm rounded-full text-white hover:bg-blue-500 transition-all duration-300 shadow-lg border border-gray-700/50 -mr-6"
          >
            <FaChevronRight size={20} />
          </button>

          {/* Projects Carousel */}
          <div className="overflow-hidden rounded-lg">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleProjects)}%)`,
                width: `${(projects.length / visibleProjects) * 100}%`
              }}
            >
              {projects.map((project: Project, index: number) => (
                <motion.div
                  key={project.title}
                  className={`flex-shrink-0 px-4 ${
                    visibleProjects === 1 ? 'w-full' : 
                    visibleProjects === 2 ? 'w-1/2' : 'w-1/3'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="group relative h-full">
                    {/* Animated Border */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                    
                    <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden shadow-xl h-full flex flex-col">
                      {/* Image Container with Overlay */}
                      <div className="relative h-48 overflow-hidden">
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        />
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {project.category}
                          </span>
                        </div>
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <div className="flex space-x-4">
                            <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-full text-white hover:bg-blue-500 transition-colors duration-300"
                              title="View on GitHub"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <FaGithub size={20} />
                            </motion.a>
                            <motion.a
                              href={project.isDownloadable ? project.download : project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-full text-white hover:bg-purple-500 transition-colors duration-300"
                              title={project.isDownloadable ? "Download Application" : "View Live Demo"}
                              download={project.isDownloadable ? "Malbrose POS.exe" : undefined}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              {project.isDownloadable ? <FaDownload size={20} /> : <FaExternalLinkAlt size={20} />}
                            </motion.a>
                          </div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-grow line-clamp-3">
                          {project.description}
                        </p>
                        
                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                          {project.tech.slice(0, 3).map((tech: string, techIndex: number) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                              className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm"
                            >
                              {tech}
                            </motion.span>
                          ))}
                          {project.tech.length > 3 && (
                            <span className="bg-gray-800/50 border border-gray-700 text-gray-400 px-3 py-1 rounded-full text-xs">
                              +{project.tech.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(projects.length - visibleProjects + 1) }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-125' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Show More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.a
            href="/portfolio"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Projects</span>
            <motion.div
              className="group-hover:translate-x-1 transition-transform duration-300"
            >
              <FaArrowRight size={16} />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default SmallPortfolio