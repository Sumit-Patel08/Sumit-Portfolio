import { TerminalSquare } from "lucide-react";

const links = [
  { href: "#home", label: "./home" },
  { href: "#projects", label: "./deployments" },
  { href: "#arsenal", label: "./arsenal" },
  { href: "#chronology", label: "./chronology" },
];

export function TopNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-6 py-5 md:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#home" className="font-mono flex items-center gap-2 text-sm font-semibold tracking-wider text-foreground">
          <TerminalSquare size={18} className="text-foreground" />
          <span>SP.SYS</span>
        </a>
        <nav className="hidden items-center gap-1 rounded-full border border-border bg-card/30 px-2 py-1.5 backdrop-blur-md md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono rounded-full px-4 py-1.5 text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="w-[110px]" aria-hidden />
      </div>
    </header>
  );
}