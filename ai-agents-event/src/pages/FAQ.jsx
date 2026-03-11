import React from 'react';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import FAQItem from '../components/FAQItem';
import AnimatedSection from '../components/AnimatedSection';

const faqs = [
  {
    question: 'What tools will be used?',
    answer:
      'Participants will use modern AI coding assistants like Antigravity and Kiro, rapid prototyping platforms like Bolt or v0, and LLMs like Gemini and ChatGPT. The full list will be walked through during the workshop.',
  },
  {
    question: 'Who can participate?',
    answer:
      'This event is open to all students in the Engineering Community at Chandigarh University who are passionate about modern software development — regardless of their academic year or branch.',
  },
  {
    question: 'Do participants need prior AI experience?',
    answer:
      'No prior AI experience is required. Basic programming familiarity is helpful, but the Phase 1 workshop is designed to onboard everyone — from beginners to experienced developers.',
  },
  {
    question: 'Will participants work alone or in teams?',
    answer:
      'The Day 2 Buildathon will be team-based. Teams are formed at the end of Day 1 (Filtering Round). Solo participation is fine for the initial workshop and learning phase.',
  },
  {
    question: 'What will participants build?',
    answer:
      'Participants will build AI-powered applications such as study assistants, productivity tools, or business helpers. The focus is on practical, real-world solutions that can be showcased as portfolio projects.',
  },
  {
    question: 'How long is the event?',
    answer:
      'The event takes place over two days. Day 1 involves the hands-on workshop, live build demo, and the filtering Q&A round. Day 2 features the full AI product buildathon where selected teams build their solutions.',
  },
  {
    question: 'Is there a registration fee?',
    answer:
      'Registration is free for all students at Chandigarh University. Simply register through the link on the Register page and show up ready to build.',
  },
];

const FAQ = () => {
  return (
    <Section bg="bg-white dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-900">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <SectionHeader badge="Questions?" title="Frequently Asked Questions" />
        </AnimatedSection>
        <div className="mt-8 border-t border-slate-200 dark:border-slate-800">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 60}>
              <FAQItem question={faq.question} answer={faq.answer} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQ;
