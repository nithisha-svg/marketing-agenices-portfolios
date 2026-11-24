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
  );
}
