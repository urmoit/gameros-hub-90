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
  Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqCategories = [
  {
    title: "General",
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
    questions: [
      {
        q: "When will GamerOS be released?",
        a: "We don't have a fixed release date yet. Development is ongoing, and we're focused on building a solid foundation rather than rushing to release. Follow our News page and join our community to stay updated on progress."
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
    title: "Contributing",
    questions: [
      {
        q: "How can I contribute to GamerOS?",
        a: "There are many ways to contribute! You can help with kernel development, UI design, documentation, testing, or community support. Visit our GitHub repository to get started, or join our Discord community to connect with other contributors."
      },
      {
        q: "Do I need experience to contribute?",
        a: "No! We welcome contributors of all skill levels. Whether you're an experienced kernel developer or just getting started with programming, there's a place for you. Documentation, testing, and community support are great ways to contribute without deep technical knowledge."
      },
      {
        q: "Is there a code of conduct?",
        a: "Yes, we maintain a welcoming and inclusive community. We expect all contributors to treat each other with respect and follow our community guidelines. Details are available in our GitHub repository."
      },
      {
        q: "How do I report bugs or suggest features?",
        a: "You can report bugs and suggest features through our GitHub issues. Please check existing issues first to avoid duplicates, and provide as much detail as possible when creating new ones."
      },
    ]
  },
  {
    title: "Technical",
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

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="glass-card overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left hover:bg-secondary/30 transition-colors"
      >
        <span className="font-medium pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
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
            <div className="px-6 pb-6 text-muted-foreground">
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
          {/* Hero */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <HelpCircle className="w-4 h-4" />
                  Help Center
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                  Frequently Asked Questions
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Find answers to common questions about GamerOS, development, and how to get involved.
                </p>
              </ScrollReveal>
            </div>
          </section>

          {/* FAQ Categories */}
          {faqCategories.map((category, catIndex) => (
            <section key={catIndex} className={`py-12 ${catIndex % 2 === 1 ? 'bg-secondary/30' : ''}`}>
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                  <h2 className="text-2xl font-bold mb-8">{category.title}</h2>
                </ScrollReveal>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <FAQItem key={faqIndex} question={faq.q} answer={faq.a} />
                  ))}
                </div>
              </div>
            </section>
          ))}

          {/* Contact Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ScrollReveal>
                <div className="glass-card p-8 lg:p-12 text-center">
                  <MessageCircle className="w-12 h-12 text-primary mx-auto mb-6" />
                  <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                    Can't find what you're looking for? Join our community or reach out directly. 
                    We're happy to help!
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" disabled className="opacity-60">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Discord Coming Soon
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="https://github.com/urmoit/GamerOS" target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5 mr-2" />
                        GitHub Discussions
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link to="/about">
                        <Mail className="w-5 h-5 mr-2" />
                        Contact Us
                      </Link>
                    </Button>
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
