import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/ui/PageTransition";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Calendar,
  Check,
  Clock,
  Flag,
  Layers,
  Rocket,
  Shield,
  Sparkles,
  Target,
  Terminal,
  Zap,
} from "lucide-react";

type MilestoneState = "done" | "next" | "planned";

const roadmapLanes = [
  {
    title: "Now",
    window: "Q1-Q2 2026",
    accent: "from-[hsl(180_100%_50%)] to-[hsl(170_100%_45%)]",
    items: [
      "00m1-alpha stabilization in VMware/QEMU",
      "Input reliability and exception-path hardening",
      "Desktop usability polish (shell, windows, Notepad)",
      "Release notes and regression tracking",
    ],
  },
  {
    title: "Next",
    window: "Q2-Q3 2026",
    accent: "from-[hsl(320_100%_60%)] to-[hsl(300_100%_55%)]",
    items: [
      "Beta release preparation and quality gates",
      "Deeper app/runtime compatibility groundwork",
      "Filesystem and scheduler maturity upgrades",
      "Broader VM stress testing coverage",
    ],
  },
  {
    title: "Later",
    window: "Q4 2026+",
    accent: "from-[hsl(280_100%_60%)] to-[hsl(250_100%_55%)]",
    items: [
      "v1.0 release hardening and packaging",
      "Expanded hardware support path",
      "Security and subsystem depth improvements",
      "Performance tuning for larger workloads",
    ],
  },
];

const milestones: { date: string; title: string; description: string; state: MilestoneState; link?: string }[] = [
  {
    date: "Jan 2026",
    title: "Project Start",
    description: "Initial kernel/build foundation established.",
    state: "done",
  },
  {
    date: "Feb 2026",
    title: "XP Transformation",
    description: "VESA 32-bit graphics and Luna desktop direction.",
    state: "done",
  },
  {
    date: "Feb 2026",
    title: "Bug Fix Pass",
    description: "Major stability fixes and VMware hardening pass.",
    state: "done",
  },
  {
    date: "Feb 13, 2026",
    title: "00m1-alpha Released",
    description: "Build 1.100 released with first usable desktop flow.",
    state: "done",
    link: "/gameros-changelog",
  },
  {
    date: "Q2 2026",
    title: "Beta Target",
    description: "Compatibility depth and release quality improvements.",
    state: "next",
  },
  {
    date: "Q4 2026",
    title: "v1.0 Target",
    description: "Stable public release objective.",
    state: "planned",
  },
];

const focusAreas = [
  {
    name: "Kernel Stability",
    progress: 78,
    priority: "High",
    points: ["Interrupt safety", "Exception fail-stop behavior", "ABI alignment consistency"],
  },
  {
    name: "Graphics and Shell",
    progress: 70,
    priority: "High",
    points: ["VGA/VESA consistency", "Window focus/z-order", "Text and layout readability"],
  },
  {
    name: "Input and VM Reliability",
    progress: 75,
    priority: "High",
    points: ["PS/2 stream correctness", "Mouse delta handling", "VMware drag/click behavior"],
  },
  {
    name: "Subsystem Depth",
    progress: 52,
    priority: "Medium",
    points: ["Async I/O scheduling", "Filesystem depth", "Compatibility layers"],
  },
];

