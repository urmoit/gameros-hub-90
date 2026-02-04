import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/ui/PageTransition";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { 
  Bug, 
  ExternalLink, 
  Check, 
  AlertTriangle, 
  AlertCircle, 
  Info,
  Circle,
  ChevronDown,
  ChevronUp,
  FileCode,
  GitCommit
} from "lucide-react";
import { useState } from "react";

type BugSeverity = "critical" | "high" | "medium" | "low";

interface BugItem {
  id: string;
  title: string;
  severity: BugSeverity;
  location: string;
  description: string;
  status: "open" | "resolved";
  suggestedFix?: string;
}

const bugStats = {
  total: 28,
  resolved: 0,
  critical: 1,
  high: 3,
  medium: 11,
  low: 8,
};

const criticalBugs: BugItem[] = [
  {
    id: "vga-display",
    title: "VGA graphics display issue - screen shows all black or all white instead of colored bars",
    severity: "critical",
    location: "src/impl/graphics/vga_graphics.c, src/impl/kernel/main.c",
    description: "Graphics not displaying correctly, making it impossible to verify system functionality. Palette initialization may not be working correctly in long mode.",
    status: "open",
    suggestedFix: "Investigate palette initialization in long mode, ensure I/O port access works correctly",
  },
];

const highBugs: BugItem[] = [
  { id: "ui-framework", title: "Incomplete UI framework implementation", severity: "high", location: "Multiple files", description: "UI framework has TODO comments indicating incomplete implementations", status: "open" },
  { id: "executive-services", title: "Missing executive services initialization", severity: "high", location: "src/executive/executive.c", description: "TODO comment indicates incomplete executive services initialization", status: "open" },
  { id: "ipc-stubbed", title: "IPC system is completely stubbed out - all functions return failure", severity: "high", location: "src/impl/kernel_mode/microkernel/ipc.c", description: "No inter-process communication possible, critical for multitasking OS", status: "open", suggestedFix: "Implement message passing system with proper queue management" },
];

const mediumBugs: BugItem[] = [
  { id: "todo-comments", title: "TODO comments indicating incomplete implementations", severity: "medium", location: "Multiple files", description: "Various files contain TODO comments for incomplete functionality", status: "open" },
  { id: "null-checks", title: "Missing null pointer checks in some functions", severity: "medium", location: "Various", description: "Potential null pointer dereferences", status: "open" },
  { id: "race-conditions", title: "Potential race conditions in scheduler", severity: "medium", location: "src/impl/kernel_mode/microkernel/process.c", description: "Spinlock usage may cause deadlocks or data corruption", status: "open" },
  { id: "implicit-strlen", title: "Implicit function declarations in GUI app", severity: "medium", location: "src/impl/gui_app.c", description: "strlen, workstation_create_desktop not declared", status: "open" },
  { id: "implicit-usermode", title: "Implicit function declarations in user mode init functions", severity: "medium", location: "src/user_mode/user_mode.c", description: "Subsystem init/shutdown functions not declared", status: "open" },
  { id: "color-overflow", title: "Color value overflow in GUI functions", severity: "medium", location: "src/impl/gui_app.c", description: "32-bit to 8-bit conversion issues", status: "open" },
  { id: "kmalloc-decl", title: "Missing kmalloc/kfree declarations in object manager", severity: "medium", location: "src/executive/object_manager/object_manager.c", description: "Implicit declarations may cause linking issues", status: "open" },
  { id: "unused-prev", title: "Unused variable 'prev' in memory.c kmalloc function", severity: "medium", location: "src/impl/kernel_mode/microkernel/memory.c", description: "Compilation warning, minor code cleanliness issue", status: "open" },
  { id: "switch-decl", title: "Variable declaration in switch statement", severity: "medium", location: "src/impl/graphics/vga_graphics.c", description: "rgb_to_color function has declaration without braces", status: "open" },
  { id: "memory-leak", title: "Memory leak in kfree - only coalesces with next block", severity: "medium", location: "src/impl/kernel_mode/microkernel/memory.c", description: "Memory fragmentation over time, inefficient memory usage", status: "open" },
  { id: "vesa-undefined", title: "VESA mode support references undefined extern variable", severity: "medium", location: "src/impl/graphics/vga_graphics.c", description: "vesa_success undefined, potential linking errors", status: "open" },
];

const lowBugs: BugItem[] = [
  { id: "code-style", title: "Code style inconsistencies", severity: "low", location: "Various", description: "Minor code style issues across codebase", status: "open" },
  { id: "missing-docs", title: "Missing documentation comments", severity: "low", location: "Various", description: "Some functions lack proper documentation", status: "open" },
  { id: "unused-vars", title: "Unused variables in some functions", severity: "low", location: "Various", description: "Compilation warnings for unused variables", status: "open" },
  { id: "magic-numbers", title: "Hard-coded magic numbers", severity: "low", location: "Various", description: "320, 200, 0xA0000, etc. should be constants", status: "open" },
  { id: "inefficient-string", title: "Inefficient string operations", severity: "low", location: "Various", description: "String operations could be optimized", status: "open" },
  { id: "ui-disabled", title: "UI rendering disabled in GUI app loop", severity: "low", location: "src/impl/gui_app.c", description: "ui_render_container() commented out", status: "open" },
  { id: "theme-colors", title: "Theme colors use 32-bit values but VGA mode 13h only supports 8-bit", severity: "low", location: "src/impl/ui_system/ui_widgets.c", description: "Theme colors won't work correctly in current graphics mode", status: "open" },
  { id: "widget-errors", title: "No error handling for failed widget creation", severity: "low", location: "src/impl/ui_system/ui_widgets.c", description: "Potential null pointer dereferences if kmalloc fails", status: "open" },
];

