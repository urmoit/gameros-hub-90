import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Newspaper, 
  Calendar, 
  ArrowRight,
  Star,
  Clock,
  Rocket,
  Users,
  Code2,
  Sparkles,
  Target,
  MessageCircle
} from "lucide-react";

const announcements = [
  {
    title: "GamerOS Development Kickoff",
    date: "January 2026",
    type: "Announcement",
    description: "We've officially started development on GamerOS, a revolutionary operating system that will seamlessly run Windows, Linux, and Android applications.",
    icon: Rocket,
  },
  {
    title: "Community Discord Launched",
    date: "January 2026",
    type: "Community",
    description: "Join our growing community of developers and enthusiasts on Discord. Share ideas, get help, and be part of the journey.",
    icon: MessageCircle,
  },
  {
    title: "Open Source Commitment",
    date: "January 2026",
    type: "Announcement",
    description: "GamerOS will be fully open source under the MIT license. We believe in transparency and community-driven development.",
    icon: Code2,
  },
  {
    title: "Looking for Contributors",
    date: "January 2026",
    type: "Community",
    description: "We're actively seeking contributors in kernel development, UI design, documentation, and testing. All skill levels welcome!",
    icon: Users,
  },
];

const upcomingMilestones = [
  { title: "Core Kernel", timeline: "Q1 2026", description: "Basic kernel with memory management and process scheduling", status: "In Progress" },
  { title: "Graphics Framework", timeline: "Q2 2026", description: "Fluent Design-inspired UI framework implementation", status: "Planned" },
  { title: "Windows Compatibility", timeline: "Q3 2026", description: "Initial Windows application compatibility layer", status: "Planned" },
  { title: "Linux Support", timeline: "Q3 2026", description: "Linux binary execution support", status: "Planned" },
  { title: "Android Runtime", timeline: "Q4 2026", description: "Android APK execution environment", status: "Planned" },
  { title: "First Public Beta", timeline: "2027", description: "First downloadable public beta release", status: "Planned" },
];

const devUpdates = [
  {
    title: "Build System Architecture",
    description: "Established robust build system using Docker for cross-compilation, ensuring consistent builds across all development environments.",
  },
  {
    title: "Bootloader Development",
    description: "Custom UEFI bootloader in development, designed for fast and reliable system initialization.",
  },
  {
    title: "Memory Management",
    description: "Implementing advanced memory management with 16-byte aligned allocations and protection mechanisms.",
  },
  {
    title: "UI Framework Design",
    description: "Designing an event-driven widget system with comprehensive theme support for the Fluent Design interface.",
  },
];

const News = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Newspaper className="w-4 h-4" />
              Latest Updates
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              News & Updates
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay informed about GamerOS development progress, announcements, and community updates.
            </p>
          </div>
        </section>

        {/* Project Status */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              
              <div className="relative grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-primary">Project Status</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Active Development</h2>
                  <p className="text-muted-foreground mb-6">
                    GamerOS is currently in the early stages of development. Our team is focused on building 
                    a solid foundation including the kernel, graphics framework, and compatibility layers. 
                    We're making steady progress and excited to share updates along the way.
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm">Kernel Development</span>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">UI Design</span>
                    <span className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-sm">Build System</span>
                  </div>

                  <Button variant="outline" asChild>
                    <Link to="/roadmap">
                      View Full Roadmap
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>

                <div className="glass-card p-6">
                  <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/10 to-secondary flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-3">
                        <Sparkles className="w-8 h-8 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">Building the Future</p>
                      <p className="text-xs font-mono text-muted-foreground/70 mt-1">v0.0.x Development</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Announcements */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Announcements</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {announcements.map((item, i) => (
                <div key={i} className="glass-card p-6 fluent-hover">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded-full bg-secondary text-xs">{item.type}</span>
                        <span className="text-xs text-muted-foreground">{item.date}</span>
                      </div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Updates */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4">Development Updates</h2>
            <p className="text-center text-muted-foreground mb-12">
              What we're currently working on
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {devUpdates.map((update, i) => (
                <div key={i} className="glass-card p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Code2 className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="font-semibold">{update.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{update.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Milestones */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4">Upcoming Milestones</h2>
            <p className="text-center text-muted-foreground mb-12">
              Our development roadmap and targets
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingMilestones.map((milestone, i) => (
                <div key={i} className="glass-card p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm text-primary font-medium">{milestone.timeline}</span>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${
                      milestone.status === "In Progress" 
                        ? "bg-green-500/10 text-green-500" 
                        : "bg-secondary text-muted-foreground"
                    }`}>
                      {milestone.status}
                    </span>
                  </div>
                  <h3 className="font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card p-8 lg:p-12 text-center">
              <Target className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                GamerOS is a community-driven project. Whether you're a developer, designer, writer, 
                or just enthusiastic about operating systems, there's a place for you in our community.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg">
                  <Users className="w-5 h-5 mr-2" />
                  Join Community
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/about">
                    Learn More
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

export default News;
