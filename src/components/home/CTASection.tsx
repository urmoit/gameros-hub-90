import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Download, Github } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <motion.div 
            className="glass-card p-12 text-center relative overflow-hidden"
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
            
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Experience GamerOS?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Join our community of developers and enthusiasts 
                shaping the future of operating systems.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" asChild>
                    <Link to="/download">
                      <Download className="w-5 h-5 mr-2" />
                      Download
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" variant="outline" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 mr-2" />
                      View on GitHub
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
