import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/ui/PageTransition";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { 
  HelpCircle, 
  ChevronDown,
  MessageCircle,
  Github,
  Mail,
  Gamepad2,
  Zap,
  Cpu
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqCategories = [
  {
    title: "General",
    icon: HelpCircle,
    color: "cyan",
    questions: [
      {
        q: "What is GamerOS?",
        a: "GamerOS is a modern hobby operating system inspired by Windows 11's design, built from scratch to run Windows, Linux, and Android applications seamlessly on a single platform. It's an ambitious open-source project aimed at creating a unified computing experience."
      },
      {
        q: "Is GamerOS ready for daily use?",
        a: "Not yet. GamerOS is currently in early development. We're building the foundational components including the kernel, graphics framework, and compatibility layers. We recommend following our progress and joining the community to be notified when the first public beta becomes available."
      },
      {
        q: "What platforms does GamerOS support?",
        a: "GamerOS is designed for x86_64 architecture (64-bit Intel and AMD processors). Once released, it will be available for testing in virtual machines (VirtualBox, VMware, QEMU, Hyper-V) and eventually on real hardware."
      },
      {
        q: "Is GamerOS free?",
        a: "Yes! GamerOS is completely free and open source under the MIT license. You can use, modify, and distribute it freely. If you'd like to support the solo developer behind GamerOS, you can buy me a coffee at buymeacoffee.com/urmoit - your support helps keep the project going!"
      },
    ]
  },
  {
    title: "Development",
    icon: Zap,
    color: "purple",
    questions: [
      {
        q: "When will GamerOS be released?",
        a: "The latest alpha release is out: 00m2 (Build 1.520), published on October 10, 2026. You can download it from the Download page and follow updates in the GamerOS changelog."
      },
      {
        q: "What programming languages is GamerOS built with?",
        a: "The technical stack is still being finalized, but we're using a combination of low-level languages suitable for OS development. More details will be announced as development progresses."
      },
      {
        q: "How can I track development progress?",
        a: "You can follow our development progress through the Roadmap page, News & Updates section, and our GitHub repository. We regularly post updates about milestones and achievements."
      },
      {
        q: "What are the system requirements?",
        a: "System requirements are still being determined as we develop the OS. Once we have a clearer picture of performance characteristics, we'll publish minimum and recommended specifications."
      },
    ]
  },
  {
    title: "Technical",
    icon: Cpu,
    color: "amber",
    questions: [
      {
        q: "How does Windows app compatibility work?",
        a: "We're developing a compatibility layer that translates Windows API calls to native GamerOS equivalents, similar in concept to Wine on Linux. This allows Windows applications to run without modification. This feature is still in development."
      },
      {
        q: "How does Linux binary support work?",
        a: "GamerOS will include a Linux compatibility layer that supports ELF executables and translates Linux syscalls. This enables running native Linux applications alongside Windows and Android apps."
      },
      {
        q: "How does Android app support work?",
        a: "We're building an Android runtime environment that can execute APK files. This involves implementing necessary Android framework components and bridging them to GamerOS's native systems."
      },
      {
        q: "Will GamerOS support gaming?",
        a: "Gaming support is a long-term goal. We plan to implement DirectX and Vulkan graphics APIs, which are essential for running modern games. However, this is a complex undertaking that will come after core OS functionality is stable."
      },
    ]
  },
];

const getCategoryStyles = (color: string) => {
  const styles = {
    cyan: {
      badge: "bg-muted text-primary border-border shadow-none",
      icon: "text-primary",
      glow: "shadow-none",
      border: "group-hover:border-border",
      line: "bg-muted  to-transparent",
    },
    purple: {
      badge: "bg-muted text-primary border-border shadow-none",
      icon: "text-primary",
      glow: "shadow-none",
      border: "group-hover:border-border",
      line: "bg-muted  to-transparent",
    },
    pink: {
      badge: "bg-muted text-primary border-border shadow-none",
      icon: "text-primary",
      glow: "shadow-none",
      border: "group-hover:border-border",
      line: "bg-muted  to-transparent",
    },
    amber: {
      badge: "bg-warning/10 text-warning border-border shadow-none",
      icon: "text-warning",
      glow: "shadow-none",
      border: "group-hover:border-border",
      line: "bg-muted  to-transparent",
    },
  };
  return styles[color as keyof typeof styles] || styles.cyan;
};

