import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Download as DownloadIcon, 
  Monitor, 
  HardDrive,
  Cpu,
  Server,
  Cloud,
  Box,
  Clock,
  GitCommit,
  Rocket,
  ArrowRight,
  Bug,
  Zap,
  Sparkles,
  Gamepad2,
  Bell
} from "lucide-react";

const requirements = {
  minimum: [
    { label: "CPU", value: "x86_64 (64-bit), 1 core" },
    { label: "RAM", value: "128 MB" },
    { label: "Storage", value: "64 MB free (ISO + temp disk)" },
    { label: "Graphics", value: "VGA-compatible (mode 13h path)" },
    { label: "Input", value: "PS/2 keyboard + mouse (or VM emulation)" },
    { label: "Boot", value: "BIOS/Legacy boot via GRUB (Multiboot)" },
  ],
  recommended: [
    { label: "CPU", value: "x86_64, 2 cores" },
    { label: "RAM", value: "512 MB" },
    { label: "Storage", value: "1 GB virtual disk" },
    { label: "Graphics", value: "VMware/QEMU default virtual VGA" },
    { label: "Input", value: "USB mouse integration enabled in VM" },
    { label: "Boot", value: "GRUB from ISO in VMware Workstation or QEMU" },
  ],
};

const platforms = [
  { icon: Box, name: "VirtualBox", description: "Supported", supported: true, color: "cyan" },
  { icon: Server, name: "VMware", description: "Supported", supported: true, color: "purple" },
  { icon: Monitor, name: "Hyper-V", description: "Coming soon", supported: false, color: "pink" },
  { icon: Cloud, name: "QEMU", description: "Supported", supported: true, color: "cyan" },
  { icon: HardDrive, name: "Real Hardware", description: "Coming soon", supported: false, color: "purple" },
];

