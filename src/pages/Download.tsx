import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Download as DownloadIcon, 
  Monitor, 
  HardDrive,
  Cpu,
  Server,
  Cloud,
  Box,
  Check,
  Terminal,
  FileDown,
  ExternalLink
} from "lucide-react";

const requirements = {
  minimum: [
    { label: "Processor", value: "x86_64 CPU, 2 cores" },
    { label: "Memory", value: "2 GB RAM" },
    { label: "Storage", value: "10 GB available" },
    { label: "Graphics", value: "VGA compatible" },
    { label: "Boot", value: "UEFI firmware" },
  ],
  recommended: [
    { label: "Processor", value: "x86_64 CPU, 4+ cores" },
    { label: "Memory", value: "8 GB RAM" },
    { label: "Storage", value: "50 GB SSD" },
    { label: "Graphics", value: "GPU with 2GB VRAM" },
    { label: "Boot", value: "UEFI with Secure Boot" },
  ],
};

const platforms = [
  { icon: Box, name: "VirtualBox", description: "Recommended for testing" },
  { icon: Server, name: "VMware", description: "Full compatibility" },
  { icon: Monitor, name: "Hyper-V", description: "Windows hosts" },
  { icon: Cloud, name: "QEMU", description: "Linux hosts" },
  { icon: HardDrive, name: "Real Hardware", description: "Experimental" },
];

const previousVersions = [
  { version: "Build 8", date: "Dec 2024", size: "512 MB" },
  { version: "Build 7", date: "Nov 2024", size: "480 MB" },
  { version: "Build 6", date: "Oct 2024", size: "420 MB" },
];

const Download = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <DownloadIcon className="w-4 h-4" />
              Download Center
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Download GamerOS
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get the latest build and start exploring the future of operating systems.
            </p>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">System Requirements</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold">Minimum</h3>
                </div>
                <ul className="space-y-3">
                  {requirements.minimum.map((req, i) => (
                    <li key={i} className="flex justify-between py-2 border-b border-border last:border-0">
                      <span className="text-muted-foreground">{req.label}</span>
                      <span className="font-medium">{req.value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card p-6 border-primary/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Recommended</h3>
                </div>
                <ul className="space-y-3">
                  {requirements.recommended.map((req, i) => (
                    <li key={i} className="flex justify-between py-2 border-b border-border last:border-0">
                      <span className="text-muted-foreground">{req.label}</span>
                      <span className="font-medium">{req.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4">Supported Platforms</h2>
            <p className="text-center text-muted-foreground mb-12">
              We recommend testing in a virtual machine first
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {platforms.map((platform, i) => (
                <div key={i} className="glass-card p-4 text-center fluent-hover">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <platform.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-medium text-sm">{platform.name}</h4>
                  <p className="text-xs text-muted-foreground">{platform.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Latest Build */}
              <div className="lg:col-span-2 glass-card p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
                
                <div className="relative">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-1 rounded-full bg-green-500/10 text-green-600 text-xs font-medium">Latest</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Build 9</h3>
                  <p className="text-muted-foreground mb-6">Released January 2025 • 550 MB</p>

                  <ul className="space-y-2 mb-8">
                    {["Android APK runtime", "Windows compatibility layer", "Linux binary support", "Fluent Design UI"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-4">
                    <Button size="lg">
                      <FileDown className="w-5 h-5 mr-2" />
                      Download ISO
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link to="/news/build-9">
                        View Changelog
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Previous Versions */}
              <div className="glass-card p-6">
                <h3 className="font-semibold mb-4">Previous Versions</h3>
                <div className="space-y-3">
                  {previousVersions.map((version, i) => (
                    <div key={i} className="p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium">{version.version}</span>
                        <span className="text-xs text-muted-foreground">{version.size}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">{version.date}</span>
                        <button className="text-xs text-primary hover:underline">Download</button>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="w-full mt-4" asChild>
                  <Link to="/all-versions">View All Versions</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Getting Started</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-card p-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <span className="font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold mb-2">Download</h3>
                <p className="text-sm text-muted-foreground mb-4">Get the latest ISO file from our download section.</p>
                <code className="block p-3 rounded-lg bg-secondary text-xs overflow-x-auto">
                  gameros-build9-x64.iso
                </code>
              </div>

              <div className="glass-card p-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <span className="font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold mb-2">Create VM</h3>
                <p className="text-sm text-muted-foreground mb-4">Set up a virtual machine with UEFI boot enabled.</p>
                <code className="block p-3 rounded-lg bg-secondary text-xs overflow-x-auto">
                  Enable UEFI • 4GB RAM • 2 CPUs
                </code>
              </div>

              <div className="glass-card p-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <span className="font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold mb-2">Boot & Explore</h3>
                <p className="text-sm text-muted-foreground mb-4">Boot from the ISO and explore GamerOS.</p>
                <code className="block p-3 rounded-lg bg-secondary text-xs overflow-x-auto">
                  Press any key to boot...
                </code>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Download;
