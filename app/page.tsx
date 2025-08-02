import React from 'react'
import dynamic from 'next/dynamic'
import WhatsApp from '@/components/WhatApp'
import { 
  NavbarSkeleton, 
  HeroSkeleton, 
  StackSkeleton, 
  ServicesSkeleton, 
  PortfolioSkeleton, 
  FooterSkeleton 
} from '@/components/ui/loading-skeletons'

// Dynamically import client components with ssr disabled and loading states
const Navbar = dynamic(() => import('@/components/Navbar'), { 
  ssr: false,
  loading: () => <NavbarSkeleton />
})
const Hero = dynamic(() => import('@/components/Hero'), { 
  ssr: false,
  loading: () => <HeroSkeleton />
})
const Stack = dynamic(() => import('@/components/Stack'), { 
  ssr: false,
  loading: () => <StackSkeleton />
})
const Services = dynamic(() => import('@/components/Services'), { 
  ssr: false,
  loading: () => <ServicesSkeleton />
})
const SmallPortfolio = dynamic(() => import('@/components/small-portfolio'), { 
  ssr: false,
  loading: () => <PortfolioSkeleton />
})
const ContactFooter = dynamic(() => import('@/components/Footer'), { 
  ssr: false,
  loading: () => <FooterSkeleton />
})

export default function Page() {
  return (
    <main className="relative bg-black">
      <Navbar />
      <Hero />
      <Stack />
      <Services />
      <SmallPortfolio />
      <ContactFooter />
      <WhatsApp />
    </main>
  )
}