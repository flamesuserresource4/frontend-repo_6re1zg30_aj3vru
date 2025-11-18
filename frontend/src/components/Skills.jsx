import React from 'react';
import { Code2, Database, Cloud, ShieldCheck } from 'lucide-react';

const skills = [
  { category: 'Frontend', icon: Code2, items: ['React', 'Next.js', 'TypeScript', 'Tailwind'] },
  { category: 'Backend', icon: Database, items: ['FastAPI', 'Node', 'PostgreSQL', 'MongoDB'] },
  { category: 'Cloud & DevOps', icon: Cloud, items: ['AWS', 'Docker', 'CI/CD', 'Terraform'] },
  { category: 'Reliability', icon: ShieldCheck, items: ['Monitoring', 'Tracing', 'Testing', 'Security'] },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="mb-8 text-2xl font-semibold sm:text-3xl">Skills</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map(({ category, icon: Icon, items }) => (
          <div key={category} className="rounded-xl border border-black/10 p-6 dark:border-white/10">
            <div className="mb-3 flex items-center gap-2">
              <Icon className="h-5 w-5 text-black/70 dark:text-white/70" />
              <h3 className="font-semibold">{category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <span key={s} className="rounded-full bg-black/5 px-3 py-1 text-sm text-black/80 dark:bg-white/5 dark:text-white/80">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
