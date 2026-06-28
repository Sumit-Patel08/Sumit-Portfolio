import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootLines = [
  { text: "> gcc main.c portfolio.c -o portfolio -O3", status: "[ OK ]", delay: 100 },
  { text: "> expanding macros and preprocessing...", status: "[ OK ]", delay: 180 },
  { text: "> generating assembly and object files...", status: "[ OK ]", delay: 140 },
  { text: "> linking standard libraries (libc, libm)...", status: "[ OK ]", delay: 200 },
  { text: "> resolving external dependencies...", status: "[ OK ]", delay: 160 },
  { text: "> optimizing binaries for target architecture...", status: "[ OK ]", delay: 220 },
  { text: "> executable 'portfolio' generated successfully.", status: "[ OK ]", delay: 140 },
  { text: "> verifying memory safety (valgrind)...", status: "[ OK ]", delay: 180 },
  { text: "> executing ./portfolio...", status: "[ DONE ]", delay: 300 },
];

function TypingLine({
  text,
  status,
  delay,
  onDone,
}: {
  text: string;
  status: string;
  delay: number;
  onDone?: () => void;
}) {
  const [visibleChars, setVisibleChars] = useState(0);
  const [showStatus, setShowStatus] = useState(false);

  useEffect(() => {
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

  return (
    <div className="flex items-center justify-between font-mono text-[11px] sm:text-xs">
      <span className="text-foreground/80">
        {text.slice(0, visibleChars)}
        <span className="inline-block h-3.5 w-1.5 animate-pulse bg-foreground/80 align-middle" />
      </span>
      <AnimatePresence>
        {showStatus && (
          <motion.span
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            className="ml-4 shrink-0 text-muted-foreground"
          >
            {status}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

export function BootLoader({ onComplete }: { onComplete: () => void }) {
  const [linesVisible, setLinesVisible] = useState(0);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [hexBg, setHexBg] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate background hex noise
  useEffect(() => {
    const hex = Array.from({ length: 40 }, () =>
      Math.random().toString(16).substring(2, 6).toUpperCase()
    );
    setHexBg(hex);
  }, []);

  // Stagger boot lines
  useEffect(() => {
    if (linesVisible >= bootLines.length) {
      const t = setTimeout(() => setExiting(true), 400);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLinesVisible((v) => v + 1);
    }, bootLines[linesVisible]?.delay ?? 150);
    return () => clearTimeout(t);
  }, [linesVisible]);

  // Progress bar animation
  useEffect(() => {
    const target = Math.min((linesVisible / bootLines.length) * 100, 100);
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

  // Notify parent after exit animation
  useEffect(() => {
    if (exiting) {
      const t = setTimeout(onComplete, 900);
      return () => clearTimeout(t);
    }
  }, [exiting, onComplete]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          ref={containerRef}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, filter: "blur(8px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] px-6"
        >
          {/* Background hex noise */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.04]">
            {hexBg.map((h, i) => (
              <span
                key={i}
                className="absolute font-mono text-[10px] text-white"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              >
                {h}
              </span>
            ))}
          </div>

          {/* Scanline overlay */}
          <div className="pointer-events-none absolute inset-0 z-10 opacity-[0.03]" style={{
            background: "repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)"
          }} />

          {/* Center content */}
          <div className="relative z-20 w-full max-w-xl">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="mb-8 text-center"
            >
              <div className="font-display text-2xl text-foreground sm:text-3xl">
                GCC.COMPILER
              </div>
              <div className="font-mono mt-1 text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                v14.2.0 // C17 Standard
              </div>
            </motion.div>

            {/* Boot lines */}
            <div className="space-y-2.5">
              {bootLines.slice(0, linesVisible).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <TypingLine
                    text={line.text}
                    status={line.status}
                    delay={line.delay}
                  />
                </motion.div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="mt-8">
              <div className="flex justify-between font-mono text-[10px] text-muted-foreground">
                <span>SYSTEM_LOAD</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="mt-2 h-[2px] w-full overflow-hidden bg-border/40">
                <motion.div
                  className="h-full bg-foreground"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>

            {/* Footer status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 text-center font-mono text-[10px] text-muted-foreground"
            >
              <span className="animate-pulse">_</span> PRESS ANY KEY TO SKIP
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
