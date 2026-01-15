import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  Clock,
  Bell
} from "lucide-react";

const Changelog = () => {
  const { version } = useParams<{ version: string }>();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link 
            to="/news" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to News
          </Link>

          {/* Coming Soon */}
          <div className="glass-card p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Changelog Not Available</h1>
              <p className="text-muted-foreground mb-2">
                {version ? `Changelog for "${version}" is not available.` : "No version specified."}
              </p>
              <p className="text-muted-foreground mb-8">
                GamerOS is currently in development. Changelogs will be available once we start releasing public builds.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild>
                  <Link to="/news">View News & Updates</Link>
                </Button>
                <Button variant="outline">
                  <Bell className="w-4 h-4 mr-2" />
                  Get Notified
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Changelog;
