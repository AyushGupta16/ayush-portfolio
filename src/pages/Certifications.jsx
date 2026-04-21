import React, { useState, useMemo } from 'react';
import { Award, Filter } from 'lucide-react';
import { certifications } from '../mock';

const Certifications = () => {
  const issuers = useMemo(
    () => ['All', ...Array.from(new Set(certifications.map((c) => c.issuer)))],
    []
  );
  const [filter, setFilter] = useState('All');

  const visible =
    filter === 'All' ? certifications : certifications.filter((c) => c.issuer === filter);

  return (
    <div>
      <section className="relative">
        <div className="absolute inset-0 bg-grid mask-radial opacity-40 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-10 pt-20 pb-12">
          <p className="font-mono text-xs text-[#c1ff3d] uppercase tracking-[0.2em]">
            / certifications
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight max-w-4xl">
            Continuous learning, documented.
          </h1>
          <p className="mt-6 text-neutral-400 text-lg max-w-3xl leading-relaxed">
            Curated certifications from DeepLearning.AI, Google, NVIDIA, and others — each one
            tied to a capability I use in real projects.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-10 pb-24">
        {/* Filter pills */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500">
            <Filter size={14} /> Filter by issuer:
          </span>
          {issuers.map((iss) => (
            <button
              key={iss}
              onClick={() => setFilter(iss)}
              className={`text-xs font-mono px-3 py-1.5 rounded-full border transition-colors ${
                filter === iss
                  ? 'bg-[#c1ff3d] text-[#0a0b0a] border-[#c1ff3d]'
                  : 'border-white/10 text-neutral-300 hover:border-[#c1ff3d]/40 hover:text-[#c1ff3d]'
              }`}
            >
              {iss}
            </button>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map((c, i) => (
            <div
              key={i}
              className="group relative rounded-xl border border-white/5 bg-[#0c0e0c] p-6 hover:border-[#c1ff3d]/30 transition-colors overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-[#c1ff3d]/[0.04] blur-2xl group-hover:bg-[#c1ff3d]/[0.12] transition-colors" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="h-9 w-9 rounded-md border border-white/10 bg-white/[0.02] flex items-center justify-center">
                    <Award size={16} className="text-[#c1ff3d]" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500">
                    {c.date}
                  </span>
                </div>
                <h3 className="mt-5 font-medium text-white leading-snug">{c.name}</h3>
                <p className="mt-2 text-sm text-[#c1ff3d] font-mono">{c.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Certifications;
