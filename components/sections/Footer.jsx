'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'

const socials = [
  { Icon: Github, href: 'https://github.com', label: 'GitHub' },
  { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { Icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { Icon: Mail, href: 'mailto:babul@example.com', label: 'Email' },
]

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: 'mailto:ahosanulhaquenoor@gmail.com' },
]

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-white/8">
      {/* CTA band */}
      <div className="bg-gradient-to-r from-[#0f1318] via-emerald-950/20 to-[#0f1318] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Let's Build Together</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-3 leading-tight">
              Have a project in mind?<br />
              <span className="gradient-text">Let's talk.</span>
            </h2>
            <p className="text-slate-400 text-sm mt-4 max-w-md mx-auto">
              I'm currently open to full-time roles and freelance projects. Drop me a message and I'll respond within 24 hours.
            </p>
          </motion.div>

          <motion.a
            href="mailto:ahosanulhaquenoor@gmail.com"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(244,63,94,0.5)' }}
            className="px-8 py-4 rounded-2xl font-bold text-base bg-gradient-to-r from-rose-500 to-orange-500 text-white shadow-glow-coral transition-all inline-flex items-center gap-2"
          >
            <Mail size={18} />
        Ahosanulhaquenoor@gmail.com
          </motion.a>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="bg-[#060809] py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo + copyright */}
            <div className="flex items-center gap-4">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-[#090c0f] font-bold text-sm shadow-glow-sm">
                BH
              </span>
              <p className="text-slate-500 text-xs">
                © 2026{' '}
                <span className="text-slate-300 font-semibold">Ahosanul Haque Noor</span>
                {' '}— Built with{' '}
                <Heart size={10} className="inline text-rose-400 fill-rose-400" />
                {' '}& Next.js
              </p>
            </div>

            {/* Nav links */}
            <div className="hidden md:flex items-center gap-6">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs text-slate-500 hover:text-slate-200 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {socials.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, boxShadow: '0 0 20px rgba(16,185,129,0.6)' }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 hover:bg-emerald-500/20 transition-all"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
