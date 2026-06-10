import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const lines = [
  { cmd: "whoami", out: "Sumit Patel — AI/ML Architect && Fullstack Developer" },
  { cmd: "skills --list", out: "Python, FastAPI, Next.js, Scikit-learn, Local LLMs, Supabase" },
  { cmd: "status", out: "ONLINE • Building intelligent digital ecosystems ▌" },
];

export function Terminal() {
  const [shown, setShown] = useState<{ cmd: string; out: string; typed: number }[]>([]);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="glass-card overflow-hidden rounded-xl"
    >
      <div className="flex items-center gap-2 border-b border-border bg-black/50 px-4 py-2">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="font-mono ml-3 text-xs text-muted-foreground">sumit@ubuntu: ~</span>
      </div>
      <div className="font-mono space-y-2 p-5 text-sm leading-relaxed">
        {shown.map((l, i) => {
          const cmdShown = l.typed <= l.cmd.length ? l.cmd.slice(0, l.typed) : l.cmd;
          const outShown = l.typed > l.cmd.length ? l.out.slice(0, l.typed - l.cmd.length) : "";
          return (
            <div key={i}>
              <div>
                <span className="text-neon">sumit@ubuntu</span>
                <span className="text-muted-foreground">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-muted-foreground">$ </span>
                <span className="text-foreground">{cmdShown}</span>
                {i === shown.length - 1 && l.typed <= l.cmd.length && (
                  <span className="animate-pulse text-neon">▌</span>
                )}
              </div>
              {outShown && <div className="pl-2 text-muted-foreground">→ {outShown}</div>}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}