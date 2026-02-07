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
  ExternalLink,
  GitBranch,
  Hammer,
  Sparkles,
} from "lucide-react";

const bugCategories = [
  {
    category: "Kernel & Memory",
    icon: Zap,
    color: "from-orange-500 to-red-500",
    bugs: [
      "Memory leaks in graphics subsystem",
      "Page fault handling edge cases",
      "Interrupt descriptor table alignment",
      "Stack overflow protection",
    ],
  },
  {
    category: "Graphics & Display",
    icon: Target,
    color: "from-blue-500 to-cyan-500",
    bugs: [
      "VESA mode switching artifacts",
      "Cursor flickering on rapid movement",
      "Double buffer synchronization",
      "Color palette corruption on restore",
    ],
  },
  {
    category: "Input & HID",
    icon: Hammer,
    color: "from-purple-500 to-pink-500",
    bugs: [
      "USB mouse detection timing",
      "Keyboard repeat rate inconsistency",
      "VMware absolute mouse drift",
      "PS/2 controller initialization",
    ],
  },
  {
    category: "Desktop & UI",
    icon: Sparkles,
    color: "from-green-500 to-emerald-500",
    bugs: [
      "Notepad text editing limitations",
      "Start menu not functional yet",
      "Desktop icons static only",
      "Window manager incomplete",
    ],
  },
];

const alphaGoals = [
  { label: "Bug Resolution", target: "Fix critical bugs (graphics, input, kernel)", status: "In Progress" },
  { label: "Stability Tests", target: "Stable boot on QEMU, VMware, VirtualBox", status: "Pending" },
  { label: "Build Verification", target: "Clean builds with Docker", status: "In Progress" },
  { label: "Documentation", target: "Alpha release notes", status: "Pending" },
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
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5" />
            <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/15 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl animate-pulse" />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <Link
                to="/news"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to News
              </Link>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 px-4 py-1.5 text-sm font-medium">
                    <Bug className="w-3.5 h-3.5 mr-2" />
                    Bug Fix Sprint
                  </Badge>
                  <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary px-3 py-1">
                    <Rocket className="w-3.5 h-3.5 mr-1" />
                    Alpha Coming Soon
                  </Badge>
                  <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    February 7, 2026
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  The Road to
                  <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                    GamerOS Alpha Release
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground max-w-3xl mb-10">
                  We're entering a heavy bug-fixing phase to resolve every known issue before 
                  the first public Alpha. Every bug fixed brings us closer to a stable release.
                </p>

                {/* Progress Overview */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="glass-card p-6 rounded-2xl max-w-2xl border-amber-500/20"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                        <Target className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="font-medium">Alpha Preparation</span>
                        <p className="text-xs text-muted-foreground">Bug fix sprint progress</p>
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-amber-500">{progressValue}%</span>
                  </div>
                  <Progress value={progressValue} className="h-3 mb-4" />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Phase: Heavy Bug Fixing</span>
                    <span className="text-emerald-500 font-medium">On Track</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Alpha Goals Section */}
          <section className="py-16 border-y border-border/50 bg-card/30">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                  <Rocket className="w-6 h-6 text-primary" />
                  Alpha Release Goals
                </h2>
                <p className="text-muted-foreground">
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
                    transition={{ delay: i * 0.05 }}
                    className="glass-card p-5 rounded-xl"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold">{goal.label}</h3>
                      <Badge
                        variant="outline"
                        className={
                          goal.status === "In Progress"
                            ? "border-amber-500/30 bg-amber-500/10 text-amber-500"
                            : "border-muted bg-muted text-muted-foreground"
                        }
                      >
                        {goal.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{goal.target}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Bug Categories Section */}
          <section className="py-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                  <Bug className="w-6 h-6 text-red-500" />
                  Current Bug Focus Areas
                </h2>
                <p className="text-muted-foreground">
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
                    className="glass-card p-6 rounded-2xl"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center`}>
                        <cat.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold">{cat.category}</h3>
                    </div>
                    <ul className="space-y-2">
                      {cat.bugs.map((bug, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                          <span>{bug}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* What Alpha Means */}
          <section className="py-16 bg-gradient-to-br from-primary/5 via-transparent to-amber-500/5">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-amber-500 flex items-center justify-center">
                    <GitBranch className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">What to Expect from Alpha</h2>
                    <p className="text-sm text-muted-foreground">First public preview release</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="p-4 rounded-xl bg-background/50">
                    <CheckCircle className="w-6 h-6 text-emerald-500 mb-2" />
                    <h4 className="font-medium mb-1">Boot & Run</h4>
                    <p className="text-sm text-muted-foreground">
                      Stable boot on QEMU, VMware, and VirtualBox with full graphics
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-background/50">
                    <CheckCircle className="w-6 h-6 text-emerald-500 mb-2" />
                    <h4 className="font-medium mb-1">XP Desktop</h4>
                    <p className="text-sm text-muted-foreground">
                      Complete Luna-themed desktop with working apps
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-background/50">
                    <CheckCircle className="w-6 h-6 text-emerald-500 mb-2" />
                    <h4 className="font-medium mb-1">Basic Apps</h4>
                    <p className="text-sm text-muted-foreground">
                      Notepad and other simple apps for testing
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <p className="text-sm text-amber-600 dark:text-amber-400">
                    <strong>Note:</strong> Alpha means "feature incomplete but stable." Expect bugs, 
                    missing features, and rough edges. It's a preview for brave testers and contributors.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 border-t border-border/50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4">Want to Help?</h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  We're looking for testers, bug reporters, and contributors. 
                  Join us on GitHub to track progress and get notified when Alpha drops.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="gap-2">
                    <a
                      href="https://github.com/urmoit/GamerOS/issues"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Bug className="w-4 h-4" />
                      View Bug Tracker
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="gap-2">
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
