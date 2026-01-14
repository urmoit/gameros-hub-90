import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Bug, 
  AlertTriangle, 
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  FileCode,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";

const bugSummary = {
  total: 16,
  critical: 3,
  high: 3,
  medium: 5,
  low: 5,
  resolved: 0,
};

const criticalBugs = [
  "Duplicate scheduler.h include causing compilation issues",
  "Missing terminate_process function declaration",
  "DEXLFOK boot hang - OS shows \"DEXLFOK\" in yellow and pauses, preventing boot",
];

const highPriorityBugs = [
  "Unused process functions (process1_entry, process2_entry) wasting memory",
  "Incomplete UI framework implementation",
  "Missing executive services initialization",
];

const mediumPriorityBugs = [
  "Potential division by zero in GUI tab calculations",
  "Uninitialized kernel_counter variable",
  "TODO comments indicating incomplete implementations (4 files)",
  "Missing null pointer checks in some functions",
  "Potential race conditions in scheduler",
];

const lowPriorityBugs = [
  "Code style inconsistencies",
  "Missing documentation comments",
  "Unused variables in some functions",
  "Hard-coded magic numbers",
  "Inefficient string operations",
];

const detailedBugs = [
  {
    file: "src/impl/kernel/main.c",
    issue: "Duplicate include of scheduler.h (lines 9 and 16)",
    severity: "Critical",
    location: "Lines 9, 16",
    impact: "Compilation warnings/errors, potential symbol conflicts",
    fix: "Remove duplicate include on line 16",
  },
  {
    file: "src/impl/kernel/main.c",
    issue: "process1_entry and process2_entry functions defined but never called",
    severity: "High",
    location: "Lines 23-41, 43-61",
    impact: "Wasted memory and code space, potential confusion",
    fix: "Remove unused functions or implement proper process spawning",
  },
  {
    file: "src/impl/kernel/main.c",
    issue: "terminate_process function declared as extern but may not exist",
    severity: "Critical",
    location: "Lines 36-37, 56-57",
    impact: "Linker errors if function not implemented, undefined behavior",
    fix: "Implement terminate_process function or remove calls",
  },
  {
    file: "src/impl/kernel/main.c",
    issue: "kernel_counter variable not properly initialized before use",
    severity: "Medium",
    location: "Line 100",
    impact: "Undefined behavior on first iteration",
    fix: "Initialize kernel_counter = 0; before the loop",
  },
  {
    file: "src/impl/gui_app.c",
    issue: "Potential division by zero in tab width calculation",
    severity: "Medium",
    location: "Line 104",
    impact: "Crash if TAB_COUNT is 0 or if calculation results in zero",
    fix: "Add safety check: if (TAB_COUNT == 0) return;",
  },
  {
    file: "src/executive/executive.c",
    issue: "TODO comment indicates incomplete executive services initialization",
    severity: "High",
    location: "Line 17",
    impact: "Missing critical OS services, system may not function properly",
    fix: "Implement missing executive services",
  },
  {
    file: "src/user_mode/integral_subsystems/workstation/ui_framework.c",
    issue: "Multiple TODO comments for incomplete UI functionality",
    severity: "High",
    location: "Lines 30, 40-41, 55",
    impact: "Broken UI event handling and rendering",
    fix: "Implement pending UI event processing and rendering",
  },
  {
    file: "src/user_mode/integral_subsystems/workstation/window_manager.c",
    issue: "TODO/FIXME comments indicating incomplete implementation",
    severity: "Medium",
    location: "Multiple lines",
    impact: "Incomplete window management functionality",
    fix: "Complete window manager implementation",
  },
  {
    file: "src/impl/kernel_mode/microkernel/process.c",
    issue: "Potential race conditions in scheduler with spinlock usage",
    severity: "Medium",
    location: "Lines 26-28, 31-32, 80-81",
    impact: "Potential deadlocks or data corruption in multi-threaded scenarios",
    fix: "Implement proper mutex/semaphore system instead of simple spinlocks",
  },
  {
    file: "src/user_mode/integral_subsystems/workstation/desktop_manager.c",
    issue: "TODO comments indicating missing desktop management features",
    severity: "Medium",
    location: "Multiple lines",
    impact: "Incomplete desktop environment",
    fix: "Implement missing desktop management functionality",
  },
  {
    file: "src/user_mode/compatibility_layers/msdos/msdos.c",
    issue: "TODO comments for incomplete MSDOS compatibility",
    severity: "Low",
    location: "Multiple lines",
    impact: "Limited backward compatibility",
    fix: "Implement MSDOS compatibility layer",
  },
  {
    file: "src/user_mode/compatibility_layers/windows9x/windows9x.c",
    issue: "TODO comments for incomplete Windows 9x compatibility",
    severity: "Low",
    location: "Multiple lines",
    impact: "Limited Windows 9x application support",
    fix: "Implement Windows 9x compatibility layer",
  },
  {
    file: "src/user_mode/environment_subsystems/os2/os2.c",
    issue: "TODO comments for incomplete OS/2 subsystem",
    severity: "Low",
    location: "Multiple lines",
    impact: "No OS/2 application support",
    fix: "Implement OS/2 environment subsystem",
  },
  {
    file: "src/user_mode/environment_subsystems/posix/posix.c",
    issue: "TODO comments for incomplete POSIX subsystem",
    severity: "Low",
    location: "Multiple lines",
    impact: "Limited POSIX application compatibility",
    fix: "Complete POSIX subsystem implementation",
  },
  {
    file: "src/user_mode/environment_subsystems/win32/win32.c",
    issue: "TODO comments for incomplete Win32 subsystem",
    severity: "Low",
    location: "Multiple lines",
    impact: "Limited Windows application support",
    fix: "Implement Win32 subsystem",
  },
  {
    file: "src/impl/x86_64/boot.asm (Boot Process)",
    issue: "OS displays \"DEXLFOK\" in yellow and pauses during boot instead of continuing",
    severity: "Critical",
    location: "CPU detection and paging setup code",
    impact: "System hangs immediately after CPU detection, preventing full boot",
    fix: "Need to investigate further - fixed memory addresses for paging tables did not resolve the issue",
  },
];

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "Critical":
      return "bg-red-500/10 text-red-500 border-red-500/30";
    case "High":
      return "bg-orange-500/10 text-orange-500 border-orange-500/30";
    case "Medium":
      return "bg-yellow-500/10 text-yellow-500 border-yellow-500/30";
    case "Low":
      return "bg-green-500/10 text-green-500 border-green-500/30";
    default:
      return "bg-secondary text-muted-foreground";
  }
};

