import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Star,
  Compass,
  Layers,
  Sparkles,
  Zap,
  TrendingUp,
  Clock,
  Users,
  Check,
  Quote,
} from 'lucide-react';
import {
  agencyMeta,
  agencyProcess,
  clientVoices,
  blogArticles,
  waysOfWorking,
  faqList,
} from '../data/agencyData';
import Button from '../components/ui/Button';
import SectionTag from '../components/ui/SectionTag';
import Mark from '../components/ui/Mark';
import Faq from '../components/ui/Faq';
import CtaBand from '../components/ui/CtaBand';
import ServicesSlider from '../components/common/ServicesSlider';
import BlogModal from '../components/common/BlogModal';

const stepIcons = [Compass, Layers, Sparkles, Zap, TrendingUp];
const avatarGradients = [
  'linear-gradient(135deg,#a86c55,#2b2f36)',
  'linear-gradient(135deg,#f79276,#c75a3c)',
  'linear-gradient(135deg,#465864,#aab9c3)',
  'linear-gradient(135deg,#1c1c1c,#545454)',
  'linear-gradient(135deg,#6b7fa8,#dfe6f6)',
];

const initials = (name) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

const benefits = [
  {
    kicker: 'CAN WE LAUNCH THIS QUARTER? · YES',
    big: '6 weeks',
    rows: [
      ['Positioning', 'Signed off'],
      ['Design system', 'Ready'],
      ['Build', 'In sprint'],
    ],
    title: 'Clarity before the first pixel',
    desc: 'A senior team agrees the goal, the audience and the route before anyone opens a design file.',
  },
  {
    kicker: 'SHIPPED THIS SPRINT · 0 HANDOFFS',
    big: '12 assets',
    rows: [
      ['Brand kit', '✓ Done'],
      ['Landing page', '✓ Live'],
      ['Campaign', '✓ Running'],
    ],
    title: 'Momentum without the handoffs',
    desc: 'Strategy, design and engineering sit together — so work moves from idea to live without waiting in a queue.',
  },
  {
    kicker: 'GROWTH BUDGET · PAID MEDIA',
    big: '₹3.2L / mo',
    rows: [
      ['Spent so far', '₹1.4L'],
      ['Blended ROAS', '4.2×'],
      ['Cost per lead', '−34%'],
    ],
    title: 'Growth you can actually see',
    desc: 'Every channel is measured against revenue, not vanity metrics. You always know what the spend returned.',
    slider: true,
  },
];

