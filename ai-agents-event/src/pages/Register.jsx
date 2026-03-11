import React from 'react';
import { Rocket, CheckCircle2, Users, Calendar, Award, ExternalLink } from 'lucide-react';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import AnimatedSection from '../components/AnimatedSection';

const highlights = [
  { icon: Users, label: 'Collaborative Learning', desc: 'Work with peers on real problems' },
  { icon: Calendar, label: 'Three-Phase Event', desc: 'Workshop → Challenge → Buildathon' },
  { icon: Award, label: 'Portfolio Projects', desc: 'Ship something real you can showcase' },
];

const gains = [
  'Hands-on experience with modern AI coding tools (Antigravity, Copilot, Kiro)',
  'Learn to scaffold and ship full-stack AI applications',
  'Work on real-world problem statements',
  'Walk away with a portfolio-ready project',
  'Network with fellow builders and the EC community',
];

const Register = () => {
  return (
    <Section bg="bg-slate-50 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <SectionHeader badge="Join Us" title="Register for the Event" align="center" />
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
            Be part of this initiative to learn modern AI development workflows and build practical,
            portfolio-ready applications — in a single day.
          </p>
        </AnimatedSection>

        {/* Highlight cards */}
        <AnimatedSection delay={100}>
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl hover:border-blue-300 dark:hover:border-blue-700 transition-colors duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20">
                    <item.icon className="w-6 h-6" />
                  </div>
                </div>
                <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">{item.label}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Main card */}
        <AnimatedSection delay={200}>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-10 shadow-sm text-left">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 text-center">
              What You'll Gain
            </h3>
            <ul className="space-y-4 max-w-2xl mx-auto mb-8">
              {gains.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300">{item}</span>
                </li>
              ))}
            </ul>

            {/* Status notice */}
            <div className="bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 p-5 rounded-xl mb-8 flex items-start gap-3 text-left">
              <span className="text-blue-500 text-lg leading-none mt-0.5">ℹ</span>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">
                  Registration Opening Soon
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  The registration form will go live soon. Stay tuned to the Engineering Community
                  announcements on WhatsApp and Instagram for the official link.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://chat.whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 text-white dark:text-slate-950 px-8 py-4 rounded-lg font-bold transition-all duration-200 shadow-lg shadow-blue-500/20 group"
              >
                <Rocket className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                Get Notified (WhatsApp)
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100 px-8 py-4 rounded-lg font-bold transition-all duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                Follow on Instagram
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </Section>
  );
};

export default Register;
