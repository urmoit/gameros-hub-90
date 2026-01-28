import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/ui/PageTransition";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, FileText, AlertCircle, CheckCircle, Palette, Monitor, MousePointer } from "lucide-react";

const XPImplementation = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative pt-32 pb-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-green-500/5" />
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Link
                to="/news"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to News
              </Link>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Badge variant="outline" className="bg-blue-500/10 text-blue-600 border-blue-500/20 px-3 py-1">
                    <Palette className="w-3.5 h-3.5 mr-2" />
                    UI Overhaul
                  </Badge>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    January 28, 2026
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                  Implementation Plan: Windows XP Theme & Startup
                </h1>

                <p className="text-xl text-muted-foreground max-w-2xl">
                  Transforming the GamerOS UI to resemble Windows XP (Luna Theme), including a startup animation and a functional desktop environment.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="prose prose-lg dark:prose-invert max-w-none">

                {/* Critical Note */}
                <div className="not-prose my-8">
                  <div className="glass-card border-l-4 border-l-yellow-500 p-6 bg-yellow-500/5">
                    <div className="flex items-start gap-4">
                      <AlertCircle className="w-6 h-6 text-yellow-500 mt-1 shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-yellow-500 mb-2">User Review Required</h3>
                        <p className="text-muted-foreground">
                          We are using VGA Mode 12h (640x480). This mode supports only 16 simultaneous colors. To achieve the "XP Look", we will modify the hardware palette to use specific XP theme colors (Luna Blue, Start Button Green, etc.) instead of the standard CGA/EGA colors. This provides a much closer visual match than standard VGA colors.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h2>Proposed Changes</h2>

                <div className="space-y-8 not-prose">
                  {/* Graphics Subsystem */}
                  <div className="glass-card p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Monitor className="w-5 h-5 text-primary" />
                      Graphics Subsystem
                    </h3>
                    <code className="text-sm bg-muted px-2 py-1 rounded mb-4 inline-block">src/impl/graphics/vga_graphics.c</code>
                    <ul className="space-y-3 mt-4">
                      <li className="flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <div>
                          <strong>Modify Palette Initialization:</strong> Redefine the 16-color palette to match Windows XP's "Luna" color scheme.
                          <div className="flex flex-wrap gap-2 mt-2">
                            {['XP Taskbar Blue', 'XP Start Button Green', 'XP Window Content White/Beige', 'XP Desktop Blue (Bliss Sky)'].map(c => (
                              <span key={c} className="text-xs bg-muted border border-border px-2 py-1 rounded shadow-sm">{c}</span>
                            ))}
                          </div>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <div>
                          <strong>Add Graphics Primitives:</strong> Ensure <code className="text-xs">vga_fill_rect</code> and <code className="text-xs">vga_draw_string</code> utilize the new palette indices correctly.
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Kernel Main */}
                  <div className="glass-card p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-primary" />
                      Kernel Main
                    </h3>
                    <code className="text-sm bg-muted px-2 py-1 rounded mb-4 inline-block">src/impl/kernel/main.c</code>
                    <ul className="space-y-3 mt-4">
                      <li className="flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <div>
                          <strong>Implement Startup Animation:</strong> Create <code className="text-xs">show_startup_animation()</code> with black screen, pixel art "Windows XP" style logo, and animated loading bar.
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <div>
                          <strong>Redesign Desktop UI (draw_ui):</strong>
                          <ul className="list-disc ml-5 mt-2 space-y-1 text-sm text-muted-foreground">
                            <li>Background: Solid "Bliss" blue.</li>
                            <li>Taskbar: Blue bar at bottom (~30px).</li>
                            <li>Start Button: Green rounded rectangle with "start" text and Windows logo.</li>
                            <li>Window System: XP-style blue title bars, rounded corners, white/beige content.</li>
                          </ul>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <div>
                          <strong>Input Integration:</strong> Update <code className="text-xs">handle_mouse_input</code> for taskbar interaction and keyboard shortcuts (Windows key).
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* VM Compatibility */}
                  <div className="glass-card p-6 border-l-4 border-l-blue-500">
                    <div className="flex items-center gap-2 mb-4">
                      <MousePointer className="w-5 h-5 text-blue-500" />
                      <h3 className="text-xl font-semibold text-blue-500">VM Compatibility (VMware & VirtualBox)</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Mouse synchronization is the biggest usability issue in VMs. We will implement detection for the VMware Backdoor to enable absolute mouse positioning.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-1">1. Hardware Detection</h4>
                        <p className="text-sm text-muted-foreground">Check for VMware/VirtualBox presence using CPUID or Magic Port (0x5658).</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">2. Graphics Compatibility</h4>
                        <p className="text-sm text-muted-foreground">Ensure VGA Mode 12h works in both VirtualBox and VMware SVGA II adapters.</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">3. Mouse Integration</h4>
                        <p className="text-sm text-muted-foreground">Fix logic in <code className="text-xs">mouse.c</code> to use dynamic screen dimensions. Implement VMware absolute pointing device driver.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="my-12" />

                <h2 id="high-color-support">High Color Support (VESA VBE)</h2>
                <p>To support "Full Color" and fix rendering artifacts on VMware, we will move from standard VGA (Plane-based, 16-color) to a Linear Framebuffer (32-bit True Color) provided by VESA BIOS Extensions via GRUB Multiboot.</p>

                <div className="grid md:grid-cols-3 gap-6 not-prose my-6">
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <h4 className="font-semibold mb-2">1. Bootloader Updates</h4>
                    <p className="text-sm text-muted-foreground">Request graphics mode in Multiboot Header and pass info structure to kernel.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <h4 className="font-semibold mb-2">2. Graphics Driver Overhaul</h4>
                    <p className="text-sm text-muted-foreground">Replace fixed pointer with dynamic framebuffer. Update pixel writing to 32-bit direct RGB.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <h4 className="font-semibold mb-2">3. Kernel Integration</h4>
                    <p className="text-sm text-muted-foreground">Parse multiboot struct for framebuffer address, pitch, width, and height.</p>
                  </div>
                </div>

                <h2>Verification Plan</h2>
                <div className="not-prose space-y-4">
                  <div className="flex gap-4 p-4 rounded-xl bg-muted/50">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Startup</h4>
                      <p className="text-sm text-muted-foreground">Verify the animated progress bar and logo appear on boot.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-xl bg-muted/50">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Desktop</h4>
                      <p className="text-sm text-muted-foreground">Confirm the desktop appears with correct XP colors (not standard 16-color VGA).</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-xl bg-muted/50">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Input</h4>
                      <p className="text-sm text-muted-foreground">Click Start button → Toggle menu. Move mouse → Smooth cursor. Keyboard → Navigation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 border-t border-border/50">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl font-bold mb-4">Have feedback on this plan?</h2>
              <p className="text-muted-foreground mb-8">
                Join the discussion on GitHub and let us know what you think.
              </p>
              <Button asChild size="lg">
                <a
                  href="https://github.com/urmoit/GamerOS/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Discussion on GitHub
                </a>
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default XPImplementation;