export default function Home() {
  const [activeArticle, setActiveArticle] = useState(null);
  const [ti, setTi] = useState(0);
  const [bprog, setBprog] = useState(0);
  const bscroll = useRef(null);

  const voice = clientVoices[ti];

  const onBenefitScroll = () => {
    const el = bscroll.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setBprog(max > 0 ? el.scrollLeft / max : 0);
  };

  const scrollToBenefit = (i) => {
    const el = bscroll.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    el.scrollTo({ left: max * (i / (benefits.length - 1)), behavior: 'smooth' });
  };

  return (
    <div className="overflow-hidden">
      {/* ---------------------------------------------------------------- HERO */}
      <section className="hero" id="top">
        <div className="container-x">
          <div className="hero-top">
            <aside className="hero-left rv d2">
              <div className="pill-tag">
                <i />
                Independent studio · Chennai / Worldwide
              </div>

              <div className="live-card">
                <div className="live-h">
                  <span className="dot" />
                  Studio pulse · live
                  <span className="clk">9:41 AM</span>
                </div>
                <ul className="live-feed">
                  <li>
                    <span className="ic" style={{ background: '#e9f8ef' }}>✦</span>
                    <span className="tx2">
                      <b>Nova campaign went live</b>
                      <small>Meta + IG · 2m ago</small>
                    </span>
                    <em className="pos">+212%</em>
                  </li>
                  <li>
                    <span className="ic" style={{ background: '#fdeceb' }}>◎</span>
                    <span className="tx2">
                      <b>Aurea identity approved</b>
                      <small>Brand sprint · 18m ago</small>
                    </span>
                    <em>120+</em>
                  </li>
                  <li>
                    <span className="ic" style={{ background: '#eef2fb' }}>↗</span>
                    <span className="tx2">
                      <b>Northline site shipped</b>
                      <small>Build · 41m ago</small>
                    </span>
                    <em className="pos">+68%</em>
                  </li>
                </ul>
                <div className="live-foot">
                  <span>This week</span>
                  <span className="bar"><i style={{ width: '64%' }} /></span>
                  <span><b>3</b> launches</span>
                </div>
              </div>

              <div className="trust">
                <div className="avatars" aria-hidden="true">
                  <span style={{ background: 'linear-gradient(135deg,#f79276,#c75a3c)' }}>AM</span>
                  <span style={{ background: 'linear-gradient(135deg,#465864,#aab9c3)' }}>NR</span>
                  <span style={{ background: 'linear-gradient(135deg,#1c1c1c,#545454)' }}>KI</span>
                </div>
                <div className="t-label">
                  120+ brands grown
                  <small>across 11 industries</small>
                </div>
              </div>
            </aside>

            <div className="hero-center rv">
              <h1 className="t-hero">
                Grow loudly.
                <br />
                Build <span className="hero-underline">beautifully.</span>
              </h1>
              <p className="t-lead mt-7 max-w-xl">
                ZYVO is the creative digital growth studio for businesses that refuse to blend in.
                Strategy, brand, web and performance — one senior team, one clear route forward.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button to="/contact">Start a project</Button>
                <Link to="/work" className="ghost-link">
                  <span className="play" aria-hidden="true">
                    <svg width="10" height="10" viewBox="0 0 10 10">
                      <path d="M2 1l7 4-7 4Z" fill="#000" />
                    </svg>
                  </span>
                  See our work
                </Link>
              </div>
              <div className="hero-rating mt-8">
                <span className="stars" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </span>
                <span><b>4.9</b> from 64 client reviews</span>
                <span className="hidden sm:inline">·</span>
                <span>Trusted by 38+ growth-stage brands</span>
              </div>
            </div>

            <div className="hero-visual rv s d3" aria-hidden="true">
              <div className="fchip fchip--a">
                <span className="ai">AI</span>
                <span>Campaign live — <b>+38%</b></span>
              </div>
              <div className="fchip fchip--b">
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#27b36a' }} />
                <span><b>3 assets</b> shipped today</span>
              </div>

              <div className="browser">
                <div className="browser-top">
                  <span className="browser-dot" />
                  <span className="browser-dot" />
                  <span className="browser-dot" />
                  <span className="browser-url">zyvo.studio/growth-os</span>
                </div>
                <div className="browser-body">
                  <div className="dash-head">
                    <b>Growth OS · live</b>
                    <span className="chip up">▲ 24.8%</span>
                  </div>
                  <div className="dash-big">₹48.2<small>L revenue</small></div>
                  <div className="dash-sub">Last 90 days · all channels</div>
                  <div className="bars">
                    {[34, 46, 40, 58, 66, 84].map((h, i) => (
                      <div key={i} className={i === 5 ? 'hl' : ''} style={{ height: `${h}%` }}>
                        {i === 5 && <em>+186%</em>}
                        <span>{['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Now'][i]}</span>
                      </div>
                    ))}
                  </div>
                  <div className="dash-mini">
                    <div>
                      <span>Organic</span>
                      <span className="track"><i style={{ width: '42%', background: '#000' }} /></span>
                      <b>42%</b>
                    </div>
                    <div>
                      <span>Paid media</span>
                      <span className="track"><i style={{ width: '31%', background: '#f79276' }} /></span>
                      <b>31%</b>
                    </div>
                    <div>
                      <span>Social</span>
                      <span className="track"><i style={{ width: '27%', background: '#aab9c3' }} /></span>
                      <b>27%</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-card rv d1">
            <div className="lc">
              <div className="tw">
                <p className="t-small eyebrow-space">ZYVO STUDIO</p>
                <p className="t-label" style={{ color: 'rgba(0,0,0,.7)', lineHeight: 1.4 }}>
                  We bring strategy, design and engineering into one senior team — then connect
                  brand, website and marketing into one growth engine.
                </p>
              </div>
              <div className="icon-row">
                <Mark className="w-16 h-16" />
                <p className="t-h6">Your growth is the best measure of our creativity.</p>
              </div>
            </div>
            <div className="dash">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="t-small">Time handed back this month</p>
                  <div className="dash-big mt-1">11.5 <small>hrs</small></div>
                </div>
                <span className="chip up">▲ 4 launches</span>
              </div>
              <div className="bars">
                {[38, 52, 46, 66, 72, 90].map((h, i) => (
                  <div key={i} className={i === 5 ? 'hl' : ''} style={{ height: `${h}%` }}>
                    {i === 5 && <em>3.1h</em>}
                    <span>{['W1', 'W2', 'W3', 'W4', 'W5', 'Now'][i]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- MARQUEE */}
      <section className="border-y border-black/10 bg-white/50 py-4 overflow-hidden">
        <div className="marquee-track">
          {[...agencyMeta.marquee, ...agencyMeta.marquee].map((item, idx) => (
            <div
              key={`${item}-${idx}`}
              className="flex items-center gap-8 px-8 text-[12px] font-medium uppercase tracking-[.18em] text-black/45 whitespace-nowrap"
            >
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-coral" />
            </div>
          ))}
        </div>
      </section>

      {/* --------------------------------------------------------------- STATS */}
      <section className="section-tight pt-16">
        <div className="container-x grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
      </section>

      {/* ------------------------------------------------------------- PROBLEM */}
      <section className="section">
        <div className="container-x">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
            <SectionTag className="rv">PROBLEM <b>/</b> 01</SectionTag>
            <h2 className="t-h3 max-w-2xl rv d1">
              The busier your business gets, the more fragmented growth feels.
            </h2>
          </div>

          <div className="pcard rv">
            <div className="pimg" aria-hidden="true">
              <div className="rcpt r1"><i className="k" /><i /><i /><i style={{ width: '70%' }} /><i /><i className="k" /></div>
              <div className="rcpt r2"><i className="k" /><i /><i style={{ width: '80%' }} /><i /><i /><i className="k" /></div>
              <div className="clock">
                <svg viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="46" fill="none" stroke="#f1f1f1" strokeWidth="4" />
                  <g stroke="#ccc" strokeWidth="3" strokeLinecap="round">
                    <path d="M50 10v7M50 83v7M10 50h7M83 50h7" />
                  </g>
                  <line className="hand" x1="50" y1="50" x2="50" y2="22" stroke="#000" strokeWidth="4" strokeLinecap="round" />
                  <line className="hand s" x1="50" y1="50" x2="72" y2="50" stroke="#ec5a4f" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="50" cy="50" r="4" fill="#000" />
                </svg>
              </div>
            </div>

            <div className="content">
              <div className="tw">
                <p className="t-h6-light" style={{ color: '#000' }}>
                  A designer here, a developer there, an ads freelancer and a content agency. Every
                  handoff loses momentum.
                </p>
                <div className="flex flex-col gap-6">
                  <div className="t-h2">4+ vendors</div>
                  <p className="t-body max-w-md">
                    Most teams stitch together specialists and then spend their evenings
                    project-managing the gaps. That is a full working day every month you could
                    spend on the business.
                  </p>
                </div>
              </div>
              <div className="side">
                <div className="dots3" aria-hidden="true"><i className="on" /><i /><i /></div>
                <Button to="/about" full>Meet the studio</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ SOLUTION */}
      <section className="section" id="solution">
        <div className="container-x flex flex-col items-center gap-14">
          <div className="max-w-2xl flex flex-col items-center text-center gap-6">
            <SectionTag className="rv">THE SOLUTION <b>/</b> 02</SectionTag>
            <h2 className="t-h2 rv d1">One senior team. Three moves that compound.</h2>
            <p className="t-body rv d2 max-w-xl">
              Position the brand, design the experience, then grow it with intent. Every discipline
              feeds the next, so nothing gets built in isolation.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3 w-full">
            <div className="scard rv">
              <div className="vis darkv" aria-hidden="true">
                <svg className="crossgrid" viewBox="0 0 445 416" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <pattern id="cross" width="98.5" height="102.7" patternUnits="userSpaceOnUse" x="-31" y="-58">
                      <path d="M40 49h18M49 40v18" stroke="#fff" strokeWidth="2.6" />
                      <path d="M8 49h6M84 49h6M49 8v6M49 84v6" stroke="#fff" strokeWidth=".7" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#cross)" />
                </svg>
                <div className="prompt">
                  <small>YOU ASKED</small>
                  <p>Can we own this category?</p>
                </div>
                <div className="answer">
                  <small>✓ YES — HERE’S HOW</small>
                  <b>3.2×</b>
                  <span>Blended ROAS in four months</span>
                </div>
                <div className="cmd">
                  <span>Ask ZYVO anything…</span>
                  <span className="eq"><i /><i /><i /></span>
                </div>
              </div>
              <div className="cap">
                <h3>Position</h3>
                <p>Plain-language strategy that turns a crowded category into a clear lane.</p>
              </div>
            </div>

            <div className="scard rv d1">
              <div className="vis see" aria-hidden="true">
                <div className="panel">
                  <div className="flex justify-between text-[12px] font-semibold">
                    <span>Q1, planned</span>
                    <span className="text-black/45 font-normal">Studio forecast</span>
                  </div>
                  <div className="donut">
                    <svg viewBox="0 0 42 42">
                      <circle cx="21" cy="21" r="15.9" fill="none" stroke="#eef1f6" strokeWidth="6" />
                      <circle cx="21" cy="21" r="15.9" fill="none" stroke="#000" strokeWidth="6" strokeDasharray="40 60" strokeDashoffset="25" />
                      <circle cx="21" cy="21" r="15.9" fill="none" stroke="#f79276" strokeWidth="6" strokeDasharray="25 75" strokeDashoffset="-15" />
                      <circle cx="21" cy="21" r="15.9" fill="none" stroke="#aab9c3" strokeWidth="6" strokeDasharray="20 80" strokeDashoffset="-40" />
                    </svg>
                    <div className="legend">
                      <span><i style={{ background: '#000' }} />Brand 40%</span>
                      <span><i style={{ background: '#f79276' }} />Web 25%</span>
                      <span><i style={{ background: '#aab9c3' }} />Growth 20%</span>
                      <span><i style={{ background: '#eef1f6' }} />Free 15%</span>
                    </div>
                  </div>
                  <div className="goal">
                    <div><span>Positioning</span><b>72%</b></div>
                    <div className="bar"><i style={{ width: '72%' }} /></div>
                  </div>
                  <div className="goal">
                    <div><span>Design system</span><b>45%</b></div>
                    <div className="bar"><i style={{ width: '45%' }} /></div>
                  </div>
                  <div className="goal">
                    <div><span>Launch plan</span><b>100%</b></div>
                    <div className="bar"><i style={{ width: '100%' }} /></div>
                  </div>
                </div>
              </div>
              <div className="cap">
                <h3>Design</h3>
                <p>A visual system that makes the brand instantly recognisable everywhere it shows up.</p>
              </div>
            </div>

            <div className="scard rv d2">
              <div className="vis conn" aria-hidden="true">
                <div className="ring a" />
                <div className="ring b" />
                <div className="node" style={{ left: '8%', top: '18%' }}>✦ Brand</div>
                <div className="node" style={{ right: '8%', top: '28%' }}>▦ Web</div>
                <div className="node" style={{ left: '7%', bottom: '22%' }}>⌕ Search</div>
                <div className="node" style={{ right: '10%', bottom: '14%' }}>↗ Paid</div>
                <Mark className="mark" />
              </div>
              <div className="cap">
                <h3>Grow</h3>
                <p>Search, paid and content working as one engine — measured against revenue, not clicks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- HOW IT WORKS */}
      <section className="section" id="how">
        <div className="container-x grid gap-16 lg:grid-cols-[.85fr_1.15fr]">
          <div className="rv lg:sticky lg:top-28 self-start">
            <SectionTag className="mb-6">HOW IT WORKS <b>/</b> 03</SectionTag>
            <h2 className="t-h2">Five deliberate stages. One clear path.</h2>
            <p className="t-body mt-5 max-w-md">
              No mystery, no black box. You always know the goal, the plan and the next decision.
              Strategy, design and engineering stay in the same room from first brief to launch.
            </p>
            <div className="mt-8">
              <Button to="/contact">Book a discovery call</Button>
            </div>
          </div>

          <ol className="steps">
            {agencyProcess.map((step, i) => {
              const Icon = stepIcons[i] || Sparkles;
              return (
                <li className="step rv" key={step.step} style={{ top: `${96 + i * 6}px` }}>
                  <div className="num">
                    /{step.step}
                    <svg width="12" height="10" aria-hidden="true">
                      <path d="M0 0h12v2H0zM0 4h8v2H0zM0 8h4v2H0z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="body">
                    <Icon className="ic" strokeWidth={1.8} />
                    <div className="t">
                      <h3 className="t-h6">{step.title}</h3>
                      <p className="t-body">{step.desc}</p>
                      <p className="del">Deliverable: {step.deliverable}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ------------------------------------------------------------- FEATURES */}
      <section className="section" id="features">
        <div className="container-x">
          <div className="grid gap-4 lg:grid-cols-2 mb-4">
            <div className="fcard rv">
              <div className="hd">
                <SectionTag>FEATURES <b>/</b> 04-1</SectionTag>
                <h2 className="t-h4">Every page designed to sell before you say a word.</h2>
              </div>
              <div className="uiwrap" aria-hidden="true">
                <div className="ui a">
                  <div className="uh">Traffic &amp; conversion <small>Last 90 days</small></div>
                  <div style={{ fontSize: 26, fontWeight: 500, letterSpacing: '-.03em' }}>
                    42,180{' '}
                    <span className="chip up" style={{ fontSize: 10, verticalAlign: 'middle' }}>
                      +68% enquiries
                    </span>
                  </div>
                  <svg className="spark" viewBox="0 0 300 110" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="sp" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#f79276" stopOpacity=".45" />
                        <stop offset="1" stopColor="#f79276" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0 80 C30 70 50 90 80 64 S130 30 160 52 210 40 240 22 280 30 300 12 V110 H0Z" fill="url(#sp)" />
                    <path d="M0 80 C30 70 50 90 80 64 S130 30 160 52 210 40 240 22 280 30 300 12" fill="none" stroke="#ec5a4f" strokeWidth="2.5" />
                    <circle cx="240" cy="22" r="5" fill="#fff" stroke="#ec5a4f" strokeWidth="2.5" />
                  </svg>
                </div>
                <div className="ui b">
                  <div className="uh">This quarter’s focus <small>AI-checked</small></div>
                  <div className="cat">
                    <i style={{ background: '#fdeceb' }}>✦</i>
                    <div className="bar"><b style={{ width: '82%', background: '#ec5a4f' }} /></div>
                    <em>Brand</em>
                  </div>
                  <div className="cat">
                    <i style={{ background: '#eef2fb' }}>▦</i>
                    <div className="bar"><b style={{ width: '64%', background: '#465864' }} /></div>
                    <em>Web</em>
                  </div>
                  <div className="cat">
                    <i style={{ background: '#e9f8ef' }}>⌕</i>
                    <div className="bar"><b style={{ width: '74%', background: '#27b36a' }} /></div>
                    <em>Search</em>
                  </div>
                  <div className="cat">
                    <i style={{ background: '#f4f4f4' }}>↗</i>
                    <div className="bar"><b style={{ width: '58%', background: '#000' }} /></div>
                    <em>Paid</em>
                  </div>
                </div>
              </div>
            </div>

            <div className="fcard glow rv d1">
              <div className="hd">
                <SectionTag>FEATURES <b>/</b> 04-2</SectionTag>
                <h2 className="t-h4">Brand systems that stay consistent as you scale.</h2>
              </div>
              <div className="centerui" aria-hidden="true">
                <div className="goalcard">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13, fontWeight: 600 }}>
                    <span>Launch readiness</span>
                    <span className="badge" style={{ fontSize: 11, padding: '3px 8px' }}>On track</span>
                  </div>
                  <div className="ringwrap">
                    <svg viewBox="0 0 120 120" width="132" height="132">
                      <circle cx="60" cy="60" r="50" fill="none" stroke="#f1f3f6" strokeWidth="12" />
                      <circle cx="60" cy="60" r="50" fill="none" stroke="url(#ring-grad)" strokeWidth="12" strokeLinecap="round" strokeDasharray="314" strokeDashoffset="88" transform="rotate(-90 60 60)" />
                      <defs>
                        <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0" stopColor="#f79276" />
                          <stop offset="1" stopColor="#c75a3c" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <b>
                      <span>
                        72%
                        <small>18 of 25 assets</small>
                      </span>
                    </b>
                  </div>
                  <div className="r"><span style={{ color: 'rgba(0,0,0,.5)' }}>Design system</span><b>Ready</b></div>
                  <div className="r"><span style={{ color: 'rgba(0,0,0,.5)' }}>Launch window</span><b>6 weeks</b></div>
                </div>
              </div>
            </div>
          </div>

          <div className="wide-feature rv">
            <div className="shape" />
            <div className="blob" />
            <div className="lc">
              <div className="t">
                <div>
                  <SectionTag light className="mb-6">FEATURES <b>/</b> 04-3</SectionTag>
                  <h2 className="t-h2-light">A partner that moves at your speed.</h2>
                </div>
                <p className="t-body">
                  Approve a direction in the morning; see it live by Friday. Strategy, design and
                  engineering sit in the same room — so the work keeps moving without a queue of
                  handoffs.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Button to="/about" variant="white">See how we work</Button>
                <span className="text-white/50 text-sm">One senior lead · Weekly demos</span>
              </div>
            </div>

            <div className="phone-slot" aria-hidden="true">
              <div className="phone">
                <div className="screen">
                  <div className="ph-status">
                    <span>9:41</span>
                    <span className="ph-island" />
                    <span className="ph-sig"><i style={{ height: 4 }} /><i style={{ height: 6 }} /><i style={{ height: 8 }} /><i style={{ height: 10 }} /></span>
                  </div>
                  <div className="ph-head">
                    <div className="ph-av">Z</div>
                    <div><small>Growth OS · live</small><b>Good morning, Arjun</b></div>
                    <span className="ph-bell">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2">
                        <path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10 21h4" />
                      </svg>
                    </span>
                  </div>
                  <div className="ph-brief">
                    <span className="ai">Z</span>
                    <span>Campaign live. <b>+38% enquiries</b> this week — want the full breakdown?</span>
                  </div>
                  <div className="ph-label">PIPELINE THIS MONTH</div>
                  <div className="ph-bal">₹48.2<small>L</small></div>
                  <div className="ph-actions">
                    <div><span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M12 3v3M12 18v3M3 12h3M18 12h3M6 6l2 2M16 16l2 2M6 18l2-2M16 8l2-2" /></svg></span>Brief</div>
                    <div><span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></svg></span>Plan</div>
                    <div><span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2"><circle cx="9" cy="8" r="3" /><circle cx="17" cy="10" r="2.5" /><path d="M3 20c0-3 3-5 6-5s6 2 6 5M15 15c3 0 6 1.5 6 4" /></svg></span>Team</div>
                    <div><span><svg width="14" height="14" viewBox="0 0 24 24" fill="#000"><circle cx="5" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="19" cy="12" r="2" /></svg></span>More</div>
                  </div>
                  <div className="ph-list">
                    <div className="lh">Shipped this week <small>Studio</small></div>
                    <div className="tx"><i style={{ background: '#e9f8ef', color: '#16854a' }}>✓</i><div><b>Landing page live</b><small>Northline · on time</small></div><em>98</em></div>
                    <div className="tx"><i style={{ background: '#fdeceb', color: '#ec5a4f' }}>◎</i><div><b>Brand kit approved</b><small>Aurea · 120 assets</small></div><em>✓</em></div>
                    <div className="tx"><i style={{ background: '#eef2fb', color: '#465864' }}>↗</i><div><b>Paid campaign</b><small>Nova · live</small></div><em className="pos">+212%</em></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- PRODUCT */}
      <section className="section soft-tint" id="services">
        <div className="container-x flex flex-col gap-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 rv">
            <div>
              <SectionTag className="mb-6">PRODUCT <b>/</b> 05</SectionTag>
              <h2 className="t-h2 max-w-2xl">Ten disciplines. One growth engine.</h2>
            </div>
            <Button to="/services" variant="outline">All services</Button>
          </div>

          <ServicesSlider />

          <div className="discovery-card rv">
            <div>
              <h3 className="t-h5">Not sure where to start?</h3>
              <p className="t-body mt-2 max-w-xl">
                Tell us the goal. We’ll shape the right team, the right scope and a realistic
                timeline — before you commit to anything.
              </p>
            </div>
            <Button to="/contact">Book a discovery call</Button>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- RESULTS */}
      <div className="dark-shell">
        <section className="res-section" id="results">
          <div className="container-x">
            <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
              <div className="rv">
                <SectionTag className="mb-6">REAL RESULTS <b>/</b> 06</SectionTag>
                <h2 className="t-h2 max-w-md">More growth per quarter, measured.</h2>
                <p className="t-body mt-5 max-w-md">
                  From day one, partners see enquiries, revenue and retention move — tracked week
                  by week and reported honestly, not dressed up.
                </p>
              </div>

              <div className="rv d1">
                <div className="chart-wrap">
                  <svg className="chart" viewBox="0 0 1132 571" role="img" aria-label="30-day chart of growth rising over time">
                    <defs>
                      <linearGradient id="fc" x1="0.81" x2="0.41" y1="0.04" y2="0.63">
                        <stop offset="0" stopColor="#f8cfc5" />
                        <stop offset="1" stopColor="#ecf5fb" />
                      </linearGradient>
                    </defs>
                    <path
                      transform="translate(0 44.631)"
                      d="M 0 458.095 C 103.767 420.655 164.14 301.726 249.04 317.143 C 341.487 334.762 362.068 296.333 454.515 263.297 C 558.282 225.857 596.187 211.429 688.633 222.44 C 784.853 233.452 822.587 140.952 915.033 125.536 C 1003.71 110.119 1047.1 24.226 1132 0 L 1132 526.369 L 0 526.369 Z"
                      fill="url(#fc)"
                    />
                    <path
                      className="chart-line"
                      transform="translate(0 43.63)"
                      d="M 0 459.096 C 103.767 421.656 164.14 302.727 249.04 318.144 C 341.487 335.763 348.347 300.838 440.794 267.802 C 544.561 230.362 596.187 212.43 688.633 223.442 C 784.853 234.453 822.587 141.953 915.033 126.537 C 1003.71 111.12 1046.24 24.226 1131.14 0"
                      fill="none"
                      stroke="#000"
                    />
                    <path d="M0 571.2H1132" stroke="rgba(23,33,43,.16)" strokeWidth="2.2" />
                    <path
                      transform="translate(158.652 130.724)"
                      d="M 0 271.062 L 0 440.476 M 264.079 212.552 L 264.079 440.476 M 558.337 137.951 L 558.337 440.476 M 822.415 0 L 822.415 440.476"
                      stroke="rgba(23,33,43,.22)"
                      strokeDasharray="6.6 13.2"
                    />
                    <circle cx="160" cy="389" r="20" fill="#f1f8fe" stroke="#949494" strokeWidth=".5" />
                    <circle cx="160" cy="389" r="7" fill="#949494" />
                    <circle cx="424" cy="318" r="20" fill="#f1f8fe" stroke="#666" strokeWidth=".5" />
                    <circle cx="424" cy="318" r="7" fill="#666" />
                    <circle cx="716" cy="265" r="20" fill="#fff4ea" stroke="#ff6742" strokeWidth=".5" />
                    <circle cx="716" cy="265" r="7" fill="#ff8a3d" />
                    <circle cx="981" cy="142" r="20" fill="#f7f7f7" stroke="#3d3d3d" strokeWidth=".5" />
                    <circle cx="981" cy="142" r="7" fill="#6b6b6b" />
                  </svg>
                </div>
                <div className="timeline" aria-hidden="true">
                  <span>SIGN UP</span>
                  <span>WEEK 1</span>
                  <span>WEEK 2</span>
                  <span>WEEK 3</span>
                  <span>DAY 30</span>
                </div>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-3 mt-14">
              <div className="rc rc--peach rv">
                <div className="num" aria-hidden="true">
                  /01
                  <svg width="12" height="10"><path d="M0 0h12v2H0zM0 4h8v2H0zM0 8h4v2H0z" fill="currentColor" /></svg>
                </div>
                <div className="body">
                  <div className="ic">
                    <span className="ic-badge"><Clock className="w-4 h-4" strokeWidth={1.8} /></span>
                    <span>Projects shipped</span>
                  </div>
                  <div className="t">
                    <div className="stat">140<span>+</span></div>
                    <p className="t-body">Delivered across 11 industries, from first identity to full growth engine.</p>
                  </div>
                </div>
              </div>

              <div className="rc rc--blue rv d1">
                <div className="num" aria-hidden="true">
                  /02
                  <svg width="12" height="10"><path d="M0 0h12v2H0zM0 4h8v2H0zM0 8h4v2H0z" fill="currentColor" /></svg>
                </div>
                <div className="body">
                  <div className="ic">
                    <span className="ic-badge"><Users className="w-4 h-4" strokeWidth={1.8} /></span>
                    <span>Brands scaled</span>
                  </div>
                  <div className="t">
                    <div className="stat">38<span>+</span></div>
                    <p className="t-body">Growth-stage partners who stayed past the first project — and kept compounding.</p>
                  </div>
                </div>
              </div>

              <div className="rc rc--green rv d2">
                <div className="num" aria-hidden="true">
                  /03
                  <svg width="12" height="10"><path d="M0 0h12v2H0zM0 4h8v2H0zM0 8h4v2H0z" fill="currentColor" /></svg>
                </div>
                <div className="body">
                  <div className="ic">
                    <span className="ic-badge"><TrendingUp className="w-4 h-4" strokeWidth={1.8} /></span>
                    <span>Client retention</span>
                  </div>
                  <div className="t">
                    <div className="stat">93<span>%</span></div>
                    <p className="t-body">Still with us after year one. The best measure of whether the work earned its place.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="testi">
              <SectionTag className="rv">STORIES <b>/</b> 07</SectionTag>
              <div className="trow rv">
                <div className="tvisual">
                  <div className="qmark" aria-hidden="true">“</div>
                  <div>
                    <div className="metric">
                      {voice.metric}
                      <small>Verified partner outcome</small>
                    </div>
                  </div>
                  <div className="person">
                    <span>{initials(voice.author)}</span>
                    <div>
                      <b>{voice.author}</b>
                      <small>{voice.title}</small>
                    </div>
                  </div>
                </div>

                <div className="tcontent">
                  <div className="q">
                    <Quote className="w-6 h-6 text-coral" />
                    <blockquote className="t-h5" key={ti}>
                      {voice.quote}
                    </blockquote>
                  </div>
                  <div>
                    <div className="who">
                      <div className="nm">
                        <b style={{ fontWeight: 500 }}>{voice.author}</b>
                        <span>{voice.title}</span>
                      </div>
                    </div>
                    <div className="tfoot">
                      <div className="tav">
                        {clientVoices.map((v, i) => (
                          <button
                            key={v.author}
                            className={i === ti ? 'on' : ''}
                            style={{ background: avatarGradients[i % avatarGradients.length] }}
                            onClick={() => setTi(i)}
                            aria-label={`Story ${i + 1}: ${v.author}`}
                          >
                            {initials(v.author)}
                          </button>
                        ))}
                      </div>
                      <div className="tnav">
                        <button
                          onClick={() => setTi((ti - 1 + clientVoices.length) % clientVoices.length)}
                          aria-label="Previous story"
                        >
                          ‹
                        </button>
                        <span>{String(ti + 1).padStart(2, '0')} / {String(clientVoices.length).padStart(2, '0')}</span>
                        <button
                          className="next"
                          onClick={() => setTi((ti + 1) % clientVoices.length)}
                          aria-label="Next story"
                        >
                          ›
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ------------------------------------------------------------- BENEFITS */}
      <div className="dark-shell">
        <section className="section" id="benefits">
          <div className="container-x">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 rv">
              <div>
                <SectionTag light className="mb-6">KEY BENEFITS <b>/</b> 08</SectionTag>
                <h2 className="t-h2 text-white max-w-2xl">
                  Say yes faster, every time your week fills up.
                </h2>
              </div>
              <Button to="/contact" variant="white">Start a project</Button>
            </div>

            <div className="ben-track rv">
              <div className="pline" aria-hidden="true">
                <i style={{ width: `${Math.max(22, bprog * 100)}%` }} />
              </div>
              <div className="bscroll" ref={bscroll} onScroll={onBenefitScroll}>
                <div className="blist">
                  {benefits.map((b, i) => (
                    <article className="bcard" key={b.title}>
                      <div className="bmedia" aria-hidden="true">
                        <div className="bg" />
                        <div className="fg">
                          <small style={{ color: 'rgba(0,0,0,.5)', fontSize: 11 }}>{b.kicker}</small>
                          <div className="big">{b.big}</div>
                          {b.slider && (
                            <div className="slider-line">
                              <b style={{ width: '44%' }} />
                              <u style={{ left: '44%' }} />
                            </div>
                          )}
                          <div className="mini">
                            {b.rows.map((r) => (
                              <div key={r[0]}>
                                <span>{r[0]}</span>
                                <b>{r[1]}</b>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="tw">
                        <p className="t-small idx">[{String(i + 1).padStart(2, '0')}]</p>
                        <h3 className="t-h6 text-white">{b.title}</h3>
                        <p className="t-body">{b.desc}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
              <div className="bpag">
                {benefits.map((b, i) => (
                  <button
                    key={b.title}
                    className={Math.round(bprog * (benefits.length - 1)) === i ? 'on' : ''}
                    onClick={() => scrollToBenefit(i)}
                    aria-label={`Benefit ${i + 1}: ${b.title}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ------------------------------------------------------- WAYS OF WORKING */}
      <div className="dark-shell">
        <section className="ways-section" id="pricing">
          <div className="container-x">
            <div className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto mb-14">
              <SectionTag className="rv">WAYS OF WORKING <b>/</b> 09</SectionTag>
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
      </div>

      {/* ------------------------------------------------------------------ FAQ */}
      <Faq
        id="faq"
        items={faqList}
        tag={<>FAQS <b>/</b> 10</>}
        title="Questions, answered quickly."
        intro="Because you have somewhere to be. What we do, how we work, and how your data stays yours."
      />

      {/* -------------------------------------------------------------- JOURNAL */}
      <section className="section">
        <div className="container-x">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 rv">
            <div>
              <SectionTag className="mb-6">JOURNAL <b>/</b> 11</SectionTag>
              <h2 className="t-h2">Notes for growing brands.</h2>
              <p className="t-body mt-4 max-w-xl">
                Short reads on doing more, spending well and letting the boring parts run
                themselves.
              </p>
            </div>
            <Button to="/work" variant="outline">View all notes</Button>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {blogArticles.map((article, i) => (
              <button
                key={article.id}
                className={`post-card rv d${i}`}
                onClick={() => setActiveArticle(article)}
              >
                <div className="thumb">
                  <img src={article.image} alt={article.title} loading="lazy" />
                </div>
                <div className="c">
                  <div className="flex flex-col gap-3">
                    <div className="meta">
                      {article.category} <span>/</span> {article.date}
                    </div>
                    <h3 className="t-h6">{article.title}</h3>
                  </div>
                  <span className="readmore">
                    Read note <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ CTA */}
      <CtaBand
        tag={<>GET STARTED <b>/</b> NOW</>}
        title="Let’s build something worth talking about."
        text="Tell us what you are building and where you want it to go. We will come back with honest thinking, a clear route forward and a realistic timeline."
        primary={{ label: 'Start a project', to: '/contact' }}
        secondary={{ label: 'Explore our work', to: '/work' }}
        note="Limited project slots each quarter · Replies within one working day."
      />

      {activeArticle && (
        <BlogModal article={activeArticle} onClose={() => setActiveArticle(null)} />
      )}
    </div>
  );
}
