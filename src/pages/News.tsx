import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Newspaper, 
  Calendar, 
  ArrowRight,
  Star,
  Tag,
  Clock
} from "lucide-react";

const latestRelease = {
  version: "Build 10",
  buildNumber: "0.0.0.2000",
  date: "January 11, 2026",
  highlights: [
    "Build system stability fixes",
    "Docker cross-compilation improvements",
    "Resolved duplicate function definitions",
    "Enhanced QEMU documentation",
  ],
};

const releases = [
  { version: "Build 10", date: "Jan 2026", type: "Maintenance", description: "Build system stability" },
  { version: "Build 9", date: "Jan 2025", type: "Major", description: "Android APK support" },
  { version: "Build 8", date: "Dec 2024", type: "Feature", description: "Linux binary compatibility" },
  { version: "Build 7", date: "Nov 2024", type: "Feature", description: "Windows app layer" },
  { version: "Build 6", date: "Oct 2024", type: "UI", description: "Fluent Design shell" },
  { version: "Build 5", date: "Sep 2024", type: "Core", description: "File system rewrite" },
  { version: "Build 4", date: "Aug 2024", type: "Core", description: "Process scheduler" },
  { version: "Build 3", date: "Jul 2024", type: "Core", description: "Memory management" },
  { version: "Build 2", date: "Jun 2024", type: "Core", description: "Basic kernel" },
  { version: "Build 1", date: "May 2024", type: "Initial", description: "UEFI bootloader" },
];

const upcomingFeatures = [
  { title: "Advanced Graphics", timeline: "Q1 2026", description: "Enhanced VGA rendering and GPU optimization" },
  { title: "Hardware Drivers", timeline: "Q2 2026", description: "Expanded hardware compatibility" },
  { title: "UI Framework", timeline: "Q3 2026", description: "Fluent Design window system" },
  { title: "Process Manager", timeline: "Q4 2026", description: "Advanced process scheduling" },
];

const News = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Newspaper className="w-4 h-4" />
              Latest Updates
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              News & Releases
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay up to date with the latest GamerOS developments, releases, and announcements.
            </p>
          </div>
        </section>

        {/* Latest Release */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              
              <div className="relative grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-primary">Latest Release</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-1">{latestRelease.version}</h2>
                  <p className="text-sm font-mono text-primary/80 mb-1">{latestRelease.buildNumber}</p>
                  <p className="text-muted-foreground mb-6">{latestRelease.date}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {latestRelease.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-4">
                    <Button asChild>
                      <Link to="/download">Download Now</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to={`/news/build-10`}>
                        View Changelog
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="glass-card p-6">
                  <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/10 to-secondary flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl font-bold text-primary">10</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Build 10</p>
                      <p className="text-xs font-mono text-muted-foreground/70 mt-1">v0.0.0.2000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Release Timeline */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Release History</h2>
            
            <div className="grid gap-4">
              {releases.map((release, i) => (
                <Link 
                  key={i} 
                  to={`/news/${release.version.toLowerCase().replace(" ", "-")}`}
                  className="glass-card p-4 fluent-hover flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary">{i === 0 ? "9" : 9 - i}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{release.version}</h3>
                      <span className="px-2 py-0.5 rounded-full bg-secondary text-xs">{release.type}</span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{release.description}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground flex-shrink-0">
                    <Calendar className="w-4 h-4" />
                    {release.date}
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">What's Next</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {upcomingFeatures.map((feature, i) => (
                <div key={i} className="glass-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm text-primary font-medium">{feature.timeline}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default News;
