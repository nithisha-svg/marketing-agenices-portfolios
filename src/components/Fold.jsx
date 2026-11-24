import { useCallback, useEffect, useRef } from "react";
import { WORKS } from "../data.js";
import { Cover, Contents, WorkPanel, NotesPanel, AboutPanel, ContactPanel } from "./panels.jsx";

/* The fold engine. Panels are React components for structure and content,
   but their 3D transforms are driven imperatively (refs + rAF) exactly like
   the original: on scroll, panel i opens as progress passes i, alternating
   fold direction, with shading from the fold angle, and the track is shifted
   so the opening crease stays centred. */

const mqV = matchMedia("(max-width: 559.98px)");
const mqR = matchMedia("(prefers-reduced-motion: reduce)");
const FOLD = 80 * Math.PI / 180;
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

const IDS = ["cover", "index", ...WORKS.map((w) => w.id), "notes", "about", "contact"];
const idx = Object.fromEntries(IDS.map((id, i) => [id, i]));

export default function Fold({ nav }) {
  const lpRef = useRef(null);
  const stripRef = useRef(null);
  const stageRef = useRef(null);
  const trackRef = useRef(null);
  const hintRef = useRef(null);
  const panelEls = useRef([]);
  const S = useRef({ k: 1, maxScroll: 1, prog: 0, flat: false, raf: 0 });

  const render = useCallback(() => {
    const s = S.current;
    s.raf = 0;
    if (s.flat) return;
    const panels = panelEls.current, N = panels.length;
    const top = stripRef.current.getBoundingClientRect().top;
    s.prog = clamp(-top / s.maxScroll) * (N - 1);

    const pw = 440 * s.k, xs = [0], zs = [0], th = [];
    for (let i = 0; i < N; i++) {
      const f = i === 0 ? 1 : clamp(s.prog - i + 1), sign = i % 2 ? 1 : -1;
      th[i] = sign * (1 - f) * FOLD;
      xs[i + 1] = xs[i] + pw * Math.cos(th[i]);
      zs[i + 1] = zs[i] - pw * Math.sin(th[i]);
    }
    const fi = 1 + s.prog * (N - 2) / (N - 1), a = Math.floor(fi), u = fi - a;
    const fx = xs[a] + (xs[Math.min(N, a + 1)] - xs[a]) * u;
    const off = stageRef.current.clientWidth / 2 - fx;
    panels.forEach((p, i) => {
      p.style.transform = `translate3d(${(xs[i] + off).toFixed(2)}px,0,${zs[i].toFixed(2)}px) rotateY(${th[i].toFixed(4)}rad)`;
      const sn = Math.abs(Math.sin(th[i]));
      p.style.setProperty("--sh", (th[i] > 0 ? sn * .34 : sn * .1).toFixed(3));
    });
    const cur = Math.min(N - 1, Math.round(s.prog));
    hintRef.current.textContent = s.prog < .08 ? "Scroll to unfold" : `${panels[cur].dataset.label} · ${cur + 1} of ${N}`;
  }, []);

  const setup = useCallback(() => {
    const s = S.current;
    const lp = lpRef.current, strip = stripRef.current, track = trackRef.current;
    const panels = panelEls.current;
    const v = mqV.matches;
    s.flat = v || mqR.matches;
    track.querySelectorAll("svg").forEach((sv) => mqR.matches ? sv.pauseAnimations?.() : sv.unpauseAnimations?.());
    lp.classList.toggle("lp-flat", s.flat);
    lp.classList.toggle("lp-v", v);
    const vw = document.documentElement.clientWidth, vh = innerHeight;
    s.k = v ? Math.min(1, (vw - 32) / 440) : s.flat ? clamp((vh - 250) / 600, .55, 1) : clamp(Math.min((vh - 190) / 600, (vw * .42) / 440), .55, 1.1);
    lp.style.setProperty("--k", s.k);
    lp.style.setProperty("--pw", 440 * s.k + "px");
    lp.style.setProperty("--ph", 600 * s.k + "px");
    if (s.flat) {
      strip.style.height = "";
      panels.forEach((p) => { p.style.transform = ""; p.style.removeProperty("--sh"); });
    } else {
      strip.style.height = (vh + (panels.length - 1) * vh * .62) + "px";
    }
    s.maxScroll = Math.max(1, strip.offsetHeight - vh);
    render();
    lp.classList.add("lp-ready");
  }, [render]);

  const doGoto = useCallback((id) => {
    const s = S.current;
    const lp = lpRef.current;
    const panels = panelEls.current, N = panels.length;
    const i = typeof id === "number" ? id : idx[id];
    if (i == null) return;
    const smooth = mqR.matches ? "auto" : "smooth";
    if (lp.classList.contains("lp-v")) {
      const y = panels[i].getBoundingClientRect().top + scrollY - 64;
      scrollTo({ top: i === 0 ? 0 : y, behavior: smooth });
      return;
    }
    if (s.flat) {
      scrollTo({ top: 0, behavior: smooth });
      stageRef.current.scrollTo({
        left: panels[i].offsetLeft - parseFloat(getComputedStyle(lp).getPropertyValue("--margin")),
        behavior: smooth
      });
      return;
    }
    const top = stripRef.current.getBoundingClientRect().top + scrollY;
    scrollTo({ top: top + i / (N - 1) * s.maxScroll, behavior: smooth });
  }, []);

  /* expose goto to the app (bar links, drawer, contents, contact links) */
  useEffect(() => {
    nav.current.goto = doGoto;
  }, [nav, doGoto]);

  /* scroll / resize / media listeners */
  useEffect(() => {
    const onScroll = () => {
      const s = S.current;
      if (!s.raf) s.raf = requestAnimationFrame(render);
    };
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", setup);
    mqV.addEventListener?.("change", setup);
    mqR.addEventListener?.("change", setup);
    setup();
    if (document.fonts) document.fonts.ready.then(setup);
    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", setup);
      mqV.removeEventListener?.("change", setup);
      mqR.removeEventListener?.("change", setup);
    };
  }, [setup, render]);

  /* arrow keys step panel by panel on desktop */
  useEffect(() => {
    const onKey = (e) => {
      const s = S.current, N = panelEls.current.length;
      if (s.flat || e.target.closest("input,textarea")) return;
      if (e.key === "ArrowRight") { e.preventDefault(); doGoto(Math.min(N - 1, Math.round(s.prog) + 1)); }
      if (e.key === "ArrowLeft") { e.preventDefault(); doGoto(Math.max(0, Math.round(s.prog) - 1)); }
    };
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [doGoto]);

  /* a case-study panel opens with a click (when far from the crease),
     or with Enter / Space when focused */
  const openWork = (i) => {
    const s = S.current;
    if (!s.flat && Math.abs(i - s.prog) > .3) doGoto(i);
  };
  const workKey = (i, e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); doGoto(i); }
  };

  const setPanel = (i) => (el) => { panelEls.current[i] = el; };

  return (
    <main className="lp" id="lp" ref={lpRef}>
      <section className="lp-strip" aria-label="Selected work" data-section="fold" ref={stripRef}>
        <div className="lp-stage" ref={stageRef}>
          <div className="lp-track" ref={trackRef}>
            <Cover panelRef={setPanel(0)} />
            <Contents panelRef={setPanel(1)} />
            {WORKS.map((w, i) => (
              <WorkPanel key={w.id} w={w} i={i + 2} panelRef={setPanel(i + 2)} onOpen={openWork} onKey={workKey} />
            ))}
            <NotesPanel panelRef={setPanel(2 + WORKS.length)} />
            <AboutPanel panelRef={setPanel(3 + WORKS.length)} />
            <ContactPanel panelRef={setPanel(4 + WORKS.length)} lpRef={lpRef} />
          </div>
          <div className="lp-furn">
            <span className="lp-label">Designed with Foldwise</span>
            <span className="lp-hint" ref={hintRef} aria-live="polite" />
            <span className="lp-legal"><a href="#">Privacy</a><a href="#">Cookies</a></span>
          </div>
        </div>
      </section>
    </main>
  );
}
