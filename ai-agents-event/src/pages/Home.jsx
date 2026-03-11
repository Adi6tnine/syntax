import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Layers, Network, Cpu, Rocket } from 'lucide-react';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import AnimatedSection from '../components/AnimatedSection';

const Home = () => {
  return (
    <>
      {/* ── Hero Section ────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 overflow-hidden border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

        <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-start">
          {/* Top Badge */}
          <AnimatedSection>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-mono text-xs uppercase tracking-wider bg-slate-100 dark:bg-slate-900 px-4 py-2.5 rounded-full border border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-300">
                <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                Organized by Engineering Community - Chandigarh University
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[1.1] tracking-tight mb-8 text-slate-900 dark:text-slate-50 transition-colors duration-300">
              Syntax 2.0: <br />
              <span className="text-blue-600 dark:text-blue-400">AI Agent Buildathon</span>
            </h1>

            <p className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300 mb-3 max-w-3xl leading-relaxed transition-colors duration-300">
              Learn how modern developers build full-stack applications using AI-assisted development tools and rapid product workflows.
            </p>

            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-6 max-w-2xl font-medium">
              From idea → working product in a single build session.
            </p>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection delay={120}>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16">
              <Link
                to="/event"
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 text-white dark:text-slate-950 px-8 py-4 rounded-lg font-semibold transition-all duration-200 group shadow-lg shadow-blue-500/20"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/register"
                className="flex items-center justify-center gap-2 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-sm"
              >
                Register Now
              </Link>
            </div>
          </AnimatedSection>

          {/* Premium AI Stack Marquee Banner */}
          <AnimatedSection delay={220}>
            <div className="w-full max-w-5xl">
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                  </span>
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                    Actively Used
                  </span>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-blue-200 dark:from-blue-500/30 to-transparent"></div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Modern AI Development Stack</p>
              </div>

              {/* Marquee Container */}
              <div
                className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-900/80 dark:to-blue-950/20 py-6"
                style={{ WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)' }}
              >
                {/* Row 1 — scrolls left */}
                <div className="flex gap-4 mb-4" style={{ animation: 'marquee-left 28s linear infinite', width: 'max-content' }}>
                  {[
                    { name: 'Antigravity', label: 'AI IDE', svg: <img src="https://antigravity.google/assets/image/antigravity-logo.png" alt="Antigravity" className="w-7 h-7 object-contain" /> },
                    { name: 'GitHub Copilot', label: 'Code AI', svg: <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/githubcopilot.svg" alt="Copilot" className="w-7 h-7 dark:invert" /> },
                    { name: 'OpenAI', label: 'LLM API', svg: <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/openai.svg" alt="OpenAI" className="w-7 h-7 dark:invert" /> },
                    { name: 'Gemini', label: 'LLM API', svg: <img src="https://cdn.simpleicons.org/googlegemini" alt="Gemini" className="w-7 h-7" /> },
                    { name: 'Vercel', label: 'Deploy', svg: <img src="https://cdn.simpleicons.org/vercel" alt="Vercel" className="w-7 h-7 dark:invert" /> },
                    { name: 'Netlify', label: 'Deploy', svg: <img src="https://cdn.simpleicons.org/netlify" alt="Netlify" className="w-7 h-7" /> },
                    { name: 'Supabase', label: 'Backend', svg: <img src="https://cdn.simpleicons.org/supabase" alt="Supabase" className="w-7 h-7" /> },
                    { name: 'React', label: 'Frontend', svg: <img src="https://cdn.simpleicons.org/react" alt="React" className="w-7 h-7" /> },
                    // duplicated for seamless loop
                    { name: 'Antigravity', label: 'AI IDE', svg: <img src="https://antigravity.google/assets/image/antigravity-logo.png" alt="Antigravity" className="w-7 h-7 object-contain" /> },
                    { name: 'GitHub Copilot', label: 'Code AI', svg: <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/githubcopilot.svg" alt="Copilot" className="w-7 h-7 dark:invert" /> },
                    { name: 'OpenAI', label: 'LLM API', svg: <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/openai.svg" alt="OpenAI" className="w-7 h-7 dark:invert" /> },
                    { name: 'Gemini', label: 'LLM API', svg: <img src="https://cdn.simpleicons.org/googlegemini" alt="Gemini" className="w-7 h-7" /> },
                    { name: 'Vercel', label: 'Deploy', svg: <img src="https://cdn.simpleicons.org/vercel" alt="Vercel" className="w-7 h-7 dark:invert" /> },
                    { name: 'Netlify', label: 'Deploy', svg: <img src="https://cdn.simpleicons.org/netlify" alt="Netlify" className="w-7 h-7" /> },
                    { name: 'Supabase', label: 'Backend', svg: <img src="https://cdn.simpleicons.org/supabase" alt="Supabase" className="w-7 h-7" /> },
                    { name: 'React', label: 'Frontend', svg: <img src="https://cdn.simpleicons.org/react" alt="React" className="w-7 h-7" /> },
                  ].map((tool, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 rounded-xl px-4 py-2.5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group flex-shrink-0 cursor-default"
                    >
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-slate-50 dark:bg-slate-900/50">
                        {tool.svg}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900 dark:text-slate-100 leading-tight">{tool.name}</p>
                        <p className="text-[10px] text-slate-400 dark:text-slate-500 leading-tight">{tool.label}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Row 2 — scrolls right */}
                <div className="flex gap-4" style={{ animation: 'marquee-right 34s linear infinite', width: 'max-content' }}>
                  {[
                    { name: 'Kiro', label: 'AI Agent', svg: (<svg className="w-7 h-7" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="#0A0A0A" /><path d="M14 26 C14 18 20 12 24 12 C28 12 34 18 34 26 L34 38 L30 34 L27 38 L24 34 L21 38 L18 34 L14 38 Z" fill="white" /><circle cx="20" cy="25" r="2.5" fill="#0A0A0A" /><circle cx="28" cy="25" r="2.5" fill="#0A0A0A" /></svg>) },
                    { name: 'Lovable', label: 'UI Gen', svg: (<svg className="w-7 h-7" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="#FF6B9D" /><path d="M24 36l-1.8-1.7C14 26.4 9 21.8 9 16c0-4 3.1-7 7-7 2.2 0 4.3 1 5.7 2.6a7.5 7.5 0 0 1 5.6-2.6c3.9 0 7 3 7 7 0 5.8-5 10.4-13.3 18.3z" fill="white" /></svg>) },
                    { name: 'Bolt.new', label: 'Rapid Build', svg: <img src="https://cdn.simpleicons.org/stackblitz" alt="Bolt" className="w-7 h-7" /> },
                    { name: 'v0 by Vercel', label: 'UI AI', svg: <img src="https://cdn.simpleicons.org/vercel" alt="v0" className="w-7 h-7 dark:invert" /> },
                    { name: 'Windsurf', label: 'AI IDE', svg: <img src="https://cdn.simpleicons.org/codeium" alt="Windsurf" className="w-7 h-7" style={{ filter: 'hue-rotate(140deg)' }} /> },
                    { name: 'Vite', label: 'Dev Tool', svg: <img src="https://cdn.simpleicons.org/vite" alt="Vite" className="w-7 h-7" /> },
                    { name: 'TypeScript', label: 'Language', svg: <img src="https://cdn.simpleicons.org/typescript" alt="TypeScript" className="w-7 h-7" /> },
                    { name: 'Tailwind', label: 'Styling', svg: <img src="https://cdn.simpleicons.org/tailwindcss" alt="Tailwind" className="w-7 h-7" /> },
                    // duplicated
                    { name: 'Kiro', label: 'AI Agent', svg: (<svg className="w-7 h-7" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="#0A0A0A" /><path d="M14 26 C14 18 20 12 24 12 C28 12 34 18 34 26 L34 38 L30 34 L27 38 L24 34 L21 38 L18 34 L14 38 Z" fill="white" /><circle cx="20" cy="25" r="2.5" fill="#0A0A0A" /><circle cx="28" cy="25" r="2.5" fill="#0A0A0A" /></svg>) },
                    { name: 'Lovable', label: 'UI Gen', svg: (<svg className="w-7 h-7" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="#FF6B9D" /><path d="M24 36l-1.8-1.7C14 26.4 9 21.8 9 16c0-4 3.1-7 7-7 2.2 0 4.3 1 5.7 2.6a7.5 7.5 0 0 1 5.6-2.6c3.9 0 7 3 7 7 0 5.8-5 10.4-13.3 18.3z" fill="white" /></svg>) },
                    { name: 'Bolt.new', label: 'Rapid Build', svg: <img src="https://cdn.simpleicons.org/stackblitz" alt="Bolt" className="w-7 h-7" /> },
                    { name: 'v0 by Vercel', label: 'UI AI', svg: <img src="https://cdn.simpleicons.org/vercel" alt="v0" className="w-7 h-7 dark:invert" /> },
                    { name: 'Windsurf', label: 'AI IDE', svg: <img src="https://cdn.simpleicons.org/codeium" alt="Windsurf" className="w-7 h-7" style={{ filter: 'hue-rotate(140deg)' }} /> },
                    { name: 'Vite', label: 'Dev Tool', svg: <img src="https://cdn.simpleicons.org/vite" alt="Vite" className="w-7 h-7" /> },
                    { name: 'TypeScript', label: 'Language', svg: <img src="https://cdn.simpleicons.org/typescript" alt="TypeScript" className="w-7 h-7" /> },
                    { name: 'Tailwind', label: 'Styling', svg: <img src="https://cdn.simpleicons.org/tailwindcss" alt="Tailwind" className="w-7 h-7" /> },
                  ].map((tool, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 rounded-xl px-4 py-2.5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group flex-shrink-0 cursor-default"
                    >
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-slate-50 dark:bg-slate-900/50">
                        {tool.svg}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900 dark:text-slate-100 leading-tight">{tool.name}</p>
                        <p className="text-[10px] text-slate-400 dark:text-slate-500 leading-tight">{tool.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Concept Section (slim) ──────────────────────────────────────── */}
      <Section bg="bg-white dark:bg-slate-950">
        <AnimatedSection>
          <SectionHeader badge="The Concept" title="Modern AI-Assisted Development" />
        </AnimatedSection>
        <div className="max-w-3xl mb-12">
          <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
            Modern software development is rapidly evolving with AI-assisted coding tools and intelligent development environments. These tools help developers generate code, design interfaces, and prototype applications significantly faster.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { icon: Layers, title: 'AI-Assisted Frontend Development', desc: 'Generate responsive UI components and layouts using modern AI coding environments.' },
            { icon: Network, title: 'Rapid Backend Setup', desc: 'Use AI-assisted tools to scaffold APIs, database structures, and application logic.' },
            { icon: Cpu, title: 'Intelligent Coding Environment', desc: 'Use tools like Antigravity, Copilot, and Kiro to accelerate development and problem solving.' },
            { icon: Rocket, title: 'Rapid Deployment', desc: 'Deploy applications quickly using platforms like Vercel and modern developer workflows.' },
          ].map((feature, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-colors duration-300 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20 flex-shrink-0">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-2">{feature.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* ── Event at a Glance ──────────────────────────────────────────── */}
      <Section bg="bg-slate-50 dark:bg-slate-900/30">
        <AnimatedSection>
          <SectionHeader badge="Timeline" title="Event Phases" />
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl">
            Three phases. One goal: build and ship a working AI product.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {[
            { phase: 'Phase 1', title: 'Workshop', desc: 'Hands-on intro to AI-assisted dev tools and rapid prototyping. Live build demo included.' },
            { phase: 'Phase 2', title: 'Filtering Challenge', desc: 'Design a solution architecture for a real-world problem in 60 minutes.' },
            { phase: 'Phase 3', title: 'AI Buildathon', desc: 'Selected teams build and present a working AI product to a panel of judges.', highlight: true },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className={`p-6 rounded-xl border transition-all duration-300 h-full flex flex-col ${
                item.highlight
                  ? 'bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/30'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
              }`}>
                <span className="text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-1 block">{item.phase}</span>
                <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/phases"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all duration-200"
          >
            View full phase breakdown
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>
    </>
  );
};

export default Home;
