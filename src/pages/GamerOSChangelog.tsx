import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/ui/PageTransition";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  ArrowLeft,
  Calendar,
  Tag,
  Sparkles,
  Bug,
  Wrench,
  Zap,
  Search,
  ChevronDown,
  ChevronUp,
  Download,
  Code2,
  Terminal,
  FileText,
} from "lucide-react";

type ChangeType = "feature" | "fix" | "improvement" | "breaking";

interface Change {
  type: ChangeType;
  description: string;
  component?: string;
}

interface Version {
  version: string;
  build: string;
  date: string;
  title: string;
  description: string;
  changes: Change[];
}

const isoUrl =
  "https://github.com/urmoit/GamerOS/releases/download/00m1-alpha-Build-1.300/GamerOS_Alpha_Build_1.300.iso";

const changelogData: Version[] = [
  {
    version: "00m1-alpha",
    build: "1.300",
    date: "February 17, 2026",
    title: "App Framework, Win7 Theme & Custom Wallpaper",
    description:
      "New .EXE application framework, Windows 7-inspired shell theme, custom wallpaper support, expanded Settings categories, taskbar date display, and 6 stability fixes.",
    changes: [
      { type: "feature", description: "New application framework at src/apps with centralized built-in app registry.", component: "Apps" },
      { type: "feature", description: "Per-app source folders (notepad, settings, explorer) with .EXE.manifest files.", component: "Apps" },
      { type: "feature", description: "App UI content modules: notepad_ui.c, settings_ui.c, explorer_ui.c.", component: "Apps" },
      { type: "feature", description: "Public app-launch interface src/intf/apps.h for executable resolution.", component: "Apps" },
      { type: "feature", description: "Settings navigation expanded to 12 GamerOS-style categories.", component: "Apps" },
      { type: "feature", description: "Markdown viewer support and file-backed changelog in Settings.", component: "Apps" },
      { type: "feature", description: "Start menu expanded with GamerOS Update and About GamerOS entries.", component: "UI" },
      { type: "feature", description: "Windows 7-inspired global shell theme: Aero desktop, glossy taskbar, modern Start menu.", component: "UI" },
      { type: "feature", description: "Remade startup/loading screen with Windows 7-style presentation.", component: "UI" },
      { type: "feature", description: "Custom wallpaper from PNG integrated as live desktop background.", component: "UI" },
      { type: "feature", description: "Taskbar clock now shows both time and date (HH:MM DD/MM/YYYY).", component: "UI" },
      { type: "improvement", description: "Desktop/Start menu launch flow switched from direct window IDs to .EXE resolution.", component: "Shell" },
      { type: "improvement", description: "UI scaling groundwork with runtime scale profile and adaptive Start menu metrics.", component: "UI" },
      { type: "improvement", description: "Startup animation with eased progress timing for smoother feel.", component: "UI" },
      { type: "improvement", description: "Unified modernized Windows XP-style theme across all app windows.", component: "UI" },
      { type: "improvement", description: "Explorer restored from safe-static to interactive storage-backed navigation.", component: "Apps" },
      { type: "improvement", description: "Changelog content sourced from markdown file, not hardcoded items.", component: "Apps" },
      { type: "fix", description: "Notepad launch path consistently loads storage-backed content via .EXE flow.", component: "Apps" },
      { type: "fix", description: "Settings content/header overlap fixed for readable content.", component: "UI" },
      { type: "fix", description: "VMware crash path fixed when opening Start menu.", component: "VMware" },
      { type: "fix", description: "Explorer popup regression in VMware fixed.", component: "VMware" },
      { type: "fix", description: "Notepad typing responsiveness improved — keyboard buffer expanded 64→256.", component: "Input" },
      { type: "fix", description: "Taskbar app-button hitbox alignment fixed after clock width increase.", component: "UI" },
    ],
  },
  {
    version: "00m1-alpha",
    build: "1.200",
    date: "February 15, 2026",
    title: "Filesystem, 640×480, & 30 Fixes",
    description:
      "Storage-backed filesystem, File Explorer, Settings app overhaul, VGA 640×480 mode 12h, cursor smoothing, resizable windows, and core subsystem completions.",
    changes: [
      { type: "feature", description: "Storage-backed filesystem with directory support, file metadata, and Windows-style paths.", component: "Filesystem" },
      { type: "feature", description: "File Explorer app with 'This PC' drive view and folder navigation.", component: "Apps" },
      { type: "feature", description: "Settings app as tabbed app: System, Personalization, Accounts, About, Changelog.", component: "Apps" },
      { type: "feature", description: "Notepad restored with storage-backed persistence (load/save/auto-save).", component: "Apps" },
      { type: "feature", description: "Mouse wheel input API and scrolling in Settings and Notepad.", component: "Input" },
      { type: "feature", description: "GamerOS storage namespace: C:/GamerOS/System32 with app/system entries.", component: "Filesystem" },
      { type: "feature", description: "Font size support API for 8×8, 12×12, and 16×16 rendering.", component: "Graphics" },
      { type: "feature", description: "RTC date API (get_date) for day/month/year/weekday.", component: "Kernel" },
      { type: "feature", description: "Window manager resize, focus, and z-order control.", component: "Window Manager" },
      { type: "feature", description: "Baseline security subsystem with authentication and access control.", component: "Security" },
      { type: "feature", description: "User-mode process isolation with per-process tags.", component: "Subsystems" },
      { type: "feature", description: "Resizable windows with bottom-right drag handle.", component: "UI" },
      { type: "feature", description: "Desktop watermark: 'GamerOS 00m1 Preview / Build 1.200'.", component: "UI" },
      { type: "improvement", description: "VGA mode 12h (640×480×16) with full runtime register programming.", component: "Graphics" },
      { type: "improvement", description: "Taskbar text/buttons centered with font metrics and synced hitboxes.", component: "UI" },
      { type: "improvement", description: "Cursor partial present for smoother movement with delta clamping.", component: "Input" },
      { type: "improvement", description: "Startup animation centered and faster for 640×480.", component: "UI" },
      { type: "improvement", description: "Notepad buffer: 160 lines × 96 cols with viewport scrolling.", component: "Apps" },
      { type: "improvement", description: "Freestanding-safe sprintf with compiler vararg builtins.", component: "Kernel" },
      { type: "improvement", description: "GUI app input: mouse-click tabs, keyboard shortcuts, Esc exit.", component: "UI" },
      { type: "fix", description: "VMware CPU-disabled popup fixes across Settings, Explorer, Notepad open paths.", component: "VMware" },
      { type: "fix", description: "Lazy storage initialization isolated from boot for startup stability.", component: "Boot" },
      { type: "fix", description: "Mode 12h stripe artifacts fixed with deterministic per-plane byte writes.", component: "Graphics" },
      { type: "fix", description: "Black screen mode mismatch between boot and runtime renderer.", component: "Boot" },
      { type: "fix", description: "Cursor black trail artifacts in mode 12h partial present.", component: "Graphics" },
      { type: "fix", description: "Inverted mouse-wheel scroll direction normalized.", component: "Input" },
      { type: "fix", description: "draw_rect() out-of-bounds backbuffer write guard.", component: "Graphics" },
      { type: "fix", description: "Repeated click-trigger execution fixed with last_buttons update.", component: "Input" },
      { type: "fix", description: "stdarg.h include failure fixed with compiler builtins.", component: "Build" },
      { type: "breaking", description: "File Explorer runs in safe-mode on VMware while deeper storage interactions are stabilized.", component: "Limitations" },
    ],
  },
  {
    version: "00m1-alpha",
    build: "1.100",
    date: "February 13, 2026",
    title: "First Alpha Release",
    description:
      "First usable XP-style shell release with major VMware hardening, Notepad, About app, and broad kernel/input/graphics fixes.",
    changes: [
      { type: "feature", description: "First usable XP-style desktop shell in VGA mode.", component: "Shell" },
      { type: "feature", description: "Functional Notepad app with typing, cursor movement, and window dragging.", component: "Apps" },
      { type: "feature", description: "Added About GamerOS app with in-OS version/build/latest-changes info.", component: "Apps" },
      { type: "feature", description: "Start menu now supports Shut Down action with VM-safe behavior.", component: "UI" },
      { type: "feature", description: "Added compact XP-like shell styling: smaller taskbar/buttons/icons, improved Start menu layout, startup splash/progress animation, custom Notepad desktop icon.", component: "UI" },
      { type: "feature", description: "Added taskbar clock backed by RTC (get_time).", component: "Kernel/UI" },
      { type: "feature", description: "Added basic async I/O queue processing (io_read_async, io_write_async, request processing API).", component: "I/O" },
      { type: "fix", description: "Removed unsafe sti before iretq in interrupt stubs.", component: "Interrupts" },
      { type: "fix", description: "Fixed IDT null-vector setup to not-present gates.", component: "IDT" },
      { type: "fix", description: "Added IRQ guard and moved EOI to safer position in IRQ handling.", component: "IRQ" },
      { type: "fix", description: "Added recursive exception guard and fail-stop exception behavior.", component: "Exceptions" },
      { type: "fix", description: "Fixed ISR/IRQ ABI call stack alignment in assembly.", component: "ASM" },
      { type: "improvement", description: "Enabled -mno-red-zone for kernel C compilation.", component: "Build" },
      { type: "fix", description: "Added polling-only runtime input mode for VMware drag/click stability.", component: "Input" },
      { type: "fix", description: "Fixed VESA/VGA buffer copy behavior.", component: "Graphics" },
      { type: "fix", description: "Removed long-mode BIOS video interrupt usage.", component: "Boot" },
      { type: "fix", description: "Forced VGA mode setup in 32-bit boot stage.", component: "Boot" },
      { type: "fix", description: "Fixed multiboot video mode mismatch that caused black screens.", component: "Boot" },
      { type: "improvement", description: "Switched runtime text rendering to shared font_8x8 font table.", component: "Graphics" },
      { type: "fix", description: "Fixed keyboard/mouse controller cross-talk (no more random self-typing from mouse bytes).", component: "Input" },
      { type: "fix", description: "Fixed mouse overflow/delta handling to reduce cursor teleporting.", component: "Input" },
      { type: "improvement", description: "Improved z-order/focus handling for windows.", component: "Window Manager" },
      { type: "improvement", description: "Centered/scaled desktop/taskbar text for compact readability.", component: "UI" },
      { type: "improvement", description: "Completed executive startup wiring: GDI init, baseline keyboard/mouse driver registration, baseline filesystem entries.", component: "Executive" },
      { type: "improvement", description: "Replaced object manager static pool with kmalloc/kfree.", component: "Memory" },
      { type: "improvement", description: "Improved allocator coalescing behavior in kfree.", component: "Memory" },
      { type: "improvement", description: "Enabled user mode subsystem init/shutdown pathways.", component: "Subsystems" },
      { type: "fix", description: "Fixed RTC link failure by adding RTC driver object to build/link steps.", component: "Build" },
      { type: "fix", description: "Added font object to build/link pipeline.", component: "Build" },
      { type: "breaking", description: "Known limitations: VMware runtime still needs stress validation, VESA switching remains constrained in long mode, and some subsystems are still simplified/stubbed.", component: "Limitations" },
    ],
  },
];

