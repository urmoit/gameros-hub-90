import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import { Monitor, Terminal, Smartphone, Check, Layers } from "lucide-react";

const platforms = [
  {
    icon: Monitor,
    name: "Windows Applications",
    description: "Native support for .exe files and Win32 APIs",
    color: "cyan",
  },
  {
    icon: Terminal,
    name: "Linux Applications",
    description: "Full compatibility with Linux binaries and packages",
    color: "purple",
  },
  {
    icon: Smartphone,
    name: "Android APKs",
    description: "Run your favorite mobile apps on desktop",
    color: "pink",
  },
];

const highlights = [
  "Seamless app switching",
  "Shared clipboard",
  "File system integration",
  "Native notifications",
  "GPU acceleration",
  "Audio passthrough",
];

const colorMap: Record<string, { bg: string; border: string; text: string; shadow: string }> = {
  cyan: {
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/30',
    text: 'text-cyan-400',
    shadow: 'shadow-cyan-400/20',
  },
  purple: {
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/30',
    text: 'text-purple-400',
    shadow: 'shadow-purple-400/20',
  },
  pink: {
    bg: 'bg-pink-400/10',
    border: 'border-pink-400/30',
    text: 'text-pink-400',
    shadow: 'shadow-pink-400/20',
  },
};

const CompatibilitySection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
      
      <div className="container-gaming relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <ScrollReveal direction="left">
            <div>
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-400/10 border border-purple-400/30 text-purple-400 text-sm font-medium mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Layers className="w-4 h-4" />
                Universal Compatibility
              </motion.div>
              
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                One OS, <span className="text-gaming-alt">Three Ecosystems</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                GamerOS breaks down the barriers between operating systems. Run Windows productivity apps, 
                Linux development tools, and Android mobile apps all in one unified environment.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 group hover:border-cyan-400/30 hover:bg-cyan-400/5 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <div className="w-6 h-6 rounded-lg bg-cyan-400/20 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-400/30 transition-colors">
                      <Check className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right content - Platform cards */}
          <StaggerContainer className="space-y-4">
            {platforms.map((platform, index) => {
              const colors = colorMap[platform.color];
              return (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ x: 10, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className={`glass-card p-5 flex items-center gap-4 group cursor-default`}
                  >
                    <div className={`w-14 h-14 rounded-2xl ${colors.bg} border ${colors.border} flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:shadow-lg ${colors.shadow}`}>
                      <platform.icon className={`w-7 h-7 ${colors.text}`} />
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg mb-1 ${colors.text}`}>
                        {platform.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {platform.description}
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default CompatibilitySection;
