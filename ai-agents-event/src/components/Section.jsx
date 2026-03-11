import React from 'react';

const Section = ({ id, className = '', children, bg = 'bg-slate-50 dark:bg-slate-950' }) => (
  <section
    id={id}
    className={`py-24 px-6 md:px-12 lg:px-24 transition-colors duration-300 ${bg} ${className}`}
  >
    <div className="max-w-6xl mx-auto">{children}</div>
  </section>
);

export default Section;
