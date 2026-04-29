'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' }, // এখানে href ঠিক করা হয়েছে
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#footer' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // নেভিগেশন হ্যান্ডলার
  const handleNav = (e, href) => {
    e.preventDefault(); // ডিফল্ট অ্যাঙ্কর ট্যাগ বিহেভিয়ার বন্ধ করা
    setMenuOpen(false); // মোবাইল মেনু বন্ধ করা
    
    // নির্দিষ্ট সেকশন আইডি ধরে স্ক্রল করা
    const targetId = href.replace('#', '');
    const el = document.getElementById(targetId);
    
    if (el) {
      const offset = 80; // নেভবারের হাইট অনুযায়ী অফসেট
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => handleNav(e, '#home')}
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-[#090c0f] font-bold text-sm shadow-glow-sm">
              NR
            </span>
            <span className="text-white font-bold text-lg tracking-tight">
              Noor<span className="gradient-text">.</span>
            </span>
          </motion.a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
              >
                <button
                  onClick={(e) => handleNav(e, link.href)}
                  className="relative px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors group"
                >
                  {link.label}
                  <span className="absolute inset-x-4 bottom-1 h-px bg-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </button>
              </motion.li>
            ))}
          </ul>

          {/* CTA Desktop */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            onClick={(e) => handleNav(e, '#footer')}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-emerald-500 to-emerald-600 text-[#090c0f] hover:shadow-glow transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Hire Me
          </motion.button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-slate-300 hover:text-white transition-colors p-2"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 overflow-hidden bg-[#090c0f]/95 backdrop-blur-lg"
          >
            <div className="px-6 py-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={(e) => handleNav(e, link.href)}
                  className="text-left px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all text-base font-medium border border-transparent hover:border-white/10"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={(e) => handleNav(e, '#footer')}
                className="mt-4 px-5 py-3 rounded-xl text-center text-sm font-bold bg-gradient-to-r from-emerald-500 to-emerald-600 text-[#090c0f] active:scale-95 transition-transform"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}