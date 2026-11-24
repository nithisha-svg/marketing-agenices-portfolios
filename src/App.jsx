<<<<<<< HEAD
import { useCallback, useEffect, useRef, useState } from "react";
import Bar from "./components/Bar.jsx";
import Drawer from "./components/Drawer.jsx";
import Fold from "./components/Fold.jsx";
import { GotoContext } from "./goto.js";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = useRef({ goto: () => {} });
  const menuBtnRef = useRef(null);
  const drawerRef = useRef(null);

  const closeMenu = useCallback(() => {
    if (drawerRef.current && drawerRef.current.contains(document.activeElement)) {
      menuBtnRef.current?.focus();
    }
    setMenuOpen(false);
  }, []);

  const goto = useCallback((id) => {
    closeMenu();
    nav.current.goto(id);
  }, [closeMenu]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, []);

  return (
    <GotoContext.Provider value={goto}>
      <Bar menuOpen={menuOpen} menuBtnRef={menuBtnRef} onMenu={() => setMenuOpen(true)} />
      <div className="scrim" aria-hidden="true" onClick={closeMenu} />
      <Drawer ref={drawerRef} open={menuOpen} onClose={closeMenu} />
      <Fold nav={nav} />
    </GotoContext.Provider>
=======
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Work from './pages/Work';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

/**
 * Adds the `.in` class to every `.rv` element as it enters the viewport.
 * A MutationObserver keeps it working for filtered grids and other late content.
 */
function RevealObserver() {
  const { pathname } = useLocation();

  useEffect(() => {
    const nodes = () => Array.from(document.querySelectorAll('.rv:not(.in)'));

    if (typeof IntersectionObserver === 'undefined') {
      nodes().forEach((el) => el.classList.add('in'));
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -36px 0px' }
    );

    const observeAll = () => nodes().forEach((el) => io.observe(el));
    observeAll();

    const mo = new MutationObserver(() => observeAll());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <RevealObserver />
      <div className="min-h-screen flex flex-col bg-[#f5f7fa] text-black antialiased selection:bg-peach selection:text-black">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<CaseStudyDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
>>>>>>> be2becba4115a65ba6ca2b69023200b2aaf83de8
  );
}
