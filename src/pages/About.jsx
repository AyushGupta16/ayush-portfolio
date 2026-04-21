import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Sparkles, Briefcase, GraduationCap, Trophy, Users } from 'lucide-react';
import { profile, education, experience, achievements, leadership } from '../mock';

const About = () => {
  // Build a unified timeline ordered from newest to oldest.
  const timeline = [
    ...experience.map((e) => ({
      kind: 'Work',
      icon: Briefcase,
      title: e.role,
      place: e.company,
      period: e.period,
      detail: e.bullets[0],
    })),
    ...education.map((e) => ({
      kind: 'Education',
      icon: GraduationCap,
      title: e.degree,
      place: e.school,
      period: e.period,
      detail: e.location,
    })),
    ...leadership.map((l) => ({
      kind: 'Leadership',
      icon: Users,
      title: l.role,
      place: l.org,
      period: l.period,
      detail: l.detail,
    })),
  ];

  return (
    <div>
      {/* Header */}
      <section className="relative border-b border-white/5">
        <div className="absolute inset-0 bg-grid mask-radial opacity-40 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-10 pt-12 pb-10">
          <p className="font-mono text-[11px] text-[#c1ff3d] uppercase tracking-[0.2em]">/ about</p>
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] max-w-4xl">
            I engineer AI systems, end-to-end.
          </h1>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg leading-relaxed max-w-3xl">
            {profile.summary}
          </p>
        </div>
      </section>

      {/* Bio + sidebar */}
      <section className="max-w-6xl mx-auto px-6 lg:px-10 py-12">
        <div className="grid lg:grid-cols-[1fr_300px] gap-10">
          <div className="space-y-4 text-neutral-300 leading-relaxed">
            <p>
              I'm Ayush — a CS graduate from Lovely Professional University focused on
              production-ready ML. My work sits at the intersection of{' '}
              <span className="text-white">machine learning</span>,{' '}
              <span className="text-white">backend engineering</span>, and{' '}
              <span className="text-white">applied product thinking</span>.
            </p>
            <p>
              I started with classical ML — churn modeling, imbalanced data, and careful
              evaluation metrics that go beyond accuracy. That foundation shaped how I approach
              modern AI: ROC-AUC over vanity numbers, iterative tuning over single runs, and
              honest evaluation frameworks like RAGAS for LLM systems.
            </p>
            <p>
              Today I build backend-integrated ML services across RAG, NLP, and computer vision
              — designed to live behind a FastAPI endpoint and serve real traffic, not sit in a
              notebook.
            </p>
          </div>

          <aside className="space-y-3">
            <div className="rounded-xl border border-white/5 bg-[#0c0e0c] p-5">
              <div className="flex items-center gap-2 text-sm text-neutral-400">
                <MapPin size={15} className="text-[#c1ff3d]" /> Based in
              </div>
              <div className="mt-1.5 text-white font-medium">{profile.location}</div>
            </div>
            <div className="rounded-xl border border-white/5 bg-[#0c0e0c] p-5">
              <div className="flex items-center gap-2 text-sm text-neutral-400">
                <Sparkles size={15} className="text-[#c1ff3d]" /> Currently
              </div>
              <div className="mt-1.5 text-white font-medium">Building RAG evaluation tooling</div>
              <div className="text-sm text-neutral-500 mt-0.5">
                and shipping production-ready ML services.
              </div>
            </div>
            <Link
              to="/contact"
              className="block rounded-xl border border-[#c1ff3d]/30 bg-[#c1ff3d]/[0.06] p-5 hover:bg-[#c1ff3d]/10 transition-colors"
            >
              <div className="text-[11px] text-[#c1ff3d] font-mono uppercase tracking-[0.2em]">
                / let's-connect
              </div>
              <div className="mt-1.5 text-white font-medium">
                Open to AI/ML engineering roles
              </div>
              <div className="text-sm text-neutral-400 mt-0.5">{profile.email}</div>
            </Link>
          </aside>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-white/5 bg-[#0b0d0b]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-12">
          <p className="font-mono text-[11px] text-[#c1ff3d] uppercase tracking-[0.2em]">
            / timeline
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">
            Work, study, and everything in between
          </h2>

          <ol className="mt-8 relative border-l border-white/10 ml-3 space-y-6">
            {timeline.map((t, i) => {
              const Icon = t.icon;
              return (
                <li key={i} className="relative pl-7">
                  <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-[#c1ff3d] ring-4 ring-[#0b0d0b]" />
                  <div className="rounded-lg border border-white/5 bg-[#0c0e0c] p-5">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Icon size={14} className="text-[#c1ff3d]" />
                        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#c1ff3d]">
                          {t.kind}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-neutral-500">{t.period}</span>
                    </div>
                    <div className="mt-2 text-white font-medium">{t.title}</div>
                    <div className="text-sm text-neutral-400">{t.place}</div>
                    {t.detail && (
                      <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{t.detail}</p>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto px-6 lg:px-10 py-12">
        <div className="flex items-center gap-2">
          <Trophy size={16} className="text-[#c1ff3d]" />
          <p className="font-mono text-[11px] text-[#c1ff3d] uppercase tracking-[0.2em]">
            / highlights
          </p>
        </div>
        <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">
          Selected outcomes
        </h2>

        <div className="mt-6 grid md:grid-cols-2 gap-3">
          {achievements.map((a, i) => (
            <div key={i} className="rounded-lg border border-white/5 bg-[#0c0e0c] p-5">
              <div className="font-mono text-[11px] text-neutral-500">
                #{String(i + 1).padStart(2, '0')}
              </div>
              <p className="mt-2 text-neutral-200 leading-relaxed text-sm">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
