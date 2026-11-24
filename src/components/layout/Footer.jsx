import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { agencyMeta, servicesData } from '../../data/agencyData';
import Mark from '../ui/Mark';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="frow1 rv">
          <Link to="/" className="flogo" aria-label="ZYVO home">
            <Mark className="w-14 h-14" />
            ZYVO
          </Link>
          <div className="news">
            <span id="news-label" className="text-sm text-white/70">
              The Growth Note — one useful idea a month. No noise.
            </span>
            <form onSubmit={handleSubscribe}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                aria-labelledby="news-label"
              />
              <button type="submit">Subscribe</button>
            </form>
            <span className="ok" role="status">
              {subscribed ? 'You’re in. First note lands Monday.' : ''}
            </span>
          </div>
        </div>

        <div className="frow2 rv d1">
          <p className="ftag">
            Strategy, design and growth for people who’d rather be building something worth talking about.
          </p>
          <nav className="fcols" aria-label="Footer">
            <div>
              <b>Explore</b>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/work">Work</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div>
              <b>Services</b>
              {servicesData.slice(0, 5).map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`}>
                  {s.title.replace(' (SEO)', '')}
                </Link>
              ))}
              <Link to="/services" className="text-white">
                View all ten →
              </Link>
            </div>
            <div>
              <b>Studio</b>
              <a href={`mailto:${agencyMeta.email}`}>Email us</a>
              <a href={`tel:${agencyMeta.phone.replace(/\s+/g, '')}`}>Call the studio</a>
              <a href={agencyMeta.socials.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href={agencyMeta.socials.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </nav>
        </div>

        <div className="rv d2">
          <div className="frow3">
            <div className="socials">
              <a href={agencyMeta.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                IG
              </a>
              <a href={agencyMeta.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                IN
              </a>
              <a href={agencyMeta.socials.behance} target="_blank" rel="noreferrer" aria-label="Behance">
                Be
              </a>
              <a href={agencyMeta.socials.dribbble} target="_blank" rel="noreferrer" aria-label="Dribbble">
                Dr
              </a>
            </div>
            <div className="fcontact">
              <div>
                <b>Contact</b>
                <a href={`mailto:${agencyMeta.email}`}>{agencyMeta.email}</a>
                <a href={`tel:${agencyMeta.phone.replace(/\s+/g, '')}`}>{agencyMeta.phone}</a>
                <p>{agencyMeta.location}</p>
              </div>
              <div>
                <b>Studio hours</b>
                <p>{agencyMeta.workingHours}</p>
                <p>Studio visits by appointment.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="frow4">
          <span>© 2026 ZYVO Creative Digital Growth Studio. All rights reserved.</span>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-1">
            Back to top <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
