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
  Sparkles
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
  featured?: boolean;
}

const newsItems: NewsItem[] = [
  {
    id: "0",
    title: "Enhance build scripts and update bug tracking documentation",
    date: "January 21, 2026",
    type: "Commit",
    description:
      "Updated `build.bat` and `build-iso.bat` to include a pause and clearer completion messages. Revised `currentbugs.md` to reflect 28 total bugs with updated severity counts, added new reports for VGA graphics display issues and IPC system stubbing, improved documentation for unresolved issues and suggested fixes, and updated QEMU boot log timestamp for accuracy.",
    icon: Code2,
    commitCode: "467b30a",
    commitUrl: "https://github.com/urmoit/GamerOS/commit/467b30a72928dbf026fc58fbf9359bb7c1985292",
    featured: true,
  },
  {
    id: "1",
    title: "Update bug tracking documentation and enhance kernel functionality",
    date: "January 15, 2026",
    type: "Commit",
    description: "Revised `currentbugs.md` to reflect a decrease in total bugs to 19, with updated counts for critical and resolved issues. Removed the critical bug entry for the DEXLFOK boot hang as it has been resolved. Added a fallback mechanism in `vga_draw_char` to render text in text mode if graphics mode is not initialized.",
    icon: Code2,
    commitCode: "aa1e546",
    commitUrl: "https://github.com/urmoit/GamerOS/commit/aa1e546502dbe2803432795f99b78fe6890a8674",
    featured: true,
  },
  {
    id: "2",
    title: "Update current bugs documentation and resolve several issues",
    date: "January 14, 2026",
    type: "Commit",
    description: "Revised currentbugs.md to reflect an increase in total bugs to 20. Documented the resolution of 5 bugs. Added new bug reports for implicit function declarations and color value overflows. Implemented safety checks in draw_tab_bar.",
    icon: Code2,
    commitCode: "1d4ecb2",
    commitUrl: "https://github.com/urmoit/GamerOS/commit/1d4ecb20daa7ac73159c9ea773c4f9d4f6f43a59",
  },
  {
    id: "3",
    title: "Update current bugs documentation and enhance kernel boot process",
    date: "January 14, 2026",
    type: "Commit",
    description: "Revised currentbugs.md to include a summary of total bugs, categorized by severity. Added debug output to kernel_main for better visibility during boot. Improved CPU detection in boot.asm with comprehensive checks.",
    icon: Code2,
    commitCode: "70fba78",
    commitUrl: "https://github.com/urmoit/GamerOS/commit/70fba78de2e3c123f2bfd4f5aea08996eee8d172",
  },
  {
    id: "4",
    title: "Enhance QEMU boot process and GUI application",
    date: "January 14, 2026",
    type: "Commit",
    description: "Updated run-qemu.bat to use -cpu max and log output to qemu-debug.log. Modified GUI application to increase window height and reduce tab count. Updated changelog content to reflect recent development milestones.",
    icon: Code2,
    commitCode: "f50fb62",
    commitUrl: "https://github.com/urmoit/GamerOS/commit/f50fb62ff112cf56a6025299f8b9bb21f6160d59",
  },
  {
    id: "5",
    title: "Refactor build scripts and update documentation",
    date: "January 14, 2026",
    type: "Commit",
    description: "Updated build-iso.bat to use make build-x86_64. Enhanced currentbugs.md with new remaining issues. Improved debug.bat to check for QEMU in multiple common locations. Added comprehensive QEMU tutorial.",
    icon: Code2,
    commitCode: "21d5dce",
    commitUrl: "https://github.com/urmoit/GamerOS/commit/21d5dce0b6db2f416201a61e586fa6e206acb657",
  },
  {
    id: "6",
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
    featured: true,
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
    title: "Looking for Contributors",
    date: "January 2026",
    type: "Community",
    description: "We're actively seeking contributors in kernel development, UI design, documentation, and testing. All skill levels welcome!",
    icon: Users,
  },
];

const filterOptions: NewsType[] = ["All", "Commit", "Announcement", "Community"];

