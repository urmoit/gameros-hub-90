import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { 
  Cpu, 
  Code2, 
  HardDrive, 
  Monitor, 
  Wrench, 
  Scale,
  Check,
  AlertTriangle,
  Zap,
  Clock,
  Target,
  Sparkles,
  ArrowRight,
  Gamepad2,
  Rocket
} from "lucide-react";

const currentFeatures = [
  "VESA 32-bit True Color graphics (1024x768)",
  "Windows XP Luna Theme desktop environment",
  "Notepad app with keyboard text input",
  "Double buffering for flicker-free rendering",
  "VMware/VirtualBox mouse integration",
  "USB 1.0-3.0 stack support",
  "PS/2 keyboard and mouse drivers",
  "GRUB2 bootloader with Multiboot2",
];

const plannedFeatures = [
  "Full DirectX support",
  "Vulkan graphics API",
  "Network stack",
  "Multi-user support",
  "Package manager",
  "App store",
  "Cloud sync",
];

const techSpecs = [
  { icon: Cpu, title: "Architecture", value: "x86_64", color: "cyan" },
  { icon: Code2, title: "Languages", value: "C, Assembly", color: "purple" },
  { icon: HardDrive, title: "Bootloader", value: "GRUB2", color: "pink" },
  { icon: Monitor, title: "Graphics", value: "VGA 13h, VESA 32-bit", color: "cyan" },
  { icon: Wrench, title: "Build System", value: "Docker + Make", color: "purple" },
  { icon: Scale, title: "License", value: "MIT", color: "pink" },
];

const visionPoints = [
  {
    icon: Target,
    title: "Universal Compatibility",
    description: "Run applications from Windows, Linux, and Android ecosystems seamlessly on a single platform.",
    color: "cyan",
  },
  {
    icon: Sparkles,
    title: "Modern Design",
    description: "A beautiful, intuitive interface with gaming-inspired aesthetics and smooth animations.",
    color: "purple",
  },
  {
    icon: Zap,
    title: "Performance First",
    description: "Built from scratch with performance in mind, without legacy baggage.",
    color: "pink",
  },
  {
    icon: Rocket,
    title: "Release Focused",
    description: "Each milestone prioritizes stability, usability, and clear release notes.",
    color: "cyan",
  },
];

const teamStats = [
  { value: "1", label: "Core Developer", color: "cyan" },
  { value: "27,000+", label: "Lines of Code", color: "purple" },
  { value: "1.520", label: "Build", color: "pink" },
  { value: "Jan 2026", label: "Started", color: "cyan" },
];

const colorMap: Record<string, { bg: string; border: string; text: string; shadow: string }> = {
  cyan: {
    bg: 'bg-muted',
    border: 'border-border',
    text: 'text-primary',
    shadow: '',
  },
  purple: {
    bg: 'bg-muted',
    border: 'border-border',
    text: 'text-primary',
    shadow: '',
  },
  pink: {
    bg: 'bg-muted',
    border: 'border-border',
    text: 'text-primary',
    shadow: '',
  },
};

