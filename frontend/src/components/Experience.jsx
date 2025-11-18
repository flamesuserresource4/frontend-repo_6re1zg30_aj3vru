import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'Acme Corp',
    role: 'Senior Fullstack Engineer',
    period: '2022 — Present',
    details: [
      'Led development of a multi-tenant SaaS with microservices and React.',
      'Scaled API to millions of requests/month with robust observability.',
      'Mentored 5 engineers and established code quality standards.'
    ]
  },
  {
    company: 'Globex',
    role: 'Fullstack Engineer',
    period: '2019 — 2022',
    details: [
      'Built realtime features with websockets and Redis.',
      'Reduced cloud costs by ~30% through architecture improvements.',
      'Shipped design system used across 6 internal apps.'
    ]
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-8 flex items-center gap-3">
        <div className="rounded-lg bg-black/5 p-2 dark:bg-white/5">
          <Briefcase className="h-5 w-5 text-black/70 dark:text-white/70" />
        </div>
        <h2 className="text-2xl font-semibold sm:text-3xl">Experience</h2>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div key={idx} className="rounded-xl border border-black/10 p-6 dark:border-white/10">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
              <h3 className="text-lg font-semibold">{exp.role} · <span className="text-black/60 dark:text-white/60">{exp.company}</span></h3>
              <span className="text-sm text-black/60 dark:text-white/60">{exp.period}</span>
            </div>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-black/80 dark:text-white/80">
              {exp.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
