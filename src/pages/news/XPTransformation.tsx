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
  Settings,
  Sparkles,
  Trophy,
  Target,
  CpuIcon,
  MemoryStick,
  Wrench,
  Rocket
} from "lucide-react";

// Gaming-themed color assignments for sections
const sectionThemes = [
  { border: "border-border", glow: "", iconBg: "bg-muted", text: "text-primary", gradient: " " },
  { border: "border-border", glow: "", iconBg: "bg-muted", text: "text-primary", gradient: " " },
  { border: "border-border", glow: "", iconBg: "bg-muted", text: "text-primary", gradient: " " },
  { border: "border-border", glow: "", iconBg: "bg-warning/10", text: "text-warning", gradient: " " },
  { border: "border-border", glow: "", iconBg: "bg-success/10", text: "text-success", gradient: " " },
  { border: "border-border", glow: "", iconBg: "bg-muted", text: "text-primary", gradient: " " },
  { border: "border-border", glow: "", iconBg: "bg-muted", text: "text-primary", gradient: " " },
  { border: "border-border", glow: "", iconBg: "bg-muted", text: "text-primary", gradient: " " },
  { border: "border-border", glow: "", iconBg: "bg-warning/10", text: "text-warning", gradient: " " },
  { border: "border-border", glow: "", iconBg: "bg-success/10", text: "text-success", gradient: " " },
];

