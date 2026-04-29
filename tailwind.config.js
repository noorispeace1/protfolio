/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-syne)', 'sans-serif'],
        mono: ['var(--font-dm-mono)', 'monospace'],
      },
      colors: {
        bg: '#090c0f',
        surface: '#0f1318',
        emerald: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
        coral: {
          400: '#fb7185',
          500: '#f43f5e',
        },
        glass: 'rgba(255,255,255,0.04)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glow-emerald': 'radial-gradient(ellipse at center, rgba(16,185,129,0.15) 0%, transparent 70%)',
        'glow-coral': 'radial-gradient(ellipse at center, rgba(244,63,94,0.15) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(16,185,129,0.3)',
        'glow': '0 0 40px rgba(16,185,129,0.4)',
        'glow-lg': '0 0 80px rgba(16,185,129,0.3)',
        'glow-coral': '0 0 40px rgba(244,63,94,0.4)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
