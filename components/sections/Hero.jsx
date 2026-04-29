'use client'
import myImg from '../../app/assets/my.jpg'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, Linkedin, ArrowDown, Download, ExternalLink, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-[#020617] text-white">

      {/* 1. Background Elements (Gilberto Style) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[100px]" />
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: `radial-gradient(#10b981 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT SIDE: Content */}


        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-10" // স্পেসিং কিছুটা বাড়ানো হয়েছে ক্লিনিং লুকের জন্য
        >
          <div className="space-y-4">
            {/* Badge - Smaller & Crisper */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/10 backdrop-blur-sm"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400/80">Available for Projects</span>
            </motion.div>

            {/* Headline - Reduced size for elegant look */}
            <h1 className="text-2xl md:text-4xl lg:text-4xl font-black leading-[1.1] tracking-tight text-white">
              Building <span className="text-emerald-400 italic">Smart</span> <br />
              <span className="flex items-center gap-3">
                <span className="h-[1px] w-8 md:w-12 bg-emerald-500/30 hidden sm:block" />
                & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Scalable</span>
              </span>
              Web Solutions
            </h1>

            {/* Description - Compact & Balanced */}
            <p className="text-slate-400 text-sm md:text-base max-w-md font-normal leading-relaxed">
              I help startups turn ideas into functional, <span className="text-emerald-400/80">performance-focused</span> digital experiences that users love to navigate.
            </p>
          </div>

          {/* Action Buttons - Slightly smaller but impactful */}
          <div className="flex flex-wrap items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.02, translateY: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl shadow-lg shadow-emerald-500/10 transition-all text-sm flex items-center gap-2"
            >
              View Portfolio <ArrowDown size={16} />
            </motion.button>

            <motion.div className="flex gap-2.5">
              {[Github, Linkedin, Mail].map((Icon, i) => (
                <motion.a
                  key={i} href="#"
                  whileHover={{ y: -3, backgroundColor: 'rgba(16,185,129,0.1)', color: '#10b981' }}
                  className="w-10 h-10 rounded-xl border border-white/5 flex items-center justify-center bg-white/5 transition-all text-slate-500"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Client Ecosystem - Subtle & Professional */}
          <div className="pt-8 border-t border-white/5 max-w-sm">
            <p className="text-[9px] uppercase tracking-[0.4em] text-slate-600 font-bold mb-5">Tech Ecosystem</p>
            <div className="flex flex-wrap gap-x-6 gap-y-3 opacity-40 grayscale contrast-125">
              {['REACT', 'NEXT.JS', 'NODE.JS', 'MONGODB'].map(logo => (
                <span key={logo} className="text-xs font-black tracking-widest text-white hover:opacity-100 transition-opacity cursor-default">{logo}</span>
              ))}
            </div>
          </div>
        </motion.div>


        {/* RIGHT SIDE: Visual Profile (Gilberto Photo Integration) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Main Background Frame */}
          <div className="relative w-full aspect-[4/5] max-w-[450px] mx-auto group">
            {/* Emerald Accent Card Behind */}
            <div className="absolute top-10 -left-10 w-full h-full bg-emerald-600/20 rounded-[3rem] rotate-[-5deg] group-hover:rotate-0 transition-transform duration-700" />

            {/* Main Image Container */}
            <div className="relative z-10 w-full h-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
              <Image
                src={myImg}
                alt="Babul Hossan"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay Info (NFT Style) */}
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent backdrop-blur-sm">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-xl font-bold">Md Babul Hossan</h3>
                    <p className="text-emerald-400 font-mono text-xs tracking-widest uppercase mt-1">Full-Stack Architect</p>
                  </div>
                  <div className="px-4 py-2 bg-white/10 rounded-xl border border-white/10 text-[10px] font-black uppercase">
                    Top Rated
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Tech Badges (Gilberto Floating Card Style) */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-8 top-20 z-20 px-5 py-3 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">JS</div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Main Stack</p>
                  <p className="text-xs font-black text-white leading-none">Modern Web</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}