import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PageTransition from "@/components/ui/PageTransition";
import { ArrowLeft, Calendar, Download, Rocket, Github } from "lucide-react";
import changelog from "@/content/changelog_2026-10-11.md?raw";

export const BUILD_1550_ISO = "https://github.com/urmoit/GamerOS/releases/download/00m2-alpha-Build-1.550/GamerOS_Alpha_1.550.iso";

const slug = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// Split the markdown into "## " sections; skip title, intro and the Release meta block.
const parts = changelog.replace(/^# .*\n/, "").split(/^## /m);
const intro = parts[0].trim();
const sections = parts.slice(1)
  .map((chunk) => {
    const nl = chunk.indexOf("\n");
    const title = chunk.slice(0, nl).trim();
    const body = chunk.slice(nl + 1).trim();
    return { title, id: slug(title), body, count: (body.match(/^- /gm) || []).length };
  })
  .filter((s) => s.title !== "Release");

const prose = "text-sm text-muted-foreground leading-relaxed [&_p]:my-3 [&_ul]:space-y-3 [&_li]:relative [&_li]:pl-5 [&_li]:before:content-[''] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[0.6em] [&_li]:before:w-1.5 [&_li]:before:h-1.5 [&_li]:before:rounded-full [&_li]:before:bg-primary/60 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-3 [&_strong]:text-foreground [&_strong]:font-medium [&_code]:font-mono [&_code]:text-[0.8em] [&_code]:bg-muted [&_code]:border [&_code]:border-border [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_pre]:bg-muted [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_a]:text-primary [&_a]:underline";

const facts = [
  { label: "Version", value: "00m2" },
  { label: "Build", value: "1.550" },
  { label: "Released", value: "Oct 11, 2026" },
  { label: "Sections", value: String(sections.length) },
];

const Build1550Release = () => (
  <PageTransition>
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <section className="py-12 border-b border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button variant="ghost" size="sm" asChild className="mb-6 -ml-3 text-muted-foreground">
              <Link to="/news"><ArrowLeft />Back to News</Link>
            </Button>
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <Badge className="bg-success/10 text-success border-border"><Rocket className="w-3 h-3 mr-1" />Released</Badge>
              <span className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground"><Calendar className="w-3.5 h-3.5" />2026-10-11</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold text-foreground mb-4">Build 1.550 changelog</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mb-8">{intro}</p>
            <div className="flex flex-wrap gap-3 mb-10">
              <Button asChild><a href={BUILD_1550_ISO} target="_blank" rel="noopener noreferrer"><Download />Download ISO</a></Button>
              <Button variant="outline" asChild><a href="https://github.com/urmoit/GamerOS" target="_blank" rel="noopener noreferrer"><Github />GitHub</a></Button>
            </div>
            <dl className="grid grid-cols-2 sm:grid-cols-4 border border-border rounded-lg divide-x divide-y sm:divide-y-0 divide-border overflow-hidden">
              {facts.map((f) => (
                <div key={f.label} className="p-4 bg-muted/40">
                  <dt className="text-xs text-muted-foreground mb-1">{f.label}</dt>
                  <dd className="font-mono text-lg text-foreground">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="py-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[220px_1fr] gap-10">
            <nav className="hidden lg:block">
              <div className="sticky top-28">
                <p className="text-xs font-semibold text-foreground mb-3">On this page</p>
                <ul className="space-y-1 border-l border-border">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`} className="flex justify-between gap-2 -ml-px pl-3 py-1 text-sm text-muted-foreground border-l border-transparent hover:text-foreground hover:border-primary transition-colors">
                        <span>{s.title}</span>{s.count > 0 && <span className="font-mono text-xs">{s.count}</span>}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
            <div className="space-y-6 min-w-0">
              {sections.map((s, i) => (
                <article key={s.id} id={s.id} className="scroll-mt-28 border border-border rounded-lg bg-card">
                  <header className="flex items-center justify-between gap-3 px-5 py-3 border-b border-border bg-muted/40">
                    <h2 className="text-lg font-semibold text-foreground"><span className="font-mono text-xs text-muted-foreground mr-3">{String(i + 1).padStart(2, "0")}</span>{s.title}</h2>
                    {s.count > 0 && <span className="text-xs font-mono text-muted-foreground">{s.count} {s.count === 1 ? "change" : "changes"}</span>}
                  </header>
                  <div className={`px-5 py-4 ${prose}`}><ReactMarkdown>{s.body}</ReactMarkdown></div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  </PageTransition>
);

export default Build1550Release;
