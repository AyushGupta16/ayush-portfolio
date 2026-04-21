import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Layers, Target, Wrench, GitBranch } from 'lucide-react';
import { projects } from '../mock';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-20">
        <p className="text-neutral-400">Project not found.</p>
        <Link to="/projects" className="mt-4 inline-flex items-center gap-2 text-[#c1ff3d]">
          <ArrowLeft size={16} /> Back to projects
        </Link>
      </div>
    );
  }

  const Section = ({ icon: Icon, label, title, children }) => (
    <section className="border-t border-white/5 first:border-t-0">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-10">
        <div className="flex items-center gap-3">
          <Icon size={16} className="text-[#c1ff3d]" />
          <p className="font-mono text-[11px] text-[#c1ff3d] uppercase tracking-[0.2em]">
            / {label}
          </p>
        </div>
        <h2 className="mt-2 text-2xl sm:text-[1.75rem] font-semibold tracking-tight">
          {title}
        </h2>
        <div className="mt-4">{children}</div>
      </div>
    </section>
  );

  return (
    <div>
      {/* Header */}
      <section className="relative border-b border-white/5">
        <div className="absolute inset-0 bg-grid mask-radial opacity-40 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 pt-10 pb-10">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-[#c1ff3d] transition-colors"
          >
            <ArrowLeft size={16} /> All projects
          </Link>

          <div className="mt-6 flex items-center gap-3">
            <span className="font-mono text-[11px] text-[#c1ff3d] uppercase tracking-[0.2em]">
              / case-study
            </span>
            <span className="h-1 w-1 rounded-full bg-neutral-700" />
            <span className="font-mono text-xs text-neutral-500">{project.period}</span>
          </div>

          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1]">
            {project.name}
          </h1>
          <p className="mt-3 text-neutral-400 text-base sm:text-lg leading-relaxed max-w-3xl">
            {project.tagline}
          </p>
        </div>
      </section>

      {/* Problem */}
      <Section icon={Target} label="problem" title="The problem">
        <p className="text-neutral-300 leading-relaxed max-w-3xl">{project.problem}</p>
      </Section>

      {/* What I Built */}
      <Section icon={Wrench} label="what-i-built" title="What I built">
        <p className="text-neutral-300 leading-relaxed max-w-3xl">{project.whatIBuilt}</p>
      </Section>

      {/* Tech Stack */}
      <Section icon={Layers} label="tech-stack" title="Tech stack">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="text-xs font-mono px-2.5 py-1.5 rounded-md border border-white/10 bg-white/[0.02] text-neutral-200 hover:border-[#c1ff3d]/40 hover:text-[#c1ff3d] transition-colors"
            >
              {s}
            </span>
          ))}
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1.5 rounded-md bg-[#c1ff3d]/10 text-[#c1ff3d]"
            >
              {t}
            </span>
          ))}
        </div>
      </Section>

      {/* System Flow */}
      <Section icon={GitBranch} label="system-flow" title="System flow">
        <p className="text-neutral-300 leading-relaxed max-w-3xl">{project.systemFlow}</p>
      </Section>

      {/* Outcome / Impact */}
      <Section icon={CheckCircle2} label="outcome-impact" title="Outcome & impact">
        <ul className="space-y-3 max-w-3xl">
          {project.outcomes.map((o) => (
            <li key={o} className="text-neutral-200 leading-relaxed flex gap-3">
              <span className="mt-2.5 h-1 w-1 rounded-full bg-[#c1ff3d] flex-shrink-0" />
              {o}
            </li>
          ))}
        </ul>
      </Section>

      {/* Other projects */}
      <section className="border-t border-white/5 bg-[#0b0d0b]">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-12">
          <p className="font-mono text-[11px] text-[#c1ff3d] uppercase tracking-[0.2em]">
            / keep-reading
          </p>
          <h3 className="mt-2 text-xl font-semibold">Other case studies</h3>
          <div className="mt-5 grid md:grid-cols-2 gap-3">
            {projects
              .filter((p) => p.slug !== slug)
              .map((p) => (
                <Link
                  key={p.slug}
                  to={`/projects/${p.slug}`}
                  className="rounded-xl border border-white/5 bg-[#0c0e0c] p-5 hover:border-[#c1ff3d]/40 transition-colors"
                >
                  <div className="font-mono text-xs text-neutral-500">{p.period}</div>
                  <div className="mt-1.5 font-semibold text-white">{p.name}</div>
                  <div className="mt-1.5 text-sm text-neutral-400">{p.tagline}</div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
