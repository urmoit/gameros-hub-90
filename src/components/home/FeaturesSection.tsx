import FeatureCard from "@/components/ui/FeatureCard";
import { 
  Zap, 
  Layers, 
  Code2, 
  Shield, 
  Users, 
  Puzzle 
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized kernel for maximum performance on modern x86_64 hardware.",
  },
  {
    icon: Layers,
    title: "Universal Compatibility",
    description: "Run Windows, Linux, and Android applications on a single platform.",
  },
  {
    icon: Code2,
    title: "Developer Friendly",
    description: "Built with developers in mind, featuring modern tooling and APIs.",
  },
  {
    icon: Shield,
    title: "Secure by Design",
    description: "Security-first architecture with sandboxed application execution.",
  },
  {
    icon: Users,
    title: "Open Source",
    description: "Community-driven development with transparent codebase and governance.",
  },
  {
    icon: Puzzle,
    title: "Modular Architecture",
    description: "Extensible design allowing custom modules and driver development.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Built for the Modern Era
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            GamerOS combines the best of all worlds, bringing together Windows 11 aesthetics 
            with cross-platform application support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
