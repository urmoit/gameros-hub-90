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
  Download,
  Palette,
  Layout,
  AppWindow,
} from "lucide-react";

const newFeatures = [
  {
    icon: Palette,
    title: "Fluent UI Dark Theme",
    description: "Complete Windows 11-inspired Fluent design language with #0078D4 accent, dark surfaces, and modern button styling throughout the shell.",
    color: "cyan",
  },
  {
    icon: HardDrive,
    title: "ATA PIO Disk Driver",
    description: "Real ATA PIO disk driver for primary IDE I/O, enabling sector-level read/write operations for persistent storage.",
    color: "purple",
  },
  {
    icon: Cpu,
    title: "GOSAPP Executable Loader",
    description: "Concrete process/task model with GOSAPP executable loader format for proper application management and lifecycle control.",
    color: "pink",
  },
  {
    icon: FolderOpen,
    title: "Disk-Backed Filesystem",
    description: "Filesystem persistence with disk-backed metadata including superblock, file tables, and directory tables stored on disk sectors.",
    color: "cyan",
  },
  {
    icon: Layout,
    title: "Modernized Shell Chrome",
    description: "Window chrome, taskbar, Start menu, context menu, and app interiors restyled with rounded surfaces and consistent modern design.",
    color: "purple",
  },
  {
    icon: AppWindow,
    title: "Desktop Context Menu",
    description: "Right-click context menu with About GamerOS, Settings, and Refresh Desktop quick actions. Plus in-OS runtime error popup dialogs.",
    color: "pink",
  },
  {
    icon: FolderOpen,
    title: "Virtual Path System",
    description: "GamerOS virtual paths (GOS:/User, GOS:/System, GOS:/Apps) mapping to concrete filesystem locations with per-app user data folders.",
    color: "cyan",
  },
  {
    icon: Monitor,
    title: "True-Color Framebuffer",
    description: "24/32bpp linear framebuffer support with RGB drawing helpers, 1920x1080 target, and safe true-color activation from bootloader.",
    color: "purple",
  },
  {
    icon: Settings,
    title: "Enhanced Settings & Debug",
    description: "Settings with Display tab for resolution switching, debug overlay toggle, and draggable/resizable diagnostics panel.",
    color: "pink",
  },
];

const bugFixes = [
  "Fixed VMware startup crash with hardened multiboot framebuffer validation and VGA fallback",
  "Fixed boot-time triple-fault by relocating early page tables away from kernel image/BSS memory",
  "Fixed true-color color mapping bug where non-0x0F palette IDs were truncated",
  "Fixed cursor background restore artifacts on true-color backend with RGB-aware path",
  "Fixed VM crash from unsafe mouse-state transitions during right-click packets",
  "Fixed post-loading-screen black screen on VMware by presenting desktop before first PS/2 polling",
  "Fixed kernel-stack-heavy app loader path by moving executable read buffer out of stack frame",
  "Fixed unstable ATA PIO probe — forced RAM-backed storage fallback for stability",
  "Fixed framebuffer resolution-switch artifacts where old desktop regions were left behind",
  "Fixed debug overlay startup noise by leaving debug window off by default",
  "Fixed Docker ISO staging for reliable repeated builds",
  "Fixed input polling safety with bounded loops instead of unbounded controller drains",
];

