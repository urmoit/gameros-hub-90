import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket,
  Code2,
  Users,
  Calendar,
  GitCommit,
  Megaphone,
  Search,
  Filter,
  ArrowRight,
  ExternalLink,
  Clock,
  Tag,
  ChevronDown,
  X,
  Sparkles,
  Palette,
  Zap,
  Flame,
  Gamepad2,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import PageTransition from "@/components/ui/PageTransition";

type NewsType = "All" | "Commit" | "Announcement" | "Community";

interface NewsItem {
  id: string;
  title: string;
  date: string;
  type: Exclude<NewsType, "All">;
  description: string;
  icon: typeof Rocket;
  commitCode?: string;
  commitUrl?: string;
  internalLink?: string;
  featured?: boolean;
}

const newsItems: NewsItem[] = [
  {
    id: "build-1300-walkthrough",
    title: "Walkthrough: Build 1.300 — App Framework, Win7 Theme & Custom Wallpaper",
    date: "February 17, 2026",
    type: "Announcement",
    description: "New .EXE application framework, Windows 7-inspired shell theme, custom wallpaper support, expanded Settings categories, taskbar date display, and 6 stability fixes.",
    icon: Rocket,
    internalLink: "/news/build-1300",
    featured: true,
  },
  {
    id: "commit-e44244d",
    title: "feat(apps): integrate new applications and enhance UI components",
    date: "February 17, 2026",
    type: "Commit",
    description: "Introduced Notepad, Settings, Explorer apps with UI components. Updated Makefile, enhanced kernel for new app windows. Increased keyboard buffer, expanded filesystem for app directories.",
    icon: Code2,
    commitCode: "e44244d",
    commitUrl: "https://github.com/urmoit/GamerOS/commit/e44244deed04af17b8c278b228c7376308702bd7",
    featured: true,
  },
  {
    id: "build-1200-walkthrough",
    title: "Walkthrough: Build 1.200 — Filesystem, 640×480, & 30 Fixes",
    date: "February 15, 2026",
    type: "Announcement",
    description: "Comprehensive walkthrough of 30 fixes and features: storage-backed filesystem, File Explorer, Settings app, VGA 640×480 mode 12h, cursor smoothing, resizable windows, and core subsystem TODO completions.",
    icon: Rocket,
    internalLink: "/news/build-1200",
    featured: true,
  },
  {
    id: "commit-f62d110",
    title: "feat(changelog, walkthrough): enhance changelog and complete core TODOs across subsystems",
    date: "February 15, 2026",
    type: "Commit",
    description: "Font size API, RTC date API, window manager resize/focus/z-order, security subsystem, user-mode process isolation, GUI input handling, freestanding sprintf.",
    icon: Code2,
    commitCode: "f62d110",
    commitUrl: "https://github.com/urmoit/GamerOS/commit/f62d110fcd08dc7eacd7d4ecd31f3931be3cb55c",
    featured: true,
  },
  {
    id: "commit-f6e1180",
    title: "refactor(filesystem): integrate storage-backed filesystem and enhance desktop shell",
    date: "February 14, 2026",
    type: "Commit",
    description: "Added storage-backed filesystem with directory support and file management. Implemented File Explorer app, upgraded Settings app, and updated build system.",
    icon: Code2,
    commitCode: "f6e1180",
    commitUrl: "https://github.com/urmoit/GamerOS/commit/f6e11801ea082a8ff2e51408d0ced263b7ad8a08",
    featured: true,
  },
  {
    id: "bug-fix-pass",
    title: "Alpha Release: Comprehensive src Bug Fix Pass",
    date: "February 13, 2026",
    type: "Announcement",
    description: "33 fixes applied across kernel, graphics, drivers, interrupt handling, and desktop shell. 11 significant bugs resolved including IPC, window manager, executive services, and VMware stability improvements.",
    icon: Rocket,
    internalLink: "/news/bug-fix-pass",
    featured: true,
  },
  {
    id: "commit-6270119",
    title: "fix(os): resolve triple faults and VMware stability issues with interrupt hardening",
    date: "February 13, 2026",
    type: "Commit",
    description: "Comprehensive fixes for VMware stability and triple fault issues. IDT hardening, ISR stack alignment, exception handling improvements, keyboard/mouse driver fixes, and 11 bugs marked as resolved.",
    icon: Code2,
    commitCode: "6270119",
    commitUrl: "https://github.com/urmoit/GamerOS/commit/62701194e5ee754750aa70cd7006d929821cfaf7",
    featured: true,
  },
  {
    id: "alpha-release",
    title: "Alpha Released: 00m1-alpha (Build 1.100)",
    date: "February 10, 2026",
    type: "Announcement",
    description: "First public alpha is available with XP-style shell, Notepad app, VMware hardening, and broad kernel/input fixes.",
    icon: Rocket,
    internalLink: "/news/alpha-release",
    featured: true,
  },
  {
    id: "xp-walkthrough",
    title: "Walkthrough - GamerOS: The Windows XP Transformation",
    date: "February 6, 2026",
    type: "Announcement",
    description: "Comprehensive summary of major architectural upgrades: VESA 32-bit graphics, Luna desktop environment, interactive apps, USB stack, kernel rewrite with double buffering, and verified stable build.",
    icon: Palette,
    internalLink: "/news/xp-transformation",
    featured: true,
  },
  {
    id: "commit-c8db812",
    title: "fix(graphics): address performance issues in VGA Mode 12h rendering",
    date: "February 6, 2026",
    type: "Commit",
    description: "Optimize pixel operations for improved rendering speed in VGA Mode 12h. Refactor graphics driver to enhance efficiency and reduce latency. Implement caching mechanisms for frequently accessed graphics data.",
    icon: Code2,
    commitCode: "c8db812",
    commitUrl: "https://github.com/urmoit/GamerOS/commit/c8db81256d1bbde95dc575a2e5a6ccc139fda86a",
    featured: true,
  },
  {
    id: "commit-1abf7fb",
    title: "fix: resolve triple fault and graphics initialization issues",
    date: "February 6, 2026",
    type: "Commit",
    description: "Fix interrupt handling and simplify graphics initialization. IDT entry IST field fix, VGA Mode 12h replaced with simpler VBE modes via GRUB. New serial, USB, and cursor drivers added.",
    icon: Code2,
    commitCode: "1abf7fb",
    commitUrl: "https://github.com/urmoit/GamerOS/commit/1abf7fbeeb7169d215bc79b1215a5d916a261325",
    featured: true,
  },
  {
    id: "xp-impl",
    title: "Implementation Plan: Windows XP Theme & Startup",
    date: "January 28, 2026",
    type: "Announcement",
    description: "Detailed implementation plan for transforming the GamerOS UI to resemble Windows XP (Luna Theme), including startup animation, desktop environment, and VM compatibility fixes.",
    icon: Palette,
    internalLink: "/news/xp-implementation",
  },
  {
    id: "0",
    title: "Implement VGA Mode 12h with interactive UI and input handling",
    date: "January 25, 2026",
    type: "Commit",
    description:
      "Add VGA Mode 12h (640x480x16) support in bootloader and graphics driver. Implement planar mode pixel operations for efficient 16-color rendering. Create tabbed UI interface with Home, Changelog, and Settings tabs. Add keyboard navigation with arrow keys, tab, and special keys. Integrate mouse support with cursor rendering and click handling. Update build scripts and fix memory management in object manager. Enhance keyboard driver with extended key support (arrows, home, end, etc.). Resolve VGA black screen issue by switching from Mode 13h to Mode 12h.",
    icon: Code2,
    commitCode: "07d87d3",
    commitUrl: "https://github.com/urmoit/GamerOS/commit/07d87d33d02d67414a5d7052825fcd636154309a",
  },
  {
    id: "1",
    title: "Add info and about tabs to gui app",
    date: "January 25, 2026",
    type: "Commit",
    description:
      "Renamed Home tab to Info and added About tab, increasing tab count to 3. Updated Info tab with system information display including OS details, architecture, and key features. Added About tab with project information and creator details. Refreshed Changelog tab with latest v1.1.1 updates on UI improvements and graphics enhancements. Adjusted UI widget creation, visibility, and tab switching logic accordingly.",
    icon: Code2,
    commitCode: "df1f120",
    commitUrl: "https://github.com/urmoit/GamerOS/commit/df1f120827150086ce6e8ec8eddf9c2876114a9c",
  },
  {
    id: "2",
    title: "Add TODO comments for planned features and improvements",
    date: "January 24, 2026",
    type: "Commit",
    description:
      "Added TODO comments across multiple modules including executive, filesystem, graphics, GUI, HAL, I/O manager, drivers, kernel, UI system, and user mode. Comments outline future enhancements like error handling, asynchronous I/O, font support, hardware acceleration, multitasking, and security features. This serves as documentation for development roadmap and does not introduce functional changes.",
    icon: Code2,
    commitCode: "5e16240",
    commitUrl: "https://github.com/urmoit/GamerOS/commit/5e162404ce4538594a882150b7ca466312420e76",
  },
  {
    id: "3",
    title: "Resolve VGA graphics display issue with complete Mode 13h setup",
    date: "January 24, 2026",
    type: "Commit",
    description:
      "Implement complete VGA Mode 13h register configuration in boot.asm including CRTC timing, sequencer, graphics controller, and palette initialization. Move palette setup to 32-bit mode before long mode transition to ensure proper color display. Simplify vga_graphics.c with diagnostic functions and direct framebuffer access. Add test pattern drawing in boot.asm and kernel main for verification. Update bug tracking to mark VGA display issue as resolved.",
    icon: Code2,
    commitCode: "2b860d6",
    commitUrl: "https://github.com/urmoit/GamerOS/commit/2b860d6a1ef736856e217a8e64a6b5c06a089051",
  },
  {
    id: "4",
    title: "Enhance build scripts and update bug tracking documentation",
    date: "January 21, 2026",
    type: "Commit",
    description:
      "Updated `build.bat` and `build-iso.bat` to include a pause and clearer completion messages. Revised `currentbugs.md` to reflect 28 total bugs with updated severity counts, added new reports for VGA graphics display issues and IPC system stubbing, improved documentation for unresolved issues and suggested fixes, and updated QEMU boot log timestamp for accuracy.",
    icon: Code2,
    commitCode: "467b30a",
    commitUrl: "https://github.com/urmoit/GamerOS/commit/467b30a72928dbf026fc58fbf9359bb7c1985292",
    featured: false,
  },
  {
    id: "5",
    title: "Update current bugs documentation and enhance kernel functionality",
    date: "January 15, 2026",
    type: "Commit",
    description: "Revised `currentbugs.md` to reflect a decrease in total bugs to 19, with updated counts for critical and resolved issues. Removed the critical bug entry for the DEXLFOK boot hang as it has been resolved. Added a fallback mechanism in `vga_draw_char` to render text in text mode if graphics mode is not initialized.",
    icon: Code2,
    commitCode: "aa1e546",
    commitUrl: "https://github.com/urmoit/GamerOS/commit/aa1e546502dbe2803432795f99b78fe6890a8674",
    featured: false,
  },
  {
    id: "6",
    title: "Update current bugs documentation and resolve several issues",
    date: "January 14, 2026",
    type: "Commit",
    description: "Revised currentbugs.md to reflect an increase in total bugs to 20. Documented the resolution of 5 bugs. Added new bug reports for implicit function declarations and color value overflows. Implemented safety checks in draw_tab_bar.",
    icon: Code2,
    commitCode: "1d4ecb2",
    commitUrl: "https://github.com/urmoit/GamerOS/commit/1d4ecb20daa7ac73159c9ea773c4f9d4f6f43a59",
  },
  {
    id: "7",
    title: "Update current bugs documentation and enhance kernel boot process",
    date: "January 14, 2026",
    type: "Commit",
    description: "Revised currentbugs.md to include a summary of total bugs, categorized by severity. Added debug output to kernel_main for better visibility during boot. Improved CPU detection in boot.asm with comprehensive checks.",
    icon: Code2,
    commitCode: "70fba78",
    commitUrl: "https://github.com/urmoit/GamerOS/commit/70fba78de2e3c123f2bfd4f5aea08996eee8d172",
  },
  {
    id: "8",
    title: "Enhance QEMU boot process and GUI application",
    date: "January 14, 2026",
    type: "Commit",
    description: "Updated run-qemu.bat to use -cpu max and log output to qemu-debug.log. Modified GUI application to increase window height and reduce tab count. Updated changelog content to reflect recent development milestones.",
    icon: Code2,
    commitCode: "f50fb62",
    commitUrl: "https://github.com/urmoit/GamerOS/commit/f50fb62ff112cf56a6025299f8b9bb21f6160d59",
  },
  {
    id: "9",
    title: "Refactor build scripts and update documentation",
    date: "January 14, 2026",
    type: "Commit",
    description: "Updated build-iso.bat to use make build-x86_64. Enhanced currentbugs.md with new remaining issues. Improved debug.bat to check for QEMU in multiple common locations. Added comprehensive QEMU tutorial.",
    icon: Code2,
    commitCode: "21d5dce",
    commitUrl: "https://github.com/urmoit/GamerOS/commit/21d5dce0b6db2f416201a61e586fa6e206acb657",
  },
  {
    id: "10",
    title: "Added cursor worktree",
    date: "January 14, 2026",
    type: "Commit",
    description: "Added cursor worktree for improved development workflow.",
    icon: Code2,
    commitCode: "259e723",
    commitUrl: "https://github.com/urmoit/GamerOS/commit/259e723ec1704b43a9182110ecf7b27dcee35e44",
  },
  {
    id: "7",
    title: "GamerOS Development Kickoff",
    date: "January 2026",
    type: "Announcement",
    description: "We've officially started development on GamerOS, a revolutionary operating system that will seamlessly run Windows, Linux, and Android applications.",
    icon: Rocket,
  },
  {
    id: "8",
    title: "Open Source Commitment",
    date: "January 2026",
    type: "Announcement",
    description: "GamerOS will be fully open source under the MIT license. We believe in transparency and community-driven development.",
    icon: Code2,
  },
  {
    id: "9",
    title: "Community Update",
    date: "January 2026",
    type: "Community",
    description: "Current focus is on testing, bug triage, and release validation across supported virtual machines.",
    icon: Users,
  },
];