const typeConfig = {
  Commit: {
    color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    icon: GitCommit,
  },
  Announcement: {
    color: "bg-primary/10 text-primary border-primary/20",
    icon: Megaphone,
  },
  Community: {
    color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    icon: Users,
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

  const featuredItems = newsItems.filter((item) => item.featured);
  const stats = {
    total: newsItems.length,
    commits: newsItems.filter((i) => i.type === "Commit").length,
    announcements: newsItems.filter((i) => i.type === "Announcement").length,
    community: newsItems.filter((i) => i.type === "Community").length,
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative pt-32 pb-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            
            <div className="container mx-auto px-4 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-3xl mx-auto"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Latest Updates</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  News & Updates
                </h1>
                <p className="text-lg text-muted-foreground">
                  Stay up to date with the latest GamerOS development news, commits, and community announcements.
                </p>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-wrap justify-center gap-6 mt-10"
              >
                {[
                  { label: "Total Updates", value: stats.total, icon: Tag },
                  { label: "Commits", value: stats.commits, icon: GitCommit },
                  { label: "Announcements", value: stats.announcements, icon: Megaphone },
                  { label: "Community", value: stats.community, icon: Users },
                ].map((stat, i) => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-3 px-5 py-3 rounded-xl glass-card"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Featured Section */}
          {featuredItems.length > 0 && (
            <section className="py-12 border-y border-border/50 bg-muted/30">
              <div className="container mx-auto px-4">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-semibold">Featured</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {featuredItems.map((item, i) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="glass-card p-6 fluent-hover group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shrink-0">
                          <item.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className={typeConfig[item.type].color}>
                              {item.type}
                            </Badge>
                            {item.commitCode && (
                              <Badge variant="secondary" className="font-mono text-xs">
                                {item.commitCode}
                              </Badge>
                            )}
                          </div>
                          <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                            {item.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {item.date}
                            </span>
                            {item.commitUrl && (
                              <a
                                href={item.commitUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-primary flex items-center gap-1 hover:underline"
                              >
                                View commit <ExternalLink className="w-3 h-3" />
                              </a>
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
                      placeholder="Search news..."
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

                  <div className="flex flex-wrap items-center gap-3">
                    {/* Type Filters */}
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

                    {/* Sort Dropdown */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm" className="gap-2">
                          <Filter className="w-4 h-4" />
                          {sortOrder === "newest" ? "Newest First" : "Oldest First"}
                          <ChevronDown className="w-3 h-3" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setSortOrder("newest")}>
                          Newest First
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setSortOrder("oldest")}>
                          Oldest First
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Archive Link */}
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/news/monthly/january-2026" className="gap-2">
                        <Calendar className="w-4 h-4" />
                        Monthly Archive
                      </Link>
                    </Button>

                    {/* Changelog Links */}
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/gameros-changelog" className="gap-2">
                        <GitCommit className="w-4 h-4" />
                        GamerOS Changelog
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/changelog" className="gap-2">
                        <Tag className="w-4 h-4" />
                        Website Changelog
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Results Count */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-muted-foreground">
                  Showing <span className="font-medium text-foreground">{filteredItems.length}</span> of{" "}
                  <span className="font-medium text-foreground">{newsItems.length}</span> updates
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
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          className="glass-card p-5 fluent-hover group"
                        >
                          <div className="flex flex-col md:flex-row md:items-center gap-4">
                            <div className="flex items-center gap-4 flex-1 min-w-0">
                              <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                                item.type === "Commit" ? "bg-emerald-500/10" :
                                item.type === "Announcement" ? "bg-primary/10" : "bg-purple-500/10"
                              }`}>
                                <TypeIcon className={`w-5 h-5 ${
                                  item.type === "Commit" ? "text-emerald-500" :
                                  item.type === "Announcement" ? "text-primary" : "text-purple-500"
                                }`} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <Badge variant="outline" className={`text-xs ${typeConfig[item.type].color}`}>
                                    {item.type}
                                  </Badge>
                                  {item.commitCode && (
                                    <Badge variant="secondary" className="font-mono text-xs">
                                      {item.commitCode}
                                    </Badge>
                                  )}
                                </div>
                                <h3 className="font-medium line-clamp-1 group-hover:text-primary transition-colors">
                                  {item.title}
                                </h3>
                                <p className="text-sm text-muted-foreground line-clamp-1 mt-1">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-4 md:shrink-0">
                              <span className="text-xs text-muted-foreground flex items-center gap-1 whitespace-nowrap">
                                <Clock className="w-3 h-3" />
                                {item.date}
                              </span>
                              {item.commitUrl && (
                                <a
                                  href={item.commitUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1 text-sm text-primary hover:underline whitespace-nowrap"
                                >
                                  View <ExternalLink className="w-3 h-3" />
                                </a>
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

          {/* CTA Section */}
          <section className="py-16 border-t border-border/50">
            <div className="container mx-auto px-4">
              <div className="glass-card p-8 md:p-12 text-center max-w-3xl mx-auto">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Want to Contribute?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                  GamerOS is open source and we welcome contributions from developers of all skill levels.
                  Join our community and help shape the future of gaming.
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
                    <Link to="/roadmap" className="gap-2">
                      View Roadmap
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

export default News;
