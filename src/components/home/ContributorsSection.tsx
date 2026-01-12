import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import { Users, Github, Heart } from "lucide-react";

const contributors = [
  { name: "Lead Developer", role: "Core Development", avatar: "LD" },
  { name: "UI Designer", role: "Fluent Design System", avatar: "UI" },
  { name: "Kernel Dev", role: "Low-level Systems", avatar: "KD" },
  { name: "Build Engineer", role: "CI/CD & Tooling", avatar: "BE" },
  { name: "Docs Writer", role: "Documentation", avatar: "DW" },
  { name: "Community Mod", role: "Community Support", avatar: "CM" },
];

const ContributorsSection = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Our Team
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Contributors
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the passionate individuals building GamerOS. Join our community and help shape the future.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {contributors.map((contributor, index) => (
            <StaggerItem key={index}>
              <motion.div 
                className="glass-card p-4 text-center"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-primary">{contributor.avatar}</span>
                </div>
                <h4 className="font-medium text-sm">{contributor.name}</h4>
                <p className="text-xs text-muted-foreground">{contributor.role}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <motion.div 
              className="glass-card inline-flex items-center gap-4 p-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-destructive" />
                <span className="text-muted-foreground">Want to contribute?</span>
              </div>
              <motion.a 
                href="#" 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4" />
                Join on GitHub
              </motion.a>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContributorsSection;
