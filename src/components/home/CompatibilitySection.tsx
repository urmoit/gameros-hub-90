import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import PlatformBadge from "@/components/ui/PlatformBadge";
import { Monitor, Terminal, Smartphone, Check } from "lucide-react";

const platforms = [
  {
    icon: Monitor,
    name: "Windows Applications",
    description: "Native support for .exe files and Win32 APIs",
  },
  {
    icon: Terminal,
    name: "Linux Applications",
    description: "Full compatibility with Linux binaries and packages",
  },
  {
    icon: Smartphone,
    name: "Android APKs",
    description: "Run your favorite mobile apps on desktop",
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

const CompatibilitySection = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <ScrollReveal direction="left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Universal Compatibility
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                One OS, Three Ecosystems
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                GamerOS breaks down the barriers between operating systems. Run Windows productivity apps, 
                Linux development tools, and Android mobile apps all in one unified environment.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {highlights.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right content - Platform cards */}
          <StaggerContainer className="space-y-4">
            {platforms.map((platform, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <PlatformBadge {...platform} />
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default CompatibilitySection;
