import React from 'react';
import { Link } from 'react-router-dom';
import SectionTag from './SectionTag';

export default function PageHero({ breadcrumb, tag, title, lead, actions, visual, children }) {
  return (
    <section className="page-hero">
      <div className="container-x">
        {breadcrumb && (
          <div className="crumbs">
            {breadcrumb.map((b, i) => (
              <React.Fragment key={`${b.label}-${i}`}>
                {i > 0 && <span>/</span>}
                {b.to ? (
                  <Link to={b.to} className="hover:text-black transition-colors">
                    {b.label}
                  </Link>
                ) : (
                  <span className="here">{b.label}</span>
                )}
              </React.Fragment>
            ))}
          </div>
        )}

        <div className={`grid gap-12 ${visual ? 'lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end' : ''}`}>
          <div className="max-w-4xl">
            {tag && <SectionTag className="mb-6">{tag}</SectionTag>}
            <h1 className="t-hero">{title}</h1>
            {lead && <p className="t-lead mt-7 max-w-2xl">{lead}</p>}
            {actions && <div className="mt-9 flex flex-wrap items-center gap-4">{actions}</div>}
          </div>
          {visual}
        </div>

        {children}
      </div>
    </section>
  );
}
