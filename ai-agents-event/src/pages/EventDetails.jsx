import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import AnimatedSection from '../components/AnimatedSection';

const outcomes = [
  {
    title: 'See AI tools in action — not just in theory',
    desc: 'Watch real products get built live. Using the same tools participants will use.',
  },
  {
    title: 'Anyone can build — not just developers',
    desc: 'The workflow is designed so that a person with zero coding background can ship a working product.',
  },
  {
    title: 'Learn the actual workflow, not just the tools',
    desc: 'Knowing what tools exist is not enough. This event teaches the workflow — how to think, prompt, and ship.',
  },
  {
    title: 'Walk away with something real',
    desc: 'Participants don\'t just attend. They build. Deployed, working, portfolio-ready projects.',
  },
];

const EventDetails = () => {
  return (
    <>
      {/* ── The Gap ──────────────────────────────────────────────────── */}
      <Section bg="bg-white dark:bg-slate-950">
        <AnimatedSection>
          <SectionHeader badge="The Gap" title="Why This Initiative Matters" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <AnimatedSection delay={80}>
            <div className="space-y-5">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                Most technical workshops are just talks. Students attend, listen, and leave — without building 
                a single thing. The knowledge fades within a week.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                At the same time, AI development tools have completely changed what's possible. 
                A non-coder with the right workflow can now build and ship a working product in hours.{' '}
                <strong className="text-slate-900 dark:text-slate-100">
                  Most students just haven't seen it happen yet.
                </strong>
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                This event closes that gap — by putting the tools in their hands and letting them build 
                something real on the same day they learn.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={160}>
            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-6">
                What makes this different
              </h3>
              <ul className="space-y-4">
                {[
                  'Start to finish build — not just slides',
                  'Live demo: watch someone build from scratch',
                  'Hands-on from minute one',
                  'AI tools that work for coders and non-coders alike',
                  'Real problem statements, real teams, real judges',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* ── Expected Impact ──────────────────────────────────────────── */}
      <Section bg="bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <SectionHeader badge="Outcomes" title="What Participants Walk Away With" align="center" />
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-5 text-left mt-2">
            {outcomes.map((item, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-300 dark:hover:border-blue-700 transition-colors duration-300 h-full">
                  <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    {item.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed pl-6">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={380}>
            <div className="mt-10 bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 rounded-xl p-6 text-center">
              <p className="text-slate-800 dark:text-slate-200 font-semibold text-lg">
                The bar is not "can you code."
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-base mt-1">
                The bar is "can you think of a problem and build something that solves it."
              </p>
            </div>
          </AnimatedSection>
        </div>
      </Section>
    </>
  );
};

export default EventDetails;
