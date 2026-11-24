import { useGoto } from "../goto.js";

export default function Bar({ menuOpen, menuBtnRef, onMenu }) {
  const goto = useGoto();
  const go = (id) => (e) => { e.preventDefault(); goto(id); };

  return (
    <header className="bar" data-section="nav">
      <a className="name ul" href="#" onClick={go("cover")}>Foldwise</a>
      <nav>
        <a className="ul" href="#" onClick={go("index")}>Work</a>
        <a className="ul" href="#" onClick={go("notes")}>Notes</a>
        <a className="ul" href="#" onClick={go("about")}>About</a>
        <a className="ul" href="#" onClick={go("contact")}>Request access</a>
      </nav>
      <button ref={menuBtnRef} className="menu-btn" type="button" aria-expanded={menuOpen} aria-controls="drawer" onClick={onMenu}>Menu</button>
    </header>
  );
}
