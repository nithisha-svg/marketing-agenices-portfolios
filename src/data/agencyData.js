// ZYVO Agency Data Store - Sourced directly from specification

export const agencyMeta = {
  name: "ZYVO",
  tagline: "Creative Digital Growth Agency",
  email: "hello@zyvo.agency",
  phone: "+91 98400 43210",
  location: "Nungambakkam, Chennai 600 034",
  workingHours: "Monday – Saturday · 9:30 – 18:30 IST",
  socials: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    behance: "https://behance.net",
    dribbble: "https://dribbble.com",
  },
  stats: [
    { value: "140+", label: "Projects shipped", detail: "Across 11 industries" },
    { value: "38+", label: "Brands scaled", detail: "From seed to scale-up" },
    { value: "93%", label: "Client retention", detail: "Still with us after year one" },
    { value: "4.9/5", label: "Average rating", detail: "Based on 64 client reviews" },
  ],
  brands: [
    { name: "LUMEN Atelier", tag: "Fashion & Retail" },
    { name: "NORTHLINE Capital", tag: "Advisory & Private Equity" },
    { name: "NOVA Pilates", tag: "Wellness & Studio" },
    { name: "VERDANT Coffee", tag: "Specialty DTC" },
    { name: "ORBIT Labs", tag: "B2B Analytics" },
    { name: "AUREA Skin", tag: "Clinical Skincare" },
  ],
  marquee: [
    "Brand strategy",
    "Web design",
    "Development",
    "SEO",
    "Paid media",
    "Social media",
    "Content",
    "CRO",
    "Analytics",
    "Art direction",
  ]
};

export const agencyProcess = [
  {
    step: "01",
    title: "Discover",
    tagline: "Clarity before creativity",
    desc: "Understand your business, audience and goals. We ask the uncomfortable questions early so the strategy is built on reality.",
    deliverable: "Audit report, user journey map & strategic commercial benchmarks"
  },
  {
    step: "02",
    title: "Strategise",
    tagline: "The map and the momentum",
    desc: "Research your market and competitors, then define the creative direction, channel mix and the measures of success.",
    deliverable: "Growth architecture, positioning territories & sprint milestones"
  },
  {
    step: "03",
    title: "Design",
    tagline: "Distinctive, not decorative",
    desc: "Turn ideas into visual experiences worth engaging with — wireframes, identity systems and prototypes tested with real people.",
    deliverable: "Interactive design system, high-fidelity prototypes & design specs"
  },
  {
    step: "04",
    title: "Develop",
    tagline: "Engineered for speed & conversion",
    desc: "Build and implement the solution in weekly sprints, with performance, accessibility and content quality built in.",
    deliverable: "Production code, staging environment & technical documentation"
  },
  {
    step: "05",
    title: "Deliver",
    tagline: "Launch is just day one",
    desc: "Launch, measure and optimise. The first 30 days after release are where the best improvements are found.",
    deliverable: "Live deployment, analytics instrumentation & 30-day care sprint"
  }
];

export const coreValues = [
  {
    title: "Creativity",
    subtitle: "Fresh ideas and original thinking",
    desc: "We would rather make something memorable than something safe. Every engagement starts with a fresh idea, not a recycled template.",
    icon: "Sparkles"
  },
  {
    title: "Excellence",
    subtitle: "Quality in every project",
    desc: "The details you notice, and the ones you only feel, both get the same attention. Code, typography and interactions crafted without compromise.",
    icon: "ShieldCheck"
  },
  {
    title: "Trust",
    subtitle: "Long-term relationships",
    desc: "Clear scope, honest timelines and no surprises on the invoice. One senior lead and an open workspace you can check at any time.",
    icon: "Handshake"
  },
  {
    title: "Growth",
    subtitle: "Results-oriented strategies",
    desc: "Beautiful work that does not move the business is just decoration. We define success in numbers before we start, then report against them.",
    icon: "TrendingUp"
  }
];

