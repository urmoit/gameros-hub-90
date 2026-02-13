import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/ui/PageTransition";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Bug,
  Target,
  Rocket,
  CheckCircle,
  AlertTriangle,
  Zap,
  ArrowRight,
  GitBranch,
  Hammer,
  Sparkles,
  Gamepad2,
  Cpu,
  Monitor,
  Keyboard,
  Layout,
} from "lucide-react";

const bugCategories = [
  {
    category: "Kernel & Memory",
    icon: Cpu,
    gradient: "from-orange-500 via-red-500 to-orange-600",
    glowColor: "shadow-orange-500/30",
    borderColor: "border-orange-500/30",
    iconBg: "bg-gradient-to-br from-orange-500 to-red-600",
    bugs: [
      "Memory leaks in graphics subsystem",
      "Page fault handling edge cases",
      "Interrupt descriptor table alignment",
      "Stack overflow protection",
    ],
  },
  {
    category: "Graphics & Display",
    icon: Monitor,
    gradient: "from-cyan-400 via-cyan-500 to-blue-500",
    glowColor: "shadow-cyan-500/30",
    borderColor: "border-cyan-500/30",
    iconBg: "bg-gradient-to-br from-cyan-400 to-blue-600",
    bugs: [
      "VESA mode switching artifacts",
      "Cursor flickering on rapid movement",
      "Double buffer synchronization",
      "Color palette corruption on restore",
    ],
  },
  {
    category: "Input & HID",
    icon: Keyboard,
    gradient: "from-purple-500 via-fuchsia-500 to-pink-500",
    glowColor: "shadow-purple-500/30",
    borderColor: "border-purple-500/30",
    iconBg: "bg-gradient-to-br from-purple-500 to-pink-600",
    bugs: [
      "USB mouse detection timing",
      "Keyboard repeat rate inconsistency",
      "VMware absolute mouse drift",
      "PS/2 controller initialization",
    ],
  },
  {
    category: "Desktop & UI",
    icon: Layout,
    gradient: "from-emerald-400 via-green-500 to-teal-500",
    glowColor: "shadow-emerald-500/30",
    borderColor: "border-emerald-500/30",
    iconBg: "bg-gradient-to-br from-emerald-400 to-teal-600",
    bugs: [
      "Notepad text editing limitations",
      "Start menu not functional yet",
      "Desktop icons static only",
      "Window manager incomplete",
    ],
  },
];

const alphaGoals = [
  { 
    label: "Bug Resolution", 
    target: "Fix critical bugs (graphics, input, kernel)", 
    status: "In Progress",
    progress: 65,
    color: "from-cyan-500 to-blue-500"
  },
  { 
    label: "Stability Tests", 
    target: "Stable boot on QEMU, VMware, VirtualBox", 
    status: "Pending",
    progress: 40,
    color: "from-purple-500 to-pink-500"
  },
  { 
    label: "Build Verification", 
    target: "Clean builds with Docker", 
    status: "In Progress",
    progress: 80,
    color: "from-emerald-500 to-teal-500"
  },
  { 
    label: "Documentation", 
    target: "Alpha release notes", 
    status: "Pending",
    progress: 30,
    color: "from-amber-500 to-orange-500"
  },
];

