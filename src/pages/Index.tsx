import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import CompatibilitySection from "@/components/home/CompatibilitySection";
import StatsSection from "@/components/home/StatsSection";
import ContributorsSection from "@/components/home/ContributorsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
