import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  CheckCircle2,
  Sparkles,
  Send,
} from 'lucide-react';
import { agencyMeta } from '../data/agencyData';
import PageHero from '../components/ui/PageHero';
import SectionTag from '../components/ui/SectionTag';
import Button from '../components/ui/Button';
import CtaBand from '../components/ui/CtaBand';
import Faq from '../components/ui/Faq';

const serviceOptions = [
  'Website Design & Development',
  'Digital Marketing',
  'Branding & Creative Design',
  'Social Media Management',
  'Content Creation',
  'Business Growth Consulting',
  'Search Engine Optimisation (SEO)',
  'PPC Management',
  'Reputation Management',
  'CRM & Automation',
  'A complete growth partnership',
  'Not sure yet — help me decide',
];

const budgetOptions = [
  'Under ₹1 lakh / $1,200',
  '₹1–3 lakh / $1.2k–3.6k',
  '₹3–8 lakh / $3.6k–9.6k',
  '₹8 lakh+ / $9.6k+',
  'Not sure yet',
];

const availability = [
  ['Studio status', '2 slots remaining (Q1)', true],
  ['Discovery call', 'Within 48 hours'],
  ['First reply', '1 working day'],
  ['Timezone', 'IST · GMT +5:30'],
  ['Working hours', 'Mon–Sat · 9:30–18:30'],
  ['Studio base', 'Chennai, India'],
];

