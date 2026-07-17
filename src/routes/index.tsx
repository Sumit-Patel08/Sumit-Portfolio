import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { submitContactForm } from "@/lib/api/contact.functions";
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
  Medal,
  Flame,
  Send,
} from "lucide-react";
import { ParticleBackground } from "@/components/ParticleBackground";
import { CustomCursor } from "@/components/CustomCursor";
import { SideNav } from "@/components/SideNav";
import { TopNav } from "@/components/TopNav";
import { Terminal } from "@/components/Terminal";
import { BootLoader } from "@/components/BootLoader";
import { VideoBackground } from "@/components/VideoBackground";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sumit Patel — AI/ML Architect" },
      { name: "description", content: "Portfolio of Sumit Patel — AI/ML Architect, Fullstack Developer, Software Developer." },
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
    slug: "/mumbai-pulse",
  },
  {
    title: "Urban Intel AI",
    accolade: "1st Runner Up • Ingenius 7.0",
    desc: "Smart City Governance Platform featuring a Hybrid AI Architecture with 6 Random Forest Models and a Private Local LLM (TinyLlama).",
    tags: ["Generative AI", "ML", "Local LLM"],
    slug: "/urban-intel-ai",
  },
  {
    title: "TerraForge",
    accolade: "Top 8 • DotSlash 9.0",
    desc: "Environmental Intelligence OS running AI models locally to predict agricultural impacts and generate policy recommendations.",
    tags: ["GreenTech", "AI", "Real-time"],
    slug: "/terraforge",
  },
  {
    title: "AgriForge AI",
    accolade: "Top 40 • LJ Hackovate 2025",
    desc: "SSIP-funded platform predicting milk yield and detecting 15+ cattle diseases using Linear Regression and Classification models.",
    tags: ["FastAPI", "Next.js", "Supabase", "Scikit-learn"],
    slug: "/agriforge-ai",
  },
  {
    title: "Coastal Threat Alert System",
    accolade: "DAIICT HackOut 2025",
    desc: "AI + IoT platform to protect coastal ecosystems from sea-level rise, cyclones, and blue-carbon degradation.",
    tags: ["Blue Carbon", "IoT", "Full-Stack"],
    slug: "/coastal-threat",
  },
  {
    title: "Eunoia Homoeopathy",
    accolade: "Freelance Client",
    desc: "Comprehensive web solution with domain setup and seamless UX to establish a digital footprint for a medical business.",
    tags: ["Web Dev", "UI/UX", "Performance"],
    slug: "/eunoia-homoeopathy",
  },
];

