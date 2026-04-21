import React from 'react';
import { Mail, Github, Linkedin, Phone, MapPin, Copy, ArrowUpRight } from 'lucide-react';
import { toast } from 'sonner';
import { profile } from '../mock';

const Contact = () => {
  const copy = (value, label) => {
    navigator.clipboard.writeText(value);
    toast.success(`${label} copied to clipboard`);
  };

  const channels = [
    {
      icon: Mail,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      copyable: true,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, '')}`,
      copyable: true,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: profile.github.replace('https://', ''),
      href: profile.github,
      copyable: false,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: profile.linkedin.replace('https://www.', ''),
      href: profile.linkedin,
      copyable: false,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: profile.location,
      href: null,
      copyable: false,
    },
  ];

  return (
    <div>
      <section className="relative">
        <div className="absolute inset-0 bg-grid mask-radial opacity-40 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 pt-20 pb-16">
          <p className="font-mono text-xs text-[#c1ff3d] uppercase tracking-[0.2em]">/ contact</p>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
            Let's build something <span className="text-[#c1ff3d]">real</span>.
          </h1>
          <p className="mt-6 text-neutral-400 text-lg max-w-2xl leading-relaxed">
            Open to ML engineering roles and collaborations. The fastest way to reach me is
            email or LinkedIn.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 lg:px-10 pb-24">
        <div className="grid md:grid-cols-2 gap-4">
          {channels.map((c) => {
            const Icon = c.icon;
            const Inner = (
              <div className="group relative rounded-2xl border border-white/5 bg-[#0c0e0c] p-7 hover:border-[#c1ff3d]/40 transition-colors overflow-hidden h-full">
                <div className="absolute -top-14 -right-14 h-40 w-40 rounded-full bg-[#c1ff3d]/[0.03] blur-2xl group-hover:bg-[#c1ff3d]/[0.12] transition-colors" />
                <div className="relative flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <span className="h-11 w-11 rounded-lg border border-white/10 bg-white/[0.02] flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-[#c1ff3d]" />
                    </span>
                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">
                        {c.label}
                      </div>
                      <div className="mt-1 text-white font-medium break-all">{c.value}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    {c.copyable && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          copy(c.value, c.label);
                        }}
                        className="h-8 w-8 rounded-md border border-white/10 flex items-center justify-center hover:border-[#c1ff3d]/40 hover:text-[#c1ff3d] text-neutral-400 transition-colors"
                        aria-label={`Copy ${c.label}`}
                      >
                        <Copy size={14} />
                      </button>
                    )}
                    {c.href && (
                      <span className="h-8 w-8 rounded-md border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-[#c1ff3d] group-hover:border-[#c1ff3d]/40 transition-colors">
                        <ArrowUpRight size={14} />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
            return c.href ? (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="block"
              >
                {Inner}
              </a>
            ) : (
              <div key={c.label}>{Inner}</div>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-[#c1ff3d]/20 bg-gradient-to-br from-[#0f120f] to-[#0a0b0a] p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <p className="font-mono text-xs text-[#c1ff3d] uppercase tracking-[0.2em]">/ prefer-a-direct-email</p>
              <h3 className="mt-2 text-2xl sm:text-3xl font-semibold">Drop a line any time.</h3>
              <p className="mt-2 text-neutral-400 text-sm">I typically reply within 24 hours.</p>
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#c1ff3d] text-[#0a0b0a] font-medium hover:bg-[#d4ff66] transition-colors w-fit"
            >
              <Mail size={16} /> {profile.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
