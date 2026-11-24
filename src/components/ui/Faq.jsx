import React, { useState } from 'react';
import SectionTag from './SectionTag';

export default function Faq({
  items,
  tag = 'FAQS / 10',
  title = 'Questions, answered quickly.',
  intro = 'Because you have somewhere to be. What we do, how we work, and what to expect.',
  className = '',
  id,
}) {
  const [open, setOpen] = useState(0);

  return (
    <section id={id} className={`section ${className}`}>
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div className="rv lg:sticky lg:top-28 self-start">
            <SectionTag className="mb-6">{tag}</SectionTag>
            <h2 className="t-h2 max-w-md">{title}</h2>
            {intro && <p className="t-body mt-5 max-w-md">{intro}</p>}
          </div>

          <div className="rv d1">
            {items.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button
                    className="faq-q"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-qt">
                      <span className="faq-num">{String(i + 1).padStart(2, '0')}.</span>
                      <span>{item.q}</span>
                    </span>
                    <span className="faq-pm" aria-hidden="true">
                      <svg viewBox="0 0 12 12" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" fill="none">
                        <path d="M1 6h10" />
                        <path className="v" d="M6 1v10" />
                      </svg>
                    </span>
                  </button>
                  <div className="faq-a">
                    <div>
                      <p>{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
