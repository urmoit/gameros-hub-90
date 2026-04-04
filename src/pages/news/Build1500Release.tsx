import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PageTransition from "@/components/ui/PageTransition";
import {
  ArrowLeft,
  Calendar,
  Shield,
  Cpu,
  Monitor,
  Bug,
  Rocket,
  ArrowRight,
  Sparkles,
  Zap,
  Code2,
  GitCommit,
  ExternalLink,
  Download,
  HardDrive,
  Keyboard,
  Settings,
  Terminal,
  Wrench,
} from "lucide-react";

const stabilityAreas = [
  {
    icon: Cpu,
    title: "Kernel Boot Robustness",
    description: "Fixed NASM warnings, reordered init sequence (Serial → HAL → FS → Input → Graphics → Shell), added page table self-checks and 4K BSS alignment.",
    color: "cyan",
  },
  {
    icon: Monitor,
    title: "Graphics Subsystem Stability",
    description: "Bounds validation on all VGA writes, memory barriers, framebuffer pitch/alignment checks, cursor clipping, and font NULL-safety.",
    color: "purple",
  },
  {
    icon: Keyboard,
    title: "Input Driver Stabilization",
    description: "Keyboard extended key timeout, mouse packet sync validation, wheel delta saturation, spurious IRQ handlers, and bounded polling.",
    color: "pink",
  },
  {
    icon: HardDrive,
    title: "Filesystem & Storage Reliability",
    description: "NULL checks and bounds validation on all FS APIs, ATA PIO timeouts, superblock magic validation, and RAM-backed storage zeroing.",
    color: "cyan",
  },
  {
    icon: Settings,
    title: "Shell & Window Manager",
    description: "Bounded input polling (max 64/device), drag/resize validation, window count/title/position checks, and clean all-closed focus handling.",
    color: "purple",
  },
  {
    icon: Shield,
    title: "Driver Subsystem Hardening",
    description: "RTC NMI-safe reads, serial I/O timeouts, VMware backdoor exception handler, and USB stub documentation.",
    color: "pink",
  },
  {
    icon: Terminal,
    title: "Executive & User Mode",
    description: "Subsystem-by-subsystem init validation, PID wrap safety, GOSAPP format validation, and graceful task table full handling.",
    color: "cyan",
  },
  {
    icon: Wrench,
    title: "Build System Reliability",
    description: "Explicit directory deps, clean target fixes, pinned Ubuntu 22.04 Docker, tool availability checks, and error code reporting.",
    color: "purple",
  },
];

const bugFixes = [
  "Fixed hundreds of NASM warnings from boot.asm BSS section initialization",
  "Fixed potential page table misalignment on memory-constrained VMs",
  "Fixed boot sequence ordering that could drop input events during startup",
  "Fixed VGA planar write paths that could corrupt memory on slow hardware",
  "Fixed true-color framebuffer validation that missed pitch overflow cases",
  "Fixed cursor rendering that could write out-of-bounds on screen edges",
  "Fixed keyboard extended key prefix getting stuck without following scancode",
  "Fixed mouse packet desync causing freeze on VMware with noisy PS/2",
  "Fixed PIC EOI sequencing for IRQ8-15 cascade interrupts",
  "Fixed infinite poll loops in keyboard and mouse polling functions",
  "Fixed filesystem crashes from NULL or oversized path parameters",
  "Fixed ATA driver hang when device is absent or unresponsive",
  "Fixed shell input loop that could freeze from unbounded polling",
  "Fixed window manager leaving gaps in window array after close",
  "Fixed widget memory leaks on destruction of complex widgets",
  "Fixed RTC reads triggering spurious NMIs from bit 7 corruption",
  "Fixed serial I/O hanging on hardware without UART",
  "Fixed VMware backdoor crashes on non-VMware hardware",
  "Fixed executive layer cascading failures from subsystem init errors",
  "Fixed process model crashes from malformed GOSAPP executables",
  "Fixed build system failures from stale artifacts in repeated builds",
  "Fixed Docker build non-reproducibility from unpinned base image",
];

const newAPIs = [
  "keyboard_buffer_count() helper for debugging keyboard buffer state",
  "pic_mask_irq() and pic_unmask_irq() for safe interrupt enable/disable",
  "pic_handle_spurious() for IRQ7/IRQ15 spurious interrupt handling",
  "input_poll_all() helper for safe sequential keyboard and mouse polling",
  "graphics_get_bpp() API for runtime graphics capability reporting",
  "Serial debug logging for framebuffer rejection reasons",
  "Boot milestone reporting for each init stage via serial output",
  "Page table self-check validation during early boot",
  "Widget event validation for enabled/visible state before dispatch",
  "Process executable format validation in GOSAPP loader",
  "Build script tool availability checks (Docker, GCC, NASM, QEMU)",
];

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  cyan: { bg: "bg-cyan-400/10", border: "border-cyan-400/30", text: "text-cyan-400" },
  purple: { bg: "bg-purple-400/10", border: "border-purple-400/30", text: "text-purple-400" },
  pink: { bg: "bg-pink-400/10", border: "border-pink-400/30", text: "text-pink-400" },
};

