import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import { 
  Zap, 
  Layers, 
  Code2, 
  Shield, 
  Users, 
  Puzzle,
  Cpu,
  Gamepad2
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized kernel for maximum performance on modern x86_64 hardware with minimal overhead.",
    color: "cyan",
  },
  {
    icon: Layers,
    title: "Universal Compatibility",
    description: "Run Windows, Linux, and Android applications on a single platform without emulation.",
    color: "purple",
  },
  {
    icon: Code2,
    title: "Developer Friendly",
    description: "Built with developers in mind, featuring modern tooling, APIs, and comprehensive documentation.",
    color: "pink",
  },
  {
    icon: Shield,
    title: "Secure by Design",
    description: "Security-first architecture with sandboxed application execution and memory protection.",
    color: "cyan",
  },
  {
    icon: Users,
    title: "Open Source",
    description: "Community-driven development with transparent codebase and open governance model.",
    color: "purple",
  },
  {
    icon: Puzzle,
    title: "Modular Architecture",
    description: "Extensible design allowing custom modules, drivers, and subsystem development.",
    color: "pink",
  },
];

const colorMap: Record<string, { bg: string; border: string; glow: string; text: string }> = {
  cyan: {
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/30',
    glow: 'shadow-cyan-400/20',
    text: 'text-cyan-400',
  },
  purple: {
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/30',
    glow: 'shadow-purple-400/20',
    text: 'text-purple-400',
  },
  pink: {
    bg: 'bg-pink-400/10',
    border: 'border-pink-400/30',
    glow: 'shadow-pink-400/20',
    text: 'text-pink-400',
  },
};

const FeaturesSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />
      </div>

      <div className="container-gaming relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-sm font-medium mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Cpu className="w-4 h-4" />
              Core Features
            </motion.div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Built for the <span className="text-gaming">Modern Era</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              GamerOS combines the best of all worlds, bringing together cutting-edge performance 
              with cross-platform application support.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const colors = colorMap[feature.color];
            return (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`h-full glass-card glass-card-hover p-6 group`}
                >
                  <div className={`w-14 h-14 rounded-2xl ${colors.bg} border ${colors.border} flex items-center justify-center mb-5 transition-all duration-300 group-hover:shadow-lg ${colors.glow}`}>
                    <feature.icon className={`w-7 h-7 ${colors.text}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-gaming transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default FeaturesSection;
