import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Trophy,
  Target,
  Sparkles,
  CheckCircle2,
  Users,
} from "lucide-react";
import { rememberProjectsSection } from "@/lib/home-scroll";
import { ParticleBackground } from "@/components/ParticleBackground";
import { CustomCursor } from "@/components/CustomCursor";
import { VideoBackground } from "@/components/VideoBackground";

export const Route = createFileRoute("/sasya-ai")({
  head: () => ({
    meta: [
      { title: "Sasya AI — Sumit Patel" },
      {
        name: "description",
        content:
          "Detailed case study of Sasya AI, the AI-powered agriculture platform that won 1st Position at TetraTHON 2026, the Indo-French international hackathon.",
      },
    ],
  }),
  component: SasyaAIPage,
});

function SasyaAIPage() {
  const techStack = [
    { category: "Backend & APIs", items: ["Python 3.11", "FastAPI", "Open-Meteo", "Agmarknet"] },
    { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
    { category: "AI & Computer Vision", items: ["PyTorch", "EfficientNet CNN", "Gemini Flash"] },
    { category: "Conversational Access", items: ["Live Voice Calling", "WhatsApp Chatbot", "Indic Languages"] },
  ];

  const features = [
    {
      title: "Live Voice & WhatsApp Access",
      description:
        "Farmers reach the platform through a live voice call or a WhatsApp chatbot in their own language, so advisory works even with low digital literacy and no app install.",
    },
    {
      title: "Multi-Input Crop Advisory",
      description:
        "Generates three ranked seven-day advisories for irrigation, fertilizer, and pest control using location, crop type, sowing date, live weather, and optional leaf photos.",
    },
    {
      title: "Leaf Disease Detection",
      description:
        "A local EfficientNet CNN classifies plant disease across 118 classes directly from a leaf image, running on our own model rather than an external vision API.",
    },
    {
      title: "Market Intelligence",
      description:
        "Agmarknet integration models Mandi prices, spoilage curves, and transport costs to attack the fifteen to twenty percent of produce lost after harvest.",
    },
    {
      title: "Sell, Store or Transport",
      description:
        "A deterministic decision engine recommends the optimal post-harvest action with an expected return projection behind every recommendation.",
    },
    {
      title: "Grounded Generative Rationale",
      description:
        "Gemini Flash rewrites engine output into clear, localized, farmer-facing language while prices and diagnoses stay pinned to real data, never invented.",
    },
  ];

  const team = ["Sumit Patel", "Krushit Prajapati", "Neel Prajapati", "Patel Vrund"];

  const gallery = [
    {
      src: "/sasya-ai-award-stage.jpg",
      title: "Prize Ceremony • TetraTHON 2026",
      desc: "Team Hell Boys receiving the winner's cheque on stage at the Indo-French AI Innovation Sprint, hosted by Navrachana University.",
    },
    {
      src: "/sasya-ai-award-cheque.jpg",
      title: "Winner • One Lakh Rupees",
      desc: "The 1,00,000 rupee winner's cheque awarded to Team Hell Boys on 7 August 2026, backed by SSIP and the Navrachana Innovation Foundation.",
    },
    {
      src: "/sasya-ai-workflow.png",
      title: "End-to-End Intelligent Workflow",
      desc: "From farmer inputs through the AI processing and model context layers to the seven-day advisory, post-harvest planner and alerts.",
    },
    {
      src: "/sasya-ai-diagnosis.png",
      title: "Crop Disease Diagnosis",
      desc: "A leaf photo returns the diagnosis, a confidence score and both chemical and organic treatment paths, sourced from the ICAR and KVK knowledge base.",
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
            onClick={rememberProjectsSection}
            className="font-mono flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-neon"
          >
            <ArrowLeft size={14} className="text-neon" />
            <span>[back_to_deployments]</span>
          </Link>

          <span className="font-mono hidden text-xs uppercase tracking-[0.25em] text-muted-foreground/80 md:inline">
            SYSTEM_ASSET // <span className="text-neon">SASYA_AI</span>
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
                <Trophy size={14} /> TetraTHON 2026 Winner
              </p>
              <h1 className="text-3xl font-extrabold tracking-tight mt-2 md:text-5xl">
                Sasya <span className="text-neon text-glow">AI</span>
              </h1>
              <p className="font-mono mt-2 text-sm text-muted-foreground">
                AI-powered agriculture platform bringing voice-first advisory to smallholder farmers
              </p>
            </div>
            <div className="flex flex-wrap gap-6 border-t border-white/5 pt-4 md:border-t-0 md:pt-0 font-mono text-xs text-muted-foreground">
              <div>
                <span className="block text-neon uppercase mb-1">// Event</span>
                <span className="text-foreground">TetraTHON 2026 — Indo-French</span>
              </div>
              <div>
                <span className="block text-neon uppercase mb-1">// Award</span>
                <span className="text-foreground">1st Position • 160+ Teams</span>
              </div>
              <div>
                <span className="block text-neon uppercase mb-1">// Date</span>
                <span className="text-foreground">7 August 2026</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          {/* LEFT COLUMN: ABOUT, TECH STACK, FEATURES, IMPACT */}
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
                Sasya AI is an AI-powered agriculture platform built by Team Hell Boys for TetraTHON 2026, the Indo-French international hackathon hosted by NeoFolks and Navrachana University, where it secured 1st Position among 160+ competing teams.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground mt-4">
                Smallholder farmers, who work under two hectares and make up roughly 85 percent of all farmers, rarely get advisory tuned to their own field. India loses another fifteen to twenty percent of produce after harvest to gaps in storage and market intelligence. Sasya AI closes both gaps at once with ranked seven-day crop advisories and data-driven sell, store, or transport decisions.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground mt-4">
                The platform reaches farmers and plant owners the way they already communicate, through live voice calling and a WhatsApp chatbot in local languages, backed by disease detection from a leaf photo and Mandi price intelligence.
              </p>
            </motion.section>

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
                The whole system runs on free open data, a locally hosted vision model, and deterministic agronomy and market engines, so it scales without per-farmer inference cost. Voice and Indic-language delivery removes the literacy barrier that keeps most advisory apps unused. The first prize at an international hackathon validated the problem we chose as much as the build itself, and Sasya AI continues past the event as an ongoing product.
              </p>
            </motion.section>
          </div>

          {/* RIGHT COLUMN: GALLERY & TEAM */}
          <div className="space-y-10">
            {/* GALLERY */}
            <motion.section
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-lg font-bold font-mono text-neon px-2">// Gallery</h2>
              <div className="space-y-6">
                {gallery.map((shot) => (
                  <div key={shot.src} className="glass-card overflow-hidden rounded-2xl border border-white/5 group">
                    <div className="overflow-hidden relative bg-black/50">
                      <img
                        src={shot.src}
                        alt={shot.title}
                        className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
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

            {/* TEAM CARD */}
            <motion.section
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-2xl p-6 md:p-8"
            >
              <h2 className="text-lg font-bold font-mono text-neon mb-6 flex items-center gap-2">
                <Users size={16} /> // Team Hell Boys
              </h2>
              <ul className="space-y-3">
                {team.map((member) => (
                  <li key={member} className="font-mono flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-neon font-bold">•</span>
                    {member}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-white/5 pt-4 text-xs leading-relaxed text-muted-foreground">
                Hosted by NeoFolks and Navrachana University, built while studying at The Maharaja Sayajirao University of Baroda.
              </p>
            </motion.section>
          </div>
        </div>
      </main>
    </div>
  );
}
