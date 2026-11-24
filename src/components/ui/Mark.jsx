import React from 'react';

export default function Mark({ className = 'w-6 h-6', dark = false }) {
  const id = dark ? 'zyvo-mark-dark' : 'zyvo-mark';
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f79276" />
          <stop offset="1" stopColor={dark ? '#9d381c' : '#ec5a4f'} />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="18" fill="none" stroke="currentColor" strokeOpacity=".12" strokeWidth="8" />
      <path
        d="M24 6a18 18 0 1 1-17.1 12.4"
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth="8"
        strokeLinecap="round"
      />
      <circle cx="24" cy="24" r="4.5" fill={dark ? '#c75a3c' : '#f79276'} />
    </svg>
  );
}
