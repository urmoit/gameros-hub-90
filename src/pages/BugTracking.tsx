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
  Calendar,
  Circle,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";

const bugSummary = {
  total: 28,
  critical: 1,
  high: 3,
  medium: 11,
  low: 8,
};

const criticalBugs = [
  "VGA graphics display issue - screen shows all black or all white instead of colored bars",
];

const highPriorityBugs = [
  "Incomplete UI framework implementation",
  "Missing executive services initialization",
  "IPC system is completely stubbed out - all functions return failure",
];

const mediumPriorityBugs = [
  "TODO comments indicating incomplete implementations (multiple files)",
  "Missing null pointer checks in some functions",
  "Potential race conditions in scheduler",
  "Implicit function declarations in GUI app (strlen, workstation_create_desktop)",
  "Implicit function declarations in user mode init functions",
  "Color value overflow in GUI functions (32-bit to 8-bit conversion)",
  "Missing kmalloc/kfree declarations in object manager",
  "Unused variable 'prev' in memory.c kmalloc function",
  "Variable declaration in switch statement (rgb_to_color function)",
  "Memory leak in kfree - only coalesces with next block, not previous block",
  "VESA mode support references undefined extern variable 'vesa_success'",
];

const lowPriorityBugs = [
  "Code style inconsistencies",
  "Missing documentation comments",
  "Unused variables in some functions",
  "Hard-coded magic numbers (320, 200, 0xA0000, etc.)",
  "Inefficient string operations",
  "UI rendering disabled in GUI app loop (commented out)",
  "Theme colors use 32-bit values but VGA mode 13h only supports 8-bit palette",
  "No error handling for failed widget creation",
];


