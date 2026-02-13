import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Home, Gamepad2, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center relative overflow-hidden pt-24">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-600/10 to-transparent blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-cyan-400/10 to-transparent blur-3xl" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
        </div>

        <div className="relative z-10 text-center px-4">
          {/* 404 Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-3xl bg-gradient-to-br from-cyan-400/20 to-purple-600/20 border border-white/10 flex items-center justify-center relative">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              >
                <Gamepad2 className="w-16 h-16 text-cyan-400" />
              </motion.div>
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">!</span>
              </div>
            </div>
          </motion.div>

          {/* 404 Text */}
          <motion.h1 
            className="text-8xl sm:text-9xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-gaming">404</span>
          </motion.h1>
          
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold mb-4 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Page Not Found
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-md mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Looks like you've ventured into uncharted territory. 
            The page you're looking for doesn't exist in this dimension.
          </motion.p>

          {/* Action buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button 
              asChild
              size="lg"
              className="btn-neon min-w-[180px] h-12 text-base font-semibold border-0"
            >
              <Link to="/">
                <Home className="w-5 h-5 mr-2" />
                <span className="relative z-10">Return Home</span>
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="min-w-[180px] h-12 text-base font-semibold border-2 border-white/20 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300"
            >
              <Link to="/news">
                <Search className="w-5 h-5 mr-2" />
                Browse News
              </Link>
            </Button>
          </motion.div>

          {/* Path display */}
          <motion.div 
            className="mt-12 p-4 rounded-xl bg-white/5 border border-white/10 inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Requested Path</span>
            <code className="block text-sm text-cyan-400 font-mono mt-1">{location.pathname}</code>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