const Download = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero Section with Animated Background */}
        <section className="py-12 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-muted rounded-full hidden " />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-muted rounded-full hidden " style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-muted rounded-full hidden" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border text-primary text-sm font-medium mb-8 backdrop-blur-sm">
              <DownloadIcon className="w-4 h-4" />
              <span>Download Center</span>
              <Sparkles className="w-3 h-3 " />
            </div>
            
            <h1 className="text-5xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gaming tracking-normal">
              Download GamerOS
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The latest alpha is available now.
              <span className="text-primary"> Download 00m2</span> and test in VMware, VirtualBox, or QEMU.
            </p>
            
            {/* Decorative Line */}
            <div className="mt-12 flex items-center justify-center gap-4">
              <div className="h-px w-20 bg-muted from-transparent " />
              <Gamepad2 className="w-6 h-6 text-primary" />
              <div className="h-px w-20 bg-muted from-transparent " />
            </div>
          </div>
        </section>

        {/* Alpha Release Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card p-5 sm:p-6 text-center relative overflow-hidden group">
              {/* Animated Background Glows */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-muted rounded-full hidden group-hover:bg-muted transition-all duration-700" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-muted rounded-full hidden group-hover:bg-muted transition-all duration-700" />
              
              <div className="relative z-10">
                <Badge className="mb-6 bg-muted   text-foreground border-0 shadow-lg  px-4 py-1.5">
                  <Rocket className="w-4 h-4 mr-2 " />
                  Alpha Released
                </Badge>
                
                <div className="w-28 h-28 rounded-lg bg-muted   flex items-center justify-center mx-auto mb-8 shadow-2xl  group-hover:scale-105 transition-transform duration-500">
                  <Bug className="w-14 h-14 text-foreground" />
                </div>
                
                <h2 className="text-4xl font-bold mb-4 text-foreground">Latest Alpha Release</h2>
                
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
                  GamerOS <span className="text-primary font-medium">00m2</span> (Build 1.520) is the new compile-verified release
                  with major build-system fixes, memory-safety hardening, and broad UI/driver stability upgrades across the OS.
                </p>
                <p className="text-sm text-success mb-10 font-medium">
                  ✅ Build 1.520 released October 10, 2026
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                  <Button
                    size="lg"
                    asChild
                    className="min-w-[220px] btn-solid border-0"
                  >
                     <a href="https://github.com/urmoit/GamerOS/releases/download/00m2-alpha-Build-1.520/GamerOS_Alpha_Build_1.520.iso" target="_blank" rel="noopener noreferrer">
                    <DownloadIcon className="w-5 h-5 mr-2" />
                    Download Build 1.520 ISO
                    </a>
                  </Button>
                  <Button 
                    size="lg" 
                    className="min-w-[220px] btn-solid gap-2 group/btn" 
                    asChild
                  >
                    <Link to="/news/build-1520">
                      <Rocket className="w-5 h-5 group-hover/btn:" />
                      Build 1.520 Release Notes
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
                
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="glass-card-hover border-border text-primary hover:bg-muted" 
                    asChild
                  >
                    <Link to="/news" className="gap-2">
                      <GitCommit className="w-4 h-4" />
                      View All News
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* System Requirements */}
        <section className="py-12 relative">
          <div className="absolute inset-0 bg-muted from-transparent  to-transparent" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gaming-alt">System Requirements</h2>
              <p className="text-muted-foreground">
                Alpha requirements are still being validated across test VMs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-5 sm:p-6">
              {/* Minimum Requirements */}
              <div className="glass-card glass-card-hover p-5 sm:p-6 border-l-4 border-l-border relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-muted rounded-full hidden group-hover:bg-muted transition-all duration-500" />
                
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="w-14 h-14 rounded-lg bg-muted   border border-border flex items-center justify-center shadow-lg ">
                    <Cpu className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Minimum</h3>
                    <p className="text-sm text-muted-foreground">Basic requirements</p>
                  </div>
                </div>
                
                <ul className="space-y-4 relative z-10">
                  {requirements.minimum.map((req, i) => (
                    <li key={i} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                      <span className="text-muted-foreground flex items-center gap-2">
                        <Zap className="w-3 h-3 text-primary" />
                        {req.label}
                      </span>
                      <span className="font-medium text-muted-foreground">{req.value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended Requirements */}
              <div className="glass-card glass-card-hover p-5 sm:p-6 border-l-4 border-l-border relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-muted rounded-full hidden group-hover:bg-muted transition-all duration-500" />
                
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="w-14 h-14 rounded-lg bg-muted   border border-border flex items-center justify-center shadow-lg ">
                    <Sparkles className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Recommended</h3>
                    <p className="text-sm text-muted-foreground">For optimal experience</p>
                  </div>
                </div>
                
                <ul className="space-y-4 relative z-10">
                  {requirements.recommended.map((req, i) => (
                    <li key={i} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                      <span className="text-muted-foreground flex items-center gap-2">
                        <Zap className="w-3 h-3 text-primary" />
                        {req.label}
                      </span>
                      <span className="font-medium text-muted-foreground">{req.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Support */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gaming">Platform Support</h2>
              <p className="text-muted-foreground">
                We're working on supporting these platforms
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {platforms.map((platform, i) => (
                <div 
                  key={i} 
                  className={`glass-card glass-card-hover p-6 text-center group relative overflow-hidden ${
                    platform.supported ? '' : 'opacity-70'
                  }`}
                >
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    platform.color === 'cyan' 
                      ? 'bg-muted' 
                      : platform.color === 'purple'
                      ? 'bg-muted'
                      : 'bg-muted'
                  }`} />
                  
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 ${
                    platform.supported 
                      ? platform.color === 'cyan'
                        ? 'bg-muted   border border-border shadow-lg '
                        : 'bg-muted   border border-border shadow-lg '
                      : 'bg-muted border border-border'
                  }`}>
                    <platform.icon className={`w-8 h-8 transition-colors ${
                      platform.supported 
                        ? platform.color === 'cyan'
                          ? 'text-primary'
                          : 'text-primary'
                        : 'text-muted-foreground'
                    }`} />
                  </div>
                  
                  <h4 className="font-semibold text-foreground mb-1 relative z-10">{platform.name}</h4>
                  
                  <p className={`text-sm font-medium relative z-10 ${
                    platform.supported 
                      ? platform.color === 'cyan'
                        ? 'text-primary'
                        : 'text-primary'
                      : 'text-primary'
                  }`}>
                    {platform.supported ? (
                      <span className="flex items-center justify-center gap-1">
                        <Zap className="w-3 h-3" />
                        {platform.description}
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-1">
                        <Clock className="w-3 h-3" />
                        {platform.description}
                      </span>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="py-12 relative">
          <div className="absolute inset-0 bg-muted  via-transparent to-transparent" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gaming-alt">Getting Started</h2>
              <p className="text-muted-foreground">Your journey begins here</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-5 sm:p-6">
              {/* Step 1 */}
              <div className="glass-card glass-card-hover p-5 sm:p-6 relative group">
                <div className="absolute top-0 left-0 w-full h-1 bg-muted  to-transparent opacity-50" />
                
                <div className="w-14 h-14 rounded-lg bg-muted  to-transparent border border-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="font-bold text-2xl text-primary">1</span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                  Download
                  <Sparkles className="w-4 h-4 text-primary " />
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Download the official alpha ISO from the release link above.
                </p>
                
                <code className="block p-4 rounded-lg bg-background border border-border text-xs overflow-x-auto text-primary font-mono">
                  GamerOS_Alpha_Build_1.520.iso
                  <span className="">_</span>
                </code>
              </div>

              {/* Step 2 */}
              <div className="glass-card glass-card-hover p-5 sm:p-6 relative group">
                <div className="absolute top-0 left-0 w-full h-1 bg-muted  to-transparent opacity-50" />
                
                <div className="w-14 h-14 rounded-lg bg-muted  to-transparent border border-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="font-bold text-2xl text-primary">2</span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                  Create VM
                  <Monitor className="w-4 h-4 text-primary" />
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Create a VM and attach the ISO as the boot media.
                </p>
                
                <code className="block p-4 rounded-lg bg-background border border-border text-xs overflow-x-auto text-primary font-mono">
                  VMware/VirtualBox/QEMU
                </code>
              </div>

              {/* Step 3 */}
              <div className="glass-card glass-card-hover p-5 sm:p-6 relative group">
                <div className="absolute top-0 left-0 w-full h-1 bg-muted  to-transparent opacity-50" />
                
                <div className="w-14 h-14 rounded-lg bg-muted  to-transparent border border-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="font-bold text-2xl text-primary">3</span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                  Boot & Explore
                  <Rocket className="w-4 h-4 text-primary" />
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Boot and test the desktop shell, File Explorer, Settings, Notepad, and 640×480 mode.
                </p>
                
                <code className="block p-4 rounded-lg bg-background border border-border text-xs overflow-x-auto text-primary font-mono">
                  Release Build 1.520
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter/Notify Section */}
        <section className="py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card p-5 sm:p-6 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-muted   " />
              
              <div className="relative z-10">
                <Bell className="w-12 h-12 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4 text-foreground">Get Notified</h2>
                <p className="text-muted-foreground mb-8">
                  Follow release updates and changelogs for upcoming patches.
                </p>
                <Button 
                  size="lg" 
                  className="btn-solid"
                  asChild
                >
                  <Link to="/newsletter">
                    Subscribe for Updates
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
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

export default Download;
