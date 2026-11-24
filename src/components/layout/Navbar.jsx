import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Mark from '../ui/Mark';
import Button from '../ui/Button';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Work', path: '/work' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && open) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <header className={`site-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <Link to="/" className="logo-lockup" aria-label="ZYVO home">
            <Mark className="w-[26px] h-[26px]" />
            <span>
              <b>ZYVO</b>
              <small>Growth studio</small>
            </span>
          </Link>

          <nav className="nav-menu" aria-label="Main navigation">
            {links.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link key={link.name} to={link.path} className={`roll-link ${active ? 'active' : ''}`}>
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          <div className="nav-cta">
            <Button to="/contact" size="sm">
              Start a project
            </Button>
          </div>

          <button
            className="burger"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <path d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${open ? 'open' : ''}`} id="mobile-menu">
        <button className="x" onClick={() => setOpen(false)} aria-label="Close menu">
          ×
        </button>
        {links.map((link) => (
          <Link key={link.name} to={link.path} onClick={() => setOpen(false)}>
            {link.name}
          </Link>
        ))}
        <div className="btn-wrap">
          <Button to="/contact" full>
            Start a project
          </Button>
        </div>
      </div>
    </>
  );
}
