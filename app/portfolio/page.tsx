import React from 'react'
import Portfolio from '@/components/Portfolio'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsApp from '@/components/WhatApp'

const work = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Portfolio />
      <Footer />
      <WhatsApp />
    </main>
  )
}

export default work