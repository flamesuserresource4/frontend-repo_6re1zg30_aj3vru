import React, { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact() {
  const [status, setStatus] = useState(null)

  async function onSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      message: form.get('message'),
      company: form.get('company') || undefined,
    }

    try {
      setStatus('loading')
      const res = await fetch(`${API_BASE}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.detail || 'Something went wrong')
      setStatus('success')
      e.currentTarget.reset()
    } catch (err) {
      setStatus(`error:${err.message}`)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">Get in touch</h2>
        <p className="mt-2 text-blue-200/90">Have a project in mind or need help with engineering leadership? Let’s talk.</p>
        <form onSubmit={onSubmit} className="mt-8 grid gap-4 max-w-2xl">
          <div className="grid md:grid-cols-2 gap-4">
            <input name="name" required placeholder="Your name" className="px-4 py-3 rounded-xl bg-slate-800/50 border border-white/10 text-white placeholder:text-blue-200/60" />
            <input name="email" required type="email" placeholder="you@example.com" className="px-4 py-3 rounded-xl bg-slate-800/50 border border-white/10 text-white placeholder:text-blue-200/60" />
          </div>
          <input name="company" placeholder="Company (optional)" className="px-4 py-3 rounded-xl bg-slate-800/50 border border-white/10 text-white placeholder:text-blue-200/60" />
          <textarea name="message" required rows="5" placeholder="Tell me about your project..." className="px-4 py-3 rounded-xl bg-slate-800/50 border border-white/10 text-white placeholder:text-blue-200/60" />
          <div className="flex items-center gap-3">
            <button type="submit" className="px-5 py-3 rounded-xl bg-blue-500 text-white hover:bg-blue-400 transition disabled:opacity-60" disabled={status==='loading'}>
              {status==='loading' ? 'Sending…' : 'Send message'}
            </button>
            {status?.startsWith('error') && (
              <span className="text-red-300">{status.split(':')[1]}</span>
            )}
            {status==='success' && (
              <span className="text-green-300">Thanks! I’ll get back to you.</span>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
