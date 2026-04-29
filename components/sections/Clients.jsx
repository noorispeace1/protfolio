'use client'

import { motion } from 'framer-motion'

const companies = [
  'Google', 'Microsoft', 'Amazon', 'Meta', 'Netflix',
  'Spotify', 'Stripe', 'Vercel', 'Figma', 'Notion',
]

// Simple SVG logo-style text logos
function LogoItem({ name }) {
  return (
    <div className="flex items-center justify-center px-8 py-3 opacity-30 hover:opacity-60 transition-opacity duration-300 cursor-default">
      <span className="text-white font-black text-xl tracking-tight whitespace-nowrap">
        {name}
      </span>
    </div>
  )
}

export default function Clients() {
  return (
    <section className="py-14 border-y border-white/5 overflow-hidden relative">
      {/* fade edges */}
      <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#090c0f] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#090c0f] to-transparent z-10 pointer-events-none" />

      <div className="mb-6 text-center">
        <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
          Trusted by teams at
        </span>
      </div>

      <div className="flex">
        <div className="flex animate-marquee">
          {[...companies, ...companies].map((c, i) => (
            <LogoItem key={`${c}-${i}`} name={c} />
          ))}
        </div>
        <div className="flex animate-marquee" aria-hidden>
          {[...companies, ...companies].map((c, i) => (
            <LogoItem key={`clone-${c}-${i}`} name={c} />
          ))}
        </div>
      </div>
    </section>
  )
}
