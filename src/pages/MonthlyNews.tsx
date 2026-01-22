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
  FileText
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
  "january-2026": {
    month: "January",
    year: "2026",
    summary: "Development kickoff, build system improvements, bug tracking updates, and QEMU integration enhancements.",
    highlights: [
      "Bug tracking updated to 28 total bugs (new VGA + IPC reports)",
      "Resolved critical DEXLFOK boot hang issue",
      "Improved kernel functionality and VGA text rendering",
      "Enhanced QEMU debugging capabilities",
      "5 bugs resolved, comprehensive documentation updates",
    ],
    items: [
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
        commitUrl: "https://github.com/urmoit/GamerOS/commit/f50fb62ff112cf56a6025299f8b9bb21f6160d59",
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
  { slug: "january-2026", label: "January 2026" },
];

const typeConfig = {
  Commit: {
    color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    icon: GitCommit,
    bgColor: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
  },
  Announcement: {
    color: "bg-primary/10 text-primary border-primary/20",
    icon: Megaphone,
    bgColor: "bg-primary/10",
    iconColor: "text-primary",
  },
  Community: {
    color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    icon: Users,
    bgColor: "bg-purple-500/10",
    iconColor: "text-purple-500",
  },
};

const filterOptions: NewsType[] = ["All", "Commit", "Announcement", "Community"];

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
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 flex items-center justify-center">
            <div className="text-center py-32 px-4">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-10 h-10 text-muted-foreground" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Month Not Found</h1>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                This monthly news archive doesn't exist yet. Check back later for updates!
              </p>
              <Button asChild size="lg">
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
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative pt-32 pb-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-emerald-500/5" />
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
            
            <div className="container mx-auto px-4 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-3xl mx-auto"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Monthly Archive</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {data.month} <span className="text-primary">{data.year}</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  {data.summary}
                </p>
              </motion.div>

              {/* Month Navigation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center justify-center gap-4 mt-8"
              >
                {prevMonth ? (
                  <Button variant="outline" asChild>
                    <Link to={`/news/monthly/${prevMonth.slug}`}>
                      <ChevronLeft className="w-4 h-4 mr-1" />
                      {prevMonth.label}
                    </Link>
                  </Button>
                ) : (
                  <Button variant="outline" disabled>
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Previous
                  </Button>
                )}
                
                <Button variant="ghost" asChild>
                  <Link to="/news" className="gap-2">
                    <FileText className="w-4 h-4" />
                    All News
                  </Link>
                </Button>

                {nextMonth ? (
                  <Button variant="outline" asChild>
                    <Link to={`/news/monthly/${nextMonth.slug}`}>
                      {nextMonth.label}
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                ) : (
                  <Button variant="outline" disabled>
                    Next
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                )}
              </motion.div>

              {/* Stats */}
              {stats && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-3xl mx-auto"
                >
                  {[
                    { label: "Total Updates", value: stats.total, icon: Tag, color: "text-foreground" },
                    { label: "Commits", value: stats.commits, icon: GitCommit, color: "text-emerald-500" },
                    { label: "Announcements", value: stats.announcements, icon: Megaphone, color: "text-primary" },
                    { label: "Community", value: stats.community, icon: Users, color: "text-purple-500" },
                  ].map((stat) => (
                    <div key={stat.label} className="glass-card p-4 text-center">
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mx-auto mb-2">
                        <stat.icon className={`w-5 h-5 ${stat.color}`} />
                      </div>
                      <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          </section>

          {/* Highlights Section */}
          {data.highlights && data.highlights.length > 0 && (
            <section className="py-12 border-y border-border/50 bg-muted/30">
              <div className="container mx-auto px-4">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-semibold">Month Highlights</h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {data.highlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="glass-card p-4 flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-primary">{i + 1}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{highlight}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Filter & Content */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              {/* Filter Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="glass-card p-4 mb-8"
              >
                <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                  {/* Search */}
                  <div className="relative w-full lg:w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Search this month..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 bg-background/50"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  {/* Type Filters */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <Filter className="w-4 h-4 text-muted-foreground" />
                    <div className="flex items-center gap-1 p-1 rounded-lg bg-muted/50">
                      {filterOptions.map((filter) => (
                        <button
                          key={filter}
                          onClick={() => setActiveFilter(filter)}
                          className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                            activeFilter === filter
                              ? "bg-primary text-primary-foreground shadow-sm"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted"
                          }`}
                        >
                          {filter}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Results Count */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-muted-foreground">
                  Showing <span className="font-medium text-foreground">{filteredItems.length}</span> of{" "}
                  <span className="font-medium text-foreground">{data.items.length}</span> updates
                </p>
                {(searchQuery || activeFilter !== "All") && (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setActiveFilter("All");
                    }}
                    className="text-sm text-primary hover:underline flex items-center gap-1"
                  >
                    Clear filters <X className="w-3 h-3" />
                  </button>
                )}
              </div>

              {/* Timeline */}
              <AnimatePresence mode="wait">
                {filteredItems.length > 0 ? (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative"
                  >
                    {/* Timeline line */}
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

                    <div className="space-y-4">
                      {filteredItems.map((item, i) => {
                        const config = typeConfig[item.type];
                        const TypeIcon = config.icon;
                        const isExpanded = expandedItems.has(i);

                        return (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            className="relative md:pl-16"
                          >
                            {/* Timeline dot */}
                            <div className={`absolute left-4 top-6 w-5 h-5 rounded-full border-2 border-background ${config.bgColor} hidden md:flex items-center justify-center z-10`}>
                              <div className={`w-2 h-2 rounded-full ${item.type === "Commit" ? "bg-emerald-500" : item.type === "Announcement" ? "bg-primary" : "bg-purple-500"}`} />
                            </div>

                            <div 
                              className="glass-card p-5 fluent-hover cursor-pointer group"
                              onClick={() => toggleExpand(i)}
                            >
                              <div className="flex flex-col gap-3">
                                {/* Header */}
                                <div className="flex items-start justify-between gap-4">
                                  <div className="flex items-start gap-3 flex-1 min-w-0">
                                    <div className={`w-10 h-10 rounded-lg ${config.bgColor} flex items-center justify-center shrink-0 md:hidden`}>
                                      <TypeIcon className={`w-5 h-5 ${config.iconColor}`} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex flex-wrap items-center gap-2 mb-1">
                                        <Badge variant="outline" className={`text-xs ${config.color}`}>
                                          {item.type}
                                        </Badge>
                                        {item.commitCode && (
                                          <Badge variant="secondary" className="font-mono text-xs">
                                            {item.commitCode}
                                          </Badge>
                                        )}
                                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                                          <Clock className="w-3 h-3" />
                                          {item.date}
                                        </span>
                                      </div>
                                      <h3 className="font-semibold group-hover:text-primary transition-colors">
                                        {item.title}
                                      </h3>
                                    </div>
                                  </div>
                                  <ChevronRight className={`w-5 h-5 text-muted-foreground transition-transform shrink-0 ${isExpanded ? "rotate-90" : ""}`} />
                                </div>

                                {/* Description */}
                                <AnimatePresence>
                                  {isExpanded && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: "auto" }}
                                      exit={{ opacity: 0, height: 0 }}
                                      transition={{ duration: 0.2 }}
                                      className="overflow-hidden"
                                    >
                                      <p className="text-sm text-muted-foreground leading-relaxed pt-2 border-t border-border/50">
                                        {item.description}
                                      </p>
                                      {item.commitUrl && (
                                        <a
                                          href={item.commitUrl}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          onClick={(e) => e.stopPropagation()}
                                          className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm hover:bg-primary/20 transition-colors"
                                        >
                                          <GitCommit className="w-4 h-4" />
                                          <code className="font-mono">{item.commitCode}</code>
                                          <ExternalLink className="w-3 h-3" />
                                        </a>
                                      )}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            </div>
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
                    className="text-center py-16"
                  >
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                      <Search className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">No results found</h3>
                    <p className="text-muted-foreground mb-4">
                      Try adjusting your search or filter criteria
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSearchQuery("");
                        setActiveFilter("All");
                      }}
                    >
                      Clear filters
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>

          {/* Available Months */}
          <section className="py-12 border-t border-border/50 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-xl font-semibold mb-6 text-center">Browse Archives</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {availableMonths.map((m) => (
                  <Link
                    key={m.slug}
                    to={`/news/monthly/${m.slug}`}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      currentMonth === m.slug
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "glass-card hover:bg-muted"
                    }`}
                  >
                    {m.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="glass-card p-8 md:p-12 text-center max-w-3xl mx-auto">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Code2 className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Want to Contribute?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                  Check out our GitHub repository and join the development. Every contribution counts!
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild size="lg">
                    <a
                      href="https://github.com/urmoit/GamerOS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      View on GitHub <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/bug-tracking" className="gap-2">
                      View Bug Tracker
                    </Link>
                  </Button>
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

export default MonthlyNews;
