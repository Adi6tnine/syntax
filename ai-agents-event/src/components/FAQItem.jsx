import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="text-lg font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-slate-600 dark:text-slate-400">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
