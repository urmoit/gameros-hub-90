import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PageTransition from "@/components/ui/PageTransition";
import {
  ArrowLeft,
  Calendar,
  HardDrive,
  Cpu,
  Settings,
  FolderOpen,
  Monitor,
  Bug,
  Rocket,
  ArrowRight,
  Sparkles,
  Zap,
  Code2,
  GitCommit,
  ExternalLink,
} from "lucide-react";

const plannedFeatures = [
  {
    icon: HardDrive,
    title: "ATA PIO Disk Driver",
    description: "Real ATA PIO disk driver for primary IDE I/O, enabling sector-level read/write operations for persistent storage.",
    color: "cyan",
  },
  {
    icon: Cpu,
    title: "GOSAPP Executable Loader",
    description: "New concrete process/task model with GOSAPP executable loader format for better application management and lifecycle control.",
    color: "purple",
  },
  {
    icon: FolderOpen,
    title: "Disk-Backed Filesystem",
    description: "Reworked filesystem persistence utilizing disk-backed metadata, including superblock and file tables for reliable data storage.",
    color: "pink",
  },
  {
    icon: FolderOpen,
    title: "Expanded Storage Layout",
    description: "Real app install roots and user data directories, improving app visibility in the filesystem and enabling proper app isolation.",
    color: "cyan",
  },
  {
    icon: Settings,
    title: "Enhanced Settings UI",
    description: "Dedicated Display tab for runtime resolution switching, giving users control over graphics modes without rebooting.",
    color: "purple",
  },
  {
    icon: Monitor,
    title: "Boot Debug Overlays",
    description: "Debug overlays for boot diagnostics, providing visibility into the boot process for development and troubleshooting.",
    color: "pink",
  },
];

const bugFixes = [
  "Docker ISO staging fixes for more reliable build pipeline",
  "Input polling safety improvements to prevent data loss",
  "Keyboard buffer size increased to accommodate burst typing",
  "Filesystem capabilities expanded for new application directories",
];

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  cyan: { bg: "bg-cyan-400/10", border: "border-cyan-400/30", text: "text-cyan-400" },
  purple: { bg: "bg-purple-400/10", border: "border-purple-400/30", text: "text-purple-400" },
  pink: { bg: "bg-pink-400/10", border: "border-pink-400/30", text: "text-pink-400" },
};

const Build1400Announcement = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[hsl(225_25%_6%)]">
        <Header />
        <main className="pt-24 pb-16">
          {/* Hero */}
          <section className="py-16 relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="absolute top-20 left-10 w-72 h-72 bg-[hsl(180_100%_50%)]/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[hsl(280_100%_60%)]/10 rounded-full blur-[100px]" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <Button variant="ghost" asChild className="mb-8 text-white/60 hover:text-white hover:bg-white/5">
                <Link to="/news" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to News
                </Link>
              </Button>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/30">
                  <Rocket className="w-3 h-3 mr-1" />
                  Upcoming Release
                </Badge>
                <Badge className="bg-[hsl(180_100%_50%)]/10 text-[hsl(180_100%_50%)] border-[hsl(180_100%_50%)]/30">
                  Build 1.400
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Build 1.400 — Coming <span className="text-[hsl(180_100%_50%)]">March 27, 2026</span>
              </h1>

              <div className="flex items-center gap-2 text-white/50 mb-6">
                <Calendar className="w-4 h-4" />
                <span>Announced March 25, 2026</span>
              </div>

              <p className="text-lg text-white/60 leading-relaxed max-w-3xl">
                The next alpha release brings a real ATA PIO disk driver, disk-backed filesystem persistence,
                GOSAPP executable loader format, expanded storage layout, enhanced Settings UI, and boot debug overlays.
              </p>
            </div>
          </section>

          {/* Commit Reference */}
          <section className="py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="glass-card p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[hsl(180_100%_50%)] to-[hsl(280_100%_60%)]" />
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
                      <GitCommit className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50">Based on commit</p>
                      <p className="font-mono text-sm text-cyan-400">e44244d → 9c5055c</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild className="sm:ml-auto border-white/20 text-white/70 hover:bg-white/10">
                    <a
                      href="http://github.com/urmoit/GamerOS/commit/9c5055c254868f02463fb72ba7c1f02a22f771db"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      <Code2 className="w-4 h-4" />
                      View on GitHub
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Planned Features */}
          <section className="py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-[hsl(280_100%_60%)]/10 border border-[hsl(280_100%_60%)]/30 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[hsl(280_100%_60%)]" />
                </div>
                <h2 className="text-2xl font-bold text-white">What's Coming</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {plannedFeatures.map((feature, i) => {
                  const colors = colorMap[feature.color];
                  return (
                    <div key={i} className="glass-card glass-card-hover p-6 relative overflow-hidden group">
                      <div className="flex items-start gap-4">
                        <div className={`w-10 h-10 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center shrink-0`}>
                          <feature.icon className={`w-5 h-5 ${colors.text}`} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                          <p className="text-sm text-white/50 leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Bug Fixes */}
          <section className="py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center">
                  <Bug className="w-5 h-5 text-emerald-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Fixes & Improvements</h2>
              </div>

              <div className="glass-card p-6">
                <ul className="space-y-3">
                  {bugFixes.map((fix, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Zap className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span className="text-sm text-white/60">{fix}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="glass-card p-10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(180_100%_50%)]/5 via-[hsl(280_100%_60%)]/5 to-[hsl(320_100%_60%)]/5" />
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Download Current Release
                  </h2>
                  <p className="text-white/60 mb-8 max-w-lg mx-auto">
                    While you wait for Build 1.400, download the current alpha (Build 1.300) and test the desktop shell, apps, and 640×480 mode.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" className="btn-neon border-0" asChild>
                      <a
                        href="https://github.com/urmoit/GamerOS/releases/download/00m1-alpha-Build-1.300/GamerOS_Alpha_Build_1.300.iso"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="relative z-10">Download Build 1.300 ISO</span>
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild className="border-white/20 text-white hover:bg-white/10">
                      <Link to="/gameros-changelog" className="gap-2">
                        View Changelog
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Build1400Announcement;
