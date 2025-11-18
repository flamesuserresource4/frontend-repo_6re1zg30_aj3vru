import React, { useEffect, useRef, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function FallbackScene() {
  // Simple animated orbs + grid fallback for wow-factor when WebGL/Spline isn't available
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* animated gradient mesh */}
      <div className="pointer-events-none absolute -top-40 -left-32 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.35),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.35),transparent_60%)] blur-3xl" />

      {/* floating orbs */}
      <motion.div
        className="absolute left-10 top-24 h-24 w-24 rounded-full bg-cyan-400/30 backdrop-blur-md ring-1 ring-white/10"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-16 top-44 h-16 w-16 rounded-full bg-fuchsia-400/30 backdrop-blur-md ring-1 ring-white/10"
        animate={{ y: [0, 18, 0], x: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* subtle moving grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.08]"
        initial={{ backgroundPosition: '0px 0px' }}
        animate={{ backgroundPosition: ['0px 0px', '80px 40px', '0px 0px'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* vignette to focus center */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
    </div>
  )
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  // Safety: mark as loaded if Spline takes too long to avoid perpetual spinner
  useEffect(() => {
    const t = setTimeout(() => {
      if (!loaded) {
        // keep fallback visible; don't flip loaded
      }
    }, 8000)
    return () => clearTimeout(t)
  }, [loaded])

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      {/* 3D layer */}
      {!error && (
        <div className="absolute inset-0 -z-10">
          <Spline
            className="h-full w-full"
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
          />
          {/* darkening overlay that still reveals the scene */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/50 to-transparent" />
        </div>
      )}

      {/* Fallback visuals if Spline errors out */}
      {error && <FallbackScene />}

      {/* Content */}
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="max-w-3xl">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Building delightful, scalable products in 3D and beyond
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl text-blue-200/90"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Senior full‑stack engineer focused on immersive experiences, robust systems, and developer joy.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a href="#contact" className="px-5 py-3 rounded-xl bg-blue-500 text-white hover:bg-blue-400 transition shadow-lg shadow-blue-500/20">
              Let’s talk
            </a>
            <a href="/cv.pdf" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">
              Download CV
            </a>
          </motion.div>

          {/* tiny indicator for 3D load state */}
          {!error && (
            <div className="mt-6 text-sm text-white/60">
              {loaded ? 'Interactive 3D loaded' : 'Loading 3D scene…'}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
