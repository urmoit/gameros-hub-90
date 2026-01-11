import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Monitor, Smartphone, Terminal } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Windows 11 Inspired Design
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-foreground">Gamer</span>
          <span className="text-primary">OS</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
          A modern x86_64 operating system that runs 
          <span className="text-foreground font-medium"> Windows</span>,
          <span className="text-foreground font-medium"> Linux</span>, and
          <span className="text-foreground font-medium"> Android</span> apps seamlessly.
        </p>

        {/* Platform icons */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Monitor className="w-5 h-5" />
            <span className="text-sm">Windows Apps</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Terminal className="w-5 h-5" />
            <span className="text-sm">Linux Apps</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Smartphone className="w-5 h-5" />
            <span className="text-sm">Android APKs</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild className="min-w-[180px]">
            <Link to="/download">
              <Download className="w-5 h-5 mr-2" />
              Download
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="min-w-[180px]">
            <Link to="/about">
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>

        {/* Preview Window */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="glass-card overflow-hidden fluent-shadow">
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
              <div className="text-center">
                <div className="w-24 h-24 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl font-bold text-primary">G</span>
                </div>
                <p className="text-muted-foreground">Modern. Fast. Universal.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
