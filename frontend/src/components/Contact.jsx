import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('Thanks! I will get back to you shortly.');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setStatus('Something went wrong. Please email me directly.');
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-2xl px-6 py-20">
      <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">Contact</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="w-full rounded-lg border border-black/10 bg-white/70 p-3 text-black outline-none placeholder:text-black/50 focus:border-black/30 dark:border-white/10 dark:bg-white/5 dark:text-white" required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" className="w-full rounded-lg border border-black/10 bg-white/70 p-3 text-black outline-none placeholder:text-black/50 focus:border-black/30 dark:border-white/10 dark:bg-white/5 dark:text-white" required />
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell me about your project" rows="5" className="w-full rounded-lg border border-black/10 bg-white/70 p-3 text-black outline-none placeholder:text-black/50 focus:border-black/30 dark:border-white/10 dark:bg-white/5 dark:text-white" required />
        <div className="flex items-center justify-between">
          <button type="submit" className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90">Send</button>
          <p className="text-sm text-black/70 dark:text-white/70">{status}</p>
        </div>
      </form>
    </section>
  );
}
