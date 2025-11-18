import React from 'react'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-neutral-950 dark:text-white">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-neutral-950/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="font-semibold">Your Name</a>
          <nav className="flex items-center gap-4 text-sm">
            <a href="#experience" className="hover:opacity-80">Experience</a>
            <a href="#skills" className="hover:opacity-80">Skills</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <footer className="border-t border-black/10 py-8 text-center text-sm text-black/60 dark:border-white/10 dark:text-white/60">
        © {new Date().getFullYear()} Your Name — Senior Fullstack Engineer
      </footer>
    </div>
  )
}
