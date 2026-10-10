import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PageTransition from "@/components/ui/PageTransition";
import { ArrowLeft, Calendar, Download, Rocket } from "lucide-react";

const releaseSections = [
  {
    title: "Critical Build Blockers",
    items: [
      "Kernel compile failure fixed by replacing direct back_buffer_rgb access with graphics_get_rgb_row().",
      "Conflicting draw_string declarations removed to resolve hard header compile errors.",
      "kmalloc/kfree are now fully implemented with a first-fit allocator in mm.c.",
      "Makefile and Makefile.wsl source rules repaired to match the real tree.",
    ],
  },
  {
    title: "Memory Safety & Stability",
    items: [
      "Fixed fs_write_file() out-of-bounds reads when payload exceeds reserved sectors.",
      "Added recursive child cleanup in ui_destroy_widget() to stop subtree leaks.",
      "Fixed progress bar division-by-zero and added render-width clamping.",
      "Fixed textbox append bounds, scaled 32bpp present OOB read, and window-index edge cases.",
    ],
  },
  {
    title: "Boot, Drivers, and Correctness",
    items: [
      "Removed thousands of NASM warnings and fixed VGA plane-mask blanking in boot.asm.",
      "Added bounded serial/keyboard/mouse waits plus real PS/2 mouse presence detection.",
      "Added RTC unstable-read handling and fixed VMware backdoor coordinate overflow.",
      "Fixed multiple UI geometry mismatches in Explorer and Settings click handling.",
    ],
  },
  {
    title: "UI & Tooling Improvements",
    items: [
      "Notepad and File Explorer were redesigned with better layout, navigation, and status UX.",
      "Settings was rebuilt across all tabs with shared layout flow and interactive toggles.",
      "GamerOS Update changelog/roadmap split was fixed and made resilient to heading changes.",
      "Added tools/embed_changelog.py to generate in-OS changelog content from docs/changelogs.",
    ],
  },
];

const Build1520Release = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <section className="py-12 relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <Button variant="ghost" asChild className="mb-8 text-muted-foreground hover:text-foreground hover:bg-muted">
                <Link to="/news" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to News
                </Link>
              </Button>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Badge className="bg-success/10 text-success border-border">
                  <Rocket className="w-3 h-3 mr-1" />
                  Released
                </Badge>
                <Badge className="bg-muted text-primary border-border">
                  Version 00m2
                </Badge>
                <Badge className="bg-muted text-primary border-border">
                  Build 1.520
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                GamerOS 00m2 — <span className="text-primary">Build 1.520</span>
              </h1>

              <div className="flex items-center gap-2 text-muted-foreground mb-6">
                <Calendar className="w-4 h-4" />
                <span>October 10, 2026</span>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-8">
                Build 1.520 is the first cleanly compile-verified 00m2 release with broad fixes across build reliability,
                memory safety, boot stability, drivers, correctness, UI behavior, and release tooling.
              </p>

              <Button size="lg" className="btn-solid border-0" asChild>
                <a
                  href="https://github.com/urmoit/GamerOS/releases/download/00m2-alpha-Build-1.520/GamerOS_Alpha_Build_1.520.iso"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Build 1.520 ISO
                </a>
              </Button>
            </div>
          </section>

          <section className="py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
              {releaseSections.map((section) => (
                <div key={section.title} className="glass-card p-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">{section.title}</h2>
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Build1520Release;
