import { useEffect, useRef } from "react";
import type { SpriteName } from "../data";
import { PALETTE, SPRITES } from "../sprites";

type Props = { name: SpriteName; scale?: number; className?: string; title?: string };

export function PixelSprite({ name, scale = 4, className, title }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const rows = SPRITES[name];
    const w = Math.max(...rows.map((r) => r.length));
    cv.width = w * scale;
    cv.height = rows.length * scale;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, cv.width, cv.height);
    rows.forEach((row, y) =>
      [...row].forEach((ch, x) => {
        const c = PALETTE[ch];
        if (c) { ctx.fillStyle = c; ctx.fillRect(x * scale, y * scale, scale, scale); }
      }),
    );
  }, [name, scale]);
  return <canvas ref={ref} className={className} role={title ? "img" : undefined} aria-label={title} aria-hidden={title ? undefined : true} />;
}
