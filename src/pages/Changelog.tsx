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
  ExternalLink,
  Rocket,
  Layout,
  Palette,
  Code2,
  FileText
} from "lucide-react";

type ChangeType = "feature" | "fix" | "improvement" | "breaking";

interface Change {
  type: ChangeType;
  description: string;
  component?: string;
}

interface Version {
  version: string;
  date: string;
  title: string;
  description: string;
  changes: Change[];
}

const changelogData: Version[] = [
  {
    version: "1.4.1",
    date: "January 21, 2026",
    title: "News, Bug Tracking, and Homepage Refresh",
    description: "Updated site content to reflect the latest GamerOS status and commit activity.",
    changes: [
      { type: "improvement", description: "Updated homepage stats to show 7,400+ lines of code", component: "Home" },
      { type: "feature", description: "Added new commit update (467b30a) to News page", component: "News" },
      { type: "feature", description: "Added new commit update (467b30a) to January 2026 Monthly Archive", component: "Monthly News" },
      { type: "improvement", description: "Updated Bug Tracking page to 28 total bugs with new VGA + IPC entries", component: "Bug Tracking" },
    ],
  },
  {
    version: "1.4.0",
    date: "January 19, 2026",
    title: "Changelog Pages & Theme Toggle",
    description: "Added GamerOS changelog page, enhanced theme toggle animations, and improved navigation.",
    changes: [
      { type: "feature", description: "Created GamerOS Changelog page with empty state", component: "GamerOS Changelog" },
      { type: "feature", description: "Added changelog buttons to News page filter bar", component: "News" },
      { type: "feature", description: "Added GamerOS changelog link to Download page", component: "Download" },
      { type: "improvement", description: "Enhanced theme toggle with rotating sun/moon animations", component: "ThemeToggle" },
      { type: "improvement", description: "Fixed milestones timeline icons and layout on Roadmap", component: "Roadmap" },
      { type: "fix", description: "Fixed changelog route not working from footer link", component: "Router" },
    ],
  },
  {
    version: "1.3.0",
    date: "January 17, 2026",
    title: "Roadmap & Navigation Overhaul",
    description: "Complete redesign of the roadmap page with interactive phases, milestones timeline, and enhanced footer navigation.",
    changes: [
      { type: "feature", description: "Redesigned Roadmap page with expandable development phases", component: "Roadmap" },
      { type: "feature", description: "Added interactive milestones timeline with visual progress", component: "Roadmap" },
      { type: "feature", description: "Added phase filtering (All, In Progress, Planned, Completed)", component: "Roadmap" },
      { type: "feature", description: "Added feature categories section with gradient icons", component: "Roadmap" },
      { type: "improvement", description: "Enhanced footer with Website Changelog link", component: "Footer" },
      { type: "improvement", description: "Added progress tracking with overall completion percentage", component: "Roadmap" },
    ],
  },
  {
    version: "1.2.0",
    date: "January 16, 2026",
    title: "News & Archive Redesign",
    description: "Major updates to the News and Monthly Archive pages with modern filtering, search, and timeline views.",
    changes: [
      { type: "feature", description: "Redesigned News page with search and type filters", component: "News" },
      { type: "feature", description: "Added featured news section with gradient highlights", component: "News" },
      { type: "feature", description: "Redesigned Monthly Archive with timeline view", component: "Monthly News" },
      { type: "feature", description: "Added expandable news items with full descriptions", component: "Monthly News" },
      { type: "improvement", description: "Added stats overview showing commits, announcements, and updates", component: "News" },
      { type: "improvement", description: "Enhanced month navigation with available archives", component: "Monthly News" },
    ],
  },
  {
    version: "1.1.0",
    date: "January 15, 2026",
    title: "Bug Tracking Enhancement",
    description: "Updated bug tracking page with latest bug data and improved resolved bugs display.",
    changes: [
      { type: "feature", description: "Updated bug summary with 20 total bugs tracked", component: "Bug Tracking" },
      { type: "feature", description: "Added resolved bugs section with checkmark indicators", component: "Bug Tracking" },
      { type: "improvement", description: "Updated detailed bug reports with new issues", component: "Bug Tracking" },
      { type: "fix", description: "Fixed bug category counts and severity levels", component: "Bug Tracking" },
    ],
  },
  {
    version: "1.0.0",
    date: "January 14, 2026",
    title: "Initial Website Launch",
    description: "First public release of the GamerOS website with core pages and features.",
    changes: [
      { type: "feature", description: "Created responsive homepage with hero section", component: "Index" },
      { type: "feature", description: "Added About page with project information", component: "About" },
      { type: "feature", description: "Added Download page with version selector", component: "Download" },
      { type: "feature", description: "Added FAQ page with common questions", component: "FAQ" },
      { type: "feature", description: "Added Bug Tracking page", component: "Bug Tracking" },
      { type: "feature", description: "Added News page with announcements", component: "News" },
      { type: "feature", description: "Implemented dark/light theme toggle", component: "Theme" },
      { type: "feature", description: "Added responsive header with mobile navigation", component: "Header" },
    ],
  },
];

const getChangeIcon = (type: ChangeType) => {
  switch (type) {
    case "feature": return <Sparkles className="w-4 h-4" />;
    case "fix": return <Bug className="w-4 h-4" />;
    case "improvement": return <Zap className="w-4 h-4" />;
    case "breaking": return <Wrench className="w-4 h-4" />;
  }
};

