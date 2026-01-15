import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Archive, 
  Clock,
  Bell
} from "lucide-react";
import { Button } from "@/components/ui/button";

const AllVersions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Archive className="w-4 h-4" />
              Version Archive
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              All Versions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Version archive will be available once GamerOS releases its first public build.
            </p>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
              
              <div className="relative">
                <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-12 h-12 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">No Versions Available Yet</h2>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                  GamerOS is currently in development. Once we release the first public build, 
                  all versions will be archived here for easy access.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
                  <div className="glass-card p-4 text-center">
                    <div className="text-2xl font-bold text-muted-foreground">0</div>
                    <div className="text-sm text-muted-foreground">Total Builds</div>
                  </div>
                  <div className="glass-card p-4 text-center">
                    <div className="text-2xl font-bold text-muted-foreground">0</div>
                    <div className="text-sm text-muted-foreground">Stable</div>
                  </div>
                  <div className="glass-card p-4 text-center">
                    <div className="text-2xl font-bold text-muted-foreground">0</div>
                    <div className="text-sm text-muted-foreground">Beta</div>
                  </div>
                  <div className="glass-card p-4 text-center">
                    <div className="text-2xl font-bold text-muted-foreground">0</div>
                    <div className="text-sm text-muted-foreground">Alpha</div>
                  </div>
                </div>

                <Button size="lg" variant="outline">
                  <Bell className="w-5 h-5 mr-2" />
                  Get Notified on Release
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AllVersions;