const FAQItem = ({ question, answer, color }: { question: string; answer: string; color: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const styles = getCategoryStyles(color);

  return (
    <motion.div 
      className={`glass-card glass-card-hover overflow-hidden group transition-all duration-300 ${styles.glow} ${styles.border}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left relative overflow-hidden"
      >
        {/* Hover glow effect */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          color === "cyan" ? "bg-muted" :
          color === "purple" ? "bg-muted" :
          color === "pink" ? "bg-muted" :
          "bg-warning/10"
        }`} />
        
        <span className="font-medium pr-4 relative z-10 text-foreground group-hover:text-foreground transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className={`flex-shrink-0 relative z-10 ${styles.icon}`}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Gradient line */}
            <div className={`h-[1px] w-full ${styles.line} opacity-50`} />
            <div className="px-6 py-4 text-muted-foreground bg-muted">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageTransition>
        <main className="pt-24 pb-16">
          {/* Hero Section with Animated Background */}
          <section className="relative py-12 overflow-hidden">
            {/* Animated background grid */}
            <div className="absolute inset-0 grid-pattern opacity-30" />
            
            {/* Animated gradient orbs */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute w-[600px] h-[600px] rounded-full opacity-20 hidden"
                
                animate={{
                  x: ["-20%", "10%", "-20%"],
                  y: ["-20%", "10%", "-20%"],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute w-[500px] h-[500px] rounded-full opacity-15 hidden"
                style={{ right: "-10%", top: "20%" }}
                animate={{
                  x: ["0%", "-15%", "0%"],
                  y: ["0%", "15%", "0%"],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <ScrollReveal>
                <motion.div 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-primary text-sm font-medium mb-6 border border-border"
                  whileHover={{ scale: 1.05 }}
                  
                >
                  <Gamepad2 className="w-4 h-4" />
                  Help Center
                </motion.div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="text-4xl sm:text-5xl lg:text-4xl font-bold mb-6">
                  <span className="text-gaming">Frequently Asked</span>
                  <br />
                  <span className="text-foreground">Questions</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Find answers to common questions about GamerOS, development, and how to get involved in our gaming revolution.
                </p>
              </ScrollReveal>
            </div>
          </section>

          {/* FAQ Categories */}
          {faqCategories.map((category, catIndex) => {
            const styles = getCategoryStyles(category.color);
            const Icon = category.icon;
            
            return (
              <section key={catIndex} className="py-12 relative">
                {/* Subtle gradient background for alternating sections */}
                <div className={`absolute inset-0 ${catIndex % 2 === 1 ? 'bg-muted  to-transparent' : ''}`} />
                
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                  <ScrollReveal>
                    <div className="flex items-center gap-3 mb-8">
                      <div className={`p-2 rounded-lg ${styles.badge}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
                      <div className={`flex-1 h-[1px] ${styles.line} opacity-30 ml-4`} />
                    </div>
                  </ScrollReveal>
                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <FAQItem 
                        key={faqIndex} 
                        question={faq.q} 
                        answer={faq.a} 
                        color={category.color}
                      />
                    ))}
                  </div>
                </div>
              </section>
            );
          })}

          {/* Gaming-style CTA Section */}
          <section className="py-12 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-muted  via-transparent " />
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-muted from-transparent  to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <ScrollReveal>
                <div className="glass-card p-5 sm:p-6 lg:p-5 sm:p-6 text-center relative overflow-hidden">
                  {/* Animated border glow */}
                  <motion.div
                    className="absolute inset-0 opacity-50 bg-muted"
                    
                    animate={{
                      backgroundPosition: ["200% 0", "-200% 0"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div
                      className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted   flex items-center justify-center"
                      
                      animate={{
                        boxShadow: [
                          "0 0 40px hsl(180 100% 50% / 40%)",
                          "0 0 60px hsl(280 100% 60% / 40%)",
                          "0 0 40px hsl(180 100% 50% / 40%)",
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <MessageCircle className="w-10 h-10 text-foreground" />
                    </motion.div>
                    
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                      <span className="text-gaming-alt">Still Have Questions?</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                      Can't find what you're looking for? Join our community or reach out directly. 
                      We're happy to help you on your GamerOS journey!
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <Button 
                        size="lg" 
                        disabled 
                        className="opacity-60 border-border text-foreground"
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Discord Coming Soon
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline" 
                        asChild
                        className="border-border hover:bg-muted hover:border-border text-foreground"
                      >
                        <a href="https://github.com/urmoit/GamerOS" target="_blank" rel="noopener noreferrer">
                          <Github className="w-5 h-5 mr-2" />
                          GitHub Discussions
                        </a>
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline" 
                        asChild
                        className="border-border hover:bg-muted hover:border-border text-foreground"
                      >
                        <Link to="/about">
                          <Mail className="w-5 h-5 mr-2" />
                          Contact Us
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
};

export default FAQ;
