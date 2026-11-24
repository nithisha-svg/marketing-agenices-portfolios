import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { caseStudies, agencyProcess } from '../data/agencyData';
import PageHero from '../components/ui/PageHero';
import SectionTag from '../components/ui/SectionTag';
import Button from '../components/ui/Button';
import CtaBand from '../components/ui/CtaBand';

const filters = [
  'All',
  'Web Design',
  'Branding',
  'Social Media',
  'Web Development',
  'Strategy',
  'Product Design',
];

const portfolioStats = [
  ['Brand identities', '12 systems'],
  ['Websites & platforms', '26 shipped'],
  ['Campaigns & content', '34 launched'],
  ['Avg. enquiry lift', '+68%'],
  ['Client growth', '2.8× in 6 mos'],
  ['Longest partnership', '4 years'],
];

export default function Work() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredProjects =
    selectedFilter === 'All'
      ? caseStudies
      : caseStudies.filter((item) => item.category === selectedFilter);

  return (
    <div className="overflow-hidden">
      <PageHero
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Our Work' }]}
        tag={<>SELECTED WORK <b>/</b> 01</>}
        title={
          <>
            Creativity that
            <br />
            <span className="hero-underline">makes an impact.</span>
          </>
        }
        lead="Every project is an opportunity to transform an idea into something meaningful. Explore a selection of the brands, platforms and campaigns we have built to help businesses establish their digital presence — and grow."
        actions={
          <>
            <Button to="/contact">Start a project</Button>
            <Button to="/services" variant="outline">Our capabilities</Button>
          </>
        }
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mt-14">
          {portfolioStats.map(([label, val], i) => (
            <div key={label} className={`surface rv d${i % 4} p-5`}>
              <span className="text-xs text-black/45 block">{label}</span>
              <span className="text-sm font-semibold block mt-1">{val}</span>
            </div>
          ))}
        </div>
      </PageHero>

      {/* FILTER + GRID */}
      <section className="section">
        <div className="container-x">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pb-6 border-b border-black/10 mb-8">
            <div className="flex flex-wrap items-center gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`filter-pill ${selectedFilter === filter ? 'on' : ''}`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="text-xs text-black/45 font-medium">
              Showing {filteredProjects.length} of {caseStudies.length} projects
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, idx) => (
              <Link
                key={project.slug}
                to={`/work/${project.slug}`}
                className={`surface overflow-hidden flex flex-col group rv d${idx % 4} hover:-translate-y-1 transition-transform`}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-white/90 text-black backdrop-blur-sm">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-black/50 text-white backdrop-blur-sm">
                      {project.year}
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex flex-col gap-3 flex-1">
                  <h3 className="t-h6 flex items-start justify-between gap-3">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-black/30 group-hover:text-coral transition-colors flex-none" />
                  </h3>
                  <p className="t-body text-[14px] line-clamp-2">{project.subheading}</p>

                  <div className="mt-auto pt-4 border-t border-black/8 grid grid-cols-3 gap-2">
                    {project.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="text-sm font-semibold text-forest">{m.value}</div>
                        <div className="text-[10px] text-black/45 leading-tight">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="surface p-12 text-center">
              <p className="t-body">No projects in this discipline yet. Try another filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* PROCESS */}
      <section className="section soft-tint">
        <div className="container-x">
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-5 mb-14">
            <SectionTag className="rv">PROJECT PROCESS <b>/</b> 02</SectionTag>
            <h2 className="t-h2 rv d1">Five stages. Zero guesswork.</h2>
            <p className="t-body rv d2">
              The same deliberate rhythm behind every case study on this page — adapted to the
              scale and ambition of each brief.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-5">
            {agencyProcess.map((step, idx) => (
              <div key={step.step} className={`surface rv d${idx} p-6 flex flex-col gap-8`}>
                <div className="flex items-center justify-between">
                  <span className="t-h4 text-coral/70">{step.step}</span>
                  <span className="w-2 h-2 rounded-full bg-coral" />
                </div>
                <div>
                  <h3 className="t-h6">{step.title}</h3>
                  <p className="t-body mt-2 text-[14px]">{step.desc}</p>
                </div>
                <div className="mt-auto pt-4 border-t border-black/5 text-[11px] text-black/45">
                  {step.tagline}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS CALLOUT */}
      <section className="section">
        <div className="container-x">
          <div className="surface rv p-7 sm:p-12 grid gap-8 lg:grid-cols-[1.4fr_.6fr] lg:items-center">
            <div>
              <SectionTag className="mb-5">INSIDE THE PROCESS <b>/</b> 03</SectionTag>
              <h2 className="t-h3 max-w-2xl">Ideas get better when the room is honest.</h2>
              <p className="t-body mt-4 max-w-2xl">
                Strategy, design and engineering sit together from the first sketch. It is how good
                work avoids becoming average work.
              </p>
            </div>
            <div className="flex lg:justify-end">
              <Button to="/contact">Start a project</Button>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        tag={<>NEXT CASE STUDY <b>/</b> YOU</>}
        title="Your brand could be our next success story."
        text="Tell us what you are building and where you want it to go. We’ll show you how we would approach it — before you commit."
        primary={{ label: 'Start a project', to: '/contact' }}
        secondary={{ label: 'Explore services', to: '/services' }}
      />
    </div>
  );
}