export const teamMembers = [
  {
    name: "Arjun Mehta",
    role: "Founder & Creative Director",
    bio: "12+ years shaping identities and digital products across Tokyo, London, and Chennai. Passionate about typography and design systems that scale.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    speciality: "Creative Direction & Art Direction"
  },
  {
    name: "Nithya Raman",
    role: "Head of Strategy",
    bio: "Ex-strategy lead for Tier 1 consumer brands. Turns complex market data into razor-sharp positioning that competitors can't copy.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    speciality: "Market Research & Brand Positioning"
  },
  {
    name: "Karthik Iyer",
    role: "Head of Engineering",
    bio: "Full-stack architect with obsession for sub-second page loads, headless architectures, micro-interactions and bulletproof web standards.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    speciality: "React, Next.js & Performance Engineering"
  },
  {
    name: "Divya Suresh",
    role: "Head of Growth",
    bio: "Performance growth specialist who has managed over ₹15Cr in performance spend. Believes in unit economics over vanity clicks.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    speciality: "Paid Media, Attribution & CRO"
  }
];

export const servicesData = [
  {
    id: 1,
    num: "01",
    slug: "web-design-development",
    title: "Website Design & Development",
    shortDesc: "Beautiful, responsive websites engineered to turn visitors into customers.",
    lead: "We design and build fast, expressive websites that make your brand impossible to ignore — and effortless to buy from.",
    tags: ["Web design", "E-commerce", "UI/UX"],
    included: [
      "Business website design",
      "E-commerce development",
      "UI/UX design",
      "Landing page design",
      "CMS & headless builds",
      "Website care & maintenance"
    ],
    outcomes: [
      { value: "+68%", label: "Average lift in enquiries" },
      { value: "0.9s", label: "Median load time" },
      { value: "98", label: "Average Lighthouse score" }
    ],
    tools: ["React", "Next.js", "Shopify", "Webflow", "Figma", "Sanity", "GSAP", "Vercel"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    photoCaption: "Beautiful, responsive websites engineered to turn visitors into customers."
  },
  {
    id: 2,
    num: "02",
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortDesc: "Performance-led campaigns that turn attention into qualified pipeline.",
    lead: "One joined-up growth engine across search, social and content — measured against revenue, not vanity metrics.",
    tags: ["SEO", "Paid media", "Lead gen"],
    included: [
      "Search engine optimisation",
      "Google Ads campaigns",
      "Social media advertising",
      "Content marketing",
      "Lead generation",
      "Analytics & reporting"
    ],
    outcomes: [
      { value: "3.2×", label: "Average blended ROAS" },
      { value: "−34%", label: "Cost per qualified lead" },
      { value: "+214%", label: "Organic traffic in 6 months" }
    ],
    tools: ["GA4", "Google Ads", "Meta Ads", "Ahrefs", "HubSpot", "Looker Studio", "Klaviyo", "Semrush"],
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    photoCaption: "Performance-led campaigns that turn attention into qualified pipeline."
  },
  {
    id: 3,
    num: "03",
    slug: "branding-creative-design",
    title: "Branding & Creative Design",
    shortDesc: "Distinctive identities that make your brand instantly recognisable.",
    lead: "Strategy-led identity systems with the craft, consistency and guidelines to hold up everywhere your brand shows up.",
    tags: ["Brand identity", "Design systems", "Art direction"],
    included: [
      "Brand strategy & positioning",
      "Logo design",
      "Visual identity systems",
      "Graphic design",
      "Marketing creatives",
      "Brand guidelines"
    ],
    outcomes: [
      { value: "+61%", label: "Average lift in brand recall" },
      { value: "8 wks", label: "Typical identity timeline" },
      { value: "120+", label: "Assets in a launch kit" }
    ],
    tools: ["Figma", "Illustrator", "Photoshop", "InDesign", "After Effects", "Blender", "Notion"],
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80",
    photoCaption: "Distinctive identities that make your brand instantly recognisable."
  },
  {
    id: 4,
    num: "04",
    slug: "social-media-management",
    title: "Social Media Management",
    shortDesc: "Always-on content and community that keeps your brand part of the conversation.",
    lead: "We plan, produce and publish scroll-stopping social content — then build the community that turns followers into customers.",
    tags: ["Content", "Community", "Reels"],
    included: [
      "Instagram & Facebook management",
      "Social media content creation",
      "Reels & promotional creatives",
      "Social media strategy",
      "Community management",
      "Reporting & insights"
    ],
    outcomes: [
      { value: "+212%", label: "Average engagement lift" },
      { value: "4.1M", label: "Organic reach delivered" },
      { value: "30", label: "Assets produced each month" }
    ],
    tools: ["Meta Suite", "Later", "CapCut", "Premiere Pro", "Canva", "Figma", "Sprout Social"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",
    photoCaption: "Always-on content and community that keeps your brand part of the conversation."
  },
  {
    id: 5,
    num: "05",
    slug: "content-creation",
    title: "Content Creation",
    shortDesc: "Words, stories and campaigns that make people stop, feel and act.",
    lead: "A content partner for the whole funnel — from the line on your homepage to the story that closes the sale.",
    tags: ["Copywriting", "Editorial", "Campaigns"],
    included: [
      "Website content writing",
      "Blog & editorial",
      "Copywriting",
      "Promotional content",
      "Creative campaign concepts",
      "Video & podcast scripts"
    ],
    outcomes: [
      { value: "+37%", label: "Organic sessions in 90 days" },
      { value: "2.6×", label: "Email click-through rate" },
      { value: "90 days", label: "To a running content engine" }
    ],
    tools: ["Notion", "Surfer SEO", "Grammarly", "Figma", "Mailchimp", "WordPress", "Descript"],
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    photoCaption: "Words, stories and campaigns that make people stop, feel and act."
  },
  {
    id: 6,
    num: "06",
    slug: "business-growth-consulting",
    title: "Business Growth Consulting",
    shortDesc: "Clear strategy, sharper funnels and decisions backed by real data.",
    lead: "A senior growth partner in your corner — pressure-testing the plan, unlocking bottlenecks and turning data into decisions.",
    tags: ["Strategy", "CRO", "Analytics"],
    included: [
      "Digital strategy planning",
      "Competitor research",
      "Conversion optimisation",
      "Marketing analytics",
      "Growth planning",
      "Fractional leadership"
    ],
    outcomes: [
      { value: "2.8×", label: "Qualified pipeline growth" },
      { value: "−29%", label: "Customer acquisition cost" },
      { value: "12 wks", label: "To a prioritised growth model" }
    ],
    tools: ["GA4", "Amplitude", "Hotjar", "Looker Studio", "HubSpot", "Miro", "Notion"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    photoCaption: "Clear strategy, sharper funnels and decisions backed by real data."
  },
  {
    id: 7,
    num: "07",
    slug: "seo",
    title: "Search Engine Optimisation (SEO)",
    shortDesc: "Technical, on-page and local SEO that compounds into qualified organic enquiries.",
    lead: "Search is the highest-intent channel in most categories. We build organic visibility around the queries that actually lead to revenue.",
    tags: ["Technical SEO", "Content SEO", "Local SEO"],
    included: [
      "Technical SEO audit",
      "Keyword & intent research",
      "On-page optimisation",
      "Content strategy & briefs",
      "Local SEO for Chennai",
      "Authority & digital PR"
    ],
    outcomes: [
      { value: "+214%", label: "Organic traffic in 6–9 months" },
      { value: "68", label: "Page-one keywords earned" },
      { value: "−38%", label: "Blended acquisition cost" }
    ],
    tools: ["Google Search Console", "GA4", "Ahrefs", "Semrush", "Screaming Frog", "Looker Studio"],
    image: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&w=1200&q=80",
    photoCaption: "Technical, on-page and local SEO that compounds into qualified organic enquiries."
  },
  {
    id: 8,
    num: "08",
    slug: "ppc",
    title: "PPC Management",
    shortDesc: "Profitable paid campaigns across Google, Meta and LinkedIn — built around margin, not clicks.",
    lead: "Paid media should buy customers, not traffic. We build, test and scale campaigns around acquisition cost and contribution margin.",
    tags: ["Google Ads", "Meta Ads", "ROAS"],
    included: [
      "Google Search & Shopping Ads",
      "Meta & LinkedIn campaigns",
      "Account audit & tracking",
      "Creative & landing page testing",
      "Budget & bid strategy",
      "Transparent reporting"
    ],
    outcomes: [
      { value: "4.2×", label: "Average blended ROAS" },
      { value: "−34%", label: "Cost per qualified lead" },
      { value: "+186%", label: "Paid revenue in 6 months" }
    ],
    tools: ["Google Ads", "Meta Ads Manager", "LinkedIn Ads", "GA4", "Looker Studio", "Hotjar"],
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=80",
    photoCaption: "Profitable paid campaigns across Google, Meta and LinkedIn — built around margin, not clicks."
  },
  {
    id: 9,
    num: "09",
    slug: "reputation-management",
    title: "Reputation Management",
    shortDesc: "Own the story people find when they search for your brand.",
    lead: "Protect and strengthen the reputation you have earned — across reviews, search results, social conversations and the moments that matter most.",
    tags: ["Reviews", "Brand monitoring", "Crisis response"],
    included: [
      "Review generation & management",
      "Google Business Profile reputation",
      "Brand monitoring & sentiment",
      "Search visibility strategy",
      "Crisis communication",
      "Reputation reporting"
    ],
    outcomes: [
      { value: "4.8/5", label: "Average public rating" },
      { value: "+58%", label: "Positive sentiment" },
      { value: "24 hrs", label: "Average review response" }
    ],
    tools: ["Google Business Profile", "Trustpilot", "Birdeye", "Brandwatch", "Meta Suite", "Looker Studio"],
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
    photoCaption: "Own the story people find when they search for your brand."
  },
  {
    id: 10,
    num: "10",
    slug: "crm",
    title: "CRM & Automation",
    shortDesc: "Connect sales, marketing and support in one system your team will actually use.",
    lead: "A good CRM is not a database — it is the operating system for customer relationships, follow-up and retention.",
    tags: ["CRM setup", "Automation", "Retention"],
    included: [
      "CRM strategy & audit",
      "CRM setup & migration",
      "Pipeline & lifecycle automation",
      "Email & SMS journeys",
      "Sales & marketing reporting",
      "Team training & handover"
    ],
    outcomes: [
      { value: "+42%", label: "Follow-up conversion" },
      { value: "18 hrs", label: "Saved per month" },
      { value: "2.6×", label: "Lifecycle revenue" }
    ],
    tools: ["HubSpot", "Zoho CRM", "Salesforce", "Klaviyo", "Make", "Zapier", "Looker Studio"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    photoCaption: "Connect sales, marketing and support in one system your team will actually use."
  }
];

export const caseStudies = [
  {
    id: "lumen-attire",
    slug: "lumen-attire",
    title: "Lumen Attire",
    category: "Web Design",
    year: "2025",
    client: "Lumen Attire",
    timeline: "10 weeks",
    subheading: "A considered online store for a new kind of occasionwear label.",
    desc: "A modern shopping experience with clean navigation, editorial product displays and a checkout built to convert.",
    metrics: [
      { value: "+184%", label: "Online revenue" },
      { value: "+142%", label: "Conversion rate" },
      { value: "−31%", label: "Cart abandonment" }
    ],
    services: ["Website Design & Development", "Branding & Creative Design"],
    challenge: "Lumen had a beautiful product and a website that hid it. Shoppers could not find their size, the story behind each piece was buried, and 71% of carts were abandoned before payment.",
    approach: [
      { step: "01", title: "Shopping, observed", desc: "We interviewed 14 customers and mapped the real decision journey from Instagram save to checkout." },
      { step: "02", title: "Editorial commerce", desc: "A calm, image-led storefront that lets the garment lead, with fit and fabric guidance at every step." },
      { step: "03", title: "Checkout, simplified", desc: "A three-step checkout, wallet payments and transparent delivery promises." },
      { step: "04", title: "A/B tested launch", desc: "Two homepage directions tested live for three weeks before the final rollout." }
    ],
    quote: {
      text: "The new store finally feels like walking into our atelier. People stay longer, buy more, and email us about how good the experience is.",
      author: "Ananya Rao",
      title: "Founder, Lumen Attire"
    },
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "aurea-skin",
    slug: "aurea-skin",
    title: "Aurea Skin",
    category: "Branding",
    year: "2025",
    client: "Aurea Skin",
    timeline: "8 weeks",
    subheading: "A quiet-luxury identity for a clinical skincare studio.",
    desc: "A distinctive visual identity designed to communicate brand personality and build recognition.",
    metrics: [
      { value: "+61%", label: "Brand recall" },
      { value: "120+", label: "Launch assets" },
      { value: "8 wks", label: "Idea to launch" }
    ],
    services: ["Branding & Creative Design", "Website Design & Development"],
    challenge: "Aurea was launching into a crowded category where every brand looked clinical, white and interchangeable. They needed to signal expertise without feeling cold.",
    approach: [
      { step: "01", title: "Positioning first", desc: "We carved out a territory around 'evidence-led calm' and tested it with 9 existing clients." },
      { step: "02", title: "A warm clinical system", desc: "Stone, ink and a single soft gold, paired with a contemporary serif and generous space." },
      { step: "03", title: "A mark that works small", desc: "A monogram reduced to a single arc, legible from a product label to an app icon." },
      { step: "04", title: "Launch toolkit", desc: "Packaging, treatment menus, signage, social templates and a 42-page brand book." }
    ],
    quote: {
      text: "They found the version of our brand we could feel but could not describe. Every detail now feels inevitable.",
      author: "Dr. Meera Krishnan",
      title: "Co-founder, Aurea Skin"
    },
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "nova-pilates",
    slug: "nova-pilates",
    title: "Nova Pilates",
    category: "Social Media",
    year: "2024",
    client: "Nova Pilates",
    timeline: "6 months",
    subheading: "A social campaign that turned a local studio into a community.",
    desc: "A creative content campaign designed to improve engagement and brand awareness.",
    metrics: [
      { value: "+212%", label: "Engagement rate" },
      { value: "4.1M", label: "Organic reach" },
      { value: "2,840", label: "Trial bookings" }
    ],
    services: ["Social Media Management", "Content Creation"],
    challenge: "Nova had 900 followers, inconsistent posting and no system for converting social interest into trial classes. Their classes were excellent; their feed did not show it.",
    approach: [
      { step: "01", title: "Content with a point of view", desc: "We replaced generic wellness quotes with honest, instructor-led education." },
      { step: "02", title: "A repeatable reel engine", desc: "A monthly shoot day producing 12 reels, cut into 30 platform-native assets." },
      { step: "03", title: "Community, not broadcasting", desc: "Polls, question stickers and member spotlights built a two-way audience." },
      { step: "04", title: "From reach to bookings", desc: "A weekly offer story and a link-in-bio flow tied directly to trial sign-ups." }
    ],
    quote: {
      text: "We went from posting because we had to, to having a waitlist. ZYVO made social feel like part of the studio, not a chore.",
      author: "Rhea Thomas",
      title: "Director, Nova Pilates"
    },
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "northline-capital",
    slug: "northline-capital",
    title: "Northline Capital",
    category: "Web Development",
    year: "2024",
    client: "Northline Capital",
    timeline: "12 weeks",
    subheading: "A credible digital platform for a modern advisory firm.",
    desc: "A professional digital platform designed to showcase services and generate business enquiries.",
    metrics: [
      { value: "+68%", label: "Qualified enquiries" },
      { value: "98", label: "Lighthouse score" },
      { value: "−42%", label: "Bounce rate" }
    ],
    services: ["Website Design & Development", "Business Growth Consulting"],
    challenge: "Northline was competing for high-value mandates with a five-year-old website, a generic stock-photo hero and no clear path for prospective clients to start a conversation.",
    approach: [
      { step: "01", title: "Proof over promises", desc: "We restructured the site around client outcomes, process transparency and senior team visibility." },
      { step: "02", title: "A content architecture that sells", desc: "Service pages built around the questions decision-makers actually ask." },
      { step: "03", title: "Engineering for trust", desc: "A fast, accessible Next.js build with a secure CMS and fully managed publishing." },
      { step: "04", title: "Enquiry flow redesign", desc: "A short, qualification-led form that routes enquiries to the right partner." }
    ],
    quote: {
      text: "The site now matches the calibre of the conversations we want to have. Prospects arrive already understanding how we work.",
      author: "Vikram Shah",
      title: "Managing Partner, Northline Capital"
    },
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "verdant-coffee",
    slug: "verdant-coffee",
    title: "Verdant Coffee",
    category: "Strategy",
    year: "2024",
    client: "Verdant Coffee",
    timeline: "7 months",
    subheading: "Channel strategy that made organic the cheapest source of revenue.",
    desc: "A data-led search and content programme that rebuilt growth around the way people actually shop for coffee.",
    metrics: [
      { value: "+214%", label: "Organic revenue" },
      { value: "3.2×", label: "Blended ROAS" },
      { value: "−46%", label: "Cost per acquisition" }
    ],
    services: ["Digital Marketing", "Business Growth Consulting"],
    challenge: "Paid social was consuming 62% of the marketing budget with rising acquisition costs. Organic accounted for less than a tenth of new customer revenue.",
    approach: [
      { step: "01", title: "Rebuilt around intent", desc: "We mapped 186 search intents across bean type, brew method and gifting." },
      { step: "02", title: "Content that ranks and helps", desc: "Brew guides and comparison pages designed to answer the query, not just target it." },
      { step: "03", title: "Budget rebalanced", desc: "Paid spend shifted toward proven branded and high-intent search." },
      { step: "04", title: "Retention joined up", desc: "A subscription flow that lifted second-order revenue without extra ad spend." }
    ],
    quote: {
      text: "Organic is now our largest and most profitable channel. For the first time, growth does not stop when we pause the ads.",
      author: "Kiran Joseph",
      title: "Founder, Verdant Coffee"
    },
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "orbit-labs",
    slug: "orbit-labs",
    title: "Orbit Labs",
    category: "Product Design",
    year: "2025",
    client: "Orbit Labs",
    timeline: "14 weeks",
    subheading: "A product experience that makes a complex platform feel obvious.",
    desc: "An end-to-end redesign of a B2B analytics product, from onboarding to daily dashboard use.",
    metrics: [
      { value: "+37%", label: "Activation rate" },
      { value: "−48%", label: "Setup drop-off" },
      { value: "4.8/5", label: "Product CSAT" }
    ],
    services: ["Website Design & Development", "Business Growth Consulting"],
    challenge: "New users were dropping out during setup. Orbit had powerful features but a first-run experience that assumed too much and explained too little.",
    approach: [
      { step: "01", title: "Friction mapping", desc: "Session replays and 22 user interviews pinpointed the moment of confusion." },
      { step: "02", title: "Guided onboarding", desc: "A progressive setup flow that gets users to their first insight in under four minutes." },
      { step: "03", title: "A calmer dashboard", desc: "A modular layout with a clear visual hierarchy and saved views." },
      { step: "04", title: "Design system", desc: "A documented component library that cut new-feature design time by a third." }
    ],
    quote: {
      text: "ZYVO treated our product like a brand, not a backlog. The new onboarding is the best salesperson we have.",
      author: "Sofia Lind",
      title: "Head of Product, Orbit Labs"
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
  }
];

export const clientVoices = [
  {
    quote: "Our cost per lead dropped by a third in one quarter. Every rupee now has a job, and we can finally see what it returned.",
    author: "Priya Nair",
    title: "Chief Marketing Officer, Lumen Skin",
    metric: "−34% cost per lead",
    rating: 5.0
  },
  {
    quote: "ZYVO rebuilt our paid search around margin, not clicks. ROAS went from 1.8 to 4.2 in four months — and reporting stopped being a negotiation.",
    author: "Marcus Hale",
    title: "Founder, Halden Outdoor",
    metric: "4.2× ROAS",
    rating: 5.0
  },
  {
    quote: "They are the first agency that talks to us in revenue, not impressions. Six months in, qualified pipeline has tripled.",
    author: "Ines Moreau",
    title: "Head of Growth, Oakline",
    metric: "3× pipeline",
    rating: 5.0
  },
  {
    quote: "The brand work gave our team something we did not know we were missing: confidence. Every asset feels like us, only sharper.",
    author: "Ananya Rao",
    title: "Founder, Lumen Attire",
    metric: "+61% brand recall",
    rating: 5.0
  },
  {
    quote: "Weekly sprints, clear owners and zero vanity metrics. ZYVO feels less like a vendor and more like our in-house growth team.",
    author: "Rafael Costa",
    title: "VP Growth, Northwind",
    metric: "93% retention",
    rating: 5.0
  }
];

export const blogArticles = [
  {
    id: 1,
    category: "SEO",
    title: "Why SEO is still the highest-intent channel in 2026",
    date: "18 Nov 2026",
    readTime: "6 min read",
    excerpt: "Search has changed, but intent has not. How we decide which pages deserve to rank — and which ones never will.",
    content: [
      "Every channel has a job. Paid media buys attention, social builds familiarity, and email earns the second conversation. Search is different: by the time someone types a query, they have already told you what they want.",
      "The mistake most websites make is treating SEO as a volume game. More pages, more keywords, more traffic. But traffic that never converts is just an expensive vanity metric. We start with the handful of pages that can actually move revenue: service pages, comparisons and buying guides.",
      "Technical health comes first. If search engines cannot crawl, render or trust the site, no amount of content will fix it. After that, we map intent to pages, strengthen internal links and give each page one clear job.",
      "The result is not a spike. It is a compounding asset — one that keeps bringing qualified buyers long after the campaign budget is switched off."
    ],
    byline: "Written by the ZYVO studio",
    image: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    category: "Paid media",
    title: "The 90-day paid media test that actually proves something",
    date: "04 Nov 2026",
    readTime: "5 min read",
    excerpt: "Most PPC tests measure clicks. Ours measure whether the account can buy a customer profitably — and keep doing it.",
    content: [
      "A new ad account has two jobs in its first 90 days: find signal, and prove the unit economics can work. Not 'get cheap clicks.' Not 'look busy.'",
      "We structure the first month around clean measurement and a small number of meaningful tests: one offer, two or three audiences, and creative variations that isolate a single variable. Everything else is noise until the basics are stable.",
      "By week six, we know which message earns attention and which audience converts. By week twelve, the goal is a repeatable cost per qualified lead that the business can scale without losing margin.",
      "If the numbers do not work, we say so. A disciplined stop is better than a beautiful dashboard hiding a broken acquisition model."
    ],
    byline: "Written by the ZYVO studio",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    category: "Web design",
    title: "Your website is a salesperson. Is it closing?",
    date: "21 Oct 2026",
    readTime: "7 min read",
    excerpt: "Beautiful design gets attention. Clear thinking gets the enquiry. A practical look at the moments that decide whether a visitor acts.",
    content: [
      "A website is rarely rejected because it is not pretty enough. It is rejected because the visitor cannot answer three questions quickly: What is this? Is it for me? What happens if I click?",
      "We audit every key page against those questions. The hero should state the offer, the proof should remove doubt, and the next step should feel obvious without hunting for a button.",
      "Speed and clarity are part of the design, not a technical afterthought. A page that loads slowly or buries its value in a carousel is losing customers before the copy has had a chance to work.",
      "The best websites do not feel like brochures. They feel like a good sales conversation: attentive, specific and easy to continue."
    ],
    byline: "Written by the ZYVO studio",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  }
];

export const waysOfWorking = [
  {
    name: "Sprint",
    forWho: "A focused problem with a clear finish line.",
    desc: "A website, identity or campaign delivered as a fixed-scope sprint with a dedicated team and weekly demos.",
    features: [
      "Fixed scope & fee",
      "4–8 week delivery",
      "One senior lead",
      "Weekly staging demos",
      "Full handover & training"
    ],
    popular: false,
  },
  {
    name: "Retainer",
    forWho: "Consistent marketing momentum.",
    desc: "An ongoing growth partnership covering strategy, design, content and campaign execution under one monthly fee.",
    features: [
      "Monthly roadmap",
      "Priority production",
      "Live reporting",
      "Multi-channel execution",
      "Weekly strategic syncs"
    ],
    popular: true,
  },
  {
    name: "Partner",
    forWho: "An embedded growth department.",
    desc: "Senior strategy and multi-disciplinary execution for teams scaling fast across products, markets and channels.",
    features: [
      "Fractional leadership",
      "Multi-channel team",
      "Quarterly planning",
      "Board-ready analytics",
      "Unlimited creative requests"
    ],
    popular: false,
  }
];

export const faqList = [
  {
    q: "What kind of businesses do you work with?",
    a: "We work with growth-stage brands, ambitious SMEs and funded start-ups across e-commerce, hospitality, professional services, wellness and B2B SaaS. The common thread is a real appetite to grow."
  },
  {
    q: "How do you price your work?",
    a: "Fixed-scope projects are quoted after a discovery call. Ongoing partnerships run on a flat monthly retainer. You always know the number before we start — we never mark up media spend."
  },
  {
    q: "Who will we actually work with?",
    a: "A named senior lead owns your account from first call to final delivery, supported by a small specialist team. No handover to a junior team after the pitch."
  },
  {
    q: "How quickly can we start?",
    a: "Usually within one to two weeks. We take on a limited number of new projects each quarter to protect quality, so early conversations help."
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes. Every project includes a 30-day post-launch support window, and most clients continue with a care plan or growth retainer after that."
  }
];
