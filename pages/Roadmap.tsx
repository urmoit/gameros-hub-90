import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
  Cpu
} from "lucide-react";

const visionCards = [
  { icon: Target, title: "Focused Development", description: "Prioritizing core functionality before expanding features" },
  { icon: Zap, title: "Performance First", description: "Optimizing for speed and efficiency at every level" },
  { icon: Code2, title: "Developer Friendly", description: "Creating intuitive APIs and documentation" },
  { icon: Users, title: "User Experience", description: "Designing with the end user always in mind" },
];

const phases = [
  {
    phase: "Phase 1",
    title: "Foundation & Build System",
    status: "in-progress",
    progress: 60,
    features: ["GRUB Multiboot2 bootloader", "Basic kernel (ELF64)", "Memory management (16-byte aligned)", "VGA graphics pipeline", "Build system (Docker cross-compilation)", "QEMU testing environment"],
  },
  {
    phase: "Phase 2",
    title: "Core Systems",
    status: "planned",
    progress: 0,
    features: ["Process scheduler", "Virtual file system", "Device driver framework", "System calls API", "Interrupt handling", "Timer management"],
  },
  {
    phase: "Phase 3",
    title: "User Interface",
    status: "planned",
    progress: 0,
    features: ["Fluent Design shell", "Window manager", "Desktop compositor", "Settings application", "Widget system", "Theme engine"],
  },
  {
    phase: "Phase 4",
    title: "Compatibility Layers",
    status: "planned",
    progress: 0,
    features: ["Windows PE loader", "Win32 API subset", "Linux ELF support", "POSIX syscalls", "Android runtime (ART)", "APK installer"],
  },
  {
    phase: "Phase 5",
    title: "Hardware & Networking",
    status: "planned",
    progress: 0,
    features: ["TCP/IP stack", "Ethernet drivers", "WiFi support", "USB 3.0 drivers", "Storage drivers", "GPU acceleration"],
  },
  {
    phase: "Phase 6",
    title: "Gaming & Multimedia",
    status: "planned",
    progress: 0,
    features: ["DirectX translation", "Vulkan support", "Audio subsystem", "Controller support", "Game mode", "Low-latency audio"],
  },
  {
    phase: "Phase 7",
    title: "Polish & Release",
    status: "planned",
    progress: 0,
    features: ["App store", "Cloud sync", "Multi-user accounts", "Installation wizard", "Secure boot", "OTA updates"],
  },
];

const featureRoadmap = [
  { icon: Monitor, category: "Graphics", items: ["VGA text mode", "Framebuffer graphics", "Hardware acceleration", "Multi-monitor", "HDR support"] },
  { icon: Wifi, category: "Connectivity", items: ["Ethernet drivers", "WiFi chipset support", "Bluetooth stack", "USB 3.2 support", "NVMe drivers"] },
  { icon: Shield, category: "Security", items: ["Secure boot chain", "App sandboxing", "Disk encryption", "Memory protection", "Firewall"] },
  { icon: Gamepad2, category: "Gaming", items: ["Game mode", "Controller support", "Low latency audio", "DirectX translation", "Proton-like layer"] },
  { icon: Cpu, category: "Core Systems", items: ["SMP support", "NUMA awareness", "Power management", "ACPI support", "Real-time scheduling"] },
];

const Roadmap = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Development Roadmap
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Building the Future
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our development roadmap outlines the path from a hobby project to a 
              fully-featured operating system.
            </p>
          </div>
        </section>

        {/* Vision */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Vision</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {visionCards.map((card, i) => (
                <div key={i} className="glass-card p-6 text-center fluent-hover">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <card.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Development Phases</h2>
            <div className="space-y-6">
              {phases.map((phase, i) => (
                <div key={i} className="glass-card p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    {/* Phase info */}
                    <div className="lg:w-48 flex-shrink-0">
                      <div className="flex items-center gap-2 mb-2">
                        {phase.status === "completed" && <Check className="w-5 h-5 text-green-500" />}
                        {phase.status === "in-progress" && <Clock className="w-5 h-5 text-primary" />}
                        {phase.status === "planned" && <Circle className="w-5 h-5 text-muted-foreground" />}
                        <span className="text-sm text-muted-foreground">{phase.phase}</span>
                      </div>
                      <h3 className="text-xl font-semibold">{phase.title}</h3>
                    </div>

                    {/* Progress bar */}
                    <div className="lg:w-48 flex-shrink-0">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{phase.progress}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-secondary overflow-hidden">
                        <div 
                          className="h-full rounded-full bg-primary transition-all duration-500"
                          style={{ width: `${phase.progress}%` }}
                        />
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2">
                        {phase.features.map((feature, fi) => (
                          <span 
                            key={fi} 
                            className={`px-3 py-1 rounded-full text-sm ${
                              phase.status === "completed" 
                                ? "bg-green-500/10 text-green-600" 
                                : phase.status === "in-progress"
                                ? "bg-primary/10 text-primary"
                                : "bg-secondary text-muted-foreground"
                            }`}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Roadmap */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Feature Roadmap</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featureRoadmap.map((category, i) => (
                <div key={i} className="glass-card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold">{category.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item, ii) => (
                      <li key={ii} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Roadmap;
