import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && systemPrefersDark);
    setIsDark(shouldBeDark);
    
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    localStorage.setItem("theme", newIsDark ? "dark" : "light");
    
    if (newIsDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors overflow-hidden group"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      whileTap={{ scale: 0.9 }}
    >
      {/* Background glow effect */}
      <motion.div
        className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          isDark 
            ? "bg-gradient-to-br from-yellow-500/20 via-orange-500/10 to-transparent" 
            : "bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent"
        }`}
      />
      
      {/* Icon container */}
      <div className="relative w-5 h-5">
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="sun"
              initial={{ rotate: -90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0, opacity: 0 }}
              transition={{ 
                duration: 0.3, 
                ease: [0.4, 0, 0.2, 1]
              }}
              className="absolute inset-0"
            >
              <Sun className="w-5 h-5 text-yellow-500" />
              
              {/* Sun rays animation */}
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-0.5 h-1 bg-yellow-400/60 rounded-full"
                    style={{
                      left: "50%",
                      top: "50%",
                      transformOrigin: "center",
                      transform: `rotate(${i * 45}deg) translateY(-12px) translateX(-50%)`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.02 }}
                  />
                ))}
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -90, scale: 0, opacity: 0 }}
              transition={{ 
                duration: 0.3, 
                ease: [0.4, 0, 0.2, 1]
              }}
              className="absolute inset-0"
            >
              <Moon className="w-5 h-5 text-indigo-400" />
              
              {/* Stars animation */}
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.15 }}
              >
                {[
                  { x: -8, y: -6, size: 2, delay: 0.2 },
                  { x: 8, y: -8, size: 1.5, delay: 0.25 },
                  { x: 10, y: 4, size: 1, delay: 0.3 },
                ].map((star, i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-indigo-300 rounded-full"
                    style={{
                      width: star.size,
                      height: star.size,
                      left: `calc(50% + ${star.x}px)`,
                      top: `calc(50% + ${star.y}px)`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1.5, 1],
                      opacity: [0, 1, 0.8],
                    }}
                    transition={{ 
                      duration: 0.4, 
                      delay: star.delay,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  );
};

export default ThemeToggle;
