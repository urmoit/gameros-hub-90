import { useState } from "react";
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
  Layers
} from "lucide-react";

type PhaseStatus = "completed" | "in-progress" | "planned";
type FilterType = "All" | "completed" | "in-progress" | "planned";

const visionCards = [
  { icon: Target, title: "Focused Development", description: "Prioritizing core functionality before expanding features", color: "from-blue-500 to-cyan-500" },
  { icon: Zap, title: "Performance First", description: "Optimizing for speed and efficiency at every level", color: "from-yellow-500 to-orange-500" },
  { icon: Code2, title: "Developer Friendly", description: "Creating intuitive APIs and documentation", color: "from-purple-500 to-pink-500" },
  { icon: Users, title: "User Experience", description: "Designing with the end user always in mind", color: "from-green-500 to-emerald-500" },
];

const phases = [
  {
    phase: "Phase 1",
    title: "Foundation & Build System",
    status: "in-progress" as PhaseStatus,
    progress: 60,
    description: "Establishing the core bootloader, kernel, and development environment.",
    eta: "Q1 2026",
    features: [
      { name: "GRUB Multiboot2 bootloader", done: true },
      { name: "Basic kernel (ELF64)", done: true },
      { name: "Memory management (16-byte aligned)", done: true },
      { name: "VGA graphics pipeline", done: false },
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
  { icon: Monitor, category: "Graphics", color: "from-blue-500 to-indigo-500", items: ["VGA text mode", "Framebuffer graphics", "Hardware acceleration", "Multi-monitor", "HDR support"] },
  { icon: Wifi, category: "Connectivity", color: "from-cyan-500 to-teal-500", items: ["Ethernet drivers", "WiFi chipset support", "Bluetooth stack", "USB 3.2 support", "NVMe drivers"] },
  { icon: Shield, category: "Security", color: "from-red-500 to-rose-500", items: ["Secure boot chain", "App sandboxing", "Disk encryption", "Memory protection", "Firewall"] },
  { icon: Gamepad2, category: "Gaming", color: "from-purple-500 to-violet-500", items: ["Game mode", "Controller support", "Low latency audio", "DirectX translation", "Proton-like layer"] },
  { icon: Cpu, category: "Core Systems", color: "from-orange-500 to-amber-500", items: ["SMP support", "NUMA awareness", "Power management", "ACPI support", "Real-time scheduling"] },
];

const milestones = [
  { date: "Jan 2026", title: "Project Start", description: "Initial commit and build system setup", completed: true },
  { date: "Feb 2026", title: "Boot Success", description: "First successful boot with kernel", completed: false },
  { date: "Q2 2026", title: "Alpha Release", description: "Basic OS functionality", completed: false },
  { date: "Q4 2026", title: "Beta Release", description: "App compatibility layers", completed: false },
  { date: "2027", title: "v1.0 Release", description: "Stable public release", completed: false },
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
      case "completed": return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
      case "in-progress": return "bg-primary/10 text-primary border-primary/20";
      default: return "bg-muted text-muted-foreground border-border";
    }
  };

  const totalProgress = Math.round(phases.reduce((acc, p) => acc + p.progress, 0) / phases.length);
  const completedFeatures = phases.reduce((acc, p) => acc + p.features.filter(f => f.done).length, 0);
  const totalFeatures = phases.reduce((acc, p) => acc + p.features.length, 0);

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative pt-32 pb-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <Badge variant="outline" className="mb-6 px-4 py-2 text-sm border-primary/30 bg-primary/5">
                  <Rocket className="w-4 h-4 mr-2" />
                  Development Roadmap
                </Badge>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  Building the{" "}
                  <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Future
                  </span>
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
                  Follow our journey from a hobby project to a fully-featured operating system. 
                  Track progress, explore features, and see what's coming next.
                </p>

                {/* Progress Overview */}
                <div className="max-w-2xl mx-auto">
                  <div className="glass-card p-6 rounded-2xl">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-muted-foreground">Overall Progress</span>
                      <span className="text-2xl font-bold text-primary">{totalProgress}%</span>
                    </div>
                    <Progress value={totalProgress} className="h-3 mb-4" />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{completedFeatures} of {totalFeatures} features completed</span>
                      <span>{phases.filter(p => p.status === "in-progress").length} phases in progress</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-12 border-y border-border bg-card/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Development Phases", value: phases.length, icon: Layers },
                  { label: "Total Features", value: totalFeatures, icon: Sparkles },
                  { label: "Features Complete", value: completedFeatures, icon: Check },
                  { label: "Target Year", value: "2027", icon: Flag },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-3">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
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
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
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
                    className="group glass-card p-6 rounded-2xl hover:shadow-xl transition-all duration-300"
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <card.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                    <p className="text-sm text-muted-foreground">{card.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Milestones Timeline */}
          <section className="py-20 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4">Key Milestones</h2>
                <p className="text-muted-foreground">Major checkpoints on our journey</p>
              </motion.div>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" />
                
                <div className="space-y-8">
                  {milestones.map((milestone, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className={`flex items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                    >
                      <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                        <div className="glass-card p-6 rounded-2xl inline-block">
                          <div className="text-sm text-primary font-medium mb-1">{milestone.date}</div>
                          <h3 className="font-semibold text-lg mb-1">{milestone.title}</h3>
                          <p className="text-sm text-muted-foreground">{milestone.description}</p>
                        </div>
                      </div>
                      
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                        milestone.completed 
                          ? "bg-emerald-500 text-white" 
                          : "bg-muted border-2 border-border"
                      }`}>
                        {milestone.completed ? (
                          <Check className="w-6 h-6" />
                        ) : (
                          <Calendar className="w-5 h-5 text-muted-foreground" />
                        )}
                      </div>
                      
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
                <h2 className="text-3xl font-bold mb-4">Development Phases</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
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
                    className="capitalize"
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
                        className="glass-card rounded-2xl overflow-hidden"
                      >
                        {/* Phase Header */}
                        <button
                          onClick={() => togglePhase(originalIndex)}
                          className="w-full p-6 flex items-center gap-6 hover:bg-muted/50 transition-colors text-left"
                        >
                          {/* Status Indicator */}
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getStatusColor(phase.status)}`}>
                            {getStatusIcon(phase.status)}
                          </div>
                          
                          {/* Phase Info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-1">
                              <span className="text-sm font-medium text-primary">{phase.phase}</span>
                              <Badge variant="outline" className={getStatusColor(phase.status)}>
                                {phase.status === "in-progress" ? "In Progress" : phase.status}
                              </Badge>
                              <span className="text-sm text-muted-foreground hidden sm:inline">ETA: {phase.eta}</span>
                            </div>
                            <h3 className="text-xl font-semibold truncate">{phase.title}</h3>
                            <p className="text-sm text-muted-foreground hidden md:block">{phase.description}</p>
                          </div>
                          
                          {/* Progress */}
                          <div className="hidden sm:block w-32">
                            <div className="flex items-center justify-between text-sm mb-1">
                              <span className="text-muted-foreground">Progress</span>
                              <span className="font-medium">{phase.progress}%</span>
                            </div>
                            <Progress value={phase.progress} className="h-2" />
                          </div>
                          
                          {/* Expand Icon */}
                          <div className="text-muted-foreground">
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
                              <div className="px-6 pb-6 pt-2 border-t border-border">
                                <div className="sm:hidden mb-4">
                                  <div className="flex items-center justify-between text-sm mb-1">
                                    <span className="text-muted-foreground">Progress</span>
                                    <span className="font-medium">{phase.progress}%</span>
                                  </div>
                                  <Progress value={phase.progress} className="h-2" />
                                </div>
                                
                                <h4 className="text-sm font-medium text-muted-foreground mb-4">Features</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                  {phase.features.map((feature, fi) => (
                                    <div
                                      key={fi}
                                      className={`flex items-center gap-3 p-3 rounded-xl ${
                                        feature.done 
                                          ? "bg-emerald-500/10 border border-emerald-500/20" 
                                          : "bg-muted/50 border border-border"
                                      }`}
                                    >
                                      <div className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 ${
                                        feature.done 
                                          ? "bg-emerald-500 text-white" 
                                          : "border-2 border-muted-foreground/30"
                                      }`}>
                                        {feature.done && <Check className="w-3 h-3" />}
                                      </div>
                                      <span className={`text-sm ${feature.done ? "text-foreground" : "text-muted-foreground"}`}>
                                        {feature.name}
                                      </span>
                                    </div>
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
          <section className="py-20 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4">Feature Categories</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
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
                    className="glass-card p-6 rounded-2xl group hover:shadow-xl transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-4">{category.category}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, ii) => (
                        <li key={ii} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <ArrowRight className="w-3 h-3 text-primary flex-shrink-0" />
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
                className="glass-card p-12 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5"
              >
                <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4">Want to Contribute?</h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  GamerOS is open source and we welcome contributions from developers 
                  of all skill levels. Help us build something amazing!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg">
                    <a href="https://github.com/urmoit/GamerOS" target="_blank" rel="noopener noreferrer">
                      View on GitHub
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
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
