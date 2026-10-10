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
      <div className="min-h-screen flex flex-col bg-muted" >
        <Header />

        <main className="flex-1">
          {/* Animated Hero Section */}
          <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
              {/* Grid Pattern */}
              <div 
                className="absolute inset-0 opacity-20 hidden"
                
              />
              
              {/* Glowing Orbs */}
              <div 
                className="absolute top-20 left-10 w-96 h-96 rounded-full hidden  bg-muted"
                
              />
              <div 
                className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full hidden  bg-muted"
                style={{ animationDelay: "1s" }}
              />
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full hidden hidden"
                
              />
            </div>

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Back Link */}
              <Link
                to="/news"
                className="inline-flex items-center gap-2 mb-8 transition-all group text-primary"
                
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
                    className="px-4 py-1.5 text-sm font-medium border-0 bg-muted text-muted-foreground"
                    
                  >
                    <Palette className="w-3.5 h-3.5 mr-2" />
                    UI Overhaul
                  </Badge>
                  <Badge 
                    variant="outline" 
                    className="px-3 py-1 border border border-border bg-muted text-primary"
                    
                  >
                    <Zap className="w-3.5 h-3.5 mr-1" />
                    In Progress
                  </Badge>
                  <span 
                    className="text-sm flex items-center gap-1.5 text-muted-foreground"
                    
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    January 28, 2026
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl lg:text-4xl font-bold mb-6 leading-tight text-foreground">
                  Windows XP Theme
                  <span 
                    className="block text-2xl sm:text-3xl lg:text-4xl mt-2 text-foreground"
                    
                  >
                    Implementation Plan
                  </span>
                </h1>

                <p 
                  className="text-xl max-w-3xl mb-10 text-muted-foreground"
                  
                >
                  Transforming GamerOS with the iconic Luna theme — complete with startup animation, 
                  taskbar, and the classic Bliss-inspired desktop environment.
                </p>

                {/* Progress Overview Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="glass-card p-6 rounded-lg max-w-2xl relative overflow-hidden"
                >
                  {/* Glow Effect */}
                  <div 
                    className="absolute inset-0 opacity-30 bg-muted"
                    
                  />
                  
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-medium text-foreground flex items-center gap-2">
                        <Target className="w-4 h-4 text-primary"  />
                        Implementation Progress
                      </span>
                      <span 
                        className="text-2xl font-bold text-foreground"
                        
                      >
                        {overallProgress}%
                      </span>
                    </div>
                    
                    {/* Animated Progress Bar */}
                    <div className="relative h-3 bg-muted rounded-full overflow-hidden mb-6">
                      <motion.div 
                        className="absolute inset-y-0 left-0 rounded-full bg-muted"
                        initial={{ width: 0 }}
                        animate={{ width: `${overallProgress}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        
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
                            className="w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-1 transition-all bg-muted border border-border text-muted-foreground"
                            
                          >
                            {step.done ? <CheckCircle className="w-4 h-4" /> : <span className="text-xs font-medium">{i + 1}</span>}
                          </div>
                          <span className="text-xs text-muted-foreground" >{step.label}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Tech Stack Section */}
          <section className="py-12 border-y relative overflow-hidden border border-border" >
            <div 
              className="absolute inset-0 opacity-30 bg-muted"
              
            />
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mb-8"
              >
                <span 
                  className="text-xs uppercase tracking-normal font-semibold text-primary"
                  
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
                    className="glass-card p-4 rounded-lg text-center group cursor-default"
                  >
                    <div 
                      className="w-12 h-12 mx-auto rounded-lg flex items-center justify-center mb-3 transition-all group-hover:shadow-lg bg-muted"
                      
                    >
                      <tech.icon className="w-6 h-6 text-primary"  />
                    </div>
                    <h4 className="font-semibold text-foreground text-sm">{tech.name}</h4>
                    <p className="text-xs mt-1 text-muted-foreground" >{tech.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Color Palette Section */}
          <section className="py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 
                  className="text-2xl font-bold mb-2 flex items-center gap-3 text-foreground"
                  
                >
                  <Palette className="w-6 h-6 text-primary"  />
                  Luna Color Palette
                </h2>
                <p  className="text-muted-foreground">Custom 16-color VGA palette for the XP aesthetic</p>
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
                      className="h-24 rounded-lg mb-3 transition-all duration-300 group-hover:shadow-lg relative overflow-hidden bg-muted"
                      
                    >
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center bg-muted"
                        
                      >
                        <span className="text-foreground font-mono text-xs font-bold">{color.hex}</span>
                      </div>
                    </div>
                    <div className="text-sm font-medium text-foreground">{color.name}</div>
                    <div className="text-xs font-mono text-muted-foreground" >{color.hex}</div>
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
                className="glass-card rounded-lg relative overflow-hidden border-l-4 border-warning bg-muted"
                
              >
                <div 
                  className="absolute inset-0 opacity-20 hidden"
                  
                />
                
                <div className="relative p-6 flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 bg-muted"
                    
                  >
                    <AlertCircle className="w-6 h-6 text-warning"  />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-warning" >
                      Technical Constraint
                    </h3>
                    <p className="leading-relaxed text-muted-foreground" >
                      We're using <span 
                        className="font-mono text-sm px-1.5 py-0.5 rounded bg-muted text-primary"
                        
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
          <section className="py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-2xl font-bold mb-8 text-foreground flex items-center gap-3"
              >
                <Flame className="w-6 h-6 text-primary"  />
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
                    className="glass-card p-6 rounded-lg relative overflow-hidden group hover:scale-[1.02] transition-transform"
                  >
                    {/* Glow on hover */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity hidden"
                      
                    />
                    
                    <div className="relative">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-muted border border-border"
                        
                      >
                        <item.icon className="w-5 h-5 text-primary"  />
                      </div>
                      
                      <h3 className="font-semibold text-foreground mb-2">{item.challenge}</h3>
                      
                      <div className="flex items-center gap-2 mb-2">
                        <ArrowRight className="w-4 h-4 text-primary"  />
                        <span className="text-xs uppercase tracking-normal text-primary" >Solution</span>
                      </div>
                      
                      <p className="text-sm text-muted-foreground" >{item.solution}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Implementation Details */}
          <section className="py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-10 text-foreground flex items-center gap-3"
              >
                <Sparkles className="w-8 h-8 text-primary"  />
                Implementation Details
              </motion.h2>

              <div className="grid gap-6">
                {/* Graphics Subsystem */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 rounded-lg glass-card-hover relative overflow-hidden"
                >
                  <div 
                    className="absolute top-0 right-0 w-64 h-64 opacity-10 hidden"
                    
                  />
                  
                  <div className="flex items-start gap-4 relative">
                    <div 
                      className="w-14 h-14 rounded-lg flex items-center justify-center shrink-0 bg-muted"
                      
                    >
                      <Monitor className="w-7 h-7 text-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-semibold text-foreground">Graphics Subsystem</h3>
                        <code 
                          className="text-xs px-2 py-1 rounded font-mono bg-muted text-primary"
                          
                        >vga_graphics.c</code>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex gap-3">
                          <ArrowRight className="w-4 h-4 mt-1 shrink-0 text-primary"  />
                          <div>
                            <strong className="text-foreground">Palette Initialization:</strong>
                            <span className="ml-1 text-muted-foreground" >Redefine 16-color palette to match Luna scheme</span>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <ArrowRight className="w-4 h-4 mt-1 shrink-0 text-primary"  />
                          <div>
                            <strong className="text-foreground">Graphics Primitives:</strong>
                            <span className="ml-1 text-muted-foreground" >
                              Update <code  className="text-xs px-1 rounded bg-muted text-primary">vga_fill_rect</code> and 
                              <code  className="text-xs px-1 rounded ml-1 bg-muted text-primary">vga_draw_string</code> for new indices
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
                  className="glass-card p-6 rounded-lg glass-card-hover relative overflow-hidden"
                >
                  <div 
                    className="absolute top-0 right-0 w-64 h-64 opacity-10 hidden"
                    
                  />
                  
                  <div className="flex items-start gap-4 relative">
                    <div 
                      className="w-14 h-14 rounded-lg flex items-center justify-center shrink-0 bg-muted"
                      
                    >
                      <Cpu className="w-7 h-7 text-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-semibold text-foreground">Kernel Main</h3>
                        <code 
                          className="text-xs px-2 py-1 rounded font-mono bg-muted text-primary"
                          
                        >main.c</code>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex gap-3">
                          <ArrowRight className="w-4 h-4 mt-1 shrink-0 text-primary"  />
                          <div>
                            <strong className="text-foreground">Startup Animation:</strong>
                            <span className="ml-1 text-muted-foreground" >Black screen → XP-style logo → animated progress bar</span>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <ArrowRight className="w-4 h-4 mt-1 shrink-0 text-primary"  />
                          <div>
                            <strong className="text-foreground">Desktop UI:</strong>
                            <span className="ml-1 text-muted-foreground" >Bliss blue background, taskbar, green Start button, XP window styling</span>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <ArrowRight className="w-4 h-4 mt-1 shrink-0 text-primary"  />
                          <div>
                            <strong className="text-foreground">Input Integration:</strong>
                            <span className="ml-1 text-muted-foreground" >Taskbar clicks, Start menu toggle, Windows key support</span>
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
                  className="glass-card p-6 rounded-lg glass-card-hover relative overflow-hidden border border-border bg-muted"
                  
                >
                  <div 
                    className="absolute top-0 right-0 w-96 h-96 opacity-10 hidden"
                    
                  />
                  
                  <div className="flex items-start gap-4 relative">
                    <div 
                      className="w-14 h-14 rounded-lg flex items-center justify-center shrink-0 bg-muted"
                      
                    >
                      <MousePointer className="w-7 h-7 text-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-semibold text-foreground">VM Compatibility</h3>
                        <Badge 
                          variant="outline" 
                          className="text-xs border border-border text-primary"
                          
                        >
                          VMware & VirtualBox
                        </Badge>
                      </div>
                      <p className="text-sm mb-4 text-muted-foreground" >
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
                            className="p-4 rounded-lg bg-muted"
                            
                          >
                            <h4 className="font-medium mb-1 text-sm text-foreground">{sub.title}</h4>
                            <p className="text-xs text-muted-foreground" >{sub.desc}</p>
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
          <section className="py-12 relative overflow-hidden">
            <div 
              className="absolute inset-0 bg-muted"
              
            />
            
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-5 sm:p-6 rounded-lg relative overflow-hidden"
              >
                <div 
                  className="absolute -top-20 -right-20 w-64 h-64 opacity-30 hidden"
                  
                />
                
                <div className="flex items-center gap-3 mb-6 relative">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center bg-muted"
                    
                  >
                    <Layers className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">Future: High Color (VESA VBE)</h2>
                    <p className="text-sm text-muted-foreground" >32-bit True Color via Linear Framebuffer</p>
                  </div>
                </div>
                
                <p className="mb-8 relative text-muted-foreground" >
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
                      className="p-5 rounded-lg transition-all hover:scale-[1.02] bg-muted border border-border"
                      
                    >
                      <div 
                        className="w-8 h-8 rounded-lg flex items-center justify-center mb-3 bg-muted border border-border"
                        
                      >
                        <span 
                          className="font-bold text-primary"
                          
                        >{i + 1}</span>
                      </div>
                      <h4 className="font-semibold mb-2 text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground" >{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Verification Plan */}
          <section className="py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-2xl font-bold mb-8 text-foreground flex items-center gap-3"
              >
                <CheckCircle className="w-7 h-7 text-success"  />
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
                    className="flex gap-4 p-5 rounded-lg bg-muted border border-border"
                    
                  >
                    <CheckCircle className="w-6 h-6 shrink-0 text-success"  />
                    <div>
                      <h4 className="font-semibold mb-1 text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground" >{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Gaming CTA Section */}
          <section className="py-12 relative overflow-hidden">
            {/* Background Grid */}
            <div 
              className="absolute inset-0 opacity-10 hidden"
              
            />
            
            {/* Glow Effects */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-30 hidden"
              
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
                  className="w-20 h-20 mx-auto rounded-lg flex items-center justify-center mb-6 bg-muted"
                  
                >
                  <Rocket className="w-10 h-10 text-foreground" />
                </div>
                
                <h2 
                  className="text-3xl sm:text-4xl font-bold mb-4 text-foreground"
                  
                >
                  Have feedback on this plan?
                </h2>
                
                <p className="mb-8 max-w-xl mx-auto text-muted-foreground" >
                  Join the discussion on GitHub and help shape the Windows XP theme implementation.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    asChild 
                    size="lg" 
                    className="gap-2 btn-solid text-foreground font-semibold"
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
