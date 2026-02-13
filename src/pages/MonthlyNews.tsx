import { useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import PageTransition from "@/components/ui/PageTransition";
import {
  Calendar,
  ArrowRight,
  ArrowLeft,
  Code2,
  GitCommit,
  ExternalLink,
  Megaphone,
  Users,
  Search,
  X,
  Clock,
  Tag,
  ChevronLeft,
  ChevronRight,
  Filter,
  Sparkles,
  FileText,
  Gamepad2,
  Zap,
  Trophy,
  MessageSquare
} from "lucide-react";

type NewsType = "All" | "Commit" | "Announcement" | "Community";

interface NewsItem {
  title: string;
  date: string;
  type: Exclude<NewsType, "All">;
  description: string;
  commitCode?: string;
  commitUrl?: string;
}

interface MonthData {
  month: string;
  year: string;
  summary: string;
  highlights: string[];
  items: NewsItem[];
}

const monthlyNewsData: Record<string, MonthData> = {
  "february-2026": {
    month: "February",
    year: "2026",
    summary: "Massive stabilization pass with 33 fixes across kernel, graphics, drivers, and desktop shell. 11 major bugs resolved, VMware hardening, and comprehensive walkthrough of the XP transformation.",
    highlights: [
      "33 fixes applied in comprehensive src bug fix pass",
      "11 significant bugs marked as resolved",
      "VMware stability improvements with interrupt hardening",
      "IDT, ISR, and exception handling hardened",
      "Desktop shell redesign toward compact XP look",
      "Published comprehensive walkthrough of the XP Transformation",
      "Fixed VGA Mode 12h rendering performance issues",
      "Resolved triple fault and graphics initialization issues",
      "Added new serial, USB, and cursor drivers",
    ],
    items: [
      {
        title: "Alpha Release: Comprehensive src Bug Fix Pass",
        date: "February 13, 2026",
        type: "Announcement",
        description: "33 fixes applied across kernel, graphics, drivers, interrupt handling, and desktop shell. 11 significant bugs resolved including IPC, window manager, executive services, and VMware stability improvements.",
        commitUrl: "/news/bug-fix-pass",
      },
      {
        title: "fix(os): resolve triple faults and VMware stability issues with interrupt hardening",
        date: "February 13, 2026",
        type: "Commit",
        description: "Comprehensive fixes for VMware stability and triple fault issues. IDT hardening, ISR stack alignment, exception handling improvements, keyboard/mouse driver fixes, and 11 bugs marked as resolved.",
        commitCode: "6270119",
        commitUrl: "https://github.com/urmoit/GamerOS/commit/62701194e5ee754750aa70cd7006d929821cfaf7",
      },
      {
        title: "Walkthrough - GamerOS: The Windows XP Transformation",
        date: "February 6, 2026",
        type: "Announcement",
        description: "Comprehensive summary of major architectural upgrades: VESA 32-bit graphics, Luna desktop environment, interactive apps, USB stack, kernel rewrite with double buffering, and verified stable build.",
        commitUrl: "/news/xp-transformation",
      },
      {
        title: "fix(graphics): address performance issues in VGA Mode 12h rendering",
        date: "February 6, 2026",
        type: "Commit",
        description: "Optimize pixel operations for improved rendering speed in VGA Mode 12h. Refactor graphics driver to enhance efficiency and reduce latency. Implement caching mechanisms for frequently accessed graphics data.",
        commitCode: "c8db812",
        commitUrl: "https://github.com/urmoit/GamerOS/commit/c8db81256d1bbde95dc575a2e5a6ccc139fda86a",
      },
      {
        title: "fix: resolve triple fault and graphics initialization issues",
        date: "February 6, 2026",
        type: "Commit",
        description: "Fix interrupt handling and simplify graphics initialization. The IDT entry's reserved field was actually the IST field, causing triple faults when non-zero. VGA Mode 12h code removed in favor of simpler VBE modes handled by GRUB. New drivers (serial, USB, cursor) added for expanded device support.",
        commitCode: "1abf7fb",
        commitUrl: "https://github.com/urmoit/GamerOS/commit/1abf7fbeeb7169d215bc79b1215a5d916a261325",
      },
    ],
  },
  "january-2026": {
    month: "January",
    year: "2026",
    summary: "Evaluation of Windows XP styling, Major graphics and UI advancements, VGA Mode 12h implementation, and comprehensive bug tracking updates.",
    highlights: [
      "Implemented VGA Mode 12h (640x480x16) with planar graphics",
      "Added interactive UI with keyboard navigation and mouse support",
      "Resolved VGA graphics display issues with complete Mode 13h setup",
      "Added Info and About tabs to GUI application",
      "Added TODO comments for planned features across all modules",
      "Bug tracking updated to 29 total bugs with VGA Mode 12h regression",
    ],
    items: [
      {
        title: "Implementation Plan: Windows XP Theme & Startup",
        date: "January 28, 2026",
        type: "Announcement",
        description: "Detailed implementation plan for transforming the GamerOS UI to resemble Windows XP (Luna Theme), including startup animation, desktop environment, and VM compatibility fixes.",
        commitUrl: "/news/xp-implementation",
      },
      {
        title: "Implement VGA Mode 12h with interactive UI and input handling",
        date: "January 25, 2026",
        type: "Commit",
        description: "Add VGA Mode 12h (640x480x16) support in bootloader and graphics driver. Implement planar mode pixel operations for efficient 16-color rendering. Create tabbed UI interface with Home, Changelog, and Settings tabs. Add keyboard navigation with arrow keys, tab, and special keys. Integrate mouse support with cursor rendering and click handling. Update build scripts and fix memory management in object manager. Enhance keyboard driver with extended key support (arrows, home, end, etc.). Resolve VGA black screen issue by switching from Mode 13h to Mode 12h.",
        commitCode: "07d87d3",
        commitUrl: "https://github.com/urmoit/GamerOS/commit/07d87d33d02d67415a5d7052825fcd636154309a",
      },
      {
        title: "Add info and about tabs to gui app",
        date: "January 25, 2026",
        type: "Commit",
        description: "Renamed Home tab to Info and added About tab, increasing tab count to 3. Updated Info tab with system information display including OS details, architecture, and key features. Added About tab with project information and creator details. Refreshed Changelog tab with latest v1.1.1 updates on UI improvements and graphics enhancements. Adjusted UI widget creation, visibility, and tab switching logic accordingly.",
        commitCode: "df1f120",
        commitUrl: "https://github.com/urmoit/GamerOS/commit/df1f120827150086ce6e8ec8eddf9c2876114a9c",
      },
      {
        title: "Add TODO comments for planned features and improvements",
        date: "January 24, 2026",
        type: "Commit",
        description: "Added TODO comments across multiple modules including executive, filesystem, graphics, GUI, HAL, I/O manager, drivers, kernel, UI system, and user mode. Comments outline future enhancements like error handling, asynchronous I/O, font support, hardware acceleration, multitasking, and security features. This serves as documentation for development roadmap and does not introduce functional changes.",
        commitCode: "5e16240",
        commitUrl: "https://github.com/urmoit/GamerOS/commit/5e162404ce4538594a882150b7ca466312420e76",
      },
      {
        title: "Resolve VGA graphics display issue with complete Mode 13h setup",
        date: "January 24, 2026",
        type: "Commit",
        description: "Implement complete VGA Mode 13h register configuration in boot.asm including CRTC timing, sequencer, graphics controller, and palette initialization. Move palette setup to 32-bit mode before long mode transition to ensure proper color display. Simplify vga_graphics.c with diagnostic functions and direct framebuffer access. Add test pattern drawing in boot.asm and kernel main for verification. Update bug tracking to mark VGA display issue as resolved.",
        commitCode: "2b860d6",
        commitUrl: "https://github.com/urmoit/GamerOS/commit/2b860d6a1ef736856e217a8e64a6b5c06a089051",
      },
      {
        title: "Enhance build scripts and update bug tracking documentation",
        date: "January 21, 2026",
        type: "Commit",
        description:
          "Updated `build.bat` and `build-iso.bat` to include a pause and clearer completion messages. Revised `currentbugs.md` to reflect 28 total bugs with updated severity counts, added new reports for VGA graphics display issues and IPC system stubbing, improved documentation for unresolved issues and suggested fixes, and updated QEMU boot log timestamp for accuracy.",
        commitCode: "467b30a",
        commitUrl: "https://github.com/urmoit/GamerOS/commit/467b30a72928dbf026fc58fbf9359bb7c1985292",
      },
      {
        title: "Update bug tracking documentation and enhance kernel functionality",
        date: "January 15, 2026",
        type: "Commit",
        description: "Revised `currentbugs.md` to reflect a decrease in total bugs to 19, with updated counts for critical and resolved issues. Removed the critical bug entry for the DEXLFOK boot hang as it has been resolved. Added a fallback mechanism in `vga_draw_char` to render text in text mode if graphics mode is not initialized. Improved string handling functions by moving `strlen` and `strcpy` to `string.c` for better code organization. Updated `boot.asm` to set VGA mode 13h directly and improved the boot process with enhanced debug messages. Cleaned up the HAL initialization process to ensure proper setup in 64-bit mode.",
        commitCode: "aa1e546",
        commitUrl: "https://github.com/urmoit/GamerOS/commit/aa1e546502dbe2803432795f99b78fe6890a8674",
      },
      {
        title: "Update current bugs documentation and resolve several issues",
        date: "January 14, 2026",
        type: "Commit",
        description: "Revised currentbugs.md to reflect an increase in total bugs to 20, with updated counts for critical, high, medium, and low priority issues. Documented the resolution of 5 bugs, including critical issues related to duplicate includes and uninitialized variables. Added new bug reports for implicit function declarations and color value overflows in the GUI application. Implemented a safety check in draw_tab_bar to prevent potential division by zero. Removed unused process functions from main.c to optimize memory usage.",
        commitCode: "1d4ecb2",
        commitUrl: "https://github.com/urmoit/GamerOS/commit/1d4ecb20daa7ac73159c9ea773c4f9d4f6f43a59",
      },
      {
        title: "Update current bugs documentation and enhance kernel boot process",
        date: "January 14, 2026",
        type: "Commit",
        description: "Revised currentbugs.md to include a summary of total bugs, categorized by severity. Added debug output to kernel_main for better visibility during boot. Improved CPU detection in boot.asm with comprehensive checks and debug messages for better troubleshooting. Updated memory management in the boot process to ensure safe addresses for page tables.",
        commitCode: "70fba78",
        commitUrl: "https://github.com/urmoit/GamerOS/commit/70fba78de2e3c123f2bfd4f5aea08996eee8d172",
      },
      {
        title: "Enhance QEMU boot process and GUI application",
        date: "January 14, 2026",
        type: "Commit",
        description: "Updated run-qemu.bat to use -cpu max and log output to qemu-debug.log. Added detailed CPU state logging to qemu-debug.log for better debugging. Modified GUI application to increase window height and reduce tab count, focusing on home and changelog tabs. Updated changelog content to reflect recent development milestones and features. Adjusted boot configuration in grub.cfg for direct booting without menu display.",
        commitCode: "f50fb62",
        commitUrl: "https://github.com/urmoit/GamerOS/commit/f50fb62ff112cf56a6025298f8b9bb21f6160d59",
      },
      {
        title: "Refactor build scripts and update documentation",
        date: "January 14, 2026",
        type: "Commit",
        description: "Updated build-iso.bat to use make build-x86_64 instead of make build-iso. Enhanced currentbugs.md to reflect new remaining issues and updated statistics. Improved debug.bat to check for QEMU in multiple common locations and provide clearer error messages. Added a comprehensive QEMU tutorial in QemuTut.md with installation and troubleshooting instructions. Updated README.md to remove VMware references and include the new QEMU tutorial. Cleaned up the license file for clarity and added detailed permissions and prohibitions. Removed obsolete files and updated the Makefile to reflect changes in source file organization.",
        commitCode: "21d5dce",
        commitUrl: "https://github.com/urmoit/GamerOS/commit/21d5dce0b6db2f416201a61e586fa6e206acb657",
      },
      {
        title: "Added cursor worktree",
        date: "January 14, 2026",
        type: "Commit",
        description: "Added cursor worktree for improved development workflow.",
        commitCode: "259e723",
        commitUrl: "https://github.com/urmoit/GamerOS/commit/259e723ec1704b43a9182110ecf7b27dcee35e44",
      },
      {
        title: "GamerOS Development Kickoff",
        date: "January 2026",
        type: "Announcement",
        description: "We've officially started development on GamerOS, a revolutionary operating system that will seamlessly run Windows, Linux, and Android applications. This marks the beginning of an ambitious project to create a unified gaming platform.",
      },
      {
        title: "Open Source Commitment",
        date: "January 2026",
        type: "Announcement",
        description: "GamerOS will be fully open source under the MIT license. We believe in transparency and community-driven development. All code, documentation, and assets will be available on GitHub.",
      },
      {
        title: "Looking for Contributors",
        date: "January 2026",
        type: "Community",
        description: "We're actively seeking contributors in kernel development, UI design, documentation, and testing. All skill levels welcome! Whether you're an experienced OS developer or just getting started, there's a place for you.",
      },
    ],
  },
};

const availableMonths = [
  { slug: "february-2026", label: "February 2026" },
  { slug: "january-2026", label: "January 2026" },
];

// Gaming-themed type configuration with neon colors
const typeConfig = {
  Commit: {
    color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    icon: GitCommit,
    bgColor: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
    glowColor: "shadow-cyan-500/20",
    gradient: "from-cyan-400 to-cyan-500",
  },
  Announcement: {
    color: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    icon: Megaphone,
    bgColor: "bg-amber-500/10",
    iconColor: "text-amber-400",
    glowColor: "shadow-amber-500/20",
    gradient: "from-amber-400 to-amber-500",
  },
  Community: {
    color: "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30",
    icon: Users,
    bgColor: "bg-fuchsia-500/10",
    iconColor: "text-fuchsia-400",
    glowColor: "shadow-fuchsia-500/20",
    gradient: "from-fuchsia-400 to-fuchsia-500",
  },
};

const filterOptions: NewsType[] = ["All", "Commit", "Announcement", "Community"];

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

const MonthlyNews = () => {
  const { month } = useParams<{ month: string }>();
  const currentMonth = month || "january-2026";
  const data = monthlyNewsData[currentMonth];

  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<NewsType>("All");
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const currentIndex = availableMonths.findIndex((m) => m.slug === currentMonth);
  const prevMonth = currentIndex > 0 ? availableMonths[currentIndex - 1] : null;
  const nextMonth = currentIndex < availableMonths.length - 1 ? availableMonths[currentIndex + 1] : null;

  const filteredItems = useMemo(() => {
    if (!data) return [];
    let items = [...data.items];

    if (activeFilter !== "All") {
      items = items.filter((item) => item.type === activeFilter);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      items = items.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
      );
    }

    return items;
  }, [data, searchQuery, activeFilter]);

  const stats = data ? {
    total: data.items.length,
    commits: data.items.filter((i) => i.type === "Commit").length,
    announcements: data.items.filter((i) => i.type === "Announcement").length,
    community: data.items.filter((i) => i.type === "Community").length,
  } : null;

  const toggleExpand = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  if (!data) {
    return (
      <PageTransition>
        <div className="min-h-screen flex flex-col bg-[hsl(225_25%_6%)]">
          <Header />
          <main className="flex-1 flex items-center justify-center">
            <div className="text-center py-32 px-4">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 border border-cyan-500/30 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/10">
                <Calendar className="w-12 h-12 text-cyan-400" />
              </div>
              <h1 className="text-4xl font-bold mb-4 text-gaming">Month Not Found</h1>
              <p className="text-white/60 mb-8 max-w-md mx-auto">
                This monthly news archive doesn't exist yet. Check back later for updates!
              </p>
              <Button asChild size="lg" className="btn-neon">
                <Link to="/news">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to News
                </Link>
              </Button>
            </div>
          </main>
          <Footer />
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-[hsl(225_25%_6%)]">
        <Header />

        <main className="flex-1">
          {/* Hero Section with Gaming Aesthetic */}
          <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-[128px]" />
            
            {/* Animated gradient orbs */}
            <motion.div
              className="absolute top-1/4 right-10 w-64 h-64 bg-gradient-to-br from-cyan-500/30 to-transparent rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 left-10 w-72 h-72 bg-gradient-to-br from-fuchsia-500/20 to-transparent rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="container mx-auto px-4 relative">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="text-center max-w-4xl mx-auto"
              >
                {/* Gaming Badge */}
                <motion.div variants={itemVariants} className="mb-6">
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card border-cyan-500/30">
                    <Gamepad2 className="w-5 h-5 text-cyan-400" />
                    <span className="text-sm font-bold text-gaming uppercase tracking-wider">Monthly Archive</span>
                  </div>
                </motion.div>

                {/* Month/Year Display */}
                <motion.div variants={itemVariants}>
                  <h1 className="text-5xl md:text-7xl font-black mb-6">
                    <span className="text-gaming">{data.month}</span>
                    <span className="text-white/90"> {data.year}</span>
                  </h1>
                </motion.div>

                <motion.p variants={itemVariants} className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
                  {data.summary}
                </motion.p>

                {/* Month Navigation */}
                <motion.div variants={itemVariants} className="flex items-center justify-center gap-4">
                  {prevMonth ? (
                    <Link
                      to={`/news/monthly/${prevMonth.slug}`}
                      className="group flex items-center gap-2 px-5 py-3 rounded-xl glass-card glass-card-hover border-white/10 hover:border-cyan-500/50 transition-all duration-300"
                    >
                      <ChevronLeft className="w-5 h-5 text-cyan-400 group-hover:-translate-x-1 transition-transform" />
                      <span className="text-white/80 font-medium">{prevMonth.label}</span>
                    </Link>
                  ) : (
                    <div className="px-5 py-3 rounded-xl glass-card border-white/5 opacity-50 cursor-not-allowed">
                      <span className="text-white/40 font-medium flex items-center gap-2">
                        <ChevronLeft className="w-5 h-5" />
                        Previous
                      </span>
                    </div>
                  )}

                  <Link
                    to="/news"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl glass-card glass-card-hover border-white/10 hover:border-fuchsia-500/50 transition-all duration-300"
                  >
                    <FileText className="w-5 h-5 text-fuchsia-400" />
                    <span className="text-white/80 font-medium">All News</span>
                  </Link>

                  {nextMonth ? (
                    <Link
                      to={`/news/monthly/${nextMonth.slug}`}
                      className="group flex items-center gap-2 px-5 py-3 rounded-xl glass-card glass-card-hover border-white/10 hover:border-cyan-500/50 transition-all duration-300"
                    >
                      <span className="text-white/80 font-medium">{nextMonth.label}</span>
                      <ChevronRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ) : (
                    <div className="px-5 py-3 rounded-xl glass-card border-white/5 opacity-50 cursor-not-allowed">
                      <span className="text-white/40 font-medium flex items-center gap-2">
                        Next
                        <ChevronRight className="w-5 h-5" />
                      </span>
                    </div>
                  )}
                </motion.div>
              </motion.div>

              {/* Gaming Stats Cards */}
              {stats && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto"
                >
                  {[
                    { label: "Total Updates", value: stats.total, icon: Trophy, color: "from-cyan-400 to-cyan-500", shadowColor: "shadow-cyan-500/20" },
                    { label: "Commits", value: stats.commits, icon: GitCommit, color: "from-cyan-400 to-blue-500", shadowColor: "shadow-cyan-500/20" },
                    { label: "Announcements", value: stats.announcements, icon: Megaphone, color: "from-amber-400 to-orange-500", shadowColor: "shadow-amber-500/20" },
                    { label: "Community", value: stats.community, icon: Users, color: "from-fuchsia-400 to-purple-500", shadowColor: "shadow-fuchsia-500/20" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                      whileHover={{ scale: 1.05, y: -4 }}
                      className="glass-card glass-card-hover p-5 text-center group"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-3 shadow-lg ${stat.shadowColor} group-hover:shadow-xl group-hover:${stat.shadowColor} transition-shadow duration-300`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className={`text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>{stat.value}</div>
                      <div className="text-xs text-white/50 font-medium uppercase tracking-wider mt-1">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </section>

          {/* Highlights Section */}
          {data.highlights && data.highlights.length > 0 && (
            <section className="py-16 border-y border-white/5 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-3 mb-8 justify-center"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gaming">Month Highlights</h2>
                </motion.div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                  {data.highlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      whileHover={{ scale: 1.02, y: -4 }}
                      className="glass-card glass-card-hover p-5 flex items-start gap-4 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 border border-cyan-500/30 flex items-center justify-center shrink-0 group-hover:border-cyan-400/50 transition-colors">
                        <span className="text-sm font-bold text-cyan-400">{i + 1}</span>
                      </div>
                      <p className="text-sm text-white/70 leading-relaxed">{highlight}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Filter & Content */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              {/* Gaming Filter Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card p-6 mb-10 border-white/10"
              >
                <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
                  {/* Search with Gaming Style */}
                  <div className="relative w-full lg:w-96 group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400/60 group-focus-within:text-cyan-400 transition-colors" />
                    <Input
                      placeholder="Search updates..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-12 pr-10 py-6 bg-white/5 border-white/10 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 rounded-xl text-white placeholder:text-white/40 transition-all"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-cyan-400 transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    )}
                  </div>

                  {/* Gaming Filter Buttons */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <Filter className="w-5 h-5 text-cyan-400/60" />
                    <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10">
                      {filterOptions.map((filter) => {
                        const isActive = activeFilter === filter;
                        const filterColors: Record<string, string> = {
                          All: "from-cyan-400 to-fuchsia-400",
                          Commit: "from-cyan-400 to-cyan-500",
                          Announcement: "from-amber-400 to-orange-500",
                          Community: "from-fuchsia-400 to-purple-500",
                        };
                        
                        return (
                          <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`relative px-5 py-2.5 text-sm font-bold rounded-xl transition-all duration-300 ${
                              isActive
                                ? "text-white shadow-lg"
                                : "text-white/50 hover:text-white/80 hover:bg-white/5"
                            }`}
                          >
                            {isActive && (
                              <motion.div
                                layoutId="activeFilter"
                                className={`absolute inset-0 bg-gradient-to-r ${filterColors[filter]} rounded-xl`}
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                              />
                            )}
                            <span className="relative z-10">{filter}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Results Count */}
              <div className="flex items-center justify-between mb-8">
                <p className="text-sm text-white/50">
                  Showing <span className="font-bold text-cyan-400">{filteredItems.length}</span> of{" "}
                  <span className="font-bold text-white/80">{data.items.length}</span> updates
                </p>
                {(searchQuery || activeFilter !== "All") && (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setActiveFilter("All");
                    }}
                    className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 font-medium transition-colors"
                  >
                    Clear filters <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Gaming Timeline */}
              <AnimatePresence mode="wait">
                {filteredItems.length > 0 ? (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative"
                  >
                    {/* Glowing Timeline Line */}
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-fuchsia-500/30 to-transparent hidden md:block" />

                    <div className="space-y-6">
                      {filteredItems.map((item, i) => {
                        const config = typeConfig[item.type];
                        const TypeIcon = config.icon;
                        const isExpanded = expandedItems.has(i);

                        return (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                            className="relative md:pl-20"
                          >
                            {/* Glowing Timeline Dot */}
                            <div className={`absolute left-4 top-6 w-5 h-5 rounded-full border-2 border-[hsl(225_25%_6%)] ${config.bgColor} hidden md:flex items-center justify-center z-10 shadow-lg ${config.glowColor}`}>
                              <motion.div
                                className={`w-2 h-2 rounded-full bg-gradient-to-r ${config.gradient}`}
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                              />
                            </div>

                            <motion.div
                              whileHover={{ scale: 1.01 }}
                              className={`glass-card glass-card-hover p-6 cursor-pointer group border-white/10 hover:border-cyan-500/30 transition-all duration-300 ${isExpanded ? 'ring-1 ring-cyan-500/20' : ''}`}
                              onClick={() => toggleExpand(i)}
                            >
                              <div className="flex flex-col gap-4">
                                {/* Header */}
                                <div className="flex items-start justify-between gap-4">
                                  <div className="flex items-start gap-4 flex-1 min-w-0">
                                    {/* Mobile Icon */}
                                    <div className={`w-12 h-12 rounded-xl ${config.bgColor} border ${config.color.split(' ')[2]} flex items-center justify-center shrink-0 md:hidden shadow-lg ${config.glowColor}`}>
                                      <TypeIcon className={`w-6 h-6 ${config.iconColor}`} />
                                    </div>
                                    
                                    <div className="flex-1 min-w-0">
                                      <div className="flex flex-wrap items-center gap-2 mb-2">
                                        <Badge className={`text-xs font-bold px-3 py-1 rounded-lg border ${config.color} shadow-sm ${config.glowColor}`}>
                                          <TypeIcon className={`w-3 h-3 mr-1 ${config.iconColor}`} />
                                          {item.type}
                                        </Badge>
                                        {item.commitCode && (
                                          <Badge className="font-mono text-xs bg-white/10 text-cyan-400 border-cyan-500/30 px-3 py-1 rounded-lg">
                                            <Code2 className="w-3 h-3 mr-1" />
                                            {item.commitCode}
                                          </Badge>
                                        )}
                                        <span className="text-xs text-white/40 flex items-center gap-1.5">
                                          <Clock className="w-3.5 h-3.5" />
                                          {item.date}
                                        </span>
                                      </div>
                                      <h3 className="font-bold text-lg text-white/90 group-hover:text-cyan-400 transition-colors leading-tight">
                                        {item.title}
                                      </h3>
                                    </div>
                                  </div>
                                  
                                  <ChevronRight className={`w-6 h-6 text-white/30 transition-all duration-300 shrink-0 group-hover:text-cyan-400 ${isExpanded ? "rotate-90 text-cyan-400" : ""}`} />
                                </div>

                                {/* Description */}
                                <AnimatePresence>
                                  {isExpanded && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: "auto" }}
                                      exit={{ opacity: 0, height: 0 }}
                                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                      className="overflow-hidden"
                                    >
                                      <p className="text-sm text-white/60 leading-relaxed pt-4 border-t border-white/10">
                                        {item.description}
                                      </p>
                                      
                                      {item.commitUrl && (
                                        <div className="mt-4">
                                          {item.commitUrl.startsWith("/") ? (
                                            <Link
                                              to={item.commitUrl}
                                              onClick={(e) => e.stopPropagation()}
                                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 border border-cyan-500/30 text-cyan-400 text-sm font-bold hover:from-cyan-500/30 hover:to-cyan-600/30 hover:border-cyan-400/50 transition-all duration-300 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20"
                                            >
                                              <FileText className="w-4 h-4" />
                                              <span>Read More</span>
                                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                          ) : (
                                            <a
                                              href={item.commitUrl}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              onClick={(e) => e.stopPropagation()}
                                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-fuchsia-500/20 to-purple-600/20 border border-fuchsia-500/30 text-fuchsia-400 text-sm font-bold hover:from-fuchsia-500/30 hover:to-purple-600/30 hover:border-fuchsia-400/50 transition-all duration-300 shadow-lg shadow-fuchsia-500/10 hover:shadow-fuchsia-500/20"
                                            >
                                              <GitCommit className="w-4 h-4" />
                                              <code className="font-mono">{item.commitCode}</code>
                                              <ExternalLink className="w-4 h-4" />
                                            </a>
                                          )}
                                        </div>
                                      )}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            </motion.div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-20"
                  >
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 flex items-center justify-center mx-auto mb-6">
                      <Search className="w-10 h-10 text-white/30" />
                    </div>
                    <h3 className="text-xl font-bold text-white/80 mb-3">No results found</h3>
                    <p className="text-white/50 mb-6">
                      Try adjusting your search or filter criteria
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSearchQuery("");
                        setActiveFilter("All");
                      }}
                      className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400/50"
                    >
                      Clear filters
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>

          {/* Available Months - Gaming Style */}
          <section className="py-16 border-t border-white/5 bg-gradient-to-b from-transparent to-white/[0.02]">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-10"
              >
                <h2 className="text-2xl font-bold text-gaming-alt mb-2">Browse Archives</h2>
                <p className="text-white/50">Explore previous months</p>
              </motion.div>
              
              <div className="flex flex-wrap justify-center gap-4">
                {availableMonths.map((m, i) => (
                  <motion.div
                    key={m.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <Link
                      to={`/news/monthly/${m.slug}`}
                      className={`group relative px-6 py-4 rounded-xl font-bold transition-all duration-300 block overflow-hidden ${
                        currentMonth === m.slug
                          ? "bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg shadow-cyan-500/30"
                          : "glass-card glass-card-hover border-white/10 hover:border-cyan-500/30 text-white/70 hover:text-white"
                      }`}
                    >
                      {currentMonth === m.slug && (
                        <motion.div
                          layoutId="activeMonth"
                          className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-600"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {m.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Gaming CTA Section */}
          <section className="py-20 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-cyan-500/10 rounded-full blur-3xl" />
            
            <div className="container mx-auto px-4 relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-card p-10 md:p-14 text-center max-w-3xl mx-auto border-cyan-500/20 shadow-2xl shadow-cyan-500/5"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                  className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-fuchsia-500 flex items-center justify-center mx-auto mb-8 shadow-xl shadow-cyan-500/20"
                >
                  <Zap className="w-10 h-10 text-white" />
                </motion.div>
                
                <h2 className="text-3xl md:text-4xl font-black mb-4">
                  <span className="text-gaming">Join the</span>{" "}
                  <span className="text-gaming-alt">Development</span>
                </h2>
                
                <p className="text-white/60 mb-10 max-w-lg mx-auto text-lg">
                  Contribute to GamerOS and help shape the future of gaming operating systems. Every commit counts!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="btn-neon px-8 py-6 text-base">
                    <a
                      href="https://github.com/urmoit/GamerOS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      <Code2 className="w-5 h-5" />
                      View on GitHub
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </Button>
                  
                  <Button variant="outline" size="lg" asChild className="border-white/20 text-white/80 hover:bg-white/10 hover:border-cyan-500/50 hover:text-cyan-400 px-8 py-6 text-base">
                    <Link to="/bug-tracking" className="gap-2">
                      <MessageSquare className="w-5 h-5" />
                      View Bug Tracker
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

export default MonthlyNews;
