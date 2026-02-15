import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/ui/PageTransition";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Calendar,
  Bug,
  Rocket,
  Zap,
  ArrowRight,
  GitCommit,
  Sparkles,
  Cpu,
  Monitor,
  Keyboard,
  Layout,
  HardDrive,
  Settings,
  FileText,
  MousePointer,
  Maximize,
  Terminal,
  Shield,
  Download,
} from "lucide-react";

const walkthroughSections = [
  {
    title: "Storage-Backed Filesystem",
    icon: HardDrive,
    gradient: "from-cyan-500 to-blue-500",
    glowColor: "shadow-cyan-500/30",
    items: [
      "Expanded FS limits and path support (MAX_FILES, MAX_FILENAME_LEN)",
      "Added directory support: fs_create_directory(), fs_directory_exists()",
      "File metadata helpers: fs_file_exists(), fs_get_file_size(), fs_list_entries()",
      "Windows-style paths at boot: C:/GamerOS, C:/Users/Admin, C:/Apps/System",
      "Simulated multi-device storage: HDD, SSD, NVMe, USB, CD-ROM, RAM disk",
      "Renamed filesystem namespace from Windows to GamerOS with System32 layout",
    ],
  },
  {
    title: "File Explorer & Settings Apps",
    icon: Layout,
    gradient: "from-purple-500 to-pink-500",
    glowColor: "shadow-purple-500/30",
    items: [
      "File Explorer with Windows-style 'This PC' drive view and folder navigation",
      "Settings app converted to tabbed UI: System, Personalization, Accounts, About, Changelog",
      "Runtime toggles: taskbar compact mode, desktop glow, clock seconds",
      "In-OS changelog viewer with mouse-wheel scrolling",
      "Explorer safe-mode for VMware stability with cached drive entries",
    ],
  },
  {
    title: "Notepad Restoration & Storage",
    icon: FileText,
    gradient: "from-emerald-500 to-teal-500",
    glowColor: "shadow-emerald-500/30",
    items: [
      "Restored Notepad as full app with keyboard editing",
      "Storage-backed persistence: load/save from C:/Users/Admin/NOTEPAD.TXT",
      "PgUp to save, PgDn to reload, auto-save on close",
      "Buffer capacity increased: 160 lines × 96 columns",
      "Viewport-based rendering with cursor auto-follow",
      "Mouse-wheel scrolling support",
    ],
  },
  {
    title: "VGA 640×480 Mode 12h",
    icon: Monitor,
    gradient: "from-amber-500 to-orange-500",
    glowColor: "shadow-amber-500/30",
    items: [
      "Boot stage sets VGA mode 12h (640×480×16) before long mode",
      "Planar VGA present path with 4-plane sequencer writes",
      "Full runtime VGA register programming (SEQ/CRTC/GC/AC)",
      "Multiple stripe-fix iterations with deterministic per-plane byte writes",
      "Volatile VRAM writes for strict byte semantics",
      "Mode mismatch fixes between boot and kernel runtime",
    ],
  },
  {
    title: "Cursor & Input Improvements",
    icon: MousePointer,
    gradient: "from-pink-500 to-rose-500",
    glowColor: "shadow-pink-500/30",
    items: [
      "Partial present API for cursor-only screen updates",
      "Cursor overlay composition: save/restore background under cursor",
      "Mouse packet delta clamping (±12) to reduce pointer jumps",
      "PS/2 IntelliMouse wheel support with 4-byte packets",
      "Inverted scroll direction fix across all wheel consumers",
      "Black cursor trail artifacts fixed in mode 12h partial present",
    ],
  },
  {
    title: "Desktop & Taskbar Polish",
    icon: Maximize,
    gradient: "from-indigo-500 to-violet-500",
    glowColor: "shadow-indigo-500/30",
    items: [
      "Resizable windows with bottom-right drag handle and min/max bounds",
      "Taskbar text/buttons centered from font metrics",
      "Clock box with explicit reserved space to prevent overlap",
      "Taskbar hitboxes synchronized with visual button positions",
      "Desktop watermark: 'GamerOS 00m1 Preview / Evaluation copy. Build 1.200'",
      "Faster startup animation with reduced progress-frame count",
    ],
  },
  {
    title: "VMware Stability Hardening",
    icon: Shield,
    gradient: "from-red-500 to-orange-500",
    glowColor: "shadow-red-500/30",
    items: [
      "Fixed repeated click-trigger execution with last_buttons update",
      "Open-window position/size clamping within visible desktop bounds",
      "draw_rect() left-border write guard for out-of-bounds prevention",
      "Lazy storage initialization to isolate heavy setup from boot",
      "Explorer safe-mode rollback for startup stability",
      "Notepad safe-mode with in-memory fallback when storage unavailable",
    ],
  },
  {
    title: "Core Subsystem TODOs Completed",
    icon: Terminal,
    gradient: "from-cyan-400 to-purple-500",
    glowColor: "shadow-cyan-400/30",
    items: [
      "Font sizing API: 8×8, 12×12, 16×16 scalable glyph sampling",
      "RTC date API (get_date) for day/month/year/weekday",
      "Window manager: resize, focus, z-order control",
      "Baseline security subsystem with authentication and access control",
      "User-mode process isolation with per-process tags",
      "GUI app input: mouse-click tabs, keyboard shortcuts, Esc exit",
      "Freestanding-safe sprintf with compiler vararg builtins",
    ],
  },
];

