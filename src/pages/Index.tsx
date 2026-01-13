import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import CompatibilitySection from "@/components/home/CompatibilitySection";
import StatsSection from "@/components/home/StatsSection";
import ContributorsSection from "@/components/home/ContributorsSection";
import CTASection from "@/components/home/CTASection";
import { AlertTriangle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Development Notice Banner */}
        <div className="bg-amber-500/10 border-b border-amber-500/20">
          <div className="container mx-auto px-4 py-3 flex items-center justify-center gap-2 text-amber-600 dark:text-amber-400">
            <AlertTriangle className="h-5 w-5 flex-shrink-0" />
            <p className="text-sm font-medium text-center">
              GamerOS is currently in development. Downloads are not available yet.
            </p>
          </div>
        </div>
        <HeroSection />
        <FeaturesSection />
        <CompatibilitySection />
        <StatsSection />
        <ContributorsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
