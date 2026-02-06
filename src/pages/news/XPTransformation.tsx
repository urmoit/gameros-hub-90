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
  Monitor,
  MousePointer,
  Cpu,
  Layers,
  Zap,
  ArrowRight,
  ExternalLink,
  Gamepad2,
  HardDrive,
  Usb,
  Type,
  PaintBucket,
  Terminal,
  CheckCircle,
  Keyboard,
  AppWindow,
  Settings
} from "lucide-react";

const sections = [
  {
    id: 1,
    title: "Graphics Revolution: VESA True Color (32-bit)",
    icon: Monitor,
    gradient: "from-blue-500 to-indigo-600",
    description: "Transitioned from legacy 16-color VGA to modern 32-bit Linear Framebuffer (LFB).",
    details: [
      { label: "High Resolution", text: "Standardized on 1024x768x32 ARGB graphics" },
      { label: "LFB Implementation", text: "Direct memory writes to framebuffer, replacing complex VGA port-poking" },
      { label: "Color Depth", text: "True ARGB color engine for smooth gradients and vibrant Luna theme colors" },
    ],
  },
  {
    id: 2,
    title: 'Windows XP "Luna" Desktop Environment',
    icon: PaintBucket,
    gradient: "from-green-500 to-emerald-600",
    description: "Pixel-perfect recreation of the classic Windows XP UI.",
    details: [
      { label: "Desktop Background", text: 'Signature "Bliss" sky blue background' },
      { label: "Taskbar & Start Menu", text: "Blue taskbar, green Start button, Log Off / Turn Off actions" },
      { label: "Real-Time Clock", text: "RTC integration displaying actual system time in taskbar" },
      { label: "Startup Animation", text: "32-bit splash screen with XP logo and animated progress bar" },
    ],
  },
  {
    id: 3,
    title: "Interactive Desktop Applications",
    icon: AppWindow,
    gradient: "from-purple-500 to-pink-600",
    description: "Functional, event-driven desktop system with real apps.",
    details: [
      { label: "Notepad App", text: "Draggable windows, title bars, close buttons, and full keyboard text input" },
      { label: "Dynamic Redraw", text: "Optimized kernel loop for efficient desktop, window, and UI element redraws" },
    ],
  },
  {
    id: 4,
    title: "Virtualization & Hardware Integration",
    icon: MousePointer,
    gradient: "from-cyan-500 to-blue-600",
    description: "Optimized guest experience for VMware and VirtualBox.",
    details: [
      { label: "VMware Absolute Mouse", text: "Custom driver via VMware Backdoor (I/O port 0x5658) for 1:1 movement" },
      { label: "Host Cursor Integration", text: "Suppress software cursor, show native host cursor for seamless feel" },
      { label: "Mouse Scaling", text: "Dynamic range scaling based on detected VESA resolution" },
    ],
  },
  {
    id: 5,
    title: "Kernel Architecture & Stability",
    icon: Cpu,
    gradient: "from-orange-500 to-red-600",
    description: "Deep-level kernel fixes for high-end graphics and stability.",
    details: [
      { label: "4GB Identity Mapping", text: "2MB huge pages in boot.asm for high-memory VESA LFB access" },
      { label: "Multiboot Compliance", text: "Correct parsing of Multiboot information structure" },
      { label: "Build Stabilization", text: 'Resolved "Multiple Definition" errors, standardized prototypes' },
    ],
  },
  {
    id: 6,
    title: "Mouse Cursor & XP-Style Desktop",
    icon: Gamepad2,
    gradient: "from-teal-500 to-cyan-600",
    description: "Fixed cursor rendering and implemented full XP desktop environment.",
    details: [
      { label: "Simplified Cursor", text: "Robust 16x16 bitmap format compatible with VGA mode 13h" },
      { label: "Desktop Icons", text: "My Computer and Recycle Bin icons on desktop" },
      { label: "Interactive Start Menu", text: "Programs, Documents, Settings, Search, Help, Run, Shut Down items" },
      { label: "Desktop Manager", text: "Mouse click detection, background rendering, taskbar updates" },
    ],
  },
  {
    id: 7,
    title: "Professional Asset Management & XP Cursors",
    icon: Settings,
    gradient: "from-violet-500 to-purple-600",
    description: "Authentic Windows XP cursor assets with full ARGB transparency.",
    details: [
      { label: "Resource Architecture", text: "Assets in src/resources/cursors with Python-based conversion tool" },
      { label: "Bitmap Renderer", text: "32-bit ARGB transparency for shadowed Luna cursor look" },
      { label: "Cursor Switching", text: "Arrow vs Link cursors for context-aware interactions" },
    ],
  },
  {
    id: 8,
    title: "Comprehensive USB Support (1.0 - 3.0)",
    icon: Usb,
    gradient: "from-rose-500 to-pink-600",
    description: "Future-proof hardware abstraction with full USB evolution support.",
    details: [
      { label: "PCI Enumeration", text: "Recursive bus scanner with bus-mastering for all peripherals" },
      { label: "USB 1.1 (UHCI/OHCI)", text: "Root Hub Port Scanning with physical connection detection" },
      { label: "USB 2.0 (EHCI)", text: "High-speed device handover from BIOS to Kernel" },
      { label: "USB 3.0 (XHCI)", text: "SuperSpeed detection with 64-bit MMIO support" },
    ],
  },
  {
    id: 9,
    title: "Stable Version + 8x16 Bitmap Font",
    icon: Type,
    gradient: "from-amber-500 to-orange-600",
    description: "Restored stable kernel and added high-quality bitmap font.",
    details: [
      { label: "Kernel Restore", text: "Clean desktop drawing, simple cursor, proper initialization sequence" },
      { label: "8x16 Font", text: "Full ASCII set (32-127), 128 pixels per character, crisp rendering" },
      { label: "Font Functions", text: "draw_char_8x16() and draw_string_8x16() with color support" },
    ],
  },
  {
    id: 10,
    title: "Complete Kernel Rewrite - Double Buffering & VESA",
    icon: Terminal,
    gradient: "from-emerald-500 to-green-600",
    description: "Full rewrite fixing broken display with proper graphics architecture.",
    details: [
      { label: "VGA/VESA Init", text: "Proper Mode 13h (320x200x256) with VESA fallback support" },
      { label: "Double Buffering", text: "800x600 back buffer for zero-flicker, smooth cursor rendering" },
      { label: "Window System", text: "Draggable, closable windows with taskbar integration" },
      { label: "Input System", text: "Full PS/2 mouse + keyboard with ring buffer and extended keys" },
    ],
  },
];

