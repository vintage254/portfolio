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
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "React Hook Form", "Framer Motion", "Lucide Icons"],
    category: 'E-commerce'
  },
  {
    title: 'Job Listing Platform',
    description: 'A full-stack job listing application with user authentication, job search, and application tracking features.',
    image: '/Project2.png',
    github: 'https://github.com/vintage254/job-listing.git',
    demo: 'https://keajiralink.co.ke/',
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "NextAuth.js", "Zod", "React Hook Form", "ShadCN/UI", "Lucide Icons", "Vercel"],
    category: 'Platform'
  },
  {
    title: 'Food Ordering App',
    description: 'A food delivery platform with restaurant listings, menu management, and order tracking system.',
    image: '/project3.png',
    github: 'https://github.com/sambutracy/food-ordering-app.git',
    demo: 'https://food-ordering-app-frontend-rkad.onrender.com/',
    tech: ["React", "Tailwind CSS", "TypeScript", "Redux Toolkit", "Firebase", "Framer Motion", "React Router", "Vite", "React Icons"],
    category: 'Mobile App'
  },
  {
    title: 'grammarwise',
    description: 'Grammerwise is a tutoring platform that connects English learners with expert tutors through job listings, application management, and structured verification workflows.',
    image: '/project6.png',
    github: 'https://github.com/vintage254/grammerwise',
    demo: 'https://grammerwise.vercel.app/',
    tech: ["Next.js","TypeScript","Tailwind CSS","ShadCN/UI","Lucide Icons","Redux Toolkit","NextAuth.js","Prisma","PostgreSQL","ImageKit","Resend"],
    category: 'Education'
  },
  {
    title: 'Malbrose POS',
    description: 'A Flutter windows Point Of Sale system for managing retail shops with a beautiful UI and real-time updates.',
    image: '/project4.jpeg',
    github: 'https://github.com/vintage254/malbrose-flutter-app.git',
    download: '/Malbrose%20POS.exe',
    tech: ["Flutter", "Dart", "Firebase", "Provider", "Google Fonts", "Cloud Firestore", "Android SDK","postgress sql"],
    isDownloadable: true,
    category: 'Desktop App'
  },
  {
    title: 'morethancode',
    description: 'More Than Code Labs is my digital space where I showcase who I am as a developer, designer, and creative problem solver.',
    image: '/project7.png',
    github: 'https://github.com/vintage254/morethancode_labs.git',
    demo: 'https://morethancode-labs.vercel.app/',
    tech: ["React", "React DOM", "Vite", "Three.js", "@react-three/fiber", "@react-three/drei", "three-stdlib", "maath", "cobe", "Tailwind CSS", "Framer Motion", "motion", "clsx", "react-responsive", "Lucide React", "ESLint"],
    category: 'Portfolio'
  },
  {
    title: 'Project Management App',
    description: 'A collaborative project management tool with task tracking, team management, and real-time updates.',
    image: '/project5.png',
    github: 'https://github.com/vintage254/project-management-app.git',
    demo: 'https://synccraft.up.railway.app/',
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Zustand", "Framer Motion", "React Hook Form", "ShadCN/UI", "Prisma", "PostgreSQL", "NextAuth.js", "Vercel"],
    category: 'SaaS'
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
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
            className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Portfolio
          </motion.h2>
          <p className="text-gray-400 text-lg">Featured Projects</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-full"
            >
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
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                        className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="bg-gray-800/50 border border-gray-700 text-gray-400 px-3 py-1 rounded-full text-xs">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>
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