import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import {
  servicesData,
  waysOfWorking,
  agencyProcess,
  faqList,
} from '../data/agencyData';
import PageHero from '../components/ui/PageHero';
import SectionTag from '../components/ui/SectionTag';
import Button from '../components/ui/Button';
import CtaBand from '../components/ui/CtaBand';
import Faq from '../components/ui/Faq';
import ServicesSlider from '../components/common/ServicesSlider';

const capabilityStats = [
  ['Brand systems', '48+ delivered'],
  ['Websites', '60+ shipped'],
  ['Growth campaigns', '120+ launched'],
  ['Avg. partnership', '26 months'],
  ['Senior team', '1 lead per account'],
  ['Reporting', 'Monthly · transparent'],
];

export default function Services() {
  return (
    <div className="overflow-hidden">
      <PageHero
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
        tag={<>OUR SERVICES <b>/</b> 01</>}
        title={
          <>
            Digital solutions
            <br />
            <span className="hero-underline">designed for growth.</span>
          </>
        }
        lead="From a brand identity that turns heads to the visibility that turns searches into sales, we provide the creative and strategic services ambitious businesses need to grow."
        actions={
          <>
            <Button to="/contact">Discuss your project</Button>
            <Button to="/work" variant="outline">See the results</Button>
          </>
        }
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mt-14">
          {capabilityStats.map(([label, val], i) => (
            <div key={label} className={`surface rv d${i % 4} p-5`}>
              <span className="text-xs text-black/45 block">{label}</span>
              <span className="text-sm font-semibold block mt-1">{val}</span>
            </div>
          ))}
        </div>
      </PageHero>

      {/* SLIDER */}
      <section className="section">
        <div className="container-x">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 rv">
            <div>
              <SectionTag className="mb-6">INTERACTIVE SHOWCASE <b>/</b> 02</SectionTag>
              <h2 className="t-h2 max-w-2xl">Slide through our ten disciplines.</h2>
              <p className="t-body mt-4 max-w-xl">
                Click through each core capability to see the deliverables, expected performance
                outcomes and technology stack.
              </p>
            </div>
            <Button to="/contact" variant="outline">Not sure where to start?</Button>
          </div>
          <ServicesSlider />
        </div>
      </section>

      {/* CAPABILITIES GRID */}
      <section className="section soft-tint">
        <div className="container-x">
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-5 mb-14">
            <SectionTag className="rv">CAPABILITIES CATALOG <b>/</b> 03</SectionTag>
            <h2 className="t-h2 rv d1">Everything you need, working as one.</h2>
            <p className="t-body rv d2">
              Ten services, designed to be combined. Start with the problem — we will shape the
              right blend of brand, web, search, paid media, reputation, CRM, content and growth.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {servicesData.map((service, idx) => (
              <div
                key={service.slug}
                className={`surface overflow-hidden flex flex-col rv d${idx % 4}`}
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="badge neutral" style={{ background: 'rgba(255,255,255,.88)', color: '#000' }}>
                      {service.num}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-white/85 text-black/65 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex flex-col gap-5 flex-1">
                  <div>
                    <h3 className="t-h5">{service.title}</h3>
                    <p className="t-body mt-2">{service.shortDesc}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {service.included.slice(0, 4).map((inc) => (
                      <div key={inc} className="flex items-center gap-2 text-xs text-black/60">
                        <span className="w-[16px] h-[16px] rounded-full bg-forest/10 text-forest grid place-items-center flex-none">
                          <Check className="w-2.5 h-2.5" strokeWidth={3} />
                        </span>
                        <span className="truncate">{inc}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 border-t border-black/8 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {service.outcomes.slice(0, 2).map((oc) => (
                        <div key={oc.label}>
                          <span className="text-sm font-semibold block">{oc.value}</span>
                          <span className="text-[10px] text-black/45 block leading-tight">{oc.label}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-black text-white hover:bg-coral transition-colors"
                    >
                      Explore
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAYS OF WORKING */}
      <section className="section">
        <div className="container-x">
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-5 mb-14">
            <SectionTag className="rv">WAYS OF WORKING <b>/</b> 04</SectionTag>
            <h2 className="t-h2 rv d1">Three ways to bring us in.</h2>
            <p className="t-body rv d2">
              Different problems need different shapes of partnership. We will recommend the
              lightest structure that solves yours — not the biggest one we can sell.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {waysOfWorking.map((plan, i) => (
              <div className={`plan-card rv d${i} ${plan.popular ? 'popular' : ''}`} key={plan.name}>
                <div className="plan-top">
                  <div className="plan-meta">
                    <h3 className="plan-name">{plan.name}</h3>
                    {plan.popular ? (
                      <span className="badge hot"><i />Most popular</span>
                    ) : (
                      <span className="badge neutral"><i />{i === 0 ? 'Fixed scope' : 'Quarterly'}</span>
                    )}
                  </div>
                  <p className="plan-for">For: {plan.forWho}</p>
                  <p className="t-body">{plan.desc}</p>
                </div>
                <div className="flex flex-col gap-1 flex-1">
                  {plan.features.map((f) => (
                    <div className="plan-feat" key={f}>
                      <span><Check className="w-3 h-3" strokeWidth={2.5} /></span>
                      {f}
                    </div>
                  ))}
                </div>
                <Button to="/contact" variant={plan.popular ? 'white' : 'outline'} full>
                  Select {plan.name}
                </Button>
              </div>
            ))}
          </div>

          <p className="text-center t-small mt-8">
            Not sure which fits?{' '}
            <Link to="/contact" className="text-black underline underline-offset-4 font-medium">
              Book a 20-minute discovery call
            </Link>
            .
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container-x">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <SectionTag className="rv">OUR PROCESS <b>/</b> 05</SectionTag>
            <h2 className="t-h3 max-w-2xl rv d1">
              From brief to launch, without the guesswork.
            </h2>
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

      <Faq
        items={faqList}
        tag={<>QUESTIONS <b>/</b> 06</>}
        title="The things everyone asks."
        intro="Still curious about something specific? Write to us directly — a real person replies within one working day."
      />

      <CtaBand
        tag={<>START A PROJECT <b>/</b> NOW</>}
        title="Ready to build something worth talking about?"
        text="Share your goal and your constraints. We’ll come back with a clear route forward, a realistic timeline and a fixed scope."
        primary={{ label: 'Start your project', to: '/contact' }}
        secondary={{ label: 'Browse our work', to: '/work' }}
      />
    </div>
  );
}
