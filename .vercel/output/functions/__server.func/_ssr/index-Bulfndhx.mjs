import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { M as MapPin, G as GraduationCap, a as Gamepad2, T as Trophy, B as Building2, L as Leaf, R as Rocket, b as Briefcase, c as Target, E as ExternalLink, d as Github, e as Linkedin, f as Mail, S as SquareTerminal, H as House, C as Cpu, g as GitBranch } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function ParticleBackground() {
  const canvasRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf = 0;
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    const stars = Array.from({ length: 160 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random() * 0.8 + 0.2,
      r: Math.random() * 1.2 + 0.2,
      t: Math.random() * Math.PI * 2
    }));
    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    const loop = () => {
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        s.t += 0.01 * s.z;
        const alpha = 0.4 + Math.sin(s.t) * 0.4;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(235, 235, 235, ${alpha * s.z})`;
        ctx.fill();
        s.y += 0.05 * s.z;
        if (s.y > h) s.y = 0;
      }
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "canvas",
    {
      ref: canvasRef,
      className: "pointer-events-none fixed inset-0 -z-10 h-full w-full",
      style: { background: "radial-gradient(ellipse at top, #0a0a0a 0%, #050505 60%, #000 100%)" }
    }
  );
}
function CustomCursor() {
  const dotRef = reactExports.useRef(null);
  const ring1Ref = reactExports.useRef(null);
  const ring2Ref = reactExports.useRef(null);
  const crossRef = reactExports.useRef(null);
  const canvasRef = reactExports.useRef(null);
  const pos = reactExports.useRef({ x: -100, y: -100 });
  const smooth = reactExports.useRef({ x: -100, y: -100 });
  const ring1 = reactExports.useRef({ x: -100, y: -100 });
  const ring2 = reactExports.useRef({ x: -100, y: -100 });
  const trail = reactExports.useRef([]);
  const angle1 = reactExports.useRef(0);
  const angle2 = reactExports.useRef(0);
  reactExports.useEffect(() => {
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
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);
    let raf;
    const loop = () => {
      smooth.current.x += (pos.current.x - smooth.current.x) * 0.18;
      smooth.current.y += (pos.current.y - smooth.current.y) * 0.18;
      ring1.current.x += (pos.current.x - ring1.current.x) * 0.1;
      ring1.current.y += (pos.current.y - ring1.current.y) * 0.1;
      ring2.current.x += (pos.current.x - ring2.current.x) * 0.06;
      ring2.current.y += (pos.current.y - ring2.current.y) * 0.06;
      dot.style.transform = `translate(${smooth.current.x}px, ${smooth.current.y}px) translate(-50%, -50%)`;
      r1.style.transform = `translate(${ring1.current.x}px, ${ring1.current.y}px) translate(-50%, -50%) rotate(${angle1.current}deg)`;
      r2.style.transform = `translate(${ring2.current.x}px, ${ring2.current.y}px) translate(-50%, -50%) rotate(${angle2.current}deg)`;
      cross.style.transform = `translate(${smooth.current.x}px, ${smooth.current.y}px) translate(-50%, -50%)`;
      angle1.current += 0.7;
      angle2.current -= 0.4;
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
          trail.current[0].x,
          trail.current[0].y,
          last.x,
          last.y
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "canvas",
      {
        ref: canvasRef,
        className: "pointer-events-none fixed inset-0 z-[9998]"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref: ring1Ref,
        className: "pointer-events-none fixed left-0 top-0 z-[9999] h-10 w-10",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-full rounded-full border border-white/20" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-0 h-1 w-px -translate-x-1/2 bg-white/30" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: ring2Ref,
        className: "pointer-events-none fixed left-0 top-0 z-[9999] h-[52px] w-[52px]",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-full w-full rounded-full",
            style: {
              border: "1px dashed rgba(255,255,255,0.15)"
            }
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref: crossRef,
        className: "pointer-events-none fixed left-0 top-0 z-[9999]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-1/2 h-5 w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-white/25 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: dotRef,
        className: "pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @media (hover: none) and (pointer: coarse) {
          .fixed.z-[9999], .fixed.z-[9998] { display: none !important; }
          body { cursor: auto !important; }
        }
      ` })
  ] });
}
const items = [
  { id: "home", label: "./home", icon: House },
  { id: "arsenal", label: "./arsenal", icon: Cpu },
  { id: "chronology", label: "./chronology", icon: GitBranch },
  { id: "projects", label: "./deployments", icon: Rocket }
];
function SideNav() {
  const [active, setActive] = reactExports.useState("home");
  reactExports.useEffect(() => {
    const onScroll = () => {
      for (const it of items) {
        const el = document.getElementById(it.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActive(it.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "fixed right-4 top-1/2 z-50 -translate-y-1/2 md:right-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-3 rounded-full border border-border bg-card/40 p-2 backdrop-blur-md", children: items.map((it) => {
    const Icon = it.icon;
    const isActive = active === it.id;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "group relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: `#${it.id}`,
          className: `flex h-10 w-10 items-center justify-center rounded-full transition-all ${isActive ? "bg-neon text-black shadow-[0_0_20px_var(--neon)]" : "text-muted-foreground hover:text-neon"}`,
          "aria-label": it.label,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18 })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono pointer-events-none absolute right-12 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md border border-border bg-popover px-2 py-1 text-xs text-foreground opacity-0 transition-opacity group-hover:opacity-100", children: it.label })
    ] }, it.id);
  }) }) });
}
const links = [
  { href: "#home", label: "./home" },
  { href: "#projects", label: "./deployments" },
  { href: "#arsenal", label: "./arsenal" },
  { href: "#chronology", label: "./chronology" }
];
function TopNav() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "fixed inset-x-0 top-0 z-40 px-6 py-5 md:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#home", className: "font-mono flex items-center gap-2 text-sm font-semibold tracking-wider text-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SquareTerminal, { size: 18, className: "text-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "SP.SYS" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-1 rounded-full border border-border bg-card/30 px-2 py-1.5 backdrop-blur-md md:flex", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: l.href,
        className: "font-mono rounded-full px-4 py-1.5 text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground",
        children: l.label
      },
      l.href
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[110px]", "aria-hidden": true })
  ] }) });
}
const lines = [
  { cmd: "whoami", out: "Sumit Patel — AI/ML Architect && Backend Developer" },
  { cmd: "skills --list", out: "Python, FastAPI, Next.js, Scikit-learn, Local LLMs, Supabase" },
  { cmd: "status", out: "ONLINE • Building intelligent digital ecosystems ▌" }
];
function Terminal() {
  const [shown, setShown] = reactExports.useState([]);
  const [idx, setIdx] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (idx >= lines.length) return;
    const line = lines[idx];
    setShown((s) => [...s, { ...line, typed: 0 }]);
    let i = 0;
    const total = line.cmd.length + line.out.length;
    const t = setInterval(() => {
      i++;
      setShown((s) => {
        const copy = [...s];
        copy[copy.length - 1] = { ...copy[copy.length - 1], typed: i };
        return copy;
      });
      if (i >= total) {
        clearInterval(t);
        setTimeout(() => setIdx((x) => x + 1), 400);
      }
    }, 30);
    return () => clearInterval(t);
  }, [idx]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.4 },
      className: "glass-card overflow-hidden rounded-xl",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b border-border bg-black/50 px-4 py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full bg-red-500/80" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full bg-yellow-500/80" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full bg-green-500/80" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono ml-3 text-xs text-muted-foreground", children: "sumit@ubuntu: ~" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono space-y-2 p-5 text-sm leading-relaxed", children: shown.map((l, i) => {
          const cmdShown = l.typed <= l.cmd.length ? l.cmd.slice(0, l.typed) : l.cmd;
          const outShown = l.typed > l.cmd.length ? l.out.slice(0, l.typed - l.cmd.length) : "";
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon", children: "sumit@ubuntu" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: ":" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-400", children: "~" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "$ " }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: cmdShown }),
              i === shown.length - 1 && l.typed <= l.cmd.length && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-pulse text-neon", children: "▌" })
            ] }),
            outShown && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pl-2 text-muted-foreground", children: [
              "→ ",
              outShown
            ] })
          ] }, i);
        }) })
      ]
    }
  );
}
const bootLines = [
  { text: "> INITIALIZING CORE SYSTEMS...", status: "[ OK ]", delay: 100 },
  { text: "> LOADING KERNEL MODULES v4.2.1", status: "[ OK ]", delay: 180 },
  { text: "> MOUNTING VIRTUAL FILESYSTEM", status: "[ OK ]", delay: 140 },
  { text: "> VERIFYING SECURITY PROTOCOLS", status: "[ OK ]", delay: 200 },
  { text: "> ESTABLISHING NEURAL UPLINK", status: "[ OK ]", delay: 160 },
  { text: "> DECRYPTING USER PROFILE: SUMIT_PATEL", status: "[ OK ]", delay: 220 },
  { text: "> LOADING AI/ML ARCHITECTURE", status: "[ OK ]", delay: 140 },
  { text: "> COMPILING DEPLOYMENT ASSETS", status: "[ OK ]", delay: 180 },
  { text: "> RENDERING INTERFACE...", status: "[ DONE ]", delay: 300 }
];
function TypingLine({
  text,
  status,
  delay,
  onDone
}) {
  const [visibleChars, setVisibleChars] = reactExports.useState(0);
  const [showStatus, setShowStatus] = reactExports.useState(false);
  reactExports.useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setVisibleChars(i);
      if (i >= text.length) {
        clearInterval(interval);
        setTimeout(() => {
          setShowStatus(true);
          onDone?.();
        }, 120);
      }
    }, 18);
    return () => clearInterval(interval);
  }, [text, onDone]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between font-mono text-[11px] sm:text-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground/80", children: [
      text.slice(0, visibleChars),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block h-3.5 w-1.5 animate-pulse bg-foreground/80 align-middle" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showStatus && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.span,
      {
        initial: { opacity: 0, x: 8 },
        animate: { opacity: 1, x: 0 },
        className: "ml-4 shrink-0 text-muted-foreground",
        children: status
      }
    ) })
  ] });
}
function BootLoader({ onComplete }) {
  const [linesVisible, setLinesVisible] = reactExports.useState(0);
  const [progress, setProgress] = reactExports.useState(0);
  const [exiting, setExiting] = reactExports.useState(false);
  const [hexBg, setHexBg] = reactExports.useState([]);
  const containerRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const hex = Array.from(
      { length: 40 },
      () => Math.random().toString(16).substring(2, 6).toUpperCase()
    );
    setHexBg(hex);
  }, []);
  reactExports.useEffect(() => {
    if (linesVisible >= bootLines.length) {
      const t2 = setTimeout(() => setExiting(true), 400);
      return () => clearTimeout(t2);
    }
    const t = setTimeout(() => {
      setLinesVisible((v) => v + 1);
    }, bootLines[linesVisible]?.delay ?? 150);
    return () => clearTimeout(t);
  }, [linesVisible]);
  reactExports.useEffect(() => {
    const target = Math.min(linesVisible / bootLines.length * 100, 100);
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= target) {
          clearInterval(interval);
          return target;
        }
        return p + 1.5;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [linesVisible]);
  reactExports.useEffect(() => {
    if (exiting) {
      const t = setTimeout(onComplete, 900);
      return () => clearTimeout(t);
    }
  }, [exiting, onComplete]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: !exiting && /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      ref: containerRef,
      initial: { opacity: 1 },
      exit: { opacity: 0, y: -40, filter: "blur(8px)" },
      transition: { duration: 0.8, ease: "easeInOut" },
      className: "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] px-6",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 overflow-hidden opacity-[0.04]", children: hexBg.map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "absolute font-mono text-[10px] text-white",
            style: {
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`
            },
            children: h
          },
          i
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 z-10 opacity-[0.03]", style: {
          background: "repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-20 w-full max-w-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.4 },
              className: "mb-8 text-center",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl text-foreground sm:text-3xl", children: "SP.SYS" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono mt-1 text-[10px] uppercase tracking-[0.35em] text-muted-foreground", children: "Bootloader v2.0.4 // Secure Mode" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: bootLines.slice(0, linesVisible).map((line, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -12 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.25 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                TypingLine,
                {
                  text: line.text,
                  status: line.status,
                  delay: line.delay
                }
              )
            },
            i
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-mono text-[10px] text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "SYSTEM_LOAD" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                Math.round(progress),
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 h-[2px] w-full overflow-hidden bg-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "h-full bg-foreground",
                style: { width: `${progress}%` },
                transition: { duration: 0.1 }
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.3 },
              className: "mt-8 text-center font-mono text-[10px] text-muted-foreground",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-pulse", children: "_" }),
                " PRESS ANY KEY TO SKIP"
              ]
            }
          )
        ] })
      ]
    }
  ) });
}
const projects = [{
  title: "Mumbai Pulse (CityForge)",
  accolade: "Winner • NASA Space Apps 2025",
  desc: "Real-time environmental health dashboard integrating NASA Earth Observation data to monitor urban heat, air quality, and water resources.",
  tags: ["Next.js", "Flask", "Leaflet", "NASA EO", "Meteomatics"]
}, {
  title: "Urban Intel AI",
  accolade: "1st Runner Up • Ingenius 7.0",
  desc: "Smart City Governance Platform featuring a Hybrid AI Architecture with 6 Random Forest Models and a Private Local LLM (TinyLlama).",
  tags: ["Generative AI", "ML", "Local LLM"]
}, {
  title: "TerraForge",
  accolade: "Top 8 • DotSlash 9.0",
  desc: "Environmental Intelligence OS running AI models locally to predict agricultural impacts and generate policy recommendations.",
  tags: ["GreenTech", "AI", "Real-time"]
}, {
  title: "AgriForge AI",
  accolade: "Top 40 • LJ Hackovate 2025",
  desc: "SSIP-funded platform predicting milk yield and detecting 15+ cattle diseases using Linear Regression and Classification models.",
  tags: ["FastAPI", "Next.js", "Supabase", "Scikit-learn"]
}, {
  title: "Coastal Threat Alert System",
  accolade: "DAIICT HackOut 2025",
  desc: "AI + IoT platform to protect coastal ecosystems from sea-level rise, cyclones, and blue-carbon degradation.",
  tags: ["Blue Carbon", "IoT", "Full-Stack"]
}, {
  title: "Eunoia Homoeopathy",
  accolade: "Freelance Client",
  desc: "Comprehensive web solution with domain setup and seamless UX to establish a digital footprint for a medical business.",
  tags: ["Web Dev", "UI/UX", "Performance"]
}];
const timeline = [{
  icon: GraduationCap,
  chapter: "01 // The Foundation",
  title: "Academic Roots & MSU Baroda",
  desc: "Achieved 99.93 PR and 94% in 12th standard, paving the way to pursue Computer Science Engineering at The Maharaja Sayajirao University of Baroda (Class of 2028). Began the journey of bridging theoretical CS with real-world application."
}, {
  icon: Gamepad2,
  chapter: "02 // Early Builds & Rapid Prototyping",
  title: "First Hackathons & Game Jams",
  desc: 'Secured 4th position at the ITM University GameJam with the voice-controlled survival game "Scream to Survive." Followed up by competing at DAIICT HackOut 2025, building a Coastal Threat Alert System leveraging AI and satellite data to protect blue carbon ecosystems.'
}, {
  icon: Trophy,
  chapter: "03 // The First Major Victory",
  title: "Champions at NASA Space Apps 2025",
  desc: 'Emerged as Champions at the NASA Space Apps Challenge 2025 (Local Event) with Team Hell Boys. Built "Mumbai Pulse," a real-time environmental dashboard integrating NASA Earth Observation data to monitor urban health and extreme heat.'
}, {
  icon: Building2,
  chapter: "04 // Advancing Smart City AI",
  title: "Ingenius Hackathon 7.0",
  desc: `Secured 1st Runner-Up among 180+ teams at Ahmedabad University's Ingenius Hackathon 7.0. Engineered "Urban Intel AI," a Smart City Governance Platform featuring a Hybrid AI Architecture and a Private Local LLM (TinyLlama) for high-precision urban risk forecasting.`
}, {
  icon: Leaf,
  chapter: "05 // Innovating AgriTech",
  title: "LJ Hackovate 2025",
  desc: 'Selected as a Top 40 Finalist out of 240+ teams at LJ Hackovate 2025. Built "AgriForge AI," an SSIP-funded smart cattle health platform that utilizes machine learning to predict milk yield and detect over 15 diseases.'
}, {
  icon: Rocket,
  chapter: "06 // Competing at Scale",
  title: "DotSlash 9.0 Hackathon",
  desc: 'Selected as a Top 8 Finalist out of 550+ teams at the 30-hour DotSlash 9.0 Hackathon at SVNIT Surat. Developed "TerraForge," an Environmental Intelligence OS that runs AI models locally to predict climate risks and generate policy recommendations.'
}, {
  icon: Briefcase,
  chapter: "07 // Real-World Client Deployment",
  title: "Digital Transformation & Freelance",
  desc: "Successfully built and deployed a comprehensive digital solution for Eunoia Homoeopathy. Handled end-to-end development, from UI/UX and performance optimization to domain and hosting setup, establishing a robust online presence for the medical business."
}, {
  icon: Target,
  chapter: "08 // The Current Frontier",
  title: "Eyes on HackBaroda 2026",
  desc: "Selected for the final round of HackBaroda 2026. Continuing the mission to build impactful, scalable, and intelligent digital ecosystems alongside brilliant teammates."
}];
const skills = [{
  label: "Languages",
  items: ["C", "C++", "Java", "Python", "TypeScript", "HTML5"]
}, {
  label: "Frontend",
  items: ["React 18", "Next.js 14", "Tailwind CSS", "Shadcn/UI"]
}, {
  label: "Backend & DB",
  items: ["FastAPI", "Flask", "Node.js", "PostgreSQL", "Supabase"]
}, {
  label: "AI & Analytics",
  items: ["Scikit-learn", "Pandas", "NumPy", "Generative AI", "Local LLMs"]
}, {
  label: "Tools",
  items: ["Git", "Leaflet", "Esri / ArcGIS"]
}];
function Index() {
  const [bootDone, setBootDone] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen overflow-x-hidden bg-background text-foreground", children: [
    !bootDone && /* @__PURE__ */ jsxRuntimeExports.jsx(BootLoader, { onComplete: () => setBootDone(true) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ParticleBackground, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CustomCursor, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TopNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SideNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "home", className: "relative flex min-h-screen items-center px-6 pb-24 pt-32 md:px-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1fr_1.2fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        scale: 0.9
      }, animate: {
        opacity: 1,
        scale: 1
      }, transition: {
        duration: 0.7
      }, className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-2 rounded-full bg-neon/20 blur-2xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-56 w-56 overflow-hidden rounded-full border-2 border-neon/60 bg-gradient-to-br from-neon/20 to-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full w-full items-center justify-center font-mono text-6xl font-bold text-neon", children: "SP" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-border bg-black/80 px-3 py-1.5 backdrop-blur", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2.5 w-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-foreground", children: "Online" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono mt-6 flex items-center gap-2 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 12 }),
          " Vadodara, India"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          x: -20
        }, animate: {
          opacity: 1,
          x: 0
        }, transition: {
          duration: 0.6
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono mb-3 text-sm text-neon", children: "$ ./initialize_identity --user sumit" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl", children: [
            "Sumit ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon text-glow", children: "Patel." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono mt-4 text-sm text-muted-foreground md:text-base", children: [
            "AI/ML Architect ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon", children: "||" }),
            " Backend Developer",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon", children: "||" }),
            " Smart City Innovator",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon", children: "||" }),
            " Tech Storyteller"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg", children: "Architecting systems that solve real-world crises, pushing the boundaries of AI, and bridging the gap between theoretical knowledge and industry-ready implementation. 2nd Year CSE student building intelligent digital ecosystems." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Terminal, {}) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "arsenal", kicker: "// 02", title: "Technical Arsenal", subtitle: "The toolchain powering every deployment.", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: skills.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true,
      margin: "-80px"
    }, transition: {
      duration: 0.5
    }, className: "glass-card glass-card-hover rounded-2xl p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-neon", children: g.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: g.items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono rounded-full border border-border bg-black/40 px-3 py-1 text-xs text-foreground transition-colors hover:border-neon hover:text-neon", children: it }, it)) })
    ] }, g.label)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "chronology", kicker: "// 03", title: "The Engineering Journey", subtitle: "A chronology of builds, wins, and lessons.", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-neon/40 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-12", children: timeline.map((t, i) => {
        const Icon = t.icon;
        const left = i % 2 === 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          x: left ? -40 : 40
        }, whileInView: {
          opacity: 1,
          x: 0
        }, viewport: {
          once: true,
          margin: "-80px"
        }, transition: {
          duration: 0.6
        }, className: `relative grid grid-cols-2 gap-8 ${left ? "" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: left ? "pr-8 text-right" : "col-start-2 pl-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card glass-card-hover rounded-xl p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-neon/80", children: t.chapter }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-mono text-sm text-neon", children: t.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: t.desc })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-6 -translate-x-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full border border-neon bg-black shadow-[0_0_20px_var(--neon)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 16, className: "text-neon" }) }) })
        ] }, t.title);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "projects", kicker: "// 04", title: "Deployed Assets", subtitle: "Selected systems shipped into the wild.", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { initial: {
      opacity: 0,
      y: 30
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true,
      margin: "-60px"
    }, transition: {
      duration: 0.5,
      delay: i * 0.05
    }, className: "glass-card glass-card-hover group relative flex flex-col rounded-2xl p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-neon", children: p.accolade }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 14, className: "text-muted-foreground transition-colors group-hover:text-neon" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-xl font-semibold text-foreground", children: p.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 flex-1 text-sm leading-relaxed text-muted-foreground", children: p.desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap gap-1.5", children: p.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono rounded border border-border/60 bg-black/40 px-2 py-0.5 text-[10px] text-muted-foreground", children: tag }, tag)) })
    ] }, p.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border/50 px-6 py-10 md:px-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon", children: ">_" }),
        " SYSTEM_SHUTDOWN // Sumit Patel // Handcrafted with Code and Coffee."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: [{
        Icon: Github,
        href: "https://github.com"
      }, {
        Icon: Linkedin,
        href: "https://linkedin.com"
      }, {
        Icon: Mail,
        href: "mailto:hello@sumit.dev"
      }].map(({
        Icon,
        href
      }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, target: "_blank", rel: "noreferrer", className: "flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-neon hover:text-neon hover:shadow-[0_0_15px_var(--neon)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 15 }) }, i)) })
    ] }) })
  ] });
}
function Section({
  id,
  kicker,
  title,
  subtitle,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id, className: "relative px-6 py-28 md:px-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true,
      margin: "-80px"
    }, transition: {
      duration: 0.5
    }, className: "mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground", children: kicker }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display mt-3 text-5xl leading-[1.05] tracking-tight text-foreground md:text-6xl", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono mt-3 text-sm text-muted-foreground", children: subtitle })
    ] }),
    children
  ] }) });
}
export {
  Index as component
};