const getChangeIcon = (type: ChangeType) => {
  switch (type) {
    case "feature":
      return <Sparkles className="w-4 h-4" />;
    case "fix":
      return <Bug className="w-4 h-4" />;
    case "improvement":
      return <Zap className="w-4 h-4" />;
    case "breaking":
      return <Wrench className="w-4 h-4" />;
  }
};

const getChangeColor = (type: ChangeType) => {
  switch (type) {
    case "feature":
      return "bg-[hsl(180_100%_50%)]/10 text-[hsl(180_100%_50%)] border-[hsl(180_100%_50%)]/30";
    case "fix":
      return "bg-[hsl(320_100%_60%)]/10 text-[hsl(320_100%_60%)] border-[hsl(320_100%_60%)]/30";
    case "improvement":
      return "bg-[hsl(280_100%_60%)]/10 text-[hsl(280_100%_60%)] border-[hsl(280_100%_60%)]/30";
    case "breaking":
      return "bg-amber-500/10 text-amber-400 border-amber-500/30";
  }
};

const GamerOSChangelog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedVersions, setExpandedVersions] = useState<Set<string>>(new Set([changelogData[0]?.version]));

  const toggleVersion = (version: string) => {
    const newExpanded = new Set(expandedVersions);
    if (newExpanded.has(version)) {
      newExpanded.delete(version);
    } else {
      newExpanded.add(version);
    }
    setExpandedVersions(newExpanded);
  };

  const filteredChangelog = changelogData.filter(
    (version) =>
      version.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      version.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      version.changes.some((c) => c.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const totalFeatures = changelogData.reduce((acc, v) => acc + v.changes.filter((c) => c.type === "feature").length, 0);
  const totalFixes = changelogData.reduce((acc, v) => acc + v.changes.filter((c) => c.type === "fix").length, 0);
  const totalImprovements = changelogData.reduce(
    (acc, v) => acc + v.changes.filter((c) => c.type === "improvement").length,
    0
  );

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col" style={{ background: "hsl(225 25% 6%)" }}>
        <Header />

        <main className="flex-1">
          <section className="relative pt-32 pb-20 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(280_100%_60%_/_0.15),_transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(180_100%_50%_/_0.1),_transparent_50%)]" />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(hsl(180 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(180 100% 50%) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <Link
                to="/"
                className="group inline-flex items-center gap-2 text-gray-400 hover:text-[hsl(180_100%_50%)] mb-8 transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm uppercase tracking-wider">Back to Home</span>
              </Link>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[hsl(180_100%_50%)]/30 bg-[hsl(180_100%_50%)]/5 mb-6"
                  style={{ boxShadow: "0 0 20px hsl(180 100% 50% / 0.2)" }}
                >
                  <Terminal className="w-4 h-4 text-[hsl(180_100%_50%)]" />
                  <span className="text-sm font-medium tracking-wider text-[hsl(180_100%_50%)]">GAMEROS CHANGELOG</span>
                </motion.div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                  <span className="text-white">Kernel </span>
                  <span className="text-gaming">Releases</span>
                </h1>

                <p className="text-lg text-gray-400 max-w-2xl mb-8 leading-relaxed">
                  Track GamerOS release versions, feature drops, and kernel-level stability changes.
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  <Button asChild className="btn-neon border-0">
                    <a href={isoUrl} target="_blank" rel="noopener noreferrer" className="gap-2 inline-flex items-center">
                      <Download className="w-4 h-4" />
                      Download ISO
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    <Link to="/download">Open Download Page</Link>
                  </Button>
                </div>

                <div className="relative max-w-md group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[hsl(180_100%_50%)] to-[hsl(280_100%_60%)] rounded-xl opacity-30 group-hover:opacity-50 transition-opacity blur" />
                  <div className="relative flex items-center">
                    <Search className="absolute left-4 w-5 h-5 text-[hsl(180_100%_50%)]" />
                    <Input
                      placeholder="Search GamerOS changes..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-12 h-14 bg-[hsl(225_25%_8%)] border-[hsl(225_20%_15%)] text-white placeholder:text-gray-500 focus:border-[hsl(180_100%_50%)]/50 focus:ring-[hsl(180_100%_50%)]/20 rounded-xl"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="py-12 border-y border-[hsl(225_20%_15%)] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(180_100%_50%)]/5 via-transparent to-[hsl(280_100%_60%)]/5" />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Versions", value: changelogData.length, icon: Tag, gradient: "from-[hsl(180_100%_50%)] to-[hsl(180_100%_40%)]" },
                  { label: "Features", value: totalFeatures, icon: Sparkles, gradient: "from-[hsl(180_100%_50%)] to-[hsl(170_100%_45%)]" },
                  { label: "Improvements", value: totalImprovements, icon: Zap, gradient: "from-[hsl(280_100%_60%)] to-[hsl(270_100%_55%)]" },
                  { label: "Bug Fixes", value: totalFixes, icon: Bug, gradient: "from-[hsl(320_100%_60%)] to-[hsl(310_100%_55%)]" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    className="glass-card rounded-2xl p-5 text-center"
                    style={{
                      background: "linear-gradient(135deg, hsl(225 25% 10% / 0.8), hsl(225 25% 6% / 0.9))",
                      border: "1px solid hsl(225 20% 20%)",
                    }}
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-3 bg-gradient-to-br ${stat.gradient} shadow-lg`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400 tracking-wide">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 relative">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 hidden md:block">
                  <div className="absolute inset-0 bg-gradient-to-b from-[hsl(180_100%_50%)] via-[hsl(280_100%_60%)] to-[hsl(320_100%_60%)] opacity-40" />
                </div>

                <div className="space-y-8">
                  <AnimatePresence mode="popLayout">
                    {filteredChangelog.map((version, i) => {
                      const isExpanded = expandedVersions.has(version.version);
                      return (
                        <motion.div
                          key={version.version}
                          layout
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ delay: i * 0.05 }}
                          className="relative md:pl-16"
                        >
                          <div className="absolute left-4 top-6 w-5 h-5 rounded-full hidden md:flex items-center justify-center z-10">
                            <div className="relative w-5 h-5 rounded-full bg-[hsl(225_25%_6%)] border-2 border-[hsl(180_100%_50%)] flex items-center justify-center shadow-[0_0_15px_hsl(180_100%_50%_/_0.5)]">
                              <div className="w-2 h-2 rounded-full bg-[hsl(180_100%_50%)]" />
                            </div>
                          </div>

                          <div
                            className="glass-card-hover rounded-2xl overflow-hidden"
                            style={{
                              background: "linear-gradient(135deg, hsl(225 25% 10% / 0.9), hsl(225 25% 6% / 0.95))",
                              border: "1px solid hsl(225 20% 18%)",
                            }}
                          >
                            <button
                              onClick={() => toggleVersion(version.version)}
                              className="w-full p-6 flex items-start gap-4 hover:bg-white/[0.02] transition-colors text-left group"
                            >
                              <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-3 mb-3">
                                  <Badge className="bg-[hsl(180_100%_50%)]/10 text-[hsl(180_100%_50%)] border-[hsl(180_100%_50%)]/30 px-3 py-1">
                                    <Tag className="w-3 h-3 mr-1.5" />
                                    {version.version}
                                  </Badge>
                                  <Badge className="bg-[hsl(280_100%_60%)]/10 text-[hsl(280_100%_60%)] border-[hsl(280_100%_60%)]/30 px-3 py-1">
                                    Build {version.build}
                                  </Badge>
                                  <span className="text-sm text-gray-500 flex items-center gap-1.5">
                                    <Calendar className="w-3.5 h-3.5" />
                                    {version.date}
                                  </span>
                                  <Badge variant="outline" className="text-xs border-[hsl(225_20%_25%)] text-gray-400 bg-[hsl(225_25%_8%)]">
                                    {version.changes.length} changes
                                  </Badge>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[hsl(180_100%_50%)] transition-colors">
                                  {version.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{version.description}</p>
                              </div>

                              <div className="text-gray-500 group-hover:text-[hsl(180_100%_50%)] transition-colors mt-1">
                                {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                              </div>
                            </button>

                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.25 }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-6 pb-6 pt-2 border-t border-[hsl(225_20%_15%)]">
                                    <div className="space-y-3 mt-4">
                                      {version.changes.map((change, ci) => (
                                        <motion.div
                                          key={ci}
                                          initial={{ opacity: 0, x: -20 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{ delay: ci * 0.03 }}
                                          className="flex items-start gap-4 p-4 rounded-xl bg-[hsl(225_25%_8%)] border border-[hsl(225_20%_15%)]"
                                        >
                                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${getChangeColor(change.type)}`}>
                                            {getChangeIcon(change.type)}
                                          </div>
                                          <div className="flex-1 min-w-0">
                                            <p className="text-gray-200 text-sm leading-relaxed">{change.description}</p>
                                            {change.component && (
                                              <span className="text-xs text-gray-500 mt-2 inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-[hsl(225_25%_12%)] border border-[hsl(225_20%_18%)]">
                                                <Code2 className="w-3 h-3" />
                                                {change.component}
                                              </span>
                                            )}
                                          </div>
                                          <Badge variant="outline" className={`text-xs capitalize ${getChangeColor(change.type)}`}>
                                            {change.type}
                                          </Badge>
                                        </motion.div>
                                      ))}
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>

                {filteredChangelog.length === 0 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[hsl(225_25%_10%)] border border-[hsl(225_20%_15%)] mb-6">
                      <Search className="w-10 h-10 text-gray-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">No Updates Found</h3>
                    <p className="text-gray-400">Try adjusting your search query</p>
                  </motion.div>
                )}
              </div>
            </div>
          </section>

          <section className="py-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(280_100%_60%_/_0.03)] to-transparent" />
            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-xl font-bold mb-8 text-center text-gaming">Change Type Legend</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { type: "feature" as ChangeType, label: "New Feature" },
                  { type: "improvement" as ChangeType, label: "Improvement" },
                  { type: "fix" as ChangeType, label: "Bug Fix" },
                  { type: "breaking" as ChangeType, label: "Known Limitation" },
                ].map((item) => (
                  <div
                    key={item.type}
                    className="flex items-center gap-3 px-5 py-4 rounded-xl border border-[hsl(225_20%_15%)] bg-[hsl(225_25%_8%)]"
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getChangeColor(item.type)}`}>
                      {getChangeIcon(item.type)}
                    </div>
                    <div className="font-semibold text-sm text-white">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="pb-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="glass-card p-8 rounded-2xl text-center border border-[hsl(180_100%_50%)]/20">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[hsl(180_100%_50%)]/10 border border-[hsl(180_100%_50%)]/30 text-[hsl(180_100%_50%)] text-sm mb-4">
                  <FileText className="w-4 h-4" />
                  Release Notes
                </div>
                <p className="text-gray-300 mb-6">
                  Alpha focuses on reliable boot, consistent rendering, and stable interactive flow in VMware/QEMU.
                </p>
                <Button asChild className="btn-neon border-0">
                  <a href={isoUrl} target="_blank" rel="noopener noreferrer" className="gap-2 inline-flex items-center">
                    <Download className="w-4 h-4" />
                    Download 00m1-alpha ISO
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default GamerOSChangelog;