const shellChanges = [
  "Startup/loading screen redesigned with modern card layout, rounded corners, and circular progress loader",
  "Start menu redesigned with wider layout, profile chip, cleaner spacing, and improved label fit",
  "Window title bar height and close button size increased for easier interaction",
  "Taskbar height raised and Start/task buttons widened for better click targets",
  "Desktop wallpaper, icon cards, and watermark restyled to match newer shell chrome",
  "Settings layout refined with larger nav rows, wider navigation rail, and more content spacing",
  "File Explorer now browses real filesystem entries and can launch .EXE files directly",
  "About details moved to dedicated About GamerOS app window",
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
                <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30">
                  <Rocket className="w-3 h-3 mr-1" />
                  Released
                </Badge>
                <Badge className="bg-[hsl(180_100%_50%)]/10 text-[hsl(180_100%_50%)] border-[hsl(180_100%_50%)]/30">
                  Build 1.400
                </Badge>
                <Badge className="bg-[hsl(280_100%_60%)]/10 text-[hsl(280_100%_60%)] border-[hsl(280_100%_60%)]/30">
                  Fluent UI
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Build 1.400 — <span className="text-[hsl(180_100%_50%)]">Released March 27, 2026</span>
              </h1>

              <div className="flex items-center gap-2 text-white/50 mb-6">
                <Calendar className="w-4 h-4" />
                <span>March 27, 2026</span>
              </div>

              <p className="text-lg text-white/60 leading-relaxed max-w-3xl">
                The biggest alpha update yet — Fluent UI dark theme (Windows 11 design language), ATA PIO disk driver,
                GOSAPP executable loader, disk-backed filesystem persistence, virtual path system, modernized shell chrome,
                and dozens of stability fixes across VMware, graphics, and boot paths.
              </p>
            </div>
          </section>

          {/* Download CTA */}
          <section className="py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="glass-card p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-[hsl(180_100%_50%)]" />
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center">
                      <Download className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50">Download now</p>
                      <p className="font-mono text-sm text-emerald-400">GamerOS_Alpha_Build_1.400.iso</p>
                    </div>
                  </div>
                  <Button size="lg" className="btn-neon border-0 sm:ml-auto" asChild>
                    <a
                      href="https://github.com/urmoit/GamerOS/releases/download/00m1-alpha-Build-1.400/GamerOS_Alpha_Build_1.400.iso"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Download ISO
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Commit Reference */}
          <section className="py-4">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="glass-card p-6 relative overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
                      <GitCommit className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50">Based on commits</p>
                      <p className="font-mono text-sm text-cyan-400">9c5055c → e44244d</p>
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

          {/* New Features */}
          <section className="py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-[hsl(280_100%_60%)]/10 border border-[hsl(280_100%_60%)]/30 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[hsl(280_100%_60%)]" />
                </div>
                <h2 className="text-2xl font-bold text-white">What's New</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newFeatures.map((feature, i) => {
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

          {/* Shell Changes */}
          <section className="py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-[hsl(180_100%_50%)]/10 border border-[hsl(180_100%_50%)]/30 flex items-center justify-center">
                  <Layout className="w-5 h-5 text-[hsl(180_100%_50%)]" />
                </div>
                <h2 className="text-2xl font-bold text-white">Shell & UI Improvements</h2>
              </div>

              <div className="glass-card p-6">
                <ul className="space-y-3">
                  {shellChanges.map((change, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Zap className="w-4 h-4 text-[hsl(180_100%_50%)] mt-0.5 shrink-0" />
                      <span className="text-sm text-white/60">{change}</span>
                    </li>
                  ))}
                </ul>
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
                <h2 className="text-2xl font-bold text-white">Bug Fixes ({bugFixes.length})</h2>
              </div>

              <div className="glass-card p-6">
                <ul className="space-y-3">
                  {bugFixes.map((fix, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Bug className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
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
                    Download Build 1.400
                  </h2>
                  <p className="text-white/60 mb-8 max-w-lg mx-auto">
                    The biggest alpha update — Fluent UI, disk driver, GOSAPP loader, and a completely modernized desktop shell.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" className="btn-neon border-0" asChild>
                      <a
                        href="https://github.com/urmoit/GamerOS/releases/download/00m1-alpha-Build-1.400/GamerOS_Alpha_Build_1.400.iso"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        <span className="relative z-10">Download ISO</span>
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild className="border-white/20 text-white hover:bg-white/10">
                      <Link to="/gameros-changelog" className="gap-2">
                        View Full Changelog
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
