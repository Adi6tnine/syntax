import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Github, Twitter, Linkedin } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/event', label: 'Concept' },
  { path: '/phases', label: 'Phases' },
  { path: '/technologies', label: 'Tools' },
  { path: '/projects', label: 'Projects' },
  { path: '/organizer', label: 'Organizer' },
  { path: '/faq', label: 'FAQ' },
  { path: '/register', label: 'Register' },
];

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-16 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-3">
              <Terminal className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-slate-900 dark:text-slate-100 font-bold tracking-tight text-lg">
                Syntax 2.0
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Empowering students to learn modern AI development workflows and build the next generation of intelligent applications.
            </p>
          </div>

          {/* Nav Links */}
          <div>
            <p className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-500 mb-4">
              Pages
            </p>
            <ul className="grid grid-cols-2 gap-x-12 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Host */}
          <div className="text-sm font-medium text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 px-5 py-4 rounded-xl bg-white dark:bg-slate-900">
            <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-500 mb-1">
              Organized by
            </p>
            <p className="font-bold text-slate-900 dark:text-slate-100">
              Engineering Community
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              Chandigarh University
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 dark:text-slate-500">
            © 2025 Engineering Community — Chandigarh University. All rights reserved.
          </p>
          <Link
            to="/register"
            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            Register for the event →
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
