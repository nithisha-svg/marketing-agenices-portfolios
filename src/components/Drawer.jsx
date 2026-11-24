import { forwardRef, useEffect, useRef } from "react";
import { useGoto } from "../goto.js";

const LINKS = [
  { id: "index", label: "Work" },
  { id: "notes", label: "Notes" },
  { id: "about", label: "About" },
  { id: "contact", label: "Request access" }
];

const Drawer = forwardRef(function Drawer({ open, onClose }, ref) {
  const goto = useGoto();
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (open) closeBtnRef.current?.focus();
  }, [open]);

  return (
    <div className="drawer" id="drawer" ref={ref} aria-hidden={!open} data-section="menu">
      <div className="top">
        <b>Foldwise</b>
        <button ref={closeBtnRef} type="button" className="menu-close" onClick={onClose}>Close</button>
      </div>
      <div className="links">
        {LINKS.map(({ id, label }) => (
          <button key={id} type="button" onClick={() => goto(id)}>{label}</button>
        ))}
      </div>
      <div className="bottom">
        <span>Private beta</span>
        <a href="mailto:hello@foldwise.example">hello@foldwise.example</a>
      </div>
    </div>
  );
});

export default Drawer;