const detailedBugs = [
  {
    file: "src/impl/kernel/main.c",
    issue: "VGA graphics display issue - screen shows all black or all white",
    severity: "Critical",
    location: "Lines 32-75",
    impact: "Cannot verify system is working; graphics not displaying correctly",
    fix: "Investigate palette initialization in long mode, ensure I/O port access works correctly",
  },
  {
    file: "src/impl/kernel_mode/microkernel/ipc.c",
    issue: "IPC system is completely stubbed out - all functions return failure",
    severity: "High",
    location: "Entire file",
    impact: "No inter-process communication possible, critical for multitasking OS",
    fix: "Implement message passing system with proper queue management",
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
    file: "src/impl/kernel_mode/microkernel/process.c",
    issue: "Potential race conditions in scheduler with spinlock usage",
    severity: "Medium",
    location: "Lines 26-28, 31-32, 80-81",
    impact: "Potential deadlocks or data corruption in multi-threaded scenarios",
    fix: "Implement proper mutex/semaphore system instead of simple spinlocks",
  },
  {
    file: "src/impl/graphics/vga_graphics.c",
    issue: "Variable declaration in switch statement without braces",
    severity: "Medium",
    location: "Line 574 in rgb_to_color function",
    impact: "May cause compilation issues with some compilers; violates C standard",
    fix: "Add braces around the case block (e.g., case COLOR_DEPTH_8BIT: { ... })",
  },
  {
    file: "src/impl/graphics/vga_graphics.c",
    issue: "VESA mode functions reference undefined extern variable 'vesa_success'",
    severity: "Medium",
    location: "Lines 109, 125, 141",
    impact: "Potential linking errors or undefined behavior if VESA modes are attempted",
    fix: "Define vesa_success in boot.asm or remove VESA mode support",
  },
  {
    file: "src/impl/kernel_mode/microkernel/memory.c",
    issue: "Memory leak in kfree - only coalesces with next block, not previous block",
    severity: "Medium",
    location: "Lines 58-68",
    impact: "Memory fragmentation over time, inefficient memory usage",
    fix: "Implement bidirectional coalescing to merge with previous block if also free",
  },
  {
    file: "src/impl/kernel_mode/microkernel/memory.c",
    issue: "Unused variable 'prev' in kmalloc function",
    severity: "Low",
    location: "Line 32",
    impact: "Compilation warning, minor code cleanliness issue",
    fix: "Remove unused variable or use it for bidirectional free list traversal",
  },
  {
    file: "src/user_mode/user_mode.c",
    issue: "Multiple implicit function declarations for subsystem init/shutdown functions",
    severity: "Medium",
    location: "Lines 27-38, 44-51",
    impact: "Compilation warnings, potential linking issues with subsystem implementations",
    fix: "Add proper function declarations or include appropriate headers",
  },
  {
    file: "src/impl/gui_app.c",
    issue: "UI rendering disabled in main loop (commented out)",
    severity: "Low",
    location: "Line 272",
    impact: "GUI windows and widgets are not being rendered",
    fix: "Re-enable ui_render_container() after fixing graphics display issue",
  },
  {
    file: "src/impl/gui_app.c",
    issue: "Implicit function declarations for strlen and workstation_create_desktop",
    severity: "Medium",
    location: "Lines 119, 160",
    impact: "Compilation warnings, potential runtime issues if functions not properly linked",
    fix: "Add strlen declaration to string.h header and declare workstation_create_desktop function",
  },
  {
    file: "src/executive/object_manager/object_manager.c",
    issue: "Implicit declarations of kmalloc and kfree functions",
    severity: "Medium",
    location: "Lines 80, 95",
    impact: "Compilation warnings, potential linking issues",
    fix: "Include proper header file declaring kmalloc/kfree or add declarations",
  },
  {
    file: "src/impl/ui_system/ui_widgets.c",
    issue: "Theme colors use 32-bit RGBA values but VGA mode 13h only supports 8-bit palette indices",
    severity: "Low",
    location: "Lines 12-43 in ui_load_default_theme()",
    impact: "Theme colors won't work correctly in current graphics mode",
    fix: "Convert theme colors to 8-bit palette indices or implement color conversion",
  },
  {
    file: "src/impl/ui_system/ui_widgets.c",
    issue: "No error handling for failed widget creation (kmalloc returns NULL)",
    severity: "Low",
    location: "Multiple widget creation functions",
    impact: "Potential null pointer dereferences if memory allocation fails",
    fix: "Add proper null checks and error handling",
  },
  {
    file: "src/user_mode/integral_subsystems/workstation/ui_framework.c",
    issue: "Multiple TODO comments for incomplete UI functionality",
    severity: "High",
    location: "Lines 30, 40-41, 55, 59, 68, 72",
    impact: "Broken UI event handling and rendering",
    fix: "Implement pending UI event processing and rendering",
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
              <span>Last Updated: January 21, 2026</span>
            </div>
          </div>
        </section>

        {/* Summary Stats */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
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
                    <p className="text-sm text-muted-foreground">{criticalBugs.length} issue{criticalBugs.length !== 1 ? 's' : ''}</p>
                  </div>
                </div>
                <ul className="space-y-3 ml-13">
                  {criticalBugs.map((bug, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <div className="flex items-center justify-center w-5 h-5 rounded-md border-2 border-red-500 bg-red-500/10 mt-0.5">
                        <Circle className="w-2 h-2 text-red-500" />
                      </div>
                      <span className="text-muted-foreground">{bug}</span>
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
                <ul className="space-y-3 ml-13">
                  {highPriorityBugs.map((bug, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <div className="flex items-center justify-center w-5 h-5 rounded-md border-2 border-orange-500 bg-orange-500/10 mt-0.5">
                        <Circle className="w-2 h-2 text-orange-500" />
                      </div>
                      <span className="text-muted-foreground">{bug}</span>
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
                <ul className="space-y-3 ml-13">
                  {mediumPriorityBugs.map((bug, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <div className="flex items-center justify-center w-5 h-5 rounded-md border-2 border-yellow-500 bg-yellow-500/10 mt-0.5">
                        <Circle className="w-2 h-2 text-yellow-500" />
                      </div>
                      <span className="text-muted-foreground">{bug}</span>
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
                <ul className="space-y-3 ml-13">
                  {lowPriorityBugs.map((bug, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <div className="flex items-center justify-center w-5 h-5 rounded-md border-2 border-green-500 bg-green-500/10 mt-0.5">
                        <Circle className="w-2 h-2 text-green-500" />
                      </div>
                      <span className="text-muted-foreground">{bug}</span>
                    </li>
                  ))}
                </ul>
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
            <div className="glass-card p-8 lg:p-12 text-center">
              <Bug className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Found a Bug?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Help us improve GamerOS by reporting bugs on our GitHub repository. 
                Please include as much detail as possible including steps to reproduce.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" asChild>
                  <a 
                    href="https://github.com/urmoit/GamerOS/issues/new" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Bug className="w-5 h-5 mr-2" />
                    Report Bug on GitHub
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a 
                    href="https://github.com/urmoit/GamerOS/issues" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View All Issues
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BugTracking;