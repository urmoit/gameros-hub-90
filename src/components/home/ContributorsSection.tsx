import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Users, Github, Heart, Coffee, Code2, Sparkles } from "lucide-react";

const ContributorsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-cyan-400/5 to-purple-600/5 blur-3xl" />
      </div>

      <div className="container-gaming relative">
        <ScrollReveal>
          <div className="text-center mb-12">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-sm font-medium mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Users className="w-4 h-4" />
              Development Team
            </motion.div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Built by <span className="text-gaming">Passion</span>
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
              className="glass-card p-8 text-center relative overflow-hidden group"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-purple-600/0 to-pink-500/0 group-hover:from-cyan-400/10 group-hover:via-purple-600/10 group-hover:to-pink-500/10 transition-all duration-500" />
              
              <a href="https://github.com/urmoit" target="_blank" rel="noopener noreferrer" className="relative z-10">
                <motion.div 
                  className="w-28 h-28 rounded-3xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center mx-auto mb-6 relative overflow-hidden"
                  whileHover={{ rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-purple-600/30" />
                  <span className="text-4xl font-bold text-white relative z-10">U</span>
                  <motion.div
                    className="absolute top-2 right-2"
                    animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <Sparkles className="w-5 h-5 text-white/80" />
                  </motion.div>
                </motion.div>
              </a>
              
              <h3 className="text-2xl font-bold mb-1 text-gaming relative z-10">urmoit</h3>
              <p className="text-cyan-400 mb-4 relative z-10">Solo Developer & Creator</p>
              <p className="text-sm text-muted-foreground mb-6 relative z-10">
                Building GamerOS from the ground up - kernel, UI, everything. 
                It's a labor of love and a learning journey.
              </p>
              
              <motion.a 
                href="https://buymeacoffee.com/urmoit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-amber-400 font-medium hover:from-amber-500/30 hover:to-orange-500/30 transition-all duration-300 relative z-10"
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
          <div className="glass-card p-8 text-center max-w-2xl mx-auto relative overflow-hidden group">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl group-hover:bg-pink-500/20 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500" />
            
            <div className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4 fill-pink-500/20" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 text-gaming-alt">Looking for Contributors!</h3>
              <p className="text-muted-foreground mb-6">
                No one is contributing yet, but that could change! Whether you're a kernel hacker, 
                UI designer, documentation writer, or just enthusiastic about OS development - 
                there's a place for you here. Be the first to join the journey!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a 
                  href="https://github.com/urmoit/GamerOS" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-neon text-foreground font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5" />
                  <span className="relative z-10">Contribute on GitHub</span>
                </motion.a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContributorsSection;
