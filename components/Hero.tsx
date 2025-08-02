"use client"
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, memo, useState } from 'react'
import { gsap } from 'gsap'
import DownloadCVButton from './cv'

// Projects data
const projects = [
    {
      title: "Tuji Beads E-Commerce",
      link: "https://tuji-beads.vercel.app/",
      thumbnail: "/projects/project1.png"
    },
    {
      title: "Job Listing Platform",
      link: "https://keajiralink.co.ke/",
      thumbnail: "/projects/Project2.png"
    },
    {
      title: "Food Ordering App",
      link: "https://food-ordering-app-frontend-rkad.onrender.com/",
      thumbnail: "/projects/project3.png"
    },
    {
      title: "grammarwise",
      link: "https://grammerwise.vercel.app/",
      thumbnail: "/projects/project6.png"
    },
    {
      title: "Malbrose POS",
      link: "/Malbrose%20POS.exe",
      thumbnail: "/projects/project4.jpeg"
    },
    {
      title: "morethancode",
      link: "https://morethancode-labs.vercel.app/",
      thumbnail: "/projects/project7.png"
    },
    {
      title: "The Street Clothing",
      link: "https://the-street-clothing.vercel.app/",
      thumbnail: "/projects/project13.png"
    },
    {
      title: "Kwa Jose Cocktail Bar",
      link: "https://kwa-jose.vercel.app/",
      thumbnail: "/projects/project8.png"
    },
    {
      title: "Belle Fashion Wear",
      link: "https://bellefashonwear.vercel.app/",
      thumbnail: "/projects/project9.png"
    },
    {
      title: "Nail Bar Studio",
      link: "https://nailbar.vercel.app/",
      thumbnail: "/projects/project10.png"
    },
    {
      title: "Sir Alex Tattoos",
      link: "https://siralextattoos.vercel.app/",
      thumbnail: "/projects/project11.png"
    },
    {
      title: "Bliss N Blush Beauty",
      link: "https://bliss-n-blush.vercel.app/",
      thumbnail: "/projects/project12.png"
    }
  ];

// Flip Text Component
const FlipText = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const texts = [
    "Full Stack Developer",
    "UI/UX Designer", 
    "Problem Solver",
    "Scalable Solutions Builder"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [texts.length])

  return (
    <div className="h-8 overflow-hidden text-xl sm:text-2xl text-gray-300 mb-8">
      <motion.div
        key={currentIndex}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut"
        }}
        className="flex items-center"
      >
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-semibold">
          {texts[currentIndex]}
        </span>
      </motion.div>
    </div>
  )
}

const ProductCard = ({
  product,
  index,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  index: number;
}) => {
  return (
    <motion.div
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0"
    >
      <a
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0 rounded-xl"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none rounded-xl"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white font-semibold">
        {product.title}
      </h2>
    </motion.div>
  );
};

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const ref = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  useEffect(() => {
    // Split text into individual characters
    const title = titleRef.current
    if (title) {
      const text = "Hi, I'm Derrick Njuguna"
      
      title.innerHTML = ''
      
      // Create spans for each character
      const characters = text.split('').map((char: string) => {
        const span = document.createElement('span')
        span.textContent = char === ' ' ? '\u00A0' : char
        span.style.display = 'inline-block'
        span.style.opacity = '0'
        span.style.transform = 'translateY(50px)'
        
        // Add the animated background effect
        span.style.background = "url('/herobg/herobg.jpg') center"
        span.style.backgroundSize = "cover"
        span.style.backgroundClip = "text"
        span.style.webkitBackgroundClip = "text"
        span.style.color = "transparent"
        span.style.animation = "animate 10s linear infinite"
        
        title.appendChild(span)
        return span
      })

      // Animate characters with GSAP
      gsap.to(characters, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: {
          amount: 1.2,
          from: "start"
        },
        delay: 0.3
      })
    }
  }, [])

  const firstRow = projects.slice(0, 5);
  const secondRow = projects.slice(5, 10);
  const thirdRow = projects.slice(10, 15);

  // Duplicate projects for seamless looping
  const duplicatedProjects = [...projects, ...projects];

  return (
    <section 
      ref={ref}
      id="home" 
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-gradient-to-b from-black to-gray-900"
    >
      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
        }
        
        .animate-scroll-right {
          animation: scroll-right 20s linear infinite;
        }
        
        .animate-scroll-left-slow {
          animation: scroll-left 30s linear infinite;
        }
        
        @keyframes animate {
          to {
            background-position-x: -200px;
          }
        }
      `}</style>
      {/* Hero Header Section */}
      <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left md:w-1/2"
          >
            <h1
              ref={titleRef}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 whitespace-nowrap"
            >
              {/* Content will be dynamically generated by GSAP with animated background */}
            </h1>
                       
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <FlipText />
            </motion.div>
             
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              className="flex flex-wrap gap-4 relative z-10"
            >
              <a
                href="/portfolio"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition-colors duration-300 hover:scale-105 transform"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 transform"
              >
                Contact Me
              </a>
              <div className="relative z-20">
                <DownloadCVButton />
              </div>
            </motion.div>
          </motion.div>
           
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 bg-white">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full"></div>
              <Image
                src="/profile.jpeg"
                alt="Derrick Njuguna"
                fill
                sizes="(max-width: 640px) 256px, 320px"
                style={{ objectFit: 'cover' }}
                priority
                className="rounded-full hover:scale-110 transition-transform duration-300 relative z-10 opacity-100 brightness-110 contrast-110"
              />
              <div className="absolute inset-0 rounded-full ring-2 ring-white/20 ring-offset-2 ring-offset-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Parallax Projects Section */}
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        {/* First row - scrolling left */}
        <div className="flex mb-20 space-x-20">
          <div className="flex space-x-20 animate-scroll-left">
            {duplicatedProjects.map((product, index) => (
              <ProductCard
                product={product}
                index={index}
                key={`${product.title}-${index}`}
              />
            ))}
          </div>
        </div>
        
        {/* Second row - scrolling right */}
        <div className="flex mb-20 space-x-20">
          <div className="flex space-x-20 animate-scroll-right">
            {duplicatedProjects.map((product, index) => (
              <ProductCard
                product={product}
                index={index}
                key={`${product.title}-${index}-reverse`}
              />
            ))}
          </div>
        </div>
        
        {/* Third row - scrolling left (slower) */}
        <div className="flex space-x-20">
          <div className="flex space-x-20 animate-scroll-left-slow">
            {duplicatedProjects.map((product, index) => (
              <ProductCard
                product={product}
                index={index}
                key={`${product.title}-${index}-slow`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero;