import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ArrowRight,
  Brain,
  Eye,
  Sparkles,
  Server,
  Download,
  FolderKanban,
  UserRound,
} from 'lucide-react';
import { profile, stats, projects, systemFocus, skillGroups } from '../mock';

const Home = () => {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid mask-radial opacity-60 pointer-events-none" />
        <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-[#c1ff3d]/10 blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-14 pb-16 lg:pt-16 lg:pb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono text-neutral-300 fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c1ff3d] animate-pulse" />
            Available for AI/ML engineering roles · {profile.location}
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[4.5rem] font-semibold tracking-tight leading-[1.05] max-w-5xl fade-up">
            Building <span className="italic text-[#c1ff3d]">intelligent</span> systems,
            <br className="hidden sm:block" /> not just models.
          </h1>

          <p className="mt-5 max-w-2xl text-neutral-400 text-base sm:text-lg leading-relaxed fade-up">
            {profile.subtext}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 fade-up">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#c1ff3d] text-[#0a0b0a] font-medium hover:bg-[#d4ff66] transition-colors"
            >
              <FolderKanban size={16} />
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-white/15 hover:border-[#c1ff3d]/60 hover:text-[#c1ff3d] text-neutral-200 font-medium transition-colors"
            >
              <UserRound size={16} />
              About Me
            </Link>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-white/10 hover:border-white/25 text-neutral-300 font-medium transition-colors"
            >
              <Download size={16} />
              Resume
            </a>
          </div>

          {/* Terminal-style tag */}
          <div className="mt-10 max-w-2xl font-mono text-xs text-neutral-500 border border-white/5 bg-white/[0.02] rounded-md p-3.5 fade-up">
            <span className="text-[#c1ff3d]">~</span> focus<span className="text-neutral-600"> = </span>
            <span className="text-neutral-300">["RAG", "NLP", "Computer Vision", "FastAPI", "Production ML"]</span>
            <span className="blink">_</span>
          </div>
        </div>

        {/* STATS */}
        <div className="relative border-y border-white/5 bg-[#0b0d0b]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5">
            {stats.map((s) => (
              <div key={s.label} className="px-4 py-6 lg:px-8 lg:py-7 first:pl-0 lg:first:pl-0">
                <div className="font-mono text-[#c1ff3d] text-3xl lg:text-4xl font-semibold">{s.value}</div>
                <div className="mt-1.5 text-sm text-neutral-200">{s.label}</div>
                <div className="text-xs text-neutral-500 mt-0.5">{s.hint}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="font-mono text-xs text-[#c1ff3d] uppercase tracking-[0.2em]">/ featured-work</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
              Systems, not notebooks.
            </h2>
            <p className="mt-2 text-neutral-400 max-w-xl">
              Each project is presented as an end-to-end AI system — problem, what was built, backend integration, and production-ready outcomes.
            </p>
          </div>
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-[#c1ff3d] transition-colors">
            All projects <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="mt-8 grid lg:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <Link
              to={`/projects/${p.slug}`}
              key={p.slug}
              className="group relative rounded-xl border border-white/5 bg-[#0c0e0c] hover:border-[#c1ff3d]/40 transition-colors p-8 overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[#c1ff3d]/5 blur-3xl group-hover:bg-[#c1ff3d]/15 transition-colors" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-neutral-500">0{i + 1} · {p.period}</span>
                  <div className="flex gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-neutral-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="mt-6 text-2xl lg:text-3xl font-semibold tracking-tight">
                  {p.name}
                </h3>
                <p className="mt-3 text-neutral-400 text-sm leading-relaxed">{p.tagline}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.slice(0, 5).map((s) => (
                    <span key={s} className="text-xs font-mono px-2 py-1 rounded border border-white/10 text-neutral-300">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-8 inline-flex items-center gap-2 text-sm text-[#c1ff3d]">
                  Read case study <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ML SYSTEM EXPERIENCE */}
      <section className="border-t border-white/5 bg-[#0b0d0b]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
          <div className="grid lg:grid-cols-[340px_1fr] gap-12">
            <div>
              <p className="font-mono text-xs text-[#c1ff3d] uppercase tracking-[0.2em]">/ ml-system-experience</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
                Where I operate.
              </h2>
              <p className="mt-4 text-neutral-400 leading-relaxed">
                From imbalanced tabular data to RAG pipelines and persona-aware agents —
                always with the backend in mind.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {systemFocus.map((f, i) => {
                const icons = [Sparkles, Eye, Brain, Server];
                const Icon = icons[i % icons.length];
                return (
                  <div
                    key={f.title}
                    className="rounded-xl border border-white/5 bg-[#0c0e0c] p-6 hover:border-[#c1ff3d]/30 transition-colors"
                  >
                    <Icon size={20} className="text-[#c1ff3d]" />
                    <h3 className="mt-5 font-semibold">{f.title}</h3>
                    <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{f.description}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {f.items.map((it) => (
                        <span key={it} className="text-[11px] font-mono text-neutral-300 px-2 py-0.5 rounded bg-white/5">
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS PREVIEW */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="font-mono text-xs text-[#c1ff3d] uppercase tracking-[0.2em]">/ toolkit</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
              The stack I reach for.
            </h2>
          </div>
          <Link to="/skills" className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-[#c1ff3d]">
            Full breakdown <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.slice(0, 6).map((g) => (
            <div key={g.group} className="rounded-xl border border-white/5 bg-[#0c0e0c] p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{g.group}</h3>
                <span className="font-mono text-[10px] text-neutral-500">{String(g.items.length).padStart(2, '0')}</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span key={it} className="text-xs px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-neutral-300">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-16">
        <div className="relative overflow-hidden rounded-2xl border border-[#c1ff3d]/20 bg-gradient-to-br from-[#0f120f] to-[#0a0b0a] p-10 lg:p-14">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#c1ff3d]/15 blur-3xl pointer-events-none" />
          <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight max-w-2xl">
                Have an AI system to build? <span className="text-[#c1ff3d]">Let's talk.</span>
              </h3>
              <p className="mt-3 text-neutral-400 max-w-xl">
                Open to ML engineering roles and collaborations on real-world AI systems.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#c1ff3d] text-[#0a0b0a] font-medium hover:bg-[#d4ff66] transition-colors w-fit"
            >
              Get in touch <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
