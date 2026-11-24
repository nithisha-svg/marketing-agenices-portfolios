import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Pill-in-pill button with a rolling label, matching the reference design.
 * variant: dark | white | outline | coral
 * size: md | sm
 */
export default function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'dark',
  size = 'md',
  full = false,
  className = '',
  ariaLabel,
}) {
  const classes = [
    'pill-btn',
    variant === 'white' ? 'pill-btn--white' : '',
    variant === 'outline' ? 'pill-btn--outline' : '',
    variant === 'coral' ? 'pill-btn--coral' : '',
    size === 'sm' ? 'pill-btn--sm' : '',
    full ? 'pill-btn--full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const label = (
    <span>
      <i>{children}</i>
      <i aria-hidden="true">{children}</i>
    </span>
  );

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {label}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {label}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel}>
      {label}
    </button>
  );
}
