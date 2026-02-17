import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/ui/PageTransition";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  ArrowRight,
  GitBranch,
  Sparkles,
  Bug,
  Zap,
  Wrench,
  Download,
  ExternalLink,
  AppWindow,
  Palette,
  Monitor,
  Keyboard,
  Clock,
  Image,
} from "lucide-react";

interface WalkthroughSection {
  id: number;
  title: string;
  files: string[];
  changes: string[];
  reason: string;
  icon: typeof Sparkles;
  color: string;
}

const sections: WalkthroughSection[] = [
  {
    id: 2,
    title: "Added src/apps application framework and executable registry",
    files: ["src/intf/apps.h", "src/apps/apps.c", "Makefile", "*.EXE.manifest files"],
    changes: [
      "Dedicated app framework folder for built-in application organization",
      "Centralized app registry mapping executable names to shell window entry points",
      "Per-app folders and source-side manifests for Notepad, Settings, Explorer",
      "New module wired into build graph with apps.o compile/link rules",
    ],
    reason: "Cleaner application architecture with executable-oriented app metadata.",
    icon: AppWindow,
    color: "cyan",
  },
  {
    id: 3,
    title: "Switched shell app launch flow to .EXE resolution",
    files: ["src/impl/kernel/main.c"],
    changes: [
      "Added launch_application_exe() shell helper for executable resolution",
      "Start menu and desktop icons now launch via NOTEPAD.EXE, SETTINGS.EXE, EXPLORER.EXE",
      ".EXE stubs created under C:/GamerOS/System32",
      "App-root storage directories: C:/GamerOS/Apps and C:/GamerOS/Apps/BuiltIn",
    ],
    reason: "Windows-style executable launch behavior and structured app bootstrapping.",
    icon: Zap,
    color: "purple",
  },
  {
    id: 4,
    title: "Improved UI scalability and perceived responsiveness",
    files: ["src/impl/kernel/main.c"],
    changes: [
      "Adaptive UI scale profile selection from runtime resolution",
      "Shared Start menu metric calculation for draw/input consistency",
      "Dynamic desktop icon layout spacing based on scale profile",
      "Taskbar rendering updated to two-tone style",
      "Startup animation eased timing for smoother progression",
    ],
    reason: "Better scaling, smoother UX, and cleaner modern presentation baseline.",
    icon: Monitor,
    color: "pink",
  },
  {
    id: 5,
    title: "Per-app UI content modules and refreshed app visuals",
    files: ["src/apps/notepad/notepad_ui.c", "src/apps/settings/settings_ui.c", "src/apps/explorer/explorer_ui.c"],
    changes: [
      "Each built-in app now owns its text/content in its own folder",
      "Notepad: toolbar strip + improved status bar styling",
      "Settings: modern content header + module-driven tabs/changelog",
      "Explorer: clearer left navigation + right content pane layout",
      "Desktop watermark now renders under app icons/windows",
    ],
    reason: "Per-app folder ownership for future growth and better app-specific UI.",
    icon: Palette,
    color: "cyan",
  },
  {
    id: 7,
    title: "Expanded Settings categories and GamerOS Update section",
    files: ["src/impl/kernel/main.c", "src/apps/settings/settings_ui.c"],
    changes: [
      "Full Settings category list: System, Bluetooth & devices, Network, Personalization, Apps, Accounts, Time & language, Gaming, Accessibility, Privacy & security, GamerOS Update, About",
      "Changelog moved under GamerOS Update (GamerOS branding)",
      "Wheel scroll support for update notes",
    ],
    reason: "Windows-style Settings breadth with GamerOS branding.",
    icon: Wrench,
    color: "purple",
  },
  {
    id: 8,
    title: "Unified modern Windows XP-style theming across all apps",
    files: ["src/impl/kernel/main.c", "src/apps/settings/settings_ui.c"],
    changes: [
      "Shared window chrome: layered title bar, beveled frame borders, improved close button",
      "Notepad: cleaner framed editor + XP-style toolbar/status bar",
      "Settings: card-like navigation/content surfaces + tab-state contrast",
      "Explorer: consistent XP-style panel framing and controls",
    ],
    reason: "Every application uses a modernized Windows XP visual theme consistently.",
    icon: Palette,
    color: "pink",
  },
  {
    id: 13,
    title: "Windows 7-style global UI theme pass",
    files: ["src/impl/kernel/main.c"],
    changes: [
      "Multi-band Aero-like desktop backdrop",
      "Glossy dark taskbar with top highlight line",
      "Modern Start menu: dark frame, highlighted profile/header panes, beveled rows",
      "Stronger title bar highlight bands and refined frame borders",
    ],
    reason: "Whole OS UI updated to Windows 7-inspired style with modern elements.",
    icon: Sparkles,
    color: "cyan",
  },
  {
    id: 14,
    title: "Remade startup loading screen (Windows 7-style)",
    files: ["src/impl/kernel/main.c"],
    changes: [
      "Aero-like multi-band background for startup",
      "Centered framed startup panel with updated subtitle",
      "Redesigned progress rail with eased fill and moving highlight sweep",
      "Tuned animation pacing for polished boot feel",
    ],
    reason: "Loading screen aligned with the new Windows 7-inspired UI direction.",
    icon: Clock,
    color: "purple",
  },
  {
    id: 16,
    title: "Integrated custom Background.png as live desktop wallpaper",
    files: ["src/resources/wallpapers/Background.png", "src/resources/wallpapers/background_wallpaper.c"],
    changes: [
      "User-provided wallpaper image compiled as 16-color kernel asset",
      "Image-backed wallpaper renderer replaces procedural path",
      "Scaling logic adapts to current runtime desktop dimensions",
    ],
    reason: "Custom PNG image used as actual OS desktop background.",
    icon: Image,
    color: "pink",
  },
  {
    id: 17,
    title: "Taskbar date display and layout alignment",
    files: ["src/impl/kernel/main.c"],
    changes: [
      "Taskbar clock now shows HH:MM[:SS] DD/MM/YYYY",
      "Shared clock width helper for draw/hitbox alignment",
      "Task button right-limit updated to prevent overlap with expanded clock",
    ],
    reason: "Date displayed on taskbar alongside time without breaking interactions.",
    icon: Clock,
    color: "cyan",
  },
];

