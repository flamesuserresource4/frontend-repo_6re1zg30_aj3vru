import React from 'react'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Sticky top nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/50 border-b border-white/10">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">Your Name</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-blue-200/90">
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <Hero />

      {/* Content sections */}
      <main>
        <Experience />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 text-blue-200/70 text-sm flex flex-wrap items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} Your Name</span>
          <a href="#home" className="hover:text-white">Back to top</a>
        </div>
      </footer>
    </div>
  )
}

export default App
