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
    <div className="min-h-screen bg-[hsl(225_25%_6%)]">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero Section with Animated Background */}
        <section className="py-20 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-[hsl(180_100%_50%)]/10 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[hsl(280_100%_60%)]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[hsl(320_100%_60%)]/5 rounded-full blur-[120px]" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(180_100%_50%)]/10 border border-[hsl(180_100%_50%)]/30 text-[hsl(180_100%_50%)] text-sm font-medium mb-8 backdrop-blur-sm">
              <DownloadIcon className="w-4 h-4" />
              <span>Download Center</span>
              <Sparkles className="w-3 h-3 animate-pulse" />
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-gaming tracking-tight">
              Download GamerOS
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              The first public alpha is available now.
              <span className="text-[hsl(180_100%_50%)]"> Download 00m1-alpha</span> and test in VMware, VirtualBox, or QEMU.
            </p>
            
            {/* Decorative Line */}
            <div className="mt-12 flex items-center justify-center gap-4">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-[hsl(180_100%_50%)]" />
              <Gamepad2 className="w-6 h-6 text-[hsl(280_100%_60%)]" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-[hsl(280_100%_60%)]" />
            </div>
          </div>
        </section>

        {/* Alpha Release Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card p-12 text-center relative overflow-hidden group">
              {/* Animated Background Glows */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(280_100%_60%)]/20 rounded-full blur-[100px] group-hover:bg-[hsl(280_100%_60%)]/30 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[hsl(180_100%_50%)]/20 rounded-full blur-[80px] group-hover:bg-[hsl(180_100%_50%)]/30 transition-all duration-700" />
              
              <div className="relative z-10">
                <Badge className="mb-6 bg-gradient-to-r from-[hsl(280_100%_60%)] to-[hsl(320_100%_60%)] text-white border-0 shadow-lg shadow-[hsl(280_100%_60%)]/30 px-4 py-1.5">
                  <Rocket className="w-4 h-4 mr-2 animate-bounce" />
                  Alpha Released
                </Badge>
                
                <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-[hsl(180_100%_50%)] to-[hsl(280_100%_60%)] flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-[hsl(180_100%_50%)]/30 group-hover:scale-105 transition-transform duration-500">
                  <Bug className="w-14 h-14 text-[hsl(225_25%_6%)]" />
                </div>
                
                <h2 className="text-4xl font-bold mb-4 text-white">First Alpha Release</h2>
                
                <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
                  GamerOS <span className="text-[hsl(180_100%_50%)] font-medium">00m1-alpha</span> (Build 1.100) includes the
                  <span className="text-[hsl(280_100%_60%)] font-medium"> XP-style shell</span>,
                  <span className="text-[hsl(320_100%_60%)] font-medium"> Notepad</span>, and
                  VMware stability hardening.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                  <Button
                    size="lg"
                    asChild
                    className="min-w-[220px] btn-neon border-0"
                  >
                    <a href="https://github.com/urmoit/gameros-hub-90/releases/download/00m1-alpha-Release-1/GamerOS-00m1-alpha-Release-1.iso" target="_blank" rel="noopener noreferrer">
                    <DownloadIcon className="w-5 h-5 mr-2" />
                    Download ISO
                    </a>
                  </Button>
                  <Button 
                    size="lg" 
                    className="min-w-[220px] btn-neon gap-2 group/btn" 
                    asChild
                  >
                    <Link to="/gameros-changelog">
                      <Rocket className="w-5 h-5 group-hover/btn:animate-bounce" />
                      Read Alpha Changelog
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
                
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="glass-card-hover border-[hsl(180_100%_50%)]/30 text-[hsl(180_100%_50%)] hover:bg-[hsl(180_100%_50%)]/10" 
                    asChild
                  >
                    <Link to="/gameros-changelog" className="gap-2">
                      <GitCommit className="w-4 h-4" />
                      View Changelog
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="glass-card-hover border-[hsl(280_100%_60%)]/30 text-[hsl(280_100%_60%)] hover:bg-[hsl(280_100%_60%)]/10" 
                    asChild
                  >
                    <Link to="/roadmap" className="gap-2">
                      <Clock className="w-4 h-4" />
                      View Roadmap
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* System Requirements */}
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(280_100%_60%)]/5 to-transparent" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gaming-alt">System Requirements</h2>
              <p className="text-white/60">
                Alpha requirements are still being validated across test VMs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Minimum Requirements */}
              <div className="glass-card glass-card-hover p-8 border-l-4 border-l-[hsl(180_100%_50%)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[hsl(180_100%_50%)]/10 rounded-full blur-[60px] group-hover:bg-[hsl(180_100%_50%)]/20 transition-all duration-500" />
                
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(180_100%_50%)]/20 to-[hsl(180_100%_50%)]/5 border border-[hsl(180_100%_50%)]/30 flex items-center justify-center shadow-lg shadow-[hsl(180_100%_50%)]/20">
                    <Cpu className="w-7 h-7 text-[hsl(180_100%_50%)]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Minimum</h3>
                    <p className="text-sm text-white/50">Basic requirements</p>
                  </div>
                </div>
                
                <ul className="space-y-4 relative z-10">
                  {requirements.minimum.map((req, i) => (
                    <li key={i} className="flex justify-between items-center py-3 border-b border-white/10 last:border-0">
                      <span className="text-white/50 flex items-center gap-2">
                        <Zap className="w-3 h-3 text-[hsl(180_100%_50%)]" />
                        {req.label}
                      </span>
                      <span className="font-medium text-white/30">{req.value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended Requirements */}
              <div className="glass-card glass-card-hover p-8 border-l-4 border-l-[hsl(280_100%_60%)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[hsl(280_100%_60%)]/10 rounded-full blur-[60px] group-hover:bg-[hsl(280_100%_60%)]/20 transition-all duration-500" />
                
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(280_100%_60%)]/20 to-[hsl(280_100%_60%)]/5 border border-[hsl(280_100%_60%)]/30 flex items-center justify-center shadow-lg shadow-[hsl(280_100%_60%)]/20">
                    <Sparkles className="w-7 h-7 text-[hsl(280_100%_60%)]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Recommended</h3>
                    <p className="text-sm text-white/50">For optimal experience</p>
                  </div>
                </div>
                
                <ul className="space-y-4 relative z-10">
                  {requirements.recommended.map((req, i) => (
                    <li key={i} className="flex justify-between items-center py-3 border-b border-white/10 last:border-0">
                      <span className="text-white/50 flex items-center gap-2">
                        <Zap className="w-3 h-3 text-[hsl(280_100%_60%)]" />
                        {req.label}
                      </span>
                      <span className="font-medium text-white/30">{req.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Support */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gaming">Platform Support</h2>
              <p className="text-white/60">
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
                      ? 'bg-[hsl(180_100%_50%)]/5' 
                      : platform.color === 'purple'
                      ? 'bg-[hsl(280_100%_60%)]/5'
                      : 'bg-[hsl(320_100%_60%)]/5'
                  }`} />
                  
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 ${
                    platform.supported 
                      ? platform.color === 'cyan'
                        ? 'bg-gradient-to-br from-[hsl(180_100%_50%)]/20 to-[hsl(180_100%_50%)]/5 border border-[hsl(180_100%_50%)]/40 shadow-lg shadow-[hsl(180_100%_50%)]/20'
                        : 'bg-gradient-to-br from-[hsl(280_100%_60%)]/20 to-[hsl(280_100%_60%)]/5 border border-[hsl(280_100%_60%)]/40 shadow-lg shadow-[hsl(280_100%_60%)]/20'
                      : 'bg-white/5 border border-white/10'
                  }`}>
                    <platform.icon className={`w-8 h-8 transition-colors ${
                      platform.supported 
                        ? platform.color === 'cyan'
                          ? 'text-[hsl(180_100%_50%)]'
                          : 'text-[hsl(280_100%_60%)]'
                        : 'text-white/30'
                    }`} />
                  </div>
                  
                  <h4 className="font-semibold text-white mb-1 relative z-10">{platform.name}</h4>
                  
                  <p className={`text-sm font-medium relative z-10 ${
                    platform.supported 
                      ? platform.color === 'cyan'
                        ? 'text-[hsl(180_100%_50%)]'
                        : 'text-[hsl(280_100%_60%)]'
                      : 'text-[hsl(320_100%_60%)]'
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
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(180_100%_50%)]/5 via-transparent to-transparent" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gaming-alt">Getting Started</h2>
              <p className="text-white/60">Your journey begins here</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="glass-card glass-card-hover p-8 relative group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[hsl(180_100%_50%)] to-transparent opacity-50" />
                
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(180_100%_50%)]/20 to-transparent border border-[hsl(180_100%_50%)]/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="font-bold text-2xl text-[hsl(180_100%_50%)]">1</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  Download
                  <Sparkles className="w-4 h-4 text-[hsl(180_100%_50%)] animate-pulse" />
                </h3>
                
                <p className="text-white/50 mb-6 leading-relaxed">
                  Download the official alpha ISO from the release link above.
                </p>
                
                <code className="block p-4 rounded-xl bg-black/40 border border-[hsl(180_100%_50%)]/20 text-xs overflow-x-auto text-[hsl(180_100%_50%)]/70 font-mono">
                  GamerOS-00m1-alpha-Release-1.iso
                  <span className="animate-pulse">_</span>
                </code>
              </div>

              {/* Step 2 */}
              <div className="glass-card glass-card-hover p-8 relative group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[hsl(280_100%_60%)] to-transparent opacity-50" />
                
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(280_100%_60%)]/20 to-transparent border border-[hsl(280_100%_60%)]/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="font-bold text-2xl text-[hsl(280_100%_60%)]">2</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  Create VM
                  <Monitor className="w-4 h-4 text-[hsl(280_100%_60%)]" />
                </h3>
                
                <p className="text-white/50 mb-6 leading-relaxed">
                  Create a VM and attach the ISO as the boot media.
                </p>
                
                <code className="block p-4 rounded-xl bg-black/40 border border-[hsl(280_100%_60%)]/20 text-xs overflow-x-auto text-[hsl(280_100%_60%)]/70 font-mono">
                  VMware/VirtualBox/QEMU
                </code>
              </div>

              {/* Step 3 */}
              <div className="glass-card glass-card-hover p-8 relative group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[hsl(320_100%_60%)] to-transparent opacity-50" />
                
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(320_100%_60%)]/20 to-transparent border border-[hsl(320_100%_60%)]/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="font-bold text-2xl text-[hsl(320_100%_60%)]">3</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  Boot & Explore
                  <Rocket className="w-4 h-4 text-[hsl(320_100%_60%)]" />
                </h3>
                
                <p className="text-white/50 mb-6 leading-relaxed">
                  Boot and test XP shell, Notepad, and input stability improvements.
                </p>
                
                <code className="block p-4 rounded-xl bg-black/40 border border-[hsl(320_100%_60%)]/20 text-xs overflow-x-auto text-[hsl(320_100%_60%)]/70 font-mono">
                  Release build 1.100
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter/Notify Section */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(180_100%_50%)]/10 via-[hsl(280_100%_60%)]/10 to-[hsl(320_100%_60%)]/10" />
              
              <div className="relative z-10">
                <Bell className="w-12 h-12 text-[hsl(180_100%_50%)] mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4 text-white">Get Notified</h2>
                <p className="text-white/60 mb-8">
                  Follow release updates and changelogs for upcoming patches.
                </p>
                <Button 
                  size="lg" 
                  className="btn-neon"
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
