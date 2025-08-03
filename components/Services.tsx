"use client"
import { motion } from 'framer-motion'
import { CodeBracketIcon, CommandLineIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';
import { World, GlobeConfig } from './globe';
import WhatsApp from '@/components/WhatApp';

const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and modern web applications using the latest technologies like React, Next.js, and TypeScript.',
    icon: CodeBracketIcon,
    features: ['Responsive Design', 'Modern Frameworks', 'Performance Optimization', 'SEO Friendly'],
    gradient: 'from-blue-400 to-cyan-400'
  },
  {
    title: 'Backend Development',
    description: 'Creating robust and scalable backend solutions with best practices, APIs, and database management.',
    icon: CommandLineIcon,
    features: ['RESTful APIs', 'Database Design', 'Authentication', 'Cloud Integration'],
    gradient: 'from-purple-400 to-pink-400'
  },
  {
    title: 'Mobile Development',
    description: 'Developing cross-platform mobile applications for iOS and Android using Flutter and React Native.',
    icon: DevicePhoneMobileIcon,
    features: ['Cross-Platform', 'Native Performance', 'UI/UX Design', 'App Store Deployment'],
    gradient: 'from-green-400 to-emerald-400'
  },
]

const Services = () => {
  const globeConfig: GlobeConfig = {
    pointSize: 4,
    globeColor: "#1d072e",
    showAtmosphere: true,
    atmosphereColor: "#ffffff",
    atmosphereAltitude: 0.1,
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#383838",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.9,
  };
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[0],
    },
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[1],
    },
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[2],
    },
    {
      order: 2,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
  ];
  return (
    <section id="services" className="relative py-20 bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-3/4 left-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
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
            className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Services
          </motion.h2>
          <p className="text-gray-400 text-lg">What I can do for you</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative h-full"
            >
              {/* Animated Border Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200`} />
              
              <motion.div 
                className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 rounded-lg shadow-xl h-full flex flex-col"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon with animated background */}
                <motion.div 
                  className={`inline-flex p-4 rounded-lg bg-gradient-to-r ${service.gradient} mb-6 w-fit`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features List */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-2"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                
                {/* Hover Effect Button */}
                <motion.div
                  className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <a 
                    href="#contacts"
                    className={`block text-center w-full py-2 px-4 rounded-lg bg-gradient-to-r ${service.gradient} text-white font-medium hover:shadow-lg transition-all duration-300`}
                  >
                    Learn More
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        {/* Globe Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.h3 
            className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I Deliver My Services Worldwide
          </motion.h3>
          <p className="text-gray-400 text-lg mb-8">Connecting with clients across the globe</p>
        </motion.div>
        
        <div className="relative h-[400px] w-full max-w-2xl mx-auto">
          <World globeConfig={globeConfig} data={sampleArcs} />
        </div>
      </div>
    </section>
  )
}

export default Services;