const sections = [
  {
    id: 1,
    title: "Graphics Revolution: VESA True Color (32-bit)",
    icon: Monitor,
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
  { label: "Build Status", value: "SUCCESSFUL", icon: Trophy },
  { label: "QEMU Boot", value: "Full interactive capability", icon: Rocket },
  { label: "Graphics", value: "Desktop displays correctly", icon: Monitor },
  { label: "Mouse", value: "Cursor tracks, buttons work", icon: MousePointer },
  { label: "Keyboard", value: "Full typing in Notepad", icon: Keyboard },
  { label: "Windows", value: "Draggable, closable, taskbar", icon: AppWindow },
  { label: "Double Buffering", value: "Zero flicker", icon: Layers },
];

const nextSteps = [
  { text: "Higher Resolution (640x480, 800x600 VESA)", icon: Monitor },
  { text: "Filesystem for saving Notepad .txt files", icon: HardDrive },
  { text: "Multi-window focus & Z-ordering", icon: Layers },
  { text: "Wallpaper/background image support", icon: PaintBucket },
];

const XPTransformation = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1">
          {/* Hero Section - Gaming Style */}
          <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Animated Background Effects */}
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="absolute top-0 left-0 w-full h-full bg-muted  via-transparent " />
            
            {/* Glowing Orbs */}
            <motion.div 
              className="absolute top-20 left-10 w-72 h-72 bg-muted rounded-full hidden"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-10 right-10 w-96 h-96 bg-muted rounded-full hidden"
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-muted rounded-full hidden"
              animate={{ 
                rotate: 360
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <Link
                to="/news"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to News
              </Link>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <Badge className="bg-muted   text-foreground border-0 px-4 py-1.5 text-sm font-medium shadow-lg ">
                    <Trophy className="w-3.5 h-3.5 mr-2" />
                    Major Walkthrough
                  </Badge>
                  <Badge className="bg-muted   text-foreground border-0 px-4 py-1.5 text-sm font-medium shadow-lg ">
                    <Sparkles className="w-3.5 h-3.5 mr-2" />
                    Verified Build
                  </Badge>
                  <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    February 6, 2026
                  </span>
                </div>

                {/* Animated Title */}
                <h1 className="text-4xl sm:text-5xl lg:text-4xl font-bold mb-6 leading-tight">
                  <span className="text-gaming">GamerOS: The Windows XP</span>
                  <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2 text-gaming-alt">
                    Transformation
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground max-w-3xl mb-8">
                  A comprehensive summary of the major architectural upgrades and feature implementations — 
                  from legacy VGA to 32-bit VESA, complete desktop environment, USB stack, and verified stable build.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="btn-solid gap-2">
                    <a href="https://github.com/urmoit/GamerOS" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      View on GitHub
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    asChild
                    className="border-border text-primary hover:bg-muted hover:text-primary gap-2"
                  >
                    <Link to="/news/xp-implementation">
                      <ArrowRight className="w-4 h-4" />
                      Original Implementation Plan
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Sections - Gaming Cards */}
          <section className="py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gaming mb-4">Development Milestones</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Track the evolution of GamerOS through each major feature implementation
                </p>
              </motion.div>

              <div className="grid gap-6">
                {sections.map((section, i) => {
                  const theme = sectionThemes[i % sectionThemes.length];
                  return (
                    <motion.div
                      key={section.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className={`glass-card glass-card-hover p-6 rounded-lg border-l-4 ${theme.border} ${theme.glow} transition-all duration-300`}
                    >
                      <div className="flex items-start gap-4">
                        {/* Icon with Gaming Style */}
                        <div className={`w-14 h-14 rounded-lg ${theme.iconBg} border border-border flex items-center justify-center shrink-0 shadow-lg ${theme.glow}`}>
                          <section.icon className={`w-7 h-7 ${theme.text}`} />
                        </div>
                        
                        <div className="flex-1">
                          {/* Title Row with Achievement Badge */}
                          <div className="flex items-center gap-3 mb-2 flex-wrap">
                            <div className={`px-3 py-1 rounded-full bg-muted ${theme.gradient} text-foreground text-xs font-bold shadow-lg`}>
                              LV.{section.id}
                            </div>
                            <h3 className="text-xl font-semibold text-foreground">{section.title}</h3>
                          </div>
                          
                          <p className="text-muted-foreground mb-4">{section.description}</p>
                          
                          {/* Feature List with Hover Effects */}
                          <ul className="space-y-3">
                            {section.details.map((detail, j) => (
                              <motion.li 
                                key={j} 
                                className="flex gap-3 group cursor-default"
                                whileHover={{ x: 4 }}
                                transition={{ duration: 0.2 }}
                              >
                                <div className={`w-5 h-5 rounded-full ${theme.iconBg} flex items-center justify-center shrink-0 mt-0.5 group-hover:shadow-lg group-hover:${theme.glow} transition-all`}>
                                  <Target className={`w-3 h-3 ${theme.text}`} />
                                </div>
                                <div>
                                  <strong className={`${theme.text}`}>{detail.label}:</strong>
                                  <span className="text-muted-foreground ml-1">{detail.text}</span>
                                </div>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Verification Results - Achievement Grid */}
          <section className="py-12 border-y border-border bg-background">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gaming mb-2">Achievement Unlocked</h2>
                  <p className="text-muted-foreground">Final ISO: <code className="text-xs bg-muted text-primary px-2 py-1 rounded font-mono border border-border">dist/x86_64/kernel.iso</code> (5.2MB)</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {verificationResults.map((result, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.05, y: -4 }}
                      className="glass-card glass-card-hover p-4 rounded-lg border border-border text-center group"
                    >
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-success/10 flex items-center justify-center group-hover:shadow-lg  transition-all">
                        <result.icon className="w-6 h-6 text-success" />
                      </div>
                      <div className="font-medium text-sm text-foreground mb-1">{result.label}</div>
                      <p className="text-xs text-success">{result.value}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Next Steps - Quest Board Style */}
          <section className="py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border mb-6">
                  <Target className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium">Upcoming Quests</span>
                </div>
                
                <h2 className="text-3xl font-bold text-gaming-alt mb-4">Next Steps</h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Future sessions will focus on expanding capabilities and unlocking new features.
                </p>
                
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                  {nextSteps.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="glass-card glass-card-hover p-5 rounded-lg border border-border group cursor-pointer"
                    >
                      <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-muted flex items-center justify-center group-hover:shadow-lg  transition-all">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                      <p className="text-sm text-foreground">{step.text}</p>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mt-12">
                  <Button asChild className="btn-solid gap-2">
                    <Link to="/download">
                      <Zap className="w-4 h-4" />
                      Download
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    asChild
                    className="border-border text-primary hover:bg-muted hover:text-primary gap-2"
                  >
                    <Link to="/news">
                      <Wrench className="w-4 h-4" />
                      All News
                    </Link>
                  </Button>
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

export default XPTransformation;
