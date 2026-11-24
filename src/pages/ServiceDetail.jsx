import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import { servicesData } from '../data/agencyData';
import PageHero from '../components/ui/PageHero';
import SectionTag from '../components/ui/SectionTag';
import Button from '../components/ui/Button';
import CtaBand from '../components/ui/CtaBand';

const deliverySteps = [
  {
    step: '01',
    title: 'Audit & architect',
    desc: 'We map your audience, content and commercial goals into a clear project structure.',
  },
  {
    step: '02',
    title: 'Design the experience',
    desc: 'Wireframes become high-fidelity, motion-aware designs tested against real content.',
  },
  {
    step: '03',
    title: 'Build in sprints',
    desc: 'Weekly demos on a live staging link, with performance and accessibility baked in.',
  },
  {
    step: '04',
    title: 'Launch & optimise',
    desc: 'Analytics, heatmaps and a 30-day post-launch sprint to improve what matters.',
  },
];

const meta = [
  ['Typical timeline', '4–8 weeks'],
  ['Team shape', '3–5 specialists'],
  ['Engagement', 'Sprint or retainer'],
  ['Senior lead', 'Named, start to finish'],
];

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const pairedServices = servicesData.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div className="overflow-hidden">
      <PageHero
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: service.title },
        ]}
        tag={<>SERVICE <b>/</b> {service.num}</>}
        title={service.title}
        lead={service.lead}
        actions={
          <>
            <Button to="/contact">Discuss this service</Button>
            <Button to="/work" variant="outline">See related work</Button>
          </>
        }
      >
        <div className="mt-8 flex flex-wrap gap-2 rv">
          {service.tags.map((tag) => (
            <span key={tag} className="badge neutral">{tag}</span>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mt-10">
          {meta.map(([label, val], i) => (
            <div key={label} className={`surface rv d${i} p-5`}>
              <span className="text-xs text-black/45 block">{label}</span>
              <span className="text-sm font-semibold block mt-1">{val}</span>
            </div>
          ))}
        </div>
      </PageHero>

      {/* FEATURED IMAGE */}
      <section className="section-tight">
        <div className="container-x">
          <div className="photo aspect-[21/9] rv">
            <img src={service.image} alt={service.title} />
            <div className="photo-caption">
              <small>In action</small>
              <b>{service.photoCaption}</b>
            </div>
          </div>
        </div>
      </section>

      {/* OPPORTUNITY + INCLUDED */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7 rv">
            <SectionTag className="mb-6">THE OPPORTUNITY <b>/</b> 02</SectionTag>
            <h2 className="t-h3 max-w-xl">What this looks like when it is done well.</h2>
            <div className="mt-6 space-y-4 t-body max-w-xl">
              <p>{service.shortDesc}</p>
              <p>
                Most businesses do not fail because of ideas; they struggle because channels are
                fragmented and measured with the wrong metrics. We bring strategy, design, and
                engineering together into one agile pod.
              </p>
            </div>

            <div className="mt-8 rounded-2xl bg-coral/10 border border-coral/20 p-5 text-sm leading-relaxed text-black/70">
              <strong className="text-black block mb-1">Commercial guarantee</strong>
              Every engagement is scoped around one clear commercial outcome. If we cannot connect
              the work to that outcome, we will say so before you spend a rupee.
            </div>
          </div>

          <div className="lg:col-span-5 surface p-7 sm:p-8 rv d1">
            <h3 className="t-h6 mb-5">What is included</h3>
            <div className="space-y-3">
              {service.included.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-forest/10 text-forest grid place-items-center flex-none mt-0.5">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium text-black/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="section">
        <div className="container-x">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10">
            <SectionTag className="rv">OUTCOMES, NOT OUTPUT <b>/</b> 03</SectionTag>
            <h2 className="t-h3 max-w-2xl rv d1">Averages from recent engagements.</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {service.outcomes.map((oc, i) => (
              <div key={oc.label} className={`stat-card rv d${i} min-h-[200px]`}>
                <div className="big">{oc.value}</div>
                <div>
                  <div className="lbl">{oc.label}</div>
                  <div className="det">Measured against the commercial goal, not a vanity metric.</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS + TOOLS */}
      <section className="section">
        <div className="container-x">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10">
            <SectionTag className="rv">HOW WE DELIVER <b>/</b> 04</SectionTag>
            <h2 className="t-h3 max-w-2xl rv d1">A considered process, built for momentum.</h2>
          </div>

          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {deliverySteps.map((step, i) => (
              <div key={step.step} className={`surface rv d${i} p-6 flex flex-col gap-6`}>
                <span className="t-h4 text-coral/70">{step.step}</span>
                <div>
                  <h3 className="t-h6">{step.title}</h3>
                  <p className="t-body mt-2 text-[14px]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="surface rv p-6 mt-4 flex flex-wrap items-center gap-2.5">
            <span className="text-[11px] font-semibold uppercase tracking-[.14em] text-black/45 mr-2">
              Tools we use
            </span>
            {service.tools.map((tool) => (
              <span key={tool} className="tool-pill">{tool}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PAIRED */}
      <section className="section">
        <div className="container-x">
          <div className="flex items-center justify-between gap-4 mb-8">
            <h2 className="t-h3">Often paired with</h2>
            <Link to="/services" className="text-sm font-medium underline underline-offset-4 decoration-black/25 hover:decoration-coral transition-colors">
              View all services
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {pairedServices.map((ps, i) => (
              <Link
                key={ps.slug}
                to={`/services/${ps.slug}`}
                className={`surface rv d${i} p-6 flex flex-col gap-5 group hover:-translate-y-1 transition-transform`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-coral">{ps.num}</span>
                  <ArrowUpRight className="w-4 h-4 text-black/30 group-hover:text-black transition-colors" />
                </div>
                <div>
                  <h3 className="t-h6">{ps.title}</h3>
                  <p className="t-body mt-2 text-[14px] line-clamp-2">{ps.shortDesc}</p>
                </div>
                <span className="text-xs font-semibold mt-auto pt-4 border-t border-black/5">
                  Explore discipline
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        tag={<>{service.title.toUpperCase()} <b>/</b> ZYVO</>}
        title="Let’s make this your unfair advantage."
        text="Tell us the outcome you need. We’ll shape the scope, timeline and team around it — then show you exactly how we would start."
        primary={{ label: 'Start a conversation', to: '/contact' }}
        secondary={{ label: 'Explore all services', to: '/services' }}
      />
    </div>
  );
}
