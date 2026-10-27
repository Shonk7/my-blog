import { useCallback, useEffect, useRef, useState } from "react";
import { MENU, ME, type SectionKey } from "./data";
import { PixelSprite } from "./components/PixelSprite";
import { Home, PANELS } from "./components/Panels";

const COLS = 2;

function useClock() {
  const fmt = () => new Date().toLocaleTimeString("en-AU", { hour: "2-digit", minute: "2-digit", hour12: false });
  const [t, setT] = useState(fmt);
  useEffect(() => { const id = setInterval(() => setT(fmt()), 15000); return () => clearInterval(id); }, []);
  return t;
}

export default function App() {
  const [sel, setSel] = useState(0);
  const [open, setOpen] = useState<SectionKey | null>(null);
  const [line, setLine] = useState("Use arrows or click a tile to open.");
  const view = useRef<HTMLDivElement>(null);
  const clock = useClock();

  const focus = useCallback((i: number) => { setSel(i); setOpen(null); setLine(MENU[i].hint); }, []);
  const activate = useCallback((i: number) => {
    setSel(i); setOpen(MENU[i].key); setLine(MENU[i].intro); view.current?.scrollTo({ top: 0 });
  }, []);
  const back = useCallback(() => { setOpen(null); setLine(MENU[sel].hint); }, [sel]);

  const press = useCallback((k: string) => {
    const n = MENU.length;
    if (open && (k === "up" || k === "down")) { view.current?.scrollBy({ top: k === "up" ? -70 : 70, behavior: "smooth" }); return; }
    if (k === "left") focus(sel % COLS === 0 ? sel + 1 : sel - 1);
    else if (k === "right") focus(sel % COLS === 1 ? sel - 1 : sel + 1);
    else if (k === "up") focus((sel - COLS + n) % n);
    else if (k === "down") focus((sel + COLS) % n);
    else if (k === "a") activate(sel);
    else if (k === "b") back();
  }, [open, sel, focus, activate, back]);

  useEffect(() => {
    const map: Record<string, string> = {
      ArrowUp: "up", w: "up", ArrowDown: "down", s: "down", ArrowLeft: "left", a: "left", ArrowRight: "right", d: "right",
      Enter: "a", z: "a", Escape: "b", x: "b", Backspace: "b",
    };
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (t.tagName === "INPUT" || (t.tagName === "BUTTON" && !t.classList.contains("tile") && (e.key === "Enter" || e.key === " "))) return;
      const k = map[e.key.length === 1 ? e.key.toLowerCase() : e.key];
      if (k) { e.preventDefault(); press(k); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [press]);

  const Panel = open ? PANELS[open] : null;
  const current = MENU[sel];

  return (
    <main className="device" aria-label={`${ME.name} — personal site`}>
      <section className="top shell-top">
        <div className="camera" aria-hidden="true" />
        <div className="top-shell">
          <i className="speaker left" aria-hidden="true" />
          <i className="speaker right" aria-hidden="true" />
          <div className="top-screen">
            <div className="top-header">
              <span>{open ? current.label : "TOP SCREEN"}</span>
              <span className="clock">{clock}</span>
            </div>
            <div className="top-content">
              <div className="view" ref={view} tabIndex={0} aria-label="Details">
                {Panel ? <Panel /> : <Home item={current} />}
              </div>
            </div>
            <div className="top-footer">{line}</div>
          </div>
        </div>
      </section>

      <div className="hinge" aria-hidden="true" />

      <section className="bottom shell-bottom">
        <div className="lower-deck">
          <div className="pad-zone left-zone">
            <div className="dpad">
              <button type="button" className="u" aria-label="Up" onClick={() => press("up")} />
              <button type="button" className="l" aria-label="Left" onClick={() => press("left")} />
              <span className="c" />
              <button type="button" className="r" aria-label="Right" onClick={() => press("right")} />
              <button type="button" className="d" aria-label="Down" onClick={() => press("down")} />
            </div>
          </div>

          <div className="menu-screen">
            <div className="status-wrap">
              <div className="status">
                <span className="time">{clock}</span>
                <span className="dot">•</span>
                <span>TR</span>
                <span>ONLINE</span>
                <span>WIRELESS</span>
                <span className="battery" aria-label="Battery">
                  <span />
                </span>
              </div>
            </div>
            <nav className="menu" aria-label="Main menu">
              {MENU.map((m, i) => (
                <button
                  key={m.key}
                  type="button"
                  className={`tile${i === sel ? " on" : ""}${open === m.key ? " open" : ""}`}
                  onMouseEnter={() => !open && i !== sel && focus(i)}
                  onClick={() => activate(i)}
                  aria-current={open === m.key ? "page" : undefined}
                >
                  <span className="icon"><PixelSprite name={m.icon} scale={3} /></span>
                  <span className="label">{m.label}</span>
                </button>
              ))}
            </nav>
            <div className="close-row">
              {open && <button type="button" className="back" onClick={back}>✕</button>}
            </div>
          </div>

          <div className="pad-zone right-zone">
            <div className="ab">
              <button type="button" className="x" aria-label="Alt action" onClick={() => press("a")}>X</button>
              <button type="button" className="y" aria-label="Alt back" onClick={() => press("b")}>Y</button>
              <button type="button" className="b" aria-label="Back" onClick={() => press("b")}>B</button>
              <button type="button" className="a" aria-label="Open" onClick={() => press("a")}>A</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
