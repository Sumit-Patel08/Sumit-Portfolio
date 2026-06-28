import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Briefcase,
  Globe,
  Layout,
  Server,
  Database,
  Cloud,
  CheckCircle2,
  Heart,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { ParticleBackground } from "@/components/ParticleBackground";
import { CustomCursor } from "@/components/CustomCursor";
import { VideoBackground } from "@/components/VideoBackground";

export const Route = createFileRoute("/eunoia-homoeopathy")({
  head: () => ({
    meta: [
      { title: "Eunoia Homoeopathy Showcase — Sumit Patel" },
      {
        name: "description",
        content: "Detailed case study of the healthcare clinic website built for Eunoia Homoeopathy by Sumit Patel.",
      },
    ],
  }),
  component: EunoiaHomoeopathyPage,
});

function EunoiaHomoeopathyPage() {
  const techStack = [
    { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "Responsive Design"] },
    { category: "Optimization & SEO", items: ["SEO Best Practices", "Local SEO (Google Maps)", "Schema Markup"] },
    { category: "Deployment", items: ["Netlify", "Custom Domain Setup", "Web Performance Tuning"] },
  ];

  const features = [
    {
      title: "Comprehensive Services Catalog",
      description:
        "Developed a structured, easy-to-navigate layout detailing 12+ medical specializations (including Respiratory Care, Dermatology, and Neurological Disorders) to educate visitors on the clinic's expertise.",
    },
    {
      title: "Trust & Social Proof Integration",
      description:
        "Engineered a dynamic testimonial section to showcase patient success stories and an interactive FAQ module to address common patient concerns regarding homeopathic treatments.",
    },
    {
      title: "Conversion-Optimized UX",
      description:
        "Implemented clear, strategically placed 'Book Appointment' calls-to-action (CTAs) and integrated location tracking for the Gotri clinic to drive patient footfall and streamline appointment scheduling.",
    },
    {
      title: "Patient-Centric UI",
      description:
        "Crafted a clean, soothing, and highly responsive user interface that reflects the 'gentle and holistic' nature of the clinic's brand identity.",
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
            SYSTEM_ASSET // <span className="text-neon">EUNOIA_HOMOEOPATHY</span>
          </span>

          <a
            href="https://www.eunoiahomoeopathy.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 rounded-full border border-neon bg-black/60 px-4 py-1.5 text-xs font-mono tracking-wider text-neon transition-all hover:bg-neon hover:text-black hover:shadow-[0_0_15px_var(--neon)]"
          >
            <span>LIVE_LINK</span>
            <ArrowUpRight size={12} />
          </a>
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
              <p className="font-mono text-xs uppercase tracking-widest text-neon">Freelance Client • Shipped</p>
              <h1 className="text-3xl font-extrabold tracking-tight mt-2 md:text-5xl">
                Eunoia <span className="text-neon text-glow">Homoeopathy</span>
              </h1>
              <p className="font-mono mt-2 text-sm text-muted-foreground">
                Healthcare Clinic Digital Transformation Platform
              </p>
            </div>
            <div className="flex flex-wrap gap-6 border-t border-white/5 pt-4 md:border-t-0 md:pt-0 font-mono text-xs text-muted-foreground">
              <div>
                <span className="block text-neon uppercase mb-1">// Role</span>
                <span className="text-foreground">Full-Stack Developer</span>
              </div>
              <div>
                <span className="block text-neon uppercase mb-1">// Location</span>
                <span className="text-foreground">Vadodara, Gujarat</span>
              </div>
              <div>
                <span className="block text-neon uppercase mb-1">// Live site</span>
                <a
                  href="https://www.eunoiahomoeopathy.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground hover:text-neon underline underline-offset-4 flex items-center gap-1"
                >
                  eunoiahomoeopathy.com
                </a>
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
                <Heart size={20} className="text-neon" />
                <span>Project Overview</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                Designed and developed a professional digital presence for Eunoia Homoeopathy, a clinic based in
                Vadodara specializing in holistic, constitutional homeopathy. The goal of the project was to translate
                Dr. Hetal’s compassionate, patient-first approach into an accessible, informative, and trust-building
                online platform.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground mt-4">
                The website serves as a comprehensive touchpoint for patients to understand treatment methodologies,
                explore specialized care options, read success stories, and seamlessly book consultations.
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
                <span>Key Features Built</span>
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
                Successfully transitioned a local healthcare practice into the digital space, providing a scalable
                platform that improves patient acquisition, digitizes the clinic's service offerings, and establishes
                clinical authority in the region.
              </p>
            </motion.section>
          </div>

          {/* RIGHT COLUMN: SCREENSHOTS, TECH STACK */}
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
              <h2 className="text-lg font-bold font-mono text-neon px-2">// Digital Blueprint (Screenshots)</h2>
              <div className="space-y-6">
                {[
                  {
                    src: "/eunoia-new-1.png",
                    title: "The Clinic Hero & Landing",
                    desc: "Welcoming patient experience designed to build immediate clinical trust.",
                  },
                  {
                    src: "/eunoia-new-2.png",
                    title: "Our Expertise Grid Layout",
                    desc: "Structured medical specializations detailing conditions treated at Gotri clinic.",
                  },
                  {
                    src: "/eunoia-new-3.png",
                    title: "Patient Stories & Social Proof",
                    desc: "Interactive sliders displaying genuine success stories and common FAQs.",
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
