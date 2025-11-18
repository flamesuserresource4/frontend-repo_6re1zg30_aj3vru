import React from 'react'

const categories = [
  { name: 'Frontend', items: ['React', 'Next.js', 'Vite', 'TypeScript', 'Tailwind', 'Framer Motion'] },
  { name: 'Backend', items: ['Node.js', 'FastAPI', 'Express', 'GraphQL', 'PostgreSQL', 'MongoDB'] },
  { name: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Terraform', 'CI/CD', 'Kubernetes', 'Cloudflare'] },
  { name: 'Reliability', items: ['Observability', 'Tracing', 'Feature Flags', 'A/B Testing', 'SLOs', 'Incident Response'] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">Skills</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <div key={c.name} className="rounded-2xl border border-white/10 bg-slate-800/40 p-6">
              <h3 className="text-white font-medium text-lg">{c.name}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.items.map((i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-white/10 text-blue-100 text-sm">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
