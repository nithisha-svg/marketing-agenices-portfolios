# ZYVO — Creative Digital Growth Studio

A complete React website for ZYVO, a creative digital growth agency, redesigned in a light editorial system: warm off-white canvas, black ink, coral/peach accents, Inter Tight typography, pill buttons, rounded section shells, and scroll reveals.

## Tech stack

- **React 18** + **Vite 5**
- **React Router 6** for page routing
- **Tailwind CSS 3** for layout utilities
- **Lucide React** for small interface icons
- Custom CSS design system in `src/index.css`

## Getting started

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

### Production build

```bash
npm run build
npm run preview
```

The production build is written to `dist/`.

## Routes

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About |
| `/services` | Services index |
| `/services/:slug` | Service detail |
| `/work` | Work / case study index |
| `/work/:slug` | Case study detail |
| `/contact` | Contact + project enquiry form |
| `*` | 404 |

## Project structure

```
src/
  components/
    common/
      BlogModal.jsx        Article reading modal
      ServicesSlider.jsx   Interactive 10-service reel
    layout/
      Navbar.jsx           Fixed navigation + mobile menu
      Footer.jsx           Dark rounded footer + newsletter
    ui/
      Button.jsx           Pill-in-pill rolling-label button
      CtaBand.jsx          Reusable closing CTA card
      Faq.jsx              Accessible FAQ accordion
      Mark.jsx             ZYVO ring mark
      PageHero.jsx         Inner-page hero
      SectionTag.jsx       Orbit eyebrow / section label
  data/
    agencyData.js          Services, case studies, team, FAQs, posts
  pages/
    Home.jsx
    About.jsx
    Services.jsx
    ServiceDetail.jsx
    Work.jsx
    CaseStudyDetail.jsx
    Contact.jsx
    NotFound.jsx
  App.jsx                  Router, page shell, reveal observer
  index.css                Design tokens + all custom styling
  main.jsx
```

## Design system

The main tokens live at the top of `src/index.css`:

- Background `#f5f7fa`, ink `#000`, dark `#141414`
- Coral `#ec5a4f`, peach `#f79276`, forest green `#16854a`
- Soft blue `#dbe3f6`, cream `#f8f1ee`
- Easing `cubic-bezier(.22,.8,.24,1)`
- Type: **Inter Tight** (300–600), **Montserrat** 600 for select card details

Reusable classes include `.t-hero`, `.t-h2`…`.t-h6`, `.pill-btn`, `.eyebrow`, `.rv` (reveal), `.surface`, `.round-bottom`, `.dark-shell`, `.photo`, `.faq-item`, `.plan-card`, and `.site-footer`.

## Notes

- All imagery uses remote Unsplash URLs. Replace them with licensed assets before production.
- The contact form and footer newsletter are front-end demos: the contact form prepares/copies an enquiry or opens the user's email app; the newsletter shows a confirmation state.
- The site is responsive at 1299.98px, 1023.98px, and 809.98px, with reduced-motion support.
- The 404 page, work filters, service reel, FAQ accordion, testimonials, benefits scroller, and article modal are all interactive.
