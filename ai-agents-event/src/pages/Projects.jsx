import React from 'react';
import { Clock } from 'lucide-react';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import AnimatedSection from '../components/AnimatedSection';

// ── Problem statements teams will receive on Day 2 ────────────────────────────
// These are example problem areas. Actual problems will be released on the day.
const problems = [
  {
    area: 'Education',
    prompt: 'Build a tool that helps a student prepare for exams faster — using AI to generate practice questions, summarise topics, or track weak areas.',
    constraint: 'Must work for any subject with a simple interface.',
  },
  {
    area: 'Local Business',
    prompt: 'Help a small shop owner generate product descriptions, WhatsApp captions, or a mini website — without them needing to write anything themselves.',
    constraint: 'Should require zero technical knowledge to use.',
  },
  {
    area: 'Government & Access',
    prompt: 'Make it easier for a citizen to understand a government scheme, check eligibility, and know what documents are needed — in plain simple language.',
    constraint: 'Must be usable by someone with basic phone literacy.',
  },
  {
    area: 'Productivity',
    prompt: 'Build a personal assistant that helps someone manage their day — tasks, priorities, reminders — conversationally, not through forms and menus.',
    constraint: 'Must feel like talking to a smart assistant, not filling a spreadsheet.',
  },
];

// ── Judging parameters (shared with judges and participants upfront) ───────────
const judgingParams = [
  { label: 'Problem Clarity', desc: 'Does the team clearly understand and articulate the problem they\'re solving?' },
  { label: 'Solution Quality', desc: 'Does the product actually solve the problem? Is it usable?' },
  { label: 'Use of AI Tools', desc: 'How effectively were AI tools used in building the solution?' },
  { label: 'Live Demo', desc: 'Does the product work live? Can they show it doing something real?' },
  { label: 'Impact Potential', desc: 'Would a real person actually use this? Does it matter?' },
  { label: 'Presentation', desc: 'Can the team explain what they built clearly and concisely in 3–5 minutes?' },
];

const Projects = () => {
  return (
    <>
      {/* ── Problem Statements ───────────────────────────────────────── */}
      <Section bg="bg-white dark:bg-slate-950">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <SectionHeader badge="Day 2 — Buildathon" title="Problem Areas" align="center" />
            <p className="text-slate-600 dark:text-slate-400 text-lg mt-2">
              On buildathon day, teams receive a real-world problem statement and have the full day to build a working AI-powered solution.
              Two teams are assigned to the same problem — they build independently and present head-to-head.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <Clock className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-semibold text-amber-600 dark:text-amber-400">
                Exact problem statements released on the day
              </span>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((p, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-7 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-md group h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-7 h-7 rounded-full bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 px-2.5 py-1 rounded-full">
                    {p.area}
                  </span>
                </div>

                <p className="text-slate-800 dark:text-slate-200 font-medium text-sm leading-relaxed mb-4 flex-1">
                  "{p.prompt}"
                </p>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Key Constraint</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{p.constraint}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* ── Judging Parameters ───────────────────────────────────────── */}
      <Section bg="bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800">
        <AnimatedSection>
          <SectionHeader badge="Transparency" title="How Teams Are Judged" />
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-12 max-w-2xl">
            Judging parameters are shared with participants upfront — no surprises. Build toward these from the start.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl">
          {judgingParams.map((param, i) => (
            <AnimatedSection key={i} delay={i * 60}>
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 hover:border-blue-300 dark:hover:border-blue-700 transition-colors duration-300 h-full">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">{param.label}</h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-8">{param.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400}>
          <div className="mt-10 max-w-2xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 rounded-xl p-6">
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">The format</p>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              Two teams. Same problem. One day to build. Both teams present to the same panel of judges — head to head.
              Scores are tallied across all 6 parameters. The team with the stronger product wins.
            </p>
          </div>
        </AnimatedSection>
      </Section>
    </>
  );
};

export default Projects;
