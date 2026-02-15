import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Archive, 
  Download,
  ArrowRight,
  Tag,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const versions = [
  {
    version: "00m1-alpha",
    build: "1.200",
    date: "February 15, 2026",
    label: "Latest",
    downloadUrl: "https://github.com/urmoit/GamerOS/releases/download/00m1-alpha-Build-1.200/GamerOS_Alpha_Build_1.200.iso",
    filename: "GamerOS_Alpha_Build_1.200.iso",
    highlights: ["Filesystem integration", "640×480 mode", "30 fixes", "File Explorer & Settings"],
  },
  {
    version: "00m1-alpha",
    build: "1.100",
    date: "February 10, 2026",
    label: "First Alpha",
    downloadUrl: "https://github.com/urmoit/gameros-hub-90/releases/download/00m1-alpha-Release-1/GamerOS-00m1-alpha-Release-1.iso",
    filename: "GamerOS-00m1-alpha-Release-1.iso",
    highlights: ["XP-style shell", "Notepad app", "VMware hardening", "Kernel fixes"],
  },
];

const AllVersions = () => {
  return (
    <div className="min-h-screen bg-[hsl(225_25%_6%)]">
      <Header />
      <main className="pt-24 pb-16">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(180_100%_50%)]/10 border border-[hsl(180_100%_50%)]/30 text-[hsl(180_100%_50%)] text-sm font-medium mb-6">
              <Archive className="w-4 h-4" />
              Version Archive
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              All Versions
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Download any released version of GamerOS.
            </p>
          </div>
        </section>

        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            {versions.map((v, i) => (
              <div key={i} className="glass-card glass-card-hover p-6 rounded-2xl relative overflow-hidden group">
                {i === 0 && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[hsl(180_100%_50%)] to-[hsl(280_100%_60%)]" />
                )}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge className="bg-[hsl(180_100%_50%)]/10 text-[hsl(180_100%_50%)] border-[hsl(180_100%_50%)]/30">
                        <Tag className="w-3 h-3 mr-1" />
                        {v.version}
                      </Badge>
                      <Badge className="bg-[hsl(280_100%_60%)]/10 text-[hsl(280_100%_60%)] border-[hsl(280_100%_60%)]/30">
                        Build {v.build}
                      </Badge>
                      {i === 0 && (
                        <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30">
                          {v.label}
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/50 mb-3">
                      <Calendar className="w-3.5 h-3.5" />
                      {v.date}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {v.highlights.map((h, j) => (
                        <span key={j} className="text-xs px-2 py-1 rounded bg-white/5 text-white/50">{h}</span>
                      ))}
                    </div>
                  </div>
                  <Button asChild className="btn-neon border-0 shrink-0 gap-2">
                    <a href={v.downloadUrl} target="_blank" rel="noopener noreferrer">
                      <Download className="w-4 h-4" />
                      Download
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10 gap-2">
              <Link to="/gameros-changelog">
                <ArrowRight className="w-4 h-4" />
                View Full Changelog
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AllVersions;