const Build1500Release = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[hsl(225_25%_6%)]">
        <Header />
        <main className="pt-24 pb-16">
          {/* Hero */}
          <section className="py-16 relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="absolute top-20 left-10 w-72 h-72 bg-[hsl(180_100%_50%)]/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[hsl(280_100%_60%)]/10 rounded-full blur-[100px]" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <Button variant="ghost" asChild className="mb-8 text-white/60 hover:text-white hover:bg-white/5">
                <Link to="/news" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to News
                </Link>
              </Button>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30">
                  <Rocket className="w-3 h-3 mr-1" />
                  Released
                </Badge>
                <Badge className="bg-[hsl(180_100%_50%)]/10 text-[hsl(180_100%_50%)] border-[hsl(180_100%_50%)]/30">
                  Build 1.500
                </Badge>
                <Badge className="bg-[hsl(280_100%_60%)]/10 text-[hsl(280_100%_60%)] border-[hsl(280_100%_60%)]/30">
                  Stability Release
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Build 1.500 — <span className="text-[hsl(180_100%_50%)]">Stability & Reliability Hardening</span>
              </h1>

              <div className="flex items-center gap-2 text-white/50 mb-6">
                <Calendar className="w-4 h-4" />
                <span>April 3, 2026</span>
              </div>

              <p className="text-lg text-white/60 leading-relaxed max-w-3xl">
                A stability-focused release with no new user-visible features. Every subsystem received comprehensive 
                hardening — kernel boot, graphics, input drivers, filesystem, shell, window manager, executive layer, 
                and build system. 22+ bug fixes and 11 new diagnostic APIs.
              </p>
            </div>
          </section>

          {/* Download CTA */}
          <section className="py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="glass-card p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-[hsl(180_100%_50%)]" />
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center">
                      <Download className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50">Download now</p>
                      <p className="font-mono text-sm text-emerald-400">GamerOS_Alpha_Build_1.500.iso</p>
                    </div>
                  </div>
                  <Button size="lg" className="btn-neon border-0 sm:ml-auto" asChild>
                    <a
                      href="https://github.com/urmoit/GamerOS/releases/download/00m1-alpha-Build-1.500/GamerOS_Alpha_Build_1.500.iso"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Download ISO
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Stability Areas */}
          <section className="py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-[hsl(280_100%_60%)]/10 border border-[hsl(280_100%_60%)]/30 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[hsl(280_100%_60%)]" />
                </div>
                <h2 className="text-2xl font-bold text-white">Hardened Subsystems</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {stabilityAreas.map((area, i) => {
                  const colors = colorMap[area.color];
                  return (
                    <div key={i} className="glass-card glass-card-hover p-6 relative overflow-hidden group">
                      <div className="flex items-start gap-4">
                        <div className={`w-10 h-10 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center shrink-0`}>
                          <area.icon className={`w-5 h-5 ${colors.text}`} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-2">{area.title}</h3>
                          <p className="text-sm text-white/50 leading-relaxed">{area.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* New APIs */}
          <section className="py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-[hsl(180_100%_50%)]/10 border border-[hsl(180_100%_50%)]/30 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[hsl(180_100%_50%)]" />
                </div>
                <h2 className="text-2xl font-bold text-white">New APIs & Diagnostics ({newAPIs.length})</h2>
              </div>

              <div className="glass-card p-6">
                <ul className="space-y-3">
                  {newAPIs.map((api, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Zap className="w-4 h-4 text-[hsl(180_100%_50%)] mt-0.5 shrink-0" />
                      <span className="text-sm text-white/60">{api}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Bug Fixes */}
          <section className="py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center">
                  <Bug className="w-5 h-5 text-emerald-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Bug Fixes ({bugFixes.length})</h2>
              </div>

              <div className="glass-card p-6">
                <ul className="space-y-3">
                  {bugFixes.map((fix, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Bug className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span className="text-sm text-white/60">{fix}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="glass-card p-10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(180_100%_50%)]/5 via-[hsl(280_100%_60%)]/5 to-[hsl(320_100%_60%)]/5" />
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Download Build 1.500
                  </h2>
                  <p className="text-white/60 mb-8 max-w-lg mx-auto">
                    The most stable alpha yet — comprehensive hardening across every subsystem with 22+ fixes and backward compatibility.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" className="btn-neon border-0" asChild>
                      <a
                        href="https://github.com/urmoit/GamerOS/releases/download/00m1-alpha-Build-1.500/GamerOS_Alpha_Build_1.500.iso"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        <span className="relative z-10">Download ISO</span>
                      </a>
                    </Button>


                  </div>
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

export default Build1500Release;
