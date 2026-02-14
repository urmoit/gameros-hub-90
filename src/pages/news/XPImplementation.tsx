import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/ui/PageTransition";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Calendar, 
  Palette, 
  AlertCircle, 
  CheckCircle, 
  Monitor, 
  MousePointer,
  Cpu,
  Layers,
  Zap,
  ArrowRight,
  ExternalLink,
  Gamepad2,
  Terminal,
  Sparkles,
  Flame,
  Code,
  Target,
  Rocket
} from "lucide-react";

const implementationSteps = [
  { label: "Palette Setup", progress: 100, done: true },
  { label: "Graphics Primitives", progress: 80, done: false },
  { label: "Startup Animation", progress: 40, done: false },
  { label: "Desktop UI", progress: 20, done: false },
  { label: "Input Integration", progress: 10, done: false },
];

const colorPalette = [
  { name: "Taskbar Blue", hex: "#0A246A", description: "Main taskbar background" },
  { name: "Start Green", hex: "#3C8C3C", description: "Start button gradient" },
  { name: "Window Blue", hex: "#0054E3", description: "Active window title" },
  { name: "Bliss Sky", hex: "#3A6EA5", description: "Desktop background" },
  { name: "Content White", hex: "#ECE9D8", description: "Window content area" },
  { name: "Text Black", hex: "#000000", description: "Primary text color" },
];

const techStack = [
  { icon: Terminal, name: "VGA Mode 12h", desc: "640×480, 16 colors" },
  { icon: Code, name: "C / Assembly", desc: "Kernel development" },
  { icon: Cpu, name: "Multiboot", desc: "Bootloader protocol" },
  { icon: Gamepad2, name: "VMware", desc: "Virtualization support" },
];

const challenges = [
  { 
    challenge: "16-Color Limitation", 
    solution: "Custom XP Luna palette replacing standard VGA colors",
    icon: Palette
  },
  { 
    challenge: "VM Graphics Artifacts", 
    solution: "VESA VBE Linear Framebuffer for 32-bit True Color",
    icon: Monitor
  },
  { 
    challenge: "Mouse Synchronization", 
    solution: "VMware Backdoor for absolute cursor positioning",
    icon: MousePointer
  },
];

