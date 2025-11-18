import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Mail, FileDown } from 'lucide-react';

export default function Hero() {
  const handleEmail = () => {
    window.location.href = 'mailto:your.email@example.com?subject=Project%20Inquiry%20—%20Freelance%20Fullstack%20Engineer';
  };

  const handleDownloadCV = () => {
    // Replace with your actual CV link in public/ or an external URL
    window.open('/cv.pdf', '_blank');
  };

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-start justify-center px-6 py-20 text-white">
        <p className="mb-4 inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-sm backdrop-blur">
          Available for freelance — Let’s build something great
        </p>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Senior Fullstack Software Engineer
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          I craft robust web apps end‑to‑end: scalable backends, delightful frontends, and everything between. Fast, reliable, and product‑focused.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <button onClick={handleEmail} className="group inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90">
            <Mail size={18} /> Contact me
            <ArrowRight size={18} className="transition group-hover:translate-x-0.5" />
          </button>
          <button onClick={handleDownloadCV} className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20">
            <FileDown size={18} /> Download CV
          </button>
        </div>
      </div>
    </section>
  );
}
