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

export const Route = createFileRoute("/terraforge")({
  head: () => ({
    meta: [
      { title: "TerraForge — Sumit Patel" },
      {
        name: "description",
        content: "Detailed case study of TerraForge, an Environmental Intelligence OS with local AI models.",
      },
    ],
  }),
  component: TerraForgePage,
});

function TerraForgePage() {
  const techStack = [
    { category: "Core AI & ML", items: ["Local AI Models", "Multilingual Voice AI"] },
    { category: "Backend & Logic", items: ["Python"] },
    { category: "Data Integrations", items: ["Environmental Data APIs"] },
  ];

  const features = [
    {
      title: "Local AI Processing",
      description:
        "AI models run entirely locally for ultra-low cost, enhanced privacy preservation, and robust offline capability in rural areas.",
    },
    {
      title: "Real-time Risk Prediction",
      description:
        "Actively predicts environmental risks and agricultural impacts using live, continuous data streams.",
    },
    {
      title: "Multilingual Voice Assistance",
      description:
        "Empowers rural users and farmers with seamless accessibility through voice assistance in regional Indian languages.",
    },
    {
      title: "Policy Recommendations",
      description:
        "Generates data-driven policy recommendations specifically tailored for government bodies to enable proactive decision-making.",
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
            SYSTEM_ASSET // <span className="text-neon">TERRAFORGE</span>
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
                <Trophy size={14} /> DotSlash 9.0 Top 8 Finalist
              </p>
              <h1 className="text-3xl font-extrabold tracking-tight mt-2 md:text-5xl">
                Terra<span className="text-neon text-glow">Forge</span>
              </h1>
              <p className="font-mono mt-2 text-sm text-muted-foreground">
                Environmental intelligence OS with local AI models for governments and farmers
              </p>
            </div>
            <div className="flex flex-wrap gap-6 border-t border-white/5 pt-4 md:border-t-0 md:pt-0 font-mono text-xs text-muted-foreground">
              <div>
                <span className="block text-neon uppercase mb-1">// Event</span>
                <span className="text-foreground">DotSlash 9.0 Hackathon (SVNIT Surat)</span>
              </div>
              <div>
                <span className="block text-neon uppercase mb-1">// Award</span>
                <span className="text-foreground">Top 8 Finalist (550+ teams)</span>
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
                TerraForge — Environmental Intelligence OS was built for DotSlash 9.0 at SVNIT Surat, an intense 30-hour national hackathon featuring 550+ competing teams, where it proudly reached the Top 8 Finals.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground mt-4">
                TerraForge is an AI-powered platform fundamentally designed to help both governments and farmers make proactive, data-driven decisions using real-time environmental intelligence. By bridging the gap between high-end environmental data and grassroots stakeholders, it functions as a crucial digital asset for climate resilience.
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
                By making advanced AI models run locally, TerraForge breaks the dependency on constant internet connectivity and expensive cloud computing, paving the way for tech accessibility in the deepest rural sectors. It stands as a scalable testament to leveraging technology for social good, agriculture preservation, and smart policymaking.
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

            {/* SCREENSHOTS GALLERY */}
            <motion.section
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-lg font-bold font-mono text-neon px-2">// Platform Preview (Screenshots)</h2>
              <div className="space-y-6">
                {[
                  {
                    src: "/terraforge-hero.png",
                    title: "See the Invisible Connections",
                    desc: "Landing hero tracing how wildfires cascade through air quality, agriculture, livestock, and local economies in real time.",
                  },
                  {
                    src: "/terraforge-features.png",
                    title: "Built for Decision Makers",
                    desc: "Platform features grid — geospatial intelligence, causal cascade modeling, what-if simulations, and AI forecasting.",
                  },
                ].map((shot, idx) => (
                  <div key={idx} className="glass-card overflow-hidden rounded-2xl border border-white/5 group">
                    <div className="overflow-hidden aspect-video relative bg-black/50">
                      <img
                        src={shot.src}
                        alt={shot.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4 border-t border-white/5 font-mono">
                      <h3 className="text-xs text-neon uppercase font-semibold">{shot.title}</h3>
                      <p className="text-[11px] text-muted-foreground mt-1 font-sans">{shot.desc}</p>
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
