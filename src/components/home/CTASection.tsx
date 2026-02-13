import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Download, Github, Rocket, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
      </div>

      <div className="container-gaming relative">
        <ScrollReveal>
          <motion.div 
            className="glass-card p-12 lg:p-16 text-center relative overflow-hidden group"
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated background */}
            <div className="absolute inset-0">
              <motion.div 
                className="absolute top-0 right-0 w-96 h-96 rounded-full"
                style={{
                  background: 'radial-gradient(circle, hsl(280 100% 60% / 0.15) 0%, transparent 70%)',
                }}
                animate={{ 
                  scale: [1, 1.2, 1],
                  x: [0, 20, 0],
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute bottom-0 left-0 w-72 h-72 rounded-full"
                style={{
                  background: 'radial-gradient(circle, hsl(180 100% 50% / 0.12) 0%, transparent 70%)',
                }}
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  x: [0, -20, 0],
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 grid-pattern opacity-20" />
            
            <div className="relative z-10">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-sm font-medium mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Rocket className="w-4 h-4" />
                Ready to Launch
              </motion.div>

              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Ready to Experience <span className="text-gaming">GamerOS</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Join our community of developers and enthusiasts 
                shaping the future of gaming operating systems.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    size="lg" 
                    asChild 
                    className="btn-neon min-w-[180px] h-14 text-base font-semibold border-0"
                  >
                    <Link to="/download">
                      <Download className="w-5 h-5 mr-2" />
                      <span className="relative z-10">Download</span>
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    asChild
                    className="min-w-[180px] h-14 text-base font-semibold border-2 border-white/20 hover:border-purple-400/50 hover:bg-purple-400/10 transition-all duration-300"
                  >
                    <a href="https://github.com/urmoit/GamerOS" target="_blank" rel="noopener noreferrer">
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