const AlphaRelease = () => {
  const progressValue = 65;

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-[hsl(225_25%_6%)]">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />
            <div className="absolute inset-0 grid-pattern opacity-30" />
            
            {/* Glowing Orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[120px]" />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <Link
                to="/news"
                className="inline-flex items-center gap-2 text-white/60 hover:text-cyan-400 mb-8 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to News
              </Link>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0 px-4 py-1.5 text-sm font-medium shadow-lg shadow-cyan-500/25">
                    <Bug className="w-3.5 h-3.5 mr-2" />
                    Bug Fix Sprint
                  </Badge>
                  <Badge 
                    variant="outline" 
                    className="border-purple-500/50 bg-purple-500/10 text-purple-300 px-3 py-1"
                  >
                    <Rocket className="w-3.5 h-3.5 mr-1" />
                    Alpha Coming Soon
                  </Badge>
                  <span className="text-sm text-white/50 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    February 7, 2026
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-white">The Road to</span>
                  <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2 text-gaming">
                    GamerOS Alpha Release
                  </span>
                </h1>

                <p className="text-xl text-white/60 max-w-3xl mb-10">
                  We're entering a heavy bug-fixing phase to resolve every known issue before 
                  the first public Alpha. Every bug fixed brings us closer to a stable release.
                </p>

                {/* Progress Overview */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="glass-card p-6 rounded-2xl max-w-2xl border-cyan-500/20 shadow-xl shadow-cyan-500/10"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="font-medium text-white">Alpha Preparation</span>
                        <p className="text-xs text-white/50">Bug fix sprint progress</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-3xl font-bold text-gaming">{progressValue}%</span>
                      <p className="text-xs text-white/50">Complete</p>
                    </div>
                  </div>
                  
                  {/* Gaming Progress Bar */}
                  <div className="relative h-4 bg-white/10 rounded-full overflow-hidden mb-4">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progressValue}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full"
                    >
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                    </motion.div>
                    {/* Glow Effect */}
                    <div 
                      className="absolute inset-y-0 rounded-full blur-md bg-gradient-to-r from-cyan-500 to-purple-500 opacity-50"
                      style={{ width: `${progressValue}%`, left: 0 }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/50 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-amber-400" />
                      Phase: Heavy Bug Fixing
                    </span>
                    <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      On Track
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Alpha Goals Section */}
          <section className="py-16 border-y border-white/10 bg-white/[0.02]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Rocket className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Alpha Release Goals</h2>
                </div>
                <p className="text-white/50 ml-[52px]">
                  What needs to be completed before the Alpha release
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-4">
                {alphaGoals.map((goal, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card glass-card-hover p-5 rounded-xl group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {goal.label}
                      </h3>
                      <Badge
                        variant="outline"
                        className={
                          goal.status === "In Progress"
                            ? "border-cyan-500/50 bg-cyan-500/10 text-cyan-400"
                            : "border-purple-500/30 bg-purple-500/10 text-purple-300"
                        }
                      >
                        {goal.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-white/50 mb-4">{goal.target}</p>
                    
                    {/* Goal Progress Bar */}
                    <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${goal.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 + 0.3 }}
                        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${goal.color} rounded-full`}
                      />
                    </div>
                    <div className="mt-2 text-right">
                      <span className="text-xs text-white/40">{goal.progress}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Bug Categories Section */}
          <section className="py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                    <Bug className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Current Bug Focus Areas</h2>
                </div>
                <p className="text-white/50 ml-[52px]">
                  These are the priority areas we're tackling in this sprint
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-6">
                {bugCategories.map((cat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`glass-card glass-card-hover p-6 rounded-2xl ${cat.borderColor} ${cat.glowColor} shadow-xl transition-all duration-300`}
                  >
                    <div className="flex items-center gap-4 mb-5">
                      <div className={`w-14 h-14 rounded-xl ${cat.iconBg} flex items-center justify-center shadow-lg ${cat.glowColor}`}>
                        <cat.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{cat.category}</h3>
                        <span className="text-xs text-white/40">{cat.bugs.length} active issues</span>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {cat.bugs.map((bug, j) => (
                        <li 
                          key={j} 
                          className="flex items-start gap-3 text-sm text-white/60 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                        >
                          <AlertTriangle className={`w-4 h-4 shrink-0 mt-0.5 bg-gradient-to-r ${cat.gradient} bg-clip-text`} style={{ color: i === 0 ? '#f97316' : i === 1 ? '#06b6d4' : i === 2 ? '#a855f7' : '#10b981' }} />
                          <span>{bug}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* What Alpha Means - Gaming Style */}
          <section className="py-20 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] -translate-y-1/2" />
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] -translate-y-1/2" />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl border-cyan-500/20 shadow-2xl shadow-cyan-500/5"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                    <Gamepad2 className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">What to Expect from Alpha</h2>
                    <p className="text-sm text-white/50">First public preview release</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all group">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h4 className="font-medium text-white mb-2">Boot & Run</h4>
                    <p className="text-sm text-white/50">
                      Stable boot on QEMU, VMware, and VirtualBox with full graphics
                    </p>
                  </div>
                  
                  <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all group">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-6 h-6 text-purple-400" />
                    </div>
                    <h4 className="font-medium text-white mb-2">XP Desktop</h4>
                    <p className="text-sm text-white/50">
                      Complete Luna-themed desktop with working apps
                    </p>
                  </div>
                  
                  <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-pink-500/30 hover:bg-pink-500/5 transition-all group">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500/20 to-pink-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-6 h-6 text-pink-400" />
                    </div>
                    <h4 className="font-medium text-white mb-2">Basic Apps</h4>
                    <p className="text-sm text-white/50">
                      Notepad and other simple apps for testing
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-200/80">
                      <strong className="text-amber-400">Note:</strong> Alpha means "feature incomplete but stable." Expect bugs, 
                      missing features, and rough edges. It's a preview for brave testers and contributors.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 border-t border-white/10 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-cyan-500/10 via-purple-500/10 to-transparent blur-[100px]" />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-sm text-white/60">Join the community</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                  Want to <span className="text-gaming-alt">Help?</span>
                </h2>
                <p className="text-white/50 mb-10 max-w-xl mx-auto">
                  We're looking for testers, bug reporters, and contributors. 
                  Join us on GitHub to track progress and get notified when Alpha drops.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    asChild 
                    size="lg" 
                    className="btn-neon gap-2 text-white border-0"
                  >
                    <a
                      href="https://github.com/urmoit/GamerOS/issues"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Bug className="w-4 h-4" />
                      View Bug Tracker
                    </a>
                  </Button>
                  
                  <Button 
                    asChild 
                    variant="outline" 
                    size="lg" 
                    className="gap-2 border-white/20 text-white hover:bg-white/10 hover:border-cyan-500/50"
                  >
                    <Link to="/roadmap">
                      <ArrowRight className="w-4 h-4" />
                      View Roadmap
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default AlphaRelease;