const bugFixes = [
  "Notepad launch path now consistently loads storage-backed content via .EXE flow",
  "Settings content/header overlap fixed for readable changelog/section content",
  "VMware crash path fixed when opening Start menu in latest UI pass",
  "Explorer popup regression in VMware fixed when opening Explorer",
  "Notepad typing responsiveness improved — keyboard buffer expanded from 64 to 256",
  "Taskbar app-button hitbox alignment fixed after clock width increase for date display",
];

const colorMap: Record<string, { bg: string; border: string; text: string; gradient: string }> = {
  cyan: {
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/30",
    text: "text-cyan-400",
    gradient: "from-cyan-400 to-cyan-500",
  },
  purple: {
    bg: "bg-purple-400/10",
    border: "border-purple-400/30",
    text: "text-purple-400",
    gradient: "from-purple-400 to-purple-500",
  },
  pink: {
    bg: "bg-pink-400/10",
    border: "border-pink-400/30",
    text: "text-pink-400",
    gradient: "from-pink-400 to-pink-500",
  },
};

const Build1300Walkthrough = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col" style={{ background: "hsl(225 25% 6%)" }}>
        <Header />

        <main className="flex-1">
          {/* Hero */}
          <section className="relative pt-32 pb-20 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(180_100%_50%_/_0.15),_transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(280_100%_60%_/_0.1),_transparent_50%)]" />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <Link
                to="/news"
                className="group inline-flex items-center gap-2 text-gray-400 hover:text-[hsl(180_100%_50%)] mb-8 transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm uppercase tracking-wider">Back to News</span>
              </Link>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <Badge className="bg-gradient-to-r from-[hsl(180_100%_50%)] to-[hsl(280_100%_60%)] text-white border-0 shadow-lg">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Build 1.300
                  </Badge>
                  <Badge variant="outline" className="border-white/20 text-gray-400">
                    <Calendar className="w-3 h-3 mr-1" />
                    February 17, 2026
                  </Badge>
                  <Badge variant="outline" className="border-white/20 text-gray-400">
                    <GitBranch className="w-3 h-3 mr-1" />
                    e44244d
                  </Badge>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                  <span className="text-white">Build 1.300: </span>
                  <span className="text-gaming">App Framework, Win7 Theme & Custom Wallpaper</span>
                </h1>

                <p className="text-lg text-gray-400 max-w-3xl mb-8 leading-relaxed">
                  New .EXE application framework, Windows 7-inspired shell theme, custom wallpaper support, 
                  expanded Settings categories, taskbar date display, and 6 stability fixes.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Button asChild className="btn-neon border-0 gap-2">
                    <a
                      href="https://github.com/urmoit/GamerOS/releases/download/00m1-alpha-Build-1.300/GamerOS_Alpha_Build_1.300.iso"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="w-4 h-4" />
                      Download Build 1.300 ISO
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10 gap-2">
                    <a
                      href="https://github.com/urmoit/GamerOS/commit/e44244deed04af17b8c278b228c7376308702bd7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Commit
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Summary Stats */}
          <section className="py-12 border-y border-[hsl(225_20%_15%)]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "New Features", value: "17+", icon: Sparkles, color: "cyan" },
                  { label: "Bug Fixes", value: "6", icon: Bug, color: "pink" },
                  { label: "Files Changed", value: "30+", icon: Wrench, color: "purple" },
                  { label: "Walkthrough Steps", value: String(sections.length), icon: Zap, color: "cyan" },
                ].map((stat, i) => {
                  const colors = colorMap[stat.color];
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="glass-card rounded-2xl p-5 text-center"
                    >
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-3 ${colors.bg} border ${colors.border}`}>
                        <stat.icon className={`w-6 h-6 ${colors.text}`} />
                      </div>
                      <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Walkthrough Sections */}
          <section className="py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-white mb-12">
                Implementation <span className="text-gaming">Walkthrough</span>
              </h2>

              <div className="space-y-8">
                {sections.map((section, i) => {
                  const colors = colorMap[section.color];
                  return (
                    <motion.div
                      key={section.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="glass-card p-6 rounded-2xl relative overflow-hidden group"
                    >
                      <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${colors.gradient}`} />

                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center shrink-0`}>
                          <section.icon className={`w-6 h-6 ${colors.text}`} />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold text-white mb-3">{section.title}</h3>

                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {section.files.map((file, j) => (
                              <span key={j} className="text-xs px-2 py-0.5 rounded bg-white/5 text-gray-500 font-mono">
                                {file}
                              </span>
                            ))}
                          </div>

                          <ul className="space-y-1.5 mb-3">
                            {section.changes.map((change, j) => (
                              <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                                <span className={`w-1.5 h-1.5 rounded-full ${colors.bg} border ${colors.border} shrink-0 mt-1.5`} />
                                {change}
                              </li>
                            ))}
                          </ul>

                          <p className="text-xs text-gray-500 italic">{section.reason}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Bug Fixes */}
          <section className="py-16 border-t border-[hsl(225_20%_15%)]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-white mb-8">
                Bug <span className="text-gaming-alt">Fixes</span>
              </h2>

              <div className="grid gap-3">
                {bugFixes.map((fix, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-pink-400/5 border border-pink-400/20"
                  >
                    <Bug className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">{fix}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="glass-card p-10 rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(180_100%_50%)]/5 via-[hsl(280_100%_60%)]/5 to-[hsl(320_100%_60%)]/5" />
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Try Build <span className="text-gaming">1.300</span>
                  </h2>
                  <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                    Download the latest alpha ISO and explore the new .EXE app framework, Windows 7-style theme, and custom wallpaper.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button asChild className="btn-neon border-0 gap-2">
                      <a
                        href="https://github.com/urmoit/GamerOS/releases/download/00m1-alpha-Build-1.300/GamerOS_Alpha_Build_1.300.iso"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="w-4 h-4" />
                        Download ISO
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10 gap-2">
                      <Link to="/gameros-changelog">
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

export default Build1300Walkthrough;
