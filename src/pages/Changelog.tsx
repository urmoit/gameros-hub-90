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
  FileText,
  Gamepad2,
  GitCommit,
  Flame,
  Terminal
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
    version: "2.1.0",
    date: "February 13, 2026",
    title: "Alpha Release Walkthrough & Bug Tracking Overhaul",
    description: "Added comprehensive bug fix pass walkthrough page, updated bug tracking with 20 resolved bugs, added new commit to news and monthly archive.",
    changes: [
      { type: "feature", description: "Created 'Alpha Release: src Bug Fix Pass' walkthrough page with 33 fixes documented", component: "News" },
      { type: "feature", description: "Added new commit (6270119) - VMware stability and interrupt hardening", component: "News" },
      { type: "improvement", description: "Updated Bug Tracking: 20 of 25 bugs now resolved (80%)", component: "Bug Tracking" },
      { type: "improvement", description: "Updated February monthly archive with new entries", component: "Monthly News" },
      { type: "improvement", description: "Updated Roadmap milestones with bug fix pass progress", component: "Roadmap" },
      { type: "fix", description: "Fixed framer-motion ease type errors in News and MonthlyNews pages", component: "Animations" },
    ],
  },
  {
    version: "2.0.0",
    date: "February 10, 2026",
    title: "Complete Website Redesign - Gaming/Cyberpunk Theme",
    description: "Major visual overhaul of the entire website with a new gaming-inspired cyberpunk aesthetic featuring neon colors, glass morphism, and glowing effects.",
    changes: [
      { type: "feature", description: "New global dark theme with gaming color palette (neon cyan, purple, pink accents)", component: "Global Styles" },
      { type: "feature", description: "Added glass morphism design system with backdrop-blur effects", component: "UI Components" },
      { type: "feature", description: "Implemented neon glow effects and gradient text throughout", component: "Visual Design" },
      { type: "feature", description: "Added animated floating orbs and grid pattern backgrounds", component: "Animations" },
      { type: "improvement", description: "Redesigned Header with new gaming logo and animated nav indicators", component: "Header" },
      { type: "improvement", description: "Redesigned Footer with gradient borders and gaming aesthetic", component: "Footer" },
      { type: "improvement", description: "Complete Hero section redesign with new gaming visuals", component: "Home" },
      { type: "improvement", description: "Redesigned About page with color-coded cards and glowing effects", component: "About" },
      { type: "improvement", description: "Redesigned Roadmap with neon timeline and progress bars", component: "Roadmap" },
      { type: "improvement", description: "Redesigned News page with gaming-style cards and filters", component: "News" },
      { type: "improvement", description: "Redesigned Download page with platform cards and glow effects", component: "Download" },
      { type: "improvement", description: "Redesigned Bug Tracking with color-coded priority cards", component: "Bug Tracking" },
      { type: "improvement", description: "Redesigned FAQ with gaming accordion styling", component: "FAQ" },
      { type: "improvement", description: "Redesigned GamerOS Changelog with progress cards", component: "GamerOS Changelog" },
      { type: "improvement", description: "Redesigned Website Changelog with glowing timeline", component: "Changelog" },
      { type: "improvement", description: "Redesigned Monthly News with gaming filter buttons", component: "Monthly News" },
      { type: "improvement", description: "Redesigned Alpha Release article with bug category cards", component: "News Articles" },
      { type: "improvement", description: "Redesigned XP Transformation with achievement badges", component: "News Articles" },
      { type: "improvement", description: "Redesigned XP Implementation with progress tracker", component: "News Articles" },
      { type: "improvement", description: "Redesigned 404 page with gaming aesthetic and full layout", component: "404" },
      { type: "fix", description: "Fixed 404 page to include Header and Footer", component: "404" },
    ],
  },
  {
    version: "1.6.1",
    date: "February 7, 2026",
    title: "Road to Alpha & Site Updates",
    description: "Added new 'Road to Alpha' announcement, updated Featured section to show only 4 latest news, refreshed About page with current stats.",
    changes: [
      { type: "feature", description: "Created 'Road to Alpha: Heavy Bug Fix Sprint Begins' news page", component: "News" },
      { type: "feature", description: "Redesigned GamerOS Changelog with Alpha progress and development milestones", component: "GamerOS Changelog" },
      { type: "improvement", description: "Updated Featured section to display only 4 latest news items", component: "News" },
      { type: "improvement", description: "Updated About page: LOC 9,100+, 13+ commits, C/Assembly languages", component: "About" },
      { type: "improvement", description: "Added Alpha banner to Roadmap page with link to news", component: "Roadmap" },
      { type: "improvement", description: "Updated Download page with Alpha release info", component: "Download" },
      { type: "improvement", description: "Added Alpha announcement banner to Homepage hero", component: "Home" },
    ],
  },
  {
    version: "1.6.0",
    date: "February 6, 2026",
    title: "February Updates & XP Transformation Walkthrough",
    description: "Added February monthly archive, XP Transformation walkthrough page, updated bug tracking with resolved issues, and 2 new commits.",
    changes: [
      { type: "feature", description: "Created 'XP Transformation Walkthrough' dedicated news page", component: "News" },
      { type: "feature", description: "Added February 2026 monthly archive with 2 new commits", component: "Monthly News" },
      { type: "feature", description: "Added 2 new commit updates (c8db812, 1abf7fb) to News page", component: "News" },
      { type: "improvement", description: "Updated Bug Tracking: 25 total bugs, 8 resolved with detailed entries", component: "Bug Tracking" },
      { type: "improvement", description: "Added resolved bugs section with emerald-themed cards", component: "Bug Tracking" },
      { type: "fix", description: "Fixed bug tracking page data to match current GamerOS state", component: "Bug Tracking" },
    ],
  },
  {
    version: "1.5.0",
    date: "February 4, 2026",
    title: "Platform Support & Progress Updates",
    description: "Updated VM platform support, homepage statistics, and roadmap progress.",
    changes: [
      { type: "feature", description: "Added VMware, VirtualBox, and QEMU as supported platforms", component: "Download" },
      { type: "improvement", description: "Updated homepage lines of code to 9,100+", component: "Home" },
      { type: "improvement", description: "Marked Roadmap Phase 1 as completed (100%)", component: "Roadmap" },
      { type: "improvement", description: "Redesigned XP Implementation page with progress tracker", component: "News" },
      { type: "improvement", description: "Redesigned Bug Tracking page with native components", component: "Bug Tracking" },
    ],
  },
  {
    version: "1.4.3",
    date: "January 28, 2026",
    title: "XP Theme Implementation Plan",
    description: "Added detailed implementation plan for Windows XP theme and updated bug tracking.",
    changes: [
      { type: "feature", description: "Created 'Implementation Plan: Windows XP Theme & Startup' page", component: "News" },
      { type: "improvement", description: "Updated Bug Tracking to resolved status for VGA Mode 12h Black Screen", component: "Bug Tracking" },
      { type: "feature", description: "Added new implementation plan to Monthly Archive", component: "Monthly News" },
    ],
  },
  {
    version: "1.4.2",
    date: "January 25, 2026",
    title: "VGA Mode 12h Implementation and UI Enhancements",
    description: "Major graphics and UI updates with VGA Mode 12h support, interactive UI with keyboard/mouse, and comprehensive bug tracking updates.",
    changes: [
      { type: "feature", description: "Added January 24-25 commit updates to News page", component: "News" },
      { type: "feature", description: "Updated January 2026 Monthly Archive with latest commits", component: "Monthly News" },
      { type: "improvement", description: "Replaced Bug Tracking page with comprehensive markdown documentation (29 bugs)", component: "Bug Tracking" },
      { type: "improvement", description: "Added react-markdown for proper markdown rendering", component: "Dependencies" },
    ],
  },
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