const Roadmap = () => {
  const completed = milestones.filter((m) => m.state === "done").length;
  const overallProgress = Math.round((completed / milestones.length) * 100);

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-[hsl(225_25%_6%)]">
        <Header />

        <main className="flex-1">
          <section className="relative pt-32 pb-16 overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-25" />
            <div className="absolute top-24 left-10 w-80 h-80 bg-[hsl(180_100%_50%)]/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-10 w-96 h-96 bg-[hsl(280_100%_60%)]/10 rounded-full blur-[110px]" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
                <Badge
                  variant="outline"
                  className="mb-6 px-4 py-2 text-sm border-[hsl(180_100%_50%)]/30 bg-[hsl(180_100%_50%)]/5 text-[hsl(180_100%_50%)]"
                >
                  <Flag className="w-4 h-4 mr-2" />
                  Product Roadmap
                </Badge>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5">
                  Release Plan
                  <span className="block text-gaming">From Alpha to v1.0</span>
                </h1>

                <p className="text-lg text-white/60 max-w-3xl mx-auto mb-10">
                  A redesigned roadmap focused on delivery windows, milestone status, and the next priorities after the 00m1-alpha release.
                </p>

                <div className="max-w-3xl mx-auto glass-card p-6 rounded-2xl border border-white/10 bg-white/[0.03]">
                  <div className="flex items-center justify-between mb-3 text-sm text-white/60">
                    <span>Overall Milestone Progress</span>
                    <span className="text-[hsl(180_100%_50%)] font-semibold">{overallProgress}%</span>
                  </div>
                  <div className="h-3 rounded-full bg-white/10 overflow-hidden mb-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${overallProgress}%` }}
                      transition={{ duration: 0.9, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-[hsl(180_100%_50%)] to-[hsl(280_100%_60%)]"
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs text-white/50">
                    <span>{completed}/{milestones.length} milestones complete</span>
                    <span>Current release: 00m1-alpha (1.100)</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="py-12 border-y border-white/10 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
              {roadmapLanes.map((lane, i) => (
                <motion.div
                  key={lane.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card rounded-2xl p-6 border border-white/10"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${lane.accent} flex items-center justify-center mb-4`}>
                    {lane.title === "Now" ? <Zap className="w-6 h-6 text-white" /> : lane.title === "Next" ? <Rocket className="w-6 h-6 text-white" /> : <Clock className="w-6 h-6 text-white" />}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{lane.title}</h3>
                  <p className="text-sm text-white/50 mb-5">{lane.window}</p>
                  <ul className="space-y-3">
                    {lane.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[hsl(180_100%_50%)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-white mb-3">
                  Milestone <span className="text-gaming-alt">Rail</span>
                </h2>
                <p className="text-white/60">Clear status for completed and upcoming release checkpoints.</p>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
                {milestones.map((m, i) => {
                  const stateClass =
                    m.state === "done"
                      ? "border-[hsl(180_100%_50%)]/40 bg-[hsl(180_100%_50%)]/5"
                      : m.state === "next"
                      ? "border-[hsl(320_100%_60%)]/40 bg-[hsl(320_100%_60%)]/5"
                      : "border-white/10 bg-white/[0.02]";

                  return (
                    <motion.div
                      key={`${m.date}-${m.title}`}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className={`rounded-2xl p-5 border ${stateClass}`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <p className="text-xs text-white/50 mb-1">{m.date}</p>
                          <h3 className="text-lg font-semibold text-white">{m.title}</h3>
                        </div>
                        <Badge
                          variant="outline"
                          className={
                            m.state === "done"
                              ? "border-[hsl(180_100%_50%)]/40 text-[hsl(180_100%_50%)]"
                              : m.state === "next"
                              ? "border-[hsl(320_100%_60%)]/40 text-[hsl(320_100%_60%)]"
                              : "border-white/20 text-white/60"
                          }
                        >
                          {m.state === "done" ? "Completed" : m.state === "next" ? "Next" : "Planned"}
                        </Badge>
                      </div>

                      <p className="text-sm text-white/65 mb-4">{m.description}</p>

                      {m.link && (
                        <Link to={m.link} className="inline-flex items-center gap-1.5 text-sm text-[hsl(180_100%_50%)] hover:underline">
                          Open release notes <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="py-20 bg-white/[0.02] border-y border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-white mb-3">
                  Priority <span className="text-gaming">Focus Matrix</span>
                </h2>
                <p className="text-white/60">Current engineering focus areas and maturity levels.</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                {focusAreas.map((area, i) => (
                  <motion.div
                    key={area.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="glass-card rounded-2xl p-6 border border-white/10"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-white">{area.name}</h3>
                      <Badge
                        variant="outline"
                        className={
                          area.priority === "High"
                            ? "border-[hsl(320_100%_60%)]/40 text-[hsl(320_100%_60%)]"
                            : "border-[hsl(280_100%_60%)]/40 text-[hsl(280_100%_60%)]"
                        }
                      >
                        {area.priority}
                      </Badge>
                    </div>

                    <div className="h-2.5 rounded-full bg-white/10 overflow-hidden mb-4">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${area.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-[hsl(180_100%_50%)] to-[hsl(280_100%_60%)]"
                      />
                    </div>

                    <p className="text-xs text-white/50 mb-4">Maturity: {area.progress}%</p>

                    <ul className="space-y-2">
                      {area.points.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm text-white/70">
                          <Check className="w-4 h-4 text-[hsl(180_100%_50%)] mt-0.5 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-10 rounded-3xl border border-white/10 bg-gradient-to-br from-[hsl(180_100%_50%)]/5 via-white/5 to-[hsl(280_100%_60%)]/5"
              >
                <div className="flex justify-center gap-3 mb-6">
                  {[Terminal, Layers, Shield, Target].map((Icon, idx) => (
                    <div key={idx} className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[hsl(180_100%_50%)]" />
                    </div>
                  ))}
                </div>

                <h2 className="text-3xl font-bold text-white mb-4">
                  Track the Next <span className="text-gaming-alt">Release Cycle</span>
                </h2>
                <p className="text-white/60 max-w-2xl mx-auto mb-8">
                  Follow changelogs for incremental progress from alpha stabilization into beta readiness.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild className="btn-neon font-semibold">
                    <Link to="/gameros-changelog">
                      View GamerOS Changelog
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    <Link to="/download">Download 00m1-alpha</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Roadmap;
