import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/ui/PageTransition";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft,
  GitCommit,
  Rocket,
  Terminal,
  Cpu,
  Zap,
  Code2,
  Sparkles,
  Gamepad2
} from "lucide-react";

const GamerOSChangelog = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-[hsl(225_25%_6%)]">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section with Gaming Theme */}
          <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 grid-pattern opacity-30" />
            
            {/* Floating Orbs */}
            <motion.div 
              className="absolute top-20 left-[10%] w-72 h-72 rounded-full"
              style={{ 
                background: 'radial-gradient(circle, hsl(180 100% 50% / 0.3) 0%, transparent 70%)',
                filter: 'blur(40px)'
              }}
              animate={{
                y: [0, -30, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute top-40 right-[15%] w-96 h-96 rounded-full"
              style={{ 
                background: 'radial-gradient(circle, hsl(280 100% 60% / 0.25) 0%, transparent 70%)',
                filter: 'blur(50px)'
              }}
              animate={{
                y: [0, 20, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            <motion.div 
              className="absolute bottom-20 left-[30%] w-64 h-64 rounded-full"
              style={{ 
                background: 'radial-gradient(circle, hsl(320 100% 60% / 0.2) 0%, transparent 70%)',
                filter: 'blur(40px)'
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, 15, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />

            {/* Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none opacity-5">
              <div className="h-full w-full" style={{
                background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(180 100% 50% / 0.1) 2px, hsl(180 100% 50% / 0.1) 4px)'
              }} />
            </div>
            
            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <Link 
                to="/news" 
                className="group inline-flex items-center gap-2 text-[hsl(180_100%_50%)]/70 hover:text-[hsl(180_100%_50%)] mb-8 transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm uppercase tracking-wider">Back to News</span>
              </Link>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Gaming Badge */}
                <motion.div 
                  className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[hsl(180_100%_50%_/_0.3)] bg-[hsl(180_100%_50%_/_0.05)] backdrop-blur-sm"
                  whileHover={{ scale: 1.02, borderColor: 'hsl(180 100% 50% / 0.5)' }}
                >
                  <GitCommit className="w-4 h-4 text-[hsl(180_100%_50%)]" />
                  <span className="text-sm text-[hsl(180_100%_50%)] font-medium tracking-wide">GamerOS Changelog</span>
                  <span className="w-2 h-2 rounded-full bg-[hsl(180_100%_50%)] animate-pulse" />
                </motion.div>
                
                {/* Gaming Title */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  Version{" "}
                  <span className="text-gaming">
                    History
                  </span>
                </h1>
                
                <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
                  Track all development updates, new features, and bug fixes for GamerOS.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Alpha Progress Banner */}
          <section className="py-8">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="glass-card glass-card-hover p-6 rounded-2xl border border-[hsl(45_100%_50%_/_0.2)] relative overflow-hidden"
              >
                {/* Glow Effect */}
                <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-[hsl(45_100%_50%_/_0.1)] blur-3xl" />
                
                <div className="relative flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(45_100%_50%)] to-[hsl(30_100%_50%)] flex items-center justify-center shrink-0 shadow-lg shadow-[hsl(45_100%_50%_/_0.3)]">
                        <Rocket className="w-7 h-7 text-black" />
                      </div>
                      <motion.div 
                        className="absolute inset-0 rounded-xl bg-[hsl(45_100%_50%)]"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-white">Pre-Alpha Development</h3>
                      <p className="text-sm text-white/50">
                        Currently in heavy bug-fixing phase. Alpha release coming soon.
                      </p>
                    </div>
                  </div>
                  <Button 
                    asChild 
                    className="shrink-0 btn-neon border-0"
                  >
                    <Link to="/news/alpha-release" className="gap-2">
                      Read Update <ArrowLeft className="w-4 h-4 rotate-180" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Development Progress */}
          <section className="py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(280_100%_60%)] to-[hsl(320_100%_60%)] flex items-center justify-center">
                    <Terminal className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Development Progress</h2>
                </div>
                
                <div className="space-y-6">
                  {/* Latest Update - In Progress */}
                  <motion.div 
                    className="glass-card glass-card-hover p-6 rounded-2xl border-l-4 border-l-[hsl(45_100%_50%)] relative overflow-hidden"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    {/* Subtle Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(45_100%_50%_/_0.05)] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    
                    <div className="relative">
                      <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                        <div>
                          <Badge className="mb-3 bg-[hsl(45_100%_50%_/_0.15)] text-[hsl(45_100%_50%)] border-[hsl(45_100%_50%_/_0.3)] hover:bg-[hsl(45_100%_50%_/_0.25)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[hsl(45_100%_50%)] mr-2 animate-pulse" />
                            In Progress
                          </Badge>
                          <h3 className="text-xl font-semibold text-white">Road to Alpha</h3>
                          <p className="text-sm text-white/40 mt-1">February 7, 2026</p>
                        </div>
                        <div className="text-right">
                          <span className="text-3xl font-bold text-[hsl(45_100%_50%)]">65%</span>
                          <p className="text-xs text-white/40">Complete</p>
                        </div>
                      </div>
                      
                      {/* Glowing Progress Bar */}
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden mb-4">
                        <motion.div 
                          className="h-full rounded-full bg-gradient-to-r from-[hsl(45_100%_40%)] to-[hsl(45_100%_50%)]"
                          initial={{ width: 0 }}
                          animate={{ width: '65%' }}
                          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                          style={{ boxShadow: '0 0 20px hsl(45 100% 50% / 0.5)' }}
                        />
                      </div>
                      
                      <p className="text-white/60 mb-5 leading-relaxed">
                        Entering heavy bug-fixing phase to resolve every known issue before the first public Alpha release.
                        Focus areas: kernel stability, graphics, input systems, and UI polish.
                      </p>
                      
                      <div className="grid sm:grid-cols-2 gap-3 text-sm">
                        {[
                          { label: "VESA 32-bit graphics", status: "done" },
                          { label: "XP Luna desktop", status: "done" },
                          { label: "Notepad app", status: "done" },
                          { label: "USB 1.0-3.0 stack", status: "done" },
                          { label: "Bug fixes in progress", status: "pending" },
                          { label: "Alpha release pending", status: "pending" },
                        ].map((item, i) => (
                          <motion.div 
                            key={i}
                            className="flex items-center gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + i * 0.05 }}
                          >
                            <div className={`w-2 h-2 rounded-full ${
                              item.status === 'done' 
                                ? 'bg-[hsl(180_100%_50%)] shadow-[0_0_8px_hsl(180_100%_50%)]' 
                                : 'bg-[hsl(45_100%_50%)] shadow-[0_0_8px_hsl(45_100%_50%)]'
                            }`} />
                            <span className={item.status === 'done' ? 'text-white/70' : 'text-white/50'}>
                              {item.label}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Previous Milestone - Completed */}
                  <motion.div 
                    className="glass-card glass-card-hover p-6 rounded-2xl border-l-4 border-l-[hsl(180_100%_50%)] relative overflow-hidden"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    {/* Subtle Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(180_100%_50%_/_0.05)] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    
                    <div className="relative">
                      <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                        <div>
                          <Badge className="mb-3 bg-[hsl(180_100%_50%_/_0.15)] text-[hsl(180_100%_50%)] border-[hsl(180_100%_50%_/_0.3)] hover:bg-[hsl(180_100%_50%_/_0.25)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[hsl(180_100%_50%)] mr-2" />
                            Completed
                          </Badge>
                          <h3 className="text-xl font-semibold text-white">Windows XP Transformation</h3>
                          <p className="text-sm text-white/40 mt-1">February 6, 2026</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-[hsl(180_100%_50%_/_0.2)] flex items-center justify-center">
                            <Sparkles className="w-4 h-4 text-[hsl(180_100%_50%)]" />
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-white/60 mb-5 leading-relaxed">
                        Major architectural upgrade completed. Transitioned from legacy 16-color VGA to modern 32-bit VESA,
                        implemented XP Luna desktop environment with Notepad app, and added USB stack support.
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {["VESA True Color", "Double Buffering", "VMware Mouse", "USB Support", "Kernel Rewrite"].map((tag, i) => (
                          <Badge 
                            key={i}
                            variant="outline" 
                            className="border-[hsl(180_100%_50%_/_0.3)] text-[hsl(180_100%_50%_/_0.9)] bg-[hsl(180_100%_50%_/_0.05)] hover:bg-[hsl(180_100%_50%_/_0.1)]"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Gaming CTA Section */}
          <section className="py-20 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(280_100%_60%_/_0.03)] to-transparent" />
            <motion.div 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
              style={{ 
                background: 'radial-gradient(circle, hsl(280 100% 60% / 0.15) 0%, transparent 60%)',
                filter: 'blur(60px)'
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Icon Stack */}
                <div className="flex justify-center gap-4 mb-8">
                  {[Code2, Cpu, Zap, Gamepad2].map((Icon, i) => (
                    <motion.div
                      key={i}
                      className="w-12 h-12 rounded-xl glass-card flex items-center justify-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                    >
                      <Icon className="w-5 h-5 text-[hsl(180_100%_50%)]" />
                    </motion.div>
                  ))}
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  <span className="text-gaming-alt">What to Expect</span>
                </h2>
                <p className="text-white/50 mb-10 max-w-xl mx-auto">
                  Once GamerOS reaches its first milestone, you'll find detailed changelogs including:
                </p>
                
                <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
                  {[
                    { 
                      title: "Version Numbers", 
                      description: "Semantic versioning for each release",
                      icon: Terminal,
                      color: "hsl(180 100% 50%)"
                    },
                    { 
                      title: "Feature Lists", 
                      description: "Detailed breakdown of new features",
                      icon: Sparkles,
                      color: "hsl(280 100% 60%)"
                    },
                    { 
                      title: "Bug Fixes", 
                      description: "All resolved issues and improvements",
                      icon: Code2,
                      color: "hsl(320 100% 60%)"
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 }}
                      whileHover={{ y: -5 }}
                      className="glass-card glass-card-hover p-6 rounded-xl group"
                    >
                      <div 
                        className="w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center transition-all duration-300"
                        style={{ 
                          background: `linear-gradient(135deg, ${item.color}20, ${item.color}10)`,
                          boxShadow: `0 0 20px ${item.color}20`
                        }}
                      >
                        <item.icon className="w-6 h-6 transition-colors" style={{ color: item.color }} />
                      </div>
                      <h3 className="font-semibold mb-2 text-white group-hover:text-[hsl(180_100%_50%)] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/40">{item.description}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Gaming CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    asChild
                    size="lg"
                    className="btn-neon text-base px-8 py-6 border-0"
                  >
                    <Link to="/download" className="gap-3">
                      <Gamepad2 className="w-5 h-5" />
                      Join the Alpha
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default GamerOSChangelog;
