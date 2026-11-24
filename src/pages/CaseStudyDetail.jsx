import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Quote } from 'lucide-react';
import { caseStudies } from '../data/agencyData';
import PageHero from '../components/ui/PageHero';
import SectionTag from '../components/ui/SectionTag';
import Button from '../components/ui/Button';
import CtaBand from '../components/ui/CtaBand';

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const currentIndex = caseStudies.findIndex((item) => item.slug === slug);

  if (currentIndex === -1) {
    return <Navigate to="/work" replace />;
  }

  const study = caseStudies[currentIndex];
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  const meta = [
    ['Client', study.client],
    ['Timeline', study.timeline],
    ['Services delivered', study.services.join(' · ')],
  ];

  return (
    <div className="overflow-hidden">
      <PageHero
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Work', to: '/work' },
          { label: study.title },
        ]}
        tag={<>{study.category.toUpperCase()} <b>/</b> {study.year}</>}
        title={study.title}
        lead={study.subheading}
        actions={
          <>
            <Button to="/contact">Start a similar project</Button>
            <Button to="/work" variant="outline">All work</Button>
          </>
        }
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mt-14">
          {meta.map(([label, val], i) => (
            <div key={label} className={`surface rv d${i} p-5`}>
              <span className="text-xs text-black/45 block">{label}</span>
              <span className="text-sm font-semibold block mt-1 leading-snug">{val}</span>
            </div>
          ))}
        </div>
      </PageHero>

      {/* OUTCOME METRICS */}
      <section className="section">
        <div className="container-x">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10">
            <SectionTag className="rv">THE OUTCOME <b>/</b> 02</SectionTag>
            <h2 className="t-h3 max-w-2xl rv d1">Measured in real business results.</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {study.metrics.map((m, i) => (
              <div key={m.label} className={`stat-card rv d${i} min-h-[210px]`}>
                <div className="big" style={{ color: 'var(--green)' }}>{m.value}</div>
                <div>
                  <div className="lbl">{m.label}</div>
                  <div className="det">{study.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE */}
      <section className="section-tight">
        <div className="container-x">
          <div className="photo aspect-[21/9] rv">
            <img src={study.image} alt={study.title} />
            <div className="photo-caption">
              <small>{study.category} · {study.year}</small>
              <b>{study.subheading}</b>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGE + APPROACH */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 rv">
            <SectionTag className="mb-6">THE CHALLENGE <b>/</b> 03</SectionTag>
            <h2 className="t-h3">Where it started.</h2>
            <p className="t-body mt-5">{study.challenge}</p>

            <div className="flex flex-wrap gap-2 mt-6">
              {study.services.map((srv) => (
                <span key={srv} className="badge neutral">{srv}</span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 rv d1">
            <SectionTag className="mb-6">THE APPROACH <b>/</b> 04</SectionTag>
            <h2 className="t-h3">What we did.</h2>

            <div className="mt-6 space-y-3">
              {study.approach.map((step) => (
                <div key={step.step} className="surface p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-coral">{step.step}</span>
                    <h3 className="t-h6">{step.title}</h3>
                  </div>
                  <p className="t-body mt-2 text-[14px] pl-8">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="section">
        <div className="container-x">
          <div className="rv rounded-3xl bg-night text-white p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-peach/20 blur-3xl" />
            <div className="relative">
              <Quote className="w-9 h-9 text-peach/60 mb-6" />
              <blockquote className="t-h4 max-w-3xl">“{study.quote.text}”</blockquote>
              <div className="mt-8 pt-6 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="font-medium block">{study.quote.author}</span>
                  <span className="text-xs text-white/50">{study.quote.title}</span>
                </div>
                <span className="badge" style={{ background: 'rgba(255,255,255,.1)', color: '#fff' }}>
                  <i style={{ background: '#27b36a' }} />
                  Verified partner outcome
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT */}
      <section className="section-tight">
        <div className="container-x">
          <div className="surface rv p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-sm font-medium text-black/50 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all work
            </Link>

            <Link to={`/work/${nextStudy.slug}`} className="inline-flex items-center gap-4 text-right group">
              <div>
                <span className="text-xs text-black/45 block">Next case study</span>
                <span className="text-base font-medium group-hover:text-coral transition-colors">
                  {nextStudy.title} <span className="text-black/40">({nextStudy.category} · {nextStudy.year})</span>
                </span>
              </div>
              <div className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-coral transition-colors flex-none">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        tag={<>HAVE A PROJECT THIS GOOD? <b>/</b> NOW</>}
        title="Ready to build your digital future?"
        text="Whether you need a new brand, a website that works harder, or a growth partner in your corner — we would love to hear what you are planning."
        primary={{ label: 'Start your project', to: '/contact' }}
        secondary={{ label: 'See more work', to: '/work' }}
      />
    </div>
  );
}
