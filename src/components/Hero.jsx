import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0 -z-10">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-20%" />
      </div>

      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Senior Full‑Stack Engineer
          </h1>
          <p className="mt-4 text-lg md:text-xl text-blue-200/90">
            I design, build, and scale delightful products across web and cloud. React, Node, Python, and a love for DX.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-3 rounded-xl bg-blue-500 text-white hover:bg-blue-400 transition shadow-lg shadow-blue-500/20">
              Contact me
            </a>
            <a href="/cv.pdf" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
