import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  age: number;
}

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ring1Ref = useRef<HTMLDivElement>(null);
  const ring2Ref = useRef<HTMLDivElement>(null);
  const crossRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const smooth = useRef({ x: -100, y: -100 });
  const ring1 = useRef({ x: -100, y: -100 });
  const ring2 = useRef({ x: -100, y: -100 });
  const trail = useRef<Point[]>([]);
  const angle1 = useRef(0);
  const angle2 = useRef(0);

  useEffect(() => {
    const dot = dotRef.current;
    const r1 = ring1Ref.current;
    const r2 = ring2Ref.current;
    const cross = crossRef.current;
    const canvas = canvasRef.current;
    if (!dot || !r1 || !r2 || !cross || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);

    let raf: number;
    const loop = () => {
      // Smooth follow
      smooth.current.x += (pos.current.x - smooth.current.x) * 0.18;
      smooth.current.y += (pos.current.y - smooth.current.y) * 0.18;
      ring1.current.x += (pos.current.x - ring1.current.x) * 0.1;
      ring1.current.y += (pos.current.y - ring1.current.y) * 0.1;
      ring2.current.x += (pos.current.x - ring2.current.x) * 0.06;
      ring2.current.y += (pos.current.y - ring2.current.y) * 0.06;

      // Update positions
      dot.style.transform = `translate(${smooth.current.x}px, ${smooth.current.y}px) translate(-50%, -50%)`;
      r1.style.transform = `translate(${ring1.current.x}px, ${ring1.current.y}px) translate(-50%, -50%) rotate(${angle1.current}deg)`;
      r2.style.transform = `translate(${ring2.current.x}px, ${ring2.current.y}px) translate(-50%, -50%) rotate(${angle2.current}deg)`;
      cross.style.transform = `translate(${smooth.current.x}px, ${smooth.current.y}px) translate(-50%, -50%)`;

      // Rotate rings
      angle1.current += 0.7;
      angle2.current -= 0.4;

      // Trail ribbon
      trail.current.push({ x: smooth.current.x, y: smooth.current.y, age: 1 });
      if (trail.current.length > 30) trail.current.shift();

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (trail.current.length > 2) {
        ctx.beginPath();
        ctx.moveTo(trail.current[0].x, trail.current[0].y);
        for (let i = 1; i < trail.current.length; i++) {
          const p = trail.current[i];
          p.age -= 0.035;
          const prev = trail.current[i - 1];
          const mx = (prev.x + p.x) / 2;
          const my = (prev.y + p.y) / 2;
          ctx.quadraticCurveTo(prev.x, prev.y, mx, my);
        }
        const last = trail.current[trail.current.length - 1];
        ctx.lineTo(last.x, last.y);

        const grad = ctx.createLinearGradient(
          trail.current[0].x, trail.current[0].y,
          last.x, last.y
        );
        grad.addColorStop(0, "rgba(255,255,255,0)");
        grad.addColorStop(0.5, "rgba(255,255,255,0.12)");
        grad.addColorStop(1, "rgba(255,255,255,0.35)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
      }

      // Clean old trail points
      trail.current = trail.current.filter((p) => p.age > 0);

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[9998]"
      />

      {/* Inner ring - thin, rotating */}
      <div
        ref={ring1Ref}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-10 w-10"
      >
        <div className="h-full w-full rounded-full border border-white/20" />
        <div className="absolute left-1/2 top-0 h-1 w-px -translate-x-1/2 bg-white/30" />
      </div>

      {/* Outer ring - dashed, slower reverse */}
      <div
        ref={ring2Ref}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-[52px] w-[52px]"
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            border: "1px dashed rgba(255,255,255,0.15)",
          }}
        />
      </div>

      {/* Crosshair lines */}
      <div
        ref={crossRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
      >
        <div className="absolute left-1/2 top-1/2 h-5 w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-white/25 to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      </div>

      {/* Center dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]"
      />

      <style>{`
        @media (hover: none) and (pointer: coarse) {
          .fixed.z-\[9999\], .fixed.z-\[9998\] { display: none !important; }
          body { cursor: auto !important; }
        }
      `}</style>
    </>
  );
}