const verificationResults = [
  { label: "Build Status", value: "SUCCESSFUL", pass: true },
  { label: "QEMU Boot", value: "Full interactive capability", pass: true },
  { label: "Graphics", value: "Desktop displays correctly", pass: true },
  { label: "Mouse", value: "Cursor tracks, buttons work", pass: true },
  { label: "Keyboard", value: "Full typing in Notepad", pass: true },
  { label: "Windows", value: "Draggable, closable, taskbar", pass: true },
  { label: "Double Buffering", value: "Zero flicker", pass: true },
];

const XPTransformation = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative pt-32 pb-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-green-500/10" />
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-500/15 rounded-full blur-3xl animate-pulse" />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <Link
                to="/news"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to News
              </Link>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <Badge className="bg-gradient-to-r from-blue-500 to-green-500 text-white border-0 px-4 py-1.5 text-sm font-medium">
                    <Layers className="w-3.5 h-3.5 mr-2" />
                    Major Walkthrough
                  </Badge>
                  <Badge variant="outline" className="border-emerald-500/30 bg-emerald-500/10 text-emerald-400 px-3 py-1">
                    <CheckCircle className="w-3.5 h-3.5 mr-1" />
                    Verified Build
                  </Badge>
                  <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    February 6, 2026
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  GamerOS: The Windows XP
                  <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2 bg-gradient-to-r from-blue-400 via-green-400 to-emerald-500 bg-clip-text text-transparent">
                    Transformation
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground max-w-3xl mb-8">
                  A comprehensive summary of the major architectural upgrades and feature implementations — 
                  from legacy VGA to 32-bit VESA, complete desktop environment, USB stack, and verified stable build.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Button asChild>
                    <a href="https://github.com/urmoit/GamerOS" target="_blank" rel="noopener noreferrer" className="gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View on GitHub
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/news/xp-implementation" className="gap-2">
                      <ArrowRight className="w-4 h-4" />
                      Original Implementation Plan
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Sections */}
          <section className="py-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid gap-8">
                {sections.map((section, i) => (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="glass-card p-6 rounded-2xl hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${section.gradient} flex items-center justify-center shrink-0`}>
                        <section.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="secondary" className="text-xs font-mono">#{section.id}</Badge>
                          <h3 className="text-xl font-semibold">{section.title}</h3>
                        </div>
                        <p className="text-muted-foreground mb-4">{section.description}</p>
                        <ul className="space-y-3">
                          {section.details.map((detail, j) => (
                            <li key={j} className="flex gap-3">
                              <ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                              <div>
                                <strong className="text-foreground">{detail.label}:</strong>
                                <span className="text-muted-foreground ml-1">{detail.text}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Verification Results */}
          <section className="py-16 border-y border-border/50 bg-card/30">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-2">Verification Results</h2>
                <p className="text-muted-foreground mb-8">Final ISO: <code className="text-xs bg-muted px-2 py-1 rounded font-mono">dist/x86_64/kernel.iso</code> (5.2MB)</p>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {verificationResults.map((result, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="glass-card p-4 rounded-xl"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        <span className="font-medium text-sm">{result.label}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{result.value}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Next Steps */}
          <section className="py-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Future sessions will focus on expanding capabilities.
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {[
                  "Higher Resolution (640x480, 800x600 VESA)",
                  "Filesystem for saving Notepad .txt files",
                  "Multi-window focus & Z-ordering",
                  "Wallpaper/background image support",
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card p-4 rounded-xl"
                  >
                    <p className="text-sm text-muted-foreground">{step}</p>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-4 mt-10">
                <Button asChild>
                  <Link to="/roadmap" className="gap-2">
                    <Zap className="w-4 h-4" />
                    View Roadmap
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/bug-tracking" className="gap-2">
                    <HardDrive className="w-4 h-4" />
                    Bug Tracker
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

export default XPTransformation;
