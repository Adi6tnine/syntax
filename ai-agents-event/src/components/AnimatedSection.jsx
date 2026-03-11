import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

/**
 * Wraps children in a div that fades + slides up when it enters the viewport.
 * @param {number} delay - stagger delay in ms (e.g. 100, 200…)
 * @param {string} className - extra classes on the wrapper
 */
const AnimatedSection = ({ children, delay = 0, className = '' }) => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
                transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
            }}
        >
            {children}
        </div>
    );
};

export default AnimatedSection;
