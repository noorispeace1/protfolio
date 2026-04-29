'use client'

import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import Clients from '@/components/sections/Clients'
import About from '@/components/sections/About'
import Qualification from '@/components/sections/Qualification'
import Projects from '@/components/sections/Projects'
import Process from '@/components/sections/Process'
import Footer from '@/components/sections/Footer'

export default function Home() {
  useEffect(() => {
    // Native smooth scroll is enabled via CSS; no additional library needed
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <main className="relative min-h-screen bg-[#090c0f] overflow-hidden">
      {/* Global ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-coral-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <Navbar />

      <div className="relative z-10">
        <Hero />
        <Clients />
        <About />
        <Qualification />
        <Projects />
        <Process />
        <Footer />
      </div>
    </main>
  )
}
