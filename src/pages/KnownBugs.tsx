import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Bug, 
  AlertTriangle, 
  AlertCircle,
  Info,
  CheckCircle2,
  Code2,
  FileX,
  Wrench,
  TestTube,
  FileText,
  Gauge,
  Shield
} from "lucide-react";

const bugCategories = [
  {
    title: "Critical Issues",
    icon: AlertTriangle,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    count: 0,
    items: ["None currently"],
  },
  {
    title: "Logic Errors",
    icon: AlertCircle,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    count: 2,
    items: [
      "Window z-ordering occasionally incorrect",
      "File copy progress not updating in real-time",
    ],
  },
  {
    title: "Code Quality",
    icon: Code2,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    count: 3,
    items: [
      "Refactor driver initialization sequence",
      "Memory pool fragmentation in long sessions",
      "Clean up deprecated API calls",
    ],
  },
  {
    title: "Missing Features",
    icon: FileX,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    count: 5,
    items: [
      "Network stack not implemented",
      "No multi-monitor support",
      "Audio drivers pending",
      "USB 3.0 support",
      "Bluetooth stack",
    ],
  },
  {
    title: "Build Issues",
    icon: Wrench,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    count: 1,
    items: ["Cross-compilation on ARM hosts"],
  },
];

const additionalCategories = [
  { icon: TestTube, title: "Testing", count: 4, description: "Unit tests pending for new modules" },
  { icon: FileText, title: "Documentation", count: 6, description: "API docs need updating" },
  { icon: Gauge, title: "Performance", count: 2, description: "Optimization opportunities identified" },
  { icon: Shield, title: "Security", count: 0, description: "No known vulnerabilities" },
];

const KnownBugs = () => {
  const totalIssues = bugCategories.reduce((acc, cat) => acc + cat.count, 0);
  const resolvedIssues = 47;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Bug className="w-4 h-4" />
              Issue Tracker
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Known Issues
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transparent tracking of current bugs, limitations, and areas for improvement.
            </p>
          </div>
        </section>

        {/* Summary Stats */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-primary">{totalIssues}</div>
                <div className="text-sm text-muted-foreground">Open Issues</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-green-500">{resolvedIssues}</div>
                <div className="text-sm text-muted-foreground">Resolved</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-foreground">0</div>
                <div className="text-sm text-muted-foreground">Critical</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-foreground">
                  {Math.round((resolvedIssues / (resolvedIssues + totalIssues)) * 100)}%
                </div>
                <div className="text-sm text-muted-foreground">Resolution Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Bug Categories */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Issue Categories</h2>
            
            <div className="space-y-6">
              {bugCategories.map((category, i) => (
                <div key={i} className="glass-card p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl ${category.bgColor} flex items-center justify-center`}>
                        <category.icon className={`w-5 h-5 ${category.color}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold">{category.title}</h3>
                        <p className="text-sm text-muted-foreground">{category.count} issues</p>
                      </div>
                    </div>
                    {category.count === 0 && (
                      <span className="flex items-center gap-1 text-green-500 text-sm">
                        <CheckCircle2 className="w-4 h-4" />
                        All clear
                      </span>
                    )}
                  </div>

                  {category.count > 0 && (
                    <ul className="space-y-2 ml-13">
                      {category.items.map((item, ii) => (
                        <li key={ii} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Categories */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Other Areas</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalCategories.map((cat, i) => (
                <div key={i} className="glass-card p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <cat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{cat.title}</h3>
                  <div className="text-2xl font-bold text-primary mb-2">{cat.count}</div>
                  <p className="text-sm text-muted-foreground">{cat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Report Bug CTA */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card p-8 text-center">
              <Info className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Found a Bug?</h3>
              <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                Help us improve GamerOS by reporting issues on our GitHub repository. 
                Please include reproduction steps and system information.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Report on GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default KnownBugs;
