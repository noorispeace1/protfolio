import './globals.css'

export const metadata = {
  title: 'Ahosanul Haque Noor — Full Stack Developer',
  description: 'Building smart & scalable web solutions. Full-stack developer specializing in React, Next.js, and modern web technologies.',
  keywords: ['developer', 'portfolio', 'full-stack', 'react', 'next.js'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="noise antialiased">{children}</body>
    </html>
  )
}
