import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/ui/PageTransition";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Bug,
  Target,
  Rocket,
  CheckCircle,
  AlertTriangle,
  Zap,
  ArrowRight,
  GitCommit,
  Hammer,
  Sparkles,
  Cpu,
  Monitor,
  Keyboard,
  Layout,
  Shield,
  FileCode,
  Terminal,
  ExternalLink,
  Wrench,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";

interface FixSection {
  id: number;
  title: string;
  files: string[];
  changes: string[];
  reason: string;
}

const fixes: FixSection[] = [
  { id: 1, title: "Corrected core integer typedefs", files: ["src/intf/stdint.h"], changes: ["uint64_t → unsigned long long", "int64_t → signed long long", "size_t, uintptr_t, intptr_t mapped to 64-bit-compatible typedefs"], reason: "Prevent width mismatch and shift-size bugs in 64-bit code paths." },
  { id: 2, title: "Unified and extended graphics interface", files: ["src/intf/graphics.h"], changes: ["Added vga_mode_t compatibility alias", "Added VGA_MODE_13H, VGA_MODE_12H macros", "Added vga_set_mode() declaration", "Added legacy vga_* compatibility declarations and macros", "Added XP_COLOR_WHITE alias"], reason: "Large parts of src still rely on historical vga_* symbol names." },
  { id: 3, title: "Implemented missing graphics compatibility functions", files: ["src/impl/graphics/vga_graphics.c"], changes: ["Added implementations for all compatibility APIs", "Added init_graphics(), vga_set_mode()", "Circle draw/fill, buffer blit, bitmap cursor draw", "Shadow/rounded-rect fallback helpers"], reason: "Removed implicit-function-declaration failures." },
  { id: 4, title: "Fixed GDI module compile breaks", files: ["src/executive/gdi/gdi.c"], changes: ["Switched allocator include from memory.h to mm.h", "Set color depth explicitly to 8"], reason: "memory.h did not expose allocator APIs." },
  { id: 5, title: "Resolved UI signature conflicts", files: ["src/intf/ui.h", "src/impl/ui_system/ui.c"], changes: ["Unified draw_string declaration to int x, int y", "Renamed local draw_char → ui_draw_char to avoid symbol conflict"], reason: "Removed conflicting declarations between ui.h and graphics.h." },
  { id: 6, title: "Added missing mouse state API", files: ["src/intf/mouse.h", "src/impl/drivers/mouse.c"], changes: ["Added mouse_state_t struct", "Added mouse_get_state() declaration and implementation"], reason: "gui_app.c and desktop_manager.c used this API but it was not defined." },
  { id: 7, title: "Fixed window rendering conflicts", files: ["src/impl/ui_system/window.c"], changes: ["Removed local color macro redefinitions", "Used shared color macros", "Updated draw_string call signature"], reason: "Eliminated macro redefinition warnings." },
  { id: 8, title: "Fixed missing include in widget renderer", files: ["src/impl/ui_system/ui_widgets.c"], changes: ["Added #include graphics.h"], reason: "File used vga_* helpers without the declaring header." },
  { id: 9, title: "Hardened interrupt return path for VMware stability", files: ["src/impl/kernel_mode/hal/interrupts/isr.asm"], changes: ["Removed sti immediately before iretq in ISR/IRQ stubs"], reason: "Re-enabling interrupts before state restoration causes instability." },
  { id: 10, title: "Fixed VESA buffer present path", files: ["src/impl/graphics/vga_graphics.c"], changes: ["Updated swap_buffers() to copy full active frame", "Added VGA memory fallback"], reason: "Previous code truncated VESA copies to 320x200." },
  { id: 11, title: "Replaced IPC stubs with working baseline queue", files: ["src/impl/kernel_mode/microkernel/ipc.c"], changes: ["Implemented fixed-size in-kernel message queue", "Added payload allocation/copy on send, consume/free on receive", "Added queue initialization in ipc_init()"], reason: "Removes 'always fail' IPC behavior." },
  { id: 12, title: "Reduced allocator fragmentation in kfree", files: ["src/impl/kernel_mode/microkernel/memory.c"], changes: ["Added previous-block coalescing in addition to next-block"], reason: "Prevents avoidable heap fragmentation." },
  { id: 13, title: "Removed object manager static-pool bottleneck", files: ["src/executive/object_manager/object_manager.c"], changes: ["Switched from 4KB static pool to kmalloc", "Added kfree on destroy and handle-allocation cleanup"], reason: "Eliminates hard object-capacity cap." },
  { id: 14, title: "Enabled user mode subsystem initialization", files: ["src/user_mode/user_mode.c"], changes: ["Un-commented and wired subsystem init/shutdown calls"], reason: "Previously declared init path did not actually initialize subsystems." },
  { id: 15, title: "Implemented missing window manager operations", files: ["src/user_mode/integral_subsystems/workstation/window_manager.c"], changes: ["Added ID-to-window-slot mapping", "Implemented show/hide/move/resize/destroy/minimize/maximize/restore", "Implemented focus/front/back behavior and hit-testing"], reason: "Removed major functional stubs." },
  { id: 16, title: "Added start menu interaction and real clock", files: ["src/impl/kernel/main.c"], changes: ["Start menu open/close toggle", "Clickable menu items for launching windows", "RTC-backed time string replacing static '12:00'", "Keyboard returns 'changed' state for cleaner redraws"], reason: "Addressed desktop interactivity gaps." },
  { id: 17, title: "Completed executive service startup wiring", files: ["src/executive/executive.c"], changes: ["Added gdi_init() during startup", "Registered baseline input drivers", "Created baseline filesystem entries"], reason: "Addressed incomplete executive initialization." },
  { id: 18, title: "Added Notepad cursor navigation keys", files: ["src/impl/kernel/main.c"], changes: ["Added KEY_LEFT/RIGHT/UP/DOWN/HOME/END handling", "Cursor moves within/among lines"], reason: "Removed primary editing limitation." },
  { id: 19, title: "Implemented UI framework event and frame loop", files: ["src/user_mode/integral_subsystems/workstation/ui_framework.c"], changes: ["Added internal event queue", "Added keyboard/mouse polling and event dispatch", "Updated render loop with desktop update + cursor draw + swap_buffers()"], reason: "Replaced skeleton-only behavior." },
  { id: 20, title: "Hardened exception handling", files: ["src/impl/kernel_mode/hal/interrupts/isr.c"], changes: ["Added recursive-exception guard", "Converted exception path to fail-stop (cli + hlt loop)"], reason: "Prevents double/triple-fault escalation." },
  { id: 21, title: "Implemented queued asynchronous I/O", files: ["src/executive/io_manager/io_manager.c", "src/executive/io_manager/io_manager.h"], changes: ["Added internal async request slot tracking", "Changed io_read_async/io_write_async to queue pending ops", "Added io_process_async_requests()"], reason: "Replaced synchronous 'fake async' behavior." },
  { id: 22, title: "Fixed IDT null-entry present-bit bug", files: ["src/impl/kernel_mode/hal/interrupts/idt.c"], changes: ["handler == 0 now creates fully zeroed, not-present gate", "Previously zero handlers were still marked present (0x8E)"], reason: "VMware hardening - spurious vectors at address 0 cause fault storms." },
  { id: 23, title: "Fixed RTC link failure in ISO build", files: ["Makefile"], changes: ["Added RTC driver compilation/linking", "Added explicit build rule for rtc.o"], reason: "Kernel linked with unresolved get_time after clock integration." },
  { id: 24, title: "Removed invalid BIOS video interrupts from long-mode", files: ["src/impl/graphics/vga_graphics.c", "src/impl/x86_64/boot.asm"], changes: ["Stopped invoking BIOS int 0x10 from 64-bit C runtime", "Forced VGA mode setup in 32-bit boot stage", "Made vesa_set_mode() return failure in long mode"], reason: "BIOS services not callable from long mode." },
  { id: 25, title: "Fixed multiboot video-mode mismatch", files: ["src/impl/x86_64/boot.asm"], changes: ["Removed multiboot VIDEO_MODE flag request", "Updated checksum and neutralized unused fields"], reason: "Boot requested VBE 32-bit mode while shell rendered to VGA mode 13h." },
  { id: 26, title: "Switched text rendering to real font table", files: ["src/impl/graphics/vga_graphics.c", "Makefile", "src/impl/graphics/font.c"], changes: ["draw_char() now uses shared font_8x8 glyph table", "Added font.o to build/link graph"], reason: "Replaced inconsistent inline glyph rendering." },
  { id: 27, title: "Hardened IRQ call ABI and compiler settings", files: ["src/impl/kernel_mode/hal/interrupts/isr.asm", "Makefile"], changes: ["Added ABI stack alignment around ISR/IRQ C handler calls", "Added -mno-red-zone to kernel CFLAGS"], reason: "Prevent stack corruption and red-zone clobbering." },
  { id: 28, title: "Improved IRQ dispatch ordering and click-path safety", files: ["src/impl/kernel_mode/hal/interrupts/isr.c", "src/impl/kernel/main.c"], changes: ["Moved pic_eoi() to end of IRQ handling", "Added IRQ vector guard", "Avoided window-order mutation during click hit-tests"], reason: "Reduced re-entrant IRQ pressure and state mutation hazards." },
  { id: 29, title: "Added polling-only stability mode", files: ["src/impl/kernel/main.c"], changes: ["Disabled IRQ-driven runtime input via cli after init", "Continued using mouse_poll()/keyboard_poll() in main loop"], reason: "Temporary VMware stability mode." },
  { id: 30, title: "Desktop shell redesign toward compact XP look", files: ["src/impl/kernel/main.c"], changes: ["Removed desktop 'My PC' icon", "Reduced icon/taskbar/button sizing", "Added custom Notepad icon drawing", "Added compact text renderer", "Improved Start menu layout", "Added startup splash/progress animation", "Added basic z-order bring-to-front"], reason: "Closer XP-like visual behavior in 320x200 mode." },
  { id: 31, title: "Added About app with version/build info", files: ["src/impl/kernel/main.c"], changes: ["Added WIN_ABOUT app window", "Added desktop and Start menu launch entry", "Shows version 00m1, build 1.100, latest changes"], reason: "In-OS version/build visibility." },
  { id: 32, title: "Implemented Start menu Shut Down action", files: ["src/impl/kernel/main.c"], changes: ["Added shutdown_os() routine", "Wired Start menu click to shutdown", "Attempted VM poweroff through ACPI/APM ports", "Non-crashing shutdown-screen state"], reason: "Avoiding CPU-disabled popup." },
  { id: 33, title: "Fixed keyboard/mouse cross-talk and mouse jump decoding", files: ["src/impl/drivers/keyboard.c", "src/impl/drivers/mouse.c"], changes: ["Keyboard ISR ignores auxiliary (mouse) bytes", "Mouse decoder drops overflow packets", "Correct signed PS/2 delta interpretation"], reason: "Eliminated 'typing by itself' and cursor teleporting." },
];