const hackathons = [
  {
    title: "NASA Space Apps Challenge 2025",
    status: "Winner",
    details: "LOCAL EVENT • VALLABH VIDYANAGAR",
    project: "CityForge — Mumbai Pulse",
    desc: "AI system analyzing NASA datasets to monitor air quality, heat islands and environmental risks across Mumbai.",
    team: "Hell Boys • Aryan Buha, Sumit Patel, Krushit Prajapati, Patel Vrund",
    slug: "/mumbai-pulse",
    type: "Winner",
    icon: Trophy
  },
  {
    title: "Ingenius Hackathon 7.0",
    status: "1st Runner Up",
    details: "AHMEDABAD UNIVERSITY • 180+ TEAMS • 36-HOUR SPRINT",
    project: "Urban Intel AI",
    desc: "Smart City Governance Platform with Hybrid AI Architecture.",
    team: "Hell Boys",
    slug: "/urban-intel-ai",
    type: "Runner Up",
    icon: Medal
  },
  {
    title: "IBM AI Innovation Challenge 2026",
    status: "2nd Rank • Gujarat",
    details: "IBM × CSRBOX • IHUB AHMEDABAD",
    project: "AI for Agricultural Ecosystem",
    desc: "AI solution focused on strengthening India's agricultural ecosystem.",
    team: "Aryan Buha, Krushit Prajapati, Patel Vrund",
    slug: "",
    type: "Runner Up",
    icon: Medal
  },
  {
    title: "DotSlash 9.0",
    status: "Top 8 Finalist",
    details: "SVNIT SURAT • 550+ TEAMS • 30-HOUR NATIONAL HACKATHON",
    project: "TerraForge — Environmental Intelligence OS",
    desc: "AI platform for proactive environmental decisions for governments and farmers.",
    team: "Hell Boys",
    slug: "/terraforge",
    type: "Finalist",
    icon: Flame
  },
  {
    title: "Hackovate 2025",
    status: "Top 40 Finalist",
    details: "LJ UNIVERSITY • 240+ TEAMS",
    project: "AgriForge AI",
    desc: "SSIP-funded smart cattle health platform predicting milk yield and detecting diseases.",
    team: "Team",
    slug: "/agriforge-ai",
    type: "Finalist",
    icon: Flame
  },
  {
    title: "HackBaroda 2026 • Devnovate",
    status: "Finalist",
    details: "MSU BARODA • UPCOMING",
    project: "TBD",
    desc: "Selected for the final round of HackBaroda 2026. Continuing the mission to build impactful solutions.",
    team: "Team",
    slug: "",
    type: "Finalist",
    icon: Flame
  },
  {
    title: "HackOut 2025",
    status: "Shortlisted",
    details: "DAIICT GANDHINAGAR - 4000+ REGISTRATIONS - ~300 OFFLINE TEAMS",
    project: "Coastal Threat Alert System",
    desc: "Role-based multi-dashboard platform for coastal threat detection (Blue Carbon & Green Hydrogen track).",
    team: "Aryan Buha, Sumit Patel",
    slug: "/coastal-threat",
    type: "Participant",
    icon: Rocket
  },
  {
    title: "ISRO Bharatiya Antariksh Hackathon 2025",
    status: "Participant",
    details: "ISRO - HACK2SKILL",
    project: "Idea Submission",
    desc: "National-level ISRO initiative.",
    team: "",
    slug: "",
    type: "Participant",
    icon: Rocket
  },
  {
    title: "AI for Impact • Social Initiative",
    status: "Participant",
    details: "FIRST-EVER HACKATHON",
    project: "Idea Submission",
    desc: "Foundational experience that started the journey.",
    team: "",
    slug: "",
    type: "Participant",
    icon: Rocket
  }
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
  const [bootDone, setBootDone] = useState(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("bootDone") === "true";
    }
    return false;
  });
  const [activeFilter, setActiveFilter] = useState("All");

  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; msg: string } | null>(null);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const result = await submitContactForm({ data: formData });
      setSubmitStatus({ type: "success", msg: result.success ? result.message : "Message sent!" });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: any) {
      setSubmitStatus({ type: "error", msg: err.message || "Something went wrong." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBootComplete = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("bootDone", "true");
    }
    setBootDone(true);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden text-foreground">
      {!bootDone && <BootLoader onComplete={handleBootComplete} />}
      <VideoBackground />
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
              <div className="relative h-56 w-56 overflow-hidden rounded-full border-2 border-neon/60 bg-black">
                <img
                  src="/Sumit Profile pic copy.jpeg"
                  alt="Sumit Patel"
                  className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            <div className="flex flex-col items-start mt-6">
              <div className="font-mono flex items-center gap-2 text-base text-muted-foreground">
                <MapPin size={16} /> Vadodara, Gujarat, India
              </div>
              <ul className="mt-4 space-y-2 font-mono text-base text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-neon font-bold">•</span>
                  <a
                    href="https://github.com/Sumit-Patel08"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-neon"
                  >
                    GitHub: Sumit-Patel08
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-neon font-bold">•</span>
                  <a
                    href="https://linkedin.com/in/sumit-patel-25bb02339"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-neon"
                  >
                    LinkedIn -  Sumit Patel
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-neon font-bold">•</span>
                  <a
                    href="sumit.patel0809@gmail.com"
                    className="transition-colors hover:text-neon"
                  >
                    Gmail: sumit.patel0809@gmail.com
                  </a>
                </li>
              </ul>
              
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="/Sumit_Resume_Latex.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono flex items-center justify-center gap-2 rounded bg-neon px-6 py-2.5 text-sm font-bold text-black shadow-[0_0_15px_var(--neon)] transition-all hover:bg-neon/80 hover:shadow-[0_0_25px_var(--neon)]"
                >
                  <Briefcase size={16} /> Resume
                </a>
                <button
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="font-mono flex items-center justify-center gap-2 rounded border border-neon/50 px-6 py-2.5 text-sm font-bold text-neon transition-all hover:bg-neon/10"
                >
                  <Mail size={16} /> Contact Me
                </button>
              </div>
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl p-6 md:p-8 mb-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] border border-white/5 backdrop-blur-[8px]"
            >
              <p className="font-mono mb-3 text-sm text-neon">$ gcc identity.c -o identity &amp;&amp; ./identity</p>
              <h1 className="text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl">
                Sumit <span className="text-neon text-glow">Patel.</span>
              </h1>
              <p className="font-mono mt-4 text-sm text-muted-foreground md:text-base">
                AI/ML Architect <span className="text-neon">||</span> Fullstack Developer{" "}
                <span className="text-neon">||</span> Software Developer
              </p>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Architecting systems that solve real-world crises, pushing the boundaries of AI,
                and bridging the gap between theoretical knowledge and industry-ready
                implementation. 3rd Year CSE student building intelligent digital ecosystems.
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
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-neon/40 to-transparent" />
          <div className="space-y-12">
            {timeline.map((t, i) => {
              const Icon = t.icon;
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={t.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className="relative flex flex-col md:grid md:grid-cols-2 gap-8"
                >
                  <div className={`w-full pl-12 md:pl-0 ${left ? "md:pr-8 md:text-right" : "md:col-start-2 md:pl-8"}`}>
                    <div className="glass-card glass-card-hover rounded-xl p-5">
                      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neon/80">{t.chapter}</p>
                      <h3 className="mt-2 font-mono text-sm text-neon">{t.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2">
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

      {/* HACKATHONS */}
      <Section
        id="hackathons"
        kicker="// 04"
        title="Hackathons & Achievements"
        subtitle="From a first idea submission to winning NASA Space Apps and ranking 2nd across Gujarat in IBM's AI challenge."
      >
        <div className="mb-8 flex flex-col gap-4">
          <p className="font-mono text-sm font-semibold text-foreground">
            <span className="text-neon">9</span> Hackathons - <span className="text-neon">1</span> Win - <span className="text-neon">2</span> Runner Up - <span className="text-neon">3</span> Finalist - <span className="text-muted-foreground">3</span> Participant
          </p>
          <div className="flex flex-wrap gap-3">
            {['All', 'Winner', 'Runner Up', 'Finalist', 'Participant'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`font-mono flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs transition-colors ${
                  activeFilter === filter
                    ? "border-neon bg-neon/10 text-neon"
                    : "border-border/60 bg-black/40 text-muted-foreground hover:border-neon/50 hover:text-foreground"
                }`}
              >
                {filter === 'Winner' && <Trophy size={12} />}
                {filter === 'Runner Up' && <Medal size={12} />}
                {filter === 'Finalist' && <Flame size={12} />}
                {filter === 'Participant' && <Rocket size={12} />}
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {hackathons
            .filter((h) => activeFilter === "All" || h.type === activeFilter)
            .map((h, i) => {
              const Icon = h.icon;
              const cardContent = (
                <>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 bg-black/40 shadow-sm">
                        <Icon size={18} className={
                          h.type === 'Winner' ? 'text-yellow-500' :
                          h.type === 'Runner Up' ? 'text-zinc-300' :
                          h.type === 'Finalist' ? 'text-orange-500' : 'text-neon'
                        } />
                      </div>
                      <span className={`font-mono text-[10px] font-semibold px-3 py-1 rounded-full ${
                        h.type === 'Winner' ? 'bg-yellow-500/10 text-yellow-500' :
                        h.type === 'Runner Up' ? 'bg-zinc-100 text-zinc-900' :
                        h.type === 'Finalist' ? 'bg-orange-500/10 text-orange-500' : 'bg-neon/10 text-neon'
                      }`}>
                        {h.status}
                      </span>
                    </div>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-foreground">{h.title}</h3>
                  <p className="font-mono mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">{h.details}</p>
                  
                  <div className="mt-4">
                    <p className="font-semibold text-foreground text-sm">Project: {h.project}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{h.desc}</p>
                  </div>
                  
                  {h.team && (
                    <div className="mt-4 flex items-center gap-2">
                      <Users size={14} className="text-muted-foreground/70" />
                      <p className="font-mono text-[10px] text-muted-foreground">{h.team}</p>
                    </div>
                  )}
                  
                  <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-muted-foreground transition-colors group-hover:text-neon">
                    View Details <ExternalLink size={14} />
                  </div>
                </>
              );

              if (h.slug) {
                return (
                  <Link
                    key={h.title}
                    to={h.slug}
                    className="block h-full cursor-pointer"
                  >
                    <motion.article
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      className="glass-card glass-card-hover group relative flex flex-col rounded-2xl p-6 h-full text-left"
                    >
                      {cardContent}
                    </motion.article>
                  </Link>
                );
              }

              return (
                <motion.article
                  key={h.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="glass-card glass-card-hover group relative flex flex-col rounded-2xl p-6 h-full"
                >
                  {cardContent}
                </motion.article>
              );
            })}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section
        id="projects"
        kicker="// 05"
        title="Deployed Assets"
        subtitle="Selected systems shipped into the wild."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const cardContent = (
              <>
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
              </>
            );

            if (p.slug) {
              return (
                <Link
                  key={p.title}
                  to={p.slug}
                  className="block h-full cursor-pointer"
                >
                  <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="glass-card glass-card-hover group relative flex flex-col rounded-2xl p-6 h-full text-left"
                  >
                    {cardContent}
                  </motion.article>
                </Link>
              );
            }

            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="glass-card glass-card-hover group relative flex flex-col rounded-2xl p-6 h-full"
              >
                {cardContent}
              </motion.article>
            );
          })}
        </div>
      </Section>

      {/* CONTACT */}
      <Section
        id="contact"
        kicker="// 06"
        title="Let's Build Something Together"
        subtitle="Whether it's a collaboration, project idea, opportunity, or just a conversation about AI — I'd love to hear from you."
      >
        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1.5fr]">
          <div className="flex flex-col gap-4">
            {[
              { icon: Mail, label: "EMAIL", value: "sumit.patel0809@gmail.com", href: "mailto:sumit.patel0809@gmail.com" },
              { icon: Linkedin, label: "LINKEDIN", value: "linkedin.com/in/sumit-patel-25bb02339", href: "https://linkedin.com/in/sumit-patel-25bb02339" },
              { icon: Github, label: "GITHUB", value: "github.com/Sumit-Patel08", href: "https://github.com/Sumit-Patel08" },
              { icon: MapPin, label: "LOCATION", value: "Vadodara, Gujarat, India", href: null },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href || "#"}
                target={item.href ? "_blank" : undefined}
                rel="noreferrer"
                className={`glass-card flex items-center gap-4 rounded-xl p-4 transition-all hover:bg-white/5 ${!item.href && "cursor-default hover:bg-transparent"}`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neon/10 text-neon">
                  <item.icon size={18} />
                </div>
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{item.label}</p>
                  <p className="font-semibold text-sm text-foreground mt-0.5 break-all">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          <form className="glass-card flex flex-col gap-6 rounded-2xl p-6 md:p-8" onSubmit={handleContactSubmit}>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">YOUR NAME</label>
                <input required type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="John Doe" className="rounded-lg border border-border/50 bg-black/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon" disabled={isSubmitting} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">YOUR EMAIL</label>
                <input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="you@example.com" className="rounded-lg border border-border/50 bg-black/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon" disabled={isSubmitting} />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">SUBJECT</label>
              <input type="text" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} placeholder="Let's collaborate on..." className="rounded-lg border border-border/50 bg-black/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon" disabled={isSubmitting} />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">MESSAGE</label>
              <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell me about your idea, project or opportunity..." className="resize-none rounded-lg border border-border/50 bg-black/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon" disabled={isSubmitting} />
            </div>

            <button type="submit" disabled={isSubmitting} className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-neon px-6 py-3 text-sm font-bold text-black transition-all hover:bg-neon/80 disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? "Sending..." : "Send Message"} {!isSubmitting && <Send size={16} />}
            </button>
            {submitStatus && (
              <p className={`text-sm mt-2 font-semibold ${submitStatus.type === "success" ? "text-green-500" : "text-red-500"}`}>
                {submitStatus.msg}
              </p>
            )}
          </form>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-border/50 px-6 py-10 md:px-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-mono text-xs text-muted-foreground">
            <span className="text-neon">{">_"}</span> return 0; // Sumit Patel // Handcrafted
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
