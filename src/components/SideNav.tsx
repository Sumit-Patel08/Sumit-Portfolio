import { useEffect, useState } from "react";
import { Home, Cpu, GitBranch, Rocket } from "lucide-react";

const items = [
  { id: "home", label: "./home", icon: Home },
  { id: "arsenal", label: "./arsenal", icon: Cpu },
  { id: "chronology", label: "./chronology", icon: GitBranch },
  { id: "projects", label: "./deployments", icon: Rocket },
];

export function SideNav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
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

  return (
    <nav className="fixed right-4 top-1/2 z-50 -translate-y-1/2 md:right-6">
      <ul className="flex flex-col gap-3 rounded-full border border-border bg-card/40 p-2 backdrop-blur-md">
        {items.map((it) => {
          const Icon = it.icon;
          const isActive = active === it.id;
          return (
            <li key={it.id} className="group relative">
              <a
                href={`#${it.id}`}
                className={`flex h-10 w-10 items-center justify-center rounded-full transition-all ${
                  isActive
                    ? "bg-neon text-black shadow-[0_0_20px_var(--neon)]"
                    : "text-muted-foreground hover:text-neon"
                }`}
                aria-label={it.label}
              >
                <Icon size={18} />
              </a>
              <span className="font-mono pointer-events-none absolute right-12 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md border border-border bg-popover px-2 py-1 text-xs text-foreground opacity-0 transition-opacity group-hover:opacity-100">
                {it.label}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}