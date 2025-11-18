import React from 'react'

const roles = [
  {
    company: 'Acme Corp',
    title: 'Senior Full‑Stack Engineer',
    period: '2021 — Present',
    bullets: [
      'Led migration to micro-frontends, improving deployment velocity by 3x',
      'Built real-time analytics platform processing 1B+ events/month',
      'Mentored 6 engineers; introduced guilds and improved onboarding'
    ]
  },
  {
    company: 'Globex',
    title: 'Staff Engineer',
    period: '2018 — 2021',
    bullets: [
      'Shipped multi-tenant architecture serving 200+ enterprise clients',
      'Reduced cloud spend 25% via autoscaling and workload right-sizing',
      'Launched design system used across 12 internal apps'
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">Experience</h2>
        <div className="mt-10 grid gap-6">
          {roles.map((r, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-slate-800/40 p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl md:text-2xl text-white font-medium">{r.title} · {r.company}</h3>
                <span className="text-sm text-blue-200/80">{r.period}</span>
              </div>
              <ul className="mt-4 list-disc list-inside space-y-2 text-blue-200/90">
                {r.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
