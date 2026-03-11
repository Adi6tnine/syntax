import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Terminal, Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';

const Navbar = ({ isDark, setIsDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/event', label: 'Concept' },
    { path: '/phases', label: 'Event Phases' },
    { path: '/technologies', label: 'Tools' },
    { path: '/projects', label: 'Buildathon' },
    { path: '/organizer', label: 'Host' },
    { path: '/faq', label: 'FAQ' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Terminal className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
            <span className="font-bold text-lg text-slate-900 dark:text-slate-50 hidden sm:block">
              Syntax 2.0
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${isActive(link.path)
                    ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="ml-2 p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Register Button */}
            <Link
              to="/register"
              className="ml-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 text-white dark:text-slate-950 rounded-lg font-semibold transition-all duration-200"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg font-medium transition-all duration-200 ${isActive(link.path)
                    ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="w-full px-4 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 flex items-center gap-2"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
            </button>

            <Link
              to="/register"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 text-white dark:text-slate-950 rounded-lg font-semibold text-center transition-all duration-200"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
