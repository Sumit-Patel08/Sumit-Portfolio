import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Trophy,
  Target,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { ParticleBackground } from "@/components/ParticleBackground";
import { CustomCursor } from "@/components/CustomCursor";
import { VideoBackground } from "@/components/VideoBackground";

export const Route = createFileRoute("/coastal-threat")({
  head: () => ({
    meta: [
      { title: "Coastal Threat Alert System — Sumit Patel" },
      {
        name: "description",
        content: "Detailed case study of the Coastal Threat Alert System built for HackOut 2025 at DAIICT.",
      },
    ],
  }),
  component: CoastalThreatPage,
});

function CoastalThreatPage() {
  const techStack = [
    { category: "Core Technologies", items: ["AI", "IoT", "Satellite Data"] },
    { category: "Platform Architecture", items: ["Role-based Dashboards", "Real-time Alerts"] },
  ];

  const features = [
    {
      title: "5 Specialized Dashboards",
      description:
        "Features tailored interfaces for Disaster Management, City Governments, NGOs, Fisherfolk communities, and Civil Defence Teams via role-based access.",
    },
    {
      title: "Real-time Environmental Detection",
      description:
        "Actively monitors and detects sea-level rise, cyclones, and algal blooms using a combination of satellite data and intelligent analytics.",
    },
    {
      title: "Blue Carbon Ecosystem Protection",
      description:
        "Raises awareness and provides actionable intelligence to protect mangroves, wetlands, and seagrass from degradation and illegal dumping activities.",
    },
    {
      title: "Community Resilience Alerts",
      description:
        "Disseminates critical, real-time alerts across various community stakeholders to ensure rapid response and maximum safety.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden text-foreground pb-20">
      <VideoBackground />
      <ParticleBackground />
      <CustomCursor />

      {/* TOP NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-40 px-6 py-5 md:px-10 bg-black/40 backdrop-blur-md border-b border-white/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            to="/"
            hash="projects"
            className="font-mono flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-neon"
          >
            <ArrowLeft size={14} className="text-neon" />
            <span>[back_to_deployments]</span>
          </Link>

          <span className="font-mono hidden text-xs uppercase tracking-[0.25em] text-muted-foreground/80 md:inline">
            SYSTEM_ASSET // <span className="text-neon">COASTAL_THREAT</span>
          </span>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="mx-auto max-w-6xl px-6 pt-32 md:px-16">
        {/* HERO TITLE HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-6 md:p-8 mb-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] border border-white/5"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-neon flex items-center gap-2">
                <Trophy size={14} /> HackOut 2025 · DAIICT
              </p>
              <h1 className="text-3xl font-extrabold tracking-tight mt-2 md:text-5xl">
                Coastal <span className="text-neon text-glow">Threat Alert</span>
              </h1>
              <p className="font-mono mt-2 text-sm text-muted-foreground">
                AI + IoT + satellite-data platform protecting coastal ecosystems and communities
              </p>
            </div>
            <div className="flex flex-wrap gap-6 border-t border-white/5 pt-4 md:border-t-0 md:pt-0 font-mono text-xs text-muted-foreground">
              <div>
                <span className="block text-neon uppercase mb-1">// Event</span>
                <span className="text-foreground">HackOut 2025 at DAIICT Gandhinagar</span>
              </div>
              <div>
                <span className="block text-neon uppercase mb-1">// Theme</span>
                <span className="text-foreground">Blue Carbon & Green Hydrogen</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          {/* LEFT COLUMN: ABOUT, FEATURES, IMPACT */}
          <div className="space-y-10">
            {/* OVERVIEW */}
            <motion.section
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-2xl p-6 md:p-8"
            >
              <h2 className="text-xl font-bold flex items-center gap-3 border-b border-white/5 pb-4 mb-4">
                <Target size={20} className="text-neon" />
                <span>Project Overview</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                Built for HackOut 2025 at DAIICT Gandhinagar — a highly competitive hackathon with 4000+ registrations where only 250-300 teams were shortlisted for the rigorous offline round.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground mt-4">
                Responding directly to the critical theme of Blue Carbon and Green Hydrogen, the Coastal Threat Alert System is an integrated AI, IoT, and satellite-data platform engineered to safeguard vital coastal ecosystems from escalating environmental hazards.
              </p>
            </motion.section>

            {/* KEY FEATURES BUILT */}
            <motion.section
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-xl font-bold flex items-center gap-3 px-2">
                <CheckCircle2 size={20} className="text-neon" />
                <span>Platform Highlights</span>
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {features.map((feature, i) => (
                  <div key={i} className="glass-card rounded-xl p-5 hover:border-neon/40 transition-colors">
                    <p className="font-mono text-xs text-neon mb-2">// 0{i + 1}</p>
                    <h3 className="font-bold text-base text-foreground mb-2">{feature.title}</h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* THE IMPACT */}
            <motion.section
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-2xl p-6 md:p-8 bg-gradient-to-br from-neon/5 to-transparent border border-neon/20 shadow-[0_0_20px_rgba(255,255,255,0.02)]"
            >
              <h2 className="text-xl font-bold flex items-center gap-3 border-b border-white/5 pb-4 mb-4">
                <Sparkles size={20} className="text-neon" />
                <span>The Impact</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                By bridging the gap between disparate community groups and overarching disaster management teams, the platform significantly enhances localized response times. Its dedicated focus on Blue Carbon ecosystems not only protects lives but also ensures long-term environmental sustainability and climate action.
              </p>
            </motion.section>
          </div>

          {/* RIGHT COLUMN: TECH STACK */}
          <div className="space-y-10">
            {/* TECH STACK CARD */}
            <motion.section
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-2xl p-6 md:p-8"
            >
              <h2 className="text-lg font-bold font-mono text-neon mb-6">// Tech Stack Used</h2>
              <div className="space-y-6">
                {techStack.map((tech, i) => (
                  <div key={i} className="border-l border-neon/20 pl-4 py-1">
                    <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">
                      {tech.category}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {tech.items.map((item, idx) => (
                        <span
                          key={idx}
                          className="font-mono rounded border border-border bg-black/40 px-2.5 py-1 text-xs text-muted-foreground hover:border-neon hover:text-neon transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </main>
    </div>
  );
}
