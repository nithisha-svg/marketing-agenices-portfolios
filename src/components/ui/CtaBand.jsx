import React from 'react';
import SectionTag from './SectionTag';
import Button from './Button';
import Mark from './Mark';

export default function CtaBand({
  tag = 'GET STARTED / NOW',
  title = 'Let’s build something worth talking about.',
  text = 'Tell us what you are building and where you want it to go. We will come back with honest thinking, a clear route forward and a realistic timeline.',
  primary = { label: 'Start a project', to: '/contact' },
  secondary = { label: 'See our work', to: '/work' },
  note = 'Limited project slots each quarter · Replies within one working day.',
}) {
  return (
    <section className="relative pb-32 pt-4">
      <div className="container-x">
        <div className="cta-card rv">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
            <div className="flex flex-col gap-10">
              <div>
                <SectionTag className="mb-6">{tag}</SectionTag>
                <h2 className="t-h3 max-w-xl">{title}</h2>
              </div>
              <div className="flex items-end gap-5">
                <Mark className="w-14 h-14" />
                <div className="h-px flex-1 bg-black/15" />
              </div>
            </div>
            <div className="flex flex-col gap-7">
              <p className="t-body max-w-md text-black/70">{text}</p>
              <div className="flex flex-wrap items-center gap-3">
                <Button to={primary.to} href={primary.href} variant="dark">
                  {primary.label}
                </Button>
                {secondary && (
                  <Button to={secondary.to} href={secondary.href} variant="outline">
                    {secondary.label}
                  </Button>
                )}
              </div>
              <p className="text-[13px] text-black/45">{note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
