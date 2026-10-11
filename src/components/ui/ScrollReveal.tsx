import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const ScrollReveal = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up" 
}: ScrollRevealProps) => {
  const reducedMotion = useReducedMotion();
  const directionOffset = {
    up: { y: 12, x: 0 },
    down: { y: -12, x: 0 },
    left: { y: 0, x: 12 },
    right: { y: 0, x: -12 },
  };

  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : {
        opacity: 0, 
        ...directionOffset[direction]
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: reducedMotion ? 0 : 0.25,
        delay: reducedMotion ? 0 : Math.min(delay, 0.2),
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
