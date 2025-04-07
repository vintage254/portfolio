import React from 'react'
import dynamic from 'next/dynamic'

// Dynamically import client components with ssr disabled
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false })
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false })
const Stack = dynamic(() => import('@/components/Stack'), { ssr: false })
const Services = dynamic(() => import('@/components/Services'), { ssr: false })
const Portfolio = dynamic(() => import('@/components/Portfolio'), { ssr: false })
const ElevatorPitch = dynamic(() => import('@/components/Elevator_pitch'), { ssr: false })
const Contact = dynamic(() => import('@/components/Contacts'), { ssr: false })

export default function Page() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Stack />
      <Services />
      <Portfolio />
      <ElevatorPitch />
      <Contact />
    </main>
  )
}