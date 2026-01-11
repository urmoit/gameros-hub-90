import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Archive, 
  Calendar, 
  Download,
  Filter,
  ExternalLink
} from "lucide-react";

const allVersions = [
  { version: "Build 9", date: "Jan 2025", size: "550 MB", type: "stable", highlights: ["Android APK support", "Settings redesign"] },
  { version: "Build 8", date: "Dec 2024", size: "512 MB", type: "stable", highlights: ["Linux binary compatibility", "Process improvements"] },
  { version: "Build 7", date: "Nov 2024", size: "480 MB", type: "stable", highlights: ["Windows app layer", "API expansion"] },
  { version: "Build 6", date: "Oct 2024", size: "420 MB", type: "beta", highlights: ["Fluent Design shell", "Window manager"] },
  { version: "Build 5", date: "Sep 2024", size: "380 MB", type: "beta", highlights: ["File system rewrite", "NTFS support"] },
  { version: "Build 4", date: "Aug 2024", size: "320 MB", type: "alpha", highlights: ["Process scheduler", "Multitasking"] },
  { version: "Build 3", date: "Jul 2024", size: "280 MB", type: "alpha", highlights: ["Memory management", "Virtual memory"] },
  { version: "Build 2", date: "Jun 2024", size: "200 MB", type: "alpha", highlights: ["Basic kernel", "System calls"] },
  { version: "Build 1", date: "May 2024", size: "120 MB", type: "prototype", highlights: ["UEFI bootloader", "Initial boot"] },
];

const AllVersions = () => {
  const [filter, setFilter] = useState<string>("all");

  const filteredVersions = filter === "all" 
    ? allVersions 
    : allVersions.filter(v => v.type === filter);

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
              Complete archive of all GamerOS builds from the beginning.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-primary">9</div>
                <div className="text-sm text-muted-foreground">Total Builds</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-green-500">3</div>
                <div className="text-sm text-muted-foreground">Stable</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-yellow-500">2</div>
                <div className="text-sm text-muted-foreground">Beta</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-muted-foreground">4</div>
                <div className="text-sm text-muted-foreground">Alpha/Prototype</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter & List */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter buttons */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <Filter className="w-5 h-5 text-muted-foreground" />
              {["all", "stable", "beta", "alpha", "prototype"].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    filter === type
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>

            {/* Version grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVersions.map((version, i) => (
                <div key={i} className="glass-card p-6 fluent-hover">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{version.version}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      version.type === "stable" ? "bg-green-500/10 text-green-500" :
                      version.type === "beta" ? "bg-yellow-500/10 text-yellow-500" :
                      "bg-secondary text-muted-foreground"
                    }`}>
                      {version.type}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {version.date}
                    </span>
                    <span>{version.size}</span>
                  </div>

                  <ul className="space-y-1 mb-6">
                    {version.highlights.map((h, hi) => (
                      <li key={hi} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                    <Button size="sm" variant="ghost" asChild>
                      <Link to={`/news/${version.version.toLowerCase().replace(" ", "-")}`}>
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
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

export default AllVersions;
