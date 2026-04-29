'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'MediTrack Lab Portal',
    desc: 'A full-featured laboratory sample tracking web app. Digitizes sample intake, status updates, and report generation. Reduced manual errors by 60% for a 50-person team.',
    tags: ['Next.js', 'MongoDB', 'Tailwind', 'Node.js'],
    color: '#10b981',
    emoji: '🧪',
    gradient: 'from-emerald-500/10 to-teal-500/5',
  },
  {
    title: 'ShopWave E-Commerce',
    desc: 'Full-stack e-commerce platform with product listings, cart, Stripe checkout, and admin dashboard. Handles 500+ SKUs with real-time inventory updates.',
    tags: ['React', 'Express', 'Stripe', 'PostgreSQL'],
    color: '#6366f1',
    emoji: '🛒',
    gradient: 'from-indigo-500/10 to-purple-500/5',
  },
  {
    title: 'DevBoard Task Manager',
    desc: 'Kanban-style project management tool with drag-and-drop, real-time collaboration via WebSockets, and team permissions. Used daily by 3 development teams.',
    tags: ['React', 'Socket.io', 'Redis', 'JWT'],
    color: '#f59e0b',
    emoji: '📋',
    gradient: 'from-amber-500/10 to-orange-500/5',
  },
  {
    title: 'WeatherPulse Dashboard',
    desc: 'Location-aware weather analytics app with 7-day forecasts, interactive charts, and air quality metrics. Integrates OpenWeatherMap and MapBox APIs.',
    tags: ['Next.js', 'Chart.js', 'REST API', 'Tailwind'],
    color: '#38bdf8',
    emoji: '🌤️',
    gradient: 'from-sky-500/10 to-cyan-500/5',
  },
  {
    title: 'BlogForge CMS',
    desc: 'Headless CMS with markdown editor, SEO tools, scheduled publishing, and social preview cards. Built for content creators with a focus on writing UX.',
    tags: ['Next.js', 'MDX', 'Prisma', 'Vercel'],
    color: '#a78bfa',
    emoji: '✍️',
    gradient: 'from-violet-500/10 to-purple-500/5',
  },
  {
    title: 'FitPulse Tracker',
    desc: 'Fitness tracking app with workout logging, progress charts, nutrition macros calculator, and weekly streak system. Features a mobile-first responsive design.',
    tags: ['React Native', 'Expo', 'Firebase', 'Redux'],
    color: '#f43f5e',
    emoji: '💪',
    gradient: 'from-rose-500/10 to-pink-500/5',
  },
]

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, boxShadow: `0 20px 60px ${project.color}20` }}
      className="glass rounded-3xl border border-white/8 overflow-hidden group transition-all duration-500 flex flex-col"
    >
      {/* Card image area */}
      <div className={`h-44 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}>
        <span className="text-7xl opacity-60 group-hover:scale-110 transition-transform duration-500">{project.emoji}</span>

        {/* Glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `radial-gradient(ellipse at center, ${project.color}20 0%, transparent 70%)` }}
        />

        {/* Corner action buttons */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            className="w-8 h-8 rounded-full glass border border-white/20 flex items-center justify-center text-white"
          >
            <Github size={13} />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            className="w-8 h-8 rounded-full glass border border-white/20 flex items-center justify-center text-white"
          >
            <ExternalLink size={13} />
          </motion.a>
        </div>

        {/* glowing border on hover */}
        <div
          className="absolute inset-x-0 bottom-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="flex items-start justify-between">
          <h3 className="text-white font-bold text-base leading-tight">{project.title}</h3>
          <ArrowUpRight
            size={16}
            className="text-slate-500 group-hover:text-emerald-400 transition-colors shrink-0 mt-0.5"
          />
        </div>

        <p className="text-slate-400 text-xs leading-relaxed flex-1">{project.desc}</p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono px-2.5 py-1 rounded-full border"
              style={{
                color: project.color,
                borderColor: `${project.color}25`,
                background: `${project.color}10`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
        >
          <div>
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
              Featured{' '}
              <span className="gradient-text">Projects</span>
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-xs">
            Real-world applications built with production-grade code and modern tooling.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl glass border border-white/10 text-sm font-semibold text-slate-300 hover:text-white hover:border-emerald-500/30 transition-all"
          >
            <Github size={16} />
            View all on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
