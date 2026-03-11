import React from 'react';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import AnimatedSection from '../components/AnimatedSection';

const phases = [
  {
    id: 'PHASE 01',
    title: 'Workshop',
    date: 'Day 1',
    highlight: false,
    steps: [
      {
        label: 'Project Showcase',
        desc: 'See real applications built using AI-assisted workflows — you will be surprised who built them.',
      },
      {
        label: 'Tool Setup',
        desc: 'Download Kiro / Antigravity. Create accounts on Gemini, ChatGPT, and Claude.',
      },
      {
        label: 'Workflow Walkthrough',
        desc: 'Learn the AI dev workflow — how to go from an idea to a wireframe to a working product using prompts.',
      },
      {
        label: 'Lunch Break',
        desc: 'Recharge before the live demo.',
      },
      {
        label: 'Live Build Demo',
        desc: 'Watch a complete product get built from scratch — idea, prompts, Kiro/Antigravity, and deployment. Live.',
      },
      {
        label: 'Open Build Session',
        desc: 'You start building. Experiment with the tools. Ask questions. Get something working.',
      },
    ],
  },
  {
    id: 'PHASE 02',
    title: 'Filtering Round',
    date: 'Day 1 — End',
    highlight: false,
    steps: [
      {
        label: '1-on-1 Q&A',
        desc: 'The host walks around and asks each participant questions — what did you build, what did you learn, what would you do differently.',
      },
      {
        label: 'Interest Form',
        desc: 'Participants who want to join the hackathon fill a Google Form. No pressure — only those serious about building should apply.',
      },
      {
        label: 'Selection',
        desc: 'Based on the Q&A and form responses, teams are finalized. Shortlisted participants are notified.',
      },
    ],
  },
  {
    id: 'PHASE 03',
    title: 'AI Product Buildathon',
    date: 'Day 2',
    highlight: true,
    steps: [
      {
        label: 'Problem Statements Released',
        desc: 'Faculty-provided real-world problems are revealed. Each problem is assigned to two competing teams.',
      },
      {
        label: 'Build Sprint',
        desc: 'Teams build a working AI-powered solution using the tools and workflow from the workshop.',
      },
      {
        label: 'Team Presentations',
        desc: 'Each team presents their product live to the judges. Both teams on the same problem get to go head-to-head.',
      },
      {
        label: 'Judging',
        desc: 'Judges score teams on a fixed set of parameters — problem clarity, solution quality, use of AI tools, demo, and impact.',
      },
      {
        label: 'Winners Announced',
        desc: 'Top builders and teams are recognized. Results are final based on judge scores.',
      },
    ],
  },
];

const Phases = () => {
  return (
    <Section bg="bg-white dark:bg-slate-950">
      <AnimatedSection>
        <SectionHeader badge="Timeline" title="Event Structure" />
        <p className="text-slate-600 dark:text-slate-400 text-lg mb-16 max-w-2xl">
          Two days. Three phases. One goal — build something real using AI.
        </p>
      </AnimatedSection>

      <div className="space-y-12">
        {phases.map((phase, i) => (
          <AnimatedSection key={i} delay={i * 100}>
            <div className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
              phase.highlight
                ? 'border-blue-300 dark:border-blue-500/40 shadow-[0_0_40px_-15px_rgba(37,99,235,0.2)]'
                : 'border-slate-200 dark:border-slate-800'
            }`}>
              {/* Phase header */}
              <div className={`px-8 py-5 flex items-center justify-between gap-4 ${
                phase.highlight
                  ? 'bg-blue-50 dark:bg-blue-500/10 border-b border-blue-200 dark:border-blue-500/30'
                  : 'bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800'
              }`}>
                <div className="flex items-center gap-4">
                  <span className="text-blue-600 dark:text-blue-400 font-mono text-xs font-bold tracking-widest">
                    {phase.id}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{phase.title}</h3>
                  {phase.highlight && (
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-600 dark:bg-blue-500 text-white">
                      Final Round
                    </span>
                  )}
                </div>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-lg flex-shrink-0">
                  {phase.date}
                </span>
              </div>

              {/* Steps */}
              <div className={`p-8 ${
                phase.highlight ? 'bg-white dark:bg-slate-900' : 'bg-white dark:bg-slate-950'
              }`}>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {phase.steps.map((step, j) => (
                    <div key={j} className="flex gap-3">
                      {/* Step number */}
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0 mt-0.5 ${
                        phase.highlight
                          ? 'bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}>
                        {j + 1}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-1">{step.label}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
};

export default Phases;
