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
  Info
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

          {/* Empty State */}
          <section className="py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="glass-card p-12 rounded-2xl text-center relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
                
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-10 h-10 text-muted-foreground" />
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-4">No Changelog Available Yet</h2>
                  
                  <p className="text-muted-foreground max-w-md mx-auto mb-8">
                    GamerOS is currently in early development. Version history and changelog entries will appear here once we release our first public version.
                  </p>

                  <div className="glass-card p-4 rounded-xl inline-flex items-start gap-3 text-left max-w-md mx-auto mb-8 border-primary/20">
                    <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Development is actively ongoing. Follow our{" "}
                      <Link to="/news" className="text-primary hover:underline">News page</Link>
                      {" "}for the latest commits and updates.
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-center gap-4">
                    <Button asChild>
                      <a href="https://github.com/urmoit/GamerOS" target="_blank" rel="noopener noreferrer">
                        <GitCommit className="w-4 h-4 mr-2" />
                        View GitHub
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/roadmap">
                        <Rocket className="w-4 h-4 mr-2" />
                        View Roadmap
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/changelog">
                        <FileText className="w-4 h-4 mr-2" />
                        Website Changelog
                      </Link>
                    </Button>
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
