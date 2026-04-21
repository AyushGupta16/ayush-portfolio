import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../mock';

const Projects = () => {
  return (
    <div>
      <section className="relative">
        <div className="absolute inset-0 bg-grid mask-radial opacity-40 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-10 pt-20 pb-12">
          <p className="font-mono text-xs text-[#c1ff3d] uppercase tracking-[0.2em]">/ projects</p>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight max-w-4xl">
            Full-stack AI systems, end to end.
          </h1>
          <p className="mt-6 text-neutral-400 text-lg max-w-3xl leading-relaxed">
            Each project is documented as a case study — problem framing, system architecture,
            backend integration, and how it would be used in the real world.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-10 pb-24">
        <div className="space-y-6">
          {projects.map((p, i) => (
            <Link
              to={`/projects/${p.slug}`}
              key={p.slug}
              className="group relative block rounded-2xl border border-white/5 bg-[#0c0e0c] hover:border-[#c1ff3d]/40 transition-colors overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#c1ff3d]/5 blur-3xl group-hover:bg-[#c1ff3d]/15 transition-colors" />
              <div className="relative grid lg:grid-cols-[1fr_300px]">
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-neutral-500">
                      Case {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-neutral-700" />
                    <span className="font-mono text-xs text-neutral-500">{p.period}</span>
                  </div>
                  <h2 className="mt-5 text-3xl lg:text-4xl font-semibold tracking-tight">
                    {p.name}
                  </h2>
                  <p className="mt-3 text-neutral-400 leading-relaxed max-w-2xl">{p.tagline}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-xs font-mono px-2 py-1 rounded border border-white/10 text-neutral-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 inline-flex items-center gap-2 text-sm text-[#c1ff3d]">
                    Read full case study
                    <ArrowUpRight
                      size={16}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </div>
                </div>
                <div className="border-t lg:border-t-0 lg:border-l border-white/5 p-8 lg:p-10 bg-black/20">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                    Outcomes
                  </p>
                  <ul className="mt-4 space-y-3">
                    {p.outcomes.map((o) => (
                      <li key={o} className="text-sm text-neutral-300 flex gap-3">
                        <span className="mt-2 h-1 w-1 rounded-full bg-[#c1ff3d] flex-shrink-0" />
                        {o}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded bg-[#c1ff3d]/10 text-[#c1ff3d]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