const XPImplementation = () => {
  const overallProgress = Math.round(
    implementationSteps.reduce((acc, step) => acc + step.progress, 0) / implementationSteps.length
  );

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: "hsl(225 25% 6%)" }}>
        <Header />

        <main className="flex-1">
          {/* Animated Hero Section */}
          <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
              {/* Grid Pattern */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '50px 50px'
                }}
              />
              
              {/* Glowing Orbs */}
              <div 
                className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl animate-pulse"
                style={{ background: "linear-gradient(135deg, hsl(180 100% 50% / 0.15), hsl(280 100% 60% / 0.1))" }}
              />
              <div 
                className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full blur-3xl animate-pulse"
                style={{ 
                  background: "linear-gradient(135deg, hsl(280 100% 60% / 0.15), hsl(320 100% 60% / 0.1))",
                  animationDelay: "1s"
                }}
              />
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl"
                style={{ background: "radial-gradient(circle, hsl(180 100% 50% / 0.08) 0%, transparent 70%)" }}
              />
            </div>

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Back Link */}
              <Link
                to="/news"
                className="inline-flex items-center gap-2 mb-8 transition-all group"
                style={{ color: "hsl(180 100% 50% / 0.7)" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "hsl(180 100% 50%)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "hsl(180 100% 50% / 0.7)"}
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to News
              </Link>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Tags */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <Badge 
                    className="px-4 py-1.5 text-sm font-medium border-0"
                    style={{ 
                      background: "linear-gradient(135deg, hsl(180 100% 50%), hsl(280 100% 60%))",
                      color: "hsl(225 25% 6%)"
                    }}
                  >
                    <Palette className="w-3.5 h-3.5 mr-2" />
                    UI Overhaul
                  </Badge>
                  <Badge 
                    variant="outline" 
                    className="px-3 py-1 border"
                    style={{ 
                      borderColor: "hsl(320 100% 60% / 0.5)", 
                      backgroundColor: "hsl(320 100% 60% / 0.1)",
                      color: "hsl(320 100% 60%)"
                    }}
                  >
                    <Zap className="w-3.5 h-3.5 mr-1" />
                    In Progress
                  </Badge>
                  <span 
                    className="text-sm flex items-center gap-1.5"
                    style={{ color: "hsl(225 25% 60%)" }}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    January 28, 2026
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                  Windows XP Theme
                  <span 
                    className="block text-2xl sm:text-3xl lg:text-4xl mt-2"
                    style={{ 
                      background: "linear-gradient(135deg, hsl(180 100% 50%), hsl(280 100% 60%))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text"
                    }}
                  >
                    Implementation Plan
                  </span>
                </h1>

                <p 
                  className="text-xl max-w-3xl mb-10"
                  style={{ color: "hsl(225 25% 65%)" }}
                >
                  Transforming GamerOS with the iconic Luna theme — complete with startup animation, 
                  taskbar, and the classic Bliss-inspired desktop environment.
                </p>

                {/* Progress Overview Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="glass-card p-6 rounded-2xl max-w-2xl relative overflow-hidden"
                >
                  {/* Glow Effect */}
                  <div 
                    className="absolute inset-0 opacity-30"
                    style={{
                      background: "linear-gradient(135deg, hsl(180 100% 50% / 0.1), transparent, hsl(280 100% 60% / 0.1))"
                    }}
                  />
                  
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-medium text-white flex items-center gap-2">
                        <Target className="w-4 h-4" style={{ color: "hsl(180 100% 50%)" }} />
                        Implementation Progress
                      </span>
                      <span 
                        className="text-2xl font-bold"
                        style={{ 
                          background: "linear-gradient(135deg, hsl(180 100% 50%), hsl(280 100% 60%))",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text"
                        }}
                      >
                        {overallProgress}%
                      </span>
                    </div>
                    
                    {/* Animated Progress Bar */}
                    <div className="relative h-3 bg-white/10 rounded-full overflow-hidden mb-6">
                      <motion.div 
                        className="absolute inset-y-0 left-0 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${overallProgress}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        style={{
                          background: "linear-gradient(90deg, hsl(180 100% 50%), hsl(280 100% 60%))",
                          boxShadow: "0 0 20px hsl(180 100% 50% / 0.5)"
                        }}
                      />
                    </div>
                    
                    {/* Step Indicators */}
                    <div className="grid grid-cols-5 gap-2">
                      {implementationSteps.map((step, i) => (
                        <motion.div 
                          key={i} 
                          className="text-center"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                        >
                          <div 
                            className="w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-1 transition-all"
                            style={{
                              background: step.done 
                                ? "linear-gradient(135deg, hsl(140 100% 50% / 0.3), hsl(140 100% 50% / 0.1))"
                                : step.progress > 0 
                                  ? "linear-gradient(135deg, hsl(180 100% 50% / 0.3), hsl(180 100% 50% / 0.1))"
                                  : "rgba(255,255,255,0.05)",
                              border: `1px solid ${step.done ? 'hsl(140 100% 50% / 0.5)' : step.progress > 0 ? 'hsl(180 100% 50% / 0.5)' : 'rgba(255,255,255,0.1)'}`,
                              color: step.done ? 'hsl(140 100% 50%)' : step.progress > 0 ? 'hsl(180 100% 50%)' : 'hsl(225 25% 50%)',
                              boxShadow: step.done || step.progress > 0 ? `0 0 10px ${step.done ? 'hsl(140 100% 50% / 0.3)' : 'hsl(180 100% 50% / 0.3)'}` : 'none'
                            }}
                          >
                            {step.done ? <CheckCircle className="w-4 h-4" /> : <span className="text-xs font-medium">{i + 1}</span>}
                          </div>
                          <span className="text-xs" style={{ color: "hsl(225 25% 60%)" }}>{step.label}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Tech Stack Section */}
          <section className="py-12 border-y relative overflow-hidden" style={{ borderColor: "hsl(180 100% 50% / 0.1)" }}>
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                background: "linear-gradient(90deg, transparent, hsl(180 100% 50% / 0.05), transparent)"
              }}
            />
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mb-8"
              >
                <span 
                  className="text-xs uppercase tracking-widest font-semibold"
                  style={{ color: "hsl(180 100% 50% / 0.7)" }}
                >
                  Tech Stack
                </span>
              </motion.div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {techStack.map((tech, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="glass-card p-4 rounded-xl text-center group cursor-default"
                  >
                    <div 
                      className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-3 transition-all group-hover:shadow-lg"
                      style={{
                        background: "linear-gradient(135deg, hsl(180 100% 50% / 0.2), hsl(280 100% 60% / 0.1))",
                        boxShadow: "0 0 0 1px hsl(180 100% 50% / 0.2)"
                      }}
                    >
                      <tech.icon className="w-6 h-6" style={{ color: "hsl(180 100% 50%)" }} />
                    </div>
                    <h4 className="font-semibold text-white text-sm">{tech.name}</h4>
                    <p className="text-xs mt-1" style={{ color: "hsl(225 25% 55%)" }}>{tech.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Color Palette Section */}
          <section className="py-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 
                  className="text-2xl font-bold mb-2 flex items-center gap-3"
                  style={{ 
                    background: "linear-gradient(135deg, hsl(180 100% 50%), hsl(280 100% 60%))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}
                >
                  <Palette className="w-6 h-6" style={{ color: "hsl(180 100% 50%)" }} />
                  Luna Color Palette
                </h2>
                <p style={{ color: "hsl(225 25% 60%)" }}>Custom 16-color VGA palette for the XP aesthetic</p>
              </motion.div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {colorPalette.map((color, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="group"
                  >
                    <div 
                      className="h-24 rounded-xl mb-3 transition-all duration-300 group-hover:shadow-lg relative overflow-hidden"
                      style={{ 
                        backgroundColor: color.hex,
                        boxShadow: `0 0 0 1px ${color.hex}40, 0 4px 20px ${color.hex}30`
                      }}
                    >
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                        style={{ background: "rgba(0,0,0,0.3)" }}
                      >
                        <span className="text-white font-mono text-xs font-bold">{color.hex}</span>
                      </div>
                    </div>
                    <div className="text-sm font-medium text-white">{color.name}</div>
                    <div className="text-xs font-mono" style={{ color: "hsl(225 25% 50%)" }}>{color.hex}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Critical Note - Glowing Alert */}
          <section className="py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl relative overflow-hidden"
                style={{
                  borderLeft: "4px solid hsl(50 100% 50%)",
                  background: "linear-gradient(90deg, hsl(50 100% 50% / 0.1), transparent)"
                }}
              >
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: "radial-gradient(circle at left, hsl(50 100% 50% / 0.3), transparent 70%)"
                  }}
                />
                
                <div className="relative p-6 flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: "linear-gradient(135deg, hsl(50 100% 50% / 0.2), hsl(50 100% 50% / 0.05))",
                      boxShadow: "0 0 20px hsl(50 100% 50% / 0.3)"
                    }}
                  >
                    <AlertCircle className="w-6 h-6" style={{ color: "hsl(50 100% 50%)" }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: "hsl(50 100% 50%)" }}>
                      Technical Constraint
                    </h3>
                    <p className="leading-relaxed" style={{ color: "hsl(225 25% 70%)" }}>
                      We're using <span 
                        className="font-mono text-sm px-1.5 py-0.5 rounded"
                        style={{ background: "hsl(225 25% 15%)", color: "hsl(180 100% 50%)" }}
                      >VGA Mode 12h (640×480)</span> which 
                      supports only 16 simultaneous colors. The hardware palette is modified to use XP-specific colors 
                      (Luna Blue, Start Green, etc.) instead of standard CGA/EGA colors — achieving a much closer visual match.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Challenges & Solutions */}
          <section className="py-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-2xl font-bold mb-8 text-white flex items-center gap-3"
              >
                <Flame className="w-6 h-6" style={{ color: "hsl(320 100% 60%)" }} />
                Challenges & Solutions
              </motion.h2>

              <div className="grid md:grid-cols-3 gap-6">
                {challenges.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card p-6 rounded-2xl relative overflow-hidden group hover:scale-[1.02] transition-transform"
                  >
                    {/* Glow on hover */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        background: "radial-gradient(circle at center, hsl(180 100% 50% / 0.1), transparent 70%)"
                      }}
                    />
                    
                    <div className="relative">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                        style={{
                          background: "linear-gradient(135deg, hsl(320 100% 60% / 0.2), hsl(280 100% 60% / 0.1))",
                          border: "1px solid hsl(320 100% 60% / 0.3)"
                        }}
                      >
                        <item.icon className="w-5 h-5" style={{ color: "hsl(320 100% 60%)" }} />
                      </div>
                      
                      <h3 className="font-semibold text-white mb-2">{item.challenge}</h3>
                      
                      <div className="flex items-center gap-2 mb-2">
                        <ArrowRight className="w-4 h-4" style={{ color: "hsl(180 100% 50%)" }} />
                        <span className="text-xs uppercase tracking-wider" style={{ color: "hsl(180 100% 50%)" }}>Solution</span>
                      </div>
                      
                      <p className="text-sm" style={{ color: "hsl(225 25% 65%)" }}>{item.solution}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Implementation Details */}
          <section className="py-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-10 text-white flex items-center gap-3"
              >
                <Sparkles className="w-8 h-8" style={{ color: "hsl(280 100% 60%)" }} />
                Implementation Details
              </motion.h2>

              <div className="grid gap-6">
                {/* Graphics Subsystem */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 rounded-2xl glass-card-hover relative overflow-hidden"
                >
                  <div 
                    className="absolute top-0 right-0 w-64 h-64 opacity-10"
                    style={{
                      background: "radial-gradient(circle, hsl(180 100% 50%), transparent 70%)"
                    }}
                  />
                  
                  <div className="flex items-start gap-4 relative">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                      style={{
                        background: "linear-gradient(135deg, hsl(180 100% 50%), hsl(200 100% 50%))",
                        boxShadow: "0 0 30px hsl(180 100% 50% / 0.3)"
                      }}
                    >
                      <Monitor className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-semibold text-white">Graphics Subsystem</h3>
                        <code 
                          className="text-xs px-2 py-1 rounded font-mono"
                          style={{ background: "hsl(225 25% 15%)", color: "hsl(180 100% 50%)" }}
                        >vga_graphics.c</code>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex gap-3">
                          <ArrowRight className="w-4 h-4 mt-1 shrink-0" style={{ color: "hsl(180 100% 50%)" }} />
                          <div>
                            <strong className="text-white">Palette Initialization:</strong>
                            <span className="ml-1" style={{ color: "hsl(225 25% 60%)" }}>Redefine 16-color palette to match Luna scheme</span>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <ArrowRight className="w-4 h-4 mt-1 shrink-0" style={{ color: "hsl(180 100% 50%)" }} />
                          <div>
                            <strong className="text-white">Graphics Primitives:</strong>
                            <span className="ml-1" style={{ color: "hsl(225 25% 60%)" }}>
                              Update <code style={{ background: "hsl(225 25% 15%)", color: "hsl(280 100% 60%)" }} className="text-xs px-1 rounded">vga_fill_rect</code> and 
                              <code style={{ background: "hsl(225 25% 15%)", color: "hsl(280 100% 60%)" }} className="text-xs px-1 rounded ml-1">vga_draw_string</code> for new indices
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Kernel Main */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="glass-card p-6 rounded-2xl glass-card-hover relative overflow-hidden"
                >
                  <div 
                    className="absolute top-0 right-0 w-64 h-64 opacity-10"
                    style={{
                      background: "radial-gradient(circle, hsl(280 100% 60%), transparent 70%)"
                    }}
                  />
                  
                  <div className="flex items-start gap-4 relative">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                      style={{
                        background: "linear-gradient(135deg, hsl(280 100% 60%), hsl(320 100% 60%))",
                        boxShadow: "0 0 30px hsl(280 100% 60% / 0.3)"
                      }}
                    >
                      <Cpu className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-semibold text-white">Kernel Main</h3>
                        <code 
                          className="text-xs px-2 py-1 rounded font-mono"
                          style={{ background: "hsl(225 25% 15%)", color: "hsl(280 100% 60%)" }}
                        >main.c</code>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex gap-3">
                          <ArrowRight className="w-4 h-4 mt-1 shrink-0" style={{ color: "hsl(280 100% 60%)" }} />
                          <div>
                            <strong className="text-white">Startup Animation:</strong>
                            <span className="ml-1" style={{ color: "hsl(225 25% 60%)" }}>Black screen → XP-style logo → animated progress bar</span>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <ArrowRight className="w-4 h-4 mt-1 shrink-0" style={{ color: "hsl(280 100% 60%)" }} />
                          <div>
                            <strong className="text-white">Desktop UI:</strong>
                            <span className="ml-1" style={{ color: "hsl(225 25% 60%)" }}>Bliss blue background, taskbar, green Start button, XP window styling</span>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <ArrowRight className="w-4 h-4 mt-1 shrink-0" style={{ color: "hsl(280 100% 60%)" }} />
                          <div>
                            <strong className="text-white">Input Integration:</strong>
                            <span className="ml-1" style={{ color: "hsl(225 25% 60%)" }}>Taskbar clicks, Start menu toggle, Windows key support</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* VM Compatibility */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="glass-card p-6 rounded-2xl glass-card-hover relative overflow-hidden"
                  style={{
                    border: "1px solid hsl(180 100% 50% / 0.2)",
                    background: "linear-gradient(135deg, hsl(180 100% 50% / 0.05), transparent)"
                  }}
                >
                  <div 
                    className="absolute top-0 right-0 w-96 h-96 opacity-10"
                    style={{
                      background: "radial-gradient(circle, hsl(180 100% 50%), transparent 70%)"
                    }}
                  />
                  
                  <div className="flex items-start gap-4 relative">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                      style={{
                        background: "linear-gradient(135deg, hsl(180 100% 50%), hsl(200 100% 60%))",
                        boxShadow: "0 0 30px hsl(180 100% 50% / 0.3)"
                      }}
                    >
                      <MousePointer className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-semibold text-white">VM Compatibility</h3>
                        <Badge 
                          variant="outline" 
                          className="text-xs"
                          style={{ borderColor: "hsl(180 100% 50% / 0.4)", color: "hsl(180 100% 50%)" }}
                        >
                          VMware & VirtualBox
                        </Badge>
                      </div>
                      <p className="text-sm mb-4" style={{ color: "hsl(225 25% 60%)" }}>
                        Mouse synchronization via VMware Backdoor for absolute positioning
                      </p>
                      <div className="grid sm:grid-cols-3 gap-4">
                        {[
                          { title: "1. Detection", desc: "CPUID / Magic Port (0x5658)" },
                          { title: "2. Graphics", desc: "Mode 12h on SVGA II adapters" },
                          { title: "3. Mouse", desc: "Absolute pointing driver" },
                        ].map((sub, j) => (
                          <div 
                            key={j}
                            className="p-4 rounded-xl"
                            style={{ background: "hsl(225 25% 10% / 0.5)" }}
                          >
                            <h4 className="font-medium mb-1 text-sm text-white">{sub.title}</h4>
                            <p className="text-xs" style={{ color: "hsl(225 25% 50%)" }}>{sub.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* VESA VBE Section */}
          <section className="py-16 relative overflow-hidden">
            <div 
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, hsl(280 100% 60% / 0.05), transparent, hsl(180 100% 50% / 0.05))"
              }}
            />
            
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl relative overflow-hidden"
              >
                <div 
                  className="absolute -top-20 -right-20 w-64 h-64 opacity-30"
                  style={{
                    background: "radial-gradient(circle, hsl(280 100% 60%), transparent 70%)"
                  }}
                />
                
                <div className="flex items-center gap-3 mb-6 relative">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, hsl(280 100% 60%), hsl(320 100% 60%))",
                      boxShadow: "0 0 20px hsl(280 100% 60% / 0.4)"
                    }}
                  >
                    <Layers className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Future: High Color (VESA VBE)</h2>
                    <p className="text-sm" style={{ color: "hsl(225 25% 55%)" }}>32-bit True Color via Linear Framebuffer</p>
                  </div>
                </div>
                
                <p className="mb-8 relative" style={{ color: "hsl(225 25% 65%)" }}>
                  To achieve "Full Color" rendering and fix VMware artifacts, we'll transition from 
                  planar VGA to a Linear Framebuffer provided by VESA BIOS Extensions.
                </p>

                <div className="grid md:grid-cols-3 gap-6 relative">
                  {[
                    { title: "Bootloader Updates", desc: "Request graphics mode in Multiboot Header, pass info to kernel" },
                    { title: "Graphics Overhaul", desc: "Dynamic framebuffer pointer, 32-bit direct RGB pixel writes" },
                    { title: "Kernel Integration", desc: "Parse multiboot struct for address, pitch, dimensions" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="p-5 rounded-xl transition-all hover:scale-[1.02]"
                      style={{
                        background: "hsl(225 25% 12% / 0.8)",
                        border: "1px solid hsl(280 100% 60% / 0.2)"
                      }}
                    >
                      <div 
                        className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                        style={{
                          background: "linear-gradient(135deg, hsl(280 100% 60% / 0.2), hsl(280 100% 60% / 0.05))",
                          border: "1px solid hsl(280 100% 60% / 0.3)"
                        }}
                      >
                        <span 
                          className="font-bold"
                          style={{ color: "hsl(280 100% 60%)" }}
                        >{i + 1}</span>
                      </div>
                      <h4 className="font-semibold mb-2 text-white">{item.title}</h4>
                      <p className="text-sm" style={{ color: "hsl(225 25% 55%)" }}>{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Verification Plan */}
          <section className="py-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-2xl font-bold mb-8 text-white flex items-center gap-3"
              >
                <CheckCircle className="w-7 h-7" style={{ color: "hsl(140 100% 50%)" }} />
                Verification Checklist
              </motion.h2>
              
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { title: "Startup", desc: "Animated progress bar and logo on boot" },
                  { title: "Desktop", desc: "Correct XP colors (not standard 16-color VGA)" },
                  { title: "Input", desc: "Start button toggle, smooth cursor, keyboard nav" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-5 rounded-xl"
                    style={{
                      background: "linear-gradient(135deg, hsl(140 100% 50% / 0.1), hsl(140 100% 50% / 0.02))",
                      border: "1px solid hsl(140 100% 50% / 0.2)"
                    }}
                  >
                    <CheckCircle className="w-6 h-6 shrink-0" style={{ color: "hsl(140 100% 50%)" }} />
                    <div>
                      <h4 className="font-semibold mb-1 text-white">{item.title}</h4>
                      <p className="text-sm" style={{ color: "hsl(225 25% 60%)" }}>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Gaming CTA Section */}
          <section className="py-20 relative overflow-hidden">
            {/* Background Grid */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0, 255, 255, 0.2) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 255, 255, 0.2) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }}
            />
            
            {/* Glow Effects */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-30"
              style={{
                background: "radial-gradient(ellipse, hsl(180 100% 50% / 0.3), transparent 70%)"
              }}
            />
            
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Icon */}
                <div 
                  className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background: "linear-gradient(135deg, hsl(180 100% 50%), hsl(280 100% 60%))",
                    boxShadow: "0 0 40px hsl(180 100% 50% / 0.4)"
                  }}
                >
                  <Rocket className="w-10 h-10 text-white" />
                </div>
                
                <h2 
                  className="text-3xl sm:text-4xl font-bold mb-4"
                  style={{
                    background: "linear-gradient(135deg, #fff, hsl(180 100% 70%))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}
                >
                  Have feedback on this plan?
                </h2>
                
                <p className="mb-8 max-w-xl mx-auto" style={{ color: "hsl(225 25% 65%)" }}>
                  Join the discussion on GitHub and help shape the Windows XP theme implementation.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    asChild 
                    size="lg" 
                    className="gap-2 btn-neon text-black font-semibold"
                  >
                    <a
                      href="https://github.com/urmoit/GamerOS/issues"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View on GitHub
                    </a>
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

export default XPImplementation;
