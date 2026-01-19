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
  Code2,
  GitCommit,
  Info
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
  commitUrl?: string;
  changes: Change[];
}

const changelogData: Version[] = [
  {
    version: "0.1.5",
    date: "January 15, 2026",
    title: "Bug Tracking & Kernel Enhancements",
    description: "Updated bug tracking documentation and enhanced kernel functionality with VGA text mode fallback.",
    commitUrl: "https://github.com/urmoit/GamerOS/commit/aa1e546502dbe2803432795f99b78fe6890a8674",
    changes: [
      { type: "fix", description: "Resolved DEXLFOK boot hang critical bug", component: "Boot" },
      { type: "feature", description: "Added fallback mechanism in vga_draw_char for text mode rendering", component: "VGA" },
      { type: "improvement", description: "Updated bug tracking to reflect 19 total bugs", component: "Documentation" },
    ],
  },
  {
    version: "0.1.4",
    date: "January 14, 2026",
    title: "Bug Resolution & Safety Checks",
    description: "Major bug fixes and implementation of safety checks in the drawing subsystem.",
    commitUrl: "https://github.com/urmoit/GamerOS/commit/1d4ecb20daa7ac73159c9ea773c4f9d4f6f43a59",
    changes: [
      { type: "fix", description: "Resolved 5 previously documented bugs", component: "Core" },
      { type: "fix", description: "Fixed implicit function declarations", component: "Compiler" },
      { type: "fix", description: "Fixed color value overflows", component: "Graphics" },
      { type: "improvement", description: "Implemented safety checks in draw_tab_bar", component: "GUI" },
    ],
  },
  {
    version: "0.1.3",
    date: "January 14, 2026",
    title: "Kernel Boot Process Enhancement",
    description: "Improved kernel boot process with better debugging and CPU detection.",
    commitUrl: "https://github.com/urmoit/GamerOS/commit/70fba78de2e3c123f2bfd4f5aea08996eee8d172",
    changes: [
      { type: "feature", description: "Added debug output to kernel_main for boot visibility", component: "Kernel" },
      { type: "improvement", description: "Enhanced CPU detection in boot.asm with comprehensive checks", component: "Boot" },
      { type: "improvement", description: "Categorized bugs by severity in documentation", component: "Documentation" },
    ],
  },
  {
    version: "0.1.2",
    date: "January 14, 2026",
    title: "QEMU & GUI Improvements",
    description: "Enhanced QEMU boot process and updated GUI application settings.",
    commitUrl: "https://github.com/urmoit/GamerOS/commit/f50fb62ff112cf56a6025299f8b9bb21f6160d59",
    changes: [
      { type: "improvement", description: "Updated run-qemu.bat to use -cpu max", component: "Build" },
      { type: "feature", description: "Added QEMU debug logging to qemu-debug.log", component: "Debug" },
      { type: "improvement", description: "Increased window height and optimized tab count in GUI", component: "GUI" },
    ],
  },
  {
    version: "0.1.1",
    date: "January 14, 2026",
    title: "Build System Refactor",
    description: "Refactored build scripts and added comprehensive QEMU tutorial.",
    commitUrl: "https://github.com/urmoit/GamerOS/commit/21d5dce0b6db2f416201a61e586fa6e206acb657",
    changes: [
      { type: "improvement", description: "Updated build-iso.bat to use make build-x86_64", component: "Build" },
      { type: "improvement", description: "Enhanced debug.bat with multiple QEMU location checks", component: "Build" },
      { type: "feature", description: "Added comprehensive QEMU tutorial documentation", component: "Documentation" },
    ],
  },
  {
    version: "0.1.0",
    date: "January 14, 2026",
    title: "Initial Development Release",
    description: "First development release with basic bootloader, kernel, and build system.",
    commitUrl: "https://github.com/urmoit/GamerOS/commit/259e723ec1704b43a9182110ecf7b27dcee35e44",
    changes: [
      { type: "feature", description: "GRUB Multiboot2 bootloader implementation", component: "Boot" },
      { type: "feature", description: "Basic ELF64 kernel structure", component: "Kernel" },
      { type: "feature", description: "16-byte aligned memory management", component: "Memory" },
      { type: "feature", description: "Docker cross-compilation build system", component: "Build" },
      { type: "feature", description: "QEMU testing environment setup", component: "Testing" },
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
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-primary/5" />
            <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <Link 
                to="/news" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to News
              </Link>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Badge variant="outline" className="mb-6 px-4 py-2 text-sm border-emerald-500/30 bg-emerald-500/5">
                  <GitCommit className="w-4 h-4 mr-2" />
                  GamerOS Changelog
                </Badge>
                
                <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                  Version{" "}
                  <span className="bg-gradient-to-r from-emerald-500 via-primary to-cyan-500 bg-clip-text text-transparent">
                    History
                  </span>
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-2xl mb-8">
                  Track all development updates, new features, and bug fixes for GamerOS.
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
                  { label: "Versions", value: changelogData.length, icon: Tag, color: "text-emerald-500" },
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

          {/* Notice */}
          <section className="py-6">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card p-4 rounded-xl flex items-start gap-3 border-primary/20"
              >
                <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Note:</span> GamerOS is currently in early development. 
                    These versions represent development milestones and are not yet available for public download.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Changelog Timeline */}
          <section className="py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-primary/50 to-border hidden md:block" />
                
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
                          <div className="absolute left-4 top-6 w-5 h-5 rounded-full bg-emerald-500 border-4 border-background hidden md:flex items-center justify-center z-10">
                            <div className="w-2 h-2 rounded-full bg-white" />
                          </div>
                          
                          <div className="glass-card rounded-2xl overflow-hidden">
                            {/* Version Header */}
                            <button
                              onClick={() => toggleVersion(version.version)}
                              className="w-full p-6 flex items-start gap-4 hover:bg-muted/50 transition-colors text-left"
                            >
                              <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-3 mb-2">
                                  <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 hover:bg-emerald-500/20">
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
                                    
                                    {version.commitUrl && (
                                      <div className="mt-4 pt-4 border-t border-border">
                                        <a
                                          href={version.commitUrl}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                                        >
                                          <GitCommit className="w-4 h-4" />
                                          View commit on GitHub
                                          <ExternalLink className="w-3 h-3" />
                                        </a>
                                      </div>
                                    )}
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

          {/* CTA Section */}
          <section className="py-16 bg-secondary/30">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Want to Contribute?</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                GamerOS is open source. Check out our GitHub repository to contribute to the project.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild>
                  <a href="https://github.com/urmoit/GamerOS" target="_blank" rel="noopener noreferrer">
                    <GitCommit className="w-4 h-4 mr-2" />
                    View on GitHub
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/changelog">
                    <Rocket className="w-4 h-4 mr-2" />
                    Website Changelog
                  </Link>
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
