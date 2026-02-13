import { Link } from "react-router-dom";
import { Github, Coffee, FileText, Gamepad2, Heart, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Roadmap", path: "/roadmap" },
      { name: "News", path: "/news" },
    ],
    resources: [
      { name: "Download", path: "/download" },
      { name: "FAQ", path: "/faq" },
      { name: "Bug Tracking", path: "/bug-tracking" },
      { name: "Documentation", href: "https://github.com/urmoit/GamerOS" },
      { name: "Website Changelog", path: "/changelog", icon: FileText },
    ],
    social: [
      { name: "GitHub", href: "https://github.com/urmoit/GamerOS", icon: Github },
      { name: "Twitter", href: "#", icon: Twitter, comingSoon: true },
    ],
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient border top */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-purple-600/0 group-hover:from-cyan-400/30 group-hover:to-purple-600/30 transition-all duration-300" />
                <Gamepad2 className="w-6 h-6 text-white relative z-10" />
              </div>
              <div>
                <span className="font-bold text-xl text-gaming">GamerOS</span>
                <p className="text-xs text-muted-foreground">Next-Gen Gaming OS</p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              A revolutionary operating system designed for gamers. 
              Run Windows, Linux, and Android apps seamlessly on one platform.
            </p>
            <a
              href="https://buymeacoffee.com/urmoit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-amber-400 text-sm font-medium hover:from-amber-500/30 hover:to-orange-500/30 transition-all duration-300"
            >
              <Coffee className="w-4 h-4" />
              Support the Developer
            </a>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-6 text-foreground flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" style={{ boxShadow: '0 0 8px hsl(180 100% 50%)' }} />
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-cyan-400 group-hover:w-3 transition-all duration-200" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-6 text-foreground flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" style={{ boxShadow: '0 0 8px hsl(280 100% 60%)' }} />
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((item) => (
                <li key={item.name}>
                  {'href' in item ? (
                    <a 
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-purple-400 transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-purple-400 group-hover:w-3 transition-all duration-200" />
                      {'icon' in item && item.icon && <item.icon className="w-3.5 h-3.5" />}
                      {item.name}
                    </a>
                  ) : (
                    <Link 
                      to={item.path}
                      className="text-sm text-muted-foreground hover:text-purple-400 transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-purple-400 group-hover:w-3 transition-all duration-200" />
                      {'icon' in item && item.icon && <item.icon className="w-3.5 h-3.5" />}
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Community */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-semibold mb-6 text-foreground flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400" style={{ boxShadow: '0 0 8px hsl(320 100% 60%)' }} />
              Community
            </h4>
            <div className="flex gap-3 mb-6">
              {footerLinks.social.map((item) => (
                <a
                  key={item.name}
                  href={item.comingSoon ? undefined : item.href}
                  target={item.comingSoon ? undefined : "_blank"}
                  rel={item.comingSoon ? undefined : "noopener noreferrer"}
                  className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    item.comingSoon 
                      ? 'bg-white/5 text-muted-foreground cursor-not-allowed' 
                      : 'bg-white/5 text-muted-foreground hover:bg-cyan-400/20 hover:text-cyan-400 hover:scale-110'
                  }`}
                  title={item.comingSoon ? `${item.name} coming soon` : item.name}
                >
                  <item.icon size={20} />
                </a>
              ))}
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-400/10 to-purple-600/10 border border-white/5">
              <p className="text-xs text-muted-foreground mb-2">Join the development</p>
              <p className="text-sm font-medium text-foreground">We're looking for contributors!</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div 
          className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} GamerOS. Built with 
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" /> 
            by a solo developer
          </p>
          <div className="flex items-center gap-6">
            <Link to="/faq" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </Link>
            <Link to="/changelog" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Changelog
            </Link>
            <span className="text-xs text-cyan-400/60 font-mono">v1.6.1</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
