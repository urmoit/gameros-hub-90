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
  FileText, 
  AlertCircle, 
  CheckCircle, 
  Palette, 
  Monitor, 
  MousePointer,
  Cpu,
  Layers,
  Zap,
  Code2,
  ArrowRight,
  ExternalLink
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

const XPImplementation = () => {
  const overallProgress = Math.round(
    implementationSteps.reduce((acc, step) => acc + step.progress, 0) / implementationSteps.length
  );

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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

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
                  <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 px-4 py-1.5 text-sm font-medium">
                    <Palette className="w-3.5 h-3.5 mr-2" />
                    UI Overhaul
                  </Badge>
                  <Badge variant="outline" className="border-green-500/30 bg-green-500/10 text-green-400 px-3 py-1">
                    <Zap className="w-3.5 h-3.5 mr-1" />
                    In Progress
                  </Badge>
                  <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    January 28, 2026
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Windows XP Theme
                  <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2 bg-gradient-to-r from-blue-400 via-green-400 to-blue-500 bg-clip-text text-transparent">
                    Implementation Plan
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground max-w-3xl mb-10">
                  Transforming GamerOS with the iconic Luna theme — complete with startup animation, 
                  taskbar, and the classic Bliss-inspired desktop environment.
                </p>

                {/* Progress Overview Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="glass-card p-6 rounded-2xl max-w-2xl"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-medium">Implementation Progress</span>
                    <span className="text-2xl font-bold text-primary">{overallProgress}%</span>
                  </div>
                  <Progress value={overallProgress} className="h-3 mb-4" />
                  <div className="grid grid-cols-5 gap-2">
                    {implementationSteps.map((step, i) => (
                      <div key={i} className="text-center">
                        <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-1 ${
                          step.done ? 'bg-emerald-500/20 text-emerald-400' : 
                          step.progress > 0 ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'
                        }`}>
                          {step.done ? <CheckCircle className="w-4 h-4" /> : <span className="text-xs font-medium">{i + 1}</span>}
                        </div>
                        <span className="text-xs text-muted-foreground">{step.label}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Color Palette Section */}
          <section className="py-16 border-y border-border/50 bg-card/30">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                  <Palette className="w-6 h-6 text-primary" />
                  Luna Color Palette
                </h2>
                <p className="text-muted-foreground">Custom 16-color VGA palette for the XP aesthetic</p>
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
                      className="h-20 rounded-xl shadow-lg mb-3 ring-2 ring-white/10 group-hover:ring-white/30 transition-all"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="text-sm font-medium">{color.name}</div>
                    <div className="text-xs text-muted-foreground font-mono">{color.hex}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Critical Note */}
          <section className="py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card border-l-4 border-l-yellow-500 p-6 bg-yellow-500/5 rounded-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center shrink-0">
                    <AlertCircle className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-500 mb-2">Technical Constraint</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We're using <span className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded">VGA Mode 12h (640×480)</span> which 
                      supports only 16 simultaneous colors. The hardware palette is modified to use XP-specific colors 
                      (Luna Blue, Start Green, etc.) instead of standard CGA/EGA colors — achieving a much closer visual match.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Implementation Details */}
          <section className="py-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-10"
              >
                Implementation Details
              </motion.h2>

              <div className="grid gap-6">
                {/* Graphics Subsystem */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 rounded-2xl hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0">
                      <Monitor className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-semibold">Graphics Subsystem</h3>
                        <code className="text-xs bg-muted px-2 py-1 rounded font-mono">vga_graphics.c</code>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex gap-3">
                          <ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                          <div>
                            <strong className="text-foreground">Palette Initialization:</strong>
                            <span className="text-muted-foreground ml-1">Redefine 16-color palette to match Luna scheme</span>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                          <div>
                            <strong className="text-foreground">Graphics Primitives:</strong>
                            <span className="text-muted-foreground ml-1">Update <code className="text-xs bg-muted px-1 rounded">vga_fill_rect</code> and <code className="text-xs bg-muted px-1 rounded">vga_draw_string</code> for new indices</span>
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
                  className="glass-card p-6 rounded-2xl hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shrink-0">
                      <Cpu className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-semibold">Kernel Main</h3>
                        <code className="text-xs bg-muted px-2 py-1 rounded font-mono">main.c</code>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex gap-3">
                          <ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                          <div>
                            <strong className="text-foreground">Startup Animation:</strong>
                            <span className="text-muted-foreground ml-1">Black screen → XP-style logo → animated progress bar</span>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                          <div>
                            <strong className="text-foreground">Desktop UI:</strong>
                            <span className="text-muted-foreground ml-1">Bliss blue background, taskbar, green Start button, XP window styling</span>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                          <div>
                            <strong className="text-foreground">Input Integration:</strong>
                            <span className="text-muted-foreground ml-1">Taskbar clicks, Start menu toggle, Windows key support</span>
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
                  className="glass-card p-6 rounded-2xl border-2 border-blue-500/20 bg-blue-500/5 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shrink-0">
                      <MousePointer className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-semibold">VM Compatibility</h3>
                        <Badge variant="outline" className="border-blue-500/30 text-blue-400 text-xs">VMware & VirtualBox</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Mouse synchronization via VMware Backdoor for absolute positioning
                      </p>
                      <div className="grid sm:grid-cols-3 gap-4">
                        <div className="p-4 rounded-xl bg-background/50">
                          <h4 className="font-medium mb-1 text-sm">1. Detection</h4>
                          <p className="text-xs text-muted-foreground">CPUID / Magic Port (0x5658)</p>
                        </div>
                        <div className="p-4 rounded-xl bg-background/50">
                          <h4 className="font-medium mb-1 text-sm">2. Graphics</h4>
                          <p className="text-xs text-muted-foreground">Mode 12h on SVGA II adapters</p>
                        </div>
                        <div className="p-4 rounded-xl bg-background/50">
                          <h4 className="font-medium mb-1 text-sm">3. Mouse</h4>
                          <p className="text-xs text-muted-foreground">Absolute pointing driver</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* VESA VBE Section */}
          <section className="py-16 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center">
                    <Layers className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Future: High Color (VESA VBE)</h2>
                    <p className="text-sm text-muted-foreground">32-bit True Color via Linear Framebuffer</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-8">
                  To achieve "Full Color" rendering and fix VMware artifacts, we'll transition from 
                  planar VGA to a Linear Framebuffer provided by VESA BIOS Extensions.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
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
                      className="p-5 rounded-xl bg-muted/50 border border-border/50 hover:border-primary/30 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                        <span className="text-primary font-bold">{i + 1}</span>
                      </div>
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
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
                className="text-2xl font-bold mb-8"
              >
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
                    className="flex gap-4 p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20"
                  >
                    <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 border-t border-border/50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4">Have feedback on this plan?</h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Join the discussion on GitHub and help shape the Windows XP theme implementation.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="gap-2">
                    <a
                      href="https://github.com/urmoit/GamerOS/issues"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View on GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/roadmap">View Full Roadmap</Link>
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
