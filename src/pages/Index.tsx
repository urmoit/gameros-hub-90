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
      {/* Development Notice Banner - Top of page */}
      <div className="bg-amber-500/20 border-2 border-amber-500 m-4 rounded-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-center gap-3 text-amber-700 dark:text-amber-300">
          <AlertTriangle className="h-6 w-6 flex-shrink-0" />
          <p className="text-base font-semibold text-center">
            ⚠️ GamerOS is currently in development. Downloads are not available yet.
          </p>
        </div>
      </div>
      <Header />
      <main>
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
