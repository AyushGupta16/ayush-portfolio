import React from 'react';
import { Code2, Brain, Eye, MessageSquare, Server, Database, Wrench } from 'lucide-react';
import { skillGroups } from '../mock';

const iconMap = {
  Languages: Code2,
  'Machine Learning': Brain,
  'Computer Vision': Eye,
  'NLP / LLM': MessageSquare,
  Backend: Server,
  Data: Database,
  Practices: Wrench,
};

const Skills = () => {
  return (
    <div>
      <section className="relative">
        <div className="absolute inset-0 bg-grid mask-radial opacity-40 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-10 pt-20 pb-12">
          <p className="font-mono text-xs text-[#c1ff3d] uppercase tracking-[0.2em]">/ skills</p>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight max-w-4xl">
            The stack behind every system I ship.
          </h1>
          <p className="mt-6 text-neutral-400 text-lg max-w-3xl leading-relaxed">
            Grouped by capability, not buzzword count. These are the tools I actually use in
            production-oriented ML work.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-10 pb-24">
        <div className="grid md:grid-cols-2 gap-4">
          {skillGroups.map((g) => {
            const Icon = iconMap[g.group] || Code2;
            return (
              <div
                key={g.group}
                className="group relative rounded-2xl border border-white/5 bg-[#0c0e0c] p-7 hover:border-[#c1ff3d]/30 transition-colors overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#c1ff3d]/[0.03] blur-2xl group-hover:bg-[#c1ff3d]/[0.1] transition-colors" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="h-10 w-10 rounded-lg border border-white/10 bg-white/[0.02] flex items-center justify-center">
                        <Icon size={18} className="text-[#c1ff3d]" />
                      </span>
                      <h3 className="text-lg font-semibold">{g.group}</h3>
                    </div>
                    <span className="font-mono text-xs text-neutral-500">
                      {String(g.items.length).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {g.items.map((it) => (
                      <span
                        key={it}
                        className="text-sm px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/5 text-neutral-200 hover:border-[#c1ff3d]/40 hover:text-[#c1ff3d] transition-colors"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Languages spoken */}
        <div className="mt-10 rounded-2xl border border-white/5 bg-[#0b0d0b] p-7">
          <p className="font-mono text-xs text-[#c1ff3d] uppercase tracking-[0.2em]">/ spoken-languages</p>
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <span className="text-neutral-200">Hindi</span>
              <span className="text-xs font-mono text-[#c1ff3d]">Native</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <span className="text-neutral-200">English</span>
              <span className="text-xs font-mono text-[#c1ff3d]">Professional</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