const filesTouched = [
  "src/intf/stdint.h", "src/intf/graphics.h", "src/intf/ui.h", "src/intf/mouse.h", "src/intf/ports.h",
  "src/impl/graphics/vga_graphics.c", "src/impl/graphics/font.c", "src/executive/gdi/gdi.c",
  "src/impl/ui_system/ui.c", "src/impl/ui_system/window.c", "src/impl/ui_system/ui_widgets.c",
  "src/impl/drivers/mouse.c", "src/impl/drivers/keyboard.c",
  "src/impl/kernel_mode/hal/interrupts/isr.asm", "src/impl/kernel_mode/hal/interrupts/isr.c",
  "src/impl/kernel_mode/hal/interrupts/idt.c", "src/impl/kernel_mode/microkernel/ipc.c",
  "src/impl/kernel_mode/microkernel/memory.c", "src/executive/object_manager/object_manager.c",
  "src/user_mode/user_mode.c", "src/user_mode/integral_subsystems/workstation/window_manager.c",
  "src/user_mode/integral_subsystems/workstation/ui_framework.c",
  "src/impl/kernel/main.c", "src/executive/executive.c",
  "src/executive/io_manager/io_manager.c", "src/executive/io_manager/io_manager.h",
  "src/impl/x86_64/boot.asm", "Makefile",
];

