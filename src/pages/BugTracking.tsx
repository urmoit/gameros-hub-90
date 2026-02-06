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
  total: 25,
  resolved: 8,
  critical: 1,
  high: 4,
  medium: 10,
  low: 10,
};

const resolvedBugs: BugItem[] = [
  { id: "ist-field", title: "IST Field in IDT Entry", severity: "critical", location: "src/intf/idt.h", description: "IDT entry 'reserved' field was actually IST (Interrupt Stack Table), non-zero values cause triple fault. Renamed to 'ist' and set to 0.", status: "resolved" },
  { id: "gdt-reload", title: "GDT Reload in 64-bit Mode", severity: "high", location: "src/impl/kernel_mode/hal/cpu/gdt.c", description: "Reloading GDT in 64-bit mode without reloading segment registers causes corruption. Made gdt_init() a no-op since boot.asm already sets up correct GDT.", status: "resolved" },
  { id: "isr-passbyvalue", title: "ISR Handler Pass-by-Value", severity: "high", location: "src/impl/kernel_mode/hal/interrupts/isr.c", description: "common_isr_handler passed 152-byte struct by value, corrupting stack. Changed to pass by pointer.", status: "resolved" },
  { id: "double-buffering", title: "Double Buffering Implementation", severity: "medium", location: "src/impl/graphics/vga_graphics.c", description: "Screen flickering and cursor trails. Implemented 800x600 back buffer with swap_buffers().", status: "resolved" },
  { id: "mouse-buttons", title: "Mouse Button Detection", severity: "medium", location: "src/impl/drivers/mouse.c", description: "Mouse buttons not properly detected. Fixed PS/2 packet decoding with button state in lower 3 bits.", status: "resolved" },
  { id: "window-dragging", title: "Window Dragging", severity: "medium", location: "src/impl/kernel/main.c", description: "Window dragging was jerky/non-functional. Implemented proper drag state tracking with drag_x, drag_y offsets.", status: "resolved" },
  { id: "keyboard-buffer", title: "Keyboard Input Buffer", severity: "medium", location: "src/impl/drivers/keyboard.c", description: "No keyboard input buffering. Added 64-character ring buffer with keyboard_getchar() and keyboard_has_input().", status: "resolved" },
  { id: "vga-mode13h", title: "VGA Mode 13h Initialization", severity: "medium", location: "src/impl/graphics/vga_graphics.c", description: "Dark screen, palette not initialized. Fixed with proper BIOS INT 0x10 mode setting and palette initialization.", status: "resolved" },
];

const criticalBugs: BugItem[] = [
  {
    id: "triple-fault-vmware",
    title: "Triple Fault / CPU Disabled in VMware",
    severity: "critical",
    location: "src/impl/kernel_mode/hal/interrupts/isr.c",
    description: "VMware shows 'CPU has been disabled by the guest operating system'. Interrupt handling issues including ISR assembly, stack misalignment, IDT IST field, GDT reload problems.",
    status: "open",
    suggestedFix: "IST field and GDT reload partially fixed. Still investigating remaining issues. Kernel boots in QEMU but not VMware.",
  },
];

const highBugs: BugItem[] = [
  { id: "vesa-incomplete", title: "VESA mode functions incomplete", severity: "high", location: "src/impl/graphics/vga_graphics.c", description: "Cannot use 640x480 or 800x600 modes (fallback to 320x200 works). vesa_set_mode() uses INT 0x10 but may not work in all environments.", status: "open" },
  { id: "ipc-stubbed", title: "IPC system is completely stubbed out", severity: "high", location: "src/impl/kernel_mode/microkernel/ipc.c", description: "No inter-process communication possible", status: "open" },
  { id: "executive-services", title: "Incomplete executive services initialization", severity: "high", location: "src/executive/executive.c", description: "Missing critical OS services", status: "open" },
  { id: "triple-fault-vmware-high", title: "Triple fault in VMware (ongoing investigation)", severity: "high", location: "Interrupt handling system", description: "Cannot run in VMware, only QEMU", status: "open" },
];

