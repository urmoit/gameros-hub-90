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
  GitCommit,
  Zap,
  Target,
  Cpu,
  ShieldAlert
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
  resolved: 20,
  critical: 1,
  high: 1,
  medium: 2,
  low: 1,
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
  // Newly resolved in commit 6270119
  { id: "vesa-incomplete", title: "VESA Mode Functions", severity: "high", location: "src/impl/graphics/vga_graphics.c", description: "VESA mode functions incomplete. Fixed with BIOS video interrupt removal from long mode and proper boot-stage VGA setup.", status: "resolved" },
  { id: "ipc-stubbed", title: "IPC System Implementation", severity: "high", location: "src/impl/kernel_mode/microkernel/ipc.c", description: "IPC was completely stubbed. Implemented fixed-size in-kernel message queue with payload allocation/copy.", status: "resolved" },
  { id: "executive-services", title: "Executive Services Initialization", severity: "high", location: "src/executive/executive.c", description: "Missing critical OS services. Added GDI init, registered input drivers, created baseline filesystem entries.", status: "resolved" },
  { id: "notepad-limits", title: "Notepad Text Editing", severity: "medium", location: "src/impl/kernel/main.c", description: "No cursor movement with arrow keys. Added KEY_LEFT/RIGHT/UP/DOWN/HOME/END handling.", status: "resolved" },
  { id: "no-rtc", title: "Real-Time Clock", severity: "medium", location: "src/impl/kernel/main.c", description: "Taskbar showed static '12:00'. Replaced with RTC-backed time string using get_time().", status: "resolved" },
  { id: "start-menu", title: "Start Menu Functionality", severity: "medium", location: "src/impl/kernel/main.c", description: "Start menu non-functional. Added open/close toggle, clickable menu items for launching windows.", status: "resolved" },
  { id: "memory-leak", title: "Memory Leak in kfree Coalescing", severity: "medium", location: "src/impl/kernel_mode/microkernel/memory.c", description: "Only coalesced with next block. Added previous-block coalescing to prevent fragmentation.", status: "resolved" },
  { id: "object-pool", title: "Object Manager Memory Allocation", severity: "medium", location: "src/executive/object_manager/object_manager.c", description: "Used static 4KB pool. Switched to kmalloc with proper kfree on destroy.", status: "resolved" },
  { id: "user-mode", title: "User Mode Subsystems", severity: "medium", location: "src/user_mode/user_mode.c", description: "Subsystems commented out. Un-commented and wired all subsystem init/shutdown calls.", status: "resolved" },
  { id: "ui-framework", title: "UI Framework Implementation", severity: "medium", location: "src/user_mode/integral_subsystems/workstation/ui_framework.c", description: "Skeleton-only behavior. Added event queue, keyboard/mouse polling, render loop with desktop update.", status: "resolved" },
  { id: "window-manager", title: "Window Manager Operations", severity: "medium", location: "src/user_mode/integral_subsystems/workstation/window_manager.c", description: "Window operations not implemented. Added show/hide/move/resize/destroy/minimize/maximize/restore.", status: "resolved" },
  { id: "io-sync", title: "I/O Manager Async Operations", severity: "low", location: "src/executive/io_manager/io_manager.c", description: "Synchronous 'fake async' behavior. Implemented queued async I/O with io_process_async_requests().", status: "resolved" },
];

const criticalBugs: BugItem[] = [
  {
    id: "triple-fault-vmware",
    title: "Triple Fault / CPU Disabled in VMware",
    severity: "critical",
    location: "src/impl/kernel_mode/hal/interrupts/isr.c",
    description: "VMware shows 'CPU has been disabled by the guest operating system'. Multiple hardening fixes applied but still requires continued validation under drag/click heavy interaction.",
    status: "open",
    suggestedFix: "IST field, GDT reload, IDT null-entry, ISR stack alignment, and exception handling all fixed. Polling-only stability mode added as fallback. Still needs VMware runtime validation.",
  },
];

const highBugs: BugItem[] = [];

const mediumBugs: BugItem[] = [
  { id: "vesa-swap", title: "VESA mode display output incomplete", severity: "medium", location: "src/impl/graphics/vga_graphics.c", description: "swap_buffers() path updated but may still truncate in some VESA modes", status: "open" },
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
  { id: "widget-errors", title: "No error handling for failed widget creation", severity: "low", location: "src/impl/ui_system/ui_widgets.c", description: "Potential null pointer dereferences if kmalloc fails", status: "open" },
];

