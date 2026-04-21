import React from 'react';
import { BookOpen, Clock } from 'lucide-react';
import { blogPosts } from '../mock';

const Blog = () => {
  return (
    <div>
      <section className="relative">
        <div className="absolute inset-0 bg-grid mask-radial opacity-40 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-10 pt-20 pb-12">
          <p className="font-mono text-xs text-[#c1ff3d] uppercase tracking-[0.2em]">/ blog</p>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight max-w-4xl">
            Notes from building ML systems.
          </h1>
          <p className="mt-6 text-neutral-400 text-lg max-w-3xl leading-relaxed">
            Upcoming essays on RAG evaluation, persona-aware agents, imbalanced data, and
            shipping ML as real services. Currently drafting — subscribe soon.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-10 pb-24">
        <div className="grid md:grid-cols-2 gap-4">
          {blogPosts.map((p, i) => (
            <article
              key={i}
              className="group relative rounded-2xl border border-white/5 bg-[#0c0e0c] p-7 hover:border-[#c1ff3d]/30 transition-colors overflow-hidden cursor-not-allowed"
            >
              <div className="absolute -top-14 -right-14 h-40 w-40 rounded-full bg-[#c1ff3d]/[0.03] blur-2xl group-hover:bg-[#c1ff3d]/[0.1] transition-colors" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider px-2 py-1 rounded bg-[#c1ff3d]/10 text-[#c1ff3d]">
                    <BookOpen size={12} /> {p.tag}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-neutral-500">
                    <Clock size={12} /> {p.date}
                  </span>
                </div>
                <h2 className="mt-5 text-xl lg:text-2xl font-semibold tracking-tight text-white leading-snug">
                  {p.title}
                </h2>
                <p className="mt-3 text-neutral-400 text-sm leading-relaxed">{p.excerpt}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-xs font-mono text-neutral-500">
                  <span className="h-1 w-1 rounded-full bg-[#c1ff3d]" /> Draft in progress
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-[#c1ff3d]/20 bg-[#c1ff3d]/[0.04] p-8 text-center">
          <p className="font-mono text-xs text-[#c1ff3d] uppercase tracking-[0.2em]">/ coming-soon</p>
          <h3 className="mt-3 text-2xl sm:text-3xl font-semibold">
            Writing about ML systems takes time.
          </h3>
          <p className="mt-3 text-neutral-400 max-w-xl mx-auto">
            I'd rather publish a few thorough essays than many shallow ones. Follow along on
            GitHub or LinkedIn for updates.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;
