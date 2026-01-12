import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Users, Github, Heart, Coffee } from "lucide-react";

const ContributorsSection = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Development
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Solo Developer Project
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              GamerOS is currently developed by a single passionate developer. 
              Your support and contributions can help make this project grow!
            </p>
          </div>
        </ScrollReveal>

        {/* Solo Developer Card */}
        <ScrollReveal delay={0.1}>
          <div className="max-w-md mx-auto mb-12">
            <motion.div 
              className="glass-card p-8 text-center"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">S</span>
              </div>
              <h3 className="text-xl font-semibold mb-1">Solon</h3>
              <p className="text-muted-foreground mb-4">Solo Developer & Creator</p>
              <p className="text-sm text-muted-foreground mb-6">
                Building GamerOS from the ground up - kernel, UI, everything. 
                It's a labor of love and a learning journey.
              </p>
              <motion.a 
                href="https://buymeacoffee.com/solon"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-yellow-500 text-yellow-950 font-medium hover:bg-yellow-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Coffee className="w-5 h-5" />
                Buy Me a Coffee
              </motion.a>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Looking for Contributors */}
        <ScrollReveal delay={0.2}>
          <div className="glass-card p-8 text-center max-w-2xl mx-auto">
            <Heart className="w-10 h-10 text-destructive mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Looking for Contributors!</h3>
            <p className="text-muted-foreground mb-6">
              No one is contributing yet, but that could change! Whether you're a kernel hacker, 
              UI designer, documentation writer, or just enthusiastic about OS development - 
              there's a place for you here. Be the first to join the journey!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a 
                href="#" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
                Contribute on GitHub
              </motion.a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContributorsSection;
