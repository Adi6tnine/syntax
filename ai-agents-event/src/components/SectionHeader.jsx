import React from 'react';

/**
 * @param {string} title - Section heading text
 * @param {string} badge  - Optional small label above the heading
 * @param {'left'|'center'} align - Alignment, default 'left'
 */
const SectionHeader = ({ title, badge, align = 'left' }) => (
  <div className={`mb-16 ${align === 'center' ? 'text-center' : ''}`}>
    {badge && (
      <span className="text-blue-600 dark:text-blue-400 font-mono text-sm tracking-wider uppercase bg-blue-50 dark:bg-blue-500/10 px-3 py-1 rounded-full mb-4 inline-block border border-blue-100 dark:border-blue-500/20 transition-colors duration-300">
        {badge}
      </span>
    )}
    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-50 transition-colors duration-300">
      {title}
    </h2>
  </div>
);

export default SectionHeader;
