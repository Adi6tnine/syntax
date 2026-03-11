import React from 'react';
import { ExternalLink, Github, Globe, Twitter, Linkedin, Code2 } from 'lucide-react';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import AnimatedSection from '../components/AnimatedSection';

// ─── EDIT YOUR PROFILE HERE ───────────────────────────────────────────────────
const HOST = {
  name: 'Adarsh Kumar',
  role: 'CS Student & Builder',
  university: 'Chandigarh University',
  bio: 'Actively building technology platforms and experimenting with modern AI development tools. My work focuses on creating practical solutions and exploring how developers can accelerate product development using AI-assisted workflows.',
  avatar: 'https://github.com/adi6tnine.png', // TODO: replace with your photo URL e.g. 'https://github.com/yourusername.png'
  links: {
    github: 'https://github.com/adi6tnine', // TODO: update with your GitHub
    linkedin: '#',   // TODO: your LinkedIn URL (leave '#' to hide the button)
    twitter: '#',    // TODO: your Twitter/X URL
    portfolio: '#',  // TODO: your portfolio site
    resume: '#',     // TODO: link to your resume PDF
  },
};

// ─── EDIT YOUR INTERESTS ─────────────────────────────────────────────────────
const INTERESTS = [
  'Artificial Intelligence',
  'Product Development',
  'Rapid Prototyping',
  'Developer Tools',
  'Full-Stack Engineering',
  'AI Agents',
  'Open Source',
];

// ─── EDIT YOUR PROJECTS ──────────────────────────────────────────────────────
// image: URL to a screenshot/OG image. Set to null to show a placeholder.
// preview: Live site URL. Set to '#' or '' to show "Coming soon".
// github: Repo URL. Set to '#' or '' to show "Private".
const PROJECTS = [
  {
    name: 'DUMCRAFT',
    tagline: 'Real-time food ordering system',
    desc: 'Full-stack food ordering platform with live order tracking, restaurant dashboards, and a seamless checkout flow.',
    image: null,
    previewEmbed: 'https://dumcraft.app',
    preview: 'https://dumcraft.app',
    github: '#',        // TODO: add repo URL
    stack: ['Next.js', 'Supabase', 'Tailwind'],
    status: 'Live',
    statusColor: 'emerald',
  },
  {
    name: 'AVION',
    tagline: 'Where serious builders connect',
    desc: 'A platform for discovering developers, designers, and builders through real projects and proof of work — not just resumes.',
    image: null,
    previewEmbed: 'https://avionx.netlify.app',
    preview: 'https://avionx.netlify.app',
    github: '#',        // TODO: add repo URL
    stack: ['React', 'Vite', 'Netlify'],
    status: 'Live',
    statusColor: 'emerald',
  },
];

// ─── Status badge color map ───────────────────────────────────────────────────
const statusStyles = {
  emerald: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/30',
  amber:   'bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-500/30',
  blue:    'bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-500/30',
};

