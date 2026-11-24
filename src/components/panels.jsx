import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { WORKS, NOTES, ADDR, vcard } from "../data.js";
import { ART, qr } from "../art.js";
import { useGoto } from "../goto.js";

/* One panel = one page of the leporello. Each takes a panelRef so the
   fold engine can drive its 3D transform directly at 60fps. */

export function Cover({ panelRef }) {
  return (
    <div className="lp-panel lp-cover" data-section="cover" data-id="cover" data-label="Foldwise" ref={panelRef}>
      <div className="lp-pg">
        <h1>Foldwise</h1>
        <p className="lp-role">An AI-native senior product designer, as an app.</p>
        <div className="lp-foot">
          <p className="lp-lede">Foldwise designs alongside your team. It reads the brief, drafts the flows, works through every state nobody draws, and shows its reasoning before anything ships.</p>
          <p className="lp-city">Private beta · Made in Amsterdam</p>
        </div>
      </div>
      <i className="lp-shade" />
    </div>
  );
}

export function Contents({ panelRef }) {
  const goto = useGoto();
  const iviewRef = useRef(null);
  const listRef = useRef(null);
  const perRef = useRef(1);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);

  useLayoutEffect(() => {
    const measure = () => {
      const per = Math.max(1, Math.floor(iviewRef.current.offsetHeight / 42));
      const np = Math.ceil(WORKS.length / per);
      perRef.current = per;
      setPages(np);
      setPage((pg) => Math.min(pg, np - 1));
    };
    measure();
    addEventListener("resize", measure);
    return () => removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const clamped = Math.min(page, pages - 1);
    listRef.current.style.transform = `translateY(${-clamped * perRef.current * 42}px)`;
  }, [page, pages]);

  return (
    <div className="lp-panel lp-index lp-dark" data-section="index" data-id="index" data-label="Contents" ref={panelRef}>
      <div className="lp-pg">
        <div className="lp-head"><h2>Contents</h2><span>{WORKS.length} case studies</span></div>
        <div className="lp-iview" ref={iviewRef}>
          <ul className="lp-ilist" ref={listRef}>
            {WORKS.map((w, i) => (
              <li key={w.id}>
                <a href="#" onClick={(e) => { e.preventDefault(); goto(w.id); }}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <b>{w.t}</b>
                  <span>{w.c}</span>
                  <span>{w.y}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="lp-ifoot">
          <a className="lp-lnk" href="#" onClick={(e) => { e.preventDefault(); goto("notes"); }}>Notes</a>
          <span className="lp-inav" hidden={pages < 2}>
            <span className="lp-ipos">{page + 1} / {pages}</span>
            <button className="lp-arr lp-prev" type="button" aria-label="Previous" disabled={page === 0} onClick={() => setPage((p) => Math.max(0, p - 1))}>←</button>
            <button className="lp-arr lp-next" type="button" aria-label="Next" disabled={page >= pages - 1} onClick={() => setPage((p) => Math.min(pages - 1, p + 1))}>→</button>
          </span>
        </div>
      </div>
      <i className="lp-shade" />
    </div>
  );
}

export function WorkPanel({ w, i, panelRef, onOpen, onKey }) {
  const plateHtml = (w.dark ? '<span class="lp-sticker">Internal tool</span>' : "") + ART[w.art]();
  return (
    <div
      className={`lp-panel lp-work${w.dark ? " lp-dark" : ""}`}
      data-section={w.id} data-id={w.id} data-label={w.t}
      tabIndex={0} role="link" aria-label={`${w.t}, ${w.c}, ${w.y}`}
      ref={panelRef}
      onClick={() => onOpen(i)}
      onKeyDown={(e) => onKey(i, e)}
    >
      <div className="lp-pg">
        <div className="lp-plate" dangerouslySetInnerHTML={{ __html: plateHtml }} />
        <div className="lp-cap">
          <h3>{w.t}</h3>
          <p>{w.d}</p>
          <div className="lp-meta"><span>For {w.c}</span><span>{w.y}</span></div>
        </div>
      </div>
      <i className="lp-shade" />
    </div>
  );
}

export function NotesPanel({ panelRef }) {
  const goto = useGoto();
  return (
    <div className="lp-panel lp-notes" data-section="notes" data-id="notes" data-label="Field notes" ref={panelRef}>
      <div className="lp-pg">
        <div className="lp-head"><h2>Field notes</h2><span>From the team</span></div>
        <ul className="lp-nlist">
          {NOTES.map((n) => (
            <li key={n.t}>
              <div className="lp-nmeta"><span>{n.tag}</span><span>{n.date}</span></div>
              <h4>{n.t}</h4>
              <p>{n.d}</p>
            </li>
          ))}
        </ul>
        <div className="lp-pgfoot">
          <a className="lp-lnk" href="#" onClick={(e) => { e.preventDefault(); goto("index"); }}>Back to contents</a>
        </div>
      </div>
      <i className="lp-shade" />
    </div>
  );
}

export function AboutPanel({ panelRef }) {
  const goto = useGoto();
  return (
    <div className="lp-panel lp-about lp-dark" data-section="about" data-id="about" data-label="About" ref={panelRef}>
      <div className="lp-pg">
        <div className="lp-head"><h2>About Foldwise</h2><span>How it works</span></div>
        <p className="lp-bio">Foldwise works like a senior product designer who never loses context. It drafts screens, designs for answers that aren't certain yet, and hands off with a checklist. Teams at Tessel and Kompas use it for agents, approvals and design systems.</p>
        <ul className="lp-exp">
          <li><span>1 · Brief</span><b>Reads the problem</b><span>Your goals, data, constraints and design system</span></li>
          <li><span>2 · Draft</span><b>Designs every state</b><span>Flows, screens, errors, and what the AI says when unsure</span></li>
          <li><span>3 · Handoff</span><b>Ships with a checklist</b><span>Specs, edge cases and evals for engineering</span></li>
        </ul>
        <div className="lp-pgfoot">
          <a className="lp-lnk" href="#" onClick={(e) => { e.preventDefault(); goto("contact"); }}>Request access</a>
          <a className="lp-lnk" href="#" onClick={(e) => { e.preventDefault(); goto("index"); }}>See the work</a>
        </div>
      </div>
      <i className="lp-shade" />
    </div>
  );
}

export function ContactPanel({ panelRef, lpRef }) {
  const goto = useGoto();
  const [time, setTime] = useState("--:--");
  const [copied, setCopied] = useState(false);
  const timer = useRef(0);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Amsterdam" });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 20000);
    return () => clearInterval(id);
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(ADDR);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2200);
    } catch {
      location.href = "mailto:" + ADDR;
    }
  };

  const onMail = () => {
    if (lpRef.current.classList.contains("lp-v")) location.href = "mailto:" + ADDR;
    else copy();
  };

  return (
    <div className="lp-panel lp-contact lp-dark" data-section="contact" data-id="contact" data-label="Request access" ref={panelRef}>
      <div className="lp-pg">
        <div className="lp-bc-top"><b>Request access</b><span>Amsterdam <span className="lp-clock">{time}</span></span></div>
        <p className="lp-bc-line">Email is the fastest way in, whether you want early access, a demo for your team, or to talk about something you read here.</p>
        <button className="lp-mail" type="button" aria-label="Copy hello@foldwise.example" onClick={onMail}>
          <span>hello@</span>
          <span className="lp-l2">foldwise.example</span>
        </button>
        <div className="lp-bc-state">
          <span className={`lp-msg lp-d${copied ? " lp-ok" : ""}`}>{copied ? "Copied to clipboard" : "Click the address to copy it"}</span>
          <a className="lp-lnk lp-d" href="mailto:hello@foldwise.example">Open in mail app</a>
          <span className={`lp-msg lp-m${copied ? " lp-ok" : ""}`}>{copied ? "Copied to clipboard" : "Tap the address to write"}</span>
          <button className="lp-lnk lp-m lp-cp" type="button" onClick={copy}>Copy address</button>
        </div>
        <div className="lp-bc-links">
          <a className="lp-lnk" href="#" onClick={(e) => { e.preventDefault(); goto("index"); }}>Case studies</a>
          <a className="lp-lnk" href="#" onClick={(e) => { e.preventDefault(); goto("notes"); }}>Field notes</a>
          <a className="lp-lnk lp-m" href={vcard} download="foldwise.vcf">Save contact</a>
        </div>
        <div className="lp-bc-foot">
          <div className="lp-bc-code" dangerouslySetInnerHTML={{ __html: qr() + '<span>Scan to save<br>our contact</span>' }} />
          <div className="lp-bc-colo">
            <span>© 2026 Foldwise · a fictional studio</span>
            <span><a className="lp-lnk" href="#">Privacy</a><a className="lp-lnk" href="#">Cookies</a></span>
          </div>
        </div>
      </div>
      <i className="lp-shade" />
    </div>
  );
}
