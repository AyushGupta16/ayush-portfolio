import React, { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { profile } from '../mock';

const nav = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/skills', label: 'Skills' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

const Layout = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#0a0b0a] text-neutral-200">
      {/* NAV */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          scrolled
            ? 'bg-[#0a0b0a]/80 backdrop-blur-md border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="h-8 w-8 rounded-md border border-[#c1ff3d]/40 flex items-center justify-center font-mono text-[#c1ff3d] text-sm group-hover:bg-[#c1ff3d]/10 transition-colors">
              AG
            </span>
            <span className="font-medium tracking-tight hidden sm:block">
              Ayush Gupta
              <span className="text-neutral-500 font-mono text-xs ml-2">/ ML Engineer</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 text-sm">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.end}
                className={({ isActive }) =>
                  `nav-link text-neutral-400 hover:text-white ${isActive ? 'text-white active' : ''}`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-md bg-[#c1ff3d] text-[#0a0b0a] hover:bg-[#d4ff66] transition-colors"
            >
              Resume
              <ArrowUpRight size={16} />
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-md border border-white/10 hover:bg-white/5"
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-white/5 bg-[#0a0b0a]">
            <div className="px-6 py-4 flex flex-col gap-1">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end={n.end}
                  className={({ isActive }) =>
                    `py-2 text-sm ${isActive ? 'text-[#c1ff3d]' : 'text-neutral-300'}`
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-md bg-[#c1ff3d] text-[#0a0b0a] w-fit"
              >
                Resume <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="pt-16">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-8 w-8 rounded-md border border-[#c1ff3d]/40 flex items-center justify-center font-mono text-[#c1ff3d] text-sm">
                AG
              </span>
              <span className="font-medium">Ayush Gupta</span>
            </div>
            <p className="mt-4 text-sm text-neutral-400 max-w-xs leading-relaxed">
              Building intelligent systems, not just models. Based in {profile.location}.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">Navigate</p>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-neutral-300 hover:text-[#c1ff3d] transition-colors">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">Connect</p>
            <div className="flex flex-col gap-3 text-sm">
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 text-neutral-300 hover:text-[#c1ff3d]">
                <Mail size={16} /> {profile.email}
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-neutral-300 hover:text-[#c1ff3d]">
                <Github size={16} /> GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-neutral-300 hover:text-[#c1ff3d]">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-neutral-500 font-mono">
            <span>© {new Date().getFullYear()} Ayush Gupta. All rights reserved.</span>
            <span>Designed & built with care — React + Tailwind.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