// Gaming-themed colors
const getChangeIcon = (type: ChangeType) => {
  switch (type) {
    case "feature": return <Sparkles className="w-4 h-4" />;
    case "fix": return <Bug className="w-4 h-4" />;
    case "improvement": return <Zap className="w-4 h-4" />;
    case "breaking": return <Wrench className="w-4 h-4" />;
  }
};

// Gaming color scheme - cyan, pink, purple, amber
const getChangeColor = (type: ChangeType) => {
  switch (type) {
    case "feature": return "bg-[hsl(180_100%_50%)]/10 text-[hsl(180_100%_50%)] border-[hsl(180_100%_50%)]/30";
    case "fix": return "bg-[hsl(320_100%_60%)]/10 text-[hsl(320_100%_60%)] border-[hsl(320_100%_60%)]/30";
    case "improvement": return "bg-[hsl(280_100%_60%)]/10 text-[hsl(280_100%_60%)] border-[hsl(280_100%_60%)]/30";
    case "breaking": return "bg-amber-500/10 text-amber-400 border-amber-500/30";
  }
};

const getChangeGlow = (type: ChangeType) => {
  switch (type) {
    case "feature": return "shadow-[0_0_15px_hsl(180_100%_50%_/_0.3)]";
    case "fix": return "shadow-[0_0_15px_hsl(320_100%_60%_/_0.3)]";
    case "improvement": return "shadow-[0_0_15px_hsl(280_100%_60%_/_0.3)]";
    case "breaking": return "shadow-[0_0_15px_rgba(251_191_36_/_0.3)]";
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
  const totalBreaking = changelogData.reduce((acc, v) => acc + v.changes.filter(c => c.type === "breaking").length, 0);

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col" style={{ background: 'hsl(225 25% 6%)' }}>
        <Header />

        <main className="flex-1">
          {/* Hero Section - Gaming Theme */}
          <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(280_100%_60%_/_0.15),_transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(180_100%_50%_/_0.1),_transparent_50%)]" />
            
            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: `linear-gradient(hsl(180 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(180 100% 50%) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />

            {/* Glowing Orbs */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-20 left-10 w-72 h-72 bg-[hsl(180_100%_50%)]/20 rounded-full blur-[100px]" 
            />
            <motion.div 
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-10 right-10 w-96 h-96 bg-[hsl(280_100%_60%)]/20 rounded-full blur-[100px]" 
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[hsl(320_100%_60%)]/10 rounded-full blur-[120px]" 
            />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <Link
                to="/"
                className="group inline-flex items-center gap-2 text-gray-400 hover:text-[hsl(180_100%_50%)] mb-8 transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm tracking-wide">BACK TO HOME</span>
              </Link>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Gaming Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[hsl(180_100%_50%)]/30 bg-[hsl(180_100%_50%)]/5"
                  style={{ boxShadow: '0 0 20px hsl(180 100% 50% / 0.2)' }}
                >
                  <Terminal className="w-4 h-4 text-[hsl(180_100%_50%)]" />
                  <span className="text-sm font-medium tracking-wider text-[hsl(180_100%_50%)]">WEBSITE CHANGELOG</span>
                </motion.div>

                {/* Animated Title */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                  <span className="text-white">System </span>
                  <span className="text-gaming">Updates</span>
                </h1>

                <p className="text-lg text-gray-400 max-w-2xl mb-10 leading-relaxed">
                  Track all patches, feature releases, and system improvements made to the GamerOS website infrastructure.
                </p>

                {/* Gaming Search Bar */}
                <div className="relative max-w-md group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[hsl(180_100%_50%)] to-[hsl(280_100%_60%)] rounded-xl opacity-30 group-hover:opacity-50 transition-opacity blur" />
                  <div className="relative flex items-center">
                    <Search className="absolute left-4 w-5 h-5 text-[hsl(180_100%_50%)]" />
                    <Input
                      placeholder="Search updates..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-12 h-14 bg-[hsl(225_25%_8%)] border-[hsl(225_20%_15%)] text-white placeholder:text-gray-500 focus:border-[hsl(180_100%_50%)]/50 focus:ring-[hsl(180_100%_50%)]/20 rounded-xl"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Stats Section - Gaming Cards */}
          <section className="py-12 border-y border-[hsl(225_20%_15%)] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(180_100%_50%)]/5 via-transparent to-[hsl(280_100%_60%)]/5" />
            
            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Versions", value: changelogData.length, icon: Tag, color: "cyan", gradient: "from-[hsl(180_100%_50%)] to-[hsl(180_100%_40%)]" },
                  { label: "Features", value: totalFeatures, icon: Sparkles, color: "cyan", gradient: "from-[hsl(180_100%_50%)] to-[hsl(170_100%_45%)]" },
                  { label: "Improvements", value: totalImprovements, icon: Zap, color: "purple", gradient: "from-[hsl(280_100%_60%)] to-[hsl(270_100%_55%)]" },
                  { label: "Bug Fixes", value: totalFixes, icon: Bug, color: "pink", gradient: "from-[hsl(320_100%_60%)] to-[hsl(310_100%_55%)]" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className="glass-card rounded-2xl p-5 text-center group hover:scale-105 transition-transform duration-300"
                    style={{
                      background: 'linear-gradient(135deg, hsl(225 25% 10% / 0.8), hsl(225 25% 6% / 0.9))',
                      border: '1px solid hsl(225 20% 20%)'
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

          {/* Changelog Timeline - Gaming Theme */}
          <section className="py-20 relative">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative">
                {/* Glowing Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 hidden md:block">
                  <div className="absolute inset-0 bg-gradient-to-b from-[hsl(180_100%_50%)] via-[hsl(280_100%_60%)] to-[hsl(320_100%_60%)] opacity-30" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[hsl(180_100%_50%)] via-[hsl(280_100%_60%)] to-[hsl(320_100%_60%)] opacity-60 blur-sm" />
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
                          {/* Timeline Node - Gaming Style */}
                          <div className="absolute left-4 top-6 w-5 h-5 rounded-full hidden md:flex items-center justify-center z-10">
                            <div className="absolute inset-0 rounded-full bg-[hsl(180_100%_50%)] animate-ping opacity-20" />
                            <div className="relative w-5 h-5 rounded-full bg-[hsl(225_25%_6%)] border-2 border-[hsl(180_100%_50%)] flex items-center justify-center shadow-[0_0_15px_hsl(180_100%_50%_/_0.5)]">
                              <div className="w-2 h-2 rounded-full bg-[hsl(180_100%_50%)]" />
                            </div>
                          </div>

                          {/* Version Card - Glass Morphism */}
                          <div 
                            className="glass-card-hover rounded-2xl overflow-hidden"
                            style={{
                              background: 'linear-gradient(135deg, hsl(225 25% 10% / 0.9), hsl(225 25% 6% / 0.95))',
                              border: '1px solid hsl(225 20% 18%)',
                              boxShadow: '0 8px 32px hsl(225 25% 0% / 0.4)'
                            }}
                          >
                            {/* Version Header */}
                            <button
                              onClick={() => toggleVersion(version.version)}
                              className="w-full p-6 flex items-start gap-4 hover:bg-white/[0.02] transition-colors text-left group"
                            >
                              <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-3 mb-3">
                                  <Badge 
                                    className="bg-[hsl(180_100%_50%)]/10 text-[hsl(180_100%_50%)] border-[hsl(180_100%_50%)]/30 hover:bg-[hsl(180_100%_50%)]/20 px-3 py-1"
                                    style={{ boxShadow: '0 0 15px hsl(180 100% 50% / 0.2)' }}
                                  >
                                    <Tag className="w-3 h-3 mr-1.5" />
                                    v{version.version}
                                  </Badge>
                                  <span className="text-sm text-gray-500 flex items-center gap-1.5">
                                    <Calendar className="w-3.5 h-3.5" />
                                    {version.date}
                                  </span>
                                  <Badge 
                                    variant="outline" 
                                    className="text-xs border-[hsl(225_20%_25%)] text-gray-400 bg-[hsl(225_25%_8%)]"
                                  >
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

                            {/* Expanded Changes */}
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
                                          transition={{ delay: ci * 0.05 }}
                                          className={`flex items-start gap-4 p-4 rounded-xl bg-[hsl(225_25%_8%)] border border-[hsl(225_20%_15%)] hover:border-[hsl(225_20%_25%)] transition-all ${getChangeGlow(change.type)}`}
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
                                          <Badge 
                                            variant="outline" 
                                            className={`text-xs capitalize ${getChangeColor(change.type)}`}
                                          >
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
                    className="text-center py-20"
                  >
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

          {/* Legend - Gaming Style */}
          <section className="py-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(280_100%_60%_/_0.03)] to-transparent" />
            
            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-xl font-bold mb-8 text-center text-gaming">Change Type Legend</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { type: "feature" as ChangeType, label: "New Feature", description: "Brand new functionality", color: "cyan" },
                  { type: "improvement" as ChangeType, label: "Improvement", description: "Enhanced features", color: "purple" },
                  { type: "fix" as ChangeType, label: "Bug Fix", description: "Resolved issues", color: "pink" },
                  { type: "breaking" as ChangeType, label: "Breaking", description: "Major changes", color: "amber" },
                ].map((item) => (
                  <motion.div
                    key={item.type}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-3 px-5 py-4 rounded-xl border border-[hsl(225_20%_15%)] bg-[hsl(225_25%_8%)] hover:border-[hsl(225_20%_25%)] transition-all cursor-default"
                    style={{
                      boxShadow: `0 4px 20px hsl(${item.color === 'cyan' ? '180' : item.color === 'purple' ? '280' : item.color === 'pink' ? '320' : '45'} 100% 50% / 0.1)`
                    }}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getChangeColor(item.type)}`}>
                      {getChangeIcon(item.type)}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-white">{item.label}</div>
                      <div className="text-xs text-gray-500">{item.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Gaming CTA Section */}
          <section className="py-20 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(280_100%_60%_/_0.1)] via-transparent to-[hsl(180_100%_50%_/_0.05)]" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[hsl(180_100%_50%)]/10 rounded-full blur-[120px]" />
            
            <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-10 rounded-3xl relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, hsl(225 25% 10% / 0.95), hsl(225 25% 6% / 0.98))',
                  border: '1px solid hsl(225 20% 20%)',
                  boxShadow: '0 20px 60px hsl(225 25% 0% / 0.5), inset 0 1px 0 hsl(255 255 255 / 0.05)'
                }}
              >
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-[hsl(180_100%_50%)]/30 rounded-tl-3xl" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-[hsl(280_100%_60%)]/30 rounded-br-3xl" />
                
                {/* Icon */}
                <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-[hsl(180_100%_50%)] to-[hsl(280_100%_60%)] rounded-2xl opacity-20 blur-xl" />
                  <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-[hsl(225_25%_12%)] to-[hsl(225_25%_8%)] border border-[hsl(225_20%_20%)] flex items-center justify-center">
                    <Gamepad2 className="w-10 h-10 text-[hsl(180_100%_50%)]" />
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-4 text-white">
                  Join the <span className="text-gaming">Development</span>
                </h2>
                <p className="text-gray-400 mb-8 max-w-lg mx-auto leading-relaxed">
                  Follow our GitHub repository to get notified about the latest updates, contribute to the project, and be part of the GamerOS community.
                </p>
                
                <Button 
                  asChild 
                  size="lg"
                  className="btn-neon px-8 py-6 text-base font-semibold rounded-xl"
                >
                  <a href="https://github.com/urmoit/GamerOS" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <ExternalLink className="w-5 h-5" />
                    View on GitHub
                  </a>
                </Button>

                {/* Stats Row */}
                <div className="flex justify-center gap-8 mt-10 pt-8 border-t border-[hsl(225_20%_15%)]">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1.5 text-[hsl(180_100%_50%)] mb-1">
                      <GitCommit className="w-4 h-4" />
                      <span className="font-bold">13+</span>
                    </div>
                    <span className="text-xs text-gray-500">Commits</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1.5 text-[hsl(280_100%_60%)] mb-1">
                      <Code2 className="w-4 h-4" />
                      <span className="font-bold">9.1k+</span>
                    </div>
                    <span className="text-xs text-gray-500">Lines of Code</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1.5 text-[hsl(320_100%_60%)] mb-1">
                      <Flame className="w-4 h-4" />
                      <span className="font-bold">Active</span>
                    </div>
                    <span className="text-xs text-gray-500">Development</span>
                  </div>
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

export default Changelog;