const Host = () => {
  return (
    <>
      {/* ── Hero Profile ──────────────────────────────────────────────────── */}
      <Section bg="bg-white dark:bg-slate-950">
        <AnimatedSection>
          <SectionHeader badge="The Host" title="Meet the Organizer" />
        </AnimatedSection>

        <AnimatedSection delay={80}>
          <div className="grid md:grid-cols-3 gap-8 items-start mt-2">

            {/* Avatar + links card */}
            <div className="md:col-span-1">
              <div className="relative bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 overflow-hidden shadow-sm">
                <div className="absolute -top-20 -right-20 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 flex flex-col items-center text-center gap-4">

                  {/* Avatar */}
                  {HOST.avatar ? (
                    <img
                      src={HOST.avatar}
                      alt={HOST.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-lg"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-3xl font-extrabold text-white shadow-lg select-none">
                      {HOST.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}

                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{HOST.name}</h2>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mt-0.5">{HOST.role}</p>
                    <p className="text-slate-500 dark:text-slate-500 text-xs mt-1">{HOST.university}</p>
                  </div>

                  {/* Social links — only renders if URL is not '#' */}
                  <div className="flex items-center gap-2 flex-wrap justify-center pt-1">
                    {HOST.links.github && HOST.links.github !== '#' && (
                      <a href={HOST.links.github} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-2 bg-slate-900 hover:bg-slate-700 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 rounded-lg text-xs font-bold transition-colors">
                        <Github className="w-3.5 h-3.5" /> GitHub
                      </a>
                    )}
                    {HOST.links.linkedin && HOST.links.linkedin !== '#' && (
                      <a href={HOST.links.linkedin} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-2 bg-[#0A66C2] hover:bg-[#0856a8] text-white rounded-lg text-xs font-bold transition-colors">
                        <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                      </a>
                    )}
                    {HOST.links.portfolio && HOST.links.portfolio !== '#' && (
                      <a href={HOST.links.portfolio} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 rounded-lg text-xs font-bold transition-colors">
                        <Globe className="w-3.5 h-3.5" /> Portfolio
                      </a>
                    )}
                    {HOST.links.twitter && HOST.links.twitter !== '#' && (
                      <a href={HOST.links.twitter} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-2 bg-black hover:bg-neutral-800 text-white rounded-lg text-xs font-bold transition-colors">
                        <Twitter className="w-3.5 h-3.5" /> Twitter
                      </a>
                    )}
                    {HOST.links.resume && HOST.links.resume !== '#' && (
                      <a href={HOST.links.resume} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 rounded-lg text-xs font-bold transition-colors">
                        <ExternalLink className="w-3.5 h-3.5" /> Résumé
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Bio + interests */}
            <div className="md:col-span-2 space-y-6">
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed border-l-4 border-blue-400 dark:border-blue-500/60 pl-5">
                {HOST.bio}
              </p>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3">
                  Areas of Interest
                </p>
                <div className="flex flex-wrap gap-2">
                  {INTERESTS.map((tag, i) => (
                    <span key={i}
                      className="px-3 py-1.5 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 p-5 rounded-xl">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">Why this event?</p>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  To introduce students to modern AI development workflows and help them build practical,
                  portfolio-ready technology solutions — bridging the gap between classroom learning and
                  real-world product development.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Projects Showcase ────────────────────────────────────────────────── */}
      <Section bg="bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800">
        <AnimatedSection>
          <SectionHeader badge="Work" title="Projects" />
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-12 max-w-2xl">
            Things I've built — from hackathon prototypes to production platforms.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg transition-all duration-300 group flex flex-col h-full">

                {/* Screenshot / iframe preview / placeholder */}
                <div className="w-full h-44 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden flex-shrink-0">
                  {project.previewEmbed ? (
                    <div className="w-full h-full relative overflow-hidden">
                      <iframe
                        src={project.previewEmbed}
                        title={`${project.name} preview`}
                        className="absolute top-0 left-0 border-0 pointer-events-none"
                        style={{
                          width: '200%',
                          height: '200%',
                          transform: 'scale(0.5)',
                          transformOrigin: 'top left',
                        }}
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin"
                      />
                      {/* Overlay to block interaction on the iframe */}
                      <div className="absolute inset-0 bg-transparent cursor-default" />
                    </div>
                  ) : project.image ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 opacity-30">
                      <Code2 className="w-10 h-10 text-slate-500 dark:text-slate-400" />
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400">preview coming soon</span>
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${statusStyles[project.statusColor] ?? statusStyles.blue}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{project.name}</h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{project.tagline}</p>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 flex-1">
                    {project.desc}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.stack.map((tech, j) => (
                      <span key={j}
                        className="px-2 py-0.5 text-[11px] font-mono font-semibold rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                    {project.preview && project.preview !== '#' ? (
                      <a href={project.preview} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 text-white dark:text-slate-950 rounded-lg text-xs font-bold transition-colors flex-1 justify-center">
                        <ExternalLink className="w-3.5 h-3.5" /> Live Preview
                      </a>
                    ) : (
                      <span className="flex items-center gap-1.5 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-600 rounded-lg text-xs font-bold flex-1 justify-center cursor-not-allowed select-none">
                        <ExternalLink className="w-3.5 h-3.5" /> Preview soon
                      </span>
                    )}
                    {project.github && project.github !== '#' ? (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-700 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 rounded-lg text-xs font-bold transition-colors">
                        <Github className="w-3.5 h-3.5" /> Code
                      </a>
                    ) : (
                      <span className="flex items-center gap-1.5 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-600 rounded-lg text-xs font-bold cursor-not-allowed select-none">
                        <Github className="w-3.5 h-3.5" /> Private
                      </span>
                    )}
                  </div>
                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Host;