const getSeverityConfig = (severity: BugSeverity) => {
  switch (severity) {
    case "critical":
      return { icon: AlertCircle, color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/30", label: "Critical" };
    case "high":
      return { icon: AlertTriangle, color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/30", label: "High" };
    case "medium":
      return { icon: Info, color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/30", label: "Medium" };
    case "low":
      return { icon: Circle, color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/30", label: "Low" };
  }
};

const BugCard = ({ bug }: { bug: BugItem }) => {
  const [expanded, setExpanded] = useState(false);
  const config = getSeverityConfig(bug.severity);
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`glass-card p-4 rounded-xl border ${config.border} ${config.bg} transition-all hover:shadow-lg`}
    >
      <div className="flex items-start gap-3">
        <div className={`w-8 h-8 rounded-lg ${config.bg} flex items-center justify-center shrink-0`}>
          {bug.status === "resolved" ? (
            <Check className="w-4 h-4 text-emerald-500" />
          ) : (
            <Icon className={`w-4 h-4 ${config.color}`} />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h4 className={`font-medium ${bug.status === "resolved" ? "line-through text-muted-foreground" : ""}`}>
              {bug.title}
            </h4>
            <button
              onClick={() => setExpanded(!expanded)}
              className="p-1 hover:bg-muted rounded transition-colors shrink-0"
            >
              {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <FileCode className="w-3 h-3 text-muted-foreground" />
            <code className="text-xs text-muted-foreground font-mono truncate">{bug.location}</code>
          </div>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-3 pt-3 border-t border-border/50"
            >
              <p className="text-sm text-muted-foreground mb-2">{bug.description}</p>
              {bug.suggestedFix && (
                <div className="text-sm">
                  <span className="font-medium text-primary">Suggested Fix: </span>
                  <span className="text-muted-foreground">{bug.suggestedFix}</span>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const BugTracking = () => {
  const resolvedPercent = Math.round((bugStats.resolved / bugStats.total) * 100);

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative pt-32 pb-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-orange-500/5" />
            <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <Badge variant="outline" className="mb-6 px-4 py-2 text-sm border-red-500/30 bg-red-500/5">
                  <Bug className="w-4 h-4 mr-2" />
                  Bug Tracking
                </Badge>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  Issue{" "}
                  <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                    Tracker
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                  Tracking and resolving bugs to make GamerOS stable and reliable.
                </p>

                {/* Stats Overview */}
                <div className="max-w-4xl mx-auto">
                  <div className="glass-card p-6 rounded-2xl mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-medium">Resolution Progress</span>
                      <span className="text-2xl font-bold">{bugStats.resolved}/{bugStats.total} resolved</span>
                    </div>
                    <Progress value={resolvedPercent} className="h-3 mb-6" />
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { label: "Critical", count: bugStats.critical, color: "text-red-500", bg: "bg-red-500/10" },
                        { label: "High", count: bugStats.high, color: "text-orange-500", bg: "bg-orange-500/10" },
                        { label: "Medium", count: bugStats.medium, color: "text-yellow-500", bg: "bg-yellow-500/10" },
                        { label: "Low", count: bugStats.low, color: "text-green-500", bg: "bg-green-500/10" },
                      ].map((stat, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className={`p-4 rounded-xl ${stat.bg} text-center`}
                        >
                          <div className={`text-3xl font-bold ${stat.color}`}>{stat.count}</div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Critical Bugs */}
          {criticalBugs.length > 0 && (
            <section className="py-12 border-y border-red-500/20 bg-red-500/5">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-red-500" />
                  Critical Issues
                </h2>
                <div className="space-y-4">
                  {criticalBugs.map((bug) => (
                    <BugCard key={bug.id} bug={bug} />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* High Priority */}
          <section className="py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-orange-500" />
                High Priority
              </h2>
              <div className="grid gap-4">
                {highBugs.map((bug) => (
                  <BugCard key={bug.id} bug={bug} />
                ))}
              </div>
            </div>
          </section>

          {/* Medium Priority */}
          <section className="py-12 bg-card/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Info className="w-6 h-6 text-yellow-500" />
                Medium Priority
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {mediumBugs.map((bug) => (
                  <BugCard key={bug.id} bug={bug} />
                ))}
              </div>
            </div>
          </section>

          {/* Low Priority */}
          <section className="py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Circle className="w-6 h-6 text-green-500" />
                Low Priority
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {lowBugs.map((bug) => (
                  <BugCard key={bug.id} bug={bug} />
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 border-t border-border/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Found a bug?</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Help us improve GamerOS by reporting issues on GitHub.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="gap-2">
                  <a
                    href="https://github.com/urmoit/GamerOS/issues/new"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Report a Bug
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/roadmap">View Roadmap</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Last Updated */}
          <div className="text-center pb-8">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              <GitCommit className="w-4 h-4" />
              Last Updated: January 21, 2026
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default BugTracking;