const getChangeColor = (type: ChangeType) => {
  switch (type) {
    case "feature": return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
    case "fix": return "bg-red-500/10 text-red-500 border-red-500/20";
    case "improvement": return "bg-blue-500/10 text-blue-500 border-blue-500/20";
    case "breaking": return "bg-orange-500/10 text-orange-500 border-orange-500/20";
  }
};

const Changelog = () => {
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

  const filteredChangelog = changelogData.filter(version => 
    version.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    version.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    version.changes.some(c => c.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const totalFeatures = changelogData.reduce((acc, v) => acc + v.changes.filter(c => c.type === "feature").length, 0);
  const totalFixes = changelogData.reduce((acc, v) => acc + v.changes.filter(c => c.type === "fix").length, 0);
  const totalImprovements = changelogData.reduce((acc, v) => acc + v.changes.filter(c => c.type === "improvement").length, 0);

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative pt-32 pb-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-emerald-500/5" />
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
            
            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Badge variant="outline" className="mb-6 px-4 py-2 text-sm border-primary/30 bg-primary/5">
                  <FileText className="w-4 h-4 mr-2" />
                  Website Changelog
                </Badge>
                
                <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                  What's{" "}
                  <span className="bg-gradient-to-r from-primary via-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                    New
                  </span>
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-2xl mb-8">
                  Track all updates, new features, and improvements made to the GamerOS website.
                </p>

                {/* Search */}
                <div className="relative max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Search changelog..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12 bg-background/50 backdrop-blur-sm"
                  />
                </div>
              </motion.div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-8 border-y border-border bg-card/50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Versions", value: changelogData.length, icon: Tag, color: "text-primary" },
                  { label: "Features", value: totalFeatures, icon: Sparkles, color: "text-emerald-500" },
                  { label: "Improvements", value: totalImprovements, icon: Zap, color: "text-blue-500" },
                  { label: "Bug Fixes", value: totalFixes, icon: Bug, color: "text-red-500" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center"
                  >
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-muted mb-2`}>
                      <stat.icon className={`w-5 h-5 ${stat.color}`} />
                    </div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Changelog Timeline */}
          <section className="py-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
                
                <div className="space-y-6">
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
                          {/* Timeline dot */}
                          <div className="absolute left-4 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background hidden md:flex items-center justify-center z-10">
                            <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                          </div>
                          
                          <div className="glass-card rounded-2xl overflow-hidden">
                            {/* Version Header */}
                            <button
                              onClick={() => toggleVersion(version.version)}
                              className="w-full p-6 flex items-start gap-4 hover:bg-muted/50 transition-colors text-left"
                            >
                              <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-3 mb-2">
                                  <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                                    <Tag className="w-3 h-3 mr-1" />
                                    v{version.version}
                                  </Badge>
                                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                                    <Calendar className="w-3.5 h-3.5" />
                                    {version.date}
                                  </span>
                                  <Badge variant="outline" className="text-xs">
                                    {version.changes.length} changes
                                  </Badge>
                                </div>
                                <h3 className="text-xl font-semibold mb-1">{version.title}</h3>
                                <p className="text-muted-foreground text-sm">{version.description}</p>
                              </div>
                              
                              <div className="text-muted-foreground mt-1">
                                {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                              </div>
                            </button>
                            
                            {/* Expanded Changes */}
                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-6 pb-6 pt-2 border-t border-border">
                                    <div className="space-y-3">
                                      {version.changes.map((change, ci) => (
                                        <motion.div
                                          key={ci}
                                          initial={{ opacity: 0, x: -10 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{ delay: ci * 0.03 }}
                                          className="flex items-start gap-3 p-3 rounded-xl bg-muted/50"
                                        >
                                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${getChangeColor(change.type)}`}>
                                            {getChangeIcon(change.type)}
                                          </div>
                                          <div className="flex-1 min-w-0">
                                            <p className="text-sm">{change.description}</p>
                                            {change.component && (
                                              <span className="text-xs text-muted-foreground mt-1 inline-flex items-center gap-1">
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
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-16"
                  >
                    <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">No results found</h3>
                    <p className="text-muted-foreground">Try adjusting your search query</p>
                  </motion.div>
                )}
              </div>
            </div>
          </section>

          {/* Legend */}
          <section className="py-12 bg-secondary/30">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-lg font-semibold mb-6 text-center">Change Types</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { type: "feature" as ChangeType, label: "New Feature", description: "Brand new functionality" },
                  { type: "improvement" as ChangeType, label: "Improvement", description: "Enhanced existing features" },
                  { type: "fix" as ChangeType, label: "Bug Fix", description: "Resolved issues" },
                  { type: "breaking" as ChangeType, label: "Breaking Change", description: "May require updates" },
                ].map((item) => (
                  <div 
                    key={item.type}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border"
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${getChangeColor(item.type)}`}>
                      {getChangeIcon(item.type)}
                    </div>
                    <div>
                      <div className="font-medium text-sm">{item.label}</div>
                      <div className="text-xs text-muted-foreground">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-10 rounded-3xl"
              >
                <Rocket className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-3">Stay Updated</h2>
                <p className="text-muted-foreground mb-6">
                  Follow our GitHub repository to get notified about the latest updates and releases.
                </p>
                <Button asChild size="lg">
                  <a href="https://github.com/urmoit/GamerOS" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View on GitHub
                  </a>
                </Button>
              </motion.div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Changelog;
