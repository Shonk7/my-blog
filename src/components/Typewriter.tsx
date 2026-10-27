import { useEffect, useState } from "react";

const reduced = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export function Typewriter({ text, speed = 18 }: { text: string; speed?: number }) {
  const [n, setN] = useState(reduced ? text.length : 0);
  useEffect(() => {
    if (reduced) { setN(text.length); return; }
    setN(0);
    const id = window.setInterval(() => setN((v) => (v >= text.length ? (window.clearInterval(id), v) : v + 1)), speed);
    return () => window.clearInterval(id);
  }, [text, speed]);
  return <span aria-live="polite">{text.slice(0, n)}</span>;
}
