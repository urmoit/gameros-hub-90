import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/ui/PageTransition";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Target, 
  Zap, 
  Code2, 
  Users,
  Check,
  Clock,
  Circle,
  Monitor,
  Wifi,
  Shield,
  Gamepad2,
  Cpu,
  ChevronDown,
  ChevronUp,
  Rocket,
  Sparkles,
  Calendar,
  Flag,
  ArrowRight,
  Layers,
  Bug,
  ArrowLeft,
  Crosshair,
  Trophy,
  Terminal
} from "lucide-react";

type PhaseStatus = "completed" | "in-progress" | "planned";
type FilterType = "All" | "completed" | "in-progress" | "planned";

const visionCards = [
  { icon: Target, title: "Focused Development", description: "Prioritizing core functionality before expanding features", color: "from-[hsl(180_100%_50%)] to-[hsl(180_80%_40%)]" },
  { icon: Zap, title: "Performance First", description: "Optimizing for speed and efficiency at every level", color: "from-[hsl(320_100%_60%)] to-[hsl(320_80%_50%)]" },
  { icon: Code2, title: "Developer Friendly", description: "Creating intuitive APIs and documentation", color: "from-[hsl(280_100%_60%)] to-[hsl(280_80%_50%)]" },
  { icon: Users, title: "User Experience", description: "Designing with the end user always in mind", color: "from-[hsl(180_100%_50%)] to-[hsl(280_100%_60%)]" },
];

const phases = [
  {
    phase: "Phase 1",
    title: "Foundation & Build System",
    status: "completed" as PhaseStatus,
    progress: 100,
    description: "Establishing the core bootloader, kernel, and development environment.",
    eta: "Q1 2026",
    features: [
      { name: "GRUB Multiboot2 bootloader", done: true },
      { name: "Basic kernel (ELF64)", done: true },
      { name: "Memory management (16-byte aligned)", done: true },
      { name: "VGA graphics pipeline", done: true },
      { name: "Build system (Docker cross-compilation)", done: true },
      { name: "QEMU testing environment", done: true },
    ],
  },
  {
    phase: "Phase 2",
    title: "Core Systems",
    status: "planned" as PhaseStatus,
    progress: 0,
    description: "Building essential OS services including process management and file systems.",
    eta: "Q2 2026",
    features: [
      { name: "Process scheduler", done: false },
      { name: "Virtual file system", done: false },
      { name: "Device driver framework", done: false },
      { name: "System calls API", done: false },
      { name: "Interrupt handling", done: false },
      { name: "Timer management", done: false },
    ],
  },
  {
    phase: "Phase 3",
    title: "User Interface",
    status: "planned" as PhaseStatus,
    progress: 0,
    description: "Creating a beautiful Fluent Design-inspired desktop environment.",
    eta: "Q3 2026",
    features: [
      { name: "Fluent Design shell", done: false },
      { name: "Window manager", done: false },
      { name: "Desktop compositor", done: false },
      { name: "Settings application", done: false },
      { name: "Widget system", done: false },
      { name: "Theme engine", done: false },
    ],
  },
  {
    phase: "Phase 4",
    title: "Compatibility Layers",
    status: "planned" as PhaseStatus,
    progress: 0,
    description: "Enabling support for Windows, Linux, and Android applications.",
    eta: "Q4 2026",
    features: [
      { name: "Windows PE loader", done: false },
      { name: "Win32 API subset", done: false },
      { name: "Linux ELF support", done: false },
      { name: "POSIX syscalls", done: false },
      { name: "Android runtime (ART)", done: false },
      { name: "APK installer", done: false },
    ],
  },
  {
    phase: "Phase 5",
    title: "Hardware & Networking",
    status: "planned" as PhaseStatus,
    progress: 0,
    description: "Adding comprehensive hardware support and network connectivity.",
    eta: "Q1 2027",
    features: [
      { name: "TCP/IP stack", done: false },
      { name: "Ethernet drivers", done: false },
      { name: "WiFi support", done: false },
      { name: "USB 3.0 drivers", done: false },
      { name: "Storage drivers", done: false },
      { name: "GPU acceleration", done: false },
    ],
  },
  {
    phase: "Phase 6",
    title: "Gaming & Multimedia",
    status: "planned" as PhaseStatus,
    progress: 0,
    description: "Optimizing for gaming with graphics APIs and low-latency audio.",
    eta: "Q2 2027",
    features: [
      { name: "DirectX translation", done: false },
      { name: "Vulkan support", done: false },
      { name: "Audio subsystem", done: false },
      { name: "Controller support", done: false },
      { name: "Game mode", done: false },
      { name: "Low-latency audio", done: false },
    ],
  },
  {
    phase: "Phase 7",
    title: "Polish & Release",
    status: "planned" as PhaseStatus,
    progress: 0,
    description: "Final preparations for public release with enterprise features.",
    eta: "Q3 2027",
    features: [
      { name: "App store", done: false },
      { name: "Cloud sync", done: false },
      { name: "Multi-user accounts", done: false },
      { name: "Installation wizard", done: false },
      { name: "Secure boot", done: false },
      { name: "OTA updates", done: false },
    ],
  },
];

