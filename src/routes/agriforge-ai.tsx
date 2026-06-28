import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Target,
  Sparkles,
  Heart,
  CheckCircle2,
} from "lucide-react";
import { ParticleBackground } from "@/components/ParticleBackground";
import { CustomCursor } from "@/components/CustomCursor";
import { VideoBackground } from "@/components/VideoBackground";

export const Route = createFileRoute("/agriforge-ai")({
  head: () => ({
    meta: [
      { title: "AgriForge AI — Sumit Patel" },
      {
        name: "description",
        content: "Detailed case study of AgriForge — KrishiMitra, an AI-powered agricultural intelligence platform.",
      },
    ],
  }),
  component: AgriForgePage,
});

function AgriForgePage() {
  const techStack = [
    { category: "Core AI & Models", items: ["EfficientNet", "Python", "Multilingual NLP"] },
    { category: "User Interface", items: ["Voice AI", "Text Interfaces", "Multilingual"] },
    { category: "Infrastructure", items: ["Cloud Hosting"] },
  ];

  const features = [
    {
      title: "Real-time Crop Disease Detection",
      description:
        "Integrates EfficientNet for real-time crop disease detection directly from images taken by farmers on their phones, allowing instant diagnostics.",
    },
    {
      title: "Multilingual Voice AI",
      description:
        "Ensures accessibility for rural users who may not be literate or comfortable with text-based interfaces, providing round-the-clock support in 10+ regional languages.",
    },
    {
      title: "Intelligent Agricultural Support",
      description:
        "An AI-powered agricultural platform designed to provide constant intelligent support to Indian farmers through seamless interactions.",
    },
    {
      title: "Government Funded Recognition",
      description:
        "Awarded Rs. 2.43 Lakh in research funding under the SSIP — Student Startup and Innovation Policy by the Government of Gujarat, validating its real-world potential and social impact.",
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
            SYSTEM_ASSET // <span className="text-neon">AGRIFORGE_AI</span>
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
              <p className="font-mono text-xs uppercase tracking-widest text-neon">🟢 Active · Pilot Stage</p>
              <h1 className="text-3xl font-extrabold tracking-tight mt-2 md:text-5xl">
                AgriForge — <span className="text-neon text-glow">KrishiMitra</span>
              </h1>
              <p className="font-mono mt-2 text-sm text-muted-foreground">
                AI-powered agricultural intelligence platform for Indian farmers
              </p>
            </div>
            <div className="flex flex-wrap gap-6 border-t border-white/5 pt-4 md:border-t-0 md:pt-0 font-mono text-xs text-muted-foreground">
              <div>
                <span className="block text-neon uppercase mb-1">// Funding</span>
                <span className="text-foreground">💰 Rs. 2.43L SSIP Government Funded</span>
              </div>
              <div>
                <span className="block text-neon uppercase mb-1">// Role</span>
                <span className="text-foreground">AI/ML Architect</span>
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
                AgriForge — KrishiMitra is my most impactful project to date. It is an AI-powered agricultural platform designed to provide round-the-clock intelligent support to Indian farmers in 10+ regional languages through both voice and text interfaces.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground mt-4">
                This project is currently in its pilot stage and actively being developed, setting the foundation for robust, accessible tech-driven farming support.
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
                By bridging the literacy and technology gap in rural India, AgriForge empowers farmers with intelligent diagnostics and real-time support. Earning government recognition and funding, the project validates its potential to meaningfully improve livelihoods and farming efficiency across the country.
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