const getSeverityConfig = (severity: BugSeverity) => {
  switch (severity) {
    case "critical":
      return { 
        icon: ShieldAlert, 
        color: "text-rose-400", 
        bg: "bg-rose-500/10", 
        border: "border-rose-500/40",
        glow: "shadow-[0_0_20px_rgba(251,113,133,0.3)]",
        glowHover: "hover:shadow-[0_0_30px_rgba(251,113,133,0.5)]",
        gradient: "from-rose-500 to-pink-600",
        label: "Critical"
      };
    case "high":
      return { 
        icon: AlertTriangle, 
        color: "text-amber-400", 
        bg: "bg-amber-500/10", 
        border: "border-amber-500/40",
        glow: "shadow-[0_0_20px_rgba(251,191,36,0.3)]",
        glowHover: "hover:shadow-[0_0_30px_rgba(251,191,36,0.5)]",
        gradient: "from-amber-500 to-orange-600",
        label: "High"
      };
    case "medium":
      return { 
        icon: Zap, 
        color: "text-purple-400", 
        bg: "bg-purple-500/10", 
        border: "border-purple-500/40",
        glow: "shadow-[0_0_20px_rgba(192,132,252,0.3)]",
        glowHover: "hover:shadow-[0_0_30px_rgba(192,132,252,0.5)]",
        gradient: "from-purple-500 to-fuchsia-600",
        label: "Medium"
      };
    case "low":
      return { 
        icon: Info, 
        color: "text-cyan-400", 
        bg: "bg-cyan-500/10", 
        border: "border-cyan-500/40",
        glow: "shadow-[0_0_20px_rgba(34,211,238,0.3)]",
        glowHover: "hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]",
        gradient: "from-cyan-500 to-blue-600",
        label: "Low"
      };
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
      className={`glass-card glass-card-hover p-5 rounded-xl border ${config.border} ${config.bg} ${config.glow} ${config.glowHover} transition-all duration-300`}
    >
      <div className="flex items-start gap-4">
        <div className={`w-10 h-10 rounded-xl ${config.bg} flex items-center justify-center shrink-0 border ${config.border}`}>
          {bug.status === "resolved" ? (
            <Check className="w-5 h-5 text-emerald-400" />
          ) : (
            <Icon className={`w-5 h-5 ${config.color}`} />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h4 className={`font-semibold text-lg ${bug.status === "resolved" ? "line-through text-white/40" : "text-white/90"}`}>
              {bug.title}
            </h4>
            <button
              onClick={() => setExpanded(!expanded)}
              className={`p-2 rounded-lg transition-all duration-300 shrink-0 ${config.bg} ${config.color} hover:brightness-125`}
            >
              {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <FileCode className="w-4 h-4 text-white/40" />
            <code className="text-xs text-cyan-300/70 font-mono truncate">{bug.location}</code>
          </div>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-4 pt-4 border-t border-white/10"
            >
              <p className="text-sm text-white/60 mb-3 leading-relaxed">{bug.description}</p>
              {bug.suggestedFix && (
                <div className="text-sm p-3 rounded-lg bg-white/5 border border-white/10">
                  <span className={`font-medium bg-gradient-to-r ${config.gradient} bg-clip-text text-transparent`}>Suggested Fix: </span>
                  <span className="text-white/60">{bug.suggestedFix}</span>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const StatCard = ({ label, count, icon: Icon, gradient, delay }: { label: string; count: number; icon: any; gradient: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay }}
    className="glass-card glass-card-hover p-5 rounded-2xl text-center group"
  >
    <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div className={`text-4xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-1`}>{count}</div>
    <div className="text-sm text-white/50 font-medium uppercase tracking-wider">{label}</div>
  </motion.div>
);

const BugTracking = () => {
  const resolvedPercent = Math.round((bugStats.resolved / bugStats.total) * 100);

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-[hsl(225_25%_6%)]">
        <Header />

        <main className="flex-1">
          {/* Hero Section with Animated Background */}
          <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-purple-500/5" />
            
            {/* Floating Orbs */}
            <motion.div 
              className="absolute top-20 left-[10%] w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px]"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-10 right-[10%] w-80 h-80 bg-purple-500/20 rounded-full blur-[100px]"
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px]"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.25, 0.1]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <Badge className="mb-6 px-4 py-2 text-sm bg-cyan-500/10 border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 transition-colors">
                  <Bug className="w-4 h-4 mr-2" />
                  System Diagnostics
                </Badge>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="text-white">Bug </span>
                  <span className="text-gaming">Tracker</span>
                </h1>

                <p className="text-xl text-white/50 max-w-2xl mx-auto mb-12">
                  Tracking and resolving system anomalies to ensure GamerOS runs at peak performance.
                </p>

                {/* Stats Overview with Progress */}
                <div className="max-w-4xl mx-auto">
                  <motion.div 
                    className="glass-card p-8 rounded-2xl mb-8 border border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Target className="w-5 h-5 text-cyan-400" />
                        <span className="font-medium text-white/80">Resolution Progress</span>
                      </div>
                      <span className="text-2xl font-bold text-gaming">{bugStats.resolved}/{bugStats.total}</span>
                    </div>
                    
                    {/* Animated Progress Bar with Glow */}
                    <div className="relative mb-8">
                      <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${resolvedPercent}%` }}
                          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                        />
                      </div>
                      <div className="absolute top-0 left-0 h-3 bg-gradient-to-r from-cyan-400/50 via-purple-500/50 to-pink-500/50 rounded-full blur-md"
                        style={{ width: `${resolvedPercent}%` }}
                      />
                      <div className="mt-2 text-right">
                        <span className="text-sm text-cyan-400 font-mono">{resolvedPercent}% COMPLETE</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <StatCard 
                        label="Critical" 
                        count={bugStats.critical} 
                        icon={ShieldAlert}
                        gradient="from-rose-500 to-pink-600"
                        delay={0.3}
                      />
                      <StatCard 
                        label="High" 
                        count={bugStats.high} 
                        icon={AlertTriangle}
                        gradient="from-amber-500 to-orange-600"
                        delay={0.4}
                      />
                      <StatCard 
                        label="Medium" 
                        count={bugStats.medium} 
                        icon={Zap}
                        gradient="from-purple-500 to-fuchsia-600"
                        delay={0.5}
                      />
                      <StatCard 
                        label="Low" 
                        count={bugStats.low} 
                        icon={Info}
                        gradient="from-cyan-500 to-blue-600"
                        delay={0.6}
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Resolved Bugs */}
          {resolvedBugs.length > 0 && (
            <section className="py-12 border-y border-emerald-500/20 bg-gradient-to-b from-emerald-500/5 to-transparent">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                  className="flex items-center gap-3 mb-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                    <Check className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Resolved <span className="text-gaming-alt">Issues</span>
                  </h2>
                  <Badge className="bg-emerald-500/10 border-emerald-500/30 text-emerald-300">
                    {resolvedBugs.length}
                  </Badge>
                </motion.div>
                <div className="grid md:grid-cols-2 gap-4">
                  {resolvedBugs.map((bug, index) => (
                    <motion.div
                      key={bug.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <BugCard bug={bug} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Critical Bugs */}
          {criticalBugs.length > 0 && (
            <section className="py-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-rose-500/10 via-rose-500/5 to-transparent" />
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div 
                  className="flex items-center gap-3 mb-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center shadow-[0_0_20px_rgba(251,113,133,0.3)]">
                    <ShieldAlert className="w-5 h-5 text-rose-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Critical <span className="text-rose-400">Threats</span>
                  </h2>
                  <Badge className="bg-rose-500/10 border-rose-500/30 text-rose-300">
                    {criticalBugs.length}
                  </Badge>
                </motion.div>
                <div className="space-y-4">
                  {criticalBugs.map((bug) => (
                    <BugCard key={bug.id} bug={bug} />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* High Priority */}
          <section className="py-16 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="flex items-center gap-3 mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shadow-[0_0_20px_rgba(251,191,36,0.3)]">
                  <AlertTriangle className="w-5 h-5 text-amber-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  High <span className="text-amber-400">Priority</span>
                </h2>
                <Badge className="bg-amber-500/10 border-amber-500/30 text-amber-300">
                  {highBugs.length}
                </Badge>
              </motion.div>
              <div className="grid gap-4">
                {highBugs.map((bug) => (
                  <BugCard key={bug.id} bug={bug} />
                ))}
              </div>
            </div>
          </section>

          {/* Medium Priority */}
          <section className="py-16 relative bg-gradient-to-b from-purple-500/5 to-transparent">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="flex items-center gap-3 mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center shadow-[0_0_20px_rgba(192,132,252,0.3)]">
                  <Zap className="w-5 h-5 text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Medium <span className="text-purple-400">Priority</span>
                </h2>
                <Badge className="bg-purple-500/10 border-purple-500/30 text-purple-300">
                  {mediumBugs.length}
                </Badge>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-4">
                {mediumBugs.map((bug) => (
                  <BugCard key={bug.id} bug={bug} />
                ))}
              </div>
            </div>
          </section>

          {/* Low Priority */}
          <section className="py-16 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="flex items-center gap-3 mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                  <Info className="w-5 h-5 text-cyan-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Low <span className="text-cyan-400">Priority</span>
                </h2>
                <Badge className="bg-cyan-500/10 border-cyan-500/30 text-cyan-300">
                  {lowBugs.length}
                </Badge>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-4">
                {lowBugs.map((bug) => (
                  <BugCard key={bug.id} bug={bug} />
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-purple-500/10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-[100px]" />
            
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Found a <span className="text-gaming">Bug?</span>
                </h2>
                <p className="text-white/50 mb-8 max-w-xl mx-auto text-lg">
                  Help us improve GamerOS by reporting issues on GitHub. Your feedback drives the evolution of the system.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="btn-neon gap-2 text-base px-8">
                    <a
                      href="https://github.com/urmoit/GamerOS/issues/new"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Report a Bug
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="gap-2 text-base px-8 border-white/20 hover:bg-white/10 hover:border-cyan-500/50 transition-all">
                    <Link to="/roadmap">View Roadmap</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Last Updated */}
          <div className="text-center pb-12">
            <p className="text-sm text-white/30 flex items-center justify-center gap-2 font-mono">
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
