import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ShieldCheck,
  Handshake,
  TrendingUp,
  Compass,
  Globe2,
} from 'lucide-react';
import {
  agencyMeta,
  coreValues,
  agencyProcess,
  teamMembers,
} from '../data/agencyData';
import PageHero from '../components/ui/PageHero';
import SectionTag from '../components/ui/SectionTag';
import Button from '../components/ui/Button';
import CtaBand from '../components/ui/CtaBand';
import Mark from '../components/ui/Mark';

const iconMap = {
  Sparkles,
  ShieldCheck,
  Handshake,
  TrendingUp,
};

const facts = [
  ['Founded', '2018 · Chennai, India'],
  ['Team', '24 specialists'],
  ['Disciplines', 'Brand · Web · Growth'],
  ['Clients', '38+ across 11 industries'],
  ['Markets', 'India · UK · UAE · US'],
  ['Retention', '93% after year one'],
  ['Engagements', 'Sprint · Retainer · Partner'],
];

export default function About() {
  return (
    <div className="overflow-hidden">
      <PageHero
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'About' }]}
        tag={<>ABOUT ZYVO <b>/</b> 01</>}
        title={
          <>
            We create. We innovate.
            <br />
            <span className="hero-underline">We grow.</span>
          </>
        }
        lead="A creative digital growth studio for businesses that refuse to blend in. We bring strategy, design, technology and marketing together to build brands that matter — and results you can measure."
        actions={
          <>
            <Button to="/contact">Work with us</Button>
            <Button to="/work" variant="outline">See our work</Button>
          </>
        }
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mt-14">
          {agencyMeta.stats.map((stat, i) => (
            <div key={stat.label} className={`stat-card rv d${i}`}>
              <div className="big">{stat.value}</div>
              <div>
                <div className="lbl">{stat.label}</div>
                <div className="det">{stat.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </PageHero>

      {/* WHO WE ARE */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 rv">
            <div className="photo aspect-[4/5] max-h-[620px]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="Inside the ZYVO studio"
              />
              <div className="photo-caption">
                <small>Inside the studio</small>
                <b>Client retention 93% after year one</b>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 rv d1">
            <SectionTag className="mb-6">WHO WE ARE <b>/</b> 02</SectionTag>
            <h2 className="t-h2 max-w-lg">
              A forward-thinking studio, built for the way brands grow now.
            </h2>
            <div className="mt-6 space-y-4 t-body max-w-xl">
              <p>
                ZYVO is a creative digital growth studio dedicated to helping businesses establish
                a strong digital presence and unlock their next stage of growth.
              </p>
              <p>
                We bring together creative design, strategic thinking, modern technology and
                digital marketing to deliver work that helps brands succeed in an increasingly
                competitive online environment. We are small on purpose and senior by design — the
                people you meet are the people who do the work.
              </p>
              <p>
                We don’t just create websites or run campaigns. We create digital experiences that
                build connections, inspire audiences and support business growth — then we measure
                them honestly.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/services">Explore what we do</Button>
              <Button to="/work" variant="outline">Recent work</Button>
            </div>
          </div>
        </div>
      </section>

      {/* FACT PANEL + BELIEF */}
      <section className="section-tight">
        <div className="container-x grid gap-4 lg:grid-cols-[1.1fr_.9fr]">
          <div className="surface rv p-7 sm:p-9">
            <div className="flex items-center justify-between gap-4 pb-5 border-b border-black/10">
              <h3 className="t-h6 flex items-center gap-2">
                <Compass className="w-5 h-5" strokeWidth={1.8} />
                Studio at a glance
              </h3>
              <span className="badge neutral">EST. 2018</span>
            </div>
            <div className="mt-2">
              {facts.map(([label, val]) => (
                <div key={label} className="flex items-center justify-between gap-4 py-3 border-b border-black/5 last:border-0">
                  <span className="text-xs font-medium text-black/45">{label}</span>
                  <span className="text-xs sm:text-sm font-semibold text-right">{val}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rv d1 rounded-3xl bg-night text-white p-7 sm:p-10 flex flex-col justify-between gap-10 relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-peach/25 blur-3xl" />
            <div className="relative">
              <SectionTag light className="mb-6">OUR BELIEF <b>/</b> 03</SectionTag>
              <p className="t-h4 max-w-md">
                “Your success is the best measure of our creativity. Everything else is
                decoration.”
              </p>
            </div>
            <div className="relative flex items-center gap-3">
              <Mark className="w-10 h-10" />
              <span className="text-sm text-white/60">— The ZYVO studio principle</span>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="section">
        <div className="container-x">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <SectionTag className="rv">PURPOSE <b>/</b> 04</SectionTag>
            <h2 className="t-h3 max-w-2xl rv d1">
              Clear about why we exist. Serious about how.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rv rounded-3xl p-7 sm:p-10 soft-tint border border-black/5">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm grid place-items-center mb-6">
                <Sparkles className="w-6 h-6 text-coral" strokeWidth={1.8} />
              </div>
              <span className="eyebrow eyebrow-space text-[11px] text-coral font-semibold">Our mission</span>
              <h3 className="t-h4 mt-3 max-w-md">
                Make digital growth feel attainable for ambitious businesses.
              </h3>
              <p className="t-body mt-4 max-w-md">
                To empower businesses with innovative digital solutions that strengthen their
                online presence, deepen customer engagement and drive sustainable growth — not
                one-off spikes.
              </p>
            </div>

            <div className="rv d1 rounded-3xl p-7 sm:p-10 bg-night text-white relative overflow-hidden">
              <div className="absolute -right-16 -bottom-20 w-72 h-72 rounded-full bg-soft/20 blur-3xl" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-white/10 grid place-items-center mb-6">
                  <Globe2 className="w-6 h-6 text-peach" strokeWidth={1.8} />
                </div>
                <span className="eyebrow eyebrow-light eyebrow-space text-[11px] font-semibold">Our vision</span>
                <h3 className="t-h4 mt-3 max-w-md">
                  A trusted creative digital partner for brands worldwide.
                </h3>
                <p className="t-body mt-4 max-w-md">
                  To become the partner ambitious businesses call first — by combining technology,
                  creativity and strategic excellence with the honesty of a team that acts like an
                  owner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <div className="container-x">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <SectionTag className="rv">CORE VALUES <b>/</b> 05</SectionTag>
            <h2 className="t-h3 max-w-2xl rv d1">The four things we refuse to compromise.</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((val, idx) => {
              const Icon = iconMap[val.icon] || Sparkles;
              return (
                <div key={val.title} className={`surface rv d${idx} p-6 flex flex-col gap-5`}>
                  <div className="w-11 h-11 rounded-2xl bg-coral/10 text-coral grid place-items-center">
                    <Icon className="w-5 h-5" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="t-h6">{val.title}</h3>
                    <div className="text-xs font-medium text-coral mt-1">{val.subtitle}</div>
                  </div>
                  <p className="t-body text-[14px] flex-1">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STUDIO GALLERY */}
      <section className="section">
        <div className="container-x">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10 rv">
            <div>
              <SectionTag className="mb-6">INSIDE THE STUDIO <b>/</b> 06</SectionTag>
              <h2 className="t-h2">Small team. Wide view.</h2>
              <p className="t-body mt-4 max-w-xl">
                Strategy sessions, design critiques and honest conversations — this is where the
                work actually happens.
              </p>
            </div>
            <Link to="/contact" className="text-sm font-medium underline underline-offset-4 decoration-black/25 hover:decoration-coral transition-colors">
              Come say hello
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
                cap: 'Workshops',
                sub: 'Clarity before creativity.',
              },
              {
                img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
                cap: 'The team',
                sub: 'Every project starts in the same room.',
              },
              {
                img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
                cap: 'Our studio',
                sub: 'Nungambakkam, Chennai.',
              },
            ].map((g, i) => (
              <div key={g.cap} className={`photo aspect-[4/3] rv d${i}`}>
                <img src={g.img} alt={g.cap} loading="lazy" />
                <div className="photo-caption">
                  <small>{g.sub}</small>
                  <b>{g.cap}</b>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section">
        <div className="container-x">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <SectionTag className="rv">OUR APPROACH <b>/</b> 07</SectionTag>
            <h2 className="t-h3 max-w-2xl rv d1">
              Structured enough to be reliable. Creative enough to surprise.
            </h2>
          </div>

          <div className="space-y-3">
            {agencyProcess.map((step, idx) => (
              <div
                key={step.step}
                className={`surface rv d${idx} p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6`}
              >
                <div className="flex items-start gap-6">
                  <span className="t-h4 text-coral/70 flex-none">{step.step}</span>
                  <div>
                    <h3 className="t-h6">{step.title}</h3>
                    <p className="t-body mt-2 max-w-2xl">{step.desc}</p>
                  </div>
                </div>
                <div className="text-xs font-medium px-4 py-2 rounded-full bg-black/5 border border-black/5 text-black/60 self-end md:self-center whitespace-nowrap">
                  {step.deliverable.split('&')[0]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section">
        <div className="container-x">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10 rv">
            <div>
              <SectionTag className="mb-6">THE PEOPLE <b>/</b> 08</SectionTag>
              <h2 className="t-h2">Senior people. No handovers.</h2>
              <p className="t-body mt-4 max-w-xl">
                A compact team of strategists, designers, engineers and growth leads. The names
                below are in the room for your project — not just the pitch.
              </p>
            </div>
            <Button to="/contact" variant="outline">Come say hello</Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, idx) => (
              <div key={member.name} className={`surface overflow-hidden flex flex-col rv d${idx}`}>
                <div className="photo aspect-[4/5] rounded-none">
                  <img src={member.image} alt={member.name} loading="lazy" />
                  <div className="photo-caption">
                    <small>{member.speciality}</small>
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="text-lg font-medium">{member.name}</h3>
                  <div className="text-xs text-black/50 font-medium">{member.role}</div>
                  <p className="text-xs text-black/50 leading-relaxed pt-2 border-t border-black/5 mt-1">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        tag={<>WORK WITH US <b>/</b> NOW</>}
        title="If you care about the details, we’ll get along."
        text="Tell us what you are building. We’ll tell you honestly how we can help, what it takes, and where we would start."
        primary={{ label: 'Start a conversation', to: '/contact' }}
        secondary={{ label: 'Explore services', to: '/services' }}
      />
    </div>
  );
}