const mediumBugs: BugItem[] = [
  { id: "vesa-swap", title: "VESA mode display output incomplete", severity: "medium", location: "src/impl/graphics/vga_graphics.c", description: "swap_buffers() only copies up to 320x200 for VESA modes", status: "open" },
  { id: "notepad-limits", title: "Notepad text editing limitations", severity: "medium", location: "src/impl/kernel/main.c", description: "No cursor movement with arrow keys, limited editing features", status: "open" },
  { id: "no-rtc", title: "No real-time clock implementation", severity: "medium", location: "src/impl/kernel/main.c", description: 'Taskbar shows static "12:00" time', status: "open" },
  { id: "start-menu", title: "Start menu non-functional", severity: "medium", location: "src/impl/kernel/main.c", description: "Start button draws but menu doesn't open", status: "open" },
  { id: "memory-leak", title: "Memory leak in kfree - only coalesces with next block", severity: "medium", location: "src/impl/kernel_mode/microkernel/memory.c", description: "Memory fragmentation over time", status: "open" },
  { id: "object-pool", title: "Object manager uses static pool instead of kmalloc", severity: "medium", location: "src/executive/object_manager/object_manager.c", description: "Limited to 4096 bytes total for all objects", status: "open" },
  { id: "user-mode", title: "User mode subsystems are commented out/not initialized", severity: "medium", location: "src/user_mode/user_mode.c", description: "No user mode functionality available", status: "open" },
  { id: "ui-framework", title: "Incomplete UI framework implementation", severity: "medium", location: "src/user_mode/integral_subsystems/workstation/ui_framework.c", description: "Broken UI event handling and rendering", status: "open" },
  { id: "window-manager", title: "Window manager incomplete", severity: "medium", location: "src/user_mode/integral_subsystems/workstation/window_manager.c", description: "Window operations (minimize, maximize) not implemented", status: "open" },
  { id: "vesa-undefined", title: "VESA mode support references undefined extern variable", severity: "medium", location: "src/impl/graphics/vga_graphics.c", description: "vesa_success undefined, potential linking errors", status: "open" },
];

const lowBugs: BugItem[] = [
  { id: "code-style", title: "Code style inconsistencies across files", severity: "low", location: "Various", description: "Code readability issues", status: "open" },
  { id: "missing-docs", title: "Missing documentation comments", severity: "low", location: "Various", description: "Code maintainability issues", status: "open" },
  { id: "magic-numbers", title: "Hard-coded magic numbers", severity: "low", location: "Multiple files (320, 200, 0xA0000, etc.)", description: "Code maintainability - should be constants", status: "open" },
  { id: "font-simple", title: "Font rendering uses simple 8x8 font", severity: "low", location: "src/impl/graphics/vga_graphics.c", description: "Limited character support, only basic ASCII", status: "open" },
  { id: "compat-stubs", title: "Compatibility layers (MSDOS, Windows9x) are stubs", severity: "low", location: "src/user_mode/compatibility_layers/", description: "No backward compatibility", status: "open" },
  { id: "env-stubs", title: "Environment subsystems (Win32, POSIX, OS/2) are stubs", severity: "low", location: "src/user_mode/environment_subsystems/", description: "No application compatibility layers", status: "open" },
  { id: "server-stubs", title: "Server service and security subsystems are stubs", severity: "low", location: "src/user_mode/integral_subsystems/", description: "No network services or security", status: "open" },
  { id: "filesystem", title: "Filesystem operations incomplete", severity: "low", location: "src/executive/filesystem_manager/filesystem_manager.c", description: "Cannot save/load Notepad files", status: "open" },
  { id: "io-sync", title: "I/O manager uses synchronous operations only", severity: "low", location: "src/executive/io_manager/io_manager.c", description: "No async I/O support", status: "open" },
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

          {/* Resolved Bugs */}
          {resolvedBugs.length > 0 && (
            <section className="py-12 border-y border-emerald-500/20 bg-emerald-500/5">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Check className="w-6 h-6 text-emerald-500" />
                  Recently Resolved ({resolvedBugs.length})
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {resolvedBugs.map((bug) => (
                    <BugCard key={bug.id} bug={bug} />
                  ))}
                </div>
              </div>
            </section>
          )}

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
              Last Updated: February 6, 2026
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default BugTracking;