const featureRoadmap = [
  { icon: Monitor, category: "Graphics", color: "from-[hsl(180_100%_50%)] to-[hsl(180_80%_40%)]", items: ["VGA text mode", "Framebuffer graphics", "Hardware acceleration", "Multi-monitor", "HDR support"] },
  { icon: Wifi, category: "Connectivity", color: "from-[hsl(280_100%_60%)] to-[hsl(280_80%_50%)]", items: ["Ethernet drivers", "WiFi chipset support", "Bluetooth stack", "USB 3.2 support", "NVMe drivers"] },
  { icon: Shield, category: "Security", color: "from-[hsl(320_100%_60%)] to-[hsl(320_80%_50%)]", items: ["Secure boot chain", "App sandboxing", "Disk encryption", "Memory protection", "Firewall"] },
  { icon: Gamepad2, category: "Gaming", color: "from-[hsl(180_100%_50%)] to-[hsl(280_100%_60%)]", items: ["Game mode", "Controller support", "Low latency audio", "DirectX translation", "Proton-like layer"] },
  { icon: Cpu, category: "Core Systems", color: "from-[hsl(280_100%_60%)] to-[hsl(320_100%_60%)]", items: ["SMP support", "NUMA awareness", "Power management", "ACPI support", "Real-time scheduling"] },
];

const milestones = [
  { date: "Jan 2026", title: "Project Start", description: "Initial commit and build system setup", completed: true },
  { date: "Feb 2026", title: "XP Transformation", description: "VESA 32-bit graphics, Luna desktop, interactive apps", completed: true },
  { date: "Feb 2026", title: "Bug Fix Pass", description: "33 fixes applied, 20/25 bugs resolved, VMware hardening", completed: true },
  { date: "Feb 2026", title: "Alpha Release", description: "First public preview with stable kernel", completed: false, isNext: true, link: "/news/bug-fix-pass" },
  { date: "Q2 2026", title: "Beta Release", description: "App compatibility layers", completed: false },
  { date: "Q4 2026", title: "v1.0 Release", description: "Stable public release", completed: false },
];