const contactFaq = [
  {
    q: 'What kind of businesses do you work with?',
    a: 'We work with growth-stage brands, ambitious SMEs and funded start-ups across e-commerce, hospitality, professional services, wellness and B2B SaaS. The common thread is a real appetite to grow.',
  },
  {
    q: 'How do you price your work?',
    a: 'Fixed-scope projects are quoted after a discovery call. Ongoing partnerships run on a flat monthly retainer. You always know the number before we start — we never mark up media spend.',
  },
  {
    q: 'Who will we actually work with?',
    a: 'A named senior lead owns your account from first call to final delivery, supported by a small specialist team. No handover to a junior team after the pitch.',
  },
  {
    q: 'How quickly can we start?',
    a: 'Usually within one to two weeks. We take on a limited number of new projects each quarter to protect quality, so early conversations help.',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    details: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.service && formData.details) {
      setSubmitted(true);
    }
  };

  const handleCopy = () => {
    const enquirySummary = `
Project Enquiry for ZYVO:
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not specified'}
Service: ${formData.service}
Budget: ${formData.budget || 'Not specified'}
Project Details: ${formData.details}
    `.trim();

    navigator.clipboard.writeText(enquirySummary).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  const openEmailApp = () => {
    const subject = encodeURIComponent(`Project Enquiry: ${formData.company || formData.name} x ZYVO`);
    const body = encodeURIComponent(
      `Hello ZYVO Team,\n\nHere are my project details:\n\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nService: ${formData.service}\nBudget: ${formData.budget}\n\nProject Overview:\n${formData.details}\n\nLooking forward to speaking soon!`
    );
    window.location.href = `mailto:${agencyMeta.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="overflow-hidden">
      <PageHero
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
        tag={<>CONTACT <b>/</b> 01</>}
        title={
          <>
            Let’s create something
            <br />
            <span className="hero-underline">amazing together.</span>
          </>
        }
        lead="Have a business idea, a new project or a vision for your brand? We would love to hear it. Whether you need a website, branding, digital marketing or a complete growth strategy, our team is ready to help you take the next step."
        actions={
          <>
            <Button href={`mailto:${agencyMeta.email}`}>Email the studio</Button>
            <Button href={`tel:${agencyMeta.phone.replace(/\s+/g, '')}`} variant="outline">
              {agencyMeta.phone}
            </Button>
          </>
        }
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mt-14">
          {availability.map(([label, val, live], i) => (
            <div key={label} className={`surface rv d${i % 4} p-5`}>
              <span className="text-xs text-black/45 block">{label}</span>
              <span className="text-sm font-semibold block mt-1 flex items-center gap-1.5">
                {live && <span className="w-2 h-2 rounded-full bg-forest animate-pulse" />}
                {val}
              </span>
            </div>
          ))}
        </div>
      </PageHero>

      {/* FORM + DETAILS */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          {/* LEFT */}
          <div className="lg:col-span-5 flex flex-col gap-8 rv">
            <div>
              <SectionTag className="mb-6">CONTACT INFORMATION <b>/</b> 02</SectionTag>
              <h2 className="t-h3">A real conversation, not a sales funnel.</h2>
              <p className="t-body mt-4">
                Tell us where you are and where you want to go. We will respond with honest
                thinking, a clear next step and no obligation.
              </p>
            </div>

            <div className="space-y-3">
              <div className="surface p-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.12em] text-coral mb-1">
                  <Mail className="w-3.5 h-3.5" /> Email
                </div>
                <div className="text-base font-medium">{agencyMeta.email}</div>
                <div className="text-xs text-black/45 mt-0.5">Best for briefs, decks and documents</div>
              </div>

              <div className="surface p-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.12em] text-coral mb-1">
                  <Phone className="w-3.5 h-3.5" /> Phone
                </div>
                <div className="text-base font-medium">{agencyMeta.phone}</div>
                <div className="text-xs text-black/45 mt-0.5">Monday to Saturday, 9:30–18:30 IST</div>
              </div>

              <div className="surface p-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.12em] text-coral mb-1">
                  <MapPin className="w-3.5 h-3.5" /> Location
                </div>
                <div className="text-base font-medium">Chennai, India</div>
                <div className="text-xs text-black/45 mt-0.5">{agencyMeta.location} · Working worldwide</div>
              </div>
            </div>

            <div className="photo aspect-[16/9]">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                alt="Our studio in Nungambakkam"
              />
              <div className="photo-caption">
                <small>Studio visits by appointment · Mon–Sat</small>
                <b>Our studio — Nungambakkam, Chennai</b>
              </div>
            </div>

            <div className="surface p-6">
              <h4 className="t-h6 flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-coral" />
                What happens next
              </h4>
              <div className="space-y-4 text-sm text-black/65">
                {[
                  ['We read your brief carefully.', 'A senior lead reviews it personally — not a bot.'],
                  ['A 20-minute discovery call.', 'We ask the questions that shape the right scope.'],
                  ['A clear proposal within 3 days.', 'Fixed scope, timeline, team and fee. No surprises.'],
                ].map(([title, text], i) => (
                  <div key={title} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center font-semibold text-xs flex-none mt-0.5">
                      {i + 1}
                    </span>
                    <p>
                      <strong className="text-black font-medium">{title}</strong> {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="lg:col-span-7 rv d1">
            <div className="surface-lg border border-black/8 rounded-[28px] bg-white shadow-[0_30px_60px_rgba(20,25,30,.06)] p-6 sm:p-9">
              {submitted ? (
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-forest/10 text-forest border border-forest/20 flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>

                  <div>
                    <h3 className="t-h3">Thank you, {formData.name.split(' ')[0]}.</h3>
                    <p className="t-body mt-2">
                      Your enquiry is ready. Copy the details below or open your email app to send
                      it to our studio — we reply within one working day.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-black/[.03] border border-black/8 space-y-2 text-xs font-mono text-black/60">
                    <div><span className="text-black/35">Service:</span> {formData.service}</div>
                    <div><span className="text-black/35">Budget:</span> {formData.budget || 'Not specified'}</div>
                    <div><span className="text-black/35">Email:</span> {formData.email}</div>
                    <div className="pt-2 border-t border-black/5 line-clamp-3">
                      <span className="text-black/35">Details:</span> {formData.details}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button onClick={handleCopy}>{copied ? 'Copied to clipboard!' : 'Copy enquiry'}</Button>
                    <Button onClick={openEmailApp} variant="outline">Open email app</Button>
                  </div>

                  <div className="pt-4 border-t border-black/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-black/45">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', company: '', service: '', budget: '', details: '' });
                      }}
                      className="underline underline-offset-4 hover:text-black"
                    >
                      Send another enquiry
                    </button>
                    <span>Prefer to skip the form? Email {agencyMeta.email}</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="t-h3">Tell us about your project.</h3>
                    <p className="t-small mt-2">Fields marked * are required. We reply within one working day.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="field-label" htmlFor="name">Full name*</label>
                      <input id="name" type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Enter your name" className="field" />
                    </div>
                    <div>
                      <label className="field-label" htmlFor="email">Email address*</label>
                      <input id="email" type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="Enter your email" className="field" />
                    </div>
                  </div>

                  <div>
                    <label className="field-label" htmlFor="company">Company / brand</label>
                    <input id="company" type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your company name" className="field" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="field-label" htmlFor="service">Service required*</label>
                      <select id="service" name="service" required value={formData.service} onChange={handleChange} className="field">
                        <option value="">Select a service</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="field-label" htmlFor="budget">Approximate budget</label>
                      <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className="field">
                        <option value="">Select a range</option>
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="field-label" htmlFor="details">Project details*</label>
                    <textarea
                      id="details"
                      name="details"
                      rows="5"
                      required
                      value={formData.details}
                      onChange={handleChange}
                      placeholder="Tell us about your project, your goals and your timeline…"
                      className="field resize-none"
                    />
                    <p className="text-[11px] text-black/40 mt-1.5">
                      The more context you share, the more useful our first reply will be.
                    </p>
                  </div>

                  <p className="text-[11px] text-black/40">
                    We use your details only to respond to this enquiry. No lists, no noise.
                  </p>

                  <Button type="submit" full>
                    <span className="inline-flex items-center gap-2">
                      Send enquiry <Send className="w-4 h-4" />
                    </span>
                  </Button>

                  <p className="text-[10px] text-center text-black/35 italic">
                    Demo note: this page prepares your enquiry and copies it. It is not connected to
                    an inbox yet.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Faq
        items={contactFaq}
        tag={<>BEFORE YOU WRITE <b>/</b> 03</>}
        title="A few things worth knowing."
        intro="The answers to the questions we hear most often. If yours is not here, ask it directly — we will give you a straight answer."
      />

      <CtaBand
        tag={<>YOUR NEXT STEP <b>/</b> NOW</>}
        title="Let’s turn your vision into reality."
        text="Your next big digital idea starts with a conversation. Tell us what you see — we’ll help you make it real, and measurable."
        primary={{ label: 'Email the studio', href: `mailto:${agencyMeta.email}` }}
        secondary={{ label: 'See our recent work', to: '/work' }}
      />
    </div>
  );
}
