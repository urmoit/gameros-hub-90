import { Link, useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Calendar,
  ArrowRight,
  ArrowLeft,
  Code2,
  GitCommit,
  ExternalLink,
  Newspaper
} from "lucide-react";

interface NewsItem {
  title: string;
  date: string;
  type: string;
  description: string;
  commitCode?: string;
  commitUrl?: string;
}

interface MonthData {
  month: string;
  year: string;
  summary: string;
  items: NewsItem[];
}

const monthlyNewsData: Record<string, MonthData> = {
  "january-2026": {
    month: "January",
    year: "2026",
    summary: "Development kickoff, build system improvements, bug fixes, and QEMU integration enhancements.",
    items: [
      {
        title: "Update current bugs documentation and resolve several issues",
        date: "January 14, 2026",
        type: "Commit",
        description: "Revised currentbugs.md to reflect an increase in total bugs to 20, with updated counts for critical, high, medium, and low priority issues. Documented the resolution of 5 bugs, including critical issues related to duplicate includes and uninitialized variables. Added new bug reports for implicit function declarations and color value overflows in the GUI application. Implemented a safety check in draw_tab_bar to prevent potential division by zero. Removed unused process functions from main.c to optimize memory usage.",
        commitCode: "1d4ecb2",
        commitUrl: "https://github.com/urmoit/GamerOS/commit/1d4ecb20daa7ac73159c9ea773c4f9d4f6f43a59",
      },
      {
        title: "Update current bugs documentation and enhance kernel boot process",
        date: "January 14, 2026",
        type: "Commit",
        description: "Revised currentbugs.md to include a summary of total bugs, categorized by severity. Added debug output to kernel_main for better visibility during boot. Improved CPU detection in boot.asm with comprehensive checks and debug messages for better troubleshooting. Updated memory management in the boot process to ensure safe addresses for page tables.",
        commitCode: "70fba78",
        commitUrl: "https://github.com/urmoit/GamerOS/commit/70fba78de2e3c123f2bfd4f5aea08996eee8d172",
      },
      {
        title: "Enhance QEMU boot process and GUI application",
        date: "January 14, 2026",
        type: "Commit",
        description: "Updated run-qemu.bat to use -cpu max and log output to qemu-debug.log. Added detailed CPU state logging to qemu-debug.log for better debugging. Modified GUI application to increase window height and reduce tab count, focusing on home and changelog tabs. Updated changelog content to reflect recent development milestones and features. Adjusted boot configuration in grub.cfg for direct booting without menu display.",
        commitCode: "f50fb62",
        commitUrl: "https://github.com/urmoit/GamerOS/commit/f50fb62ff112cf56a6025299f8b9bb21f6160d59",
      },
      {
        title: "Refactor build scripts and update documentation",
        date: "January 14, 2026",
        type: "Commit",
        description: "Updated build-iso.bat to use make build-x86_64 instead of make build-iso. Enhanced currentbugs.md to reflect new remaining issues and updated statistics. Improved debug.bat to check for QEMU in multiple common locations and provide clearer error messages. Added a comprehensive QEMU tutorial in QemuTut.md with installation and troubleshooting instructions. Updated README.md to remove VMware references and include the new QEMU tutorial. Cleaned up the license file for clarity and added detailed permissions and prohibitions. Removed obsolete files and updated the Makefile to reflect changes in source file organization.",
        commitCode: "21d5dce",
        commitUrl: "https://github.com/urmoit/GamerOS/commit/21d5dce0b6db2f416201a61e586fa6e206acb657",
      },
      {
        title: "Added cursor worktree",
        date: "January 14, 2026",
        type: "Commit",
        description: "Added cursor worktree for improved development workflow.",
        commitCode: "259e723",
        commitUrl: "https://github.com/urmoit/GamerOS/commit/259e723ec1704b43a9182110ecf7b27dcee35e44",
      },
      {
        title: "GamerOS Development Kickoff",
        date: "January 2026",
        type: "Announcement",
        description: "We've officially started development on GamerOS, a revolutionary operating system that will seamlessly run Windows, Linux, and Android applications. This marks the beginning of an ambitious project to create a unified gaming platform.",
      },
      {
        title: "Open Source Commitment",
        date: "January 2026",
        type: "Announcement",
        description: "GamerOS will be fully open source under the MIT license. We believe in transparency and community-driven development. All code, documentation, and assets will be available on GitHub.",
      },
      {
        title: "Looking for Contributors",
        date: "January 2026",
        type: "Community",
        description: "We're actively seeking contributors in kernel development, UI design, documentation, and testing. All skill levels welcome! Whether you're an experienced OS developer or just getting started, there's a place for you.",
      },
    ],
  },
};