const filterOptions: NewsType[] = ["All", "Commit", "Announcement", "Community"];

// Gaming theme color configuration
const typeConfig = {
  Commit: {
    color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    glowColor: "group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]",
    icon: GitCommit,
    gradient: "from-cyan-500 to-cyan-400",
  },
  Announcement: {
    color: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    glowColor: "group-hover:shadow-[0_0_20px_rgba(251,191,36,0.3)]",
    icon: Megaphone,
    gradient: "from-amber-500 to-amber-400",
  },
  Community: {
    color: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    glowColor: "group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]",
    icon: Users,
    gradient: "from-purple-500 to-purple-400",
  },
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const glowPulse = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(6,182,212,0.3)",
      "0 0 40px rgba(168,85,247,0.3)",
      "0 0 20px rgba(6,182,212,0.3)",
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const News = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<NewsType>("All");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  const filteredItems = useMemo(() => {
    let items = [...newsItems];

    // Filter by type
    if (activeFilter !== "All") {
      items = items.filter((item) => item.type === activeFilter);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      items = items.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
      );
    }

    // Sort
    items.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

    return items;
  }, [searchQuery, activeFilter, sortOrder]);

  const featuredItems = [...newsItems]
    .filter((item) => item.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);
  const stats = {
    total: newsItems.length,
    commits: newsItems.filter((i) => i.type === "Commit").length,
    announcements: newsItems.filter((i) => i.type === "Announcement").length,
    community: newsItems.filter((i) => i.type === "Community").length,
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-[hsl(225_25%_6%)]">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
              {/* Grid Pattern */}
              <div className="absolute inset-0 grid-pattern opacity-30" />
              {/* Animated Glow Orbs */}
              <motion.div
                animate={{
                  x: [0, 100, 0],
                  y: [0, -50, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]"
              />
              <motion.div
                animate={{
                  x: [0, -100, 0],
                  y: [0, 50, 0],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]"
              />
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="text-center max-w-4xl mx-auto"
              >
                {/* Badge */}
                <motion.div variants={itemVariants} className="mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-cyan-500/30">
                    <Zap className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm font-medium text-cyan-400">Latest Updates</span>
                  </div>
                </motion.div>

                {/* Title */}
                <motion.h1
                  variants={itemVariants}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                >
                  <span className="text-gaming">News & Updates</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  variants={itemVariants}
                  className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto"
                >
                  Stay up to date with the latest GamerOS development news, commits, and community announcements.
                </motion.p>

                {/* Stats */}
                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
                >
                  {[
                    { label: "Total Updates", value: stats.total, icon: Tag, color: "cyan" },
                    { label: "Commits", value: stats.commits, icon: GitCommit, color: "emerald" },
                    { label: "Announcements", value: stats.announcements, icon: Megaphone, color: "amber" },
                    { label: "Community", value: stats.community, icon: Users, color: "purple" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="glass-card p-4 border border-white/10 group cursor-default"
                    >
                      <div className="flex flex-col items-center gap-2">
                        <div className={`w-12 h-12 rounded-xl bg-${stat.color}-500/10 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-shadow duration-300`}>
                          <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
                        </div>
                        <div className="text-3xl font-bold text-white">{stat.value}</div>
                        <div className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Featured Section */}
          {featuredItems.length > 0 && (
            <section className="py-16 border-y border-white/5 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 mb-8"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-[0_0_20px_rgba(251,191,36,0.3)]">
                    <Flame className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gaming-alt">Featured</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                  {featuredItems.map((item, i) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      whileHover={{ y: -5 }}
                      className={`glass-card glass-card-hover p-6 group ${typeConfig[item.type].glowColor} transition-all duration-300`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${typeConfig[item.type].gradient} flex items-center justify-center shrink-0 shadow-lg`}>
                          <item.icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <Badge variant="outline" className={typeConfig[item.type].color}>
                              {item.type}
                            </Badge>
                            {item.commitCode && (
                              <Badge variant="secondary" className="font-mono text-xs bg-white/5 text-white/70 border-white/10">
                                {item.commitCode}
                              </Badge>
                            )}
                          </div>
                          <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                            {item.internalLink ? (
                              <Link to={item.internalLink}>{item.title}</Link>
                            ) : (
                              item.title
                            )}
                          </h3>
                          <p className="text-sm text-white/50 line-clamp-2 mb-4">
                            {item.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-white/40 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {item.date}
                            </span>
                            {item.commitUrl && (
                              <a
                                href={item.commitUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-cyan-400 flex items-center gap-1 hover:text-cyan-300 transition-colors"
                              >
                                View commit <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                            {item.internalLink && (
                              <Link
                                to={item.internalLink}
                                className="text-xs text-cyan-400 flex items-center gap-1 hover:text-cyan-300 transition-colors"
                              >
                                Read more <ArrowRight className="w-3 h-3" />
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Filters & Content */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              {/* Filter Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-6 mb-8 border border-white/10"
              >
                <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
                  {/* Search */}
                  <div className="relative w-full lg:w-96">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                    <Input
                      placeholder="Search news..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-11 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-cyan-500/50 focus:ring-cyan-500/20"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    {/* Type Filters - Gaming Style */}
                    <div className="flex items-center gap-2 p-1.5 rounded-xl bg-white/5 border border-white/10">
                      {filterOptions.map((filter) => {
                        const isActive = activeFilter === filter;
                        const filterColors: Record<string, string> = {
                          All: "from-cyan-500 to-purple-500",
                          Commit: "from-cyan-500 to-cyan-400",
                          Announcement: "from-amber-500 to-orange-500",
                          Community: "from-purple-500 to-pink-500",
                        };
                        return (
                          <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                              isActive
                                ? "text-white"
                                : "text-white/50 hover:text-white hover:bg-white/5"
                            }`}
                          >
                            {isActive && (
                              <motion.div
                                layoutId="activeFilter"
                                className={`absolute inset-0 bg-gradient-to-r ${filterColors[filter]} rounded-lg`}
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                              />
                            )}
                            <span className="relative z-10">{filter}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Sort Dropdown */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="gap-2 bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white"
                        >
                          <Filter className="w-4 h-4 text-cyan-400" />
                          {sortOrder === "newest" ? "Newest First" : "Oldest First"}
                          <ChevronDown className="w-3 h-3" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-[hsl(225_25%_8%)] border-white/10">
                        <DropdownMenuItem 
                          onClick={() => setSortOrder("newest")}
                          className="text-white/70 hover:text-white focus:bg-white/5 cursor-pointer"
                        >
                          Newest First
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={() => setSortOrder("oldest")}
                          className="text-white/70 hover:text-white focus:bg-white/5 cursor-pointer"
                        >
                          Oldest First
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Archive Link */}
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild
                      className="gap-2 bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white"
                    >
                      <Link to="/news/monthly/february-2026">
                        <Calendar className="w-4 h-4 text-purple-400" />
                        Monthly Archive
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Secondary Actions */}
                <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-white/5">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild
                    className="gap-2 bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white"
                  >
                    <Link to="/gameros-changelog">
                      <GitCommit className="w-4 h-4 text-cyan-400" />
                      GamerOS Changelog
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild
                    className="gap-2 bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white"
                  >
                    <Link to="/changelog">
                      <Tag className="w-4 h-4 text-pink-400" />
                      Website Changelog
                    </Link>
                  </Button>
                </div>
              </motion.div>

              {/* Results Count */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-white/50">
                  Showing <span className="font-medium text-white">{filteredItems.length}</span> of{" "}
                  <span className="font-medium text-white">{newsItems.length}</span> updates
                </p>
                {(searchQuery || activeFilter !== "All") && (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setActiveFilter("All");
                    }}
                    className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
                  >
                    Clear filters <X className="w-3 h-3" />
                  </button>
                )}
              </div>

              {/* News Grid */}
              <AnimatePresence mode="wait">
                {filteredItems.length > 0 ? (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid gap-4"
                  >
                    {filteredItems.map((item, i) => {
                      const TypeIcon = typeConfig[item.type].icon;
                      return (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          whileHover={{ x: 5 }}
                          className={`glass-card glass-card-hover p-5 group ${typeConfig[item.type].glowColor} transition-all duration-300 border border-white/5`}
                        >
                          <div className="flex flex-col md:flex-row md:items-center gap-4">
                            <div className="flex items-center gap-4 flex-1 min-w-0">
                              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br ${typeConfig[item.type].gradient} shadow-lg`}>
                                <TypeIcon className="w-6 h-6 text-white" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1 flex-wrap">
                                  <Badge variant="outline" className={`text-xs ${typeConfig[item.type].color}`}>
                                    {item.type}
                                  </Badge>
                                  {item.commitCode && (
                                    <Badge variant="secondary" className="font-mono text-xs bg-white/5 text-white/70 border-white/10">
                                      {item.commitCode}
                                    </Badge>
                                  )}
                                </div>
                                <h3 className="font-medium text-white line-clamp-1 group-hover:text-cyan-400 transition-colors">
                                  {item.internalLink ? (
                                    <Link to={item.internalLink}>{item.title}</Link>
                                  ) : (
                                    item.title
                                  )}
                                </h3>
                                <p className="text-sm text-white/40 line-clamp-1 mt-1">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-4 md:shrink-0">
                              <span className="text-xs text-white/40 flex items-center gap-1 whitespace-nowrap">
                                <Clock className="w-3 h-3" />
                                {item.date}
                              </span>
                              {item.commitUrl && (
                                <a
                                  href={item.commitUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 transition-colors whitespace-nowrap"
                                >
                                  View <ExternalLink className="w-3 h-3" />
                                </a>
                              )}
                              {item.internalLink && (
                                <Link
                                  to={item.internalLink}
                                  className="flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 transition-colors whitespace-nowrap"
                                >
                                  Read more <ArrowRight className="w-3 h-3" />
                                </Link>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-20"
                  >
                    <div className="w-20 h-20 rounded-2xl glass-card flex items-center justify-center mx-auto mb-6 border border-white/10">
                      <Search className="w-10 h-10 text-white/30" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
                    <p className="text-white/50 mb-6">
                      Try adjusting your search or filter criteria
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSearchQuery("");
                        setActiveFilter("All");
                      }}
                      className="gap-2 bg-white/5 border-white/10 text-white hover:bg-white/10"
                    >
                      <X className="w-4 h-4" />
                      Clear filters
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 border-t border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 md:p-12 text-center max-w-3xl mx-auto border border-white/10"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(6,182,212,0.3)]"
                >
                  <Gamepad2 className="w-10 h-10 text-white" />
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="text-gaming">Release Status</span>
                </h2>
                <p className="text-white/60 mb-8 max-w-lg mx-auto text-lg">
                  GamerOS is open source and we welcome contributions from developers of all skill levels.
                  Join our community and help shape the future of gaming.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      asChild 
                      size="lg"
                      className="btn-neon gap-2 text-white border-0"
                    >
                      <a
                        href="https://github.com/urmoit/GamerOS"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GitCommit className="w-5 h-5" />
                        View on GitHub
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      asChild
                      className="gap-2 bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white"
                    >
                      <Link to="/download">
                        <Rocket className="w-5 h-5 text-purple-400" />
                        Download
                      </Link>
                    </Button>
                  </motion.div>
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

export default News;

