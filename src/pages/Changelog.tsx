import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  Calendar, 
  Download,
  Check,
  Bug,
  Zap,
  Wrench
} from "lucide-react";

const changelogs: Record<string, {
  version: string;
  date: string;
  summary: string;
  features: string[];
  improvements: string[];
  bugfixes: string[];
  technical: string[];
}> = {
  "build-9": {
    version: "Build 9",
    date: "January 2025",
    summary: "Major release introducing Android APK support and a redesigned Settings application.",
    features: [
      "Android APK runtime - run mobile apps on desktop",
      "Completely redesigned Settings app with Fluent Design",
      "New app switcher with live previews",
      "Improved file manager with tabs support",
    ],
    improvements: [
      "Windows compatibility layer performance boost",
      "Reduced memory footprint by 15%",
      "Faster boot times",
      "Better touch screen support",
    ],
    bugfixes: [
      "Fixed window focus issues",
      "Resolved file copy dialog freezing",
      "Fixed taskbar auto-hide behavior",
    ],
    technical: [
      "Updated to Rust 1.75 for core components",
      "New IPC mechanism for app communication",
      "Improved syscall handling",
    ],
  },
  "build-8": {
    version: "Build 8",
    date: "December 2024",
    summary: "Added Linux binary compatibility layer for running native Linux applications.",
    features: [
      "Linux binary compatibility layer",
      "Support for ELF executables",
      "Linux syscall translation",
      "Basic package compatibility",
    ],
    improvements: [
      "Process scheduling optimization",
      "Memory allocation improvements",
      "File system caching",
    ],
    bugfixes: [
      "Fixed memory leaks in driver subsystem",
      "Resolved boot failures on certain hardware",
    ],
    technical: [
      "New compatibility layer architecture",
      "Improved kernel stability",
    ],
  },
};

const defaultChangelog = {
  version: "Unknown Build",
  date: "Unknown",
  summary: "Changelog not available for this version.",
  features: [],
  improvements: [],
  bugfixes: [],
  technical: [],
};

const Changelog = () => {
  const { version } = useParams<{ version: string }>();
  const changelog = changelogs[version || ""] || defaultChangelog;

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

          {/* Header */}
          <div className="glass-card p-8 mb-8">
            <h1 className="text-4xl font-bold mb-2">{changelog.version}</h1>
            <div className="flex items-center gap-4 text-muted-foreground mb-6">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {changelog.date}
              </span>
            </div>
            <p className="text-lg text-muted-foreground mb-6">{changelog.summary}</p>
            <Button>
              <Download className="w-4 h-4 mr-2" />
              Download {changelog.version}
            </Button>
          </div>

          {/* Changelog sections */}
          <div className="space-y-6">
            {changelog.features.length > 0 && (
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-green-500" />
                  </div>
                  <h2 className="text-xl font-semibold">New Features</h2>
                </div>
                <ul className="space-y-2">
                  {changelog.features.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {changelog.improvements.length > 0 && (
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold">Improvements</h2>
                </div>
                <ul className="space-y-2">
                  {changelog.improvements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {changelog.bugfixes.length > 0 && (
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                    <Bug className="w-5 h-5 text-orange-500" />
                  </div>
                  <h2 className="text-xl font-semibold">Bug Fixes</h2>
                </div>
                <ul className="space-y-2">
                  {changelog.bugfixes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {changelog.technical.length > 0 && (
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                    <span className="text-muted-foreground font-mono text-sm">&lt;/&gt;</span>
                  </div>
                  <h2 className="text-xl font-semibold">Technical Changes</h2>
                </div>
                <ul className="space-y-2">
                  {changelog.technical.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Changelog;
