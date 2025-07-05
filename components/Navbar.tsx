"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const navlinks = [
    {title: "Home", path: "#home"},
    {title: "About", path: "#about"},
    {title: "Stack", path: "#stack"},
    {title: "Portfolio", path: "#portfolio"},
    {title: "Services", path: "#services"},
    {title: "Contact", path: "#contact"},
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <motion.nav 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed w-full z-50 transition-all duration-300 ${
                scrolled ? 'bg-black/80 backdrop-blur-md py-2' : 'bg-transparent py-4'
            }`}
        >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between'>
                    <Link href="#home" className='text-2xl font-bold text-white'>
                        Portfolio
                    </Link>

                    {/* Desktop Navigation */}
                    <div className='hidden md:flex items-center space-x-8'>
                        {navlinks.map((link, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link 
                                    href={link.path}
                                    className='text-white hover:text-gray-300 transition-colors duration-300'
                                >
                                    {link.title}
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className='md:hidden text-white'
                        onClick={toggleMenu}
                    >
                        {isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className='md:hidden bg-black/90 backdrop-blur-md'
                    >
                        <div className='px-4 pt-2 pb-3 space-y-1'>
                            {navlinks.map((link, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className='block'
                                >
                                    <Link
                                        href={link.path}
                                        className='text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium'
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.title}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

export default Navbar