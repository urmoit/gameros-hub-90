import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
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
  Users,
  Heart,
  Target,
  Sparkles,
  ArrowRight,
  Github
} from "lucide-react";

const currentFeatures = [
  "Windows 11-style UI (in development)",
  "Windows app compatibility layer (planned)",
  "Linux binary support (planned)",
  "Android APK runtime (planned)",
  "Modern file manager (planned)",
  "Settings application (planned)",
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
  { icon: Cpu, title: "Architecture", value: "x86_64" },
  { icon: Code2, title: "Languages", value: "TBA" },
  { icon: HardDrive, title: "Bootloader", value: "Custom UEFI" },
  { icon: Monitor, title: "Graphics", value: "TBA" },
  { icon: Wrench, title: "Build System", value: "TBA" },
  { icon: Scale, title: "License", value: "MIT" },
];

const visionPoints = [
  {
    icon: Target,
    title: "Universal Compatibility",
    description: "Run applications from Windows, Linux, and Android ecosystems seamlessly on a single platform.",
  },
  {
    icon: Sparkles,
    title: "Modern Design",
    description: "A beautiful, intuitive interface inspired by Windows 11's Fluent Design language.",
  },
  {
    icon: Zap,
    title: "Performance First",
    description: "Built from scratch with performance in mind, without legacy baggage.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Open source and built by the community, for the community.",
  },
];

const teamStats = [
  { value: "TBA", label: "Contributors" },
  { value: "TBA", label: "Lines of Code" },
  { value: "TBA", label: "Commits" },
  { value: "2026", label: "Started" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                About the Project
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                About GamerOS
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A modern hobby operating system inspired by Windows 11, designed to run 
                applications from three major ecosystems.
              </p>
            </div>

            {/* Overview cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <div className="glass-card p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Project Overview</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  GamerOS is an ambitious hobby project aiming to create a modern operating system 
                  that combines the elegant design of Windows 11 with unprecedented cross-platform 
                  application compatibility.
                </p>
                <ul className="space-y-2">
                  {["Built from scratch", "Fluent Design UI", "Universal app support", "Open source"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card p-8 border-yellow-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-semibold">Development Notice</h3>
                </div>
                <p className="text-muted-foreground">
                  GamerOS is currently in early development. We're building the foundational 
                  components including the kernel, graphics framework, and compatibility layers. 
                  There are no downloads available yet. Follow our progress and join the community 
                  to be notified when the first public release becomes available.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4">Our Vision</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              We're building an operating system that breaks down barriers between platforms
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {visionPoints.map((point, i) => (
                <div key={i} className="glass-card p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <point.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{point.title}</h3>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Current Features */}
              <div className="glass-card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-semibold">In Development</h3>
                </div>
                <ul className="space-y-3">
                  {currentFeatures.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                      <div className="w-2 h-2 rounded-full bg-yellow-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Planned Features */}
              <div className="glass-card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Planned Features</h3>
                </div>
                <ul className="space-y-3">
                  {plannedFeatures.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specs */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4">Technical Specifications</h2>
            <p className="text-center text-muted-foreground mb-12">
              Some details are still being finalized
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {techSpecs.map((spec, i) => (
                <div key={i} className="glass-card p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <spec.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-1">{spec.title}</h4>
                  <p className="text-sm text-muted-foreground">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Stats */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Project Statistics</h2>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {teamStats.map((stat, i) => (
                <div key={i} className="glass-card p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card p-8 lg:p-12 text-center">
              <Heart className="w-12 h-12 text-destructive mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Join the Journey</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                GamerOS is open source and welcomes contributors of all skill levels. 
                Whether you're a kernel developer, UI designer, documentation writer, or just 
                passionate about operating systems, we'd love to have you on board.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg">
                  <Github className="w-5 h-5 mr-2" />
                  Contribute on GitHub
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/roadmap">
                    View Roadmap
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
