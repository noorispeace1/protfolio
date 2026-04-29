'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Plan',
    icon: '🧠',
    desc: 'Deep dive into requirements, user journeys, and technical constraints. I define scope, architecture, and success metrics before writing a single line of code.',
    color: '#10b981',
    glow: 'rgba(16,185,129,0.3)',
  },
  {
    num: '02',
    title: 'Design',
    icon: '🎨',
    desc: 'Wireframes, component systems, and design tokens. I prioritize accessibility, visual hierarchy, and mobile-first layouts in every interface decision.',
    color: '#6366f1',
    glow: 'rgba(99,102,241,0.3)',
  },
  {
    num: '03',
    title: 'Develop',
    icon: '⚡',
    desc: 'Clean, type-safe, component-driven development. I write modular, tested code that\'s readable for the next engineer and optimized for the next user.',
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.3)',
  },
  {
    num: '04',
    title: 'Deploy',
    icon: '🚀',
    desc: 'CI/CD pipelines, environment configs, and performance monitoring. Vercel, Railway, or bare metal — I ship with confidence and maintain with care.',
    color: '#f43f5e',
    glow: 'rgba(244,63,94,0.3)',
  },
]

export default function Process() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Workflow</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-3">
            How I{' '}
            <span className="gradient-text">Work</span>
          </h2>
          <p className="text-slate-500 text-sm mt-4 max-w-md mx-auto">
            A systematic approach refined from both laboratory science and software engineering.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                y: -4,
                boxShadow: `0 0 40px ${step.glow}`,
                borderColor: `${step.color}40`,
              }}
              className="relative glass rounded-3xl p-6 border border-white/8 group transition-all duration-500 overflow-hidden"
            >
              {/* Step number watermark */}
              <div
                className="absolute -top-4 -right-2 text-7xl font-black opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none"
                style={{ color: step.color }}
              >
                {step.num}
              </div>

              {/* Glow orb */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                style={{
                  background: `radial-gradient(ellipse at 20% 20%, ${step.glow} 0%, transparent 60%)`,
                }}
              />

              <div className="relative z-10 flex flex-col gap-4">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border transition-all duration-300 group-hover:shadow-lg"
                  style={{
                    background: `${step.color}15`,
                    borderColor: `${step.color}30`,
                  }}
                >
                  {step.icon}
                </div>

                {/* Step label */}
                <div>
                  <span
                    className="text-[10px] font-mono font-bold uppercase tracking-widest"
                    style={{ color: step.color }}
                  >
                    Step {step.num}
                  </span>
                  <h3 className="text-white font-black text-xl mt-1">{step.title}</h3>
                </div>

                <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>

                {/* Bottom accent line */}
                <div
                  className="h-px w-0 group-hover:w-full transition-all duration-500 rounded-full mt-2"
                  style={{ background: `linear-gradient(90deg, ${step.color}, transparent)` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