const Build1200Walkthrough = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-[hsl(225_25%_6%)]">
        <Header />

        <main className="flex-1">
          {/* Hero */}
          <section className="relative pt-32 pb-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse" />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <Link
                to="/news"
                className="inline-flex items-center gap-2 text-white/60 hover:text-cyan-400 mb-8 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to News
              </Link>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <Badge className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-0 px-4 py-1.5 text-sm font-medium shadow-lg shadow-cyan-500/25">
                    <Rocket className="w-3.5 h-3.5 mr-2" />
                    Build 1.200
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-purple-500/50 bg-purple-500/10 text-purple-300 px-3 py-1"
                  >
                    <GitCommit className="w-3.5 h-3.5 mr-1" />
                    f62d110
                  </Badge>
                  <span className="text-sm text-white/50 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    February 15, 2026
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-white">Walkthrough:</span>
                  <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2 text-gaming">
                    Build 1.200 — Filesystem, 640×480, & 30 Fixes
                  </span>
                </h1>

                <p className="text-xl text-white/60 max-w-3xl mb-8">
                  A comprehensive walkthrough of the 30 fixes and features applied across filesystem,
                  graphics, input, desktop shell, and core subsystem APIs in Build 1.200.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Button asChild className="btn-neon border-0 gap-2">
                    <a
                      href="https://github.com/urmoit/GamerOS/releases/download/00m1-alpha-Build-1.200/GamerOS_Alpha_Build_1.200.iso"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="w-4 h-4" />
                      Download Build 1.200
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10 gap-2">
                    <a
                      href="https://github.com/urmoit/GamerOS/commit/f62d110fcd08dc7eacd7d4ecd31f3931be3cb55c"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitCommit className="w-4 h-4" />
                      View Commit
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Stats Banner */}
          <section className="py-12 border-y border-white/10 bg-white/[0.02]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Fixes Applied", value: "30", icon: Bug, gradient: "from-red-500 to-orange-500" },
                  { label: "New Features", value: "15+", icon: Sparkles, gradient: "from-cyan-500 to-blue-500" },
                  { label: "Files Changed", value: "20+", icon: FileText, gradient: "from-purple-500 to-pink-500" },
                  { label: "Resolution", value: "640×480", icon: Monitor, gradient: "from-emerald-500 to-teal-500" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card rounded-2xl p-5 text-center"
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-3 bg-gradient-to-br ${stat.gradient} shadow-lg`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Walkthrough Sections */}
          <section className="py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-8">
                {walkthroughSections.map((section, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="glass-card glass-card-hover p-6 rounded-2xl group"
                  >
                    <div className="flex items-center gap-4 mb-5">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${section.gradient} flex items-center justify-center shadow-lg ${section.glowColor}`}>
                        <section.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {section.title}
                        </h3>
                        <span className="text-xs text-white/40">{section.items.length} changes</span>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {section.items.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-sm text-white/60 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                        >
                          <Zap className="w-4 h-4 shrink-0 mt-0.5 text-cyan-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 border-t border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent" />
            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                  Try <span className="text-gaming">Build 1.200</span>
                </h2>
                <p className="text-white/50 mb-10 max-w-xl mx-auto">
                  Download the latest alpha ISO and test the new filesystem, 640×480 mode, and all 30 fixes.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="btn-neon gap-2 border-0">
                    <a
                      href="https://github.com/urmoit/GamerOS/releases/download/00m1-alpha-Build-1.200/GamerOS_Alpha_Build_1.200.iso"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="w-4 h-4" />
                      Download ISO
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="gap-2 border-white/20 text-white hover:bg-white/10">
                    <Link to="/gameros-changelog">
                      <ArrowRight className="w-4 h-4" />
                      View Changelog
                    </Link>
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

export default Build1200Walkthrough;
