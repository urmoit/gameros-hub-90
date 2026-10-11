import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PageTransition from "@/components/ui/PageTransition";
import { ArrowLeft, Calendar, Download, Rocket } from "lucide-react";
import changelog from "@/content/changelog_2026-10-11.md?raw";

export const BUILD_1550_ISO = "https://github.com/urmoit/GamerOS/releases/download/00m2-alpha-Build-1.550/GamerOS_Alpha_1.550.iso";

// Drop the top-level title; the page renders its own heading.
const body = changelog.replace(/^# .*\n/, "");

const Build1550Release = () => (
  <PageTransition>
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <section className="py-12 border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button variant="ghost" asChild className="mb-8 text-muted-foreground">
              <Link to="/news"><ArrowLeft />Back to News</Link>
            </Button>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge className="bg-success/10 text-success border-border"><Rocket className="w-3 h-3 mr-1" />Released</Badge>
              <Badge className="bg-muted text-primary border-border">Version 00m2</Badge>
              <Badge className="bg-muted text-primary border-border">Build 1.550</Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">GamerOS 00m2 — <span className="text-primary">Build 1.550</span></h1>
            <div className="flex items-center gap-2 text-muted-foreground mb-6"><Calendar className="w-4 h-4" /><span>October 11, 2026</span></div>
            <p className="text-lg text-muted-foreground max-w-3xl mb-8">Full changelog: Start menu triple-fault fix, time zones with daylight saving, real disk-backed storage, a floating dock, Explorer details view, and a fixed text renderer.</p>
            <Button size="lg" asChild><a href={BUILD_1550_ISO} target="_blank" rel="noopener noreferrer"><Download />Download Build 1.550 ISO</a></Button>
          </div>
        </section>
        <section className="py-10">
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-muted-foreground leading-relaxed
            [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:pb-2 [&_h2]:border-b [&_h2]:border-border
            [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-3
            [&_p]:my-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-5
            [&_strong]:text-foreground [&_code]:font-mono [&_code]:text-xs [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded
            [&_pre]:bg-muted [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_a]:text-primary [&_a]:underline">
            <ReactMarkdown>{body}</ReactMarkdown>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  </PageTransition>
);

export default Build1550Release;
