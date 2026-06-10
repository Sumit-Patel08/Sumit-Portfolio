import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Trophy,
  Rocket,
  GraduationCap,
  Users,
  ExternalLink,
  Gamepad2,
  Building2,
  Leaf,
  Briefcase,
  Target,
} from "lucide-react";
import { ParticleBackground } from "@/components/ParticleBackground";
import { CustomCursor } from "@/components/CustomCursor";
import { SideNav } from "@/components/SideNav";
import { TopNav } from "@/components/TopNav";
import { Terminal } from "@/components/Terminal";
import { BootLoader } from "@/components/BootLoader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sumit Patel — AI/ML Architect" },
      { name: "description", content: "Portfolio of Sumit Patel — AI/ML Architect, Backend Developer, Smart City Innovator." },
      { property: "og:title", content: "Sumit Patel — AI/ML Architect" },
      { property: "og:description", content: "Architecting intelligent digital ecosystems with AI, FastAPI, and Next.js." },
    ],
  }),
  component: Index,
});

const projects = [
  {
    title: "Mumbai Pulse (CityForge)",
    accolade: "Winner • NASA Space Apps 2025",
    desc: "Real-time environmental health dashboard integrating NASA Earth Observation data to monitor urban heat, air quality, and water resources.",
    tags: ["Next.js", "Flask", "Leaflet", "NASA EO", "Meteomatics"],
  },
  {
    title: "Urban Intel AI",
    accolade: "1st Runner Up • Ingenius 7.0",
    desc: "Smart City Governance Platform featuring a Hybrid AI Architecture with 6 Random Forest Models and a Private Local LLM (TinyLlama).",
    tags: ["Generative AI", "ML", "Local LLM"],
  },
  {
    title: "TerraForge",
    accolade: "Top 8 • DotSlash 9.0",
    desc: "Environmental Intelligence OS running AI models locally to predict agricultural impacts and generate policy recommendations.",
    tags: ["GreenTech", "AI", "Real-time"],
  },
  {
    title: "AgriForge AI",
    accolade: "Top 40 • LJ Hackovate 2025",
    desc: "SSIP-funded platform predicting milk yield and detecting 15+ cattle diseases using Linear Regression and Classification models.",
    tags: ["FastAPI", "Next.js", "Supabase", "Scikit-learn"],
  },
  {
    title: "Coastal Threat Alert System",
    accolade: "DAIICT HackOut 2025",
    desc: "AI + IoT platform to protect coastal ecosystems from sea-level rise, cyclones, and blue-carbon degradation.",
    tags: ["Blue Carbon", "IoT", "Full-Stack"],
  },
  {
    title: "Eunoia Homoeopathy",
    accolade: "Freelance Client",
    desc: "Comprehensive web solution with domain setup and seamless UX to establish a digital footprint for a medical business.",
    tags: ["Web Dev", "UI/UX", "Performance"],
  },
];

const timeline = [
  {
    icon: GraduationCap,
    chapter: "01 // The Foundation",
    title: "Academic Roots & MSU Baroda",
    desc: "Achieved 99.93 PR and 94% in 12th standard, paving the way to pursue Computer Science Engineering at The Maharaja Sayajirao University of Baroda (Class of 2028). Began the journey of bridging theoretical CS with real-world application.",
  },
  {
    icon: Gamepad2,
    chapter: "02 // Early Builds & Rapid Prototyping",
    title: "First Hackathons & Game Jams",
    desc: "Secured 4th position at the ITM University GameJam with the voice-controlled survival game \"Scream to Survive.\" Followed up by competing at DAIICT HackOut 2025, building a Coastal Threat Alert System leveraging AI and satellite data to protect blue carbon ecosystems.",
  },
  {
    icon: Trophy,
    chapter: "03 // The First Major Victory",
    title: "Champions at NASA Space Apps 2025",
    desc: "Emerged as Champions at the NASA Space Apps Challenge 2025 (Local Event) with Team Hell Boys. Built \"Mumbai Pulse,\" a real-time environmental dashboard integrating NASA Earth Observation data to monitor urban health and extreme heat.",
  },
  {
    icon: Building2,
    chapter: "04 // Advancing Smart City AI",
    title: "Ingenius Hackathon 7.0",
    desc: "Secured 1st Runner-Up among 180+ teams at Ahmedabad University's Ingenius Hackathon 7.0. Engineered \"Urban Intel AI,\" a Smart City Governance Platform featuring a Hybrid AI Architecture and a Private Local LLM (TinyLlama) for high-precision urban risk forecasting.",
  },
  {
    icon: Leaf,
    chapter: "05 // Innovating AgriTech",
    title: "LJ Hackovate 2025",
    desc: "Selected as a Top 40 Finalist out of 240+ teams at LJ Hackovate 2025. Built \"AgriForge AI,\" an SSIP-funded smart cattle health platform that utilizes machine learning to predict milk yield and detect over 15 diseases.",
  },
  {
    icon: Rocket,
    chapter: "06 // Competing at Scale",
    title: "DotSlash 9.0 Hackathon",
    desc: "Selected as a Top 8 Finalist out of 550+ teams at the 30-hour DotSlash 9.0 Hackathon at SVNIT Surat. Developed \"TerraForge,\" an Environmental Intelligence OS that runs AI models locally to predict climate risks and generate policy recommendations.",
  },
  {
    icon: Briefcase,
    chapter: "07 // Real-World Client Deployment",
    title: "Digital Transformation & Freelance",
    desc: "Successfully built and deployed a comprehensive digital solution for Eunoia Homoeopathy. Handled end-to-end development, from UI/UX and performance optimization to domain and hosting setup, establishing a robust online presence for the medical business.",
  },
  {
    icon: Target,
    chapter: "08 // The Current Frontier",
    title: "Eyes on HackBaroda 2026",
    desc: "Selected for the final round of HackBaroda 2026. Continuing the mission to build impactful, scalable, and intelligent digital ecosystems alongside brilliant teammates.",
  },
];

