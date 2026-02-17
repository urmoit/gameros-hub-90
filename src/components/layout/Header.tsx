import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Coffee, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  
  { name: "News", path: "/news" },
  { name: "Download", path: "/download" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main Navigation */}
      <motion.div 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div 
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center relative overflow-hidden"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-purple-600/0 group-hover:from-cyan-400/30 group-hover:to-purple-600/30 transition-all duration-300" />
                <Gamepad2 className="w-5 h-5 text-white relative z-10" />
              </motion.div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none text-gaming">GamerOS</span>
                <span className="text-[10px] text-muted-foreground leading-none mt-0.5">Gaming Optimized</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === item.path
                      ? "text-cyan-400"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-cyan-400/10 rounded-lg"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeNavBorder"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400"
                      style={{ boxShadow: '0 0 10px hsl(180 100% 50%)' }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://buymeacoffee.com/urmoit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-amber-400 hover:bg-amber-400/10 transition-colors"
              >
                <Coffee className="w-4 h-4" />
                <span className="hidden lg:inline">Support</span>
              </a>
              <ThemeToggle />
              <Button 
                asChild 
                className="btn-neon border-0 text-foreground font-semibold"
              >
                <Link to="/download">
                  <span className="relative z-10">Download</span>
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href="https://buymeacoffee.com/urmoit"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-amber-400 hover:bg-amber-400/10 transition-colors"
              >
                <Coffee className="w-5 h-5" />
              </a>
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                {isOpen ? <X size={24} className="text-cyan-400" /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.nav 
                className="md:hidden py-4 border-t border-white/5"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-col gap-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                          location.pathname === item.path
                            ? "bg-cyan-400/10 text-cyan-400"
                            : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                        }`}
                      >
                        {item.name}
                        {location.pathname === item.path && (
                          <span className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400" style={{ boxShadow: '0 0 8px hsl(180 100% 50%)' }} />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.a
                    href="https://buymeacoffee.com/urmoit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium text-amber-400 hover:bg-amber-400/10 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.05 }}
                  >
                    <Coffee className="w-4 h-4" />
                    Support the Developer
                  </motion.a>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (navItems.length + 1) * 0.05 }}
                  >
                    <Button asChild className="btn-neon border-0 w-full mt-2">
                      <Link to="/download" onClick={() => setIsOpen(false)}>
                        <span className="relative z-10">Download Now</span>
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;

