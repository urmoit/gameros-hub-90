import { motion } from "framer-motion";
import alphaPreview from "@/assets/alpha-preview.png";
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
    gradient: "  ",
    glowColor: "",
    borderColor: "border-border",
    iconBg: "bg-muted  ",
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
    gradient: "  ",
    glowColor: "",
    borderColor: "border-border",
    iconBg: "bg-muted  ",
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
    gradient: " via-fuchsia-500 ",
    glowColor: "",
    borderColor: "border-border",
    iconBg: "bg-muted  ",
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
    gradient: "  ",
    glowColor: "",
    borderColor: "border-border",
    iconBg: "bg-muted  ",
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
    color: " "
  },
  { 
    label: "Stability Tests", 
    target: "Stable boot on QEMU, VMware, VirtualBox", 
    status: "Pending",
    progress: 40,
    color: " "
  },
  { 
    label: "Build Verification", 
    target: "Clean builds with Docker", 
    status: "In Progress",
    progress: 80,
    color: " "
  },
  { 
    label: "Documentation", 
    target: "Alpha release notes", 
    status: "Pending",
    progress: 30,
    color: " "
  },
];

const AlphaRelease = () => {
  const progressValue = 65;

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-muted  via-transparent " />
            <div className="absolute inset-0 grid-pattern opacity-30" />
            
            {/* Glowing Orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-muted rounded-full hidden " />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-muted rounded-full hidden " />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-muted rounded-full hidden" />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <Link
                to="/news"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to News
              </Link>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <Badge className="bg-muted   text-foreground border-0 px-4 py-1.5 text-sm font-medium shadow-lg ">
                    <Bug className="w-3.5 h-3.5 mr-2" />
                    Bug Fix Sprint
                  </Badge>
                  <Badge 
                    variant="outline" 
                    className="border-border bg-muted text-primary px-3 py-1"
                  >
                    <Rocket className="w-3.5 h-3.5 mr-1" />
                    Alpha Released
                  </Badge>
                  <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    February 7, 2026
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-4xl font-bold mb-6 leading-tight">
                  <span className="text-foreground">The Road to</span>
                  <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2 text-gaming">
                    GamerOS Alpha Release
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground max-w-3xl mb-10">
                  We're entering a the first alpha release has shipped. Current focus is stabilization, validation, and polish for the next patch cycle.
                </p>

                {/* Progress Overview */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="glass-card p-6 rounded-lg max-w-2xl border-border shadow-xl "
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-muted   flex items-center justify-center shadow-lg ">
                        <Target className="w-6 h-6 text-foreground" />
                      </div>
                      <div>
                        <span className="font-medium text-foreground">Alpha Preparation</span>
                        <p className="text-xs text-muted-foreground">Bug fix sprint progress</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-3xl font-bold text-gaming">{progressValue}%</span>
                      <p className="text-xs text-muted-foreground">Complete</p>
                    </div>
                  </div>
                  
                  {/* Gaming Progress Bar */}
                  <div className="relative h-4 bg-muted rounded-full overflow-hidden mb-4">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progressValue}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="absolute inset-y-0 left-0 bg-muted    rounded-full"
                    >
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 bg-muted from-transparent  to-transparent animate-shimmer" />
                    </motion.div>
                    {/* Glow Effect */}
                    <div 
                      className="absolute inset-y-0 rounded-full blur-md bg-muted   opacity-50"
                      style={{ width: `${progressValue}%`, left: 0 }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Zap className="w-4 h-4 text-warning" />
                      Phase: Heavy Bug Fixing
                    </span>
                    <span className="text-success font-medium flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-success " />
                      On Track
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Alpha Preview Screenshot */}
          <section className="py-12 border-b border-border">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-8"
              >
                <h2 className="text-2xl font-bold text-foreground mb-2">Alpha Preview</h2>
                <p className="text-muted-foreground">GamerOS 00m1 desktop with Notepad, Settings, and File Explorer</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-lg overflow-hidden border border-border shadow-2xl "
              >
                <img 
                  src={alphaPreview} 
                  alt="GamerOS 00m1 Alpha Preview - Desktop with Notepad, Settings, and Explorer apps" 
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </section>

          {/* Alpha Goals Section */}
          <section className="py-12 border-y border-border bg-muted">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-muted   flex items-center justify-center">
                    <Rocket className="w-5 h-5 text-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Alpha Release Goals</h2>
                </div>
                <p className="text-muted-foreground ml-[52px]">
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
                    className="glass-card glass-card-hover p-5 rounded-lg group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {goal.label}
                      </h3>
                      <Badge
                        variant="outline"
                        className={
                          goal.status === "In Progress"
                            ? "border-border bg-muted text-primary"
                            : "border-border bg-muted text-primary"
                        }
                      >
                        {goal.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{goal.target}</p>
                    
                    {/* Goal Progress Bar */}
                    <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${goal.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 + 0.3 }}
                        className={`absolute inset-y-0 left-0 bg-muted ${goal.color} rounded-full`}
                      />
                    </div>
                    <div className="mt-2 text-right">
                      <span className="text-xs text-muted-foreground">{goal.progress}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Bug Categories Section */}
          <section className="py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-muted   flex items-center justify-center">
                    <Bug className="w-5 h-5 text-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Current Bug Focus Areas</h2>
                </div>
                <p className="text-muted-foreground ml-[52px]">
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
                    className={`glass-card glass-card-hover p-6 rounded-lg ${cat.borderColor} ${cat.glowColor} shadow-xl transition-all duration-300`}
                  >
                    <div className="flex items-center gap-4 mb-5">
                      <div className={`w-14 h-14 rounded-lg ${cat.iconBg} flex items-center justify-center shadow-lg ${cat.glowColor}`}>
                        <cat.icon className="w-7 h-7 text-foreground" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{cat.category}</h3>
                        <span className="text-xs text-muted-foreground">{cat.bugs.length} active issues</span>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {cat.bugs.map((bug, j) => (
                        <li 
                          key={j} 
                          className="flex items-start gap-3 text-sm text-muted-foreground p-2 rounded-lg bg-muted hover:bg-muted transition-colors"
                        >
                          <AlertTriangle className={`${`w-4 h-4 shrink-0 mt-0.5 bg-muted ${cat.gradient} bg-clip-text`} text-primary`}  />
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
          <section className="py-12 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-muted  via-transparent " />
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-muted rounded-full hidden -translate-y-1/2" />
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-muted rounded-full hidden -translate-y-1/2" />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-5 sm:p-6 rounded-lg border-border shadow-2xl "
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-lg bg-muted    flex items-center justify-center shadow-lg ">
                    <Gamepad2 className="w-7 h-7 text-foreground" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">What to Expect from Alpha</h2>
                    <p className="text-sm text-muted-foreground">First public preview release</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="p-5 rounded-lg bg-muted border border-border hover:border-border hover:bg-muted transition-all group">
                    <div className="w-12 h-12 rounded-lg bg-muted   flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-medium text-foreground mb-2">Boot & Run</h4>
                    <p className="text-sm text-muted-foreground">
                      Stable boot on QEMU, VMware, and VirtualBox with full graphics
                    </p>
                  </div>
                  
                  <div className="p-5 rounded-lg bg-muted border border-border hover:border-border hover:bg-muted transition-all group">
                    <div className="w-12 h-12 rounded-lg bg-muted   flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-medium text-foreground mb-2">XP Desktop</h4>
                    <p className="text-sm text-muted-foreground">
                      Complete Luna-themed desktop with working apps
                    </p>
                  </div>
                  
                  <div className="p-5 rounded-lg bg-muted border border-border hover:border-border hover:bg-muted transition-all group">
                    <div className="w-12 h-12 rounded-lg bg-muted   flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-medium text-foreground mb-2">Basic Apps</h4>
                    <p className="text-sm text-muted-foreground">
                      Notepad and other simple apps for testing
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-lg bg-muted   border border-border">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-warning shrink-0 mt-0.5" />
                    <p className="text-sm text-warning">
                      <strong className="text-warning">Note:</strong> Alpha means "feature incomplete but stable." Expect bugs, 
                      missing features, and rough edges. It's an early preview intended for testing and validation.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12 border-t border-border relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-muted  to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-muted   to-transparent hidden" />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border mb-6">
                  <span className="w-2 h-2 rounded-full bg-success " />
                  <span className="text-sm text-muted-foreground">Join the community</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                  Want to <span className="text-gaming-alt">Help?</span>
                </h2>
                <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
                  We're looking for testers and bug reporters. 
                  Join us on GitHub to track progress and get notified when Alpha drops.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    asChild 
                    size="lg" 
                    className="btn-solid gap-2 text-foreground border-0"
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
                    className="gap-2 border-border text-foreground hover:bg-muted hover:border-border"
                  >
                    <Link to="/download">
                      <ArrowRight className="w-4 h-4" />
                      Download Alpha
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

