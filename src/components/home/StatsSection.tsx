import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import StatCard from "@/components/ui/StatCard";

const stats = [
  { value: "TBA", label: "Releases" },
  { value: "TBA", label: "Contributors" },
  { value: "7,400+", label: "Lines of Code" },
  { value: "2026", label: "Project Started" },
];

const StatsSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Project Statistics
            </h2>
            <p className="text-lg text-muted-foreground">
              Tracking our progress as we build GamerOS
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <StatCard {...stat} />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default StatsSection;
