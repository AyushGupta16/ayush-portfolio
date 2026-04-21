import React from 'react';
import { Briefcase, MapPin } from 'lucide-react';
import { experience } from '../mock';

const Experience = () => {
  return (
    <div>
      <section className="relative">
        <div className="absolute inset-0 bg-grid mask-radial opacity-40 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 pt-20 pb-12">
          <p className="font-mono text-xs text-[#c1ff3d] uppercase tracking-[0.2em]">/ experience</p>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
            Internship timeline.
          </h1>
          <p className="mt-6 text-neutral-400 text-lg max-w-3xl leading-relaxed">
            Hands-on ML work across predictive modeling and research — the foundation behind how
            I ship AI systems today.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 lg:px-10 pb-24">
        <ol className="relative border-l border-white/10 ml-3 space-y-10">
          {experience.map((e, i) => (
            <li key={i} className="relative pl-8">
              <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-[#c1ff3d] ring-4 ring-[#0a0b0a]" />
              <div className="rounded-xl border border-white/5 bg-[#0c0e0c] p-7">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} className="text-[#c1ff3d]" />
                      <div className="text-[#c1ff3d] font-mono text-xs uppercase tracking-wider">
                        {e.role}
                      </div>
                    </div>
                    <h3 className="mt-2 text-2xl font-semibold text-white tracking-tight">
                      {e.company}
                    </h3>
                  </div>
                  <div className="text-sm font-mono text-neutral-500 md:text-right">
                    <div>{e.period}</div>
                    <div className="inline-flex items-center gap-1 mt-1">
                      <MapPin size={12} /> {e.location}
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  {e.bullets.map((b, bi) => (
                    <li key={bi} className="text-sm text-neutral-300 leading-relaxed flex gap-3">
                      <span className="mt-2 h-1 w-1 rounded-full bg-[#c1ff3d] flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {e.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-mono px-2 py-1 rounded border border-white/10 text-neutral-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
};

export default Experience;