const About = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-muted  to-transparent hidden" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-muted  to-transparent hidden" />
          </div>

          <div className="container-gaming relative">
            <div className="text-center mb-16">
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border text-primary text-sm font-medium mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Gamepad2 className="w-4 h-4" />
                About the Project
              </motion.div>
              <h1 className="text-5xl sm:text-4xl font-bold mb-6">
                About <span className="text-gaming">GamerOS</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A modern hobby operating system designed to run 
                applications from three major ecosystems.
              </p>
            </div>

            {/* Overview cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <ScrollReveal direction="left">
                <div className="glass-card p-5 sm:p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-muted border border-border flex items-center justify-center">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Project Overview</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    GamerOS is an ambitious hobby project aiming to create a modern operating system 
                    that combines gaming aesthetics with unprecedented cross-platform 
                    application compatibility.
                  </p>
                  <ul className="space-y-2">
                    {["Built from scratch", "Gaming-inspired UI", "Universal app support", "Open source"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div className="glass-card p-5 sm:p-6 border-border h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-warning/10 border border-border flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-warning" />
                    </div>
                    <h3 className="text-xl font-bold">Development Notice</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    GamerOS has made significant progress! Build 1.520 is now released — the 00m2 update that fixes major build blockers,
                    memory safety issues, and driver/boot reliability problems while improving Settings, Notepad, Explorer, and release tooling.
                    The latest alpha release is <span className="text-warning font-medium">00m2</span> (Build 1.520), released October 10, 2026.
                  </p>
                  <Button variant="outline" size="sm" asChild className="mt-2 border-border hover:bg-warning/10 hover:text-warning">
                    <Link to="/news/build-1520">
                      Read Build 1.520 Release Notes
                    </Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="section-padding relative overflow-hidden bg-muted  via-transparent to-transparent">
          <div className="container-gaming">
            <div className="text-center mb-12">
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border text-primary text-sm font-medium mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Rocket className="w-4 h-4" />
                Our Vision
              </motion.div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Built for the <span className="text-gaming">Future</span>
              </h2>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto">
                We're building an operating system that breaks down barriers between platforms
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {visionPoints.map((point, i) => {
                const colors = colorMap[point.color];
                return (
                  <motion.div 
                    key={i} 
                    className="glass-card p-6 text-center glass-card-hover"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`w-14 h-14 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center mx-auto mb-4`}>
                      <point.icon className={`w-7 h-7 ${colors.text}`} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{point.title}</h3>
                    <p className="text-sm text-muted-foreground">{point.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section-padding">
          <div className="container-gaming">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="text-gaming-alt">Features</span>
              </h2>
              <p className="text-muted-foreground">What's available now and what's coming next</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-5 sm:p-6">
              {/* Current Features */}
              <ScrollReveal direction="left">
                <div className="glass-card p-5 sm:p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-warning/10 border border-border flex items-center justify-center">
                      <Clock className="w-6 h-6 text-warning" />
                    </div>
                    <h3 className="text-xl font-bold">In Development</h3>
                  </div>
                  <ul className="space-y-3">
                    {currentFeatures.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted border border-border">
                        <div className="w-2 h-2 rounded-full bg-warning shadow-none" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Planned Features */}
              <ScrollReveal direction="right">
                <div className="glass-card p-5 sm:p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-muted border border-border flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Planned Features</h3>
                  </div>
                  <ul className="space-y-3">
                    {plannedFeatures.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted border border-border">
                        <div className="w-2 h-2 rounded-full bg-primary shadow-none" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Technical Specs */}
        <section className="section-padding relative overflow-hidden bg-muted from-transparent  to-transparent">
          <div className="container-gaming">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Technical <span className="text-gaming">Specs</span>
              </h2>
              <p className="text-center text-muted-foreground">
                Some details are still being finalized
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {techSpecs.map((spec, i) => {
                const colors = colorMap[spec.color];
                return (
                  <motion.div 
                    key={i} 
                    className="glass-card p-6 text-center glass-card-hover"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`w-14 h-14 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center mx-auto mb-4`}>
                      <spec.icon className={`w-7 h-7 ${colors.text}`} />
                    </div>
                    <h4 className="font-bold mb-1">{spec.title}</h4>
                    <p className="text-sm text-muted-foreground">{spec.value}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Stats */}
        <section className="section-padding">
          <div className="container-gaming">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Project <span className="text-gaming">Statistics</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {teamStats.map((stat, i) => {
                const colors = colorMap[stat.color];
                return (
                  <motion.div 
                    key={i} 
                    className="glass-card p-6 text-center glass-card-hover"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`text-3xl font-bold ${colors.text} mb-2`}>{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Release Links */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-muted  to-transparent" />
          <div className="container-gaming relative">
            <motion.div 
              className="glass-card p-5 sm:p-6 lg:p-5 sm:p-6 text-center relative overflow-hidden"
              whileHover={{ scale: 1.005 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-muted rounded-full hidden" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-muted rounded-full hidden" />
              
              <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                  Alpha <span className="text-gaming-alt">Release</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                  Download `00m2`, review release notes, and follow the next milestones.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button size="lg" className="btn-solid border-0" asChild>
                    <a href="https://github.com/urmoit/GamerOS/releases/download/00m2-alpha-Build-1.520/GamerOS_Alpha_Build_1.520.iso" target="_blank" rel="noopener noreferrer">
                      <span className="relative z-10">Download ISO</span>
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-2 border-border hover:border-border hover:bg-muted">
                    <Link to="/news">
                      View News
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
