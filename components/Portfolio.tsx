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
  },
  {
    title: 'Job Listing Platform',
    description: 'A full-stack job listing application with user authentication, job search, and application tracking features.',
    image: '/Project2.png',
    github: 'https://github.com/vintage254/job-listing.git',
    demo: 'https://keajiralink.co.ke/',
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "NextAuth.js", "Zod", "React Hook Form", "ShadCN/UI", "Lucide Icons", "Vercel"],
  },
  {
    title: 'Food Ordering App',
    description: 'A food delivery platform with restaurant listings, menu management, and order tracking system.',
    image: '/project3.png',
    github: 'https://github.com/sambutracy/food-ordering-app.git',
    demo: 'https://food-ordering-app-frontend-rkad.onrender.com/',
    tech: ["React", "Tailwind CSS", "TypeScript", "Redux Toolkit", "Firebase", "Framer Motion", "React Router", "Vite", "React Icons"],
  },
  {
    title: 'grammarwise',
    description: 'Grammerwise is a tutoring platform that connects English learners with expert tutors through job listings, application management, and structured verification workflows. If you are testing the platform, note that sign-up will trigger an email workflow ,currently disabled, so while you may see an error, you can still log in using the email you registered with..',
    image: '/project6.png',
    github: 'https://github.com/vintage254/grammerwise',
    demo: 'https://grammerwise.vercel.app/',
    tech: ["Next.js","TypeScript","Tailwind CSS","ShadCN/UI","Lucide Icons","Redux Toolkit","NextAuth.js","Prisma","PostgreSQL","ImageKit","Resend",],
  },
  {
    title: 'Malbrose POS',
    description: 'A Flutter windows Point Of Sale system for managing retail shops with a beautiful UI and real-time updates.',
    image: '/project4.jpeg',
    github: 'https://github.com/vintage254/malbrose-flutter-app.git',
    download: '/Malbrose%20POS.exe',
    tech: ["Flutter", "Dart", "Firebase", "Provider", "Google Fonts", "Cloud Firestore", "Android SDK","postgress sql"],
    isDownloadable: true,
  },
  {
    title: 'morethancode',
    description: 'More Than Code Labs is my digital space where I showcase who I am as a developer, designer, and creative problem solver. The site reflects my belief that great tech is about more than just writing code it is about building meaningful, human-centered experiences.',
    image: '/project7.png',
    github: 'https://github.com/vintage254/morethancode_labs.git',
    demo: 'https://morethancode-labs.vercel.app/',
    tech: [
      "React",
      "React DOM",
      "Vite",
      "Three.js",
      "@react-three/fiber",
      "@react-three/drei",
      "three-stdlib",
      "maath",
      "cobe",
      "Tailwind CSS",
      "Framer Motion",
      "motion",
      "clsx",
      "react-responsive",
      "Lucide React",
      "ESLint",
    ],
  },
  {
    title: 'Project Management App',
    description: 'A collaborative project management tool with task tracking, team management, and real-time updates.',
    image: '/project5.png',
    github: 'https://github.com/vintage254/project-management-app.git',
    demo: 'https://synccraft.up.railway.app/',
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Zustand", "Framer Motion", "React Hook Form", "ShadCN/UI", "Prisma", "PostgreSQL", "NextAuth.js", "Vercel"],
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
                      href={project.isDownloadable ? project.download : project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-500 transition-colors duration-300"
                      title={project.isDownloadable ? "Download Application" : "View Live Demo"}
                      download={project.isDownloadable ? "Malbrose POS.exe" : undefined}
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