const availableMonths = [
  { slug: "january-2026", label: "January 2026" },
];

const MonthlyNews = () => {
  const { month } = useParams<{ month: string }>();
  const currentMonth = month || "january-2026";
  const data = monthlyNewsData[currentMonth];

  if (!data) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
            <h1 className="text-4xl font-bold mb-4">Month Not Found</h1>
            <p className="text-muted-foreground mb-8">This monthly news archive doesn't exist yet.</p>
            <Button asChild>
              <Link to="/news">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to News
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Calendar className="w-4 h-4" />
              Monthly Archive
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              {data.month} {data.year}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {data.summary}
            </p>
          </div>
        </section>

        {/* Month Navigation */}
        <section className="py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <Button variant="outline" asChild>
                <Link to="/news">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  All News
                </Link>
              </Button>
              <div className="flex gap-2">
                {availableMonths.map((m) => (
                  <Link
                    key={m.slug}
                    to={`/news/monthly/${m.slug}`}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      currentMonth === m.slug
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary hover:bg-secondary/80"
                    }`}
                  >
                    {m.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-primary">{data.items.length}</div>
                <div className="text-sm text-muted-foreground">Total Updates</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-green-500">
                  {data.items.filter(i => i.type === "Commit").length}
                </div>
                <div className="text-sm text-muted-foreground">Commits</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-blue-500">
                  {data.items.filter(i => i.type === "Announcement").length}
                </div>
                <div className="text-sm text-muted-foreground">Announcements</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-purple-500">
                  {data.items.filter(i => i.type === "Community").length}
                </div>
                <div className="text-sm text-muted-foreground">Community</div>
              </div>
            </div>
          </div>
        </section>

        {/* All Updates */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">All Updates</h2>
            
            <div className="space-y-6">
              {data.items.map((item, i) => (
                <div key={i} className="glass-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {item.type === "Commit" ? (
                        <GitCommit className="w-6 h-6 text-primary" />
                      ) : (
                        <Newspaper className="w-6 h-6 text-primary" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`px-2 py-0.5 rounded-full text-xs ${
                          item.type === 'Commit' 
                            ? 'bg-green-500/10 text-green-500' 
                            : item.type === 'Announcement'
                            ? 'bg-blue-500/10 text-blue-500'
                            : 'bg-purple-500/10 text-purple-500'
                        }`}>
                          {item.type}
                        </span>
                        <span className="text-xs text-muted-foreground">{item.date}</span>
                      </div>
                      <h3 className="font-semibold mb-2 text-lg">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                      {item.commitCode && item.commitUrl && (
                        <a 
                          href={item.commitUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-primary hover:underline bg-primary/10 px-3 py-1.5 rounded-lg"
                        >
                          <GitCommit className="w-4 h-4" />
                          <code className="font-mono">{item.commitCode}</code>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Want to contribute?</h2>
            <p className="text-muted-foreground mb-6">
              Check out our GitHub repository and join the development.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild>
                <a 
                  href="https://github.com/urmoit/GamerOS" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Code2 className="w-4 h-4 mr-2" />
                  View on GitHub
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/bug-tracking">
                  View Bug Tracker
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MonthlyNews;