const Roadmap = () => {
  const [expandedPhases, setExpandedPhases] = useState<Set<number>>(new Set([0]));
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const togglePhase = (index: number) => {
    const newExpanded = new Set(expandedPhases);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedPhases(newExpanded);
  };

  const filteredPhases = phases.filter(phase => 
    activeFilter === "All" || phase.status === activeFilter
  );

  const getStatusIcon = (status: PhaseStatus) => {
    switch (status) {
      case "completed": return <Check className="w-4 h-4" />;
      case "in-progress": return <Clock className="w-4 h-4" />;
      default: return <Circle className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: PhaseStatus) => {
    switch (status) {
      case "completed": return "bg-[hsl(180_100%_50%)]/10 text-[hsl(180_100%_50%)] border-[hsl(180_100%_50%)]/30 shadow-[0_0_10px_hsl(180_100%_50%/20%)]";
      case "in-progress": return "bg-[hsl(320_100%_60%)]/10 text-[hsl(320_100%_60%)] border-[hsl(320_100%_60%)]/30 shadow-[0_0_10px_hsl(320_100%_60%/20%)]";
      default: return "bg-[hsl(280_100%_60%)]/10 text-[hsl(280_100%_60%)] border-[hsl(280_100%_60%)]/30";
    }
  };

  const getStatusGlow = (status: PhaseStatus) => {
    switch (status) {
      case "completed": return "shadow-[0_0_20px_hsl(180_100%_50%/30%)]";
      case "in-progress": return "shadow-[0_0_20px_hsl(320_100%_60%/30%)]";
      default: return "shadow-[0_0_20px_hsl(280_100%_60%/20%)]";
    }
  };

  const totalProgress = Math.round(phases.reduce((acc, p) => acc + p.progress, 0) / phases.length);
  const completedFeatures = phases.reduce((acc, p) => acc + p.features.filter(f => f.done).length, 0);
  const totalFeatures = phases.reduce((acc, p) => acc + p.features.length, 0);

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-[hsl(225_25%_6%)]">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Gaming Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(180_100%_50%)]/5 via-transparent to-[hsl(280_100%_60%)]/5" />
            <div className="absolute top-20 left-10 w-72 h-72 bg-[hsl(180_100%_50%)]/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-[hsl(280_100%_60%)]/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[hsl(320_100%_60%)]/5 rounded-full blur-3xl" />
            
            {/* Grid Pattern */}
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(hsl(180_100%_50%) 1px, transparent 1px), linear-gradient(90deg, hsl(180_100%_50%) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
              }}
            />
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <Badge variant="outline" className="mb-6 px-4 py-2 text-sm border-[hsl(180_100%_50%)]/30 bg-[hsl(180_100%_50%)]/5 text-[hsl(180_100%_50%)] shadow-[0_0_15px_hsl(180_100%_50%/20%)]">
                  <Crosshair className="w-4 h-4 mr-2" />
                  Development Roadmap
                </Badge>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
                  Building the{" "}
                  <span className="bg-gradient-to-r from-[hsl(180_100%_50%)] via-[hsl(280_100%_60%)] to-[hsl(320_100%_60%)] bg-clip-text text-transparent">
                    Future
                  </span>
                </h1>
                
                <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12">
                  Follow our journey from a hobby project to a fully-featured operating system. 
                  Track progress, explore features, and see what's coming next.
                </p>

                {/* Progress Overview */}
                <div className="max-w-2xl mx-auto">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="glass-card p-6 rounded-2xl border border-white/10 backdrop-blur-xl bg-white/5 shadow-[0_0_40px_hsl(180_100%_50%/10%)]"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-white/60">Overall Progress</span>
                      <span className="text-2xl font-bold text-[hsl(180_100%_50%)] drop-shadow-[0_0_10px_hsl(180_100%_50%)]">{totalProgress}%</span>
                    </div>
                    <div className="relative h-3 bg-white/10 rounded-full overflow-hidden mb-4">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${totalProgress}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-[hsl(180_100%_50%)] to-[hsl(280_100%_60%)] rounded-full shadow-[0_0_20px_hsl(180_100%_50%)]"
                      />
                    </div>
                    <div className="flex justify-between text-sm text-white/60">
                      <span>{completedFeatures} of {totalFeatures} features completed</span>
                      <span>{phases.filter(p => p.status === "in-progress").length} phases in progress</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-12 border-y border-white/10 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Development Phases", value: phases.length, icon: Layers, color: "[hsl(180_100%_50%)]" },
                  { label: "Total Features", value: totalFeatures, icon: Sparkles, color: "[hsl(280_100%_60%)]" },
                  { label: "Features Complete", value: completedFeatures, icon: Check, color: "[hsl(320_100%_60%)]" },
                  { label: "Target Year", value: "2027", icon: Flag, color: "[hsl(180_100%_50%)]" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center group"
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-${stat.color}/10 mb-3 border border-${stat.color}/20 shadow-[0_0_20px_hsl(${stat.color === '[hsl(180_100%_50%)]' ? '180_100%_50%' : stat.color === '[hsl(280_100%_60%)]' ? '280_100%_60%' : '320_100%_60%'}/20%)] group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className="w-6 h-6" style={{ color: `hsl(${stat.color === '[hsl(180_100%_50%)]' ? '180 100% 50%' : stat.color === '[hsl(280_100%_60%)]' ? '280 100% 60%' : '320 100% 60%'})` }} />
                    </div>
                    <div className="text-3xl font-bold mb-1 text-white">{stat.value}</div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Vision Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4 text-white">
                  Our <span className="text-gaming">Vision</span>
                </h2>
                <p className="text-white/60 max-w-2xl mx-auto">
                  The guiding principles that drive every decision we make
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {visionCards.map((card, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group glass-card p-6 rounded-2xl border border-white/10 backdrop-blur-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_30px_hsl(180_100%_50%/15%)] hover:-translate-y-1"
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <card.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-white">{card.title}</h3>
                    <p className="text-sm text-white/60">{card.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Alpha Banner */}
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-6 rounded-2xl border-[hsl(320_100%_60%)]/30 bg-gradient-to-r from-[hsl(320_100%_60%)]/10 to-[hsl(280_100%_60%)]/10 backdrop-blur-xl shadow-[0_0_40px_hsl(320_100%_60%/15%)]"
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(320_100%_60%)] to-[hsl(280_100%_60%)] flex items-center justify-center shrink-0 shadow-[0_0_20px_hsl(320_100%_60%/40%)]">
                      <Bug className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-white">Road to Alpha</h3>
                      <p className="text-sm text-white/60">
                        We're in a heavy bug-fixing phase. Every bug fixed brings us closer to the first public Alpha release.
                      </p>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="shrink-0 border-[hsl(320_100%_60%)]/50 text-[hsl(320_100%_60%)] hover:bg-[hsl(320_100%_60%)]/10">
                    <Link to="/news/alpha-release" className="gap-2">
                      Read Update <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Milestones Timeline */}
          <section className="py-20 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4 text-white">
                  Key <span className="text-gaming-alt">Milestones</span>
                </h2>
                <p className="text-white/60">Major checkpoints on our journey</p>
              </motion.div>
              
              <div className="relative">
                {/* Timeline line - centered */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[hsl(180_100%_50%)] via-[hsl(280_100%_60%)] to-[hsl(320_100%_60%)] rounded-full hidden md:block shadow-[0_0_20px_hsl(180_100%_50%/50%)]" />
                
                <div className="space-y-12 md:space-y-16">
                  {milestones.map((milestone, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className={`relative flex flex-col md:flex-row items-center gap-4 md:gap-8 ${
                        i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Content Card */}
                      <div className={`flex-1 w-full md:w-auto ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                        <motion.div 
                          whileHover={{ scale: 1.02 }}
                          className={`glass-card p-6 rounded-2xl inline-block max-w-sm border border-white/10 backdrop-blur-xl bg-white/5 hover:border-white/20 transition-all duration-300 ${milestone.isNext ? 'border-[hsl(320_100%_60%)]/50 shadow-[0_0_30px_hsl(320_100%_60%/20%)]' : ''}`}
                      >
                          <div className={`text-sm font-semibold mb-2 ${milestone.isNext ? 'text-[hsl(320_100%_60%)]' : milestone.completed ? 'text-[hsl(180_100%_50%)]' : 'text-[hsl(280_100%_60%)]'}`}>{milestone.date}</div>
                          <h3 className="font-bold text-xl mb-2 text-white">{milestone.title}</h3>
                          <p className="text-sm text-white/60">{milestone.description}</p>
                          {milestone.link && (
                            <Link to={milestone.link} className="inline-flex items-center gap-1 text-sm text-[hsl(320_100%_60%)] hover:underline mt-3">
                              Learn more <ArrowRight className="w-3 h-3" />
                            </Link>
                          )}
                        </motion.div>
                      </div>
                      
                      {/* Center Icon */}
                      <div className="relative z-10 flex-shrink-0">
                        <motion.div 
                          whileHover={{ scale: 1.1 }}
                          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg ${
                            milestone.completed 
                              ? "bg-gradient-to-br from-[hsl(180_100%_50%)] to-[hsl(180_80%_40%)] text-white shadow-[0_0_30px_hsl(180_100%_50%/50%)]" 
                              : milestone.isNext
                              ? "bg-gradient-to-br from-[hsl(320_100%_60%)] to-[hsl(280_100%_60%)] text-white shadow-[0_0_30px_hsl(320_100%_60%/50%)]"
                              : "bg-white/5 border-2 border-white/20 text-white/60"
                          }`}
                        >
                          {milestone.completed ? (
                            <Check className="w-7 h-7" strokeWidth={3} />
                          ) : milestone.isNext ? (
                            <Rocket className="w-6 h-6 text-white" />
                          ) : (
                            <Calendar className="w-6 h-6 text-white/60" />
                          )}
                        </motion.div>
                      </div>
                      
                      {/* Empty spacer for alternating layout */}
                      <div className="flex-1 hidden md:block" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Development Phases */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-8"
              >
                <h2 className="text-3xl font-bold mb-4 text-white">
                  Development <span className="text-gaming">Phases</span>
                </h2>
                <p className="text-white/60 max-w-2xl mx-auto mb-8">
                  Detailed breakdown of each development phase and its features
                </p>
              </motion.div>

              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {(["All", "in-progress", "planned", "completed"] as FilterType[]).map((filter) => (
                  <Button
                    key={filter}
                    variant={activeFilter === filter ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveFilter(filter)}
                    className={`capitalize ${
                      activeFilter === filter 
                        ? "bg-gradient-to-r from-[hsl(180_100%_50%)] to-[hsl(280_100%_60%)] text-black font-semibold border-0 shadow-[0_0_20px_hsl(180_100%_50%/40%)]" 
                        : "border-white/20 text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {filter === "in-progress" ? "In Progress" : filter}
                  </Button>
                ))}
              </div>
              
              <div className="space-y-4">
                <AnimatePresence mode="popLayout">
                  {filteredPhases.map((phase, i) => {
                    const originalIndex = phases.indexOf(phase);
                    const isExpanded = expandedPhases.has(originalIndex);
                    
                    return (
                      <motion.div
                        key={phase.phase}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className={`glass-card rounded-2xl overflow-hidden border border-white/10 backdrop-blur-xl bg-white/5 hover:border-white/20 transition-all duration-300 ${getStatusGlow(phase.status)}`}
                      >
                        {/* Phase Header */}
                        <button
                          onClick={() => togglePhase(originalIndex)}
                          className="w-full p-6 flex items-center gap-6 hover:bg-white/5 transition-colors text-left"
                        >
                          {/* Status Indicator */}
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getStatusColor(phase.status)}`}>
                            {getStatusIcon(phase.status)}
                          </div>
                          
                          {/* Phase Info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-1">
                              <span className="text-sm font-medium text-[hsl(180_100%_50%)]">{phase.phase}</span>
                              <Badge variant="outline" className={getStatusColor(phase.status)}>
                                {phase.status === "in-progress" ? "In Progress" : phase.status}
                              </Badge>
                              <span className="text-sm text-white/50 hidden sm:inline">ETA: {phase.eta}</span>
                            </div>
                            <h3 className="text-xl font-semibold truncate text-white">{phase.title}</h3>
                            <p className="text-sm text-white/50 hidden md:block">{phase.description}</p>
                          </div>
                          
                          {/* Progress */}
                          <div className="hidden sm:block w-32">
                            <div className="flex items-center justify-between text-sm mb-1">
                              <span className="text-white/50">Progress</span>
                              <span className="font-medium text-[hsl(180_100%_50%)]">{phase.progress}%</span>
                            </div>
                            <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${phase.progress}%` }}
                                className={`absolute inset-y-0 left-0 rounded-full ${
                                  phase.status === "completed" 
                                    ? "bg-gradient-to-r from-[hsl(180_100%_50%)] to-[hsl(180_80%_40%)] shadow-[0_0_10px_hsl(180_100%_50%)]" 
                                    : phase.status === "in-progress"
                                    ? "bg-gradient-to-r from-[hsl(320_100%_60%)] to-[hsl(320_80%_50%)] shadow-[0_0_10px_hsl(320_100%_60%)]"
                                    : "bg-gradient-to-r from-[hsl(280_100%_60%)] to-[hsl(280_80%_50%)]"
                                }`}
                              />
                            </div>
                          </div>
                          
                          {/* Expand Icon */}
                          <div className="text-white/50">
                            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                          </div>
                        </button>
                        
                        {/* Expanded Content */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-6 pt-2 border-t border-white/10">
                                <div className="sm:hidden mb-4">
                                  <div className="flex items-center justify-between text-sm mb-1">
                                    <span className="text-white/50">Progress</span>
                                    <span className="font-medium text-[hsl(180_100%_50%)]">{phase.progress}%</span>
                                  </div>
                                  <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                                    <motion.div 
                                      initial={{ width: 0 }}
                                      animate={{ width: `${phase.progress}%` }}
                                      className={`absolute inset-y-0 left-0 rounded-full ${
                                        phase.status === "completed" 
                                          ? "bg-gradient-to-r from-[hsl(180_100%_50%)] to-[hsl(180_80%_40%)] shadow-[0_0_10px_hsl(180_100%_50%)]" 
                                          : phase.status === "in-progress"
                                          ? "bg-gradient-to-r from-[hsl(320_100%_60%)] to-[hsl(320_80%_50%)] shadow-[0_0_10px_hsl(320_100%_60%)]"
                                          : "bg-gradient-to-r from-[hsl(280_100%_60%)] to-[hsl(280_80%_50%)]"
                                      }`}
                                    />
                                  </div>
                                </div>
                                
                                <h4 className="text-sm font-medium text-white/50 mb-4">Features</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                  {phase.features.map((feature, fi) => (
                                    <motion.div
                                      key={fi}
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: fi * 0.05 }}
                                      className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 ${
                                        feature.done 
                                          ? "bg-[hsl(180_100%_50%)]/10 border-[hsl(180_100%_50%)]/30 shadow-[0_0_15px_hsl(180_100%_50%/10%)]" 
                                          : "bg-white/5 border-white/10 hover:border-white/20"
                                      }`}
                                    >
                                      <div className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 ${
                                        feature.done 
                                          ? "bg-gradient-to-br from-[hsl(180_100%_50%)] to-[hsl(180_80%_40%)] text-black shadow-[0_0_10px_hsl(180_100%_50%/50%)]" 
                                          : "border-2 border-white/30"
                                      }`}>
                                        {feature.done && <Check className="w-3 h-3" />}
                                      </div>
                                      <span className={`text-sm ${feature.done ? "text-white" : "text-white/50"}`}>
                                        {feature.name}
                                      </span>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
          </section>

          {/* Feature Roadmap */}
          <section className="py-20 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4 text-white">
                  Feature <span className="text-gaming-alt">Categories</span>
                </h2>
                <p className="text-white/60 max-w-2xl mx-auto">
                  Explore the different areas of development and planned features
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {featureRoadmap.map((category, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card p-6 rounded-2xl group border border-white/10 backdrop-blur-xl bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_hsl(280_100%_60%/15%)]"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-4 text-white">{category.category}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, ii) => (
                        <li key={ii} className="flex items-center gap-2 text-sm text-white/60">
                          <ArrowRight className="w-3 h-3 text-[hsl(180_100%_50%)] flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-12 rounded-3xl border border-white/10 backdrop-blur-xl bg-gradient-to-br from-[hsl(180_100%_50%)]/5 via-white/5 to-[hsl(280_100%_60%)]/5 shadow-[0_0_60px_hsl(180_100%_50%/10%)]"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(180_100%_50%)] to-[hsl(280_100%_60%)] flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_hsl(180_100%_50%/40%)]">
                  <Terminal className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-white">
                  Want to <span className="text-gaming">Contribute?</span>
                </h2>
                <p className="text-white/60 mb-8 max-w-xl mx-auto">
                  GamerOS is open source and we welcome contributions from developers 
                  of all skill levels. Help us build something amazing!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="btn-neon font-semibold">
                    <a href="https://github.com/urmoit/GamerOS" target="_blank" rel="noopener noreferrer">
                      View on GitHub
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="border-white/20 text-white hover:bg-white/10">
                    <a href="https://github.com/urmoit/GamerOS/issues" target="_blank" rel="noopener noreferrer">
                      View Open Issues
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

export default Roadmap;
