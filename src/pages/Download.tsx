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
  Clock,
  Bell,
  GitCommit
} from "lucide-react";

const requirements = {
  minimum: [
    { label: "Processor", value: "Unknown" },
    { label: "Memory", value: "Unknown" },
    { label: "Storage", value: "Unknown" },
    { label: "Graphics", value: "Unknown" },
    { label: "Boot", value: "Unknown" },
  ],
  recommended: [
    { label: "Processor", value: "Unknown" },
    { label: "Memory", value: "Unknown" },
    { label: "Storage", value: "Unknown" },
    { label: "Graphics", value: "Unknown" },
    { label: "Boot", value: "Unknown" },
  ],
};

const platforms = [
  { icon: Box, name: "VirtualBox", description: "Supported", supported: true },
  { icon: Server, name: "VMware", description: "Supported", supported: true },
  { icon: Monitor, name: "Hyper-V", description: "Coming soon", supported: false },
  { icon: Cloud, name: "QEMU", description: "Supported", supported: true },
  { icon: HardDrive, name: "Real Hardware", description: "Coming soon", supported: false },
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
              We're working hard to bring you the next generation operating system. Stay tuned for updates!
            </p>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
              
              <div className="relative">
                <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-12 h-12 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                  GamerOS is currently in active development. We're building something special that will revolutionize how you use your computer. The first public release will be available soon.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button size="lg" disabled className="min-w-[200px]">
                    <DownloadIcon className="w-5 h-5 mr-2" />
                    Download Not Available
                  </Button>
                  <Button size="lg" variant="outline" className="min-w-[200px]">
                    <Bell className="w-5 h-5 mr-2" />
                    Get Notified
                  </Button>
                </div>
                
                <div className="mt-6">
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="/gameros-changelog" className="gap-2">
                      <GitCommit className="w-4 h-4" />
                      View GamerOS Changelog
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4">System Requirements</h2>
            <p className="text-center text-muted-foreground mb-12">
              System requirements will be announced closer to release
            </p>
            
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
                      <span className="font-medium text-muted-foreground">{req.value}</span>
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
                      <span className="font-medium text-muted-foreground">{req.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4">Planned Platform Support</h2>
            <p className="text-center text-muted-foreground mb-12">
              We're working on supporting these platforms
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {platforms.map((platform, i) => (
                <div key={i} className={`glass-card p-4 text-center ${platform.supported ? '' : 'opacity-60'}`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 ${platform.supported ? 'bg-primary/10' : 'bg-secondary'}`}>
                    <platform.icon className={`w-6 h-6 ${platform.supported ? 'text-primary' : 'text-muted-foreground'}`} />
                  </div>
                  <h4 className="font-medium text-sm">{platform.name}</h4>
                  <p className={`text-xs ${platform.supported ? 'text-primary font-medium' : 'text-muted-foreground'}`}>{platform.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Started Placeholder */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Getting Started</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-card p-6 opacity-60">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <span className="font-bold text-muted-foreground">1</span>
                </div>
                <h3 className="font-semibold mb-2">Download</h3>
                <p className="text-sm text-muted-foreground mb-4">Coming soon - download instructions will be available here.</p>
                <code className="block p-3 rounded-lg bg-secondary text-xs overflow-x-auto text-muted-foreground">
                  gameros-x64.iso (coming soon)
                </code>
              </div>

              <div className="glass-card p-6 opacity-60">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <span className="font-bold text-muted-foreground">2</span>
                </div>
                <h3 className="font-semibold mb-2">Create VM</h3>
                <p className="text-sm text-muted-foreground mb-4">Coming soon - VM setup instructions will be available here.</p>
                <code className="block p-3 rounded-lg bg-secondary text-xs overflow-x-auto text-muted-foreground">
                  Requirements TBA
                </code>
              </div>

              <div className="glass-card p-6 opacity-60">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <span className="font-bold text-muted-foreground">3</span>
                </div>
                <h3 className="font-semibold mb-2">Boot & Explore</h3>
                <p className="text-sm text-muted-foreground mb-4">Coming soon - boot instructions will be available here.</p>
                <code className="block p-3 rounded-lg bg-secondary text-xs overflow-x-auto text-muted-foreground">
                  Stay tuned...
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