const BugTracking = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Bug className="w-4 h-4" />
              Bug Tracking
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              GamerOS Bug Tracking List
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete list of known bugs, their severity, and current status.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>Last Updated: January 14, 2026</span>
            </div>
          </div>
        </section>

        {/* Summary Stats */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-primary">{bugSummary.total}</div>
                <div className="text-sm text-muted-foreground">Total Bugs</div>
              </div>
              <div className="glass-card p-4 text-center border-red-500/30">
                <div className="text-2xl font-bold text-red-500">{bugSummary.critical}</div>
                <div className="text-sm text-muted-foreground">Critical</div>
              </div>
              <div className="glass-card p-4 text-center border-orange-500/30">
                <div className="text-2xl font-bold text-orange-500">{bugSummary.high}</div>
                <div className="text-sm text-muted-foreground">High Priority</div>
              </div>
              <div className="glass-card p-4 text-center border-yellow-500/30">
                <div className="text-2xl font-bold text-yellow-500">{bugSummary.medium}</div>
                <div className="text-sm text-muted-foreground">Medium</div>
              </div>
              <div className="glass-card p-4 text-center border-green-500/30">
                <div className="text-2xl font-bold text-green-600">{bugSummary.low}</div>
                <div className="text-sm text-muted-foreground">Low Priority</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-muted-foreground">{bugSummary.resolved}</div>
                <div className="text-sm text-muted-foreground">Resolved</div>
              </div>
            </div>
          </div>
        </section>

        {/* Bug Categories Overview */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Bug Categories</h2>
            
            <div className="space-y-6">
              {/* Critical */}
              <div className="glass-card p-6 border-l-4 border-red-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-red-500">🔴 Critical (System Breaking)</h3>
                    <p className="text-sm text-muted-foreground">{criticalBugs.length} issues</p>
                  </div>
                </div>
                <ul className="space-y-2 ml-13">
                  {criticalBugs.map((bug, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <input type="checkbox" disabled className="mt-1 rounded" />
                      {bug}
                    </li>
                  ))}
                </ul>
              </div>

              {/* High Priority */}
              <div className="glass-card p-6 border-l-4 border-orange-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-orange-500">🟠 High Priority (Major Functionality Impact)</h3>
                    <p className="text-sm text-muted-foreground">{highPriorityBugs.length} issues</p>
                  </div>
                </div>
                <ul className="space-y-2 ml-13">
                  {highPriorityBugs.map((bug, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <input type="checkbox" disabled className="mt-1 rounded" />
                      {bug}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Medium Priority */}
              <div className="glass-card p-6 border-l-4 border-yellow-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                    <Bug className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-yellow-500">🟡 Medium Priority (Feature Limitations)</h3>
                    <p className="text-sm text-muted-foreground">{mediumPriorityBugs.length} issues</p>
                  </div>
                </div>
                <ul className="space-y-2 ml-13">
                  {mediumPriorityBugs.map((bug, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <input type="checkbox" disabled className="mt-1 rounded" />
                      {bug}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Low Priority */}
              <div className="glass-card p-6 border-l-4 border-green-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-500">🟢 Low Priority (Minor Issues)</h3>
                    <p className="text-sm text-muted-foreground">{lowPriorityBugs.length} issues</p>
                  </div>
                </div>
                <ul className="space-y-2 ml-13">
                  {lowPriorityBugs.map((bug, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <input type="checkbox" disabled className="mt-1 rounded" />
                      {bug}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resolved */}
              <div className="glass-card p-6 border-l-4 border-muted">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-muted-foreground">✅ Resolved</h3>
                    <p className="text-sm text-muted-foreground">0 issues</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground ml-13">None yet</p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Bug Reports */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4">Detailed Bug Reports</h2>
            <p className="text-center text-muted-foreground mb-12">
              Complete technical details for each reported issue
            </p>
            
            <div className="space-y-4">
              {detailedBugs.map((bug, i) => (
                <div key={i} className="glass-card p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`px-2 py-1 rounded-lg text-xs font-medium border ${getSeverityColor(bug.severity)}`}>
                          {bug.severity}
                        </span>
                        <span className="text-xs text-muted-foreground px-2 py-1 rounded bg-secondary">
                          Status: Open
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <FileCode className="w-4 h-4 text-primary" />
                        <code className="text-sm font-mono text-primary">{bug.file}</code>
                      </div>
                      
                      <h3 className="font-semibold mb-3">{bug.issue}</h3>
                      
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Location:</span>
                          <p className="font-mono">{bug.location}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Impact:</span>
                          <p>{bug.impact}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Suggested Fix:</span>
                          <p>{bug.fix}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Report Bug CTA */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card p-8 text-center">
              <Bug className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Found a New Bug?</h3>
              <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                Help us improve GamerOS by reporting issues on our GitHub repository. 
                Please include reproduction steps and system information.
              </p>
              <Button asChild>
                <a 
                  href="https://github.com/urmoit/GamerOS/issues" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Report on GitHub
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BugTracking;