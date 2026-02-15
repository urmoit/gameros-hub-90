import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Monitor, Smartphone, Terminal, Rocket, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import alphaPreview from "@/assets/alpha-preview.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-50" />
        
        {/* Floating orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(280 100% 60% / 0.15) 0%, transparent 70%)',
          }}
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(180 100% 50% / 0.12) 0%, transparent 70%)',
          }}
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(320 100% 60% / 0.08) 0%, transparent 70%)',
          }}
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Scanline effect */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(180 100% 50% / 0.1) 2px, hsl(180 100% 50% / 0.1) 4px)',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Alpha Announcement Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <Link 
            to="/news/alpha-release"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-medium hover:from-amber-500/20 hover:via-orange-500/20 hover:to-amber-500/20 transition-all duration-300 group"
          >
            <Rocket className="w-4 h-4 group-hover:animate-bounce" />
            <span>Alpha Build 1.200 released — Filesystem, 640×480, 30 fixes</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="text-foreground">Gamer</span>
            <span className="text-gaming relative">
              OS
              <motion.span
                className="absolute -right-4 -top-2"
                animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Sparkles className="w-6 h-6 text-cyan-400" />
              </motion.span>
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p 
          className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          The next-generation operating system that runs 
          <span className="text-cyan-400 font-medium"> Windows</span>,
          <span className="text-purple-400 font-medium"> Linux</span>, and
          <span className="text-pink-400 font-medium"> Android</span> apps seamlessly.
        </motion.p>

        {/* Platform icons */}
        <motion.div 
          className="flex items-center justify-center gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {[
            { icon: Monitor, label: "Windows Apps", color: "cyan" },
            { icon: Terminal, label: "Linux Apps", color: "purple" },
            { icon: Smartphone, label: "Android APKs", color: "pink" },
          ].map((platform, index) => (
            <motion.div 
              key={platform.label}
              className="flex flex-col items-center gap-2 group cursor-default"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-${platform.color}-400/10 border border-${platform.color}-400/30 flex items-center justify-center transition-all duration-300 group-hover:bg-${platform.color}-400/20 group-hover:border-${platform.color}-400/50`}
                style={{
                  boxShadow: `0 0 20px hsl(${platform.color === 'cyan' ? '180' : platform.color === 'purple' ? '280' : '320'} 100% 50% / 0.2)`
                }}
              >
                <platform.icon className={`w-6 h-6 text-${platform.color}-400`} />
              </div>
              <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">{platform.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.div 
            whileHover={{ scale: 1.02 }} 
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              size="lg" 
              asChild 
              className="btn-neon min-w-[200px] h-14 text-base font-semibold border-0"
            >
              <Link to="/download">
                <Download className="w-5 h-5 mr-2" />
                <span className="relative z-10">Download</span>
              </Link>
            </Button>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.02 }} 
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="min-w-[200px] h-14 text-base font-semibold border-2 border-white/20 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300"
            >
              <Link to="/about">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Preview Window */}
        <ScrollReveal delay={0.3}>
          <div className="mt-20 max-w-4xl mx-auto">
            <motion.div 
              className="relative"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow effect behind */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-purple-600/20 to-pink-500/20 rounded-2xl blur-xl" />
              
              <div className="relative glass-card overflow-hidden">
                {/* Window titlebar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs text-muted-foreground ml-2 font-mono">GamerOS Desktop — Alpha Build 1.200</span>
                </div>
                {/* Window content */}
                <div className="relative">
                  <img 
                    src={alphaPreview} 
                    alt="GamerOS 00m1 Alpha Preview - Desktop with Notepad, Settings, and Explorer apps" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
