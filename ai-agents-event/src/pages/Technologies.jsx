import React from 'react';
import { Code2, Workflow, Zap, Blocks, Terminal, Bot, Globe, GitBranch } from 'lucide-react';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import AnimatedSection from '../components/AnimatedSection';

const tools = [
  {
    category: 'AI Coding Assistants',
    icon: Terminal,
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-500/10 border-blue-100 dark:border-blue-500/20',
    items: ['Antigravity', 'GitHub Copilot', 'Windsurf'],
    desc: 'AI-powered IDEs and code co-pilots that generate, refactor, and explain code in real time.',
  },
  {
    category: 'AI Development Agents',
    icon: Bot,
    color: 'text-violet-600 dark:text-violet-400',
    bg: 'bg-violet-50 dark:bg-violet-500/10 border-violet-100 dark:border-violet-500/20',
    items: ['Kiro', 'Devin', 'Claude MCP'],
    desc: 'Autonomous agents that plan, execute, and orchestrate multi-step development tasks.',
  },
  {
    category: 'Rapid Prototyping',
    icon: Zap,
    color: 'text-amber-600 dark:text-amber-400',
    bg: 'bg-amber-50 dark:bg-amber-500/10 border-amber-100 dark:border-amber-500/20',
    items: ['Lovable', 'v0 by Vercel', 'Bolt.new'],
    desc: 'Prompt-to-UI platforms that convert natural language ideas into functional interfaces instantly.',
  },
  {
    category: 'Deployment & Infra',
    icon: Globe,
    color: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-50 dark:bg-emerald-500/10 border-emerald-100 dark:border-emerald-500/20',
    items: ['Vercel', 'Netlify', 'Supabase'],
    desc: 'Modern deployment platforms and backend services to ship applications in minutes.',
  },
];

const Technologies = () => {
  return (
    <Section bg="bg-slate-50 dark:bg-slate-950">
      <AnimatedSection>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionHeader badge="Ecosystem" title="Tools & Technologies" align="center" />
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Participants will explore modern tools that represent the next generation of software development workflows — the same ones used by top engineers today.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map((tool, i) => (
          <AnimatedSection key={i} delay={i * 80}>
            <div className="flex flex-col p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 h-full">
              <div className={`p-3 rounded-xl ${tool.bg} ${tool.color} mb-5 w-fit border`}>
                <tool.icon className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-2">
                {tool.category}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                {tool.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {tool.items.map((item, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
};

export default Technologies;