const FixCard = ({ fix }: { fix: FixSection }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card glass-card-hover p-5 rounded-xl border border-white/10 group"
    >
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center shrink-0 text-sm font-bold text-cyan-400">
          {fix.id}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h4 className="font-semibold text-white/90">{fix.title}</h4>
            <button
              onClick={() => setExpanded(!expanded)}
              className="p-2 rounded-lg bg-white/5 text-white/50 hover:text-cyan-400 transition-colors shrink-0"
            >
              {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            {fix.files.map((f, i) => (
              <code key={i} className="text-xs text-cyan-300/60 font-mono bg-cyan-500/10 px-2 py-0.5 rounded">{f}</code>
            ))}
          </div>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-4 pt-4 border-t border-white/10"
            >
              <div className="space-y-2 mb-3">
                {fix.changes.map((c, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-white/60">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
              <div className="text-sm p-3 rounded-lg bg-white/5 border border-white/10">
                <span className="font-medium text-purple-400">Reason: </span>
                <span className="text-white/60">{fix.reason}</span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const BugFixPass = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-[hsl(225_25%_6%)]">
        <Header />

        <main className="flex-1">
          {/* Hero */}
          <section className="relative pt-32 pb-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse" />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <Link to="/news" className="inline-flex items-center gap-2 text-white/60 hover:text-cyan-400 mb-8 transition-colors group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to News
              </Link>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <Badge className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white border-0 px-4 py-1.5 text-sm font-medium shadow-lg shadow-emerald-500/25">
                    <Hammer className="w-3.5 h-3.5 mr-2" />
                    33 Fixes Applied
                  </Badge>
                  <Badge variant="outline" className="border-purple-500/50 bg-purple-500/10 text-purple-300 px-3 py-1">
                    <Rocket className="w-3.5 h-3.5 mr-1" />
                    Alpha Release
                  </Badge>
                  <span className="text-sm text-white/50 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    February 13, 2026
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-white">Comprehensive </span>
                  <span className="text-gaming">Bug Fix Pass</span>
                </h1>

                <p className="text-xl text-white/60 max-w-3xl mb-10">
                  Complete stabilization of the <code className="text-cyan-400">src</code> codebase — 33 fixes across kernel, graphics, drivers, interrupt handling, and desktop shell. 
                  20 of 25 tracked bugs now resolved.
                </p>

                {/* Stats Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  {[
                    { label: "Fixes Applied", value: "33", gradient: "from-cyan-500 to-blue-500" },
                    { label: "Bugs Resolved", value: "20/25", gradient: "from-emerald-500 to-teal-500" },
                    { label: "Files Touched", value: "28", gradient: "from-purple-500 to-pink-500" },
                    { label: "Resolution", value: "80%", gradient: "from-amber-500 to-orange-500" },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * i }}
                      className="glass-card p-4 rounded-xl text-center"
                    >
                      <div className={`text-2xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>{stat.value}</div>
                      <div className="text-xs text-white/50 mt-1">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Commit Link */}
                <a
                  href="https://github.com/urmoit/GamerOS/commit/62701194e5ee754750aa70cd7006d929821cfaf7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass-card border border-cyan-500/30 text-cyan-400 text-sm hover:bg-cyan-500/10 transition-colors"
                >
                  <GitCommit className="w-4 h-4" />
                  <span className="font-mono">6270119</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            </div>
          </section>

          {/* Fixes List */}
          <section className="py-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">All Fixes</h2>
                </div>
                <p className="text-white/50 ml-[52px]">Click any fix to see details</p>
              </motion.div>

              <div className="space-y-3">
                {fixes.map((fix) => (
                  <FixCard key={fix.id} fix={fix} />
                ))}
              </div>
            </div>
          </section>

          {/* Files Touched */}
          <section className="py-16 border-t border-white/10">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                    <FileCode className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Files Touched ({filesTouched.length})</h2>
                </div>
              </motion.div>

              <div className="glass-card p-6 rounded-xl border border-white/10">
                <div className="grid sm:grid-cols-2 gap-2">
                  {filesTouched.map((file, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm font-mono text-cyan-300/70 py-1.5 px-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <FileCode className="w-3.5 h-3.5 text-cyan-400/50 shrink-0" />
                      <span className="truncate">{file}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Validation & Notes */}
          <section className="py-16 border-t border-white/10">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Validation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 rounded-xl border border-emerald-500/20"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Validation</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                      <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-white/80">Syntax Validation</p>
                        <p className="text-xs text-white/50">No syntax errors across all C files in src</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                      <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-white/80">Environment Blocker</p>
                        <p className="text-xs text-white/50">Full make build blocked — cross-toolchain binaries (x86_64-linux-gnu-gcc) missing from validation environment</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Notes */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 rounded-xl border border-purple-500/20"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                      <Terminal className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Notes</h3>
                  </div>
                  <div className="space-y-3 text-sm text-white/60">
                    <p>• This pass was <span className="text-cyan-400">compatibility-first</span> — get src compiling cleanly with minimal behavioral churn.</p>
                    <p>• A future cleanup can remove compatibility wrappers and migrate all callers to a single modern graphics API.</p>
                    <p>• VMware runtime stability has improved but still requires continued validation under <span className="text-purple-400">drag/click heavy interaction</span>.</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 border-t border-white/10">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="btn-neon gap-2" asChild>
                  <Link to="/gameros-changelog">
                    <Bug className="w-5 h-5" />
                    View Changelog
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 border-white/20 hover:border-purple-400/50 hover:bg-purple-400/10" asChild>
                  <Link to="/roadmap">
                    <Target className="w-5 h-5" />
                    View Roadmap
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

export default BugFixPass;
