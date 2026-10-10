import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import { BarChart3, GitCommit, Calendar, Rocket } from "lucide-react";

const stats = [
  { 
    value: "00m2", 
    label: "Releases",
    icon: Rocket,
    color: "cyan",
  },
  { 
    value: "1.520", 
    label: "Build",
    icon: BarChart3,
    color: "purple",
  },
  { 
    value: "27,000+", 
    label: "Lines of Code",
    icon: GitCommit,
    color: "pink",
  },
  { 
    value: "2026", 
    label: "Project Started",
    icon: Calendar,
    color: "cyan",
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  cyan: {
    bg: 'bg-muted',
    border: 'border-border',
    text: 'text-primary',
    glow: '',
  },
  purple: {
    bg: 'bg-muted',
    border: 'border-border',
    text: 'text-primary',
    glow: '',
  },
  pink: {
    bg: 'bg-muted',
    border: 'border-border',
    text: 'text-primary',
    glow: '',
  },
};

const StatsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-muted  via-transparent " />
      
      <div className="container-gaming relative">
        <ScrollReveal>
          <div className="text-center mb-12">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border text-primary text-sm font-medium mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <BarChart3 className="w-4 h-4" />
              Project Stats
            </motion.div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              By the <span className="text-gaming">Numbers</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tracking our progress as we build the future of gaming operating systems
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const colors = colorMap[stat.color];
            return (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card glass-card-hover p-6 text-center group"
                >
                  <div className={`w-12 h-12 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:shadow-lg ${colors.glow}`}>
                    <stat.icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <motion.div 
                    className="text-4xl font-bold mb-2 text-gaming"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default StatsSection;