const skills = [
  { label: "Languages", items: ["C", "C++", "Java", "Python", "TypeScript", "HTML5"] },
  { label: "Frontend", items: ["React 18", "Next.js 14", "Tailwind CSS", "Shadcn/UI"] },
  { label: "Backend & DB", items: ["FastAPI", "Flask", "Node.js", "PostgreSQL", "Supabase"] },
  { label: "AI & Analytics", items: ["Scikit-learn", "Pandas", "NumPy", "Generative AI", "Local LLMs"] },
  { label: "Tools", items: ["Git", "Leaflet", "Esri / ArcGIS"] },
];

function Index() {
  const [bootDone, setBootDone] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {!bootDone && <BootLoader onComplete={() => setBootDone(true)} />}
      <ParticleBackground />
      <CustomCursor />
      <TopNav />
      <SideNav />

      {/* HERO */}
      <section id="home" className="relative flex min-h-screen items-center px-6 pb-24 pt-32 md:px-16">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center"
          >
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-neon/20 blur-2xl" />
              <div className="relative h-56 w-56 overflow-hidden rounded-full border-2 border-neon/60 bg-gradient-to-br from-neon/20 to-transparent">
                <div className="flex h-full w-full items-center justify-center font-mono text-6xl font-bold text-neon">
                  SP
                </div>
              </div>
              <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-border bg-black/80 px-3 py-1.5 backdrop-blur">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
                </span>
                <span className="font-mono text-xs text-foreground">Online</span>
              </div>
            </div>
            <div className="font-mono mt-6 flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin size={12} /> Vadodara, India
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-mono mb-3 text-sm text-neon">$ ./initialize_identity --user sumit</p>
              <h1 className="text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl">
                Sumit <span className="text-neon text-glow">Patel.</span>
              </h1>
              <p className="font-mono mt-4 text-sm text-muted-foreground md:text-base">
                AI/ML Architect <span className="text-neon">||</span> Backend Developer{" "}
                <span className="text-neon">||</span> Smart City Innovator{" "}
                <span className="text-neon">||</span> Tech Storyteller
              </p>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Architecting systems that solve real-world crises, pushing the boundaries of AI,
                and bridging the gap between theoretical knowledge and industry-ready
                implementation. 2nd Year CSE student building intelligent digital ecosystems.
              </p>
            </motion.div>

            <div className="mt-8">
              <Terminal />
            </div>
          </div>
        </div>
      </section>

      {/* ARSENAL */}
      <Section
        id="arsenal"
        kicker="// 02"
        title="Technical Arsenal"
        subtitle="The toolchain powering every deployment."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((g) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="glass-card glass-card-hover rounded-2xl p-6"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-neon">{g.label}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="font-mono rounded-full border border-border bg-black/40 px-3 py-1 text-xs text-foreground transition-colors hover:border-neon hover:text-neon"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CHRONOLOGY */}
      <Section
        id="chronology"
        kicker="// 03"
        title="The Engineering Journey"
        subtitle="A chronology of builds, wins, and lessons."
      >
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-neon/40 to-transparent" />
          <div className="space-y-12">
            {timeline.map((t, i) => {
              const Icon = t.icon;
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={t.title}
                  initial={{ opacity: 0, x: left ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative grid grid-cols-2 gap-8 ${left ? "" : ""}`}
                >
                  <div className={left ? "pr-8 text-right" : "col-start-2 pl-8"}>
                    <div className="glass-card glass-card-hover rounded-xl p-5">
                      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neon/80">{t.chapter}</p>
                      <h3 className="mt-2 font-mono text-sm text-neon">{t.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 top-6 -translate-x-1/2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-neon bg-black shadow-[0_0_20px_var(--neon)]">
                      <Icon size={16} className="text-neon" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section
        id="projects"
        kicker="// 04"
        title="Deployed Assets"
        subtitle="Selected systems shipped into the wild."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass-card glass-card-hover group relative flex flex-col rounded-2xl p-6"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-neon">
                  {p.accolade}
                </span>
                <ExternalLink
                  size={14}
                  className="text-muted-foreground transition-colors group-hover:text-neon"
                />
              </div>
              <h3 className="mt-3 text-xl font-semibold text-foreground">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono rounded border border-border/60 bg-black/40 px-2 py-0.5 text-[10px] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-border/50 px-6 py-10 md:px-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-mono text-xs text-muted-foreground">
            <span className="text-neon">{">_"}</span> SYSTEM_SHUTDOWN // Sumit Patel // Handcrafted
            with Code and Coffee.
          </p>
          <div className="flex items-center gap-3">
            {[
              { Icon: Github, href: "https://github.com" },
              { Icon: Linkedin, href: "https://linkedin.com" },
              { Icon: Mail, href: "mailto:hello@sumit.dev" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-neon hover:text-neon hover:shadow-[0_0_15px_var(--neon)]"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

function Section({
  id,
  kicker,
  title,
  subtitle,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative px-6 py-28 md:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">{kicker}</p>
          <h2 className="font-display mt-3 text-5xl leading-[1.05] tracking-tight text-foreground md:text-6xl">
            {title}
          </h2>
          <p className="font-mono mt-3 text-sm text-muted-foreground">{subtitle}</p>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
