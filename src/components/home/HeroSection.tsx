import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Monitor, Smartphone, Terminal, Rocket, Bug } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1.1, 1, 1.1],
          opacity: [0.5, 0.3, 0.5]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Alpha Announcement Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-6"
        >
          <Link 
            to="/news/alpha-release"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-sm font-medium hover:bg-amber-500/20 transition-colors"
          >
            <Rocket className="w-4 h-4" />
            <span>Road to Alpha: Bug fix sprint in progress</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </motion.div>

        {/* Badge */}
        <motion.div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Windows 11 Inspired Design
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-foreground">Gamer</span>
          <span className="text-primary">OS</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          A modern x86_64 operating system that runs 
          <span className="text-foreground font-medium"> Windows</span>,
          <span className="text-foreground font-medium"> Linux</span>, and
          <span className="text-foreground font-medium"> Android</span> apps seamlessly.
        </motion.p>

        {/* Platform icons */}
        <motion.div 
          className="flex items-center justify-center gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div 
            className="flex items-center gap-2 text-muted-foreground"
            whileHover={{ scale: 1.05, color: "hsl(var(--primary))" }}
          >
            <Monitor className="w-5 h-5" />
            <span className="text-sm">Windows Apps</span>
          </motion.div>
          <motion.div 
            className="flex items-center gap-2 text-muted-foreground"
            whileHover={{ scale: 1.05, color: "hsl(var(--primary))" }}
          >
            <Terminal className="w-5 h-5" />
            <span className="text-sm">Linux Apps</span>
          </motion.div>
          <motion.div 
            className="flex items-center gap-2 text-muted-foreground"
            whileHover={{ scale: 1.05, color: "hsl(var(--primary))" }}
          >
            <Smartphone className="w-5 h-5" />
            <span className="text-sm">Android APKs</span>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button size="lg" asChild className="min-w-[180px]">
              <Link to="/download">
                <Download className="w-5 h-5 mr-2" />
                Download
              </Link>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button size="lg" variant="outline" asChild className="min-w-[180px]">
              <Link to="/about">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Preview Window */}
        <ScrollReveal delay={0.2}>
          <div className="mt-16 max-w-4xl mx-auto">
            <motion.div 
              className="glass-card overflow-hidden fluent-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Window titlebar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-card border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-sm text-muted-foreground ml-2">GamerOS Desktop</span>
              </div>
              {/* Window content */}
              <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary flex items-center justify-center">
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <div className="w-24 h-24 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl font-bold text-primary">G</span>
                  </div>
                  <p className="text-muted-foreground">Modern. Fast. Universal.</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
