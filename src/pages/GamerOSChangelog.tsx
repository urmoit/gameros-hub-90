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
  FileText,
  Clock,
  Rocket,
  Info,
  Bug
} from "lucide-react";

const GamerOSChangelog = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative pt-32 pb-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-primary/5" />
            <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <Link 
                to="/news" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to News
              </Link>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Badge variant="outline" className="mb-6 px-4 py-2 text-sm border-emerald-500/30 bg-emerald-500/5">
                  <GitCommit className="w-4 h-4 mr-2" />
                  GamerOS Changelog
                </Badge>
                
                <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                  Version{" "}
                  <span className="bg-gradient-to-r from-emerald-500 via-primary to-cyan-500 bg-clip-text text-transparent">
                    History
                  </span>
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-2xl">
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
                transition={{ delay: 0.1 }}
                className="glass-card p-6 rounded-2xl border-amber-500/20 bg-gradient-to-r from-amber-500/5 to-orange-500/5"
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shrink-0">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Pre-Alpha Development</h3>
                      <p className="text-sm text-muted-foreground">
                        Currently in heavy bug-fixing phase. Alpha release coming soon.
                      </p>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="shrink-0">
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
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-6">Development Progress</h2>
                
                <div className="space-y-4">
                  {/* Latest Update */}
                  <div className="glass-card p-6 rounded-2xl border-l-4 border-l-amber-500">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <Badge className="mb-2 bg-amber-500/10 text-amber-500 border-amber-500/20">In Progress</Badge>
                        <h3 className="text-xl font-semibold">Road to Alpha</h3>
                        <p className="text-sm text-muted-foreground">February 7, 2026</p>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-amber-500">65%</span>
                        <p className="text-xs text-muted-foreground">Complete</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Entering heavy bug-fixing phase to resolve every known issue before the first public Alpha release.
                      Focus areas: kernel stability, graphics, input systems, and UI polish.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span>VESA 32-bit graphics</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span>XP Luna desktop</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span>Notepad app</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span>USB 1.0-3.0 stack</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                        <span>Bug fixes in progress</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                        <span>Alpha release pending</span>
                      </div>
                    </div>
                  </div>

                  {/* Previous Milestone */}
                  <div className="glass-card p-6 rounded-2xl border-l-4 border-l-emerald-500">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <Badge className="mb-2 bg-emerald-500/10 text-emerald-500 border-emerald-500/20">Completed</Badge>
                        <h3 className="text-xl font-semibold">Windows XP Transformation</h3>
                        <p className="text-sm text-muted-foreground">February 6, 2026</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Major architectural upgrade completed. Transitioned from legacy 16-color VGA to modern 32-bit VESA,
                      implemented XP Luna desktop environment with Notepad app, and added USB stack support.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">VESA True Color</Badge>
                      <Badge variant="outline">Double Buffering</Badge>
                      <Badge variant="outline">VMware Mouse</Badge>
                      <Badge variant="outline">USB Support</Badge>
                      <Badge variant="outline">Kernel Rewrite</Badge>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Coming Soon Section */}
          <section className="py-16 bg-secondary/30">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-2xl font-bold mb-4">What to Expect</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Once GamerOS reaches its first milestone, you'll find detailed changelogs including:
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                {[
                  { title: "Version Numbers", description: "Semantic versioning for each release" },
                  { title: "Feature Lists", description: "Detailed breakdown of new features" },
                  { title: "Bug Fixes", description: "All resolved issues and improvements" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card p-6 rounded-xl"
                  >
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default GamerOSChangelog;
