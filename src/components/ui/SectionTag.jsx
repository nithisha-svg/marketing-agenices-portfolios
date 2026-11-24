import React from 'react';

export default function SectionTag({ children, light = false, className = '' }) {
  return (
    <div className={`eyebrow ${light ? 'eyebrow--light' : ''} ${className}`}>
      <span className="orbit" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}
